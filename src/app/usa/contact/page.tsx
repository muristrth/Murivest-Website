import type { Metadata } from "next";
import { Mail, Clock, ShieldCheck, Lock } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import InquiryForm from "../components/InquiryForm";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact — USA Capital Markets Advisory",
  description:
    "Contact Murivest Group's U.S. capital markets team to discuss investment sales, leasing, capital markets advisory, or to engage us on a mandate.",
  alternates: { canonical: `https://${SITE.domain}/usa/contact` },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#2C2C2C] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-[#8B7355]">Contact</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Start a conversation with our capital markets team
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#8B7355]">
              Whether you are exploring an acquisition, planning a disposition,
              seeking capital, or evaluating a leasing strategy — we welcome
              the opportunity to discuss your objectives in confidence.
            </p>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-3">
            <SectionHeading
              title="Request a mandate or inquiry"
              description="Tell us about your investment objectives or the property you'd like to discuss. All inquiries are treated with strict confidentiality."
            />
            <div className="mt-8">
              <InquiryForm defaultType="mandate" />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-[#E5E2DC] bg-[#F8F7F4] p-8">
              <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
                Direct contact
              </h3>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <Mail size={20} className="mt-0.5 shrink-0 text-[#8B7355]" />
                  <div>
                    <div className="text-sm font-medium text-[#8B7355]">
                      Email
                    </div>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-sm text-[#8B7355] hover:text-[#8B7355] transition-colors"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={20} className="mt-0.5 shrink-0 text-[#8B7355]" />
                  <div>
                    <div className="text-sm font-medium text-[#8B7355]">
                      Response time
                    </div>
                    <div className="text-sm text-[#5A5A5A]">
                      Within one business day
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    size={20}
                    className="mt-0.5 shrink-0 text-[#8B7355]"
                  />
                  <div>
                    <div className="text-sm font-medium text-[#8B7355]">
                      Confidentiality
                    </div>
                    <div className="text-sm text-[#5A5A5A]">
                      All communications are kept strictly confidential
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lock size={20} className="mt-0.5 shrink-0 text-[#8B7355]" />
                  <div>
                    <div className="text-sm font-medium text-[#8B7355]">
                      Data privacy
                    </div>
                    <div className="text-sm text-[#5A5A5A]">
                      Your information is never shared with third parties
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-[#E5E2DC] bg-white p-8">
              <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
                What to expect
              </h3>
              <ol className="mt-4 space-y-4">
                {[
                  "We review your inquiry and assess how Murivest can help.",
                  "A team member reaches out within one business day to schedule a confidential consultation.",
                  "We discuss your objectives, timeline, and whether a formal mandate engagement is appropriate.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8B7355] text-xs font-semibold text-white">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-[#5A5A5A]">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
