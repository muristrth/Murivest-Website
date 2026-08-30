import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Scale, Layers, GitBranch, ShieldCheck } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Capital Advisory - U.S. Commercial Real Estate",
  description:
    "Independent capital advisory for U.S. commercial real estate - structuring the optimal equity and debt stack against the asset business plan and sponsor objectives, without a balance sheet to push.",
  alternates: { canonical: `https://${SITE.domain}/usa/capital/capital-advisory` },
  openGraph: {
    title: "Capital Advisory - U.S. Commercial Real Estate",
    description:
      "Independent capital structuring advisory for U.S. commercial real estate sponsors and investors.",
    url: `https://${SITE.domain}/usa/capital/capital-advisory`,
  },
};

const FRAMEWORK = [
  {
    icon: Scale,
    title: "Objective Stack Design",
    description:
      "We model the trade-off between equity, debt, and hybrid capital against the business plan, the hold period, and the sponsor's return objectives - with no product to favor.",
  },
  {
    icon: Layers,
    title: "Structure Engineering",
    description:
      "Preferred equity, JV waterfalls, mezzanine, and senior debt are structured to allocate risk and return deliberately, not by convention.",
  },
  {
    icon: GitBranch,
    title: "Scenario & Risk Mapping",
    description:
      "We stress the structure across rate, occupancy, and timeline scenarios so the sponsor understands the behavior of the capital under stress before committing.",
  },
  {
    icon: ShieldCheck,
    title: "Independent Recommendation",
    description:
      "Because we do not lend or invest our own capital, the advisory is aligned to the asset and the sponsor - not to placing a specific product.",
  },
];

export default function CapitalAdvisoryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Capital Advisory",
    serviceType: "Capital structuring advisory",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: `https://${SITE.domain}/usa`,
    },
    areaServed: "US",
    description:
      "Independent capital advisory and capital stack structuring for U.S. commercial real estate sponsors and investors.",
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
              Capital | Advisory
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Capital advisory that structures the stack around the asset - not the other way around
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Murivest provides independent capital structuring advice for U.S.
              commercial real estate - designing the optimal mix of equity, debt,
              and hybrid capital against the business plan and the sponsor's
              objectives. We do not lend our own capital, so the recommendation is
              dictated by the deal, not by a balance sheet.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/contact"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Discuss Capital Advisory
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
          eyebrow="Our Framework"
          title="Structure is a decision, not a default"
          description="The capital stack determines who earns what, who bears which risk, and how the asset behaves under stress. We treat that as a deliberate design problem rather than a conventional template."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FRAMEWORK.map((item) => (
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
            <Eyebrow>Why Independent Advice</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#2C2C2C] sm:text-4xl">
              No balance sheet means no conflict
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#8B8680]">
              Advisors who lend their own capital are incentivized to place that
              capital, often at the expense of structure quality. By remaining
              independent, Murivest advises on the structure that best serves the
              asset and the sponsor - and then sources the capital to match it
              through our introduction practice.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#8B8680]">
              The result is a capital stack designed for the business plan, with
              risk and return allocated intentionally and documented to the
              standard institutional investors expect.
            </p>
          </div>
          <div className="rounded-xl border border-[#E8E6E1] bg-white p-8">
            <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
              What independent advisory covers
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#8B8680]">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Equity versus debt optimization modeling.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                JV and preferred-equity waterfall design.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Senior, mezzanine, and structured debt comparison.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Stress testing across rate, occupancy, and timeline.
              </li>
            </ul>
            <Link
              href="/usa/capital/capital-introduction"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#B8956B] transition-colors hover:text-[#C9A87C]"
            >
              Move to capital introduction
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Adjacent Services"
          title="Advisory leads to sourcing and structuring"
          description="Once the optimal structure is defined, we introduce the capital and document the equity and debt to execute it."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { label: "Capital Introduction", href: "/usa/capital/capital-introduction" },
            { label: "Equity Financing", href: "/usa/capital/equity" },
            { label: "Debt Financing", href: "/usa/capital/debt" },
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
        title="Design the right capital structure"
        description="If you are weighing how to capitalize an asset or fund, we will advise on the optimal stack - independently."
        primaryLabel="Discuss Capital Advisory"
        secondaryLabel="Explore Equity Financing"
        secondaryHref="/usa/capital/equity"
      />
    </>
  );
}
