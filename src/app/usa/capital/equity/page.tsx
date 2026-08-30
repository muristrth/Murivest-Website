import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, Scale, Handshake, ShieldCheck } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Equity Financing  -  U.S. Commercial Real Estate",
  description:
    "Equity financing for U.S. commercial real estate  -  joint-venture and preferred-equity structuring for acquisitions, development, and recapitalizations across the risk spectrum.",
  alternates: { canonical: `https://${SITE.domain}/usa/capital/equity` },
  openGraph: {
    title: "Equity Financing  -  U.S. Commercial Real Estate",
    description:
      "Joint-venture and preferred-equity structuring for U.S. commercial real estate.",
    url: `https://${SITE.domain}/usa/capital/equity`,
  },
};

const STRUCTURES = [
  {
    icon: Layers,
    title: "Joint-Venture Equity",
    description:
      "LP/GP and co-investment structures that align sponsor and capital around a defined business plan, waterfall, and governance framework.",
  },
  {
    icon: Scale,
    title: "Preferred Equity",
    description:
      "Structured subordinate capital that bridges a gap in the stack  -  often used to preserve sponsor control while completing the capitalization.",
  },
  {
    icon: Handshake,
    title: "Co-Investment",
    description:
      "Direct, often bilateral equity from institutional partners seeking exposure alongside an operating sponsor, structured for the specific asset.",
  },
  {
    icon: ShieldCheck,
    title: "Independent Structuring",
    description:
      "We design the equity terms to serve the asset and the sponsor  -  without a proprietary fund or balance sheet compelling a particular form.",
  },
];

export default function EquityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Equity Financing",
    serviceType: "Equity capital structuring and sourcing",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: `https://${SITE.domain}/usa`,
    },
    areaServed: "US",
    description:
      "Joint-venture, preferred, and co-investment equity financing for U.S. commercial real estate acquisitions, development, and recapitalizations.",
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
              Capital  |  Equity
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Equity financing structured for the business plan, not the template
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Murivest structures and sources equity for U.S. commercial real
              estate  -  joint-venture, preferred, and co-investment capital for
              acquisitions, development, and recapitalizations. We design the
              terms to serve the asset and the sponsor, then introduce the capital
              to execute them.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/contact"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Discuss Equity Financing
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/capital"
                className="flex items-center justify-center rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                All Capital Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Equity Structures"
          title="The right form of equity for the right mandate"
          description="Equity is not one instrument. We structure the form  -  JV, preferred, or co-investment  -  around the business plan, the governance the sponsor needs, and the return the capital seeks."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STRUCTURES.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#E8E6E1] bg-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1B4332] text-gold-400">
                <item.icon size={22} />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-[#2C2C2C]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 bg-[#FAF9F6]">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Structuring Discipline</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#2C2C2C] sm:text-4xl">
              Waterfalls and governance are where value is won or lost
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#8B8680]">
              The economics of an equity partnership are defined by the waterfall,
              the governance, and the exit mechanics  -  long before the capital is
              deployed. We structure these deliberately, ensuring the sponsor
              retains appropriate control and incentive while delivering the risk
              and return profile the equity partner requires.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#8B8680]">
              Because we are independent, the structure we recommend is built for
              the asset  -  not to place a particular fund's standard terms.
            </p>
          </div>
          <div className="rounded-xl border border-[#E8E6E1] bg-white p-8">
            <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
              Where equity financing applies
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#8B8680]">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Acquisition of stabilized or value-add assets.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Development and ground-up construction.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Recapitalization of existing positions.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Bridge to a refinancing or disposition event.
              </li>
            </ul>
            <Link
              href="/usa/capital/debt"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#B8956B] transition-colors hover:text-[#C9A87C]"
            >
              Pair with debt financing
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Adjacent Services"
          title="Equity within the capital stack"
          description="Equity is typically paired with structuring advice, debt, or recapitalization depending on the mandate."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { label: "Capital Advisory", href: "/usa/capital/capital-advisory" },
            { label: "Debt Financing", href: "/usa/capital/debt" },
            { label: "Recapitalization", href: "/usa/capital/recapitalization" },
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
        title="Structure and source your equity"
        description="If you need to capitalize an acquisition, development, or recapitalization, we will design the structure and introduce the right equity."
        primaryLabel="Discuss Equity Financing"
        secondaryLabel="Explore Capital Advisory"
        secondaryHref="/usa/capital/capital-advisory"
      />
    </>
  );
}
