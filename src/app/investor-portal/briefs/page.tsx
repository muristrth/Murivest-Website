// src/app/investor-portal/briefs/page.tsx

import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { 
  Lock, 
  Eye, 
  FileText, 
  MapPin, 
  TrendingUp, 
  Clock, 
  Shield, 
  ChevronRight,
  Download,
  Briefcase,
  Users,
  Award,
  AlertCircle,
  CheckCircle2
} from 'lucide-react'

// Off-market deal sourcing insights from Knight Frank and industry research
const dealFlowInsights = [
  {
    stat: "30%",
    label: "Off-Market Transactions",
    description: "Knight Frank Los Angeles: Nearly 30% of 2025 sales conducted off-market, with firm representing both sides of two highest sales [^40^]",
    source: "Knight Frank 2026"
  },
  {
    stat: "25%",
    label: "Global Luxury Market",
    description: "Off-market sector accounts for up to 25% of luxury transactions in top global cities according to Knight Frank 2025 Global Wealth Report [^46^]",
    source: "Knight Frank 2025"
  },
  {
    stat: "74%",
    label: "Seek Introductions",
    description: "Family offices actively seeking more introductions; networking with other family offices deemed important by 60% for deal sourcing [^44^]",
    source: "TIGER 21 / Social Life"
  },
  {
    stat: "68%",
    label: "Direct Allocation",
    description: "Family offices with AUM >$250M allocate over $100M to direct real estate, with solo direct investment representing 34% of channels [^38^]",
    source: "Knight Frank 2025"
  }
]

// Access tier requirements
const accessTiers = {
  registered: {
    label: "Registered",
    color: "bg-[#1B4332]/10",
    textColor: "text-[#1B4332]/60",
    description: "Public deal summaries and market commentary"
  },
  verified: {
    label: "Verified",
    color: "bg-[#B8956B]/10",
    textColor: "text-[#B8956B]",
    description: "Full investment memoranda and financial models"
  },
  premium: {
    label: "Premium",
    color: "bg-[#B8956B]",
    textColor: "text-[#1B4332]",
    description: "Off-market opportunities and co-investment rights"
  }
}

// Sample briefs structure with enhanced metadata
const sampleBriefs = [
  {
    id: 'brief-001',
    title: "Westlands Grade A Office Development",
    asset_class: "Commercial Office",
    location: "Nairobi, Kenya",
    location_detail: "Westlands Business District, 0.5km from Sarit Centre",
    teaser: "Pre-let opportunity in supply-constrained Nairobi CBD fringe. 12,000 sqm Grade A office with multinational tenant LOIs exceeding 60% of NLA. Target IRR 16.5% with 8-year weighted average lease term.",
    price_kes: 1450000000, // 1.45B KES (~$11.2M)
    price_usd: 11200000,
    requires_order: true,
    access_level: "premium",
    status: "active",
    created_at: "2026-03-15",
    highlights: [
      "60% pre-let to multinational tenants",
      "8-year WALT with 3% annual escalation",
      "EDGE Green Building certification pending",
      "15-year land lease with 10-year extension option"
    ],
    metrics: {
      irr: "16.5%",
      yield: "9.2%",
      sqm: "12,000",
      occupancy: "60% pre-let"
    },
    confidentiality: "NDA required for location disclosure"
  },
  {
    id: 'brief-002',
    title: "Kilimani Mixed-Use Redevelopment",
    asset_class: "Mixed-Use",
    location: "Nairobi, Kenya",
    location_detail: "Kilimani, near Yaya Centre",
    teaser: "Value-add opportunity in established residential node. 2.1-acre site with existing 1980s commercial structure. Zoning allows 8-storey mixed-use with 35,000 sqm GFA. Affordable housing component qualifies for 1.5% levy exemption.",
    price_kes: 890000000, // 890M KES (~$6.9M)
    price_usd: 6900000,
    requires_order: true,
    access_level: "verified",
    status: "active",
    created_at: "2026-03-10",
    highlights: [
      "2.1 acres in established Kilimani node",
      "Zoning permits 35,000 sqm GFA",
      "Affordable housing tax incentives",
      "Adjacent to Yaya Centre retail"
    ],
    metrics: {
      irr: "18.2%",
      yield: "10.5%",
      acres: "2.1",
      gfa: "35,000 sqm"
    },
    confidentiality: "Location disclosed post-NDA execution"
  },
  {
    id: 'brief-003',
    title: "Tatu City Logistics Hub",
    asset_class: "Industrial/Logistics",
    location: "Kiambu County, Kenya",
    location_detail: "Tatu City Special Economic Zone",
    teaser: "Last-mile logistics facility serving Nairobi's northern corridor. 8,500 sqm modern warehousing with 12m eaves, cross-docking capability, and 40ft container turning circle. EPC contractor appointed with 8-month build schedule.",
    price_kes: 680000000, // 680M KES (~$5.2M)
    price_usd: 5200000,
    requires_order: false,
    access_level: "registered",
    status: "active",
    created_at: "2026-03-08",
    highlights: [
      "8,500 sqm modern spec warehouse",
      "12m eaves height for racking optimization",
      "SEZ status with 10-year tax holiday",
      "8-month construction timeline"
    ],
    metrics: {
      irr: "14.8%",
      yield: "9.8%",
      sqm: "8,500",
      timeline: "8 months"
    },
    confidentiality: "Public location disclosure"
  },
  {
    id: 'brief-004',
    title: "Lavington Residential Portfolio",
    asset_class: "Residential",
    location: "Nairobi, Kenya",
    location_detail: "Lavington, near Junction Mall",
    teaser: "Portfolio of 12 luxury townhouses in gated community. 100% occupancy with diplomatic and expatriate tenants. NOI growth of 8% YoY. Opportunity for portfolio consolidation and REIT-ready structuring.",
    price_kes: 2100000000, // 2.1B KES (~$16.2M)
    price_usd: 16200000,
    requires_order: true,
    access_level: "premium",
    status: "under_offer",
    created_at: "2026-02-28",
    highlights: [
      "12 townhouses, 100% occupancy",
      "Diplomatic tenant base (UN, embassies)",
      "8% NOI growth YoY",
      "REIT-ready structure available"
    ],
    metrics: {
      irr: "12.5%",
      yield: "7.8%",
      units: "12",
      occupancy: "100%"
    },
    confidentiality: "NDA and proof of funds required"
  }
]

export default async function InvestorBriefsPage() {
  const supabase = await createClient()

  const { data: briefs, error } = await supabase
    .from('asset_briefs')
    .select('id,title,asset_class,location,location_detail,teaser,price_kes,price_usd,requires_order,access_level,status,created_at,confidentiality,metrics,highlights')
    .order('created_at', { ascending: false })

  // Use sample data if no database records exist
  const displayBriefs = briefs?.length ? briefs : sampleBriefs

  return (
    <div className="space-y-16">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-8 border-b border-[#1B4332]/10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B]">Off-Market Deal Room</span>
            <span className="text-[#B8956B]/30">|</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#1B4332]/50">
              Exclusive Opportunities
            </span>
          </div>
          <h1 className="font-serif text-4xl lg:text-5xl text-[#1B4332]">Investment Briefs</h1>
          <p className="text-sm text-[#2C3E35]/70 mt-3 max-w-2xl leading-relaxed">
            Direct real estate opportunities not publicly marketed. According to Knight Frank, 30% of luxury transactions 
            now occur off-market, with family offices sourcing through trusted networks rather than traditional brokerage. 
            Access tier-based.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-1">Your Access Level</div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B8956B]/10 border border-[#B8956B]/30">
              <Shield className="h-3 w-3 text-[#B8956B]" />
              <span className="text-xs uppercase tracking-[0.15em] text-[#B8956B] font-medium">
                Verified Investor
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Deal Flow Intelligence */}
      <section className="bg-[#1B4332] text-[#FAF9F6] p-8 lg:p-12 rounded-sm">
        <div className="mb-8">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B] block mb-2">Market Intelligence</span>
          <h2 className="font-serif text-3xl mb-2">The Off-Market Advantage</h2>
          <p className="text-sm text-[#FAF9F6]/70 max-w-3xl">
            Family office deal flow operates through relationships, not listings. Knight Frank data reveals that 
            off-market transactions often achieve higher per-square-foot pricing than comparable listed properties, 
            as buyer pools consist exclusively of qualified, motivated capital [^46^].
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dealFlowInsights.map((insight, index) => (
            <div key={index} className="bg-white/5 border border-[#B8956B]/20 p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-light text-[#B8956B] mb-2">{insight.stat}</div>
              <div className="text-xs uppercase tracking-wider text-white/80 mb-2">{insight.label}</div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">{insight.description}</p>
              <div className="text-[10px] text-[#B8956B]/70 uppercase tracking-wider">{insight.source}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-[#B8956B]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-[#B8956B] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[#FAF9F6]/70 max-w-2xl">
              <span className="text-white font-medium">Confidentiality Protocol:</span> All opportunities require 
              executed NDA before detailed disclosure. Proof of funds may be required for premium tier assets. 
              Deal flow is relationship-based; reputation determines access [^44^].
            </p>
          </div>
          <Link 
            href="/contact?subject=nda-execution"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[#B8956B] hover:text-white transition-colors flex-shrink-0"
          >
            Execute NDA <ChevronRight className="h-3 w-3" />
          </Link>
        </div>
      </section>

      {/* Access Tiers */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-serif text-2xl text-[#1B4332] mb-1">Access Tiers</h2>
            <p className="text-xs text-[#2C3E35]/60">Progressive disclosure based on verification and relationship depth</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {Object.entries(accessTiers).map(([key, tier]) => (
            <div 
              key={key} 
              className={`border border-[#1B4332]/10 p-6 ${key === 'verified' ? 'bg-[#B8956B]/5 border-[#B8956B]/30' : 'bg-white'}`}
            >
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${tier.color} ${tier.textColor} mb-4`}>
                {key === 'premium' && <Lock className="h-3 w-3" />}
                {key === 'verified' && <Shield className="h-3 w-3" />}
                {key === 'registered' && <Eye className="h-3 w-3" />}
                <span className="text-[10px] uppercase tracking-wider font-medium">{tier.label}</span>
              </div>
              <p className="text-sm text-[#2C3E35]/70 leading-relaxed">{tier.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Briefs Grid */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif text-2xl text-[#1B4332] mb-1">Current Opportunities</h2>
            <p className="text-xs text-[#2C3E35]/60">
              {displayBriefs.filter(b => b.status === 'active').length} active briefs | {displayBriefs.filter(b => b.access_level === 'premium').length} premium access
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50">Filter:</span>
            <select className="bg-white border border-[#1B4332]/20 text-xs text-[#1B4332] px-3 py-2 focus:border-[#B8956B] focus:outline-none">
              <option>All Asset Classes</option>
              <option>Commercial Office</option>
              <option>Industrial/Logistics</option>
              <option>Residential</option>
              <option>Mixed-Use</option>
              <option>Land</option>
            </select>
          </div>
        </div>

        {error ? (
          <div className="bg-red-50 border-l-4 border-red-500 p-6 text-red-700">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="h-5 w-5" />
              <span className="font-medium">System Error</span>
            </div>
            <p className="text-sm">Failed to load briefs: {error.message}</p>
            <p className="text-xs mt-2 text-red-600/70">Displaying sample opportunities for demonstration</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {displayBriefs.map((brief) => {
              const tier = accessTiers[brief.access_level as keyof typeof accessTiers] || accessTiers.registered
              const isLocked = brief.access_level === 'premium' || brief.requires_order
              
              return (
                <div 
                  key={brief.id} 
                  className={`group bg-white border ${brief.access_level === 'premium' ? 'border-[#B8956B]/30' : 'border-[#1B4332]/10'} hover:border-[#B8956B]/50 transition-all duration-300 flex flex-col`}
                >
                  {/* Card Header */}
                  <div className={`p-6 ${brief.access_level === 'premium' ? 'bg-[#B8956B]/5' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] uppercase tracking-[0.15em] px-2 py-1 ${tier.color} ${tier.textColor}`}>
                          {brief.asset_class}
                        </span>
                        {brief.status === 'under-offer' && (
                          <span className="text-[10px] uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-1">
                            Under Offer
                          </span>
                        )}
                      </div>
                      <div className={`flex items-center gap-1 ${tier.textColor}`}>
                        {brief.access_level === 'premium' ? (
                          <Lock className="h-4 w-4" />
                        ) : brief.access_level === 'verified' ? (
                          <Shield className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                        <span className="text-[10px] uppercase tracking-wider">{tier.label}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl text-[#1B4332] group-hover:text-[#B8956B] transition-colors mb-2">
                      {brief.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-sm text-[#2C3E35]/60 mb-4">
                      <MapPin className="h-4 w-4 text-[#B8956B]" />
                      {brief.location_detail || brief.location}
                      {brief.confidentiality && (
                        <span className="text-[10px] text-[#B8956B] ml-2">({brief.confidentiality})</span>
                      )}
                    </div>

                    <p className="text-sm text-[#2C3E35]/80 leading-relaxed line-clamp-3 mb-4">
                      {brief.teaser}
                    </p>

                    {/* Quick Metrics */}
                    {brief.metrics && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                        {Object.entries(brief.metrics).map(([key, value]) => (
                          <div key={key} className="bg-[#FAF9F6] p-2 text-center">
                            <div className="text-xs font-medium text-[#1B4332]">{String(value)}</div>
                            <div className="text-[10px] text-[#1B4332]/50 uppercase tracking-wider">{key}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Highlights */}
                    <div className="space-y-1">
                        {brief.highlights?.slice(0, 3).map((highlight: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#2C3E35]/70">
                          <CheckCircle2 className="h-3 w-3 text-[#B8956B] mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                        ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-auto p-6 pt-4 border-t border-[#1B4332]/5 flex items-center justify-between bg-[#FAF9F6]/50">
                    <div>
                      <div className="text-xs text-[#1B4332]/50 mb-1">Investment Required</div>
                      <div className="font-serif text-lg text-[#1B4332]">
                        ${brief.price_usd ? (brief.price_usd / 1000000).toFixed(1) + 'M' : 'Contact'}
                        <span className="text-xs text-[#1B4332]/50 ml-2">
                          ({brief.price_kes ? (brief.price_kes / 1000000).toFixed(0) + 'M KES' : 'Price on request'})
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {isLocked ? (
                        <Link
                          href={brief.access_level === 'premium' ? "/contact?subject=premium-access" : "/investor-portal/briefs/order"}
                          className="inline-flex items-center gap-2 bg-[#1B4332] text-white px-4 py-2 text-[11px] uppercase tracking-[0.1em] hover:bg-[#2D5A47] transition-colors"
                        >
                          {brief.access_level === 'premium' ? (
                            <>
                              <Lock className="h-3 w-3" />
                              Request Access
                            </>
                          ) : (
                            <>
                              <FileText className="h-3 w-3" />
                              Order Brief
                            </>
                          )}
                        </Link>
                      ) : (
                        <Link
                          href={`/investor-portal/briefs/${brief.id}`}
                          className="inline-flex items-center gap-2 border border-[#1B4332]/20 text-[#1B4332] px-4 py-2 text-[11px] uppercase tracking-[0.1em] hover:border-[#B8956B] hover:text-[#B8956B] transition-colors"
                        >
                          <Eye className="h-3 w-3" />
                          View Details
                        </Link>
                      )}
                      
                      {brief.requires_order && brief.access_level !== 'premium' && (
                        <Link
                          href="/investor-portal/briefs/order"
                          className="inline-flex items-center gap-2 bg-[#B8956B] text-[#1B4332] px-4 py-2 text-[11px] uppercase tracking-[0.1em] font-medium hover:bg-[#9A7B5A] transition-colors"
                        >
                          <Download className="h-3 w-3" />
                          Order ($150)
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {displayBriefs.length === 0 && (
          <div className="bg-[#FAF9F6] border border-[#B8956B]/20 p-12 text-center">
            <Briefcase className="h-12 w-12 text-[#B8956B]/30 mx-auto mb-4" />
            <h3 className="font-serif text-xl text-[#1B4332] mb-2">No Active Briefs</h3>
            <p className="text-sm text-[#2C3E35]/60 max-w-md mx-auto mb-4">
              Current opportunities are under review or reserved for premium tier investors. 
              Join our deal flow network to receive early notification of new briefs.
            </p>
            <Link 
              href="/contact?subject=deal-flow-network"
              className="inline-block bg-[#1B4332] text-white px-6 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#2D5A47] transition-colors"
            >
              Join Deal Flow Network
            </Link>
          </div>
        )}
      </section>

      {/* Deal Sourcing Philosophy */}
      <section className="bg-[#FAF9F6] border border-[#B8956B]/20 p-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-2xl text-[#1B4332] mb-4">How Murivest Sources Opportunities</h3>
            <div className="space-y-4 text-sm text-[#2C3E35]/80 leading-relaxed">
              <p>
                According to Knight Frank research, ultra-high-net-worth individuals increasingly source real estate 
                opportunities through "trusted networks" rather than traditional brokerage channels [^46^]. The transaction 
                doesn't happen on the polo field—it happens after the match, during conversations where developers mention 
                they're "consolidating holdings" and qualified buyers signal liquidity through sophisticated questions.
              </p>
              <p>
                Family offices use various deal sourcing strategies: personal networks (74% seek more introductions), 
                investment banks and brokers, professional networks, direct outreach, and industry research [^42^]. 
                Reputation determines access—those known for sophisticated evaluation and rapid execution receive 
                opportunities others never see [^44^].
              </p>
              <p>
                The hidden economics favor off-market transactions: no carrying costs from extended listings, no marketing 
                spend on staging and photography, and no contingency-laden offers. Sellers benefit from faster closings 
                with pre-vetted, liquid buyers who can move in 30-45 days [^46^].
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-[#1B4332] mb-4">Our Sourcing Channels</h4>
            
            <div className="flex items-start gap-4 p-4 bg-white border border-[#1B4332]/10">
              <div className="w-10 h-10 bg-[#B8956B]/10 flex items-center justify-center flex-shrink-0">
                <Users className="h-5 w-5 text-[#B8956B]" />
              </div>
              <div>
                <h5 className="font-medium text-[#1B4332] mb-1">Network Effect</h5>
                <p className="text-xs text-[#2C3E35]/70">
                  Estate attorneys, wealth managers, and family office principals signal opportunities 
                  2-5 years before formal market entry [^52^].
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white border border-[#1B4332]/10">
              <div className="w-10 h-10 bg-[#B8956B]/10 flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5 text-[#B8956B]" />
              </div>
              <div>
                <h5 className="font-medium text-[#1B4332] mb-1">Reputation Access</h5>
                <p className="text-xs text-[#2C3E35]/70">
                  Families who prove themselves as valuable partners develop reputations that attract 
                  future opportunities. The network has long memories [^44^].
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white border border-[#1B4332]/10">
              <div className="w-10 h-10 bg-[#B8956B]/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-5 w-5 text-[#B8956B]" />
              </div>
              <div>
                <h5 className="font-medium text-[#1B4332] mb-1">Proprietary Research</h5>
                <p className="text-xs text-[#2C3E35]/70">
                  Direct outreach to developers and distressed asset holders based on our 
                  market intelligence and zoning tracking systems.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white border border-[#1B4332]/10">
              <div className="w-10 h-10 bg-[#B8956B]/10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-[#B8956B]" />
              </div>
              <div>
                <h5 className="font-medium text-[#1B4332] mb-1">Patient Capital</h5>
                <p className="text-xs text-[#2C3E35]/70">
                  We maintain long-dated positions and relationships, enabling us to access 
                  generational transfers before formal marketing [^52^].
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 border-t border-[#1B4332]/10">
        <h3 className="font-serif text-2xl text-[#1B4332] mb-3">Require Bespoke Sourcing?</h3>
        <p className="text-sm text-[#2C3E35]/70 max-w-2xl mx-auto mb-6">
          Murivest undertakes custom deal sourcing for institutional clients with specific sector, 
          geographic, or return requirements. Our team maintains active networks across East Africa's 
          property markets and can identify off-market opportunities aligned with your investment criteria.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact?subject=custom-sourcing"
            className="inline-flex items-center gap-2 bg-[#B8956B] text-[#1B4332] px-8 py-3 text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#9A7B5A] transition-colors"
          >
            <Briefcase className="h-4 w-4" />
            Request Custom Sourcing
          </Link>
          <Link 
            href="/investor-portal/off-market"
            className="inline-flex items-center gap-2 border-2 border-[#1B4332] text-[#1B4332] px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#1B4332] hover:text-white transition-all"
          >
            <Lock className="h-4 w-4" />
            View Off-Market Pipeline
          </Link>
        </div>
      </section>
    </div>
  )
}