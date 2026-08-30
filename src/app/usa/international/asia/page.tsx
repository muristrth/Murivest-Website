import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Asia to USA — International CRE Investment | Murivest",
  description:
    "Murivest supports Asian institutional investors, family offices, and sovereign wealth funds seeking to access U.S. commercial real estate markets.",
  alternates: { canonical: `https://${SITE.domain}/usa/international/asia"` },
};

export default function AsiaToUSAPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Asia → USA</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Asian Capital in U.S. Commercial Real Estate
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest supports Asian institutional investors, family offices, and
            sovereign wealth funds seeking to access U.S. commercial real estate
            markets. We provide market intelligence, mandate structuring, and
            relationship-driven access to U.S. opportunities.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Why U.S. CRE"
          title="U.S. commercial real estate for Asian capital"
          description="The United States offers deep, liquid commercial real estate markets with transparent regulation, strong legal protections, and institutional-quality assets — making it an attractive destination for Asian capital."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Portfolio Diversification",
              text: "U.S. CRE provides geographic and sector diversification for Asian portfolios — reducing domestic market concentration and providing stable, income-producing assets.",
            },
            {
              title: "Yield & Stability",
              text: "U.S. commercial real estate offers attractive, stable yields — particularly in core logistics, multifamily, and net-lease assets with long-term contractual income.",
            },
            {
              title: "Market Depth & Liquidity",
              text: "The U.S. offers unmatched market depth — with transparent pricing, active buyer pools, and efficient exit mechanisms that support large-scale capital deployment.",
            },
            {
              title: "Institutional Infrastructure",
              text: "The U.S. has a mature CRE infrastructure — established lenders, service providers, and regulatory frameworks — reducing operational friction for Asian investors.",
            },
            {
              title: "Currency Hedging",
              text: "We advise on currency risk management — including natural hedges through USD-denominated debt and synthetic hedges through FX derivatives.",
            },
            {
              title: "Relationship Access",
              text: "We leverage our institutional relationships to provide access to off-market and pre-market opportunities — before broader market exposure.",
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

