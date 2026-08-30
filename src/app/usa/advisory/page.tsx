import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import CTABanner from "../components/CTABanner";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Advisory — USA Commercial Real Estate Advisory | Murivest",
  description:
    "Murivest provides commercial real estate advisory across acquisition, disposition, portfolio strategy, and valuation for institutional investors and private capital in the United States.",
  alternates: { canonical: `https://${SITE.domain}/usa/advisory` },
};

export default function AdvisoryPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Advisory</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Commercial Real Estate Advisory
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest acts as an independent adviser across the commercial real
            estate lifecycle — from acquisition and portfolio strategy to
            disposition and valuation. Every engagement is structured around a
            clearly defined mandate and executed with institutional discipline.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <a
            href="/usa/advisory/acquisition"
            className="group rounded-2xl border border-[#E8E6E1] bg-white p-8 transition-all hover:border-[#B8956B] hover:shadow-lg"
          >
            <h3 className="font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B]">
              Acquisition Advisory
            </h3>
            <p className="mt-3 text-[#8B8680]">
              End-to-end acquisition support — from mandate definition and
              sourcing through underwriting, negotiation, and closing.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B8956B]">
              Learn more <span aria-hidden="true">→</span>
            </span>
          </a>
          <a
            href="/usa/advisory/disposition"
            className="group rounded-2xl border border-[#E8E6E1] bg-white p-8 transition-all hover:border-[#B8956B] hover:shadow-lg"
          >
            <h3 className="font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B]">
              Disposition Advisory
            </h3>
            <p className="mt-3 text-[#8B8680]">
              Strategic disposition advisory — positioning, buyer identification,
              marketing, and negotiation to maximize outcomes for sellers.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B8956B]">
              Learn more <span aria-hidden="true">→</span>
            </span>
          </a>
          <a
            href="/usa/advisory/portfolio"
            className="group rounded-2xl border border-[#E8E6E1] bg-white p-8 transition-all hover:border-[#B8956B] hover:shadow-lg"
          >
            <h3 className="font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B]">
              Portfolio Advisory
            </h3>
            <p className="mt-3 text-[#8B8680]">
              Portfolio-level strategy — acquisition and disposition sequencing,
              asset allocation, and portfolio optimization for institutional
              owners.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B8956B]">
              Learn more <span aria-hidden="true">→</span>
            </span>
          </a>
          <a
            href="/usa/advisory/strategy"
            className="group rounded-2xl border border-[#E8E6E1] bg-white p-8 transition-all hover:border-[#B8956B] hover:shadow-lg"
          >
            <h3 className="font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B]">
              Strategy
            </h3>
            <p className="mt-3 text-[#8B8680]">
              Market entry, expansion, and strategic positioning — helping
              investors and owners define and execute their U.S. CRE strategy.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B8956B]">
              Learn more <span aria-hidden="true">→</span>
            </span>
          </a>
        </div>
      </Section>

      <Section className="py-20 bg-[#FAF9F6]">
        <SectionHeading
          eyebrow="Valuation"
          title="Independent valuation and underwriting"
          description="Murivest provides independent valuation support for acquisition, disposition, financing, and portfolio reporting purposes."
        />
        <div className="mt-8">
          <a
            href="/usa/advisory/valuation"
            className="inline-flex items-center gap-2 rounded-lg bg-[#1B4332] px-6 py-3 text-sm font-semibold text-white hover:bg-[#B8956B]"
          >
            Valuation Advisory <span aria-hidden="true">→</span>
          </a>
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
