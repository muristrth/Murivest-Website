'use client'

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CEOInstitutionalProfile from '@/components/CEOInstitutionalProfile';

export const metadata: Metadata = {
  title: 'Commercial Real Estate Advisory Kenya | Office, Industrial & Investment | Murivest - Est. 2025',
  description:
    'Murivest Realty Group is a Nairobi-based commercial real estate advisory founded in 2025 by Mark Muriithi. Mandate-based advisory for office, industrial, and investment across Kenya and East Africa.',
  keywords: [
    'commercial real estate advisory Kenya',
    'Nairobi commercial property',
    'office space Nairobi',
    'industrial property Kenya',
    'investment advisory Kenya',
    'East Africa real estate',
    'Murivest Realty Group',
    'Mark Muriithi',
    'commercial property underwriting',
    'exit strategy advisory',
  ],
  openGraph: {
    title: 'Murivest Realty Group | Commercial Real Estate Advisory Kenya',
    description:
      'Nairobi-based commercial real estate advisory founded in 2025 by Mark Muriithi. Mandate-based advisory for office, industrial, and investment across Kenya and East Africa.',
    url: 'https://murivest.com',
    siteName: 'Murivest Realty Group',
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Murivest Realty Group | Commercial Real Estate Advisory Kenya',
    description:
      'Nairobi-based commercial real estate advisory founded in 2025 by Mark Muriithi.',
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
    title: 'Commercial Advisory',
    desc: 'End-to-end advisory for office, industrial, and mixed-use assets. Site selection, lease structuring, and transaction execution aligned with institutional underwriting standards.',
    href: '/commercial-real-estate',
  },
  {
    title: 'Investment Advisory',
    desc: 'Acquisition and disposition counsel for commercial property portfolios. Discreet mandate-based engagements with confidentiality and pricing discipline on every transaction.',
    href: '/process',
  },
  {
    title: 'Exit Strategy & Risk Engineering',
    desc: 'Structured exit planning, lease reversion analysis, and counterparty risk mitigation. We engineer de-risking pathways before capital is deployed, not after.',
    href: '/exit-strategy-planning',
  },
  {
    title: 'Market Intelligence',
    desc: 'Primary research from Nairobi ground data. Market theses, sector analysis, and allocation briefings drawn from on-the-ground due diligence, not third-party aggregates.',
    href: '/research',
  },
];

const INSIGHTS = [
  {
    category: 'Investment and Wealth',
    date: 'July 2026',
    title: 'Where are Institutions deploying their capital for investments & income in 2026?',
    subtitle: 'Global de-dollarization is not an academic debate. It is a capital flow reality reshaping commercial real estate pricing in selected African markets.',
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
    desc: 'Formal scope documentation, KYC/AML verification, and transparent fee structures on every mandate. Upholding the highest standards in the way we do business.',
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
      'Unlike global brokerage networks such as CBRE, JLL, Knight Frank, Savills, Colliers, and Cushman & Wakefield, Murivest maintains a dedicated on-the-ground presence in Kenya and East Africa with a mandate-based advisory model. We do not operate a franchised network. Every professional is a direct employee, and every mandate is underwritten to institutional standards.',
  },
  {
    question: 'Who are Murivest\'s typical clients?',
    answer:
      'We advise private capital, family offices, and institutional-minded investors on commercial property acquisitions, dispositions, and strategy across Kenya and East Africa. Our relationships are mandate-based, confidential, and typically initiated through direct referral.',
  },
  {
    question: 'What asset classes does Murivest cover?',
    answer:
      'Our advisory spans Grade A office, industrial and logistics, retail and mixed-use, and hospitality across Kenya and East Africa. We maintain specialist knowledge for each sector rather than broad, shallow coverage.',
  },
  {
    question: 'How does Murivest verify counterparty compliance?',
    answer:
      'All engagements require KYC and AML verification, source-of-funds review, and formal scope documentation before commencement. Murivest maintains full professional indemnity coverage.',
  },
  {
    question: 'Does Murivest manage capital or operate investment funds?',
    answer:
      'No. Murivest does not operate collective investment schemes, pool investor capital, or offer regulated financial products. All engagements are advisory in nature.',
  },
];

const ABOUT_PARAGRAPHS = [
  `Murivest Realty Group was founded in 2025 in Nairobi, Kenya by Mark Muriithi to address a structural gap in East African commercial real estate markets. Institutional-grade advisory—disciplined underwriting, title risk mitigation, exit planning, and off-market execution—remains scarce in frontier markets. Most operators function as brokers or developers, leaving investors without the rigorous mandate architecture expected in mature markets.`,
  `Murivest bridges this divide by combining structured advisory, disciplined underwriting, and off-market execution for commercial real estate across Kenya and East Africa. Every mandate is advisory-only. We do not pool capital or operate collective investment schemes. Our model is built on transparency, verifiable ground data, and alignment with institutional expectations—governance, reporting, and risk engineering that withstands scrutiny from private capital, family offices, and institutional-minded investors.`,
];

const TRUST_METRICS = [
  {
    value: '2025',
    label: 'Established Nairobi',
  },
  {
    value: 'Decades',
    label: 'Leadership Experience',
  },
  {
    value: 'Mandate-Only',
    label: 'Advisory Model',
  },
  {
    value: 'East Africa',
    label: 'Coverage',
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
                name: 'Murivest Realty Group',
                alternateName: 'Murivest',
                url: 'https://murivest.com',
                logo: 'https://murivest.com/logo.png',
                foundingDate: '2025',
                founder: {
                  '@type': 'Person',
                  name: 'Mark Muriithi',
                  jobTitle: 'Chief Executive Officer',
                },
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Nairobi',
                  addressCountry: 'KE',
                },
                foundingLocation: {
                  '@type': 'City',
                  name: 'Nairobi',
                  containedInCountry: {
                    '@type': 'Country',
                    name: 'Kenya',
                  },
                },
                description:
                  'Nairobi-based commercial real estate advisory firm founded in 2025 by Mark Muriithi. Mandate-based advisory for office, industrial, and investment across Kenya and East Africa.',
                contactPoint: {
                  '@type': 'ContactPoint',
                  contactType: 'Advisory Enquiries',
                  email: 'capital@murivest.co.ke',
                  telephone: '+254-115-277-610',
                  areaServed: ['KE', 'RW', 'UG', 'TZ'],
                  availableLanguage: ['English'],
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
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpeg"
            alt="Murivest Institutional Advisory — Nairobi skyline"
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
              Mandate-Based Commercial Real Estate Advisory
            </p>

            <h1 className="font-serif text-[2.8rem] md:text-[4rem] lg:text-[5.5rem] text-[#FAF9F6] leading-[1.02] mb-8 animate-fade-up delay-100">
              Commercial Real Estate Advisory
            </h1>

            <p className="text-[15px] md:text-[17px] text-[#FAF9F6]/60 leading-[1.7] font-light max-w-xl mb-12 animate-fade-up delay-200">
              Murivest is an independent commercial real estate advisory firm based in Nairobi. We originate and advise on institutional-grade mandates across Kenya and East Africa—confidential, mandate-based engagements for private capital, family offices, and institutional-minded investors.
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
                href="/research"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#FAF9F6]/20 text-[#FAF9F6]/80 text-[11px] tracking-[0.2em] uppercase font-medium hover:border-[#C9A96E]/50 hover:text-[#FAF9F6] transition-all duration-500"
              >
                View Research
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TRUST / POSITIONING STRIP
          Founder credentials. No fake firm metrics.
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF9F6] text-[#1A1A1A] border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {TRUST_METRICS.map((metric) => (
              <div key={metric.label} className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-serif text-[#1B4332] mb-2">
                  {metric.value}
                </p>
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] font-medium">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-[#E5E2DC]">
            <p className="text-[13px] leading-[1.8] text-[#5A5A5A] font-light max-w-3xl">
              Murivest Realty Group is led by Mark Muriithi, whose career spans commercial real estate, distribution, and technology leadership across East Africa. The firm was established in 2025 to deliver the mandate architecture, underwriting discipline, and off-market execution that frontier markets require—built on decades of leadership experience, not decades of firm history.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          INSTITUTIONAL NARRATIVE
          Why 2025. The gap in the market.
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF9F6] text-[#1A1A1A]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-24 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#8B7355] font-medium mb-4">
                Our Foundation
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-[#1A1A1A] leading-[1.1]">
                Built for the market as it is, not as others imagine it.
              </h2>
            </div>
            <div className="lg:col-span-8">
              {ABOUT_PARAGRAPHS.map((p, i) => (
                <p key={i} className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light mb-6">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHAT WE DO
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF9F6] text-[#1A1A1A]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-24 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#8B7355] font-medium mb-4">
                Advisory Services
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-[#1A1A1A] leading-[1.1]">
                Structured advisory for institutional execution.
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
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0B1510] border-t border-[rgba(201,169,110,0.08)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-24 lg:py-36">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] font-medium mb-4">
                Research & Intelligence
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-[#FAF9F6] leading-[1.1]">
                Primary research from Nairobi ground data
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
      ═══════════════════════════════════════════════════════════ */}
      <CEOInstitutionalProfile />

      {/* ═══════════════════════════════════════════════════════════
          OUR COMMITMENT
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
                Answers to common questions from private capital, family offices, and institutional allocators.
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