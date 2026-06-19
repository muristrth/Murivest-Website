import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Database,
  Hotel,
  Landmark,
  LayoutGrid,
  ShoppingBag,
  Truck,
  Warehouse,
} from 'lucide-react';
import { UaeInternalBreadcrumb, UaeInternalLinks } from '../_components/UaeInternalLinks';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'UAE Commercial Real Estate Asset Classes | Institutional Allocation Framework | Murivest',
  description:
    'Institutional framework for capital allocation across eight UAE commercial real estate sectors — office, logistics, industrial, data centres, hospitality and alternative assets.',
  openGraph: {
    title: 'UAE Commercial Real Estate Asset Classes — Institutional Allocation Framework',
    description:
      'Institutional investors allocate to sectors first and assets second. Explore Murivest\'s allocation framework across eight UAE CRE sectors.',
    url: 'https://murivest.com/united-arab-emirates/asset-classes',
    siteName: 'Murivest Global',
    type: 'website',
  },
  alternates: {
    canonical: 'https://murivest.com/united-arab-emirates/asset-classes',
  },
};

// ─── Structured data ─────────────────────────────────────────────────────────

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'UAE Commercial Real Estate Asset Classes — Institutional Allocation Framework',
  description:
    'Institutional framework for capital allocation across eight UAE commercial real estate asset classes.',
  url: 'https://murivest.com/united-arab-emirates/asset-classes',
  publisher: {
    '@type': 'Organization',
    name: 'Murivest Global',
    url: 'https://murivest.com',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://murivest.com/united-arab-emirates/asset-classes',
  },
};

// ─── Internal components ───────────────────────────────────────────────────────

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="font-body text-[11px] font-semibold tracking-[0.25em] uppercase text-[#B8956B] mb-4 md:mb-5">
      {text}
    </p>
  );
}

function RatingDots({ score, max = 5 }: { score: number; max?: number }) {
  return (
    <div className="flex gap-1.5 items-center">
      {Array.from({ length: max }).map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${i < score ? 'bg-[#B8956B]' : 'bg-[#1A1A1A]/12'}`}
        />
      ))}
    </div>
  );
}

// ─── Sector palette ─── each sector gets a unique but on-brand gradient base
// These make card image placeholders visually distinct without needing photos.
const sectorGradient: Record<string, string> = {
  office: 'from-[#1B4332]/20 via-[#1B4332]/8 to-[#E8E6E1]',
  industrial: 'from-[#3D2B1A]/18 via-[#6B4C2A]/8 to-[#EDE9E2]',
  logistics: 'from-[#1A2E3D]/20 via-[#2A4A60]/8 to-[#E4EAF0]',
  retail: 'from-[#3D1A1A]/15 via-[#B85C3A]/8 to-[#EDE5E0]',
  hospitality: 'from-[#2D1A3D]/18 via-[#5A3A7A]/8 to-[#EAE4F0]',
  'data-centers': 'from-[#0D1F17]/25 via-[#1B4332]/10 to-[#E0EDE6]',
  'mixed-use': 'from-[#1A2A1A]/18 via-[#3A5A3A]/8 to-[#E4EDE4]',
  land: 'from-[#2A2010]/18 via-[#6B5A2A]/8 to-[#EDE8DA]',
};

// ─── Asset class data ─────────────────────────────────────────────────────────

const assetClasses = [
  {
    slug: 'office',
    name: 'Office',
    icon: Building2,
    role: 'Core Income',
    riskLabel: 'Core — Core-Plus',
    riskColor: 'bg-[#1B4332]/10 text-[#1B4332]',
    incomeNote:
      'Long-duration leases with institutional-grade covenants. Predictable, contractual cash flow anchored by financial services, legal and technology occupiers in DIFC and ADGM.',
    appreciationNote:
      'Moderate. Driven by rental growth in prime submarkets and cap rate compression as institutional demand intensifies around free zone office product.',
    incomeRating: 5,
    growthRating: 3,
    liquidityRating: 4,
    capitalRating: 3,
    demandRating: 5,
  },
  {
    slug: 'industrial',
    name: 'Industrial',
    icon: Warehouse,
    role: 'Income + Growth',
    riskLabel: 'Core-Plus — Value-Add',
    riskColor: 'bg-amber-50 text-amber-800',
    incomeNote:
      'Medium-term leases across manufacturing, assembly and light industrial occupiers. Income is less contractual than office but supported by strong demand from UAE\'s trade corridor positioning.',
    appreciationNote:
      'Moderate to High. Supply chain reshoring and manufacturing diversification are elevating asset values in strategically located industrial estates near major ports.',
    incomeRating: 4,
    growthRating: 4,
    liquidityRating: 3,
    capitalRating: 3,
    demandRating: 4,
  },
  {
    slug: 'logistics',
    name: 'Logistics',
    icon: Truck,
    role: 'Growth Income',
    riskLabel: 'Core-Plus',
    riskColor: 'bg-sky-50 text-sky-800',
    incomeNote:
      'Structural demand from e-commerce, regional distribution and cold chain logistics. Covenant quality improving as global third-party logistics operators anchor Jebel Ali and Dubai South facilities.',
    appreciationNote:
      'High. E-commerce penetration, supply chain transformation and UAE\'s position as a global trade nexus between Asia, Europe and Africa generate sustained rental growth.',
    incomeRating: 4,
    growthRating: 5,
    liquidityRating: 3,
    capitalRating: 3,
    demandRating: 5,
  },
  {
    slug: 'retail',
    name: 'Retail',
    icon: ShoppingBag,
    role: 'Income',
    riskLabel: 'Core — Value-Add',
    riskColor: 'bg-[#1B4332]/10 text-[#1B4332]',
    incomeNote:
      'Variable lease structures with turnover-linked components. Tourism, population growth and domestic consumption support prime retail income. Secondary retail faces structural headwinds.',
    appreciationNote:
      'Selective. Tourism-anchored destination retail outperforms. Bifurcation between prime and secondary product is widening and is expected to persist structurally.',
    incomeRating: 4,
    growthRating: 2,
    liquidityRating: 3,
    capitalRating: 2,
    demandRating: 3,
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    icon: Hotel,
    role: 'Income + Appreciation',
    riskLabel: 'Value-Add — Opportunistic',
    riskColor: 'bg-rose-50 text-rose-800',
    incomeNote:
      'Operating income correlated with RevPAR, ADR and occupancy. Highly sensitive to tourism volume, MICE activity and global travel sentiment. Operator quality is a primary underwriting variable.',
    appreciationNote:
      'High in premium locations. Brand affiliation, operator quality and proximity to anchoring attractions create asymmetric upside in curated hospitality assets.',
    incomeRating: 3,
    growthRating: 4,
    liquidityRating: 2,
    capitalRating: 4,
    demandRating: 3,
  },
  {
    slug: 'data-centers',
    name: 'Data Centres',
    icon: Database,
    role: 'Alternative Growth',
    riskLabel: 'Core-Plus — Value-Add',
    riskColor: 'bg-violet-50 text-violet-800',
    incomeNote:
      'Long-duration contracts with hyperscalers and enterprise tenants. Power infrastructure commitments create high switching costs and income durability. Specialised operational expertise required.',
    appreciationNote:
      'Very High. AI infrastructure, cloud migration and digital economy growth create structurally undersupplied conditions in GCC markets. Early-mover advantages are compressing quickly.',
    incomeRating: 4,
    growthRating: 5,
    liquidityRating: 2,
    capitalRating: 5,
    demandRating: 5,
  },
  {
    slug: 'mixed-use',
    name: 'Mixed Use',
    icon: LayoutGrid,
    role: 'Diversified Income',
    riskLabel: 'Core-Plus — Value-Add',
    riskColor: 'bg-amber-50 text-amber-800',
    incomeNote:
      'Blended income from office, retail, F&B and residential components. Diversification reduces single-sector income concentration risk. Placemaking credentials improve tenant retention.',
    appreciationNote:
      'Moderate to High. Destination assets with strong placemaking attract institutional capital at compressed yields and benefit from the compounding of multiple sector tailwinds simultaneously.',
    incomeRating: 4,
    growthRating: 4,
    liquidityRating: 3,
    capitalRating: 4,
    demandRating: 4,
  },
  {
    slug: 'land',
    name: 'Development Land',
    icon: Landmark,
    role: 'Capital Appreciation',
    riskLabel: 'Opportunistic',
    riskColor: 'bg-rose-50 text-rose-800',
    incomeNote:
      'Minimal current income. Returns driven entirely by planning gain, density uplift and development execution capability. Suitable only for long-duration mandates with operational development expertise.',
    appreciationNote:
      'Very High with binary outcomes. Significant upside in master-planned community adjacency, infrastructure-driven rezoning events and strategic logistics corridor land.',
    incomeRating: 1,
    growthRating: 5,
    liquidityRating: 1,
    capitalRating: 2,
    demandRating: 3,
  },
];

const featuredOpportunities = [
  {
    sector: 'Office',
    location: 'DIFC, Dubai',
    summary:
      'Grade A multi-tenanted core office with institutional covenant profile. Long WAULT with indexed rental escalation and active asset management upside.',
    href: '/properties?assetClass=office',
    accentColor: 'bg-[#1B4332]',
  },
  {
    sector: 'Logistics',
    location: 'Jebel Ali Free Zone',
    summary:
      'Modern last-mile logistics facility in the primary GCC distribution corridor. Triple-net lease structure with a blue-chip anchor operator in situ.',
    href: '/properties?assetClass=logistics',
    accentColor: 'bg-sky-800',
  },
  {
    sector: 'Data Centre',
    location: 'Dubai South',
    summary:
      'Purpose-built carrier-neutral facility with hyperscaler pre-commitment. Tier III specification with a credible renewable energy transition pathway.',
    href: '/properties?assetClass=data-centers',
    accentColor: 'bg-violet-800',
  },
  {
    sector: 'Hospitality',
    location: 'Yas Island, Abu Dhabi',
    summary:
      'Luxury resort asset with operator management agreement in place. Repositioning opportunity alongside sovereign master-plan investment in the surrounding precinct.',
    href: '/properties?assetClass=hospitality',
    accentColor: 'bg-rose-800',
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function UaeAssetClassesPage() {
  return (
    <main className="bg-[#FAF9F6] text-[#1A1A1A] font-body antialiased selection:bg-[#1B4332] selection:text-white overflow-x-hidden">
      <Script
        id="schema-uae-asset-classes"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* ── Fixed navigation ──────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#1A1A1A]/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="font-display text-xl md:text-2xl text-[#1B4332] tracking-tight">
            Murivest
          </Link>
          <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-sm text-[#4A4A4A]">
            <Link href="/united-arab-emirates" className="hover:text-[#1B4332] transition-colors">UAE</Link>
            <Link href="#framework" className="hover:text-[#1B4332] transition-colors">Framework</Link>
            <Link href="#asset-classes" className="hover:text-[#1B4332] transition-colors">Sectors</Link>
            <Link href="#comparison" className="hover:text-[#1B4332] transition-colors">Compare</Link>
            <Link href="#opportunities" className="hover:text-[#1B4332] transition-colors">Opportunities</Link>
            <Link
              href="/united-arab-emirates/contact"
              className="px-5 py-2.5 bg-[#1B4332] text-white text-sm hover:bg-[#142d23] transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* ── Breadcrumb ───────────────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-24 md:pt-28">
        <UaeInternalBreadcrumb />
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          HERO — Capital allocation across sectors
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[88vh] md:min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Cinematic dark-green gradient base — swap for real aerial image via next/image below */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#091A10] via-[#0F2C1C] to-[#1B4332]" />

        {/* Subtle grid texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 79px, #FAF9F6 79px, #FAF9F6 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, #FAF9F6 79px, #FAF9F6 80px)',
          }}
        />

        {/* Hero content */}
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-36 pb-0 w-full">
          <div className="max-w-4xl pb-16 md:pb-24">
            <SectionLabel text="UAE — Institutional Capital Allocation" />
            <h1 className="font-display text-[40px] md:text-[62px] lg:text-[78px] leading-[1.02] text-white mb-7 md:mb-8">
              Allocate Capital Across the UAE&apos;s Most Strategic Real Estate Sectors
            </h1>
            <p className="text-base md:text-xl text-white/65 leading-relaxed max-w-3xl mb-10 md:mb-12">
              Institutional investors allocate to sectors first and assets second. Each UAE commercial
              real estate sector carries a distinct risk profile, income structure and capital
              appreciation trajectory. Understanding these differences is the foundation of disciplined
              portfolio construction.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                href="#asset-classes"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1B4332] text-sm font-medium tracking-wide hover:bg-[#FAF9F6] transition-colors"
                style={{ minHeight: 48 }}
              >
                Explore Asset Classes
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link
                href="/properties"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white text-sm font-medium tracking-wide hover:border-white/55 transition-colors"
                style={{ minHeight: 48 }}
              >
                View Live Opportunities
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>

        {/* Metrics strip — pinned to base of hero */}
        <div className="relative border-t border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {[
                { value: '8', label: 'Asset Classes' },
                { value: 'AED 2.4T+', label: 'Aggregate Market Value' },
                { value: 'Core — Opportunistic', label: 'Risk Spectrum' },
                { value: 'Institutional Grade', label: 'Underwriting Standard' },
              ].map((m) => (
                <div key={m.label} className="py-5 md:py-6 px-4 md:px-8 first:pl-0">
                  <p className="font-display text-xl md:text-2xl text-white mb-0.5">{m.value}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 1 — The Capital Allocation Framework
      ════════════════════════════════════════════════════════════════════ */}
      <section id="framework" className="py-24 md:py-36 lg:py-44 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Sticky left column */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <SectionLabel text="Capital Allocation Framework" />
              <h2 className="font-display text-[30px] md:text-[42px] lg:text-[50px] leading-[1.06] text-[#1A1A1A] mb-6">
                Real Estate Is Not One Asset Class
              </h2>
              <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed mb-5">
                Within the institutional allocation process, commercial real estate is a broad category
                encompassing assets with fundamentally different income profiles, tenant structures,
                capital requirements and macro sensitivities. Treating the sector as monolithic is the
                defining error of unsophisticated allocators.
              </p>
              <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed mb-8">
                Each sector behaves as a discrete investment strategy with its own volatility
                characteristics, liquidity runway, covenant quality spectrum and sensitivity to
                technology, trade, demographics and monetary conditions. Sector selection precedes
                asset selection in the institutional underwriting process.
              </p>

              {/* Pull-quote card */}
              <div className="rounded-none bg-[#1B4332] text-white p-6 md:p-8 border-l-2 border-[#B8956B]">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-3">
                  Investment Committee Principle
                </p>
                <p className="font-display text-lg md:text-xl leading-snug text-white">
                  &ldquo;Sector allocation contributes more to portfolio risk-return outcomes than any
                  individual asset selection decision.&rdquo;
                </p>
                <p className="mt-4 text-[10px] text-white/40 uppercase tracking-wider">
                  Murivest Research — UAE Capital Markets
                </p>
              </div>
            </div>

            {/* Right: 8-sector overview grid */}
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-3.5">
                {[
                  {
                    name: 'Office',
                    tag: 'Core Income',
                    body: 'Long-duration income, institutional covenants, correlated with professional services employment. The anchor of most core real estate mandates.',
                  },
                  {
                    name: 'Industrial',
                    tag: 'Income + Growth',
                    body: 'Trade-linked demand, medium-term leases, correlated with manufacturing output and export growth from UAE free zone expansion.',
                  },
                  {
                    name: 'Logistics',
                    tag: 'Growth Income',
                    body: 'Structural demand from e-commerce, cold chain and regional distribution. Carries the strongest structural demand tailwinds of any UAE sector.',
                  },
                  {
                    name: 'Retail',
                    tag: 'Income',
                    body: 'Tourism-dependent income, variable lease structures. Bifurcated market: prime destination retail outperforms; secondary is challenged structurally.',
                  },
                  {
                    name: 'Hospitality',
                    tag: 'Income + Appreciation',
                    body: 'Operating income with RevPAR sensitivity. Significant brand and operator quality premium. Sovereign tourism strategy is a structural tailwind.',
                  },
                  {
                    name: 'Data Centres',
                    tag: 'Alternative Growth',
                    body: 'Power infrastructure with hyperscaler demand. Highest growth potential in the UAE real estate universe. Requires specialist operational capability.',
                  },
                  {
                    name: 'Mixed Use',
                    tag: 'Diversified',
                    body: 'Blended income from multiple uses. Placemaking quality creates demand resilience and attracts compressed institutional yields on stabilised assets.',
                  },
                  {
                    name: 'Development Land',
                    tag: 'Opportunistic',
                    body: 'Pure capital appreciation. Long duration, binary outcomes, high return potential. Suitable only for mandates with operational development capability.',
                  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="p-5 md:p-6 border border-[#1A1A1A]/6 bg-[#FAF9F6] hover:border-[#1B4332]/20 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3 gap-3">
                      <h3 className="font-display text-lg text-[#1A1A1A]">{item.name}</h3>
                      <span className="text-[9px] uppercase tracking-[0.18em] text-[#B8956B] bg-[#B8956B]/10 px-2 py-1.5 whitespace-nowrap shrink-0">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-sm text-[#4A4A4A] leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 2 — Interactive Asset Class Grid
      ════════════════════════════════════════════════════════════════════ */}
      <section id="asset-classes" className="py-24 md:py-36 lg:py-44 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <SectionLabel text="Sector Analysis" />
              <h2 className="font-display text-[30px] md:text-[42px] lg:text-[50px] leading-[1.06] text-[#1A1A1A] max-w-2xl">
                Eight Sectors. Eight Investment Propositions.
              </h2>
            </div>
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 text-sm text-[#4A4A4A] border border-[#1A1A1A]/10 px-5 py-3 hover:border-[#1B4332] hover:text-[#1B4332] transition-colors shrink-0"
            >
              View All Opportunities
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
            {assetClasses.map((ac) => {
              const Icon = ac.icon;
              const gradient = sectorGradient[ac.slug] ?? 'from-[#E8E6E1] to-[#D8D6D0]';

              return (
                <article
                  key={ac.slug}
                  className="group flex flex-col bg-white border border-[#1A1A1A]/6 hover:border-[#1B4332]/25 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Visual header */}
                  <div className={`relative h-44 bg-gradient-to-br ${gradient} overflow-hidden flex items-center justify-center`}>
                    <Icon
                      className="w-14 h-14 text-[#1A1A1A]/10 group-hover:text-[#1B4332]/20 transition-colors duration-300"
                      strokeWidth={0.75}
                    />
                    {/* Risk badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`text-[9px] uppercase tracking-[0.15em] px-2.5 py-1.5 font-medium ${ac.riskColor}`}>
                        {ac.riskLabel}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5 md:p-6">
                    <div className="flex items-start justify-between mb-1 gap-2">
                      <h3 className="font-display text-xl text-[#1A1A1A]">{ac.name}</h3>
                      <Icon className="w-4 h-4 text-[#B8956B] shrink-0 mt-1" strokeWidth={1.5} />
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B] mb-4">
                      {ac.role}
                    </p>

                    {/* Rating bars */}
                    <div className="space-y-2.5 mb-5 pb-5 border-b border-[#1A1A1A]/5">
                      {[
                        { label: 'Income', score: ac.incomeRating },
                        { label: 'Growth', score: ac.growthRating },
                        { label: 'Liquidity', score: ac.liquidityRating },
                      ].map((r) => (
                        <div key={r.label} className="flex items-center justify-between">
                          <span className="text-[10px] text-[#8A8A8A] uppercase tracking-wider">{r.label}</span>
                          <RatingDots score={r.score} />
                        </div>
                      ))}
                    </div>

                    <p className="text-xs text-[#4A4A4A] leading-relaxed mb-5 flex-1">
                      {ac.incomeNote}
                    </p>

                    <details className="group/detail mb-5">
                      <summary className="cursor-pointer list-none text-xs text-[#8A8A8A] hover:text-[#1B4332] transition-colors select-none">
                        Appreciation outlook ↓
                      </summary>
                      <p className="mt-2 text-xs text-[#4A4A4A] leading-relaxed">
                        {ac.appreciationNote}
                      </p>
                    </details>

                    <Link
                      href={`/properties?assetClass=${ac.slug}`}
                      className="flex items-center justify-between gap-2 text-sm text-[#1B4332] border border-[#1B4332]/20 px-4 py-3 hover:bg-[#1B4332] hover:text-white hover:border-[#1B4332] transition-all"
                    >
                      <span>View Opportunities</span>
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 3 — Portfolio Construction for Family Offices
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 lg:py-44 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            <div className="lg:col-span-4">
              <SectionLabel text="Portfolio Construction" />
              <h2 className="font-display text-[30px] md:text-[42px] lg:text-[48px] leading-[1.06] text-[#1A1A1A] mb-6">
                Allocation Across the Wealth Spectrum
              </h2>
              <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed mb-5">
                Capital allocation to UAE commercial real estate varies materially across the wealth
                spectrum. A $10M allocation and a $1B allocation demand fundamentally different sector
                exposures, liquidity management frameworks and income timing profiles.
              </p>
              <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed mb-8">
                Murivest structures sector allocation conversations around four portfolio roles: core
                income preservation, growth capital, inflation protection and generational compounding.
                Each sector plays a defined role within this framework.
              </p>
              <Link
                href="/united-arab-emirates/contact"
                className="inline-flex items-center gap-2 text-sm text-[#1B4332] border border-[#1B4332]/20 px-5 py-3 hover:bg-[#1B4332] hover:text-white hover:border-[#1B4332] transition-all"
              >
                Discuss Allocation Strategy
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>

            <div className="lg:col-span-8 space-y-5">

              {/* Tier I */}
              <div className="p-6 md:p-8 border border-[#1A1A1A]/6 bg-[#FAF9F6]">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B] mb-1">Wealth Tier I</p>
                    <h3 className="font-display text-xl text-[#1A1A1A]">USD 10M – 50M</h3>
                  </div>
                  <span className="text-[9px] uppercase tracking-wider bg-[#1B4332]/8 text-[#1B4332] px-3 py-2 shrink-0">
                    Foundation
                  </span>
                </div>
                <p className="text-sm text-[#4A4A4A] leading-relaxed mb-5">
                  Primary focus on income preservation with selective core-plus exposure. Limited
                  diversification capacity at this scale favours concentrated positions in the
                  highest-conviction income-generating sectors with institutional-quality covenants.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { sector: 'Prime Office', pct: '50–60%', role: 'Core Income' },
                    { sector: 'Logistics', pct: '25–35%', role: 'Growth Income' },
                    { sector: 'Industrial', pct: '10–20%', role: 'Growth' },
                  ].map((item) => (
                    <div key={item.sector} className="bg-white p-4 border border-[#1A1A1A]/5">
                      <p className="font-display text-xl text-[#1B4332] mb-1">{item.pct}</p>
                      <p className="text-xs font-medium text-[#1A1A1A] mb-0.5">{item.sector}</p>
                      <p className="text-[10px] text-[#8A8A8A] uppercase tracking-wider">{item.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tier II */}
              <div className="p-6 md:p-8 border border-[#1A1A1A]/6 bg-[#FAF9F6]">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B] mb-1">Wealth Tier II</p>
                    <h3 className="font-display text-xl text-[#1A1A1A]">USD 50M – 500M</h3>
                  </div>
                  <span className="text-[9px] uppercase tracking-wider bg-[#B8956B]/10 text-[#8A6440] px-3 py-2 shrink-0">
                    Diversified
                  </span>
                </div>
                <p className="text-sm text-[#4A4A4A] leading-relaxed mb-5">
                  Sufficient scale to implement full multi-sector diversification. A core-plus income
                  base is supplemented with higher-growth alternative sectors and selective
                  opportunistic positions aligned with the mandate&apos;s duration requirements.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { sector: 'Office + Logistics', pct: '40–50%', role: 'Core Base' },
                    { sector: 'Data Centres', pct: '20–30%', role: 'Alternative Growth' },
                    { sector: 'Hospitality + Land', pct: '20–30%', role: 'Appreciation' },
                  ].map((item) => (
                    <div key={item.sector} className="bg-white p-4 border border-[#1A1A1A]/5">
                      <p className="font-display text-xl text-[#1B4332] mb-1">{item.pct}</p>
                      <p className="text-xs font-medium text-[#1A1A1A] mb-0.5">{item.sector}</p>
                      <p className="text-[10px] text-[#8A8A8A] uppercase tracking-wider">{item.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tier III */}
              <div className="p-6 md:p-8 bg-[#1B4332] text-white border border-[#1B4332]">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/55 mb-1">Wealth Tier III</p>
                    <h3 className="font-display text-xl text-white">USD 500M+</h3>
                  </div>
                  <span className="text-[9px] uppercase tracking-wider bg-white/10 text-white px-3 py-2 shrink-0">
                    Institutional
                  </span>
                </div>
                <p className="text-sm text-white/70 leading-relaxed mb-5">
                  Full-spectrum allocation capacity including direct development positions, operating
                  asset repositioning and multi-jurisdictional deployment. Multi-generational
                  compounding horizon with legacy structuring, trust and succession planning
                  requirements integrated into the capital allocation framework from the outset.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { sector: 'Core Office & Logistics', pct: '30–40%', role: 'Preservation' },
                    { sector: 'Data Centres & Industrial', pct: '25–35%', role: 'Growth' },
                    { sector: 'Hospitality & Mixed Use', pct: '15–20%', role: 'Inflation Hedge' },
                    { sector: 'Land & Development', pct: '10–15%', role: 'Generational' },
                  ].map((item) => (
                    <div key={item.sector} className="bg-white/8 p-4">
                      <p className="font-display text-xl text-white mb-1">{item.pct}</p>
                      <p className="text-xs text-white/80 mb-0.5 leading-snug">{item.sector}</p>
                      <p className="text-[10px] text-white/45 uppercase tracking-wider">{item.role}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 4 — Where Global Capital Is Moving
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 lg:py-44 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Four trend cards */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    trend: 'Digital Infrastructure',
                    sectors: ['Data Centres', 'Industrial'],
                    body: 'AI model training, cloud migration and enterprise digital transformation create structurally undersupplied data centre capacity across GCC markets. Hyperscaler pre-commitments are compressing yields toward core-plus territory and accelerating institutional capital rotation into the sector.',
                    icon: Database,
                  },
                  {
                    trend: 'Supply Chain Reconfiguration',
                    sectors: ['Logistics', 'Industrial'],
                    body: 'Nearshoring, dual-sourcing and inventory buffer expansion are driving demand for modern logistics facilities in strategically located trade corridors. The UAE\'s position between Asia, Africa and Europe amplifies this structural shift in global supply chain architecture.',
                    icon: Truck,
                  },
                  {
                    trend: 'Knowledge Economy Consolidation',
                    sectors: ['Prime Office', 'Mixed Use'],
                    body: 'Professional services, technology and financial institutions are consolidating regional operations in DIFC and ADGM. Grade A office demand is bifurcating sharply from secondary product as tenant quality requirements intensify alongside post-pandemic flight to quality.',
                    icon: Building2,
                  },
                  {
                    trend: 'Experiential Capital Deployment',
                    sectors: ['Hospitality', 'Retail'],
                    body: 'Sovereign tourism strategies and infrastructure investment are extending the UAE\'s tourism season and broadening its visitor demographic. Premium hospitality and destination retail assets in anchored locations benefit disproportionately from these structural government-led demand drivers.',
                    icon: Hotel,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.trend} className="p-5 md:p-6 bg-white border border-[#1A1A1A]/6">
                      <Icon className="w-5 h-5 text-[#B8956B] mb-5" strokeWidth={1.5} />
                      <h3 className="font-display text-lg text-[#1A1A1A] mb-2.5">{item.trend}</h3>
                      <div className="flex gap-1.5 mb-4 flex-wrap">
                        {item.sectors.map((s) => (
                          <span
                            key={s}
                            className="text-[9px] uppercase tracking-[0.18em] bg-[#1B4332]/8 text-[#1B4332] px-2 py-1.5"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-[#4A4A4A] leading-relaxed">{item.body}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right sticky */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 order-1 lg:order-2">
              <SectionLabel text="Structural Capital Flows" />
              <h2 className="font-display text-[30px] md:text-[42px] lg:text-[48px] leading-[1.06] text-[#1A1A1A] mb-6">
                Where Institutional Capital Is Relocating
              </h2>
              <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed mb-5">
                Global institutional capital is not flowing uniformly across UAE commercial real estate
                sectors. Technology disruption, demographic change, supply chain reconfiguration and
                sovereign infrastructure investment are concentrating demand into specific sectors with
                structural supply constraints.
              </p>
              <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed mb-8">
                Understanding these macro themes at the sector level — before individual asset
                underwriting commences — determines the quality of long-term risk-adjusted return
                outcomes across a portfolio.
              </p>
              <Link
                href="/united-arab-emirates/market-outlook"
                className="inline-flex items-center gap-2 text-sm text-[#1B4332] border border-[#1B4332]/20 px-5 py-3 hover:bg-[#1B4332] hover:text-white hover:border-[#1B4332] transition-all"
              >
                Read UAE Market Outlook
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 5 — Asset Class Comparison Matrix
      ════════════════════════════════════════════════════════════════════ */}
      <section id="comparison" className="py-24 md:py-36 lg:py-44 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 md:mb-16">
            <SectionLabel text="Investment Committee Tool" />
            <h2 className="font-display text-[30px] md:text-[42px] lg:text-[50px] leading-[1.06] text-[#1A1A1A] max-w-2xl">
              Asset Class Comparison Matrix
            </h2>
            <p className="mt-4 text-sm md:text-base text-[#4A4A4A] max-w-2xl leading-relaxed">
              A comparative view of five institutional metrics across all eight UAE commercial real
              estate sectors. Ratings reflect structural sector characteristics, not market timing.
            </p>
          </div>

          <div className="overflow-x-auto border border-[#1A1A1A]/8">
            <table className="w-full text-left min-w-[720px]">
              <thead>
                <tr className="border-b border-[#1A1A1A]/8 bg-[#FAF9F6]">
                  <th className="p-4 md:p-5 text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A] font-medium w-40">
                    Asset Class
                  </th>
                  {['Income Stability', 'Growth Potential', 'Liquidity', 'Capital Intensity', 'Inst. Demand'].map(
                    (col) => (
                      <th key={col} className="p-4 md:p-5 text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A] font-medium">
                        {col}
                      </th>
                    )
                  )}
                  <th className="p-4 md:p-5 text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A] font-medium w-32">
                    Explore
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A1A1A]/5">
                {assetClasses.map((ac) => (
                  <tr key={ac.slug} className="hover:bg-[#FAF9F6]/60 transition-colors">
                    <td className="p-4 md:p-5">
                      <p className="font-display text-base text-[#1A1A1A]">{ac.name}</p>
                      <p className="text-[9px] uppercase tracking-[0.18em] text-[#B8956B] mt-0.5">{ac.role}</p>
                    </td>
                    <td className="p-4 md:p-5"><RatingDots score={ac.incomeRating} /></td>
                    <td className="p-4 md:p-5"><RatingDots score={ac.growthRating} /></td>
                    <td className="p-4 md:p-5"><RatingDots score={ac.liquidityRating} /></td>
                    <td className="p-4 md:p-5"><RatingDots score={ac.capitalRating} /></td>
                    <td className="p-4 md:p-5"><RatingDots score={ac.demandRating} /></td>
                    <td className="p-4 md:p-5">
                      <Link
                        href={`/properties?assetClass=${ac.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs text-[#1B4332] hover:underline"
                      >
                        Opportunities
                        <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-5 py-3 border-t border-[#1A1A1A]/5 bg-[#FAF9F6]">
              <p className="text-[11px] text-[#8A8A8A]">
                Ratings reflect structural sector characteristics scored 1–5. Based on Murivest
                assessment of UAE market conditions, 2025–2026. Not investment advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 6 — Featured UAE Opportunities
      ════════════════════════════════════════════════════════════════════ */}
      <section id="opportunities" className="py-24 md:py-36 lg:py-44 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <SectionLabel text="Curated Opportunities" />
              <h2 className="font-display text-[30px] md:text-[42px] lg:text-[50px] leading-[1.06] text-[#1A1A1A] max-w-2xl">
                Featured UAE Investment Opportunities
              </h2>
            </div>
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 text-sm text-[#4A4A4A] border border-[#1A1A1A]/10 px-5 py-3 hover:border-[#1B4332] hover:text-[#1B4332] transition-colors shrink-0"
            >
              View All Properties
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
            {featuredOpportunities.map((opp) => (
              <Link
                key={opp.location}
                href={opp.href}
                className="group flex flex-col bg-white border border-[#1A1A1A]/6 hover:border-[#1B4332]/25 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Visual placeholder */}
                <div className="relative h-48 bg-[#E8E6E1] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/8 to-transparent group-hover:from-[#1A1A1A]/15 transition-all duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className={`text-[9px] uppercase tracking-[0.18em] ${opp.accentColor} text-white px-2.5 py-1.5`}>
                      {opp.sector}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-[#1B4332]" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B] mb-2.5">
                    {opp.location}
                  </p>
                  <p className="text-sm text-[#4A4A4A] leading-relaxed flex-1">{opp.summary}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm text-[#1B4332] font-medium">
                    <span>View Asset</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Off-market access callout */}
          <div className="mt-8 md:mt-10 p-5 md:p-7 bg-[#FAF9F6] border border-[#1A1A1A]/6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <p className="text-sm text-[#4A4A4A] leading-relaxed max-w-xl">
              Murivest maintains access to off-market opportunities across all UAE commercial sectors.
              Curated opportunities are shared privately with registered institutional counterparties
              and qualified family offices.
            </p>
            <Link
              href="/united-arab-emirates/contact"
              className="inline-flex items-center gap-2 text-sm text-[#1B4332] border border-[#1B4332]/20 px-5 py-3 hover:bg-[#1B4332] hover:text-white hover:border-[#1B4332] transition-all shrink-0 whitespace-nowrap"
            >
              Register for Off-Market Access
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 7 — Why Sophisticated Capital Uses Murivest
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 lg:py-44 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            <div className="lg:col-span-4">
              <SectionLabel text="Advisory Capability" />
              <h2 className="font-display text-[30px] md:text-[40px] lg:text-[46px] leading-[1.06] text-[#1A1A1A] mb-6">
                Why Sophisticated Capital Uses Murivest
              </h2>
              <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed mb-6">
                Murivest operates as a strategic capital advisor rather than a property agent. The
                distinction determines the quality of counsel, the breadth of market access and the
                alignment of interests across the full investment lifecycle.
              </p>
              <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed mb-8">
                Advisory engagements begin with mandate definition and sector allocation — not with
                asset listings. Every recommendation emerges from research and underwriting, not from
                inventory availability.
              </p>
              <Link
                href="/united-arab-emirates/contact"
                className="inline-flex items-center gap-2 text-sm text-[#1B4332] border border-[#1B4332]/20 px-5 py-3 hover:bg-[#1B4332] hover:text-white hover:border-[#1B4332] transition-all"
              >
                Discuss Advisory Services
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>

            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    capability: 'Institutional Market Research',
                    body: 'Proprietary intelligence across all UAE commercial sectors. Research informs sector allocation decisions before individual asset underwriting is initiated.',
                  },
                  {
                    capability: 'Cross-Border Capital Structuring',
                    body: 'Advisory spanning Singapore, UAE, UK, US and Kenya. Multi-jurisdictional allocation structures for internationally diversified mandates with complex domicile requirements.',
                  },
                  {
                    capability: 'Off-Market Asset Access',
                    body: 'Direct relationships with developers, asset owners and institutional vendors across GCC markets. Off-market access reduces competitive tension and acquisition cost premiums.',
                  },
                  {
                    capability: 'Institutional Underwriting',
                    body: 'Investment committee-grade analysis: scenario modelling, covenant quality assessment, exit route mapping and risk-adjusted return attribution across all sectors.',
                  },
                  {
                    capability: 'Transaction Advisory',
                    body: 'End-to-end transaction management from initial screening through to legal completion, including coordination of legal, tax, due diligence and financing counterparties.',
                  },
                  {
                    capability: 'Portfolio Construction',
                    body: 'Multi-sector allocation frameworks tailored to mandate duration, liquidity requirements, income targets and capital preservation constraints across different wealth tiers.',
                  },
                ].map((item) => (
                  <div key={item.capability} className="p-5 md:p-6 bg-[#FAF9F6] border border-[#1A1A1A]/6">
                    <CheckCircle2 className="w-5 h-5 text-[#B8956B] mb-4" strokeWidth={1.5} />
                    <h3 className="font-display text-base md:text-lg text-[#1A1A1A] mb-2">
                      {item.capability}
                    </h3>
                    <p className="text-sm text-[#4A4A4A] leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          Research links
      ════════════════════════════════════════════════════════════════════ */}
      <section id="research" className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel text="Research Library" />
          <h2 className="font-display text-[26px] md:text-[34px] leading-[1.1] text-[#1A1A1A] mb-8 max-w-xl">
            Sector Research and Market Intelligence
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { label: 'UAE Office Market Report', href: '/united-arab-emirates/research/uae-office-market-report' },
              { label: 'UAE Industrial Market Report', href: '/united-arab-emirates/research/uae-industrial-market-report' },
              { label: 'UAE Logistics Market Report', href: '/united-arab-emirates/research/uae-logistics-market-report' },
              { label: 'UAE Cap Rates', href: '/united-arab-emirates/research/uae-cap-rates' },
              { label: 'Data Centre Investment Guide', href: '/united-arab-emirates/research/data-centre-investment' },
              { label: 'UAE Hospitality Analysis', href: '/united-arab-emirates/research/uae-hospitality-report' },
              { label: 'Mixed-Use Development', href: '/united-arab-emirates/research/mixed-use-development' },
              { label: 'UAE Land Banking Guide', href: '/united-arab-emirates/research/land-banking' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between gap-3 border border-[#1A1A1A]/6 bg-[#FAF9F6] p-4 text-sm text-[#4A4A4A] hover:border-[#1B4332] hover:text-[#1B4332] transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          UAE Internal Link Map
      ════════════════════════════════════════════════════════════════════ */}
      <UaeInternalLinks title="Complete UAE Internal Link Map" />

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 8 — Private Allocation Consultation (CTA)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 lg:py-44 px-6 md:px-12 lg:px-20 bg-[#1B4332] text-white">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          <div className="lg:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-4">Private Advisory</p>
            <h2 className="font-display text-[36px] md:text-[54px] lg:text-[62px] leading-[1.04] mb-5">
              Build a UAE Real Estate Allocation Strategy
            </h2>
            <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-2xl mb-8">
              Murivest advisory engagements begin with sector allocation, not asset selection.
              Discussions are private, confidential and structured around your mandate, liquidity
              requirements and return objectives. There is no sales process — only institutional
              counsel.
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
                href="/united-arab-emirates"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
                style={{ minHeight: 48 }}
              >
                Return to UAE Hub
              </Link>
            </div>
          </div>

          {/* Engagement summary */}
          <div className="lg:col-span-5">
            <div className="space-y-3.5">
              {[
                { label: 'Engagement type', value: 'Private advisory consultation' },
                { label: 'Process', value: 'No obligation — no sales process' },
                { label: 'Scope', value: 'Sector allocation through to asset acquisition' },
                { label: 'Confidentiality', value: 'Fully confidential. NDA available on request.' },
                { label: 'Capital minimum', value: 'USD 5M+ for direct advisory engagement' },
                { label: 'Jurisdictions', value: 'UAE, Singapore, UK, US and Kenya' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 bg-white/5 border border-white/8"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B8956B] mt-2 shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/45 mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm text-white/75">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}