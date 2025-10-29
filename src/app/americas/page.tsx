import type { Metadata } from 'next'
import Link from 'next/link'

import { DollarSign, TrendingUp, Building, ArrowRight, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Americas Real Estate Investment - Murivest Realty Group',
  description: 'U.S. and Caribbean family offices seeking exposure in Africa\'s income-yielding assets. Institutional REITs and private capital trends in American real estate investment.',
  keywords: 'Americas real estate investment, US family offices Africa, Caribbean investment, American REITs, private capital trends, African real estate exposure, Murivest Realty Group',
  openGraph: {
    title: 'Americas Real Estate Investment - Murivest Realty Group',
    description: 'U.S. and Caribbean family offices seeking exposure in Africa\'s income-yielding assets.',
    images: ['/kenya-night.png'],
  },
  alternates: {
    canonical: 'https://murivest.co.ke/americas',
  },
}

export default function AmericasPage() {
  const investmentTrends = [
    {
      trend: "U.S. Family Office Diversification",
      description: "American ultra-high-net-worth families allocating 10-15% of real estate portfolios to African commercial assets for yield enhancement and geographic diversification.",
      allocation: "$85B+",
      focus: "Office, logistics, residential developments",
      returns: "12-18% IRR targets"
    },
    {
      trend: "Caribbean Sovereign Funds",
      description: "Regional development banks and sovereign wealth funds in Caribbean nations investing in African infrastructure and commercial real estate partnerships.",
      allocation: "$12B+",
      focus: "Tourism infrastructure, commercial hubs, residential",
      returns: "10-15% IRR targets"
    },
    {
      trend: "Institutional REIT Expansion",
      description: "American REITs exploring African markets through joint ventures and development partnerships, particularly in logistics and data center sectors.",
      allocation: "$45B+",
      focus: "Industrial, data centers, specialized real estate",
      returns: "11-16% IRR targets"
    }
  ]

  const marketOpportunities = [
    {
      region: "United States",
      opportunity: "Family Office Capital",
      description: "Connect with U.S. family offices seeking African exposure through structured real estate investments and private equity partnerships.",
      volume: "$120B+ seeking allocation",
      entry: "Joint ventures, co-investments, structured products"
    },
    {
      region: "Caribbean",
      opportunity: "Regional Development Focus",
      description: "Caribbean institutions investing in African commercial assets with shared development goals and regional expertise.",
      volume: "$18B+ in development capital",
      entry: "Development partnerships, infrastructure funds, tourism projects"
    },
    {
      region: "Latin America",
      opportunity: "Cross-Regional Synergies",
      description: "Latin American institutional investors exploring African markets through established networks and development experience.",
      volume: "$35B+ institutional capital",
      entry: "Cross-border funds, development platforms, joint ventures"
    }
  ]

  const investmentMetrics = [
    { label: "American Capital Seeking Africa", value: "$160B+", trend: "+22%" },
    { label: "Family Office Allocations", value: "12-15%", trend: "+3%" },
    { label: "Cross-Border Partnerships", value: "89", trend: "+18" },
    { label: "Average Deal Size", value: "$25M+", trend: "+15%" }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className="max-w-4xl"
          >
            <div className="flex items-center mb-6">
              <DollarSign className="h-8 w-8 text-red-300 mr-3" />
              <span className="text-red-300 font-serif text-lg">Americas Investment Network</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-light mb-6">
              American Capital Flows to
              <span className="block font-medium text-white">African Income Assets</span>
            </h1>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Phase 5: Capture diaspora & institutional mandates. Establish Murivest North America Office.
              Partner with PE funds and diaspora syndicates for African commercial real estate investments.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {investmentMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-md rounded-lg p-4"
                >
                  <div className="text-2xl font-light text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-red-200 mb-1">{metric.label}</div>
                  <div className="text-xs text-green-300">{metric.trend}</div>
                </div>
              ))}
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <button
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-medium text-lg transition-all duration-300 flex items-center justify-center group shadow-2xl"
                >
                  <Users className="mr-3 h-5 w-5" />
                  Connect with American Investors
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
          <div
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
              American Investment Strategies
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              How U.S. family offices, Caribbean institutions, and American REITs are strategically allocating capital
              to African commercial real estate for enhanced portfolio diversification.
            </p>
          </div>

          <div className="space-y-8">
            {investmentTrends.map((trend, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-slate-900 mb-3">{trend.trend}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{trend.description}</p>
                    <div className="text-red-600 font-medium mb-2">{trend.focus}</div>
                  </div>
                  <div className="text-right ml-6">
                    <div className="text-3xl font-light text-red-600 mb-1">{trend.allocation}</div>
                    <div className="text-sm text-slate-500">Capital Seeking</div>
                    <div className="text-sm text-red-500 mt-1">{trend.returns}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunities */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Regional Market Opportunities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              Strategic entry points for American institutional capital into African commercial real estate markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {marketOpportunities.map((market, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-750 transition-colors"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-light text-white mb-2">{market.region}</h3>
                  <div className="text-red-400 font-medium text-sm">{market.opportunity}</div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">{market.description}</p>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">Investment Volume</span>
                    <span className="text-red-400 font-medium">{market.volume}</span>
                  </div>
                  <div className="border-t border-slate-700 pt-3">
                    <div className="text-sm font-medium text-white mb-1">Entry Strategies</div>
                    <div className="text-slate-400 text-sm">{market.entry}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Partner with American Institutional Capital
            </h2>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Connect with U.S. family offices, Caribbean institutions, and American REITs exploring African commercial real estate opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button
                  className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 font-medium text-lg transition-all duration-300"
                >
                  Schedule American Consultation
                </button>
              </Link>

              <Link href="/research">
                <button
                  className="border-2 border-white hover:bg-white hover:text-red-600 text-white px-8 py-4 font-medium text-lg transition-all duration-300"
                >
                  Americas Investment Report
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

      {/* Investment Trends */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className="text-center mb-16"
            }
            }
            }
            }
          >
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
              American Investment Strategies
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
          <div
            className="text-center mb-16"
          >
              <div
                key={index}
                className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100"
                }
                }
                }
                }
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-slate-900 mb-3">{trend.trend}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{trend.description}</p>
                    <div className="text-red-600 font-medium mb-2">{trend.focus}</div>
                  </div>
                  <div className="text-right ml-6">
              <div
                key={index}
                className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100"
              >
        </div>
      </section>

      {/* Market Opportunities */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className="text-center mb-16"
            }
            }
            }
            }
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Regional Market Opportunities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              Strategic entry points for American institutional capital into African commercial real estate markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {marketOpportunities.map((market, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-750 transition-colors"
                }
                }
                }
                }
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-light text-white mb-2">{market.region}</h3>
                  <div className="text-red-400 font-medium text-sm">{market.opportunity}</div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">{market.description}</p>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">Investment Volume</span>
                    <span className="text-red-400 font-medium">{market.volume}</span>
              <div
                key={index}
                className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-750 transition-colors"
              >
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div
            }
            }
            }
            }
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Partner with American Institutional Capital
            </h2>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Connect with U.S. family offices, Caribbean institutions, and American REITs exploring African commercial real estate opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button
                  className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 font-medium text-lg transition-all duration-300"
                  }
                  }
                >
                  Schedule American Consultation
                </button>
              </Link>
          <div>
                >
                  Americas Investment Report
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
                <button
                  className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 font-medium text-lg transition-all duration-300"
                >
                <button
                  className="border-2 border-white hover:bg-white hover:text-red-600 text-white px-8 py-4 font-medium text-lg transition-all duration-300"
                >
