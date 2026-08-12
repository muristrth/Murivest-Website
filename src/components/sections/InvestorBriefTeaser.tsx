'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Lock, ArrowRight } from 'lucide-react';

export default function InvestorBriefTeaser() {
  return (
    <section className="relative overflow-hidden py-10 px-4 sm:px-6 lg:px-8">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#1B4332]" />

      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#B8956B_1px,_transparent_1px)] bg-[length:24px_24px]" />
      </div>

      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#B8956B]/10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto">

        {/* =========================
            DESKTOP / TABLET BANNER
        ========================== */}
        <div className="hidden md:flex items-center justify-between gap-8 border border-[#B8956B]/20 bg-white/[0.03] backdrop-blur-md px-10 py-6">

          {/* LEFT */}
          <div className="flex items-start gap-5 flex-1">

            <div className="relative flex-shrink-0">
              <div className="absolute -inset-2 bg-[#B8956B]/10 blur-md" />

              <div className="relative w-[90px] border border-[#B8956B]/20 bg-white p-1">
                <Image
                  src="/brochure-asset-brief.webp"
                  alt="Investor Brief"
                  width={90}
                  height={120}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="max-w-2xl">

              <div className="flex items-center gap-2 mb-3">
                <Lock className="h-3.5 w-3.5 text-[#B8956B]" />

                <span className="text-[10px] uppercase tracking-[0.25em] text-[#B8956B]">
                  Restricted Investor Brief
                </span>
              </div>

              <h2 className="font-serif text-3xl text-[#FAF9F6] mb-3">
                Nairobi Commercial Asset Brief
              </h2>

              <p className="text-sm text-[#FAF9F6]/65 leading-relaxed">
                Institutional-grade overview of Nairobi commercial real estate opportunities,
                valuations, and capital positioning.
              </p>

              <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-[#B8956B]/70">
                Verified investors only
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-end gap-3">

            <Link href="/portal">
              <button className="inline-flex items-center gap-2 bg-[#B8956B] text-[#1B4332] px-5 py-3 text-[11px] uppercase tracking-[0.18em] hover:bg-[#A78661] transition">
                Investor Access
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>

            <p className="text-[10px] uppercase tracking-[0.15em] text-[#FAF9F6]/35">
              Q2 2025 Edition
            </p>
          </div>
        </div>

        {/* =========================
            MOBILE VERSION (NEW)
        ========================== */}
        <div className="md:hidden border border-[#B8956B]/20 bg-white/[0.03] backdrop-blur-md p-5">

          {/* HEADER ROW */}
          <div className="flex items-center gap-4 mb-4">

            {/* SMALL IMAGE (MOBILE ONLY) */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1 bg-[#B8956B]/10 blur-sm rounded-sm" />

              <div className="relative w-[60px] border border-[#B8956B]/20 bg-white p-[2px]">
                <Image
                  src="/brochure-asset-brief.webp"
                  alt="Investor Brief"
                  width={60}
                  height={80}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* TEXT */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Lock className="h-3 w-3 text-[#B8956B]" />

                <span className="text-[9px] uppercase tracking-[0.25em] text-[#B8956B]">
                  Restricted Brief
                </span>
              </div>

              <h2 className="font-serif text-lg text-[#FAF9F6] leading-tight">
                Nairobi Asset Brief
              </h2>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-[12px] text-[#FAF9F6]/65 leading-relaxed mb-4">
            Institutional overview of Nairobi commercial real estate opportunities and market positioning.
          </p>

          {/* CTA */}
          <Link href="/portal">
            <button className="w-full bg-[#B8956B] text-[#1B4332] py-3 text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-2">
              Investor Access
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>

          {/* FOOT NOTE */}
          <p className="text-center mt-3 text-[9px] uppercase tracking-[0.18em] text-[#FAF9F6]/35">
            Q2 2025 Edition · Verified Investors Only
          </p>

        </div>
      </div>
    </section>
  );
}