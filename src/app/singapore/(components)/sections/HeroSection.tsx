'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ANIMATION, COLORS } from '../data/singapore-market-data';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#1B4332]">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332] via-[#1B4332]/95 to-[#0D1F17]/90" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#B8956B]/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#0D1F17]/50 to-transparent" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: ANIMATION.easing }}
          >
            <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#B8956B] font-medium mb-6">
              Institutional Commercial Real Estate Advisory
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: ANIMATION.easing, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-7xl text-white leading-[1.05] mb-6"
          >
            Singapore&apos;s Most Discerning{' '}
            <span className="italic text-[#B8956B] font-light">Commercial</span>{' '}
            Real Estate Advisory
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: ANIMATION.easing, delay: 0.2 }}
            className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed mb-10 font-light"
          >
            Grade A office, retail, mixed-use, and conservation shophouses
            for UHNWI, family offices, sovereign wealth funds, and institutional investors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: ANIMATION.easing, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/singapore/properties"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#B8956B] text-white text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#C9A87C] transition-colors duration-300"
            >
              Explore Opportunities
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
            <Link
              href="/singapore/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-white/10 transition-colors duration-300"
            >
              Speak to an Advisor
            </Link>
          </motion.div>

          {/* Quick stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: ANIMATION.easing, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: 'S-REIT Market Cap', value: 'S$100B+' },
              { label: 'CBD Grade A Vacancy', value: '5.3%' },
              { label: 'Avg CBD Rent', value: 'S$12.40/sf' },
              { label: 'Investment Volume YoY', value: '+364%' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-xl md:text-2xl text-[#B8956B] mb-1">{stat.value}</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/50">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
