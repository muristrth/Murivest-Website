'use client';

import { useEffect, useRef, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import {
  UaeInternalBreadcrumb,
  UaeInternalLinks,
} from '@/app/united-arab-emirates/_components/UaeInternalLinks';
import InstitutionalContactForm from '@/app/united-arab-emirates/_components/InstitutionalContactForm';

/* ========================================================================
 *  SEO + STRUCTURED DATA
 *  Title, description, FAQ content and internal links are carried over
 *  unchanged from the previous page so search visibility is preserved.
 *  If a separate generateMetadata / layout-level metadata export exists
 *  elsewhere in the app for this route, it should remain untouched.
 * ===================================================================== */

const PAGE_URL = 'https://murivest.com/united-arab-emirates/contact';

const pageMeta = {
  title: 'Contact Murivest UAE — Institutional Commercial Real Estate Advisory',
  description:
    "Contact Murivest's UAE team for institutional commercial real estate advisory, investment opportunities and research access.",
};

const faqs = [
  {
    question: 'What information should I provide when contacting Murivest?',
    answer:
      'Your institutional profile, investment mandate (size, sectors, locations, risk appetite), target timeline and any specific requirements or preferences.',
  },
  {
    question: 'How does Murivest ensure confidentiality?',
    answer:
      'All enquiries are treated as confidential. NDAs can be executed before any opportunity details are shared.',
  },
  {
    question: 'What happens after I contact Murivest?',
    answer:
      'An initial consultation to understand your mandate, followed by relevant market intelligence, opportunity presentation and advisory engagement if appropriate.',
  },
];

const relatedResearch = [
  { label: 'How To Invest In UAE Real Estate', href: '/united-arab-emirates/investment-guides/how-to-invest-in-uae-real-estate' },
  { label: 'UAE Cap Rates', href: '/united-arab-emirates/research/uae-cap-rates' },
  { label: 'GCC Real Estate Outlook', href: '/united-arab-emirates/research/gcc-real-estate-outlook' },
];

const relatedPages = [
  { label: 'UAE Overview', href: '/united-arab-emirates' },
  { label: 'Capital Markets', href: '/united-arab-emirates/capital-markets' },
  { label: 'Research', href: '/united-arab-emirates/research' },
  { label: 'Off-Market', href: '/united-arab-emirates/off-market' },
];

function structuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageMeta.title,
    description: pageMeta.description,
    url: PAGE_URL,
    publisher: {
      '@type': 'Organization',
      name: 'Murivest Global',
      url: 'https://murivest.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': PAGE_URL,
    },
  };
}

function faqStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/* ========================================================================
 *  REVEAL
 *  Restrained scroll-triggered entrance: opacity + translateY only.
 *  No scale, no bounce, no spring. Respects prefers-reduced-motion.
 * ===================================================================== */

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(18px)',
        transition:
          'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ========================================================================
 *  SHARED PRIMITIVES
 * ===================================================================== */

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-body text-[11px] font-medium tracking-[0.28em] uppercase text-[#A67C52]">
      {children}
    </p>
  );
}

/* ========================================================================
 *  SITE HEADER
 * ===================================================================== */

function SiteHeader() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#F8F6F1]/92 backdrop-blur-md border-b border-[#DED8CE]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="font-display text-lg md:text-xl text-[#111111] tracking-tight">
          Murivest
        </Link>
        <nav aria-label="Page sections" className="hidden md:flex items-center gap-8 font-body text-sm text-[#595959]">
          <Link href="#philosophy" className="hover:text-[#8E6A45] transition-colors">Philosophy</Link>
          <Link href="#process" className="hover:text-[#8E6A45] transition-colors">Process</Link>
          <Link href="#criteria" className="hover:text-[#8E6A45] transition-colors">Criteria</Link>
          <Link href="/united-arab-emirates" className="hover:text-[#8E6A45] transition-colors">UAE Hub</Link>
          <Link href="#contact-form" className="text-[#111111] hover:text-[#8E6A45] transition-colors">
            Begin Dialogue
          </Link>
        </nav>
      </div>
    </header>
  );
}

/* ========================================================================
 *  1. CONTACT HERO
 * ===================================================================== */

function ContactHero() {
  return (
    <section className="relative px-6 md:px-12 lg:px-20 pt-6 md:pt-10 pb-24 md:pb-32 border-b border-[#DED8CE]">
      <div className="max-w-[1000px] mx-auto text-center">
        <Reveal>
          <Eyebrow>Private Advisory</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="font-display text-[38px] md:text-[60px] lg:text-[72px] leading-[1.08] text-[#111111] mt-7 mb-8 tracking-tight">
            Begin A Confidential
            <br />
            Investment Dialogue
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="font-body text-base md:text-lg text-[#595959] leading-relaxed max-w-2xl mx-auto">
            Murivest partners with family offices, institutional investors, developers and
            private capital seeking strategic exposure to UAE commercial real estate.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <aside className="font-body text-[11px] md:text-xs uppercase tracking-[0.22em] text-[#8a8a8a] mt-10">
            Engagements begin with mandate alignment before opportunity presentation.
          </aside>
        </Reveal>
      </div>
    </section>
  );
}

/* ========================================================================
 *  2. ADVISORY PHILOSOPHY
 * ===================================================================== */

function AdvisoryPhilosophy() {
  return (
    <section id="philosophy" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 border-b border-[#DED8CE]">
      <div className="max-w-[1300px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>Advisory Philosophy</Eyebrow>
            <h2 className="font-display text-[28px] md:text-[40px] leading-[1.25] text-[#111111] mt-6">
              We believe disciplined advisory begins with understanding capital, not assets.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7 space-y-10">
          <Reveal delay={100}>
            <p className="font-body text-[15px] md:text-base text-[#595959] leading-[1.9]">
              Discretion is structural to our advisory model, not a courtesy extended to it.
              Conversations are held outside any formal mandate documentation, and no enquiry
              is referenced externally without consent. Capital introduced to Murivest moves
              through a single point of contact, never a distribution list.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="font-body text-[15px] md:text-base text-[#595959] leading-[1.9]">
              We measure our work in mandates renewed, not enquiries converted. The majority
              of our advisory relationships extend across successive allocation cycles,
              built on judgment exercised quietly and consistently over time, rather than on
              any single transaction.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <p className="font-body text-[15px] md:text-base text-[#595959] leading-[1.9]">
              Every conversation is grounded in independent research before any opportunity
              is introduced. We test mandate fit against supply dynamics, covenant quality
              and exit liquidity, and we decline engagements where that alignment is
              insufficient.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
 *  3. ENGAGEMENT PROCESS
 * ===================================================================== */

const ENGAGEMENT_STEPS = [
  {
    number: '01',
    title: 'Initial Conversation',
    description: 'A confidential discussion to understand objectives, capital base and timing.',
  },
  {
    number: '02',
    title: 'Mandate Review',
    description: 'Murivest reviews mandate parameters against current market access.',
  },
  {
    number: '03',
    title: 'Research & Strategy',
    description: 'Targeted research and strategy formation aligned to the mandate.',
  },
  {
    number: '04',
    title: 'Opportunity Alignment',
    description: 'Relevant opportunities are presented under appropriate confidentiality.',
  },
  {
    number: '05',
    title: 'Execution Support',
    description: 'Advisory support through diligence, structuring and closing.',
  },
];

function EngagementTimeline() {
  return (
    <section id="process" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-white border-b border-[#DED8CE]">
      <div className="max-w-[1300px] mx-auto">
        <Reveal>
          <Eyebrow>Engagement Process</Eyebrow>
          <h2 className="font-display text-[28px] md:text-[40px] text-[#111111] mt-6 mb-16 md:mb-20 max-w-2xl">
            A Measured Path From Conversation To Execution
          </h2>
        </Reveal>
        <ol className="flex flex-col lg:flex-row">
          {ENGAGEMENT_STEPS.map((step, index) => (
            <li key={step.number} className="flex-1 relative lg:px-6 first:lg:pl-0 last:lg:pr-0">
              <Reveal delay={index * 110}>
                <div className="flex items-start gap-5 lg:flex-col lg:gap-0 pb-10 lg:pb-0 border-b lg:border-b-0 border-[#DED8CE]">
                  <span className="font-display text-2xl text-[#A67C52] shrink-0">{step.number}</span>
                  <div className="lg:mt-7 lg:pt-7 lg:border-t lg:border-[#DED8CE]">
                    <h3 className="font-display text-lg text-[#111111] mb-2">{step.title}</h3>
                    <p className="font-body text-sm text-[#595959] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Reveal>
              {index < ENGAGEMENT_STEPS.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="hidden lg:block absolute top-[34px] -right-3 w-6 h-px bg-[#DED8CE]"
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ========================================================================
 *  4. WHO WE WORK WITH
 * ===================================================================== */

const CLIENT_PROFILES = [
  { title: 'Family Offices', description: 'Multi-generational capital seeking durable, well-governed real asset exposure.' },
  { title: 'Institutional Investors', description: 'Pension funds, insurers and asset managers allocating to UAE commercial real estate.' },
  { title: 'Developers', description: 'Development partners seeking capital, structuring or disposition advisory.' },
  { title: 'Private Investors', description: 'High-net-worth principals investing directly or through structured vehicles.' },
  { title: 'Corporate Owners', description: 'Corporates reviewing owned real estate as part of balance sheet strategy.' },
  { title: 'Sovereign Wealth', description: 'Sovereign and quasi-sovereign capital pursuing long-horizon, strategic positions.' },
];

function ClientProfiles() {
  return (
    <section id="clients" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 border-b border-[#DED8CE]">
      <div className="max-w-[1300px] mx-auto">
        <Reveal>
          <Eyebrow>Who We Work With</Eyebrow>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 mt-10 pt-10 border-t border-[#DED8CE]">
          {CLIENT_PROFILES.map((profile, index) => (
            <Reveal key={profile.title} delay={index * 80}>
              <article>
                <h3 className="font-display text-xl text-[#111111] mb-3">{profile.title}</h3>
                <p className="font-body text-sm text-[#595959] leading-relaxed">{profile.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
 *  5. INVESTMENT PARAMETERS
 * ===================================================================== */

const INVESTMENT_PARAMETERS = [
  { label: 'Minimum Investment', value: 'Discussed per mandate; institutional scale preferred' },
  { label: 'Preferred Asset Classes', value: 'Office, logistics & industrial, residential, hospitality, mixed-use' },
  { label: 'Target Geography', value: 'United Arab Emirates, with selective GCC exposure' },
  { label: 'Capital Structure', value: 'Direct equity, joint venture, structured debt' },
  { label: 'Investment Horizon', value: 'Five to ten years, aligned to mandate' },
  { label: 'Target Returns', value: 'Risk-adjusted, benchmarked to mandate objectives' },
  { label: 'Risk Profile', value: 'Core to core-plus, selective value-add' },
  { label: 'Hold Period', value: 'Determined by strategy and exit route' },
];

function InvestmentCriteria() {
  return (
    <section id="criteria" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-white border-b border-[#DED8CE]">
      <div className="max-w-[1000px] mx-auto">
        <Reveal>
          <Eyebrow>Investment Parameters</Eyebrow>
          <h2 className="font-display text-[28px] md:text-[40px] text-[#111111] mt-6 mb-14">
            Indicative Parameters
          </h2>
        </Reveal>
        <dl className="border-t border-[#DED8CE]">
          {INVESTMENT_PARAMETERS.map((row, index) => (
            <Reveal key={row.label} delay={index * 60}>
              <div className="grid grid-cols-1 sm:grid-cols-[260px_1fr] gap-2 sm:gap-10 py-6 border-b border-[#DED8CE]">
                <dt className="font-body text-xs uppercase tracking-[0.18em] text-[#8a8a8a]">{row.label}</dt>
                <dd className="font-body text-sm md:text-base text-[#111111]">{row.value}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
        <p className="font-body text-xs text-[#8a8a8a] mt-8 leading-relaxed">
          Parameters are indicative and reviewed against each mandate individually.
        </p>
      </div>
    </section>
  );
}

/* ========================================================================
 *  6. CONFIDENTIALITY
 * ===================================================================== */

function ConfidentialitySection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-[#111111] text-white">
      <div className="max-w-[820px] mx-auto text-center">
        <Reveal>
          <Eyebrow>Confidentiality</Eyebrow>
          <h2 className="font-display text-[32px] md:text-[48px] leading-[1.15] mt-6 mb-10">
            Confidentiality Is
            <br />
            Fundamental.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="space-y-4 font-body text-sm md:text-base text-white/65 leading-relaxed">
            <p>Every discussion is treated with discretion.</p>
            <p>Non-disclosure agreements are available before opportunity disclosure.</p>
            <p>Institutional data is never shared publicly.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ========================================================================
 *  7. INSTITUTIONAL CONTACT FORM
 * ===================================================================== */

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

type TextFieldConfig = {
  kind: 'text';
  id: string;
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
};
type SelectFieldConfig = {
  kind: 'select';
  id: string;
  label: string;
  placeholder: string;
  options: string[];
};
type TextAreaFieldConfig = { kind: 'textarea'; id: string; label: string };
type FieldConfig = TextFieldConfig | SelectFieldConfig | TextAreaFieldConfig;

const FORM_FIELDS: FieldConfig[] = [
  { kind: 'text', id: 'name', label: 'Name', type: 'text', required: true },
  { kind: 'text', id: 'company', label: 'Company', type: 'text' },
  { kind: 'text', id: 'position', label: 'Position', type: 'text' },
  { kind: 'text', id: 'country', label: 'Country', type: 'text' },
  { kind: 'text', id: 'email', label: 'Email', type: 'email', required: true },
  { kind: 'text', id: 'phone', label: 'Phone', type: 'tel' },
  {
    kind: 'select',
    id: 'investmentSize',
    label: 'Investment Size',
    placeholder: 'Select a range',
    options: ['Below US$5 million', 'US$5–25 million', 'US$25–100 million', 'US$100 million+', 'Prefer to discuss'],
  },
  {
    kind: 'select',
    id: 'mandate',
    label: 'Investment Mandate',
    placeholder: 'Select a mandate type',
    options: ['Direct Acquisition', 'Development', 'Joint Venture', 'Structured Debt', 'Portfolio Recapitalisation', 'Other'],
  },
  {
    kind: 'select',
    id: 'assetClass',
    label: 'Preferred Asset Class',
    placeholder: 'Select an asset class',
    options: ['Office', 'Logistics & Industrial', 'Residential', 'Hospitality', 'Mixed-Use', 'Retail', 'Other'],
  },
  {
    kind: 'text',
    id: 'geography',
    label: 'Preferred Geography',
    type: 'text',
    placeholder: 'e.g. Dubai, Abu Dhabi, GCC',
  },
  {
    kind: 'select',
    id: 'timeline',
    label: 'Timeline',
    placeholder: 'Select a timeline',
    options: ['Immediate', '0–6 Months', '6–12 Months', '12+ Months', 'Opportunistic'],
  },
  { kind: 'textarea', id: 'message', label: 'Message' },
];

const fieldBaseClasses =
  'w-full bg-transparent border-0 border-b border-[#DED8CE] focus:border-[#A67C52] focus:outline-none text-[#111111] font-body text-sm md:text-base py-3 transition-colors placeholder:text-[#b9b9b9]';

function FieldLabel({ children, htmlFor }: { children: ReactNode; htmlFor: string }) {
  return (
    <label htmlFor={htmlFor} className="block font-body text-xs uppercase tracking-[0.18em] text-[#8a8a8a] mb-3">
      {children}
    </label>
  );
}


/* ========================================================================
 *  8. GLOBAL PRESENCE
 * ===================================================================== */

function GlobalPresence() {
  return (
    <section id="presence" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 border-b border-[#DED8CE]">
      <div className="max-w-[1300px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <Reveal>
            <Eyebrow>Global Presence</Eyebrow>
            <h2 className="font-display text-[28px] md:text-[40px] text-[#111111] mt-6 mb-6">
              A UAE Mandate, Global Capital
            </h2>
            <p className="font-body text-sm md:text-base text-[#595959] leading-relaxed mb-10">
              Serving investors across Europe, Asia, Africa and the Middle East.
            </p>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-6 font-body text-sm text-[#595959]">
              {['Europe', 'Asia', 'Africa', 'Middle East'].map((region) => (
                <li key={region} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A67C52]" aria-hidden="true" />
                  {region}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <Reveal delay={150}>
            <svg
              viewBox="0 0 400 400"
              className="w-full max-w-[420px] mx-auto"
              role="img"
              aria-label="Stylised globe highlighting the United Arab Emirates"
            >
              <circle cx="200" cy="200" r="160" fill="none" stroke="#DED8CE" strokeWidth="1" />
              <ellipse cx="200" cy="200" rx="160" ry="60" fill="none" stroke="#DED8CE" strokeWidth="1" />
              <ellipse
                cx="200"
                cy="200"
                rx="160"
                ry="60"
                fill="none"
                stroke="#DED8CE"
                strokeWidth="1"
                transform="rotate(60 200 200)"
              />
              <ellipse
                cx="200"
                cy="200"
                rx="160"
                ry="60"
                fill="none"
                stroke="#DED8CE"
                strokeWidth="1"
                transform="rotate(120 200 200)"
              />
              <circle cx="248" cy="178" r="5" fill="#A67C52" />
              <circle cx="248" cy="178" r="11" fill="none" stroke="#A67C52" strokeWidth="1" />
              <text x="248" y="156" textAnchor="middle" fontSize="11" letterSpacing="1.5" fill="#111111">
                UAE
              </text>
            </svg>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
 *  9. RELATED RESEARCH (editorial list — also carries internal links)
 * ===================================================================== */

function ResearchLinks() {
  const allLinks = [...relatedResearch, ...relatedPages];

  return (
    <section id="research" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-white border-b border-[#DED8CE]">
      <div className="max-w-[900px] mx-auto">
        <Reveal>
          <Eyebrow>Related Research</Eyebrow>
          <h2 className="font-display text-[28px] md:text-[40px] text-[#111111] mt-6 mb-14">
            Further Reading
          </h2>
        </Reveal>
        <nav aria-label="Related research and pages" className="border-t border-[#DED8CE]">
          {allLinks.map((link, index) => (
            <Reveal key={link.href} delay={index * 60}>
              <Link
                href={link.href}
                className="group flex items-center justify-between gap-6 py-6 border-b border-[#DED8CE] font-body text-sm md:text-base text-[#111111] hover:text-[#8E6A45] transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight
                  className="w-4 h-4 text-[#A67C52] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0"
                  strokeWidth={1.5}
                />
              </Link>
            </Reveal>
          ))}
        </nav>
      </div>
    </section>
  );
}

/* ========================================================================
 *  COMMON QUESTIONS — preserves the FAQPage schema with matching,
 *  understated on-page content (editorial accordion, no card chrome).
 * ===================================================================== */

function CommonQuestions() {
  return (
    <section id="faq" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 border-b border-[#DED8CE]">
      <div className="max-w-[820px] mx-auto">
        <Reveal>
          <Eyebrow>Frequently Asked</Eyebrow>
          <h2 className="font-display text-[28px] md:text-[40px] text-[#111111] mt-6 mb-14">
            Common Questions
          </h2>
        </Reveal>
        <div className="border-t border-[#DED8CE]">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 80}>
              <details className="group border-b border-[#DED8CE] py-6">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-6 font-display text-base md:text-lg text-[#111111]">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="text-[#A67C52] text-xl leading-none shrink-0 transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="font-body text-sm md:text-base text-[#595959] leading-relaxed mt-4 max-w-2xl">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
 *  10. CLOSING STATEMENT
 * ===================================================================== */

function ClosingCTA() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-28 md:py-40 text-center">
      <div className="max-w-[760px] mx-auto">
        <Reveal>
          <h2 className="font-display text-[26px] md:text-[42px] leading-[1.35] text-[#111111] mb-10">
            “The strongest investment relationships begin with a thoughtful conversation.”
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-3 font-body text-sm tracking-[0.08em] uppercase text-[#A67C52] hover:text-[#8E6A45] transition-colors border-b border-[#A67C52] hover:border-[#8E6A45] pb-1"
          >
            Request A Confidential Consultation
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ========================================================================
 *  PAGE
 * ===================================================================== */

export default function ContactPage() {
  return (
    <>
      <Script
        id="schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()) }}
      />
      <Script
        id="schema-contact-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData()) }}
      />

      <SiteHeader />

      <main className="bg-[#F8F6F1] text-[#111111] font-body antialiased selection:bg-[#A67C52] selection:text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-28 md:pt-32 pb-6">
          <UaeInternalBreadcrumb />
        </div>

        <article>
          <ContactHero />
          <InstitutionalContactForm />
          <AdvisoryPhilosophy />
          <EngagementTimeline />
          <ClientProfiles />
          <InvestmentCriteria />
          <ConfidentialitySection />
          <InstitutionalContactForm />
          <GlobalPresence />
          <ResearchLinks />
          <CommonQuestions />
        </article>

        <UaeInternalLinks title="Complete UAE Internal Link Map" />

        <ClosingCTA />
      </main>
    </>
  );
}