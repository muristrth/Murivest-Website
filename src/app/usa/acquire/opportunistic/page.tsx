import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, GitBranch, Gauge, ShieldCheck } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Opportunistic Acquisitions — U.S. Commercial Real Estate",
  description:
    "Opportunistic acquisition advisory for complex, time-sensitive, and structurally mispriced U.S. commercial real estate requiring conviction, structuring capability, and execution speed.",
  alternates: { canonical: `https://${SITE.domain}/usa/acquire/opportunistic` },
  openGraph: {
    title: "Opportunistic Acquisitions — U.S. Commercial Real Estate",
    description:
      "Opportunistic acquisition advisory for complex, mispriced U.S. commercial real estate.",
    url: `https://${SITE.domain}/usa/acquire/opportunistic`,
  },
};

const EDGE = [
  {
    icon: Zap,
    title: "Speed & Certainty",
    description:
      "Opportunistic situations reward buyers who can move decisively. We compress diligence and structuring timelines without sacrificing discipline.",
  },
  {
    icon: GitBranch,
    title: "Structural Complexity",
    description:
      "Distressed debt attachments, entitlements, ground leases, or fractured ownership — situations most buyers discount because they cannot price the complexity.",
  },
  {
    icon: Gauge,
    title: "Conviction Pricing",
    description:
      "Where the market applies a wide bid-ask gap, we anchor to fundamental value and structure around it rather than following the consensus.",
  },
  {
    icon: ShieldCheck,
    title: "Downside-First Underwriting",
    description:
      "Higher return targets demand stricter downside testing. We model the worst-case path explicitly before committing capital to the thesis.",
  },
];

export default function OpportunisticPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Opportunistic Acquisition Advisory",
    serviceType: "Opportunistic buy-side advisory",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: `https://${SITE.domain}/usa`,
    },
    areaServed: "US",
    description:
      "Acquisition advisory for complex, time-sensitive, and structurally mispriced U.S. commercial real estate for opportunistic private equity and private capital mandates.",
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
              Acquire · Opportunistic
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Opportunistic acquisitions for capital willing to price complexity others avoid
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Opportunistic returns are generated where others see disorder — time
              pressure, structural complexity, or mispricing born of forced
              circumstances. Murivest sources these situations and brings the
              conviction, structuring capability, and execution speed required to
              capture them.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/contact"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Discuss an Opportunistic Mandate
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
          eyebrow="The Opportunistic Edge"
          title="Where conviction meets execution"
          description="Opportunistic acquisition rewards buyers who can understand a situation faster and structure around it more creatively than the field. That is our function."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {EDGE.map((item) => (
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
            <Eyebrow>How We Operate</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#2C2C2C] sm:text-4xl">
              Discipline is what makes aggression safe
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#8B8680]">
              Opportunistic does not mean indiscriminate. The highest-return
              situations are also the most capable of destroying capital when
              underwritten loosely. We bring the same downside-first culture to
              opportunistic deals that we bring to core — applied with the speed
              and structuring creativity the situation demands.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#8B8680]">
              Capital readiness is the differentiator. We coordinate with our
              capital introduction and equity practices so that when a situation
              appears, the capital is pre-positioned rather than still being
              sourced.
            </p>
          </div>
          <div className="rounded-xl border border-[#E8E6E1] bg-white p-8">
            <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
              Situations we pursue
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#8B8680]">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Time-sensitive sales and negotiated resolutions.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Structurally complex ownership or capital stacks.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Assets requiring recapitalization or repositioning capital.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Mispriced assets in dislocated or transitional submarkets.
              </li>
            </ul>
            <Link
              href="/usa/capital/capital-introduction"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#B8956B] transition-colors hover:text-[#C9A87C]"
            >
              Pre-position your capital
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Adjacent Strategies"
          title="Opportunistic intersects with distressed and value-add"
          description="Many opportunistic mandates overlap with distressed situations or value-add execution. We map the right framing for your capital."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { label: "Distressed", href: "/usa/acquire/distressed" },
            { label: "Value-Add", href: "/usa/acquire/value-add" },
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
        title="Move on opportunistic situations with conviction"
        description="If your mandate can price complexity and act with speed, we will source and structure around it."
        primaryLabel="Discuss an Opportunistic Mandate"
        secondaryLabel="Pre-Position Capital"
        secondaryHref="/usa/capital/capital-introduction"
      />
    </>
  );
}
