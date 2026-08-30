import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Handshake, FileText, Search } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Investor Mandates — USA Commercial Real Estate",
  description:
    "Murivest Group's investor mandate framework: confidential, structured engagements for acquisition, disposition, financing, and leasing across U.S. commercial real estate.",
  alternates: { canonical: `https://${SITE.domain}/usa/invest/mandates` },
  openGraph: {
    title: "Investor Mandates — USA Commercial Real Estate",
    description:
      "Confidential, structured investor mandates for acquisition, disposition, financing, and leasing across U.S. commercial real estate.",
    url: `https://${SITE.domain}/usa/invest/mandates`,
  },
};

const MANDATE_TYPES = [
  {
    icon: Search,
    title: "Acquisition Mandate",
    description:
      "Buy-side representation for institutional investors pursuing specific asset types, markets, or portfolio strategies. We source opportunities, lead underwriting, and manage the acquisition process from identification through closing.",
  },
  {
    icon: FileText,
    title: "Disposition Mandate",
    description:
      "Sell-side advisory for principals seeking to exit or rebalance commercial real estate positions. We manage pricing strategy, marketing, buyer qualification, and negotiation to maximize outcomes while preserving confidentiality.",
  },
  {
    icon: Handshake,
    title: "Financing Mandate",
    description:
      "Debt and equity capital sourcing for acquisitions, refinancings, and development projects. We connect sponsors with qualified capital providers — including debt funds, life companies, private debt, and institutional equity.",
  },
  {
    icon: ShieldCheck,
    title: "Leasing Mandate",
    description:
      "Tenant and landlord representation for lease transactions across office, industrial, and retail assets. We provide market-driven pricing, term negotiation, and tenant improvement advisory.",
  },
];

const ENGAGEMENT_STEPS = [
  {
    number: "01",
    title: "Confidential Consultation",
    description:
      "We begin with a structured consultation to understand your investment objectives, portfolio strategy, risk tolerance, and the specific outcome you seek.",
  },
  {
    number: "02",
    title: "Mandate Agreement",
    description:
      "A clear, written mandate agreement defines scope, fees, exclusivity (if applicable), and reporting cadence — ensuring alignment before any work begins.",
  },
  {
    number: "03",
    title: "Strategy & Execution",
    description:
      "Our team executes the mandate with discipline: sourcing, underwriting, marketing, negotiation, and closing — all with full transparency and regular reporting.",
  },
  {
    number: "04",
    title: "Reporting & Review",
    description:
      "Throughout the engagement, we provide structured progress reports, market updates, and strategic reviews to keep you informed and in control.",
  },
];

export default function MandatesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://${SITE.domain}/usa/invest/mandates/#webpage`,
    url: `https://${SITE.domain}/usa/invest/mandates`,
    name: "Investor Mandates — USA Commercial Real Estate",
    description:
      "Confidential, structured investor mandates for acquisition, disposition, financing, and leasing across U.S. commercial real estate.",
    isPartOf: { "@type": "WebSite", "@id": `https://${SITE.domain}/#website` },
    inLanguage: "en-US",
    about: { "@id": `https://${SITE.domain}/usa/#organization` },
    breadcrumb: {
      "@id": `https://${SITE.domain}/usa/invest/mandates/#breadcrumb`,
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
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-ink-950 to-ink-900" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">Investor Mandates</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Confidential, structured engagements for institutional investors
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Every Murivest engagement operates under a clearly defined
              mandate — acquisition, disposition, financing, or leasing — with
              structured scope, transparent fees, and outcome-based alignment.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/contact"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Start a Mandate
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/invest/criteria"
                className="flex items-center justify-center rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                View Criteria
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mandate types */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="Mandate Types"
          title="Four core mandate categories"
          description="Murivest engages across the full commercial real estate lifecycle — from capital sourcing to disposition — on a confidential, mandate-driven basis."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {MANDATE_TYPES.map((mandate) => (
            <div
              key={mandate.title}
              className="rounded-xl border border-[#E8E6E1] bg-white p-6 transition-all hover:border-[#B8956B] hover:shadow-lg hover:shadow-ink-900/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1B4332] text-gold-400">
                <mandate.icon size={22} />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-[#2C2C2C]">
                {mandate.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
                {mandate.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Engagement model */}
      <Section className="py-20 bg-[#FAF9F6]">
        <SectionHeading
          eyebrow="Engagement Model"
          title="How mandates work at Murivest"
          description="Our mandate model is designed for clarity, alignment, and accountability — from the first conversation through closing and beyond."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {ENGAGEMENT_STEPS.map((step) => (
            <div key={step.number} className="relative">
              <div className="font-serif text-5xl font-semibold text-[#FAF9F6]">
                {step.number}
              </div>
              <h3 className="mt-3 font-serif text-xl font-semibold text-[#2C2C2C]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why mandates */}
      <Section className="py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Why Mandates</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#2C2C2C] sm:text-4xl">
              Alignment without conflict
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#8B8680]">
              <p>
                The mandate model exists to eliminate the principal-agent
                problems that plague traditional brokerage and advisory
                relationships. By defining scope, fees, and outcomes upfront,
                we ensure that every action our team takes is aligned with your
                interests.
              </p>
              <p>
                Unlike firms that manage proprietary funds or carry inventory,
                Murivest has no conflicting agenda. Our only objective is to
                execute your mandate with precision, discretion, and
                institutional-grade rigor.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-[#B8956B]">
              <ShieldCheck size={18} className="text-gold-500" />
              <span>Independent. Conflict-free. Mandate-driven.</span>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[#E8E6E1] bg-white p-6">
              <div className="font-serif text-4xl font-semibold text-[#B8956B]">
                100%
              </div>
              <div className="mt-2 text-sm text-[#8B8680]">
                Mandate-based engagements
              </div>
            </div>
            <div className="rounded-xl border border-[#E8E6E1] bg-white p-6">
              <div className="font-serif text-4xl font-semibold text-[#B8956B]">
                0
              </div>
              <div className="mt-2 text-sm text-[#8B8680]">
                Proprietary fund conflicts
              </div>
            </div>
            <div className="rounded-xl border border-[#E8E6E1] bg-white p-6">
              <div className="font-serif text-4xl font-semibold text-[#B8956B]">
                40+
              </div>
              <div className="mt-2 text-sm text-[#8B8680]">
                U.S. markets covered
              </div>
            </div>
            <div className="rounded-xl border border-[#E8E6E1] bg-white p-6">
              <div className="font-serif text-4xl font-semibold text-[#B8956B]">
                6
              </div>
              <div className="mt-2 text-sm text-[#8B8680]">
                Property type specializations
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Connected pages */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="Explore Further"
          title="Related resources"
          description="Learn more about Murivest's invest platform and how mandates connect to strategies, criteria, and opportunities."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link
            href="/usa/invest/strategies"
            className="group flex flex-col rounded-xl border border-[#E8E6E1] bg-white p-6 transition-all hover:border-[#B8956B] hover:shadow-lg"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
              Strategy
            </span>
            <h3 className="mt-2 font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B] transition-colors">
              Investment Strategies
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
              Core-plus, value-add, opportunistic, and development strategies
              tailored to specific return, risk, and hold-period objectives.
            </p>
            <span className="mt-4 flex items-center gap-1.5 text-sm font-medium text-[#B8956B]">
              View strategies
              <ArrowRight size={16} className="transition-all group-hover:translate-x-1" />
            </span>
          </Link>
          <Link
            href="/usa/invest/opportunities"
            className="group flex flex-col rounded-xl border border-[#E8E6E1] bg-white p-6 transition-all hover:border-[#B8956B] hover:shadow-lg"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
              Opportunities
            </span>
            <h3 className="mt-2 font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B] transition-colors">
              Current Opportunities
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
              A curated view of mandates and opportunities currently being
              executed or sourced. Accessible to qualified investors on a
              confidential basis.
            </p>
            <span className="mt-4 flex items-center gap-1.5 text-sm font-medium text-[#B8956B]">
              View opportunities
              <ArrowRight size={16} className="transition-all group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </Section>

      <CTABanner
        title="Define your investor mandate with Murivest"
        description="Whether you are acquiring, disposing, financing, or leasing, our team is ready to advise under a confidential mandate structure."
        primaryLabel="Start a Mandate"
        secondaryLabel="View Strategies"
        secondaryHref="/usa/invest/strategies"
      />
    </>
  );
}

