import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, Target, Users, BarChart3, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Private Real Estate Investment Firms Kenya | Institutional Asset Managers Nairobi | Murivest Realty Group',
  description: 'Leading private real estate investment firms in Kenya. Institutional asset management in Nairobi with direct property ownership, active management, and value creation strategies for UK and Kenyan executives and family offices.',
  keywords: 'private real estate investment firms Kenya, institutional asset managers Nairobi, private equity real estate Kenya, direct property investment Nairobi, private equity property funds, real estate private equity Kenya, discreet real estate investment advisory, family office investment opportunities Africa, legacy real estate investments, capital preservation real estate strategies, old money real estate investments, Africa private wealth real estate deal',
};

export default function PrivateEquityRealEstatePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-amber-600/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-[10px] tracking-[0.5em] uppercase text-amber-500 font-bold mb-6">
              Private Equity Real Estate
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-serif text-white leading-tight mb-8">
              Direct Ownership & Value <span className="italic text-amber-200/80">Creation Strategies</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-lg leading-relaxed font-light border-l-2 border-amber-500/50 pl-6">
              Direct ownership in premium real estate assets with active management and value creation. 
              Exclusive opportunities for sophisticated institutional and HNW investors.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-slate-900 border-y border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-6">
          {[
            { icon: Target, text: "Direct Asset Ownership" },
            { icon: TrendingUp, text: "Value Creation Focus" },
            { icon: Shield, text: "Active Management" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <item.icon className="w-4 h-4 text-amber-500" />
              <span className="text-[10px] tracking-widest uppercase text-slate-300 font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Key Features */}
        <div className="mb-24">
          <h3 className="text-xs tracking-[0.3em] uppercase text-amber-600 font-bold mb-8">Investment Features</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 p-8 hover:border-amber-500 transition-colors">
              <div className="w-12 h-12 bg-amber-600/10 border border-amber-600/30 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-lg font-serif text-white mb-3">Direct Ownership</h3>
              <p className="text-slate-400 text-sm font-light">Full ownership stake in individual properties or portfolios with complete control and upside participation.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 hover:border-amber-500 transition-colors">
              <div className="w-12 h-12 bg-amber-600/10 border border-amber-600/30 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-lg font-serif text-white mb-3">Value Creation</h3>
              <p className="text-slate-400 text-sm font-light">Active management strategies to enhance property value and rental income.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 hover:border-amber-500 transition-colors">
              <div className="w-12 h-12 bg-amber-600/10 border border-amber-600/30 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-lg font-serif text-white mb-3">Exclusive Access</h3>
              <p className="text-slate-400 text-sm font-light">Private equity funds available only to accredited investors with minimum commitments.</p>
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
