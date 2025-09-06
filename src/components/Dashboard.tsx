'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import {
  TrendingUp,
  FileText,
  Settings,
  LogOut,
  DollarSign,
  Calendar,
  Download,
  Eye,
  BarChart3,
  PieChart,
  Building,
  Wallet,
  Bell,
  User,
  CreditCard,
  Shield,
  MapPin,
  Phone,
  Mail,
  AlertCircle,
  CheckCircle,
  Users,
  Briefcase
} from 'lucide-react';

const Dashboard = () => {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [portfolioData, setPortfolioData] = useState<{
    totalInvestment: number;
    currentValue: number;
    totalYield: number;
    monthlyIncome: number;
    properties: any[];
    transactions: any[];
    documents: any[];
    notifications: any[];
    tenants: any[];
    rentalTransactions: any[];
    expenses: any[];
  }>({
    totalInvestment: 0,
    currentValue: 0,
    totalYield: 0,
    monthlyIncome: 0,
    properties: [],
    transactions: [],
    documents: [],
    notifications: [],
    tenants: [],
    rentalTransactions: [],
    expenses: []
  });

  // Fetch real data from APIs
  const fetchDashboardData = async () => {
    try {
      // Fetch properties and investments
      const propertiesResponse = await fetch('/api/properties');
      const propertiesData = await propertiesResponse.json();

      // Fetch transactions
      const transactionsResponse = await fetch('/api/accounting/transactions');
      const transactionsData = await transactionsResponse.json();

      // Fetch tenants
      const tenantsResponse = await fetch('/api/tenants');
      const tenantsData = await tenantsResponse.json();

      // Fetch rental transactions
      const rentalsResponse = await fetch('/api/rentals');
      const rentalsData = await rentalsResponse.json();

      // Fetch expenses
      const expensesResponse = await fetch('/api/accounting/expenses');
      const expensesData = await expensesResponse.json();

      // Calculate totals
      const totalInvestment = propertiesData.properties?.reduce((sum: number, prop: any) => sum + (prop.price || 0), 0) || 0;
      const monthlyIncome = rentalsData.rentals?.reduce((sum: number, rental: any) => sum + rental.amount, 0) || 0;

      setPortfolioData({
        totalInvestment,
        currentValue: totalInvestment * 1.05, // 5% appreciation
        totalYield: 5,
        monthlyIncome,
        properties: propertiesData.properties || [],
        transactions: transactionsData.transactions || [],
        documents: [],
        notifications: [],
        tenants: tenantsData.tenants || [],
        rentalTransactions: rentalsData.rentals || [],
        expenses: expensesData.expenses || []
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      // Fallback to mock data if APIs fail
      setPortfolioData({
        totalInvestment: 2500000,
        currentValue: 2625000,
        totalYield: 5,
        monthlyIncome: 125000,
        properties: [
          {
            id: '1',
            propertyId: 'prop1',
            investmentAmount: 1000000,
            actualYield: 6,
            expectedMonthlyIncome: 50000,
            sharesOwned: 100,
            propertyDetails: {
              id: 'prop1',
              name: 'Green Valley Apartments',
              type: 'Residential'
            }
          }
        ],
        transactions: [],
        tenants: [],
        rentalTransactions: [],
        expenses: []
      });
    }
  };

  useEffect(() => {
    fetchDashboardData();
    setLoading(false);
  }, []);

  const handleLogout = async () => {
    // Handle logout
  };

  const formatCurrency = (amount: number | bigint) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'properties', label: 'My Properties', icon: Building },
    { id: 'transactions', label: 'Transactions', icon: Wallet },
    { id: 'rentals', label: 'Rentals & Expenses', icon: DollarSign },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Financial Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-green-500 text-sm font-semibold">
              {portfolioData.totalYield > 0 ? `+${portfolioData.totalYield.toFixed(1)}%` : '0%'}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {formatCurrency(portfolioData.totalInvestment)}
          </h3>
          <p className="text-gray-600 text-sm">Total Investment</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-green-500 text-sm font-semibold">
              +{((portfolioData.currentValue - portfolioData.totalInvestment) / portfolioData.totalInvestment * 100 || 0).toFixed(1)}%
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {formatCurrency(portfolioData.currentValue)}
          </h3>
          <p className="text-gray-600 text-sm">Current Value</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <PieChart className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-green-500 text-sm font-semibold">Annual</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {portfolioData.totalYield.toFixed(1)}%
          </h3>
          <p className="text-gray-600 text-sm">Portfolio Yield</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Calendar className="h-6 w-6 text-orange-600" />
            </div>
            <span className="text-green-500 text-sm font-semibold">Monthly</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {formatCurrency(portfolioData.monthlyIncome)}
          </h3>
          <p className="text-gray-600 text-sm">Expected Income</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Transactions</h3>
        <div className="space-y-4">
          {portfolioData.transactions.slice(0, 5).map((transaction) => (
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

  const renderProperties = () => (
    <div className="space-y-6">
      {portfolioData.properties.map((investment) => (
        <div key={investment.id} className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {investment.propertyDetails?.name}
              </h3>
              <p className="text-gray-600">{investment.propertyDetails?.type}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-600">
                {investment.actualYield?.toFixed(1)}%
              </p>
              <p className="text-gray-600 text-sm">Annual Yield</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-gray-600 text-sm mb-1">Your Investment</p>
              <p className="font-bold text-gray-900">
                {formatCurrency(investment.investmentAmount)}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-gray-600 text-sm mb-1">Current Value</p>
              <p className="font-bold text-gray-900">
                {formatCurrency(investment.investmentAmount * (1 + investment.actualYield / 100))}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-gray-600 text-sm mb-1">Monthly Income</p>
              <p className="font-bold text-gray-900">
                {formatCurrency(investment.expectedMonthlyIncome)}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">
                Shares Owned: {investment.sharesOwned?.toFixed(2)}%
              </p>
              <p className="text-gray-600 text-sm">
                Purchase Date: {investment.purchaseDate ? new Date(investment.purchaseDate).toLocaleDateString() : 'N/A'}
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                View Details
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                Download Report
              </button>
            </div>
          </div>
        </div>
      ))}

      {portfolioData.properties.length === 0 && (
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <Building className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Properties Yet</h3>
          <p className="text-gray-600">Start your investment journey with us today.</p>
        </div>
      )}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'properties': return renderProperties();
      default: return renderOverview();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
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
              Welcome back, {session?.user?.name}
            </h1>
            <p className="text-gray-600 text-lg">
              Here's your investment portfolio overview
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="h-6 w-6 text-gray-600" />
            <button
              onClick={handleLogout}
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
    </div>
  );
};

export default Dashboard;