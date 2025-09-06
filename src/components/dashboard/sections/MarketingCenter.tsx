import React, { useState } from 'react';
import { Plus, Mail, Globe, Target, DollarSign, BarChart3, Edit, Smartphone } from 'lucide-react';
import { Campaign } from '../types';
import DashboardModals from '../DashboardModals';
import { formatCurrency } from '../utils';

interface MarketingCenterProps {
  campaigns: Campaign[];
}

const MarketingCenter: React.FC<MarketingCenterProps> = ({ campaigns }) => {
  // Explicitly define the state type to match DashboardModals' expected props.
  const [modals, setModals] = useState<{ [key: string]: boolean }>({ createCampaign: false });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Marketing Center</h2>
          <p className="text-gray-600 mt-1">Comprehensive marketing campaign management and analytics</p>
        </div>
        <button
          // Update the onClick handler to match the new state type.
          onClick={() => setModals(prev => ({ ...prev, createCampaign: true }))}
          className="flex items-center bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <Plus className="h-5 w-5 mr-2" />
          New Campaign
        </button>
      </div>

      {/* Marketing Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-lg mr-3">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Email Marketing</h3>
              <p className="text-blue-600 text-2xl font-bold">12</p>
            </div>
          </div>
          <div className="text-green-500 text-sm">Active Campaigns</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-lg mr-3">
              <Globe className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Social Media</h3>
              <p className="text-green-600 text-2xl font-bold">45.2K</p>
            </div>
          </div>
          <div className="text-green-500 text-sm">Total Reach</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 p-3 rounded-lg mr-3">
              <Target className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Google Ads</h3>
              <p className="text-purple-600 text-2xl font-bold">3.2%</p>
            </div>
          </div>
          <div className="text-green-500 text-sm">Click Rate</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-orange-100 p-3 rounded-lg mr-3">
              <DollarSign className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Total ROI</h3>
              <p className="text-orange-600 text-2xl font-bold">4.2x</p>
            </div>
          </div>
          <div className="text-green-500 text-sm">Above industry avg</div>
        </div>
      </div>

      {/* Campaign Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Active Campaigns</h3>
          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <div key={campaign.id} className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      campaign.type === 'email' ? 'bg-blue-100' :
                      campaign.type === 'social_media' ? 'bg-green-100' :
                      'bg-purple-100'
                    }`}>
                      {campaign.type === 'email' ? <Mail className="h-5 w-5 text-blue-600" /> :
                       campaign.type === 'social_media' ? <Globe className="h-5 w-5 text-green-600" /> :
                       <Target className="h-5 w-5 text-purple-600" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{campaign.name}</h4>
                      <p className="text-gray-600 text-sm">{campaign.type.replace('_', ' ').toUpperCase()}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    campaign.status === 'active' ? 'bg-green-100 text-green-800' :
                    campaign.status === 'paused' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {campaign.status}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-sm text-gray-600">Impressions</p>
                    <p className="font-bold text-gray-900">{campaign.metrics.impressions.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Clicks</p>
                    <p className="font-bold text-blue-600">{campaign.metrics.clicks.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Conversions</p>
                    <p className="font-bold text-green-600">{campaign.metrics.conversions}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">ROI</p>
                    <p className="font-bold text-purple-600">{campaign.metrics.roi}x</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Budget: {formatCurrency(campaign.budget.spent)} / {formatCurrency(campaign.budget.allocated)}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors">
                      <BarChart3 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Marketing Analytics</h3>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Email Open Rate</span>
                <span className="font-semibold text-blue-600">24.5%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Industry average: 21.3%</p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Social Engagement</span>
                <span className="font-semibold text-green-600">8.9%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '89%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Excellent engagement rate</p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Lead Quality Score</span>
                <span className="font-semibold text-purple-600">87/100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">High quality leads</p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Conversion Rate</span>
                <span className="font-semibold text-orange-600">12.3%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Above target: 10%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Marketing Actions */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
            <Mail className="h-8 w-8 text-blue-600 mb-2" />
            <span className="text-sm font-medium text-blue-700">Send Email</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
            <Smartphone className="h-8 w-8 text-green-600 mb-2" />
            <span className="text-sm font-medium text-green-700">SMS Blast</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
            <Target className="h-8 w-8 text-purple-600 mb-2" />
            <span className="text-sm font-medium text-purple-700">Create Ad</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors">
            <BarChart3 className="h-8 w-8 text-orange-600 mb-2" />
            <span className="text-sm font-medium text-orange-700">View Analytics</span>
          </button>
        </div>
      </div>
      <DashboardModals modals={modals} setModals={setModals} />
    </div>
  );
};

export default MarketingCenter;