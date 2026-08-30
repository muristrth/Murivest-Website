import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Acquisition Brokerage — USA Commercial Real Estate | Murivest",
  description:
    "Buyer representation for commercial real estate acquisitions across the United States. Murivest provides acquisition brokerage through licensed broker relationships where applicable.",
  alternates: { canonical: `https://${SITE.domain}/usa/brokerage/acquisition"` },
};

export default function AcquisitionBrokeragePage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Acquisition Brokerage</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Buyer Representation
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest provides buyer representation for commercial real estate
            acquisitions across the United States. We operate through licensed
            broker relationships where required, ensuring full compliance with
            jurisdictional regulations while delivering institutional-quality
            advisory.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="What We Do"
          title="Acquisition support for institutional and private capital"
          description="We represent buyers across all major U.S. commercial real estate sectors — from core assets to value-add and opportunistic opportunities."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Mandate Definition",
              text: "We work with buyers to define acquisition criteria — asset class, market, strategy, return expectations, and risk parameters.",
            },
            {
              title: "Opportunity Sourcing",
              text: "We leverage institutional relationships to identify on-market and off-market opportunities aligned with your acquisition criteria.",
            },
            {
              title: "Underwriting",
              text: "We conduct detailed asset-level underwriting and market analysis — providing the analytical foundation for investment decisions.",
            },
            {
              title: "LOI Negotiation",
              text: "We manage letter of intent negotiation, balancing competitive positioning with favorable terms and deal certainty.",
            },
            {
              title: "Due Diligence",
              text: "We coordinate third-party due diligence — environmental, engineering, legal, and financial — ensuring comprehensive risk evaluation.",
            },
            {
              title: "Closing Coordination",
              text: "We manage the closing process, coordinating with lenders, attorneys, and counterparties to ensure a smooth transaction close.",
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
        title="Engage Murivest on your next acquisition"
        description="Whether acquiring, disposing, or sourcing capital, our team is ready to advise. Start with a confidential consultation."
        primaryLabel="Request a Mandate"
        primaryHref="/usa/contact"
        secondaryLabel="Define Your Criteria"
        secondaryHref="/usa/invest/criteria"
      />
    </>
  );
}

