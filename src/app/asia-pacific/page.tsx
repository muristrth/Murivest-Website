import type { Metadata } from 'next'
import Link from 'next/link'

import { Globe, TrendingUp, Building, ArrowRight, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Asia-Pacific Real Estate Investment - Murivest Realty Group',
  description: 'Investor synergies between Kenya, Singapore, and Australia for institutional-grade property syndications. Regional insights on Kuala Lumpur, Mumbai, Sydney, and Singapore real estate performance.',
  keywords: 'Asia-Pacific real estate investment, Singapore property syndications, Australian real estate, Kuala Lumpur commercial, Mumbai office market, Sydney investment, Kenya Singapore synergy, Murivest Realty Group',
  openGraph: {
    title: 'Asia-Pacific Real Estate Investment - Murivest Realty Group',
    description: 'Investor synergies between Kenya, Singapore, and Australia for institutional-grade property syndications.',
    images: ['/kenya-night.png'],
  },
  alternates: {
    canonical: 'https://murivest.co.ke/asia-pacific',
  },
}

export default function AsiaPacificPage() {
  const regionalSynergies = [
    {
      synergy: "Kenya-Singapore Investment Bridge",
      description: "Singaporean institutional capital flowing into Nairobi's tech and logistics sectors. Joint ventures between Kenyan developers and Singaporean sovereign funds.",
      cities: "Nairobi ↔ Singapore",
      volume: "$2.8B",
      sectors: "Office, Data Centers, Logistics"
    },
    {
      synergy: "Australia-Kenya Development Partnerships",
      description: "Australian superannuation funds partnering with Kenyan institutions for residential and commercial developments. Cross-border expertise exchange.",
      cities: "Nairobi ↔ Sydney, Melbourne",
      volume: "$1.9B",
      sectors: "Mixed-Use, Residential, Retail"
    },
    {
      synergy: "Malaysia-Kenya Trade Corridor",
      description: "Malaysian investment in East African manufacturing and distribution hubs. Kuala Lumpur-Nairobi business corridor development.",
      cities: "Nairobi ↔ Kuala Lumpur",
      volume: "$1.2B",
      sectors: "Industrial, Warehousing, Commercial"
    }
  ]

  const cityInsights = [
    {
      city: "Singapore",
      insight: "Gateway to Southeast Asia",
      performance: "Prime office yields: 3.8-4.5%, Capital growth: 8-12% annually",
      opportunities: "Cross-border syndications, REIT partnerships, African market entry strategies",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop"
    },
    {
      city: "Sydney",
      insight: "Stable Market Leadership",
      performance: "CBD office yields: 4.2-5.1%, Residential growth: 6-9% annually",
      opportunities: "Institutional partnerships, Australian super fund allocations to African assets",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
    },
    {
      city: "Kuala Lumpur",
      insight: "Emerging Market Connector",
      performance: "Commercial yields: 5.5-7.2%, Development pipeline: $45B+",
      opportunities: "Malaysian institutional investment in African infrastructure and real estate",
      image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&h=600&fit=crop"
    },
    {
      city: "Mumbai",
      insight: "High-Growth Opportunity",
      performance: "Office yields: 6.2-7.8%, Population growth driving demand",
      opportunities: "Indian institutional capital exploring African commercial opportunities",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    }
  ]

  const marketMetrics = [
    { label: "Cross-Border Investment", value: "$6.2B", trend: "+22%" },
    { label: "Institutional Partnerships", value: "45+", trend: "+15" },
    { label: "Joint Venture Projects", value: "28", trend: "+9" },
    { label: "Average IRR", value: "12-18%", trend: "+2%" }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className="max-w-4xl"
          >
            <div className="flex items-center mb-6">
              <Globe className="h-8 w-8 text-blue-300 mr-3" />
              <span className="text-blue-300 font-serif text-lg">Asia-Pacific Investment Network</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Cross-Continental Investment
              <span className="block font-medium text-white">Synergies</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Phase 4: Structure JV funds targeting African CRE. Launch Murivest Asia Fund.
              Partner with REITs and institutional investors from Singapore, Hong Kong, and Japan for African commercial real estate.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {marketMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-md rounded-lg p-4"
                >
                  <div className="text-2xl font-light text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-blue-200 mb-1">{metric.label}</div>
                  <div className="text-xs text-green-300">{metric.trend}</div>
                </div>
              ))}
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-medium text-lg transition-all duration-300 flex items-center justify-center group shadow-2xl"
                >
                  <Users className="mr-3 h-5 w-5" />
                  Connect with Asian Investors
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Synergies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
              Kenya-Asia Pacific Investment Bridges
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Strategic partnerships between Kenyan institutions and Asia-Pacific investors creating new opportunities
              in institutional-grade commercial real estate.
            </p>
          </div>

          <div className="space-y-8">
            {regionalSynergies.map((synergy, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-slate-900 mb-3">{synergy.synergy}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{synergy.description}</p>
                    <div className="flex items-center text-blue-600 mb-2">
                      <Globe className="h-4 w-4 mr-2" />
                      <span className="font-medium">{synergy.cities}</span>
                    </div>
                  </div>
                  <div className="text-right ml-6">
                    <div className="text-3xl font-light text-blue-600 mb-1">{synergy.volume}</div>
                    <div className="text-sm text-slate-500">Investment Volume</div>
                  </div>
                </div>

                <div className="border-t border-blue-200 pt-4">
                  <div className="text-sm font-medium text-slate-900 mb-1">Focus Sectors:</div>
                  <div className="text-slate-600">{synergy.sectors}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Insights */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Key Market Insights
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              Performance analysis and investment opportunities across major Asia-Pacific real estate markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cityInsights.map((city, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-2xl overflow-hidden hover:bg-slate-750 transition-colors"
              >
                <div className="relative h-48">
                  <img
                    src={city.image}
                    alt={city.city}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/40" />
                  <div className="absolute bottom-4 left-4">
                    <div className="text-2xl font-light text-white">{city.city}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-blue-400 font-medium mb-3">{city.insight}</div>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">{city.performance}</p>
                  <div className="border-t border-slate-700 pt-4">
                    <div className="text-sm font-medium text-white mb-2">Investment Opportunities</div>
                    <p className="text-slate-400 text-sm">{city.opportunities}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Join Asia-Pacific Investment Networks
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Connect with institutional investors from Singapore, Australia, and Malaysia exploring African real estate opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button
                  className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 font-medium text-lg transition-all duration-300"
                >
                  Schedule Partnership Meeting
                </button>
              </Link>

              <Link href="/research">
                <button
                  className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 font-medium text-lg transition-all duration-300"
                >
                  Asia-Pacific Investment Report
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
