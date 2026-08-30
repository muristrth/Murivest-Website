import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Calculator, CheckSquare, FileText } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import CTABanner from "../components/CTABanner";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Resources — USA CRE Guides, Glossary, Calculators & Checklists",
  description:
    "Murivest institutional resources: CRE guides, a sector glossary, transaction calculators, and due-diligence checklists for U.S. commercial real estate investors.",
  alternates: { canonical: `https://${SITE.domain}/usa/resources` },
  openGraph: {
    title: "Resources — USA CRE Guides, Glossary, Calculators & Checklists",
    description:
      "CRE guides, a sector glossary, transaction calculators, and due-diligence checklists for institutional U.S. investors.",
    url: `https://${SITE.domain}/usa/resources`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Murivest Resources — USA CRE Guides, Glossary, Calculators & Checklists",
  description:
    "Institutional resources for U.S. commercial real estate investors: guides, glossary, calculators, and checklists.",
  url: `https://${SITE.domain}/usa/resources`,
  isPartOf: { "@type": "WebSite", "@id": `https://${SITE.domain}/#website` },
  about: {
    "@type": "Organization",
    "@id": `https://${SITE.domain}/usa/#organization`,
  },
  inLanguage: "en-US",
  breadcrumb: { "@id": `https://${SITE.domain}/usa/resources/#breadcrumb` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `https://${SITE.domain}/usa/resources/#breadcrumb`,
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
      name: "Resources",
      item: `https://${SITE.domain}/usa/resources`,
    },
  ],
};

const RESOURCE_CATEGORIES = [
  {
    icon: BookOpen,
    title: "Guides",
    description:
      "Deep-dive primers on acquisition, disposition, financing, and 1031 exchanges for institutional investors.",
    href: "/usa/resources/guides",
  },
  {
    icon: FileText,
    title: "Glossary",
    description:
      "Clear definitions of the U.S. CRE terms and metrics that shape pricing and underwriting decisions.",
    href: "/usa/resources/glossary",
  },
  {
    icon: Calculator,
    title: "Calculators",
    description:
      "Core transaction and underwriting formulas — cap rate, IRR, NPV, cash-on-cash — used in every Murivest engagement.",
    href: "/usa/resources/calculators",
  },
  {
    icon: CheckSquare,
    title: "Checklists",
    description:
      "Due-diligence, acquisition-readiness, and disposition-readiness checklists built from live transactions.",
    href: "/usa/resources/checklists",
  },
];

export default function ResourcesPage() {
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
            <Eyebrow className="text-gold-400">Resources</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Institutional knowledge for U.S. commercial real estate
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Guides, glossaries, calculators, and checklists built from the
              same underwriting discipline that underpins our mandate-driven
              advisory practice.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="What's Here"
          title="Resource categories"
          description="Each resource is designed to accelerate decision-making for institutional investors and principals evaluating U.S. commercial real estate opportunities."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RESOURCE_CATEGORIES.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group flex flex-col rounded-xl border border-[#E8E6E1] bg-white p-6 transition-all hover:border-[#B8956B] hover:shadow-lg hover:shadow-ink-900/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1B4332] text-gold-400 transition-colors group-hover:bg-[#B8956B]">
                <cat.icon size={22} />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B] transition-colors">
                {cat.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
                {cat.description}
              </p>
              <ArrowRight
                size={18}
                className="mt-5 self-start text-[#FAF9F6] transition-all group-hover:translate-x-1 group-hover:text-[#C9A87C]"
              />
            </Link>
          ))}
        </div>
      </Section>

      {/* Cross-links */}
      <Section className="py-20 bg-[#FAF9F6]">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Research"
              title="Murivest Research"
              description="Access our latest market reports, investment theses, and sector briefs."
            />
            <Link
              href="/usa/research"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B8956B] hover:text-[#C9A87C] transition-colors"
            >
              Browse research
              <ArrowRight size={16} />
            </Link>
          </div>
          <div>
            <SectionHeading
              eyebrow="Submit"
              title="Deal submission"
              description="Have an opportunity that fits our mandate profile? Submit it for confidential review."
            />
            <Link
              href="/usa/submit-a-deal"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B8956B] hover:text-[#C9A87C] transition-colors"
            >
              Submit a deal
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      <CTABanner
        title="Need something specific?"
        description="Contact us to discuss a resource, a market question, or your next investment mandate."
        primaryLabel="Request a Mandate"
      />
    </>
  );
}
