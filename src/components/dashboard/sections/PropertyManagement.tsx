import React, { useState } from 'react';
import { Building, Users, DollarSign, Wrench, TrendingUp, MapPin, Calendar, AlertTriangle } from 'lucide-react';

interface Property {
  id: string;
  name: string;
  address: string;
  type: string;
  units: number;
  occupiedUnits: number;
  monthlyRevenue: number;
  monthlyExpenses: number;
  status: 'active' | 'maintenance' | 'vacant';
}

interface PropertyManagementProps {
  properties: Property[];
}

const PropertyManagement: React.FC<PropertyManagementProps> = ({ properties }) => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const totalRevenue = properties.reduce((sum, prop) => sum + prop.monthlyRevenue, 0);
  const totalExpenses = properties.reduce((sum, prop) => sum + prop.monthlyExpenses, 0);
  const netIncome = totalRevenue - totalExpenses;
  const totalUnits = properties.reduce((sum, prop) => sum + prop.units, 0);
  const occupiedUnits = properties.reduce((sum, prop) => sum + prop.occupiedUnits, 0);
  const occupancyRate = totalUnits > 0 ? (occupiedUnits / totalUnits) * 100 : 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Property Management</h2>
          <p className="text-gray-600 mt-1">Track property performance, revenue, and maintenance</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
            <Building className="h-5 w-5 mr-2" />
            Add Property
          </button>
          <button className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl font-semibold transition-colors">
            <TrendingUp className="h-5 w-5 mr-2" />
            Reports
          </button>
        </div>
      </div>

      {/* Property Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-lg mr-3">
              <Building className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Total Properties</h3>
              <p className="text-blue-600 text-2xl font-bold">{properties.length}</p>
            </div>
          </div>
          <div className="text-green-600 text-sm">+2 this quarter</div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-lg mr-3">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Occupancy Rate</h3>
              <p className="text-green-600 text-2xl font-bold">{occupancyRate.toFixed(1)}%</p>
            </div>
          </div>
          <div className="text-gray-500 text-sm">{occupiedUnits}/{totalUnits} units</div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 p-3 rounded-lg mr-3">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Monthly Revenue</h3>
              <p className="text-purple-600 text-2xl font-bold">
                KES {totalRevenue.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="text-green-600 text-sm">+8.5% from last month</div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-orange-100 p-3 rounded-lg mr-3">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Net Income</h3>
              <p className={`text-2xl font-bold ${netIncome >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                KES {netIncome.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="text-gray-500 text-sm">After expenses</div>
        </div>
      </div>

      {/* Properties List */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">Property Portfolio</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {properties.map((property) => (
            <div key={property.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${
                    property.status === 'active' ? 'bg-green-100' :
                    property.status === 'maintenance' ? 'bg-orange-100' : 'bg-red-100'
                  }`}>
                    <Building className={`h-6 w-6 ${
                      property.status === 'active' ? 'text-green-600' :
                      property.status === 'maintenance' ? 'text-orange-600' : 'text-red-600'
                    }`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{property.name}</h4>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {property.address}
                    </div>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-sm text-gray-600">
                        {property.occupiedUnits}/{property.units} units occupied
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        property.status === 'active' ? 'bg-green-100 text-green-800' :
                        property.status === 'maintenance' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {property.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">
                    KES {property.monthlyRevenue.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Monthly Revenue</div>
                  <div className="text-sm text-green-600 mt-1">
                    KES {(property.monthlyRevenue - property.monthlyExpenses).toLocaleString()} net
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Maintenance Alerts */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Maintenance Alerts</h3>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View All
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3" />
              <div>
                <p className="font-medium text-yellow-800">Green Valley Apartments - Unit 101</p>
                <p className="text-yellow-700 text-sm">Leaking faucet reported 2 days ago</p>
              </div>
            </div>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
              High Priority
            </span>
          </div>

          <div className="flex items-center justify-between p-4 bg-orange-50 border border-orange-200 rounded-xl">
            <div className="flex items-center">
              <Wrench className="h-5 w-5 text-orange-600 mr-3" />
              <div>
                <p className="font-medium text-orange-800">River View Complex - Common Area</p>
                <p className="text-orange-700 text-sm">Scheduled maintenance for next week</p>
              </div>
            </div>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
              Scheduled
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyManagement;