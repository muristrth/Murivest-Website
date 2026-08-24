'use client';

import Link from 'next/link';
import { Clock, ArrowUpRight } from 'lucide-react';
import ScrollReveal from '../shared/ScrollReveal';
import SectionHeader from '../shared/SectionHeader';
import { SAMPLE_ARTICLES } from '../data/singapore-market-data';

export default function LatestInsights() {
  const featured = SAMPLE_ARTICLES.filter((a) => a.featured);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="flex-1">
            <SectionHeader
              kicker="Market Intelligence"
              title="Latest Insights"
              subtitle="Research and analysis from our Singapore advisory team."
            />
          </div>
          <Link
            href="/singapore/insights"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#2C2C2C] font-medium hover:text-[#8B7355] transition-colors shrink-0"
          >
            All Research
            <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((article, i) => (
            <ScrollReveal key={article.id} delay={i * 0.1}>
              <Link
                href={`/singapore/insights/${article.slug}`}
                className="group block"
              >
                {/* Image */}
                <div className="relative h-[200px] bg-[#2C2C2C] mb-6 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1E1C]/50 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[9px] tracking-[0.3em] uppercase text-[#8B7355] font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-serif text-xl text-[#2C2C2C] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed font-light line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 pt-3">
                    <span className="text-[10px] tracking-[0.15em] uppercase text-[#8B7355]">
                      {article.author}
                    </span>
                    <span className="text-[#E5E2DC]">|</span>
                    <span className="text-[10px] text-[#5A5A5A] uppercase tracking-wider">
                      {article.date}
                    </span>
                    <span className="text-[#E5E2DC]">|</span>
                    <span className="flex items-center gap-1 text-[10px] text-[#5A5A5A]">
                      <Clock className="w-3 h-3" strokeWidth={1.5} />
                      {article.readTime}
                    </span>
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