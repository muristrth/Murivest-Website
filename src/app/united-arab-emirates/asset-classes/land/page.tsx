// app/united-arab-emirates/asset-classes/land/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  TrendingUp,
  Shield,
  Globe,
  Zap,
  MapPin,
} from 'lucide-react'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'UAE Development Land Investment — Freehold Land Acquisition & Advisory | Murivest',
  description:
    'Institutional development land advisory across the UAE. Freehold plot acquisition, GFA rights analysis, master plan compliance, joint venture structuring, and land banking strategy across Dubai, Abu Dhabi, and Ras Al Khaimah. Conflict-free advisory for sovereign funds, family offices and developers.',
  keywords: [
    'UAE development land investment',
    'Dubai freehold land for sale',
    'Dubai development plot advisory',
    'MBR City land investment',
    'Dubai South development land',
    'UAE land banking strategy',
    'Abu Dhabi freehold land',
    'GFA rights UAE land',
    'Dubai Creek Harbour land',
    'institutional land investment UAE',
  ],
  openGraph: {
    title: 'UAE Development Land Investment — Institutional Advisory | Murivest',
    description:
      'Freehold plot acquisition, GFA analysis, master plan advisory, and joint venture structuring across Dubai, Abu Dhabi and Ras Al Khaimah — for sovereign funds, family offices and institutional developers.',
    url: 'https://murivest.com/united-arab-emirates/asset-classes/land',
    siteName: 'Murivest Global',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UAE Development Land Investment | Murivest',
    description:
      'Freehold land acquisition, GFA uplift advisory, and land banking strategy across Dubai, Abu Dhabi and RAK — for institutional capital and private developers.',
  },
  alternates: {
    canonical: 'https://murivest.com/united-arab-emirates/asset-classes/land',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'UAE Development Land Investment | Murivest',
      description:
        'Institutional framework for development land acquisition, GFA analysis, land banking, and joint venture structuring across the UAE.',
      url: 'https://murivest.com/united-arab-emirates/asset-classes/land',
      publisher: {
        '@type': 'Organization',
        name: 'Murivest Global',
        url: 'https://murivest.com',
      },
    },
    {
      '@type': 'RealEstateAgent',
      name: 'Murivest — UAE Land & Development Advisory',
      url: 'https://murivest.com/united-arab-emirates/asset-classes/land',
      description:
        'Institutional development land advisory across Dubai, Abu Dhabi, Ras Al Khaimah — freehold plot acquisition, GFA rights, master plan compliance, joint venture structuring.',
      areaServed: [
        'Dubai',
        'MBR City',
        'Dubai South',
        'Dubai Creek Harbour',
        'Abu Dhabi',
        'Yas Island',
        'Ras Al Khaimah',
        'Al Marjan Island',
      ],
      knowsAbout: [
        'Development Land Acquisition',
        'GFA Rights Analysis',
        'Master Plan Advisory',
        'Land Banking',
        'Joint Venture Structuring',
        'Freehold Land UAE',
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://murivest.com' },
        { '@type': 'ListItem', position: 2, name: 'UAE', item: 'https://murivest.com/united-arab-emirates' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Asset Classes',
          item: 'https://murivest.com/united-arab-emirates/asset-classes',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Land',
          item: 'https://murivest.com/united-arab-emirates/asset-classes/land',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can foreigners buy land in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. Non-UAE nationals can purchase freehold land in designated freehold zones across Dubai, including MBR City, Business Bay, Dubai South, Dubai Creek Harbour, Palm Jumeirah, Jumeirah Village Circle, and Discovery Gardens. Ownership is registered with the Dubai Land Department (DLD) and provides perpetual title with full rights to develop, lease, sell, or mortgage the plot. Outside designated freehold zones, long-term musataha leases of 25–50 years are the standard instrument for foreign investors and are bankable for debt financing. Abu Dhabi and Ras Al Khaimah have their own freehold designation frameworks with expanding zones.",
          },
        },
        {
          '@type': 'Question',
          name: 'What is a GFA ratio and why does it matter for UAE land investment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "GFA (Gross Floor Area) ratio — also expressed as FAR (Floor Area Ratio) or Plot Ratio — is the multiplier that determines how much total built-up area is permitted on a given plot. A 10,000 sqm plot with a GFA ratio of 4.0 can accommodate 40,000 sqm of built area. In Dubai, GFA ratios are assigned by Dubai Municipality and the relevant master developer (Emaar, Nakheel, Meraas) based on zoning classification. GFA rights are the primary determinant of a land plot's development value. Murivest's land advisory includes independent GFA verification, zoning classification review, and assessment of potential GFA uplift through rezoning applications — a critical step that most buyers and their agents overlook.",
          },
        },
        {
          '@type': 'Question',
          name: 'What are typical land price appreciation rates in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Prime development land in Dubai appreciated 18–26% on average in 2024, with select corridors such as MBR City and Dubai Creek Harbour recording transactions 30–40% above prior-year comparables. Appreciation is non-linear: it is driven by specific catalysts — infrastructure delivery (metro extensions, road completions), new master plan releases (GFA uplift), and anchor development announcements by Emaar, Nakheel, or government entities. Murivest's land banking advisory is built around identifying plots positioned ahead of these catalysts, not after they have been priced into the market.",
          },
        },
      ],
    },
  ],
}

// ─── Internal Components ──────────────────────────────────────────────────────

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="font-body text-[11px] font-semibold tracking-[0.25em] uppercase text-[#B8956B] mb-4 md:mb-5">
      {text}
    </p>
  )
}

// ─── Page Data ────────────────────────────────────────────────────────────────

const heroStats = [
  { value: 'AED 95B+', label: 'UAE Land Transaction Volume (2024)' },
  { value: '18–26%', label: 'Prime Land Appreciation (2024)' },
  { value: '0%', label: 'Capital Gains Tax on Disposal' },
]

const whyUaePoints = [
  {
    title: 'Structural Supply Scarcity in Freehold Zones',
    description:
      "Freehold land available to foreign investors represents less than 3% of Dubai's total land area. Government-controlled release schedules through master developers (Emaar, Nakheel, Meraas, Dubai Holding) mean that new plot supply is both finite and managed — structurally unlike the open land markets of most comparable cities. Scarcity is not a narrative; it is encoded into the planning framework.",
    icon: Shield,
    gradient: 'from-[#1A1207]/40 via-[#3A2810]/15 to-[#EDE5D0]',
  },
  {
    title: 'Infrastructure Delivery Creates Predictable Appreciation Events',
    description:
      "Dubai's infrastructure investment programme — metro extensions, major road completions, utilities delivery — creates measurable, time-bound appreciation events for proximate land holdings. The Route 2020 metro expansion increased land values within 800 metres by 22–35% in the 36 months preceding opening. Infrastructure banking — acquiring land ahead of announced connectivity delivery — is one of the highest-conviction return strategies in the UAE real estate toolkit.",
    icon: Zap,
    gradient: 'from-[#0A1F0D]/30 via-[#1A3A18]/12 to-[#D0E0D2]',
  },
  {
    title: 'Master Plan Clarity — GFA Rights as a Value Engine',
    description:
      "Unlike many emerging markets where planning permissions are opaque or inconsistent, Dubai's master plan framework is enforced through a clear hierarchy: Dubai Municipality zoning classifications assign permitted uses and GFA ratios. Murivest identifies plots where existing GFA ratios are below market potential and where rezoning applications — supported by surrounding development precedent — have a high probability of GFA uplift. This is a repeatable, institutional-grade value creation strategy.",
    icon: Globe,
    gradient: 'from-[#0D1825]/30 via-[#1A2E45]/12 to-[#D5DCE8]',
  },
  {
    title: 'Population Growth Sustaining Multi-Decade Demand',
    description:
      "The UAE population grew 3.4% annually over the past decade — one of the fastest sustained population growth rates in the world. Dubai's population is projected to reach 5.8M by 2040 under the Dubai 2040 Urban Master Plan, from 3.6M today. This structural growth creates persistent demand for residential, commercial, and mixed-use development that underpins the long-term thesis for development land in every correctly positioned corridor.",
    icon: TrendingUp,
    gradient: 'from-[#1F1A0D]/30 via-[#3A3010]/12 to-[#E5E0D0]',
  },
]

const investmentCase = [
  {
    title: 'Appreciation-Led Returns in Supply-Constrained Corridors',
    detail:
      "Development land in Dubai's prime corridors does not generate rental income — it generates capital appreciation. The investment thesis is straightforward: acquire in a supply-constrained location ahead of infrastructure or master plan catalysts; hold through the value creation event; exit to a developer seeking entitled, serviced land. Total returns of 40–120% over 3–5 year hold periods are achieved in correctly selected corridors. The selection, not the execution, is where value is created or destroyed.",
    icon: TrendingUp,
  },
  {
    title: 'GFA Uplift — Rezoning as an Active Return Driver',
    detail:
      "GFA uplift — the process of applying for and obtaining an increase in permitted gross floor area on a plot — is one of the most powerful return levers available in Dubai land investment. A successful rezoning from GFA 2.0 to GFA 4.0 on a 10,000 sqm plot effectively doubles the plot's development capacity and, by extension, its market value. Murivest advises on GFA uplift feasibility assessment, application strategy, Dubai Municipality engagement, and the delta between rezoning cost and value uplift.",
    icon: Building2,
  },
  {
    title: 'Infrastructure Banking — Positioning Ahead of Connectivity',
    detail:
      'The single most reliable price appreciation trigger in UAE development land is confirmed, funded infrastructure delivery. Metro stations, major interchange completions, Etihad Rail connectivity, and utility infrastructure delivery all create measurable, time-bound value events. Murivest maintains a live infrastructure delivery calendar and maps each confirmed project to adjacent land plots, scoring appreciation potential by timing, proximity, and current pricing relative to post-delivery comparables.',
    icon: Zap,
  },
  {
    title: 'Joint Venture Development — Land as Equity Contribution',
    detail:
      "For investors holding well-located plots, a joint venture with a licensed developer offers a third option beyond outright sale or independent development: contribute the land as equity at agreed valuation in exchange for a percentage of the completed project's gross development value. JV structures eliminate construction risk for the land owner while delivering returns significantly above outright land sale. Murivest advises on JV partner selection, valuation negotiation, agreement structuring, and performance monitoring.",
    icon: Globe,
  },
]

const marketIntelligence: Record<string, string> = {
  primeLandAppreciation: '18–26% YoY (2024)',
  freeholdAvailability: '<3% of Dubai land area',
  planningTimeline: '6–18 months (Dubai Municipality)',
  institutionalPlotSize: '5,000–50,000+ sqm',
  gfaRatioRange: '2.0–6.0 FAR (zone-dependent)',
  landTransactionVolume: 'AED 95B+ (2024)',
  capitalGainsTax: '0% on disposal',
  transferFee: '4% (Dubai DLD)',
}

const subMarkets = [
  {
    market: 'MBR City / Meydan',
    mandate: 'Core+',
    priceRange: 'AED 800–1,500 PSF',
    gfa: '4.0–6.0 FAR',
    apprecn: '22–35% (2024)',
    note: 'Ultra-premium mixed-use. Emaar masterplan. Highest GFA in freehold zones.',
  },
  {
    market: 'Dubai Creek Harbour',
    mandate: 'Core+',
    priceRange: 'AED 450–750 PSF',
    gfa: '3.5–5.5 FAR',
    apprecn: '18–28% (2024)',
    note: 'Waterfront masterplan. Tower 2 of Creek Tower anchor. Strong appreciation trajectory.',
  },
  {
    market: 'Dubai South Aviation District',
    mandate: 'Value-Add',
    priceRange: 'AED 180–380 PSF',
    gfa: '2.0–3.5 FAR',
    apprecn: '14–22% (2024)',
    note: 'Al Maktoum airport adjacency. Long-hold thesis. 5–8 year appreciation horizon.',
  },
  {
    market: 'Yas South, Abu Dhabi',
    mandate: 'Value-Add',
    priceRange: 'AED 280–480 PSF',
    gfa: '2.5–4.0 FAR',
    apprecn: '16–24% (2024)',
    note: 'Final Yas Island freehold phase. Aldar masterplan. Strong developer JV demand.',
  },
  {
    market: 'Al Marjan Island, RAK',
    mandate: 'Value-Add',
    priceRange: 'AED 350–700 PSF',
    gfa: '3.0–5.0 FAR',
    apprecn: '28–45% (2024)',
    note: 'Wynn Resort catalyst (2027). Fastest appreciation in Northern Emirates.',
  },
  {
    market: 'JVC / Al Furjan',
    mandate: 'Core',
    priceRange: 'AED 360–580 PSF',
    gfa: '3.0–4.5 FAR',
    apprecn: '12–18% (2024)',
    note: 'Established corridor. Liquid exit. Suitable for residential development pipeline.',
  },
]

const expertiseSections = [
  {
    title: 'Market Overview',
    body: "The UAE development land market is bifurcated between two distinct investment profiles: Dubai's prime freehold corridors — where supply scarcity, GFA ratios, and infrastructure delivery create institutional-grade appreciation — and the emerging masterplan zones of Abu Dhabi and Ras Al Khaimah, where government-backed catalysts (Wynn Resort, Yas expansion, ADNOC campus) are driving early-mover returns for correctly positioned capital. Murivest covers both profiles with equal depth.",
  },
  {
    title: 'Land Identification & Off-Market Sourcing',
    body: "The most attractive land opportunities in the UAE do not appear in public listings. Motivated sellers — developers managing balance sheets, family estates requiring liquidity, corporate entities rationalising non-core assets — transact privately. Murivest maintains direct relationships with these counterparties across all major UAE corridors, providing clients with early access to plots that would be competed away in an open market process.",
  },
  {
    title: 'GFA Rights Verification & Uplift Advisory',
    body: "GFA verification is non-negotiable due diligence for any UAE land acquisition. Murivest conducts independent GFA checks against Dubai Municipality records — not vendor representations — and assesses the probability and quantum of GFA uplift through rezoning applications. In cases where existing GFA is below market potential, Murivest models the uplift timeline, application cost, and value delta as a core component of the investment case.",
  },
  {
    title: 'Master Plan & Infrastructure Analysis',
    body: "Understanding a plot's position relative to the Dubai 2040 Urban Master Plan, relevant emirate master plans, and confirmed infrastructure delivery schedules is the foundation of land investment analysis. Murivest maps every target plot against: (1) current and proposed zoning classification; (2) surrounding development density and land use precedent; (3) confirmed and funded infrastructure delivery within a 1 km radius; and (4) master developer activity indicating sub-market activation.",
  },
  {
    title: 'Joint Venture Structuring',
    body: "Land-for-equity JVs require careful structuring to protect the land contributor's interests. Critical negotiation points include: land valuation methodology; developer selection criteria and experience benchmarking; profit distribution waterfall; construction guarantee mechanisms; project governance and approval rights; and exit options if the developer underperforms. Murivest co-ordinates JV structuring advisory with specialist UAE real estate legal counsel.",
  },
  {
    title: 'Risk Considerations',
    body: "UAE development land investment carries distinct risks that income-producing assets do not: planning approval uncertainty (6–18 months, outcome not guaranteed); GFA ratio risk (assigned rights may be lower than vendor representations); infrastructure delivery delay risk (metro completions have historically run 12–24 months late); market liquidity risk (large plots have smaller buyer pools than residential units); and construction risk if the investor proceeds to development. Murivest's pre-acquisition analysis stress-tests all scenarios against a conservative planning and market assumption set.",
  },
  {
    title: 'Typical Returns',
    body: "Land banking in prime Dubai corridors (MBR City, Creek Harbour): 18–30% total appreciation per annum, 3–5 year hold. Infrastructure-banking mandates (pre-connectivity acquisition): 25–50% total return over 2–4 year hold. GFA uplift advisory: 35–70% uplift in plot value on successful rezoning (12–24 month timeline). JV development: 40–80% return on contributed land value over 4–6 year development cycle. All return projections are scenario-based and assume no leverage — levered returns will be proportionally higher with commensurate risk.",
  },
  {
    title: 'Market Outlook',
    body: "The UAE development land market will remain a structural appreciation story through 2030 and beyond. Dubai 2040 Urban Master Plan is the primary policy framework — it designates five urban centres, constrains suburban sprawl, and concentrates development density in specific corridors. This top-down scarcity architecture is unprecedented in any comparable market and provides an unusually clear policy signal for land banking mandates. Al Maktoum International Airport's expansion — the single largest capital works programme in UAE history — will be the dominant land market catalyst for the next decade.",
  },
]

const opportunities = [
  {
    location: 'MBR City, Dubai',
    type: 'Mixed-Use Development Plot',
    highlights: [
      '18,000 sqm freehold — GFA 4.5 FAR',
      'Planning pre-approved — residential + retail',
      'Emaar masterplan boundary — metro within 600m',
      'Price: AED 820 PSF — below comparable sales',
    ],
    status: 'Off-Market — NDA Required',
    mandate: 'Core+',
  },
  {
    location: 'Dubai Creek Harbour',
    type: 'Waterfront Development Land',
    highlights: [
      '12,500 sqm — GFA uplift feasibility confirmed',
      'Waterfront position — mixed-use, hotel permitted',
      'Adjacent to completed infrastructure',
      'Gross development value: AED 380M (est.)',
    ],
    status: 'Price on Application',
    mandate: 'Core+',
  },
  {
    location: 'Al Marjan Island, RAK',
    type: 'Beachfront Resort Plot',
    highlights: [
      '14,000 sqm beachfront — freehold title',
      '180° sea frontage — hospitality zone designation',
      'Wynn Resort adjacency — 2027 opening catalyst',
      'Planning approval in progress — select JV partners',
    ],
    status: 'Development JV — Select Partners Only',
    mandate: 'Value-Add',
  },
]

const faqs = [
  {
    q: 'Can foreigners buy land in Dubai?',
    a: "Yes. Non-UAE nationals can purchase freehold land in designated freehold zones across Dubai — including MBR City, Business Bay, Dubai South, Dubai Creek Harbour, Palm Jumeirah, Jumeirah Village Circle, Jumeirah Golf Estates, and Discovery Gardens. Ownership is registered with the Dubai Land Department (DLD) and confers perpetual title with full rights to develop, lease, sell, or mortgage. Outside freehold zones, musataha leases of 25–50 years are the standard instrument — fully bankable and legally robust. Abu Dhabi and RAK have their own freehold designation frameworks with expanding investor zones.",
  },
  {
    q: 'What is a GFA ratio and why does it matter for land investment?',
    a: "GFA (Gross Floor Area) ratio — also expressed as FAR (Floor Area Ratio) or Plot Ratio — determines how much total built-up area is permitted on a given plot. A 10,000 sqm plot with GFA 4.0 can accommodate 40,000 sqm of built area. GFA rights are the primary determinant of a land plot's development value and vary significantly by zone, even within the same corridor. Murivest independently verifies GFA against Dubai Municipality records — not vendor representations — as a standard first step in every land due diligence process.",
  },
  {
    q: 'What are typical land price appreciation rates in Dubai?',
    a: "Prime development land in Dubai appreciated 18–26% on average in 2024, with select corridors such as MBR City and Dubai Creek Harbour recording 30–40% above prior-year comparables. Al Marjan Island in RAK, catalysed by the Wynn Resort announcement, appreciated 28–45% in the same period. Appreciation is non-linear — it is triggered by specific infrastructure delivery, master plan releases, and anchor developer announcements. Murivest's land banking advisory identifies plots positioned ahead of confirmed catalysts, not after they are priced in.",
  },
  {
    q: 'What is the Dubai 2040 Urban Master Plan and how does it affect land values?',
    a: "Dubai 2040 Urban Master Plan is the emirate's long-term spatial development framework, designating five urban centres (Deira/Bur Dubai, Business Bay/Downtown, Dubai Marina/JBR, Expo City, and Dubai Creek Harbour), protecting 60% of total land area as natural and agricultural zones, and concentrating development density in defined corridors. For land investors, the Master Plan provides three useful signals: (1) which corridors will receive future infrastructure investment; (2) where development density will increase; and (3) which areas face long-term planning restrictions. Owning land inside a designated urban centre boundary is structurally advantaged.",
  },
  {
    q: 'What is infrastructure banking in UAE real estate?',
    a: "Infrastructure banking is the strategy of acquiring development land adjacent to confirmed, funded infrastructure delivery — metro extensions, major interchanges, Etihad Rail stations, utility infrastructure — before that infrastructure is priced into land values. The principle is straightforward: infrastructure fundamentally improves a location's accessibility and development economics, and this improvement is reflected in land values when it delivers. The Route 2020 metro expansion, for example, increased land values within 800 metres by 22–35% in the 36 months preceding its 2020 opening. Murivest maps every confirmed UAE infrastructure project to adjacent land plots and scores appreciation probability by timing, proximity, and current pricing.",
  },
  {
    q: 'What planning approvals are required to develop land in Dubai?',
    a: "Development of land in Dubai requires multiple approvals. The primary workflow is: (1) Initial Approval (Concept Design) from the relevant master developer (Emaar, Nakheel, Meraas, Wasl, or DLD for non-masterplan areas); (2) NOC (No Objection Certificate) from relevant authorities — DEWA (utilities), RTA (roads), DCAA (aviation height clearance), Dubai Civil Defence (fire safety); (3) Building Permit from Dubai Municipality following detailed drawing submission; (4) Construction Permit (occupancy) upon project completion. Total timeline from concept to permit ranges 6–18 months depending on plot location, use type, and authority coordination. Murivest coordinates planning advisory and authority liaison as part of development mandates.",
  },
  {
    q: 'What is a musataha lease and how does it differ from freehold ownership?',
    a: "A musataha is an Islamic property right instrument that grants the holder the right to develop and use a plot for a defined period — typically 25–50 years — in exchange for a rental payment or upfront consideration. It is the standard instrument for non-nationals acquiring development rights in non-freehold zones in Dubai and Abu Dhabi. Musataha leases are registered with the DLD, bankable for debt financing, and transfer on disposal. The key difference from freehold is the finite tenure — musataha rights revert to the landowner on expiry. For institutional mandates, Murivest advises on residual value risk assessment and recommends freehold zones where the investment timeline warrants it.",
  },
  {
    q: 'What due diligence is required before acquiring development land in the UAE?',
    a: "Institutional land due diligence in the UAE must cover: title verification (DLD title deed, encumbrances, caveats); GFA ratio confirmation against Dubai Municipality records; master plan classification and surrounding land use; NOC status (any existing planning applications or restrictions from authority); infrastructure services confirmation (DEWA, RTA access, sewage); soil and geotechnical assessment (particularly for coastal and reclaimed land); DLD transfer fee and associated cost calculation; master developer regulations and design guidelines (critical for Emaar, Nakheel, and Meraas zones); and exit liquidity analysis including comparable transaction evidence from the preceding 12 months.",
  },
  {
    q: 'What is a GFA uplift and how does it create value?',
    a: "GFA uplift is the process of applying to Dubai Municipality for an increase in the permitted gross floor area on a plot — either through rezoning to a higher-density classification or through a variance application supported by surrounding development precedent. A successful GFA uplift from 2.0 to 4.0 on a 10,000 sqm plot doubles the buildable area and, in most cases, more than doubles the plot's market value (since the value of additional GFA is incremental, not diluted). The probability of a successful application depends on zone classification, surrounding development density, current DM policy priorities, and the quality of the submission. Murivest conducts GFA uplift feasibility assessments and, where warranted, manages the full application process.",
  },
  {
    q: 'What is a joint venture development structure for land owners?',
    a: "In a land-for-equity JV, the land owner contributes the plot at an agreed valuation as equity into a joint venture with a licensed developer. The developer contributes construction, sales, and project management expertise. Profits above the land contribution value are shared according to a pre-agreed waterfall — typically 50–70% to the developer and 30–50% to the land owner, adjusted for the relative equity contributions. JV structures allow land owners to participate in the full development upside without construction risk exposure or capital outlay for building costs. Critical negotiation points include: land valuation methodology; developer selection; construction performance guarantees; and governance rights over project decisions.",
  },
  {
    q: 'What are typical returns on UAE development land investment?',
    a: "Returns vary significantly by strategy. Land banking in prime Dubai corridors (MBR City, Dubai Creek Harbour): 18–30% annual appreciation, 3–5 year hold. Infrastructure banking mandates: 25–50% total return over 2–4 years. GFA uplift advisory: 35–70% uplift in plot value on successful rezoning (12–24 month timeline). JV development contribution: 40–80% return on contributed land value over 4–6 year development cycle. All return projections are scenario-based and unlevered. Murivest prepares stress-tested, scenario-modelled return analyses for every land acquisition recommendation presented to clients.",
  },
  {
    q: 'What taxes apply to land transactions in the UAE?',
    a: "Land transactions in the UAE are subject to: DLD transfer fee of 4% of the transaction value in Dubai (2% in Abu Dhabi) — typically split between buyer and seller; agency fees of 2% if a broker is involved; DLD administrative fees (approximately AED 4,000–20,000 depending on transaction size); VAT at 5% on commercial land transactions (residential land transfers may be exempt — advice-specific). There is no capital gains tax, no personal income tax, and no stamp duty. Corporate income tax of 9% applies to taxable income above AED 375,000 for UAE-registered entities. Free zone holding structures may offer qualifying income exemptions.",
  },
  {
    q: 'What is the minimum plot size for institutional land investment in the UAE?',
    a: "There is no regulatory minimum plot size for institutional acquisition in the UAE. However, Murivest's advisory mandate typically targets plots of 5,000 sqm and above for institutional land banking mandates — below this threshold, development economics become marginal and exit liquidity is restricted to a narrower buyer pool. For JV development mandates, minimum viable plot sizes are generally 10,000–15,000 sqm to support a development of institutional scale. For ultra-premium locations (MBR City, Dubai Creek Harbour waterfront), significantly smaller plots can support landmark boutique development at compelling economics.",
  },
  {
    q: 'Can I get a mortgage or financing to buy land in the UAE?',
    a: "Land financing in the UAE is available but subject to stricter LTV constraints than built property financing. UAE banks typically lend 40–55% LTV on freehold development plots for creditworthy borrowers — lower than the 60–70% LTV available on income-producing assets. Islamic financing structures (Ijara, Murabaha) are the most commonly used instruments. Land without confirmed planning approval typically attracts the most conservative LTV terms. Murivest co-ordinates financing advisory alongside acquisition mandates and maintains banking relationships across UAE, UK, and Singapore-domiciled lenders active in the UAE market.",
  },
  {
    q: 'How does Al Maktoum International Airport affect land values in Dubai South?',
    a: "Al Maktoum International Airport — targeting 260 million annual passengers at full build-out, making it the world's largest airport — is the single most significant infrastructure catalyst in UAE land investment for the next decade. Phase 1 of the expansion (120 million passenger capacity) is under construction with first operations targeted for 2034. Land values in the Aviation District and Logistics District of Dubai South are tracking confirmed delivery milestones. Murivest maintains a live monitoring framework for the Al Maktoum expansion and maps value creation events to specific plot corridors for forward-positioned acquisition recommendations.",
  },
  {
    q: 'Is Al Marjan Island a good land investment?',
    a: "Al Marjan Island in Ras Al Khaimah is one of the highest-conviction land investment theses in the UAE. The Wynn Resort — opening 2027 as the GCC's first integrated resort with gaming — is a structural demand catalyst that will fundamentally reposition Al Marjan's international visitor profile and underpin land values for adjacent plots for a decade. Land on Al Marjan appreciated 28–45% in 2024 — the fastest rate in any UAE submarket. Beachfront freehold plots in hospitality zones are the primary institutional target. Supply is genuinely finite, and the post-Wynn opening period will compress remaining affordable entry points significantly.",
  },
  {
    q: 'What is the difference between residential and commercial development land in the UAE?',
    a: "Residential development land is zoned for apartments, villas, or townhouses under Dubai Municipality's residential classification. Commercial development land permits office, retail, hotel, or mixed-use buildings. GFA ratios are typically higher for commercial zones in dense urban areas (4.0–6.0) versus residential suburban zones (1.5–3.0). The investment thesis differs materially: residential land is sold to housing developers with faster exit timelines; commercial land attracts institutional developers and corporate occupiers with longer development cycles and higher absolute values. Murivest advises on both, with analysis tailored to each zone classification.",
  },
  {
    q: 'How long should I expect to hold development land in the UAE?',
    a: "Hold periods depend entirely on the investment thesis. Infrastructure banking mandates — acquiring ahead of confirmed delivery — typically realise maximum returns 12–36 months after the infrastructure event (metro opening, interchange completion). This translates to a total hold of 2–5 years including acquisition lead time. GFA uplift strategies require 12–24 months for the rezoning application and typically exit to developers within 6–12 months of approval — total hold of 18–36 months. JV development mandates are the longest — 4–6 years including construction and sales programme. Murivest calibrates hold period recommendations to client capital liquidity requirements at mandate inception.",
  },
  {
    q: 'How does Murivest source off-market land in the UAE?',
    a: "Approximately 80% of significant UAE land transactions above AED 20M complete off-market. Murivest sources land through direct relationships with: family offices and private estate holding companies managing non-core land assets; corporate entities rationalising balance sheets; developers monetising surplus plots adjacent to completed projects; and government-linked entities releasing strategic sites to select investor pools. We do not publish land listings publicly. Access to our off-market pipeline requires an active advisory mandate — ensuring our sourcing capacity is deployed exclusively for clients, not marketed as a lead generation tool.",
  },
  {
    q: 'How do I submit a land opportunity to Murivest?',
    a: "Landowners, developers, and estate managers seeking to present plots for sale, joint venture, or development partnership can submit opportunities through the Murivest UAE listings platform. All submissions are reviewed by the Murivest UAE land advisory team within 48 business hours. Relevant submissions are assessed against current client mandates — where a match exists, we will contact the submitting party to progress under NDA. Murivest maintains an active acquisition pipeline across Dubai, Abu Dhabi, and RAK and is continuously seeking well-located plots in established and emerging freehold corridors.",
  },
  {
    q: "What is Murivest's fee structure for UAE land advisory?",
    a: "Murivest operates on a fixed advisory retainer plus a success fee on transaction completion, agreed in writing before mandate commencement. The retainer covers sub-market analysis, target identification, off-market sourcing, GFA verification, master plan analysis, and infrastructure assessment. The success fee is a percentage of the transaction value. We do not receive fees from sellers, developers, or planning consultants — our alignment is exclusively with the buyer. Minimum advisory engagement size is USD 5M equity commitment. All fee terms are disclosed in full before engagement.",
  },
  {
    q: 'What is the exit strategy for a UAE land investment?',
    a: "Exit strategies for UAE development land fall into four categories: (1) Outright sale to a developer or institutional investor — the most common route for prime freehold plots, with expected sale processes of 3–9 months for correctly priced stock; (2) JV development — retaining equity in the completed project in exchange for the land contribution; (3) Development and sale — proceeding to development independently or with a design-and-build contractor, then selling completed units; (4) GFA uplift and sale — maximising plot value through rezoning before disposal. Murivest prepares exit scenario analysis for every land mandate, modelling each route against time, capital requirement, and risk assumptions.",
  },
]

// ─── Page Component ───────────────────────────────────────────────────────────

export default function LandPage() {
  return (
    <main className="bg-[#FAF9F6] text-[#1A1A1A] font-body antialiased selection:bg-[#1B4332] selection:text-white overflow-x-hidden">
      <Script
        id="schema-land"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* ── Fixed Navigation ─────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#1A1A1A]/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="font-display text-xl md:text-2xl text-[#1B4332] tracking-tight">
            Murivest
          </Link>
          <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-sm text-[#4A4A4A]">
            <Link href="/united-arab-emirates" className="hover:text-[#1B4332] transition-colors">UAE</Link>
            <Link href="/united-arab-emirates/asset-classes" className="hover:text-[#1B4332] transition-colors">Asset Classes</Link>
            <Link href="#expertise" className="hover:text-[#1B4332] transition-colors">Expertise</Link>
            <Link href="/united-arab-emirates/listings" className="hover:text-[#1B4332] transition-colors">Listings</Link>
            <Link href="#faq" className="hover:text-[#1B4332] transition-colors">FAQ</Link>
            <Link
              href="/united-arab-emirates/contact"
              className="px-5 py-2.5 bg-[#1B4332] text-white text-sm hover:bg-[#142d23] transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Link href="/united-arab-emirates/contact" className="md:hidden px-4 py-2 bg-[#1B4332] text-white text-xs tracking-wide">
            Contact
          </Link>
        </div>
      </header>

      {/* ── Breadcrumb ───────────────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-24 md:pt-28">
        <nav className="flex flex-wrap items-center gap-1.5 text-xs text-[#8A8A8A]" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#1B4332] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/united-arab-emirates" className="hover:text-[#1B4332] transition-colors">UAE</Link>
          <span>/</span>
          <Link href="/united-arab-emirates/asset-classes" className="hover:text-[#1B4332] transition-colors">Asset Classes</Link>
          <span>/</span>
          <span className="text-[#1B4332]">Land</span>
        </nav>
      </div>

      {/* ══════════════════════════════ HERO ════════════════════════════════ */}
      <section className="relative min-h-[88vh] md:min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Warm earth-toned dark gradient — differentiates from industrial/hospitality */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0805] via-[#131009] to-[#1B4332]" />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 79px, #FAF9F6 79px, #FAF9F6 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, #FAF9F6 79px, #FAF9F6 80px)',
          }}
        />
        {/* Warm amber radial — land / earth quality */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{ backgroundImage: 'radial-gradient(ellipse at 65% 35%, #B8956B 0%, transparent 55%)' }}
        />
        {/* Subtle topographic lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(30deg, #FAF9F6 0px, #FAF9F6 1px, transparent 1px, transparent 50px)',
          }}
        />

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-36 pb-0 w-full">
          <div className="max-w-4xl pb-16 md:pb-24">
            <SectionLabel text="Asset Class Deep Dive — Development Land" />
            <h1 className="font-display text-[40px] md:text-[62px] lg:text-[78px] leading-[1.02] text-white mb-7 md:mb-8">
              UAE Development Land — Finite Supply, Government-Anchored Appreciation, Zero Capital Gains Tax
            </h1>
            <p className="text-base md:text-xl text-white/65 leading-relaxed max-w-3xl mb-10 md:mb-12">
              Less than 3% of Dubai&apos;s total land area is available as freehold to foreign investors.
              Government master plans create predictable appreciation events. Infrastructure delivery compounds
              returns. Al Maktoum International — the world&apos;s largest planned airport — is under
              construction. Every catalyst that moves land values in the UAE is already confirmed, funded, or
              in progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                href="/united-arab-emirates/listings"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1B4332] text-sm font-medium tracking-wide hover:bg-[#FAF9F6] transition-colors"
                style={{ minHeight: 48 }}
              >
                Browse Land Listings
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link
                href="/united-arab-emirates/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white text-sm font-medium tracking-wide hover:border-white/55 transition-colors"
                style={{ minHeight: 48 }}
              >
                Speak with an Advisor
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>

        {/* Metrics strip */}
        <div className="relative border-t border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-3 divide-x divide-white/10">
              {heroStats.map((stat) => (
                <div key={stat.label} className="py-5 md:py-7 px-4 md:px-8 first:pl-0">
                  <p className="font-display text-xl md:text-2xl text-white mb-0.5">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ WHY UAE LAND ══════════════════════════════ */}
      <section className="py-24 md:py-36 lg:py-44 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel text="Structural Investment Drivers" />
          <h2 className="font-display text-[30px] md:text-[42px] lg:text-[50px] leading-[1.06] text-[#1A1A1A] mb-4 max-w-3xl">
            Four Structural Reasons UAE Development Land Outperforms Every Other Appreciation Asset Class
          </h2>
          <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed max-w-2xl mb-12 md:mb-16">
            These are not market narratives. They are policy-anchored, data-supported structural drivers that
            create a return profile available nowhere else in the world at comparable tax efficiency.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {whyUaePoints.map((point) => {
              const Icon = point.icon
              return (
                <div
                  key={point.title}
                  className="group flex flex-col bg-white border border-[#1A1A1A]/6 hover:border-[#1B4332]/25 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`h-36 bg-gradient-to-br ${point.gradient} flex items-center justify-center`}>
                    <Icon className="w-10 h-10 text-[#1A1A1A]/20 group-hover:text-[#1B4332]/30 transition-colors" strokeWidth={1} />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="font-display text-lg text-[#1A1A1A] mb-2">{point.title}</h3>
                    <p className="text-sm text-[#4A4A4A] leading-relaxed">{point.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ INVESTMENT CASE ════════════════════════════ */}
      <section className="py-24 md:py-36 lg:py-44 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <SectionLabel text="Investment Thesis" />
            <h2 className="font-display text-[30px] md:text-[42px] lg:text-[48px] leading-[1.06] text-[#1A1A1A] mb-6">
              The Four Land Investment Strategies That Deliver Institutional Returns
            </h2>
            <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed mb-6">
              UAE development land is not a single strategy. Appreciation timelines, risk profiles, and return
              structures differ materially between land banking, GFA uplift, infrastructure positioning, and
              JV development. Murivest matches strategy to client mandate — not client mandate to available
              inventory.
            </p>
            <p className="text-sm text-[#4A4A4A] leading-relaxed mb-8">
              Every land recommendation is supported by independent GFA verification, infrastructure delivery
              calendars, planning probability assessment, and stress-tested return modelling — prepared to
              investment committee standard.
            </p>
            <Link
              href="/united-arab-emirates/contact"
              className="inline-flex items-center gap-2 text-sm text-[#1B4332] border border-[#1B4332]/20 px-5 py-3 hover:bg-[#1B4332] hover:text-white hover:border-[#1B4332] transition-all"
            >
              Request Land Research
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 md:gap-5">
            {investmentCase.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="p-5 md:p-6 bg-white border border-[#1A1A1A]/6 hover:border-[#1B4332]/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#1B4332]/10 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-[#1B4332]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg text-[#1A1A1A] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#4A4A4A] leading-relaxed">{item.detail}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ MARKET INTELLIGENCE ════════════════════════ */}
      <section className="py-24 md:py-36 lg:py-44 bg-white px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel text="Market Dashboard" />
          <h2 className="font-display text-[30px] md:text-[42px] lg:text-[50px] leading-[1.06] text-[#1A1A1A] mb-4 max-w-3xl">
            UAE Development Land Market Intelligence
          </h2>
          <p className="text-sm text-[#4A4A4A] leading-relaxed mb-12 max-w-xl">
            Institutional data anchoring every Murivest land advisory mandate. Metrics reflect prime-corridor
            freehold development plots in Dubai, Abu Dhabi, and Ras Al Khaimah.
          </p>

          {/* KPI grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-12">
            {Object.entries(marketIntelligence).map(([key, val]) => (
              <div key={key} className="bg-[#FAF9F6] border border-[#1A1A1A]/6 p-5 md:p-6">
                <p className="font-display text-xl md:text-2xl text-[#1B4332] mb-1 leading-tight">{val}</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#8A8A8A] leading-relaxed">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())}
                </p>
              </div>
            ))}
          </div>

          {/* Sub-market breakdown */}
          <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
            <table className="w-full text-sm border-collapse min-w-[680px]">
              <thead>
                <tr className="border-b border-[#1A1A1A]/8">
                  {['Sub-Market', 'Mandate', 'Price Range (PSF)', 'GFA / FAR', '2024 Appreciation', 'Notes'].map(
                    (h) => (
                      <th
                        key={h}
                        className={`text-left text-[10px] uppercase tracking-[0.15em] text-[#8A8A8A] pb-3 pr-4 font-normal ${
                          h === 'Notes' ? 'hidden lg:table-cell' : ''
                        }`}
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A1A1A]/5">
                {subMarkets.map((row) => (
                  <tr key={row.market} className="hover:bg-[#FAF9F6] transition-colors">
                    <td className="py-4 pr-4 font-display text-base text-[#1A1A1A] whitespace-nowrap">{row.market}</td>
                    <td className="py-4 pr-4">
                      <span
                        className={`text-[10px] font-medium px-2 py-1 uppercase tracking-wider border whitespace-nowrap ${
                          row.mandate === 'Core'
                            ? 'bg-[#1B4332]/10 text-[#1B4332] border-[#1B4332]/15'
                            : row.mandate === 'Core+'
                            ? 'bg-[#B8956B]/10 text-[#8A6B3A] border-[#B8956B]/20'
                            : 'bg-[#5A1A1A]/10 text-[#6A3A2A] border-[#6A3A2A]/20'
                        }`}
                      >
                        {row.mandate}
                      </span>
                    </td>
                    <td className="py-4 pr-4 text-[#4A4A4A] whitespace-nowrap">{row.priceRange}</td>
                    <td className="py-4 pr-4 text-[#4A4A4A]">{row.gfa}</td>
                    <td className="py-4 pr-4 font-medium text-[#1B4332] whitespace-nowrap">{row.apprecn}</td>
                    <td className="py-4 text-xs text-[#8A8A8A] hidden lg:table-cell max-w-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[11px] text-[#8A8A8A] mt-5">
            Source: Murivest Research & Advisory, H2 2025. Freehold development plots. GFA ratios indicative — zone-specific.
            Not investment advice. Past appreciation is not a guarantee of future returns.
          </p>
        </div>
      </section>

      {/* ════════════════════════ SECTOR EXPERTISE ══════════════════════════ */}
      <section id="expertise" className="py-24 md:py-36 lg:py-44 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel text="Advisory Expertise" />
          <h2 className="font-display text-[30px] md:text-[42px] lg:text-[50px] leading-[1.06] text-[#1A1A1A] mb-4 max-w-3xl">
            UAE Land — End-to-End Institutional Advisory
          </h2>
          <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed max-w-2xl mb-12">
            From off-market identification through GFA verification, planning strategy, JV structuring, and exit
            advisory — Murivest covers the full land investment lifecycle.
          </p>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {expertiseSections.map((item) => (
              <div key={item.title} className="flex gap-5">
                <MapPin className="w-5 h-5 text-[#B8956B] mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-xl text-[#1A1A1A] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#4A4A4A] leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ OPPORTUNITIES ═════════════════════════════ */}
      <section id="opportunities" className="py-24 md:py-36 lg:py-44 bg-white px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <SectionLabel text="Curated Opportunities" />
              <h2 className="font-display text-[30px] md:text-[42px] lg:text-[50px] leading-[1.06] text-[#1A1A1A] max-w-2xl">
                Featured UAE Land Investment Opportunities
              </h2>
            </div>
            <Link
              href="/united-arab-emirates/listings"
              className="inline-flex items-center gap-2 text-sm text-[#4A4A4A] border border-[#1A1A1A]/10 px-5 py-3 hover:border-[#1B4332] hover:text-[#1B4332] transition-colors shrink-0"
            >
              All Land Listings
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {opportunities.map((opp) => (
              <div
                key={opp.location}
                className="group flex flex-col bg-[#FAF9F6] border border-[#1A1A1A]/6 hover:border-[#1B4332]/25 hover:shadow-xl transition-all"
              >
                {/* Visual — warm earth gradient */}
                <div className="h-44 bg-gradient-to-br from-[#0A0805]/50 via-[#1A1309]/30 to-[#C8CCBA] flex items-center justify-center relative overflow-hidden">
                  <MapPin className="w-14 h-14 text-[#1A1A1A]/10 group-hover:text-[#1B4332]/20 transition" strokeWidth={0.75} />
                  {/* Topographic accent */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(30deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 35px)',
                    }}
                  />
                  <span className="absolute top-4 left-4 text-[9px] uppercase tracking-[0.18em] bg-[#1B4332] text-white px-2.5 py-1.5">
                    {opp.type}
                  </span>
                  <span
                    className={`absolute top-4 right-4 text-[9px] uppercase tracking-[0.15em] text-white px-2.5 py-1.5 ${
                      opp.mandate === 'Core' ? 'bg-[#1B4332]' : opp.mandate === 'Core+' ? 'bg-[#B8956B]' : 'bg-[#6A3A20]'
                    }`}
                  >
                    {opp.mandate}
                  </span>
                </div>

                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B] mb-3">{opp.location}</p>
                  <ul className="text-sm text-[#4A4A4A] space-y-2 mb-5 flex-1">
                    {opp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span className="text-[#B8956B] mt-1 text-xs shrink-0">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-5 border-t border-[#1A1A1A]/5 gap-3">
                    <span className="text-xs text-[#1B4332] font-medium leading-snug">{opp.status}</span>
                    <Link
                      href="/united-arab-emirates/contact"
                      className="text-xs text-[#1B4332] border border-[#1B4332]/20 px-3 py-1.5 hover:bg-[#1B4332] hover:text-white transition-colors whitespace-nowrap"
                    >
                      Request Memo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ─── Listings + Submit Property CTA strip ─────────────────────── */}
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {/* Browse all listings */}
            <div className="p-5 md:p-6 bg-[#1B4332] flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-sm font-medium text-white mb-1">Browse All UAE Land Listings</p>
                <p className="text-xs text-white/60">
                  Active freehold and leasehold development plots across Dubai, Abu Dhabi, and RAK — with GFA
                  data, master plan classification, and pricing.
                </p>
              </div>
              <Link
                href="/united-arab-emirates/listings"
                className="inline-flex items-center justify-center gap-2 text-sm bg-white text-[#1B4332] px-5 py-3 hover:bg-[#FAF9F6] transition-colors whitespace-nowrap font-medium"
              >
                View Listings
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>

            {/* Submit a property */}
            <div className="p-5 md:p-6 bg-[#FAF9F6] border border-[#1A1A1A]/8 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1A1A1A] mb-1">Submit a Land Opportunity</p>
                <p className="text-xs text-[#8A8A8A]">
                  Landowners, developers, and estate managers can submit plots for advisory review. Assessed
                  against active client mandates within 48 hours.
                </p>
              </div>
              <Link
                href="/united-arab-emirates/contact?type=submit-property"
                className="inline-flex items-center justify-center gap-2 text-sm text-[#1B4332] border border-[#1B4332]/30 px-5 py-3 hover:bg-[#1B4332] hover:text-white transition-colors whitespace-nowrap"
              >
                Submit Plot
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ ADVISORY SERVICES ═════════════════════════ */}
      <section className="py-24 md:py-36 lg:py-44 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <SectionLabel text="Advisory Services" />
              <h2 className="font-display text-[30px] md:text-[42px] lg:text-[48px] leading-[1.06] text-[#1A1A1A] mb-6">
                How Murivest Advises on UAE Development Land
              </h2>
              <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed mb-6">
                Development land is the highest-upside, highest-complexity asset class in UAE real estate.
                GFA rights, planning timelines, infrastructure positioning, JV structuring, and exit optionality
                all require specialist knowledge that generalist advisors simply do not possess.
              </p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed mb-8">
                Murivest advises exclusively for buyers and land owners — never developers, free zone
                authorities, or government land release agents that would create conflicts. Our analysis is
                prepared to institutional investment committee standard.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/united-arab-emirates/contact"
                  className="inline-flex items-center gap-2 text-sm text-[#1B4332] border border-[#1B4332]/20 px-5 py-3 hover:bg-[#1B4332] hover:text-white hover:border-[#1B4332] transition-all"
                >
                  Arrange Consultation
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
                <Link
                  href="/united-arab-emirates/contact?type=submit-property"
                  className="inline-flex items-center gap-2 text-sm text-[#4A4A4A] border border-[#1A1A1A]/15 px-5 py-3 hover:border-[#1B4332] hover:text-[#1B4332] transition-all"
                >
                  Submit a Property
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: 'Acquisition Advisory',
                  desc: 'Off-market sourcing, GFA verification, master plan analysis, infrastructure mapping, and transaction management for land acquisitions from AED 10M upwards.',
                },
                {
                  title: 'GFA Uplift & Rezoning Advisory',
                  desc: 'Feasibility assessment, application strategy, Dubai Municipality engagement, and value-delta modelling for GFA uplift opportunities on acquired or target plots.',
                },
                {
                  title: 'Infrastructure Banking',
                  desc: 'Systematic identification of plots positioned ahead of confirmed, funded infrastructure delivery — with appreciation timeline modelling and entry/exit pricing frameworks.',
                },
                {
                  title: 'Joint Venture Structuring',
                  desc: 'Partner identification, land valuation negotiation, JV agreement review, governance framework design, and performance monitoring for land-for-equity development partnerships.',
                },
                {
                  title: 'Development Feasibility',
                  desc: 'Gross development value analysis, construction cost benchmarking, planning probability assessment, and sensitivity-tested return modelling for owner-occupier development mandates.',
                },
                {
                  title: 'Land Disposal Advisory',
                  desc: 'Exit strategy selection, buyer identification, marketing process management, and transaction negotiation for landowners seeking to crystallise appreciation or recycle capital.',
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="flex gap-4 p-5 bg-white border border-[#1A1A1A]/6 hover:border-[#1B4332]/20 transition-colors"
                >
                  <span className="text-[#B8956B] mt-0.5 shrink-0 text-sm">◆</span>
                  <div>
                    <h3 className="text-sm font-medium text-[#1A1A1A] mb-1">{service.title}</h3>
                    <p className="text-xs text-[#4A4A4A] leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ FAQ ════════════════════════════════════ */}
      <section id="faq" className="py-24 md:py-36 lg:py-44 bg-white px-6 md:px-12 lg:px-20">
        <div className="max-w-[1000px] mx-auto">
          <SectionLabel text="Frequently Asked Questions" />
          <h2 className="font-display text-[30px] md:text-[42px] lg:text-[48px] leading-[1.06] text-[#1A1A1A] mb-4">
            UAE Development Land — Institutional Answers
          </h2>
          <p className="text-sm text-[#4A4A4A] leading-relaxed mb-12 max-w-2xl">
            Answers written for investors evaluating UAE land as a capital allocation decision — not for
            casual property seekers. Every answer addresses the substance of the question with the specificity
            that institutional decision-making requires.
          </p>

          <div className="space-y-0 divide-y divide-[#1A1A1A]/8">
            {faqs.map((item, idx) => (
              <details key={idx} className="group py-6">
                <summary className="flex items-start justify-between cursor-pointer list-none gap-4">
                  <span className="font-display text-lg text-[#1A1A1A] group-open:text-[#1B4332] transition-colors leading-snug pr-4">
                    {item.q}
                  </span>
                  <span className="text-2xl text-[#B8956B] group-open:rotate-45 transition-transform origin-center shrink-0 leading-none mt-0.5">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm text-[#4A4A4A] leading-relaxed max-w-3xl">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ CTA ════════════════════════════════════ */}
      <section className="py-24 md:py-36 lg:py-44 px-6 md:px-12 lg:px-20 bg-[#1B4332] text-white">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-4">Private Advisory</p>
            <h2 className="font-display text-[36px] md:text-[54px] lg:text-[62px] leading-[1.04] mb-5">
              Deploy Capital into UAE Land with Institutional Precision
            </h2>
            <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-2xl mb-8">
              Murivest advises sovereign wealth funds, family offices, and private developers on UAE land
              acquisition, GFA uplift, joint venture structuring, and portfolio exit strategy. We do not market
              land or represent sellers — our mandate is your capital, exclusively.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                href="/united-arab-emirates/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1B4332] text-sm font-medium tracking-wide hover:bg-[#FAF9F6] transition-colors"
                style={{ minHeight: 48 }}
              >
                Request a Private Consultation
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link
                href="/united-arab-emirates/listings"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
                style={{ minHeight: 48 }}
              >
                Browse Land Listings
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="space-y-3.5">
              {[
                { label: 'Engagement type', value: 'Buy-side acquisition and development advisory' },
                { label: 'Scope', value: 'Land identification through to JV or disposal completion' },
                { label: 'Capital minimum', value: 'USD 5M+ equity for direct advisory engagement' },
                { label: 'Conflicts', value: 'None — no developer, seller, or government affiliations' },
                { label: 'Submit a land opportunity', value: 'murivest.com/united-arab-emirates/contact' },
                { label: 'Sub-markets covered', value: 'Dubai, Abu Dhabi, Ras Al Khaimah, Ajman, Sharjah' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-4 bg-white/5 border border-white/8">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B8956B] mt-2 shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/45 mb-0.5">{item.label}</p>
                    <p className="text-sm text-white/75">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Submit property CTA in sidebar */}
            <div className="mt-5 p-5 bg-white/8 border border-white/15">
              <p className="text-sm font-medium text-white mb-2">Landowner or Developer?</p>
              <p className="text-xs text-white/55 mb-4">
                Submit a development plot for advisory review. Murivest assesses all submissions against live
                acquisition mandates within 48 business hours.
              </p>
              <Link
                href="/united-arab-emirates/contact?type=submit-property"
                className="inline-flex items-center gap-2 text-xs text-white border border-white/25 px-4 py-2.5 hover:bg-white hover:text-[#1B4332] transition-colors"
              >
                Submit a Land Opportunity
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Related Pages ────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-[#FAF9F6] border-t border-[#1A1A1A]/6">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A] mb-6">Related Advisory</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'UAE Listings', href: '/united-arab-emirates/listings' },
              { label: 'Off-Market Pipeline', href: '/united-arab-emirates/listings/off-market' },
              { label: 'UAE Asset Classes', href: '/united-arab-emirates/asset-classes' },
              { label: 'Mixed-Use Advisory', href: '/united-arab-emirates/asset-classes/mixed-use' },
              { label: 'Development Sites', href: '/united-arab-emirates/capital-markets/development-sites' },
              { label: 'Joint Ventures', href: '/united-arab-emirates/capital-markets/joint-ventures' },
              { label: 'Dubai Advisory', href: '/united-arab-emirates/dubai' },
              { label: 'Abu Dhabi Advisory', href: '/united-arab-emirates/abu-dhabi' },
              { label: 'Yas Island', href: '/united-arab-emirates/abu-dhabi/yas-island' },
              { label: 'UAE Investment Guides', href: '/united-arab-emirates/investment-guides' },
              { label: 'Submit a Property', href: '/united-arab-emirates/contact?type=submit-property' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-[#4A4A4A] border border-[#1A1A1A]/10 px-4 py-2 hover:border-[#1B4332] hover:text-[#1B4332] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}