import type { Metadata } from 'next'
import Link from 'next/link'
import { TrendingUp, Building, ArrowRight, Download, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Market Insights - Emerging Asset Classes - Murivest Realty Group',
  description: 'Expert insights on emerging asset classes: Institutional Office vs Residential Returns in Africa, Warehousing & Cold Storage, Data Centres, Medical Real Estate.',
  keywords: 'market insights, emerging asset classes, African real estate returns, institutional office, residential returns, warehousing cold storage, data centres Africa, medical real estate, Murivest Realty Group',
  openGraph: {
    title: 'Market Insights - Emerging Asset Classes - Murivest Realty Group',
    description: 'Expert insights on emerging asset classes in African commercial real estate.',
    images: ['/kenya-night.png'],
  },
  alternates: {
    canonical: 'https://murivest.co.ke/market-insights',
  },
}

export default function MarketInsightsPage() {
  const insights = [
    {
      title: "Institutional Office vs Residential Returns in Africa",
      excerpt: "Analyzing the performance differential between institutional-grade office buildings and residential developments across major African cities.",
      content: `Prime office yields in Nairobi (7.2-8.5%) and Lagos (7.8-9.2%) demonstrate superior risk-adjusted returns compared to residential assets (6.5-8.0%). Institutional office buildings benefit from longer leases, creditworthy tenants, and lower vacancy rates. While residential developments offer higher capital growth potential in growth markets like Accra and Kigali, institutional offices provide more predictable income streams and lower volatility. The yield premium for institutional office space has widened to 1.5-2.0% over residential assets, making offices increasingly attractive for pension funds and sovereign wealth funds seeking stable, income-focused investments.`,
      keyPoints: [
        "Office yields: 7.2-9.2% across major cities",
        "Residential yields: 6.5-8.0% in growth markets",
        "Institutional preference for predictable income",
        "Yield premium of 1.5-2.0% for prime offices"
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
    },
    {
      title: "Warehousing & Cold Storage in East Africa",
      excerpt: "The explosive growth of e-commerce and food distribution driving demand for modern warehousing and temperature-controlled facilities.",
      content: `East Africa's warehousing sector is experiencing unprecedented growth, with cold storage capacity expanding at 25% annually. E-commerce giants and food distributors are driving demand for modern facilities with advanced inventory management systems. Prime warehousing yields range from 8.5-10.5%, with cold storage commanding premiums of 1.0-1.5%. Strategic locations near ports (Mombasa, Dar es Salaam) and major cities offer superior logistics advantages. Institutional investors are increasingly viewing warehousing as a defensive asset class, with long-term leases (10-15 years) and inflation-linked rent escalations providing protection against macroeconomic volatility.`,
      keyPoints: [
        "25% annual capacity growth in cold storage",
        "Warehousing yields: 8.5-10.5%",
        "Cold storage premium: 1.0-1.5%",
        "Long-term leases: 10-15 years"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
    },
    {
      title: "Data Centres as Africa's Next Frontier",
      excerpt: "The rapid digital transformation creating institutional-grade opportunities in Africa's data center sector.",
      content: `Africa's data center market is poised for explosive growth, with demand driven by digital transformation, fintech expansion, and cloud computing adoption. Prime data centers in Nairobi and Johannesburg achieve yields of 7.5-9.0%, with hyperscale facilities commanding premiums. The sector benefits from long-term contracts (15-20 years) with creditworthy tenants including tech giants and financial institutions. Power reliability, fiber connectivity, and regulatory stability are key success factors. Institutional investors view data centers as uncorrelated assets with defensive characteristics, offering protection during economic downturns while participating in Africa's digital growth story.`,
      keyPoints: [
        "Data center yields: 7.5-9.0%",
        "Contract lengths: 15-20 years",
        "Creditworthy tenants: tech and fintech",
        "Defensive characteristics in downturns"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
    },
    {
      title: "Medical Real Estate: The New Institutional Hedge",
      excerpt: "Healthcare infrastructure emerging as a resilient asset class with stable occupancy and demographic tailwinds.",
      content: `Medical real estate represents Africa's most resilient commercial asset class, with hospital and clinic portfolios achieving occupancy rates above 95%. Prime medical yields range from 7.0-8.5%, with specialty facilities (cancer centers, cardiac units) commanding premiums. The sector benefits from demographic trends, increasing healthcare spending, and regulatory support for private healthcare development. Institutional investors appreciate the defensive nature of healthcare assets, with stable cash flows, long-term leases, and correlation with GDP growth rather than business cycles. Private equity and REITs are increasingly targeting medical real estate as a core holding in African portfolios.`,
      keyPoints: [
        "Occupancy rates: 95%+",
        "Medical yields: 7.0-8.5%",
        "Demographic tailwinds driving demand",
        "Defensive asset class characteristics"
      ],
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=600&fit=crop"
    },
    {
      title: "Retail's Reinvention: Experience over Necessity",
      excerpt: "Modern retail centers evolving from necessity-based shopping to experiential destinations with entertainment and lifestyle offerings.",
      content: `African retail is undergoing a transformation from traditional necessity-based shopping to experiential, lifestyle-oriented destinations. Modern malls in Nairobi, Lagos, and Johannesburg incorporate entertainment, dining, and wellness facilities, achieving rental growth of 8-12% annually. Prime retail yields range from 7.5-9.5%, with experiential components commanding significant premiums. The sector benefits from rising middle-class incomes, urbanization trends, and changing consumer preferences. Institutional investors are increasingly viewing retail as a growth asset class, with development focus shifting from pure retail to mixed-use experiential centers that offer resilience across economic cycles.`,
      keyPoints: [
        "Rental growth: 8-12% annually",
        "Retail yields: 7.5-9.5%",
        "Experiential premium components",
        "Middle-class income growth driving demand"
      ],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
    }
  ]

  const marketMetrics = [
    { label: "Average Institutional Yields", value: "7.5-9.5%", trend: "+0.5%" },
    { label: "Asset Class Correlation", value: "Low", trend: "Stable" },
    { label: "Long-term Growth", value: "10-15%", trend: "+2%" },
    { label: "Institutional Allocation", value: "25%", trend: "+5%" }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <BarChart3 className="h-8 w-8 text-indigo-300 mr-3" />
              <span className="text-indigo-300 font-serif text-lg">Expert Market Intelligence</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Emerging Asset Classes in
              <span className="block font-medium text-white">African Real Estate</span>
            </h1>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Deep-dive analysis of institutional-grade opportunities across Africa's most dynamic commercial real estate sectors.
              Expert insights for pension trustees, family offices, and institutional investors.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {marketMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-md rounded-lg p-4"
                >
                  <div className="text-2xl font-light text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-indigo-200 mb-1">{metric.label}</div>
                  <div className="text-xs text-green-300">{metric.trend}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/research">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 font-medium text-lg transition-all duration-300 flex items-center justify-center group shadow-2xl">
                  <Download className="mr-3 h-5 w-5" />
                  Download Full Report
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
              Institutional Asset Class Analysis
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Comprehensive insights into Africa's emerging commercial real estate sectors, written for institutional investors
              seeking data-driven investment opportunities.
            </p>
          </div>

          <div className="space-y-16">
            {insights.map((insight, index) => (
              <article
                key={index}
                className="bg-slate-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-light text-slate-900 mb-4">{insight.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{insight.excerpt}</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-medium text-slate-900 mb-3">Key Investment Points</h4>
                        <ul className="space-y-2">
                          {insight.keyPoints.map((point, idx) => (
                            <li key={idx} className="flex items-center text-slate-600">
                              <TrendingUp className="h-4 w-4 text-indigo-600 mr-2" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-slate-900 mb-3">Institutional Analysis</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{insight.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Access Complete Market Intelligence
            </h2>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Download our comprehensive Emerging Asset Classes Report for detailed analysis, yield projections, and investment recommendations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/research">
                <button className="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-4 font-medium text-lg transition-all duration-300">
                  Download Full Report
                </button>
              </Link>

              <Link href="/contact">
                <button className="border-2 border-white hover:bg-white hover:text-indigo-600 text-white px-8 py-4 font-medium text-lg transition-all duration-300">
                  Schedule Expert Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
