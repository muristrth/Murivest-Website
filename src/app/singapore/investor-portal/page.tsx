import type { Metadata } from 'next';
import Link from 'next/link';
import { Lock, Shield, FileText, Calendar, BarChart3, ArrowRight } from 'lucide-react';
import ScrollReveal from '../(components)/shared/ScrollReveal';
import SectionHeader from '../(components)/shared/SectionHeader';
import { SEO_TEMPLATES } from '../(components)/data/singapore-market-data';

export const metadata: Metadata = {
  title: SEO_TEMPLATES.portal.title,
  description: SEO_TEMPLATES.portal.description,
  keywords: SEO_TEMPLATES.portal.keywords,
};

const benefits = [
  {
    icon: <FileText className="w-5 h-5" strokeWidth={1.2} />,
    title: 'Off-Market Deal Flow',
    description: 'Access exclusive Singapore commercial properties before they reach the open market.',
  },
  {
    icon: <BarChart3 className="w-5 h-5" strokeWidth={1.2} />,
    title: 'Portfolio Analytics',
    description: 'Track your Singapore real estate holdings with institutional-grade reporting.',
  },
  {
    icon: <FileText className="w-5 h-5" strokeWidth={1.2} />,
    title: 'Document Vault',
    description: 'Secure access to OMs, tenancy schedules, and financials with download tracking.',
  },
  {
    icon: <Calendar className="w-5 h-5" strokeWidth={1.2} />,
    title: 'Advisor Scheduling',
    description: 'Book private consultations with our senior Singapore advisory team.',
  },
];

export default function InvestorPortalPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#1B4332]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-4 h-4 text-[#B8956B]" strokeWidth={1.5} />
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8956B] font-medium">Gated Access</p>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-white leading-[1.05] mb-6">
              Investor <span className="italic text-[#B8956B] font-light">Portal</span>
            </h1>
            <p className="text-base text-white/60 max-w-2xl leading-relaxed font-light">
              Exclusive access to off-market opportunities, deal documents, portfolio analytics, 
              and direct communication with our Singapore advisory team.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 bg-[#F8F7F4]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <SectionHeader
            kicker="Member Benefits"
            title="Why Join the Portal"
            subtitle="A secure platform designed for institutional investors who require real-time access to Singapore commercial real estate opportunities."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.1}>
                <div className="bg-white border border-[#E8E6E1] p-8 flex gap-6 hover:shadow-lg transition-all duration-500">
                  <div className="w-12 h-12 border border-[#B8956B]/30 flex items-center justify-center text-[#B8956B] shrink-0">
                    {b.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[#2C2C2C] mb-2">{b.title}</h3>
                    <p className="text-sm text-[#5A5A5A] font-light">{b.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* NDA & Eligibility */}
      <section className="py-16 bg-[#FAF9F6] border-y border-[#E8E6E1]">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <div className="w-16 h-16 border border-[#B8956B]/30 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-6 h-6 text-[#B8956B]" strokeWidth={1.2} />
            </div>
            <h2 className="font-serif text-2xl text-[#2C2C2C] mb-4">Confidentiality & Eligibility</h2>
            <p className="text-sm text-[#5A5A5A] font-light leading-relaxed mb-6">
              Portal access requires execution of a Non-Disclosure Agreement (NDA) and 
              verification of qualified investor status. All documents and deal information 
              are tracked and watermarked to protect confidentiality.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-[#8B8680]">
              <span className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8956B]" />
                NDA Required
              </span>
              <span className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8956B]" />
                Accredited Investors Only
              </span>
              <span className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8956B]" />
                24-48 Hour Approval
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1B4332]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-white mb-4">Apply for Portal Access</h2>
            <p className="text-sm text-white/60 max-w-xl mx-auto font-light mb-8">
              Complete the application form and our team will verify your eligibility 
              within 24-48 hours. All applications are treated with strict confidentiality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/singapore/investor-portal/login"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#B8956B] text-white text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#C9A87C] transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/singapore/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-white/10 transition-colors"
              >
                Request Access
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
