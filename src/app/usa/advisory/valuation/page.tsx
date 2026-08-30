import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Valuation Advisory — USA Commercial Real Estate | Murivest",
  description:
    "Murivest provides independent commercial real estate valuation and underwriting support for acquisition, disposition, financing, and portfolio reporting purposes.",
  alternates: { canonical: `https://${SITE.domain}/usa/advisory/valuation"` },
};

export default function ValuationAdvisoryPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Valuation</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Independent Valuation & Underwriting
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest provides independent valuation support for acquisition,
            disposition, financing, and portfolio reporting purposes. Our
            underwriting is grounded in market fundamentals, comparable
            transactions, and institutional-grade analytical discipline.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Capabilities"
          title="Valuation and underwriting services"
          description="We provide analytical support for major real estate decisions — helping clients understand value, risk, and opportunity before committing capital."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Acquisition Underwriting",
              text: "Detailed acquisition underwriting — including cash flow projections, exit assumptions, sensitivity analysis, and risk-adjusted return metrics.",
            },
            {
              title: "Disposition Valuation",
              text: "Independent valuation opinions for disposition decisions — helping owners understand market positioning and realistic price expectations.",
            },
            {
              title: "Portfolio Valuation",
              text: "Portfolio-level valuation and mark-to-market analysis for institutional owners, fund managers, and family offices.",
            },
            {
              title: "Financing Support",
              text: "Underwriting and valuation support for debt and equity financing — helping sponsors present institutional-quality analysis to capital providers.",
            },
            {
              title: "Market Analysis",
              text: "Market-level analysis — including supply, demand, rents, occupancy, cap rates, and transaction comps — to inform valuation assumptions.",
            },
            {
              title: "Risk Assessment",
              text: "Structured risk assessment — identifying key risk factors, downside scenarios, and mitigation strategies for major acquisitions and dispositions.",
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
        title="Engage Murivest on your next mandate"
        description="Whether acquiring, disposing, or sourcing capital, our team is ready to advise. Start with a confidential consultation."
        primaryLabel="Request a Mandate"
        primaryHref="/usa/contact"
      />
    </>
  );
}

