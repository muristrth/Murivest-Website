import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Strategy Advisory — USA Commercial Real Estate | Murivest",
  description:
    "Murivest provides strategic commercial real estate advisory for market entry, expansion, and positioning — helping investors and owners define and execute their U.S. CRE strategy.",
  alternates: { canonical: `https://${SITE.domain}/usa/advisory/strategy"` },
};

export default function StrategyAdvisoryPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Strategy</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Strategic Positioning & Market Entry
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest advises investors and owners on U.S. commercial real estate
            strategy — from market entry and expansion to competitive
            positioning and capital allocation. We help clients define where to
            compete, how to compete, and when to act.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="What We Do"
          title="Strategic advisory for U.S. CRE decisions"
          description="We help clients make better strategic decisions — not just execute transactions — by combining market intelligence, underwriting discipline, and institutional relationships."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Market Entry Strategy",
              text: "We advise on U.S. market entry — selecting markets, asset classes, and entry strategies that align with investor objectives and risk tolerance.",
            },
            {
              title: "Competitive Positioning",
              text: "We analyze competitive dynamics in target markets — supply, demand, rents, cap rates, and buyer/tenant pools — to position assets and portfolios for success.",
            },
            {
              title: "Capital Allocation",
              text: "We advise on capital allocation across asset classes, markets, and strategies — optimizing risk-adjusted returns within portfolio constraints.",
            },
            {
              title: "Expansion Planning",
              text: "We help existing U.S. investors expand their footprint — identifying adjacent markets, new asset classes, and portfolio augmentation opportunities.",
            },
            {
              title: "Cross-Border Strategy",
              text: "We advise international capital on U.S. market entry — navigating jurisdictional, tax, financing, and operational considerations.",
            },
            {
              title: "Scenario Analysis",
              text: "We develop scenario-based analyses for major decisions — helping clients understand upside, downside, and risk-adjusted outcomes before committing capital.",
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
        title="Engage Murivest on your strategy"
        description="Whether acquiring, disposing, or sourcing capital, our team is ready to advise. Start with a confidential consultation."
        primaryLabel="Request a Mandate"
        primaryHref="/usa/contact"
      />
    </>
  );
}

