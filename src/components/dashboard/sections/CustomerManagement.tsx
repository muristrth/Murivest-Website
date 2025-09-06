import React, { useState, useEffect } from 'react';
import { Users, CheckCircle, DollarSign, UserPlus, Download, FileText, CreditCard, TrendingUp } from 'lucide-react';
import { Customer } from '../types';
import DashboardModals from '../DashboardModals';
import { formatCurrency } from '../utils';

interface CustomerManagementProps {
  customers: Customer[];
}

const CustomerManagement: React.FC<CustomerManagementProps> = ({ customers }) => {
  // We'll broaden the type of the state to match the DashboardModals component's expectation.
  // This can be done by explicitly defining the state type.
  const [modals, setModals] = useState<{ [key: string]: boolean }>({ addCustomer: false });
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [customerInvoices, setCustomerInvoices] = useState<any[]>([]);
  const [customerPayments, setCustomerPayments] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch customer accounting data
  const fetchCustomerData = async (customerId: string) => {
    setLoading(true);
    try {
      // Fetch invoices
      const invoicesResponse = await fetch(`/api/accounting/receivables?customerId=${customerId}`);
      const invoicesData = await invoicesResponse.json();
      setCustomerInvoices(invoicesData.invoices || []);

      // Fetch payments
      const paymentsResponse = await fetch(`/api/accounting/payments?customerId=${customerId}`);
      const paymentsData = await paymentsResponse.json();
      setCustomerPayments(paymentsData.payments || []);
    } catch (error) {
      console.error('Error fetching customer data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
    fetchCustomerData(customer.id);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Customer Management</h2>
          <p className="text-gray-600 mt-1">Comprehensive customer database and portfolio management</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            // We use a type assertion here to tell TypeScript we are adding a valid key
            onClick={() => setModals(prev => ({ ...prev, addCustomer: true }))}
            className="flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <UserPlus className="h-5 w-5 mr-2" />
            Add Customer
          </button>
          <button className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl font-semibold transition-colors">
            <Download className="h-5 w-5 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Customer Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-lg mr-3">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Total Customers</h3>
              <p className="text-blue-600 text-2xl font-bold">{customers.length}</p>
            </div>
          </div>
          <div className="text-green-600 text-sm">+12 this month</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-lg mr-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Verified KYC</h3>
              <p className="text-green-600 text-2xl font-bold">
                {customers.filter(c => c.kycStatus === 'verified').length}
              </p>
            </div>
          </div>
          <div className="text-gray-500 text-sm">
                {customers.filter(c => c.kycStatus === 'pending').length} pending
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 p-3 rounded-lg mr-3">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Total Invested</h3>
              <p className="text-purple-600 text-2xl font-bold">
                {formatCurrency(customers.reduce((sum, c) => sum + c.totalInvestment, 0))}
              </p>
            </div>
          </div>
          <div className="text-gray-500 text-sm">Across all properties</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-orange-100 p-3 rounded-lg mr-3">
              <FileText className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Outstanding Invoices</h3>
              <p className="text-orange-600 text-2xl font-bold">
                {formatCurrency(1250000)}
              </p>
            </div>
          </div>
          <div className="text-gray-500 text-sm">Requires attention</div>
        </div>
      </div>

      {/* Customer Accounting Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Revenue by Customer</h3>
          <div className="space-y-3">
            {customers.slice(0, 5).map((customer, index) => (
              <div key={customer.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold text-sm">
                      {customer.fullName?.charAt(0) || 'C'}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{customer.fullName}</span>
                </div>
                <span className="text-sm font-bold text-gray-600">
                  {formatCurrency(customer.totalInvestment)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Payment Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Paid This Month</span>
              <span className="text-sm font-bold text-green-600">{formatCurrency(850000)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Overdue</span>
              <span className="text-sm font-bold text-red-600">{formatCurrency(125000)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Pending</span>
              <span className="text-sm font-bold text-orange-600">{formatCurrency(375000)}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Collection Rate</h3>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">87%</div>
              <p className="text-sm text-gray-600">Overall Collection Rate</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '87%' }}></div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-blue-600">15</div>
                <p className="text-xs text-gray-600">Days Avg</p>
              </div>
              <div>
                <div className="text-lg font-bold text-purple-600">92%</div>
                <p className="text-xs text-gray-600">On Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Details Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xl">
                      {selectedCustomer.fullName?.charAt(0) || 'C'}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedCustomer.fullName}</h2>
                    <p className="text-gray-600">{selectedCustomer.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCustomer(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <span className="text-2xl">&times;</span>
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Financial Summary */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900">Financial Summary</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-green-600">Total Paid</p>
                      <p className="text-2xl font-bold text-green-800">
                        {formatCurrency(selectedCustomer.totalInvestment * 0.8)}
                      </p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-sm text-orange-600">Outstanding</p>
                      <p className="text-2xl font-bold text-orange-800">
                        {formatCurrency(selectedCustomer.totalInvestment * 0.2)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recent Invoices */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900">Recent Invoices</h3>
                  <div className="space-y-2">
                    {customerInvoices.slice(0, 3).map((invoice: any) => (
                      <div key={invoice.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{invoice.invoiceNumber}</p>
                          <p className="text-sm text-gray-600">
                            {new Date(invoice.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">{formatCurrency(invoice.totalAmount)}</p>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            invoice.status === 'PAID' ? 'bg-green-100 text-green-800' :
                            invoice.status === 'OVERDUE' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {invoice.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 mt-6 pt-6 border-t border-gray-200">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  <FileText className="h-4 w-4 inline mr-2" />
                  Create Invoice
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  <CreditCard className="h-4 w-4 inline mr-2" />
                  Record Payment
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  <TrendingUp className="h-4 w-4 inline mr-2" />
                  View Statement
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <DashboardModals modals={modals} setModals={setModals} />
    </div>
  );
};

export default CustomerManagement;