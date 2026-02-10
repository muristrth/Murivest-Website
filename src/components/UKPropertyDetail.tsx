'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Heart, Share2, Download,
  ChevronLeft, ChevronRight, X, TrendingUp, Building, Shield, ArrowLeft, Crown
} from 'lucide-react';

interface UKPropertyDetailProps {
  property: {
    title?: string;
    subtitle?: string;
    location?: string;
    city?: string;
    region?: string;
    postcode?: string;
    type?: string;
    status?: string;
    price?: string;
    yield?: string;
    description?: string;
    roi?: string;
    mainImageUrl?: string;
    images?: string[];
    features?: string[];
    sqft?: string;
    details?: Array<{ label?: string; value?: string }>;
    investment?: {
      monthlyIncome?: string;
      annualIncome?: string;
      appreciationRate?: string;
      totalROI?: string;
    };
    tenure?: string;
    regulatory?: {
      fcaCompliant?: boolean;
      stampDuty?: boolean;
      sicr?: boolean;
    };
  };
}

export default function UKPropertyDetail({ property }: UKPropertyDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const allImages = property.mainImageUrl 
    ? [property.mainImageUrl, ...(property.images || [])]
    : property.images || [];

  if (!allImages.length) {
    allImages.push('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80');
  }

  const detailsMap = property.details?.reduce((acc, item) => {
    if (item.label && item.value) {
      acc[item.label] = item.value;
    }
    return acc;
  }, {} as Record<string, string>) || {};

  return (
    <div className="min-h-screen bg-[#05070a] text-white">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#05070a]/80 backdrop-blur-xl border-b border-white/5 px-8 py-6">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          <Link href="/uk-properties" className="flex items-center gap-3 text-amber-500 hover:text-white transition-colors">
            <ArrowLeft size={18} />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Back to UK Properties</span>
          </Link>

          <div className="flex items-center gap-4">
            <button onClick={() => setIsLiked(!isLiked)} className="p-3 bg-white/5 border border-white/10 hover:bg-white/10">
              <Heart size={18} className={isLiked ? 'fill-amber-500 text-amber-500' : 'text-white'} />
            </button>
            <button className="p-3 bg-white/5 border border-white/10 hover:bg-white/10">
              <Share2 size={18} />
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">

        {/* ASSET SUMMARY */}
        <div className="grid lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-5">
            <span className="text-[10px] tracking-[0.4em] uppercase text-amber-500">
              {property.type || 'Commercial Property'} • {property.status || 'Available'}
            </span>

            <h1 className="text-6xl font-serif italic my-8">
              {property.title}
            </h1>

            <p className="text-sm text-slate-400 max-w-xl leading-relaxed mb-10">
              {property.subtitle || 'Income-producing commercial asset presented under a confidential advisory mandate for institutional capital deployment.'}
            </p>

            <div className="flex items-center gap-3 text-slate-500 mb-12">
              <MapPin size={16} className="text-amber-500" />
              <span className="text-xs uppercase tracking-widest">
                {property.location}
              </span>
            </div>

            {/* VALUE STRIP */}
            <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 mb-12">
              <div className="bg-[#05070a] p-8">
                <p className="text-[9px] uppercase text-slate-500 mb-2">
                  Indicative Equity Value
                </p>
                <p className="text-2xl font-bold">{property.price}</p>
              </div>

              <div className="bg-[#05070a] p-8 text-right">
                <p className="text-[9px] uppercase text-amber-500 mb-2">
                  Stabilized Net Yield
                </p>
                <p className="text-2xl font-bold text-amber-500">{property.yield}</p>
                <p className="text-[9px] text-amber-500/60">
                  Subject to lease rollover & cost variance
                </p>
              </div>
            </div>

            <button className="w-full bg-amber-600 hover:bg-amber-500 text-black py-6 font-bold text-[10px] uppercase tracking-[0.3em] flex justify-between px-10">
              Request Full IC Memorandum
              <Download size={16} />
            </button>
          </div>

          {/* IMAGE */}
          <div className="lg:col-span-7">
            <div
              className="relative aspect-[4/5] overflow-hidden border border-white/10 cursor-pointer"
              onClick={() => setIsImageModalOpen(true)}
            >
              <motion.img
                src={allImages[currentImageIndex]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent" />
              <div className="absolute bottom-6 left-6 text-xs tracking-widest text-white/60">
                {currentImageIndex + 1} / {allImages.length}
              </div>
            </div>
          </div>
        </div>

        {/* FINANCIAL SUMMARY */}
        <section className="grid lg:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-32">
          <div className="bg-[#05070a] p-12">
            <TrendingUp className="text-amber-500 mb-6" />
            <h3 className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-8">
              Financial Summary
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-[10px] text-slate-500">Net Monthly NOI</span>
                <span className="font-bold">{property.investment?.monthlyIncome || 'N/A'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[10px] text-slate-500">Net Annual NOI</span>
                <span className="font-bold">{property.investment?.annualIncome || 'N/A'}</span>
              </div>
              <div className="flex justify-between text-amber-500">
                <span className="text-[10px]">Forecast Capital Growth</span>
                <span className="font-bold">{property.investment?.appreciationRate || 'N/A'}</span>
              </div>
            </div>
          </div>

          <div className="bg-[#05070a] p-12">
            <Building className="text-amber-500 mb-6" />
            <h3 className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-8">
              Physical & Legal Attributes
            </h3>
            {Object.entries(detailsMap).map(([key, value]) => (
              <div key={key} className="flex justify-between text-sm mb-3">
                <span className="text-slate-500">{key}</span>
                <span>{value}</span>
              </div>
            ))}
            {property.sqft && (
              <div className="flex justify-between text-sm mb-3">
                <span className="text-slate-500">Size</span>
                <span>{property.sqft}</span>
              </div>
            )}
            {property.tenure && (
              <div className="flex justify-between text-sm mb-3">
                <span className="text-slate-500">Tenure</span>
                <span>{property.tenure}</span>
              </div>
            )}
          </div>

          <div className="bg-[#05070a] p-12">
            <Shield className="text-amber-500 mb-6" />
            <h3 className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-8">
              Risk Mitigants
            </h3>
            <ul className="space-y-3">
              {property.features?.map((feature, i) => (
                <li key={i} className="text-[10px] uppercase tracking-widest text-slate-400">
                  • {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* INVESTMENT THESIS */}
        <section className="grid lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-serif italic mb-8">
              Investment Thesis
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              {property.description || 'This asset is presented as a stabilized income investment offering predictable cash flows under existing lease structures, with medium-term upside driven by rental reversion and infrastructure-led demand growth.'}
            </p>
            {property.roi && (
              <p className="text-amber-500 mt-4">{property.roi}</p>
            )}
          </div>

          <div className="lg:col-span-5 bg-white/[0.03] border border-white/10 p-12">
            <Crown className="mx-auto mb-6 text-amber-500" />
            <h3 className="text-xl font-serif italic text-center mb-2">
              Transaction Process
            </h3>
            <p className="text-[9px] text-center text-slate-500 uppercase tracking-[0.3em] mb-8">
              Indicative Engagement Flow
            </p>

            <button className="w-full bg-white text-black py-4 font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
              Request Asset Diligence Access
            </button>

            <div className="grid grid-cols-2 gap-4">
              <Link href="/contact" className="border border-white/10 py-3 text-xs uppercase text-center hover:bg-white/5">
                Schedule Call
              </Link>
              <Link href="/contact" className="border border-white/10 py-3 text-xs uppercase text-center hover:bg-white/5">
                Formal Inquiry
              </Link>
            </div>
          </div>
        </section>

        {/* INSTITUTIONAL ANALYSIS */}
        <section className="mb-32">
          <h2 className="text-3xl font-serif italic mb-16">
            Institutional Analysis
          </h2>

          <div className="grid lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {/* Lease Analysis */}
            <div className="bg-[#05070a] p-12">
              <h3 className="text-lg font-serif italic mb-8 text-amber-400">Lease Analysis</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-slate-400 text-sm">WAULT</span>
                  <span className="text-white font-bold">7.2 years</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-slate-400 text-sm">Largest Tenant</span>
                  <span className="text-white font-bold">35%</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-slate-400 text-sm">Break Clauses</span>
                  <span className="text-white font-bold">2028, 2032</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Rent Reviews</span>
                  <span className="text-white font-bold">Annual CPI</span>
                </div>
              </div>
            </div>

            {/* Exit Assumptions */}
            <div className="bg-[#05070a] p-12">
              <h3 className="text-lg font-serif italic mb-8 text-amber-400">Exit Assumptions</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-slate-400 text-sm">Hold Period</span>
                  <span className="text-white font-bold">5-7 years</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-slate-400 text-sm">Exit Yield</span>
                  <span className="text-white font-bold">7.5-8.0%</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-slate-400 text-sm">Exit Cap Rate</span>
                  <span className="text-white font-bold">8.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">IRR Target</span>
                  <span className="text-white font-bold">12-15%</span>
                </div>
              </div>
            </div>

            {/* Risk Factors */}
            <div className="bg-[#05070a] p-12">
              <h3 className="text-lg font-serif italic mb-8 text-amber-400">Key Risks</h3>
              <div className="space-y-4">
                <div className="border border-red-500/20 bg-red-500/5 p-4 rounded">
                  <p className="text-red-400 text-xs font-bold mb-2">TENANT CONCENTRATION</p>
                  <p className="text-slate-400 text-sm">Single tenant represents 35% of NOI. Mitigated by covenant strength and lease terms.</p>
                </div>
                <div className="border border-yellow-500/20 bg-yellow-500/5 p-4 rounded">
                  <p className="text-yellow-400 text-xs font-bold mb-2">MARKET VOLATILITY</p>
                  <p className="text-slate-400 text-sm">UK property market cyclical. Positioned in established location with stable demand.</p>
                </div>
                <div className="border border-blue-500/20 bg-blue-500/5 p-4 rounded">
                  <p className="text-blue-400 text-xs font-bold mb-2">CURRENCY RISK</p>
                  <p className="text-slate-400 text-sm">GBP exposure for international investors. Currency hedging available.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <p className="text-[9px] text-slate-500 max-w-4xl mx-auto leading-relaxed">
          This material is provided for informational purposes only and does not constitute
          an offer, solicitation, or investment advice. All financial projections are indicative
          and subject to full legal, tax, and technical due diligence.
        </p>
      </main>

      {/* IMAGE MODAL */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-12"
            onClick={() => setIsImageModalOpen(false)}
          >
            <button className="absolute top-10 right-10">
              <X size={32} />
            </button>
            <motion.img
              src={allImages[currentImageIndex]}
              alt={property.title}
              className="max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-12 flex gap-6">
              <button onClick={() => setCurrentImageIndex(i => i > 0 ? i - 1 : allImages.length - 1)}>
                <ChevronLeft size={28} />
              </button>
              <button onClick={() => setCurrentImageIndex(i => i < allImages.length - 1 ? i + 1 : 0)}>
                <ChevronRight size={28} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
