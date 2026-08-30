import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Handshake, FileSearch, ShieldCheck } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Capital Introduction  -  U.S. Commercial Real Estate",
  description:
    "Targeted capital introduction for U.S. commercial real estate sponsors  -  connecting qualified sponsors with a curated universe of equity and debt providers through relationship-led, mandate-matched outreach.",
  alternates: { canonical: `https://${SITE.domain}/usa/capital/capital-introduction` },
  openGraph: {
    title: "Capital Introduction  -  U.S. Commercial Real Estate",
    description:
      "Relationship-led capital introduction connecting sponsors with qualified U.S. CRE capital providers.",
    url: `https://${SITE.domain}/usa/capital/capital-introduction`,
  },
};

const PROCESS = [
  {
    icon: FileSearch,
    title: "Mandate Qualification",
    description:
      "We understand the asset, the business plan, the required capital, and the profile of provider that fits  -  before any introduction is made.",
  },
  {
    icon: Users,
    title: "Curated Provider Matching",
    description:
      "We engage a targeted universe of equity and debt sources whose mandates align with the opportunity  -  not a broad, undifferentiated blast.",
  },
  {
    icon: Handshake,
    title: "Relationship-Led Outreach",
    description:
      "Introductions are made on the basis of standing relationships and credibility, which materially improves response and term quality.",
  },
  {
    icon: ShieldCheck,
    title: "Process & Diligence Support",
    description:
      "We prepare institutional-grade materials and manage the diligence dialogue so the introduction converts into a term, not just a conversation.",
  },
];

export default function CapitalIntroductionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Capital Introduction",
    serviceType: "Capital introduction and sourcing",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: `https://${SITE.domain}/usa`,
    },
    areaServed: "US",
    description:
      "Relationship-led capital introduction connecting U.S. commercial real estate sponsors with qualified equity and debt providers.",
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
              Capital  |  Introduction
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Capital introduction built on relationships, not a database
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Murivest connects qualified sponsors with a curated universe of
              equity and debt providers across U.S. commercial real estate.
              Because our outreach is relationship-led and mandate-matched, the
              introductions we make carry credibility  -  and convert at a higher
              rate than cold capital searches.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/contact"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Request Capital Introduction
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
          eyebrow="Our Process"
          title="Introduction as a disciplined, qualified exercise"
          description="A capital introduction only creates value when the right provider meets the right mandate. We qualify both before the introduction is made."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step) => (
            <div
              key={step.title}
              className="rounded-xl border border-[#E8E6E1] bg-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1B4332] text-gold-400">
                <step.icon size={22} />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-[#2C2C2C]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 bg-[#FAF9F6]">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Why Relationship-Led</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#2C2C2C] sm:text-4xl">
              Credibility is the scarce input in capital sourcing
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#8B8680]">
              Capital providers are inundated with opportunities. What earns
              attention is not volume but relevance and endorsement. Our
              introductions are made on the basis of a standing relationship and a
              mandate we have already qualified  -  which is why the conversations
              that result are serious ones.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#8B8680]">
              For sponsors, this compresses the time from first conversation to
              term sheet, and improves the quality of the terms themselves.
            </p>
          </div>
          <div className="rounded-xl border border-[#E8E6E1] bg-white p-8">
            <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
              What we prepare before introducing
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#8B8680]">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Institutional-grade investment memo and model.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Clear capital requirement and structured terms.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Target provider profile matched to the mandate.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Diligence data room ready for qualified parties.
              </li>
            </ul>
            <Link
              href="/usa/capital/capital-advisory"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#B8956B] transition-colors hover:text-[#C9A87C]"
            >
              Structure the ask first
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Adjacent Services"
          title="Introduction sits within the capital practice"
          description="We typically pair introduction with structuring advice and the equity or debt placement that follows."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { label: "Capital Advisory", href: "/usa/capital/capital-advisory" },
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
        title="Get introduced to the right capital"
        description="If you have a qualified mandate and a clear capital requirement, we will match it to providers whose mandates align."
        primaryLabel="Request Capital Introduction"
        secondaryLabel="Explore Capital Advisory"
        secondaryHref="/usa/capital/capital-advisory"
      />
    </>
  );
}
