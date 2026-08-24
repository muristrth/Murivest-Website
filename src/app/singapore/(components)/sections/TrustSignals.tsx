'use client';

import ScrollReveal from '../shared/ScrollReveal';
import SectionHeader from '../shared/SectionHeader';
import { TRUST_SIGNALS } from '../data/singapore-market-data';

export default function TrustSignals() {
  return (
    <section className="py-20 md:py-32 bg-[#F8F7F4]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <SectionHeader
          kicker="Track Record"
          title="Institutional Discipline. Verifiable Process."
          subtitle="Every mandate is underwritten to the same standard, regardless of size."
          align="center"
          className="mb-16"
        />

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-4">
          {[
            { label: 'Transaction Volume', value: TRUST_SIGNALS.transactionVolume },
            { label: 'Years Active', value: TRUST_SIGNALS.yearsExperience },
            { label: 'Institutional Clients', value: TRUST_SIGNALS.institutionalClients },
            { label: 'Markets Covered', value: TRUST_SIGNALS.countriesCovered },
          ].map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-mono text-3xl md:text-4xl text-[#2C2C2C] mb-2">{stat.value}</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A]">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <p className="text-center text-[10px] text-[#5A5A5A]/70 italic mb-20">
          As at Q2 2026. Figures reflect completed and mandated transactions.
        </p>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TRUST_SIGNALS.testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="border border-[#E5E2DC] bg-white p-8 h-full">
                <div className="w-8 h-8 border border-[#8B7355]/30 flex items-center justify-center mb-6">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#8B7355">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                  </svg>
                </div>
                <p className="text-sm text-[#5A5A5A] leading-relaxed font-light italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-4 border-t border-[#E5E2DC]">
                  <p className="text-[12px] text-[#2C2C2C] font-medium">{t.author}</p>
                  <p className="text-[11px] text-[#5A5A5A]">{t.company}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Partner / research network */}
        <ScrollReveal>
          <div className="text-center">
            <p className="text-[9px] tracking-[0.3em] uppercase text-[#5A5A5A] mb-6 font-medium">
              Research & Advisory Network
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {TRUST_SIGNALS.partners.map((partner) => (
                <span
                  key={partner}
                  className="text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A] px-4 py-2 border border-[#E5E2DC] hover:border-[#8B7355]/40 transition-colors"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}