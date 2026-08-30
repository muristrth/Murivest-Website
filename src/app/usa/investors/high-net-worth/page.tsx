import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  ShieldCheck,
  MapPin,
  Home,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "High Net Worth Investors — USA CRE Advisory",
  description:
    "Murivest Group's U.S. HNW commercial real estate advisory — direct ownership, 1031 exchanges, and portfolio management for high-net-worth individuals and trusts.",
  alternates: { canonical: `https://${SITE.domain}/usa/investors/high-net-worth` },
};

const MARKET_CONTEXT =
  "High-net-worth individuals and trusts represent a significant and growing source of direct commercial real estate capital. Many HNW investors seek to diversify beyond public markets and build inter-generational wealth through income-producing real estate. Murivest's HNW practice provides institutional-quality underwriting and execution — without the proprietary fund conflicts or minimum investment requirements that characterize institutional advisory relationships. We focus on assets that generate stable cash flow, offer tax-efficient structuring (including 1031 exchange coordination), and can be managed with transparency.";

const WHAT_HNW_SEEK = [
  "Direct ownership of commercial real estate as a portfolio diversifier",
  "Stable, predictable cash flow from income-producing assets",
  "Tax-efficient structuring, including 1031 exchange facilitation",
  "Portfolio-level diversification across asset classes and geographies",
  "Transparency and control over investment decisions",
];

const WHAT_FITS = [
  "Single-tenant net-lease properties with investment-grade credit tenants",
  "Garden-style and mid-rise multifamily in supply-constrained markets",
  "Grocery-anchored retail centers in growing Sun Belt markets",
  "Well-located industrial assets with credit tenants",
  "Medical office buildings with healthcare-grade lease structures",
];

const HOW_WE_ADVISE = [
  "Mandate definition aligned with your risk tolerance, return objectives, and tax considerations",
  "Asset-level underwriting with cash flow analysis and stress testing",
  "Confidential sourcing through Murivest's network of institutional brokers and off-market relationships",
  "1031 exchange coordination and qualified intermediary referrals",
  "Full transaction execution from LOI through closing",
  "Ongoing portfolio strategy and disposition planning",
];

const NEXT_STEPS = [
  "Share your investment objectives, target asset classes, preferred markets, and any tax considerations such as 1031 exchange timelines.",
  "Schedule a confidential consultation to discuss how Murivest's advisory model aligns with your wealth management goals.",
  "Receive a tailored proposal and initial opportunity set based on your criteria.",
];

export default function HighNetWorthPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "High Net Worth Investors — Murivest Group",
    description:
      "Murivest's HNW U.S. commercial real estate advisory for direct ownership, 1031 exchanges, and portfolio management.",
    url: `https://${SITE.domain}/usa/investors/high-net-worth`,
    about: {
      "@type": "Service",
      name: "High Net Worth Commercial Real Estate Advisory",
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
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Private wealth and real estate investment"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">
              High Net Worth — Investor Solutions
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              HNW commercial real estate advisory
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Direct ownership, 1031 exchange facilitation, and portfolio
              management advisory for high-net-worth individuals and trusts
              pursuing U.S. commercial real estate.
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

      {/* What HNW seek */}
      <Section className="py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="What HNW Investors Seek"
              title="Direct ownership with institutional discipline"
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
              {WHAT_HNW_SEEK.map((item) => (
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
          title="Property types that fit HNW objectives"
          description="HNW investors typically prioritize income stability and tax efficiency. The following sectors historically align well with these objectives."
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
          title="No proprietary fund conflicts, no minimums, no one-size-fits-all"
          description="Every HNW mandate is structured around your specific objectives, risk tolerance, and tax considerations."
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
          title="A confidential path to your next acquisition"
          description="Engaging Murivest begins with understanding your objectives and constraints — without obligation."
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
        title="Engage Murivest for your HNW commercial real estate mandate"
        description="Whether acquiring, disposing, or planning a 1031 exchange, our team is ready to advise."
        primaryLabel="Request a Consultation"
        secondaryLabel="Explore Markets"
        secondaryHref="/usa/markets"
      />
    </>
  );
}

