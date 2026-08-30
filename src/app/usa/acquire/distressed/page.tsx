import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertTriangle, FileSearch, Scale, ShieldCheck } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Distressed Acquisitions — U.S. Commercial Real Estate",
  description:
    "Distressed acquisition advisory for U.S. commercial real estate — non-performing loans, workouts, and recapitalizations approached with diligence and creditor-level discipline.",
  alternates: { canonical: `https://${SITE.domain}/usa/acquire/distressed` },
  openGraph: {
    title: "Distressed Acquisitions — U.S. Commercial Real Estate",
    description:
      "Distressed acquisition advisory for U.S. commercial real estate — NPLs, workouts, and recapitalizations.",
    url: `https://${SITE.domain}/usa/acquire/distressed`,
  },
};

const FRAMEWORK = [
  {
    icon: FileSearch,
    title: "Loan-Level Diligence",
    description:
      "Distressed value lives in the documents. We analyze the note, collateral, intercreditor terms, and borrower behavior before forming a view on recovery.",
  },
  {
    icon: Scale,
    title: "Workout & Resolution Pathways",
    description:
      "We assess the full range of outcomes — modification, deed-in-lieu, foreclosure, or recapitalization — and the time and cost each implies.",
  },
  {
    icon: AlertTriangle,
    title: "Hidden Liability Mapping",
    description:
      "Environmental, structural, title, and contingent liabilities are surfaced early. In distressed, what you miss is what erodes the basis.",
  },
  {
    icon: ShieldCheck,
    title: "Creditor-Level Discipline",
    description:
      "We underwrite to a recovery value with explicit margin of safety, treating every assumption as contestable until verified.",
  },
];

export default function DistressedPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Distressed Acquisition Advisory",
    serviceType: "Distressed buy-side advisory",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: `https://${SITE.domain}/usa`,
    },
    areaServed: "US",
    description:
      "Acquisition advisory for distressed U.S. commercial real estate — non-performing loans, workouts, and recapitalizations — approached with creditor-level diligence.",
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
              Acquire · Distressed
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Distressed acquisitions underwritten with creditor-level discipline
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Distressed real estate — non-performing loans, workouts, and
              recapitalizations — rewards investors who understand recovery
              value rather than listed price. Murivest approaches every distressed
              mandate with loan-level diligence and a clear-eyed view of the
              liabilities others overlook.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/contact"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Discuss a Distressed Mandate
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
          eyebrow="Our Framework"
          title="Recovery value is earned through diligence"
          description="In distressed situations, the listed price is a starting point, not a conclusion. We build the view from the documents up — collateral, covenants, and counterparty behavior."
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
            <Eyebrow>What We Avoid</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#2C2C2C] sm:text-4xl">
              Distressed is not a synonym for cheap
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#8B8680]">
              The risk in distressed acquisition is not the discount — it is the
              unknown. Capital is lost on unresolved title, undisclosed
              environmental conditions, entangled ownership, and overly
              optimistic timelines to resolution. We treat every assumption as
              contestable until verified, and we walk away from deals where the
              margin of safety cannot be demonstrated.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#8B8680]">
              Where a recapitalization is the cleaner path than a foreclosure, we
              coordinate with our capital practice to structure it — often the
              most capital-efficient route to control.
            </p>
          </div>
          <div className="rounded-xl border border-[#E8E6E1] bg-white p-8">
            <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
              Distressed instruments we evaluate
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#8B8680]">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Non-performing and sub-performing loans (NPLs / SPLs).
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                REO and lender-controlled assets.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Discounted payoffs and note acquisitions.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Recapitalizations of over-levered or stalled assets.
              </li>
            </ul>
            <Link
              href="/usa/capital/recapitalization"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#B8956B] transition-colors hover:text-[#C9A87C]"
            >
              Explore recapitalization
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Adjacent Strategies"
          title="Distressed often overlaps with opportunistic and recapitalization"
          description="The line between these mandates is frequently structural. We help define the right framing for your capital."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { label: "Opportunistic", href: "/usa/acquire/opportunistic" },
            { label: "Recapitalization", href: "/usa/capital/recapitalization" },
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
        title="Underwrite distressed with creditor-level rigor"
        description="If your mandate targets recovery value, we will diligence the note, the collateral, and the path to resolution."
        primaryLabel="Discuss a Distressed Mandate"
        secondaryLabel="Explore Recapitalization"
        secondaryHref="/usa/capital/recapitalization"
      />
    </>
  );
}
