import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Investment Theses — USA Commercial Real Estate Research | Murivest",
  description:
    "Murivest investment theses provide deep-dive analysis of specific asset classes, strategies, and markets — grounded in underwriting and market fundamentals.",
  alternates: { canonical: `https://${SITE.domain}/usa/research/investment-theses"` },
};

export default function InvestmentThesesPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Investment Theses</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Deep-Dive Investment Theses
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest investment theses provide rigorous analysis of specific
            asset classes, strategies, and markets — grounded in underwriting,
            market fundamentals, and institutional investment discipline.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <div className="rounded-2xl border border-[#E8E6E1] bg-[#FAF9F6] p-12 text-center">
          <p className="font-serif text-2xl text-[#B8956B]">
            Investment theses will be published here as they become available.
          </p>
          <p className="mt-4 text-[#8B8680]">
            Murivest Research publishes investment theses on U.S. CRE asset
            classes, strategies, and markets. To receive notifications when new
            theses are published, please request a research subscription or
            define your investment criteria.
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

