'use client'

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CEOInstitutionalProfile from '@/components/CEOInstitutionalProfile';

export const metadata: Metadata = {
  title: 'Murivest | Institutional Commercial Real Estate Advisory',
  description:
    'Murivest is an independent institutional real estate advisory firm. We originate and advise on capital mandates across Africa, Middle East, Asia Pacific and Europe.',
  keywords: [
    'commercial real estate advisory',
    'institutional real estate',
    'sovereign wealth fund real estate',
    'family office property investment',
    'capital markets advisory',
    'CBRE alternative',
    'Knight Frank competitor',
    'Savills institutional',
  ],
  openGraph: {
    title: 'Murivest — Institutional Real Estate Advisory',
    description:
      'Research-led advisory for the world\'s most sophisticated capital. Across 35 markets since 2001.',
    url: 'https://murivest.com',
    siteName: 'Murivest',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Murivest | Institutional CRE Advisory',
    description: 'Global commercial real estate advisory for institutional capital.',
  },
  alternates: { canonical: 'https://murivest.com' },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
};

/* ─── DATA ────────────────────────────────────────────────────── */

const SERVICES = [
  {
    title: 'Capital Markets',
    desc: 'Debt and equity placement, joint venture structuring, and institutional capital sourcing across acquisition and development mandates.',
    href: '/services/capital-markets',
  },
  {
    title: 'Investment Advisory',
    desc: 'Discrete acquisition and disposition counsel for commercial property portfolios. Confidentiality and pricing discipline on every mandate.',
    href: '/services/investment-advisory',
  },
  {
    title: 'Occupier Solutions',
    desc: 'Site selection, portfolio optimization, and workplace strategy for multinational corporations scaling across frontier and emerging markets.',
    href: '/services/occupier-solutions',
  },
  {
    title: 'Research & Intelligence',
    desc: 'Independent market analysis and primary data collection across 35 markets. Investment theses that inform allocation decisions.',
    href: '/research',
  },
];

const INSIGHTS = [
  {
    category: 'Investment and Wealth',
    date: 'July 2026',
    title: 'Where are Institutions (Cardone Capital) deploying their capital and funds for investments & income in 2026?',
    subtitle: 'Global de-dollarization is not an academic debate. It is a capital flow reality reshaping commercial real estate pricing in Dubai, Singapore, and selected African markets.',
    href: '/research/global-macro-allocation-commercial-real-estate-dedollarization-2026',
    image: '/research-images/global-macro-allocation-commercial-real-estate-dedollarization-2026.webp',
  },
  {
    href: 'research/industrial-property-investment-uk-growth-corridors-2026',
    title: 'Where to Buy UK Industrial Property in 2026?',
    subtitle: 'Infrastructure-led analysis of the UK\'s premier logistics corridors, examining motorway networks, port connectivity, and land constraints to identify optimal industrial deployment locations.',
    image:'/research-images/industrial-property-investment-uk-growth-corridors-2026.webp',
    category: 'Asset Class Intelligence',
    date: 'June 2026',
  },
  {
    href: 'research/us-investors-rotating-into-uk-property-2026',
    title: 'Why American Capital Is Rotating Into UK Real Estate',
    subtitle: 'US investors are increasingly allocating capital into UK residential and commercial property as taxes, insurance costs, and market fragmentation reshape global investment strategy.',
    image: '/research-images/us-investors-uk-property-2026.webp',
    category: 'Global Capital Markets',
    date: 'May 2026',
  },
];

const COMMITMENTS = [
  {
    title: 'Our Story',
    desc: 'We bring the diverse knowledge of our people, clients, and partners to realize potential in every market we serve.',
    href: '/about',
  },
  {
    title: 'Governance',
    desc: 'We take great pride in our reputation for upholding the highest standards in the way we do business. RICS regulated, INREV member.',
    href: '/governance',
  },
  {
    title: 'Sustainability',
    desc: 'Minimizing the environmental impact of the built environment is both a responsibility and an opportunity. ESG-integrated advisory.',
    href: '/sustainability',
  },
  {
    title: 'Culture',
    desc: 'An inclusive culture is a thriving culture. We are committed to our people feeling valued, heard, and empowered to lead.',
    href: '/careers',
  },
];

const FAQS = [
  {
    question: 'What distinguishes Murivest from global brokerage networks like CBRE, JLL, or Knight Frank?',
    answer:
      'Unlike global brokerage networks such as CBRE, JLL, Knight Frank, Savills, Colliers, and Cushman & Wakefield, Murivest maintains a dedicated on-the-ground presence in frontier and emerging markets with a mandate-based advisory model. We do not operate a franchised network. Every professional is a direct employee, and every mandate is underwritten to institutional standards.',
  },
  {
    question: 'Who are Murivest\'s typical institutional clients?',
    answer:
      'We advise sovereign wealth funds, public pension funds, multi-generational family offices, private equity firms, listed REITs, and Fortune 500 occupiers. Our relationships are mandate-based, confidential, and typically initiated through direct institutional referral.',
  },
  {
    question: 'What asset classes does Murivest cover?',
    answer:
      'Our advisory spans Grade A office, industrial and logistics, data centres, retail and mixed-use, hospitality, and conservation shophouses. We maintain specialist teams for each sector across our four regional platforms.',
  },
  {
    question: 'How does Murivest verify counterparty compliance?',
    answer:
      'All engagements require KYC and AML verification, source-of-funds review, and formal scope documentation before commencement. Murivest is a RICS regulated firm, an INREV member, and maintains full professional indemnity coverage in every operating jurisdiction.',
  },
  {
    question: 'Does Murivest manage capital or operate investment funds?',
    answer:
      'No. Murivest does not operate collective investment schemes, pool investor capital, or offer regulated financial products. All engagements are advisory in nature.',
  },
];

/* ─── MAIN PAGE ───────────────────────────────────────────────── */

export default function GlobalHomePage() {
  return (
    <main className="bg-[#0B1510] text-[#FAF9F6] antialiased selection:bg-[#C9A96E]/30">
      
      {/* SCHEMA.ORG */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://murivest.com/#organization',
                name: 'Murivest',
                alternateName: 'Murivest Realty Group',
                url: 'https://murivest.com',
                logo: 'https://murivest.com/logo.png',
                foundingDate: '2001',
                description:
                  'Institutional commercial real estate advisory firm serving sovereign wealth funds, pension funds, family offices, and institutional investors across 35 countries.',
                sameAs: [
                  'https://www.linkedin.com/company/murivest',
                  'https://crunchbase.com/organization/murivest',
                ],
                knowsAbout: [
                  'Commercial Real Estate',
                  'Investment Sales',
                  'Capital Markets',
                  'Grade A Office',
                  'Industrial Real Estate',
                  'Logistics Property',
                  'Data Centre Real Estate',
                  'Sovereign Wealth Fund Investment',
                  'Family Office Real Estate',
                  'Cross-Border Transaction Structuring',
                ],
                contactPoint: {
                  '@type': 'ContactPoint',
                  contactType: 'Institutional Enquiries',
                  email: 'investments@murivest.co.ke',
                },
              },
              {
                '@type': 'FAQPage',
                mainEntity: FAQS.map((f) => ({
                  '@type': 'Question',
                  name: f.question,
                  acceptedAnswer: { '@type': 'Answer', text: f.answer },
                })),
              },
            ],
          }),
        }}
      />

      {/* ═══════════════════════════════════════════════════════════
          HERO
          One image. Big words. Generous whitespace. Institutional.
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpeg"
            alt="Murivest Institutional Advisory — London skyline at dusk"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1510] via-[#0B1510]/70 to-[#0B1510]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1510]/80 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pb-24 md:pb-32 pt-40">
          <div className="max-w-3xl">
            <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#C9A96E] font-medium mb-8 animate-fade-up">
              Institutional Commercial Real Estate Advisory
            </p>

            <h1 className="font-serif text-[2.8rem] md:text-[4rem] lg:text-[5.5rem] text-[#FAF9F6] leading-[1.02] mb-8 animate-fade-up delay-100">
              Institutional Commercial<br />
              <em className="italic text-[#C9A96E] font-light">Real Estate Advisory.</em>
            </h1>

            <p className="text-[15px] md:text-[17px] text-[#FAF9F6]/60 leading-[1.7] font-light max-w-xl mb-12 animate-fade-up delay-200">
              Murivest is an independent institutional real estate advisory firm. We originate and advise on capital mandates across Africa, Middle East, Asia Pacific and Europe. 
              We advise sovereign wealth funds, pension funds, and family offices on 
              acquisition, disposition, and strategy across Africa, the Middle East, 
              Asia Pacific, and Europe.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#C9A96E] text-[#0B1510] text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-[#D4B87E] transition-colors duration-500"
              >
                Arrange a Briefing
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>
              <Link
                href="/singapore"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#FAF9F6]/20 text-[#FAF9F6]/80 text-[11px] tracking-[0.2em] uppercase font-medium hover:border-[#C9A96E]/50 hover:text-[#FAF9F6] transition-all duration-500"
              >
                Explore Singapore
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHAT WE DO
          Clean four-column grid. CBRE-style. No icons. Just type.
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF9F6] text-[#1A1A1A]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-24 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#8B7355] font-medium mb-4">
                What We Do
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-[#1A1A1A] leading-[1.1]">
                Create the real estate solutions of tomorrow.
              </h2>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-16">
              {SERVICES.map((s) => (
                <div key={s.title} className="group">
                  <h3 className="text-[15px] font-semibold tracking-wide text-[#1A1A1A] mb-3 group-hover:text-[#8B7355] transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-[14px] leading-[1.75] text-[#5A5A5A] font-light mb-5">
                    {s.desc}
                  </p>
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-medium group-hover:text-[#1A1A1A] transition-colors duration-300"
                  >
                    <span>Learn More</span>
                    <span className="w-6 h-[1px] bg-current group-hover:w-10 transition-all duration-300" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          INSIGHTS & RESEARCH
          Editorial cards. Linked articles. CBRE-style.
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0B1510] border-t border-[rgba(201,169,110,0.08)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-24 lg:py-36">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] font-medium mb-4">
                Insights & Research
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-[#FAF9F6] leading-[1.1]">
                Latest Insights
              </h2>
            </div>
            <Link
              href="/research"
              className="group inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-[#C9A96E] font-medium shrink-0"
            >
              <span>Explore All Research</span>
              <span className="w-6 h-[1px] bg-current group-hover:w-10 transition-all duration-300" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {INSIGHTS.map((item) => (
              <Link key={item.title} href={item.href} className="group block">
                <div className="relative aspect-[16/10] mb-6 overflow-hidden border border-[rgba(201,169,110,0.10)]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1510]/60 to-transparent" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A96E]">
                    {item.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#FAF9F6]/20" />
                  <span className="text-[11px] text-[#FAF9F6]/30">{item.date}</span>
                </div>
                <h3 className="text-[17px] font-medium text-[#FAF9F6] leading-[1.4] mb-2 group-hover:text-[#C9A96E] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-[1.65] text-[#FAF9F6]/45 font-light">
                  {item.subtitle}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          LEADERSHIP
          The human layer. Your CEO component.
      ═══════════════════════════════════════════════════════════ */}
      <CEOInstitutionalProfile />

      {/* ═══════════════════════════════════════════════════════════
          OUR COMMITMENT
          Values carousel. CBRE-style. Clean cards.
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#111C16] border-t border-[rgba(201,169,110,0.08)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-24 lg:py-36">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] font-medium mb-4">
              Our Commitment
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-[#FAF9F6] leading-[1.1]">
              Principles That Govern Our Practice
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(201,169,110,0.10)]">
            {COMMITMENTS.map((c) => (
              <div key={c.title} className="bg-[#111C16] p-8 lg:p-10 group hover:bg-[#0B1510] transition-colors duration-500">
                <h3 className="text-[14px] font-semibold tracking-wide text-[#FAF9F6] mb-4 group-hover:text-[#C9A96E] transition-colors duration-300">
                  {c.title}
                </h3>
                <p className="text-[13px] leading-[1.75] text-[#FAF9F6]/45 font-light mb-6">
                  {c.desc}
                </p>
                <Link
                  href={c.href}
                  className="inline-flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-[#C9A96E]/70 font-medium group-hover:text-[#C9A96E] transition-colors duration-300"
                >
                  <span>Read More</span>
                  <span className="w-4 h-[1px] bg-current group-hover:w-8 transition-all duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          NEWSLETTER
          "Our Take" equivalent. Clean, editorial.
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0B1510] border-t border-[rgba(201,169,110,0.08)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-24 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-5">
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] font-medium mb-4">
                Murivest Perspectives
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#FAF9F6] leading-[1.1] mb-6">
                Expert perspectives on what matters most in commercial real estate.
              </h2>
              <p className="text-[14px] leading-[1.8] text-[#FAF9F6]/50 font-light">
                Quarterly market intelligence, sector theses, and allocation strategy 
                briefings delivered directly to institutional inboxes.
              </p>
            </div>

            <div className="lg:col-span-7">
              <form className="flex flex-col sm:flex-row gap-4" action="/api/subscribe" method="POST">
                <input
                  type="email"
                  name="email"
                  placeholder="Institutional email address"
                  required
                  className="flex-1 px-6 py-4 bg-transparent border border-[rgba(250,249,246,0.15)] text-[#FAF9F6] text-[14px] placeholder:text-[#FAF9F6]/25 focus:outline-none focus:border-[#C9A96E]/50 transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#C9A96E] text-[#0B1510] text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-[#D4B87E] transition-colors duration-500 shrink-0"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-[11px] text-[#FAF9F6]/25 mt-4">
                By subscribing, you agree to receive institutional research communications. 
                You may unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FAQ
          Hidden in design, visible to LLMs and Google.
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#111C16] border-t border-[rgba(201,169,110,0.08)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-24 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-4">
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] font-medium mb-4">
                Institutional Enquiries
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#FAF9F6] leading-[1.1] mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-[14px] leading-[1.8] text-[#FAF9F6]/50 font-light">
                Answers to common questions from sovereign wealth funds, pension boards, 
                family offices, and institutional allocators.
              </p>
            </div>

            <div className="lg:col-span-8">
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  className="group border-b border-[rgba(250,249,246,0.06)] py-6 cursor-pointer"
                >
                  <summary className="list-none flex items-start justify-between gap-4">
                    <span className="text-[14px] md:text-[15px] text-[#FAF9F6]/80 font-medium leading-relaxed">
                      {faq.question}
                    </span>
                    <span className="text-[#C9A96E] text-lg leading-none mt-0.5 group-open:rotate-45 transition-transform duration-300">
                      +
                    </span>
                  </summary>
                  <p className="text-[14px] leading-[1.8] text-[#FAF9F6]/50 font-light mt-4 max-w-2xl">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.9s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.25s; }
        .delay-300 { animation-delay: 0.4s; }
        details > summary::-webkit-details-marker { display: none; }
      `}</style>
    </main>
  );
}