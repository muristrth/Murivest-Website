'use client'

import Link from 'next/link'
import { Lock, ArrowRight, Shield } from 'lucide-react'

export default function InvestorBriefTeaser() {
  return (
    <section className="relative bg-[#1B4332] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#B8956B_1px,_transparent_1px)] bg-[length:24px_24px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
              <Lock className="h-4 w-4 text-[#B8956B]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B]">
                Restricted Access
              </span>
            </div>
            
            <h2 className="font-serif text-2xl lg:text-4xl text-[#FAF9F6] mb-4 leading-tight">
              Nairobi Private Commercial<br />
              <span className="text-[#B8956B]">Asset Brief</span>
            </h2>
            
            <p className="text-sm lg:text-base text-[#FAF9F6]/70 mb-6 leading-relaxed max-w-lg">
              Independent intelligence for institutional capital allocators, family offices 
              and ultra-high-net-worth investors navigating East Africa's preeminent real estate market.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              {[
                { value: '12%', label: 'Peak Yields' },
                { value: 'KES 773B', label: 'Market Value' },
                { value: '5.1% CAGR', label: 'Growth' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl lg:text-2xl font-light text-[#B8956B]">{stat.value}</div>
                  <div className="text-[9px] uppercase tracking-wider text-[#FAF9F6]/50">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/investor-portal">
                <button className="inline-flex items-center gap-2 bg-[#B8956B] text-[#1B4332] px-6 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#9A7B5A] transition-colors">
                  Access as Investor <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <div className="inline-flex items-center gap-2 px-4 py-3 text-[10px] uppercase tracking-wider text-[#FAF9F6]/50">
                <Shield className="h-4 w-4" />
                Verified Investors Only
              </div>
            </div>
          </div>
          
          {/* Right - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#B8956B]/10 rounded-lg" />
              <div className="relative border border-[#B8956B]/30 bg-white p-2">
                <img 
                  src="/brochure-asset-brief.png" 
                  alt="Nairobi Private Commercial Asset Brief" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <p className="text-[10px] uppercase tracking-wider text-[#FAF9F6]/40 mt-3 text-center">
              Q2 2025 Edition · Knight Frank Benchmarked
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
