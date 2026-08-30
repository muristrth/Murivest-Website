import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import CTABanner from "../components/CTABanner";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Brokerage — USA Commercial Real Estate | Murivest",
  description:
    "Murivest provides brokerage-related services for commercial real estate acquisition, disposition, and investment sales across the United States, operating through licensed broker relationships where applicable.",
  alternates: { canonical: `https://${SITE.domain}/usa/brokerage"` },
};

export default function BrokeragePage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Brokerage</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Brokerage Services
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest provides brokerage-related services for commercial real
            estate acquisition, disposition, and investment sales across the
            United States. Where required, we operate through licensed broker
            relationships, co-brokerage arrangements, and referral relationships
            to ensure full compliance with jurisdictional requirements.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <a
            href="/usa/brokerage/acquisition"
            className="group rounded-2xl border border-[#E8E6E1] bg-white p-8 transition-all hover:border-[#B8956B] hover:shadow-lg"
          >
            <h3 className="font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B]">
              Acquisition Brokerage
            </h3>
            <p className="mt-3 text-[#8B8680]">
              Buyer representation for commercial real estate acquisitions — from
              mandate definition through LOI negotiation and closing coordination.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B8956B]">
              Learn more <span aria-hidden="true">→</span>
            </span>
          </a>
          <a
            href="/usa/brokerage/disposition"
            className="group rounded-2xl border border-[#E8E6E1] bg-white p-8 transition-all hover:border-[#B8956B] hover:shadow-lg"
          >
            <h3 className="font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B]">
              Disposition Brokerage
            </h3>
            <p className="mt-3 text-[#8B8680]">
              Seller representation for commercial real estate dispositions —
              positioning, marketing, buyer outreach, and negotiation.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B8956B]">
              Learn more <span aria-hidden="true">→</span>
            </span>
          </a>
          <a
            href="/usa/brokerage/investment-sales"
            className="group rounded-2xl border border-[#E8E6E1] bg-white p-8 transition-all hover:border-[#B8956B] hover:shadow-lg lg:col-span-2"
          >
            <h3 className="font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B]">
              Investment Sales
            </h3>
            <p className="mt-3 text-[#8B8680]">
              Institutional investment sales — representing sellers of
              commercial real estate assets to institutional buyers, private
              equity, and family offices. We operate through licensed broker
              relationships where required.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B8956B]">
              Learn more <span aria-hidden="true">→</span>
            </span>
          </a>
        </div>
      </Section>

      <CTABanner
        title="Engage Murivest on your next transaction"
        description="Whether acquiring, disposing, or sourcing capital, our team is ready to advise. Start with a confidential consultation."
        primaryLabel="Request a Mandate"
        primaryHref="/usa/contact"
      />
    </>
  );
}
