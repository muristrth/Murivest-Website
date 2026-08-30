import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Disposition Brokerage — USA Commercial Real Estate | Murivest",
  description:
    "Seller representation for commercial real estate dispositions across the United States. Murivest provides disposition brokerage through licensed broker relationships where applicable.",
  alternates: { canonical: `https://${SITE.domain}/usa/brokerage/disposition"` },
};

export default function DispositionBrokeragePage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Disposition Brokerage</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Seller Representation
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest provides seller representation for commercial real estate
            dispositions across the United States. We operate through licensed
            broker relationships where required, ensuring full compliance with
            jurisdictional regulations while maximizing outcomes for sellers.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="What We Do"
          title="Disposition support for owners and principals"
          description="We represent sellers across all major U.S. commercial real estate sectors — from individual assets to multi-property portfolios."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Asset Positioning",
              text: "We analyze the asset, its market position, and potential buyer pools to develop a positioning strategy that maximizes value and attracts qualified capital.",
            },
            {
              title: "Marketing Strategy",
              text: "We develop targeted marketing strategies — from confidential off-market processes to controlled public campaigns — based on seller objectives and asset characteristics.",
            },
            {
              title: "Buyer Identification",
              text: "We identify and pre-qualify potential buyers — institutional investors, family offices, private equity, and strategic operators — through our institutional relationships.",
            },
            {
              title: "Negotiation",
              text: "We manage LOI negotiation, due diligence coordination, and contract negotiation to optimize terms and protect seller interests.",
            },
            {
              title: "Portfolio Dispositions",
              text: "We coordinate multi-asset and portfolio dispositions — managing complexity across assets, markets, and counterparties to optimize aggregate outcomes.",
            },
            {
              title: "Confidential Execution",
              text: "For sensitive mandates, we manage information flow and buyer qualification to preserve confidentiality and prevent market disruption.",
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

