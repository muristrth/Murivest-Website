import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import SubmitDealForm from "../components/SubmitDealForm";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Submit a Deal — USA Commercial Real Estate | Murivest",
  description:
    "Submit a commercial real estate opportunity to Murivest USA. Owners, developers, brokers, and intermediaries can submit assets for consideration on a confidential basis.",
  alternates: { canonical: `https://${SITE.domain}/usa/submit-a-deal"` },
};

export default function SubmitADealPage() {
  return (
    <>
      <section className="bg-[#0F2E22] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="text-gold-400">Submit a Deal</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Submit an Opportunity
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C9A87C]">
            Owners, developers, brokers, and intermediaries may submit commercial
            real estate opportunities for Murivest&apos;s consideration. All
            submissions are treated with strict confidentiality.
          </p>
        </div>
      </section>

      <Section className="py-20">
        <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-3">
            <SectionHeading
              title="Submit an opportunity"
              description="Provide as much detail as possible. All fields marked with * are required."
            />
            <SubmitDealForm />
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-[#E8E6E1] bg-[#FAF9F6] p-8">
              <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
                What happens next
              </h3>
              <ol className="mt-4 space-y-3 text-sm text-[#8B8680] list-decimal list-inside">
                <li>Our team reviews the submission for mandate alignment.</li>
                <li>
                  If the opportunity fits our current focus, we will reach out to
                  discuss next steps.
                </li>
                <li>
                  We may request additional information or a confidentiality
                  agreement before proceeding.
                </li>
                <li>
                  All engagements are conducted on a confidential, mandate-driven
                  basis.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
