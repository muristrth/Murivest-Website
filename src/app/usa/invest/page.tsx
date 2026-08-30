import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, FileText, ShieldCheck, TrendingUp } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import CTABanner from "../components/CTABanner";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Invest — USA Commercial Real Estate Investment Advisory",
  description:
    "Murivest Group's USA invest platform: investment strategies, criteria, mandates, and opportunities for institutional investors, family offices, and private equity.",
  alternates: { canonical: `https://${SITE.domain}/usa/invest` },
  openGraph: {
    title: "Invest — USA Commercial Real Estate Investment Advisory",
    description:
      "Explore Murivest's investment strategies, criteria, mandates, and opportunities across U.S. commercial real estate.",
    url: `https://${SITE.domain}/usa/invest`,
  },
};

const INVEST_PILLARS = [
  {
    href: "/usa/invest/strategies",
    icon: TrendingUp,
    title: "Strategies",
    description:
      "From core-plus to opportunistic and development, our mandate-driven strategies are tailored to specific return, risk, and hold-period objectives.",
  },
  {
    href: "/usa/invest/criteria",
    icon: FileText,
    title: "Criteria",
    description:
      "Clear, institutional-grade investment criteria across asset types, markets, and deal structures — serving as the foundation of every Murivest engagement.",
  },
  {
    href: "/usa/invest/mandates",
    icon: ShieldCheck,
    title: "Mandates",
    description:
      "How we engage with investors. Confidential, structured mandates aligned to your objectives — whether acquiring, disposing, financing, or developing.",
  },
  {
    href: "/usa/invest/opportunities",
    icon: Target,
    title: "Opportunities",
    description:
      "A curated view of mandates and opportunities currently being executed or sourced. Accessible to qualified investors on a confidential basis.",
  },
];

export default function InvestPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://${SITE.domain}/usa/invest/#webpage`,
    url: `https://${SITE.domain}/usa/invest`,
    name: "Invest — USA Commercial Real Estate Investment Advisory",
    description:
      "Investment strategies, criteria, mandates, and opportunities for institutional investors across U.S. commercial real estate.",
    isPartOf: { "@type": "WebSite", "@id": `https://${SITE.domain}/#website` },
    inLanguage: "en-US",
    about: { "@id": `https://${SITE.domain}/usa/#organization` },
    breadcrumb: {
      "@id": `https://${SITE.domain}/usa/invest/#breadcrumb`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1B4332] py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-ink-950 to-ink-900" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">Invest Platform</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Institutional-grade investment advisory across U.S. commercial real estate
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Murivest's invest platform connects sophisticated capital with
              structured mandates, disciplined underwriting, and outcome-first
              advisory across every major U.S. CRE sector.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/contact"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Discuss a Mandate
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/invest/strategies"
                className="flex items-center justify-center rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                Explore Strategies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="The Invest Platform"
          title="Four pillars of institutional investment advisory"
          description="From strategy through execution, Murivest's invest platform provides a structured framework for sophisticated capital."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INVEST_PILLARS.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="group flex flex-col rounded-xl border border-[#E8E6E1] bg-white p-6 transition-all hover:border-[#B8956B] hover:shadow-lg hover:shadow-ink-900/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1B4332] text-gold-400 transition-colors group-hover:bg-[#B8956B]">
                <pillar.icon size={22} />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B] transition-colors">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
                {pillar.description}
              </p>
              <span className="mt-4 flex items-center gap-1.5 text-sm font-medium text-[#B8956B]">
                Learn more
                <ArrowRight
                  size={16}
                  className="transition-all group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Mandate mindset */}
      <Section className="py-20 bg-[#FAF9F6]">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Mandate-Driven Advisory</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#2C2C2C] sm:text-4xl">
              Outcome-first thinking for every engagement
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#8B8680]">
              <p>
                Institutional investors do not need another adviser with a
                proprietary fund to sell or a balance sheet to manage. They need
                a disciplined, mandate-driven intermediary whose only agenda is
                to represent their interests with precision and transparency.
              </p>
              <p>
                Every Murivest engagement begins with a clearly defined mandate:
                the specific outcome you seek, the risk parameters you accept,
                and the metrics by which success is measured. From there, we
                execute with the underwriting discipline, market intelligence,
                and counterparty relationships that institutional capital
                requires.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-[#B8956B]">
              <ShieldCheck size={18} className="text-gold-500" />
              <span>Independent. Conflict-free. Mandate-driven.</span>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { stat: "6", label: "Property type specializations" },
              { stat: "40+", label: "U.S. metro markets covered" },
              { stat: "100%", label: "Mandate-based engagements" },
              { stat: "0", label: "Proprietary fund conflicts" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[#E8E6E1] bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="font-serif text-4xl font-semibold text-[#B8956B]">
                  {item.stat}
                </div>
                <div className="mt-2 text-sm text-[#8B8680]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Who we serve */}
      <Section className="py-20 bg-[#0F2E22]">
        <div className="max-w-3xl">
          <Eyebrow className="text-gold-400">Who We Serve</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Sophisticated capital across the institutional spectrum
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#C9A87C]">
            Murivest serves a focused client base — from pension funds and
            endowments to private equity and family offices — with the
            analytical rigor and confidentiality that institutional investors
            demand.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-navy-700 bg-[#1B4332]/50 p-6">
            <h3 className="font-serif text-xl font-semibold text-white">
              Institutional Investors
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#C9A87C]">
              Pension funds, endowments, insurance companies, and registered
              investment advisors pursuing acquisition, disposition, and
              portfolio rebalancing across U.S. commercial real estate.
            </p>
          </div>
          <div className="rounded-xl border border-navy-700 bg-[#1B4332]/50 p-6">
            <h3 className="font-serif text-xl font-semibold text-white">
              Private Equity & Family Offices
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#C9A87C]">
              Private equity real estate funds, single-family offices, and
              multi-family offices seeking direct investments with
              institutional-quality underwriting and execution.
            </p>
          </div>
          <div className="rounded-xl border border-navy-700 bg-[#1B4332]/50 p-6">
            <h3 className="font-serif text-xl font-semibold text-white">
              Operating Partners & Sponsors
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#C9A87C]">
              Developers and operating partners seeking capital partners,
              disposition advisory, or leasing strategy for institutional-grade
              commercial real estate projects.
            </p>
          </div>
        </div>
      </Section>

      {/* Connected pages */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="Explore Further"
          title="Related advisory resources"
          description="Dive deeper into Murivest's invest platform through our dedicated strategy, criteria, mandate, and opportunity pages."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link
            href="/usa/invest/strategies"
            className="group flex flex-col rounded-xl border border-[#E8E6E1] bg-white p-6 transition-all hover:border-[#B8956B] hover:shadow-lg"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
              Strategy
            </span>
            <h3 className="mt-2 font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B] transition-colors">
              Investment Strategies
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
              Core-plus, value-add, opportunistic, and development strategies
              tailored to specific return, risk, and hold-period objectives.
            </p>
            <span className="mt-4 flex items-center gap-1.5 text-sm font-medium text-[#B8956B]">
              View strategies
              <ArrowRight
                size={16}
                className="transition-all group-hover:translate-x-1"
              />
            </span>
          </Link>
          <Link
            href="/usa/invest/criteria"
            className="group flex flex-col rounded-xl border border-[#E8E6E1] bg-white p-6 transition-all hover:border-[#B8956B] hover:shadow-lg"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
              Criteria
            </span>
            <h3 className="mt-2 font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B] transition-colors">
              Investment Criteria
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
              Institutional-grade criteria across asset types, markets, and deal
              structures — the foundation of every Murivest mandate.
            </p>
            <span className="mt-4 flex items-center gap-1.5 text-sm font-medium text-[#B8956B]">
              View criteria
              <ArrowRight
                size={16}
                className="transition-all group-hover:translate-x-1"
              />
            </span>
          </Link>
          <Link
            href="/usa/invest/mandates"
            className="group flex flex-col rounded-xl border border-[#E8E6E1] bg-white p-6 transition-all hover:border-[#B8956B] hover:shadow-lg"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
              Mandates
            </span>
            <h3 className="mt-2 font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B] transition-colors">
              Investor Mandates
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
              How we engage with sophisticated capital — confidential,
              structured mandates aligned to your acquisition, disposition,
              financing, or development objectives.
            </p>
            <span className="mt-4 flex items-center gap-1.5 text-sm font-medium text-[#B8956B]">
              Learn about mandates
              <ArrowRight
                size={16}
                className="transition-all group-hover:translate-x-1"
              />
            </span>
          </Link>
          <Link
            href="/usa/invest/opportunities"
            className="group flex flex-col rounded-xl border border-[#E8E6E1] bg-white p-6 transition-all hover:border-[#B8956B] hover:shadow-lg"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
              Opportunities
            </span>
            <h3 className="mt-2 font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B] transition-colors">
              Current Opportunities
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
              A curated view of mandates and opportunities currently being
              executed or sourced. Accessible to qualified investors on a
              confidential basis.
            </p>
            <span className="mt-4 flex items-center gap-1.5 text-sm font-medium text-[#B8956B]">
              View opportunities
              <ArrowRight
                size={16}
                className="transition-all group-hover:translate-x-1"
              />
            </span>
          </Link>
        </div>
      </Section>

      <CTABanner
        title="Engage Murivest on your next commercial real estate mandate"
        description="Whether you are acquiring, disposing, financing, or developing, our team is ready to advise. Start with a confidential consultation."
        primaryLabel="Request a Mandate"
        secondaryLabel="Explore Strategies"
        secondaryHref="/usa/invest/strategies"
      />
    </>
  );
}
