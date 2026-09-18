'use client';

import Link from 'next/link';
import Image from 'next/image';

const STATS = [
  { value: '$1.2B+', label: 'Assets Under Advisory' },
  { value: '8.5–12.5%', label: 'Target Yield Range' },
  { value: '2025', label: 'Established Nairobi' },
];

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-[#2C2C2C]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpeg"
          alt="Murivest Institutional Advisory — Nairobi skyline"
          fill
          className="object-cover"
          priority
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C] via-[#2C2C2C]/70 to-[#2C2C2C]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C2C2C]/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pb-24 md:pb-32 pt-40">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8 animate-fade-up">
            <span className="w-8 h-[1px] bg-[#8B7355]" />
            <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#8B7355] font-medium">
              Mandate-Based Commercial Real Estate Advisory
            </p>
          </div>

          <h1 className="font-serif text-[2.8rem] md:text-[4rem] lg:text-[5.5rem] text-[#F8F7F4] leading-[1.02] mb-8 animate-fade-up delay-100">
            Institutional Real Estate <span className="italic font-light text-[#8B7355]">Advisory &amp; Asset Management</span>
          </h1>

          <div className="w-16 h-[1px] bg-[#F8F7F4]/20 mb-8 animate-fade-up delay-200" />

          <p className="text-[15px] md:text-[17px] text-[#F8F7F4]/65 leading-[1.7] font-light max-w-xl mb-12 animate-fade-up delay-200">
            Murivest Group structures mandate-based engagements for institutional investors seeking risk-adjusted exposure to Kenyan and East African commercial property markets. Confidential, mandate-based engagements for private capital, family offices, and institutional-minded investors.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#F8F7F4] text-[#2C2C2C] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#8B7355] hover:text-[#F8F7F4] transition-colors duration-500"
            >
              Request Confidential Briefing
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
            <Link
              href="/mandate"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#F8F7F4]/25 text-[#F8F7F4]/85 text-[11px] tracking-[0.2em] uppercase font-medium hover:border-[#8B7355] hover:text-[#F8F7F4] transition-all duration-500"
            >
              Investment Mandate
            </Link>
          </div>

          <p className="text-[10px] uppercase tracking-[0.25em] text-[#F8F7F4]/40 mt-8 animate-fade-up delay-300">
            Qualified Purchasers Only · Minimum Allocation: $5,000,000 · KYC Required
          </p>
        </div>
      </div>

      {/* Trust metrics strip, integrated into hero base like Global */}
      <div className="relative z-10 w-full border-t border-[#F8F7F4]/10 bg-[#2C2C2C]/40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-8">
          <div className="grid grid-cols-3 gap-8">
            {STATS.map((stat, i) => (
              <div key={stat.label} className={i > 0 ? 'border-l border-[#F8F7F4]/15 pl-6 lg:pl-8' : ''}>
                <p className="text-xl md:text-2xl font-serif text-[#F8F7F4] leading-none">{stat.value}</p>
                <p className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-[#F8F7F4]/50 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.9s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.25s; }
        .delay-300 { animation-delay: 0.4s; }
      `}</style>
    </section>
  );
};

export default Hero;
