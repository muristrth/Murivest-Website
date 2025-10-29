import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, Target, Users, BarChart3, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Private Equity Real Estate Kenya | Direct Property Investment | Murivest',
  description: 'Private equity real estate investments in Kenya. Direct ownership in premium properties with active management and value creation strategies.',
  keywords: 'private equity real estate Kenya, direct property investment Nairobi, private equity property funds, real estate private equity Kenya',
};

export default function PrivateEquityRealEstatePage() {
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
              Private Equity Real Estate
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Direct ownership in premium real estate assets with active management and value creation.
              Exclusive opportunities for sophisticated investors.
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
                <Target className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Direct Ownership</h3>
              <p className="text-gray-600">Full ownership stake in individual properties or portfolios with complete control.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Value Creation</h3>
              <p className="text-gray-600">Active management strategies to enhance property value and rental income.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Exclusive Access</h3>
              <p className="text-gray-600">Private equity funds available only to accredited investors with minimum commitments.</p>
            </div>
          </div>
        </div>

        {/* Investment Strategy */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Investment Strategy
          </h2>
          <div className="bg-gradient-to-r from-amber-50 to-slate-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Acquisition</h3>
                <p className="text-gray-600 text-sm">Strategic acquisition of undervalued or development properties</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Value Enhancement</h3>
                <p className="text-gray-600 text-sm">Active management and capital improvements to increase value</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Stabilization</h3>
                <p className="text-gray-600 text-sm">Lease-up and operational stabilization for maximum income</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Strategic Exit</h3>
                <p className="text-gray-600 text-sm">Sale or refinancing at optimal valuation for capital return</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fund Offerings */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Private Equity Funds
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-4">Murivest Core Fund I</h3>
              <p className="text-gray-600 mb-6">Core real estate fund focused on stabilized, income-producing properties</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Fund Size:</span>
                  <span className="font-medium">$25M</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Target IRR:</span>
                  <span className="font-medium text-amber-600">12-15%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Hold Period:</span>
                  <span className="font-medium">5-7 years</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Minimum Investment:</span>
                  <span className="font-medium">$500K</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-4">Murivest Value Fund II</h3>
              <p className="text-gray-600 mb-6">Value-add fund targeting underperforming properties with improvement potential</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Fund Size:</span>
                  <span className="font-medium">$40M</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Target IRR:</span>
                  <span className="font-medium text-amber-600">18-22%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Hold Period:</span>
                  <span className="font-medium">4-6 years</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Minimum Investment:</span>
                  <span className="font-medium">$1M</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Private Equity Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <BarChart3 className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Higher Returns</h3>
                <p className="text-gray-600">Potential for superior returns through active management and value creation strategies.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Shield className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Direct Ownership</h3>
                <p className="text-gray-600">Full ownership stake with voting rights and direct influence on property decisions.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Users className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Limited Partners</h3>
                <p className="text-gray-600">Smaller fund sizes allow for more personalized service and direct investor access.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Target className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Active Management</h3>
                <p className="text-gray-600">Hands-on approach to property management and capital improvements for value enhancement.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accreditation Requirements */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-slate-50 to-amber-50 p-8 rounded-lg">
            <h2 className="text-3xl font-light text-slate-900 text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Investor Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">$500K+</div>
                <div className="text-gray-600">Minimum Investment</div>
                <div className="text-sm text-gray-500 mt-2">Accredited investors only</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">3-5 Years</div>
                <div className="text-gray-600">Lock-up Period</div>
                <div className="text-sm text-gray-500 mt-2">Capital committed for strategy execution</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">Annual</div>
                <div className="text-gray-600">Reporting</div>
                <div className="text-sm text-gray-500 mt-2">Detailed performance updates</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Private Equity Opportunities
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            For accredited investors seeking direct ownership in premium real estate assets with active management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Request Private Placement Memorandum
            </Link>
            <Link
              href="/market"
              className="border border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all"
            >
              View Fund Performance
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
