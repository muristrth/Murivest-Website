import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  FlaskConical,
  TrendingUp,
  Users,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Life Sciences Real Estate — USA CRE Advisory",
  description:
    "Murivest Group's U.S. life sciences real estate advisory — investment sales for R&D laboratories, biotech campuses, and specialized lab space in innovation clusters.",
  alternates: { canonical: `https://${SITE.domain}/usa/properties/life-sciences` },
};

const MARKET_CONTEXT =
  "U.S. life sciences real estate has experienced significant growth driven by biotechnology innovation, increased NIH funding, and the sector's resilience through economic cycles. R&D laboratories, biotech campuses, and specialized lab space in innovation clusters command premium rents and strong tenant demand. However, rising interest rates and construction costs have introduced new underwriting discipline requirements. Murivest advises on the acquisition and disposition of life sciences real estate across primary and emerging innovation markets.";

const KEY_DRIVERS = [
  "Biotechnology innovation and drug development pipeline growth",
  "Increased NIH and private R&D funding",
  "Demand for specialized lab space with high power and HVAC specifications",
  "Innovation cluster concentration in gateway markets",
  "Tenant credit quality and lease term length as key value determinants",
];

const ADVISORY_SCOPE = [
  "Life sciences lab and R&D facility dispositions",
  "Biotech campus and research park acquisitions",
  "Spec lab and build-to-suit disposition advisory",
  "Capital markets advisory for life sciences financing",
  "Portfolio transactions across innovation markets",
];

const RELATED_MARKETS = [
  { name: "California", href: "/usa/markets/california" },
  { name: "Massachusetts", href: "/usa/markets/massachusetts" },
  { name: "North Carolina", href: "/usa/markets/north-carolina" },
  { name: "New York", href: "/usa/markets/new-york" },
  { name: "Texas", href: "/usa/markets/texas" },
];

export default function LifeSciencesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Life Sciences Real Estate — USA CRE Advisory — Murivest Group",
    description:
      "Murivest's U.S. life sciences real estate advisory for R&D labs, biotech campuses, and specialized lab space.",
    url: `https://${SITE.domain}/usa/properties/life-sciences`,
    about: {
      "@type": "Service",
      name: "Life Sciences Real Estate Investment Sales Advisory",
      provider: { "@type": "Organization", name: SITE.name },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1B4332] py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/236074/pexels-photo-236074.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Life sciences laboratory"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">
              Life Sciences — U.S. Commercial Real Estate
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Life sciences real estate advisory for institutional investors
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Investment sales advisory for R&D laboratories, biotech campuses,
              and specialized lab space in innovation clusters and life sciences
              gateway markets.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/usa/contact"
                className="group flex items-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Discuss a Life Sciences Mandate
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/properties"
                className="flex items-center justify-center rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                All Property Types
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market context */}
      <Section className="py-20">
        <div className="grid gap-12 lg:grid-cols-3 lg:items-start">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Market Context"
              title="Life sciences demand is driven by innovation and funding"
            />
            <p className="mt-6 text-lg leading-relaxed text-[#8B8680]">
              {MARKET_CONTEXT}
            </p>
            <div className="mt-8">
              <h3 className="font-serif text-lg font-semibold text-[#2C2C2C]">
                Key market drivers
              </h3>
              <ul className="mt-4 space-y-3">
                {KEY_DRIVERS.map((driver) => (
                  <li
                    key={driver}
                    className="flex items-start gap-3 text-base text-[#C9A87C]"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                    {driver}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E8E6E1] bg-[#FAF9F6] p-8">
            <h3 className="font-serif text-lg font-semibold text-[#2C2C2C]">
              Advisory scope
            </h3>
            <ul className="mt-4 space-y-3">
              {ADVISORY_SCOPE.map((scope) => (
                <li
                  key={scope}
                  className="flex items-start gap-2.5 text-sm text-[#C9A87C]"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FAF9F6]0" />
                  {scope}
                </li>
              ))}
            </ul>
            <Link
              href="/usa/contact"
              className="mt-6 flex items-center gap-2 text-sm font-medium text-[#B8956B] hover:text-[#C9A87C] transition-colors"
            >
              Discuss a life sciences mandate
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* Related markets */}
      <Section className="py-20 bg-[#FAF9F6]">
        <SectionHeading
          eyebrow="Markets"
          title="Key life sciences markets"
          description="Murivest covers life sciences real estate investment sales across primary and emerging innovation clusters."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RELATED_MARKETS.map((m) => (
            <Link
              key={m.name}
              href={m.href}
              className="group flex items-center justify-between rounded-xl border border-[#E8E6E1] bg-white p-5 transition-all hover:border-[#B8956B] hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#C9A87C]" />
                <span className="font-serif text-lg font-semibold text-[#2C2C2C] group-hover:text-[#B8956B] transition-colors">
                  {m.name}
                </span>
              </div>
              <ArrowRight
                size={18}
                className="text-[#FAF9F6] transition-all group-hover:translate-x-1 group-hover:text-[#C9A87C]"
              />
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Engage Murivest for life sciences real estate advisory"
        description="Whether acquiring, disposing, or financing life sciences assets, our team is ready to advise."
        primaryLabel="Request a Mandate"
        secondaryLabel="View All Properties"
        secondaryHref="/usa/properties"
      />
    </>
  );
}

