import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Warehouse, Truck, Factory, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industrial Properties Kenya | Warehouse Investment Nairobi | Murivest',
  description: 'Invest in industrial properties and warehouses in Nairobi, Kenya. Modern logistics facilities with guaranteed returns and professional management.',
  keywords: 'industrial properties Kenya, warehouse investment Nairobi, logistics facilities Kenya, industrial real estate investment, warehouse returns Kenya',
};

export default function IndustrialPropertiesPage() {
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
              Industrial Properties
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Modern warehouses and industrial facilities serving Kenya's growing logistics and manufacturing sectors.
              Strategic investments with stable long-term returns.
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
                <Warehouse className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Modern Facilities</h3>
              <p className="text-gray-600">State-of-the-art warehouses with advanced logistics capabilities and security systems.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Strategic Locations</h3>
              <p className="text-gray-600">Prime locations near major highways, ports, and industrial zones for optimal distribution.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Growing Demand</h3>
              <p className="text-gray-600">Kenya's expanding e-commerce and manufacturing sectors drive warehouse demand.</p>
            </div>
          </div>
        </div>

        {/* Property Portfolio */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Industrial Property Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-4">Nairobi Logistics Hub</h3>
              <p className="text-gray-600 mb-6">Modern distribution center serving e-commerce and retail sectors</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Total Area:</span>
                  <span className="font-medium">15,000 sqm</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Major Tenants:</span>
                  <span className="font-medium">Jumia, KCB Logistics</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Clear Height:</span>
                  <span className="font-medium">12m</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Annual Returns:</span>
                  <span className="font-medium text-amber-600">14%</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-4">Industrial Park West</h3>
              <p className="text-gray-600 mb-6">Light manufacturing and logistics complex with modern amenities</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Total Area:</span>
                  <span className="font-medium">22,000 sqm</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Major Tenants:</span>
                  <span className="font-medium">Manufacturing firms</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Power Backup:</span>
                  <span className="font-medium">24/7 generators</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Annual Returns:</span>
                  <span className="font-medium text-amber-600">13%</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Logistics Hub</h3>
              <p className="text-gray-600 text-sm">Strategic location near major transport corridors and ports</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Modern Facilities</h3>
              <p className="text-gray-600 text-sm">High-clearance warehouses with advanced loading systems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Stable Demand</h3>
              <p className="text-gray-600 text-sm">Growing e-commerce and manufacturing sectors ensure occupancy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Warehouse className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Long-term Leases</h3>
              <p className="text-gray-600 text-sm">5-10 year leases with reputable logistics and manufacturing companies</p>
            </div>
          </div>
        </div>

        {/* Investment Returns */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-amber-50 to-slate-50 p-8 rounded-lg">
            <h2 className="text-3xl font-light text-slate-900 text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Investment Returns
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">13-15%</div>
                <div className="text-gray-600">Annual Returns</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">$2M+</div>
                <div className="text-gray-600">Minimum Investment</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">7-10 Years</div>
                <div className="text-gray-600">Lease Terms</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Invest in Industrial Growth
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Capitalize on Kenya's expanding logistics and manufacturing sectors with our industrial property investments.
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
              View Industrial Properties
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
