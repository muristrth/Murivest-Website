import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Factory,
  Warehouse,
  Home,
  Store,
  Server,
  ArrowRight,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import CTABanner from "../components/CTABanner";
import { PROPERTY_TYPES, SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Commercial Real Estate — USA Property Types & Markets",
  description:
    "Explore Murivest Group's U.S. commercial real estate practice across office, industrial, logistics, multifamily, retail, and data center sectors. Investment sales and leasing advisory.",
  alternates: { canonical: `https://${SITE.domain}/usa/commercial-real-estate` },
};

const SECTOR_ICONS: Record<string, typeof Building2> = {
  office: Building2,
  industrial: Factory,
  logistics: Warehouse,
  multifamily: Home,
  retail: Store,
  "data-centers": Server,
};

const SECTOR_DETAILS: Record<
  string,
  { marketContext: string; keyDrivers: string[] }
> = {
  office: {
    marketContext:
      "U.S. office markets are undergoing structural change as hybrid work models reshape demand. Murivest advises on CBD assets, suburban campuses, and medical office properties, with focus on flight-to-quality dynamics and value-add repositioning opportunities.",
    keyDrivers: [
      "Flight-to-quality in gateway and Sun Belt markets",
      "Medical office outperformance relative to traditional office",
      "Adaptive reuse and conversion opportunities",
    ],
  },
  industrial: {
    marketContext:
      "U.S. industrial real estate continues to benefit from supply chain reconfiguration and nearshoring trends. Murivest covers manufacturing facilities, warehouse-distribution assets, and flex-industrial properties in established logistics corridors.",
    keyDrivers: [
      "Supply chain reconfiguration and nearshoring",
      "Manufacturing reshoring incentives",
      "Flex-industrial and last-mile demand",
    ],
  },
  logistics: {
    marketContext:
      "Logistics real estate — including last-mile delivery, big-box distribution, and cold storage — remains a structural growth sector driven by e-commerce penetration and supply chain optimization. Murivest advises on acquisition and disposition across primary logistics markets.",
    keyDrivers: [
      "E-commerce penetration and fulfillment demand",
      "Cold storage and food logistics growth",
      "Big-box distribution in inland hubs",
    ],
  },
  multifamily: {
    marketContext:
      "U.S. multifamily housing remains a core institutional asset class, supported by persistent housing affordability challenges and demographic trends. Murivest advises on garden-style, mid-rise, and high-rise rental communities in supply-constrained and growth metros.",
    keyDrivers: [
      "Housing supply shortages in major metros",
      "Demographic tailwinds from millennial and Gen Z renters",
      "Sun Belt and secondary market growth",
    ],
  },
  retail: {
    marketContext:
      "U.S. retail is bifurcating between well-located neighborhood centers and underperforming assets. Murivest focuses on grocery-anchored centers, power centers, street retail, and single-tenant net-lease properties with durable income profiles.",
    keyDrivers: [
      "Grocery-anchored center resilience",
      "Single-tenant net-lease market depth",
      "Street retail in dense urban corridors",
    ],
  },
  "data-centers": {
    marketContext:
      "Data centers are the fastest-growing institutional real estate sector, driven by cloud computing, AI infrastructure demand, and digital transformation. Murivest advises on hyperscale, colocation, and edge facilities in primary U.S. data center markets.",
    keyDrivers: [
      "AI and cloud infrastructure demand surge",
      "Power availability as the binding constraint",
      "Hyperscale leasing and colocation investment",
    ],
  },
};

export default function CREHubPage() {
  return (
    <>
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">Commercial Real Estate</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Sector-specific expertise across U.S. commercial real estate
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-200">
              Each property type demands distinct market knowledge, underwriting
              frameworks, and counterparty relationships. Murivest maintains
              dedicated coverage across all major U.S. CRE sectors — for both
              investment sales and leasing.
            </p>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <div className="space-y-16">
          {PROPERTY_TYPES.map((type, idx) => {
            const Icon = SECTOR_ICONS[type.slug] || Building2;
            const details = SECTOR_DETAILS[type.slug];
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={type.slug}
                className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                  isReversed ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={isReversed ? "lg:col-start-2" : ""}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                    <Icon size={26} />
                  </div>
                  <h2 className="mt-5 font-serif text-3xl font-semibold text-ink-900">
                    {type.label}
                  </h2>
                  <p className="mt-3 text-lg leading-relaxed text-ink-500">
                    {type.description}
                  </p>
                  {details && (
                    <>
                      <p className="mt-4 text-base leading-relaxed text-ink-500">
                        {details.marketContext}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {details.keyDrivers.map((driver) => (
                          <li
                            key={driver}
                            className="flex items-start gap-2 text-sm text-ink-600"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                            {driver}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={`/usa/commercial-real-estate/${type.slug}`}
                      className="flex items-center gap-1.5 rounded-lg bg-navy-700 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-navy-600"
                    >
                      Explore {type.label}
                      <ArrowRight size={16} />
                    </Link>
                    {type.transactionTypes.includes("sale") && (
                      <Link
                        href={`/usa/commercial-real-estate/${type.slug}/for-sale`}
                        className="flex items-center gap-1.5 rounded-lg border border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-700 transition-all hover:border-navy-300 hover:text-navy-700"
                      >
                        For Sale
                      </Link>
                    )}
                    {type.transactionTypes.includes("lease") && (
                      <Link
                        href={`/usa/commercial-real-estate/${type.slug}/for-lease`}
                        className="flex items-center gap-1.5 rounded-lg border border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-700 transition-all hover:border-navy-300 hover:text-navy-700"
                      >
                        For Lease
                      </Link>
                    )}
                  </div>
                </div>

                <div
                  className={`rounded-2xl border border-ink-100 bg-ink-50 p-8 ${
                    isReversed ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <h3 className="font-serif text-lg font-semibold text-ink-900">
                    {type.label} — What we advise on
                  </h3>
                  <div className="mt-4 space-y-3">
                    {type.transactionTypes.map((tt) => (
                      <div
                        key={tt}
                        className="flex items-center justify-between rounded-lg bg-white p-4"
                      >
                        <span className="text-sm font-medium text-ink-700">
                          {tt === "sale"
                            ? "Investment Sales"
                            : "Leasing Advisory"}
                        </span>
                        <Link
                          href={`/usa/commercial-real-estate/${type.slug}/${tt === "sale" ? "for-sale" : "for-lease"}`}
                          className="flex items-center gap-1 text-sm font-medium text-navy-600 hover:text-navy-700 transition-colors"
                        >
                          View
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    ))}
                    <div className="flex items-center justify-between rounded-lg bg-white p-4">
                      <span className="text-sm font-medium text-ink-700">
                        Capital Markets Advisory
                      </span>
                      <Link
                        href="/usa/contact"
                        className="flex items-center gap-1 text-sm font-medium text-navy-600 hover:text-navy-700 transition-colors"
                      >
                        Inquire
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <CTABanner
        title="Engage Murivest across any U.S. commercial real estate sector"
        description="Our sector teams are ready to advise on your acquisition, disposition, financing, or leasing objectives. Start with a confidential consultation."
        primaryLabel="Request a Mandate"
        secondaryLabel="Investment Sales"
        secondaryHref="/usa/investment-sales"
      />
    </>
  );
}
