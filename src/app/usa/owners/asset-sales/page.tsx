import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Asset Sales — USA Commercial Real Estate | Murivest",
  description:
    "Strategic sale of individual commercial real estate assets across the United States. Murivest provides owner representation through licensed broker relationships where applicable.",
  alternates: { canonical: `https://${SITE.domain}/usa/owners/asset-sales"` },
};

export default function AssetSalesPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Asset Sales</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Strategic Asset Disposition
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest advises owners on the strategic sale of individual
            commercial real estate assets — from positioning and buyer
            identification through negotiation and closing. We operate through
            licensed broker relationships where required.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="What We Do"
          title="Asset sale advisory for owners"
          description="We represent owners in the sale of individual commercial real estate assets — maximizing outcomes through positioning, marketing, and negotiation."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Asset Positioning",
              text: "We position assets to attract the right capital — developing investment narratives, identifying target buyer pools, and preparing marketing materials.",
            },
            {
              title: "Market Analysis",
              text: "We analyze current market conditions — supply, demand, rents, cap rates, and transaction comps — to establish realistic pricing expectations.",
            },
            {
              title: "Buyer Identification",
              text: "We identify and pre-qualify potential buyers — institutional investors, family offices, private equity, and strategic operators.",
            },
            {
              title: "Marketing Execution",
              text: "We execute targeted marketing — from confidential off-market processes to controlled public campaigns — based on seller objectives.",
            },
            {
              title: "Negotiation",
              text: "We manage LOI negotiation, due diligence coordination, and contract negotiation to optimize terms and protect seller interests.",
            },
            {
              title: "Closing",
              text: "We manage the closing process — coordinating with buyers, lenders, attorneys, and title companies to ensure a smooth transaction close.",
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
        title="Engage Murivest on your next disposition"
        description="Whether acquiring, disposing, or sourcing capital, our team is ready to advise. Start with a confidential consultation."
        primaryLabel="Request a Mandate"
        primaryHref="/usa/contact"
        secondaryLabel="Submit an Asset"
        secondaryHref="/usa/submit-a-deal"
      />
    </>
  );
}

