// app/singapore/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, TrendingUp, ArrowUpRight, MapPin } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   MURIVEST — SINGAPORE
   Genesis Palette: Charcoal #2C2C2C, Brass #8B7355, Ivory #F8F7F4
   (matches global homepage design system)
   ───────────────────────────────────────────────────────────── */

const SITE_URL = 'https://murivest.com';
const PAGE_PATH = '/singapore';

// Brand tokens - Genesis Palette (matches global homepage)
const C = {
  charcoal: '#2C2C2C',
  offWhite: '#F8F7F4',
  white: '#FFFFFF',
  gold: '#8B7355',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Singapore Commercial Real Estate Advisory | Institutional Mandate-Based Advisory | Murivest',
  description:
    'Murivest is establishing institutional commercial real estate advisory coverage in Singapore in 2026. Mandate-based acquisition, disposition and capital structuring advisory for institutional and private capital. NDA/KYC only. Where local licensed representation is required, via appropriately licensed partners.',
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
    languages: {
      'en-SG': `${SITE_URL}${PAGE_PATH}`,
      'en-KE': `${SITE_URL}/kenya`,
      'en-GB': `${SITE_URL}/united-kingdom`,
      'en-AE': `${SITE_URL}/united-arab-emirates`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: 'Murivest',
    title: 'Singapore Commercial Real Estate Advisory | Murivest',
    description:
      'Institutional mandate-based advisory extending to Singapore in 2026. Acquisition, disposition and capital structuring for private and institutional capital.',
    images: [
      {
        url: '/og-singapore.jpg', // 1200x630 WebP <120kb - skyline + logo on forest
        width: 1200,
        height: 630,
        alt: 'Murivest — Singapore Commercial Real Estate Advisory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Singapore Commercial Real Estate Advisory | Murivest',
    description: 'Mandate-based institutional advisory establishing coverage in Singapore 2026.',
    images: ['/og-singapore.jpg'],
  },
  robots: { index: true, follow: true },
};

function StructuredData() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Murivest Realty Group Ltd',
        alternateName: 'Murivest',
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        foundingDate: '2025-01-01',
        foundingLocation: {
          '@type': 'Place',
          address: { '@type': 'PostalAddress', addressLocality: 'Nairobi', addressCountry: 'KE' },
        },
        founder: { '@id': `${SITE_URL}/leadership#markmuriithi` },
        slogan: 'Independent commercial real estate advisory. Founded 2025 Nairobi.',
        areaServed: [
          { '@type': 'Country', name: 'Kenya' },
          { '@type': 'Country', name: 'United Arab Emirates' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'Singapore' },
        ],
        knowsAbout: ['Commercial Real Estate Advisory', 'Mandate-based Acquisition', 'Disposition Strategy'],
        sameAs: ['https://www.instagram.com/murivest_realty_group', 'https://www.linkedin.com/company/murivest-realty-group'],
      },
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/leadership#markmuriithi`,
        name: 'Mark Muriithi',
        jobTitle: 'Founder & Chief Executive Officer',
        worksFor: { '@id': `${SITE_URL}/#organization` },
        description: 'Founder of Murivest Realty Group Ltd in Nairobi in 2025. Independent mandate-based commercial real estate advisory across Kenya, UAE, UK and Singapore coverage from 2026.',
        sameAs: ['https://www.instagram.com/murivest_realty_group'],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Murivest',
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE_URL}${PAGE_PATH}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Singapore', item: `${SITE_URL}${PAGE_PATH}` },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}${PAGE_PATH}/#webpage`,
        url: `${SITE_URL}${PAGE_PATH}`,
        name: 'Singapore Commercial Real Estate Advisory | Murivest',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        description: 'Murivest is establishing institutional advisory coverage of Singapore in 2026. Mandate-based, NDA/KYC, via licensed partners where required under the Estate Agents Act.',
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}${PAGE_PATH}/#service`,
        name: 'Murivest — Singapore Market Coverage',
        parentOrganization: { '@id': `${SITE_URL}/#organization` },
        url: `${SITE_URL}${PAGE_PATH}`,
        areaServed: { '@type': 'Country', name: 'Singapore' },
        description: 'Acquisition, disposition and capital structuring advisory for commercial real estate in Singapore. Operates on mandate basis; where local licensed representation is required, engagement is via appropriately licensed partners in compliance with Council for Estate Agencies (CEA) regulations. No collective investment scheme, no pooling of capital.',
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}${PAGE_PATH}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is Murivest new to the Singapore market?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Murivest is establishing dedicated coverage of the Singapore commercial real estate market in 2026. Our advisory approach and underwriting discipline draw on our existing institutional practice; our Singapore transaction history is being built from this year forward. We do not claim incumbent transaction history.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does Murivest engage with clients in Singapore?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Murivest operates on a mandate basis, subject to NDA and KYC. Murivest does not operate collective investment schemes or pool capital. Where a transaction requires locally licensed representation under the Estate Agents Act, Murivest coordinates with appropriately licensed partners and all local compliance is handled by the licensed partner.',
            },
          },
          {
            '@type': 'Question',
            name: 'What types of mandates does Murivest take in Singapore?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Murivest advises on acquisition, disposition, and capital structuring mandates for commercial real estate, working with institutional and private capital. All engagements are mandate-based and confidential.',
            },
          },
        ],
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}

async function requestIntroduction(formData: FormData) {
  'use server';
  const email = formData.get('email');
  const org = formData.get('organization');
  console.log('Singapore introduction requested:', { email, org });
  // TODO: wire to Brevo / CRM - Murivest stack
}

const DISTRICTS = [
  { name: 'Raffles Place / CBD', note: 'Core financial district — institutional core' },
  { name: 'Marina Bay', note: 'Integrated mixed-use precinct' },
  { name: 'Orchard Road', note: 'Prime retail corridor' },
  { name: 'Beach Road / City Hall', note: 'Civic and commercial fringe' },
  { name: 'One-North', note: 'Innovation and business park cluster' },
  { name: 'Jurong Lake District', note: 'Emerging decentralised business hub' },
];

const THESIS_PILLARS = [
  { icon: Shield, title: 'Regulatory Stability', body: 'Singapore provides one of the most transparent and predictable environments for commercial ownership, title registration and transaction execution in Asia. Disclosure standards support disciplined underwriting.' },
  { icon: Lock, title: 'Capital Preservation', body: 'Institutional-grade tenancy structures, title certainty and legal recourse reduce structural risk. Our role is to underwrite covenant, lease event risk and exit, not to promote yield.' },
  { icon: TrendingUp, title: 'Strategic Positioning', body: 'Gateway for capital allocating across Southeast Asia with established connectivity to regional occupier and investor markets. We advise on Singapore as a standalone allocation and as a regional hub.' },
];

const SERVICES = [
  { title: 'Acquisition Advisory', body: 'Buy-side sourcing, underwriting and transaction management. Mandate-based. No pooled capital. Focus: lot sizes where private capital can move faster than REIT process.' },
  { title: 'Disposition & Exit Strategy', body: 'Sell-side positioning, buyer identification and process management. Confidential process, qualified buyer pool only, NDA-gated data room.' },
  { title: 'Capital Structuring', body: 'Advisory on transaction structuring, financing considerations and investor alignment. We do not arrange regulated financial products.' },
  { title: 'Tenant Representation', body: 'Occupier-side advisory on leasing strategy and consolidation. Demand-led underwriting, not landlord agency.' },
];

export default function SingaporePage() {
  return (
    <>
      <StructuredData />
      <main className="bg-[#F8F7F4]">
        {/* Breadcrumb UI */}
        <nav aria-label="Breadcrumb" className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-6">
          <ol className="flex items-center gap-2 text-[10px] tracking-[0.14em] uppercase text-[#2C2C2C]/60">
            <li><Link href="/" className="hover:text-[#8B7355] transition-colors">Home</Link></li>
            <li aria-hidden="true" className="text-[#8B7355]/40">/</li>
            <li className="text-[#2C2C2C]" aria-current="page">Singapore</li>
          </ol>
        </nav>

        {/* HERO - Forest Deep, no black, no image LCP killer */}
        <section className="relative overflow-hidden bg-[#2C2C2C] mt-6" aria-label="Singapore Commercial Real Estate Advisory">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2C2C2C]/90 via-[#2C2C2C] to-[#2C2C2C]" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(${C.gold} 1px, transparent 1px), linear-gradient(90deg, ${C.gold} 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-28 pb-24">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-8 h-px bg-[#8B7355]/60" />
                <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#8B7355] font-medium">Singapore · Coverage Established 2026</p>
              </div>
              <h1 className="font-serif text-[2.4rem] md:text-[3.2rem] lg:text-[3.8rem] text-white leading-[1.05] mb-7">
                Institutional Commercial Real Estate Advisory, <em className="italic text-[#8B7355] font-light">Now in Singapore</em>
              </h1>
              <p className="text-[15px] md:text-[17px] text-white/75 leading-[1.7] font-light max-w-2xl mb-10">
                Murivest is extending its institutional, mandate-based practice to Singapore in 2026. We advise institutional and private capital on acquisition, disposition and structuring of commercial real estate — with the same underwriting discipline that governs every mandate we accept. NDA and KYC gated. Where local licensed representation is required, via licensed partners.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#request-introduction" className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#F8F7F4] text-[#2C2C2C] text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-[#8B7355] hover:text-white transition-colors duration-500">
                  Request an Introduction <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </a>
                <a href="#coverage" className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#8B7355]/40 text-white/80 text-[11px] tracking-[0.2em] uppercase font-medium hover:border-[#8B7355] hover:text-white transition-all duration-500">
                  Our Coverage Approach
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FOUNDING NOTE */}
        <section className="py-20 md:py-28 bg-white border-y border-[#8B7355]/15">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#8B7355] mb-6">A Note on Where We Are</p>
            <p className="font-serif text-2xl md:text-3xl text-[#2C2C2C] leading-snug mb-6">We are a new entrant to the Singapore market.</p>
            <p className="text-[14px] text-[#2C2C2C]/70 leading-relaxed font-light max-w-2xl mx-auto">
              Murivest&apos;s Singapore practice is being built from 2026 forward. We are not positioning ourselves as an incumbent with a long local transaction history — we are an institutional advisory bringing disciplined underwriting and a mandate-based operating model to a new market. Our early Singapore engagements are the foundation of that track record, not a substitute for one. We publish no yield tables or transaction values we cannot stand behind.
            </p>
          </div>
        </section>

        {/* WHY SINGAPORE - Forest */}
        <section className="py-20 md:py-32 bg-[#2C2C2C] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #8B7355 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-16">
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#8B7355] mb-4">Investment Thesis</p>
              <h2 className="font-serif text-3xl md:text-4xl text-white">Why Singapore</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {THESIS_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="border border-[#8B7355]/20 p-8 md:p-10 hover:border-[#8B7355]/40 transition-colors duration-500 bg-[#2C2C2C]/40">
                    <div className="w-14 h-14 border border-[#8B7355]/30 flex items-center justify-center text-[#8B7355] mb-6"><Icon className="w-6 h-6" strokeWidth={1.25} /></div>
                    <h3 className="font-serif text-2xl text-white mb-4 leading-tight">{pillar.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed font-light">{pillar.body}</p>
                  </div>
                );
              })}
            </div>
            <p className="text-center text-[12px] text-white/40 italic mt-12 max-w-xl mx-auto">Quantitative market data (vacancy, rents, yields) will be published once our Singapore research coverage is live and sourced. We will not publish placeholder figures.</p>
          </div>
        </section>

        {/* COVERAGE */}
        <section id="coverage" className="py-20 md:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-16">
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#8B7355] mb-4">Coverage</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2C2C2C] mb-4">Districts We Are Building Coverage In</h2>
              <p className="text-sm text-[#2C2C2C]/60 max-w-xl mx-auto font-light">Focus areas as we establish the practice — not a claim of closed transactions in each district.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DISTRICTS.map((d) => (
                <div key={d.name} className="border border-[#8B7355]/15 p-6 hover:border-[#8B7355]/40 transition-colors duration-500 bg-[#F8F7F4]/60">
                  <div className="flex items-center gap-2 text-[#8B7355] mb-3"><MapPin className="w-3.5 h-3.5" strokeWidth={1.5} /><span className="text-[10px] tracking-[0.2em] uppercase">Focus Area</span></div>
                  <h3 className="font-serif text-lg text-[#2C2C2C] mb-1">{d.name}</h3>
                  <p className="text-[13px] text-[#2C2C2C]/60 font-light">{d.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 md:py-32 bg-[#F8F7F4] border-y border-[#8B7355]/10">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-16"><p className="text-[11px] tracking-[0.25em] uppercase text-[#8B7355] mb-4">Advisory Services</p><h2 className="font-serif text-3xl md:text-4xl text-[#2C2C2C]">What We Advise On</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICES.map((s) => (
                <div key={s.title} className="bg-white border border-[#8B7355]/15 p-8 hover:border-[#8B7355]/35 transition-colors duration-500">
                  <h3 className="font-serif text-xl text-[#2C2C2C] mb-3">{s.title}</h3>
                  <p className="text-sm text-[#2C2C2C]/65 leading-relaxed font-light">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REGULATORY */}
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 text-center border border-[#8B7355]/15 p-8 md:p-10 bg-[#F8F7F4]/40">
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#8B7355] mb-3">Regulatory & Engagement</p>
            <p className="text-[13px] text-[#2C2C2C]/70 leading-relaxed font-light max-w-3xl mx-auto">
              Murivest Realty Group Ltd was founded in Nairobi, Kenya in 2025 by Mark Muriithi. Singapore coverage is established from 2026. All engagements are mandate-based, subject to NDA and KYC. Murivest does not operate collective investment schemes, pool investor capital, or offer regulated financial products. Where a transaction requires representation by a Council for Estate Agencies (CEA) licensed estate agent in Singapore, engagement is via an appropriately licensed partner and all Singapore regulatory compliance is handled by that partner. No CEA license number, RICS firm number, or regulatory badge is published here unless it is a verified, issued number.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="text-center mb-16"><p className="text-[11px] tracking-[0.25em] uppercase text-[#8B7355] mb-4">Questions</p><h2 className="font-serif text-3xl md:text-4xl text-[#2C2C2C]">Frequently Asked</h2></div>
            <div className="divide-y divide-[#8B7355]/15">
              {[
                { q: 'Is Murivest new to the Singapore market?', a: 'Yes. Murivest is establishing dedicated coverage of the Singapore commercial real estate market in 2026. Our advisory approach and underwriting discipline draw on our existing institutional practice; our Singapore transaction history is being built from this year forward.' },
                { q: 'How does Murivest engage with clients in Singapore?', a: 'Murivest operates on a mandate basis, subject to NDA and KYC. Where a transaction requires locally licensed representation under the Estate Agents Act, Murivest coordinates with appropriately licensed partners.' },
                { q: 'What types of mandates does Murivest take in Singapore?', a: 'Murivest advises on acquisition, disposition, and capital structuring mandates for commercial real estate, working with institutional and private capital. We do not pool capital or operate collective investment schemes.' },
              ].map((item) => (
                <div key={item.q} className="py-6">
                  <h3 className="text-[15px] font-medium text-[#2C2C2C] mb-2">{item.q}</h3>
                  <p className="text-sm text-[#2C2C2C]/65 leading-relaxed font-light">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENQUIRY */}
        <section id="request-introduction" className="py-20 md:py-32 bg-[#2C2C2C]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
            <div className="flex items-center gap-4 mb-8 justify-center"><div className="flex-1 h-px max-w-[60px] bg-[#8B7355]/30" /><span className="text-[10px] tracking-[0.3em] uppercase text-[#8B7355]">Confidential Enquiry</span><div className="flex-1 h-px max-w-[60px] bg-[#8B7355]/30" /></div>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Request an Introduction</h2>
            <p className="text-sm text-white/60 font-light mb-10 max-w-lg mx-auto leading-relaxed">All enquiries treated in strict confidence and subject to NDA and KYC prior to any mandate discussion.</p>
            <form action={requestIntroduction} className="flex flex-col gap-3 max-w-md mx-auto">
              <input type="email" name="email" required placeholder="your@email.com" className="px-4 py-3.5 text-[13px] outline-none placeholder:text-white/30 bg-white/[0.06] border border-[#8B7355]/30 text-white focus:border-[#8B7355] transition-colors" />
              <input type="text" name="organization" placeholder="Organization (optional)" className="px-4 py-3.5 text-[13px] outline-none placeholder:text-white/30 bg-white/[0.06] border border-[#8B7355]/30 text-white focus:border-[#8B7355] transition-colors" />
              <button type="submit" className="px-8 py-3.5 text-[11px] font-semibold tracking-[0.18em] uppercase bg-[#F8F7F4] text-[#2C2C2C] hover:bg-[#8B7355] hover:text-white transition-colors">Submit Enquiry</button>
            </form>
            <div className="flex items-center justify-center gap-2 mt-6"><Shield className="w-3 h-3 text-[#8B7355]/60" strokeWidth={1.5} /><p className="text-[11px] text-white/40 tracking-wider">Your information is treated in strict confidence.</p></div>
          </div>
        </section>
      </main>
    </>
  );
}
