import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Acquisition Advisory — USA Commercial Real Estate | Murivest",
  description:
    "Murivest provides end-to-end acquisition advisory for institutional investors and private capital acquiring commercial real estate across the United States.",
  alternates: { canonical: `https://${SITE.domain}/usa/advisory/acquisition"` },
};

export default function AcquisitionAdvisoryPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Acquisition Advisory</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            End-to-End Acquisition Support
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            From mandate definition and opportunity sourcing through
            underwriting, negotiation, and closing, Murivest provides the
            advisory and execution support that institutional-quality
            acquisitions require.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="What We Do"
          title="Acquisition advisory across asset classes and markets"
          description="We advise on acquisitions across all major U.S. commercial real estate sectors, with dedicated expertise in office, industrial, logistics, multifamily, retail, and data center markets."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Mandate Definition",
              text: "We begin with a confidential consultation to define your acquisition criteria — asset class, market, strategy, return expectations, and risk parameters.",
            },
            {
              title: "Opportunity Sourcing",
              text: "We leverage institutional relationships to identify on-market and off-market opportunities aligned with your mandate, before broader market exposure.",
            },
            {
              title: "Underwriting & Analysis",
              text: "We conduct detailed asset-level underwriting, market analysis, and risk assessment — providing the analytical foundation for investment decisions.",
            },
            {
              title: "Negotiation",
              text: "We manage LOI negotiation, due diligence coordination, and contract negotiation to protect your interests and optimize terms.",
            },
            {
              title: "Due Diligence",
              text: "We coordinate third-party due diligence — including environmental, engineering, legal, and financial — ensuring comprehensive risk evaluation.",
            },
            {
              title: "Closing & Execution",
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

