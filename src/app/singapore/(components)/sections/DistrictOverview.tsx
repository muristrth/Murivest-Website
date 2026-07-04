'use client';

import Link from 'next/link';
import { MapPin, TrendingUp, ArrowUpRight } from 'lucide-react';
import ScrollReveal from '../shared/ScrollReveal';
import SectionHeader from '../shared/SectionHeader';
import { DISTRICTS } from '../data/singapore-market-data';

const tierLabels: Record<number, string> = {
  1: 'Core CBD',
  2: 'Prime Fringe',
  3: 'Emerging',
};

export default function DistrictOverview() {
  return (
    <section className="py-20 md:py-32 bg-[#F8F7F4]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <SectionHeader
          kicker="District Intelligence"
          title="Singapore Commercial Districts"
          subtitle="Every district has a story. Every story has an investment thesis."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DISTRICTS.map((district, i) => (
            <ScrollReveal key={district.slug} delay={i * 0.08}>
              <Link
                href={`/singapore/singapore-market/${district.slug}`}
                className="group block bg-white border border-[#E8E6E1] hover:shadow-lg hover:border-[#B8956B]/20 transition-all duration-500 h-full"
              >
                <div className="p-6 md:p-8">
                  {/* Tier badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 bg-[#1B4332] text-white font-medium">
                      {tierLabels[district.tier]}
                    </span>
                    <div className="flex items-center gap-1 text-[#B8956B]">
                      <TrendingUp className="w-3 h-3" strokeWidth={1.5} />
                      <span className="text-[9px] tracking-wider uppercase">{district.tier === 1 ? 'Premium' : district.tier === 2 ? 'Growth' : 'Development'}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl text-[#2C2C2C] group-hover:text-[#1B4332] transition-colors leading-tight mb-2">
                    {district.name}
                  </h3>
                  <p className="text-[11px] text-[#8B8680] italic mb-4">{district.tagline}</p>
                  
                  <p className="text-sm text-[#5A5A5A] leading-relaxed font-light mb-6 line-clamp-3">
                    {district.description}
                  </p>

                  {/* Key stats */}
                  <div className="space-y-2 pt-4 border-t border-[#E8E6E1]">
                    {district.keyStats.slice(0, 3).map((stat) => (
                      <div key={stat.label} className="flex items-center justify-between">
                        <span className="text-[10px] tracking-wider uppercase text-[#8B8680]">{stat.label}</span>
                        <span className="font-mono text-[12px] text-[#1B4332]">{stat.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 mt-6 text-[#B8956B] group-hover:gap-2.5 transition-all">
                    <span className="text-[10px] tracking-[0.15em] uppercase font-medium">View District Report</span>
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
