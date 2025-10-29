import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Building2, TrendingUp, Shield, Award, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Real Estate Investment Kenya | Murivest Realty Group',
  description: 'Premier commercial real estate investment opportunities in Nairobi, Kenya. Office buildings, retail spaces, and industrial properties with guaranteed returns. Expert property management and wealth-building strategies.',
  keywords: 'commercial real estate Kenya, office investment Nairobi, retail property Kenya, industrial real estate investment, commercial property returns Kenya, Murivest Realty Group',
};

export default function CommercialRealEstatePage() {
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
              Commercial Real Estate
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Strategic investment opportunities in Kenya's premier commercial properties.
              Office buildings, retail spaces, and industrial facilities delivering superior returns.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Investment Overview */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light text-slate-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Prime Commercial Assets
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our commercial real estate portfolio features strategically located properties in Nairobi's
                most desirable business districts. From Grade A office buildings in Westlands to modern
                retail developments in Karen, each investment is carefully selected for maximum return potential.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Building2 className="h-5 w-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">Grade A office buildings in prime locations</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">15%+ annual returns guaranteed</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">Full property management included</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-slate-50 p-8 rounded-lg border border-amber-100">
              <h3 className="text-2xl font-light text-slate-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Investment Highlights
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-amber-200">
                  <span className="text-gray-700">Minimum Investment</span>
                  <span className="font-semibold text-slate-900">$1M USD</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-amber-200">
                  <span className="text-gray-700">Target Returns</span>
                  <span className="font-semibold text-slate-900">15-20% annually</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-amber-200">
                  <span className="text-gray-700">Lease Terms</span>
                  <span className="font-semibold text-slate-900">10-15 years</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Property Management</span>
                  <span className="font-semibold text-slate-900">Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Property Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Commercial Property Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Office Buildings</h3>
              <p className="text-gray-600 leading-relaxed">
                Premium office spaces in Nairobi's business districts. Fully leased to reputable tenants
                with long-term contracts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Retail Properties</h3>
              <p className="text-gray-600 leading-relaxed">
                High-traffic retail spaces in shopping centers and commercial hubs.
                Anchored by established brands.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Industrial Facilities</h3>
              <p className="text-gray-600 leading-relaxed">
                Modern warehouses and industrial properties serving Kenya's growing logistics sector.
              </p>
            </div>
          </div>
        </div>

        {/* Why Invest */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Why Invest in Kenyan Commercial Real Estate?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-semibold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">Stable Economy</h3>
                  <p className="text-gray-600">Kenya's GDP growth of 6%+ annually creates strong demand for commercial space.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-semibold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">Prime Location</h3>
                  <p className="text-gray-600">Nairobi's position as East Africa's business hub ensures consistent occupancy.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-semibold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">Currency Appreciation</h3>
                  <p className="text-gray-600">KES/USD parity provides natural currency hedging for international investors.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-semibold text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">Professional Management</h3>
                  <p className="text-gray-600">Full-service property management ensures optimal performance and tenant satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Invest?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our exclusive network of international investors benefiting from Kenya's commercial real estate opportunities.
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
              View Properties
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
