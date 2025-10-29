import type { Metadata } from 'next'
import Link from 'next/link'
import { Download, TrendingUp, Building, MapPin, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Africa Commercial Real Estate Investment - Murivest Realty Group',
  description: 'Institutional-grade commercial real estate opportunities across Africa. Office markets in Nairobi, Lagos, Johannesburg; retail evolution in Kampala, Kigali, Accra; logistics expansion and data centers.',
  keywords: 'Africa commercial real estate, Nairobi office market, Lagos investment, Johannesburg properties, Kampala retail, Accra commercial, African real estate investment, Murivest Realty Group',
  openGraph: {
    title: 'Africa Commercial Real Estate Investment - Murivest Realty Group',
    description: 'Institutional-grade commercial real estate opportunities across Africa.',
    images: ['/kenya-night.png'],
  },
  alternates: {
    canonical: 'https://murivest.co.ke/africa',
  },
}

export default function AfricaPage() {
  const marketInsights = [
    {
      sector: "Office Markets",
      cities: "Nairobi, Lagos, Johannesburg",
      trends: "Premium Grade A office spaces showing 8-12% rental growth. Institutional demand from tech and financial services driving prime yields to 6.5-7.5%.",
      opportunities: "Westlands CBD expansion, Lagos Island redevelopment, Sandton premium office towers."
    },
    {
      sector: "Retail Evolution",
      cities: "Kampala, Kigali, Accra",
      trends: "Modern shopping centers replacing traditional markets. E-commerce integration boosting experiential retail. Average yields: 7.8-9.2%.",
      opportunities: "Mixed-use developments combining retail, office, and residential in growing urban centers."
    },
    {
      sector: "Logistics & Warehousing",
      cities: "Nairobi, Addis Ababa, Dar es Salaam",
      trends: "E-commerce boom driving cold storage and distribution centers. Industrial yields compressing to 8.5-10%. Strategic locations near ports and airports.",
      opportunities: "Last-mile distribution hubs, temperature-controlled warehousing for pharmaceuticals and food."
    },
    {
      sector: "Data Centers & Healthcare",
      cities: "Cape Town, Nairobi, Lagos",
      trends: "Digital transformation accelerating data center demand. Healthcare real estate showing resilience with 7-9% yields. Regulatory support for critical infrastructure.",
      opportunities: "Hyperscale data centers, specialty hospitals, medical office buildings."
    }
  ]

  const keyMetrics = [
    { label: "GDP Growth (Avg)", value: "4.2%", trend: "+0.8%" },
    { label: "Urban Population", value: "45%", trend: "+2.1%" },
    { label: "Commercial Stock", value: "$850B", trend: "+15%" },
    { label: "Institutional Investment", value: "$12B", trend: "+25%" }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Africa's Commercial Real Estate
              <span className="block font-medium text-amber-400">Growth Frontier</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Phase 1: Build continental authority through institutional-grade assets. Publish Africa Yield Reports & co-investment notes.
              Partner with local law firms, property valuers, and pension funds across Kenya, Rwanda, Uganda, Tanzania, Nigeria, and South Africa.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {keyMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="text-2xl font-light text-amber-400 mb-1">{metric.value}</div>
                  <div className="text-sm text-slate-400 mb-1">{metric.label}</div>
                  <div className="text-xs text-green-400">{metric.trend}</div>
                </div>
              ))}
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/research">
                <button
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 font-medium text-lg transition-all duration-300 flex items-center justify-center group shadow-2xl"
                >
                  <Download className="mr-3 h-5 w-5" />
                  Download Africa Report 2024–25
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
              Institutional Trends & Opportunities
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Data-driven insights into Africa's commercial real estate sectors, highlighting institutional-grade opportunities
              for pension funds, sovereign wealth funds, and family offices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {marketInsights.map((insight, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-colors"
              >
                <div className="flex items-start mb-4">
                  <Building className="h-8 w-8 text-amber-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-2xl font-light text-slate-900 mb-2">{insight.sector}</h3>
                    <div className="flex items-center text-amber-600 mb-3">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="font-medium">{insight.cities}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">Market Trends</h4>
                    <p className="text-slate-600 leading-relaxed">{insight.trends}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">Investment Opportunities</h4>
                    <p className="text-slate-600 leading-relaxed">{insight.opportunities}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Ready to Explore Africa's Investment Landscape?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Access our comprehensive Africa Institutional Real Estate Report and connect with our team of regional experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 font-medium text-lg transition-all duration-300"
                >
                  Schedule Consultation
                </button>
              </Link>

              <Link href="/research">
                <button
                  className="border-2 border-amber-400 hover:bg-amber-400 hover:text-slate-900 text-amber-400 px-8 py-4 font-medium text-lg transition-all duration-300"
                >
                  View All Reports
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
