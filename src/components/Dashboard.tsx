'use client';

import { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
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
  Briefcase,
  Plus,
  Edit,
  Trash2,
  Upload,
  MessageSquare,
  Calculator,
  Receipt,
  FileCheck,
  Home,
  X,
  Search,
  Filter,
  Send,
  Save,
  RefreshCw
} from 'lucide-react';

interface Property {
  id: string;
  name: string;
  type: string;
  investmentAmount: number;
  currentValue: number;
  yield: number;
  monthlyIncome: number;
  sharesOwned: number;
  purchaseDate: string;
  status: 'active' | 'pending' | 'sold';
}

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  description: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  propertyId?: string;
  category: string;
}

interface Document {
  id: string;
  name: string;
  type: string;
  size: number;
  uploadDate: string;
  category: 'contract' | 'statement' | 'receipt' | 'report';
  propertyId?: string;
}

interface Notification {
  id: string;
  type: 'payment' | 'property' | 'system' | 'alert';
  title: string;
  message: string;
  date: string;
  read: boolean;
  priority: 'low' | 'medium' | 'high';
}

const Dashboard = () => {
  const { data: session, status } = useSession();
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);

  // Form states
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });

  // Data states
  const [properties, setProperties] = useState<Property[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Modal states
  const [showAddPropertyModal, setShowAddPropertyModal] = useState(false);
  const [showAddDocumentModal, setShowAddDocumentModal] = useState(false);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [showSendMessageModal, setShowSendMessageModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Form data
  const [newProperty, setNewProperty] = useState({
    name: '',
    type: 'residential',
    investmentAmount: '',
    expectedYield: '',
    description: ''
  });

  const [newDocument, setNewDocument] = useState({
    name: '',
    category: 'contract',
    file: null as File | null
  });

  const [newMessage, setNewMessage] = useState({
    recipient: '',
    subject: '',
    message: ''
  });

  const [profileData, setProfileData] = useState({
    name: session?.user?.name || '',
    email: session?.user?.email || '',
    phone: '',
    address: ''
  });

  // Check if user is authenticated and is a client (not admin)
  const isAuthenticated = status === 'authenticated';
  const isClient = session?.user?.role !== 'ADMIN' && session?.user?.role !== 'ACCOUNTANT' && session?.user?.role !== 'SECRETARY' && session?.user?.role !== 'OPERATIONS_MANAGER';

  // Redirect non-clients
  useEffect(() => {
    if (status === 'authenticated' && !isClient) {
      window.location.href = '/admin';
    }
  }, [status, isClient]);

  // Show login modal for unauthenticated users
  useEffect(() => {
    if (status === 'unauthenticated') {
      setShowLoginModal(true);
    } else if (status === 'authenticated' && isClient) {
      setShowLoginModal(false);
      fetchDashboardData();
    }
  }, [status, isClient]);

  const fetchDashboardData = async () => {
    try {
      // Fetch data from real APIs
      const [propertiesRes, transactionsRes, documentsRes, notificationsRes] = await Promise.all([
        fetch('/api/client/properties'),
        fetch('/api/client/transactions'),
        fetch('/api/client/documents'),
        fetch('/api/client/notifications')
      ]);

      if (propertiesRes.ok) {
        const propertiesData = await propertiesRes.json();
        setProperties(propertiesData);
      }

      if (transactionsRes.ok) {
        const transactionsData = await transactionsRes.json();
        setTransactions(transactionsData);
      }

      if (documentsRes.ok) {
        const documentsData = await documentsRes.json();
        setDocuments(documentsData);
      }

      if (notificationsRes.ok) {
        const notificationsData = await notificationsRes.json();
        setNotifications(notificationsData);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      // Fallback to mock data if APIs fail
      const mockProperties: Property[] = [
        {
          id: '1',
          name: 'Green Valley Apartments',
          type: 'Residential',
          investmentAmount: 1000000,
          currentValue: 1050000,
          yield: 6.5,
          monthlyIncome: 5417,
          sharesOwned: 25.5,
          purchaseDate: '2024-01-15',
          status: 'active'
        }
      ];

      const mockTransactions: Transaction[] = [
        {
          id: '1',
          type: 'income',
          amount: 5417,
          description: 'Monthly rental income - Green Valley',
          date: '2024-09-01',
          status: 'completed',
          propertyId: '1',
          category: 'Rental Income'
        }
      ];

      const mockDocuments: Document[] = [
        {
          id: '1',
          name: 'Investment Agreement - Green Valley.pdf',
          type: 'PDF',
          size: 2457600,
          uploadDate: '2024-01-15',
          category: 'contract',
          propertyId: '1'
        }
      ];

      const mockNotifications: Notification[] = [
        {
          id: '1',
          type: 'payment',
          title: 'Payment Received',
          message: 'Your monthly rental income has been deposited',
          date: '2024-09-01',
          read: false,
          priority: 'medium'
        }
      ];

      setProperties(mockProperties);
      setTransactions(mockTransactions);
      setDocuments(mockDocuments);
      setNotifications(mockNotifications);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await signIn('credentials', {
        email: loginForm.email,
        password: loginForm.password,
        redirect: false
      });

      if (result?.error) {
        alert('Login failed: ' + result.error);
      } else {
        setShowLoginModal(false);
        setLoginForm({ email: '', password: '' });
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed');
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (registerForm.password !== registerForm.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: registerForm.name,
          email: registerForm.email,
          password: registerForm.password,
          phone: registerForm.phone,
          role: 'LANDLORD' // Default role for clients
        }),
      });

      if (response.ok) {
        alert('Account created successfully! Please login.');
        setIsLoginMode(true);
        setRegisterForm({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          phone: ''
        });
      } else {
        const error = await response.json();
        alert('Registration failed: ' + (error.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed');
    }
  };

  const handleAddProperty = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/client/properties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newProperty.name,
          type: newProperty.type,
          investmentAmount: newProperty.investmentAmount,
          expectedYield: newProperty.expectedYield
        }),
      });

      if (response.ok) {
        const newProp = await response.json();
        setProperties(prev => [...prev, newProp]);
        setShowAddPropertyModal(false);
        setNewProperty({
          name: '',
          type: 'residential',
          investmentAmount: '',
          expectedYield: '',
          description: ''
        });
        alert('Property added successfully!');
      } else {
        const error = await response.json();
        alert('Failed to add property: ' + (error.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error adding property:', error);
      alert('Failed to add property');
    }
  };

  const handleAddDocument = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!newDocument.file) {
        alert('Please select a file');
        return;
      }

      const formData = new FormData();
      formData.append('name', newDocument.name);
      formData.append('category', newDocument.category);
      formData.append('file', newDocument.file);

      const response = await fetch('/api/client/documents', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const newDoc = await response.json();
        setDocuments(prev => [...prev, newDoc]);
        setShowAddDocumentModal(false);
        setNewDocument({
          name: '',
          category: 'contract',
          file: null
        });
        alert('Document uploaded successfully!');
      } else {
        const error = await response.json();
        alert('Failed to upload document: ' + (error.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error uploading document:', error);
      alert('Failed to upload document');
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Mock API call - replace with real API
      alert('Message sent successfully!');
      setShowSendMessageModal(false);
      setNewMessage({
        recipient: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message');
    }
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/client/profile', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });

      if (response.ok) {
        alert('Profile updated successfully!');
        setShowEditProfileModal(false);
      } else {
        const error = await response.json();
        alert('Failed to update profile: ' + (error.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    }
  };

  const handleDeleteProperty = async (propertyId: string) => {
    if (!confirm('Are you sure you want to delete this property?')) return;

    try {
      const response = await fetch(`/api/client/properties?id=${propertyId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setProperties(prev => prev.filter(p => p.id !== propertyId));
        alert('Property deleted successfully!');
      } else {
        const error = await response.json();
        alert('Failed to delete property: ' + (error.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error deleting property:', error);
      alert('Failed to delete property');
    }
  };

  const handleDeleteDocument = async (documentId: string) => {
    if (!confirm('Are you sure you want to delete this document?')) return;

    try {
      const response = await fetch(`/api/client/documents?id=${documentId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setDocuments(prev => prev.filter(d => d.id !== documentId));
        alert('Document deleted successfully!');
      } else {
        const error = await response.json();
        alert('Failed to delete document: ' + (error.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error deleting document:', error);
      alert('Failed to delete document');
    }
  };

  const handleMarkNotificationRead = async (notificationId: string) => {
    try {
      const response = await fetch(`/api/client/notifications?id=${notificationId}`, {
        method: 'PATCH',
      });

      if (response.ok) {
        setNotifications(prev => prev.map(n =>
          n.id === notificationId ? { ...n, read: true } : n
        ));
      } else {
        console.error('Failed to mark notification as read');
      }
    } catch (error) {
      console.error('Error updating notification:', error);
    }
  };

  const generateReport = async (type: string) => {
    try {
      // Mock report generation - replace with real API
      alert(`${type} report generated successfully!`);
    } catch (error) {
      console.error('Error generating report:', error);
      alert('Failed to generate report');
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

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const menuItems = [
    { id: 'overview', label: 'Portfolio Overview', icon: BarChart3 },
    { id: 'properties', label: 'My Properties', icon: Building },
    { id: 'transactions', label: 'Transactions', icon: Wallet },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const renderOverview = () => {
    const totalInvestment = properties.reduce((sum, prop) => sum + prop.investmentAmount, 0);
    const totalValue = properties.reduce((sum, prop) => sum + prop.currentValue, 0);
    const totalYield = properties.length > 0 ? properties.reduce((sum, prop) => sum + prop.yield, 0) / properties.length : 0;
    const monthlyIncome = properties.reduce((sum, prop) => sum + prop.monthlyIncome, 0);

    return (
      <div className="space-y-8">
        {/* Financial Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-green-500 text-sm font-semibold">
                +{((totalValue - totalInvestment) / totalInvestment * 100 || 0).toFixed(1)}%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {formatCurrency(totalInvestment)}
            </h3>
            <p className="text-gray-600 text-sm">Total Investment</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-green-500 text-sm font-semibold">
                +{totalYield.toFixed(1)}%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {formatCurrency(totalValue)}
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
              {totalYield.toFixed(1)}%
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
              {formatCurrency(monthlyIncome)}
            </h3>
            <p className="text-gray-600 text-sm">Monthly Income</p>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Recent Transactions</h3>
            <button
              onClick={() => generateReport('Transaction Report')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              <Download className="h-4 w-4 inline mr-2" />
              Generate Report
            </button>
          </div>
          <div className="space-y-4">
            {transactions.slice(0, 5).map((transaction) => (
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
                      {new Date(transaction.date).toLocaleDateString()} • {transaction.category}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}
                  </p>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    transaction.status === 'completed' ? 'bg-green-100 text-green-800' :
                    transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => setShowAddPropertyModal(true)}
              className="flex items-center justify-center p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors"
            >
              <Plus className="h-6 w-6 text-blue-600 mr-3" />
              <span className="font-semibold text-blue-900">Add Property</span>
            </button>
            <button
              onClick={() => setShowAddDocumentModal(true)}
              className="flex items-center justify-center p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors"
            >
              <Upload className="h-6 w-6 text-green-600 mr-3" />
              <span className="font-semibold text-green-900">Upload Document</span>
            </button>
            <button
              onClick={() => setShowSendMessageModal(true)}
              className="flex items-center justify-center p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors"
            >
              <MessageSquare className="h-6 w-6 text-purple-600 mr-3" />
              <span className="font-semibold text-purple-900">Send Message</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderProperties = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900">My Properties</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setShowAddPropertyModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            <Plus className="h-4 w-4 inline mr-2" />
            Add Property
          </button>
          <button
            onClick={() => generateReport('Property Report')}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            <Download className="h-4 w-4 inline mr-2" />
            Generate Report
          </button>
        </div>
      </div>

      {properties.map((property) => (
        <div key={property.id} className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-1">{property.name}</h4>
              <p className="text-gray-600">{property.type}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-600">{property.yield.toFixed(1)}%</p>
              <p className="text-gray-600 text-sm">Annual Yield</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-gray-600 text-sm mb-1">Investment</p>
              <p className="font-bold text-gray-900">{formatCurrency(property.investmentAmount)}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-gray-600 text-sm mb-1">Current Value</p>
              <p className="font-bold text-gray-900">{formatCurrency(property.currentValue)}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-gray-600 text-sm mb-1">Monthly Income</p>
              <p className="font-bold text-gray-900">{formatCurrency(property.monthlyIncome)}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-gray-600 text-sm mb-1">Shares Owned</p>
              <p className="font-bold text-gray-900">{property.sharesOwned.toFixed(1)}%</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Purchase Date: {new Date(property.purchaseDate).toLocaleDateString()}</p>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                property.status === 'active' ? 'bg-green-100 text-green-800' :
                property.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {property.status}
              </span>
            </div>
            <div className="flex space-x-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                <Eye className="h-4 w-4 inline mr-2" />
                View Details
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                <Download className="h-4 w-4 inline mr-2" />
                Download Report
              </button>
              <button
                onClick={() => handleDeleteProperty(property.id)}
                className="bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                <Trash2 className="h-4 w-4 inline mr-2" />
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      {properties.length === 0 && (
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <Building className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Properties Yet</h3>
          <p className="text-gray-600 mb-4">Start your investment journey with us today.</p>
          <button
            onClick={() => setShowAddPropertyModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Plus className="h-5 w-5 inline mr-2" />
            Add Your First Property
          </button>
        </div>
      )}
    </div>
  );

  const renderTransactions = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900">Transaction History</h3>
        <div className="flex space-x-2">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            <Filter className="h-4 w-4 inline mr-2" />
            Filter
          </button>
          <button
            onClick={() => generateReport('Transaction History')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            <Download className="h-4 w-4 inline mr-2" />
            Export
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="space-y-4">
            {transactions.map((transaction) => (
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
                      {new Date(transaction.date).toLocaleDateString()} • {transaction.category}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}
                  </p>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    transaction.status === 'completed' ? 'bg-green-100 text-green-800' :
                    transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900">Document Management</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setShowAddDocumentModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            <Upload className="h-4 w-4 inline mr-2" />
            Upload Document
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            <Search className="h-4 w-4 inline mr-2" />
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((document) => (
          <div key={document.id} className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className={`p-3 rounded-lg mr-4 ${
                document.category === 'contract' ? 'bg-blue-100' :
                document.category === 'report' ? 'bg-green-100' :
                document.category === 'receipt' ? 'bg-purple-100' : 'bg-gray-100'
              }`}>
                <FileText className={`h-6 w-6 ${
                  document.category === 'contract' ? 'text-blue-600' :
                  document.category === 'report' ? 'text-green-600' :
                  document.category === 'receipt' ? 'text-purple-600' : 'text-gray-600'
                }`} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-sm">{document.name}</h4>
                <p className="text-gray-600 text-xs">{document.type} • {formatFileSize(document.size)}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  document.category === 'contract' ? 'bg-blue-100 text-blue-800' :
                  document.category === 'report' ? 'bg-green-100 text-green-800' :
                  document.category === 'receipt' ? 'bg-purple-100 text-purple-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {document.category}
                </span>
                <p className="text-gray-500 text-xs mt-1">
                  {new Date(document.uploadDate).toLocaleDateString()}
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 rounded-lg">
                  <Eye className="h-4 w-4" />
                </button>
                <button className="bg-green-100 hover:bg-green-200 text-green-700 p-2 rounded-lg">
                  <Download className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDeleteDocument(document.id)}
                  className="bg-red-100 hover:bg-red-200 text-red-700 p-2 rounded-lg"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {documents.length === 0 && (
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Documents Yet</h3>
          <p className="text-gray-600 mb-4">Upload your first document to get started.</p>
          <button
            onClick={() => setShowAddDocumentModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Upload className="h-5 w-5 inline mr-2" />
            Upload Document
          </button>
        </div>
      )}
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900">Notifications</h3>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
          <RefreshCw className="h-4 w-4 inline mr-2" />
          Refresh
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className={`bg-white rounded-2xl shadow-lg p-6 border-l-4 ${
            notification.priority === 'high' ? 'border-red-500' :
            notification.priority === 'medium' ? 'border-yellow-500' : 'border-green-500'
          } ${!notification.read ? 'bg-blue-50' : ''}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className={`p-2 rounded-lg mr-4 ${
                  notification.type === 'payment' ? 'bg-green-100' :
                  notification.type === 'property' ? 'bg-blue-100' :
                  notification.type === 'alert' ? 'bg-red-100' : 'bg-gray-100'
                }`}>
                  {notification.type === 'payment' ? <DollarSign className="h-5 w-5 text-green-600" /> :
                   notification.type === 'property' ? <Building className="h-5 w-5 text-blue-600" /> :
                   notification.type === 'alert' ? <AlertCircle className="h-5 w-5 text-red-600" /> :
                   <Bell className="h-5 w-5 text-gray-600" />}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{notification.title}</h4>
                  <p className="text-gray-600 text-sm">
                    {new Date(notification.date).toLocaleDateString()} • {notification.priority} priority
                  </p>
                </div>
              </div>
              {!notification.read && (
                <button
                  onClick={() => handleMarkNotificationRead(notification.id)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm font-semibold transition-colors"
                >
                  Mark as Read
                </button>
              )}
            </div>
            <p className="text-gray-700">{notification.message}</p>
          </div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Notifications</h3>
          <p className="text-gray-600">You're all caught up!</p>
        </div>
      )}
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900">Profile Settings</h3>
        <button
          onClick={() => setShowEditProfileModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
        >
          <Edit className="h-4 w-4 inline mr-2" />
          Edit Profile
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Personal Information</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <p className="text-gray-900">{session?.user?.name || 'Not set'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <p className="text-gray-900">{session?.user?.email || 'Not set'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <p className="text-gray-900">{profileData.phone || 'Not set'}</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Account Information</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Type</label>
                <p className="text-gray-900">{session?.user?.role || 'Client'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
                <p className="text-gray-900">January 2024</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Account Settings</h3>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Notification Preferences</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Email Notifications</p>
              <p className="text-gray-600 text-sm">Receive updates via email</p>
            </div>
            <input type="checkbox" defaultChecked className="rounded" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Payment Reminders</p>
              <p className="text-gray-600 text-sm">Get notified about payments</p>
            </div>
            <input type="checkbox" defaultChecked className="rounded" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Property Updates</p>
              <p className="text-gray-600 text-sm">Updates about your properties</p>
            </div>
            <input type="checkbox" defaultChecked className="rounded" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Security</h4>
        <div className="space-y-4">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            Change Password
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            Enable Two-Factor Authentication
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'properties': return renderProperties();
      case 'transactions': return renderTransactions();
      case 'documents': return renderDocuments();
      case 'notifications': return renderNotifications();
      case 'profile': return renderProfile();
      case 'settings': return renderSettings();
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
              Client Portal
            </h1>
            <p className="text-gray-600 text-lg">
              Welcome back, {session?.user?.name}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="h-6 w-6 text-gray-600" />
            <span className="text-sm text-gray-600">
              {session?.user?.role || 'Client'}
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

      {/* Login/Register Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {isLoginMode ? 'Welcome Back' : 'Create Account'}
              </h3>
              <button
                onClick={() => setShowLoginModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {isLoginMode ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    type="password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Sign In
                </button>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setIsLoginMode(false)}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Don't have an account? Sign up
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={registerForm.name}
                    onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={registerForm.email}
                    onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    value={registerForm.phone}
                    onChange={(e) => setRegisterForm({ ...registerForm, phone: e.target.value })}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    type="password"
                    value={registerForm.password}
                    onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                  <input
                    type="password"
                    value={registerForm.confirmPassword}
                    onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Create Account
                </button>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setIsLoginMode(true)}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Already have an account? Sign in
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Add Property Modal */}
      {showAddPropertyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Add New Property</h3>
            <form onSubmit={handleAddProperty} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Name</label>
                <input
                  type="text"
                  value={newProperty.name}
                  onChange={(e) => setNewProperty({ ...newProperty, name: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                <select
                  value={newProperty.type}
                  onChange={(e) => setNewProperty({ ...newProperty, type: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Investment Amount (KES)</label>
                <input
                  type="number"
                  value={newProperty.investmentAmount}
                  onChange={(e) => setNewProperty({ ...newProperty, investmentAmount: e.target.value })}
                  required
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Expected Yield (%)</label>
                <input
                  type="number"
                  value={newProperty.expectedYield}
                  onChange={(e) => setNewProperty({ ...newProperty, expectedYield: e.target.value })}
                  required
                  min="0"
                  step="0.1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddPropertyModal(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Add Property
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Document Modal */}
      {showAddDocumentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Upload Document</h3>
            <form onSubmit={handleAddDocument} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Document Name</label>
                <input
                  type="text"
                  value={newDocument.name}
                  onChange={(e) => setNewDocument({ ...newDocument, name: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={newDocument.category}
                  onChange={(e) => setNewDocument({ ...newDocument, category: e.target.value as typeof newDocument.category })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="contract">Contract</option>
                  <option value="statement">Statement</option>
                  <option value="receipt">Receipt</option>
                  <option value="report">Report</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">File</label>
                <input
                  type="file"
                  onChange={(e) => setNewDocument({ ...newDocument, file: e.target.files?.[0] || null })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddDocumentModal(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Upload Document
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Send Message Modal */}
      {showSendMessageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Send Message</h3>
            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Recipient</label>
                <input
                  type="email"
                  value={newMessage.recipient}
                  onChange={(e) => setNewMessage({ ...newMessage, recipient: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  value={newMessage.subject}
                  onChange={(e) => setNewMessage({ ...newMessage, subject: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  value={newMessage.message}
                  onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowSendMessageModal(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Profile Modal */}
      {showEditProfileModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Edit Profile</h3>
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <textarea
                  value={profileData.address}
                  onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowEditProfileModal(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;