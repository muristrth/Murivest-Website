import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Target, TrendingUp, Clock, DollarSign, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Exit Strategy Planning Kenya | Real Estate Exit Strategies | Murivest',
  description: 'Professional exit strategy planning for real estate investments in Kenya. Optimal timing, valuation maximization, and successful divestment strategies.',
  keywords: 'exit strategy planning Kenya, real estate exit strategies Nairobi, property divestment Kenya, investment exit planning',
};

export default function ExitStrategyPlanningPage() {
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
              Exit Strategy Planning
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Strategic planning for optimal property divestment. Maximize returns through
              timing, valuation enhancement, and efficient exit execution.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Exit Strategy Overview */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light text-slate-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Strategic Exit Planning
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Successful real estate investment requires careful planning for exit. Our exit strategy
                services help investors maximize returns by timing the market, optimizing property
                performance, and executing efficient divestment strategies.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Target className="h-5 w-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">Market timing optimization</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">Value maximization strategies</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">Exit execution planning</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-slate-50 p-8 rounded-lg border border-amber-100">
              <h3 className="text-2xl font-light text-slate-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Exit Strategy Framework
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-4 text-white font-semibold text-sm">1</span>
                  <div>
                    <div className="font-medium text-slate-900">Market Assessment</div>
                    <div className="text-sm text-gray-600">Evaluate market conditions and optimal timing</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-4 text-white font-semibold text-sm">2</span>
                  <div>
                    <div className="font-medium text-slate-900">Value Enhancement</div>
                    <div className="text-sm text-gray-600">Implement strategies to maximize property value</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-4 text-white font-semibold text-sm">3</span>
                  <div>
                    <div className="font-medium text-slate-900">Exit Execution</div>
                    <div className="text-sm text-gray-600">Execute sale or refinance with optimal terms</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exit Strategies */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Exit Strategy Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Direct Sale</h3>
              <p className="text-gray-600 mb-4">Sell property directly to institutional or private investors for immediate liquidity.</p>
              <div className="space-y-2 text-sm text-gray-500">
                <div>• Immediate capital return</div>
                <div>• Transaction costs: 3-5%</div>
                <div>• Timeline: 3-6 months</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">REIT Sale</h3>
              <p className="text-gray-600 mb-4">Sell to Real Estate Investment Trusts for portfolio diversification benefits.</p>
              <div className="space-y-2 text-sm text-gray-500">
                <div>• Premium valuations</div>
                <div>• Tax advantages</div>
                <div>• Institutional buyer</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Development Sale</h3>
              <p className="text-gray-600 mb-4">Sell to developers for redevelopment, capturing future upside potential.</p>
              <div className="space-y-2 text-sm text-gray-500">
                <div>• Highest potential returns</div>
                <div>• Development premium</div>
                <div>• Planning permission value</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Portfolio Sale</h3>
              <p className="text-gray-600 mb-4">Sell entire portfolio to institutional investors seeking Kenyan exposure.</p>
              <div className="space-y-2 text-sm text-gray-500">
                <div>• Bulk transaction benefits</div>
                <div>• Diversification discount</div>
                <div>• Efficient execution</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Staged Exit</h3>
              <p className="text-gray-600 mb-4">Gradual divestment strategy to optimize timing and maximize returns.</p>
              <div className="space-y-2 text-sm text-gray-500">
                <div>• Risk mitigation</div>
                <div>• Market timing flexibility</div>
                <div>• Tax optimization</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Joint Venture Exit</h3>
              <p className="text-gray-600 mb-4">Partner with local developers for joint development and profit sharing.</p>
              <div className="space-y-2 text-sm text-gray-500">
                <div>• Local expertise access</div>
                <div>• Development upside</div>
                <div>• Reduced execution risk</div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Enhancement Strategies */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Value Enhancement Strategies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Target className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Operational Improvements</h3>
                <p className="text-gray-600">Enhance property operations to increase NOI and improve valuation metrics.</p>
                <ul className="mt-3 space-y-1 text-sm text-gray-600">
                  <li>• Tenant retention programs</li>
                  <li>• Operating expense optimization</li>
                  <li>• Maintenance and capital improvements</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <BarChart3 className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Market Repositioning</h3>
                <p className="text-gray-600">Reposition property in market to command premium rents and valuations.</p>
                <ul className="mt-3 space-y-1 text-sm text-gray-600">
                  <li>• Renovation and modernization</li>
                  <li>• Brand enhancement</li>
                  <li>• Service level improvements</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <TrendingUp className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Entitlement Optimization</h3>
                <p className="text-gray-600">Secure development rights and entitlements to unlock property potential.</p>
                <ul className="mt-3 space-y-1 text-sm text-gray-600">
                  <li>• Zoning changes and variances</li>
                  <li>• Development approvals</li>
                  <li>• Air rights and expansion potential</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Clock className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Market Timing</h3>
                <p className="text-gray-600">Time exit to coincide with optimal market conditions and buyer demand.</p>
                <ul className="mt-3 space-y-1 text-sm text-gray-600">
                  <li>• Economic cycle analysis</li>
                  <li>• Sector-specific timing</li>
                  <li>• Capital markets conditions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Exit Planning Process */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-amber-50 to-slate-50 p-8 rounded-lg">
            <h2 className="text-3xl font-light text-slate-900 text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Exit Planning Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Strategy Development</h3>
                <p className="text-gray-600 text-sm">Define exit objectives, timeline, and preferred strategy (1-2 months)</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Value Optimization</h3>
                <p className="text-gray-600 text-sm">Implement enhancement strategies to maximize property value (3-6 months)</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Marketing & Negotiation</h3>
                <p className="text-gray-600 text-sm">Market property and negotiate optimal terms with buyers (2-4 months)</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Transaction Closing</h3>
                <p className="text-gray-600 text-sm">Complete legal and financial aspects of the transaction (1-2 months)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tax Considerations */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Tax Optimization Strategies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <h3 className="text-lg font-medium text-slate-900 mb-3">Capital Gains Tax</h3>
              <p className="text-gray-600 text-sm mb-3">15% tax on property disposals with inflation indexation</p>
              <div className="text-amber-600 font-medium">Tax Planning Essential</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <h3 className="text-lg font-medium text-slate-900 mb-3">1031 Exchange</h3>
              <p className="text-gray-600 text-sm mb-3">Defer capital gains tax through property reinvestment</p>
              <div className="text-amber-600 font-medium">US Investor Strategy</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <h3 className="text-lg font-medium text-slate-900 mb-3">Holding Structure</h3>
              <p className="text-gray-600 text-sm mb-3">Optimize entity structure for tax efficiency</p>
              <div className="text-amber-600 font-medium">International Planning</div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-slate-50 to-amber-50 p-8 rounded-lg">
            <h2 className="text-3xl font-light text-slate-900 text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Exit Strategy Success Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">95%</div>
                <div className="text-gray-600">Target IRR Achievement</div>
                <div className="text-sm text-gray-500 mt-2">On planned exits</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">3-6</div>
                <div className="text-gray-600">Months Timeline</div>
                <div className="text-sm text-gray-500 mt-2">Average exit duration</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">108%</div>
                <div className="text-gray-600">Target Price Achievement</div>
                <div className="text-sm text-gray-500 mt-2">Of initial valuation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">$2.4B</div>
                <div className="text-gray-600">Assets Exited</div>
                <div className="text-sm text-gray-500 mt-2">Since 2018</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Maximize Your Returns
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Plan your exit strategy to optimize timing, maximize valuation, and achieve successful divestment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Plan Your Exit Strategy
            </Link>
            <Link
              href="/investment-analysis"
              className="border border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all"
            >
              View Investment Analysis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}