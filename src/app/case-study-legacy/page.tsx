import type { Metadata } from 'next'
import Link from 'next/link'
import { Trophy, TrendingUp, Shield, Users, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Preserving the Legacy: Industrialist Success Story',
  description: 'How a 65-year-old industrialist secured KSh billions in tax-efficient quarterly income. Real Estate Investment for Retirement Kenya.',
  keywords: 'Real Estate Investment for Retirement Kenya, industrialist legacy planning, tax efficient income Kenya, retirement real estate Kenya, generational wealth Kenya',
  openGraph: {
    title: 'Preserving the Legacy: Industrialist Success Story',
    description: 'Learn how a Kenyan industrialist built lasting wealth through strategic real estate investments.',
    images: ['/kenya-night.webp'],
  },
  alternates: {
    canonical: 'https://murivest.co.ke/case-study-legacy',
  },
}

export default function CaseStudyLegacyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center bg-green-700/30 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <Trophy className="h-5 w-5 text-green-300 mr-2" />
            <span className="text-green-200 font-medium">Success Story</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-light mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Preserving the Legacy: Industrialist Success Story
          </h1>
          <p className="text-xl text-green-100 mb-12 leading-relaxed max-w-4xl mx-auto">
            How a 65-year-old industrialist secured KSh billions in tax-efficient quarterly income. Real Estate Investment for Retirement Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <button className="group bg-amber-600 hover:bg-amber-500 text-slate-900 px-10 py-5 font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25 flex items-center">
                <Users className="h-5 w-5 mr-3" />
                Start Your Legacy Plan
                <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/legacy-guide">
              <button className="border-2 border-amber-400 hover:bg-amber-400 hover:text-slate-900 text-amber-400 px-10 py-5 font-semibold text-lg rounded-lg transition-all duration-300 flex items-center">
                <Shield className="h-5 w-5 mr-3" />
                Read Full Guide
              </button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <TrendingUp className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">KSh 2.1B</div>
              <div className="text-green-200">Portfolio Value</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Trophy className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">KSh 180M</div>
              <div className="text-green-200">Quarterly Income</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Shield className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">15 Years</div>
              <div className="text-green-200">Business Continuity</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 rounded-full px-4 py-2 mb-6">
              <span className="text-green-800 font-semibold text-sm tracking-wide">CASE STUDY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              From Business Owner to Legacy Builder
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">The Challenge</h3>
                    <p className="text-slate-600">
                      At 65, Mr. Kiprop had built a successful manufacturing business over 35 years. With children in university and succession planning becoming critical, he needed to convert his operating capital into stable, generational wealth without disrupting business operations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">The Solution</h3>
                    <p className="text-slate-600 mb-4">
                      Through our fiduciary advisory, Mr. Kiprop implemented a comprehensive strategy combining sale-leaseback of his industrial facility and strategic investments in prime commercial properties.
                    </p>
                    <h4 className="font-semibold text-slate-900 mb-3">Key Actions Taken:</h4>
                    <ul className="text-slate-600 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                        Sale-leaseback of 100,000 sq ft manufacturing facility for KSh 800M
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                        Investment in 15 commercial properties across Nairobi CBD
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                        Establishment of family trust structure for tax efficiency
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                        Diversification into logistics and retail assets
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white">
                <Trophy className="h-8 w-8 text-amber-400 mb-4" />
                <h3 className="text-2xl font-semibold mb-6">Results Achieved</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">KSh 2.1B</div>
                    <div className="text-green-200 text-sm">Portfolio Value</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">KSh 180M</div>
                    <div className="text-green-200 text-sm">Quarterly Income</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">15 Years</div>
                    <div className="text-green-200 text-sm">Business Continuity</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">8.5%</div>
                    <div className="text-green-200 text-sm">Average Yield</div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
                <TrendingUp className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Tax Efficiency</h3>
                <p className="text-amber-800 mb-4">
                  By structuring investments through approved KRA-compliant vehicles, Mr. Kiprop reduced his effective tax rate from 37.5% to 15% on investment income.
                </p>
                <div className="bg-white/50 rounded-lg p-4">
                  <div className="text-lg font-bold text-amber-900">Tax Rate Reduction</div>
                  <div className="text-3xl font-bold text-amber-600">60% ↓</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-12 text-white text-center mb-16">
            <h3 className="text-3xl font-light mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Legacy Impact</h3>
            <blockquote className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto italic">
              "This wasn't just about retirement income. It was about ensuring my children's education, my grandchildren's future, and continuing the family business legacy. Murivest helped me see beyond the balance sheet to true wealth preservation."
            </blockquote>
            <div className="text-amber-400 font-semibold">- Mr. Kiprop, Industrialist</div>
          </div>

          <div className="bg-slate-100 border border-slate-300 rounded-2xl p-8 text-center">
            <Shield className="h-8 w-8 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-700 italic">
              *Names and specific figures have been modified for confidentiality, but results are representative of successful client outcomes.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}