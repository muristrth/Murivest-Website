import type { Metadata } from 'next'
import Link from 'next/link'
import { Download, Users, TrendingUp, Shield, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Kenyan Business Owner\'s Guide to Converting Operating Capital into Generational Wealth',
  description: 'Shift capital from high-risk active business to low-risk passive assets. Business Owner Real Estate Succession Kenya.',
  keywords: 'Business Owner Real Estate Succession Kenya, converting operating capital to generational wealth, Kenyan business succession planning, passive income Kenya, real estate for business owners',
  openGraph: {
    title: 'The Kenyan Business Owner\'s Guide to Converting Operating Capital into Generational Wealth',
    description: 'Learn how to transition from active business ownership to passive wealth through strategic real estate investments.',
    images: ['/kenya-night.webp'],
  },
  alternates: {
    canonical: 'https://murivest.com/legacy-guide',
  },
}

export default function LegacyGuidePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center bg-red-700/30 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <Shield className="h-5 w-5 text-red-300 mr-2" />
            <span className="text-red-200 font-medium">Confidential Guide</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-light mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            The Kenyan Business Owner's Guide to Converting Operating Capital into Generational Wealth
          </h1>
          <p className="text-xl text-red-100 mb-12 leading-relaxed max-w-4xl mx-auto">
            Shift capital from high-risk active business to low-risk passive assets. Business Owner Real Estate Succession Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/Murivest-Legacy-Guide.pdf"
              download
              className="group bg-amber-600 hover:bg-amber-500 text-slate-900 px-10 py-5 font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25 flex items-center"
            >
              <Download className="h-5 w-5 mr-3" />
              Download White Paper
              <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link href="/contact">
              <button className="border-2 border-amber-400 hover:bg-amber-400 hover:text-slate-900 text-amber-400 px-10 py-5 font-semibold text-lg rounded-lg transition-all duration-300 flex items-center">
                <Users className="h-5 w-5 mr-3" />
                Schedule Consultation
              </button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <TrendingUp className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">8-10%</div>
              <div className="text-red-200">Annual Yields</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Shield className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">KRA</div>
              <div className="text-red-200">Compliant</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <CheckCircle className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">25+</div>
              <div className="text-red-200">Success Stories</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 rounded-full px-4 py-2 mb-6">
              <span className="text-red-800 font-semibold text-sm tracking-wide">COMPREHENSIVE ANALYSIS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Why Business Owners Need This Transition
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              For decades, you've built and managed a successful business in Kenya. Now, as you approach retirement or consider succession planning, the question becomes: how do you convert your operating capital into stable, generational wealth?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">The Risk of Staying Active</h3>
              <p className="text-slate-600 leading-relaxed">
                Active business ownership carries significant risks: market volatility, operational challenges, regulatory changes, and personal liability. Commercial real estate offers a compelling alternative with predictable cash flows and capital preservation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Strategic Real Estate Solutions</h3>
              <ul className="text-slate-600 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  Direct property investments in prime Nairobi locations
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  Joint ventures with institutional partners
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  REIT investments for diversification
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  Development opportunities in growing sectors
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-white text-center mb-16">
            <h3 className="text-3xl font-light mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Tax-Efficient Structures</h3>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Our guide covers KRA-compliant strategies for wealth transfer, including family trusts, holding companies, and succession planning that minimizes tax liabilities while maximizing generational benefits.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">8-10%</div>
                <div className="text-red-200">Annual Yields</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">KRA</div>
                <div className="text-red-200">Compliant</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-red-200">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-light text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Key Benefits</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">8-10% Annual Yields</div>
                  <div className="text-slate-300 text-sm">From verified properties with long-term leases</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Tax-Efficient Income</div>
                  <div className="text-slate-300 text-sm">Structured to minimize KRA liabilities</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Capital Preservation</div>
                  <div className="text-slate-300 text-sm">Stable assets with appreciation potential</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Professional Management</div>
                  <div className="text-slate-300 text-sm">Expert oversight and maintenance</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Legacy Building</div>
                  <div className="text-slate-300 text-sm">Wealth transfer for future generations</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Risk Diversification</div>
                  <div className="text-slate-300 text-sm">Multiple properties across Nairobi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}