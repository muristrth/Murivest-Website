import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, GitBranch, ShieldCheck, Scale } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Portfolio Sales — U.S. Commercial Real Estate",
  description:
    "Portfolio disposition advisory for U.S. commercial real estate — multi-asset sales requiring segmentation strategy, coordinated marketing, and a single point of accountability.",
  alternates: { canonical: `https://${SITE.domain}/usa/sell/portfolio-sales` },
  openGraph: {
    title: "Portfolio Sales — U.S. Commercial Real Estate",
    description:
      "Multi-asset portfolio disposition advisory for U.S. commercial real estate.",
    url: `https://${SITE.domain}/usa/sell/portfolio-sales`,
  },
};

const CONSIDERATIONS = [
  {
    icon: Layers,
    title: "Segmentation Strategy",
    description:
      "Portfolios are rarely sold as a single block at optimal value. We assess which assets should be bundled, which sold individually, and which held or recapitalized.",
  },
  {
    icon: GitBranch,
    title: "Cross-Market Coordination",
    description:
      "Assets in multiple metros and sectors demand a single point of accountability — one narrative, one process, and consistent buyer engagement across the book.",
  },
  {
    icon: Scale,
    title: "Value Optimization",
    description:
      "We model the marginal value of portfolio versus individual sale, weighing certainty of execution against potential premium from bundling or carving out.",
  },
  {
    icon: ShieldCheck,
    title: "Single Point of Accountability",
    description:
      "One mandate, one advisor. We orchestrate brokers, counsel, and data across assets so the owner receives a consolidated, controlled process.",
  },
];

export default function PortfolioSalesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Portfolio Sales Advisory",
    serviceType: "Multi-asset disposition advisory",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: `https://${SITE.domain}/usa`,
    },
    areaServed: "US",
    description:
      "Portfolio disposition advisory for U.S. commercial real estate — multi-asset sales with segmentation strategy, coordinated marketing, and single-point accountability.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-[#1B4332] py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-ink-950 to-ink-900" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">
              Sell · Portfolio Sales
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Portfolio dispositions orchestrated as one mandate, not many listings
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              A portfolio is a system, not a stack of assets. Murivest advises
              owners on the disposition of multi-asset U.S. commercial real estate
              — designing the segmentation, coordinating the execution across
              markets and sectors, and maintaining a single point of
              accountability from strategy through closing.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/contact"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Discuss a Portfolio Mandate
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/sell"
                className="flex items-center justify-center rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                All Sell-Side Mandates
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="How We Approach Portfolios"
          title="Disposition strategy before disposition execution"
          description="The first question in any portfolio sale is structural: what should be sold together, what separately, and what should not be sold at all. We answer that before marketing begins."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONSIDERATIONS.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#E8E6E1] bg-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1B4332] text-gold-400">
                <item.icon size={22} />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-[#2C2C2C]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 bg-[#FAF9F6]">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Structuring the Exit</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#2C2C2C] sm:text-4xl">
              Certainty and premium are often in tension — we make that explicit
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#8B8680]">
              A single bulk sale maximizes certainty but may leave value on the
              table; individual sales maximize price but extend timeline and
              execution risk. The right answer is portfolio-specific, and we model
              it transparently with the owner before committing to a path.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#8B8680]">
              Where a partial recapitalization unlocks more value than a sale, we
              coordinate with our capital practice — the disposition decision is
              made in the context of the full capital strategy, not in isolation.
            </p>
          </div>
          <div className="rounded-xl border border-[#E8E6E1] bg-white p-8">
            <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
              What a portfolio mandate delivers
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#8B8680]">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Asset-level underwriting consolidated into one view.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Segmentation and sequencing recommendation.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Coordinated buyer engagement across markets.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Unified reporting and closing management.
              </li>
            </ul>
            <Link
              href="/usa/capital/recapitalization"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#B8956B] transition-colors hover:text-[#C9A87C]"
            >
              Consider recapitalization
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Adjacent Mandates"
          title="Portfolio strategy connects to single-asset and capital decisions"
          description="A portfolio disposition frequently intersects with individual investment sales and recapitalization strategy."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            { label: "Investment Sales", href: "/usa/sell/investment-sales" },
            { label: "Recapitalization", href: "/usa/capital/recapitalization" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between rounded-xl border border-[#E8E6E1] bg-white p-5 transition-all hover:border-[#B8956B] hover:shadow-md"
            >
              <span className="font-serif text-lg font-semibold text-[#2C2C2C] group-hover:text-[#B8956B] transition-colors">
                {item.label}
              </span>
              <ArrowRight
                size={18}
                className="text-[#FAF9F6] transition-all group-hover:translate-x-1 group-hover:text-[#C9A87C]"
              />
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Orchestrate your portfolio disposition"
        description="If you are weighing a multi-asset exit, we will design the segmentation and run the execution as one mandate."
        primaryLabel="Discuss a Portfolio Mandate"
        secondaryLabel="Explore Recapitalization"
        secondaryHref="/usa/capital/recapitalization"
      />
    </>
  );
}
