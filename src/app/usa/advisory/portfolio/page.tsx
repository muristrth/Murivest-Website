import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Portfolio Advisory — USA Commercial Real Estate | Murivest",
  description:
    "Murivest provides portfolio-level commercial real estate advisory for institutional owners — acquisition and disposition sequencing, asset allocation, and portfolio optimization across U.S. markets.",
  alternates: { canonical: `https://${SITE.domain}/usa/advisory/portfolio"` },
};

export default function PortfolioAdvisoryPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Portfolio Advisory</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Portfolio-Level Strategy & Execution
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest advises institutional owners on portfolio-level strategy —
            acquisition and disposition sequencing, asset allocation, market
            weighting, and portfolio optimization — aligning real estate
            decisions with broader investment objectives.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="What We Do"
          title="Portfolio advisory for institutional owners"
          description="We help owners think at the portfolio level — not just the asset level — to optimize risk-adjusted returns and strategic positioning."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Portfolio Review",
              text: "We conduct comprehensive portfolio reviews — analyzing asset performance, market positioning, lease maturity, and capital structure.",
            },
            {
              title: "Acquisition Sequencing",
              text: "We develop acquisition roadmaps aligned with portfolio strategy, identifying markets, asset classes, and entry points that optimize portfolio construction.",
            },
            {
              title: "Disposition Sequencing",
              text: "We identify assets for disposition based on portfolio strategy, market outlook, and capital recycling objectives.",
            },
            {
              title: "Market Allocation",
              text: "We advise on geographic and sector allocation — helping owners diversify or concentrate exposure based on macro and micro market dynamics.",
            },
            {
              title: "Capital Recycling",
              text: "We structure capital recycling strategies — deploying capital from dispositions into higher-conviction opportunities while managing tax and timing considerations.",
            },
            {
              title: "Risk Management",
              text: "We analyze portfolio risk concentration — by market, asset class, tenant, and lease term — and recommend adjustments to improve risk-adjusted returns.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#E8E6E1] bg-white p-6"
            >
              <h3 className="font-serif text-lg font-semibold text-[#2C2C2C]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Engage Murivest on your portfolio strategy"
        description="Whether acquiring, disposing, or sourcing capital, our team is ready to advise. Start with a confidential consultation."
        primaryLabel="Request a Mandate"
        primaryHref="/usa/contact"
      />
    </>
  );
}

