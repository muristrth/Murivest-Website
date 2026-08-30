import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Recapitalization — USA Commercial Real Estate | Murivest",
  description:
    "Murivest provides recapitalization advisory for commercial real estate owners seeking to optimize their capital stack through refinancing, preferred equity, and structured capital solutions.",
  alternates: { canonical: `https://${SITE.domain}/usa/owners/recapitalization"` },
};

export default function RecapitalizationPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Recapitalization</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Capital Stack Optimization
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest advises owners on recapitalization — optimizing the
            capital stack through refinancing, preferred equity, mezzanine debt,
            and structured capital solutions. We connect owners with the right
            capital providers and negotiate favorable terms.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="What We Do"
          title="Recapitalization advisory for owners"
          description="We help owners optimize their capital stack — reducing cost of capital, extending maturities, and accessing equity without forced sales."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Capital Stack Analysis",
              text: "We analyze existing capital structures — identifying opportunities to reduce cost of capital, extend maturities, or restructure debt and equity.",
            },
            {
              title: "Refinancing",
              text: "We advise on refinancing strategy — sourcing new debt, negotiating terms, and managing the transition from existing financing.",
            },
            {
              title: "Preferred Equity",
              text: "We structure preferred equity solutions — providing owners with flexible capital that bridges the gap between debt and common equity.",
            },
            {
              title: "Mezzanine Debt",
              text: "We source mezzanine debt for owners seeking to maximize leverage without diluting equity — connecting borrowers with specialized mezzanine lenders.",
            },
            {
              title: "Capital Partner Introductions",
              text: "We introduce owners to equity and debt capital partners — institutional investors, private debt funds, and family offices — through our institutional relationships.",
            },
            {
              title: "Sale-Leaseback",
              text: "We advise on sale-leaseback transactions — allowing owners to unlock equity in owner-occupied real estate while retaining operational control.",
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
        title="Engage Murivest on your recapitalization"
        description="Whether acquiring, disposing, or sourcing capital, our team is ready to advise. Start with a confidential consultation."
        primaryLabel="Request a Mandate"
        primaryHref="/usa/contact"
      />
    </>
  );
}

