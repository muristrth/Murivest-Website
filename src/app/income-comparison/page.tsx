import type { Metadata } from 'next'
import Link from 'next/link'
import { BarChart3, Calculator, ArrowRight, CheckCircle, TrendingUp, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Quarterly Income: Commercial Leases vs. Treasury Bills',
  description: 'Clear comparison showing CRE income stability versus traditional financial instruments in Kenya. Tax Efficient Passive Income Kenya CRE.',
  keywords: 'Tax Efficient Passive Income Kenya CRE, commercial leases vs treasury bills, CRE income stability Kenya, passive income comparison Kenya',
  openGraph: {
    title: 'Quarterly Income: Commercial Leases vs. Treasury Bills',
    description: 'Compare the stability and returns of commercial real estate leases versus traditional treasury bills in Kenya.',
    images: ['/kenya-night.png'],
  },
  alternates: {
    canonical: 'https://murivest.co.ke/income-comparison',
  },
}

export default function IncomeComparisonPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center bg-orange-700/30 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <BarChart3 className="h-5 w-5 text-orange-300 mr-2" />
            <span className="text-orange-200 font-medium">Income Comparison</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-light mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Quarterly Income: Commercial Leases vs. Treasury Bills
          </h1>
          <p className="text-xl text-orange-100 mb-12 leading-relaxed max-w-4xl mx-auto">
            Clear comparison showing CRE income stability versus traditional financial instruments in Kenya. Tax Efficient Passive Income Kenya CRE.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <button className="group bg-amber-600 hover:bg-amber-500 text-slate-900 px-10 py-5 font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25 flex items-center">
                <Calculator className="h-5 w-5 mr-3" />
                Start CRE Investment
                <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/calculator">
              <button className="border-2 border-amber-400 hover:bg-amber-400 hover:text-slate-900 text-amber-400 px-10 py-5 font-semibold text-lg rounded-lg transition-all duration-300 flex items-center">
                <DollarSign className="h-5 w-5 mr-3" />
                Use Income Calculator
              </button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <TrendingUp className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">8-10%</div>
              <div className="text-orange-200">CRE Yield</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <BarChart3 className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">10-14%</div>
              <div className="text-orange-200">T-Bill Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <CheckCircle className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">Tax</div>
              <div className="text-orange-200">Efficient</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="prose prose-lg max-w-none">
            <h2>Income Stability Comparison</h2>
            <p>
              While treasury bills offer perceived safety, commercial real estate provides superior income stability and tax efficiency for long-term wealth preservation.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-red-900 text-xl font-semibold mb-4">Treasury Bills (T-Bills)</h3>
                <ul className="text-red-800 space-y-2">
                  <li><strong>Yield:</strong> 10-12% (91-day), 12-14% (182-day)</li>
                  <li><strong>Tax:</strong> 15% withholding tax</li>
                  <li><strong>Stability:</strong> Government guaranteed</li>
                  <li><strong>Liquidity:</strong> High (daily auctions)</li>
                  <li><strong>Inflation Protection:</strong> Limited</li>
                  <li><strong>Effective Yield:</strong> 8.5-11.9% after tax</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-green-900 text-xl font-semibold mb-4">Commercial Real Estate Leases</h3>
                <ul className="text-green-800 space-y-2">
                  <li><strong>Yield:</strong> 8-10% net annualized</li>
                  <li><strong>Tax:</strong> 5-15% on distributions</li>
                  <li><strong>Stability:</strong> Contractual obligations</li>
                  <li><strong>Liquidity:</strong> Low (long-term holdings)</li>
                  <li><strong>Inflation Protection:</strong> Rental escalations</li>
                  <li><strong>Effective Yield:</strong> 7-9% after tax + appreciation</li>
                </ul>
              </div>
            </div>

            <h2>Why CRE Wins for Long-Term Investors</h2>
            <ul>
              <li><strong>Inflation Hedging:</strong> Rental income escalates with inflation</li>
              <li><strong>Capital Appreciation:</strong> Property values increase over time</li>
              <li><strong>Diversification:</strong> Real assets vs. government paper</li>
              <li><strong>Tax Efficiency:</strong> Through trust structures and depreciation</li>
              <li><strong>Legacy Benefits:</strong> Generational wealth transfer</li>
            </ul>

            <h2>Risk-Adjusted Returns</h2>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
              <h3 className="text-orange-900 mb-4">5-Year Performance Comparison (Hypothetical KSh 100M Investment)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-orange-800">
                  <thead>
                    <tr className="border-b border-orange-300">
                      <th className="text-left py-2">Metric</th>
                      <th className="text-left py-2">T-Bills</th>
                      <th className="text-left py-2">CRE Leases</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-orange-200">
                      <td className="py-2">Initial Investment</td>
                      <td className="py-2">KSh 100M</td>
                      <td className="py-2">KSh 100M</td>
                    </tr>
                    <tr className="border-b border-orange-200">
                      <td className="py-2">Annual Income</td>
                      <td className="py-2">KSh 9M</td>
                      <td className="py-2">KSh 8M</td>
                    </tr>
                    <tr className="border-b border-orange-200">
                      <td className="py-2">5-Year Total Income</td>
                      <td className="py-2">KSh 45M</td>
                      <td className="py-2">KSh 40M</td>
                    </tr>
                    <tr className="border-b border-orange-200">
                      <td className="py-2">Capital Appreciation</td>
                      <td className="py-2">KSh 0</td>
                      <td className="py-2">KSh 25M (25%)</td>
                    </tr>
                    <tr>
                      <td className="py-2">Total Return</td>
                      <td className="py-2">KSh 45M</td>
                      <td className="py-2">KSh 65M</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2>Tax Efficiency in Practice</h2>
            <p>
              Commercial real estate investments can be structured through trusts and holding companies to minimize tax leakage, often resulting in effective rates below 10% compared to T-bill withholding tax of 15%.
            </p>

            <h2>Conclusion</h2>
            <p>
              While treasury bills provide liquidity and perceived safety, commercial real estate offers superior long-term wealth preservation through income stability, inflation protection, and capital appreciation. For investors focused on generational wealth, CRE provides a compelling alternative to traditional fixed income instruments.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
