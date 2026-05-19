import type { Metadata } from 'next'
import Link from 'next/link'

import { Shield, TrendingUp, Building, ArrowRight, Euro } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Europe Real Estate Investment - Murivest Realty Group',
  description: 'Europe as a mature, stable market for cross-border investments. Compare yield compression in Frankfurt, London, and Amsterdam to frontier growth in Nairobi and Accra.',
  keywords: 'Europe real estate investment, Frankfurt commercial property, London office market, Amsterdam investment, European real estate diversification, cross-border investments, Murivest Realty Group',
  openGraph: {
    title: 'Europe Real Estate Investment - Murivest Realty Group',
    description: 'Europe as a mature, stable market for cross-border investments.',
    images: ['/kenya-night.webp'],
  },
  alternates: {
    canonical: 'https://murivest.co.ke/europe',
  },
}

export default function EuropePage() {
  const marketComparison = [
    {
      city: "Frankfurt",
      maturity: "Established Market",
      yields: "3.8-4.5%",
      growth: "2-4% annually",
      stability: "High",
      africanComparison: "vs Nairobi: 7.2-8.5% yields, 12-15% growth"
    },
    {
      city: "London",
      maturity: "Prime Global Hub",
      yields: "4.2-5.1%",
      growth: "3-5% annually",
      stability: "High",
      africanComparison: "vs Accra: 8.1-9.8% yields, 8-12% growth"
    },
    {
      city: "Amsterdam",
      maturity: "Sustainable Market",
      yields: "4.0-4.8%",
      growth: "2.5-4.5% annually",
      stability: "High",
      africanComparison: "vs Lagos: 7.8-9.2% yields, 10-14% growth"
    }
  ]

  const diversificationStrategies = [
    {
      strategy: "Yield Enhancement through Africa",
      description: "European institutional investors allocating 15-25% of portfolios to African commercial real estate for yield enhancement and diversification.",
      benefits: "8-12% higher yields, uncorrelated returns, demographic tailwinds",
      capital: "€45B+ seeking allocation",
      timeline: "5-7 year holding periods"
    },
    {
      strategy: "Cross-Border Real Estate Funds",
      description: "Pan-European funds with dedicated African strategies, combining European stability with African growth potential.",
      benefits: "Geographic diversification, regulatory arbitrage, currency hedging opportunities",
      capital: "€28B+ in structured products",
      timeline: "7-10 year investment horizons"
    },
    {
      strategy: "Sovereign & Pension Partnerships",
      description: "European pension funds and sovereign entities partnering with African institutions for joint developments and acquisitions.",
      benefits: "Local expertise access, risk mitigation, development premium capture",
      capital: "€32B+ in partnership structures",
      timeline: "10+ year strategic investments"
    }
  ]

  const investmentMetrics = [
    { label: "European Capital Seeking Africa", value: "€105B+", trend: "+18%" },
    { label: "Yield Premium vs Europe", value: "4-5%", trend: "Stable" },
    { label: "African Growth Differential", value: "8-10%", trend: "+2%" },
    { label: "Cross-Border Partnerships", value: "67", trend: "+12" }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-amber-500 mr-3" />
              <span className="text-amber-500 font-serif italic text-lg">European Investment Gateway</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              Mature Markets Meet
              <span className="block text-amber-200/90 font-serif italic">Frontier Growth</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed font-light">
              Phase 3: Partner with institutional wealth firms investing in Africa. Host "Africa Yield Delegation" events.
              Connect European private wealth managers and asset managers with African commercial real estate opportunities.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {investmentMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 p-4 text-center rounded"
                >
                  <div className="text-2xl font-serif text-amber-400 mb-1">{metric.value}</div>
                  <div className="text-sm text-slate-400 mb-1">{metric.label}</div>
                  <div className="text-xs text-green-400">{metric.trend}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-amber-500 text-black font-bold uppercase tracking-widest hover:bg-amber-400 transition-all flex items-center justify-center group">
                  <Euro className="mr-3 h-5 w-5" />
                  Connect with European Investors
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Comparison */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              European vs African Market Dynamics
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto font-light">
              Understanding the yield and growth differentials between mature European markets and high-growth African opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {marketComparison.map((market, index) => (
              <div
                key={index}
                className="bg-white/[0.02] border border-white/10 p-8 rounded"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-serif mb-2">{market.city}</h3>
                  <div className="text-amber-400 font-serif italic text-sm">{market.maturity}</div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Prime Yields</span>
                    <span className="text-amber-400 font-medium">{market.yields}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Annual Growth</span>
                    <span className="text-amber-400 font-medium">{market.growth}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Stability Rating</span>
                    <span className="text-amber-400 font-serif italic">{market.stability}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="text-sm text-amber-400 font-serif italic mb-2">African Comparison</div>
                  <div className="text-slate-400 text-sm font-light">{market.africanComparison}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diversification Strategies */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Capital Diversification Strategies
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto font-light">
              How European institutional investors are strategically allocating capital to African real estate for enhanced portfolio performance.
            </p>
          </div>

          <div className="space-y-8">
            {diversificationStrategies.map((strategy, index) => (
              <div
                key={index}
                className="bg-white/[0.02] border border-white/10 p-8 rounded"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif mb-3">{strategy.strategy}</h3>
                    <p className="text-slate-400 leading-relaxed mb-4 font-light">{strategy.description}</p>
                    <div className="text-amber-400 font-serif italic mb-2">{strategy.benefits}</div>
                  </div>
                  <div className="text-right ml-6">
                    <div className="text-2xl font-serif text-amber-400 mb-1">{strategy.capital}</div>
                    <div className="text-sm text-slate-500">{strategy.timeline}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
              Optimize Your European Portfolio with African Growth
            </h2>
            <p className="text-slate-400 text-xl mb-8 leading-relaxed font-light">
              Connect with European institutional investors seeking strategic African real estate exposure for portfolio diversification.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-amber-500 text-black font-bold uppercase tracking-widest hover:bg-amber-400 transition-all">
                  Schedule European Consultation
                </button>
              </Link>

              <Link href="/research">
                <button className="px-8 py-4 border border-amber-500/60 text-amber-300 hover:bg-amber-500 hover:text-black transition-all font-bold uppercase tracking-widest">
                  European Investment Report
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
