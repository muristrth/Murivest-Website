import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Building, DollarSign, PieChart, Shield, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'REIT Opportunities Kenya | Real Estate Investment Trusts | Murivest',
  description: 'Invest in Real Estate Investment Trusts (REITs) in Kenya. Diversified property portfolios with regular dividends and professional management.',
  keywords: 'REIT Kenya, real estate investment trusts Kenya, property REIT investment, dividend yielding investments Kenya, REIT returns',
};

export default function REITOpportunitiesPage() {
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
              REIT Opportunities
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Real Estate Investment Trusts offering diversified property exposure with regular dividends
              and liquidity through public market trading.
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
                <PieChart className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Diversified Portfolio</h3>
              <p className="text-gray-600">Exposure to multiple property types and locations reducing investment risk.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Regular Dividends</h3>
              <p className="text-gray-600">Quarterly dividend payments providing steady income stream to investors.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">CMA-regulated with strict governance and transparency requirements.</p>
            </div>
          </div>
        </div>

        {/* REIT Structure */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            How REITs Work
          </h2>
          <div className="bg-gradient-to-r from-amber-50 to-slate-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Pool Capital</h3>
                <p className="text-gray-600 text-sm">Multiple investors pool funds to purchase property portfolio</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Professional Management</h3>
                <p className="text-gray-600 text-sm">Expert team manages properties and tenant relationships</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Distribute Income</h3>
                <p className="text-gray-600 text-sm">90% of rental income distributed as dividends quarterly</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Capital Appreciation</h3>
                <p className="text-gray-600 text-sm">Share price growth through property value increases</p>
              </div>
            </div>
          </div>
        </div>

        {/* REIT Portfolio */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Murivest REIT Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-4">Nairobi Prime REIT</h3>
              <p className="text-gray-600 mb-6">Focused on Grade A office buildings in Nairobi CBD</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Portfolio Value:</span>
                  <span className="font-medium">$50M</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Properties:</span>
                  <span className="font-medium">8 office buildings</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Dividend Yield:</span>
                  <span className="font-medium text-amber-600">8.5%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Market Cap:</span>
                  <span className="font-medium">$75M</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-4">East Africa Retail REIT</h3>
              <p className="text-gray-600 mb-6">Pan-regional retail properties across East Africa</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Portfolio Value:</span>
                  <span className="font-medium">$35M</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Properties:</span>
                  <span className="font-medium">12 shopping centers</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Dividend Yield:</span>
                  <span className="font-medium text-amber-600">9.2%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Market Cap:</span>
                  <span className="font-medium">$55M</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            REIT Investment Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Users className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Liquidity</h3>
                <p className="text-gray-600">Publicly traded shares can be bought and sold daily on the stock exchange.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <DollarSign className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Income Focus</h3>
                <p className="text-gray-600">Mandatory dividend distribution ensures regular income for investors.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <PieChart className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Diversification</h3>
                <p className="text-gray-600">Instant exposure to multiple properties without managing individual assets.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Building className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Professional Management</h3>
                <p className="text-gray-600">Expert property management team handles all operational aspects.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Minimums */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-slate-50 to-amber-50 p-8 rounded-lg">
            <h2 className="text-3xl font-light text-slate-900 text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Investment Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-light text-amber-600 mb-2">$1,000</div>
                <div className="text-gray-600">Minimum Investment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-amber-600 mb-2">8-10%</div>
                <div className="text-gray-600">Dividend Yield</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-amber-600 mb-2">Quarterly</div>
                <div className="text-gray-600">Dividend Frequency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-amber-600 mb-2">NSE</div>
                <div className="text-gray-600">Trading Venue</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Invest in REITs Today
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Gain exposure to Kenya's commercial real estate market with the liquidity and diversification of publicly traded REITs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/market"
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