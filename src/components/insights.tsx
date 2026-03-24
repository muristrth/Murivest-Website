'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Insight {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  image: string;
  slug: string;
}

interface InsightCardProps {
  insight: Insight;
}

/**
 * Insight Card - Golf Club Lounge Aesthetic
 * Individual insight card for grid display
 */
const InsightCard = ({ insight }: InsightCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-white border border-[#E5E2DC] overflow-hidden hover:shadow-lg transition-shadow duration-500"
    >
      <a href={`/insights-cre/${insight.slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#E5E2DC]">
          <Image
            src={insight.image}
            alt={insight.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-[#8B7355] text-[10px] tracking-[0.2em] uppercase text-white font-medium">
              {insight.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <span className="text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A]">
            Advisory Report — {insight.publishedAt}
          </span>

          <h3 className="text-xl md:text-2xl font-serif mt-3 mb-4 text-[#2C2C2C] group-hover:text-[#8B7355] transition-colors duration-500 line-clamp-2">
            {insight.title}
          </h3>

          <p className="text-[14px] leading-[1.7] text-[#5A5A5A] font-light mb-6 line-clamp-3">
            {insight.excerpt}
          </p>

          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-medium group-hover:text-[#2C2C2C] transition-colors duration-500">
            <span>Read Analysis</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </div>
      </a>
    </motion.article>
  );
};

export default InsightCard;