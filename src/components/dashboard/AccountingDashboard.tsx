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
  AlertTriangle,
  CheckCircle,
  Clock,
  Wallet,
  Receipt,
  Calculator,
  Banknote,
  ArrowUpDown,
  Settings,
  Plus,
  Search,
  Filter
} from 'lucide-react';

const AccountingDashboard = () => {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);

  // Mock data for demonstration
  const [accountingData, setAccountingData] = useState({
    totalRevenue: 25000000,
    totalExpenses: 18500000,
    netIncome: 6500000,
    outstandingInvoices: 1250000,
    unpaidBills: 890000,
    bankBalance: 15200000,
    cashFlow: 3200000,
    accounts: [
      { id: '1', name: 'KCB Main Account', balance: 8500000, lastReconciled: '2025-09-01' },
      { id: '2', name: 'Equity Bank Operations', balance: 6700000, lastReconciled: '2025-09-02' }
    ],
    recentTransactions: [
      { id: '1', date: '2025-09-05', description: 'Rent Payment - Unit 101', amount: 150000, type: 'income' },
      { id: '2', date: '2025-09-04', description: 'Office Supplies', amount: -25000, type: 'expense' },
      { id: '3', date: '2025-09-03', description: 'Property Tax Payment', amount: -500000, type: 'expense' }
    ]
  });

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'banking', label: 'Bank Reconciliation', icon: Wallet },
    { id: 'receivables', label: 'Accounts Receivable', icon: CreditCard },
    { id: 'payables', label: 'Accounts Payable', icon: Receipt },
    { id: 'ledger', label: 'General Ledger', icon: Calculator },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'reports', label: 'Reports', icon: TrendingUp },
    { id: 'budgeting', label: 'Budgeting', icon: PieChart }
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
      {/* Key Financial Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {formatCurrency(accountingData.totalRevenue)}
          </h3>
          <p className="text-gray-600 text-sm">Total Revenue</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-red-100 p-3 rounded-lg">
              <Receipt className="h-6 w-6 text-red-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {formatCurrency(accountingData.totalExpenses)}
          </h3>
          <p className="text-gray-600 text-sm">Total Expenses</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {formatCurrency(accountingData.netIncome)}
          </h3>
          <p className="text-gray-600 text-sm">Net Income</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Wallet className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {formatCurrency(accountingData.bankBalance)}
          </h3>
          <p className="text-gray-600 text-sm">Bank Balance</p>
        </div>
      </div>

      {/* Bank Accounts Overview */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Bank Accounts</h3>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            <Plus className="h-4 w-4 inline mr-2" />
            Add Account
          </button>
        </div>

        <div className="space-y-4">
          {accountingData.accounts.map((account) => (
            <div key={account.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center">
                <div className="p-2 rounded-lg mr-4 bg-blue-100">
                  <Building className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{account.name}</p>
                  <p className="text-gray-600 text-sm">
                    Last reconciled: {new Date(account.lastReconciled).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">{formatCurrency(account.balance)}</p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Reconcile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Recent Transactions</h3>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            View All
          </button>
        </div>

        <div className="space-y-4">
          {accountingData.recentTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
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
                  {transaction.type === 'income' ? '+' : ''}{formatCurrency(transaction.amount)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBanking = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Bank Reconciliation</h3>
          <div className="flex space-x-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              Import Statement
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              Auto-Reconcile
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Unreconciled Transactions</h4>
            <div className="space-y-2">
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm font-medium text-yellow-800">Deposit: KES 500,000</p>
                <p className="text-xs text-yellow-600">Reference: Rent Payment - Unit 201</p>
              </div>
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm font-medium text-yellow-800">Withdrawal: KES 25,000</p>
                <p className="text-xs text-yellow-600">Reference: Office Supplies</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Reconciliation Summary</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="text-2xl font-bold text-green-600">24</p>
                <p className="text-sm text-green-800">Matched</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-2xl font-bold text-yellow-600">3</p>
                <p className="text-sm text-yellow-800">Pending</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReceivables = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Accounts Receivable</h3>
          <div className="flex space-x-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              <Plus className="h-4 w-4 inline mr-2" />
              New Invoice
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              Send Reminders
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-2xl font-bold text-blue-600">{formatCurrency(accountingData.outstandingInvoices)}</p>
            <p className="text-sm text-blue-800">Outstanding Invoices</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="text-2xl font-bold text-green-600">85%</p>
            <p className="text-sm text-green-800">Collection Rate</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <p className="text-2xl font-bold text-orange-600">12</p>
            <p className="text-sm text-orange-800">Overdue Invoices</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg">
            <div>
              <p className="font-semibold text-red-800">INV-2025-001 - John Doe</p>
              <p className="text-sm text-red-600">Due: September 15, 2025</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-red-800">{formatCurrency(150000)}</p>
              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Overdue</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPayables = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Accounts Payable</h3>
          <div className="flex space-x-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              <Plus className="h-4 w-4 inline mr-2" />
              New Bill
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              Process Payments
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <p className="text-2xl font-bold text-red-600">{formatCurrency(accountingData.unpaidBills)}</p>
            <p className="text-sm text-red-800">Unpaid Bills</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-2xl font-bold text-blue-600">8</p>
            <p className="text-sm text-blue-800">Pending Approval</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="text-2xl font-bold text-green-600">15</p>
            <p className="text-sm text-green-800">Paid This Month</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div>
              <p className="font-semibold text-yellow-800">Office Supplies - ABC Suppliers</p>
              <p className="text-sm text-yellow-600">Due: September 10, 2025</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-yellow-800">{formatCurrency(75000)}</p>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Pending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLedger = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">General Ledger</h3>
          <div className="flex space-x-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              New Journal Entry
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              Export
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg font-semibold text-gray-700">
            <div>Date</div>
            <div>Description</div>
            <div className="text-right">Debit</div>
            <div className="text-right">Credit</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border border-gray-200 rounded-lg">
            <div className="text-sm">2025-09-05</div>
            <div className="text-sm">Rent Income - Unit 101</div>
            <div className="text-right text-sm font-medium">{formatCurrency(150000)}</div>
            <div className="text-right text-sm">-</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border border-gray-200 rounded-lg">
            <div className="text-sm">2025-09-05</div>
            <div className="text-sm">Rent Income - Unit 101</div>
            <div className="text-right text-sm">-</div>
            <div className="text-sm text-right font-medium">{formatCurrency(150000)}</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Document Management</h3>
          <div className="flex space-x-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              <Plus className="h-4 w-4 inline mr-2" />
              Upload Document
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              Generate Template
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center mb-3">
              <FileText className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-900">Lease Agreement</h4>
                <p className="text-sm text-gray-600">Template</p>
              </div>
            </div>
            <button className="w-full bg-blue-100 text-blue-800 px-3 py-2 rounded text-sm font-semibold">
              Use Template
            </button>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center mb-3">
              <Receipt className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-900">Invoice Template</h4>
                <p className="text-sm text-gray-600">Template</p>
              </div>
            </div>
            <button className="w-full bg-green-100 text-green-800 px-3 py-2 rounded text-sm font-semibold">
              Use Template
            </button>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center mb-3">
              <FileText className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-900">Tax Documents</h4>
                <p className="text-sm text-gray-600">12 files</p>
              </div>
            </div>
            <button className="w-full bg-purple-100 text-purple-800 px-3 py-2 rounded text-sm font-semibold">
              View Documents
            </button>
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
              <PieChart className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Balance Sheet</h3>
          <p className="text-gray-600 text-sm mb-4">Assets, liabilities, and equity</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );

  const renderBudgeting = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Budget Management</h3>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            <Plus className="h-4 w-4 inline mr-2" />
            New Budget
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Current Budget Status</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-sm font-medium text-green-800">Maintenance Budget</span>
                <span className="text-sm font-bold text-green-800">75% Used</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-sm font-medium text-blue-800">Marketing Budget</span>
                <span className="text-sm font-bold text-blue-800">45% Used</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                <span className="text-sm font-medium text-orange-800">Office Expenses</span>
                <span className="text-sm font-bold text-orange-800">90% Used</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Budget vs Actual</h4>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">September 2025</span>
                  <span className="text-sm font-bold">85% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
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
      case 'banking': return renderBanking();
      case 'receivables': return renderReceivables();
      case 'payables': return renderPayables();
      case 'ledger': return renderLedger();
      case 'documents': return renderDocuments();
      case 'reports': return renderReports();
      case 'budgeting': return renderBudgeting();
      default: return renderOverview();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading accounting dashboard...</p>
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
              Accounting Dashboard
            </h1>
            <p className="text-gray-600 text-lg">
              Comprehensive financial management for Murivest Realty
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">Last updated</p>
              <p className="font-semibold text-gray-900">
                {new Date().toLocaleDateString('en-KE', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
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

export default AccountingDashboard;