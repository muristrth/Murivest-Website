import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Sector Research — USA Commercial Real Estate | Murivest",
  description:
    "Murivest sector research provides in-depth analysis of U.S. commercial real estate sectors — office, industrial, logistics, multifamily, retail, data centers, and specialty assets.",
  alternates: { canonical: `https://${SITE.domain}/usa/research/sector-research"` },
};

export default function SectorResearchPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Sector Research</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Sector Analysis
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest sector research provides in-depth analysis of U.S.
            commercial real estate sectors — covering market fundamentals,
            investment characteristics, risk factors, and underwriting
            considerations for each asset class.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <div className="rounded-2xl border border-[#E8E6E1] bg-[#FAF9F6] p-12 text-center">
          <p className="font-serif text-2xl text-[#B8956B]">
            Sector research will be published here as it becomes available.
          </p>
          <p className="mt-4 text-[#8B8680]">
            Murivest Research publishes sector-specific analysis on U.S. CRE
            asset classes. To receive notifications when new research is
            published, please request a research subscription or define your
            investment criteria.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/usa/invest/criteria"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1B4332] px-6 py-3 text-sm font-semibold text-white hover:bg-[#B8956B]"
            >
              Define Your Criteria
            </a>
            <a
              href="/usa/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#E8E6E1] px-6 py-3 text-sm font-semibold text-[#B8956B] hover:border-[#B8956B]"
            >
              Contact Research Team
            </a>
          </div>
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

