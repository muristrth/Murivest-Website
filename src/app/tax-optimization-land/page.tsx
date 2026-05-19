import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Calculator, ArrowRight, CheckCircle, TrendingDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Optimizing Capital Gains Tax on Land Disposition in Kenya',
  description: 'Legal strategies to minimize taxes when selling prime land or large assets. KRA Compliant Commercial Property Investment.',
  keywords: 'KRA Compliant Commercial Property Investment, capital gains tax Kenya land, tax optimization land disposition Kenya, land sale tax strategies Kenya',
  openGraph: {
    title: 'Optimizing Capital Gains Tax on Land Disposition in Kenya',
    description: 'Discover legal tax optimization strategies for land sales and commercial property dispositions in Kenya.',
    images: ['/kenya-night.webp'],
  },
  alternates: {
    canonical: 'https://murivest.co.ke/tax-optimization-land',
  },
}

export default function TaxOptimizationLandPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center bg-purple-700/30 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <FileText className="h-5 w-5 text-purple-300 mr-2" />
            <span className="text-purple-200 font-medium">Tax Optimization</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-light mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Optimizing Capital Gains Tax on Land Disposition in Kenya
          </h1>
          <p className="text-xl text-purple-100 mb-12 leading-relaxed max-w-4xl mx-auto">
            Legal strategies to minimize taxes when selling prime land or large assets. KRA Compliant Commercial Property Investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <button className="group bg-amber-600 hover:bg-amber-500 text-slate-900 px-10 py-5 font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25 flex items-center">
                <Calculator className="h-5 w-5 mr-3" />
                Get Tax Consultation
                <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/trust-structures">
              <button className="border-2 border-amber-400 hover:bg-amber-400 hover:text-slate-900 text-amber-400 px-10 py-5 font-semibold text-lg rounded-lg transition-all duration-300 flex items-center">
                <FileText className="h-5 w-5 mr-3" />
                View Trust Structures
              </button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <TrendingDown className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">15%</div>
              <div className="text-purple-200">Capital Gains Tax</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <CheckCircle className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">KRA</div>
              <div className="text-purple-200">Compliant</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Calculator className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">60%+</div>
              <div className="text-purple-200">Tax Savings</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="prose prose-lg max-w-none">
            <h2>Understanding Capital Gains Tax in Kenya</h2>
            <p>
              Under the Income Tax Act, capital gains on land disposition are taxed at 15% for companies and 5% for individuals on net capital gains. However, strategic planning can significantly reduce or defer this tax burden.
            </p>

            <h2>Key Tax Optimization Strategies</h2>
            <ul>
              <li>Rollover relief for reinvestment in qualifying assets</li>
              <li>Exchange of property for shares (corporate restructuring)</li>
              <li>Donation to approved charitable organizations</li>
              <li>Transfer to family trusts or holding companies</li>
              <li>Timing of disposal to optimize tax brackets</li>
            </ul>

            <h2>Rollover Relief Mechanism</h2>
            <p>
              Section 34 of the Income Tax Act allows deferral of capital gains tax when proceeds are reinvested in qualifying business assets within 12 months. This is particularly effective for land-to-land exchanges or investment in commercial property development.
            </p>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
              <h3 className="text-purple-900 mb-4">Case Example: Land Exchange</h3>
              <p className="text-purple-800 mb-4">
                A developer selling rural land worth KSh 500M and purchasing urban commercial land worth KSh 600M can defer capital gains tax through rollover relief, reducing immediate tax liability by KSh 75M.
              </p>
              <ul className="text-purple-800">
                <li>Deferred tax: KSh 75M (15% of KSh 500M gain)</li>
                <li>Reinvestment period: 12 months</li>
                <li>Qualifying assets: Commercial property, industrial land</li>
              </ul>
            </div>

            <h2>Corporate Restructuring Options</h2>
            <p>
              Converting personal land holdings to corporate assets through share exchanges can provide additional tax planning opportunities and succession benefits.
            </p>

            <h2>Compliance and Documentation</h2>
            <p>
              All tax optimization strategies must be KRA-compliant with proper documentation. Our team ensures full regulatory compliance while maximizing tax efficiency.
            </p>

            <h2>Why Choose Professional Advisory?</h2>
            <p>
              Land disposition involves complex tax and regulatory considerations. Our certified tax advisors and property specialists provide comprehensive guidance to ensure optimal outcomes.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}