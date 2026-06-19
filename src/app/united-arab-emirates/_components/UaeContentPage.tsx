import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Globe,
  ShieldAlert,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import { UaeInternalBreadcrumb } from './UaeInternalLinks';
import { UaeInternalLinks } from './UaeInternalLinks';
import type { UaePageConfig } from './uae-pages-types';

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
        <UaeInternalBreadcrumb />
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

      <section id="executive-summary" className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading eyebrow="Executive Summary" title="Investment Committee Summary" description={page.summary} />
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7 space-y-5">
              {page.marketContext.split('\n\n').map((paragraph) => (
                <p key={paragraph} className="text-sm md:text-base text-[#4A4A4A] leading-relaxed">{paragraph}</p>
              ))}
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[#1A1A1A]/5 bg-[#FAF9F6] p-6 md:p-8">
                <h3 className="font-display text-xl text-[#1A1A1A] mb-5">Capital Allocation Lens</h3>
                <ul className="space-y-4">
                  {page.institutionalRelevance.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#B8956B] shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-sm text-[#4A4A4A] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="investment-thesis" className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading eyebrow="Investment Thesis" title="Why Sophisticated Capital Allocates Here" />
          <CardGrid items={page.thesis} icon={Target} />
        </div>
      </section>

      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading eyebrow="Demand Drivers" title="Structural Demand Drivers" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {page.demandDrivers.map((driver) => (
              <div key={driver} className="p-6 bg-[#FAF9F6] border border-[#1A1A1A]/5">
                <TrendingUp className="w-5 h-5 text-[#B8956B] mb-6" strokeWidth={1.5} />
                <h3 className="font-display text-lg text-[#1A1A1A] mb-3">{driver}</h3>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">Demand is evaluated through occupancy, covenant quality, rent durability, replacement cost and exit liquidity.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="risk-factors" className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading eyebrow="Risk Factors" title="Institutional Risk Considerations" />
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {page.riskFactors.map((risk) => (
              <div key={risk} className="p-6 bg-white border border-[#1A1A1A]/5">
                <ShieldAlert className="w-5 h-5 text-[#B8956B] mb-6" strokeWidth={1.5} />
                <h3 className="font-display text-lg text-[#1A1A1A] mb-3">{risk}</h3>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">Murivest underwrites this through scenario analysis, lease diligence, counterparty review and exit route mapping.</p>
              </div>
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

      <UaeInternalLinks title="Complete UAE Internal Link Map" />

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
