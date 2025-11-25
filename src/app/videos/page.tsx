import type { Metadata } from 'next'
import Link from 'next/link'

import { Play, Clock, User, ArrowRight, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fiduciary Conversations - Expert Real Estate Insights - Murivest Realty Group',
  description: 'The Fiduciary Conversations video series featuring short expert insights with property analysts, investors, and family office principals on global real estate markets.',
  keywords: 'fiduciary conversations, real estate videos, property analysts, investor insights, family office principals, real estate market analysis, Murivest Realty Group videos',
  openGraph: {
    title: 'Fiduciary Conversations - Expert Real Estate Insights - Murivest Realty Group',
    description: 'The Fiduciary Conversations video series featuring expert insights on global real estate markets.',
    images: ['/kenya-night.png'],
  },
  alternates: {
    canonical: 'https://murivest.co.ke/videos',
  },
}

export default function VideosPage() {
  const videos = [
    {
      id: 1,
      title: "Africa's Office Market Renaissance",
      guest: "Dr. Sarah Mitchell",
      role: "Head of Real Estate Research, African Development Bank",
      duration: "12:34",
      description: "Analysis of institutional-grade office development trends across Nairobi, Lagos, and Johannesburg. Key insights on rental growth, tenant demand, and investment opportunities.",
      keyTakeaway: "Prime office yields in major African cities offer 1.5-2.0% premium over European markets with stronger growth potential.",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      publishDate: "October 15, 2024"
    },
    {
      id: 2,
      title: "Middle East Capital Flows to Africa",
      guest: "Ahmed Al-Rashid",
      role: "Managing Director, Gulf Real Estate Partners",
      duration: "15:22",
      description: "Sovereign wealth fund strategies and family office diversification into African commercial real estate. Dubai-Nairobi investment corridor analysis.",
      keyTakeaway: "GCC investors are allocating 15-20% of real estate portfolios to African assets, prioritizing office and logistics sectors.",
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      publishDate: "October 8, 2024"
    },
    {
      id: 3,
      title: "Data Centers: Africa's Digital Infrastructure Boom",
      guest: "Prof. James Chen",
      role: "Director, African Technology Institute",
      duration: "11:47",
      description: "Investment opportunities in Africa's data center sector. Analysis of Nairobi's position as East Africa's tech hub and growth projections.",
      keyTakeaway: "Data center yields of 7.5-9.0% with 15-20 year contracts make them attractive defensive assets for institutional portfolios.",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      publishDate: "September 28, 2024"
    },
    {
      id: 4,
      title: "Cold Storage Revolution in East Africa",
      guest: "Maria Rodriguez",
      role: "VP Global Logistics, FreshChain International",
      duration: "13:58",
      description: "E-commerce driven demand for temperature-controlled warehousing. Investment case for cold storage facilities across East African markets.",
      keyTakeaway: "Cold storage sector growing at 25% annually with yields of 8.5-10.5% and long-term contracts providing stable income.",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      publishDate: "September 20, 2024"
    },
    {
      id: 5,
      title: "European Pension Funds in African Markets",
      guest: "Lord Richard Harrington",
      role: "Chairman, European Real Estate Investment Council",
      duration: "16:41",
      description: "Cross-border investment strategies for European institutional capital. Comparative analysis of European yields vs African growth opportunities.",
      keyTakeaway: "European investors seek 4-5% yield premium in African markets, focusing on institutional-grade assets with local expertise partnerships.",
      thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
      publishDate: "September 12, 2024"
    },
    {
      id: 6,
      title: "Family Office Real Estate Strategies",
      guest: "Isabella Vanderbilt",
      role: "Principal, Atlantic Family Office Alliance",
      duration: "14:15",
      description: "Ultra-high-net-worth family office approaches to African commercial real estate. Risk management and diversification strategies.",
      keyTakeaway: "Family offices allocate 10-15% of real estate portfolios to African assets, emphasizing joint ventures and local partnership structures.",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      publishDate: "September 5, 2024"
    }
  ]

  const videoMetrics = [
    { label: "Expert Interviews", value: "25+", trend: "+8 this quarter" },
    { label: "Total Views", value: "50K+", trend: "+150%" },
    { label: "Institutional Audience", value: "85%", trend: "Targeted" },
    { label: "Average Length", value: "14 min", trend: "Optimized" }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-pink-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-8 w-8 text-red-300 mr-3" />
              <span className="text-red-300 font-serif text-lg">Expert Video Series</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-light mb-6">
              The Fiduciary Conversations
            </h1>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Short expert insights with property analysts, investors, and family office principals.
              Institutional-grade perspectives on global commercial real estate markets.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {videoMetrics.map((metric, index) => (
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
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
              Latest Conversations
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Expert insights from global real estate leaders, tailored for institutional investors and family offices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="bg-slate-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-md rounded-full p-4 group-hover:bg-white transition-colors">
                      <Play className="h-8 w-8 text-slate-900 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md rounded-lg px-3 py-1">
                    <div className="flex items-center text-white text-sm">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{video.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-light text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                    {video.title}
                  </h3>

                  <div className="flex items-center text-slate-600 text-sm mb-3">
                    <User className="h-4 w-4 mr-2" />
                    <div>
                      <div className="font-medium">{video.guest}</div>
                      <div className="text-slate-500">{video.role}</div>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{video.description}</p>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                    <div className="text-sm font-medium text-red-900 mb-1">Key Takeaway</div>
                    <div className="text-sm text-red-800">{video.keyTakeaway}</div>
                  </div>

                  <div className="text-xs text-slate-500">{video.publishDate}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Experts CTA */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Become a Guest Expert
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Share your institutional real estate insights with our global audience of pension trustees, family offices, and investment professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-medium text-lg transition-all duration-300">
                  Propose a Topic
                </button>
              </Link>

              <Link href="/research">
                <button className="border-2 border-red-400 hover:bg-red-400 hover:text-white text-red-400 px-8 py-4 font-medium text-lg transition-all duration-300">
                  View Research Library
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
