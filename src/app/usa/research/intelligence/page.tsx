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
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Market Intelligence</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Proprietary Market Intelligence
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest market intelligence provides proprietary analysis of U.S.
            commercial real estate transaction trends, investor mandate trends,
            asset-class demand signals, and deal-pipeline observations. Our
            intelligence is derived from first-hand market activity and
            institutional relationships.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <div className="rounded-2xl border border-[#E8E6E1] bg-[#FAF9F6] p-12 text-center">
          <p className="font-serif text-2xl text-[#B8956B]">
            Market intelligence reports will be published here as they become
            available.
          </p>
          <p className="mt-4 text-[#8B8680]">
            Murivest Research publishes proprietary market intelligence for
            institutional investors. To receive notifications when new
            intelligence is published, please request a research subscription
            or define your investment criteria.
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

