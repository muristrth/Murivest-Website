import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag, Users, TrendingUp, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Retail & Mixed-Use Properties Kenya | Shopping Center Investment | Murivest',
  description: 'Invest in retail and mixed-use properties in Nairobi, Kenya. Shopping centers and commercial developments with high foot traffic and stable returns.',
  keywords: 'retail properties Kenya, mixed-use development Nairobi, shopping center investment Kenya, commercial retail space, retail property returns',
};

export default function RetailMixedUsePage() {
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
              Retail & Mixed-Use
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              High-traffic retail spaces and mixed-use developments in Nairobi's premier locations.
              Anchored by established brands with guaranteed rental income.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Key Features */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <ShoppingBag className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Prime Retail Locations</h3>
              <p className="text-gray-600">High-traffic shopping centers and commercial hubs with established customer bases.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Established Tenants</h3>
              <p className="text-gray-600">Leased to reputable retail brands and service providers with proven track records.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Growing Demand</h3>
              <p className="text-gray-600">Nairobi's expanding middle class drives consistent demand for retail space.</p>
            </div>
          </div>
        </div>

        {/* Property Portfolio */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Retail Property Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-4">Karen Shopping Centre</h3>
              <p className="text-gray-600 mb-6">Premium retail complex in Nairobi's upscale Karen district</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Total GLA:</span>
                  <span className="font-medium">8,500 sqm</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Major Tenants:</span>
                  <span className="font-medium">Artcafé, Nakumatt</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Occupancy Rate:</span>
                  <span className="font-medium">98%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Annual Returns:</span>
                  <span className="font-medium text-amber-600">16%</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-4">Westlands Mall</h3>
              <p className="text-gray-600 mb-6">Modern mixed-use development combining retail and office spaces</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Total GLA:</span>
                  <span className="font-medium">12,000 sqm</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Major Tenants:</span>
                  <span className="font-medium">Shoprite, KCB Bank</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Occupancy Rate:</span>
                  <span className="font-medium">95%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Annual Returns:</span>
                  <span className="font-medium text-amber-600">15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Advantages */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Market Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <MapPin className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Strategic Locations</h3>
                <p className="text-gray-600">Properties located in high-traffic areas with excellent accessibility and visibility.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Users className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Diverse Tenant Mix</h3>
                <p className="text-gray-600">Balanced portfolio of essential services, entertainment, and luxury retail tenants.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <TrendingUp className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Inflation Protection</h3>
                <p className="text-gray-600">Rental escalations indexed to inflation ensure real returns above inflation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <ShoppingBag className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Essential Services</h3>
                <p className="text-gray-600">Tenants providing essential goods and services ensure stable occupancy during economic cycles.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Invest in Retail Excellence
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our exclusive investor network and benefit from Nairobi's booming retail sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/properties"
              className="border border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all"
            >
              View Retail Properties
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}