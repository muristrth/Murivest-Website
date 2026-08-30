import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Disposition Advisory — USA Commercial Real Estate | Murivest",
  description:
    "Murivest provides strategic disposition advisory for commercial real estate owners seeking to maximize outcomes through institutional-quality positioning and execution.",
  alternates: { canonical: `https://${SITE.domain}/usa/advisory/disposition"` },
};

export default function DispositionAdvisoryPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Disposition Advisory</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Strategic Disposition Advisory
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest advises owners on the strategic disposition of commercial
            real estate assets — from positioning and buyer identification
            through marketing, negotiation, and closing — with the objective of
            maximizing outcomes while maintaining confidentiality where
            required.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="What We Do"
          title="Disposition advisory across asset classes and markets"
          description="We advise on dispositions across all major U.S. commercial real estate sectors, with dedicated expertise in positioning assets to attract the right capital."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Asset Positioning",
              text: "We analyze the asset, its market position, and potential buyer pools to develop a positioning strategy that maximizes value and attracts qualified capital.",
            },
            {
              title: "Buyer Identification",
              text: "We identify and pre-qualify potential buyers — institutional investors, family offices, private equity, and strategic operators — through our institutional relationships.",
            },
            {
              title: "Marketing & Confidentiality",
              text: "We execute targeted outreach through controlled, confidential processes. For sensitive mandates, we manage information flow to protect the seller&apos;s position.",
            },
            {
              title: "Negotiation",
              text: "We manage LOI negotiation, due diligence coordination, and contract negotiation to optimize terms and protect your interests.",
            },
            {
              title: "Portfolio Dispositions",
              text: "We advise on multi-asset and portfolio dispositions, coordinating across assets to optimize aggregate outcomes and execution timing.",
            },
            {
              title: "Auction & Bidding Processes",
              text: "We manage structured bidding processes when appropriate, creating competitive tension and transparent evaluation frameworks.",
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

