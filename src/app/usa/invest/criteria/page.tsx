import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle, Building2, Factory, Warehouse, Home, Store, Server } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE, PROPERTY_TYPES } from "../../lib/site";

export const metadata: Metadata = {
  title: "Investment Criteria — USA Commercial Real Estate",
  description:
    "Murivest Group's U.S. investment criteria: institutional-grade parameters across asset types, markets, and deal structures for acquisition, development, and financing mandates.",
  alternates: { canonical: `https://${SITE.domain}/usa/invest/criteria` },
  openGraph: {
    title: "Investment Criteria — USA Commercial Real Estate",
    description:
      "Institutional-grade investment criteria across U.S. commercial real estate asset types, markets, and deal structures.",
    url: `https://${SITE.domain}/usa/invest/criteria`,
  },
};

const SECTOR_ICONS: Record<string, typeof Building2> = {
  Office: Building2,
  Industrial: Factory,
  Logistics: Warehouse,
  Multifamily: Home,
  Retail: Store,
  "Data Centers": Server,
};

const CRITERIA_OVERVIEW = [
  {
    title: "Asset Type Focus",
    description:
      "We prioritize assets with institutional-quality fundamentals: strong credit tenants, market-competitive rents, and clear operational trajectories. Our criteria are sector-specific and informed by proprietary market research.",
  },
  {
    title: "Market Selection",
    description:
      "Primary and secondary U.S. metros with transparent capital markets, diverse employment bases, and favorable supply/demand dynamics. We maintain dedicated research coverage across 40+ markets.",
  },
  {
    title: "Deal Structure",
    description:
      "Flexible execution structures — including acquisition, joint venture, preferred equity, and mezzanine financing — structured to align sponsor and capital partner interests.",
  },
  {
    title: "Financial Benchmarks",
    description:
      "Cap rates, leverage levels, and return thresholds are calibrated to each strategy and market. We do not publish generic rate ranges; our underwriting is deal-specific and market-sensitive.",
  },
];

const ASSET_CRITERIA = PROPERTY_TYPES.map((type) => ({
  ...type,
  Icon: SECTOR_ICONS[type.label] || Building2,
}));

export default function CriteriaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://${SITE.domain}/usa/invest/criteria/#webpage`,
    url: `https://${SITE.domain}/usa/invest/criteria`,
    name: "Investment Criteria — USA Commercial Real Estate",
    description:
      "Institutional-grade investment criteria across U.S. commercial real estate asset types, markets, and deal structures.",
    isPartOf: { "@type": "WebSite", "@id": `https://${SITE.domain}/#website` },
    inLanguage: "en-US",
    about: { "@id": `https://${SITE.domain}/usa/#organization` },
    breadcrumb: {
      "@id": `https://${SITE.domain}/usa/invest/criteria/#breadcrumb`,
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
            <Eyebrow className="text-gold-400">Investment Criteria</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Institutional-grade parameters for every mandate
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Murivest's investment criteria translate strategic intent into
              actionable, deal-level parameters across asset types, markets, and
              deal structures — calibrated to each client's specific mandate.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/invest/mandates"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Define Your Mandate
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/invest/strategies"
                className="flex items-center justify-center rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                View Strategies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Criteria overview */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="Framework"
          title="Criteria framework for institutional engagements"
          description="Every Murivest mandate operates within a structured criteria framework that ensures consistency, discipline, and alignment with client objectives."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {CRITERIA_OVERVIEW.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#E8E6E1] bg-white p-6"
            >
              <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#8B8680]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Asset-specific criteria */}
      <Section className="py-20 bg-[#FAF9F6]">
        <SectionHeading
          eyebrow="Asset Criteria"
          title="Sector-specific investment criteria"
          description="Our criteria are tailored to each commercial real estate sector, reflecting distinct market dynamics, tenant profiles, and underwriting benchmarks."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ASSET_CRITERIA.map((asset) => (
            <div
              key={asset.slug}
              className="rounded-xl border border-[#E8E6E1] bg-white p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1B4332] text-gold-400">
                <asset.Icon size={20} />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-[#2C2C2C]">
                {asset.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
                {asset.description}
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2 text-xs text-[#8B8680]">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-green-600" />
                  <span>
                    Targeted for acquisition, disposition, or financing mandates
                    based on client strategy
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#8B8680]">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-green-600" />
                  <span>
                    Underwritten to institutional standards with market-specific
                    benchmarking
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#8B8680]">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-green-600" />
                  <span>
                    Eligible for core-plus, value-add, opportunistic, and
                    development strategies as applicable
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Mandate fit */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="Mandate Alignment"
          title="Criteria that fit your mandate"
          description="Investment criteria are not one-size-fits-all. Murivest calibrates criteria to each client's strategic objectives, risk tolerance, and portfolio context."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-[#E8E6E1] bg-white p-6">
            <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
              What we look for
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#8B8680]">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-600" />
                <span>
                  Institutional-quality assets with transparent operating history
                  and verifiable cash flow
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-600" />
                <span>
                  Markets with depth of capital, diverse employment bases, and
                  supply-constrained dynamics
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-600" />
                <span>
                  Asset classes where Murivest maintains dedicated sector
                  expertise and counterparty relationships
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-600" />
                <span>
                  Deals with clear value drivers — operational, leasing,
                  repositioning, or development-based
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-[#E8E6E1] bg-white p-6">
            <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
              What we avoid
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#8B8680]">
              <li className="flex items-start gap-2">
                <XCircle size={16} className="mt-0.5 shrink-0 text-red-500" />
                <span>
                  Assets with opaque financials, undisclosed liabilities, or
                  unreliable operating data
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle size={16} className="mt-0.5 shrink-0 text-red-500" />
                <span>
                  Markets with limited transparency, shallow capital pools, or
                  regulatory uncertainty
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle size={16} className="mt-0.5 shrink-0 text-red-500" />
                <span>
                  Deals requiring speculative underwriting, unproven demand, or
                  aggressive lease-up assumptions
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle size={16} className="mt-0.5 shrink-0 text-red-500" />
                <span>
                  Situations where conflicts of interest, confidentiality
                  concerns, or timeline mismatches cannot be managed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <CTABanner
        title="Discuss your investment criteria with our team"
        description="Whether you are defining a new mandate or refining criteria for an existing strategy, we welcome a confidential conversation."
        primaryLabel="Request a Mandate"
        secondaryLabel="View Strategies"
        secondaryHref="/usa/invest/strategies"
      />
    </>
  );
}

