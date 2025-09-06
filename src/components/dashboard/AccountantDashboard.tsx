'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import {
  DollarSign,
  TrendingUp,
  FileText,
  Calendar,
  Download,
  BarChart3,
  PieChart,
  CreditCard,
  Building,
  Users,
  AlertTriangle
} from 'lucide-react';

const AccountantDashboard = () => {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(false);

  // Mock data for demonstration
  const financialData = {
    totalRevenue: 500000,
    totalExpenses: 150000,
    netIncome: 350000,
    pendingPayments: 25000,
    overduePayments: 15000,
    properties: [
      {
        id: '1',
        name: 'Green Valley Apartments',
        monthlyRevenue: 150000,
        monthlyExpenses: 45000,
        netIncome: 105000
      },
      {
        id: '2',
        name: 'River View Complex',
        monthlyRevenue: 200000,
        monthlyExpenses: 60000,
        netIncome: 140000
      }
    ],
    transactions: [
      {
        id: '1',
        type: 'income',
        amount: 150000,
        description: 'Rent Payment - Green Valley',
        date: new Date().toISOString(),
        status: 'completed'
      },
      {
        id: '2',
        type: 'expense',
        amount: 25000,
        description: 'Maintenance - Plumbing',
        date: new Date(Date.now() - 86400000).toISOString(),
        status: 'completed'
      }
    ]
  };

  const menuItems = [
    { id: 'overview', label: 'Financial Overview', icon: BarChart3 },
    { id: 'revenue', label: 'Revenue Tracking', icon: DollarSign },
    { id: 'expenses', label: 'Expense Management', icon: CreditCard },
    { id: 'reports', label: 'Financial Reports', icon: FileText },
    { id: 'payments', label: 'Payment Processing', icon: TrendingUp }
  ];

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
      {/* Financial Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {formatCurrency(financialData.totalRevenue)}
          </h3>
          <p className="text-gray-600 text-sm">Total Revenue</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-red-100 p-3 rounded-lg">
              <CreditCard className="h-6 w-6 text-red-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {formatCurrency(financialData.totalExpenses)}
          </h3>
          <p className="text-gray-600 text-sm">Total Expenses</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {formatCurrency(financialData.netIncome)}
          </h3>
          <p className="text-gray-600 text-sm">Net Income</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {formatCurrency(financialData.overduePayments)}
          </h3>
          <p className="text-gray-600 text-sm">Overdue Payments</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Transactions</h3>
        <div className="space-y-4">
          {financialData.transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center">
                <div className={`p-2 rounded-lg mr-4 ${
                  transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <DollarSign className={`h-5 w-5 ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{transaction.description}</p>
                  <p className="text-gray-600 text-sm">
                    {new Date(transaction.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-bold ${
                  transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}
                </p>
                <p className="text-gray-500 text-sm capitalize">{transaction.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRevenue = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Revenue by Property</h3>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            Generate Report
          </button>
        </div>

        <div className="space-y-4">
          {financialData.properties.map((property) => (
            <div key={property.id} className="p-4 border border-gray-200 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900">{property.name}</h4>
                  <p className="text-gray-600 text-sm">Monthly Revenue Breakdown</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-600">
                    {formatCurrency(property.monthlyRevenue)}
                  </p>
                  <p className="text-gray-600 text-sm">Total Revenue</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-800 text-sm font-medium">Revenue</p>
                  <p className="text-green-900 font-bold">{formatCurrency(property.monthlyRevenue)}</p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <p className="text-red-800 text-sm font-medium">Expenses</p>
                  <p className="text-red-900 font-bold">{formatCurrency(property.monthlyExpenses)}</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-blue-800 text-sm font-medium">Net Income</p>
                  <p className="text-blue-900 font-bold">{formatCurrency(property.netIncome)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderExpenses = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Expense Management</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Monthly Expenses</h4>
              <p className="text-2xl font-bold text-red-600">{formatCurrency(financialData.totalExpenses)}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Expense Ratio</h4>
              <p className="text-2xl font-bold text-orange-600">
                {((financialData.totalExpenses / financialData.totalRevenue) * 100).toFixed(1)}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">Monthly Report</h3>
          <p className="text-gray-600 text-sm mb-4">Complete financial summary</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full">
            Generate Report
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <BarChart3 className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">Quarterly Analysis</h3>
          <p className="text-gray-600 text-sm mb-4">3-month performance review</p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full">
            Generate Report
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <PieChart className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">Tax Report</h3>
          <p className="text-gray-600 text-sm mb-4">Tax-ready financial data</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );

  const renderPayments = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Payment Processing</h3>
          <div className="flex space-x-2">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              Process Payments
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              Send Reminders
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3" />
              <div>
                <p className="font-medium text-yellow-800">Pending Payments</p>
                <p className="text-yellow-700 text-sm">{formatCurrency(financialData.pendingPayments)}</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-red-600 mr-3" />
              <div>
                <p className="font-medium text-red-800">Overdue Payments</p>
                <p className="text-red-700 text-sm">{formatCurrency(financialData.overduePayments)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'revenue': return renderRevenue();
      case 'expenses': return renderExpenses();
      case 'reports': return renderReports();
      case 'payments': return renderPayments();
      default: return renderOverview();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading accountant dashboard...</p>
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
              Accountant Dashboard
            </h1>
            <p className="text-gray-600 text-lg">
              Financial management and reporting
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              Welcome, {session?.user?.name}
            </span>
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
    </div>
  );
};

export default AccountantDashboard;