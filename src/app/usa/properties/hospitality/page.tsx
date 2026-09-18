import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Hotel,
  TrendingUp,
  Users,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Hospitality Real Estate — USA CRE Advisory",
  description:
    "Murivest Group's U.S. hospitality real estate advisory — investment sales for full-service hotels, limited-service properties, resorts, and extended-stay assets.",
  alternates: { canonical: `https://${SITE.domain}/usa/properties/hospitality` },
};

const MARKET_CONTEXT =
  "U.S. hospitality real estate has demonstrated resilience following the pandemic-driven dislocation, with RevPAR and occupancy recovering across most markets. Full-service and limited-service hotels, resorts, and extended-stay assets each command distinct investor pools and underwriting frameworks. Murivest advises on the acquisition and disposition of hospitality assets in top U.S. business and leisure destinations, with attention to franchise/management agreement quality, operational performance, and market-specific supply dynamics.";

const KEY_DRIVERS = [
  "RevPAR recovery and rate growth in leisure and business markets",
  "Extended-stay and select-service outperformance",
  "Domestic leisure travel demand and destination consolidation",
  "Franchise and management agreement quality as value determinants",
  "Construction cost escalation and limited new supply pipeline",
];

const ADVISORY_SCOPE = [
  "Full-service and limited-service hotel dispositions",
  "Resort and destination property investment sales",
  "Extended-stay and select-service asset advisory",
  "Hospitality portfolio transactions",
  "Franchise and management agreement review support",
];

const RELATED_MARKETS = [
  { name: "Florida", href: "/usa/markets/florida" },
  { name: "Nevada", href: "/usa/markets/nevada" },
  { name: "California", href: "/usa/markets/california" },
  { name: "Texas", href: "/usa/markets/texas" },
  { name: "Arizona", href: "/usa/markets/arizona" },
];

export default function HospitalityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Hospitality Real Estate — USA CRE Advisory — Murivest Group",
    description:
      "Murivest's U.S. hospitality real estate advisory for hotels, resorts, and extended-stay assets.",
    url: `https://${SITE.domain}/usa/properties/hospitality`,
    about: {
      "@type": "Service",
      name: "Hospitality Investment Sales Advisory",
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
      <section className="relative overflow-hidden bg-[#2C2C2C] py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Hotel hospitality property"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C2C2C] via-[#2C2C2C]/85 to-[#2C2C2C]/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-[#8B7355]">
              Hospitality — U.S. Commercial Real Estate
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Hospitality real estate advisory for institutional investors
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Investment sales advisory for full-service hotels, limited-service
              properties, resorts, and extended-stay assets in top U.S. business
              and leisure destinations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/usa/contact"
                className="group flex items-center gap-2 rounded-lg bg-[#8B7355] px-6 py-3 text-sm font-semibold text-[#2C2C2C] transition-all hover:bg-[#8B7355]"
              >
                Discuss a Hospitality Mandate
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/properties"
                className="flex items-center justify-center rounded-lg border border-[#8B7355] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
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
              title="Hospitality is demonstrating post-pandemic resilience"
            />
            <p className="mt-6 text-lg leading-relaxed text-[#5A5A5A]">
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
                    className="flex items-start gap-3 text-base text-[#8B7355]"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#8B7355]" />
                    {driver}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E5E2DC] bg-[#F8F7F4] p-8">
            <h3 className="font-serif text-lg font-semibold text-[#2C2C2C]">
              Advisory scope
            </h3>
            <ul className="mt-4 space-y-3">
              {ADVISORY_SCOPE.map((scope) => (
                <li
                  key={scope}
                  className="flex items-start gap-2.5 text-sm text-[#8B7355]"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F8F7F4]0" />
                  {scope}
                </li>
              ))}
            </ul>
            <Link
              href="/usa/contact"
              className="mt-6 flex items-center gap-2 text-sm font-medium text-[#8B7355] hover:text-[#8B7355] transition-colors"
            >
              Discuss a hospitality mandate
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* Related markets */}
      <Section className="py-20 bg-[#F8F7F4]">
        <SectionHeading
          eyebrow="Markets"
          title="Key hospitality markets"
          description="Murivest covers hospitality investment sales across leisure, business, and destination markets."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RELATED_MARKETS.map((m) => (
            <Link
              key={m.name}
              href={m.href}
              className="group flex items-center justify-between rounded-xl border border-[#E5E2DC] bg-white p-5 transition-all hover:border-[#8B7355] hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#8B7355]" />
                <span className="font-serif text-lg font-semibold text-[#2C2C2C] group-hover:text-[#8B7355] transition-colors">
                  {m.name}
                </span>
              </div>
              <ArrowRight
                size={18}
                className="text-[#F8F7F4] transition-all group-hover:translate-x-1 group-hover:text-[#8B7355]"
              />
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Engage Murivest for hospitality real estate advisory"
        description="Whether acquiring, disposing, or financing hospitality assets, our team is ready to advise."
        primaryLabel="Request a Mandate"
        secondaryLabel="View All Properties"
        secondaryHref="/usa/properties"
      />
    </>
  );
}

