import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Off-Market Deals — USA Commercial Real Estate | Murivest",
  description:
    "Off-market commercial real estate opportunities sourced through Murivest's institutional relationships. Available exclusively to qualified investors.",
  alternates: { canonical: `https://${SITE.domain}/usa/deals/off-market"` },
};

export default function OffMarketDealsPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Off-Market Opportunities</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Pre-Market & Off-Market Offerings
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest sources off-market and pre-market opportunities through its
            institutional relationships. These offerings are presented
            exclusively to qualified investors before broader market exposure,
            preserving confidentiality and competitive advantage.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="How It Works"
          title="Access before the market"
          description="Off-market sourcing is one of the core advantages of a mandate-based advisory relationship. Murivest does not list public offerings — we originate opportunities through relationships."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Relationship Sourcing",
              text: "We leverage long-standing relationships with owners, developers, and institutional capital partners to identify opportunities before they reach the open market.",
            },
            {
              title: "Confidential Execution",
              text: "Off-market mandates are executed with strict confidentiality. We manage the process to protect your position and maintain competitive tension.",
            },
            {
              title: "Pre-Qualified Access",
              text: "Off-market opportunities are presented only to investors who have defined a clear mandate and demonstrated the capacity to execute.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#E8E6E1] bg-white p-8"
            >
              <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#8B8680]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Engage Murivest on your next mandate"
        description="Whether acquiring, disposing, or sourcing capital, our team is ready to advise. Start with a confidential consultation."
        primaryLabel="Request a Mandate"
        primaryHref="/usa/contact"
        secondaryLabel="Define Your Criteria"
        secondaryHref="/usa/invest/criteria"
      />
    </>
  );
}

