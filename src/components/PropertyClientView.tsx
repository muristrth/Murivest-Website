'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Heart, Share2, MapPin, Download, 
  TrendingUp, Building, Shield, X, 
  ChevronLeft, ChevronRight, MessageSquare 
} from 'lucide-react';

interface Property {
  title: string;
  subtitle: string;
  location: string;
  type: string;
  price: string;
  priceKsh: string;
  priceGbp: string;
  priceUsd: string;
  priceEur: string;
  yield: string;
  images: string[];
  features: string[];
  occupancyRate: string;
  description: string;
  brochureUrl?: string; // New Field
  details: { label: string; value: string }[]; 
  investment: {
    monthlyIncome: string;
    annualIncome: string;
    appreciationRate: string;
    totalROI: string;
  };
}

export default function PropertyClientView({ property }: { property: Property }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!property) return null;

  // Function to handle PDF download
  const handleDownload = () => {
    if (property.brochureUrl) {
      const link = document.createElement('a');
      link.href = `${property.brochureUrl}?dl=${property.title.replace(/\s+/g, '_')}_Brochure.pdf`;
      link.target = '_blank';
      link.click();
    } else {
      alert("Investment Memorandum is currently being finalized for this asset.");
    }
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-white font-light selection:bg-amber-500/30">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 bg-gradient-to-b from-[#05070a] to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/properties" className="group flex items-center gap-4">
            <div className="p-2 border border-white/10 group-hover:border-amber-500/50 transition-all">
              <ArrowLeft size={16} className="text-slate-400 group-hover:text-amber-500" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-500 group-hover:text-white">
              Exit Portfolio
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <button onClick={() => setIsLiked(!isLiked)} className="p-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Heart size={18} className={isLiked ? 'fill-amber-500 text-amber-500' : 'text-white'} />
            </button>
            <button className="p-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Share2 size={18} />
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-5">
            <span className="text-[10px] tracking-[0.4em] uppercase text-amber-500">
              {property.type || 'Asset'} • {property.occupancyRate || '100%'} Occupancy
            </span>

            <h1 className="text-6xl font-serif italic my-8 leading-tight text-amber-50">
              {property.title}
            </h1>

            <p className="text-sm text-slate-400 max-w-xl leading-relaxed mb-10">
              {property.subtitle || property.description}
            </p>

            <div className="flex items-center gap-3 text-slate-500 mb-12">
              <MapPin size={16} className="text-amber-500" />
              <span className="text-xs uppercase tracking-widest">{property.location}</span>
            </div>
            

            {/* VALUE STRIP */}
            <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 mb-8">
              <div className="bg-[#05070a] p-8">
                <p className="text-[9px] uppercase text-slate-500 mb-2">Indicative Value</p>
                <p className="text-2xl font-bold mb-4">{property.price}</p>
                <div className="space-y-1 opacity-40 text-[9px] uppercase tracking-tighter">
                  {property.priceKsh && <p>KSh: {property.priceKsh}</p>}
                  {property.priceUsd && <p>USD: {property.priceUsd}</p>}
                </div>
              </div>

              <div className="bg-[#05070a] p-8 text-right">
                <p className="text-[9px] uppercase text-amber-500 mb-2">Net Yield</p>
                <p className="text-2xl font-bold text-amber-500">{property.yield || 'Contact'}</p>
                <p className="text-[9px] text-amber-500/60 mt-2 italic tracking-widest uppercase">Institutional Grade</p>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="space-y-4">
              <button 
                onClick={handleDownload}
                className="w-full bg-amber-600 hover:bg-amber-500 text-black py-6 font-bold text-[10px] uppercase tracking-[0.3em] flex justify-between px-10 transition-all shadow-xl shadow-amber-900/10"
              >
                Request Full IC Memorandum
                <Download size={16} />
              </button>

              <Link 
                href="/contact"
                className="w-full bg-transparent border border-white/10 hover:border-amber-500/50 text-white py-6 font-bold text-[10px] uppercase tracking-[0.3em] flex justify-between px-10 transition-all"
              >
                Contact Portfolio Agent
                <MessageSquare size={16} className="text-amber-500" />
              </Link>
            </div>
          </div>

          {/* IMAGE GALLERY */}
          <div className="lg:col-span-7">
            <div
              className="relative aspect-[4/5] overflow-hidden border border-white/10 cursor-pointer group bg-white/5"
              onClick={() => setIsImageModalOpen(true)}
            >
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={property.images?.[currentImageIndex] || '/fallback-property.jpg'}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt={property.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 text-[10px] font-bold tracking-[0.2em] text-white/60 bg-black/40 px-4 py-2 backdrop-blur-md">
                ASSET VIEW: {currentImageIndex + 1} / {property.images?.length || 0}
              </div>
            </div>
          </div>
        </div>

        {/* --- NEW SECTION: ASSET OVERVIEW / DESCRIPTION --- */}
            <section className="mb-32 py-16 border-t border-white/5">
                <div className="grid lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-4">
                        <h2 className="text-[10px] uppercase tracking-[0.5em] text-slate-500 font-bold mb-4">Strategic Overview</h2>
                        <div className="h-px w-12 bg-amber-500" />
                    </div>
                    <div className="lg:col-span-8">
                        <div className="text-[13px] md:text-1xl leading-relaxed text-slate-300 font-light font-serif italic">
                            {property.description ? (
                                <p className="whitespace-pre-line leading-[1.8]">
                                    {property.description}
                                </p>
                            ) : (
                                <p className="text-slate-600 italic">Detailed asset description is currently being indexed.</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

        {/* FINANCIAL & PHYSICAL ATTRIBUTES */}
        <section className="grid lg:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-32">
          
          <div className="bg-[#05070a] p-12">
            <TrendingUp className="text-amber-500 mb-6" />
            <h3 className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-8 font-bold">Investment Matrix</h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[10px] text-slate-500 uppercase">Monthly NOI</span>
                <span className="font-bold text-sm">{property.investment?.monthlyIncome || 'TBD'}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[10px] text-slate-500 uppercase">Annual NOI</span>
                <span className="font-bold text-sm">{property.investment?.annualIncome || 'TBD'}</span>
              </div>
              <div className="flex justify-between text-amber-500">
                <span className="text-[10px] uppercase font-bold">Total ROI Target</span>
                <span className="font-bold text-sm">{property.investment?.totalROI || 'TBD'}</span>
              </div>
            </div>
          </div>

          <div className="bg-[#05070a] p-12">
            <Building className="text-amber-500 mb-6" />
            <h3 className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-8 font-bold">Specifications</h3>
            {property.details && property.details.length > 0 ? (
              property.details.map((item, i) => (
                <div key={i} className="flex justify-between text-sm mb-3">
                  <span className="text-[10px] text-slate-500 uppercase">{item.label}</span>
                  <span className="text-xs font-medium">{item.value}</span>
                </div>
              ))
            ) : (
              <p className="text-[10px] text-slate-600 italic uppercase tracking-widest">Specifications Pending</p>
            )}
          </div>

          <div className="bg-[#05070a] p-12">
            <Shield className="text-amber-500 mb-6" />
            <h3 className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-8 font-bold">Features</h3>
            <ul className="space-y-3">
              {(property.features || []).map((feature, i) => (
                <li key={`risk-${i}`} className="text-[10px] uppercase tracking-widest text-slate-400">
                  • {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <p className="text-[9px] text-slate-700 max-w-4xl leading-relaxed border-t border-white/5 pt-12 italic uppercase tracking-widest">
          Institutional Mandate: This memorandum is confidential and provided for qualified investors only. Past performance is not indicative of future returns.
        </p>
      </main>

      {/* GALLERY MODAL */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/98 z-[100] flex items-center justify-center p-12 backdrop-blur-xl"
            onClick={() => setIsImageModalOpen(false)}
          >
            <button className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors">
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }} animate={{ scale: 1 }}
              src={property.images?.[currentImageIndex] || '/fallback-property.jpg'} 
              className="max-h-[85vh] object-contain shadow-2xl" 
            />
            <div className="absolute bottom-12 flex gap-10 items-center bg-white/5 backdrop-blur-md px-8 py-4 border border-white/10">
              <button 
                className="p-2 hover:text-amber-500 transition-colors"
                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(i => i > 0 ? i - 1 : (property.images?.length || 1) - 1); }}
              >
                <ChevronLeft />
              </button>
              <span className="text-[10px] tracking-[0.4em] text-white/40 font-bold uppercase">
                {currentImageIndex + 1} / {property.images?.length || 0}
              </span>
              <button 
                className="p-2 hover:text-amber-500 transition-colors"
                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(i => i < (property.images?.length || 0) - 1 ? i + 1 : 0); }}
              >
                <ChevronRight />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}