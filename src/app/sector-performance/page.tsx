import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Building, ShoppingBag, Factory, TrendingUp, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Real Estate Sector Performance Kenya | Property Market Analysis | Murivest',
  description: 'Detailed analysis of real estate sector performance in Kenya. Office, retail, industrial, and residential market trends and performance metrics.',
  keywords: 'sector performance Kenya, real estate sectors Kenya, property market analysis Nairobi, office retail industrial performance',
};

export default function SectorPerformancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Sector Performance
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive analysis of real estate sector performance across office, retail,
              industrial, and residential markets in Kenya.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Sector Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Real Estate Sector Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Office Sector</h3>
              <p className="text-gray-600 mb-3">Grade A office buildings in prime CBD locations</p>
              <div className="text-2xl font-light text-amber-600">+8.5%</div>
              <div className="text-sm text-gray-500">YoY Growth</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Retail Sector</h3>
              <p className="text-gray-600 mb-3">Shopping centers and retail developments</p>
              <div className="text-2xl font-light text-amber-600">+12.2%</div>
              <div className="text-sm text-gray-500">YoY Growth</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Industrial Sector</h3>
              <p className="text-gray-600 mb-3">Warehouses and logistics facilities</p>
              <div className="text-2xl font-light text-amber-600">+15.8%</div>
              <div className="text-sm text-gray-500">YoY Growth</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Overall Market</h3>
              <p className="text-gray-600 mb-3">Total commercial real estate market</p>
              <div className="text-2xl font-light text-amber-600">+11.7%</div>
              <div className="text-sm text-gray-500">YoY Growth</div>
            </div>
          </div>
        </div>

        {/* Office Sector Deep Dive */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light text-slate-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Office Sector Performance
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nairobi's office market continues to show strong fundamentals driven by
                business process outsourcing growth and multinational company expansions.
                Prime CBD locations maintain high occupancy rates with limited new supply.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <BarChart3 className="h-5 w-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">95% average occupancy rate</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">8-12% rental growth annually</span>
                </div>
                <div className="flex items-center">
                  <Building className="h-5 w-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">Limited new supply pipeline</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-slate-50 p-8 rounded-lg border border-amber-100">
              <h3 className="text-2xl font-light text-slate-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Office Market Metrics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-amber-200">
                  <span className="text-gray-700">Prime CBD Rent:</span>
                  <span className="font-semibold text-slate-900">$4.50/sqft/month</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-amber-200">
                  <span className="text-gray-700">Westlands Prime:</span>
                  <span className="font-semibold text-slate-900">$3.80/sqft/month</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-amber-200">
                  <span className="text-gray-700">Average Vacancy:</span>
                  <span className="font-semibold text-slate-900">5.2%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">New Supply (2025):</span>
                  <span className="font-semibold text-slate-900">450,000 sqft</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Retail Sector Analysis */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-amber-50 to-slate-50 p-8 rounded-lg border border-amber-100">
              <h3 className="text-2xl font-light text-slate-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Retail Market Dynamics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-amber-200">
                  <span className="text-gray-700">Prime GLA Rent:</span>
                  <span className="font-semibold text-slate-900">$25/sqft/month</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-amber-200">
                  <span className="text-gray-700">Secondary GLA:</span>
                  <span className="font-semibold text-slate-900">$15/sqft/month</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-amber-200">
                  <span className="text-gray-700">Occupancy Rate:</span>
                  <span className="font-semibold text-slate-900">92%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">E-commerce Impact:</span>
                  <span className="font-semibold text-slate-900">Growing</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-light text-slate-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Retail Sector Trends
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The retail sector is experiencing robust growth driven by Nairobi's expanding
                middle class and increasing consumer spending. Modern shopping centers with
                entertainment and dining components are particularly popular.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <ShoppingBag className="h-5 w-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">Growing middle-class consumer base</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">15% annual retail sales growth</span>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="h-5 w-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">Mixed-use developments gaining popularity</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industrial Sector Performance */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Industrial & Logistics Sector
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-6">Key Performance Indicators</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Prime Warehouse Rent:</span>
                  <span className="font-semibold">$0.35/sqft/month</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Logistics Park Rent:</span>
                  <span className="font-semibold">$0.45/sqft/month</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Vacancy Rate:</span>
                  <span className="font-semibold">3.8%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">New Supply Pipeline:</span>
                  <span className="font-semibold">2.1M sqft (2025)</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-6">Growth Drivers</h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">E-commerce Boom</h4>
                  <p className="text-sm text-green-700">Rapid growth in online retail driving demand for fulfillment centers</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Manufacturing Revival</h4>
                  <p className="text-sm text-blue-700">Increasing local manufacturing and light industry operations</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-800 mb-2">Logistics Hubs</h4>
                  <p className="text-sm text-purple-700">Kenya's position as East Africa's logistics gateway</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Outlook */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-slate-50 to-amber-50 p-8 rounded-lg">
            <h2 className="text-3xl font-light text-slate-900 text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Sector Outlook 2025
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">Office</div>
                <div className="text-gray-600">Stable growth with limited supply</div>
                <div className="text-lg font-medium text-slate-900 mt-2">+6-8% rental growth</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">Retail</div>
                <div className="text-gray-600">Strong consumer demand</div>
                <div className="text-lg font-medium text-slate-900 mt-2">+10-12% growth</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">Industrial</div>
                <div className="text-gray-600">Supply chain transformation</div>
                <div className="text-lg font-medium text-slate-900 mt-2">+12-15% growth</div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Recommendations */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Investment Recommendations by Sector
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <Building className="h-8 w-8 text-amber-600 mb-4" />
              <h3 className="text-xl font-medium text-slate-900 mb-3">Office Investments</h3>
              <p className="text-gray-600 text-sm mb-4">Focus on Grade A buildings in established CBD locations with long-term leases to creditworthy tenants.</p>
              <div className="text-amber-600 font-medium">High Confidence</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <ShoppingBag className="h-8 w-8 text-amber-600 mb-4" />
              <h3 className="text-xl font-medium text-slate-900 mb-3">Retail Opportunities</h3>
              <p className="text-gray-600 text-sm mb-4">Target modern shopping centers with diversified tenant mix and entertainment components.</p>
              <div className="text-amber-600 font-medium">Strong Potential</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <Factory className="h-8 w-8 text-amber-600 mb-4" />
              <h3 className="text-xl font-medium text-slate-900 mb-3">Industrial Focus</h3>
              <p className="text-gray-600 text-sm mb-4">Prioritize last-mile distribution centers and modern warehouses near major transport corridors.</p>
              <div className="text-amber-600 font-medium">Excellent Growth</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Sector-Specific Investment Strategies
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get detailed analysis of specific real estate sectors and investment opportunities tailored to your objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Sector Analysis Consultation
            </Link>
            <Link
              href="/quarterly-market-reports"
              className="border border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all"
            >
              View Market Reports
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}