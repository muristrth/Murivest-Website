import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Target, Building2, Factory, Home, Warehouse, Store, Server } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE, PROPERTY_TYPES } from "../../lib/site";

export const metadata: Metadata = {
  title: "Investment Strategies — USA Commercial Real Estate",
  description:
    "Murivest Group's U.S. investment strategies: core-plus, value-add, opportunistic, and development mandates tailored to specific return, risk, and hold-period objectives.",
  alternates: { canonical: `https://${SITE.domain}/usa/invest/strategies` },
  openGraph: {
    title: "Investment Strategies — USA Commercial Real Estate",
    description:
      "Core-plus, value-add, opportunistic, and development investment strategies for institutional investors across U.S. commercial real estate.",
    url: `https://${SITE.domain}/usa/invest/strategies`,
  },
};

const STRATEGIES = [
  {
    slug: "core-plus",
    title: "Core-Plus",
    summary:
      "Stabilized, income-producing assets with modest value-creation potential through operational improvements, lease-up, or moderate capital expenditure. Target returns reflect lower risk profiles with a defensive income focus.",
    riskProfile: "Lower",
    typicalHold: "5–10 years",
    focusAssets: ["Multifamily", "Logistics", "Office"],
  },
  {
    slug: "value-add",
    title: "Value-Add",
    summary:
      "Assets with identified near-term upside through capital improvements, lease-up, or repositioning — requiring active asset management and underwriting discipline. Higher risk profile with equity creation as the primary return driver.",
    riskProfile: "Moderate",
    typicalHold: "3–7 years",
    focusAssets: ["Industrial", "Retail", "Office"],
  },
  {
    slug: "opportunistic",
    title: "Opportunistic",
    summary:
      "Distressed, repositioned, or ground-up development opportunities with significant execution risk. Returns are driven by asset transformation, market timing, or development feasibility — requiring sophisticated underwriting and patient capital.",
    riskProfile: "Higher",
    typicalHold: "4–10 years",
    focusAssets: ["Data Centers", "Logistics", "Office", "Industrial"],
  },
  {
    slug: "development",
    title: "Development",
    summary:
      "Ground-up construction and adaptive reuse projects delivering new institutional-grade product into supply-constrained markets. Requires land sourcing, entitlement execution, construction management, and pre-leasing discipline.",
    riskProfile: "Higher",
    typicalHold: "3–7 years",
    focusAssets: ["Multifamily", "Logistics", "Data Centers"],
  },
];

const SECTOR_ICONS: Record<string, typeof Building2> = {
  Office: Building2,
  Industrial: Factory,
  Logistics: Warehouse,
  Multifamily: Home,
  Retail: Store,
  "Data Centers": Server,
};

export default function StrategiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://${SITE.domain}/usa/invest/strategies/#webpage`,
    url: `https://${SITE.domain}/usa/invest/strategies`,
    name: "Investment Strategies — USA Commercial Real Estate",
    description:
      "Core-plus, value-add, opportunistic, and development investment strategies for institutional investors across U.S. commercial real estate.",
    isPartOf: { "@type": "WebSite", "@id": `https://${SITE.domain}/#website` },
    inLanguage: "en-US",
    about: { "@id": `https://${SITE.domain}/usa/#organization` },
    breadcrumb: {
      "@id": `https://${SITE.domain}/usa/invest/strategies/#breadcrumb`,
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
            <Eyebrow className="text-gold-400">Investment Strategies</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Mandate-driven strategies aligned to specific return and risk objectives
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Murivest structures every engagement around a clearly defined
              investment strategy — from core-plus income strategies to
              opportunistic development mandates — matched to your capital
              requirements and hold-period expectations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/invest/mandates"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Engage Murivest
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/invest/criteria"
                className="flex items-center justify-center rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                View Criteria
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy grid */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="Strategies"
          title="Four institutional investment strategies"
          description="Each strategy is defined by risk profile, return drivers, hold period, and asset focus. Murivest matches the strategy to your mandate."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {STRATEGIES.map((strategy) => (
            <div
              key={strategy.slug}
              className="rounded-xl border border-[#E8E6E1] bg-white p-6 transition-all hover:border-[#B8956B] hover:shadow-lg hover:shadow-ink-900/5"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-serif text-2xl font-semibold text-[#2C2C2C]">
                  {strategy.title}
                </h3>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                    strategy.riskProfile === "Lower"
                      ? "bg-green-50 text-green-700"
                      : strategy.riskProfile === "Moderate"
                      ? "bg-yellow-50 text-yellow-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {strategy.riskProfile} risk
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#8B8680]">
                {strategy.summary}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[#8B8680]/70">
                <span className="font-medium uppercase tracking-wider">
                  Typical hold: {strategy.typicalHold}
                </span>
                <span className="text-white">•</span>
                <span>
                  Focus: {strategy.focusAssets.join(", ")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* How strategies connect to criteria */}
      <Section className="py-20 bg-[#FAF9F6]">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Strategy to Criteria</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#2C2C2C] sm:text-4xl">
              From strategic intent to deal-level underwriting
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#8B8680]">
              <p>
                A strategy without criteria is merely a thesis. Murivest
                translates strategic intent into granular investment criteria —
                asset types, submarket preferences, size thresholds, and
                financial benchmarks — that govern every mandate engagement.
              </p>
              <p>
                Our criteria are not static. They evolve with market conditions,
                capital availability, and your specific mandate parameters. The
                result is underwriting that is both disciplined and responsive
                to real-time market dynamics.
              </p>
            </div>
            <Link
              href="/usa/invest/criteria"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#B8956B] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#C9A87C]"
            >
              View Investment Criteria
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {PROPERTY_TYPES.map((type) => {
              const Icon = SECTOR_ICONS[type.label] || Building2;
              return (
                <div
                  key={type.slug}
                  className="rounded-xl border border-[#E8E6E1] bg-white p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1B4332] text-gold-400">
                    <Icon size={20} />
                  </div>
                  <div className="mt-3 font-serif text-lg font-semibold text-[#2C2C2C]">
                    {type.label}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-[#8B8680]">
                    {type.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Mandate structure */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="How We Execute"
          title="Structured execution for every strategy"
          description="Murivest's mandate model provides clarity, discipline, and alignment throughout the investment lifecycle."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-[#E8E6E1] bg-white p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
              Phase 01
            </div>
            <h3 className="mt-2 font-serif text-xl font-semibold text-[#2C2C2C]">
              Mandate Definition
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
              A confidential consultation to define strategy, risk tolerance,
              return expectations, and success metrics.
            </p>
          </div>
          <div className="rounded-xl border border-[#E8E6E1] bg-white p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
              Phase 02
            </div>
            <h3 className="mt-2 font-serif text-xl font-semibold text-[#2C2C2C]">
              Sourcing & Underwriting
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
              Targeted sourcing, due diligence, and institutional-grade
              underwriting aligned to your strategic criteria.
            </p>
          </div>
          <div className="rounded-xl border border-[#E8E6E1] bg-white p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
              Phase 03
            </div>
            <h3 className="mt-2 font-serif text-xl font-semibold text-[#2C2C2C]">
              Execution & Reporting
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
              Negotiation, closing, and ongoing asset management reporting
              with full transparency and fiduciary discipline.
            </p>
          </div>
        </div>
      </Section>

      <CTABanner
        title="Discuss your investment strategy with our team"
        description="Whether you are defining a new mandate or refining an existing strategy, we welcome a confidential conversation."
        primaryLabel="Request a Mandate"
        secondaryLabel="View Investment Criteria"
        secondaryHref="/usa/invest/criteria"
      />
    </>
  );
}

