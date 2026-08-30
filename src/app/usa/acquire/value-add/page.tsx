import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Wrench, TrendingUp, Layers, ShieldAlert } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Value-Add Acquisitions — U.S. Commercial Real Estate",
  description:
    "Value-add acquisition advisory for U.S. commercial real estate with a defined improvement thesis — lease-up, repositioning, and capital-expenditure-driven basis recovery.",
  alternates: { canonical: `https://${SITE.domain}/usa/acquire/value-add` },
  openGraph: {
    title: "Value-Add Acquisitions — U.S. Commercial Real Estate",
    description:
      "Value-add acquisition advisory for U.S. commercial real estate with a defined improvement thesis.",
    url: `https://${SITE.domain}/usa/acquire/value-add`,
  },
};

const THESIS = [
  {
    icon: Wrench,
    title: "Physical Repositioning",
    description:
      "Assets where targeted capital expenditure — renovation, re-tenanting, or amenitization — unlocks a step-change in net operating income and basis recovery.",
  },
  {
    icon: TrendingUp,
    title: "Lease-Up & Re-Leasing",
    description:
      "Stabilization of in-place vacancy or near-term rollover through active leasing strategy, often paired with operator or broker relationships we already maintain.",
  },
  {
    icon: Layers,
    title: "Operational Improvement",
    description:
      "Expense restructuring, management transition, or operational realignment that improves yield without relying on market appreciation alone.",
  },
  {
    icon: ShieldAlert,
    title: "Defined Downside",
    description:
      "We underwrite the cost and execution risk of the improvement plan explicitly — the thesis must hold even if the upside is only partially realized.",
  },
];

export default function ValueAddPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Value-Add Acquisition Advisory",
    serviceType: "Value-add buy-side advisory",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: `https://${SITE.domain}/usa`,
    },
    areaServed: "US",
    description:
      "Acquisition advisory for U.S. commercial real estate with a defined value-add improvement thesis, for private equity and private capital mandates.",
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
              Acquire · Value-Add
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Value-add acquisitions where a defined plan — not the market — drives the return
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Value-add returns are earned through execution, not appreciation.
              Murivest sources U.S. commercial real estate with a clear,
              underwritable improvement thesis — physical, operational, or
              leasing-led — and structures the acquisition around the cost and
              risk of delivering it.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/contact"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Discuss a Value-Add Mandate
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/acquire"
                className="flex items-center justify-center rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                All Acquisition Strategies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="The Value-Add Thesis"
          title="Underwriting the plan, not the promise"
          description="A credible value-add deal has a specific, costed, and time-bound path to improved net operating income. We underwrite that path before we underwrite the upside."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {THESIS.map((item) => (
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
            <Eyebrow>Execution Discipline</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#2C2C2C] sm:text-4xl">
              The plan is the asset — so the plan must be defensible
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#8B8680]">
              Value-add is where sourcing and underwriting converge most
              intensely. The entry only works if the improvement plan is
              realistic, costed, and executable by a known team. We pressure-test
              the operator, the budget, and the lease-up assumptions before
              recommending a basis — and we model the return holding the upside
              at a discount.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#8B8680]">
              Capital structure matters here: the right leverage and timeline can
              make or break a value-add return. We coordinate closely with our
              capital advisory practice to align the financing with the execution
              plan.
            </p>
          </div>
          <div className="rounded-xl border border-[#E8E6E1] bg-white p-8">
            <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
              What we evaluate before recommending basis
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#8B8680]">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Costed capital plan with contingency and realistic timeline.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Lease-up or re-leasing assumptions benchmarked to market absorption.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Operator capability and alignment of incentives.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Refinance or exit basis supported by stabilized comparables.
              </li>
            </ul>
            <Link
              href="/usa/capital/equity"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#B8956B] transition-colors hover:text-[#C9A87C]"
            >
              Align the capital structure
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Adjacent Strategies"
          title="Positioning value-add on the risk spectrum"
          description="Value-add sits between stabilized core and opportunistic. Depending on execution risk, a mandate may lean toward either neighbor."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { label: "Stabilized Assets", href: "/usa/acquire/stabilized" },
            { label: "Opportunistic", href: "/usa/acquire/opportunistic" },
            { label: "Off-Market", href: "/usa/acquire/off-market" },
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
        title="Bring us your value-add thesis"
        description="If you have a defined improvement plan, we will source the asset and structure the capital to execute it."
        primaryLabel="Discuss a Value-Add Mandate"
        secondaryLabel="Explore Equity Financing"
        secondaryHref="/usa/capital/equity"
      />
    </>
  );
}
