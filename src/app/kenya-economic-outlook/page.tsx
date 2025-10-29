import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, Globe, BarChart3, DollarSign, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kenya Economic Outlook | Economic Analysis & Investment Impact | Murivest',
  description: 'Comprehensive analysis of Kenya economic outlook. GDP growth, inflation trends, currency stability, and their impact on real estate investments.',
  keywords: 'Kenya economic outlook, Kenya GDP growth, economic analysis Kenya, investment impact Kenya, currency stability Kenya',
};

export default function KenyaEconomicOutlookPage() {
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
              Kenya Economic Outlook
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive analysis of Kenya's macroeconomic environment and its implications
              for real estate investment and economic development.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Economic Indicators */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Key Economic Indicators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl font-light text-amber-600 mb-2">6.2%</div>
              <div className="text-gray-600">GDP Growth (2024)</div>
              <div className="text-sm text-gray-500 mt-2">Target: 6.5-7%</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl font-light text-amber-600 mb-2">4.8%</div>
              <div className="text-gray-600">Inflation Rate</div>
              <div className="text-sm text-gray-500 mt-2">CBK Target: 2.5-7.5%</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl font-light text-amber-600 mb-2">KES 147</div>
              <div className="text-gray-600">USD Exchange Rate</div>
              <div className="text-sm text-gray-500 mt-2">Per USD</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl font-light text-amber-600 mb-2">55M</div>
              <div className="text-gray-600">Population</div>
              <div className="text-sm text-gray-500 mt-2">Growing middle class</div>
            </div>
          </div>
        </div>

        {/* Economic Drivers */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Economic Growth Drivers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Globe className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Digital Economy</h3>
                <p className="text-gray-600">Kenya's leadership in mobile money and fintech drives innovation and foreign investment. M-Pesa and growing tech sector contribute significantly to GDP.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <TrendingUp className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Infrastructure Development</h3>
                <p className="text-gray-600">Major infrastructure projects including Standard Gauge Railway, ports, and roads enhance connectivity and economic efficiency.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Users className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Demographic Dividend</h3>
                <p className="text-gray-600">Young, educated workforce and growing middle class create domestic demand and entrepreneurial opportunities.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <BarChart3 className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Agricultural Transformation</h3>
                <p className="text-gray-600">Modernization of agriculture sector increases productivity and creates value chains for processed goods export.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Real Estate Impact */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Impact on Real Estate Investment
          </h2>
          <div className="bg-gradient-to-r from-amber-50 to-slate-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-amber-100">
                <h3 className="text-lg font-medium text-slate-900 mb-3">Office Sector Growth</h3>
                <p className="text-gray-600 text-sm">Business process outsourcing and tech companies drive demand for modern office space in Nairobi.</p>
                <div className="mt-3 text-amber-600 font-medium">+15% annual growth expected</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-amber-100">
                <h3 className="text-lg font-medium text-slate-900 mb-3">Residential Development</h3>
                <p className="text-gray-600 text-sm">Growing middle class and urbanization create demand for quality residential properties.</p>
                <div className="mt-3 text-amber-600 font-medium">Housing deficit: 2M units</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-amber-100">
                <h3 className="text-lg font-medium text-slate-900 mb-3">Commercial Real Estate</h3>
                <p className="text-gray-600 text-sm">Retail and logistics sectors benefit from increased consumer spending and e-commerce growth.</p>
                <div className="mt-3 text-amber-600 font-medium">$2.5B investment pipeline</div>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Factors */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Risk Considerations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-medium text-slate-900 mb-4 text-red-600">External Risks</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Global economic slowdown affecting remittances and FDI
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Commodity price volatility (oil, food imports)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Climate change impacts on agriculture and tourism
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-medium text-slate-900 mb-4 text-green-600">Mitigating Factors</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Diversified economy reducing single-sector dependency
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Strong regulatory framework and central bank credibility
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Growing domestic market and regional trade
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Investment Outlook */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8">
            <h2 className="text-3xl font-light text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Investment Outlook 2025-2027
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-light text-amber-400 mb-2">6.5-7%</div>
                <div className="text-gray-300">GDP Growth Target</div>
                <div className="text-sm text-gray-400 mt-2">Sustainable economic expansion</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-400 mb-2">$12B</div>
                <div className="text-gray-300">Infrastructure Investment</div>
                <div className="text-sm text-gray-400 mt-2">Planned government spending</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-400 mb-2">$3.5B</div>
                <div className="text-gray-300">Real Estate FDI</div>
                <div className="text-sm text-gray-400 mt-2">Foreign direct investment target</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Economic Intelligence Reports
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Access detailed economic analysis and market intelligence to inform your investment decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Request Economic Report
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
