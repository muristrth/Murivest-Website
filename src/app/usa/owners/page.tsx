import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import CTABanner from "../components/CTABanner";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Owners — USA Commercial Real Estate | Murivest",
  description:
    "Murivest supports commercial real estate owners with asset sales, portfolio sales, and recapitalization across the United States.",
  alternates: { canonical: `https://${SITE.domain}/usa/owners"` },
};

export default function OwnersPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Owners</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Owner Representation
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest represents commercial real estate owners in the sale,
            recapitalization, and strategic repositioning of assets and
            portfolios. We act as an intermediary between owners and qualified
            capital — protecting your interests and maximizing outcomes.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          <a
            href="/usa/owners/asset-sales"
            className="group rounded-2xl border border-[#E8E6E1] bg-white p-8 transition-all hover:border-[#B8956B] hover:shadow-lg"
          >
            <h3 className="font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B]">
              Asset Sales
            </h3>
            <p className="mt-3 text-[#8B8680]">
              Strategic sale of individual commercial real estate assets —
              positioning, buyer identification, and negotiation.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B8956B]">
              Learn more <span aria-hidden="true">→</span>
            </span>
          </a>
          <a
            href="/usa/owners/portfolio-sales"
            className="group rounded-2xl border border-[#E8E6E1] bg-white p-8 transition-all hover:border-[#B8956B] hover:shadow-lg"
          >
            <h3 className="font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B]">
              Portfolio Sales
            </h3>
            <p className="mt-3 text-[#8B8680]">
              Multi-asset portfolio dispositions — coordinating across assets,
              markets, and buyers to optimize aggregate outcomes.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B8956B]">
              Learn more <span aria-hidden="true">→</span>
            </span>
          </a>
          <a
            href="/usa/owners/recapitalization"
            className="group rounded-2xl border border-[#E8E6E1] bg-white p-8 transition-all hover:border-[#B8956B] hover:shadow-lg"
          >
            <h3 className="font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B]">
              Recapitalization
            </h3>
            <p className="mt-3 text-[#8B8680]">
              Recapitalization advisory — refinancing, preferred equity, and
              structured capital solutions for owners seeking to optimize their
              capital stack.
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
        secondaryLabel="Submit an Asset"
        secondaryHref="/usa/submit-a-deal"
      />
    </>
  );
}
