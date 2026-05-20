'use client';

/**
 * MURIVEST — UAE PROPERTY DETAIL CLIENT VIEW
 * ============================================
 * Full property investment memorandum page.
 * Mirrors PropertyClientView.tsx architecture — UAE edition.
 */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PortableText } from '@portabletext/react';
import {
  ArrowLeft, Heart, Share2, MapPin, Download,
  TrendingUp, Building2, Shield, X,
  ChevronLeft, ChevronRight, FileText, Calendar,
  ArrowUpRight, Check, Maximize2, Mail, Printer,
  Star, Home, Car, Layers, Video, Award
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface UaePropertyViewProps {
  title:           string;
  subtitle?:       string;
  address:         string;
  emirate:         string;
  community?:      string;
  category:        string;
  propertyType:    string;
  status:          string;
  isExclusive:     boolean;
  isOffMarket:     boolean;
  priceAed?:       string;
  priceUsd?:       string;
  priceGbp?:       string;
  priceKsh?:       string;
  annualYield?:    string;
  occupancyRate?:  string;
  bedrooms?:       string;
  bathrooms?:      string;
  sizeSqft?:       string;
  floor?:          string;
  parkingSpaces?:  number;
  features?:       string[];
  developer?:      string;
  developmentName?: string;
  completionDate?:  string;
  paymentPlan?:    string;
  serviceCharge?:  string;
  investmentMetrics?: {
    monthlyRental?:    string;
    annualRental?:     string;
    appreciationRate?: string;
    totalROI?:         string;
    paybackPeriod?:    string;
    goldenVisa?:       boolean;
  };
  description?:    any[];
  images:          string[];
  floorPlan?:      string;
  videoUrl?:       string;
  brochureUrl?:    string;
  businessCaseUrl?: string;
  referenceCode?:  string;
  nda?:            boolean;
  regulatoryNote?: string;
  broker?: {
    name:   string;
    email:  string;
    phone:  string;
    photo?: string;
    title?: string;
  };
  coordinates?: { lat: number; lng: number };
}

const CATEGORY_LABELS: Record<string, string> = {
  'for-sale':         'For Sale',
  'for-rent':         'For Rent',
  'off-plan':         'Off-Plan',
  'commercial-lease': 'Commercial Lease',
  'portfolio':        'Portfolio Asset',
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function UaePropertyClientView({
  property,
  sidebar,
}: {
  property: UaePropertyViewProps;
  sidebar?: React.ReactNode;
}) {
  const [isLiked,          setIsLiked]          = useState(false);
  const [isImageModalOpen, setIsImageModalOpen]  = useState(false);
  const [currentImageIdx,  setCurrentImageIdx]   = useState(0);
  const [showShareToast,   setShowShareToast]    = useState(false);
  const [activeTab,        setActiveTab]         = useState<'overview' | 'financials' | 'floorplan'>('overview');

  const nextImage = () => setCurrentImageIdx(i => i < property.images.length - 1 ? i + 1 : 0);
  const prevImage = () => setCurrentImageIdx(i => i > 0 ? i - 1 : property.images.length - 1);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 2000);
    } catch {}
  };

  const handleDownload = async () => {
    if (property.brochureUrl) {
      const link = document.createElement('a');
      link.href = property.brochureUrl;
      link.download = `${property.title.replace(/\s+/g, '_')}_Murivest_Brochure.pdf`;
      link.click();
    } else {
      alert('Investment prospectus is currently being prepared for this asset.');
    }
  };

  const categoryLabel = CATEGORY_LABELS[property.category] || property.category;

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C2C2C]">

      {/* ── Sub-nav ──────────────────────────────────────────────────── */}
      <nav className="bg-[#1B4332] border-b border-[#2D5A45]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            <Link href="/uae-properties" className="group flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-9 h-9 border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors">
                <ArrowLeft size={14} className="text-white" strokeWidth={1.5} />
              </div>
              <span className="hidden md:inline text-[10px] tracking-[0.3em] uppercase text-white/70 group-hover:text-white transition-colors">
                UAE Portfolio
              </span>
            </Link>

            <div className="flex items-center gap-2">
              {/* Breadcrumb */}
              <span className="hidden lg:flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-white/40">
                <Link href="/" className="hover:text-white/70 transition-colors">Murivest</Link>
                <span>/</span>
                <Link href="/uae-properties" className="hover:text-white/70 transition-colors">UAE</Link>
                <span>/</span>
                <span className="text-white/70 max-w-[200px] truncate">{property.title}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button onClick={() => setIsLiked(!isLiked)}
                className={`w-9 h-9 border flex items-center justify-center transition-all ${isLiked ? 'bg-[#B8956B] border-[#B8956B]' : 'border-white/20 hover:border-white/50'}`}
              >
                <Heart size={14} className={isLiked ? 'fill-white text-white' : 'text-white'} strokeWidth={1.5} />
              </button>
              <button onClick={handleShare}
                className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-white/50 transition-colors"
              >
                <Share2 size={14} className="text-white" strokeWidth={1.5} />
              </button>
              <button onClick={() => window.print()}
                className="hidden md:flex w-9 h-9 border border-white/20 items-center justify-center hover:border-white/50 transition-colors"
              >
                <Printer size={14} className="text-white" strokeWidth={1.5} />
              </button>

              {/* Share toast */}
              <AnimatePresence>
                {showShareToast && (
                  <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="absolute top-14 right-6 bg-[#1B4332] border border-[#B8956B] text-white px-4 py-2 text-[11px] tracking-wide flex items-center gap-2"
                  >
                    <Check size={12} className="text-[#B8956B]" /> Link copied
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>

      {/* ── HERO IMAGE GALLERY ───────────────────────────────────────── */}
      {property.images.length > 0 && (
        <div className="relative w-full overflow-hidden bg-[#1B4332]" style={{ height: 'min(70vh, 560px)' }}>
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => { setCurrentImageIdx(0); setIsImageModalOpen(true); }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F15]/70 via-transparent to-transparent pointer-events-none" />

          {/* Thumbnail strip */}
          {property.images.length > 1 && (
            <div className="absolute bottom-6 right-6 flex gap-2">
              {property.images.slice(1, 5).map((img, i) => (
                <button key={i}
                  onClick={() => { setCurrentImageIdx(i + 1); setIsImageModalOpen(true); }}
                  className="relative w-20 h-14 overflow-hidden border-2 border-white/30 hover:border-white/80 transition-colors"
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                  {i === 3 && property.images.length > 5 && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white text-[11px] font-medium">+{property.images.length - 5}</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Expand button */}
          <button
            onClick={() => { setCurrentImageIdx(0); setIsImageModalOpen(true); }}
            className="absolute top-6 right-6 bg-black/30 hover:bg-black/50 border border-white/30 text-white px-4 py-2 text-[10px] tracking-[0.2em] uppercase flex items-center gap-2 transition-colors"
          >
            <Maximize2 size={12} strokeWidth={1.5} />
            All Photos
          </button>
        </div>
      )}

      {/* ── MAIN CONTENT ─────────────────────────────────────────────── */}
      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* ── Left column — property details ───────────────────────── */}
          <div className="lg:col-span-8 space-y-10">

            {/* Header */}
            <div>
              <div className="flex items-center gap-3 flex-wrap mb-3">
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#B8956B] font-medium bg-[#B8956B]/8 border border-[#B8956B]/20 px-3 py-1">
                  {categoryLabel}
                </span>
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#8B8680]">
                  {property.propertyType}
                </span>
                {property.isExclusive && (
                  <span className="flex items-center gap-1 text-[9px] tracking-[0.3em] uppercase text-white bg-[#1B4332] px-3 py-1">
                    <Shield size={9} /> Exclusive Mandate
                  </span>
                )}
                {property.isOffMarket && (
                  <span className="text-[9px] tracking-[0.3em] uppercase text-white bg-[#5A4A3A] px-3 py-1">
                    Off-Market
                  </span>
                )}
                {property.referenceCode && (
                  <span className="text-[9px] tracking-[0.25em] uppercase text-[#8B8680]">
                    Ref: {property.referenceCode}
                  </span>
                )}
              </div>

              <h1 className="font-serif text-3xl lg:text-4xl text-[#2C2C2C] leading-tight mb-2">
                {property.title}
              </h1>
              {property.subtitle && (
                <p className="font-serif text-lg text-[#8B8680] italic font-light mb-3">{property.subtitle}</p>
              )}

              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-[#B8956B]" strokeWidth={1.5} />
                <span className="text-[13px] text-[#5A5A5A]">
                  {property.community ? `${property.community}, ` : ''}{property.emirate}
                </span>
              </div>
            </div>

            {/* Price + key metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-[#E8E6E1]">
              <div>
                <p className="text-[9px] tracking-[0.25em] uppercase text-[#8B8680] mb-1.5">
                  {property.category === 'for-rent' ? 'Annual Rent' : 'Asking Price'}
                </p>
                <p className="font-serif text-[22px] text-[#2C2C2C] leading-none">
                  {property.priceAed || 'POA'}
                </p>
                {property.priceUsd && (
                  <p className="text-[11px] text-[#8B8680] mt-1">{property.priceUsd}</p>
                )}
              </div>

              {property.annualYield && (
                <div>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#8B8680] mb-1.5">Gross Yield</p>
                  <div className="flex items-center gap-1.5">
                    <TrendingUp size={16} className="text-[#1B4332]" strokeWidth={2} />
                    <p className="font-serif text-[22px] text-[#1B4332]">{property.annualYield}</p>
                  </div>
                </div>
              )}

              {property.sizeSqft && (
                <div>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#8B8680] mb-1.5">Area</p>
                  <p className="font-serif text-[22px] text-[#2C2C2C]">{property.sizeSqft}</p>
                  <p className="text-[10px] text-[#8B8680]">sq ft</p>
                </div>
              )}

              {property.bedrooms && (
                <div>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#8B8680] mb-1.5">Bedrooms</p>
                  <p className="font-serif text-[22px] text-[#2C2C2C]">{property.bedrooms}</p>
                </div>
              )}
            </div>

            {/* Tabs */}
            <div>
              <div className="flex border-b border-[#E8E6E1] mb-8">
                {(['overview', 'financials', 'floorplan'] as const).map((tab) => (
                  <button key={tab} onClick={() => setActiveTab(tab)}
                    className={`px-5 py-3 text-[10px] tracking-[0.2em] uppercase transition-all border-b-2 -mb-[2px] ${
                      activeTab === tab
                        ? 'border-[#1B4332] text-[#1B4332] font-medium'
                        : 'border-transparent text-[#8B8680] hover:text-[#2C2C2C]'
                    }`}
                  >
                    {tab === 'floorplan' ? 'Floor Plan' : tab}
                  </button>
                ))}
              </div>

              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">

                  {/* Description */}
                  {property.description && property.description.length > 0 && (
                    <div>
                      <h2 className="text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] font-medium mb-4">
                        Investment Memorandum
                      </h2>
                      <div className="prose prose-sm max-w-none text-[#5A5A5A] leading-relaxed [&_p]:font-light [&_p]:text-[14px] [&_p]:mb-4">
                        <PortableText value={property.description} />
                      </div>
                    </div>
                  )}

                  {/* Specifications table */}
                  <div>
                    <h2 className="text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] font-medium mb-5">
                      Asset Specifications
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border border-[#E8E6E1]">
                      {[
                        { label: 'Property Type',     value: property.propertyType },
                        { label: 'Listing Type',      value: CATEGORY_LABELS[property.category] },
                        { label: 'Emirate',           value: property.emirate },
                        { label: 'Community',         value: property.community },
                        { label: 'Bedrooms',          value: property.bedrooms },
                        { label: 'Bathrooms',         value: property.bathrooms },
                        { label: 'Area (sq ft)',      value: property.sizeSqft },
                        { label: 'Floor / Level',     value: property.floor },
                        { label: 'Parking',           value: property.parkingSpaces?.toString() },
                        { label: 'Developer',         value: property.developer },
                        { label: 'Development',       value: property.developmentName },
                        { label: 'Completion',        value: property.completionDate },
                        { label: 'Service Charge',    value: property.serviceCharge ? `${property.serviceCharge} AED/sqft/yr` : undefined },
                        { label: 'Payment Plan',      value: property.paymentPlan },
                        { label: 'Status',            value: property.status?.replace('-', ' ') },
                      ].filter(r => r.value).map((row) => (
                        <div key={row.label} className="flex flex-col border-r border-b border-[#E8E6E1] last:border-r-0 px-4 py-3">
                          <span className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] mb-1">{row.label}</span>
                          <span className="text-[13px] text-[#2C2C2C] font-light capitalize">{row.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  {property.features && property.features.length > 0 && (
                    <div>
                      <h2 className="text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] font-medium mb-5">
                        Features & Amenities
                      </h2>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {property.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2.5 py-2 border-b border-[#F0EDE8]">
                            <div className="w-1.5 h-1.5 bg-[#B8956B] flex-shrink-0" />
                            <span className="text-[12px] text-[#5A5A5A] font-light">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Video tour */}
                  {property.videoUrl && (
                    <div>
                      <h2 className="text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] font-medium mb-4">
                        Virtual Tour
                      </h2>
                      <a href={property.videoUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-[#1B4332] text-white px-6 py-4 hover:bg-[#2D5A45] transition-colors w-fit"
                      >
                        <Video size={16} strokeWidth={1.5} />
                        <span className="text-[11px] tracking-[0.2em] uppercase">View Virtual Tour</span>
                      </a>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Financials Tab */}
              {activeTab === 'financials' && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Multi-currency pricing */}
                    <div className="bg-white border border-[#E8E6E1] p-6">
                      <h3 className="text-[10px] tracking-[0.25em] uppercase text-[#8B8680] mb-4 pb-3 border-b border-[#E8E6E1]">
                        Multi-Currency Pricing
                      </h3>
                      <div className="space-y-3">
                        {[
                          { label: 'AED', value: property.priceAed },
                          { label: 'USD', value: property.priceUsd },
                          { label: 'GBP', value: property.priceGbp },
                          { label: 'KES', value: property.priceKsh },
                        ].filter(r => r.value).map(({ label, value }) => (
                          <div key={label} className="flex items-center justify-between">
                            <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B8680]">{label}</span>
                            <span className="font-serif text-[16px] text-[#2C2C2C]">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Investment returns */}
                    {property.investmentMetrics && (
                      <div className="bg-[#1B4332] text-white p-6">
                        <h3 className="text-[10px] tracking-[0.25em] uppercase text-[#B8956B] mb-4 pb-3 border-b border-white/10">
                          Investment Returns
                        </h3>
                        <div className="space-y-3">
                          {[
                            { label: 'Monthly Rental',       value: property.investmentMetrics.monthlyRental },
                            { label: 'Annual Rental',        value: property.investmentMetrics.annualRental },
                            { label: 'Gross Yield',          value: property.annualYield },
                            { label: 'Appreciation Rate',    value: property.investmentMetrics.appreciationRate },
                            { label: 'Projected Total ROI',  value: property.investmentMetrics.totalROI },
                            { label: 'Payback Period',       value: property.investmentMetrics.paybackPeriod },
                          ].filter(r => r.value).map(({ label, value }) => (
                            <div key={label} className="flex items-center justify-between">
                              <span className="text-[10px] tracking-[0.15em] uppercase text-white/60">{label}</span>
                              <span className="font-serif text-[16px] text-[#C4B59D]">{value}</span>
                            </div>
                          ))}
                        </div>

                        {property.investmentMetrics.goldenVisa && (
                          <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                            <Award size={14} className="text-[#B8956B]" />
                            <span className="text-[11px] text-[#B8956B] tracking-wide">Golden Visa Eligible Investment</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Occupancy */}
                  {property.occupancyRate && (
                    <div className="bg-[#F5F4F0] border border-[#E8E6E1] p-5 flex items-center gap-4">
                      <TrendingUp size={20} className="text-[#1B4332]" strokeWidth={1.5} />
                      <div>
                        <p className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680]">Current Occupancy</p>
                        <p className="font-serif text-xl text-[#2C2C2C]">{property.occupancyRate}</p>
                      </div>
                    </div>
                  )}

                  {/* Regulatory note */}
                  {property.regulatoryNote && (
                    <div className="bg-[#FAF9F6] border border-[#E8E6E1] p-5">
                      <div className="flex items-start gap-3">
                        <Shield size={14} className="text-[#B8956B] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                        <p className="text-[11px] text-[#8B8680] leading-relaxed">{property.regulatoryNote}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Floor Plan Tab */}
              {activeTab === 'floorplan' && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                  {property.floorPlan ? (
                    <img src={property.floorPlan} alt="Floor Plan" className="w-full border border-[#E8E6E1]" />
                  ) : (
                    <div className="text-center py-16 border border-[#E8E6E1] bg-white">
                      <Layers size={32} className="text-[#E8E6E1] mx-auto mb-3" strokeWidth={0.8} />
                      <p className="font-serif text-lg text-[#8B8680] italic">
                        Floor plan available upon request
                      </p>
                      <a
                        href={`mailto:${property.broker?.email || 'uae@murivest.co.ke'}?subject=Floor Plan Request: ${property.title}`}
                        className="mt-4 inline-block text-[11px] tracking-[0.2em] uppercase text-[#1B4332] border border-[#1B4332] px-6 py-2.5 hover:bg-[#1B4332] hover:text-white transition-colors"
                      >
                        Request Floor Plan
                      </a>
                    </div>
                  )}
                </motion.div>
              )}
            </div>

          </div>{/* end left column */}

          {/* ── Right column — action sidebar ────────────────────────── */}
          <div className="lg:col-span-4">
            <div className=" top-24 space-y-5">

              {/* Mandate / exclusive badge */}
              {property.isExclusive && (
                <div className="bg-[#1B4332] text-white p-5 flex items-center gap-3">
                  <Shield size={20} className="text-[#B8956B]" strokeWidth={1.5} />
                  <div>
                    <p className="text-[9px] tracking-[0.2em] uppercase text-[#B8956B]">Exclusive Mandate</p>
                    <p className="text-[12px] text-white/90 mt-0.5">Direct representation by Murivest</p>
                  </div>
                </div>
              )}

              {/* NDA notice */}
              {property.nda && (
                <div className="bg-[#B8956B]/10 border border-[#B8956B]/30 p-4 flex items-start gap-3">
                  <FileText size={14} className="text-[#B8956B] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <p className="text-[11px] text-[#8B7355] leading-relaxed">
                    Full details provided under NDA to verified investors.
                  </p>
                </div>
              )}

              {/* Price summary card */}
              <div className="bg-white border border-[#E8E6E1] p-6">
                <p className="text-[9px] tracking-[0.25em] uppercase text-[#8B8680] mb-1">
                  {property.category === 'for-rent' ? 'Annual Rent' : 'Asking Price'}
                </p>
                <p className="font-serif text-2xl text-[#2C2C2C] mb-1">{property.priceAed || 'POA'}</p>
                {property.priceUsd && <p className="text-[11px] text-[#8B8680]">{property.priceUsd}</p>}
                {property.annualYield && (
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#E8E6E1]">
                    <TrendingUp size={13} className="text-[#1B4332]" strokeWidth={2} />
                    <span className="text-[12px] font-semibold text-[#1B4332]">{property.annualYield} gross yield</span>
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="space-y-2.5">
                <button onClick={handleDownload}
                  className="w-full bg-[#1B4332] hover:bg-[#2D5A45] text-white py-3.5 text-[10px] tracking-[0.25em] uppercase flex items-center justify-between px-5 transition-colors group"
                >
                  <span>Download Brochure</span>
                  <Download size={14} className="group-hover:translate-y-0.5 transition-transform" strokeWidth={1.5} />
                </button>

                {property.businessCaseUrl && (
                  <a href={property.businessCaseUrl} target="_blank" rel="noopener noreferrer"
                    className="w-full block bg-[#B8956B] hover:bg-[#A08055] text-white py-3.5 text-[10px] tracking-[0.25em] uppercase text-center transition-colors"
                  >
                    View Business Case
                  </a>
                )}

                <a href={`mailto:${property.broker?.email || 'uae@murivest.co.ke'}?subject=Investment Inquiry: ${property.title}`}
                  className="w-full block border border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white py-3.5 text-[10px] tracking-[0.25em] uppercase text-center transition-colors"
                >
                  Request Consultation
                </a>

                <a href={`https://wa.me/${(property.broker?.phone || '+971501234567').replace(/[^\d+]/g, '')}?text=Inquiry: ${property.title}`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full block border border-[#E8E6E1] text-[#5A5A5A] hover:border-[#1B4332] hover:text-[#1B4332] py-3.5 text-[10px] tracking-[0.25em] uppercase text-center transition-colors"
                >
                  WhatsApp Advisor
                </a>
              </div>

              {/* Broker */}
              {property.broker && (
                <div className="bg-[#FAF9F6] border border-[#E8E6E1] p-5">
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#8B8680] mb-4">Your Advisor</p>
                  <div className="flex items-center gap-3 mb-4">
                    {property.broker.photo ? (
                      <img src={property.broker.photo} alt={property.broker.name}
                        className="w-12 h-12 object-cover rounded-full border border-[#E8E6E1]" />
                    ) : (
                      <div className="w-12 h-12 bg-[#1B4332] rounded-full flex items-center justify-center">
                        <span className="text-[#B8956B] font-serif text-lg">{property.broker.name.charAt(0)}</span>
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-[#2C2C2C] text-[13px]">{property.broker.name}</p>
                      <p className="text-[10px] text-[#8B8680]">{property.broker.title || 'Investment Associate'}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <a href={`mailto:${property.broker.email}`} className="flex items-center gap-2 text-[12px] text-[#5A5A5A] hover:text-[#1B4332] transition-colors">
                      <Mail size={12} strokeWidth={1.5} className="text-[#B8956B]" />
                      {property.broker.email}
                    </a>
                    <a href={`tel:${property.broker.phone}`} className="flex items-center gap-2 text-[12px] text-[#5A5A5A] hover:text-[#1B4332] transition-colors">
                      <span className="text-[#B8956B] text-xs">📞</span>
                      {property.broker.phone}
                    </a>
                  </div>
                </div>
              )}

              {/* Confidentiality note */}
              <div className="p-4 border border-[#E8E6E1] bg-white">
                <div className="flex items-start gap-2.5">
                  <Shield size={12} className="text-[#B8956B] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <p className="text-[10px] text-[#8B8680] leading-relaxed">
                    Confidential. Provided for qualified investors only. Figures are indicative and subject to final due diligence.
                  </p>
                </div>
              </div>
            </div>

            {/* Discovery sidebar */}
            {sidebar && <div className="mt-8">{sidebar}</div>}
          </div>

        </div>
      </main>

      {/* ── Image Modal ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0A1F15]/98 z-[100] flex items-center justify-center"
            onClick={() => setIsImageModalOpen(false)}
          >
            <button className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors" onClick={() => setIsImageModalOpen(false)}>
              <X size={28} strokeWidth={1} />
            </button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-white/60 hover:text-white"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}>
              <ChevronLeft size={36} strokeWidth={1} />
            </button>
            <motion.img
              key={currentImageIdx}
              initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              src={property.images[currentImageIdx]}
              className="max-h-[85vh] max-w-[88vw] object-contain shadow-2xl"
              alt={property.title}
              onClick={(e) => e.stopPropagation()}
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-white/60 hover:text-white"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}>
              <ChevronRight size={36} strokeWidth={1} />
            </button>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-6 py-2 border border-white/10">
              <span className="text-[11px] tracking-[0.3em] uppercase text-white">
                {currentImageIdx + 1} / {property.images.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Footer disclaimer ─────────────────────────────────────────── */}
      <footer className="border-t border-[#E8E6E1] bg-white py-10 mt-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shield className="w-4 h-4 text-[#B8956B]" strokeWidth={1.5} />
            <span className="text-[9px] tracking-[0.3em] uppercase text-[#8B8680]">Mandated Advisory · UAE</span>
          </div>
          <p className="text-[11px] text-[#8B8680] leading-relaxed max-w-3xl mx-auto font-light">
            All information is provided for informational purposes and does not constitute investment advice.
            Past performance is not indicative of future returns. Available exclusively to mandated partners and
            qualified investors under NDA. Murivest operates in compliance with UAE RERA and Kenya EARB regulations.
          </p>
        </div>
      </footer>
    </div>
  );
}