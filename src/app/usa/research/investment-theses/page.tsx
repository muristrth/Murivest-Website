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
      <section className="bg-[#2C2C2C] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-[#8B7355]">Investment Theses</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Deep-Dive Investment Theses
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#8B7355]">
            Murivest investment theses provide rigorous analysis of specific
            asset classes, strategies, and markets — grounded in underwriting,
            market fundamentals, and institutional investment discipline.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <div className="rounded-2xl border border-[#E5E2DC] bg-[#F8F7F4] p-12 text-center">
          <p className="font-serif text-2xl text-[#8B7355]">
            Investment theses will be published here as they become available.
          </p>
          <p className="mt-4 text-[#5A5A5A]">
            Murivest Research publishes investment theses on U.S. CRE asset
            classes, strategies, and markets. To receive notifications when new
            theses are published, please request a research subscription or
            define your investment criteria.
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

