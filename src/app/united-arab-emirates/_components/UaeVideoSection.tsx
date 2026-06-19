'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

type Metric = {
  label: string;
  value: string;
};

type CtaLink = {
  label: string;
  href: string;
};

export function UaeVideoSection({
  eyebrow = 'Institutional Intelligence',
  title = 'The UAE Advantage —',
  titleHighlight = 'Capital Markets Perspective',
  description = "The UAE has emerged as the Middle East's pre-eminent commercial real estate market, combining developed-market legal infrastructure with emerging-market growth dynamics. Sovereign wealth capital, pro-business regulation and world-class infrastructure create a compelling institutional proposition.",
  poster = 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=60',
  metrics = [
    { label: 'GDP Growth (2024)', value: '3.5%' },
    { label: 'Population Growth', value: '2.5% YoY' },
    { label: 'CRE Transaction Volume', value: '$15B+' },
    { label: 'Prime Office Yield', value: '6–8%' },
    { label: 'Inflation Rate', value: '2.1%' },
    { label: 'Ease of Doing Business', value: 'Top 20 Global' },
  ],
  primaryCta = { label: 'Access Research', href: '/united-arab-emirates/research' },
  secondaryCta = { label: 'Explore Capital Markets', href: '/united-arab-emirates/capital-markets' },
}: {
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  poster?: string;
  metrics?: Metric[];
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
}) {
  return (
    <section className="relative py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 overflow-hidden bg-[#1A1A1A]">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/countries/uae/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/90 via-[#1A1A1A]/70 to-[#1A1A1A]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-[#1A1A1A]/40" />

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B8956B]/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <p className="font-body text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#B8956B] block mb-4 md:mb-5">
              {eyebrow}
            </p>
            <h2 className="font-display text-[32px] md:text-[42px] lg:text-[52px] leading-[1.05] text-white mb-6">
              {title} <br className="hidden sm:block" />
              <span className="text-[#B8956B]">{titleHighlight}</span>
            </h2>
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 bg-white text-[#1A1A1A] text-sm font-medium tracking-wide hover:bg-[#FAF9F6] transition-colors"
                style={{ minHeight: 48 }}
              >
                {primaryCta.label}
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 border border-white/20 text-white text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
                style={{ minHeight: 48 }}
              >
                {secondaryCta.label}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            {/* Key metrics panel */}
            <div className="rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-6 md:p-8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/60 mb-6">Key Market Metrics</p>
              <div className="grid grid-cols-2 gap-6">
                {metrics.map((metric) => (
                  <div key={metric.label} className="border-b border-white/5 pb-4 last:border-b-0">
                    <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">{metric.label}</p>
                    <p className="font-display text-xl text-white">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
