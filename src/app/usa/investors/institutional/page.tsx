import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ShieldCheck,
  TrendingUp,
  MapPin,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Institutional Investors — USA CRE Advisory",
  description:
    "Murivest Group's U.S. institutional investor commercial real estate advisory — acquisition, disposition, and portfolio rebalancing for pension funds, endowments, insurance companies, and RIAs.",
  alternates: { canonical: `https://${SITE.domain}/usa/investors/institutional` },
};

const MARKET_CONTEXT =
  "Institutional investors — pension funds, endowments, insurance companies, and registered investment advisors — remain the largest capital source for U.S. commercial real estate transactions. These investors demand rigorous underwriting, transparent execution, and detailed reporting throughout the transaction lifecycle. Murivest's institutional practice is designed to meet these requirements: we provide the same analytical rigor, confidentiality, and discipline that institutional capital managers expect — without the conflicts of a proprietary fund or affiliated services.";

const WHO_WE_SERVE = [
  {
    type: "Pension Funds",
    needs: "Diversification, stable income, and inflation hedging through core and core-plus commercial real estate acquisitions and dispositions.",
  },
  {
    type: "Endowments & Foundations",
    needs: "Long-term capital appreciation through opportunistic and value-add strategies, with attention to ESG and impact considerations.",
  },
  {
    type: "Insurance Companies",
    needs: "Long-duration, stabilized income-producing assets matching liability duration — typically core office, multifamily, and industrial.",
  },
  {
    type: "Registered Investment Advisors",
    needs: "Diversified CRE exposure through direct acquisitions and portfolio transactions, with transparent fee structures and independent advice.",
  },
];

const HOW_WE_ADVISE = [
  "Portfolio-level analysis to identify markets, sectors, and asset profiles that complement existing holdings",
  "Confidential off-market sourcing through Murivest's institutional network of brokers, owners, and operators",
  "Institutional-grade underwriting with market-specific rent, vacancy, and cap rate assumptions",
  "Bid-to-lease and bid-to-own analysis calibrated to institutional return hurdles",
  "Full transaction execution management from LOI through closing",
  "Post-transaction reporting and disposition strategy for portfolio management",
];

const NEXT_STEPS = [
  "Describe your institution's investment policy, target markets, and asset class preferences.",
  "Schedule a confidential consultation to discuss your portfolio strategy and how Murivest can complement your internal team.",
  "Receive a tailored mandate proposal outlining scope, fee structure, and initial opportunity set.",
];

export default function InstitutionalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Institutional Investors — Murivest Group",
    description:
      "Murivest's institutional investor U.S. commercial real estate advisory for pension funds, endowments, insurance companies, and RIAs.",
    url: `https://${SITE.domain}/usa/investors/institutional`,
    about: {
      "@type": "Service",
      name: "Institutional Investor Commercial Real Estate Advisory",
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
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Institutional investment and capital markets"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">
              Institutional — Investor Solutions
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Institutional investor commercial real estate advisory
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Acquisition, disposition, and portfolio rebalancing advisory for
              pension funds, endowments, insurance companies, and registered
              investment advisors across U.S. commercial real estate markets.
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

      {/* Who we serve */}
      <Section className="py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Who We Serve"
              title="The institutional capital spectrum"
            />
            <p className="mt-6 text-lg leading-relaxed text-[#8B8680]">
              {MARKET_CONTEXT}
            </p>
          </div>
          <div className="space-y-4">
            {WHO_WE_SERVE.map((entity) => (
              <div
                key={entity.type}
                className="rounded-xl border border-[#E8E6E1] bg-[#FAF9F6] p-6"
              >
                <h3 className="font-serif text-lg font-semibold text-[#2C2C2C]">
                  {entity.type}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
                  {entity.needs}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* How we advise */}
      <Section className="py-20 bg-[#FAF9F6]">
        <SectionHeading
          eyebrow="Advisory Scope"
          title="Institutional-grade execution across the transaction lifecycle"
          description="From mandate definition through closing and reporting, Murivest delivers the transparency and rigor that institutional investors require."
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
          title="Begin with a confidential mandate discussion"
          description="We understand the sensitivity of institutional mandates. Every engagement begins under NDA and with a clearly defined scope."
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
        title="Engage Murivest for your institutional CRE mandate"
        description="Whether acquiring, disposing, financing, or rebalancing, our team is ready to advise."
        primaryLabel="Request a Consultation"
        secondaryLabel="View Markets"
        secondaryHref="/usa/markets"
      />
    </>
  );
}

