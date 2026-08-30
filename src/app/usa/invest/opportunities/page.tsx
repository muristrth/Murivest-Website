import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Building2, Factory, Warehouse, Home, Store, Server } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE, PROPERTY_TYPES } from "../../lib/site";

export const metadata: Metadata = {
  title: "Investment Opportunities — USA Commercial Real Estate",
  description:
    "Murivest Group's current investment opportunities across U.S. commercial real estate: acquisition, disposition, financing, and development mandates for institutional investors.",
  alternates: { canonical: `https://${SITE.domain}/usa/invest/opportunities` },
  openGraph: {
    title: "Investment Opportunities — USA Commercial Real Estate",
    description:
      "Current investment opportunities and mandates across U.S. commercial real estate, accessible to qualified institutional investors.",
    url: `https://${SITE.domain}/usa/invest/opportunities`,
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

const DEMO_OPPORTUNITIES = [
  {
    id: "demo-001",
    title: "Demo: Class A Industrial Asset — Sun Belt Logistics Corridor",
    sector: "Logistics",
    summary:
      "DEMO DATA: A 285,000 sq ft distribution facility in a primary Sun Belt logistics corridor with long-term credit tenants. This entry illustrates the format of opportunities shared with qualified investors. Actual mandates are presented confidentially.",
    strategy: "Core-Plus",
  },
  {
    id: "demo-002",
    title: "Demo: Value-Add Multifamily Portfolio — Secondary Market",
    sector: "Multifamily",
    summary:
      "DEMO DATA: A 220-unit garden-style multifamily portfolio in a supply-constrained secondary metro with identified unit renovation and rent-up potential. Actual mandates are presented confidentially to qualified investors.",
    strategy: "Value-Add",
  },
  {
    id: "demo-003",
    title: "Demo: Ground-Up Development — Infill Multifamily Site",
    sector: "Multifamily",
    summary:
      "DEMO DATA: A 4-acre infill development site in a high-growth U.S. metro with approved entitlements for a 280-unit residential community. Actual development mandates are presented confidentially.",
    strategy: "Development",
  },
];

export default function OpportunitiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://${SITE.domain}/usa/invest/opportunities/#webpage`,
    url: `https://${SITE.domain}/usa/invest/opportunities`,
    name: "Investment Opportunities — USA Commercial Real Estate",
    description:
      "Current investment opportunities and mandates across U.S. commercial real estate, accessible to qualified institutional investors.",
    isPartOf: { "@type": "WebSite", "@id": `https://${SITE.domain}/#website` },
    inLanguage: "en-US",
    about: { "@id": `https://${SITE.domain}/usa/#organization` },
    breadcrumb: {
      "@id": `https://${SITE.domain}/usa/invest/opportunities/#breadcrumb`,
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
            <Eyebrow className="text-gold-400">Investment Opportunities</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Confidential access to structured mandates
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Murivest connects sophisticated capital with pre-vetted,
              institutionally underwritten opportunities across acquisition,
              disposition, financing, and development mandates — on a
              confidential basis.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/contact"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Request Access
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/invest/mandates"
                className="flex items-center justify-center rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                How Mandates Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="Our Approach"
          title="Curated, confidential, mandate-driven"
          description="Opportunities at Murivest are not listed on a public portal. They are curated, underwritten, and presented confidentially to qualified investors whose criteria and strategy align with the mandate."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="rounded-xl border border-[#E8E6E1] bg-white p-6">
            <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
              Pre-Vetted Mandates
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
              Every opportunity has been sourced, underwritten, and
              structured to meet institutional standards before it reaches
              qualified investors.
            </p>
          </div>
          <div className="rounded-xl border border-[#E8E6E1] bg-white p-6">
            <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
              Confidential Presentation
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
              Opportunities are presented directly and confidentially — no
              public listings, no mass marketing, no competing investor pools.
            </p>
          </div>
          <div className="rounded-xl border border-[#E8E6E1] bg-white p-6">
            <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
              Structured Engagement
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
              Each opportunity is presented within a structured mandate
              framework, with clear scope, fees, and alignment of interests.
            </p>
          </div>
        </div>
      </Section>

      {/* Demo opportunities */}
      <Section className="py-20 bg-[#FAF9F6]">
        <SectionHeading
          eyebrow="Sample Format"
          title="Opportunity format (DEMO DATA)"
          description="The entries below illustrate the format in which Murivest presents opportunities to qualified investors. All property-specific details, pricing, and financials are confidential and presented exclusively to qualified investors under mandate."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {DEMO_OPPORTUNITIES.map((opp) => {
            const Icon = SECTOR_ICONS[opp.sector] || Building2;
            return (
              <div
                key={opp.id}
                className="rounded-xl border border-[#E8E6E1] bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                      opp.strategy === "Core-Plus"
                        ? "bg-green-50 text-green-700"
                        : opp.strategy === "Value-Add"
                        ? "bg-yellow-50 text-yellow-700"
                        : opp.strategy === "Development"
                        ? "bg-blue-50 text-blue-700"
                        : "bg-purple-50 text-purple-700"
                    }`}
                  >
                    {opp.strategy}
                  </span>
                  <span className="text-xs font-medium text-[#8B8680]/70">
                    {opp.sector}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-[#2C2C2C]">
                  {opp.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
                  {opp.summary}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-[#8B8680]/70">
                  <Target size={14} />
                  <span>Confidential mandate opportunity</span>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* How to access */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="Access"
          title="How to access opportunities"
          description="Qualified investors gain access to Murivest's curated opportunity pipeline through a structured mandate engagement."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-[#E8E6E1] bg-white p-6">
            <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
              For Accredited & Institutional Investors
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
              If you represent an institutional investor, family office,
              private equity fund, or qualified individual investor, we
              welcome a confidential conversation to understand your mandate
              parameters and present aligned opportunities.
            </p>
            <Link
              href="/usa/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#B8956B] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#C9A87C]"
            >
              Request Access
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="rounded-xl border border-[#E8E6E1] bg-white p-6">
            <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
              For Sponsors & Principals
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
              If you are a developer, sponsor, or principal seeking
              institutional capital partners for your project or portfolio,
              we welcome a confidential conversation to understand your
              objectives.
            </p>
            <Link
              href="/usa/submit-a-deal"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#B8956B] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#C9A87C]"
            >
              Submit a Deal
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* Sector coverage */}
      <Section className="py-20 bg-[#0F2E22]">
        <div className="max-w-3xl">
          <Eyebrow className="text-gold-400">Sector Coverage</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Opportunities across all major U.S. CRE sectors
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#C9A87C]">
            Murivest maintains dedicated sector expertise and underwrites
            opportunities across every major U.S. commercial real estate
            sector.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTY_TYPES.map((type) => {
            const Icon = SECTOR_ICONS[type.label] || Building2;
            return (
              <Link
                key={type.slug}
                href={`/usa/commercial-real-estate/${type.slug}`}
                className="group flex flex-col rounded-xl border border-navy-700 bg-[#1B4332]/50 p-6 transition-all hover:border-navy-500 hover:bg-[#1B4332]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2D5A45] text-gold-400">
                  <Icon size={20} />
                </div>
                <h3 className="mt-3 font-serif text-lg font-semibold text-white group-hover:text-gold-400 transition-colors">
                  {type.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#C9A87C]">
                  {type.description}
                </p>
              </Link>
            );
          })}
        </div>
      </Section>

      <CTABanner
        title="Request confidential access to Murivest opportunities"
        description="Qualified investors are welcome to discuss mandate parameters and receive curated, confidential opportunity presentations."
        primaryLabel="Request Access"
        secondaryLabel="How Mandates Work"
        secondaryHref="/usa/invest/mandates"
      />
    </>
  );
}

