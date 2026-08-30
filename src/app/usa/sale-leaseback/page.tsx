import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import CTABanner from "../components/CTABanner";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Sale-Leaseback — USA Commercial Real Estate | Murivest",
  description:
    "Murivest advises on sale-leaseback transactions for commercial real estate owners seeking to unlock equity while retaining operational control of their properties.",
  alternates: { canonical: `https://${SITE.domain}/usa/sale-leaseback"` },
};

export default function SaleLeasebackPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Sale-Leaseback</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Sale-Leaseback Advisory
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest advises on sale-leaseback transactions — allowing
            owner-occupiers to unlock equity in their real estate while
            retaining operational control through a long-term lease. We source
            buyers, negotiate terms, and structure transactions that align with
            owner objectives.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="How It Works"
          title="Unlock equity without displacement"
          description="Sale-leaseback allows owner-occupiers to monetize their real estate while retaining operational control — converting fixed real estate assets into liquid capital."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Asset Valuation",
              text: "We value the owner-occupied property — establishing fair market value and understanding the investment characteristics that will attract institutional buyers.",
            },
            {
              title: "Buyer Identification",
              text: "We identify sale-leaseback buyers — net-lease investors, REITs, and institutional capital — seeking long-term, creditworthy lease streams.",
            },
            {
              title: "Lease Structuring",
              text: "We advise on lease terms — rent, escalations, lease term, renewal options, and tenant improvement responsibilities — balancing owner and buyer objectives.",
            },
            {
              title: "Transaction Execution",
              text: "We manage the full transaction process — from LOI through due diligence, documentation, and closing — ensuring a smooth execution.",
            },
            {
              title: "Capital Deployment",
              text: "We advise owners on deploying sale-leaseback proceeds — into core business operations, acquisitions, or other investment opportunities.",
            },
            {
              title: "Portfolio Strategy",
              text: "We help owners develop sale-leaseback strategies across portfolios — identifying which assets to monetize, retain, or reposition.",
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
        title="Engage Murivest on your sale-leaseback"
        description="Whether acquiring, disposing, or sourcing capital, our team is ready to advise. Start with a confidential consultation."
        primaryLabel="Request a Mandate"
        primaryHref="/usa/contact"
        secondaryLabel="Submit an Asset"
        secondaryHref="/usa/submit-a-deal"
      />
    </>
  );
}
