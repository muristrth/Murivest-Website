import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mic, MessageSquare, Newspaper, Globe } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Market Commentary — USA CRE Partner Perspectives",
  description:
    "Murivest commentary — partner perspectives on U.S. commercial real estate policy, capital allocation, and market narratives for institutional investors.",
  alternates: { canonical: `https://${SITE.domain}/usa/insights/commentary` },
  openGraph: {
    title: "Market Commentary — USA CRE Partner Perspectives",
    description:
      "Partner perspectives on U.S. CRE policy, capital allocation, and market narratives.",
    url: `https://${SITE.domain}/usa/insights/commentary`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Murivest Commentary — USA CRE Partner Perspectives",
  description:
    "Partner perspectives on U.S. commercial real estate policy, capital allocation, and market narratives for institutional investors.",
  url: `https://${SITE.domain}/usa/insights/commentary`,
  isPartOf: { "@type": "WebSite", "@id": `https://${SITE.domain}/#website` },
  about: {
    "@type": "Organization",
    "@id": `https://${SITE.domain}/usa/#organization`,
  },
  inLanguage: "en-US",
  breadcrumb: { "@id": `https://${SITE.domain}/usa/insights/commentary/#breadcrumb` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `https://${SITE.domain}/usa/insights/commentary/#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Murivest",
      item: `https://${SITE.domain}`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "USA",
      item: `https://${SITE.domain}/usa`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Insights",
      item: `https://${SITE.domain}/usa/insights`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Commentary",
      item: `https://${SITE.domain}/usa/insights/commentary`,
    },
  ],
};

const COMMENTARY_PILLARS = [
  {
    icon: Mic,
    title: "Partner Perspectives",
    description:
      "Direct views from the desk on positioning, pricing, and what we're hearing from capital and operators.",
  },
  {
    icon: Newspaper,
    title: "Policy Watch",
    description:
      "What fiscal, regulatory, and tax developments mean for U.S. commercial real estate owners and allocators.",
  },
  {
    icon: Globe,
    title: "Capital Allocation Views",
    description:
      "How institutional capital is deploying across sectors and structures, and where the flow is turning.",
  },
  {
    icon: MessageSquare,
    title: "Market Narratives",
    description:
      "Cutting through the noise — the narratives that are shaping pricing today and what to watch instead.",
  },
];

export default function CommentaryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1B4332] py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-ink-950 to-ink-900" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">Commentary</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Partner perspectives on U.S. commercial real estate
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Our commentary cuts through market noise with direct views on
              positioning, pricing, policy, and the capital flows that are
              actually moving U.S. CRE today.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/insights"
                className="group flex items-center justify-center gap-2 rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                All Insights
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/research/market-outlook"
                className="group flex items-center justify-center gap-2 rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                Market Outlook
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Commentary pillars */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="What We Say"
          title="The scope of our commentary"
          description="Commentary is published by senior team members and reflects on-the-ground positioning, not generic market recaps."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COMMENTARY_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-[#E8E6E1] bg-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1B4332] text-gold-400">
                <pillar.icon size={22} />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-[#2C2C2C]">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Note on positioning */}
      <Section className="py-20 bg-[#FAF9F6]">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Position</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#2C2C2C] sm:text-4xl">
            Discretion over volume
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#8B8680]">
            Our commentary is selective. We publish when we believe the market
            has drawn the wrong conclusion, not to fill column inches. Views
            reflect our positioning process and are intended for institutional
            investors who share a margin-of-safety mindset.
          </p>
        </div>
      </Section>

      <CTABanner
        title="Engage with our perspective"
        description="Contact our capital markets team to discuss how current market narratives affect your portfolio."
        primaryLabel="Request a Mandate"
      />
    </>
  );
}
