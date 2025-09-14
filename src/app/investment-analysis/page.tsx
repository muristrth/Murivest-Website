import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, Target, BarChart3, PieChart, Calculator } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Investment Analysis Kenya | Real Estate Investment Analysis | Murivest',
  description: 'Professional real estate investment analysis services. Financial modeling, risk assessment, and return projections for Kenyan property investments.',
  keywords: 'investment analysis Kenya, real estate investment analysis, property financial modeling, risk assessment Kenya, return projections',
};

export default function InvestmentAnalysisPage() {
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
              Investment Analysis
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive financial analysis and investment modeling for real estate opportunities.
              Data-driven insights to maximize returns and minimize risks.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Analysis Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Investment Analysis Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Financial Modeling</h3>
              <p className="text-gray-600">Detailed cash flow projections, IRR calculations, and sensitivity analysis for investment scenarios.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Market Analysis</h3>
              <p className="text-gray-600">Comprehensive market research, comparable sales analysis, and location-specific investment metrics.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Risk Assessment</h3>
              <p className="text-gray-600">Thorough risk analysis including market, operational, and regulatory risk factors with mitigation strategies.</p>
            </div>
          </div>
        </div>

        {/* Analysis Framework */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Analysis Framework
          </h2>
          <div className="bg-gradient-to-r from-amber-50 to-slate-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Property Valuation</h3>
                <p className="text-gray-600 text-sm">Income capitalization, comparable sales, and replacement cost approaches</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Financial Projections</h3>
                <p className="text-gray-600 text-sm">5-10 year cash flow models with conservative and optimistic scenarios</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Risk Analysis</h3>
                <p className="text-gray-600 text-sm">Monte Carlo simulations and stress testing for various market conditions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Investment Memo</h3>
                <p className="text-gray-600 text-sm">Comprehensive investment recommendation with clear go/no-go decision framework</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Analysis */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Sample Investment Analysis
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-light text-slate-900 mb-6">Westlands Office Investment</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Property Value:</span>
                    <span className="font-semibold">$2.5M</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Annual NOI:</span>
                    <span className="font-semibold">$312,500</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Cap Rate:</span>
                    <span className="font-semibold">12.5%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">IRR (5 years):</span>
                    <span className="font-semibold text-green-600">18.2%</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Payback Period:</span>
                    <span className="font-semibold">4.1 years</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-slate-900 mb-6">Key Assumptions</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                    95% occupancy rate maintained
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                    3% annual rental escalations
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                    2% annual operating expense growth
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                    5% terminal cap rate
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                    Conservative financing at 70% LTV
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analysis Tools */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Analysis Tools & Methodologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <PieChart className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Discounted Cash Flow (DCF)</h3>
                <p className="text-gray-600">Present value analysis of future cash flows using appropriate discount rates and terminal values.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <BarChart3 className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Comparable Analysis</h3>
                <p className="text-gray-600">Market-based valuation using recent transactions and comparable property sales data.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <TrendingUp className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Sensitivity Analysis</h3>
                <p className="text-gray-600">Stress testing investment returns under various market conditions and assumption changes.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Target className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Scenario Planning</h3>
                <p className="text-gray-600">Multiple investment scenarios including best case, base case, and worst case outcomes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Criteria */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-slate-50 to-amber-50 p-8 rounded-lg">
            <h2 className="text-3xl font-light text-slate-900 text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Investment Criteria
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">12%+</div>
                <div className="text-gray-600">Minimum IRR Target</div>
                <div className="text-sm text-gray-500 mt-2">After inflation adjustment</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">5 Years</div>
                <div className="text-gray-600">Minimum Hold Period</div>
                <div className="text-sm text-gray-500 mt-2">For value creation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">$1M+</div>
                <div className="text-gray-600">Minimum Investment Size</div>
                <div className="text-sm text-gray-500 mt-2">For institutional quality</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Professional Investment Analysis
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get detailed financial analysis and investment modeling for your real estate opportunities in Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Request Analysis
            </Link>
            <Link
              href="/market"
              className="border border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all"
            >
              View Market Intelligence
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}