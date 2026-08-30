import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Middle East to USA — International CRE Investment | Murivest",
  description:
    "Murivest supports Middle Eastern institutional investors, family offices, and sovereign wealth funds seeking to access U.S. commercial real estate markets.",
  alternates: { canonical: `https://${SITE.domain}/usa/international/middle-east"` },
};

export default function MiddleEastToUSAPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Middle East → USA</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Middle Eastern Capital in U.S. Commercial Real Estate
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest supports Middle Eastern sovereign wealth funds, family
            offices, and institutional investors seeking to access U.S.
            commercial real estate markets. We provide market intelligence,
            mandate structuring, and relationship-driven access to U.S.
            opportunities.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Why U.S. CRE"
          title="U.S. commercial real estate for Middle Eastern capital"
          description="The United States offers deep, liquid commercial real estate markets with transparent regulation, strong legal protections, and institutional-quality assets — making it an attractive destination for Middle Eastern capital."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Strategic Diversification",
              text: "U.S. CRE provides geographic and sector diversification for Middle Eastern portfolios — reducing oil-price correlation and providing stable, income-producing assets.",
            },
            {
              title: "Institutional-Quality Assets",
              text: "The U.S. offers a wide range of institutional-quality assets — from trophy office and multifamily to logistics and data centers — with established valuation benchmarks.",
            },
            {
              title: "Transparent Regulation",
              text: "The U.S. provides a transparent legal framework — strong property rights, contract enforcement, and regulatory clarity — reducing investment risk.",
            },
            {
              title: "Currency Management",
              text: "We advise on currency risk management — including USD hedging strategies and financing structures that optimize exposure for Middle Eastern capital.",
            },
            {
              title: "Relationship Access",
              text: "We leverage our institutional relationships to provide access to off-market and pre-market opportunities — before broader market exposure.",
            },
            {
              title: "Cross-Border Expertise",
              text: "We understand the unique requirements of cross-border investment — from tax structuring and financing to legal compliance and operational integration.",
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

