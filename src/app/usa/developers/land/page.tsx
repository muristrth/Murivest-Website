import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Land Acquisition — USA Commercial Real Estate | Murivest",
  description:
    "Land banking and acquisition support for commercial real estate developers seeking entitled and entitled-to-be sites in growth U.S. markets.",
  alternates: { canonical: `https://${SITE.domain}/usa/developers/land"` },
};

export default function LandAcquisitionPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Land</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Land Banking & Acquisition
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest supports commercial real estate developers with land
            banking and acquisition — identifying entitled and entitled-to-be
            sites in growth markets, and advising on acquisition strategy and
            execution.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="What We Do"
          title="Land acquisition for development"
          description="We help developers acquire land at the right price, in the right market, with the right entitlement pathway."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Market Selection",
              text: "We identify growth markets with strong population, employment, and commercial real estate fundamentals — where land values are likely to appreciate.",
            },
            {
              title: "Site Sourcing",
              text: "We source land through off-market channels, institutional relationships, and targeted outreach to landowners and brokers.",
            },
            {
              title: "Entitlement Analysis",
              text: "We assess entitlement status — zoning, use permissions, infrastructure capacity, and timeline — to understand development feasibility.",
            },
            {
              title: "Acquisition Strategy",
              text: "We develop acquisition strategies — including pricing, negotiation approach, and deal structure — to secure land at favorable terms.",
            },
            {
              title: "Due Diligence",
              text: "We coordinate environmental, geotechnical, title, and entitlement due diligence to de-risk land acquisitions.",
            },
            {
              title: "Capital Planning",
              text: "We advise on capital requirements for land acquisition and development — connecting developers with equity and debt partners.",
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
        title="Engage Murivest on your next development"
        description="Whether acquiring land, sourcing capital, or structuring a joint venture, our team is ready to advise. Start with a confidential consultation."
        primaryLabel="Request a Mandate"
        primaryHref="/usa/contact"
      />
    </>
  );
}

