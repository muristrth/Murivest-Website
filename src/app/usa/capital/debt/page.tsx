import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Landmark, Scale, ShieldCheck, Gauge } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Debt Financing  -  U.S. Commercial Real Estate",
  description:
    "Debt financing for U.S. commercial real estate  -  senior, mezzanine, and structured debt placement matched to the asset, the business plan, and the sponsor's return profile.",
  alternates: { canonical: `https://${SITE.domain}/usa/capital/debt` },
  openGraph: {
    title: "Debt Financing  -  U.S. Commercial Real Estate",
    description:
      "Senior, mezzanine, and structured debt placement for U.S. commercial real estate.",
    url: `https://${SITE.domain}/usa/capital/debt`,
  },
};

const PRODUCTS = [
  {
    icon: Landmark,
    title: "Senior Debt",
    description:
      "First-mortgage financing placed with balance-sheet lenders, debt funds, and agency sources  -  structured to the asset's cash flow and the sponsor's hold period.",
  },
  {
    icon: Scale,
    title: "Mezzanine & Preferred",
    description:
      "Subordinate debt and preferred structures that augment proceeds and optimize the blended cost of capital without diluting common equity control.",
  },
  {
    icon: Gauge,
    title: "Structured & Bridge",
    description:
      "Transitional and bridge facilities for value-add, repositioning, and construction  -  with terms calibrated to the execution timeline.",
  },
  {
    icon: ShieldCheck,
    title: "Independent Placement",
    description:
      "We run a competitive, confidential process across lenders we know  -  without a proprietary book compelling a single outlet.",
  },
];

export default function DebtPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Debt Financing",
    serviceType: "Debt placement and structuring",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: `https://${SITE.domain}/usa`,
    },
    areaServed: "US",
    description:
      "Senior, mezzanine, and structured debt placement for U.S. commercial real estate, matched to the asset and the sponsor's return profile.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-[#1B4332] py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-ink-950 to-ink-900" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">
              Capital  |  Debt
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Debt financing placed on the terms the asset  -  not the lender  -  deserves
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Murivest places senior, mezzanine, and structured debt for U.S.
              commercial real estate  -  matched to the asset, the business plan, and
              the sponsor's return profile. We run a competitive, confidential
              process across the lender universe so the terms reflect the
              opportunity, not a single outlet's appetite.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/contact"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Discuss Debt Financing
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/capital"
                className="flex items-center justify-center rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                All Capital Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Debt Products"
          title="The right facility for the right phase"
          description="Debt is a tool with many forms. We match the instrument  -  senior, mezzanine, bridge, or structured  -  to where the asset is in its lifecycle and what the business plan requires."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#E8E6E1] bg-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1B4332] text-gold-400">
                <item.icon size={22} />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-[#2C2C2C]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 bg-[#FAF9F6]">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Placement Discipline</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#2C2C2C] sm:text-4xl">
              A competitive process protects the terms
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#8B8680]">
              The cost and flexibility of debt are determined by the process that
              produces them. We run a structured, confidential lender process  - 
              qualifying the asset story, preparing institutional materials, and
              managing competing term sheets so the sponsor captures the best
              available execution rather than the first offered.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#8B8680]">
              We also advise on the debt versus equity split as part of the overall
              capital structure, ensuring the leverage supports  -  rather than
              constrains  -  the business plan.
            </p>
          </div>
          <div className="rounded-xl border border-[#E8E6E1] bg-white p-8">
            <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
              What we manage in a debt placement
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#8B8680]">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Lender universe selection matched to the asset profile.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Institutional underwriting package and model.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Term sheet comparison across rate, covenants, and flexibility.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Negotiation and closing coordination.
              </li>
            </ul>
            <Link
              href="/usa/capital/capital-advisory"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#B8956B] transition-colors hover:text-[#C9A87C]"
            >
              Optimize the full stack
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Adjacent Services"
          title="Debt within the capital stack"
          description="Debt is typically paired with equity and structuring advice to complete the capitalization."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { label: "Equity Financing", href: "/usa/capital/equity" },
            { label: "Capital Advisory", href: "/usa/capital/capital-advisory" },
            { label: "Recapitalization", href: "/usa/capital/recapitalization" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between rounded-xl border border-[#E8E6E1] bg-white p-5 transition-all hover:border-[#B8956B] hover:shadow-md"
            >
              <span className="font-serif text-lg font-semibold text-[#2C2C2C] group-hover:text-[#B8956B] transition-colors">
                {item.label}
              </span>
              <ArrowRight
                size={18}
                className="text-[#FAF9F6] transition-all group-hover:translate-x-1 group-hover:text-[#C9A87C]"
              />
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Place your debt on the right terms"
        description="If you are financing an acquisition, development, or recapitalization, we will run a competitive process across the lender universe."
        primaryLabel="Discuss Debt Financing"
        secondaryLabel="Explore Equity Financing"
        secondaryHref="/usa/capital/equity"
      />
    </>
  );
}
