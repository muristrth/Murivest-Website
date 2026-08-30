import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import CTABanner from "../components/CTABanner";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Portfolio — USA Commercial Real Estate | Murivest",
  description:
    "Murivest portfolio page provides an overview of current and past commercial real estate mandates, opportunities, and transaction activity across the United States.",
  alternates: { canonical: `https://${SITE.domain}/usa/portfolio"` },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Portfolio</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Mandate Portfolio
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest manages a portfolio of active and completed mandates across
            U.S. commercial real estate markets. Each mandate is structured
            around a clearly defined investment objective and executed with
            institutional underwriting discipline.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Current Focus"
          title="Active mandate categories"
          description="Murivest is currently engaged across a range of mandate types — from acquisition and disposition to capital sourcing and portfolio strategy."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Acquisition",
              text: "Active acquisition mandates across office, industrial, logistics, multifamily, and retail.",
            },
            {
              title: "Disposition",
              text: "Active disposition mandates for owners seeking to monetize commercial real estate assets.",
            },
            {
              title: "Capital Sourcing",
              text: "Active capital sourcing mandates for developers and owners seeking equity and debt financing.",
            },
            {
              title: "Portfolio Strategy",
              text: "Active portfolio advisory mandates for institutional owners optimizing their commercial real estate holdings.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#E8E6E1] bg-white p-6"
            >
              <h3 className="font-serif text-lg font-semibold text-[#2C2C2C]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
                {item.text}
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
