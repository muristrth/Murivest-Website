'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import {
  Users,
  UserPlus,
  Edit,
  Trash2,
  Shield,
  BarChart3,
  Settings,
  Bell,
  Activity,
  Building,
  DollarSign,
  TrendingUp,
  FileText,
  Calendar,
  Download,
  PieChart,
  CreditCard,
  Receipt,
  Calculator,
  Wallet,
  MessageSquare,
  Upload,
  Search,
  Filter,
  Plus,
  Eye,
  Mail,
  Phone,
  Briefcase,
  FileCheck,
  Receipt as ReceiptIcon,
  Target,
  AlertCircle,
  CheckCircle,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Package,
  ShoppingCart,
  FileSpreadsheet,
  LineChart,
  LogOut
} from 'lucide-react';
import { hasPermission } from '@/lib/permissions';
import { signOut } from 'next-auth/react';

interface BusinessStats {
  totalRevenue: number;
  totalExpenses: number;
  netIncome: number;
  outstandingInvoices: number;
  unpaidBills: number;
  bankBalance: number;
  cashFlow: number;
  totalCustomers: number;
  activeProjects: number;
  pendingPayments: number;
  overduePayments: number;
  totalDocuments: number;
  monthlyGrowth: number;
}

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: 'tenant' | 'landlord' | 'contractor' | 'supplier';
  balance: number;
  lastPayment: string;
  status: 'active' | 'inactive' | 'overdue';
}

interface Invoice {
  id: string;
  number: string;
  customerName: string;
  amount: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue';
  dueDate: string;
  createdAt: string;
}

const BusinessManagementDashboard = () => {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState('overview');
  const [businessStats, setBusinessStats] = useState<BusinessStats>({
    totalRevenue: 0,
    totalExpenses: 0,
    netIncome: 0,
    outstandingInvoices: 0,
    unpaidBills: 0,
    bankBalance: 0,
    cashFlow: 0,
    totalCustomers: 0,
    activeProjects: 0,
    pendingPayments: 0,
    overduePayments: 0,
    totalDocuments: 0,
    monthlyGrowth: 0
  });
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal states
  const [showCreateCustomerModal, setShowCreateCustomerModal] = useState(false);
  const [showCreateInvoiceModal, setShowCreateInvoiceModal] = useState(false);
  const [showRecordPaymentModal, setShowRecordPaymentModal] = useState(false);

  // Form states
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'tenant' as 'tenant' | 'landlord' | 'contractor' | 'supplier'
  });

  const [newInvoice, setNewInvoice] = useState({
    tenantId: '',
    propertyId: '',
    amount: '',
    description: '',
    dueDate: ''
  });

  const [newPayment, setNewPayment] = useState({
    leaseId: '',
    amount: '',
    status: 'PENDING' as 'PENDING' | 'PAID' | 'OVERDUE',
    dueDate: '',
    invoiceId: ''
  });

  const userRole = session?.user?.role as 'ADMIN' | 'LANDLORD' | 'OPERATIONS_MANAGER' | 'ACCOUNTANT' | 'SECRETARY' | undefined;

  // Comprehensive menu items for business management
  const getMenuItems = () => {
    const baseItems = [
      { id: 'overview', label: 'Business Overview', icon: BarChart3, roles: ['ADMIN', 'LANDLORD', 'OPERATIONS_MANAGER', 'ACCOUNTANT', 'SECRETARY'] },
      { id: 'customers', label: 'Customer Management', icon: Users, roles: ['ADMIN', 'ACCOUNTANT', 'SECRETARY'] },
      { id: 'invoicing', label: 'Invoicing & Payments', icon: Receipt, roles: ['ADMIN', 'ACCOUNTANT'] },
      { id: 'accounting', label: 'Accounting', icon: Calculator, roles: ['ADMIN', 'ACCOUNTANT'] },
      { id: 'documents', label: 'Documents & Receipts', icon: FileText, roles: ['ADMIN', 'SECRETARY', 'ACCOUNTANT'] },
      { id: 'reports', label: 'Business Reports', icon: LineChart, roles: ['ADMIN', 'ACCOUNTANT', 'OPERATIONS_MANAGER'] },
      { id: 'projects', label: 'Property Projects', icon: Building, roles: ['ADMIN', 'OPERATIONS_MANAGER'] },
      { id: 'settings', label: 'Business Settings', icon: Settings, roles: ['ADMIN'] }
    ];

    return baseItems.filter(item => userRole && item.roles.includes(userRole));
  };

  const menuItems = getMenuItems();

  const fetchBusinessData = async () => {
    try {
      // Fetch comprehensive business statistics
      const statsResponse = await fetch('/api/admin/business/stats');
      if (statsResponse.ok) {
        const statsData = await statsResponse.json();
        setBusinessStats(prev => ({ ...prev, ...statsData }));
      }

      // Fetch customers
      if (userRole && hasPermission(userRole, 'canManageUsers')) {
        const customersResponse = await fetch('/api/admin/business/customers');
        if (customersResponse.ok) {
          const customersData = await customersResponse.json();
          setCustomers(customersData);
        }
      }

      // Fetch recent invoices
      if (userRole && hasPermission(userRole, 'canViewFinancials')) {
        const invoicesResponse = await fetch('/api/admin/business/invoices?limit=10');
        if (invoicesResponse.ok) {
          const invoicesData = await invoicesResponse.json();
          setInvoices(invoicesData);
        }
      }

    } catch (error) {
      console.error('Error fetching business data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBusinessData();
  }, [userRole]);

  // Handler functions
  const handleCreateCustomer = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin/business/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCustomer),
      });

      if (response.ok) {
        const createdCustomer = await response.json();
        setCustomers(prev => [...prev, createdCustomer]);
        setShowCreateCustomerModal(false);
        setNewCustomer({ name: '', email: '', phone: '', type: 'tenant' });
        alert('Customer created successfully!');
      } else {
        const error = await response.json();
        alert(error.error || 'Failed to create customer');
      }
    } catch (error) {
      console.error('Error creating customer:', error);
      alert('Failed to create customer');
    }
  };

  const handleCreateInvoice = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin/business/invoices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newInvoice,
          amount: parseFloat(newInvoice.amount)
        }),
      });

      if (response.ok) {
        const createdInvoice = await response.json();
        setInvoices(prev => [createdInvoice, ...prev]);
        setShowCreateInvoiceModal(false);
        setNewInvoice({ tenantId: '', propertyId: '', amount: '', description: '', dueDate: '' });
        alert('Invoice created successfully!');
      } else {
        const error = await response.json();
        alert(error.error || 'Failed to create invoice');
      }
    } catch (error) {
      console.error('Error creating invoice:', error);
      alert('Failed to create invoice');
    }
  };

  const handleRecordPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin/business/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newPayment,
          amount: parseFloat(newPayment.amount)
        }),
      });

      if (response.ok) {
        setShowRecordPaymentModal(false);
        setNewPayment({ leaseId: '', amount: '', status: 'PENDING', dueDate: '', invoiceId: '' });
        alert('Payment recorded successfully!');
        // Refresh data
        fetchBusinessData();
      } else {
        const error = await response.json();
        alert(error.error || 'Failed to record payment');
      }
    } catch (error) {
      console.error('Error recording payment:', error);
      alert('Failed to record payment');
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Business Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div className="flex items-center text-green-600">
              <ArrowUpRight className="h-4 w-4" />
              <span className="text-sm font-medium">+{businessStats.monthlyGrowth}%</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {formatCurrency(businessStats.totalRevenue)}
          </h3>
          <p className="text-gray-600 text-sm">Total Revenue</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {formatCurrency(businessStats.netIncome)}
          </h3>
          <p className="text-gray-600 text-sm">Net Income</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {businessStats.totalCustomers}
          </h3>
          <p className="text-gray-600 text-sm">Total Customers</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Wallet className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {formatCurrency(businessStats.bankBalance)}
          </h3>
          <p className="text-gray-600 text-sm">Bank Balance</p>
        </div>
      </div>

      {/* Payment Status Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Payment Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
              <div className="flex items-center">
                <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <p className="font-semibold text-green-800">Paid Invoices</p>
                  <p className="text-green-600 text-sm">On time payments</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-green-600">
                {formatCurrency(businessStats.totalRevenue - businessStats.outstandingInvoices)}
              </span>
            </div>

            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-yellow-600 mr-3" />
                <div>
                  <p className="font-semibold text-yellow-800">Pending Payments</p>
                  <p className="text-yellow-600 text-sm">Awaiting payment</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-yellow-600">
                {formatCurrency(businessStats.pendingPayments)}
              </span>
            </div>

            <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl">
              <div className="flex items-center">
                <AlertCircle className="h-8 w-8 text-red-600 mr-3" />
                <div>
                  <p className="font-semibold text-red-800">Overdue Payments</p>
                  <p className="text-red-600 text-sm">Require attention</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-red-600">
                {formatCurrency(businessStats.overduePayments)}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Invoices</h3>
          <div className="space-y-4">
            {invoices.slice(0, 5).map((invoice) => (
              <div key={invoice.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg mr-4 ${
                    invoice.status === 'paid' ? 'bg-green-100' :
                    invoice.status === 'overdue' ? 'bg-red-100' : 'bg-yellow-100'
                  }`}>
                    <FileCheck className={`h-5 w-5 ${
                      invoice.status === 'paid' ? 'text-green-600' :
                      invoice.status === 'overdue' ? 'text-red-600' : 'text-yellow-600'
                    }`} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{invoice.number}</p>
                    <p className="text-gray-600 text-sm">{invoice.customerName}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{formatCurrency(invoice.amount)}</p>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    invoice.status === 'paid' ? 'bg-green-100 text-green-800' :
                    invoice.status === 'overdue' ? 'bg-red-100 text-red-800' :
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

      {/* Customer Overview */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Top Customers</h3>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            View All Customers
          </button>
        </div>
        <div className="space-y-4">
          {customers.slice(0, 5).map((customer) => (
            <div key={customer.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
              <div className="flex items-center">
                <div className="p-2 rounded-lg mr-4 bg-blue-100">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{customer.name}</p>
                  <p className="text-gray-600 text-sm">{customer.email}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">{formatCurrency(customer.balance)}</p>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  customer.status === 'active' ? 'bg-green-100 text-green-800' :
                  customer.status === 'overdue' ? 'bg-red-100 text-red-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {customer.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCustomers = () => {
    if (!userRole || !hasPermission(userRole, 'canManageUsers')) {
      return <div className="text-center py-8">Access denied</div>;
    }

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Customer Management</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => setShowCreateCustomerModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                <UserPlus className="h-4 w-4 inline mr-2" />
                Add Customer
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                <Upload className="h-4 w-4 inline mr-2" />
                Import
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {customers.map((customer) => (
              <div key={customer.id} className="p-4 border border-gray-200 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg mr-4 bg-blue-100">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{customer.name}</p>
                      <p className="text-gray-600 text-sm flex items-center">
                        <Mail className="h-4 w-4 mr-1" /> {customer.email}
                      </p>
                      <p className="text-gray-600 text-sm flex items-center">
                        <Phone className="h-4 w-4 mr-1" /> {customer.phone}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{formatCurrency(customer.balance)}</p>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      customer.type === 'tenant' ? 'bg-blue-100 text-blue-800' :
                      customer.type === 'landlord' ? 'bg-green-100 text-green-800' :
                      customer.type === 'contractor' ? 'bg-orange-100 text-orange-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {customer.type}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">
                      <Mail className="h-4 w-4 inline mr-1" />
                      Email
                    </button>
                    <button className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">
                      <MessageSquare className="h-4 w-4 inline mr-1" />
                      SMS
                    </button>
                    <button className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm font-semibold">
                      <Eye className="h-4 w-4 inline mr-1" />
                      View Details
                    </button>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm font-semibold">
                      <Edit className="h-4 w-4 inline mr-1" />
                      Edit
                    </button>
                    <button className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-semibold">
                      <Trash2 className="h-4 w-4 inline mr-1" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderInvoicing = () => {
    if (!userRole || !hasPermission(userRole, 'canViewFinancials')) {
      return <div className="text-center py-8">Access denied</div>;
    }

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Plus className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Create Invoice</h3>
            <p className="text-gray-600 text-sm mb-4">Generate new customer invoices</p>
            <button
              onClick={() => setShowCreateInvoiceModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full"
            >
              New Invoice
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Receipt className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Record Payment</h3>
            <p className="text-gray-600 text-sm mb-4">Record customer payments</p>
            <button
              onClick={() => setShowRecordPaymentModal(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full"
            >
              Record Payment
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <FileSpreadsheet className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Invoice Templates</h3>
            <p className="text-gray-600 text-sm mb-4">Manage invoice templates</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full">
              Manage Templates
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Invoices</h3>
          <div className="space-y-4">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg mr-4 ${
                    invoice.status === 'paid' ? 'bg-green-100' :
                    invoice.status === 'overdue' ? 'bg-red-100' : 'bg-yellow-100'
                  }`}>
                    <FileCheck className={`h-5 w-5 ${
                      invoice.status === 'paid' ? 'text-green-600' :
                      invoice.status === 'overdue' ? 'text-red-600' : 'text-yellow-600'
                    }`} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{invoice.number}</p>
                    <p className="text-gray-600 text-sm">{invoice.customerName}</p>
                    <p className="text-gray-500 text-xs">Due: {new Date(invoice.dueDate).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{formatCurrency(invoice.amount)}</p>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    invoice.status === 'paid' ? 'bg-green-100 text-green-800' :
                    invoice.status === 'overdue' ? 'bg-red-100 text-red-800' :
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
    );
  };

  const renderAccounting = () => {
    if (!userRole || !hasPermission(userRole, 'canViewFinancials')) {
      return <div className="text-center py-8">Access denied</div>;
    }

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Wallet className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Bank Reconciliation</h3>
            <p className="text-gray-600 text-sm mb-4">Manage bank accounts and reconcile transactions</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full">
              Open Banking
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Calculator className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">General Ledger</h3>
            <p className="text-gray-600 text-sm mb-4">View and manage journal entries</p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full">
              Open Ledger
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <PieChart className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Chart of Accounts</h3>
            <p className="text-gray-600 text-sm mb-4">Manage accounting categories</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full">
              Manage Accounts
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderDocuments = () => {
    if (!userRole || !hasPermission(userRole, 'canUploadDocuments')) {
      return <div className="text-center py-8">Access denied</div>;
    }

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Document Management</h3>
            <div className="flex space-x-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                <Upload className="h-4 w-4 inline mr-2" />
                Upload Document
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                <Plus className="h-4 w-4 inline mr-2" />
                Generate Receipt
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center mb-3">
                <FileText className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <h4 className="font-semibold text-gray-900">Invoices</h4>
                  <p className="text-sm text-gray-600">Generated invoices</p>
                </div>
              </div>
              <button className="w-full bg-blue-100 text-blue-800 px-3 py-2 rounded text-sm font-semibold">
                View Invoices
              </button>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center mb-3">
                <ReceiptIcon className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <h4 className="font-semibold text-gray-900">Receipts</h4>
                  <p className="text-sm text-gray-600">Payment receipts</p>
                </div>
              </div>
              <button className="w-full bg-green-100 text-green-800 px-3 py-2 rounded text-sm font-semibold">
                View Receipts
              </button>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center mb-3">
                <FileCheck className="h-8 w-8 text-purple-600 mr-3" />
                <div>
                  <h4 className="font-semibold text-gray-900">Contracts</h4>
                  <p className="text-sm text-gray-600">Lease agreements</p>
                </div>
              </div>
              <button className="w-full bg-purple-100 text-purple-800 px-3 py-2 rounded text-sm font-semibold">
                View Contracts
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderReports = () => {
    if (!userRole || !hasPermission(userRole, 'canViewReports')) {
      return <div className="text-center py-8">Access denied</div>;
    }

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Profit & Loss</h3>
            <p className="text-gray-600 text-sm mb-4">Monthly financial performance</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full">
              Generate Report
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Cash Flow</h3>
            <p className="text-gray-600 text-sm mb-4">Cash flow analysis and projections</p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full">
              Generate Report
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Report</h3>
            <p className="text-gray-600 text-sm mb-4">Customer payment history and insights</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full">
              Generate Report
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderProjects = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Property Projects</h3>
        <div className="text-center py-8 text-gray-500">
          Property project management interface will be implemented here
        </div>
      </div>
    </div>
  );

  const renderSettings = () => {
    if (userRole !== 'ADMIN') {
      return <div className="text-center py-8">Access denied</div>;
    }

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Business Settings</h3>
          <div className="space-y-4">
            <div className="p-4 border border-gray-200 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Company Information</h4>
              <p className="text-gray-600 text-sm">Update business details and branding</p>
              <button className="mt-2 bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">
                Configure
              </button>
            </div>

            <div className="p-4 border border-gray-200 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Invoice Settings</h4>
              <p className="text-gray-600 text-sm">Customize invoice templates and numbering</p>
              <button className="mt-2 bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">
                Configure
              </button>
            </div>

            <div className="p-4 border border-gray-200 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Payment Integration</h4>
              <p className="text-gray-600 text-sm">Configure payment gateways and methods</p>
              <button className="mt-2 bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">
                Configure
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'customers': return renderCustomers();
      case 'invoicing': return renderInvoicing();
      case 'accounting': return renderAccounting();
      case 'documents': return renderDocuments();
      case 'reports': return renderReports();
      case 'projects': return renderProjects();
      case 'settings': return renderSettings();
      default: return renderOverview();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading business management dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Business Management
            </h1>
            <p className="text-gray-600 text-lg">
              Comprehensive business operations for {session?.user?.name || 'Murivest Realty'}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="h-6 w-6 text-gray-600" />
            <span className="text-sm text-gray-600">
              Welcome, {session?.user?.name} ({userRole})
            </span>
            <button
              onClick={() => signOut({ callbackUrl: '/login' })}
              className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-xl font-medium transition-all ${
                      activeTab === item.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Create Customer Modal */}
      {showCreateCustomerModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Create New Customer</h3>
            <form onSubmit={handleCreateCustomer} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={newCustomer.name}
                  onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={newCustomer.email}
                  onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  value={newCustomer.phone}
                  onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <select
                  value={newCustomer.type}
                  onChange={(e) => setNewCustomer({ ...newCustomer, type: e.target.value as typeof newCustomer.type })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="tenant">Tenant</option>
                  <option value="landlord">Landlord</option>
                  <option value="contractor">Contractor</option>
                  <option value="supplier">Supplier</option>
                </select>
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCreateCustomerModal(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Create Customer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Create Invoice Modal */}
      {showCreateInvoiceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Create New Invoice</h3>
            <form onSubmit={handleCreateInvoice} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount (KES)</label>
                <input
                  type="number"
                  value={newInvoice.amount}
                  onChange={(e) => setNewInvoice({ ...newInvoice, amount: e.target.value })}
                  required
                  min="0"
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={newInvoice.description}
                  onChange={(e) => setNewInvoice({ ...newInvoice, description: e.target.value })}
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                <input
                  type="date"
                  value={newInvoice.dueDate}
                  onChange={(e) => setNewInvoice({ ...newInvoice, dueDate: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCreateInvoiceModal(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Create Invoice
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Record Payment Modal */}
      {showRecordPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Record Payment</h3>
            <form onSubmit={handleRecordPayment} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount (KES)</label>
                <input
                  type="number"
                  value={newPayment.amount}
                  onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })}
                  required
                  min="0"
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={newPayment.status}
                  onChange={(e) => setNewPayment({ ...newPayment, status: e.target.value as typeof newPayment.status })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="PENDING">Pending</option>
                  <option value="PAID">Paid</option>
                  <option value="OVERDUE">Overdue</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Due Date (Optional)</label>
                <input
                  type="date"
                  value={newPayment.dueDate}
                  onChange={(e) => setNewPayment({ ...newPayment, dueDate: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowRecordPaymentModal(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Record Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessManagementDashboard;
