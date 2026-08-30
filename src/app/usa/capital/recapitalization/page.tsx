import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, RefreshCw, ShieldCheck, Layers, Scale } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Recapitalization  -  U.S. Commercial Real Estate",
  description:
    "Recapitalization advisory for U.S. commercial real estate  -  restructuring ownership and the capital stack to unlock value, manage maturity, or reposition an asset for its next phase.",
  alternates: { canonical: `https://${SITE.domain}/usa/capital/recapitalization` },
  openGraph: {
    title: "Recapitalization  -  U.S. Commercial Real Estate",
    description:
      "Capital stack restructuring and recapitalization advisory for U.S. commercial real estate.",
    url: `https://${SITE.domain}/usa/capital/recapitalization`,
  },
};

const APPLICATIONS = [
  {
    icon: ShieldCheck,
    title: "Maturity & Default Avoidance",
    description:
      "Restructuring the stack ahead of a debt maturity or covenant breach  -  bringing in fresh capital to stabilize the asset and protect ownership equity.",
  },
  {
    icon: Layers,
    title: "Value Unlock Without Sale",
    description:
      "Recapping a performing asset to return capital to the owner while retaining upside  -  an alternative to a full disposition when the hold thesis remains intact.",
  },
  {
    icon: Scale,
    title: "Repositioning Capital",
    description:
      "Injecting equity to fund a business plan  -  lease-up, renovation, or re-tenanting  -  where the existing capital structure cannot support the execution.",
  },
  {
    icon: RefreshCw,
    title: "Ownership & Partner Restructuring",
    description:
      "Resolving deadlock, partner buyout, or governance change through a structured recapitalization that aligns the capital with the path forward.",
  },
];

export default function RecapitalizationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Recapitalization Advisory",
    serviceType: "Capital stack restructuring",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: `https://${SITE.domain}/usa`,
    },
    areaServed: "US",
    description:
      "Recapitalization and capital stack restructuring advisory for U.S. commercial real estate  -  unlocking value, managing maturity, and repositioning assets.",
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
              Capital  |  Recapitalization
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Recapitalization that resets the capital stack around the path forward
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Murivest advises owners and sponsors on the recapitalization of U.S.
              commercial real estate  -  restructuring the ownership and capital
              stack to unlock value, manage a maturity, or fund the next phase of
              an asset's life. Independent advice, structured to the situation
              rather than a lender's standard terms.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/contact"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Discuss a Recapitalization
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
          eyebrow="When It Applies"
          title="Recapitalization is a tool, not a last resort"
          description="The most effective recapitalizations are proactive  -  executed while the asset is stable enough to command good terms, not after distress has set in."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {APPLICATIONS.map((item) => (
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
            <Eyebrow>How We Approach It</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#2C2C2C] sm:text-4xl">
              Restructure the stack before the clock forces the terms
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#8B8680]">
              A recapitalization is a negotiation conducted under time pressure  - 
              and time pressure erodes terms. We begin by mapping the existing
              capital structure, the constraints, and the realistic paths:
              new equity, subordinate debt, a note modification, or a clean
              recap. The objective is to secure the best available outcome while
              there is still room to negotiate.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#8B8680]">
              Where a full disposition is the better answer, our sell-side practice
              runs that process in parallel  -  ensuring the owner chooses the
              optimal path with the full picture in view.
            </p>
          </div>
          <div className="rounded-xl border border-[#E8E6E1] bg-white p-8">
            <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
              What a recapitalization mandate delivers
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#8B8680]">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Existing structure and constraint diagnosis.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Option mapping across equity, debt, and note resolution.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Capital introduction to qualified recap partners.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Negotiation and closing coordination.
              </li>
            </ul>
            <Link
              href="/usa/sell/disposition"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#B8956B] transition-colors hover:text-[#C9A87C]"
            >
              Compare with disposition
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Adjacent Services"
          title="Recapitalization connects to the full practice"
          description="A recapitalization draws on equity, debt, and disposition capability depending on the chosen path."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { label: "Equity Financing", href: "/usa/capital/equity" },
            { label: "Debt Financing", href: "/usa/capital/debt" },
            { label: "Disposition Advisory", href: "/usa/sell/disposition" },
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
        title="Reset your capital structure with counsel"
        description="If a maturity, covenant, or ownership constraint is approaching, we will map your options and source the capital to execute the right one."
        primaryLabel="Discuss a Recapitalization"
        secondaryLabel="Explore Capital Advisory"
        secondaryHref="/usa/capital/capital-advisory"
      />
    </>
  );
}
