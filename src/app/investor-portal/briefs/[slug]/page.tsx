// src/app/investor-portal/briefs/[slug]/page.tsx

import { createClient } from '@/lib/supabase/server' // Make sure this path points to your new utility
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  ArrowLeft, 
  Download, 
  FileText, 
  Lock, 
  Shield, 
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  MapPin,
  TrendingUp,
  Building2,
  Users,
  Clock,
  Award,
  BarChart3,
  Briefcase,
  Globe,
  Calculator
} from 'lucide-react'

// Investment memorandum structure based on institutional standards
const memoStructure = {
  executiveSummary: {
    title: "Executive Summary",
    description: "Investment thesis, pricing, and return projections",
    icon: FileText
  },
  investmentStrategy: {
    title: "Investment Strategy",
    description: "Market analysis, competitive positioning, and value creation",
    icon: TrendingUp
  },
  management: {
    title: "Management & Operations",
    description: "Sponsor track record and asset management approach",
    icon: Users
  },
  financialAnalysis: {
    title: "Financial Analysis",
    description: "Historical performance, projections, and sensitivity analysis",
    icon: BarChart3
  },
  risks: {
    title: "Risk Factors",
    description: "Market, operational, and financial risk assessment",
    icon: AlertCircle
  },
  terms: {
    title: "Investment Terms",
    description: "Structure, fees, distributions, and governance",
    icon: Calculator
  }
}

// Due diligence checklist based on Deloitte and industry standards
const dueDiligenceAreas = [
  {
    category: "Legal & Title",
    items: [
      "Title report and ownership verification",
      "Zoning compliance and use restrictions",
      "ALTA survey and boundary confirmation",
      "Certificates of occupancy",
      "Entity documentation validation"
    ],
    status: "completed"
  },
  {
    category: "Financial",
    items: [
      "Rent roll and lease abstract review",
      "Historical operating statements (3yr)",
      "Real estate tax assessment",
      "Utility cost validation",
      "Insurance policy audit"
    ],
    status: "completed"
  },
  {
    category: "Physical & Environmental",
    items: [
      "Phase I ESA environmental assessment",
      "Property condition report (PCR)",
      "Infrastructure and systems evaluation",
      "Deferred maintenance schedule",
      "ESG compliance verification"
    ],
    status: "in-progress"
  },
  {
    category: "Market",
    items: [
      "Demographic and employment trends",
      "Competitive supply analysis",
      "Comparable transaction review",
      "Lease rate benchmarking",
      "Absorption and vacancy forecasts"
    ],
    status: "completed"
  }
]

// Sample investment brief based on institutional standards
const sampleBrief = {
  id: 'brief-westlands-001',
  title: "Westlands Grade A Office Development",
  subtitle: "Pre-let Development Opportunity in Supply-Constrained Node",
  assetClass: "Commercial Office",
  location: "Nairobi, Kenya",
  locationDetail: "Westlands Business District, 0.5km from Sarit Centre, 1.2km from Village Market",
  investmentType: "Development / Forward Commitment",
  accessLevel: "premium",
  status: "active",
  createdAt: "2026-03-15",
  
  // Executive Summary
  executiveSummary: {
    thesis: "Acquire development site with planning consent for 12,000 sqm Grade A office in Westlands, Nairobi's premier business district. Pre-let to multinational tenants provides 60% income certainty pre-completion. Target 16.5% IRR with 8-year weighted average lease term (WALT).",
    highlights: [
      "60% pre-let to blue-chip multinational tenants (LOI stage)",
      "8-year WALT with 3% annual rent escalation (USD-denominated)",
      "EDGE Green Building certification pending (8-12% rent premium)",
      "15-year land lease with 10-year extension option",
      "EPC contractor appointed with 10-month build schedule"
    ],
    pricing: {
      totalInvestment: 1450000000, // KES 1.45B = ~$11.2M
      equityRequired: 580000000, // 40% equity
      debtArranged: 870000000, // 60% debt (KCB/Stanbic)
      pricePerSqm: 120833, // KES per buildable sqm
      pricePerSqmUsd: 933 // USD per buildable sqm
    },
    returns: {
      targetIRR: "16.5%",
      targetEquityMultiple: "2.4x",
      preferredReturn: "8% cumulative",
      promoteStructure: "80/20 over pref, 70/30 over 15% IRR",
      projectedHoldPeriod: "7 years"
    }
  },

  // Investment Strategy
  investmentStrategy: {
    marketContext: `
      Nairobi's Grade A office market demonstrates structural undersupply with vacancy rates below 5% 
      for institutional-quality stock. Westlands commands premium rents ($12-15/sqm) versus Upper Hill 
      ($10-13/sqm) due to superior infrastructure, security, and amenity access. The 2024 Knight Frank 
      data shows Nairobi prime office yields at 7.2-8.5%, with capital values appreciating 6.8% annually 
      over the past decade.
    `,
    competitiveAdvantages: [
      "Corner site with dual frontage on Muthangari Drive and Parklands Road",
      "Direct access to Nairobi Expressway (5-min to CBD, 20-min to airport)",
      "Within 500m of Sarit Centre, Nairobi's premier retail and F&B destination",
      "Existing relationships with tenant decision-makers (repeat business)",
      "Proven EPC contractor with 15-year track record in Kenya"
    ],
    valueCreation: [
      "Development spread: $933/sqm construction cost vs. $1,400/sqm comparable sales",
      "Pre-leasing de-risks lease-up phase and accelerates income stabilization",
      "Green certification enables 8-12% rent premium and faster absorption",
      "Long-dated land lease (25 years) provides security of tenure",
      "Phased construction allows tenant customization and early income"
    ],
    exitOptions: [
      "Sale to institutional investor post-stabilization (Year 3-4)",
      "Refinancing and hold for income (family office long-term)",
      "Partial sale to REIT with retained management contract",
      "Forward sale to pan-African real estate fund"
    ]
  },

  // Management
  management: {
    sponsor: {
      name: "Murivest Development Partners",
      trackRecord: "$340M developed across 12 projects since 2018",
      realizedIRR: "18.2% gross (8 exits)",
      currentAUM: "$95M under development"
    },
    assetManager: {
      name: "Knight Frank Kenya",
      role: "Property and leasing management",
      feeStructure: "3% of EGR + 5% of NOI above budget"
    },
    keyPersonnel: [
      { name: "James Morrison", role: "Managing Partner", experience: "20 years, ex-Actis" },
      { name: "Sarah Chen", role: "Development Director", experience: "12 years, ex-Lendlease" },
      { name: "Michael Ochieng", role: "Local Partner", experience: "15 years, Knight Frank Kenya" }
    ]
  },

  // Financial Analysis
  financialAnalysis: {
    revenueProjections: [
      { year: "Year 1 (Construction)", grossRevenue: 0, noi: -45000000, occupancy: "0%" },
      { year: "Year 2 (Lease-up)", grossRevenue: 98000000, noi: 52000000, occupancy: "60%" },
      { year: "Year 3 (Stabilized)", grossRevenue: 156000000, noi: 98000000, occupancy: "95%" },
      { year: "Year 4 (Growth)", grossRevenue: 160680000, noi: 102900000, occupancy: "95%" },
      { year: "Year 5 (Growth)", grossRevenue: 165500000, noi: 107900000, occupancy: "95%" }
    ],
    keyMetrics: {
      goingInCapRate: "7.8%",
      terminalCapRate: "7.0%",
      exitValue: 2100000000,
      constructionCost: 1080000000,
      developmentProfit: 420000000,
      profitMargin: "38.9%"
    },
    sensitivityAnalysis: [
      { scenario: "Base Case", irr: "16.5%", equityMultiple: "2.4x", moic: "2.4x" },
      { scenario: "Upside (100% pre-let)", irr: "19.2%", equityMultiple: "2.8x", moic: "2.8x" },
      { scenario: "Downside (12mo lease-up)", irr: "13.8%", equityMultiple: "2.0x", moic: "2.0x" },
      { scenario: "Stress (40% occupancy)", irr: "8.5%", equityMultiple: "1.4x", moic: "1.4x" }
    ]
  },

  // Risk Factors
  riskFactors: [
    {
      category: "Market Risk",
      description: "Nairobi office absorption dependent on multinational expansion and NGO presence",
      mitigation: "Pre-letters are credit-rated multinationals with 5+ year track record in Kenya",
      severity: "medium"
    },
    {
      category: "Construction Risk",
      description: "Cost overruns or delays in 10-month build schedule",
      mitigation: "Fixed-price EPC contract with liquidated damages; 15% contingency reserve",
      severity: "low"
    },
    {
      category: "Currency Risk",
      description: "KES depreciation against USD affects dollar-denominated returns",
      mitigation: "60% of leases USD-denominated; hedging for construction phase",
      severity: "medium"
    },
    {
      category: "Tenant Risk",
      description: "LOI may not convert to binding leases; tenant default post-occupation",
      mitigation: "LOI includes break fees; 6-month security deposits; parent company guarantees",
      severity: "medium"
    },
    {
      category: "Regulatory Risk",
      description: "Changes to land lease terms or building code requirements",
      mitigation: "15-year lease with extension rights; planning consent secured; legal opinion obtained",
      severity: "low"
    }
  ],

  // Investment Terms
  investmentTerms: {
    structure: "Kenyan SPV (Limited Liability Company)",
    minimumInvestment: 50000000, // KES 50M = ~$385K
    targetRaise: 580000000, // KES 580M equity
    investorQualification: "Accredited / Sophisticated (KES 100M+ net worth or $1M+ AUM)",
    governance: "Investor Committee (major decisions >KES 10M)",
    reporting: "Quarterly financials + annual site visits + monthly construction updates",
    fees: {
      acquisition: "2% of purchase price",
      assetManagement: "3% of EGR + 5% of NOI above budget",
      developmentManagement: "4% of hard costs",
      disposition: "1% of exit value"
    },
    distributions: {
      preferredReturn: "8% cumulative, paid quarterly",
      promoteStructure: "80/20 split after pref; 70/30 split after 15% IRR",
      clawback: "Full clawback on promote if final IRR < 12%"
    },
    timeline: {
      commitmentDeadline: "2026-04-30",
      firstClosing: "2026-05-15",
      constructionStart: "2026-06-01",
      practicalCompletion: "2027-04-01",
      stabilizationTarget: "2027-10-01"
    }
  },

  // Due Diligence Status
  dueDiligence: {
    status: "Advanced",
    completion: "85%",
    legalCounsel: "Anjarwalla & Khanna (Kenya)",
    taxAdvisor: "Deloitte Kenya",
    environmental: "ERM East Africa",
    lastUpdated: "2026-03-20"
  },

  // Confidentiality
  confidentiality: {
    level: "Strictly Confidential",
    ndaRequired: true,
    distribution: "Intended solely for qualified investors",
    restrictions: "No reproduction or redistribution without written consent"
  }
}

interface RevenueProjection {
  year: string
  grossRevenue: number
  noi: number
  occupancy: string
}

interface SensitivityScenario {
  scenario: string
  irr: string
  equityMultiple: string
  moic: string
}

// 1. Update the type definition for Next.js 15
interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BriefDetailPage({ params }: PageProps) {
  // 2. Await the params object before destructuring
  const { slug } = await params;
  
  const supabase = await createClient()

  // Fetch brief from database
  const { data: brief, error } = await supabase
    .from('investment_briefs') // Changed to match your actual schema
    .select('*')
    .eq('slug', slug)
    .maybeSingle()

  // Use sample data if no database record found
  const displayBrief = brief || sampleBrief

  if (!displayBrief) {
    notFound()
  }

  const isLocked = displayBrief.accessLevel === 'premium'

  return (
    <div className="space-y-12">
      {/* Navigation & Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#1B4332]/50">
        <Link href="/investor-portal" className="hover:text-[#B8956B] transition-colors">Portal</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/investor-portal/briefs" className="hover:text-[#B8956B] transition-colors">Briefs</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-[#B8956B] uppercase tracking-wider">{displayBrief.assetClass}</span>
      </div>

      {/* Header Section */}
      <header className="bg-[#1B4332] text-[#FAF9F6] p-8 lg:p-12 rounded-sm relative overflow-hidden">
        {isLocked && (
          <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-[#B8956B]/20 border border-[#B8956B]/30">
            <Lock className="h-4 w-4 text-[#B8956B]" />
            <span className="text-[10px] uppercase tracking-wider text-[#B8956B] font-medium">Premium Access</span>
          </div>
        )}

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B]">
              {displayBrief.investmentType || 'Direct Investment'}
            </span>
            <span className="text-[#B8956B]/30">|</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#FAF9F6]/60">
              {displayBrief.assetClass}
            </span>
            {displayBrief.status === 'active' || displayBrief.status === 'Active' ? (
              <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-green-400 bg-green-400/10 px-2 py-1">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Active
              </span>
            ) : (
              <span className="text-[10px] uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-1">
                {displayBrief.status}
              </span>
            )}
          </div>

          <h1 className="font-serif text-4xl lg:text-5xl mb-3 leading-tight">
            {displayBrief.title}
          </h1>
          {displayBrief.subtitle && (
            <p className="text-xl text-[#FAF9F6]/80 italic mb-6 font-light">
              {displayBrief.subtitle}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-6 text-sm text-[#FAF9F6]/60">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#B8956B]" />
              {displayBrief.locationDetail || displayBrief.location}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Posted {new Date(displayBrief.createdAt || Date.now()).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              {displayBrief.confidentiality?.level || 'Strictly Confidential'}
            </span>
          </div>
        </div>
      </header>

      {/* Investment Highlights Bar */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-[#1B4332]/10 p-6 text-center">
          <div className="text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-1">Target IRR</div>
          <div className="text-3xl font-light text-[#B8956B]">{displayBrief.target_irr || displayBrief.executiveSummary?.returns?.targetIRR || '16.5%'}</div>
        </div>
        <div className="bg-white border border-[#1B4332]/10 p-6 text-center">
          <div className="text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-1">Investment</div>
          <div className="text-3xl font-light text-[#1B4332]">
            {displayBrief.price_kes ? 
              `KES ${(displayBrief.price_kes / 1000000).toFixed(1)}M` : 
              `$${displayBrief.executiveSummary?.pricing?.totalInvestment ? (displayBrief.executiveSummary.pricing.totalInvestment / 1000000).toFixed(1) + 'M' : '11.2M'}`
            }
          </div>
        </div>
        <div className="bg-white border border-[#1B4332]/10 p-6 text-center">
          <div className="text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-1">Target Yield</div>
          <div className="text-3xl font-light text-[#1B4332]">{displayBrief.target_yield || displayBrief.executiveSummary?.returns?.targetEquityMultiple || '8%'}</div>
        </div>
        <div className="bg-white border border-[#1B4332]/10 p-6 text-center">
          <div className="text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-1">Hold Period</div>
          <div className="text-3xl font-light text-[#1B4332]">{displayBrief.executiveSummary?.returns?.projectedHoldPeriod || '7 years'}</div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="bg-[#FAF9F6] border border-[#B8956B]/20 p-8">
        <div className="flex items-center gap-2 mb-6">
          <FileText className="h-5 w-5 text-[#B8956B]" />
          <h2 className="font-serif text-2xl text-[#1B4332]">Executive Summary</h2>
        </div>
        
        <p className="text-[#2C3E35]/80 leading-relaxed text-lg font-light mb-6 whitespace-pre-wrap">
          {displayBrief.summary || displayBrief.executiveSummary?.thesis || displayBrief.teaser}
        </p>

        {displayBrief.executiveSummary?.highlights && (
          <div className="grid md:grid-cols-2 gap-4">
            {displayBrief.executiveSummary.highlights.map((highlight: string, index: number) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#B8956B] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[#2C3E35]/80">{highlight}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Investment Structure */}
      {displayBrief.executiveSummary?.pricing && (
        <section className="bg-white border border-[#1B4332]/10 p-8">
          <div className="flex items-center gap-2 mb-6">
            <Calculator className="h-5 w-5 text-[#B8956B]" />
            <h2 className="font-serif text-2xl text-[#1B4332]">Investment Structure</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xs uppercase tracking-[0.15em] text-[#1B4332]/50 mb-4">Capital Stack</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-[#1B4332]/10">
                  <span className="text-sm text-[#2C3E35]/70">Total Investment</span>
                  <span className="font-medium text-[#1B4332]">
                    ${(displayBrief.executiveSummary.pricing.totalInvestment / 1000000).toFixed(1)}M
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#1B4332]/10">
                  <span className="text-sm text-[#2C3E35]/70">Equity Required</span>
                  <span className="font-medium text-[#B8956B]">
                    ${(displayBrief.executiveSummary.pricing.equityRequired / 1000000).toFixed(1)}M (40%)
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#1B4332]/10">
                  <span className="text-sm text-[#2C3E35]/70">Debt Arranged</span>
                  <span className="font-medium text-[#1B4332]">
                    ${(displayBrief.executiveSummary.pricing.debtArranged / 1000000).toFixed(1)}M (60%)
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.15em] text-[#1B4332]/50 mb-4">Return Structure</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-[#1B4332]/10">
                  <span className="text-sm text-[#2C3E35]/70">Preferred Return</span>
                  <span className="font-medium text-[#1B4332]">
                    {displayBrief.executiveSummary.returns.preferredReturn}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#1B4332]/10">
                  <span className="text-sm text-[#2C3E35]/70">Promote Structure</span>
                  <span className="font-medium text-[#1B4332]">
                    {displayBrief.executiveSummary.returns.promoteStructure}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#1B4332]/10">
                  <span className="text-sm text-[#2C3E35]/70">Target IRR</span>
                  <span className="font-medium text-[#B8956B]">
                    {displayBrief.executiveSummary.returns.targetIRR}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.15em] text-[#1B4332]/50 mb-4">Key Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-[#1B4332]/10">
                  <span className="text-sm text-[#2C3E35]/70">Price/sqm (KES)</span>
                  <span className="font-medium text-[#1B4332]">
                    {displayBrief.executiveSummary.pricing.pricePerSqm?.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#1B4332]/10">
                  <span className="text-sm text-[#2C3E35]/70">Price/sqm (USD)</span>
                  <span className="font-medium text-[#1B4332]">
                    ${displayBrief.executiveSummary.pricing.pricePerSqmUsd}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#1B4332]/10">
                  <span className="text-sm text-[#2C3E35]/70">Min. Investment</span>
                  <span className="font-medium text-[#1B4332]">
                    ${(displayBrief.investmentTerms?.minimumInvestment / 1000000).toFixed(1)}M
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Investment Strategy */}
      {displayBrief.investmentStrategy && (
        <section className="bg-white border border-[#1B4332]/10 p-8">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-5 w-5 text-[#B8956B]" />
            <h2 className="font-serif text-2xl text-[#1B4332]">Investment Strategy</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-[#1B4332] mb-3">Market Context</h3>
              <p className="text-sm text-[#2C3E35]/70 leading-relaxed mb-6 whitespace-pre-wrap">
                {displayBrief.investmentStrategy.marketContext}
              </p>

              <h3 className="font-medium text-[#1B4332] mb-3">Value Creation</h3>
              <ul className="space-y-2">
                {displayBrief.investmentStrategy.valueCreation.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-[#2C3E35]/70">
                    <ChevronRight className="h-4 w-4 text-[#B8956B] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-[#1B4332] mb-3">Competitive Advantages</h3>
              <ul className="space-y-2 mb-6">
                {displayBrief.investmentStrategy.competitiveAdvantages.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-[#2C3E35]/70">
                        <CheckCircle2 className="h-4 w-4 text-[#B8956B] mt-0.5 flex-shrink-0" />
                        {item}
                    </li>
                ))}
              </ul>

              <h3 className="font-medium text-[#1B4332] mb-3">Exit Options</h3>
              <ul className="space-y-2">
                {displayBrief.investmentStrategy.exitOptions.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-[#2C3E35]/70">
                    <Globe className="h-4 w-4 text-[#B8956B] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Management Team */}
      {displayBrief.management && (
        <section className="bg-[#1B4332]/5 border border-[#1B4332]/10 p-8">
          <div className="flex items-center gap-2 mb-6">
            <Users className="h-5 w-5 text-[#B8956B]" />
            <h2 className="font-serif text-2xl text-[#1B4332]">Management & Operations</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 border border-[#1B4332]/10">
              <div className="text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-2">Sponsor</div>
              <div className="font-medium text-[#1B4332] mb-1">{displayBrief.management.sponsor.name}</div>
              <div className="text-xs text-[#2C3E35]/60 mb-3">{displayBrief.management.sponsor.trackRecord}</div>
              <div className="text-sm text-[#B8956B] font-medium">{displayBrief.management.sponsor.realizedIRR} realized IRR</div>
            </div>

            <div className="bg-white p-6 border border-[#1B4332]/10">
              <div className="text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-2">Asset Manager</div>
              <div className="font-medium text-[#1B4332] mb-1">{displayBrief.management.assetManager.name}</div>
              <div className="text-xs text-[#2C3E35]/60 mb-3">{displayBrief.management.assetManager.role}</div>
              <div className="text-xs text-[#2C3E35]/60">{displayBrief.management.assetManager.feeStructure}</div>
            </div>

            <div className="bg-white p-6 border border-[#1B4332]/10">
              <div className="text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-2">Key Personnel</div>
              <div className="space-y-2">
                {displayBrief.management.keyPersonnel.slice(0, 2).map(
                    (person: { name: string; role: string; experience: string }, index: number) => (
                        <div key={index} className="text-xs">
                            <div className="font-medium text-[#1B4332]">{person.name}</div>
                            <div className="text-[#2C3E35]/60">{person.role}</div>
                        </div>
                    )
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Financial Analysis */}
      {displayBrief.financialAnalysis && (
        <section className="bg-white border border-[#1B4332]/10 p-8">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="h-5 w-5 text-[#B8956B]" />
            <h2 className="font-serif text-2xl text-[#1B4332]">Financial Analysis</h2>
          </div>

          {/* Revenue Projections Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1B4332]/10">
                  <th className="text-left py-3 text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 font-medium">Period</th>
                  <th className="text-right py-3 text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 font-medium">Gross Revenue</th>
                  <th className="text-right py-3 text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 font-medium">NOI</th>
                  <th className="text-right py-3 text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 font-medium">Occupancy</th>
                </tr>
              </thead>
              <tbody>
                {(displayBrief.financialAnalysis.revenueProjections as RevenueProjection[]).map((row: RevenueProjection, index: number) => (
                  <tr key={index} className="border-b border-[#1B4332]/5">
                    <td className="py-3 text-[#1B4332] font-medium">{row.year}</td>
                    <td className="py-3 text-right text-[#2C3E35]/70">
                      {row.grossRevenue > 0 ? `KES ${(row.grossRevenue / 1000000).toFixed(1)}M` : '-'}
                    </td>
                    <td className="py-3 text-right font-medium text-[#B8956B]">
                      {row.noi !== 0 ? `KES ${(row.noi / 1000000).toFixed(1)}M` : '-'}
                    </td>
                    <td className="py-3 text-right text-[#2C3E35]/70">{row.occupancy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sensitivity Analysis */}
          <div className="grid md:grid-cols-4 gap-4">
            {(
              displayBrief.financialAnalysis.sensitivityAnalysis as SensitivityScenario[]
            ).map((scenario: SensitivityScenario, index: number) => (
              <div key={index} className={`p-4 border ${index === 0 ? 'border-[#B8956B]/30 bg-[#B8956B]/5' : 'border-[#1B4332]/10'}`}>
              <div className="text-[10px] uppercase tracking-wider text-[#1B4332]/50 mb-2">{scenario.scenario}</div>
              <div className="text-2xl font-light text-[#1B4332] mb-1">{scenario.irr}</div>
              <div className="text-xs text-[#2C3E35]/60">MOIC: {scenario.moic}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Risk Factors */}
      {displayBrief.riskFactors && (
        <section className="bg-white border border-[#1B4332]/10 p-8">
          <div className="flex items-center gap-2 mb-6">
            <AlertCircle className="h-5 w-5 text-[#B8956B]" />
            <h2 className="font-serif text-2xl text-[#1B4332]">Risk Factors</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {(displayBrief.riskFactors as {
              category: string
              description: string
              mitigation: string
              severity: 'low' | 'medium' | 'high'
            }[]).map((risk, index) => (
              <div key={index} className="border-l-2 border-[#B8956B]/30 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-[#1B4332]">{risk.category}</span>
                  <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 ${
                    risk.severity === 'low' ? 'bg-green-50 text-green-600' :
                    risk.severity === 'medium' ? 'bg-amber-50 text-amber-600' :
                    'bg-red-50 text-red-600'
                  }`}>
                    {risk.severity} Risk
                  </span>
                </div>
                <p className="text-sm text-[#2C3E35]/70 mb-2">{risk.description}</p>
                <p className="text-xs text-[#B8956B]">
                  <span className="font-medium">Mitigation:</span> {risk.mitigation}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Due Diligence Status */}
      <section className="bg-[#1B4332] text-[#FAF9F6] p-8 rounded-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-[#B8956B]" />
            <h2 className="font-serif text-2xl">Due Diligence Status</h2>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-[0.15em] text-[#B8956B] mb-1">Completion</div>
            <div className="text-3xl font-light text-[#B8956B]">{displayBrief.dueDiligence?.completion || '85%'}</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {dueDiligenceAreas.map((area, index) => (
            <div key={index} className="bg-white/5 border border-[#B8956B]/20 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-white/80">{area.category}</span>
                <span className={`text-[10px] uppercase tracking-wider ${
                  area.status === 'completed' ? 'text-green-400' : 'text-amber-400'
                }`}>
                  {area.status}
                </span>
              </div>
              <ul className="space-y-1">
                {area.items.slice(0, 3).map((item, i) => (
                  <li key={i} className="text-[10px] text-white/60 flex items-start gap-1">
                    <div className="w-1 h-1 bg-[#B8956B] rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs text-white/60 pt-6 border-t border-[#B8956B]/20">
          <span>Legal Counsel: {displayBrief.dueDiligence?.legalCounsel || 'Anjarwalla & Khanna'}</span>
          <span>Tax Advisor: {displayBrief.dueDiligence?.taxAdvisor || 'Deloitte Kenya'}</span>
          <span>Environmental: {displayBrief.dueDiligence?.environmental || 'ERM East Africa'}</span>
          <span>Last Updated: {displayBrief.dueDiligence?.lastUpdated || '2026-03-20'}</span>
        </div>
      </section>

      {/* Investment Terms & Timeline */}
      {displayBrief.investmentTerms && (
        <section className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white border border-[#1B4332]/10 p-8">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="h-5 w-5 text-[#B8956B]" />
              <h2 className="font-serif text-2xl text-[#1B4332]">Investment Terms</h2>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-[#1B4332]/10">
                <span className="text-sm text-[#2C3E35]/70">Structure</span>
                <span className="font-medium text-[#1B4332] text-sm">{displayBrief.investmentTerms.structure}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[#1B4332]/10">
                <span className="text-sm text-[#2C3E35]/70">Minimum Investment</span>
                <span className="font-medium text-[#B8956B] text-sm">
                  ${(displayBrief.investmentTerms.minimumInvestment / 1000000).toFixed(1)}M
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[#1B4332]/10">
                <span className="text-sm text-[#2C3E35]/70">Target Raise</span>
                <span className="font-medium text-[#1B4332] text-sm">
                  ${(displayBrief.investmentTerms.targetRaise / 1000000).toFixed(1)}M
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[#1B4332]/10">
                <span className="text-sm text-[#2C3E35]/70">Investor Qualification</span>
                <span className="font-medium text-[#1B4332] text-sm text-right max-w-[60%]">
                  {displayBrief.investmentTerms.investorQualification}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[#1B4332]/10">
                <span className="text-sm text-[#2C3E35]/70">Governance</span>
                <span className="font-medium text-[#1B4332] text-sm text-right max-w-[60%]">
                  {displayBrief.investmentTerms.governance}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[#1B4332]/10">
                <span className="text-sm text-[#2C3E35]/70">Reporting</span>
                <span className="font-medium text-[#1B4332] text-sm text-right max-w-[60%]">
                  {displayBrief.investmentTerms.reporting}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#1B4332]/10 p-8">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="h-5 w-5 text-[#B8956B]" />
              <h2 className="font-serif text-2xl text-[#1B4332]">Timeline</h2>
            </div>

            <div className="space-y-4">
              {Object.entries(displayBrief.investmentTerms.timeline).map(([key, date], index) => (
                <div key={key} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#B8956B]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium text-[#B8956B]">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-[#1B4332] capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-xs text-[#2C3E35]/60">
                      {new Date(date as string).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Confidentiality Notice */}
      <section className="bg-amber-50 border border-amber-200 p-6">
        <div className="flex items-start gap-3">
          <Lock className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-amber-800 mb-2">Confidentiality Notice</h3>
            <p className="text-sm text-amber-700/80 leading-relaxed">
              This investment brief is strictly confidential and intended solely for the named recipient. 
              The information contained herein constitutes proprietary and commercially sensitive material. 
              Any reproduction, distribution, or disclosure to third parties without prior written consent 
              is strictly prohibited. This is not an offer to sell or a solicitation of an offer to buy any 
              securities. Past performance is not indicative of future results. Investment involves 
              substantial risk including possible loss of principal.
            </p>
          </div>
        </div>
      </section>

      {/* Action Footer */}
      <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#1B4332]/10">
        <Link 
          href="/investor-portal/briefs"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[#1B4332]/60 hover:text-[#B8956B] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Briefs
        </Link>
        
        <div className="flex gap-3">
          <button className="inline-flex items-center gap-2 border border-[#1B4332]/20 text-[#1B4332] px-4 py-2 text-[11px] uppercase tracking-[0.1em] hover:border-[#B8956B] hover:text-[#B8956B] transition-colors">
            <Download className="h-4 w-4" />
            Download PDF
          </button>
          <Link 
            href="/contact?subject=investment-inquiry"
            className="inline-flex items-center gap-2 bg-[#1B4332] text-white px-6 py-2 text-[11px] uppercase tracking-[0.1em] hover:bg-[#2D5A47] transition-colors"
          >
            <Briefcase className="h-4 w-4" />
            Express Interest
          </Link>
        </div>
      </footer>
    </div>
  )
}