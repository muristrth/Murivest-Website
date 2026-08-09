// app/united-arab-emirates/asset-classes/hospitality/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  TrendingUp,
  Shield,
  Users,
  Globe,
  Calendar,
  Star,
  Plane,
} from 'lucide-react'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'UAE Hospitality Real Estate Investment — Hotels & Serviced Apartments | Murivest',
  description:
    'Institutional hospitality investment advisory across the UAE. Hotel acquisitions, resort development, and branded serviced apartment strategies backed by Murivest market intelligence. 22M+ tourist arrivals. RevPAR above pre-pandemic peaks.',
  keywords: [
    'UAE hotel investment',
    'Dubai hotel acquisition',
    'UAE hospitality real estate',
    'Dubai hotel yield',
    'Abu Dhabi resort investment',
    'UAE serviced apartments investment',
    'hospitality real estate UAE',
    'hotel RevPAR Dubai',
    'UAE hotel market 2025',
    'institutional hotel investment UAE',
  ],
  openGraph: {
    title: 'UAE Hospitality Real Estate — Institutional Investment Advisory | Murivest',
    description:
      'Institutional-grade analysis of UAE hotel and hospitality investment: RevPAR performance, tourism pipeline, brand expansion, and capital allocation strategy across Dubai and Abu Dhabi.',
    url: 'https://murivest.com/united-arab-emirates/asset-classes/hospitality',
    siteName: 'Murivest Global',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UAE Hospitality Real Estate Investment | Murivest',
    description: 'Hotel acquisitions, resort development and serviced apartment advisory across the UAE — backed by institutional market intelligence.',
  },
  alternates: {
    canonical: 'https://murivest.com/united-arab-emirates/asset-classes/hospitality',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'UAE Hospitality Real Estate Investment | Murivest',
      description:
        'Institutional framework for capital allocation to UAE hotel and hospitality assets. Market intelligence, demand drivers, risk analysis, and investment advisory.',
      url: 'https://murivest.com/united-arab-emirates/asset-classes/hospitality',
      publisher: {
        '@type': 'Organization',
        name: 'Murivest Global',
        url: 'https://murivest.com',
      },
    },
    {
      '@type': 'RealEstateAgent',
      name: 'Murivest — UAE Hospitality Advisory',
      url: 'https://murivest.com/united-arab-emirates/asset-classes/hospitality',
      description: 'Institutional hospitality real estate advisory across the UAE',
      areaServed: ['Dubai', 'Abu Dhabi', 'Ras Al Khaimah', 'Ajman', 'Fujairah'],
      knowsAbout: ['Hotel Acquisitions', 'Resort Development', 'Serviced Apartments', 'Hospitality Investment'],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://murivest.com' },
        { '@type': 'ListItem', position: 2, name: 'UAE', item: 'https://murivest.com/united-arab-emirates' },
        { '@type': 'ListItem', position: 3, name: 'Asset Classes', item: 'https://murivest.com/united-arab-emirates/asset-classes' },
        { '@type': 'ListItem', position: 4, name: 'Hospitality', item: 'https://murivest.com/united-arab-emirates/asset-classes/hospitality' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is investing in UAE hotels profitable?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'UAE hotel investment has delivered above-average risk-adjusted returns. Prime Dubai hotels generated gross yields of 8–12% in 2024, with RevPAR 18% above pre-pandemic peaks. Structural demand from 22M+ annual tourist arrivals, corporate travel, and mega-events provides a durable income foundation.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are typical hotel yields in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Gross yields on Dubai hotel assets range from 7–9% for luxury branded hotels to 10–13% for mid-market and serviced apartment properties. Net yields after operating costs typically range from 5–8%. F1 Grand Prix and NYE weekends generate ADR premiums of 200–400% above annual averages.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can foreigners buy hotels in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Foreign investors can acquire hotel assets in designated freehold zones in Dubai and Abu Dhabi, including DIFC, Business Bay, Dubai Marina, and Jumeirah Beach Residence. Free zone structures allow 100% foreign ownership with full repatriation of capital and profits. Onshore acquisitions are possible through approved legal structures.',
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
  { value: '22M+', label: 'UAE Tourist Arrivals (2024)' },
  { value: 'AED 800+', label: 'Prime Dubai RevPAR' },
  { value: '8–12%', label: 'Gross Hotel Yields' },
]

const whyUaePoints = [
  {
    title: 'Tourism Capital of the Region',
    description:
      'Dubai ranked 4th globally for international visitor arrivals in 2024 with 22M+ tourists, surpassing Paris and New York. DTCM\'s target of 25M annual visitors by 2026 is supported by AED 30B+ in tourism infrastructure investment.',
    icon: Globe,
    gradient: 'from-[#1A2E3D]/25 via-[#2A4A60]/10 to-[#E4EAF5]',
  },
  {
    title: 'Mega-Events & Conference Economy',
    description:
      'The F1 Abu Dhabi Grand Prix, Dubai Shopping Festival, GITEX, Cityscape, Art Dubai, and rotating international conferences generate recurring seasonal demand spiKsh that structurally support ADR premiums unavailable to any other regional hospitality market.',
    icon: Calendar,
    gradient: 'from-[#2D1A12]/20 via-[#7A4A2A]/8 to-[#EDE8E0]',
  },
  {
    title: 'Luxury Brand Concentration',
    description:
      'The UAE hosts more international luxury hotel brands per capita than any other market globally. Marriott, Hilton, IHG, Accor, Hyatt, and Four Seasons all have multi-property UAE pipelines, validating the long-term brand endorsement of the market.',
    icon: Star,
    gradient: 'from-[#1A2D14]/25 via-[#2A4A20]/10 to-[#E0EDE2]',
  },
  {
    title: 'Airline Connectivity as Demand Engine',
    description:
      'Dubai International Airport is the world\'s busiest international airport by passenger volume. 100+ airlines connect Dubai to 240+ destinations. Al Maktoum International — targeting 260M annual passengers at full build-out — creates a second, structurally distinct demand corridor for Dubai South hospitality.',
    icon: Plane,
    gradient: 'from-[#2D2A1A]/20 via-[#5A502A]/8 to-[#EDE9E0]',
  },
]

const investmentCase = [
  {
    title: 'RevPAR Structural Resilience',
    detail:
      'UAE hotel RevPAR has recovered fully from COVID-19 and is now tracking above 2019 peaks. Dubai\'s top-10 luxury hotels average ADR above USD 500 — underpinned by a mix of leisure, MICE, and ultra-high-net-worth traveller demand that is not correlated with economic cycles in the way that corporate demand alone would be.',
    icon: TrendingUp,
  },
  {
    title: 'Seasonal Peak Economics',
    detail:
      'Institutional underwriting in mature hotel markets typically assumes flat ADR across seasons. In the UAE, the premium for peak-season pricing is material: F1 weekends, NYE, and major conference periods generate ADR 200–400% above annual averages. This compresses effective acquisition multiples relative to stabilised income.',
    icon: Calendar,
  },
  {
    title: 'Serviced Apartment Yield Premium',
    detail:
      'Serviced apartments — particularly in Business Bay, JBR, and DIFC — offer a hybrid yield profile: hotel-like RevPAR during peak demand and residential-equivalent yields during lower occupancy. Average gross yields of 9–13% routinely outperform equivalent grade hotels on the same corridor.',
    icon: Building2,
  },
  {
    title: 'Brand Operator as Value Lever',
    detail:
      'Pairing an acquired asset with a Marriott, Hilton, or Accor brand creates immediate yield accretion through distribution network access, loyalty programme activation, and RevPAR management tools. Murivest advises on operator selection, HMA structuring, and performance guarantee negotiation as core elements of the transaction.',
    icon: Shield,
  },
]

const marketIntelligence: Record<string, string> = {
  primeRevPAR: 'AED 800+ (Dubai luxury)',
  averageOccupancy: '78–85% (prime stock)',
  grossYieldRange: '8–12%',
  netYieldRange: '5–8%',
  annualArrivals: '22M+ tourists (2024)',
  pipelineAdditions: '30,000+ rooms by 2026',
  f1WeekendADR: 'AED 3,500+ per night',
  brandedShare: '68% branded inventory',
}

const expertiseSections = [
  {
    title: 'Market Overview',
    body: 'The UAE hotel market is bifurcated between Dubai — a global leisure and MICE destination — and Abu Dhabi, where government and corporate demand anchors occupancy. Ras Al Khaimah is emerging as a third investment corridor with eco-luxury and adventure tourism driving a differentiated demand base.',
  },
  {
    title: 'Current Trends',
    body: 'Wellness, lifestyle, and experiential hospitality concepts are outperforming traditional business hotels in both ADR and occupancy. Major hotel brands are launching sub-brands specifically targeting UAE demand profiles — Marriott\'s W and Edition, Hilton\'s Curio Collection, and Accor\'s Orient Express are among the most active.',
  },
  {
    title: 'Buyer Demand',
    body: 'Institutional buyers — infrastructure funds, sovereign wealth vehicles, and specialist hospitality REITs — are competing with family offices and ultra-high-net-worth individuals for branded, stabilised assets. Off-market transactions dominate the upper end of the market, particularly for whole-hotel acquisitions above USD 50M.',
  },
  {
    title: 'Investment Opportunities',
    body: 'Whole-hotel acquisitions (luxury and upper-upscale), serviced apartment complexes, hotel condominium structures (hotel-residence hybrids), development land in Al Marjan Island (RAK) and Dubai South, and management company equity staKsh are the principal investment formats active in the current cycle.',
  },
  {
    title: 'Risk Considerations',
    body: 'Geopolitical events can suppress leisure and MICE demand in concentrated windows. Operator selection and HMA terms are critical — poorly structured management agreements can erode NOI significantly even in a strong demand environment. New supply additions of 30,000+ rooms by 2026 will create short-term occupancy pressure in the mid-market.',
  },
  {
    title: 'Typical Returns',
    body: 'Stabilised luxury hotel acquisitions: 7–9% gross initial yield with 5-year levered IRRs of 9–13%. Serviced apartment development-to-core: 12–18% unlevered IRR with appropriate pre-sales. Value-add repositioning of obsolete stock — particularly 3-star conversions to lifestyle concepts — offers the widest IRR range (14–22%) with commensurate operator and execution risk.',
  },
  {
    title: 'Market Outlook',
    body: 'UAE hospitality will benefit from structural demand growth to 2030 and beyond. Expo City Dubai\'s ongoing activation, Al Maktoum International expansion, and Vision 2030 tourism targets for Abu Dhabi provide multi-year visibility. Supply discipline will be tested in 2025–26 as pipeline rooms deliver, but prime corridors — DIFC, Palm, Downtown, Yas — are insulated by brand scarcity and location premium.',
  },
]

const opportunities = [
  {
    location: 'Dubai Marina',
    type: 'Branded Serviced Apartments',
    highlights: [
      '180-key tower, fully managed',
      'International franchise agreement in place',
      'Gross yield: 10.2% (trailing 12M)',
      'JBR beachfront access — structural demand driver',
    ],
    yieldNote: 'Available on application — Price on Request',
    mandate: 'Core+',
  },
  {
    location: 'Yas Island, Abu Dhabi',
    type: 'Leisure Hotel Acquisition',
    highlights: [
      '350-key 5-star resort, full ownership',
      '82% trailing occupancy — F1 circuit frontage',
      'HMA with global operator, 15 years remaining',
      'Net yield: 6.8% — off-market opportunity',
    ],
    yieldNote: 'Off-market — NDA required',
    mandate: 'Core',
  },
  {
    location: 'Al Marjan Island, RAK',
    type: 'Development Land — Luxury Resort',
    highlights: [
      '12,000 sqm beachfront site, freehold',
      'Planning approved — 200-key eco-luxury concept',
      'Adjacent to Wynn Resort (opening 2027)',
      'Development yield on cost: 11.5% projected',
    ],
    yieldNote: 'Land acquisition — development advisory available',
    mandate: 'Value-Add',
  },
]

const faqs = [
  {
    q: 'Is investing in UAE hotels profitable?',
    a: 'UAE hotel investment has consistently delivered above-average returns. Prime Dubai hotels generated gross yields of 8–12% in 2024, with RevPAR tracking 18% above pre-pandemic peaks. Structural demand from 22M+ annual tourist arrivals, a diversified corporate travel base, and recurring mega-events provides income durability that most hotel markets globally cannot replicate.',
  },
  {
    q: 'What are typical hotel yields in Dubai and Abu Dhabi?',
    a: 'Gross yields on Dubai hotel assets range from 7–9% for luxury branded hotels (Palm, DIFC, Downtown) to 10–13% for mid-market serviced apartments and hotel residences. Abu Dhabi luxury hotels typically yield 7–9% gross, with ADGM-adjacent corporate hotels achieving stronger occupancy stability. Net yields after operating costs (HMA fees, maintenance, insurance, FF&E reserves) typically run 5–8%.',
  },
  {
    q: 'Can foreigners buy hotels or hotel rooms in Dubai?',
    a: 'Yes. Foreign investors — including non-UAE residents — can acquire hotel assets, serviced apartment complexes, and hotel-branded residential units in designated freehold zones across Dubai and Abu Dhabi. These include DIFC, Business Bay, Dubai Marina, JBR, Downtown Dubai, and Palm Jumeirah. 100% foreign ownership is permitted with full capital and profit repatriation rights. Legal structures vary by asset type.',
  },
  {
    q: 'What is RevPAR and why does it matter for hotel investment?',
    a: 'RevPAR (Revenue Per Available Room) is the primary performance metric for hotel investment underwriting. It multiplies occupancy rate by average daily rate (ADR) and serves as a proxy for a hotel\'s revenue-generating efficiency independent of room count. For UAE investment, prime Dubai hotels are averaging AED 800+ RevPAR — significantly above European and Asian comparable markets, which maKsh the asset class attractive for international institutional capital on a risk-adjusted basis.',
  },
  {
    q: 'How does the F1 Abu Dhabi Grand Prix affect hotel investment returns?',
    a: 'Materially. Hotels within a 20-minute radius of Yas Marina Circuit consistently achieve 99–100% occupancy during the F1 Grand Prix weekend (typically late November) at ADR premiums of 200–400% above annual averages. A single F1 weekend can contribute 3–5% to a hotel\'s annual RevPAR. This seasonality compresses effective acquisition multiples relative to stabilised income and creates a structural premium for Yas Island and Abu Dhabi hospitality.',
  },
  {
    q: 'What is a Hotel Management Agreement (HMA) and how does it affect investment?',
    a: 'A Hotel Management Agreement is the contractual arrangement between a hotel owner and an operator (e.g., Marriott, Hilton, Accor). The operator manages day-to-day operations in exchange for a base management fee (typically 2–4% of total revenue) plus an incentive fee (8–12% of gross operating profit). HMA terms directly determine NOI. Key negotiation points include performance guarantees, termination rights, FF&E reserve requirements, and owner approval rights for capital expenditure. Murivest reviews all HMA terms as part of institutional acquisition due diligence.',
  },
  {
    q: 'What hotel sub-markets in Dubai are most attractive for institutional investors?',
    a: 'DIFC and Downtown Dubai command the highest ADR and attract corporate and UHNWI guests. Palm Jumeirah is the preferred luxury leisure corridor. JBR and Dubai Marina appeal to mid-to-upper leisure guests with structural beach demand. Business Bay suits serviced apartment operators. Dubai South and Dubai Creek Harbour are the primary development corridors with the most significant capital appreciation upside. Each sub-market requires distinct underwriting assumptions.',
  },
  {
    q: 'What is the outlook for new hotel supply in the UAE?',
    a: 'Approximately 30,000 hotel rooms are under construction or in advanced planning stages across the UAE for delivery by 2026. The mid-market segment (3-4 star) will face the most new supply pressure. Luxury and ultra-luxury stock additions are more limited. Supply in prime corridors — Palm Jumeirah, DIFC, Yas Island — is constrained by land scarcity and planning complexity, preserving pricing power for existing well-positioned assets.',
  },
  {
    q: 'What is a serviced apartment and how does it differ from a hotel as an investment?',
    a: 'Serviced apartments — also called aparthotels or hotel residences — offer fully furnished units with hotel-style services (concierge, housekeeping, pool, gym) available for both short-term (nightly) and long-term (monthly) stays. As investments, they offer a hybrid yield: hotel-like RevPAR during peak demand, residential-equivalent occupancy during shoulder periods. This lowers the income volatility of pure hotel exposure while typically achieving higher gross yields (9–13% in prime Dubai corridors) than equivalent grade-A hotels.',
  },
  {
    q: 'What due diligence should institutional investors conduct on UAE hotel assets?',
    a: 'Institutional hotel due diligence in the UAE should cover: trailing 24-month P&L and RevPAR data segmented by guest type; HMA terms, performance thresholds, and termination provisions; FF&E reserve fund balance and capital expenditure schedule; title, land lease terms (if applicable), and strata structure; operator franchise agreement and brand covenant strength; planning consents and any pending regulatory requirements; and exit liquidity analysis including comparable hotel transaction evidence and capitalisation rate history. Murivest coordinates full due diligence advisory.',
  },
  {
    q: 'How are UAE hotel acquisitions typically financed?',
    a: 'UAE hotel acquisitions are financed through conventional bank debt, Islamic financing structures (Ijara, Murabaha), or equity-only for capital-strong institutional buyers. LTVs for stabilised branded hotels typically range from 50–65% with UAE and international lenders. Interest rates are priced off EIBOR plus a margin. Green loans and sustainability-linked facilities are emerging for energy-efficient or certified sustainable assets. Mezzanine and preferred equity structures are available for larger transactions requiring layered capital stacks.',
  },
  {
    q: 'Is Ras Al Khaimah a viable hotel investment market?',
    a: 'Increasingly yes. RAK is executing a deliberate tourism strategy centred on eco-luxury, adventure, and wellness hospitality to differentiate from Dubai\'s mass-market leisure positioning. The Wynn Resort opening in 2027 — the region\'s first integrated resort with gaming — is the single most significant hospitality investment in the GCC and will create a structural step-change in RAK\'s international visitor profile. Al Marjan Island is the primary investment corridor for beachfront resort development.',
  },
  {
    q: 'What taxes apply to hotel investment in the UAE?',
    a: 'Hotel operations in the UAE are subject to VAT at 5% on room revenues, F&B, and ancillary services. Tourism Dirham fees apply on a per-night basis (varying by emirate and hotel category). Corporate income tax of 9% applies to taxable income above AED 375,000 for businesses registered in the UAE effective 2023 — this applies to hotel operating companies. There is no capital gains tax, no personal income tax, and no withholding tax on dividends. Free zone structures may offer tax exemption on certain income streams subject to qualifying criteria.',
  },
  {
    q: 'What is the difference between freehold and leasehold hotel ownership in Dubai?',
    a: 'Freehold ownership grants perpetual title to the property. In Dubai, freehold ownership for non-GCC nationals is permitted in designated zones including Downtown, Business Bay, JBR, Dubai Marina, and Palm Jumeirah. Leasehold ownership typically runs 50–99 years and is common in areas not designated as freehold zones. For institutional investors, freehold ownership is strongly preferred as it eliminates lease expiry risk, facilitates debt financing, and ensures unencumbered title transfer on disposal.',
  },
  {
    q: 'How does Murivest source off-market hotel opportunities in the UAE?',
    a: 'Murivest maintains direct relationships with major UAE hotel owners — family offices, sovereign-linked entities, and institutional landlords — that enable early visibility of assets before they enter the open market. Approximately 60% of significant UAE hotel transactions complete off-market. Our pipeline is updated continuously and shared exclusively with clients under advisory mandate. We do not publish hotel listings or represent sellers in our advisory capacity.',
  },
  {
    q: 'What are the most common mistaKsh foreign investors make when buying UAE hotels?',
    a: 'The most common errors include: underestimating FF&E reserve requirements and capital expenditure obligations; accepting HMA terms without independent legal and operational review; overpaying for headline brand without stress-testing occupancy assumptions; ignoring strata management fees and service charge variability; and failing to stress-test exit assumptions in a higher-supply environment. Murivest\'s advisory mandate addresses all of these risks systematically before a client commits capital.',
  },
  {
    q: 'Can a hotel investment in the UAE qualify for a Golden Visa?',
    a: 'Yes. UAE Golden Visa residency can be obtained through real estate investment of AED 2M or more, which hotel units — including hotel apartments and hotel residences in branded projects — qualify for. The Golden Visa grants 10-year renewable residency. Investors should confirm that the specific property type meets GDRFA qualification criteria, as certain strata hotel structures may be assessed differently. Murivest coordinates legal and residency advisory alongside investment advisory.',
  },
  {
    q: 'Which hospitality asset types are most liquid in the UAE market?',
    a: 'Branded luxury hotel rooms and suites in super-prime Dubai locations (Palm, Downtown, DIFC) are the most liquid hospitality assets, typically achieving exit within 6–12 months. Whole-hotel assets above USD 50M have a smaller buyer universe — predominantly institutional — with 12–24 month expected exit periods. Mid-market hotels and serviced apartments in secondary corridors are less liquid and should be underwritten with longer hold periods (5–7 years). Al Marjan Island development land is illiquid until the Wynn catalyst delivers market depth.',
  },
  {
    q: 'What is the role of sustainability in UAE hotel investment?',
    a: 'ESG alignment is becoming a prerequisite for institutional hotel capital. LEED, WELL, and BREEAM certification increasingly affect both operator selection and debt pricing. UAE hotels with credible sustainability programmes are accessing green loan margins 25–50bps below conventional debt. Government regulation — including Dubai\'s Clean Energy Strategy 2050 — will mandate energy efficiency improvements that create both stranded asset risk for non-compliant stock and acquisition premiums for certified facilities.',
  },
  {
    q: 'How does Murivest charge for UAE hospitality advisory?',
    a: 'Murivest operates on a pure advisory fee model — we charge a fixed advisory retainer plus a success fee on transaction completion. We do not accept developer marketing fees, operator referral commissions, or seller-side mandates that would create conflicts of interest. All fee terms are agreed and disclosed in writing before mandate commencement. Our alignment is exclusively with our client\'s capital.',
  },
  {
    q: 'What is the typical hold period for a UAE hotel investment?',
    a: 'Institutional hold periods for UAE hotel assets vary by mandate type. Core acquisitions of stabilised branded hotels are typically held 5–7 years with exit via private treaty or REIT placement. Value-add repositioning mandates typically target 3–5 year exits following asset improvement and rebranding. Development mandates range from 5–10 years including construction and stabilisation. Exit route analysis — including capitalisation rate assumptions and buyer demand forecasting — is a core component of Murivest\'s pre-acquisition investment committee presentation.',
  },
]

// ─── Page Component ───────────────────────────────────────────────────────────

export default function HospitalityPage() {
  return (
    <main className="bg-[#FAF9F6] text-[#1A1A1A] font-body antialiased selection:bg-[#1B4332] selection:text-white overflow-x-hidden">
      <Script
        id="schema-hospitality"
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
            <Link href="#opportunities" className="hover:text-[#1B4332] transition-colors">Opportunities</Link>
            <Link href="#faq" className="hover:text-[#1B4332] transition-colors">FAQ</Link>
            <Link
              href="/united-arab-emirates/contact"
              className="px-5 py-2.5 bg-[#1B4332] text-white text-sm hover:bg-[#142d23] transition-colors"
            >
              Contact
            </Link>
          </nav>
          {/* Mobile menu button */}
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
        <nav className="flex flex-wrap items-center text-xs text-[#8A8A8A] gap-1.5" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#1B4332] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/united-arab-emirates" className="hover:text-[#1B4332] transition-colors">UAE</Link>
          <span>/</span>
          <Link href="/united-arab-emirates/asset-classes" className="hover:text-[#1B4332] transition-colors">Asset Classes</Link>
          <span>/</span>
          <span className="text-[#1B4332]">Hospitality</span>
        </nav>
      </div>

      {/* ══════════════════════════════ HERO ════════════════════════════════ */}
      <section className="relative min-h-[88vh] md:min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1A0F] via-[#102318] to-[#1B4332]" />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 79px, #FAF9F6 79px, #FAF9F6 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, #FAF9F6 79px, #FAF9F6 80px)',
          }}
        />
        {/* Soft radial accent */}
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 70% 40%, #B8956B 0%, transparent 60%)' }}
        />

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-36 pb-0 w-full">
          <div className="max-w-4xl pb-16 md:pb-24">
            <SectionLabel text="Asset Class Deep Dive — Hospitality" />
            <h1 className="font-display text-[40px] md:text-[62px] lg:text-[78px] leading-[1.02] text-white mb-7 md:mb-8">
              UAE Hospitality Real Estate — The World&apos;s Most Visited Market, Institutionally Underweighted
            </h1>
            <p className="text-base md:text-xl text-white/65 leading-relaxed max-w-3xl mb-10 md:mb-12">
              Dubai attracts more international visitors than Paris. Abu Dhabi&apos;s hotel occupancy is government-anchored. Ras Al Khaimah is building the GCC&apos;s first integrated resort. Yet institutional capital allocation to UAE hospitality real estate remains below the market&apos;s structural return profile — creating a durable entry opportunity for disciplined investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                href="#opportunities"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1B4332] text-sm font-medium tracking-wide hover:bg-[#FAF9F6] transition-colors"
                style={{ minHeight: 48 }}
              >
                Explore Opportunities
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

      {/* ════════════════════════ WHY UAE HOSPITALITY ═══════════════════════ */}
      <section className="py-24 md:py-36 lg:py-44 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel text="Strategic Position" />
          <h2 className="font-display text-[30px] md:text-[42px] lg:text-[50px] leading-[1.06] text-[#1A1A1A] mb-4 max-w-3xl">
            Why UAE Hospitality Outperforms the Global Hotel Investment Benchmark
          </h2>
          <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed max-w-2xl mb-12 md:mb-16">
            Four structural demand drivers — not seasonal events, not marketing — make the UAE an institutionally credible hotel investment market with a risk-return profile unmatched in the EMEA region.
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
              The Case for Institutional Hospitality Allocation in the UAE
            </h2>
            <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed mb-6">
              UAE hotels offer a structural yield premium above European equivalents — compensated by stronger RevPAR growth, shorter downturns, and a diversified demand base spanning leisure, MICE, corporate, and transit traffic. Institutional mandates that ignore UAE hospitality are passing on one of EMEA&apos;s most durable income-plus-appreciation plays.
            </p>
            <p className="text-sm text-[#4A4A4A] leading-relaxed mb-8">
              Murivest underwrites hotel acquisitions using trailing 24-month and forward-looking RevPAR models, operator-adjusted NOI, and scenario-tested exit cap rates — giving clients the institutional rigour that property portals and broker valuations never provide.
            </p>
            <Link
              href="/united-arab-emirates/contact"
              className="inline-flex items-center gap-2 text-sm text-[#1B4332] border border-[#1B4332]/20 px-5 py-3 hover:bg-[#1B4332] hover:text-white hover:border-[#1B4332] transition-all"
            >
              Request Hospitality Research
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>

          {/* Case grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 md:gap-5">
            {investmentCase.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="p-5 md:p-6 bg-white border border-[#1A1A1A]/6 hover:border-[#1B4332]/20 transition-colors">
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
            UAE Hotel Market Intelligence
          </h2>
          <p className="text-sm text-[#4A4A4A] leading-relaxed mb-12 max-w-xl">
            Proprietary market data underpins every Murivest advisory mandate. The metrics below reflect prime-corridor performance across Dubai and Abu Dhabi.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-6">
            {Object.entries(marketIntelligence).map(([key, val]) => (
              <div key={key} className="bg-[#FAF9F6] border border-[#1A1A1A]/6 p-5 md:p-6">
                <p className="font-display text-2xl md:text-3xl text-[#1B4332] mb-1">{val}</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#8A8A8A]">
                  {key
                    .replace(/([A-Z])/g, ' $1')
                    .replace(/^./, (s) => s.toUpperCase())}
                </p>
              </div>
            ))}
          </div>

          {/* Sub-market breakdown */}
          <div className="grid md:grid-cols-3 gap-4 mt-10">
            {[
              {
                market: 'Dubai Luxury Corridor',
                locations: 'Palm, Downtown, DIFC',
                adr: 'AED 1,200–3,500+',
                occ: '82–88%',
                yield: '7–9% gross',
                mandate: 'Core',
              },
              {
                market: 'Dubai Upper-Upscale',
                locations: 'Business Bay, Marina, JBR',
                adr: 'AED 600–1,100',
                occ: '75–83%',
                yield: '9–11% gross',
                mandate: 'Core+',
              },
              {
                market: 'Abu Dhabi & Emerging',
                locations: 'Yas, Saadiyat, Al Marjan RAK',
                adr: 'AED 500–2,000',
                occ: '70–85%',
                yield: '8–13% gross',
                mandate: 'Core+ / Value-Add',
              },
            ].map((row) => (
              <div key={row.market} className="bg-[#FAF9F6] border border-[#1A1A1A]/6 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-lg text-[#1A1A1A]">{row.market}</h3>
                    <p className="text-xs text-[#8A8A8A] mt-0.5">{row.locations}</p>
                  </div>
                  <span className="text-[10px] font-medium px-2.5 py-1 bg-[#1B4332]/10 text-[#1B4332] border border-[#1B4332]/15 uppercase tracking-wider whitespace-nowrap">
                    {row.mandate}
                  </span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: 'ADR Range', val: row.adr },
                    { label: 'Occupancy', val: row.occ },
                    { label: 'Gross Yield', val: row.yield },
                  ].map((m) => (
                    <div key={m.label} className="flex justify-between text-sm">
                      <span className="text-[#8A8A8A]">{m.label}</span>
                      <span className="text-[#1B4332] font-medium">{m.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-[#8A8A8A] mt-5">
            Source: Murivest Research & Advisory, H2 2025. Prime-corridor data. Individual assets vary. Past performance is not a guarantee of future returns.
          </p>
        </div>
      </section>

      {/* ════════════════════════ SECTOR EXPERTISE ══════════════════════════ */}
      <section id="expertise" className="py-24 md:py-36 lg:py-44 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel text="Sector Expertise" />
          <h2 className="font-display text-[30px] md:text-[42px] lg:text-[50px] leading-[1.06] text-[#1A1A1A] mb-4 max-w-3xl">
            Hospitality Asset Class — Institutional Depth
          </h2>
          <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed max-w-2xl mb-12">
            Murivest&apos;s hospitality advisory covers the full spectrum — from single-room hotel apartment acquisition to whole-hotel due diligence and resort development advisory.
          </p>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {expertiseSections.map((item) => (
              <div key={item.title} className="flex gap-5">
                <Building2
                  className="w-5 h-5 text-[#B8956B] mt-1 shrink-0"
                  strokeWidth={1.5}
                />
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
                Featured UAE Hospitality Investments
              </h2>
            </div>
            <Link
              href="/united-arab-emirates/listings/off-market"
              className="inline-flex items-center gap-2 text-sm text-[#4A4A4A] border border-[#1A1A1A]/10 px-5 py-3 hover:border-[#1B4332] hover:text-[#1B4332] transition-colors shrink-0"
            >
              View Off-Market Pipeline
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {opportunities.map((opp) => (
              <div
                key={opp.location}
                className="group flex flex-col bg-[#FAF9F6] border border-[#1A1A1A]/6 hover:border-[#1B4332]/25 hover:shadow-xl transition-all"
              >
                {/* Visual placeholder */}
                <div className="h-44 bg-gradient-to-br from-[#0D1F17]/30 via-[#1B4332]/15 to-[#D0E0D5] flex items-center justify-center relative">
                  <Building2
                    className="w-14 h-14 text-[#1A1A1A]/10 group-hover:text-[#1B4332]/25 transition"
                    strokeWidth={1}
                  />
                  <span className="absolute top-4 left-4 text-[9px] uppercase tracking-[0.18em] bg-[#1B4332] text-white px-2.5 py-1.5">
                    {opp.type}
                  </span>
                  <span className="absolute top-4 right-4 text-[9px] uppercase tracking-[0.15em] bg-[#B8956B] text-white px-2.5 py-1.5">
                    {opp.mandate}
                  </span>
                </div>

                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B] mb-3">{opp.location}</p>
                  <ul className="text-sm text-[#4A4A4A] space-y-2 mb-5 flex-1">
                    {opp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span className="text-[#B8956B] mt-1 text-xs">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-5 border-t border-[#1A1A1A]/5">
                    <span className="text-xs text-[#1B4332] font-medium">{opp.yieldNote}</span>
                    <Link
                      href="/united-arab-emirates/contact"
                      className="text-xs text-[#1B4332] border border-[#1B4332]/20 px-3 py-1.5 hover:bg-[#1B4332] hover:text-white transition-colors"
                    >
                      Request Memo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-[#FAF9F6] border border-[#1A1A1A]/6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1A1A1A] mb-1">Off-Market Hospitality Pipeline</p>
                <p className="text-xs text-[#8A8A8A]">
                  Murivest maintains a live pipeline of UAE hotel and hospitality assets not available through public channels.
                  Available exclusively to clients under advisory mandate. NDA required.
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
                How Murivest Advises on UAE Hospitality
              </h2>
              <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed mb-6">
                Hotel and hospitality investment is operationally complex in ways that other real estate classes are not. Operator selection, HMA negotiation, FF&E planning, brand covenant assessment, and RevPAR stress-testing are specialist skills that most real estate advisors do not possess.
              </p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed mb-8">
                Murivest&apos;s hospitality advisory practice was built around institutional mandates. We work exclusively for buyers — never sellers or operators — ensuring our analysis is uncontaminated by marketing relationships.
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
                { title: 'Acquisition Advisory', desc: 'End-to-end buy-side advisory from target identification through HMA review, due diligence, pricing, and closing. Single assets and portfolio mandates.' },
                { title: 'Hotel Operator Selection', desc: 'Independent assessment of international and regional operators — brand fit, management fee benchmarking, performance guarantee negotiation, and HMA structuring.' },
                { title: 'Development Advisory', desc: 'Concept, feasibility, operator search, and capital structuring for new hospitality development. Applicable to hotel, resort, and serviced apartment mandates.' },
                { title: 'Portfolio Repositioning', desc: 'Value-add strategy for underperforming or obsolete hospitality stock — rebranding, renovation scope, FF&E planning, and stabilised exit underwriting.' },
                { title: 'Investment Committee Support', desc: 'Sector allocations memoranda, comparative market analysis, and forward-looking RevPAR models prepared to institutional investment committee standard.' },
                { title: 'Cross-Border Capital Introduction', desc: 'For Asian, European, and US capital seeking UAE hospitality exposure — structuring, jurisdiction advisory, and co-investment facilitation with UAE-based partners.' },
              ].map((service) => (
                <div key={service.title} className="flex gap-4 p-5 bg-white border border-[#1A1A1A]/6 hover:border-[#1B4332]/20 transition-colors">
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
            UAE Hospitality Investment — Institutional Answers
          </h2>
          <p className="text-sm text-[#4A4A4A] leading-relaxed mb-12 max-w-2xl">
            Answers prepared to the standard of institutional due diligence — not marketing copy. For questions not listed below, speak with the Murivest UAE hospitality advisory team.
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
              Allocate to UAE Hospitality with Institutional Rigour
            </h2>
            <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-2xl mb-8">
              Murivest advises family offices, infrastructure funds, and sovereign vehicles on UAE hotel acquisitions, resort development, and serviced apartment portfolio construction. We do not market properties — we advise capital. Our process starts with your mandate, not with our inventory.
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
                { label: 'Engagement type', value: 'Private buy-side advisory' },
                { label: 'Scope', value: 'Asset selection through to transaction closing' },
                { label: 'Capital minimum', value: 'USD 5M+ for direct advisory engagement' },
                { label: 'Conflicts', value: 'None — we do not represent sellers or operators' },
                { label: 'Confidentiality', value: 'NDA available before pipeline sharing' },
                { label: 'Jurisdictions', value: 'UAE (all Emirates), UK, Singapore, Kenya, US' },
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
              { label: 'Yas Island Hospitality', href: '/united-arab-emirates/abu-dhabi/yas-island' },
              { label: 'Saadiyat Island Hotels', href: '/united-arab-emirates/abu-dhabi/saadiyat-island' },
              { label: 'Dubai Advisory', href: '/united-arab-emirates/dubai' },
              { label: 'UAE Investment Guides', href: '/united-arab-emirates/investment-guides' },
              { label: 'Off-Market Pipeline', href: '/united-arab-emirates/listings/off-market' },
              { label: 'Mixed-Use Advisory', href: '/united-arab-emirates/asset-classes/mixed-use' },
              { label: 'Capital Markets', href: '/united-arab-emirates/capital-markets' },
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