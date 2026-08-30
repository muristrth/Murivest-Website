import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Private Equity Real Estate — USA Advisory",
  description:
    "Murivest Group's U.S. private equity real estate advisory — value-add, core-plus, and opportunistic strategy execution with institutional underwriting and sourcing.",
  alternates: { canonical: `https://${SITE.domain}/usa/investors/private-equity` },
};

const MARKET_CONTEXT =
  "Private equity real estate funds have become the dominant institutional capital source for U.S. commercial real estate transactions, deploying capital across value-add, core-plus, and opportunistic strategies. Murivest's private equity practice is designed to complement fund investment teams with specialized sourcing, underwriting, and execution support — whether for single-asset acquisitions, portfolio transactions, or disposition advisory. We understand the return hurdles, hold period requirements, and risk frameworks that govern private equity decision-making.";

const STRATEGY_ALIGNMENT = [
  {
    strategy: "Value-Add",
    fit: "Office repositioning, retail entitlement, multifamily renovation, and industrial conversion — assets requiring operational improvement to achieve target returns.",
  },
  {
    strategy: "Core-Plus",
    fit: "Well-located, stabilized assets in primary markets with modest value-add potential — suitable for funds seeking income with limited volatility.",
  },
  {
    strategy: "Opportunistic",
    fit: "Development, ground-up construction, distressed asset acquisition, and large-scale repositioning requiring significant capital and expertise.",
  },
];

const HOW_WE_ADVISE = [
  "Off-market sourcing of single assets and portfolios aligned with fund investment criteria",
  "Institutional-grade underwriting with sensitivity to private equity return hurdles and IRR modeling",
  "Tenant and capital markets intelligence to support underwriting assumptions",
  "Execution management from LOI through closing, including due diligence coordination",
  "Disposition advisory for fund exits, including buyer identification and marketing strategy",
];

const NEXT_STEPS = [
  "Provide your fund's investment criteria, target markets, and return requirements.",
  "Schedule a strategy session to discuss how Murivest's sourcing and execution capabilities can complement your internal team.",
  "Review a sample mandate scope and proposed engagement structure.",
];

export default function PrivateEquityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Private Equity Real Estate — Murivest Group",
    description:
      "Murivest's private equity real estate advisory for value-add, core-plus, and opportunistic strategies.",
    url: `https://${SITE.domain}/usa/investors/private-equity`,
    about: {
      "@type": "Service",
      name: "Private Equity Real Estate Advisory",
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
            src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Private equity and real estate capital"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">
              Private Equity — Investor Solutions
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Private equity real estate advisory
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Specialized sourcing, underwriting, and execution support for
              private equity real estate funds pursuing value-add, core-plus, and
              opportunistic strategies across U.S. markets.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/usa/contact"
                className="group flex items-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Engage Murivest
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/investors"
                className="flex items-center justify-center rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                All Investor Types
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy alignment */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="Strategy Alignment"
          title="How Murivest fits your private equity strategy"
          description="We do not run a fund. We execute mandates for fund sponsors who need specialized sourcing, underwriting, or exit advisory."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {STRATEGY_ALIGNMENT.map((s) => (
            <div
              key={s.strategy}
              className="rounded-xl border border-[#E8E6E1] bg-white p-6"
            >
              <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
                {s.strategy}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#8B8680]">
                {s.fit}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* How we advise */}
      <Section className="py-20 bg-[#FAF9F6]">
        <SectionHeading
          eyebrow="Advisory Scope"
          title="Execution support calibrated to private equity requirements"
          description="Private equity real estate demands speed, precision, and institutional-grade analysis. Murivest delivers."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {HOW_WE_ADVISE.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-[#E8E6E1] bg-white p-6"
            >
              <p className="text-sm leading-relaxed text-[#C9A87C]">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Next steps */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="Getting Started"
          title="Begin with a confidential strategy session"
          description="We understand the sensitivity of private equity mandates. Every engagement begins under NDA."
        />
        <div className="mt-10 space-y-4">
          {NEXT_STEPS.map((step, idx) => (
            <div
              key={step}
              className="flex items-start gap-4 rounded-xl border border-[#E8E6E1] bg-white p-6"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1B4332] text-sm font-semibold text-gold-400">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <p className="text-sm leading-relaxed text-[#C9A87C]">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Engage Murivest for your private equity real estate mandate"
        description="Whether sourcing acquisitions, executing dispositions, or advising on portfolio strategy, our team is ready to discuss your mandate."
        primaryLabel="Request a Consultation"
        secondaryLabel="View Markets"
        secondaryHref="/usa/markets"
      />
    </>
  );
}

