import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Database, Layers, BarChart2, GitBranch } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Investment Analysis — Data-Driven U.S. CRE Research",
  description:
    "Murivest analysis applies proprietary data and structured frameworks to U.S. commercial real estate pricing, capital flows, and cycle positioning for institutional investors.",
  alternates: { canonical: `https://${SITE.domain}/usa/insights/analysis` },
  openGraph: {
    title: "Investment Analysis — Data-Driven U.S. CRE Research",
    description:
      "Proprietary data and structured frameworks applied to U.S. CRE pricing, capital flows, and cycle positioning.",
    url: `https://${SITE.domain}/usa/insights/analysis`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Murivest Analysis — Data-Driven U.S. CRE Research",
  description:
    "Data-driven analysis of U.S. commercial real estate pricing, capital flows, and cycle positioning for institutional investors.",
  url: `https://${SITE.domain}/usa/insights/analysis`,
  isPartOf: { "@type": "WebSite", "@id": `https://${SITE.domain}/#website` },
  about: {
    "@type": "Organization",
    "@id": `https://${SITE.domain}/usa/#organization`,
  },
  inLanguage: "en-US",
  breadcrumb: { "@id": `https://${SITE.domain}/usa/insights/analysis/#breadcrumb` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `https://${SITE.domain}/usa/insights/analysis/#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Murivest",
      item: `https://${SITE.domain}`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "USA",
      item: `https://${SITE.domain}/usa`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Insights",
      item: `https://${SITE.domain}/usa/insights`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Analysis",
      item: `https://${SITE.domain}/usa/insights/analysis`,
    },
  ],
};

const ANALYSIS_PILLARS = [
  {
    icon: Database,
    title: "Data Infrastructure",
    description:
      "The proprietary data sets and leading indicators we track across U.S. metro markets to inform pricing and positioning calls.",
  },
  {
    icon: BarChart2,
    title: "Valuation Bridge",
    description:
      "Reconciling public-market multiples with private transaction pricing, and the methodologies we apply to value U.S. CRE assets.",
  },
  {
    icon: Layers,
    title: "Capital Flow Mapping",
    description:
      "Tracking where domestic and cross-border capital is deploying, how allocations are shifting, and what that means for pricing.",
  },
  {
    icon: GitBranch,
    title: "Cycle Positioning",
    description:
      "Analytical frameworks for timing markets, sizing exposure, and managing downside across the U.S. CRE cycle.",
  },
];

export default function AnalysisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1B4332] py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-ink-950 to-ink-900" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">Analysis</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Data-driven analysis of U.S. commercial real estate
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Our analysis applies proprietary data and structured frameworks to
              U.S. CRE pricing, capital flows, and cycle positioning — producing
              the kind of conviction investors need at decision time.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/insights"
                className="group flex items-center justify-center gap-2 rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                All Insights
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/research/sector-research"
                className="group flex items-center justify-center gap-2 rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                Sector Research
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="Our Lens"
          title="The pillars of our analysis"
          description="Each analysis begins with disciplined data collection, then layers on market context, capital-flow visibility, and cycle-aware positioning."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ANALYSIS_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-[#E8E6E1] bg-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1B4332] text-gold-400">
                <pillar.icon size={22} />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-[#2C2C2C]">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Methodology */}
      <Section className="py-20 bg-[#FAF9F6]">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <Eyebrow>Approach</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#2C2C2C] sm:text-4xl">
              A repeatable analytical framework
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#8B8680]">
              We layer proprietary transaction data, public-market signals, and
              operator-level fundamentals to build forward-looking views of U.S.
              commercial real estate. The goal is not more data — it is the
              right data, framed by the questions that matter at decision time.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E8E6E1] bg-white p-8">
            <h3 className="font-serif text-lg font-semibold text-[#2C2C2C]">
              Core inputs
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#C9A87C]">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                <span>
                  Proprietary deal-flow and pricing data from active engagements
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                <span>
                  Public REIT multiples, CMBS spreads, and treasury curves
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                <span>
                  Operator and tenant-level fundamentals across metros
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <CTABanner
        title="Access Murivest analysis"
        description="Subscribe to receive our latest institutional research and data-driven market analysis."
        primaryLabel="Contact Our Research Team"
      />
    </>
  );
}
