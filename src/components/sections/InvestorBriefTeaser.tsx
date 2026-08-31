'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Lock, ArrowRight } from 'lucide-react';

export default function InvestorBriefTeaser() {
  return (
    <section className="bg-[#F8F7F4] border-b border-[#E5E2DC]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10">

        {/* DESKTOP / TABLET BANNER */}
        <div className="hidden md:flex items-center justify-between gap-8 border border-[#E5E2DC] bg-white px-10 py-6">
          <div className="flex items-start gap-5 flex-1">
            <div className="relative w-[90px] flex-shrink-0 border border-[#E5E2DC] bg-[#F8F7F4] p-1">
              <Image
                src="/brochure-asset-brief.webp"
                alt="Investor Brief"
                width={90}
                height={120}
                className="w-full h-auto"
                crossOrigin="anonymous"
              />
            </div>

            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Lock className="h-3.5 w-3.5 text-[#8B7355]" />
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#8B7355] font-medium">
                  Restricted Investor Brief
                </span>
              </div>

              <h2 className="font-serif text-2xl text-[#2C2C2C] mb-3">
                Nairobi Commercial Asset Brief
              </h2>

              <p className="text-[13px] text-[#5A5A5A] leading-relaxed font-light">
                Institutional-grade overview of Nairobi commercial real estate opportunities,
                valuations, and capital positioning.
              </p>

              <p className="mt-3 text-[10px] tracking-[0.18em] uppercase text-[#8B7355]/70">
                Verified investors only
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-3">
            <Link
              href="/portal"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#2C2C2C] text-[#F8F7F4] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#8B7355] transition-colors duration-500"
            >
              Investor Access
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="text-[10px] tracking-[0.15em] uppercase text-[#5A5A5A]/60">
              Q2 2025 Edition
            </p>
          </div>
        </div>

        {/* MOBILE VERSION */}
        <div className="md:hidden border border-[#E5E2DC] bg-white p-5">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-[60px] flex-shrink-0 border border-[#E5E2DC] bg-[#F8F7F4] p-[2px]">
              <Image
                src="/brochure-asset-brief.webp"
                alt="Investor Brief"
                width={60}
                height={80}
                className="w-full h-auto"
                crossOrigin="anonymous"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <Lock className="h-3 w-3 text-[#8B7355]" />
                <span className="text-[9px] tracking-[0.25em] uppercase text-[#8B7355] font-medium">
                  Restricted Brief
                </span>
              </div>
              <h2 className="font-serif text-lg text-[#2C2C2C] leading-tight">
                Nairobi Asset Brief
              </h2>
            </div>
          </div>

          <p className="text-[12px] text-[#5A5A5A] leading-relaxed font-light mb-4">
            Institutional overview of Nairobi commercial real estate opportunities and market positioning.
          </p>

          <Link
            href="/portal"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#2C2C2C] text-[#F8F7F4] py-3 text-[11px] tracking-[0.2em] uppercase font-medium"
          >
            Investor Access
            <ArrowRight className="h-4 w-4" />
          </Link>

          <p className="text-center mt-3 text-[9px] tracking-[0.18em] uppercase text-[#5A5A5A]/50">
            Q2 2025 Edition · Verified Investors Only
          </p>
        </div>
      </div>
    </section>
  );
}
