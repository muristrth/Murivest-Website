import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Megaphone, Users, FileSearch, Handshake } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Investment Sales Advisory — U.S. Commercial Real Estate",
  description:
    "Sell-side investment sales advisory for institutional-grade U.S. commercial real estate — positioning, targeted marketing, and negotiation executed on a confidential, mandate-driven basis.",
  alternates: { canonical: `https://${SITE.domain}/usa/sell/investment-sales` },
  openGraph: {
    title: "Investment Sales Advisory — U.S. Commercial Real Estate",
    description:
      "Sell-side investment sales advisory for U.S. commercial real estate.",
    url: `https://${SITE.domain}/usa/sell/investment-sales`,
  },
};

const PROCESS = [
  {
    icon: FileSearch,
    title: "Positioning & Underwriting",
    description:
      "We build the investment thesis, validate the underwriting, and prepare institutional-grade materials that withstand buyer diligence.",
  },
  {
    icon: Users,
    title: "Targeted Buyer Outreach",
    description:
      "Rather than broad marketing, we engage a curated universe of capital most likely to value the asset — maintaining confidentiality where required.",
  },
  {
    icon: Megaphone,
    title: "Process Management",
    description:
      "We run a disciplined process that sustains competitive tension, manages information flow, and protects price discovery.",
  },
  {
    icon: Handshake,
    title: "Negotiation & Closing",
    description:
      "From LOI through due diligence to closing, we negotiate on the seller's behalf and manage the field of interest to your advantage.",
  },
];

export default function SellInvestmentSalesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Investment Sales Advisory",
    serviceType: "Sell-side investment sales advisory",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: `https://${SITE.domain}/usa`,
    },
    areaServed: "US",
    description:
      "Sell-side investment sales advisory for institutional-grade U.S. commercial real estate, executed on a confidential, mandate-driven basis.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-[#1B4332] py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-ink-950 to-ink-900" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">
              Sell · Investment Sales
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Investment sales advisory that positions the asset for the capital that values it most
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Murivest's sell-side investment sales practice represents
              institutional and private owners in the disposition of
              commercial real estate — from positioning and underwriting through
              a disciplined, confidential process to closing.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/contact"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Engage a Sell-Side Mandate
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/sell"
                className="flex items-center justify-center rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                All Sell-Side Mandates
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Our Process"
          title="A managed process, not a passive listing"
          description="Investment sales success is determined before marketing begins. We define the buyer universe, the narrative, and the process design up front — then execute with discipline."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step) => (
            <div
              key={step.title}
              className="rounded-xl border border-[#E8E6E1] bg-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1B4332] text-gold-400">
                <step.icon size={22} />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-[#2C2C2C]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 bg-[#FAF9F6]">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Why a Curated Process</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#2C2C2C] sm:text-4xl">
              The right buyer is worth more than the widest field
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#8B8680]">
              Broad, undifferentiated marketing can depress value by signaling
              urgency or uncertainty. We engage a curated universe of capital
              whose mandates align with the asset — sustaining competitive tension
              without diluting confidentiality or pricing power.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#8B8680]">
              Where discretion is required, the process is run entirely off-market,
              with information released on a need-to-know basis through
              confidentiality agreements.
            </p>
          </div>
          <div className="rounded-xl border border-[#E8E6E1] bg-white p-8">
            <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
              What we prepare before going to market
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#8B8680]">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Validated underwriting and offering memorandum.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Defined target buyer universe by mandate and geography.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Data room structured for efficient diligence.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Process timeline and negotiation strategy.
              </li>
            </ul>
            <Link
              href="/usa/sell/disposition"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#B8956B] transition-colors hover:text-[#C9A87C]"
            >
              Explore discreet disposition
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Adjacent Mandates"
          title="Investment sales in context"
          description="Single-asset investment sales often connects to portfolio strategy or a structured, off-market disposition."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            { label: "Portfolio Sales", href: "/usa/sell/portfolio-sales" },
            { label: "Disposition Advisory", href: "/usa/sell/disposition" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between rounded-xl border border-[#E8E6E1] bg-white p-5 transition-all hover:border-[#B8956B] hover:shadow-md"
            >
              <span className="font-serif text-lg font-semibold text-[#2C2C2C] group-hover:text-[#B8956B] transition-colors">
                {item.label}
              </span>
              <ArrowRight
                size={18}
                className="text-[#FAF9F6] transition-all group-hover:translate-x-1 group-hover:text-[#C9A87C]"
              />
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Position your asset for the right capital"
        description="If you are considering a disposition, we will build the thesis, the buyer universe, and the process — on your behalf alone."
        primaryLabel="Engage a Sell-Side Mandate"
        secondaryLabel="View Property Types"
        secondaryHref="/usa/commercial-real-estate"
      />
    </>
  );
}
