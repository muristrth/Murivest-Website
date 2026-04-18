// src/app/investor-portal/publications/page.tsx

import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { 
  BookOpen, 
  Download, 
  ExternalLink, 
  Lock, 
  FileText, 
  Globe, 
  TrendingUp, 
  Shield,
  Clock,
  ChevronRight,
  Award,
  BarChart3
} from 'lucide-react'

// Featured publications based on authoritative sources
const featuredPublications = [
  {
    id: 'featured-1',
    title: "The Wealth Report 2025",
    subtitle: "19th Edition - Global Perspective on Prime Property",
    summary: "Knight Frank's definitive guide to prime property markets, global wealth distribution, and commercial property investment opportunities. Features the Prime Residential Index showing Nairobi's +8.3% growth ranking 12th globally.",
    category: "Wealth Intelligence",
    source: "Knight Frank Research",
    publishDate: "2025-03-05",
    accessLevel: "registered",
    type: "external",
    url: "https://www.knightfrank.com/research/report-library/the-wealth-report-11989.aspx",
    icon: Award,
    highlights: [
      "Nairobi prime residential +8.3% (12th globally)",
      "68% of family offices allocate >$100M to direct real estate",
      "23% cite reliable partners as top challenge",
      "1,746 African UHNWIs by 2028"
    ]
  },
  {
    id: 'featured-2',
    title: "Empty Spaces and Hybrid Places",
    subtitle: "The Pandemic's Lasting Impact on Real Estate",
    summary: "McKinsey Global Institute analysis of post-pandemic real estate demand in superstar cities. Projects $800 billion in office-space value at stake by 2030, with demand for office and retail space generally lower than 2019 levels.",
    category: "Macro Analysis",
    source: "McKinsey Global Institute",
    publishDate: "2025-01-15",
    accessLevel: "verified",
    type: "external",
    url: "https://www.mckinsey.com/industries/real-estate/our-insights/empty-spaces-and-hybrid-places-the-pandemics-lasting-impact-on-real-estate",
    icon: BarChart3,
    highlights: [
      "$800B office value at stake by 2030",
      "26% decline in office value (moderate scenario)",
      "7-21% excess supply in superstar cities",
      "Flight to quality accelerating"
    ]
  },
  {
    id: 'featured-3',
    title: "Emerging Trends in Real Estate 2025",
    subtitle: "Global Outlook - 46th Edition",
    summary: "PwC and Urban Land Institute's authoritative industry outlook. Identifies the industry at an inflection point with investors looking to reposition portfolios. Highlights alternative asset classes yielding higher risk-adjusted returns.",
    category: "Industry Outlook",
    source: "PwC & ULI",
    publishDate: "2025-03-11",
    accessLevel: "registered",
    type: "external",
    url: "https://www.pwc.com/gx/en/services/deals/trends/2025/real-estate.html",
    icon: Globe,
    highlights: [
      "Industry at inflection point",
      "Alternative assets outperforming traditional",
      "Wellness and mixed-use trends",
      "M&A activity expected to rise"
    ]
  },
  {
    id: 'featured-4',
    title: "Africa Private Equity Confidence Survey 2025",
    subtitle: "Deloitte Africa PE Landscape Analysis",
    summary: "Comprehensive analysis of African private equity expectations. Africa's real GDP growth projected at 3.9% in 2025 (second fastest globally). Agriculture, Financial Services, and Green Energy identified as priority sectors.",
    category: "Regional Focus",
    source: "Deloitte Africa",
    publishDate: "2025-12-04",
    accessLevel: "registered",
    type: "external",
    url: "https://www.deloitte.com/za/en/services/consulting/perspectives/2025-deloitte-africa-private-equity-confidence-survey.html",
    icon: TrendingUp,
    highlights: [
      "Africa GDP growth 3.9% (2nd fastest globally)",
      "Deal sizes staying below $50M",
      "Agriculture & FinTech priority sectors",
      "Green Energy emerging focus"
    ]
  },
  {
    id: 'featured-5',
    title: "The Real Estate Investment Diamond",
    subtitle: "HBS Framework for Investment Analysis",
    summary: "Harvard Business School Professor Arthur Segel's framework for analyzing real estate opportunities. Examines four interconnected factors: Product, People, External Environment, and Capital Markets.",
    category: "Investment Framework",
    source: "Harvard Business Review",
    publishDate: "2021-08-24",
    accessLevel: "registered",
    type: "external",
    url: "https://online.hbs.edu/blog/post/real-estate-investment-analysis",
    icon: BookOpen,
    highlights: [
      "Four-factor analytical framework",
      "Product, People, Environment, Capital",
      "Physical due diligence checklist",
      "Location and demand assessment"
    ]
  }
]

// Murivest proprietary research categories
const researchCategories = [
  {
    id: 'market-intelligence',
    title: "Market Intelligence",
    description: "Country-level analysis and sector-specific reports",
    count: 12,
    icon: Globe,
    accessLevel: "registered"
  },
  {
    id: 'investment-thesis',
    title: "Investment Theses",
    description: "Detailed opportunity assessments and financial models",
    count: 8,
    icon: FileText,
    accessLevel: "premium"
  },
  {
    id: 'sector-reports',
    title: "Sector Deep Dives",
    description: "Industrial, residential, office, and alternative sectors",
    count: 6,
    icon: BarChart3,
    accessLevel: "verified"
  },
  {
    id: 'esg-research',
    title: "ESG & Impact",
    description: "Sustainability frameworks and green investment strategies",
    count: 4,
    icon: Award,
    accessLevel: "verified"
  }
]

export default async function InvestorPublicationsPage() {
  const supabase = await createClient()

  const { data: publications, error } = await supabase
    .from('publications')
    .select('id,title,summary,category,fliphtml_url,file_url,created_at,access_level')
    .eq('is_portal_visible', true)
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-16">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-8 border-b border-[#1B4332]/10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B]">Research Library</span>
            <span className="text-[#B8956B]/30">|</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#1B4332]/50">
              Institutional Intelligence
            </span>
          </div>
          <h1 className="font-serif text-4xl lg:text-5xl text-[#1B4332]">Publications</h1>
          <p className="text-sm text-[#2C3E35]/70 mt-3 max-w-2xl leading-relaxed">
            Curated research from Knight Frank, McKinsey, PwC, Deloitte, and Harvard Business Review, 
            alongside Murivest proprietary analysis. Synthesized for institutional investors and family offices 
            evaluating African real estate opportunities.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-1">Access Level</div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B8956B]/10 border border-[#B8956B]/30">
              <Shield className="h-3 w-3 text-[#B8956B]" />
              <span className="text-xs uppercase tracking-[0.15em] text-[#B8956B] font-medium">
                Tier-Based
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Publications Grid */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif text-2xl text-[#1B4332] mb-1">Featured Research</h2>
            <p className="text-xs text-[#2C3E35]/60">Authoritative sources informing our investment strategy</p>
          </div>
          <Link 
            href="/research" 
            className="text-[11px] uppercase tracking-[0.15em] text-[#B8956B] hover:text-[#1B4332] transition-colors flex items-center gap-1"
          >
            View All Research <ChevronRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPublications.map((pub) => {
            const Icon = pub.icon
            return (
              <div 
                key={pub.id} 
                className="group bg-white border border-[#1B4332]/10 hover:border-[#B8956B]/30 transition-all duration-300 flex flex-col"
              >
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-[#1B4332]/5 flex items-center justify-center group-hover:bg-[#B8956B]/10 transition-colors">
                      <Icon className="h-6 w-6 text-[#B8956B]" />
                    </div>
                    {pub.accessLevel === 'premium' && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-[#B8956B]/10 border border-[#B8956B]/20">
                        <Lock className="h-3 w-3 text-[#B8956B]" />
                        <span className="text-[10px] uppercase tracking-wider text-[#B8956B]">Premium</span>
                      </div>
                    )}
                    {pub.accessLevel === 'verified' && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-[#1B4332]/5 border border-[#1B4332]/10">
                        <Shield className="h-3 w-3 text-[#1B4332]/60" />
                        <span className="text-[10px] uppercase tracking-wider text-[#1B4332]/60">Verified</span>
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#B8956B] block mb-1">
                      {pub.source}
                    </span>
                    <h3 className="font-serif text-xl text-[#1B4332] group-hover:text-[#B8956B] transition-colors leading-tight">
                      {pub.title}
                    </h3>
                    <p className="text-xs text-[#1B4332]/60 mt-1 italic">{pub.subtitle}</p>
                  </div>

                  <p className="text-sm text-[#2C3E35]/70 leading-relaxed mb-4 line-clamp-3">
                    {pub.summary}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1 mb-4">
                    {pub.highlights.slice(0, 3).map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#2C3E35]/60">
                        <div className="w-1 h-1 bg-[#B8956B] rounded-full" />
                        <span className="line-clamp-1">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-[#1B4332]/5 flex items-center justify-between bg-[#FAF9F6]/50">
                  <span className="text-[10px] text-[#1B4332]/40">
                    {new Date(pub.publishDate).toLocaleDateString('en-GB', { 
                      month: 'short', 
                      year: 'numeric' 
                    })}
                  </span>
                  
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.1em] text-[#B8956B] hover:text-[#1B4332] transition-colors font-medium"
                  >
                    {pub.type === 'external' ? (
                      <>
                        Access Report <ExternalLink className="h-3 w-3" />
                      </>
                    ) : (
                      <>
                        Download <Download className="h-3 w-3" />
                      </>
                    )}
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Research Categories */}
      <section className="bg-[#1B4332] text-[#FAF9F6] p-8 lg:p-12 rounded-sm">
        <div className="mb-8">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B] block mb-2">Proprietary Research</span>
          <h2 className="font-serif text-3xl mb-2">Murivest Intelligence Categories</h2>
          <p className="text-sm text-[#FAF9F6]/70 max-w-2xl">
            Original research and analysis exclusive to portal members, structured by access tier.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {researchCategories.map((category) => {
            const Icon = category.icon
            return (
              <div 
                key={category.id} 
                className="bg-white/5 border border-[#B8956B]/20 p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="h-6 w-6 text-[#B8956B]" />
                  <span className="text-xs text-[#B8956B] font-medium">{category.count} Reports</span>
                </div>
                <h3 className="font-serif text-lg mb-2 group-hover:text-[#B8956B] transition-colors">
                  {category.title}
                </h3>
                <p className="text-xs text-[#FAF9F6]/60 leading-relaxed mb-4">
                  {category.description}
                </p>
                <div className="flex items-center gap-2">
                  {category.accessLevel === 'premium' && (
                    <Lock className="h-3 w-3 text-[#B8956B]" />
                  )}
                  {category.accessLevel === 'verified' && (
                    <Shield className="h-3 w-3 text-[#FAF9F6]/40" />
                  )}
                  <span className="text-[10px] uppercase tracking-wider text-[#FAF9F6]/40">
                    {category.accessLevel} Access
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Portal Publications List */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif text-2xl text-[#1B4332] mb-1">Portal Library</h2>
            <p className="text-xs text-[#2C3E35]/60">Investment memoranda, briefs, and market updates</p>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50">Sort by:</span>
            <select className="bg-white border border-[#1B4332]/20 text-xs text-[#1B4332] px-3 py-2 focus:border-[#B8956B] focus:outline-none">
              <option>Date (Newest)</option>
              <option>Date (Oldest)</option>
              <option>Category</option>
              <option>Access Level</option>
            </select>
          </div>
        </div>

        {error ? (
          <div className="bg-red-50 border-l-4 border-red-500 p-6 text-red-700">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-5 w-5" />
              <span className="font-medium">System Error</span>
            </div>
            <p className="text-sm">Failed to load publications: {error.message}</p>
             <p className="text-xs mt-2 text-red-600/70">Please refresh or contact info@murivest.co.ke</p>
          </div>
        ) : (
          <div className="space-y-4">
            {publications?.length ? (
              publications.map((item) => (
                <div 
                  key={item.id} 
                  className="group bg-white border border-[#1B4332]/10 hover:border-[#B8956B]/30 transition-all duration-300 p-6 flex flex-col md:flex-row md:items-center gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1B4332]/5 flex items-center justify-center group-hover:bg-[#B8956B]/10 transition-colors">
                    <FileText className="h-6 w-6 text-[#B8956B]" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-[#B8956B]">
                        {item.category}
                      </span>
                      {item.access_level === 'premium' && (
                        <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#B8956B]">
                          <Lock className="h-3 w-3" /> Premium
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-xl text-[#1B4332] group-hover:text-[#B8956B] transition-colors truncate">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#2C3E35]/70 mt-1 line-clamp-2">
                      {item.summary}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="text-[10px] text-[#1B4332]/40 hidden lg:block">
                      {new Date(item.created_at).toLocaleDateString('en-GB', { 
                        day: '2-digit',
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </span>
                    
                    <div className="flex gap-2">
                      {item.fliphtml_url && (
                        <a
                          href={item.fliphtml_url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 bg-[#1B4332] text-white px-4 py-2 text-[11px] uppercase tracking-[0.1em] hover:bg-[#2D5A47] transition-colors"
                        >
                          <Globe className="h-3 w-3" />
                          View
                        </a>
                      )}

                      {item.file_url && (
                        <a
                          href={item.file_url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 border border-[#1B4332]/20 text-[#1B4332] px-4 py-2 text-[11px] uppercase tracking-[0.1em] hover:border-[#B8956B] hover:text-[#B8956B] transition-colors"
                        >
                          <Download className="h-3 w-3" />
                          PDF
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-[#FAF9F6] border border-[#B8956B]/20 p-12 text-center">
                <BookOpen className="h-12 w-12 text-[#B8956B]/30 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-[#1B4332] mb-2">No Publications Available</h3>
                <p className="text-sm text-[#2C3E35]/60 max-w-md mx-auto">
                  Your access tier may not include proprietary research, or publications are being prepared for upcoming release.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block mt-4 text-[11px] uppercase tracking-[0.15em] text-[#B8956B] hover:text-[#1B4332] transition-colors"
                >
                  Request Access
                </Link>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Access Tiers Explanation */}
      <section className="bg-[#FAF9F6] border border-[#B8956B]/20 p-8">
        <h3 className="font-serif text-2xl text-[#1B4332] mb-6">Research Access Tiers</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#1B4332]/10 flex items-center justify-center">
                <span className="text-xs font-medium text-[#1B4332]">01</span>
              </div>
              <h4 className="font-medium text-[#1B4332]">Registered</h4>
            </div>
            <ul className="space-y-2 text-sm text-[#2C3E35]/70">
              <li className="flex items-start gap-2">
                <ChevronRight className="h-3 w-3 text-[#B8956B] mt-1 flex-shrink-0" />
                <span>Public research summaries</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-3 w-3 text-[#B8956B] mt-1 flex-shrink-0" />
                <span>Market snapshot reports</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-3 w-3 text-[#B8956B] mt-1 flex-shrink-0" />
                <span>Newsletter access</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#B8956B]/20 flex items-center justify-center">
                <Shield className="h-4 w-4 text-[#B8956B]" />
              </div>
              <h4 className="font-medium text-[#1B4332]">Verified</h4>
            </div>
            <ul className="space-y-2 text-sm text-[#2C3E35]/70">
              <li className="flex items-start gap-2">
                <ChevronRight className="h-3 w-3 text-[#B8956B] mt-1 flex-shrink-0" />
                <span>Full Knight Frank reports</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-3 w-3 text-[#B8956B] mt-1 flex-shrink-0" />
                <span>Country intelligence briefs</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-3 w-3 text-[#B8956B] mt-1 flex-shrink-0" />
                <span>Sector analysis reports</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-3 w-3 text-[#B8956B] mt-1 flex-shrink-0" />
                <span>Quarterly market updates</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#B8956B] flex items-center justify-center">
                <Lock className="h-4 w-4 text-[#1B4332]" />
              </div>
              <h4 className="font-medium text-[#1B4332]">Premium</h4>
            </div>
            <ul className="space-y-2 text-sm text-[#2C3E35]/70">
              <li className="flex items-start gap-2">
                <ChevronRight className="h-3 w-3 text-[#B8956B] mt-1 flex-shrink-0" />
                <span>Investment memoranda</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-3 w-3 text-[#B8956B] mt-1 flex-shrink-0" />
                <span>Off-market opportunity briefs</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-3 w-3 text-[#B8956B] mt-1 flex-shrink-0" />
                <span>Financial models & valuations</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-3 w-3 text-[#B8956B] mt-1 flex-shrink-0" />
                <span>Advisory board presentations</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#1B4332]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#2C3E35]/70">
            Current tier grants access to <span className="font-medium text-[#1B4332]">Verified</span> research materials
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1B4332] text-white px-6 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#2D5A47] transition-colors"
          >
            <Clock className="h-4 w-4" />
            Upgrade Access
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 border-t border-[#1B4332]/10">
        <h3 className="font-serif text-2xl text-[#1B4332] mb-3">Require Custom Research?</h3>
        <p className="text-sm text-[#2C3E35]/70 max-w-2xl mx-auto mb-6">
          Murivest undertakes bespoke research assignments for institutional clients. 
          From single-asset due diligence to portfolio-level strategy papers, our research 
          team delivers actionable intelligence within 72 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#B8956B] text-[#1B4332] px-8 py-3 text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#9A7B5A] transition-colors"
          >
            <FileText className="h-4 w-4" />
            Request Bespoke Research
          </Link>
          <Link 
            href="/investor-portal/briefs"
            className="inline-flex items-center gap-2 border-2 border-[#1B4332] text-[#1B4332] px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#1B4332] hover:text-white transition-all"
          >
            <Download className="h-4 w-4" />
            Order Investment Brief
          </Link>
        </div>
      </section>
    </div>
  )
}