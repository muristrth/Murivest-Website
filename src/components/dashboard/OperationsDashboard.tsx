'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import {
  Building,
  Wrench,
  Users,
  Calendar,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  DollarSign,
  BarChart3,
  FileText,
  Bell
} from 'lucide-react';

interface Property {
  id: string;
  name: string;
  address: string;
  units: Unit[];
  occupancyRate: number;
  maintenanceRequests: MaintenanceRequest[];
}

interface Unit {
  id: string;
  name: string;
  status: 'occupied' | 'vacant' | 'maintenance';
  tenant?: Tenant;
}

interface Tenant {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface MaintenanceRequest {
  id: string;
  description: string;
  status: 'open' | 'in_progress' | 'resolved';
  priority: 'low' | 'medium' | 'high';
  unitId: string;
  tenantId?: string;
  createdAt: string;
}

interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in_progress' | 'completed';
  dueDate: string;
  assignedTo?: string;
}

const OperationsDashboard = () => {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState('overview');
  const [properties, setProperties] = useState<Property[]>([]);
  const [maintenanceRequests, setMaintenanceRequests] = useState<MaintenanceRequest[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch properties
        const propertiesResponse = await fetch('/api/properties');
        if (propertiesResponse.ok) {
          const propertiesData = await propertiesResponse.json();
          setProperties(propertiesData);
        }

        // Fetch maintenance requests
        const maintenanceResponse = await fetch('/api/maintenance');
        if (maintenanceResponse.ok) {
          const maintenanceData = await maintenanceResponse.json();
          setMaintenanceRequests(maintenanceData);
        }

        // For now, keep mock tasks until we implement task management
        const mockTasks: Task[] = [
          {
            id: '1',
            title: 'Inspect Properties',
            description: 'Monthly property inspection and maintenance check',
            priority: 'high',
            status: 'pending',
            dueDate: new Date(Date.now() + 86400000).toISOString()
          },
          {
            id: '2',
            title: 'Follow up on maintenance requests',
            description: 'Contact tenants about pending maintenance issues',
            priority: 'medium',
            status: 'in_progress',
            dueDate: new Date().toISOString()
          }
        ];
        setTasks(mockTasks);

      } catch (error) {
        console.error('Error fetching data:', error);
        // Keep mock data as fallback
        const mockProperties: Property[] = [
          {
            id: '1',
            name: 'Green Valley Apartments',
            address: 'Kilimani, Nairobi',
            units: [
              { id: '1', name: 'Unit 101', status: 'occupied', tenant: { id: '1', name: 'John Doe', email: 'john@example.com', phone: '+254700000000' } },
              { id: '2', name: 'Unit 102', status: 'vacant' },
              { id: '3', name: 'Unit 103', status: 'maintenance' }
            ],
            occupancyRate: 67,
            maintenanceRequests: []
          }
        ];
        setProperties(mockProperties);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'properties', label: 'Properties', icon: Building },
    { id: 'maintenance', label: 'Maintenance', icon: Wrench },
    { id: 'tasks', label: 'Tasks', icon: CheckCircle },
    { id: 'reports', label: 'Reports', icon: FileText }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Building className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {properties.length}
          </h3>
          <p className="text-gray-600 text-sm">Total Properties</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <Users className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {properties.reduce((acc, prop) => acc + prop.units.filter(u => u.status === 'occupied').length, 0)}
          </h3>
          <p className="text-gray-600 text-sm">Occupied Units</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Wrench className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {maintenanceRequests.filter(m => m.status === 'open').length}
          </h3>
          <p className="text-gray-600 text-sm">Open Maintenance</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <CheckCircle className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {tasks.filter(t => t.status === 'completed').length}
          </h3>
          <p className="text-gray-600 text-sm">Completed Tasks</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Maintenance Requests</h3>
          <div className="space-y-4">
            {maintenanceRequests.slice(0, 3).map((request) => (
              <div key={request.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg mr-4 ${
                    request.priority === 'high' ? 'bg-red-100' :
                    request.priority === 'medium' ? 'bg-yellow-100' : 'bg-green-100'
                  }`}>
                    <AlertTriangle className={`h-5 w-5 ${
                      request.priority === 'high' ? 'text-red-600' :
                      request.priority === 'medium' ? 'text-yellow-600' : 'text-green-600'
                    }`} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{request.description}</p>
                    <p className="text-gray-600 text-sm">
                      Unit {properties.find(p => p.units.some(u => u.id === request.unitId))?.units.find(u => u.id === request.unitId)?.name}
                    </p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  request.status === 'open' ? 'bg-red-100 text-red-800' :
                  request.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {request.status.replace('_', ' ')}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Today's Tasks</h3>
          <div className="space-y-4">
            {tasks.filter(t => new Date(t.dueDate).toDateString() === new Date().toDateString()).map((task) => (
              <div key={task.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg mr-4 ${
                    task.status === 'completed' ? 'bg-green-100' :
                    task.status === 'in_progress' ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    <CheckCircle className={`h-5 w-5 ${
                      task.status === 'completed' ? 'text-green-600' :
                      task.status === 'in_progress' ? 'text-blue-600' : 'text-gray-600'
                    }`} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{task.title}</p>
                    <p className="text-gray-600 text-sm">{task.description}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  task.priority === 'high' ? 'bg-red-100 text-red-800' :
                  task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderProperties = () => (
    <div className="space-y-6">
      {properties.map((property) => (
        <div key={property.id} className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{property.name}</h3>
              <p className="text-gray-600 flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {property.address}
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-600">{property.occupancyRate}%</p>
              <p className="text-gray-600 text-sm">Occupancy Rate</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-gray-600 text-sm mb-1">Total Units</p>
              <p className="font-bold text-gray-900">{property.units.length}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-gray-600 text-sm mb-1">Occupied</p>
              <p className="font-bold text-green-600">
                {property.units.filter(u => u.status === 'occupied').length}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-gray-600 text-sm mb-1">Vacant</p>
              <p className="font-bold text-orange-600">
                {property.units.filter(u => u.status === 'vacant').length}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Units</h4>
            {property.units.map((unit) => (
              <div key={unit.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg mr-4 ${
                    unit.status === 'occupied' ? 'bg-green-100' :
                    unit.status === 'vacant' ? 'bg-orange-100' : 'bg-red-100'
                  }`}>
                    <Building className={`h-5 w-5 ${
                      unit.status === 'occupied' ? 'text-green-600' :
                      unit.status === 'vacant' ? 'text-orange-600' : 'text-red-600'
                    }`} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{unit.name}</p>
                    {unit.tenant && (
                      <p className="text-gray-600 text-sm">{unit.tenant.name}</p>
                    )}
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  unit.status === 'occupied' ? 'bg-green-100 text-green-800' :
                  unit.status === 'vacant' ? 'bg-orange-100 text-orange-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {unit.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderMaintenance = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Maintenance Requests</h3>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            New Request
          </button>
        </div>

        <div className="space-y-4">
          {maintenanceRequests.map((request) => (
            <div key={request.id} className="p-4 border border-gray-200 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg mr-4 ${
                    request.priority === 'high' ? 'bg-red-100' :
                    request.priority === 'medium' ? 'bg-yellow-100' : 'bg-green-100'
                  }`}>
                    <AlertTriangle className={`h-5 w-5 ${
                      request.priority === 'high' ? 'text-red-600' :
                      request.priority === 'medium' ? 'text-yellow-600' : 'text-green-600'
                    }`} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{request.description}</p>
                    <p className="text-gray-600 text-sm">
                      Unit {properties.find(p => p.units.some(u => u.id === request.unitId))?.units.find(u => u.id === request.unitId)?.name}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    request.status === 'open' ? 'bg-red-100 text-red-800' :
                    request.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {request.status.replace('_', ' ')}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    request.priority === 'high' ? 'bg-red-100 text-red-800' :
                    request.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {request.priority}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-500 text-sm">
                  Created: {new Date(request.createdAt).toLocaleDateString()}
                </p>
                <div className="flex space-x-2">
                  <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">
                    Update Status
                  </button>
                  <button className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">
                    Assign Technician
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTasks = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Task Management</h3>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            New Task
          </button>
        </div>

        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="p-4 border border-gray-200 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg mr-4 ${
                    task.status === 'completed' ? 'bg-green-100' :
                    task.status === 'in_progress' ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    <CheckCircle className={`h-5 w-5 ${
                      task.status === 'completed' ? 'text-green-600' :
                      task.status === 'in_progress' ? 'text-blue-600' : 'text-gray-600'
                    }`} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{task.title}</p>
                    <p className="text-gray-600 text-sm">{task.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    task.priority === 'high' ? 'bg-red-100 text-red-800' :
                    task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {task.priority}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    task.status === 'completed' ? 'bg-green-100 text-green-800' :
                    task.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {task.status.replace('_', ' ')}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-500 text-sm">
                  Due: {new Date(task.dueDate).toLocaleDateString()}
                </p>
                <div className="flex space-x-2">
                  <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">
                    Update Status
                  </button>
                  <button className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm font-semibold">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
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
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">Occupancy Report</h3>
          <p className="text-gray-600 text-sm mb-4">Monthly occupancy trends</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full">
            Generate Report
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <Wrench className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">Maintenance Report</h3>
          <p className="text-gray-600 text-sm mb-4">Maintenance costs and trends</p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full">
            Generate Report
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <CheckCircle className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">Task Completion</h3>
          <p className="text-gray-600 text-sm mb-4">Task completion statistics</p>
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
      case 'maintenance': return renderMaintenance();
      case 'tasks': return renderTasks();
      case 'reports': return renderReports();
      default: return renderOverview();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading operations dashboard...</p>
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
              Operations Dashboard
            </h1>
            <p className="text-gray-600 text-lg">
              Manage properties, maintenance, and daily operations
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
    </div>
  );
};

export default OperationsDashboard;