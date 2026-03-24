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
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-amber-600/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-[10px] tracking-[0.5em] uppercase text-amber-500 font-bold mb-6">
              Institutional Report Library
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-serif text-white leading-tight mb-8">
              Murivest Institutional <span className="italic text-amber-200/80">Research Library</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-lg leading-relaxed font-light border-l-2 border-amber-500/50 pl-6">
              Access comprehensive research and analysis on global commercial real estate markets. 
              Institutional-grade reports designed for pension funds, family offices, and sovereign wealth funds.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <div className="bg-slate-900 border-y border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {researchMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-light text-amber-400 mb-2">{metric.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">{metric.label}</div>
                <div className="text-xs text-slate-500">{metric.trend}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reports Grid */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-xs tracking-[0.3em] uppercase text-amber-600 font-bold mb-6">Latest Publications</h3>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
              Research Publications
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
              Comprehensive market analysis and investment insights written for institutional investors and capital allocators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 overflow-hidden hover:border-amber-500 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <img
                    src={report.image}
                    alt={report.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/40" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-amber-600/80 backdrop-blur-md rounded px-3 py-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white">{report.pages} pages</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center text-amber-500 text-[10px] mb-4 uppercase tracking-widest font-semibold">
                    <Calendar className="h-3 w-3 mr-2" />
                    {report.publishDate}
                  </div>

                  <h3 className="text-lg font-serif text-white mb-3">{report.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">{report.abstract}</p>

                  <div className="space-y-3">
                    {report.downloadLink !== "#" ? (
                      <Link href={report.downloadLink}>
                        <button className="w-full bg-amber-600 hover:bg-amber-500 text-white px-4 py-3 font-medium text-[10px] uppercase tracking-widest transition-all duration-300 flex items-center justify-center group">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    ) : (
                      <div className="w-full bg-slate-800/50 text-slate-400 px-4 py-3 font-medium text-[10px] uppercase tracking-widest text-center">
                        Coming Soon
                      </div>
                    )}

                    <Link href={report.confidentialLink}>
                      <button className="w-full border border-amber-600/30 hover:bg-amber-600/10 text-amber-400 hover:text-amber-300 px-4 py-3 font-medium text-[10px] uppercase tracking-widest transition-all duration-300">
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
      <section className="py-24 bg-slate-950 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Stay Ahead of <span className="italic text-amber-200/80">Market Developments</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed font-light">
              Subscribe to receive our latest research reports and market insights directly in your inbox.
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex gap-2 bg-slate-900 border border-slate-800 p-2 focus-within:border-amber-500 transition-colors">
                <input
                  type="email"
                  placeholder="Enter institutional email"
                  className="flex-1 px-4 py-2 bg-slate-900 text-white text-sm outline-none placeholder:text-slate-500"
                />
                <button className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-[10px] text-slate-500 mt-4 uppercase tracking-widest">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
