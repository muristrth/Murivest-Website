import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Building2, Award, Users, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Real Estate Kenya | Office Space Nairobi | Grade A Office | Murivest',
  description: 'Institutional-grade commercial real estate in Nairobi. Grade A office space, retail properties, and industrial facilities delivering 8.5–13% yields. Dollar-denominated leases. Minimum $1M USD.',
  keywords: 'commercial real estate Kenya, office space Nairobi, office for rent Nairobi CBD, Grade A office Westlands, commercial property Kenya, office buildings Nairobi, retail property Kenya, industrial real estate Mombasa Road, commercial real estate investment Africa, institutional real estate Kenya, Murivest Realty Group',
  openGraph: {
    title: 'Commercial Real Estate Kenya | Office Space Nairobi | Murivest',
    description: 'Grade A office space and commercial investment properties in Nairobi. 8.5–13% yields. Dollar-denominated leases.',
    type: 'website',
    locale: 'en_KE',
  },
  alternates: { canonical: 'https://murivest.com/commercial-real-estate' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'RealEstateAgent',
      '@id': 'https://murivest.com/#org',
      name: 'Murivest Realty Group',
      url: 'https://murivest.com',
      address: { '@type': 'PostalAddress', addressLocality: 'Nairobi', addressCountry: 'KE' },
    },
    {
      '@type': 'WebPage',
      url: 'https://murivest.com/commercial-real-estate',
      name: 'Commercial Real Estate Kenya | Office Space Nairobi',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://murivest.com' },
          { '@type': 'ListItem', position: 2, name: 'Commercial Real Estate', item: 'https://murivest.com/commercial-real-estate' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the minimum investment for commercial real estate in Kenya?',
          acceptedAnswer: { '@type': 'Answer', text: 'Murivest structures mandates from $1M USD. Co-investment via our Director Circle is available from $250,000 for qualified allocators.' },
        },
        {
          '@type': 'Question',
          name: 'What yields does Grade A office space in Nairobi produce?',
          acceptedAnswer: { '@type': 'Answer', text: 'Grade A office in Westlands and Upper Hill ranges 8.5%–10.5% on stabilised NOI. Industrial on Mombasa Road: 10%–13%. Retail in prime nodes: 9%–12%.' },
        },
        {
          '@type': 'Question',
          name: 'Can foreign investors own commercial property in Kenya?',
          acceptedAnswer: { '@type': 'Answer', text: 'Foreign nationals may acquire 99-year leasehold interests. Freehold is subject to Land Control Board approval. Murivest structures title for tax efficiency and exit liquidity.' },
        },
      ],
    },
  ],
};

const propertyTypes = [
  {
    Icon: Building2,
    title: 'Grade A Office Space',
    location: 'Westlands · Upper Hill · CBD',
    description: 'Institutionally managed office buildings with long-dated WALE, blue-chip tenants, and USD-denominated leases. Occupancy across our managed portfolio: 91–96%.',
    yieldRange: '8.5% – 10.5%',
  },
  {
    Icon: Users,
    title: 'Retail & Mixed-Use',
    location: 'Westlands · Karen · Two Rivers',
    description: 'High-footfall retail anchored by established national and international brands. Structured with base rent plus turnover rent components for income resilience.',
    yieldRange: '9% – 12%',
  },
  {
    Icon: Award,
    title: 'Industrial & Logistics',
    location: 'Mombasa Road · Industrial Area',
    description: 'Modern warehouse and light-industrial facilities serving Kenya\'s growing logistics sector. Triple-net lease structures with institutional operators.',
    yieldRange: '10% – 13%',
  },
];

const reasons = [
  {
    n: '01',
    title: 'Structural Office Demand',
    body: 'Nairobi absorbs 150,000–200,000 sq ft of Grade A office annually. BPO expansion, NGO sector growth, and multinational consolidation from secondary East African cities sustain occupancy. The demand is structural, not speculative.',
  },
  {
    n: '02',
    title: 'Dollar-Denominated Leases',
    body: 'Prime commercial leases in Westlands and Upper Hill are structured in USD. Currency exposure is carried by the tenant — a structural hedge unavailable in most emerging markets.',
  },
  {
    n: '03',
    title: 'Yield Premium Over Developed Markets',
    body: 'At 8.5%–10.5%, Nairobi Grade A office offers a 400–600 basis point spread over equivalent London assets. The spread compensates for regulatory friction and currency translation risk.',
  },
  {
    n: '04',
    title: "East Africa's Capital Hub",
    body: 'Nairobi hosts 130+ multinational headquarters, the AfDB regional office, and the continent\'s most active private equity deal flow. Occupier demand is institutional in character.',
  },
];

export default function CommercialRealEstatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-[#F8F7F4] text-[#2C2C2C]">

        {/* ── Hero – White Minimalist Luxury ── */}
        <section className="relative bg-white text-[#1A1A1A] overflow-hidden pt-32 pb-28 px-6 md:px-12 lg:px-16">
          {/* Subtle glow – almost invisible, just for depth */}
          <div className="absolute top-0 left-1/2 w-[800px] h-[600px] bg-black/5 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
          
          <div className="max-w-[1400px] mx-auto relative z-10">
            {/* Back to Home – refined, thin weight */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.35em] uppercase text-[#8B7355] hover:text-black transition-colors mb-12 font-medium"
            >
              <ArrowLeft className="w-3 h-3" /> Back to Home
            </Link>

            {/* Asset Class Marker – delicate gold line */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#B8956B]" />
              <span className="text-[9px] font-medium tracking-[0.45em] uppercase text-[#B8956B]">
                Asset Class Overview
              </span>
            </div>

            {/* Main Headline – serif + italic for luxury */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.15] mb-8 text-black">
              Commercial<br />
              <span className="italic text-[#B8956B] font-serif">Real Estate</span>
            </h1>

            {/* Stat-driven value prop – clean, borderless, light */}
            <p className="max-w-2xl text-[#2C2C2C] text-base md:text-lg font-light leading-relaxed border-l border-[#B8956B]/40 pl-6">
              Nairobi's Grade A office market offers a 400–600 basis point yield premium over equivalent
              London assets — with dollar-denominated leases that transfer currency risk to the tenant.
            </p>
          </div>
        </section>

        {/* ── Highlights Bar ── */}
        <section className="bg-[#2C2C2C]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-white/10">
              {[
                ['Minimum Mandate', '$1M USD'],
                ['Office Yield', '8.5% – 10.5%'],
                ['Industrial Yield', '10% – 13%'],
                ['Lease Term', '5 – 15 Years'],
                ['Lease Currency', 'USD-Denominated'],
                ['Asset Management', 'Included'],
              ].map(([label, value]) => (
                <div key={label} className="py-6 px-5 text-center">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-slate-500 mb-1">{label}</p>
                  <p className="text-white font-serif text-base">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Property Types ── */}
        <section className="relative bg-[#F8F7F4]">
          <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">Asset Classes</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] mb-4 text-[#2C2C2C]">
              Commercial Property<br /><span className="italic text-[#8B7355] font-light">Sectors</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#E5E2DC] mb-16" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E2DC]">
              {propertyTypes.map(({ Icon, title, location, description, yieldRange }) => (
                <div key={title} className="bg-[#F8F7F4] p-8 md:p-10 group hover:bg-white transition-colors duration-500">
                  <div className="w-10 h-10 border border-[#E5E2DC] flex items-center justify-center mb-8 group-hover:border-[#8B7355] transition-colors duration-500">
                    <Icon className="w-4 h-4 text-[#8B7355]" strokeWidth={1} />
                  </div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#8B7355] mb-3">{location}</p>
                  <h3 className="text-xl font-serif text-[#2C2C2C] mb-4">{title}</h3>
                  <div className="w-8 h-[1px] bg-[#E5E2DC] mb-5" />
                  <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light mb-8">{description}</p>
                  <div className="pt-6 border-t border-[#E5E2DC]">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#5A5A5A] mb-1">Target Yield</p>
                    <p className="text-[#2C2C2C] font-serif text-lg">{yieldRange}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Kenya ── */}
        <section className="relative bg-white">
          <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-[1px] bg-[#8B7355]" />
                  <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">Investment Case</p>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif leading-[1.1] mb-6 text-[#2C2C2C]">
                  Why Nairobi<br /><span className="italic text-[#8B7355] font-light">Commercial</span>
                </h2>
                <div className="w-16 h-[1px] bg-[#E5E2DC] mb-6" />
                <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light">
                  Four structural factors separate Nairobi's commercial market from the broader
                  emerging market peer group. Each is measurable. Each is defensible in an
                  investment committee memo.
                </p>
              </div>
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E2DC]">
                  {reasons.map(({ n, title, body }) => (
                    <div key={n} className="bg-white p-8 group hover:bg-[#F8F7F4] transition-colors duration-500">
                      <p className="text-[10px] tracking-[0.4em] uppercase text-[#8B7355] mb-4">{n}</p>
                      <h3 className="text-[17px] font-serif text-[#2C2C2C] mb-4">{title}</h3>
                      <div className="w-8 h-[1px] bg-[#E5E2DC] mb-4" />
                      <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Mandate Parameters ── */}
        <section className="relative bg-[#F8F7F4]">
          <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-[1px] bg-[#8B7355]" />
                  <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">Mandate Structure</p>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif leading-[1.1] mb-6 text-[#2C2C2C]">
                  Investment<br /><span className="italic text-[#8B7355] font-light">Parameters</span>
                </h2>
                <div className="w-16 h-[1px] bg-[#E5E2DC] mb-6" />
                <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light">
                  We structure mandates for direct ownership, co-investment, and managed accounts.
                  Each is tailored to hold horizon, return threshold, and tax domicile.
                  Full asset management is included across all structures.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="border border-[#E5E2DC] bg-white">
                  {[
                    ['Minimum Mandate Size', '$1,000,000 USD'],
                    ['Target Gross Yield — Office', '8.5% – 10.5% p.a.'],
                    ['Target Gross Yield — Industrial', '10% – 13% p.a.'],
                    ['Typical Lease Term', '5 – 15 years'],
                    ['Lease Currency', 'USD-denominated (prime assets)'],
                    ['Hold Horizon', '5 – 10 years (core); 3 – 5 years (opportunistic)'],
                    ['Asset Management', 'Full-service, included'],
                    ['Reporting Cadence', 'Quarterly investor reports'],
                    ['Co-Investment', 'From $250,000 (Director Circle)'],
                  ].map(([label, value], i, arr) => (
                    <div key={label} className={`flex justify-between items-center px-8 py-5 ${i < arr.length - 1 ? 'border-b border-[#E5E2DC]' : ''}`}>
                      <span className="text-[13px] text-[#5A5A5A] font-light">{label}</span>
                      <span className="text-[13px] text-[#2C2C2C] font-medium text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="relative bg-white">
          <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">Investor FAQs</p>
            </div>
            <h2 className="text-3xl font-serif text-[#2C2C2C] mb-12">Common Questions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { q: 'What is the minimum investment?', a: 'Murivest structures mandates from $1M USD. Co-investment via the Director Circle is available from $250,000 for qualified allocators.' },
                { q: 'What yields should I expect?', a: 'Grade A office in Westlands and Upper Hill: 8.5%–10.5%. Industrial on Mombasa Road: 10%–13%. Retail in prime nodes: 9%–12%, on stabilised NOI.' },
                { q: 'Can foreign investors own commercial property in Kenya?', a: 'Foreign nationals may acquire 99-year leasehold interests. Freehold is subject to Land Control Board approval. Title is structured for tax efficiency and exit liquidity.' },
              ].map(({ q, a }) => (
                <div key={q} className="border border-[#E5E2DC] p-8">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#8B7355] mb-4">Q</p>
                  <h3 className="text-[16px] font-serif text-[#2C2C2C] mb-4 leading-snug">{q}</h3>
                  <div className="w-8 h-[1px] bg-[#E5E2DC] mb-4" />
                  <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA – Institutional Mandate ── */}
        <section className="relative bg-[#1B4332] text-white">
          {/* Subtle gold glow from top right */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B8956B]/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                {/* Gold accent line + marker */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-[#B8956B]" />
                  <p className="text-[10px] tracking-[0.4em] uppercase text-[#B8956B] font-mono font-medium">
                    Next Step
                  </p>
                </div>

                {/* Headline – elegant serif with gold italic */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.15] mb-6 text-white">
                  Begin Your<br />
                  <span className="italic text-[#B8956B] font-light">Mandate Discussion</span>
                </h2>

                {/* Supporting text – soft off-white */}
                <p className="text-[15px] leading-relaxed text-[#D6C4AA]/90 font-light max-w-lg">
                  Qualified investors may request a private briefing on current off-market mandates.
                  All communications are held in strict confidence.
                </p>

                {/* Additional institutional cue – minimum threshold */}
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#B8956B]/60 mt-6 font-mono">
                  Minimum Allocation: $5,000,000 · KYC Required
                </p>
              </div>

              {/* Buttons – refined, gold-accented */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#B8956B] text-[#0A0A0A] text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-[#C8A47E] transition-all duration-300"
                >
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/our-portfolio"
                  className="group inline-flex items-center justify-center gap-3 px-10 py-4 border border-[#B8956B]/40 text-[#B8956B] text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-[#B8956B]/10 hover:border-[#B8956B] transition-all duration-300"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>


      </div>
    </>
  );
}