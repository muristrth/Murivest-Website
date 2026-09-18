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
      <section className="bg-[#2C2C2C] py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-6 font-serif text-4xl leading-tight text-[#F8F7F4] sm:text-5xl lg:text-6xl">
            The <span className="italic font-light text-[#8B7355]">Concierge</span> of Capital
          </h1>
          <div className="mt-8 h-px w-16 bg-[#F8F7F4]/20" />
          <p className="mt-8 max-w-3xl text-[15px] leading-[1.8] text-[#F8F7F4]/65 font-light">
            Murivest is an independent commercial real estate advisory firm
            representing institutional investors, private capital, and principals
            across U.S. office, industrial, logistics, multifamily, retail, and
            data center markets.
          </p>
        </div>
      </section>

      <Section className="py-24 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          <div>
            <Eyebrow>Our Philosophy</Eyebrow>
            <h2 className="mt-6 font-serif text-3xl leading-[1.1] text-[#2C2C2C] sm:text-4xl lg:text-[2.75rem]">
              Built for investors who demand institutional-quality execution
            </h2>
            <div className="mt-8 space-y-5 text-[14px] leading-[1.9] text-[#5A5A5A] font-light">
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
          <div className="grid gap-px border border-[#E5E2DC] bg-[#E5E2DC] sm:grid-cols-2 lg:col-span-5">
            {[
              { stat: "6", label: "Property type specializations" },
              { stat: "40+", label: "U.S. metro markets covered" },
              { stat: "100%", label: "Mandate-based engagements" },
              { stat: "0", label: "Proprietary fund conflicts" },
            ].map((item) => (
              <div key={item.label} className="bg-white p-8">
                <div className="font-serif text-3xl text-[#2C2C2C]">{item.stat}</div>
                <div className="mt-2 text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20 bg-[#F8F7F4]">
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
              <div className="font-serif text-5xl font-semibold text-[#F8F7F4]">
                {step.number}
              </div>
              <h3 className="mt-3 font-serif text-xl font-semibold text-[#2C2C2C]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5A5A5A]">
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
