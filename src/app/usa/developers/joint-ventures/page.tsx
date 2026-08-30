import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Joint Ventures — USA Commercial Real Estate | Murivest",
  description:
    "Murivest structures joint ventures and introduces capital partners for commercial real estate development projects across the United States.",
  alternates: { canonical: `https://${SITE.domain}/usa/developers/joint-ventures"` },
};

export default function JointVenturesPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Joint Ventures</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            JV Structuring & Capital Partners
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Murivest structures joint ventures and introduces capital partners
            for commercial real estate development projects. We connect
            developers with equity and debt capital — and help structure
            partnerships that align incentives and protect both parties.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="What We Do"
          title="JV structuring and capital introductions"
          description="We help developers secure the capital they need — and structure partnerships that work for both developers and capital providers."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Capital Partner Sourcing",
              text: "We identify and introduce developers to equity and debt capital partners — institutional investors, family offices, private equity, and debt funds.",
            },
            {
              title: "JV Structuring",
              text: "We advise on joint venture structure — waterfall mechanics, governance, control provisions, and exit mechanisms — to align incentives and protect interests.",
            },
            {
              title: "Deal Packaging",
              text: "We help developers package deals for capital partners — preparing investment memos, underwriting, and presentation materials that institutional capital expects.",
            },
            {
              title: "Negotiation Support",
              text: "We support negotiation with capital partners — helping developers secure favorable terms while maintaining relationship capital.",
            },
            {
              title: "Capital Stack Advisory",
              text: "We advise on capital stack optimization — equity, mezzanine, debt, and preferred equity — to maximize leverage and returns while managing risk.",
            },
            {
              title: "Exit Planning",
              text: "We advise on exit strategy from inception — helping developers and capital partners understand liquidation options and timing.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#E8E6E1] bg-white p-6"
            >
              <h3 className="font-serif text-lg font-semibold text-[#2C2C2C]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
                {item.text}
              </p>
            </div>
          ))}
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

