import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Featured Deals — USA Commercial Real Estate | Murivest",
  description:
    "Featured commercial real estate opportunities available through Murivest USA. Off-market and pre-market offerings for qualified institutional investors.",
  alternates: { canonical: `https://${SITE.domain}/usa/deals/featured` },
};

export default function FeaturedDealsPage() {
  return (
    <>
      <section className="bg-[#2C2C2C] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-[#8B7355]">Featured Opportunities</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Selected Mandate Offerings
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#8B7355]">
            A curated selection of active engagements. Additional opportunities
            are available to qualified investors on a confidential basis.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <div className="rounded-2xl border border-[#E5E2DC] bg-[#F8F7F4] p-12 text-center">
          <p className="font-serif text-2xl text-[#8B7355]">
            Featured offerings will be published here as they become available.
          </p>
          <p className="mt-4 text-[#5A5A5A]">
            To receive direct presentations of active mandates, please define
            your investment criteria or request a confidential consultation.
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
              Request a Consultation
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

