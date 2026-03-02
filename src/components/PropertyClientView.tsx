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
  brochureUrl?: string;
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
    <div className="min-h-screen bg-[#F8F7F4] text-[#2C2C2C] font-light selection:bg-[#8B7355]/20">
      
      {/* NAVIGATION - Club Directory Style */}
      <nav className="fixed top-0 w-full z-50 px-6 lg:px-16 py-6 bg-gradient-to-b from-[#F8F7F4] to-transparent">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link href="/properties" className="group flex items-center gap-3">
            <div className="w-10 h-10 border border-[#E5E2DC] group-hover:border-[#8B7355] flex items-center justify-center transition-colors duration-300">
              <ArrowLeft size={16} className="text-[#5A5A5A] group-hover:text-[#8B7355] transition-colors" strokeWidth={1.5} />
            </div>
            <span className="hidden md:inline text-[10px] tracking-[0.3em] uppercase text-[#5A5A5A] group-hover:text-[#8B7355] transition-colors">
              Return to Collection
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsLiked(!isLiked)} 
              className="w-10 h-10 border border-[#E5E2DC] hover:border-[#8B7355] flex items-center justify-center transition-colors duration-300"
            >
              <Heart size={16} className={isLiked ? 'fill-[#8B7355] text-[#8B7355]' : 'text-[#5A5A5A]'} strokeWidth={1.5} />
            </button>
            <button className="w-10 h-10 border border-[#E5E2DC] hover:border-[#8B7355] flex items-center justify-center transition-colors duration-300">
              <Share2 size={16} className="text-[#5A5A5A]" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-24 lg:pt-32 pb-20 lg:pb-32 px-6 lg:px-16 max-w-[1400px] mx-auto">

        {/* HEADER SECTION */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-16 lg:mb-24">
          
          {/* Left: Content */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#8B7355] font-medium">
                  {property.type || 'Asset'}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#8B7355]" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A]">
                  {property.occupancyRate || '100%'} Occupancy
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2C2C2C] mb-6 leading-[1.1]">
                {property.title}
                <span className="block italic text-[#5A5A5A] font-light text-2xl md:text-3xl lg:text-4xl mt-2">
                  {property.subtitle || property.location}
                </span>
              </h1>

              <div className="flex items-center gap-2 text-[#5A5A5A] mb-10">
                <MapPin size={14} className="text-[#8B7355]" strokeWidth={1.5} />
                <span className="text-[11px] uppercase tracking-wider">{property.location}</span>
              </div>

              {/* Value Strip - Club Scorecard Style */}
              <div className="grid grid-cols-2 gap-px bg-[#E5E2DC] border border-[#E5E2DC] mb-8">
                <div className="bg-[#F8F7F4] p-6 lg:p-8">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[#8B7355] mb-2">Indicative Value</p>
                  <p className="text-2xl lg:text-3xl font-serif text-[#2C2C2C] mb-3">{property.price}</p>
                  <div className="space-y-1 text-[10px] text-[#5A5A5A] uppercase tracking-wide">
                    {property.priceKsh && <p>KSh {property.priceKsh}</p>}
                    {property.priceUsd && <p>USD {property.priceUsd}</p>}
                  </div>
                </div>

                <div className="bg-[#F8F7F4] p-6 lg:p-8 text-right">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[#8B7355] mb-2">Net Yield</p>
                  <p className="text-2xl lg:text-3xl font-serif text-[#8B7355]">{property.yield || '—'}</p>
                  <p className="text-[10px] text-[#5A5A5A] mt-2 italic">Institutional Grade</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button 
                  onClick={handleDownload}
                  className="w-full bg-[#8B7355] hover:bg-[#6B5635] text-[#F8F7F4] py-4 lg:py-5 text-[10px] tracking-[0.25em] uppercase flex items-center justify-between px-8 transition-colors duration-300"
                >
                  <span>Request Investment Memorandum</span>
                  <Download size={16} strokeWidth={1.5} />
                </button>

                <Link 
                  href="/contact"
                  className="w-full block border border-[#E5E2DC] hover:border-[#8B7355] text-[#2C2C2C] py-4 lg:py-5 text-[10px] tracking-[0.25em] uppercase flex items-center justify-between px-8 transition-colors duration-300"
                >
                  <span>Contact Portfolio Agent</span>
                  <MessageSquare size={16} className="text-[#8B7355]" strokeWidth={1.5} />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right: Image Gallery */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-64 md:h-80 lg:h-[500px] overflow-hidden cursor-pointer group"
              onClick={() => setIsImageModalOpen(true)}
            >
              <img
                src={property.images?.[currentImageIndex] || '/fallback-property.jpg'}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt={property.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/30 via-transparent to-transparent" />
              
              {/* Image Counter */}
              <div className="absolute bottom-6 left-6 bg-[#F8F7F4]/90 px-4 py-2">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#2C2C2C]">
                  View {currentImageIndex + 1} of {property.images?.length || 0}
                </span>
              </div>

              {/* Thumbnail Strip - Desktop */}
              <div className="hidden lg:flex absolute bottom-6 right-6 gap-2">
                {property.images?.slice(0, 4).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={`w-16 h-16 border-2 overflow-hidden transition-colors ${
                      idx === currentImageIndex ? 'border-[#8B7355]' : 'border-transparent'
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt="" />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* DETAILS GRID - Club Ledger Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E2DC] border border-[#E5E2DC] mb-16 lg:mb-24">
          
          {/* Investment Matrix */}
          <div className="bg-[#F8F7F4] p-8 lg:p-10 hover:bg-[#FDFCFA] transition-colors duration-500">
            <TrendingUp size={20} className="text-[#8B7355] mb-6" strokeWidth={1.5} />
            <h3 className="text-[10px] tracking-[0.25em] uppercase text-[#8B7355] mb-8 font-medium">
              Investment Matrix
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-[#E5E2DC] pb-3">
                <span className="text-[11px] uppercase tracking-wide text-[#5A5A5A]">Monthly NOI</span>
                <span className="text-[14px] text-[#2C2C2C] font-medium">{property.investment?.monthlyIncome || 'TBD'}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E5E2DC] pb-3">
                <span className="text-[11px] uppercase tracking-wide text-[#5A5A5A]">Annual NOI</span>
                <span className="text-[14px] text-[#2C2C2C] font-medium">{property.investment?.annualIncome || 'TBD'}</span>
              </div>
              <div className="flex justify-between items-center text-[#8B7355]">
                <span className="text-[11px] uppercase tracking-wide font-medium">Target ROI</span>
                <span className="text-[14px] font-serif">{property.investment?.totalROI || 'TBD'}</span>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-[#F8F7F4] p-8 lg:p-10 hover:bg-[#FDFCFA] transition-colors duration-500">
            <Building size={20} className="text-[#8B7355] mb-6" strokeWidth={1.5} />
            <h3 className="text-[10px] tracking-[0.25em] uppercase text-[#8B7355] mb-8 font-medium">
              Specifications
            </h3>
            {property.details && property.details.length > 0 ? (
              <div className="space-y-3">
                {property.details.map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-[11px] uppercase tracking-wide text-[#5A5A5A]">{item.label}</span>
                    <span className="text-[13px] text-[#2C2C2C]">{item.value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[12px] text-[#5A5A5A] italic">Specifications available upon request</p>
            )}
          </div>

          {/* Features */}
          <div className="bg-[#F8F7F4] p-8 lg:p-10 hover:bg-[#FDFCFA] transition-colors duration-500 md:col-span-2 lg:col-span-1">
            <Shield size={20} className="text-[#8B7355] mb-6" strokeWidth={1.5} />
            <h3 className="text-[10px] tracking-[0.25em] uppercase text-[#8B7355] mb-8 font-medium">
              Asset Features
            </h3>
            <ul className="space-y-3">
              {(property.features || []).map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-[13px] text-[#2C2C2C]">
                  <span className="w-1 h-1 rounded-full bg-[#8B7355] mt-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-[#E5E2DC] pt-8">
          <p className="text-[10px] text-[#5A5A5A] leading-relaxed max-w-3xl italic">
            This memorandum is confidential and provided for qualified investors only. 
            Past performance is not indicative of future returns. All figures are indicative 
            and subject to final due diligence. Available exclusively to mandated partners 
            and qualified institutional investors under NDA.
          </p>
        </div>
      </main>

      {/* IMAGE MODAL - Club Gallery Style */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#2C2C2C]/98 z-[100] flex items-center justify-center p-6 lg:p-12"
            onClick={() => setIsImageModalOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 lg:top-12 lg:right-16 text-[#A8A39D] hover:text-[#F8F7F4] transition-colors"
              onClick={() => setIsImageModalOpen(false)}
            >
              <X size={28} strokeWidth={1} />
            </button>

            <motion.img 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={property.images?.[currentImageIndex] || '/fallback-property.jpg'} 
              className="max-h-[80vh] max-w-full object-contain" 
              alt={property.title}
            />

            {/* Navigation */}
            <div className="absolute bottom-6 lg:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8 bg-[#F8F7F4]/10 backdrop-blur-sm px-8 py-4 border border-[#8B7355]/20">
              <button 
                className="text-[#A8A39D] hover:text-[#F8F7F4] transition-colors"
                onClick={(e) => { 
                  e.stopPropagation(); 
                  setCurrentImageIndex(i => i > 0 ? i - 1 : (property.images?.length || 1) - 1); 
                }}
              >
                <ChevronLeft size={24} strokeWidth={1} />
              </button>
              
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#F8F7F4]">
                {currentImageIndex + 1} / {property.images?.length || 0}
              </span>
              
              <button 
                className="text-[#A8A39D] hover:text-[#F8F7F4] transition-colors"
                onClick={(e) => { 
                  e.stopPropagation(); 
                  setCurrentImageIndex(i => i < (property.images?.length || 0) - 1 ? i + 1 : 0); 
                }}
              >
                <ChevronRight size={24} strokeWidth={1} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}