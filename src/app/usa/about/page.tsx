import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import CTABanner from "../components/CTABanner";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "About — Murivest USA | Institutional Commercial Real Estate Advisory",
  description:
    "Murivest USA is an independent commercial real estate advisory firm providing institutional-grade acquisition, disposition, capital markets, and strategy advisory across the United States.",
  alternates: { canonical: `https://${SITE.domain}/usa/about"` },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">About</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            The Concierge of Capital
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest is an independent commercial real estate advisory firm
            representing institutional investors, private capital, and principals
            across U.S. office, industrial, logistics, multifamily, retail, and
            data center markets.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Our Philosophy</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#2C2C2C] sm:text-4xl">
              Built for investors who demand institutional-quality execution
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#8B8680]">
              <p>
                Murivest was founded to address a gap in the U.S. commercial real
                estate market: institutional-quality advisory delivered with the
                focus and alignment that only an independent firm can provide.
              </p>
              <p>
                We act as an intermediary — advising on the acquisition,
                disposition, financing, and leasing of commercial properties on
                behalf of investors and principals. Every engagement begins with
                a clearly defined mandate and is executed with the underwriting
                discipline and market intelligence that institutional capital
                expects.
              </p>
              <p>
                We do not manage proprietary funds or carry inventory. Our role
                is to represent your interests — whether you are acquiring,
                selling, financing, or leasing — with transparency and without
                conflict.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { stat: "6", label: "Property type specializations" },
              { stat: "40+", label: "U.S. metro markets covered" },
              { stat: "100%", label: "Mandate-based engagements" },
              { stat: "0", label: "Proprietary fund conflicts" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[#E8E6E1] bg-white p-6"
              >
                <div className="font-serif text-4xl font-semibold text-[#B8956B]">
                  {item.stat}
                </div>
                <div className="mt-2 text-sm text-[#8B8680]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20 bg-[#FAF9F6]">
        <SectionHeading
          eyebrow="How We Work"
          title="A disciplined, transparent engagement model"
          description="Every Murivest engagement follows a structured process designed to protect client interests and maximize outcomes."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "01",
              title: "Mandate Engagement",
              text: "We begin with a confidential consultation to understand your investment objectives and the specific outcome you seek.",
            },
            {
              number: "02",
              title: "Strategy & Underwriting",
              text: "Our team conducts detailed market analysis, asset-level underwriting, and positioning strategy aligned with current capital markets conditions.",
            },
            {
              number: "03",
              title: "Targeted Marketing",
              text: "We execute disciplined outreach to pre-qualified investors, tenants, or capital sources — maintaining confidentiality throughout.",
            },
            {
              number: "04",
              title: "Execution & Closing",
              text: "From LOI through due diligence and closing, Murivest manages the transaction process to protect your interests.",
            },
          ].map((step) => (
            <div key={step.number} className="relative">
              <div className="font-serif text-5xl font-semibold text-[#FAF9F6]">
                {step.number}
              </div>
              <h3 className="mt-3 font-serif text-xl font-semibold text-[#2C2C2C]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
                {step.text}
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
