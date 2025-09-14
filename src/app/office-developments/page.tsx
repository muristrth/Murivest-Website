import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Building, MapPin, Calendar, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Office Developments Kenya | Premium Office Investment Nairobi | Murivest',
  description: 'Invest in premium office developments in Nairobi, Kenya. Grade A office buildings with guaranteed returns and professional property management services.',
  keywords: 'office developments Kenya, office investment Nairobi, grade A offices Kenya, commercial office buildings, office property investment Kenya',
};

export default function OfficeDevelopmentsPage() {
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
              Office Developments
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Premium office buildings in Nairobi's most prestigious business districts.
              Fully leased Grade A properties delivering consistent returns.
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
                <Building className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Grade A Buildings</h3>
              <p className="text-gray-600">Modern office buildings with state-of-the-art facilities and premium finishes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Prime Locations</h3>
              <p className="text-gray-600">Strategic locations in Westlands, Kilimani, and Karen business districts.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Guaranteed Returns</h3>
              <p className="text-gray-600">15%+ annual returns with long-term leases to reputable corporate tenants.</p>
            </div>
          </div>
        </div>

        {/* Development Pipeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Current Office Developments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-light text-slate-900">Westlands Tower</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Completed</span>
              </div>
              <p className="text-gray-600 mb-4">15-story Grade A office building in Westlands CBD</p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex justify-between">
                  <span>Total Area:</span>
                  <span>25,000 sqm</span>
                </div>
                <div className="flex justify-between">
                  <span>Occupancy:</span>
                  <span>95%</span>
                </div>
                <div className="flex justify-between">
                  <span>Lease Term:</span>
                  <span>12 years</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-light text-slate-900">Kilimani Plaza</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Under Development</span>
              </div>
              <p className="text-gray-600 mb-4">10-story mixed-use development with retail and office spaces</p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex justify-between">
                  <span>Total Area:</span>
                  <span>18,000 sqm</span>
                </div>
                <div className="flex justify-between">
                  <span>Completion:</span>
                  <span>Q2 2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Pre-leased:</span>
                  <span>70%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Investment Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Long-term Leases</h3>
              <p className="text-gray-600 text-sm">10-15 year leases with reputable corporate tenants</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Modern Facilities</h3>
              <p className="text-gray-600 text-sm">State-of-the-art buildings with premium amenities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Prime Locations</h3>
              <p className="text-gray-600 text-sm">High-demand business districts with excellent connectivity</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Stable Returns</h3>
              <p className="text-gray-600 text-sm">Predictable rental income with inflation protection</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Invest in Premium Office Space
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our exclusive investor network and benefit from Nairobi's growing office market.
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
              View Office Properties
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}