'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Heart, Share2, MapPin, Download, 
  TrendingUp, Building2, Shield, X, 
  ChevronLeft, ChevronRight, MessageSquare, 
  FileText, Calendar, ArrowUpRight, Check,
  Maximize2, Mail
} from 'lucide-react';

// ─── Types ─────────────────────────────────────────────────────────────────

interface Property {
  title: string;
  subtitle?: string;
  address: string;
  city: string;
  state: string;
  zipCode?: string;
  location?: { lat: number; lng: number } | null;
  type?: string;
  propertyType?: string;
  listingType?: string;
  price: string;
  priceKsh?: string;
  priceUsd?: string;
  priceGbp?: string;
  priceEur?: string;
  yield?: string;
  images: string[];
  features: string[];
  occupancyRate?: string;
  description: string;
  brochureUrl?: string;
  businessCaseUrl?: string;
  details?: { label: string; value: string }[]; 
  investment?: {
    monthlyIncome?: string;
    annualIncome?: string;
    appreciationRate?: string;
    totalROI?: string;
  };
  broker?: {
    name: string;
    email: string;
    phone: string;
    photo?: string;
  };
  squareFootage?: string;
}

// ─── Color Palette (Old Money Aesthetic) ───────────────────────────────────

const COLORS = {
  forest: '#1B4332',
  forestLight: '#2D5A45',
  cream: '#FAF9F6',
  creamDark: '#F5F4F0',
  brass: '#B8956B',
  brassLight: '#C9A87C',
  charcoal: '#2C2C2C',
  stone: '#8B8680',
  paper: '#FFFFFF',
  border: '#E8E6E1',
};

// ─── Components ─────────────────────────────────────────────────────────────

export default function PropertyClientView({ property }: { property: Property }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showShareToast, setShowShareToast] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!property) return null;

  const handleDownload = async () => {
    if (property.brochureUrl) {
      try {
        const response = await fetch(property.brochureUrl);
        if (!response.ok) throw new Error('Download failed');
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        const fileName = `${property.title.replace(/\s+/g, '_')}_Prospectus.pdf`;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error("Download Error:", error);
        alert("Failed to download prospectus. Please try again.");
      }
    } else {
      alert("Investment prospectus currently being finalized for this asset.");
    }
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 2000);
    } catch {
      // Fallback
    }
  };

  const nextImage = () => {
    setCurrentImageIndex(i => i < property.images.length - 1 ? i + 1 : 0);
  };

  const prevImage = () => {
    setCurrentImageIndex(i => i > 0 ? i - 1 : property.images.length - 1);
  };

  const displayType = property.propertyType || property.type || 'Commercial';

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C2C2C] selection:bg-[#B8956B]/20 pt-[100px]">
    <div className="bg-[#1B4332]"><br /></div>
      {/* Navigation */}
      <nav className={`top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#2C2C2C] backdrop-blur-md border-b border-[#E8E6E1] shadow-sm' : 'bg-[#1B4332]'
      }`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5">
          <div className="flex items-center justify-between">
            <Link 
              href="/properties" 
              className="group flex items-center gap-3 hover:opacity-70 transition-opacity"
            >
              <div className={`w-10 h-10 border flex items-center justify-center transition-colors ${
                isScrolled ? 'border-[#E8E6E1] group-hover:border-[#1B4332]' : 'border-white/30 group-hover:border-white'
              }`}>
                <ArrowLeft size={16} className={isScrolled ? 'text-[#2C2C2C]' : 'text-white'} strokeWidth={1.5} />
              </div>
              <span className={`hidden md:inline text-[10px] tracking-[0.3em] uppercase transition-colors ${
                isScrolled ? 'text-[#8B8680] group-hover:text-[#1B4332]' : 'text-white/80 group-hover:text-white'
              }`}>
                Return to Portfolio
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsLiked(!isLiked)} 
                className={`w-10 h-10 border flex items-center justify-center transition-all ${
                  isScrolled 
                    ? 'border-[#E8E6E1] hover:border-[#1B4332]' 
                    : 'border-white/30 hover:border-white'
                } ${isLiked ? 'bg-[#1B4332] border-[#1B4332]' : ''}`}
              >
                <Heart 
                  size={16} 
                  className={`transition-colors ${isLiked ? 'fill-white text-white' : isScrolled ? 'text-[#2C2C2C]' : 'text-white'}`} 
                  strokeWidth={1.5} 
                />
              </button>
              <button 
                onClick={handleShare}
                className={`w-10 h-10 border flex items-center justify-center transition-colors ${
                  isScrolled ? 'border-[#E8E6E1] hover:border-[#1B4332]' : 'border-white/30 hover:border-white'
                }`}
              >
                <Share2 size={16} className={isScrolled ? 'text-[#2C2C2C]' : 'text-white'} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Share Toast */}
      <AnimatePresence>
        {showShareToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#1B4332] text-white px-6 py-3 text-[11px] tracking-[0.2em] uppercase"
          >
            Link copied to clipboard
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden bg-[#1B4332]">
        <div className="absolute inset-0">
          {property.images?.[0] ? (
            <img 
              src={property.images[0]} 
              alt={property.title}
              className="w-full h-full object-cover opacity-60"
            />
          ) : (
            <div className="w-full h-full bg-[#2D5A45]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332] via-[#1B4332]/50 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex items-end pb-16 lg:pb-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#B8956B] font-medium bg-[#B8956B]/10 px-3 py-1.5">
                  {displayType}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#B8956B]" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-white/80">
                  {property.listingType || 'For Sale'}
                </span>
                {property.occupancyRate && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    <span className="text-[10px] tracking-[0.2em] uppercase text-white/80">
                      {property.occupancyRate} Occupied
                    </span>
                  </>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 leading-[1.1] max-w-4xl">
                {property.title}
                {property.subtitle && (
                  <span className="block italic text-[#B8956B] font-light text-2xl md:text-3xl lg:text-4xl mt-3">
                    {property.subtitle}
                  </span>
                )}
              </h1>

              <div className="flex items-center gap-2 text-white/70 mt-6">
                <MapPin size={16} className="text-[#B8956B]" strokeWidth={1.5} />
                <span className="text-[12px] tracking-wide">
                  {property.address}, {property.city}, {property.state} {property.zipCode}
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Thumbnail Strip */}
        {property.images && property.images.length > 1 && (
          <div className="absolute bottom-6 right-6 lg:right-12 hidden lg:flex gap-2">
            {property.images.slice(0, 4).map((img, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentImageIndex(idx);
                  setIsImageModalOpen(true);
                }}
                className={`w-20 h-20 border-2 overflow-hidden transition-all ${
                  idx === 0 ? 'border-[#B8956B]' : 'border-white/30 hover:border-white'
                }`}
              >
                <img src={img} className="w-full h-full object-cover" alt="" />
              </button>
            ))}
            {property.images.length > 4 && (
              <button
                onClick={() => setIsImageModalOpen(true)}
                className="w-20 h-20 border border-white/30 flex items-center justify-center text-white text-xs tracking-wide hover:border-white transition-colors"
              >
                +{property.images.length - 4}
              </button>
            )}
          </div>
        )}
      </section>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column - Investment Details */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Value Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-px bg-[#E8E6E1] border border-[#E8E6E1]"
            >
              <div className="bg-white p-8 lg:p-10">
                <p className="text-[9px] tracking-[0.25em] uppercase text-[#B8956B] mb-3 font-medium">Indicative Value</p>
                <p className="text-3xl lg:text-4xl font-serif text-[#2C2C2C] mb-4">{property.price}</p>
                <div className="space-y-1.5 text-[11px] text-[#8B8680] uppercase tracking-wide">
                  {property.priceKsh && <p>KSh {property.priceKsh}</p>}
                  {property.priceUsd && <p>USD {property.priceUsd}</p>}
                  {property.priceGbp && <p>GBP {property.priceGbp}</p>}
                  {property.priceEur && <p>EUR {property.priceEur}</p>}
                </div>
              </div>

              <div className="bg-[#1B4332] text-white p-8 lg:p-10 flex flex-col justify-between">
                <div className="text-right">
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#B8956B] mb-3 font-medium">Net Yield</p>
                  <p className="text-3xl lg:text-4xl font-serif text-white">{property.yield || '—'}</p>
                </div>
                <p className="text-[10px] text-white/60 mt-4 text-right italic">Institutional Grade Asset</p>
              </div>
            </motion.div>

            {/* Investment Matrix */}
            {property.investment && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#1B4332] flex items-center justify-center">
                    <TrendingUp size={18} className="text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] font-medium">
                    Investment Returns Analysis
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E8E6E1] border border-[#E8E6E1]">
                  {property.investment.monthlyIncome && (
                    <div className="bg-white p-6">
                      <span className="text-[9px] tracking-[0.15em] uppercase text-[#8B8680] block mb-2">Monthly Income</span>
                      <span className="text-lg font-medium text-[#2C2C2C]">{property.investment.monthlyIncome}</span>
                    </div>
                  )}
                  {property.investment.annualIncome && (
                    <div className="bg-white p-6">
                      <span className="text-[9px] tracking-[0.15em] uppercase text-[#8B8680] block mb-2">Annual Income</span>
                      <span className="text-lg font-medium text-[#2C2C2C]">{property.investment.annualIncome}</span>
                    </div>
                  )}
                  {property.investment.appreciationRate && (
                    <div className="bg-white p-6">
                      <span className="text-[9px] tracking-[0.15em] uppercase text-[#8B8680] block mb-2">Appreciation</span>
                      <span className="text-lg font-medium text-[#2C2C2C]">{property.investment.appreciationRate}</span>
                    </div>
                  )}
                  {property.investment.totalROI && (
                    <div className="bg-[#B8956B] text-white p-6">
                      <span className="text-[9px] tracking-[0.15em] uppercase text-white/80 block mb-2">Target ROI</span>
                      <span className="text-xl font-serif">{property.investment.totalROI}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Executive Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] font-medium mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F5F4F0] flex items-center justify-center">
                  <FileText size={18} className="text-[#1B4332]" strokeWidth={1.5} />
                </div>
                Executive Summary
              </h3>
              <div className="prose prose-stone max-w-none">
                <p className="text-[15px] text-[#5A5A5A] leading-[1.8] font-light">
                  {property.description}
                </p>
              </div>
            </motion.div>

            {/* Key Attributes */}
            {property.features && property.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] font-medium mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F5F4F0] flex items-center justify-center">
                    <Shield size={18} className="text-[#1B4332]" strokeWidth={1.5} />
                  </div>
                  Key Investment Attributes
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {property.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white border border-[#E8E6E1] p-4">
                      <Check size={16} className="text-[#B8956B] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-[13px] text-[#2C2C2C] leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Specifications */}
            {property.details && property.details.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] font-medium mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F5F4F0] flex items-center justify-center">
                    <Building2 size={18} className="text-[#1B4332]" strokeWidth={1.5} />
                  </div>
                  Asset Specifications
                </h3>
                <div className="bg-white border border-[#E8E6E1]">
                  {property.details.map((detail, i) => (
                    <div 
                      key={i} 
                      className={`flex justify-between items-center p-5 ${i !== property.details!.length - 1 ? 'border-b border-[#E8E6E1]' : ''}`}
                    >
                      <span className="text-[11px] uppercase tracking-wide text-[#8B8680]">{detail.label}</span>
                      <span className="text-[14px] text-[#2C2C2C] font-medium">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Gallery Preview */}
            {property.images && property.images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] font-medium mb-6">
                  Visual Documentation
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.images.slice(0, 6).map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setCurrentImageIndex(idx);
                        setIsImageModalOpen(true);
                      }}
                      className="relative aspect-square overflow-hidden group"
                    >
                      <img 
                        src={img} 
                        alt={`${property.title} - ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-[#1B4332]/0 group-hover:bg-[#1B4332]/20 transition-colors" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column - Sticky Sidebar */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              
              {/* Mandate Badge */}
              <div className="bg-[#1B4332] text-white p-6 flex items-center gap-4">
                <Shield size={24} className="text-[#B8956B]" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#B8956B] font-medium">Exclusive Mandate</p>
                  <p className="text-[13px] text-white/90 mt-1">Direct representation by Murivest</p>
                </div>
              </div>

              {/* Size Card */}
              <div className="bg-white border border-[#E8E6E1] p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#F5F4F0] flex items-center justify-center">
                    <Maximize2 size={20} className="text-[#1B4332]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680]">Total Area</p>
                    <p className="text-lg font-medium text-[#2C2C2C]">{property.squareFootage || '—'}</p>
                  </div>
                </div>
              </div>

              {/* Broker Card */}
              {property.broker && (
                <div className="bg-white border border-[#E8E6E1] p-6">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] mb-4 font-medium">Mandated Advisor</p>
                  <div className="flex items-start gap-4 mb-6">
                    {property.broker.photo ? (
                      <img
                        src={property.broker.photo}
                        alt={property.broker.name}
                        className="w-14 h-14 rounded-full object-cover border border-[#E8E6E1]"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-[#F5F4F0] border border-[#E8E6E1] flex items-center justify-center">
                        <span className="text-lg font-serif text-[#8B8680]">
                          {property.broker.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="font-serif text-lg text-[#2C2C2C]">{property.broker.name}</p>
                      <p className="text-[11px] text-[#8B8680] mt-1">Investment Advisory</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-[13px]">
                    <a href={`mailto:${property.broker.email}`} className="flex items-center gap-3 text-[#5A5A5A] hover:text-[#1B4332] transition-colors">
                      <Mail size={16} className="text-[#B8956B]" strokeWidth={1.5} />
                      {property.broker.email}
                    </a>
                    <a href={`tel:${property.broker.phone}`} className="flex items-center gap-3 text-[#5A5A5A] hover:text-[#1B4332] transition-colors">
                      <MessageSquare size={16} className="text-[#B8956B]" strokeWidth={1.5} />
                      {property.broker.phone}
                    </a>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3">
                <button 
                  onClick={handleDownload}
                  className="w-full bg-[#1B4332] hover:bg-[#2D5A45] text-white py-4 text-[11px] tracking-[0.25em] uppercase flex items-center justify-between px-6 transition-colors duration-300 group"
                >
                  <span>Download Prospectus</span>
                  <Download size={18} className="group-hover:translate-y-0.5 transition-transform" strokeWidth={1.5} />
                </button>

                {property.businessCaseUrl && (
                  <a
                    href={property.businessCaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block bg-[#B8956B] hover:bg-[#A08055] text-white py-4 text-[11px] tracking-[0.25em] uppercase text-center transition-colors"
                  >
                    View Business Case
                  </a>
                )}

                <a
                  href={`mailto:${property.broker?.email || 'investments@murivest.co.ke'}?subject=Investment Inquiry: ${property.title}`}
                  className="w-full block border border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white py-4 text-[11px] tracking-[0.25em] uppercase text-center transition-colors"
                >
                  Schedule Consultation
                </a>
              </div>

              {/* Confidentiality Notice */}
              <div className="bg-[#F5F4F0] border border-[#E8E6E1] p-5">
                <div className="flex items-start gap-3">
                  <Shield size={16} className="text-[#B8956B] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <p className="text-[11px] text-[#8B8680] leading-relaxed">
                    This memorandum is confidential and provided for qualified investors only. 
                    All figures are indicative and subject to final due diligence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1B4332]/98 z-[100] flex items-center justify-center"
            onClick={() => setIsImageModalOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              onClick={() => setIsImageModalOpen(false)}
            >
              <X size={32} strokeWidth={1} />
            </button>

            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-4"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft size={40} strokeWidth={1} />
            </button>

            <motion.img 
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={property.images?.[currentImageIndex]} 
              className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl" 
              alt={`${property.title} - ${currentImageIndex + 1}`}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-4"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight size={40} strokeWidth={1} />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-white/10 backdrop-blur-sm px-6 py-3 border border-white/20">
              <span className="text-[11px] tracking-[0.3em] uppercase text-white">
                {currentImageIndex + 1} / {property.images?.length || 0}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Disclaimer */}
      <footer className="border-t border-[#E8E6E1] bg-white py-12 mt-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-4 h-4 text-[#B8956B]" strokeWidth={1.5} />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#8B8680]">Mandated Advisory</span>
          </div>
          <p className="text-[11px] text-[#8B8680] leading-relaxed max-w-3xl mx-auto text-center font-light">
            All information contained herein is provided for informational purposes only and should not be construed as investment advice. 
            Past performance is not indicative of future returns. Available exclusively to mandated partners and qualified institutional investors under NDA. 
            Murivest Realty Ltd is a licensed real estate agency regulated by the Estate Agents Registration Board of Kenya.
          </p>
        </div>
      </footer>
    </div>
  );
}