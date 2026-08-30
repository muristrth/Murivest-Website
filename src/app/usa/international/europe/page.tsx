import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Europe to USA — International CRE Investment | Murivest",
  description:
    "Murivest supports European institutional investors, family offices, and private equity seeking to access U.S. commercial real estate markets.",
  alternates: { canonical: `https://${SITE.domain}/usa/international/europe"` },
};

export default function EuropeToUSAPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Europe → USA</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            European Capital in U.S. Commercial Real Estate
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest supports European institutional investors, family offices,
            and private equity seeking to access U.S. commercial real estate
            markets. We provide market intelligence, mandate structuring, and
            relationship-driven access to U.S. opportunities.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Why U.S. CRE"
          title="U.S. commercial real estate for European capital"
          description="The United States offers deep, liquid commercial real estate markets with transparent regulation, strong legal protections, and institutional-quality assets — making it an attractive destination for European capital."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Portfolio Diversification",
              text: "U.S. CRE provides geographic and currency diversification for European portfolios — reducing euro-sterling concentration and providing USD-denominated income.",
            },
            {
              title: "Yield Comparison",
              text: "U.S. commercial real estate offers attractive yield spreads relative to European sovereign and credit markets — particularly in value-add and opportunistic strategies.",
            },
            {
              title: "Market Depth",
              text: "The U.S. offers unmatched market depth — with transparent pricing, active buyer pools, and efficient exit mechanisms that European markets often lack.",
            },
            {
              title: "Institutional Infrastructure",
              text: "The U.S. has a mature CRE infrastructure — established lenders, service providers, and regulatory frameworks — reducing operational friction for European investors.",
            },
            {
              title: "Currency Hedging",
              text: "We advise on currency hedging strategies — including natural hedges through USD-denominated debt and synthetic hedges through FX derivatives.",
            },
            {
              title: "Cross-Border Expertise",
              text: "We understand the unique requirements of European investment — from tax structuring and financing to legal compliance and operational integration.",
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
        title="Engage Murivest on your U.S. CRE mandate"
        description="Whether acquiring, disposing, or sourcing capital, our team is ready to advise. Start with a confidential consultation."
        primaryLabel="Request a Mandate"
        primaryHref="/usa/contact"
      />
    </>
  );
}

