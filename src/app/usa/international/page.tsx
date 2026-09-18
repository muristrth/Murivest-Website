import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import CTABanner from "../components/CTABanner";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "International — USA Commercial Real Estate | Murivest",
  description:
    "Murivest supports international investors seeking to access U.S. commercial real estate markets — from Africa, the Middle East, Europe, and Asia.",
  alternates: { canonical: `https://${SITE.domain}/usa/international"` },
};

export default function InternationalPage() {
  return (
    <>
      <section className="bg-[#2C2C2C] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-[#8B7355]">International Capital</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Cross-Border CRE Access
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#8B7355]">
            Murivest supports international investors — from Africa, the Middle
            East, Europe, and Asia — seeking to access U.S. commercial real
            estate markets. We provide market intelligence, mandate structuring,
            and relationship-driven access to U.S. opportunities.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <a
            href="/usa/international/africa"
            className="group rounded-2xl border border-[#E5E2DC] bg-white p-8 transition-all hover:border-[#8B7355] hover:shadow-lg"
          >
            <h3 className="font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#8B7355]">
              Africa → USA
            </h3>
            <p className="mt-3 text-[#5A5A5A]">
              Supporting African institutional investors, family offices, and
              sovereign wealth funds seeking U.S. commercial real estate
              exposure.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#8B7355]">
              Learn more <span aria-hidden="true">→</span>
            </span>
          </a>
          <a
            href="/usa/international/middle-east"
            className="group rounded-2xl border border-[#E5E2DC] bg-white p-8 transition-all hover:border-[#8B7355] hover:shadow-lg"
          >
            <h3 className="font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#8B7355]">
              Middle East → USA
            </h3>
            <p className="mt-3 text-[#5A5A5A]">
              Supporting Middle Eastern sovereign wealth funds, family offices,
              and institutional investors seeking U.S. commercial real estate.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#8B7355]">
              Learn more <span aria-hidden="true">→</span>
            </span>
          </a>
          <a
            href="/usa/international/europe"
            className="group rounded-2xl border border-[#E5E2DC] bg-white p-8 transition-all hover:border-[#8B7355] hover:shadow-lg"
          >
            <h3 className="font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#8B7355]">
              Europe → USA
            </h3>
            <p className="mt-3 text-[#5A5A5A]">
              Supporting European institutional investors, family offices, and
              private equity seeking U.S. commercial real estate opportunities.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#8B7355]">
              Learn more <span aria-hidden="true">→</span>
            </span>
          </a>
          <a
            href="/usa/international/asia"
            className="group rounded-2xl border border-[#E5E2DC] bg-white p-8 transition-all hover:border-[#8B7355] hover:shadow-lg"
          >
            <h3 className="font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#8B7355]">
              Asia → USA
            </h3>
            <p className="mt-3 text-[#5A5A5A]">
              Supporting Asian institutional investors, family offices, and
              sovereign wealth funds seeking U.S. commercial real estate
              exposure.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#8B7355]">
              Learn more <span aria-hidden="true">→</span>
            </span>
          </a>
        </div>
      </Section>

      <Section className="py-20 bg-[#F8F7F4]">
        <SectionHeading
          eyebrow="How We Support International Investors"
          title="Cross-border advisory for U.S. CRE"
          description="We help international investors navigate U.S. commercial real estate — from market selection and due diligence to financing, tax considerations, and execution."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Market Selection",
              text: "We advise on U.S. market selection — identifying markets with strong fundamentals, transparent regulation, and favorable risk-adjusted return profiles.",
            },
            {
              title: "Due Diligence",
              text: "We coordinate comprehensive due diligence — environmental, legal, financial, and market — to de-risk cross-border investments.",
            },
            {
              title: "Financing",
              text: "We source debt and equity financing — connecting international investors with U.S. lenders and capital partners familiar with cross-border structures.",
            },
            {
              title: "Execution",
              text: "We manage the full transaction process — from LOI through closing — ensuring smooth execution across jurisdictions and time zones.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#E5E2DC] bg-white p-6"
            >
              <h3 className="font-serif text-lg font-semibold text-[#2C2C2C]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5A5A5A]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Engage Murivest on your U.S. CRE mandate"
        description="Whether acquiring, disposing, or sourcing capital, our team is ready to advise. Start with a confidential consultation."
        primaryLabel="Request a Mandate"
        primaryHref="/usa/contact"
      />
    </>
  );
}
