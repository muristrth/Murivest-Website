import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  ShieldCheck,
  MapPin,
  Building2,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "International Investors in US CRE — USA Advisory",
  description:
    "Murivest Group's U.S. commercial real estate advisory for international investors — foreign institutional and private capital seeking U.S. CRE exposure across gateway and Sun Belt markets.",
  alternates: { canonical: `https://${SITE.domain}/usa/investors/international` },
};

const MARKET_CONTEXT =
  "International capital has long been a significant source of U.S. commercial real estate investment, with foreign investors attracted by the depth, transparency, and stability of U.S. markets. Murivest's international practice is designed to help foreign institutional and private capital navigate U.S. market structures, regulatory requirements, and tax considerations — while providing the same institutional-quality underwriting and execution we deliver to domestic investors. We understand that international mandates require additional layers of structuring, currency considerations, and cross-border due diligence.";

const WHAT_INTERNATIONAL_SEEK = [
  "U.S. commercial real estate exposure as a portfolio diversifier and stable income source",
  "Access to gateway markets with institutional-quality assets and transparent pricing",
  "Currency diversification and dollar-denominated income streams",
  "EB-5 and immigration-related investment structuring where applicable",
  "Tax-efficient structuring including FIRPTA considerations and entity selection",
];

const WHAT_FITS = [
  "Class A office assets in New York, Los Angeles, and San Francisco",
  "Gateway multifamily with institutional-quality operations",
  "Industrial and logistics assets in major distribution corridors",
  "Hotel and hospitality assets in tourism and business destinations",
  "Life sciences and data center facilities in innovation clusters",
];

const HOW_WE_ADVISE = [
  "Market education and regulatory guidance tailored to your home jurisdiction",
  "Currency and structuring analysis to optimize cross-border returns",
  "FIRPTA and U.S. tax structuring coordination with your legal and tax advisors",
  "Confidential sourcing through Murivest's domestic institutional network",
  "Institutional-grade underwriting with U.S. market-specific assumptions",
  "Transaction execution with attention to cross-border due diligence requirements",
];

const NEXT_STEPS = [
  "Describe your investment objectives, target asset classes and markets, and any cross-border structuring requirements.",
  "Schedule a consultation to discuss U.S. market access, regulatory considerations, and how Murivest's practice supports international investors.",
  "Receive a tailored engagement proposal and initial market overview.",
];

export default function InternationalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "International Investors in US CRE — Murivest Group",
    description:
      "Murivest's international investor U.S. commercial real estate advisory for foreign institutional and private capital.",
    url: `https://${SITE.domain}/usa/investors/international`,
    about: {
      "@type": "Service",
      name: "International Investor Commercial Real Estate Advisory",
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
            src="https://images.pexels.com/photos/3183155/pexels-photo-3183155.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="International investment and global capital"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">
              International — Investor Solutions
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              International investor U.S. CRE advisory
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Advisory for foreign institutional and private capital seeking U.S.
              commercial real estate exposure — from gateway office to Sun Belt
              industrial and multifamily markets.
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

      {/* What international seek */}
      <Section className="py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="What International Investors Seek"
              title="U.S. stability, transparency, and depth"
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
              {WHAT_INTERNATIONAL_SEEK.map((item) => (
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
          title="Markets and asset classes preferred by international investors"
          description="International capital tends to concentrate in gateway markets with institutional-grade assets, though Sun Belt growth markets are increasingly attractive."
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
          title="Cross-border expertise with domestic execution"
          description="We coordinate with your legal, tax, and accounting advisors to ensure seamless cross-border structuring and compliance."
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
          title="Begin with a cross-border strategy discussion"
          description="International mandates require careful coordination. We begin by understanding your jurisdiction, tax considerations, and investment objectives."
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
        title="Engage Murivest for your international U.S. CRE mandate"
        description="Whether acquiring, disposing, or structuring a cross-border transaction, our team is ready to advise."
        primaryLabel="Request a Consultation"
        secondaryLabel="View Markets"
        secondaryHref="/usa/markets"
      />
    </>
  );
}

