// app/united-arab-emirates/asset-classes/industrial/page.tsx
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
  Package,
} from 'lucide-react'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'UAE Industrial Real Estate Investment — Warehouses, Logistics & Free Zones | Murivest',
  description:
    'Institutional industrial real estate advisory across the UAE. JAFZA, Dubai Industrial City, KIZAD, and Dubai South warehouse and logistics acquisitions. Prime yields 10–14%. Conflict-free advisory for sovereign funds, family offices and institutional investors.',
  keywords: [
    'UAE industrial real estate investment',
    'Dubai industrial property investment',
    'Jebel Ali warehouse investment',
    'JAFZA property advisory',
    'KIZAD industrial real estate',
    'Dubai South logistics investment',
    'UAE warehouse yields',
    'industrial property Dubai advisory',
    'UAE free zone industrial property',
    'institutional industrial investment UAE',
  ],
  openGraph: {
    title: 'UAE Industrial Real Estate — Institutional Investment Advisory | Murivest',
    description:
      'Institutional-grade analysis of UAE industrial and logistics investment: JAFZA, KIZAD, Dubai South, yield analysis, WAULT assessment, and capital allocation strategy.',
    url: 'https://murivest.com/united-arab-emirates/asset-classes/industrial',
    siteName: 'Murivest Global',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UAE Industrial Real Estate Investment | Murivest',
    description:
      'JAFZA, KIZAD, and Dubai South industrial advisory — warehouse acquisition, build-to-suit development and free zone investment for institutional capital.',
  },
  alternates: {
    canonical: 'https://murivest.com/united-arab-emirates/asset-classes/industrial',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'UAE Industrial Real Estate Investment | Murivest',
      description:
        'Institutional framework for capital allocation to UAE industrial and logistics real estate. Market intelligence, free zone analysis, demand drivers, WAULT assessment, and investment advisory.',
      url: 'https://murivest.com/united-arab-emirates/asset-classes/industrial',
      publisher: {
        '@type': 'Organization',
        name: 'Murivest Global',
        url: 'https://murivest.com',
      },
    },
    {
      '@type': 'RealEstateAgent',
      name: 'Murivest — UAE Industrial & Logistics Advisory',
      url: 'https://murivest.com/united-arab-emirates/asset-classes/industrial',
      description: 'Institutional industrial and logistics real estate advisory across the UAE — JAFZA, KIZAD, Dubai Industrial City, Dubai South, and Sharjah',
      areaServed: ['Jebel Ali', 'Dubai Industrial City', 'Dubai South', 'KIZAD Abu Dhabi', 'Sharjah', 'Ajman'],
      knowsAbout: [
        'Industrial Real Estate',
        'Warehouse Investment',
        'Logistics Property',
        'Free Zone Advisory',
        'Build-to-Suit Development',
        'Cold Chain Real Estate',
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
          name: 'Industrial',
          item: 'https://murivest.com/united-arab-emirates/asset-classes/industrial',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are typical industrial property yields in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Prime Grade A industrial assets in JAFZA yield 10–12% gross. Dubai Industrial City (DIC) offers 11–13% gross. Dubai South — the emerging logistics corridor — commands 12–15% gross for well-specified modern stock. Net yields after service charges and maintenance run 8–11% for institutional-grade assets with long WAULT. The yield premium over Dubai office (250–400bps) reflects the liquidity discount, but disciplined sub-market selection materially compresses this gap.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is JAFZA and why is it important for industrial investment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Jebel Ali Free Zone (JAFZA) is the world\'s largest single free zone by area and the UAE\'s most significant industrial investment corridor. It hosts 8,700+ companies from 120+ countries, sits adjacent to Jebel Ali Port (the world\'s 9th-busiest by container volume at 14.5M TEUs annually), and benefits from the only government-guaranteed cargo handling commitment in the region. Grade A industrial vacancy in JAFZA is consistently below 4%, creating structural upward pressure on rents and acquisition values.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can foreign investors own industrial property in the UAE?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Foreign investors can own industrial assets in UAE free zones with 100% foreign ownership, full profit repatriation, and no personal income tax. In designated onshore freehold zones, non-GCC investors can also acquire industrial property subject to DED and municipality approvals. Lease structures of 25–99 years are common for industrial land in non-freehold areas and are bankable for debt financing purposes. Free zone structures (JAFZA, KIZAD, DAFZA, SAIF Zone) provide the clearest institutional ownership framework.',
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
  { value: '10–14%', label: 'Prime Industrial Gross Yield' },
  { value: '<4%', label: 'JAFZA Grade A Vacancy' },
  { value: '14.5M TEU', label: 'Jebel Ali Annual Port Volume' },
]

const whyUaePoints = [
  {
    title: 'Jebel Ali — The Logistics Anchor of the Middle East',
    description:
      'Jebel Ali Port handles 14.5M TEUs annually — the 9th-busiest container port globally — and is the only port in the world with a government-guaranteed cargo handling commitment. Industrial assets within JAFZA\'s catchment benefit from a captive occupier base of 8,700+ multinational companies that cannot easily relocate.',
    icon: Globe,
    gradient: 'from-[#0D1A25]/25 via-[#1A2E45]/10 to-[#D5DCE8]',
  },
  {
    title: 'Operation 300bn — Government Industrial Mandate',
    description:
      'The UAE\'s Operation 300bn industrial strategy targets AED 300B in manufacturing sector GDP by 2031 — up from AED 133B in 2021. This is not aspirational policy: AED 44B in annual government industrial investment is translating directly into occupier demand for modern, well-specified industrial and logistics real estate across all seven emirates.',
    icon: TrendingUp,
    gradient: 'from-[#0D1F10]/25 via-[#1B3A18]/10 to-[#D5E5D8]',
  },
  {
    title: 'E-Commerce Growth Compressing Industrial Vacancy',
    description:
      'UAE e-commerce is growing at 23% annually — one of the fastest rates in the world. Last-mile logistics demand is fundamentally reshaping the occupier mix in Dubai South, Sharjah, and DIC. Purpose-built e-fulfilment facilities are delivering sub-24-hour delivery economics that are driving premium rents 15–25% above general-purpose warehouse stock.',
    icon: Package,
    gradient: 'from-[#251A0D]/25 via-[#4A3510]/10 to-[#EDE0D0]',
  },
  {
    title: 'Power Infrastructure — The New Industrial Differentiator',
    description:
      'As data centres, EV manufacturing, and advanced manufacturing compete for industrial land, power availability and grid reliability have become primary site selection criteria. UAE industrial zones consistently rank in the top 5 globally for power infrastructure reliability — a structural advantage over competing logistics hubs in South Asia and Africa.',
    icon: Zap,
    gradient: 'from-[#1F1A0D]/25 via-[#3A3010]/10 to-[#E5E0D0]',
  },
]

const investmentCase = [
  {
    title: 'Long WAULT from Investment-Grade Tenants',
    detail:
      'Institutional industrial assets in JAFZA and KIZAD are typically leased to multinational corporations under 5–15 year terms with annual rent escalations. Weighted average unexpired lease terms (WAULT) of 8–12 years are common for marketed assets, providing income visibility that most other UAE real estate classes cannot match.',
    icon: Shield,
  },
  {
    title: 'Yield Premium Over Office (250–400bps)',
    detail:
      'Prime JAFZA industrial assets yield 10–12% gross versus 7–9% for DIFC Grade A office. This 250–400bps premium compensates for lower liquidity but is increasingly tested as institutional capital — previously office-heavy in UAE allocations — rotates into industrial. Compression is structurally justified and creates a timing argument for early allocation.',
    icon: TrendingUp,
  },
  {
    title: 'Build-to-Suit — Locking In Returns Before Construction',
    detail:
      'UAE industrial development permits build-to-suit (BTS) structures where a corporate occupier pre-commits to a 10–20 year lease before construction begins. BTS developments deliver yields on cost of 12–17%, significantly above stabilised acquisition yields, with substantially de-risked income from day one of completion. Murivest originates BTS mandates across JAFZA, DIC, and Dubai South.',
    icon: Building2,
  },
  {
    title: 'Cold Chain — The Highest-Yield Sub-Sector',
    detail:
      'Temperature-controlled logistics facilities are estimated to be 40% undersupplied relative to UAE demand across food, pharmaceutical, and retail cold chain. Purpose-built cold store assets command rents 35–55% above ambient-temperature equivalents and attract pharmaceutical and food logistics tenants on 7–10 year leases. Net yields on cold chain development are consistently the highest in the UAE industrial sector.',
    icon: Zap,
  },
]

const marketIntelligence: Record<string, string> = {
  primeGrossYield: '10–14% (JAFZA–Dubai South)',
  gradeAVacancy: '<4% (JAFZA)',
  averageGradeARent: 'AED 35–65 PSF/yr',
  typicalWAULT: '8–12 years (institutional)',
  portVolume: '14.5M TEU (Jebel Ali)',
  freeZoneCompanies: '8,700+ (JAFZA alone)',
  operationalPipeline: '5M sqm by 2026',
  ecommerceGrowth: '+23% YoY (UAE)',
}

const subMarkets = [
  {
    market: 'JAFZA — Jebel Ali',
    mandate: 'Core',
    rent: 'AED 45–65 PSF/yr',
    occ: '96%+',
    yield: '10–12% gross',
    note: 'World\'s largest single free zone. Port adjacency. Sub-4% vacancy.',
  },
  {
    market: 'Dubai Industrial City',
    mandate: 'Core+',
    rent: 'AED 30–48 PSF/yr',
    occ: '93–96%',
    yield: '11–13% gross',
    note: '560 km² planned industrial hub. 550+ manufacturers. Strong SME demand base.',
  },
  {
    market: 'Dubai South',
    mandate: 'Value-Add',
    rent: 'AED 25–42 PSF/yr',
    occ: '85–92%',
    yield: '12–15% gross',
    note: 'Expo 2020 legacy. Al Maktoum airport adjacency. Fastest-growing logistics corridor.',
  },
  {
    market: 'KIZAD — Abu Dhabi',
    mandate: 'Core+',
    rent: 'AED 28–45 PSF/yr',
    occ: '90–94%',
    yield: '10–12% gross',
    note: 'Khalifa Port adjacency. 150+ companies. Government-backed development programme.',
  },
  {
    market: 'Sharjah Industrial',
    mandate: 'Core+',
    rent: 'AED 18–32 PSF/yr',
    occ: '91–95%',
    yield: '12–14% gross',
    note: 'Highest yield relative to rent. SAIF Zone. Strong manufacturing demand. Dubai border proximity.',
  },
  {
    market: 'Ajman Free Zone',
    mandate: 'Value-Add',
    rent: 'AED 14–24 PSF/yr',
    occ: '88–92%',
    yield: '13–16% gross',
    note: 'Highest yields in the Northern Emirates. 5,000+ licensees. Liquidity discount applies.',
  },
]

const expertiseSections = [
  {
    title: 'Market Overview',
    body: 'The UAE industrial and logistics market is bifurcated between JAFZA — an institutionally mature, port-anchored free zone commanding the lowest vacancy in the GCC — and a series of emerging corridors (Dubai South, DIC, KIZAD) where newer stock is absorbing structural demand growth from e-commerce, manufacturing, and cold chain operators. Each corridor requires distinct underwriting assumptions, lease structure analysis, and exit route modelling.',
  },
  {
    title: 'Current Trends',
    body: 'Three trends are reshaping UAE industrial occupier demand in 2025: (1) Near-shoring of manufacturing from South Asia to UAE free zones, driven by US tariff uncertainty and supply chain resilience priorities; (2) Advanced manufacturing and EV component production requiring higher power density and specialist infrastructure; (3) E-fulfilment centre demand generating premium rents for multi-temperature facilities adjacent to urban population centres.',
  },
  {
    title: 'Buyer & Occupier Demand',
    body: 'Multinational logistics operators (DHL, DB Schenker, Agility, Aramex), global e-commerce platforms, pharmaceutical distributors, and food and beverage manufacturers are the primary demand drivers. Institutional investors — infrastructure funds, logistics REITs, sovereign-linked vehicles — are all actively competing for JAFZA and KIZAD core assets. Competition for Grade A stock with long WAULT is intensifying, creating a structural argument for development mandates over stabilised acquisitions.',
  },
  {
    title: 'Investment Opportunities',
    body: 'Whole-asset acquisitions in JAFZA (core, 10-12% gross), build-to-suit development mandates in Dubai South (12-15% yield on cost), cold chain facility development or acquisition (14-18% yield on cost), multi-let industrial estate platforms (11-13% gross, DIC), and sale-leaseback transactions with corporate occupiers are the principal formats active in 2025. Murivest maintains a live pipeline across all formats.',
  },
  {
    title: 'Risk Considerations',
    body: 'Key risks include: global trade disruption reducing port throughput and JAFZA occupier demand; oversupply in the mid-market warehouse segment (Dubai South 2026 pipeline is material); obsolescence risk for older ambient-temperature stock as modern specification becomes a tenant prerequisite; and lease renewal risk for single-tenant assets with sub-3-year WAULT. All risks are quantified and stress-tested in Murivest\'s pre-acquisition investment committee presentations.',
  },
  {
    title: 'Typical Returns',
    body: 'Stabilised JAFZA core: 10–12% gross initial yield, 5-year levered IRR 12–15%. DIC core+: 11–13% gross, 5-year levered IRR 13–17%. Dubai South value-add / BTS: 12–15% yield on cost, 5-year levered IRR 16–21%. Cold chain development: 14–18% yield on cost, 5-year levered IRR 18–25%. All IRR estimates assume 55–60% LTV financing at EIBOR + 175–225bps. Individual assets will vary.',
  },
  {
    title: 'Market Outlook',
    body: 'The UAE industrial and logistics market will experience sustained structural demand growth through 2030. Operation 300bn, near-shoring momentum, and Al Maktoum International Airport\'s capacity expansion to 260M passengers (creating the world\'s largest airport hub and a second, structurally distinct logistics corridor) provide multi-year underwriting visibility. Supply discipline in JAFZA is strong. The near-term risk concentration is in the Dubai South mid-market warehouse segment, where 2025–26 pipeline delivery requires careful yield assumption calibration.',
  },
]

const opportunities = [
  {
    location: 'JAFZA, Jebel Ali',
    type: 'Grade A Logistics Complex',
    highlights: [
      '52,000 sqm — single-tenant asset',
      '12-year WAULT — investment-grade multinational',
      'Port-adjacent, direct customs corridor',
      'Net yield: 9.8% — off-market opportunity',
    ],
    yieldNote: 'Price on Request — NDA required',
    mandate: 'Core',
  },
  {
    location: 'Dubai Industrial City',
    type: 'Multi-Let Industrial Estate',
    highlights: [
      '18 units across 24,000 sqm',
      'Diversified tenant covenant — 94% occupied',
      'AED 38 PSF average passing rent',
      'Gross yield: 12.1% — 3-year reversionary upside',
    ],
    yieldNote: 'Available for institutional acquisition',
    mandate: 'Core+',
  },
  {
    location: 'Dubai South',
    type: 'Build-to-Suit Cold Chain Facility',
    highlights: [
      '15,000 sqm — multi-temperature specification',
      'E-commerce anchor pre-committed (15-year lease)',
      'Yield on cost: 14.5% projected',
      'Development advisory mandate available',
    ],
    yieldNote: 'Development opportunity — select partners only',
    mandate: 'Value-Add',
  },
]

const faqs = [
  {
    q: 'Is UAE industrial real estate a good investment in 2025?',
    a: "UAE industrial and logistics real estate is one of the strongest risk-adjusted return opportunities in the global industrial sector. Prime JAFZA assets yield 10–12% gross — 250–400bps above equivalent European logistics — with structural demand drivers including Operation 300bn, e-commerce growth at 23% annually, and Jebel Ali Port's position as the region's irreplaceable logistics anchor. Vacancy in Grade A stock is below 4%, structurally supporting rents and acquisition values.",
  },
  {
    q: 'What are typical industrial property yields in Dubai?',
    a: "Prime Grade A industrial assets in JAFZA yield 10–12% gross. Dubai Industrial City (DIC) offers 11–13% gross. Dubai South — the emerging logistics corridor — commands 12–15% gross for well-specified modern stock. Net yields after service charges and maintenance run 8–11% for institutional-grade assets with long WAULT. The yield premium over Dubai office (250–400bps) reflects a liquidity discount that is structurally compressing as more institutional capital allocates to the sector.",
  },
  {
    q: 'What is JAFZA and why is it important for industrial investors?',
    a: "Jebel Ali Free Zone (JAFZA) is the world's largest single free zone by area and the UAE's most significant industrial investment corridor. It hosts 8,700+ companies from 120+ countries, adjacent to Jebel Ali Port — the world's 9th-busiest container port at 14.5M TEUs annually. Grade A industrial vacancy in JAFZA is consistently below 4%, creating structural upward pressure on rents. Institutional investors value JAFZA for its irreplaceable port adjacency, government-backed infrastructure, and the diversity of its occupier base, which eliminates single-sector demand concentration risk.",
  },
  {
    q: 'Can foreign investors own industrial property in the UAE?',
    a: "Yes. Foreign investors can own industrial assets in UAE free zones (JAFZA, KIZAD, DAFZA, SAIF Zone) with 100% foreign ownership, full profit repatriation, and zero personal income tax. In designated onshore freehold zones, non-GCC investors can acquire industrial property subject to DED and municipality approvals. Lease structures of 25–99 years are common for industrial land in non-freehold areas and are bankable for debt financing purposes. Free zone structures provide the most straightforward institutional ownership framework.",
  },
  {
    q: 'What is KIZAD and how does it compare to JAFZA?',
    a: "Khalifa Industrial Zone Abu Dhabi (KIZAD) is the Abu Dhabi equivalent of JAFZA — an integrated industrial and logistics zone adjacent to Khalifa Port, the first semi-automated container terminal in the Middle East. KIZAD hosts 150+ companies across heavy industry, light manufacturing, and logistics. Rents are 15–25% lower than JAFZA, reflecting the less-developed occupier ecosystem, but yields are competitive at 10–12% gross. For investors seeking Abu Dhabi sovereign backing with port adjacency, KIZAD is the primary institutional target.",
  },
  {
    q: 'What is Operation 300bn and how does it affect industrial real estate?',
    a: "Operation 300bn is the UAE's national industrial strategy — a government programme targeting AED 300B in manufacturing sector GDP by 2031, up from AED 133B in 2021. AED 44B annually in government industrial investment is allocated to the strategy, including infrastructure upgrades, free zone expansion, and occupier incentives. The direct real estate impact is an increase in manufacturing and logistics occupier demand across JAFZA, DIC, KIZAD, and Dubai South. Investors who understand Operation 300bn's sector-specific targeting (food processing, pharmaceuticals, advanced technology, clean energy) can position assets ahead of the demand curve.",
  },
  {
    q: 'What are typical lease terms for UAE industrial properties?',
    a: "UAE industrial leases typically run 3–15 years for Grade A stock. Institutional-quality assets attract 5–15 year leases from multinational occupiers. Build-to-suit facilities command 10–20 year initial terms. Annual rent escalations of 3–5% are standard. Service charge structures vary significantly between free zone and onshore assets — JAFZA assets carry government-managed infrastructure maintenance at fixed rates, while DIC and Dubai South assets are subject to RERA-regulated service charges. WAULT (weighted average unexpired lease term) is the primary income metric and typically runs 8–12 years for marketed institutional assets.",
  },
  {
    q: 'How does e-commerce growth affect UAE industrial real estate demand?',
    a: "UAE e-commerce is growing at 23% annually — among the fastest globally — and is directly driving demand for two types of industrial real estate: large-format e-fulfilment centres (50,000–200,000 sqm) adjacent to Jebel Ali and Dubai South, and urban last-mile delivery hubs (2,000–10,000 sqm) within 5 km of residential population centres in Dubai and Abu Dhabi. Purpose-built e-fulfilment facilities command rents 15–25% above general-purpose warehouse stock and attract anchor tenants (Amazon, Noon, Namshi) on 10–15 year leases. This structural demand shift is the primary argument for new industrial development mandates over stabilised acquisitions.",
  },
  {
    q: 'What is a build-to-suit industrial investment and how does it work?',
    a: "A build-to-suit (BTS) transaction is one in which a developer builds a purpose-specified industrial facility for a pre-committed occupier under a long-term lease (typically 10–20 years) agreed before construction begins. The investor finances construction in exchange for the lease commitment — eliminating lease-up risk entirely. BTS development yields on cost in UAE free zones currently range from 12–17%, significantly above stabilised acquisition yields. Murivest advises investors on BTS origination, occupier pre-commitment structuring, construction contract management, and long-term asset management strategy.",
  },
  {
    q: 'What due diligence is required for UAE industrial property acquisitions?',
    a: "Institutional due diligence for UAE industrial acquisitions should cover: lease covenant analysis for all tenants (financial strength, business continuity, sector outlook); WAULT and rent reversion modelling against sub-market benchmarks; structural survey including floor loading capacity, clear height, dock doors, and power supply specifications; title verification and land lease or freehold status confirmation; service charge history and forecast; environmental assessment (particularly for assets with prior industrial occupiers); free zone authority compliance (JAFZA, KIZAD, DAFZA); and exit liquidity analysis including comparable transaction evidence. Murivest coordinates full due diligence advisory and IC-standard reporting.",
  },
  {
    q: 'What is the outlook for UAE industrial property vacancy rates?',
    a: "Grade A industrial vacancy in JAFZA is expected to remain below 5% through 2027 — the pipeline of new supply in the free zone is structurally constrained by limited land availability adjacent to the port. Dubai South faces near-term vacancy pressure from 5M sqm of pipeline delivery in 2025–26, which will compress yields in the mid-market warehouse segment. This bifurcation creates a clear investment framework: core allocation to JAFZA (supply-constrained, low vacancy), core+ to DIC (stable demand, managed supply), and value-add to Dubai South (pipeline risk priced into yields, 12–15% gross for patient capital).",
  },
  {
    q: 'How does Jebel Ali Port affect industrial real estate values?',
    a: "Jebel Ali Port is the economic anchor of JAFZA and the primary demand driver for the UAE's entire industrial corridor. At 14.5M TEUs annually, it handles approximately 60% of MENA's ocean freight and is the world's largest man-made port. Industrial assets within JAFZA's customs corridor benefit from direct port access, which eliminates import and export handling costs that external facilities must bear. This operational cost advantage is capitalized into rents and values — JAFZA assets command 20–35% rent premiums over equivalent non-port-adjacent stock. The port's ongoing expansion to 22.4M TEU capacity by 2030 will reinforce this structural advantage.",
  },
  {
    q: 'What are the main industrial free zones in the UAE for investment?',
    a: "The principal industrial free zones for institutional investment are: JAFZA (Jebel Ali, Dubai) — the largest and most liquid; KIZAD (Abu Dhabi) — sovereign-backed, port-adjacent, Khalifa Port anchor; Dubai Industrial City (DIC) — largest planned industrial hub in the UAE; SAIF Zone (Sharjah) — highest yields, strong SME demand; Ajman Free Zone — Northern Emirates, most competitive rents; Hamriyah Free Zone (Sharjah) — port access, growing occupier base; and Fujairah Free Zone — east coast logistics, Indian Ocean trade. Each zone has distinct regulatory frameworks, ownership structures, and occupier demand profiles that require specialist underwriting.",
  },
  {
    q: 'What financing is available for UAE industrial property acquisitions?',
    a: "UAE industrial acquisitions are financed through conventional bank debt and Islamic structures (Ijara, Murabaha). LTVs for stabilised free zone assets typically range from 50–65% with UAE banks; DEWA-adjacent and government-leased assets attract the highest LTVs. EIBOR-linked rates are standard for AED-denominated debt. Green and sustainability-linked loans are available at 15–35bps discounts for LEED-certified or solar-equipped industrial assets. Development finance for BTS mandates typically requires pre-leasing commitment of 50–75% of GLA before drawdown. International banks (HSBC, Standard Chartered, BNP Paribas) are active in the institutional segment alongside UAE banks.",
  },
  {
    q: 'What is the difference between Grade A and Grade B industrial warehouse stock?',
    a: "Grade A industrial stock in the UAE is defined by: clear height above 10 metres (typically 12–16m for modern logistics); column spacing of 24m or wider; floor loading capacity of 5 tonnes per sqm minimum; dock-height loading doors (1 per 1,000 sqm minimum); ESFR sprinkler systems; LED lighting with 200 lux minimum; dedicated truck yard depth of 35 metres or more; and connection to high-capacity power supply (minimum 500 kVA per unit). Grade B stock falls short on one or more of these criteria. Institutional investors exclusively target Grade A — Grade B assets face obsolescence risk as tenants upgrade to modern specification and command yields 150–250bps higher to compensate.",
  },
  {
    q: 'How does cold chain logistics real estate differ as an investment?',
    a: "Cold chain facilities — temperature-controlled warehouses serving food, pharmaceutical, and retail cold chain operators — are a distinct sub-sector within UAE industrial investment. Rents command a 35–55% premium over ambient-temperature equivalents, reflecting the higher construction cost (AED 1,800–2,500 per sqm versus AED 800–1,200 for standard warehouses). The UAE is estimated to be 40% undersupplied in cold chain capacity relative to demand. Occupiers — pharmaceutical distributors, food logistics operators, airline catering suppliers — sign longer leases (7–10 years) due to high fit-out investment. Net yields on stabilised cold chain assets are 1–2% above equivalent ambient-temperature stock.",
  },
  {
    q: "What is Dubai South's industrial investment case?",
    a: "Dubai South is a 200 km² master-planned development anchored by Al Maktoum International Airport — the future world's largest airport targeting 260M annual passengers at full build-out. The Logistics District and Industrial Area are purpose-built for air cargo, e-commerce fulfilment, and advanced manufacturing. Rents are currently 20–30% below JAFZA, creating a yield premium of 12–15% gross for patient capital. Near-term risk includes pipeline supply delivery in 2025–26. Long-term structural demand — driven by airport cargo growth, Expo City activation, and the aviation MRO cluster — maKsh Dubai South the strongest capital appreciation argument in UAE industrial over a 7–10 year hold.",
  },
  {
    q: 'Can institutional investors from outside the UAE invest in UAE industrial assets?',
    a: "Yes, and many of the world's largest logistics REITs, infrastructure funds, and sovereign wealth vehicles are active UAE industrial investors. Cross-border structures typically use UAE-registered SPV companies holding the industrial asset, with equity held offshore (BVI, Cayman, Guernsey) for institutional investors. Free zone companies allow 100% foreign-owned holding structures. All income and capital can be freely repatriated. UAE double tax treaties with key investor jurisdictions (UK, US, India, Singapore, Germany) govern withholding tax treatment. Murivest coordinates cross-border structuring advisory alongside our acquisition and due diligence mandate.",
  },
  {
    q: 'What is the typical exit strategy for a UAE industrial investment?',
    a: "Exit strategies for UAE industrial assets fall into three categories: (1) Private treaty sale to another institutional investor — the most common route for JAFZA core assets with long WAULT; (2) Portfolio aggregation and REIT placement — applicable once a portfolio reaches AED 500M+ in scale; (3) Sale-and-leaseback execution — selling to an investor while retaining occupation under a long-term lease, releasing capital for operational deployment. Expected exit liquidity for JAFZA core assets is 6–12 months. Dubai South and DIC assets require 12–24 months. Cold chain assets have a specialist buyer pool — Murivest pre-qualifies buyers before marketing begins.",
  },
  {
    q: 'What taxes apply to industrial real estate investment in the UAE?',
    a: "UAE industrial investment is subject to: 5% VAT on rent and sale proceeds (input VAT recovery available for businesses registered for VAT); 9% corporate income tax on taxable income above AED 375,000 (effective June 2023); no capital gains tax; no personal income tax; no withholding tax on dividends. Free zone entities meeting qualifying activity criteria may claim 0% CIT on qualifying income. Transfer fees on property transactions range from 2–4% depending on the emirate and asset type. Municipal fees apply in some jurisdictions. Murivest co-ordinates tax structuring advisory with appropriate UAE tax counsel as part of every acquisition mandate.",
  },
  {
    q: 'How does Murivest source off-market industrial opportunities in the UAE?',
    a: "Murivest maintains direct relationships with the major UAE industrial asset owners — JAFZA operators, family-office landlords, listed REITs, and corporate occupiers considering sale-leaseback transactions — which provide early visibility of assets not available through public channels. Approximately 70% of significant UAE industrial transactions complete off-market. Our pipeline is maintained continuously and shared exclusively with clients under an active advisory mandate. We do not list industrial assets publicly, and we do not represent sellers — ensuring our recommendations are driven exclusively by our client's investment mandate.",
  },
  {
    q: "What is Murivest's fee structure for UAE industrial advisory?",
    a: "Murivest operates on a fixed advisory retainer plus a success fee on transaction completion. The retainer covers mandate origination, sub-market analysis, target identification, due diligence co-ordination, and investment committee support. The success fee is a percentage of transaction value, agreed and disclosed before mandate commencement. We do not accept fees from sellers, developers, or free zone authorities — eliminating all conflicts of interest. Minimum engagement size for direct advisory is USD 5M in equity commitment.",
  },
]

// ─── Page Component ───────────────────────────────────────────────────────────

export default function IndustrialPage() {
  return (
    <main className="bg-[#FAF9F6] text-[#1A1A1A] font-body antialiased selection:bg-[#1B4332] selection:text-white overflow-x-hidden">
      <Script
        id="schema-industrial"
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
            <Link href="/united-arab-emirates" className="hover:text-[#1B4332] transition-colors">
              UAE
            </Link>
            <Link href="/united-arab-emirates/asset-classes" className="hover:text-[#1B4332] transition-colors">
              Asset Classes
            </Link>
            <Link href="#expertise" className="hover:text-[#1B4332] transition-colors">
              Expertise
            </Link>
            <Link href="#opportunities" className="hover:text-[#1B4332] transition-colors">
              Opportunities
            </Link>
            <Link href="#faq" className="hover:text-[#1B4332] transition-colors">
              FAQ
            </Link>
            <Link
              href="/united-arab-emirates/contact"
              className="px-5 py-2.5 bg-[#1B4332] text-white text-sm hover:bg-[#142d23] transition-colors"
            >
              Contact
            </Link>
          </nav>
          {/* Mobile CTA */}
          <Link
            href="/united-arab-emirates/contact"
            className="md:hidden px-4 py-2 bg-[#1B4332] text-white text-xs tracking-wide"
          >
            Contact
          </Link>
        </div>
      </header>

      {/* ── Breadcrumb ───────────────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-24 md:pt-28">
        <nav className="flex flex-wrap items-center gap-1.5 text-xs text-[#8A8A8A]" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#1B4332] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/united-arab-emirates" className="hover:text-[#1B4332] transition-colors">
            UAE
          </Link>
          <span>/</span>
          <Link href="/united-arab-emirates/asset-classes" className="hover:text-[#1B4332] transition-colors">
            Asset Classes
          </Link>
          <span>/</span>
          <span className="text-[#1B4332]">Industrial</span>
        </nav>
      </div>

      {/* ══════════════════════════════ HERO ════════════════════════════════ */}
      <section className="relative min-h-[88vh] md:min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#060F08] via-[#0D1F10] to-[#1B4332]" />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 79px, #FAF9F6 79px, #FAF9F6 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, #FAF9F6 79px, #FAF9F6 80px)',
          }}
        />
        {/* Radial gold accent */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 80% 20%, #B8956B 0%, transparent 55%)',
          }}
        />
        {/* Diagonal industrial accent */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #FAF9F6 0px, #FAF9F6 1px, transparent 1px, transparent 60px)',
          }}
        />

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-36 pb-0 w-full">
          <div className="max-w-4xl pb-16 md:pb-24">
            <SectionLabel text="Asset Class Deep Dive — Industrial & Logistics" />
            <h1 className="font-display text-[40px] md:text-[62px] lg:text-[78px] leading-[1.02] text-white mb-7 md:mb-8">
              UAE Industrial Real Estate — Where Global Trade Demands Institutional Capital
            </h1>
            <p className="text-base md:text-xl text-white/65 leading-relaxed max-w-3xl mb-10 md:mb-12">
              Jebel Ali handles 14.5 million containers annually. JAFZA vacancy is below 4%. Operation 300bn is
              deploying AED 44B per year into manufacturing infrastructure. E-commerce is growing at 23%. The
              structural case for UAE industrial real estate is not a projection — it is already in the data. Most
              institutional portfolios are still underweight.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                href="#opportunities"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1B4332] text-sm font-medium tracking-wide hover:bg-[#FAF9F6] transition-colors"
                style={{ minHeight: 48 }}
              >
                View Industrial Pipeline
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

      {/* ═══════════════════════ WHY UAE INDUSTRIAL ═════════════════════════ */}
      <section className="py-24 md:py-36 lg:py-44 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel text="Structural Demand Drivers" />
          <h2 className="font-display text-[30px] md:text-[42px] lg:text-[50px] leading-[1.06] text-[#1A1A1A] mb-4 max-w-3xl">
            Why UAE Industrial Outperforms Every EMEA Logistics Market on a Risk-Adjusted Basis
          </h2>
          <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed max-w-2xl mb-12 md:mb-16">
            Four structural drivers — not cyclical factors — create a durable demand floor under UAE industrial real
            estate that no comparable market in the EMEA region can replicate.
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
                    <Icon
                      className="w-10 h-10 text-[#1A1A1A]/20 group-hover:text-[#1B4332]/30 transition-colors"
                      strokeWidth={1}
                    />
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
          {/* Sticky intro */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <SectionLabel text="Investment Thesis" />
            <h2 className="font-display text-[30px] md:text-[42px] lg:text-[48px] leading-[1.06] text-[#1A1A1A] mb-6">
              The Case for Institutional Industrial Allocation
            </h2>
            <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed mb-6">
              UAE industrial real estate offers a yield premium, income durability, and structural demand visibility
              that are underappreciated by institutional allocators still weighted toward office and residential. The
              confluence of port infrastructure, government industrial strategy, and e-commerce growth is not a
              temporary cycle — it is the foundation of a multi-decade demand thesis.
            </p>
            <p className="text-sm text-[#4A4A4A] leading-relaxed mb-8">
              Murivest underwrites every industrial mandate using WAULT analysis, sub-market vacancy modelling,
              tenant covenant assessment, and stress-tested exit scenarios — not headline yield figures from
              marketing brochures.
            </p>
            <Link
              href="/united-arab-emirates/contact"
              className="inline-flex items-center gap-2 text-sm text-[#1B4332] border border-[#1B4332]/20 px-5 py-3 hover:bg-[#1B4332] hover:text-white hover:border-[#1B4332] transition-all"
            >
              Request Industrial Research
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>

          {/* Case grid */}
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
            UAE Industrial Market Intelligence
          </h2>
          <p className="text-sm text-[#4A4A4A] leading-relaxed mb-12 max-w-xl">
            Market data underpinning Murivest advisory mandates. All metrics reflect prime-corridor, Grade A
            industrial and logistics stock.
          </p>

          {/* KPI Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-10">
            {Object.entries(marketIntelligence).map(([key, val]) => (
              <div key={key} className="bg-[#FAF9F6] border border-[#1A1A1A]/6 p-5 md:p-6">
                <p className="font-display text-xl md:text-2xl text-[#1B4332] mb-1 leading-tight">{val}</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#8A8A8A] leading-relaxed">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())}
                </p>
              </div>
            ))}
          </div>

          {/* Sub-market table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#1A1A1A]/8">
                  <th className="text-left text-[10px] uppercase tracking-[0.18em] text-[#8A8A8A] pb-3 pr-4 font-normal">
                    Sub-Market
                  </th>
                  <th className="text-left text-[10px] uppercase tracking-[0.18em] text-[#8A8A8A] pb-3 pr-4 font-normal whitespace-nowrap">
                    Mandate Type
                  </th>
                  <th className="text-left text-[10px] uppercase tracking-[0.18em] text-[#8A8A8A] pb-3 pr-4 font-normal whitespace-nowrap">
                    Passing Rent
                  </th>
                  <th className="text-left text-[10px] uppercase tracking-[0.18em] text-[#8A8A8A] pb-3 pr-4 font-normal">
                    Occupancy
                  </th>
                  <th className="text-left text-[10px] uppercase tracking-[0.18em] text-[#8A8A8A] pb-3 pr-4 font-normal whitespace-nowrap">
                    Gross Yield
                  </th>
                  <th className="text-left text-[10px] uppercase tracking-[0.18em] text-[#8A8A8A] pb-3 font-normal hidden lg:table-cell">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A1A1A]/5">
                {subMarkets.map((row) => (
                  <tr key={row.market} className="hover:bg-[#FAF9F6] transition-colors">
                    <td className="py-4 pr-4 font-display text-base text-[#1A1A1A] whitespace-nowrap">
                      {row.market}
                    </td>
                    <td className="py-4 pr-4">
                      <span
                        className={`text-[10px] font-medium px-2 py-1 uppercase tracking-wider border whitespace-nowrap ${
                          row.mandate === 'Core'
                            ? 'bg-[#1B4332]/10 text-[#1B4332] border-[#1B4332]/15'
                            : row.mandate === 'Core+'
                            ? 'bg-[#B8956B]/10 text-[#8A6B3A] border-[#B8956B]/20'
                            : 'bg-[#3A1A1A]/10 text-[#6A3A2A] border-[#6A3A2A]/20'
                        }`}
                      >
                        {row.mandate}
                      </span>
                    </td>
                    <td className="py-4 pr-4 text-[#4A4A4A] whitespace-nowrap">{row.rent}</td>
                    <td className="py-4 pr-4 text-[#4A4A4A]">{row.occ}</td>
                    <td className="py-4 pr-4 font-medium text-[#1B4332] whitespace-nowrap">{row.yield}</td>
                    <td className="py-4 text-xs text-[#8A8A8A] hidden lg:table-cell max-w-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[11px] text-[#8A8A8A] mt-5">
            Source: Murivest Research & Advisory, H2 2025. Grade A prime stock only. Individual assets vary. Not
            investment advice.
          </p>
        </div>
      </section>

      {/* ════════════════════════ SECTOR EXPERTISE ══════════════════════════ */}
      <section id="expertise" className="py-24 md:py-36 lg:py-44 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel text="Sector Expertise" />
          <h2 className="font-display text-[30px] md:text-[42px] lg:text-[50px] leading-[1.06] text-[#1A1A1A] mb-4 max-w-3xl">
            Industrial & Logistics — Institutional Depth
          </h2>
          <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed max-w-2xl mb-12">
            Murivest&apos;s industrial advisory practice covers every format — from single-unit JAFZA acquisition
            through to build-to-suit development mandates and cold chain portfolio construction.
          </p>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {expertiseSections.map((item) => (
              <div key={item.title} className="flex gap-5">
                <Building2 className="w-5 h-5 text-[#B8956B] mt-1 shrink-0" strokeWidth={1.5} />
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
                Featured UAE Industrial Investments
              </h2>
            </div>
            <Link
              href="/united-arab-emirates/listings/off-market"
              className="inline-flex items-center gap-2 text-sm text-[#4A4A4A] border border-[#1A1A1A]/10 px-5 py-3 hover:border-[#1B4332] hover:text-[#1B4332] transition-colors shrink-0"
            >
              Full Off-Market Pipeline
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {opportunities.map((opp) => (
              <div
                key={opp.location}
                className="group flex flex-col bg-[#FAF9F6] border border-[#1A1A1A]/6 hover:border-[#1B4332]/25 hover:shadow-xl transition-all"
              >
                {/* Visual */}
                <div className="h-44 bg-gradient-to-br from-[#060F08]/40 via-[#0D2010]/20 to-[#C8D8C8] flex items-center justify-center relative overflow-hidden">
                  <Building2
                    className="w-16 h-16 text-[#1A1A1A]/10 group-hover:text-[#1B4332]/20 transition"
                    strokeWidth={0.75}
                  />
                  {/* Subtle grid lines */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(90deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 40px), repeating-linear-gradient(0deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 40px)',
                    }}
                  />
                  <span className="absolute top-4 left-4 text-[9px] uppercase tracking-[0.18em] bg-[#1B4332] text-white px-2.5 py-1.5">
                    {opp.type}
                  </span>
                  <span
                    className={`absolute top-4 right-4 text-[9px] uppercase tracking-[0.15em] text-white px-2.5 py-1.5 ${
                      opp.mandate === 'Core'
                        ? 'bg-[#1B4332]'
                        : opp.mandate === 'Core+'
                        ? 'bg-[#B8956B]'
                        : 'bg-[#6A3A20]'
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
                    <span className="text-xs text-[#1B4332] font-medium leading-snug">{opp.yieldNote}</span>
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

          {/* Off-market bar */}
          <div className="mt-8 p-5 md:p-6 bg-[#FAF9F6] border border-[#1A1A1A]/6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1A1A1A] mb-1">Off-Market Industrial Pipeline — UAE</p>
                <p className="text-xs text-[#8A8A8A]">
                  Murivest maintains a live pipeline of JAFZA, DIC, KIZAD, and Dubai South industrial assets not
                  available through public channels. Shared exclusively with clients under advisory mandate.
                </p>
              </div>
              <Link
                href="/united-arab-emirates/contact"
                className="inline-flex items-center justify-center gap-2 text-sm text-[#1B4332] border border-[#1B4332]/30 px-6 py-3 hover:bg-[#1B4332] hover:text-white transition-colors whitespace-nowrap"
              >
                Access Pipeline
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
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
                How Murivest Advises on UAE Industrial
              </h2>
              <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed mb-6">
                Industrial investment is operationally and technically specific in ways that generalist advisors
                cannot adequately assess. Floor loading, clear heights, dock-door ratios, power supply, WAULT
                composition, and free zone regulatory compliance are specialist disciplines — not footnotes in a
                valuation report.
              </p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed mb-8">
                Murivest advises exclusively for buyers. We have no listing relationships, no developer mandates,
                and no free zone authority affiliations that would compromise the independence of our analysis or
                recommendations.
              </p>
              <Link
                href="/united-arab-emirates/contact"
                className="inline-flex items-center gap-2 text-sm text-[#1B4332] border border-[#1B4332]/20 px-5 py-3 hover:bg-[#1B4332] hover:text-white hover:border-[#1B4332] transition-all"
              >
                Arrange a Consultation
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: 'Acquisition Advisory',
                  desc: 'Buy-side advisory from sub-market target selection through technical due diligence, pricing, lease review, and transaction completion. Single assets and portfolio mandates.',
                },
                {
                  title: 'Build-to-Suit Development',
                  desc: 'Origination of BTS mandates — identifying development sites, securing corporate occupier pre-commitments, structuring the development agreement, and managing the construction and lease-up process.',
                },
                {
                  title: 'Cold Chain Advisory',
                  desc: 'Specialist advisory for cold store and temperature-controlled logistics acquisitions and development. Demand analysis, tenant covenant review, technical specification assessment, and yield benchmarking.',
                },
                {
                  title: 'Sale-Leaseback Structuring',
                  desc: 'Advisory for corporate occupiers seeking to release capital from owner-occupied industrial assets while retaining operational control under long-term lease structures.',
                },
                {
                  title: 'Free Zone Strategy',
                  desc: 'Selection, comparison, and structuring of industrial investments across JAFZA, KIZAD, DAFZA, SAIF Zone, Hamriyah, Fujairah, and Ajman — covering regulatory frameworks, ownership structures, and tax implications.',
                },
                {
                  title: 'Portfolio Construction',
                  desc: 'Multi-asset portfolio advisory for institutional allocators targeting UAE industrial exposure — mandate design, sub-market diversification, WAULT management, and staged acquisition execution.',
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
            UAE Industrial Investment — Institutional Answers
          </h2>
          <p className="text-sm text-[#4A4A4A] leading-relaxed mb-12 max-w-2xl">
            Prepared for institutional investors, not casual browsers. Every answer addresses the operational,
            financial, or regulatory substance of the question — not its surface.
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
              Allocate to UAE Industrial with Institutional Rigour
            </h2>
            <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-2xl mb-8">
              Murivest advises sovereign wealth funds, infrastructure funds, logistics REITs, and family offices on
              UAE industrial acquisitions, build-to-suit development mandates, and portfolio construction. Our
              process begins with your capital — not with available inventory.
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
                href="/united-arab-emirates/asset-classes"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
                style={{ minHeight: 48 }}
              >
                Compare Asset Classes
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="space-y-3.5">
              {[
                { label: 'Engagement type', value: 'Buy-side acquisition and development advisory' },
                { label: 'Scope', value: 'Sub-market analysis through to transaction closing' },
                { label: 'Capital minimum', value: 'USD 5M+ equity for direct advisory engagement' },
                { label: 'Conflicts', value: 'None — no seller, developer, or free zone affiliations' },
                { label: 'Confidentiality', value: 'NDA available before pipeline access' },
                { label: 'Sub-markets covered', value: 'JAFZA, DIC, Dubai South, KIZAD, Sharjah, Ajman' },
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
          </div>
        </div>
      </section>

      {/* ─── Related Pages ────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-[#FAF9F6] border-t border-[#1A1A1A]/6">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A] mb-6">Related Advisory</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'UAE Asset Classes Overview', href: '/united-arab-emirates/asset-classes' },
              { label: 'Logistics Advisory', href: '/united-arab-emirates/asset-classes/logistics' },
              { label: 'Dubai Advisory', href: '/united-arab-emirates/dubai' },
              { label: 'Abu Dhabi Advisory', href: '/united-arab-emirates/abu-dhabi' },
              { label: 'Ajman Industrial', href: '/united-arab-emirates/ajman' },
              { label: 'Fujairah Logistics', href: '/united-arab-emirates/fujairah' },
              { label: 'Capital Markets', href: '/united-arab-emirates/capital-markets' },
              { label: 'Sale-Leaseback', href: '/united-arab-emirates/capital-markets/sale-leaseback' },
              { label: 'Off-Market Pipeline', href: '/united-arab-emirates/listings/off-market' },
              { label: 'UAE Investment Guides', href: '/united-arab-emirates/investment-guides' },
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