import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Private Deals — USA Commercial Real Estate | Murivest",
  description:
    "Privately negotiated commercial real estate transactions and single-asset mandates available through Murivest USA for qualified investors.",
  alternates: { canonical: `https://${SITE.domain}/usa/deals/private"` },
};

export default function PrivateDealsPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Private Transactions</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Privately Negotiated Offerings
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest represents select single-asset and privately negotiated
            transactions tailored to specific investor requirements. These
            mandates are structured around defined acquisition criteria and
            executed with institutional underwriting discipline.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Engagement Model"
          title="Tailored to your mandate"
          description="Private offerings are not listed publicly. They are sourced and presented exclusively to investors with a clearly defined mandate and demonstrated execution capacity."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Single-Asset Acquisitions",
              text: "Individual commercial properties sourced off-market and presented to a single qualified buyer or a small group of pre-vetted investors.",
            },
            {
              title: "Privately Negotiated Sales",
              text: "Dispositions conducted through private negotiation rather than public marketing, preserving confidentiality and optimizing outcomes for sellers.",
            },
            {
              title: "Custom Mandates",
              text: "Investor-specific mandates — defined by asset class, market, strategy, and return parameters — executed with dedicated advisory resources.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#E8E6E1] bg-white p-8"
            >
              <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#8B8680]">
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
        secondaryLabel="Define Your Criteria"
        secondaryHref="/usa/invest/criteria"
      />
    </>
  );
}

