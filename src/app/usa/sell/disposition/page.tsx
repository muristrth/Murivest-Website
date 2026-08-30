import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, EyeOff, Clock, ShieldCheck, Handshake } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Disposition Advisory — U.S. Commercial Real Estate",
  description:
    "Strategic disposition advisory for U.S. commercial real estate — discreet, often off-market exits for owners seeking confidentiality, speed, or a structured process outside public auction.",
  alternates: { canonical: `https://${SITE.domain}/usa/sell/disposition` },
  openGraph: {
    title: "Disposition Advisory — U.S. Commercial Real Estate",
    description:
      "Strategic, discreet disposition advisory for U.S. commercial real estate owners.",
    url: `https://${SITE.domain}/usa/sell/disposition`,
  },
};

const ELEMENTS = [
  {
    icon: EyeOff,
    title: "Discreet by Default",
    description:
      "For owners who cannot tolerate a public process — information leakage, tenant concern, or counterparty signaling — we run the exit quietly and under confidentiality.",
  },
  {
    icon: Clock,
    title: "Timeline-Conscious Execution",
    description:
      "Fund exits, debt maturities, and rebalancing often carry hard deadlines. We design the process around the date, not the other way around.",
  },
  {
    icon: Handshake,
    title: "Structured Negotiation",
    description:
      "Off-market does not mean unstructured. We run a disciplined, negotiated process with the one or few counterparties most capable of delivering on the objective.",
  },
  {
    icon: ShieldCheck,
    title: "Principal-Aligned Advice",
    description:
      "We represent the seller exclusively. There is no competing inventory and no conflict — the disposition objective is the only mandate.",
  },
];

export default function DispositionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Disposition Advisory",
    serviceType: "Strategic sell-side advisory",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: `https://${SITE.domain}/usa`,
    },
    areaServed: "US",
    description:
      "Strategic, often off-market disposition advisory for U.S. commercial real estate owners requiring confidentiality, speed, or structured execution.",
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
              Sell · Disposition
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Disposition advisory for owners who need a strategic exit, not a public listing
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Some dispositions cannot run through a broad marketing process.
              Murivest advises owners on discreet, often off-market exits —
              structured around confidentiality, a hard timeline, or a specific
              counterparty objective, and executed with the same rigor as a
              public sale.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/contact"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Discuss a Discreet Exit
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/sell"
                className="flex items-center justify-center rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                All Sell-Side Mandates
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="What Defines It"
          title="A disposition designed around the constraint"
          description="Strategic dispositions are defined less by the asset than by what the owner cannot afford — leakage, delay, or misalignment. We engineer the process around that constraint."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ELEMENTS.map((item) => (
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
            <Eyebrow>When It Applies</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#2C2C2C] sm:text-4xl">
              Not every asset should be marketed
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#8B8680]">
              A public process can be the wrong tool for a sub-performing asset, a
              sensitive ownership situation, or a buyer already known to the
              owner. In these cases, a negotiated, discreet disposition protects
              value better than a wide auction — provided it is run with
              discipline and a clear walk-away price.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#8B8680]">
              We also advise owners weighing sale against recapitalization. Where
              retaining upside is preferable to exiting, our capital practice can
              structure the alternative — ensuring the disposition decision is
              made with the full picture in view.
            </p>
          </div>
          <div className="rounded-xl border border-[#E8E6E1] bg-white p-8">
            <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
              Signals a strategic disposition may fit
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#8B8680]">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                A hard deadline tied to a fund term or debt maturity.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Sensitivity to public information or tenant perception.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                A known, qualified counterparty already in discussion.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                A preference to test value before committing to a full process.
              </li>
            </ul>
            <Link
              href="/usa/capital/recapitalization"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#B8956B] transition-colors hover:text-[#C9A87C]"
            >
              Compare with recapitalization
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Adjacent Mandates"
          title="Disposition alongside the broader sell-side practice"
          description="Strategic dispositions frequently connect to investment sales and portfolio strategy."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            { label: "Investment Sales", href: "/usa/sell/investment-sales" },
            { label: "Portfolio Sales", href: "/usa/sell/portfolio-sales" },
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
        title="Plan a discreet, strategic exit"
        description="If confidentiality or timeline governs your disposition, we will design the process around it — on your behalf alone."
        primaryLabel="Discuss a Discreet Exit"
        secondaryLabel="Explore Investment Sales"
        secondaryHref="/usa/sell/investment-sales"
      />
    </>
  );
}
