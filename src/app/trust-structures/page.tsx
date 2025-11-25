import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Users, ArrowRight, CheckCircle, TrendingUp, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Family Trusts & Holding Companies for Tax Efficiency',
  description: 'Structure property ownership via family trusts and holding companies for tax efficiency and asset protection. Kenya Family Office Real Estate Structuring.',
  keywords: 'Kenya Family Office Real Estate Structuring, family trusts Kenya, holding companies tax efficiency, asset protection Kenya, wealth structuring Kenya',
  openGraph: {
    title: 'Family Trusts & Holding Companies for Tax Efficiency',
    description: 'Learn about advanced wealth structuring solutions for Kenyan families and businesses.',
    images: ['/kenya-night.png'],
  },
  alternates: {
    canonical: 'https://murivest.co.ke/trust-structures',
  },
}

export default function TrustStructuresPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center bg-teal-700/30 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <Shield className="h-5 w-5 text-teal-300 mr-2" />
            <span className="text-teal-200 font-medium">Wealth Structuring</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-light mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Family Trusts & Holding Companies for Tax Efficiency
          </h1>
          <p className="text-xl text-teal-100 mb-12 leading-relaxed max-w-4xl mx-auto">
            Structure property ownership via family trusts and holding companies for tax efficiency and asset protection. Kenya Family Office Real Estate Structuring.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <button className="group bg-amber-600 hover:bg-amber-500 text-slate-900 px-10 py-5 font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25 flex items-center">
                <Users className="h-5 w-5 mr-3" />
                Structure Your Wealth
                <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/legacy-guide">
              <button className="border-2 border-amber-400 hover:bg-amber-400 hover:text-slate-900 text-amber-400 px-10 py-5 font-semibold text-lg rounded-lg transition-all duration-300 flex items-center">
                <FileText className="h-5 w-5 mr-3" />
                Read Legacy Guide
              </button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Shield className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">Asset</div>
              <div className="text-teal-200">Protection</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <TrendingUp className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">Tax</div>
              <div className="text-teal-200">Efficiency</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <CheckCircle className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">KRA</div>
              <div className="text-teal-200">Compliant</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block bg-teal-100 rounded-full px-4 py-2 mb-6">
              <span className="text-teal-800 font-semibold text-sm tracking-wide">WEALTH STRUCTURING</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Why Structure Your Wealth?
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Family trusts and holding companies provide sophisticated solutions for tax optimization, asset protection, and generational wealth transfer in Kenya's evolving regulatory environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Family Trust Structures</h3>
              <ul className="text-slate-600 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  Settlor, trustee, and beneficiary separation
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  Asset protection from creditors and claims
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  Tax-efficient income distribution
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  Smooth succession planning
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  Privacy and confidentiality
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Holding Company Benefits</h3>
              <p className="text-slate-600 mb-4">
                Mauritius, Seychelles, and Kenyan holding companies offer strategic advantages for real estate investment and wealth management.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="text-sm font-semibold text-amber-900 mb-2">Key Advantages:</div>
                <ul className="text-amber-800 text-sm space-y-1">
                  <li>• Lower corporate tax rates</li>
                  <li>• No dividend withholding tax</li>
                  <li>• Enhanced asset protection</li>
                  <li>• International tax treaties</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-12 text-white text-center mb-16">
            <h3 className="text-3xl font-light mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Tax Efficiency Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-white mx-auto max-w-4xl">
                <thead>
                  <tr className="border-b border-teal-400">
                    <th className="text-left py-3 px-4">Structure</th>
                    <th className="text-left py-3 px-4">Corporate Tax</th>
                    <th className="text-left py-3 px-4">Dividend Tax</th>
                    <th className="text-left py-3 px-4">Asset Protection</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-teal-500/30">
                    <td className="py-3 px-4 font-semibold">Kenyan Company</td>
                    <td className="py-3 px-4">37.5%</td>
                    <td className="py-3 px-4">15%</td>
                    <td className="py-3 px-4">Limited</td>
                  </tr>
                  <tr className="border-b border-teal-500/30">
                    <td className="py-3 px-4 font-semibold">Mauritius Holding</td>
                    <td className="py-3 px-4 text-green-300">0.5-3%</td>
                    <td className="py-3 px-4 text-green-300">0%</td>
                    <td className="py-3 px-4 text-green-300">Strong</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">Family Trust</td>
                    <td className="py-3 px-4">N/A</td>
                    <td className="py-3 px-4 text-green-300">5-15%</td>
                    <td className="py-3 px-4 text-green-300">Excellent</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Real Estate Applications</h3>
              <ul className="text-slate-600 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  Property ownership through offshore entities
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  Rental income optimization
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  Capital gains tax minimization
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  Estate planning and succession
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  Cross-border investment structures
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Implementation Process</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">1</div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Needs Assessment</div>
                    <div className="text-slate-600 text-sm">Goal setting and structure selection</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">2</div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Entity Setup</div>
                    <div className="text-slate-600 text-sm">Jurisdiction selection and incorporation</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">3</div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Asset Transfer</div>
                    <div className="text-slate-600 text-sm">Tax-efficient restructuring</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">4</div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Compliance</div>
                    <div className="text-slate-600 text-sm">Ongoing regulatory compliance</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">5</div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Optimization</div>
                    <div className="text-slate-600 text-sm">Performance monitoring and tax planning</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-light mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Regulatory Compliance</h3>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              All structures are designed to comply with Kenyan regulations, OECD standards, and international tax treaties. We work with licensed trustees and corporate service providers.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold mb-1">KRA Compliant</div>
                  <div className="text-slate-300 text-sm">Full regulatory compliance</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold mb-1">OECD Standards</div>
                  <div className="text-slate-300 text-sm">International best practices</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold mb-1">Licensed Partners</div>
                  <div className="text-slate-300 text-sm">Professional service providers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}