import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import CTABanner from "../components/CTABanner";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "1031 Exchange — USA Commercial Real Estate | Murivest",
  description:
    "Murivest supports 1031 exchange transactions for commercial real estate investors seeking to defer capital gains taxes through like-kind property exchanges across the United States.",
  alternates: { canonical: `https://${SITE.domain}/usa/1031-exchange"` },
};

export default function Section1031ExchangePage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">1031 Exchange</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Like-Kind Exchange Advisory
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest supports investors executing 1031 like-kind exchanges —
            sourcing replacement properties, managing timelines, and
            coordinating with qualified intermediaries to ensure compliant,
            timely execution.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="What is a 1031 Exchange"
          title="Defer capital gains through like-kind exchange"
          description="IRC Section 1031 allows investors to defer capital gains taxes on the sale of commercial real estate by reinvesting proceeds into like-kind property. Murivest helps investors navigate this process."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Replacement Property Sourcing",
              text: "We identify replacement properties that meet 1031 exchange requirements — same asset class, same or greater value, and compliant use.",
            },
            {
              title: "Timeline Management",
              text: "We manage the 45-day identification period and 180-day exchange period — ensuring investors meet IRS deadlines while making informed decisions.",
            },
            {
              title: "Qualified Intermediary Coordination",
              text: "We coordinate with qualified intermediaries (QIs) to ensure proper escrow structuring and documentation compliance.",
            },
            {
              title: "Reverse & Improvement Exchanges",
              text: "We advise on reverse exchanges and improvement exchanges — more complex 1031 structures for investors with specific timing or construction requirements.",
            },
            {
              title: "Portfolio Strategy",
              text: "We help investors build 1031 exchange strategies across portfolios — sequencing dispositions and acquisitions to optimize tax deferral and portfolio construction.",
            },
            {
              title: "Multi-State Considerations",
              text: "We advise on multi-state 1031 exchanges — understanding state-level tax implications and compliance requirements for cross-border transactions.",
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
        title="Engage Murivest on your 1031 exchange"
        description="Whether acquiring, disposing, or sourcing capital, our team is ready to advise. Start with a confidential consultation."
        primaryLabel="Request a Mandate"
        primaryHref="/usa/contact"
      />
    </>
  );
}
