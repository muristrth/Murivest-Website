'use client';

import ScrollReveal from '../shared/ScrollReveal';
import AnimatedCounter from '../shared/AnimatedCounter';
import SectionHeader from '../shared/SectionHeader';
import { MARKET_SNAPSHOT, SINGAPORE_MACRO } from '../data/singapore-market-data';

const metrics = [
  { label: 'Grade A Vacancy', value: MARKET_SNAPSHOT.gradeAVacancyRate, suffix: '%', decimals: 1, context: 'Q1 2026 (CBRE)' },
  { label: 'Avg CBD Rent', value: MARKET_SNAPSHOT.averageCBDRent, prefix: 'S$', suffix: '/sf', decimals: 2, context: 'per month' },
  { label: 'Cap Rate Range', value: MARKET_SNAPSHOT.gradeACapRateLow, prefix: '', suffix: '%', decimals: 2, context: 'Core CBD Grade A' },
  { label: 'GDP Growth 2026', value: MARKET_SNAPSHOT.gdpGrowth2026, prefix: '', suffix: '%', decimals: 0, context: 'MAS Forecast' },
];

export default function MarketSnapshot() {
  return (
    <section className="py-20 md:py-32 bg-[#F8F7F4]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <SectionHeader
          kicker="Market Intelligence"
          title="Singapore Q2 2026 Snapshot"
          subtitle="Market data from CBRE, Savills, URA, and MAS — updated quarterly for institutional decision-making."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <ScrollReveal key={metric.label} delay={i * 0.1}>
              <div className="bg-white border border-[#E5E2DC] p-8 hover:shadow-md hover:border-[#8B7355]/40 transition-all duration-500 group">
                <p className="text-[9px] tracking-[0.25em] uppercase text-[#5A5A5A] mb-4 font-medium">
                  {metric.label}
                </p>
                <div className="font-mono text-3xl md:text-4xl text-[#2C2C2C] mb-2">
                  {metric.prefix && <span className="text-lg text-[#8B7355]">{metric.prefix}</span>}
                  <AnimatedCounter
                    target={metric.value}
                    decimals={metric.decimals}
                    duration={2000}
                  />
                  {metric.suffix && <span className="text-lg text-[#5A5A5A]">{metric.suffix}</span>}
                </div>
                <p className="text-[11px] text-[#5A5A5A] italic">{metric.context}</p>
                <div className="mt-4 h-px bg-[#E5E2DC] group-hover:bg-[#8B7355]/40 transition-colors" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Full data table */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 bg-white border border-[#E5E2DC] overflow-hidden">
            <div className="px-6 md:px-8 py-4 bg-[#2C2C2C] flex items-center justify-between">
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#8B7355] font-medium">
                Comprehensive Market Data
              </p>
              <p className="text-[9px] text-white/50">Source: CBRE, Savills, URA, MAS | Q2 2026</p>
            </div>
            <div className="divide-y divide-[#E5E2DC]">
              {[
                ['Investment Volume YoY (Q1 2026)', '+364%', 'CBRE Asia Pacific Cap Rate Survey'],
                ['S-REIT Market Capitalisation', 'S$100 Billion', 'SGX (March 2026)'],
                ['Core CBD Grade A Cap Rate', '3.25% – 3.80%', 'CBRE (March 2026)'],
                ['Retail Cap Rate (Core Malls)', '4.35% – 5.00%', 'CBRE (March 2026)'],
                ['Logistics Cap Rate (Institutional)', '5.50% – 6.50%', 'CBRE (March 2026)'],
                ['Hospitality Cap Rate (Urban)', '3.60% – 4.20%', 'CBRE (March 2026)'],
                ['SORA (Singapore Overnight Rate)', '3.05%', 'MAS (March 2026)'],
                ['GDP Growth Forecast 2026', '2.8%', 'MAS'],
                ['CPI Inflation', '2.1%', 'MAS'],
                ['SGD/USD Exchange Rate', '1.34', 'Market (Q2 2026)'],
                ['Singapore Sovereign Rating', 'AAA (All Agencies)', "S&P, Moody's, Fitch"],
                ['Net Office Absorption (Q2 2025)', '245,000 sq ft', 'Savills Research'],
              ].map(([label, value, source]) => (
                <div key={label} className="flex items-center justify-between px-6 md:px-8 py-4 hover:bg-[#F8F7F4] transition-colors">
                  <div>
                    <p className="text-sm text-[#2C2C2C] font-medium">{label}</p>
                    <p className="text-[10px] text-[#5A5A5A] mt-0.5">{source}</p>
                  </div>
                  <p className="font-mono text-sm text-[#2C2C2C] font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}