// app/united-arab-emirates/sharjah/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  TrendingUp,
  MapPin,
  Factory,
  Landmark,
  GraduationCap,
  Anchor,
  Shield,
} from 'lucide-react'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Sharjah Commercial Real Estate Investment | Institutional Advisory | Murivest',
  description:
    "Institutional commercial real estate advisory in Sharjah — the UAE's cultural capital and third-largest industrial economy. SAIF Zone, Hamriyah Free Zone, Al Majaz waterfront, and University City advisory for family offices and institutional capital.",
  keywords: [
    'Sharjah commercial real estate investment',
    'Sharjah industrial property advisory',
    'SAIF Zone investment',
    'Hamriyah Free Zone real estate',
    'Sharjah free zone property',
    'Sharjah Industrial Area investment',
    'University City Sharjah real estate',
    'Al Majaz waterfront investment',
    'institutional real estate Sharjah',
    'Sharjah manufacturing real estate',
  ],
  openGraph: {
    title: 'Sharjah Commercial Real Estate | Institutional Investment Advisory | Murivest',
    description:
      "Institutional advisory across Sharjah's free zones, industrial corridors, and cultural-economic districts.",
    url: 'https://murivest.com/united-arab-emirates/sharjah',
    siteName: 'Murivest Global',
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sharjah Commercial Real Estate Investment | Murivest',
    description:
      "Institutional advisory across Sharjah's free zones, industrial corridors, and cultural-economic districts.",
  },
  alternates: {
    canonical: 'https://murivest.com/united-arab-emirates/sharjah',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'RealEstateAgent',
      name: 'Murivest Sharjah',
      url: 'https://murivest.com/united-arab-emirates/sharjah',
      description: 'Institutional commercial real estate advisory in Sharjah, United Arab Emirates',
      areaServed: [
        'SAIF Zone',
        'Hamriyah Free Zone',
        'Sharjah Industrial Area',
        'Al Majaz',
        'Al Khan',
        'University City',
      ],
      knowsAbout: [
        'Industrial Real Estate',
        'Free Zone Investment',
        'Waterfront Mixed-Use',
        'Education & Research Real Estate',
        'Manufacturing Property',
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://murivest.com' },
        { '@type': 'ListItem', position: 2, name: 'United Arab Emirates', item: 'https://murivest.com/united-arab-emirates' },
        { '@type': 'ListItem', position: 3, name: 'Sharjah', item: 'https://murivest.com/united-arab-emirates/sharjah' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is Sharjah a good location for industrial real estate investment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. Sharjah hosts the largest manufacturing base in the UAE by number of factories, anchored by SAIF Zone and Hamriyah Free Zone. Industrial rents run 25–40% below equivalent Dubai stock while occupancy across Grade A free zone assets exceeds 90%, producing some of the highest gross yields — typically 12–16% — of any UAE emirate.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can foreign investors own property in Sharjah?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Foreign investors can acquire 100% ownership of free zone real estate and businesses in SAIF Zone and Hamriyah Free Zone. Onshore freehold ownership outside free zones is more limited than in Dubai and Abu Dhabi and is restricted to designated investment areas — Murivest advises on structuring for each ownership pathway.',
          },
        },
      ],
    },
  ],
}

// ─── Internal Components ──────────────────────────────────────────────────────

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="font-body text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#B8956B] mb-4 md:mb-5">
      {text}
    </p>
  )
}

// ─── Page Data ────────────────────────────────────────────────────────────────

const heroStats = [
  { value: '#1', label: 'UAE Manufacturing Base by Factory Count' },
  { value: '12–16%', label: 'Prime Industrial Gross Yield' },
  { value: '3', label: 'Major Free Zones' },
  { value: '25–40%', label: 'Cost Advantage vs. Dubai Equivalent' },
]

const whyPoints = [
  {
    title: 'The UAE\'s Manufacturing Capital',
    description:
      'Sharjah hosts more licensed factories than any other emirate — a base built over four decades of deliberate industrial policy. Occupier demand is structurally diversified across food processing, building materials, plastics, and light engineering, reducing the single-sector concentration risk present in newer industrial corridors.',
    icon: Factory,
  },
  {
    title: 'UNESCO Cultural Capital — A Demand Anchor of Its Own',
    description:
      'Sharjah is the only emirate designated a UNESCO World Book Capital and Cultural Capital of the Arab World. This cultural infrastructure — museums, the Sharjah Biennial, a dense university base — sustains a resident and visiting population with structurally different demand drivers from Dubai\'s leisure-led tourism model.',
    icon: Landmark,
  },
  {
    title: 'University City — The GCC\'s Largest Education Cluster',
    description:
      'University City is home to over 25,000 students across multiple institutions, including the American University of Sharjah. This concentrated, recurring population underpins durable demand for purpose-built student housing, education-adjacent retail, and research and innovation real estate.',
    icon: GraduationCap,
  },
  {
    title: 'Port Khalid & Hamriyah — Dual Port Infrastructure',
    description:
      'Sharjah is the only emirate with operating ports on both the Arabian Gulf and, via road corridor, proximate access to the Gulf of Oman. Hamriyah Free Zone\'s deep-water port accommodates vessels other regional ports cannot, creating a distinct logistics advantage for heavy industrial and bulk cargo occupiers.',
    icon: Anchor,
  },
]

type District = {
  id: string
  name: string
  slug: string
  description: string
  keyFeatures: string[]
  investmentProfile: string
  mandate: 'Core' | 'Core+' | 'Value-Add'
  icon: typeof Building2
}

const districts: District[] = [
  {
    id: 'saif-zone',
    name: 'SAIF Zone',
    slug: 'saif-zone',
    description:
      'Sharjah Airport International Free Zone — the emirate\'s flagship free zone, combining warehousing, light manufacturing, and trading operations with direct airport cargo access. Over 8,000 companies operate within the zone, spanning 165 nationalities.',
    keyFeatures: ['Airport Cargo Access', '100% Foreign Ownership', 'Light Manufacturing'],
    investmentProfile: 'Grade A warehousing, build-to-suit industrial, trading company HQ assets',
    mandate: 'Core',
    icon: Building2,
  },
  {
    id: 'hamriyah-free-zone',
    name: 'Hamriyah Free Zone',
    slug: 'hamriyah-free-zone',
    description:
      'The largest free zone by land area in the Northern Emirates, anchored by a deep-water port capable of accommodating vessels with drafts up to 16 metres. Heavy industry, petrochemicals, and bulk logistics occupiers dominate the tenant base.',
    keyFeatures: ['Deep-Water Port', 'Heavy Industry', 'Bulk Logistics'],
    investmentProfile: 'Port-adjacent industrial land, heavy manufacturing facilities, bonded warehousing',
    mandate: 'Core+',
    icon: Anchor,
  },
  {
    id: 'sharjah-industrial-area',
    name: 'Sharjah Industrial Area',
    slug: 'sharjah-industrial-area',
    description:
      'The emirate\'s onshore industrial heartland — a mature, mainland corridor with the deepest concentration of SME manufacturing in the UAE. Lower entry pricing than free zone equivalents, with strong demand from regional distribution occupiers.',
    keyFeatures: ['Onshore Mainland', 'SME Manufacturing', 'Established Corridor'],
    investmentProfile: 'Value-add warehouse acquisition, owner-occupier sale-leaseback, land banking',
    mandate: 'Value-Add',
    icon: Factory,
  },
  {
    id: 'al-majaz-al-khan',
    name: 'Al Majaz & Al Khan Waterfront',
    slug: 'al-majaz-al-khan',
    description:
      'Sharjah\'s premier waterfront corridor along the Khalid Lagoon and Arabian Gulf coastline. Cultural and lifestyle infrastructure — Al Majaz Waterfront, Al Noor Island — supports a growing institutional case for mixed-use and hospitality assets.',
    keyFeatures: ['Waterfront Position', 'Cultural Infrastructure', 'Mixed-Use Potential'],
    investmentProfile: 'Mixed-use development land, boutique hospitality, lifestyle retail',
    mandate: 'Core+',
    icon: MapPin,
  },
  {
    id: 'university-city',
    name: 'University City & SRTI Park',
    slug: 'university-city',
    description:
      'Home to the American University of Sharjah and the Sharjah Research, Technology and Innovation Park — the GCC\'s most concentrated education and applied-research cluster. A structurally recurring demand base of 25,000+ students and a growing research-tenant ecosystem.',
    keyFeatures: ['25,000+ Students', 'Research & Innovation', 'Recurring Demand Base'],
    investmentProfile: 'Purpose-built student accommodation, research campus leasing, education-adjacent retail',
    mandate: 'Core+',
    icon: GraduationCap,
  },
  {
    id: 'shams-media-city',
    name: 'Shams — Sharjah Media City',
    slug: 'shams-media-city',
    description:
      'A streamlined, cost-efficient free zone positioned for media, creative, and digital-economy occupiers seeking a lower-cost alternative to Dubai Media City without sacrificing proximity to the same talent pool and client base.',
    keyFeatures: ['Media & Creative', 'Cost-Efficient Setup', 'Dubai Proximity'],
    investmentProfile: 'Flexible office and studio space, small-format commercial leasing',
    mandate: 'Value-Add',
    icon: TrendingUp,
  },
]

const marketIntelligence: Record<string, string> = {
  primeIndustrialYield: '12–16% gross',
  gradeAOccupancy: '90%+',
  rentDiscountVsDubai: '25–40% lower',
  manufacturingLicenses: '8,000+ (SAIF Zone alone)',
  universityPopulation: '25,000+ students',
  portDraft: '16m (Hamriyah deep water)',
}

const advisoryServices = [
  {
    title: 'Industrial & Free Zone Acquisition',
    desc: 'Buy-side advisory across SAIF Zone, Hamriyah Free Zone, and Sharjah Industrial Area — covering free zone structuring, lease covenant review, and technical due diligence.',
  },
  {
    title: 'Sale-Leaseback Advisory',
    desc: 'For manufacturing and logistics occupiers seeking to release capital from owned facilities while retaining operational control under long-term lease terms.',
  },
  {
    title: 'Waterfront & Mixed-Use Development',
    desc: 'Feasibility, masterplan alignment, and capital structuring for mixed-use and hospitality development along the Al Majaz and Al Khan corridor.',
  },
  {
    title: 'Education & Research Real Estate',
    desc: 'Specialist advisory for purpose-built student accommodation and research-campus leasing strategies within University City and SRTI Park.',
  },
]

// ─── Page Component ───────────────────────────────────────────────────────────

export default function SharjahPage() {
  return (
    <main className="bg-[#0E0B08] text-[#EDE6D9] font-body antialiased selection:bg-[#B8956B] selection:text-[#0E0B08] overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* ── Fixed Navigation ─────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0E0B08]/90 backdrop-blur-md border-b border-[#B8956B]/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-20 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="font-display text-lg sm:text-xl md:text-2xl text-[#EDE6D9] tracking-tight">
            Murivest
          </Link>
          <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-sm text-[#B5AC9C]">
            <Link href="/united-arab-emirates" className="hover:text-[#B8956B] transition-colors">UAE</Link>
            <Link href="/united-arab-emirates/asset-classes" className="hover:text-[#B8956B] transition-colors">Asset Classes</Link>
            <Link href="#districts" className="hover:text-[#B8956B] transition-colors">Districts</Link>
            <Link href="#intelligence" className="hover:text-[#B8956B] transition-colors">Market Intelligence</Link>
            <Link
              href="/united-arab-emirates/contact"
              className="px-5 py-2.5 bg-[#B8956B] text-[#0E0B08] text-sm font-medium hover:bg-[#C9A87D] transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Link
            href="/united-arab-emirates/contact"
            className="md:hidden px-4 py-2 bg-[#B8956B] text-[#0E0B08] text-xs font-medium tracking-wide"
          >
            Contact
          </Link>
        </div>
      </header>

      {/* ── Breadcrumb ───────────────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-20 pt-24 md:pt-28">
        <nav className="flex flex-wrap items-center gap-1.5 text-xs text-[#8A8275]" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#B8956B] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/united-arab-emirates" className="hover:text-[#B8956B] transition-colors">UAE</Link>
          <span>/</span>
          <span className="text-[#B8956B]">Sharjah</span>
        </nav>
      </div>

      {/* ══════════════════════════════ HERO ════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Warm leather / library gradient — golf-club lounge mood */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E0B08] via-[#161009] to-[#231A0E]" />
        {/* Subtle wood-grain horizontal lines */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 3px, #EDE6D9 3px, #EDE6D9 4px)',
          }}
        />
        {/* Soft brass radial accent */}
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{ backgroundImage: 'radial-gradient(ellipse at 75% 30%, #B8956B 0%, transparent 55%)' }}
        />

        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-20 pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-28">
          <div className="max-w-3xl">
            <SectionLabel text="United Arab Emirates — Cultural & Industrial Capital" />
            <h1 className="font-display text-[34px] xs:text-[38px] sm:text-[48px] md:text-[58px] lg:text-[68px] leading-[1.05] text-[#F5F0E4] mb-6 md:mb-8">
              Sharjah <span className="text-[#B8956B]">Commercial</span> Markets
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#B5AC9C] leading-relaxed max-w-2xl mb-8 sm:mb-10 md:mb-12">
              Institutional real estate advisory across the UAE&apos;s most diversified industrial base and its
              foremost cultural capital. Mandate-based advisory for family offices, manufacturers, and institutional
              capital seeking exposure outside Dubai&apos;s pricing curve without sacrificing infrastructure quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/united-arab-emirates/contact"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 bg-[#B8956B] text-[#0E0B08] text-sm font-medium tracking-wide hover:bg-[#C9A87D] transition-colors"
                style={{ minHeight: 48 }}
              >
                Request Market Brief
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link
                href="/united-arab-emirates/listings"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 border border-[#EDE6D9]/20 text-[#EDE6D9] text-sm font-medium tracking-wide hover:border-[#B8956B]/60 hover:text-[#B8956B] transition-colors"
                style={{ minHeight: 48 }}
              >
                View Listings
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative border-t border-[#B8956B]/10 bg-[#0E0B08]/60 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-[#B8956B]/10">
              {heroStats.map((stat) => (
                <div key={stat.label} className="py-5 sm:py-6 md:py-7 px-4 sm:px-6 md:px-8 first:pl-0 odd:pl-0 sm:odd:pl-6 md:odd:pl-8">
                  <p className="font-display text-lg sm:text-xl md:text-2xl text-[#F5F0E4] mb-1 leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-[#8A8275] leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ WHY SHARJAH ════════════════════════════════ */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 px-5 sm:px-8 md:px-12 lg:px-20 bg-[#15110B]">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel text="Strategic Position" />
          <h2 className="font-display text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.1] text-[#F5F0E4] mb-4 max-w-3xl">
            Four Structural Reasons Institutional Capital Looks to Sharjah
          </h2>
          <p className="text-sm sm:text-base text-[#B5AC9C] leading-relaxed max-w-2xl mb-10 sm:mb-14 md:mb-16">
            Sharjah is not a discount alternative to Dubai — it is a structurally distinct market with its own
            demand drivers, anchored by manufacturing depth, cultural infrastructure, and education density that no
            other emirate replicates at the same scale.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {whyPoints.map((point) => {
              const Icon = point.icon
              return (
                <div
                  key={point.title}
                  className="group flex gap-4 sm:gap-5 p-5 sm:p-6 md:p-7 bg-[#1B150D] border border-[#B8956B]/10 hover:border-[#B8956B]/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#B8956B]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#B8956B]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg text-[#F5F0E4] mb-2">{point.title}</h3>
                    <p className="text-xs sm:text-sm text-[#B5AC9C] leading-relaxed">{point.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════ DISTRICT CARDS ═════════════════════════════ */}
      <section id="districts" className="py-16 sm:py-24 md:py-32 lg:py-40 px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel text="Market Segments" />
          <h2 className="font-display text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.1] text-[#F5F0E4] mb-4 max-w-3xl">
            Sharjah&apos;s Institutional Investment Districts
          </h2>
          <p className="text-sm sm:text-base text-[#B5AC9C] leading-relaxed max-w-2xl mb-10 sm:mb-14 md:mb-16">
            Six districts, each with a distinct occupier base, mandate profile, and risk-return character —
            assessed with the same institutional rigour Murivest applies across every UAE market.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {districts.map((district) => {
              const Icon = district.icon
              return (
                <Link
                  key={district.id}
                  href={`/united-arab-emirates/sharjah/${district.slug}`}
                  className="group relative bg-[#161009] border border-[#B8956B]/15 hover:border-[#B8956B]/40 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Hover accent wash */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B8956B]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10 p-6 sm:p-7 flex flex-col flex-1">
                    {/* Icon + mandate badge */}
                    <div className="flex items-start justify-between mb-5 sm:mb-6">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#B8956B]/10 flex items-center justify-center group-hover:bg-[#B8956B]/15 transition-colors duration-300">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#B8956B]" strokeWidth={1.5} />
                      </div>
                      <span
                        className={`text-[9px] sm:text-[10px] font-medium px-2 sm:px-2.5 py-1 uppercase tracking-wider border whitespace-nowrap ${
                          district.mandate === 'Core'
                            ? 'bg-[#1B4332]/15 text-[#7FA88E] border-[#1B4332]/30'
                            : district.mandate === 'Core+'
                            ? 'bg-[#B8956B]/10 text-[#B8956B] border-[#B8956B]/25'
                            : 'bg-[#6A3A20]/15 text-[#C98F5C] border-[#6A3A20]/30'
                        }`}
                      >
                        {district.mandate}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-lg sm:text-xl text-[#F5F0E4] mb-2 sm:mb-3 group-hover:text-[#B8956B] transition-colors duration-300">
                      {district.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#B5AC9C] leading-relaxed mb-5 sm:mb-6">
                      {district.description}
                    </p>

                    {/* Key features */}
                    <div className="mb-5 sm:mb-6 space-y-1.5 sm:space-y-2">
                      {district.keyFeatures.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <span className="text-[#B8956B] mt-1 text-[10px] sm:text-xs shrink-0">•</span>
                          <span className="text-[11px] sm:text-xs text-[#9C9384]">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Investment profile */}
                    <div className="mt-auto pt-4 sm:pt-5 border-t border-[#B8956B]/10">
                      <p className="text-[9px] sm:text-[10px] text-[#B8956B] uppercase tracking-[0.15em] mb-2">
                        Investment Profile
                      </p>
                      <p className="text-xs sm:text-sm text-[#EDE6D9] font-light leading-relaxed mb-5 sm:mb-6">
                        {district.investmentProfile}
                      </p>

                      <div className="flex items-center gap-2 text-[#B8956B] group-hover:gap-3 transition-all duration-300">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide">
                          Explore Market
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ MARKET INTELLIGENCE ════════════════════════ */}
      <section id="intelligence" className="py-16 sm:py-24 md:py-32 lg:py-40 px-5 sm:px-8 md:px-12 lg:px-20 bg-[#15110B]">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel text="Market Dashboard" />
          <h2 className="font-display text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.1] text-[#F5F0E4] mb-4 max-w-3xl">
            Sharjah Market Intelligence
          </h2>
          <p className="text-sm sm:text-base text-[#B5AC9C] leading-relaxed max-w-xl mb-10 sm:mb-14">
            Proprietary data underpinning every Murivest Sharjah advisory mandate.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {Object.entries(marketIntelligence).map(([key, val]) => (
              <div key={key} className="bg-[#1B150D] border border-[#B8956B]/10 p-5 sm:p-6">
                <p className="font-display text-xl sm:text-2xl text-[#B8956B] mb-1 leading-tight">{val}</p>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-[#8A8275] leading-relaxed">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())}
                </p>
              </div>
            ))}
          </div>

          <p className="text-[10px] sm:text-[11px] text-[#8A8275] mt-5 sm:mt-6">
            Source: Murivest Research &amp; Advisory, H2 2025. Indicative prime-corridor data. Not investment advice.
          </p>
        </div>
      </section>

      {/* ════════════════════════ ADVISORY SERVICES ═════════════════════════ */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-start">
            <div>
              <SectionLabel text="Advisory Services" />
              <h2 className="font-display text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#F5F0E4] mb-5 sm:mb-6">
                How Murivest Advises on Sharjah
              </h2>
              <p className="text-sm sm:text-base text-[#B5AC9C] leading-relaxed mb-5 sm:mb-6">
                Sharjah requires a different underwriting lens than Dubai — free zone structuring, manufacturing
                tenant covenant assessment, and onshore mainland nuances are specialist disciplines. Murivest
                advises exclusively for buyers, with no free zone authority or developer affiliations.
              </p>
              <Link
                href="/united-arab-emirates/contact"
                className="inline-flex items-center gap-2 text-sm text-[#B8956B] border border-[#B8956B]/25 px-5 py-3 hover:bg-[#B8956B] hover:text-[#0E0B08] transition-all"
              >
                Arrange a Consultation
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>

            <div className="space-y-3">
              {advisoryServices.map((service) => (
                <div
                  key={service.title}
                  className="flex gap-4 p-5 bg-[#161009] border border-[#B8956B]/10 hover:border-[#B8956B]/25 transition-colors"
                >
                  <span className="text-[#B8956B] mt-0.5 shrink-0 text-sm">◆</span>
                  <div>
                    <h3 className="text-sm font-medium text-[#F5F0E4] mb-1">{service.title}</h3>
                    <p className="text-xs text-[#B5AC9C] leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ CTA ════════════════════════════════════ */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 px-5 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-br from-[#1B150D] to-[#0E0B08] border-y border-[#B8956B]/10">
        <div className="max-w-[1000px] mx-auto text-center">
          <SectionLabel text="Private Advisory" />
          <h2 className="font-display text-[28px] sm:text-[36px] md:text-[46px] lg:text-[52px] leading-[1.08] text-[#F5F0E4] mb-5 sm:mb-6">
            Ready to Invest in Sharjah?
          </h2>
          <p className="text-sm sm:text-base text-[#B5AC9C] leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
            Murivest&apos;s advisory team structures bespoke investment solutions across Sharjah&apos;s free zones,
            industrial corridors, and emerging mixed-use districts. Request a market brief or schedule a private
            consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/united-arab-emirates/contact"
              className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 bg-[#B8956B] text-[#0E0B08] text-sm font-medium tracking-wide hover:bg-[#C9A87D] transition-colors"
              style={{ minHeight: 48 }}
            >
              Request Market Brief
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
            <Link
              href="/united-arab-emirates/contact?type=submit-property"
              className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 border border-[#EDE6D9]/20 text-[#EDE6D9] text-sm font-medium tracking-wide hover:border-[#B8956B]/60 hover:text-[#B8956B] transition-colors"
              style={{ minHeight: 48 }}
            >
              Submit a Property
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Related Pages ────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-8 md:px-12 lg:px-20 border-t border-[#B8956B]/10">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#8A8275] mb-5 sm:mb-6">
            Related Advisory
          </p>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {[
              { label: 'UAE Overview', href: '/united-arab-emirates' },
              { label: 'Dubai Advisory', href: '/united-arab-emirates/dubai' },
              { label: 'Abu Dhabi Advisory', href: '/united-arab-emirates/abu-dhabi' },
              { label: 'Industrial Asset Class', href: '/united-arab-emirates/asset-classes/industrial' },
              { label: 'UAE Listings', href: '/united-arab-emirates/listings' },
              { label: 'Off-Market Pipeline', href: '/united-arab-emirates/listings/off-market' },
              { label: 'Investment Guides', href: '/united-arab-emirates/investment-guides' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-[#B5AC9C] border border-[#B8956B]/15 px-3.5 sm:px-4 py-2 hover:border-[#B8956B]/50 hover:text-[#B8956B] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Footer ────────────────────────────────────────────────────────── */}
      <section className="px-5 sm:px-8 py-12 sm:py-16 border-t border-[#B8956B]/10 text-center">
        <p className="text-xs sm:text-sm text-[#B5AC9C] mb-3 sm:mb-4">
          Murivest Dubai — Institutional Commercial Real Estate Advisory
        </p>
        <p className="text-[10px] sm:text-xs text-[#8A8275]">Sharjah, United Arab Emirates</p>
      </section>
    </main>
  )
}