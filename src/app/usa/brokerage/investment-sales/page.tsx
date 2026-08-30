import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Investment Sales Brokerage — USA Commercial Real Estate | Murivest",
  description:
    "Institutional investment sales brokerage for commercial real estate across the United States. Murivest represents sellers through licensed broker relationships where applicable.",
  alternates: { canonical: `https://${SITE.domain}/usa/brokerage/investment-sales"` },
};

export default function InvestmentSalesBrokeragePage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Investment Sales</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Institutional Investment Sales
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest represents sellers of commercial real estate assets to
            institutional buyers, private equity, and family offices. We operate
            through licensed broker relationships where required, ensuring full
            compliance with jurisdictional regulations.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="What We Do"
          title="Investment sales for institutional-quality assets"
          description="We advise on the sale of institutional-quality commercial real estate — from positioning and buyer identification through negotiation and closing."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Asset Positioning",
              text: "We position assets to attract the right capital — developing investment narratives, identifying target buyer pools, and preparing marketing materials.",
            },
            {
              title: "Buyer Identification",
              text: "We identify and pre-qualify institutional buyers — pension funds, sovereign wealth funds, private equity, and family offices — through our institutional relationships.",
            },
            {
              title: "Confidential Marketing",
              text: "For sensitive mandates, we execute controlled, confidential marketing processes — managing information flow to protect the seller&apos;s position.",
            },
            {
              title: "Competitive Tension",
              text: "We create and manage competitive tension — through structured bidding processes, deadline strategies, and multi-party negotiations — to maximize outcomes.",
            },
            {
              title: "Negotiation & Closing",
              text: "We manage LOI negotiation, due diligence coordination, and contract negotiation — protecting seller interests and optimizing terms.",
            },
            {
              title: "Portfolio Sales",
              text: "We coordinate multi-asset and portfolio investment sales — managing complexity across assets, markets, and counterparties.",
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

