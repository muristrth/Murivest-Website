import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import { Suspense } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Globe,
  ShieldAlert,
  Target,
  TrendingUp,
  Download,
  Users,
} from 'lucide-react';
import { UaeInternalBreadcrumb } from './UaeInternalLinks';
import { UaeInternalLinks } from './UaeInternalLinks';
import type { UaePageConfig } from './uae-pages-types';

const researchReports = [
  {
    title: 'UAE Office Market Report',
    subtitle: '2026–2030 Outlook',
    href: '/united-arab-emirates/research/uae-office-market-report',
    cover: 'bg-gradient-to-br from-slate-800 to-slate-900',
  },
  {
    title: 'UAE Industrial Market Report',
    subtitle: 'Supply, Demand & Cap Rates',
    href: '/united-arab-emirates/research/uae-industrial-market-report',
    cover: 'bg-gradient-to-br from-stone-800 to-stone-900',
  },
  {
    title: 'GCC Real Estate Outlook',
    subtitle: 'Cross-Border Capital Flows',
    href: '/united-arab-emirates/research/gcc-real-estate-outlook',
    cover: 'bg-gradient-to-br from-zinc-800 to-zinc-900',
  },
  {
    title: 'Fujairah Industrial Outlook',
    subtitle: 'Port & Logistics Infrastructure',
    href: '/united-arab-emirates/research/fujairah-industrial-outlook',
    cover: 'bg-gradient-to-br from-neutral-800 to-neutral-900',
  },
]

const keyMarkets = [
  {
    city: 'Dubai',
    label: 'Global Gateway City',
    href: '/united-arab-emirates/dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
  },
  {
    city: 'Abu Dhabi',
    label: 'Sovereign Capital Hub',
    href: '/united-arab-emirates/abu-dhabi',
    image: 'https://images.unsplash.com/photo-1623998021446-45f9b6a2ad98?w=800&q=80',
  },
  {
    city: 'Sharjah',
    label: 'Industrial & Cultural Heart',
    href: '/united-arab-emirates/sharjah',
    image: 'https://images.unsplash.com/photo-1611967164521-ab2a1b3f5a1d?w=800&q=80',
  },
  {
    city: 'Ras Al Khaimah',
    label: 'Fastest-Growing Economy',
    href: '/united-arab-emirates/ras-al-khaimah',
    image: 'https://images.unsplash.com/photo-1598887142787-0cf008e9c15b?w=800&q=80',
  },
  {
    city: 'Ajman',
    label: 'Value Corridor',
    href: '/united-arab-emirates/ajman',
    image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=80',
  },
  {
    city: 'Fujairah',
    label: 'Strategic Maritime Gateway',
    href: '/united-arab-emirates/fujairah',
    image: 'https://images.unsplash.com/photo-1569949381669-ecf31ae8f613?w=800&q=80',
  },
]


type StructuredData = {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  publisher: {
    '@type': string;
    name: string;
    url: string;
  };
  mainEntityOfPage: {
    '@type': string;
    '@id': string;
  };
};

function pageUrl(slug: string) {
  return slug === 'united-arab-emirates'
    ? 'https://murivest.com/united-arab-emirates'
    : `https://murivest.com/united-arab-emirates/${slug}`;
}

function structuredData(page: UaePageConfig): StructuredData {
  const url = pageUrl(page.slug);

  return {
    '@context': 'https://schema.org',
    '@type': page.schemaType,
    name: page.title,
    description: page.description,
    url,
    publisher: {
      '@type': 'Organization',
      name: 'Murivest Global',
      url: 'https://murivest.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-10 md:mb-14 max-w-3xl">
      <p className="font-body text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#B8956B] block mb-4 md:mb-5">
        {eyebrow}
      </p>
      <h2 className="font-display text-[28px] md:text-[36px] lg:text-[40px] leading-[1.1] text-[#1A1A1A] mb-4">
        {title}
      </h2>
      {description ? <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed">{description}</p> : null}
    </div>
  );
}

function CardGrid({ items, icon: Icon }: { items: string[]; icon: any }) {
  return (
    <div className="grid md:grid-cols-3 gap-4 md:gap-6">
      {items.map((item) => (
        <div key={item} className="p-6 md:p-8 bg-white border border-[#1A1A1A]/5">
          <Icon className="w-5 h-5 text-[#B8956B] mb-6" strokeWidth={1.5} />
          <p className="text-sm md:text-base text-[#1A1A1A] leading-relaxed">{item}</p>
        </div>
      ))}
    </div>
  );
}

function LinkList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="group flex items-center justify-between gap-3 rounded-xl border border-[#1A1A1A]/5 bg-[#FAF9F6] p-4 text-sm text-[#4A4A4A] hover:border-[#1B4332] hover:text-[#1B4332] transition-colors">
          <span>{link.label}</span>
          <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
        </Link>
      ))}
    </div>
  );
}

export function UaeContentPage({ config, heroBgImage, extraSections }: { config: UaePageConfig; heroBgImage?: string; extraSections?: React.ReactNode }) {
  const page = config;

  return (
    <main className="bg-[#FAF9F6] text-[#1A1A1A] font-body antialiased selection:bg-[#1B4332] selection:text-white overflow-x-hidden">
      <Script id={`schema-${page.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(page)) }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-24 md:pt-28">
        <Suspense fallback={<div />}>
          <UaeInternalBreadcrumb />
        </Suspense>
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/85 backdrop-blur-md border-b border-[#1A1A1A]/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="font-display text-xl md:text-2xl text-[#1B4332] tracking-tight">
            Murivest
          </Link>
          <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-sm text-[#4A4A4A]">
            <Link href="/united-arab-emirates" className="hover:text-[#1B4332] transition-colors">UAE</Link>
            <Link href="#investment-thesis" className="hover:text-[#1B4332] transition-colors">Thesis</Link>
            <Link href="#risk-factors" className="hover:text-[#1B4332] transition-colors">Risks</Link>
            <Link href="#related-pages" className="hover:text-[#1B4332] transition-colors">Related Pages</Link>
            <Link href="/united-arab-emirates/contact" className="px-5 py-2.5 bg-[#1B4332] text-white hover:bg-[#142d23] transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 overflow-hidden">
        {heroBgImage ? (
          <>
            <Image src={heroBgImage} alt="" fill className="object-cover" sizes="100vw" priority />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/85 via-[#1A1A1A]/60 to-[#1A1A1A]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6]/10 via-transparent to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#E8E6E1] via-[#FAF9F6] to-[#FFFFFF]" />
        )}
        <div className="max-w-[1400px] mx-auto relative grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <p className="font-body text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#B8956B] block mb-4 md:mb-5">
              {page.eyebrow}
            </p>
            <h1 className={`font-display text-[38px] md:text-[52px] lg:text-[64px] leading-[1.05] mb-6 md:mb-8 max-w-5xl ${heroBgImage ? 'text-white' : 'text-[#1A1A1A]'}`}>
              {page.title}
            </h1>
            <p className={`text-base md:text-lg leading-relaxed max-w-3xl ${heroBgImage ? 'text-white/80' : 'text-[#4A4A4A]'}`}>
              {page.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link href="/united-arab-emirates/contact" className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 bg-[#1B4332] text-white text-sm font-medium tracking-wide hover:bg-[#142d23] transition-colors" style={{ minHeight: 48 }}>
                Discuss Allocation Fit
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link href="#executive-summary" className={`inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 border text-sm font-medium tracking-wide transition-colors ${heroBgImage ? 'border-white/30 text-white hover:border-white/60 hover:text-white' : 'border-[#1A1A1A]/20 text-[#1A1A1A] hover:border-[#1B4332] hover:text-[#1B4332]'}`} style={{ minHeight: 48 }}>
                Read Investment View
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#1B4332] text-white p-6 md:p-8 border border-white/10">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/60 mb-4">Institutional View</p>
              <p className="font-display text-2xl md:text-3xl leading-snug mb-6">{page.summary}</p>
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/50 mb-1">Capital Role</p>
                  <p className="text-sm text-white/80">Preservation, income and optionality</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/50 mb-1">Investor Fit</p>
                  <p className="text-sm text-white/80">Family offices, funds and sovereign capital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== KEY MARKETS (MINIMAL) ========== */}
      <section id="markets" className="py-24 md:py-36 lg:py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A96E] mb-4">
            Primary Institutional Gateways
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-[#111111] mb-12 md:mb-16">
            UAE Markets
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {keyMarkets.map((market) => (
              <Link
                key={market.city}
                href={market.href}
                className="group block relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[4/5] relative">
                  <Image
                    src={market.image}
                    alt={market.city}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="font-serif text-2xl md:text-3xl text-white mb-1">{market.city}</h3>
                    <p className="text-sm text-white/70 uppercase tracking-wider">{market.label}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SELECTED RESEARCH ========== */}
      <section id="research" className="py-24 md:py-36 lg:py-48 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A96E] mb-4">
            Institutional Research
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-[#111111] mb-12 md:mb-16">
            Selected Reports
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {researchReports.map((report) => (
              <Link
                key={report.title}
                href={report.href}
                className="group block rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow bg-white"
              >
                {/* Report cover */}
                <div className={`aspect-[3/4] ${report.cover} flex flex-col items-center justify-center p-6 text-center relative`}>
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                    <Download className="w-6 h-6 text-[#C9A96E]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-white leading-tight mb-2">
                    {report.title}
                  </h3>
                  <p className="text-xs text-white/50 uppercase tracking-widest">{report.subtitle}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A96E] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </div>
                <div className="p-4 text-center">
                  <span className="text-sm text-[#0F172A] font-medium group-hover:text-[#C9A96E] transition-colors">
                    Download PDF →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading eyebrow="Competitive Advantages" title="Structural Advantages" />
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {page.competitiveAdvantages.map((advantage) => (
              <div key={advantage} className="p-6 md:p-8 bg-[#FAF9F6] border border-[#1A1A1A]/5">
                <CheckCircle2 className="w-5 h-5 text-[#B8956B] mb-6" strokeWidth={1.5} />
                <h3 className="font-display text-lg text-[#1A1A1A] mb-3">{advantage}</h3>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">The advantage is relevant where it improves risk-adjusted returns, tenant quality, liquidity or long-term capital protection.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading eyebrow="Global Comparison" title="Positioning Against Global Alternatives" />
          <div className="overflow-x-auto rounded-2xl border border-[#1A1A1A]/5 bg-white">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#1A1A1A]/10">
                  <th className="p-5 text-xs uppercase tracking-wider text-[#8A8A8A]">Market</th>
                  <th className="p-5 text-xs uppercase tracking-wider text-[#8A8A8A]">Institutional Comparison</th>
                </tr>
              </thead>
              <tbody>
                {page.globalComparison.map((row) => (
                  <tr key={row.market} className="border-b border-[#1A1A1A]/5 last:border-b-0">
                    <td className="p-5 text-sm font-medium text-[#1A1A1A]">{row.market}</td>
                    <td className="p-5 text-sm text-[#4A4A4A] leading-relaxed">{row.comparison}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Family Office Perspective" title="Multi-Generational Capital Considerations" />
            <ul className="space-y-4">
              {page.familyOfficePerspective.map((item) => (
                <li key={item} className="flex gap-3">
                  <Users className="w-5 h-5 text-[#B8956B] shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-sm md:text-base text-[#4A4A4A] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Investor Implications" title="How To Use This Page" />
            <ul className="space-y-4">
              {page.investorImplications.map((item) => (
                <li key={item} className="flex gap-3">
                  <FileText className="w-5 h-5 text-[#B8956B] shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-sm md:text-base text-[#4A4A4A] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="related-research" className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading eyebrow="Related Research" title="Research And Market Intelligence" />
          <LinkList links={page.relatedResearch} />
        </div>
      </section>

      <section id="related-pages" className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading eyebrow="Internal Links" title="Related UAE Pages" />
          <LinkList links={page.relatedPages} />
        </div>
      </section>

      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {page.faqs.map((faq) => (
              <details key={faq.question} className="group p-6 bg-[#FAF9F6] border border-[#1A1A1A]/5">
                <summary className="cursor-pointer list-none font-display text-base md:text-lg text-[#1A1A1A] pr-8">
                  {faq.question}
                </summary>
                <p className="mt-4 text-sm text-[#4A4A4A] leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <UaeInternalLinks title="Complete UAE Internal Link Map" />
      </Suspense>

      {extraSections}

      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#1B4332] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/60 mb-4">Private Advisory</p>
          <h2 className="font-display text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] mb-4 md:mb-6">{page.ctaTitle}</h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8 md:mb-10">{page.ctaDescription}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Link href="/united-arab-emirates/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1B4332] text-sm font-medium tracking-wide hover:bg-[#FAF9F6] transition-colors" style={{ minHeight: 48 }}>
              Speak With Murivest
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
            <Link href="/united-arab-emirates" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white text-sm font-medium tracking-wide hover:bg-white/10 transition-colors" style={{ minHeight: 48 }}>
              Return To UAE Hub
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
