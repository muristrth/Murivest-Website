import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, TrendingUp, Users, FileText } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Market Articles — USA CRE Thought Leadership",
  description:
    "Murivest articles on U.S. commercial real estate — investment-framework analysis, market-regime commentary, and anonymized deal-structure walkthroughs for institutional investors.",
  alternates: { canonical: `https://${SITE.domain}/usa/insights/articles` },
  openGraph: {
    title: "Market Articles — USA CRE Thought Leadership",
    description:
      "Investment-framework analysis, market-regime commentary, and anonymized deal-structure walkthroughs for institutional U.S. CRE investors.",
    url: `https://${SITE.domain}/usa/insights/articles`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Murivest Articles — USA CRE Thought Leadership",
  description:
    "Institutional thought-leadership articles on U.S. commercial real estate investment frameworks and market analysis.",
  url: `https://${SITE.domain}/usa/insights/articles`,
  isPartOf: { "@type": "WebSite", "@id": `https://${SITE.domain}/#website` },
  about: {
    "@type": "Organization",
    "@id": `https://${SITE.domain}/usa/#organization`,
  },
  inLanguage: "en-US",
  breadcrumb: { "@id": `https://${SITE.domain}/usa/insights/articles/#breadcrumb` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `https://${SITE.domain}/usa/insights/articles/#breadcrumb`,
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
      name: "Articles",
      item: `https://${SITE.domain}/usa/insights/articles`,
    },
  ],
};

const ARTICLE_THEMES = [
  {
    icon: BookOpen,
    title: "Investment Frameworks",
    description:
      "How we approach risk-pricing, sector allocation, and entry-point discipline across market cycles.",
  },
  {
    icon: TrendingUp,
    title: "Market Regime Analysis",
    description:
      "Observations on the forces shaping U.S. CRE — monetary policy, supply-demand imbalances, and structural rotation.",
  },
  {
    icon: Users,
    title: "Investor Behavior",
    description:
      "What institutional allocators are prioritizing, how pricing is evolving, and where capital is deploying.",
  },
  {
    icon: FileText,
    title: "Deal-Structure Walkthroughs",
    description:
      "Anonymized reviews of transaction mechanics, structuring considerations, and lessons learned.",
  },
];

export default function ArticlesPage() {
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
            <Eyebrow className="text-gold-400">Articles</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              U.S. CRE investment frameworks and market analysis
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Murivest publishes articles that distill proprietary market
              observations, investment-framework thinking, and anonymized
              deal-structure walkthroughs for institutional investors.
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
                href="/usa/research"
                className="group flex items-center justify-center gap-2 rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                Murivest Research
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial scope */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="What We Cover"
          title="Editorial scope"
          description="Each piece is rooted in client work, market observations, and the analytical rigour that underpins our mandate-driven engagements."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ARTICLE_THEMES.map((theme) => (
            <div
              key={theme.title}
              className="rounded-xl border border-[#E8E6E1] bg-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1B4332] text-gold-400">
                <theme.icon size={22} />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-[#2C2C2C]">
                {theme.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
                {theme.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Access */}
      <Section className="py-20 bg-[#FAF9F6]">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Distribution</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#2C2C2C] sm:text-4xl">
            Confidential, targeted distribution
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#8B8680]">
            Articles are distributed to select institutional clients and
            publication subscribers. A subset is made available through
            Murivest Research. For subscription access, contact our research
            team.
          </p>
        </div>
      </Section>

      <CTABanner
        title="Subscribe to Murivest analysis"
        description="Receive articles, market reports, and sector briefs from our research team."
        primaryLabel="Contact Our Research Team"
      />
    </>
  );
}
