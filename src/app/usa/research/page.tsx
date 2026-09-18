import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import CTABanner from "../components/CTABanner";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Research — USA Commercial Real Estate Intelligence | Murivest",
  description:
    "Murivest Research publishes proprietary analysis of U.S. commercial real estate markets, investment theses, sector research, and market outlook for institutional investors.",
  alternates: { canonical: `https://${SITE.domain}/usa/research` },
};

export default function ResearchPage() {
  return (
    <>
      <section className="bg-[#2C2C2C] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-[#8B7355]">Research</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Murivest Research
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#8B7355]">
            Proprietary analysis of U.S. commercial real estate market
            conditions, investment theses, sector dynamics, and macroeconomic
            factors. Our research is grounded in first-hand market intelligence
            and institutional underwriting discipline.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          <a
            href="/usa/research/market-reports"
            className="group rounded-2xl border border-[#E5E2DC] bg-white p-8 transition-all hover:border-[#8B7355] hover:shadow-lg"
          >
            <h3 className="font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#8B7355]">
              Market Reports
            </h3>
            <p className="mt-3 text-[#5A5A5A]">
              Comprehensive market reports on U.S. CRE markets — covering
              supply, demand, rents, cap rates, and transaction activity.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#8B7355]">
              View reports <span aria-hidden="true">→</span>
            </span>
          </a>
          <a
            href="/usa/research/investment-theses"
            className="group rounded-2xl border border-[#E5E2DC] bg-white p-8 transition-all hover:border-[#8B7355] hover:shadow-lg"
          >
            <h3 className="font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#8B7355]">
              Investment Theses
            </h3>
            <p className="mt-3 text-[#5A5A5A]">
              Deep-dive investment theses on specific asset classes, strategies,
              and markets — grounded in underwriting and market fundamentals.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#8B7355]">
              View theses <span aria-hidden="true">→</span>
            </span>
          </a>
          <a
            href="/usa/research/sector-research"
            className="group rounded-2xl border border-[#E5E2DC] bg-white p-8 transition-all hover:border-[#8B7355] hover:shadow-lg"
          >
            <h3 className="font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#8B7355]">
              Sector Research
            </h3>
            <p className="mt-3 text-[#5A5A5A]">
              Sector-specific research — office, industrial, logistics,
              multifamily, retail, data centers, and specialty assets.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#8B7355]">
              View research <span aria-hidden="true">→</span>
            </span>
          </a>
          <a
            href="/usa/research/market-outlook"
            className="group rounded-2xl border border-[#E5E2DC] bg-white p-8 transition-all hover:border-[#8B7355] hover:shadow-lg"
          >
            <h3 className="font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#8B7355]">
              Market Outlook
            </h3>
            <p className="mt-3 text-[#5A5A5A]">
              Forward-looking market outlooks — economic forecasts, interest rate
              analysis, and CRE market projections for institutional investors.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#8B7355]">
              View outlooks <span aria-hidden="true">→</span>
            </span>
          </a>
          <a
            href="/usa/research/intelligence"
            className="group rounded-2xl border border-[#E5E2DC] bg-white p-8 transition-all hover:border-[#8B7355] hover:shadow-lg lg:col-span-2"
          >
            <h3 className="font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#8B7355]">
              Market Intelligence
            </h3>
            <p className="mt-3 text-[#5A5A5A]">
              Proprietary market intelligence — transaction observations,
              investor mandate trends, asset-class demand signals, and
              deal-pipeline intelligence for institutional investors.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#8B7355]">
              View intelligence <span aria-hidden="true">→</span>
            </span>
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
