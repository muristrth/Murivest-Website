import type { Metadata } from 'next'
import Link from 'next/link'

import { Download, FileText, ArrowRight, Calendar, User, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Research & Downloads - Murivest Institutional Report Library',
  description: 'Access the Murivest Institutional Report Library. Download comprehensive reports on Africa, Middle East, Asia-Pacific real estate markets, and investment opportunities.',
  keywords: 'research reports, institutional reports, Africa real estate reports, Middle East investment reports, Asia-Pacific property reports, Murivest Realty Group research, download reports',
  openGraph: {
    title: 'Research & Downloads - Murivest Institutional Report Library',
    description: 'Access the Murivest Institutional Report Library.',
    images: ['/kenya-night.png'],
  },
  alternates: {
    canonical: 'https://murivest.co.ke/research',
  },
}

export default function ResearchPage() {
  const reports = [
    {
      title: "Africa Institutional Grade Report 2024–25",
      abstract: "Comprehensive analysis of institutional-grade commercial real estate opportunities across 12 African markets. Includes yield analysis, sector performance, and investment recommendations for pension funds and sovereign wealth funds.",
      pages: "145",
      publishDate: "October 2024",
      downloadLink: "/public/Murivest Realty The Nairobi Yield Report Q4 2025.pdf",
      confidentialLink: "/contact",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
    },
    {
      title: "Middle East Capital Outlook 2024",
      abstract: "Analysis of Gulf investment appetite in African and European assets. Sovereign wealth fund strategies, pension capital allocation, and family office diversification trends in Middle Eastern real estate investment.",
      pages: "98",
      publishDate: "September 2024",
      downloadLink: "#",
      confidentialLink: "/contact",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    },
    {
      title: "Asia-Pacific Investor Index 2024",
      abstract: "Cross-continental investment synergies between Kenya, Singapore, and Australia. Joint venture opportunities, institutional partnerships, and market performance analysis for Asian real estate capital.",
      pages: "112",
      publishDate: "August 2024",
      downloadLink: "#",
      confidentialLink: "/contact",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop"
    },
    {
      title: "European Real Estate Diversification Study",
      abstract: "Comparative analysis of European mature markets vs African frontier opportunities. Yield compression analysis, capital allocation strategies, and cross-border investment frameworks.",
      pages: "87",
      publishDate: "July 2024",
      downloadLink: "#",
      confidentialLink: "/contact",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop"
    },
    {
      title: "American Capital in African Real Estate",
      abstract: "U.S. and Caribbean family office investment strategies in African commercial assets. REIT expansion opportunities, private equity trends, and institutional partnership frameworks.",
      pages: "76",
      publishDate: "June 2024",
      downloadLink: "#",
      confidentialLink: "/contact",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
    },
    {
      title: "Emerging Asset Classes Analysis",
      abstract: "Deep-dive into institutional-grade opportunities in data centers, cold storage, medical real estate, and modern warehousing. Sector performance, yield analysis, and investment recommendations.",
      pages: "134",
      publishDate: "May 2024",
      downloadLink: "#",
      confidentialLink: "/contact",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
    }
  ]

  const researchMetrics = [
    { label: "Reports Published", value: "25+", trend: "+5 this year" },
    { label: "Institutional Downloads", value: "500+", trend: "+120%" },
    { label: "Market Coverage", value: "15+ countries", trend: "Expanding" },
    { label: "Expert Contributors", value: "12", trend: "Growing" }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <BookOpen className="h-8 w-8 text-purple-300 mr-3" />
              <span className="text-purple-300 font-serif text-lg">Institutional Report Library</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-light mb-6">
              The Murivest Institutional
              <span className="block font-medium text-white">Report Library</span>
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Access comprehensive research and analysis on global commercial real estate markets.
              Institutional-grade reports for pension funds, family offices, and sovereign wealth funds.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {researchMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-md rounded-lg p-4"
                >
                  <div className="text-2xl font-light text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-purple-200 mb-1">{metric.label}</div>
                  <div className="text-xs text-green-300">{metric.trend}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
              Latest Research Publications
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Comprehensive market analysis and investment insights written for institutional investors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={report.image}
                    alt={report.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/20" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-md rounded-lg px-3 py-1">
                      <span className="text-sm font-medium text-slate-900">{report.pages} pages</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-light text-slate-900 mb-3">{report.title}</h3>

                  <div className="flex items-center text-slate-500 text-sm mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{report.publishDate}</span>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{report.abstract}</p>

                  <div className="space-y-3">
                    {report.downloadLink !== "#" ? (
                      <Link href={report.downloadLink}>
                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 font-medium text-sm transition-all duration-300 flex items-center justify-center group">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    ) : (
                      <div className="w-full bg-slate-200 text-slate-500 px-4 py-3 font-medium text-sm text-center rounded-lg">
                        Coming Soon
                      </div>
                    )}

                    <Link href={report.confidentialLink}>
                      <button className="w-full border-2 border-purple-400 hover:bg-purple-400 hover:text-white text-purple-600 px-4 py-3 font-medium text-sm transition-all duration-300">
                        Request Confidential Note
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Stay Ahead of Market Developments
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Subscribe to receive our latest research reports and market insights directly in your inbox.
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your institutional email"
                  className="flex-1 px-4 py-3 bg-white text-slate-900 rounded-lg border-0 focus:ring-2 focus:ring-purple-400"
                />
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 font-medium transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
