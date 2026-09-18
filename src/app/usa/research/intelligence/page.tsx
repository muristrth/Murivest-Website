import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Market Intelligence — USA Commercial Real Estate | Murivest",
  description:
    "Murivest market intelligence provides proprietary analysis of U.S. commercial real estate transaction trends, investor mandate trends, and deal-pipeline observations.",
  alternates: { canonical: `https://${SITE.domain}/usa/research/intelligence"` },
};

export default function MarketIntelligencePage() {
  return (
    <>
      <section className="bg-[#2C2C2C] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-[#8B7355]">Market Intelligence</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Proprietary Market Intelligence
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#8B7355]">
            Murivest market intelligence provides proprietary analysis of U.S.
            commercial real estate transaction trends, investor mandate trends,
            asset-class demand signals, and deal-pipeline observations. Our
            intelligence is derived from first-hand market activity and
            institutional relationships.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <div className="rounded-2xl border border-[#E5E2DC] bg-[#F8F7F4] p-12 text-center">
          <p className="font-serif text-2xl text-[#8B7355]">
            Market intelligence reports will be published here as they become
            available.
          </p>
          <p className="mt-4 text-[#5A5A5A]">
            Murivest Research publishes proprietary market intelligence for
            institutional investors. To receive notifications when new
            intelligence is published, please request a research subscription
            or define your investment criteria.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/usa/invest/criteria"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#2C2C2C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#8B7355]"
            >
              Define Your Criteria
            </a>
            <a
              href="/usa/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#E5E2DC] px-6 py-3 text-sm font-semibold text-[#8B7355] hover:border-[#8B7355]"
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

