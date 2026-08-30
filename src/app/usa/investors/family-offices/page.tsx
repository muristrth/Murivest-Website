import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Home,
  TrendingUp,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Family Office CRE Investment — USA Advisory",
  description:
    "Murivest Group's U.S. family office commercial real estate advisory — direct CRE investments, portfolio management, and institutional-quality execution for family capital.",
  alternates: { canonical: `https://${SITE.domain}/usa/investors/family-offices` },
};

const MARKET_CONTEXT =
  "Family offices represent one of the fastest-growing sources of direct commercial real estate capital in the United States. Unlike institutional investors, family offices typically pursue bespoke mandates with greater flexibility on hold period, asset type, and structuring. However, they still require institutional-quality underwriting, counterparty relationships, and execution discipline. Murivest's family office practice is designed to deliver the same analytical rigor and market access as a large institutional mandate — with the discretion and flexibility that family capital requires.";

const WHAT_FAMILY_OFFICES_SEEK = [
  "Direct ownership of income-producing commercial real estate",
  "Portfolio-level diversification across multiple asset classes and geographies",
  "Tax-efficient structuring, including 1031 exchange coordination",
  "Inter-generational wealth preservation through durable, cash-flowing assets",
  "Control and transparency over investment decisions and asset management",
];

const WHAT_FITS = [
  "Core and core-plus multifamily in supply-constrained markets",
  "Single-tenant net-lease properties with investment-grade credit tenants",
  "Industrial and logistics assets benefiting from supply chain reconfiguration",
  "Medical office and healthcare real estate with mission-critical tenants",
  "Value-add office and retail repositioning in high-quality submarkets",
];

const HOW_WE_ADVISE = [
  "Mandate definition aligned with family investment policy and return requirements",
  "Asset-level underwriting with sensitivity analysis and stress testing",
  "Confidential off-market sourcing through Murivest's institutional network",
  "Negotiation and closing management with full transparency",
  "Post-acquisition leasing and disposition strategy support",
];

const NEXT_STEPS = [
  "Submit a confidential inquiry describing your family's investment objectives, target markets, and asset class preferences.",
  "Schedule a consultation to discuss your portfolio strategy, risk tolerance, and hold period requirements.",
  "Receive a tailored proposal outlining the scope of engagement, fee structure, and initial opportunity set.",
];

export default function FamilyOfficesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Family Office CRE Investment — Murivest Group",
    description:
      "Murivest's family office U.S. commercial real estate advisory for direct CRE investments and portfolio management.",
    url: `https://${SITE.domain}/usa/investors/family-offices`,
    about: {
      "@type": "Service",
      name: "Family Office Commercial Real Estate Advisory",
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
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Family wealth and investment advisory"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">
              Family Offices — Investor Solutions
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Family office commercial real estate advisory
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Institutional-quality underwriting and execution for family offices
              pursuing direct U.S. commercial real estate investments — with the
              discretion and flexibility that family capital requires.
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

      {/* What family offices seek */}
      <Section className="py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="What Family Offices Seek"
              title="Direct ownership, control, and durable returns"
            />
            <p className="mt-6 text-lg leading-relaxed text-[#8B8680]">
              {MARKET_CONTEXT}
            </p>
          </div>
          <div className="rounded-2xl border border-[#E8E6E1] bg-[#FAF9F6] p-8">
            <h3 className="font-serif text-lg font-semibold text-[#2C2C2C]">
              Common objectives
            </h3>
            <ul className="mt-4 space-y-3">
              {WHAT_FAMILY_OFFICES_SEEK.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-[#C9A87C]"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FAF9F6]0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* What fits */}
      <Section className="py-20 bg-[#FAF9F6]">
        <SectionHeading
          eyebrow="Asset Class Alignment"
          title="Property types that fit family office objectives"
          description="Family offices often seek income-producing, low-volatility assets with strong balance sheets. The following sectors historically align well with family office return requirements and risk tolerance."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHAT_FITS.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-[#E8E6E1] bg-white p-5"
            >
              <p className="text-sm leading-relaxed text-[#C9A87C]">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How we advise */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="Our Advisory Model"
          title="Institutional discipline, family office flexibility"
          description="We do not impose fund structures, mandate minimums, or proprietary underwriting templates. Every engagement is calibrated to the family's investment policy."
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
      <Section className="py-20 bg-[#FAF9F6]">
        <SectionHeading
          eyebrow="Getting Started"
          title="A structured path to your first mandate"
          description="Engaging Murivest begins with a confidential consultation to understand your family's objectives, constraints, and preferences."
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
        title="Engage Murivest for your family office CRE mandate"
        description="Whether acquiring, disposing, or financing, our team is ready to advise. Start with a confidential consultation."
        primaryLabel="Request a Consultation"
        secondaryLabel="Explore Markets"
        secondaryHref="/usa/markets"
      />
    </>
  );
}

