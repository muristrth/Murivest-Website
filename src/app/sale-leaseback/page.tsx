import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, ArrowRight, Calculator, Users, TrendingUp, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sale & Leaseback Advisory for Kenyan Manufacturers',
  description: 'Monetize factories or head offices to unlock cash while maintaining operations. Factory Sale and Leaseback Nairobi.',
  keywords: 'Factory Sale and Leaseback Nairobi, sale leaseback Kenya, monetize industrial property Kenya, leaseback advisory manufacturers, industrial property financing Kenya',
  openGraph: {
    title: 'Sale & Leaseback Advisory for Kenyan Manufacturers',
    description: 'Unlock capital from your industrial assets while continuing operations through strategic sale-leaseback solutions.',
    images: ['/kenya-night.png'],
  },
  alternates: {
    canonical: 'https://murivest.co.ke/sale-leaseback',
  },
}

export default function SaleLeasebackPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center bg-blue-700/30 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <Building2 className="h-5 w-5 text-blue-300 mr-2" />
            <span className="text-blue-200 font-medium">Strategic Financing</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-light mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Sale & Leaseback Advisory for Kenyan Manufacturers
          </h1>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto">
            Monetize factories or head offices to unlock cash while maintaining operations. Factory Sale and Leaseback Nairobi.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <button className="group bg-amber-600 hover:bg-amber-500 text-slate-900 px-10 py-5 font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25 flex items-center">
                <Calculator className="h-5 w-5 mr-3" />
                Get Advisory Consultation
                <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/industrial-properties">
              <button className="border-2 border-amber-400 hover:bg-amber-400 hover:text-slate-900 text-amber-400 px-10 py-5 font-semibold text-lg rounded-lg transition-all duration-300 flex items-center">
                <Building2 className="h-5 w-5 mr-3" />
                View Industrial Properties
              </button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <TrendingUp className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">KSh 800M+</div>
              <div className="text-blue-200">Average Transaction Size</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Users className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">15+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <CheckCircle className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-800 font-semibold text-sm tracking-wide">HOW IT WORKS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              How Sale-Leaseback Works
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Sale-leaseback is a strategic financing solution where you sell your property to an investor and immediately lease it back, providing immediate capital while retaining operational control.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Benefits for Manufacturers</h3>
              <ul className="text-slate-600 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  Immediate cash injection for expansion or working capital
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  Continue operations without disruption
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  Balance sheet optimization
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  Tax-efficient capital access
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  Professional property management
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                <Calculator className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Our Process</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">1</div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Property Valuation</div>
                    <div className="text-slate-600 text-sm">Comprehensive market analysis and appraisal</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">2</div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Investor Matching</div>
                    <div className="text-slate-600 text-sm">Connect with qualified institutional investors</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">3</div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Legal Compliance</div>
                    <div className="text-slate-600 text-sm">KRA-compliant structuring and documentation</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">4</div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Lease Structuring</div>
                    <div className="text-slate-600 text-sm">Custom lease terms with growth options</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">5</div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Asset Management</div>
                    <div className="text-slate-600 text-sm">Ongoing property management and reporting</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white text-center mb-16">
            <h3 className="text-3xl font-light mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Success Story</h3>
            <div className="max-w-4xl mx-auto">
              <h4 className="text-xl font-semibold mb-4">Manufacturing Facility Sale-Leaseback</h4>
              <p className="text-blue-100 mb-6">
                A Nairobi-based manufacturer unlocked KSh 500M in capital through sale-leaseback of their 50,000 sq ft facility, funding expansion into new markets while maintaining production.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold mb-1">8.5%</div>
                  <div className="text-blue-200 text-sm">Lease Yield</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold mb-1">KSh 500M</div>
                  <div className="text-blue-200 text-sm">Capital Unlocked</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold mb-1">15 Years</div>
                  <div className="text-blue-200 text-sm">Lease Term</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold mb-1">KRA</div>
                  <div className="text-blue-200 text-sm">Compliant</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-light mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Why Choose Murivest?</h3>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              With deep expertise in industrial real estate and manufacturing sector knowledge, we provide end-to-end advisory for successful sale-leaseback transactions.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold mb-1">Sector Expertise</div>
                  <div className="text-slate-300 text-sm">15+ years in manufacturing real estate</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold mb-1">Institutional Network</div>
                  <div className="text-slate-300 text-sm">Access to qualified investors</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold mb-1">End-to-End Service</div>
                  <div className="text-slate-300 text-sm">From valuation to lease management</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}