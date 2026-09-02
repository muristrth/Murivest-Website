import type { Metadata } from 'next'
import Link from 'next/link'

import { ArrowRight } from 'lucide-react'

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
    canonical: 'https://murivest.com/europe',
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
    <div className="min-h-screen bg-[#F8F7F4] text-[#2C2C2C]">
      {/* Hero Section */}
      <section className="relative bg-[#2C2C2C] overflow-hidden">
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-40 pb-24 md:pb-32">
          <div className="max-w-4xl">
            <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#8B7355] font-medium">
              European Investment Gateway
            </p>

            <h1 className="mt-8 font-serif text-[2.8rem] md:text-[4rem] lg:text-[4.5rem] text-[#F8F7F4] leading-[1.02]">
              Mature Markets Meet
              <span className="block italic font-light text-[#8B7355]">Frontier Growth</span>
            </h1>
            <div className="w-16 h-[1px] bg-[#F8F7F4]/20 mt-8 mb-8" />
            <p className="max-w-2xl text-[15px] md:text-[17px] leading-[1.7] text-[#F8F7F4]/65 font-light mb-12">
              Phase 3: Partner with institutional wealth firms investing in Africa. Host &ldquo;Africa Yield Delegation&rdquo; events.
              Connect European private wealth managers and asset managers with African commercial real estate opportunities.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#F8F7F4]/10 border border-[#F8F7F4]/10 mb-12">
              {investmentMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-[#2C2C2C] p-6 text-center"
                >
                  <div className="font-serif text-2xl md:text-3xl text-[#8B7355] mb-2">{metric.value}</div>
                  <div className="text-[11px] tracking-[0.1em] uppercase text-[#F8F7F4]/55 mb-1">{metric.label}</div>
                  <div className="text-[11px] text-[#8B7355]/80">{metric.trend}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F8F7F4] text-[#2C2C2C] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#8B7355] hover:text-[#F8F7F4] transition-colors duration-500"
              >
                Connect with European Investors
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Comparison */}
      <section className="py-24 lg:py-36 bg-white border-b border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#8B7355] font-medium mb-6">
              Market Dynamics
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] text-[#2C2C2C] mb-6">
              European vs African Market Dynamics
            </h2>
            <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light max-w-3xl mx-auto">
              Understanding the yield and growth differentials between mature European markets and high-growth African opportunities.
            </p>
          </div>

          <div className="grid gap-px border border-[#E5E2DC] bg-[#E5E2DC] md:grid-cols-3">
            {marketComparison.map((market, index) => (
              <div
                key={index}
                className="bg-white hover:bg-[#F8F7F4] transition-colors duration-500 p-8 lg:p-10"
              >
                <div className="text-center mb-8">
                  <h3 className="font-serif text-2xl text-[#2C2C2C] mb-2">{market.city}</h3>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-medium">{market.maturity}</div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-[#E5E2DC] pb-3">
                    <span className="text-[13px] text-[#5A5A5A] font-light">Prime Yields</span>
                    <span className="text-[13px] text-[#8B7355] font-medium">{market.yields}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#E5E2DC] pb-3">
                    <span className="text-[13px] text-[#5A5A5A] font-light">Annual Growth</span>
                    <span className="text-[13px] text-[#8B7355] font-medium">{market.growth}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#E5E2DC] pb-3">
                    <span className="text-[13px] text-[#5A5A5A] font-light">Stability Rating</span>
                    <span className="text-[13px] text-[#2C2C2C] font-medium">{market.stability}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[#E5E2DC]">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#8B7355] font-medium mb-2">African Comparison</div>
                  <div className="text-[13px] text-[#5A5A5A] font-light leading-[1.7]">{market.africanComparison}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diversification Strategies */}
      <section className="py-24 lg:py-36 bg-[#F8F7F4] border-b border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#8B7355] font-medium mb-6">
              Capital Allocation
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] text-[#2C2C2C] mb-6">
              Capital Diversification Strategies
            </h2>
            <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light max-w-3xl mx-auto">
              How European institutional investors are strategically allocating capital to African real estate for enhanced portfolio performance.
            </p>
          </div>

          <div className="space-y-px border border-[#E5E2DC] bg-[#E5E2DC]">
            {diversificationStrategies.map((strategy, index) => (
              <div
                key={index}
                className="bg-white hover:bg-[#F8F7F4] transition-colors duration-500 p-8 lg:p-10"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <p className="text-[11px] tracking-[0.2em] text-[#8B7355] font-medium mb-4">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-serif text-xl md:text-2xl text-[#2C2C2C] mb-3">{strategy.strategy}</h3>
                    <p className="text-[13px] leading-[1.75] text-[#5A5A5A] font-light mb-4">{strategy.description}</p>
                    <div className="text-[12px] text-[#8B7355] font-light italic">{strategy.benefits}</div>
                  </div>
                  <div className="md:text-right md:ml-10 shrink-0 border-t md:border-t-0 md:border-l border-[#E5E2DC] pt-6 md:pt-0 md:pl-10">
                    <div className="font-serif text-2xl text-[#8B7355] mb-1">{strategy.capital}</div>
                    <div className="text-[11px] tracking-[0.1em] uppercase text-[#5A5A5A]">{strategy.timeline}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-36 bg-[#2C2C2C]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#8B7355] font-medium mb-6">
              Begin the Conversation
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] text-[#F8F7F4] mb-6">
              Optimize Your European Portfolio with African Growth
            </h2>
            <p className="text-[14px] leading-[1.8] text-[#F8F7F4]/65 font-light mb-10 max-w-2xl mx-auto">
              Connect with European institutional investors seeking strategic African real estate exposure for portfolio diversification.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F8F7F4] text-[#2C2C2C] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#8B7355] hover:text-[#F8F7F4] transition-colors duration-500"
              >
                Schedule European Consultation
              </Link>

              <Link
                href="/research"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#F8F7F4]/25 text-[#F8F7F4]/85 text-[11px] tracking-[0.2em] uppercase font-medium hover:border-[#8B7355] hover:text-[#F8F7F4] transition-all duration-500"
              >
                European Investment Report
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
