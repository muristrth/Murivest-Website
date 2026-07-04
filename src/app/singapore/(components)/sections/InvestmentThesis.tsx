'use client';

import { Shield, Lock, TrendingUp } from 'lucide-react';
import ScrollReveal from '../shared/ScrollReveal';
import SectionHeader from '../shared/SectionHeader';
import { INVESTMENT_THESIS } from '../data/singapore-market-data';

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-6 h-6" strokeWidth={1.2} />,
  Lock: <Lock className="w-6 h-6" strokeWidth={1.2} />,
  TrendingUp: <TrendingUp className="w-6 h-6" strokeWidth={1.2} />,
};

export default function InvestmentThesis() {
  return (
    <section className="py-20 md:py-32 bg-[#1B4332] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <SectionHeader
          kicker="Investment Thesis"
          title="Why Singapore. Why Now."
          subtitle="Three structural pillars that make Singapore the most defensible commercial real estate allocation in Asia."
          align="center"
          dark
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {INVESTMENT_THESIS.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.15}>
              <div className="border border-white/10 p-8 md:p-10 hover:border-[#B8956B]/30 transition-all duration-500 group h-full">
                {/* Icon */}
                <div className="w-14 h-14 border border-[#B8956B]/30 flex items-center justify-center text-[#B8956B] mb-6 group-hover:bg-[#B8956B]/10 transition-colors">
                  {iconMap[pillar.icon]}
                </div>

                <h3 className="font-serif text-2xl text-white mb-2 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-[11px] tracking-[0.15em] uppercase text-[#B8956B] mb-6">
                  {pillar.subtitle}
                </p>
                <p className="text-sm text-white/60 leading-relaxed font-light mb-8">
                  {pillar.description}
                </p>

                {/* Stats */}
                <div className="space-y-3 pt-6 border-t border-white/10">
                  {pillar.stats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between">
                      <span className="text-[11px] text-white/50 uppercase tracking-wider">{stat.label}</span>
                      <span className="font-mono text-sm text-[#B8956B]">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
