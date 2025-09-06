import React, { ReactNode } from 'react';
import { Bell, LogOut } from 'lucide-react';
import { MenuItem, Notification } from './types';

interface DashboardShellProps {
  children: ReactNode;
  menuItems: MenuItem[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  notifications: Notification[];
}

const DashboardShell: React.FC<DashboardShellProps> = ({
  children,
  menuItems,
  activeTab,
  setActiveTab,
  notifications,
}) => {
  const unreadNotifications = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600 text-lg">Comprehensive business management system</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="h-7 w-7 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                {unreadNotifications}
              </span>
            </div>
            <div className="flex items-center space-x-3 bg-white rounded-xl px-4 py-2 shadow-sm">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Admin User</p>
                <p className="text-xs text-gray-600">Administrator</p>
              </div>
            </div>
            <button className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl">
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-xl font-semibold transition-all text-left group ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                        : 'text-gray-700 hover:bg-gray-100 hover:scale-102'
                    }`}
                  >
                    <item.icon className={`h-5 w-5 mr-3 flex-shrink-0 transition-transform group-hover:scale-110 ${
                      activeTab === item.id ? 'text-white' : 'text-gray-500'
                    }`} />
                    <span className="truncate">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
          {/* Main Content */}
          <div className="lg:col-span-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardShell;