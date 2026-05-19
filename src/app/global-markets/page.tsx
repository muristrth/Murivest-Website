import type { Metadata } from 'next'
import Link from 'next/link'
import { Globe, TrendingUp, Building, MapPin, ArrowRight, Crown, Shield, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Global Markets & Expansion - Murivest Realty Group',
  description: 'Institutional-grade commercial real estate opportunities across Africa, Middle East, Europe, Asia-Pacific, and Americas. Global expansion strategy for discerning investors.',
  keywords: 'global real estate investment, international property markets, commercial real estate expansion, institutional real estate opportunities, cross-border investments, Murivest Realty Group',
  openGraph: {
    title: 'Global Markets & Expansion - Murivest Realty Group',
    description: 'Institutional-grade commercial real estate opportunities across Africa, Middle East, Europe, Asia-Pacific, and Americas.',
    images: ['/kenya-night.webp'],
  },
  alternates: {
    canonical: 'https://murivest.co.ke/global-markets',
  },
}

export default function GlobalMarketsPage() {
  const regions = [
    {
      name: "Africa",
      description: "Gateway to frontier growth with Nairobi as the regional hub. Office, retail, and logistics sectors showing 8-12% annual returns.",
      opportunities: "Westlands CBD expansion, Lagos Island redevelopment, Sandton premium office towers",
      yields: "7.2-9.8%",
      growth: "10-15%",
      link: "/africa"
    },
    {
      name: "Middle East",
      description: "GCC sovereign wealth funds seeking African diversification. Dubai, Doha, and Riyadh capital flowing into emerging markets.",
      opportunities: "Cross-border investment vehicles, African property syndications, Islamic finance structures",
      yields: "6.5-8.5%",
      growth: "8-12%",
      link: "/middle-east"
    },
    {
      name: "Europe",
      description: "Mature markets meeting frontier growth. European institutional investors allocating 15-25% to African assets for yield enhancement.",
      opportunities: "Pan-European funds with African strategies, sovereign partnerships, cross-border developments",
      yields: "3.8-5.1%",
      growth: "2.5-5.5%",
      link: "/europe"
    },
    {
      name: "Asia-Pacific",
      description: "Singapore and Hong Kong capital seeking African exposure. Asian institutional investors diversifying into stable African markets.",
      opportunities: "Singapore REITs with African assets, Hong Kong family office investments, Asian development capital",
      yields: "4.5-6.8%",
      growth: "4-8%",
      link: "/asia-pacific"
    },
    {
      name: "Americas",
      description: "US and Canadian pension funds exploring African opportunities. North American capital seeking uncorrelated returns.",
      opportunities: "US institutional partnerships, Canadian pension fund allocations, cross-continental real estate funds",
      yields: "5.2-7.1%",
      growth: "3-6%",
      link: "/americas"
    }
  ]

  const globalMetrics = [
    { label: "Total Global Capital Seeking Africa", value: "$2.1T+", trend: "+22%" },
    { label: "Cross-Border Partnerships", value: "156", trend: "+18" },
    { label: "Average Portfolio Allocation to Africa", value: "18%", trend: "+4%" },
    { label: "Institutional Investors Active", value: "89", trend: "+12" }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <Globe className="h-8 w-8 text-amber-500 mr-3" />
              <span className="text-amber-500 font-serif italic text-lg">Global Expansion Strategy</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              Institutional Real Estate
              <span className="block text-amber-200/90 font-serif italic">Across Continents</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed font-light">
              Connecting global institutional capital with premium commercial real estate opportunities across Africa, Middle East, Europe, Asia-Pacific, and the Americas. Our concierge approach ensures discreet, fiduciary excellence for discerning investors.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {globalMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 p-6 text-center rounded"
                >
                  <div className="text-2xl font-serif text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-amber-400 mb-1">{metric.label}</div>
                  <div className="text-xs text-green-300">{metric.trend}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-amber-500 text-black font-bold uppercase tracking-widest hover:bg-amber-400 transition-all">
                  Schedule Global Consultation
                </button>
              </Link>

              <Link href="/research">
                <button className="px-8 py-4 border border-amber-500/60 text-amber-300 hover:bg-amber-500 hover:text-black transition-all font-bold uppercase tracking-widest">
                  Global Markets Report
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Markets */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Regional Market Intelligence
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto font-light">
              Comprehensive analysis of institutional-grade opportunities across global markets, with data-driven insights and strategic recommendations for cross-border investments.
            </p>
          </div>

          <div className="space-y-8">
            {regions.map((region, index) => (
              <div
                key={index}
                className="bg-white/[0.02] border border-white/10 p-8 rounded"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <MapPin className="h-6 w-6 text-amber-500 mr-3" />
                      <h3 className="text-2xl font-serif text-white">{region.name}</h3>
                    </div>
                    <p className="text-slate-400 leading-relaxed mb-4 font-light">{region.description}</p>
                    <div className="text-amber-400 font-serif italic mb-2">Key Opportunities:</div>
                    <p className="text-slate-300 mb-4 font-light">{region.opportunities}</p>
                  </div>
                  <div className="text-right ml-6">
                    <div className="text-2xl font-serif text-amber-400 mb-1">{region.yields}</div>
                    <div className="text-sm text-slate-500 mb-2">Target Yields</div>
                    <div className="text-lg font-serif text-green-400 mb-1">{region.growth}</div>
                    <div className="text-sm text-slate-500">Annual Growth</div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Link href={region.link}>
                    <button className="px-6 py-3 border border-amber-500/60 text-amber-300 hover:bg-amber-500 hover:text-black transition-all flex items-center group font-bold uppercase tracking-widest">
                      Explore {region.name}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Strategy */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Global Investment Strategy
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto font-light">
              Our institutional approach combines global market intelligence with local expertise, ensuring optimal risk-adjusted returns across diverse geographies and asset classes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white/[0.02] border border-white/10 p-8 text-center rounded">
              <Shield className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-3">Risk Mitigation</h3>
              <p className="text-slate-400 font-light">
                Geographic diversification, currency hedging, and regulatory compliance across jurisdictions ensure portfolio stability.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/10 p-8 text-center rounded">
              <TrendingUp className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-3">Yield Optimization</h3>
              <p className="text-slate-400 font-light">
                Strategic allocation across yield curves, from stable European returns to high-growth African opportunities.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/10 p-8 text-center rounded">
              <Award className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-3">Institutional Excellence</h3>
              <p className="text-slate-400 font-light">
                Direct access to sovereign wealth funds, pension capital, and family offices through our global network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
              Ready to Explore Global Opportunities?
            </h2>
            <p className="text-slate-400 text-xl mb-8 leading-relaxed font-light">
              Connect with our team of international real estate experts for personalized guidance on cross-border investment opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-amber-500 text-black font-bold uppercase tracking-widest hover:bg-amber-400 transition-all">
                  Schedule Global Consultation
                </button>
              </Link>

              <Link href="/research">
                <button className="px-8 py-4 border border-amber-500/60 text-amber-300 hover:bg-amber-500 hover:text-black transition-all font-bold uppercase tracking-widest">
                  Global Markets Report
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}