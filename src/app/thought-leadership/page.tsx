import type { Metadata } from 'next'
import Link from 'next/link'
import { Crown, TrendingUp, Award, BookOpen, Users, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thought Leadership - Murivest Realty Group',
  description: 'Institutional insights, market intelligence, and strategic analysis from Africa\'s premier commercial real estate advisory firm. Expert perspectives on global real estate investment.',
  keywords: 'real estate thought leadership, institutional investment insights, commercial real estate analysis, African property market intelligence, investment strategy, Murivest Realty Group',
  openGraph: {
    title: 'Thought Leadership - Murivest Realty Group',
    description: 'Institutional insights and strategic analysis from Africa\'s premier commercial real estate advisory firm.',
    images: ['/murivest_ceo_office.png'],
  },
  alternates: {
    canonical: 'https://murivest.co.ke/thought-leadership',
  },
}

export default function ThoughtLeadershipPage() {
  const leadershipContent = [
    {
      title: "Legacy Wealth Preservation Through Institutional Real Estate",
      author: "Elizabeth Costabir, CEO & Founder",
      excerpt: "How discerning families and institutions are using commercial real estate to preserve and grow wealth across generations, with Nairobi emerging as Africa's institutional gateway.",
      category: "Wealth Preservation",
      readTime: "12 min read",
      image: "/murivest_ceo_office.png",
      featured: true
    },
    {
      title: "African Real Estate: The New Frontier for Sovereign Wealth Diversification",
      author: "Dr. Ahmed Al-Rashid, Senior Investment Advisor",
      excerpt: "GCC sovereign wealth funds are increasingly allocating to African commercial assets. Analysis of risk-adjusted returns, regulatory frameworks, and Nairobi's role as the continental gateway.",
      category: "Institutional Investment",
      readTime: "15 min read",
      image: "/kenya-night.png",
      featured: true
    },
    {
      title: "Nairobi CBD Transformation: An Institutional Investor's Guide",
      author: "Marcus Wellington, Head of Research",
      excerpt: "Comprehensive analysis of Nairobi's commercial real estate evolution, from colonial architecture to modern institutional-grade assets.",
      category: "Market Intelligence",
      readTime: "18 min read",
      image: "/image.png",
      featured: true
    }
  ]

  const insights = [
    {
      icon: Crown,
      title: "Institutional Excellence",
      description: "Direct access to sovereign wealth funds, pension capital, and ultra-high-net-worth families through our global network of relationships."
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Proprietary research and data-driven insights into African, Middle Eastern, and European real estate markets."
    },
    {
      icon: Award,
      title: "Strategic Advisory",
      description: "Bespoke investment strategies tailored to institutional risk profiles and multi-generational wealth preservation goals."
    },
    {
      icon: BookOpen,
      title: "Thought Leadership",
      description: "Published research, whitepapers, and analysis establishing Murivest as the authoritative voice in cross-border real estate."
    },
    {
      icon: Users,
      title: "Exclusive Networks",
      description: "Access to closed-door investor conferences, sovereign wealth fund summits, and private capital introductions."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Cross-continental expertise combining African market knowledge with international institutional standards."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white luxury-section-spacing">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative luxury-container luxury-padding">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <Crown className="h-8 w-8 luxury-gold-accent mr-3" />
              <span className="luxury-gold-accent font-luxury text-lg">Institutional Insights</span>
            </div>

            <h1 className="luxury-heading text-4xl md:text-6xl mb-6">
              Leadership in
              <span className="block luxury-gold-accent font-medium">Global Real Estate</span>
            </h1>
            <p className="luxury-body text-xl text-white/80 mb-8 leading-relaxed">
              Establishing Murivest as the authoritative voice in institutional commercial real estate. Our research, analysis, and strategic insights guide global capital allocation to African and emerging markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="luxury-button-primary">
                  Schedule Institutional Consultation
                </button>
              </Link>

              <Link href="/research">
                <button className="luxury-button-secondary">
                  Download Research Reports
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="luxury-section-spacing bg-white">
        <div className="luxury-container luxury-padding">
          <div className="text-center luxury-margin-bottom">
            <h2 className="luxury-heading text-4xl md:text-5xl mb-6">
              Featured Insights
            </h2>
            <p className="luxury-subheading text-xl max-w-3xl mx-auto">
              Our most influential research and analysis, shaping institutional thinking on global real estate investment.
            </p>
          </div>

          <div className="space-y-8">
            {leadershipContent.map((content, index) => (
              <div
                key={index}
                className="luxury-card"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3">
                    <img
                      src={content.image}
                      alt={content.title}
                      className="w-full h-48 lg:h-full object-cover rounded-none"
                    />
                  </div>
                  <div className="lg:w-2/3 luxury-padding">
                    <div className="flex items-center mb-4">
                      <span className="luxury-gold-accent font-luxury font-medium text-sm uppercase tracking-widest">{content.category}</span>
                      <span className="mx-3 text-white/40">•</span>
                      <span className="luxury-body text-white/60 text-sm">{content.readTime}</span>
                    </div>
                    <h3 className="luxury-heading text-2xl mb-3">{content.title}</h3>
                    <p className="luxury-body text-white/80 mb-4">{content.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="luxury-body text-white/60">By {content.author}</span>
                      <Link href={`/research/${content.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}>
                        <button className="luxury-button-secondary">
                          Read Full Analysis
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="luxury-section-spacing luxury-navy-bg text-white">
        <div className="luxury-container luxury-padding">
          <div className="text-center luxury-margin-bottom">
            <h2 className="luxury-heading text-4xl md:text-5xl mb-6">
              Our Institutional Approach
            </h2>
            <p className="luxury-body text-xl text-white/80 max-w-3xl mx-auto">
              Combining academic rigor with practical expertise to deliver insights that matter to institutional investors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 luxury-grid-gap">
            {insights.map((insight, index) => (
              <div key={index} className="luxury-card text-center">
                <insight.icon className="h-12 w-12 luxury-gold-accent mx-auto mb-4" />
                <h3 className="luxury-heading text-xl mb-3">{insight.title}</h3>
                <p className="luxury-body text-white/80">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Library */}
      <section className="luxury-section-spacing bg-white">
        <div className="luxury-container luxury-padding">
          <div className="text-center luxury-margin-bottom">
            <h2 className="luxury-heading text-4xl md:text-5xl mb-6">
              Research Library
            </h2>
            <p className="luxury-subheading text-xl max-w-3xl mx-auto">
              Access our comprehensive collection of institutional research, market analysis, and strategic insights.
            </p>
          </div>

          <div className="text-center">
            <Link href="/research">
              <button className="luxury-button-primary">
                Explore Full Research Library
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="luxury-section-spacing bg-gold-600 text-navy-950">
        <div className="luxury-container luxury-padding text-center">
          <div>
            <h2 className="luxury-heading text-3xl md:text-4xl mb-6">
              Join the Institutional Conversation
            </h2>
            <p className="luxury-body text-xl text-navy-800 mb-8 leading-relaxed">
              Connect with our research team for exclusive insights and institutional-grade analysis tailored to your investment objectives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="luxury-button-primary">
                  Request Institutional Briefing
                </button>
              </Link>

              <Link href="/newsletter">
                <button className="luxury-button-secondary">
                  Subscribe to Insights
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}