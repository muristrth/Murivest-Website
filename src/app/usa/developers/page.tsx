import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import CTABanner from "../components/CTABanner";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Developers — USA Commercial Real Estate | Murivest",
  description:
    "Murivest supports commercial real estate developers with capital sourcing, land acquisition, joint ventures, and exit strategies across the United States.",
  alternates: { canonical: `https://${SITE.domain}/usa/developers"` },
};

export default function DevelopersPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Developers</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Developer Support & Capital
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest supports commercial real estate developers with capital
            sourcing, land acquisition, joint venture structuring, and exit
            strategies. We act as an intermediary between developers and the
            capital they need to execute.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          <a
            href="/usa/developers/development-sites"
            className="group rounded-2xl border border-[#E8E6E1] bg-white p-8 transition-all hover:border-[#B8956B] hover:shadow-lg"
          >
            <h3 className="font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B]">
              Development Sites
            </h3>
            <p className="mt-3 text-[#8B8680]">
              Site sourcing and entitlement support for ground-up commercial
              development across the United States.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B8956B]">
              Learn more <span aria-hidden="true">→</span>
            </span>
          </a>
          <a
            href="/usa/developers/land"
            className="group rounded-2xl border border-[#E8E6E1] bg-white p-8 transition-all hover:border-[#B8956B] hover:shadow-lg"
          >
            <h3 className="font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B]">
              Land Acquisition
            </h3>
            <p className="mt-3 text-[#8B8680]">
              Land banking and acquisition support for developers seeking
              entitled and entitled-to-be sites in growth markets.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B8956B]">
              Learn more <span aria-hidden="true">→</span>
            </span>
          </a>
          <a
            href="/usa/developers/joint-ventures"
            className="group rounded-2xl border border-[#E8E6E1] bg-white p-8 transition-all hover:border-[#B8956B] hover:shadow-lg"
          >
            <h3 className="font-serif text-2xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B]">
              Joint Ventures
            </h3>
            <p className="mt-3 text-[#8B8680]">
              Joint venture structuring and capital partner introductions for
              development projects requiring equity, debt, or both.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B8956B]">
              Learn more <span aria-hidden="true">→</span>
            </span>
          </a>
        </div>
      </Section>

      <CTABanner
        title="Engage Murivest on your next development"
        description="Whether acquiring land, sourcing capital, or structuring a joint venture, our team is ready to advise. Start with a confidential consultation."
        primaryLabel="Request a Mandate"
        primaryHref="/usa/contact"
      />
    </>
  );
}
