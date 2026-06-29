// app/united-arab-emirates/asset-classes/data-centers/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import {
  ArrowRight,
  ArrowUpRight,
  Database,
  Zap,
  Shield,
  TrendingUp,
  Cloud,
  Building2,
} from 'lucide-react';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'UAE Data Centres — The Frontier Institutional Asset Class | Murivest',
  description:
    'Data centres represent the fastest‑growing alternative asset class in UAE real estate, driven by cloud adoption, AI and digital transformation. Institutional advisory and off‑market opportunities.',
  openGraph: {
    title: 'Data Centres — The UAE Frontier Institutional Asset Class',
    description:
      'Institutional‑grade analysis of UAE data centre investment: hyperscaler demand, power infrastructure, AI growth and sector allocation strategy.',
    url: 'https://murivest.com/united-arab-emirates/asset-classes/data-centers',
    siteName: 'Murivest Global',
    type: 'website',
  },
  alternates: {
    canonical: 'https://murivest.com/united-arab-emirates/asset-classes/data-centers',
  },
};

// ─── Structured data ─────────────────────────────────────────────────────────

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'UAE Data Centres — The Frontier Institutional Asset Class',
  description:
    'Institutional framework for capital allocation to data centres in the UAE. Market intelligence, demand drivers, risk analysis and investment advisory.',
  url: 'https://murivest.com/united-arab-emirates/asset-classes/data-centers',
  publisher: {
    '@type': 'Organization',
    name: 'Murivest Global',
    url: 'https://murivest.com',
  },
};

// ─── Internal components ─────────────────────────────────────────────────────

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="font-body text-[11px] font-semibold tracking-[0.25em] uppercase text-[#B8956B] mb-4 md:mb-5">
      {text}
    </p>
  );
}

// ─── Page content ─────────────────────────────────────────────────────────────

const heroStats = [
  { value: 'AED 8.2B+', label: 'Projected 2026 Market Size' },
  { value: '25%+ CAGR', label: 'Colocation Demand Growth' },
  { value: '8–12%', label: 'Prime Net Yields' },
];

const whyUaePoints = [
  {
    title: 'Strategic Digital Hub',
    description:
      'Subsea cable landings in Fujairah, global cloud regions (AWS, Azure, Google Cloud) and the lowest latency corridor between Asia, Europe and Africa position the UAE as the regional interconnection nexus.',
    icon: Cloud,
    gradient: 'from-[#0D1F17]/30 via-[#1B4332]/10 to-[#E0EDE6]',
  },
  {
    title: 'Government & Sovereign Support',
    description:
      'Data centres are designated a strategic sector under UAE industrial policy. Initiatives from the Ministry of Industry and Advanced Technology, TDRA and sovereign investment entities create a predictable regulatory and infrastructure framework.',
    icon: Shield,
    gradient: 'from-[#2D1A3D]/20 via-[#5A3A7A]/8 to-[#EAE4F0]',
  },
  {
    title: 'Hyperscaler & Enterprise Demand',
    description:
      'AWS, Microsoft, Google and Oracle have all established UAE cloud regions, generating anchor tenant demand. Enterprise digital transformation, data localisation and AI/ML workloads further compress vacancy.',
    icon: Database,
    gradient: 'from-[#1A2E3D]/20 via-[#2A4A60]/8 to-[#E4EAF0]',
  },
  {
    title: 'Power & Infrastructure Corridors',
    description:
      'Dedicated data centre corridors in Dubai South and Abu Dhabi (KIZAD) offer land, power availability and robust connectivity. Power infrastructure quality and scalability are the sector’s primary location determinants.',
    icon: Zap,
    gradient: 'from-[#3D1A1A]/15 via-[#B85C3A]/8 to-[#EDE5E0]',
  },
];

const investmentCase = [
  {
    title: 'Structural Demand Tailwinds',
    detail:
      'Cloud penetration in MENA remains significantly below developed markets. Enterprise migration, AI adoption and data sovereignty regulations create a multi-year demand runway independent of traditional real estate cycles.',
  },
  {
    title: 'Income Durability',
    detail:
      'Hyperscaler and colocation leases typically span 10–20 years with built‑in escalations. Power infrastructure commitments create high switching costs and sticky tenant relationships.',
  },
  {
    title: 'Supply Constraint Premium',
    detail:
      'Available modern data centre capacity in the UAE is limited. Permitting complexity, power availability and construction lead times create a significant barrier to entry, favouring early movers and existing operators.',
  },
  {
    title: 'Capital Appreciation Trajectory',
    detail:
      'As the sector institutionalises, cap rate compression from 8–12% toward developed‑market levels (5–7%) offers substantial mark‑to‑market upside for stabilised, contracted assets.',
  },
];

const marketIntelligence = {
  averageYield: '8–12% net',
  occupancy: '94% (prime)',
  colocationRevenue: '+27% YoY',
  pipelineAdditions: '~120 MW by 2027',
  vacancy: '<4%',
  hyperscalerCommitments: '3 global cloud providers',
  foreignInvestment: '41% of transactions',
  powerCost: 'Competitive regional pricing',
};

const expertiseSections = [
  {
    title: 'Sector Overview',
    body: 'The UAE data centre market is transitioning from an emerging alternative to a core institutional allocation. Hyperscale, colocation and edge facilities each carry distinct risk‑return profiles and require specialist underwriting.',
  },
  {
    title: 'Current Trends',
    body: 'AI infrastructure demand is reshaping power density requirements (10‑40 kW per rack). Liquid cooling, renewable energy procurement and carrier‑neutral interconnection models are becoming prerequisites for institutional mandates.',
  },
  {
    title: 'Buyer Demand',
    body: 'Global infrastructure funds, digital infrastructure REITs, sovereign wealth funds and specialist operators are active. Competition for development sites with pre‑secured power and cloud anchor commitments is intensifying.',
  },
  {
    title: 'Risk Considerations',
    body: 'Technology obsolescence, power availability, operator execution risk and significant initial capital outlay. Asset management requires continuous capital expenditure to maintain Tier III/IV certification and meet evolving hyperscaler specifications.',
  },
  {
    title: 'Typical Returns',
    body: 'Stabilised core colocation assets: 7–9% net initial yield, with 5‑year levered IRRs of 10–13%. Development‑to‑core strategies can achieve mid‑teen returns with appropriate risk mitigation and pre‑leasing.',
  },
  {
    title: 'Market Outlook',
    body: 'The UAE data centre market will likely experience sustained double‑digit growth through 2028 as the broader MENA digital economy expands. Early‑mover advantages are compressing; disciplined underwriting and operator selection are essential.',
  },
];

const faqs = [
  {
    q: 'Why invest in UAE data centres?',
    a: 'The UAE data centre market is at an early stage of a multi‑year growth cycle driven by cloud adoption, AI and digital transformation. Limited existing supply creates favourable investment conditions with superior risk‑adjusted returns compared to traditional CRE.',
  },
  {
    q: 'What are the main risks in data centre investment?',
    a: 'Technology obsolescence, power availability, operator execution risk and the need for significant capital commitment. Specialist operational expertise is essential to manage asset‑level performance and tenant relationships.',
  },
  {
    q: 'Who are the main data centre operators in the UAE?',
    a: 'Global operators (Equinix, Digital Realty), regional champions (Khazna, Moro Hub) and cloud providers (AWS, Microsoft Azure, Google Cloud) are all active in development and operation.',
  },
  {
    q: 'What are typical lease structures?',
    a: 'Hyperscale leases: 10–20 year triple‑net with fixed escalations. Colocation: 3–5 year contracts with power‑based pricing. Renewal rates are high due to high relocation costs.',
  },
  {
    q: 'How does power availability affect investment?',
    a: 'Power is the single most critical site selection factor. Locations with reliable, scalable and cost‑competitive power are commanding significant premiums. Investors must diligence grid capacity, renewable options and backup infrastructure.',
  },
  {
    q: 'What is the role of AI in data centre demand?',
    a: 'AI/ML workloads require high‑density computing, driving demand for purpose‑built facilities with advanced cooling and power infrastructure. This is a structural, not cyclical, demand driver.',
  },
  {
    q: 'Can foreign investors own data centre assets?',
    a: 'Yes. Data centres in designated free zones allow 100% foreign ownership with repatriation of capital and profits. Outside free zones, foreign ownership is permitted under UAE commercial law with appropriate structuring.',
  },
  {
    q: 'What financing is available?',
    a: 'Both conventional and Islamic financing are available from UAE and international banks. LTVs typically range 50–65% for stabilised assets. Green and sustainability‑linked loans are emerging for energy‑efficient facilities.',
  },
  {
    q: 'How does Murivest source data centre opportunities?',
    a: 'Our team maintains relationships with operators, developers and cloud providers across the GCC, giving us early visibility of development pipelines, off‑market secondary transactions and build‑to‑suit programmes.',
  },
  {
    q: 'What is the minimum investment size?',
    a: 'Institutional data centre investments typically start from USD 20M for equity positions in stabilised assets. Development opportunities may require higher commitment and longer capital lock‑up.',
  },
];

const opportunities = [
  {
    location: 'Dubai South',
    type: 'Hyperscale Development',
    highlights: ['80 MW planned capacity', 'Cloud anchor pre‑commitment', 'Tier IV design', 'Renewable power pathway'],
    yieldNote: 'Projected stabilised yield: 9.5%',
  },
  {
    location: 'KIZAD, Abu Dhabi',
    type: 'Carrier‑Neutral Colocation',
    highlights: ['Existing 20 MW facility', 'Triple‑net leases', 'Expansion land bank', 'Subsea cable access'],
    yieldNote: 'Stabilised net yield: 8.2%',
  },
];

// ─── Page component ───────────────────────────────────────────────────────────

export default function DataCentersPage() {
  return (
    <main className="bg-[#FAF9F6] text-[#1A1A1A] font-body antialiased selection:bg-[#1B4332] selection:text-white overflow-x-hidden">
      <Script
        id="schema-data-centers"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* Fixed navigation */}
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
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-24 md:pt-28">
        <nav className="flex text-xs text-[#8A8A8A] space-x-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#1B4332] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/united-arab-emirates" className="hover:text-[#1B4332] transition-colors">UAE</Link>
          <span>/</span>
          <Link href="/united-arab-emirates/asset-classes" className="hover:text-[#1B4332] transition-colors">Asset Classes</Link>
          <span>/</span>
          <span className="text-[#1B4332]">Data Centres</span>
        </nav>
      </div>

      {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
      <section className="relative min-h-[85vh] md:min-h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#091A10] via-[#0F2C1C] to-[#1B4332]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 79px, #FAF9F6 79px, #FAF9F6 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, #FAF9F6 79px, #FAF9F6 80px)' }} />
        
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-36 pb-0 w-full">
          <div className="max-w-4xl pb-16 md:pb-24">
            <SectionLabel text="Asset Class Deep Dive" />
            <h1 className="font-display text-[40px] md:text-[62px] lg:text-[78px] leading-[1.02] text-white mb-7 md:mb-8">
              Data Centres — The UAE&apos;s Frontier Institutional Asset Class
            </h1>
            <p className="text-base md:text-xl text-white/65 leading-relaxed max-w-3xl mb-10 md:mb-12">
              Cloud adoption below developed‑market levels, AI compute demand and sovereign digital transformation create a multi‑year growth cycle for UAE data centres. Institutional capital is rotating into the sector faster than supply can deliver — compressing yields and rewarding early allocation.
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
            <div className="grid grid-cols-3 md:grid-cols-3 divide-x divide-white/10">
              {heroStats.map((stat) => (
                <div key={stat.label} className="py-5 md:py-6 px-4 md:px-8 first:pl-0">
                  <p className="font-display text-xl md:text-2xl text-white mb-0.5">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ SECTION 1 — Why UAE ═══════════════════ */}
      <section className="py-24 md:py-36 lg:py-44 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel text="Strategic Position" />
          <h2 className="font-display text-[30px] md:text-[42px] lg:text-[50px] leading-[1.06] text-[#1A1A1A] mb-12 max-w-3xl">
            Why the UAE for Data Centre Investment
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {whyUaePoints.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="group flex flex-col bg-white border border-[#1A1A1A]/6 hover:border-[#1B4332]/25 hover:shadow-xl transition-all duration-300">
                  <div className={`h-36 bg-gradient-to-br ${point.gradient} flex items-center justify-center`}>
                    <Icon className="w-10 h-10 text-[#1A1A1A]/20 group-hover:text-[#1B4332]/30 transition-colors" strokeWidth={1} />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="font-display text-lg text-[#1A1A1A] mb-2">{point.title}</h3>
                    <p className="text-sm text-[#4A4A4A] leading-relaxed">{point.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════ SECTION 2 — Investment Case ══════════════ */}
      <section className="py-24 md:py-36 lg:py-44 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <SectionLabel text="Investment Thesis" />
            <h2 className="font-display text-[30px] md:text-[42px] lg:text-[48px] leading-[1.06] text-[#1A1A1A] mb-6">
              The Case for Institutional Allocation
            </h2>
            <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed mb-8">
              Data centres provide an income‑plus‑growth profile unmatched in UAE real estate. Institutional mandates that overlook the sector are structurally under‑allocated to the region’s strongest demand tailwind.
            </p>
            <Link
              href="/united-arab-emirates/research/data-centre-investment"
              className="inline-flex items-center gap-2 text-sm text-[#1B4332] border border-[#1B4332]/20 px-5 py-3 hover:bg-[#1B4332] hover:text-white hover:border-[#1B4332] transition-all"
            >
              Read Full Research
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {investmentCase.map((item) => (
              <div key={item.title} className="p-5 md:p-6 bg-white border border-[#1A1A1A]/6">
                <div className="w-10 h-10 rounded-full bg-[#1B4332]/10 flex items-center justify-center mb-5">
                  <TrendingUp className="w-5 h-5 text-[#1B4332]" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg text-[#1A1A1A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 3 — Market Intelligence ═══════════════ */}
      <section className="py-24 md:py-36 lg:py-44 bg-white px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel text="Market Dashboard" />
          <h2 className="font-display text-[30px] md:text-[42px] lg:text-[50px] leading-[1.06] text-[#1A1A1A] mb-12 max-w-2xl">
            UAE Data Centre Market Intelligence
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {Object.entries(marketIntelligence).map(([key, val]) => (
              <div key={key} className="bg-[#FAF9F6] border border-[#1A1A1A]/6 p-5 md:p-6">
                <p className="font-display text-2xl text-[#1B4332] mb-1">{val}</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#8A8A8A]">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-[#8A8A8A] mt-4">Source: Murivest Research, H2 2025. Based on prime colocation and hyperscale facilities in UAE.</p>
        </div>
      </section>

      {/* ═══════════════════ SECTION 4 — Expertise Deep Dive ═══════════════ */}
      <section id="expertise" className="py-24 md:py-36 lg:py-44 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel text="Sector Expertise" />
          <h2 className="font-display text-[30px] md:text-[42px] lg:text-[50px] leading-[1.06] text-[#1A1A1A] mb-12 max-w-2xl">
            Data Centre Asset Class Mastery
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {expertiseSections.map((item) => (
              <div key={item.title} className="flex gap-5">
                <Database className="w-5 h-5 text-[#B8956B] mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-xl text-[#1A1A1A] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#4A4A4A] leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 5 — Featured Opportunities ════════════ */}
      <section id="opportunities" className="py-24 md:py-36 lg:py-44 bg-white px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <SectionLabel text="Curated Opportunities" />
              <h2 className="font-display text-[30px] md:text-[42px] lg:text-[50px] leading-[1.06] text-[#1A1A1A] max-w-2xl">
                Featured Data Centre Investments
              </h2>
            </div>
            <Link
              href="/properties?assetClass=data-centers"
              className="inline-flex items-center gap-2 text-sm text-[#4A4A4A] border border-[#1A1A1A]/10 px-5 py-3 hover:border-[#1B4332] hover:text-[#1B4332] transition-colors shrink-0"
            >
              View All Data Centre Assets
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {opportunities.map((opp) => (
              <div key={opp.location} className="group flex flex-col bg-[#FAF9F6] border border-[#1A1A1A]/6 hover:border-[#1B4332]/25 hover:shadow-xl transition-all">
                <div className="h-48 bg-gradient-to-br from-[#0D1F17]/25 via-[#1B4332]/10 to-[#E0EDE6] flex items-center justify-center relative">
                  <Database className="w-14 h-14 text-[#1A1A1A]/10 group-hover:text-[#1B4332]/20 transition" strokeWidth={1} />
                  <span className="absolute top-4 left-4 text-[9px] uppercase tracking-[0.18em] bg-[#1B4332] text-white px-2.5 py-1.5">{opp.type}</span>
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B] mb-2">{opp.location}</p>
                  <ul className="text-sm text-[#4A4A4A] space-y-1.5 mb-5">
                    {opp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span className="text-[#B8956B] mt-1 text-xs">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between pt-5 border-t border-[#1A1A1A]/5">
                    <span className="text-xs text-[#1B4332] font-medium">{opp.yieldNote}</span>
                    <Link
                      href="/united-arab-emirates/contact"
                      className="text-xs text-[#1B4332] border border-[#1B4332]/20 px-3 py-1.5 hover:bg-[#1B4332] hover:text-white transition-colors"
                    >
                      Request Memorandum
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 6 — FAQ ═══════════════════════════════ */}
      <section id="faq" className="py-24 md:py-36 lg:py-44 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1000px] mx-auto">
          <SectionLabel text="Frequently Asked Questions" />
          <h2 className="font-display text-[30px] md:text-[42px] lg:text-[48px] leading-[1.06] text-[#1A1A1A] mb-12">
            Institutional Investors Ask
          </h2>
          <div className="space-y-6">
            {faqs.map((item, idx) => (
              <details key={idx} className="group border-b border-[#1A1A1A]/10 pb-6">
                <summary className="flex items-start justify-between cursor-pointer list-none gap-4">
                  <span className="text-lg font-display text-[#1A1A1A] group-open:text-[#1B4332] transition-colors">{item.q}</span>
                  <span className="text-2xl text-[#B8956B] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-sm text-[#4A4A4A] leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 7 — CTA ═══════════════════════════════ */}
      <section className="py-24 md:py-36 lg:py-44 px-6 md:px-12 lg:px-20 bg-[#1B4332] text-white">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-4">Private Advisory</p>
            <h2 className="font-display text-[36px] md:text-[54px] lg:text-[62px] leading-[1.04] mb-5">
              Allocate to UAE Data Centres with Institutional Rigour
            </h2>
            <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-2xl mb-8">
              Murivest advises family offices, REITs and institutional investors on data centre acquisitions, development partnerships and portfolio construction. Our process starts with sector allocation, not asset marketing — ensuring your capital is deployed where the structural demand is strongest.
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
                { label: 'Engagement type', value: 'Private advisory consultation' },
                { label: 'Scope', value: 'Sector allocation through to asset acquisition' },
                { label: 'Capital minimum', value: 'USD 5M+ for direct advisory' },
                { label: 'Confidentiality', value: 'NDA available on request' },
                { label: 'Jurisdictions', value: 'UAE, Singapore, UK, US and Kenya' },
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
    </main>
  );
}