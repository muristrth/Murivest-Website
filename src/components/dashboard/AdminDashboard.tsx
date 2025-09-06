'use client';

<<<<<<< HEAD
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
  Building
} from 'lucide-react';
import PropertyManagement from './sections/PropertyManagement';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'ADMIN' | 'LANDLORD' | 'OPERATIONS_MANAGER' | 'ACCOUNTANT' | 'SECRETARY';
  createdAt: string;
  _count?: {
    properties: number;
    tenants: number;
  };
}

interface SystemStats {
  totalUsers: number;
  totalProperties: number;
  totalTenants: number;
  activeMaintenanceRequests: number;
}

const AdminDashboard = () => {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState('overview');
  const [users, setUsers] = useState<User[]>([]);
  const [systemStats, setSystemStats] = useState<SystemStats>({
    totalUsers: 0,
    totalProperties: 0,
    totalTenants: 0,
    activeMaintenanceRequests: 0
  });
  const [loading, setLoading] = useState(true);
  const [showCreateUserModal, setShowCreateUserModal] = useState(false);
  const [newUser, setNewUser] = useState({
    email: '',
    name: '',
    password: '',
    role: 'LANDLORD' as User['role']
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch users
        const usersResponse = await fetch('/api/users');
        if (usersResponse.ok) {
          const usersData = await usersResponse.json();
          setUsers(usersData);
          setSystemStats(prev => ({ ...prev, totalUsers: usersData.length }));
        }

        // Fetch system stats
        const statsResponse = await fetch('/api/properties');
        if (statsResponse.ok) {
          const propertiesData = await statsResponse.json();
          const totalProperties = propertiesData.length;
          const totalTenants = propertiesData.reduce((acc: number, prop: any) =>
            acc + (prop.tenants?.length || 0), 0
          );
          setSystemStats(prev => ({
            ...prev,
            totalProperties,
            totalTenants
          }));
        }

        // Fetch maintenance requests count
        const maintenanceResponse = await fetch('/api/maintenance');
        if (maintenanceResponse.ok) {
          const maintenanceData = await maintenanceResponse.json();
          const activeRequests = maintenanceData.filter((req: any) =>
            req.status === 'OPEN' || req.status === 'IN_PROGRESS'
          ).length;
          setSystemStats(prev => ({ ...prev, activeMaintenanceRequests: activeRequests }));
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        const createdUser = await response.json();
        setUsers(prev => [...prev, createdUser]);
        setShowCreateUserModal(false);
        setNewUser({ email: '', name: '', password: '', role: 'LANDLORD' });
        alert('User created successfully!');
      } else {
        const error = await response.json();
        alert(error.error || 'Failed to create user');
      }
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Failed to create user');
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!confirm('Are you sure you want to delete this user?')) return;

    try {
      const response = await fetch(`/api/users?id=${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setUsers(prev => prev.filter(user => user.id !== userId));
        alert('User deleted successfully!');
      } else {
        const error = await response.json();
        alert(error.error || 'Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user');
    }
  };

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'properties', label: 'Property Management', icon: Building },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'system', label: 'System Settings', icon: Settings },
    { id: 'reports', label: 'System Reports', icon: Activity }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* System Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {systemStats.totalUsers}
          </h3>
          <p className="text-gray-600 text-sm">Total Users</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {systemStats.totalProperties}
          </h3>
          <p className="text-gray-600 text-sm">Total Properties</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {systemStats.totalTenants}
          </h3>
          <p className="text-gray-600 text-sm">Total Tenants</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Activity className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {systemStats.activeMaintenanceRequests}
          </h3>
          <p className="text-gray-600 text-sm">Active Maintenance</p>
        </div>
      </div>

      {/* Recent Users */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Users</h3>
        <div className="space-y-4">
          {users.slice(0, 5).map((user) => (
            <div key={user.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center">
                <div className="p-2 rounded-lg mr-4 bg-blue-100">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{user.name}</p>
                  <p className="text-gray-600 text-sm">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  user.role === 'ADMIN' ? 'bg-red-100 text-red-800' :
                  user.role === 'LANDLORD' ? 'bg-blue-100 text-blue-800' :
                  user.role === 'OPERATIONS_MANAGER' ? 'bg-green-100 text-green-800' :
                  user.role === 'ACCOUNTANT' ? 'bg-purple-100 text-purple-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {user.role.replace('_', ' ')}
                </span>
                <span className="text-gray-500 text-sm">
                  {new Date(user.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProperties = () => {
    // Mock properties data for demonstration
    const mockProperties = [
      {
        id: '1',
        name: 'Green Valley Apartments',
        address: 'Kilimani, Nairobi',
        type: 'Residential',
        units: 20,
        occupiedUnits: 18,
        monthlyRevenue: 450000,
        monthlyExpenses: 135000,
        status: 'active' as const
      },
      {
        id: '2',
        name: 'River View Complex',
        address: 'Westlands, Nairobi',
        type: 'Residential',
        units: 15,
        occupiedUnits: 15,
        monthlyRevenue: 375000,
        monthlyExpenses: 112500,
        status: 'active' as const
      }
    ];

    return <PropertyManagement properties={mockProperties} />;
  };

  const renderUsers = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">User Management</h3>
          <button
            onClick={() => setShowCreateUserModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            <UserPlus className="h-4 w-4 inline mr-2" />
            Add New User
          </button>
        </div>

        <div className="space-y-4">
          {users.map((user) => (
            <div key={user.id} className="p-4 border border-gray-200 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg mr-4 bg-blue-100">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{user.name}</p>
                    <p className="text-gray-600 text-sm">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    user.role === 'ADMIN' ? 'bg-red-100 text-red-800' :
                    user.role === 'LANDLORD' ? 'bg-blue-100 text-blue-800' :
                    user.role === 'OPERATIONS_MANAGER' ? 'bg-green-100 text-green-800' :
                    user.role === 'ACCOUNTANT' ? 'bg-purple-100 text-purple-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {user.role.replace('_', ' ')}
                  </span>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
                      <Edit className="h-4 w-4 text-gray-600" />
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="p-2 bg-red-100 hover:bg-red-200 rounded-lg"
                    >
                      <Trash2 className="h-4 w-4 text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex space-x-4 text-sm text-gray-600">
                  <span>Properties: {user._count?.properties || 0}</span>
                  <span>Tenants: {user._count?.tenants || 0}</span>
                </div>
                <p className="text-gray-500 text-sm">
                  Joined: {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSystem = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">System Settings</h3>
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-xl">
            <h4 className="font-semibold text-gray-900 mb-2">Database Status</h4>
            <p className="text-gray-600 text-sm">System database is operational</p>
            <div className="mt-2">
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Connected
              </span>
            </div>
          </div>

          <div className="p-4 border border-gray-200 rounded-xl">
            <h4 className="font-semibold text-gray-900 mb-2">Email Configuration</h4>
            <p className="text-gray-600 text-sm">SMTP settings for notifications</p>
            <button className="mt-2 bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">
              Configure
            </button>
          </div>

          <div className="p-4 border border-gray-200 rounded-xl">
            <h4 className="font-semibold text-gray-900 mb-2">Backup Settings</h4>
            <p className="text-gray-600 text-sm">Automated data backup configuration</p>
            <button className="mt-2 bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">
              Configure
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
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">User Activity</h3>
          <p className="text-gray-600 text-sm mb-4">User login and activity reports</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full">
            Generate Report
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <Activity className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">System Performance</h3>
          <p className="text-gray-600 text-sm mb-4">Server performance and uptime</p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full">
            Generate Report
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">Security Audit</h3>
          <p className="text-gray-600 text-sm mb-4">Security events and access logs</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'properties': return renderProperties();
      case 'users': return renderUsers();
      case 'system': return renderSystem();
      case 'reports': return renderReports();
      default: return renderOverview();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin dashboard...</p>
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
              Admin Dashboard
            </h1>
            <p className="text-gray-600 text-lg">
              System administration and user management
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="h-6 w-6 text-gray-600" />
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

      {/* Create User Modal */}
      {showCreateUserModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Create New User</h3>
            <form onSubmit={handleCreateUser} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  value={newUser.password}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value as User['role'] })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="LANDLORD">Landlord</option>
                  <option value="OPERATIONS_MANAGER">Operations Manager</option>
                  <option value="ACCOUNTANT">Accountant</option>
                  <option value="SECRETARY">Secretary</option>
                  <option value="ADMIN">Admin</option>
                </select>
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCreateUserModal(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Create User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
=======
import React, { useState } from 'react';
import DashboardShell from './DashboardShell';
import StaffManagement from './sections/StaffManagement';
import ReportsAndAnalytics from './sections/ReportsAndAnalytics';
import SystemSettings from './sections/SystemSettings';
import MarketingCenter from './sections/MarketingCenter';
import CustomerManagement from './sections/CustomerManagement';
import { dashboardData, menuItems } from './data';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'staff':
        return <StaffManagement staffData={dashboardData.staff} />;
      case 'reports':
        return <ReportsAndAnalytics />;
      case 'settings':
        return <SystemSettings />;
      case 'marketing':
        return <MarketingCenter campaigns={dashboardData.campaigns} />;
      case 'customers':
        return <CustomerManagement customers={dashboardData.customers} />;
      default:
        // You can create a dedicated Overview component here
        return <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
          <p className="text-gray-600 mt-2">Welcome to your Admin Dashboard. Select a tab from the sidebar to begin.</p>
        </div>;
    }
  };

  return (
    <DashboardShell
      menuItems={menuItems}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      notifications={dashboardData.notifications}
    >
      {renderContent()}
    </DashboardShell>
>>>>>>> f535e2ffd5593d42bbb99bda6f01022063b79202
  );
};

export default AdminDashboard;