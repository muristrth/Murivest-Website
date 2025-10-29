import type { Metadata } from 'next'
import Link from 'next/link'

import { TrendingUp, Crown, Building, ArrowRight, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Middle East Real Estate Investment - Murivest Realty Group',
  description: 'Gulf investment appetite in African and European assets. Sovereign wealth funds, pension capital, and family offices diversifying into institutional-grade African and Asian real estate.',
  keywords: 'Middle East real estate investment, Gulf sovereign wealth funds, Dubai property investment, Doha real estate, Riyadh commercial property, African real estate diversification, Murivest Realty Group',
  openGraph: {
    title: 'Middle East Real Estate Investment - Murivest Realty Group',
    description: 'Gulf investment appetite in African and European assets.',
    images: ['/kenya-night.png'],
  },
  alternates: {
    canonical: 'https://murivest.co.ke/middle-east',
  },
}

export default function MiddleEastPage() {
  const investmentTrends = [
    {
      trend: "Sovereign Wealth Diversification",
      description: "GCC sovereign wealth funds allocating 15-20% of portfolios to African and Asian real estate for yield enhancement and geographic diversification.",
      cities: "Dubai, Abu Dhabi, Riyadh",
      allocation: "$450B+",
      target: "African commercial assets, European prime properties"
    },
    {
      trend: "Pension Fund Capital",
      description: "Middle Eastern pension funds seeking 7-9% yields in stable African markets, particularly office and logistics sectors.",
      cities: "Doha, Kuwait City, Manama",
      allocation: "$180B+",
      target: "Institutional-grade office buildings, industrial parks"
    },
    {
      trend: "Family Office Strategies",
      description: "Ultra-high-net-worth families diversifying from traditional Gulf markets into frontier African opportunities with strong growth potential.",
      cities: "Dubai, Riyadh, Jeddah",
      allocation: "$120B+",
      target: "Premium residential, hospitality, mixed-use developments"
    }
  ]

  const keyCities = [
    {
      city: "Dubai",
      focus: "Gateway to Africa",
      opportunities: "Cross-border investment vehicles, African property syndications",
      yields: "6.5-8.5%",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop"
    },
    {
      city: "Doha",
      focus: "Institutional Capital",
      opportunities: "Qatari sovereign investments in African infrastructure and real estate",
      yields: "7.0-9.0%",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    },
    {
      city: "Riyadh",
      focus: "Vision 2030 Growth",
      opportunities: "Saudi capital flowing into African commercial and residential assets",
      yields: "7.5-9.5%",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    }
  ]

  const investmentMetrics = [
    { label: "Total Capital Seeking", value: "$750B+", trend: "+18%" },
    { label: "African Allocation Target", value: "20%", trend: "+5%" },
    { label: "Average Holding Period", value: "7-10 years", trend: "Stable" },
    { label: "Preferred Yields", value: "7-9%", trend: "+0.5%" }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <Crown className="h-8 w-8 text-amber-300 mr-3" />
              <span className="text-amber-300 font-serif text-lg">Middle East Investment Hub</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Gulf Capital Flows to
              <span className="block font-medium text-white">African & European Assets</span>
            </h1>
            <p className="text-xl text-amber-100 mb-8 leading-relaxed">
              Phase 2: Tap Gulf investment inflows into Africa. Establish Murivest Capital Desk in Dubai.
              Target family offices and private banks seeking African diversification through structured real estate investments.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {investmentMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-md rounded-lg p-4"
                >
                  <div className="text-2xl font-light text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-amber-200 mb-1">{metric.label}</div>
                  <div className="text-xs text-green-300">{metric.trend}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="bg-white hover:bg-gray-100 text-amber-900 px-8 py-4 font-medium text-lg transition-all duration-300 flex items-center justify-center group shadow-2xl">
                  <DollarSign className="mr-3 h-5 w-5" />
                  Connect with Gulf Investors
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Trends */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
              Capital Diversification Strategies
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              How Middle Eastern institutional investors are allocating capital to African and European real estate
              for enhanced portfolio diversification and yield optimization.
            </p>
          </div>

          <div className="space-y-8">
            {investmentTrends.map((trend, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-slate-50 to-amber-50 rounded-2xl p-8 border border-amber-100"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-slate-900 mb-3">{trend.trend}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{trend.description}</p>
                    <div className="flex items-center text-amber-600 mb-2">
                      <Building className="h-4 w-4 mr-2" />
                      <span className="font-medium">{trend.cities}</span>
                    </div>
                  </div>
                  <div className="text-right ml-6">
                    <div className="text-3xl font-light text-amber-600 mb-1">{trend.allocation}</div>
                    <div className="text-sm text-slate-500">Capital Allocation</div>
                  </div>
                </div>

                <div className="border-t border-amber-200 pt-4">
                  <div className="text-sm font-medium text-slate-900 mb-1">Target Assets:</div>
                  <div className="text-slate-600">{trend.target}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Cities */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Strategic Investment Hubs
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              Key Middle Eastern cities driving cross-border real estate investment into African and European markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {keyCities.map((city, index) => (
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
                  <div className="text-amber-400 font-medium mb-2">{city.focus}</div>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">{city.opportunities}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">Target Yields</span>
                    <span className="text-amber-400 font-medium">{city.yields}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Partner with Middle Eastern Institutional Capital
            </h2>
            <p className="text-xl text-amber-100 mb-8 leading-relaxed">
              Connect with sovereign wealth funds, pension capital, and family offices seeking African and European real estate exposure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white hover:bg-gray-100 text-amber-600 px-8 py-4 font-medium text-lg transition-all duration-300">
                  Schedule Institutional Meeting
                </button>
              </Link>

              <Link href="/research">
                <button className="border-2 border-white hover:bg-white hover:text-amber-600 text-white px-8 py-4 font-medium text-lg transition-all duration-300">
                  Middle East Investment Report
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
