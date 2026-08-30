import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Institutional Deals — USA Commercial Real Estate | Murivest",
  description:
    "Institutional-grade commercial real estate transactions and portfolio offerings available through Murivest USA for qualified investors.",
  alternates: { canonical: `https://${SITE.domain}/usa/deals/institutional"` },
};

export default function InstitutionalDealsPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Institutional Transactions</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Large-Scale & Portfolio Offerings
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest advises on institutional-quality commercial real estate
            transactions — from single-asset acquisitions to multi-property
            portfolio dispositions — requiring significant equity commitments and
            sophisticated underwriting.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Who This Is For"
          title="Institutional capital and major private investors"
          description="Institutional offerings require defined mandates, disciplined underwriting, and the capacity to execute at scale. Murivest structures these engagements accordingly."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Pension & Sovereign Funds",
              text: "Long-duration capital seeking core and core-plus assets with institutional lease structures and creditworthy tenants.",
            },
            {
              title: "Private Equity Real Estate",
              text: "Fund managers pursuing value-add, opportunistic, and development strategies with defined hold periods and exit horizons.",
            },
            {
              title: "Insurance Companies",
              text: "Capital-intensive buyers seeking long-duration, income-producing commercial real estate matching liability duration.",
            },
            {
              title: "Family Offices",
              text: "Ultra-high-net-worth families and family offices pursuing direct ownership of institutional-quality assets.",
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

