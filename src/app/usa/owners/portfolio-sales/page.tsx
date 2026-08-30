import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Portfolio Sales — USA Commercial Real Estate | Murivest",
  description:
    "Multi-asset portfolio sales advisory for commercial real estate owners across the United States. Murivest coordinates complex portfolio dispositions to optimize aggregate outcomes.",
  alternates: { canonical: `https://${SITE.domain}/usa/owners/portfolio-sales"` },
};

export default function PortfolioSalesPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Portfolio Sales</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Multi-Asset Portfolio Dispositions
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest advises owners on the sale of commercial real estate
            portfolios — coordinating across assets, markets, and buyers to
            optimize aggregate outcomes and execution timing.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="What We Do"
          title="Portfolio-level disposition advisory"
          description="We help owners think at the portfolio level — not just the asset level — to maximize aggregate outcomes and execution efficiency."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Portfolio Strategy",
              text: "We develop portfolio-level disposition strategies — sequencing, packaging, and staging assets to optimize aggregate outcomes and buyer interest.",
            },
            {
              title: "Asset Optimization",
              text: "We analyze portfolio composition — identifying assets for disposition, retention, or repositioning based on market outlook and owner objectives.",
            },
            {
              title: "Buyer Identification",
              text: "We identify portfolio buyers — institutional investors, private equity, REITs, and cross-border capital — through our institutional relationships.",
            },
            {
              title: "Data Room Management",
              text: "We manage virtual data rooms and information flow — ensuring buyers have the information they need while protecting seller confidentiality.",
            },
            {
              title: "Multi-Party Negotiation",
              text: "We manage complex multi-party negotiations — coordinating across assets, buyers, and advisors to optimize aggregate terms.",
            },
            {
              title: "Execution Timing",
              text: "We advise on execution timing — understanding market windows, buyer capacity, and competitive dynamics to optimize portfolio sale outcomes.",
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
        title="Engage Murivest on your next portfolio disposition"
        description="Whether acquiring, disposing, or sourcing capital, our team is ready to advise. Start with a confidential consultation."
        primaryLabel="Request a Mandate"
        primaryHref="/usa/contact"
        secondaryLabel="Submit an Asset"
        secondaryHref="/usa/submit-a-deal"
      />
    </>
  );
}

