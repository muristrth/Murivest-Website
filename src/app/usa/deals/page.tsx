import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import CTABanner from "../components/CTABanner";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Deals — USA Commercial Real Estate Opportunities | Murivest",
  description:
    "Explore current commercial real estate opportunities across the United States. Off-market, institutional, and private offerings available to qualified investors on a confidential basis.",
  alternates: { canonical: `https://${SITE.domain}/usa/deals` },
};

export default function DealsPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Opportunities</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Current Mandate Offerings
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest represents select commercial real estate opportunities on a
            confidential, mandate-driven basis. Each engagement is structured
            around a clearly defined investment objective and executed with the
            underwriting discipline that institutional capital expects.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-[#E8E6E1] bg-white p-8">
            <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
              Off-Market
            </h3>
            <p className="mt-3 text-[#8B8680]">
              Pre-market and off-market opportunities sourced through Murivest&apos;s
              institutional relationships, available exclusively to qualified
              investors before broader market exposure.
            </p>
            <a
              href="/usa/deals/off-market"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B8956B] hover:text-[#C9A87C]"
            >
              View off-market offerings <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="rounded-2xl border border-[#E8E6E1] bg-white p-8">
            <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
              Institutional
            </h3>
            <p className="mt-3 text-[#8B8680]">
              Large-scale, institutional-quality assets and portfolio
              transactions requiring significant equity commitments and
              sophisticated underwriting.
            </p>
            <a
              href="/usa/deals/institutional"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B8956B] hover:text-[#C9A87C]"
            >
              View institutional offerings <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="rounded-2xl border border-[#E8E6E1] bg-white p-8">
            <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
              Private
            </h3>
            <p className="mt-3 text-[#8B8680]">
              Privately negotiated transactions and single-asset mandates
              tailored to specific investor requirements and risk parameters.
            </p>
            <a
              href="/usa/deals/private"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B8956B] hover:text-[#C9A87C]"
            >
              View private offerings <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </Section>

      <Section className="py-20 bg-[#FAF9F6]">
        <SectionHeading
          eyebrow="Engagement Model"
          title="Confidential, mandate-driven execution"
          description="Every Murivest engagement is structured around a defined investment mandate. Opportunities are presented on a confidential basis to pre-qualified investors."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "Define Mandate",
              text: "We begin with a confidential consultation to understand your acquisition criteria, return expectations, and portfolio strategy.",
            },
            {
              step: "02",
              title: "Source Opportunities",
              text: "We leverage institutional relationships to identify off-market and pre-market opportunities aligned with your mandate.",
            },
            {
              step: "03",
              title: "Underwrite",
              text: "We conduct detailed asset-level underwriting, market analysis, and risk assessment before presenting any opportunity.",
            },
            {
              step: "04",
              title: "Execute",
              text: "We manage the full transaction process — from LOI through due diligence and closing — protecting your interests at every stage.",
            },
          ].map((item) => (
            <div key={item.step} className="rounded-xl border border-[#E8E6E1] bg-white p-6">
              <div className="font-serif text-4xl font-semibold text-[#B8956B]">
                {item.step}
              </div>
              <h3 className="mt-3 font-serif text-lg font-semibold text-[#2C2C2C]">
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
        secondaryLabel="Define Your Criteria"
        secondaryHref="/usa/invest/criteria"
      />
    </>
  );
}
