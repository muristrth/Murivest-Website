import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Development Sites — USA Commercial Real Estate | Murivest",
  description:
    "Development site sourcing and entitlement support for ground-up commercial real estate development across the United States.",
  alternates: { canonical: `https://${SITE.domain}/usa/developers/development-sites"` },
};

export default function DevelopmentSitesPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Development Sites</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Site Sourcing & Entitlement Support
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest supports developers with site sourcing and entitlement
            strategy for ground-up commercial development across the United
            States. We identify sites that align with your development program
            and market selection criteria.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="What We Do"
          title="Site sourcing for commercial developers"
          description="We help developers find the right sites — with the right entitlements, in the right markets, at the right price."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Market Selection",
              text: "We advise on market selection for development — identifying markets with strong population growth, employment growth, and commercial real estate demand.",
            },
            {
              title: "Site Identification",
              text: "We source sites through institutional relationships, off-market channels, and targeted outreach to landowners and brokers.",
            },
            {
              title: "Entitlement Strategy",
              text: "We assess entitlement status and complexity — helping developers understand timelines, risks, and costs before committing to a site.",
            },
            {
              title: "Land Acquisition",
              text: "We advise on land acquisition strategy — from pricing and negotiation to due diligence and closing.",
            },
            {
              title: "Capital Introduction",
              text: "We introduce developers to equity and debt capital partners — including institutional investors, family offices, and private equity — for development financing.",
            },
            {
              title: "Exit Strategy",
              text: "We advise on exit strategy from inception — understanding buyer pools, market timing, and asset positioning to optimize development returns.",
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

