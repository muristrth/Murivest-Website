'use client';

/**
 * LAND CLIENT VIEW
 * ================
 * Individual land parcel detail page for UHNWI investors.
 *
 * Design Language: Old Money / Estate Planning / Landed Gentry
 * Typography: Cormorant Garamond (serif) + Inter (sans)
 * Palette: Forest Green, Warm Cream, Brass Gold, Terra Cotta accents
 */

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
} from '@react-google-maps/api';
import {
  ArrowLeft,
  Heart,
  Share2,
  MapPin,
  Download,
  X,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  Calendar,
  TreePine,
  Ruler,
  FileText,
  Shield,
  Compass,
  Printer,
} from 'lucide-react';

// ─── Layout Offsets ──────────────────────────────────────────────────────────
// Adjust these if your actual fixed global header/nav is taller or shorter.
const HERO_HEADER_OFFSET = 'pt-24 md:pt-28';
const SIDEBAR_STICKY_OFFSET = 'top-28 md:top-32';
const TOAST_OFFSET = 'top-28 md:top-32';

// ─── Types ───────────────────────────────────────────────────────────────────

interface LandParcel {
  _id: string;
  title: string;
  slug: string;
  subtitle?: string;
  description: string;
  landCategory: string;
  availabilityStatus: string;

  // Location
  location?: string;
  coordinates?: { lat: number; lng: number };
  totalArea: {
    acres?: number;
    hectares?: number;
    squareMeters?: number;
  };

  // Investment
  askingPrice: {
    displayPrice: string;
    kes?: string;
    usd?: string;
  };

  // Media
  images?: string[];
  brochureUrl?: string;

  // Advisor
  advisor: {
    name: string;
    title?: string;
    email: string;
    phone: string;
    photo?: string;
  };

  // Meta
  featured?: boolean;
  listingDate?: string;
}

// ─── Color Palette ───────────────────────────────────────────────────────────

const COLORS = {
  forest: '#1B4332',
  forestLight: '#2D5A45',
  cream: '#FAF9F6',
  creamDark: '#F5F4F0',
  brass: '#B8956B',
  terra: '#A0522D',
  charcoal: '#2C2C2C',
  stone: '#8B8680',
  border: '#E8E6E1',
};

// ─── Utility Components ─────────────────────────────────────────────────────

const SectionTitle: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="w-10 h-10 bg-[#F5F4F0] flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] font-medium">
      {title}
    </h3>
  </div>
);

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const colors: Record<string, string> = {
    Available: 'bg-[#1B4332] text-white',
    'Under Offer': 'bg-[#B8956B] text-white',
    Sold: 'bg-[#8B8680] text-white',
    'Joint Venture': 'bg-[#A0522D] text-white',
  };

  return (
    <span className={`${colors[status] || 'bg-[#8B8680] text-white'} text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 font-medium`}>
      {status}
    </span>
  );
};

// ─── Map Component ───────────────────────────────────────────────────────────

const MAP_CONTAINER_STYLE = { width: '100%', height: '100%' };

const LAND_MAP_STYLES = [
  { featureType: 'all', elementType: 'geometry', stylers: [{ color: '#FAF9F6' }] },
  { featureType: 'landscape', elementType: 'geometry.fill', stylers: [{ color: '#E8E4DC' }] },
  { featureType: 'landscape.natural', elementType: 'geometry.fill', stylers: [{ color: '#D4E4D4' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#FFFFFF' }] },
  { featureType: 'water', elementType: 'geometry.fill', stylers: [{ color: '#B8C8D8' }] },
];

const LandMap: React.FC<{ parcel: LandParcel }> = ({ parcel }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  const center = parcel.coordinates
    ? { lat: parcel.coordinates.lat, lng: parcel.coordinates.lng }
    : { lat: -1.2921, lng: 36.8219 };

  if (!isLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#F5F4F0]">
        <div className="w-8 h-8 border-2 border-[#A0522D] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <GoogleMap
        mapContainerStyle={MAP_CONTAINER_STYLE}
        zoom={15}
        center={center}
        options={{
          styles: LAND_MAP_STYLES,
          disableDefaultUI: true,
          mapTypeId: 'hybrid',
        }}
      >
        {parcel.coordinates && (
          <MarkerF
            position={{ lat: parcel.coordinates.lat, lng: parcel.coordinates.lng }}
            icon={{
              url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="48" viewBox="0 0 40 48">
                  <path d="M20 0L40 20L20 40L0 20Z" fill="#A0522D" stroke="#1B4332" stroke-width="2"/>
                  <circle cx="20" cy="20" r="8" fill="#FAF9F6"/>
                </svg>
              `)}`,
              scaledSize: new google.maps.Size(40, 48),
              anchor: new google.maps.Point(20, 24),
            }}
          />
        )}
      </GoogleMap>

      <div className="absolute bottom-6 left-6 bg-white border border-[#E8E6E1] p-4 shadow-lg">
        <div className="flex items-center gap-2 mb-2">
          <Compass className="w-4 h-4 text-[#A0522D]" />
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B8680]">Site Location</span>
        </div>
        <p className="text-sm font-medium text-[#2C2C2C]">{parcel.location || '—'}</p>
        {parcel.coordinates && (
          <p className="text-[10px] text-[#8B8680] mt-1 font-mono">
            {parcel.coordinates.lat.toFixed(6)}, {parcel.coordinates.lng.toFixed(6)}
          </p>
        )}
      </div>
    </div>
  );
};

// ─── Image Gallery Modal ─────────────────────────────────────────────────────

const ImageGallery: React.FC<{
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}> = ({ images, isOpen, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-[#1B4332]/98 z-[100] flex items-center justify-center"
        onClick={onClose}
      >
        <button
          className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
          onClick={onClose}
        >
          <X size={32} strokeWidth={1} />
        </button>

        <button
          className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
        >
          <ChevronLeft size={40} strokeWidth={1} />
        </button>

        <div className="max-w-5xl max-h-[80vh] px-20" onClick={(e) => e.stopPropagation()}>
          <img
            src={images[currentIndex]}
            alt=""
            className="max-w-full max-h-[80vh] object-contain"
          />
          <p className="text-center text-white/40 text-xs mt-4 tracking-widest uppercase">
            {currentIndex + 1} / {images.length}
          </p>
        </div>

        <button
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
        >
          <ChevronRight size={40} strokeWidth={1} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

// ─── Document Card ────────────────────────────────────────────────────────────

const DocumentCard: React.FC<{
  title: string;
  type: string;
  url?: string;
  icon: React.ReactNode;
}> = ({ title, type, url, icon }) => (
  <div
    className={`bg-white border border-[#E8E6E1] p-5 flex items-center gap-4 transition-all ${
      url ? 'hover:border-[#1B4332] cursor-pointer' : 'opacity-50'
    }`}
  >
    <div className="w-12 h-12 bg-[#F5F4F0] flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-[#2C2C2C] truncate">{title}</p>
      <p className="text-[10px] text-[#8B8680] tracking-wide mt-0.5">{type}</p>
    </div>
    {url ? (
      <a href={url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
        <Download className="w-4 h-4 text-[#1B4332]" />
      </a>
    ) : (
      <Shield className="w-4 h-4 text-[#D0CCC4]" />
    )}
  </div>
);

// ─── Main Component ──────────────────────────────────────────────────────────

export default function LandClientView({ land }: { land: LandParcel }) {
  const [isLiked, setIsLiked] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 2000);
    } catch {}
  };

  const images = land.images || [];

  const formatArea = () => {
    if (land.totalArea?.acres) return `${land.totalArea.acres} Acres`;
    if (land.totalArea?.hectares) return `${land.totalArea.hectares} Hectares`;
    return land.totalArea?.squareMeters
      ? `${(land.totalArea.squareMeters / 4046.86).toFixed(2)} Acres`
      : 'Size on request';
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C2C2C] selection:bg-[#B8956B]/20">
      

      {/* Hero Section */}
      <section className={`relative h-[75vh] min-h-[600px] overflow-hidden bg-[#1B4332] ${HERO_HEADER_OFFSET}`}>
        <div className="absolute inset-0">
          {images[0] ? (
            <img
              src={images[0]}
              alt={land.title}
              className="w-full h-full object-cover opacity-50"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#2D5A45] to-[#1B4332]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332] via-[#1B4332]/40 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex items-end pb-16 lg:pb-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <StatusBadge status={land.availabilityStatus} />
                <span className="w-1 h-1 rounded-full bg-[#B8956B]" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-white/80 flex items-center gap-2">
                  <TreePine className="w-4 h-4" />
                  {land.landCategory}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 leading-[1.1] max-w-4xl">
                {land.title}
              </h1>

              {land.subtitle && (
                <p className="text-xl md:text-2xl text-[#B8956B] italic font-light mb-6 max-w-3xl">
                  {land.subtitle}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-6 text-white/70 mt-8">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-[#B8956B]" strokeWidth={1.5} />
                  <span className="text-[13px] tracking-wide">{land.location || '—'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ruler size={18} className="text-[#B8956B]" strokeWidth={1.5} />
                  <span className="text-[13px] tracking-wide">{formatArea()}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {images.length > 1 && (
          <div className="absolute bottom-6 right-6 lg:right-12 hidden lg:flex gap-2">
            {images.slice(0, 4).map((img, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setGalleryIndex(idx);
                  setGalleryOpen(true);
                }}
                className={`w-20 h-20 border-2 overflow-hidden transition-all ${
                  idx === 0 ? 'border-[#B8956B]' : 'border-white/30 hover:border-white'
                }`}
              >
                <img src={img} className="w-full h-full object-cover" alt="" />
              </button>
            ))}
            {images.length > 4 && (
              <button
                onClick={() => setGalleryOpen(true)}
                className="w-20 h-20 border border-white/30 flex items-center justify-center text-white text-xs tracking-wide hover:border-white transition-colors"
              >
                +{images.length - 4}
              </button>
            )}
          </div>
        )}
      </section>

      {/* Stats Bar */}
      <div className="bg-[#2D5A45] text-white py-8 border-b border-[#1B4332]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-serif text-[#B8956B]">{formatArea()}</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/70 mt-2">Total Area</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-[#B8956B]">{land.askingPrice.displayPrice}</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/70 mt-2">Asking Price</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-[#B8956B]">{land.landCategory}</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/70 mt-2">Category</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={`bg-[#FAF9F6] border-b border-[#E8E6E1] ${SIDEBAR_STICKY_OFFSET} z-40`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5">
          <div className="flex items-center justify-between">
            <Link
              href="/land-portfolio"
              className="group flex items-center gap-3 hover:opacity-70 transition-opacity"
            >
              <div
                className={`w-10 h-10 border flex items-center justify-center transition-colors ${
                  isScrolled ? 'border-[#E8E6E1] group-hover:border-[#1B4332]' : 'border-white/30 group-hover:border-white'
                }`}
              >
                <ArrowLeft
                  size={16}
                  className={isScrolled ? 'text-[#2C2C2C]' : 'text-white'}
                  strokeWidth={1.5}
                />
              </div>
              <span
                className={`hidden md:inline text-[10px] tracking-[0.3em] uppercase transition-colors ${
                  isScrolled ? 'text-[#8B8680] group-hover:text-[#1B4332]' : 'text-white/80 group-hover:text-white'
                }`}
              >
                Return to Land Portfolio
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`w-10 h-10 border flex items-center justify-center transition-all ${
                  isScrolled ? 'border-[#E8E6E1]' : 'border-white/30'
                } ${isLiked ? 'bg-[#1B4332] border-[#1B4332]' : ''}`}
              >
                <Heart
                  size={16}
                  className={isLiked ? 'fill-white text-white' : isScrolled ? 'text-[#2C2C2C]' : 'text-white'}
                  strokeWidth={1.5}
                />
              </button>
              <button
                onClick={handleShare}
                className={`w-10 h-10 border flex items-center justify-center transition-colors ${
                  isScrolled ? 'border-[#E8E6E1]' : 'border-white/30'
                }`}
              >
                <Share2
                  size={16}
                  className={isScrolled ? 'text-[#2C2C2C]' : 'text-white'}
                  strokeWidth={1.5}
                />
              </button>
              <button
                onClick={() => window.print()}
                className={`w-10 h-10 border flex items-center justify-center transition-colors hidden md:flex ${
                  isScrolled ? 'border-[#E8E6E1]' : 'border-white/30'
                }`}
              >
                <Printer
                  size={16}
                  className={isScrolled ? 'text-[#2C2C2C]' : 'text-white'}
                  strokeWidth={1.5}
                />
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
            className={`fixed ${TOAST_OFFSET} left-1/2 -translate-x-1/2 z-[60] bg-[#1B4332] text-white px-6 py-3 text-[11px] tracking-[0.2em] uppercase`}
          >
            Link copied
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-12">
            <section>
              <SectionTitle icon={<FileText className="w-5 h-5 text-[#1B4332]" />} title="Executive Summary" />
              <p className="text-[16px] text-[#5A5A5A] leading-[1.8] font-light">
                {land.description}
              </p>

              {/* Gallery Preview */}
              {land.images && land.images.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] font-medium mb-6">
                    Visual Documentation
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {land.images.slice(0, 6).map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setGalleryIndex(idx);
                          setGalleryOpen(true);
                        }}
                        className="relative aspect-square overflow-hidden group"
                      >
                        <img 
                          src={img} 
                          alt={`${land.title} - ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-[#1B4332]/0 group-hover:bg-[#1B4332]/20 transition-colors" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </section>

            {land.brochureUrl && (
              <section>
                <SectionTitle icon={<FileText className="w-5 h-5 text-[#1B4332]" />} title="Due Diligence Documents" />
                <DocumentCard
                  title="Investment Memorandum"
                  type="PDF · Executive Summary"
                  url={land.brochureUrl}
                  icon={<FileText className="w-5 h-5 text-[#1B4332]" />}
                />
              </section>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4">
            <div className={`sticky ${SIDEBAR_STICKY_OFFSET} space-y-6`}>
              <div className="bg-[#1B4332] text-white p-8">
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#B8956B] mb-3">Asking Price</p>
                <p className="text-4xl font-serif mb-2">{land.askingPrice.displayPrice}</p>
                <div className="mt-6 pt-6 border-t border-white/20 space-y-2 text-sm text-white/70">
                  {land.askingPrice.kes && <p>KES {land.askingPrice.kes}</p>}
                  {land.askingPrice.usd && <p>USD {land.askingPrice.usd}</p>}
                </div>
              </div>

              <div className="bg-white border border-[#E8E6E1] p-6 space-y-3">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B8680] mb-4">Parcel Summary</p>
                <div className="flex justify-between items-center py-2 border-b border-[#E8E6E1]">
                  <span className="text-sm text-[#8B8680]">Category</span>
                  <span className="text-sm font-medium text-[#2C2C2C]">{land.landCategory}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#E8E6E1]">
                  <span className="text-sm text-[#8B8680]">Total Area</span>
                  <span className="text-sm font-medium text-[#2C2C2C]">{formatArea()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#E8E6E1]">
                  <span className="text-sm text-[#8B8680]">Location</span>
                  <span className="text-sm font-medium text-[#2C2C2C] truncate ml-4 text-right">{land.location || '—'}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-[#8B8680]">Status</span>
                  <span className="text-sm font-medium text-[#2C2C2C]">{land.availabilityStatus}</span>
                </div>
              </div>

              <div className="bg-white border border-[#E8E6E1] p-6">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B8680] mb-4">Land Advisor</p>
                <div className="flex items-start gap-4 mb-4">
                  {land.advisor.photo ? (
                    <img
                      src={land.advisor.photo}
                      alt={land.advisor.name}
                      className="w-16 h-16 rounded-full object-cover border border-[#E8E6E1]"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-[#F5F4F0] border border-[#E8E6E1] flex items-center justify-center">
                      <span className="text-2xl font-serif text-[#8B8680]">
                        {land.advisor.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="font-serif text-lg text-[#2C2C2C]">{land.advisor.name}</p>
                    <p className="text-[11px] text-[#8B8680]">{land.advisor.title || 'Land Investment Advisor'}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={`mailto:${land.advisor.email}`}
                    className="flex items-center gap-3 text-sm text-[#5A5A5A] hover:text-[#1B4332] transition-colors"
                  >
                    <Mail size={16} className="text-[#B8956B]" />
                    {land.advisor.email}
                  </a>
                  <a
                    href={`tel:${land.advisor.phone}`}
                    className="flex items-center gap-3 text-sm text-[#5A5A5A] hover:text-[#1B4332] transition-colors"
                  >
                    <Phone size={16} className="text-[#B8956B]" />
                    {land.advisor.phone}
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:${land.advisor.email}?subject=Land Investment Inquiry: ${land.title}`}
                  className="flex items-center justify-center gap-2 w-full h-12 bg-[#1B4332] text-white hover:bg-[#2D5A45] transition-colors text-[11px] tracking-[0.25em] uppercase font-medium"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Site Visit
                </a>

                {land.brochureUrl && (
                  <a
                    href={land.brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full h-12 border border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white transition-colors text-[11px] tracking-[0.25em] uppercase font-medium"
                  >
                    <Download className="w-4 h-4" />
                    Download IM
                  </a>
                )}

                <button
                  onClick={handleShare}
                  className="flex items-center justify-center gap-2 w-full h-12 border border-[#E8E6E1] hover:border-[#B8956B] hover:text-[#B8956B] transition-colors text-[11px] tracking-[0.25em] uppercase font-medium text-[#2C2C2C]"
                >
                  <Share2 className="w-4 h-4" />
                  Share Opportunity
                </button>
              </div>

              <div className="bg-[#F5F4F0] border border-[#E8E6E1] p-5">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#A0522D] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[11px] font-medium text-[#2C2C2C] mb-1">Confidential Investment</p>
                    <p className="text-[10px] text-[#8B8680] leading-relaxed">
                      This memorandum is provided for qualified investors only.
                      All site visits require 24-hour notice and NDA execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Image Gallery Modal */}
      <ImageGallery
        images={images}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        initialIndex={galleryIndex}
      />

      {/* Footer */}
      <footer className="border-t border-[#E8E6E1] bg-white py-16 mt-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TreePine className="w-5 h-5 text-[#A0522D]" />
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#2C2C2C] font-medium">Land Banking Division</span>
              </div>
              <p className="text-xs text-[#8B8680] leading-relaxed">
                Strategic land assembly and development advisory for institutional investors
                and private equity funds seeking ground-floor positions in high-growth African markets.
              </p>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#8B8680] mb-4">Investment Criteria</p>
              <ul className="space-y-2 text-xs text-[#5A5A5A]">
                <li>Minimum parcel size: 5 acres</li>
                <li>Clear title and unencumbered ownership</li>
                <li>Growth corridor positioning</li>
                <li>Infrastructure accessibility</li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#8B8680] mb-4">Contact</p>
              <p className="text-sm text-[#2C2C2C] mb-1">{land.advisor.name}</p>
              <p className="text-xs text-[#8B8680] mb-3">Land Investment Advisor</p>
              <a href={`mailto:${land.advisor.email}`} className="text-sm text-[#1B4332] hover:underline">
                {land.advisor.email}
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-[#E8E6E1] text-center">
            <p className="text-[10px] text-[#8B8680] leading-relaxed max-w-3xl mx-auto">
              Land banking investments carry substantial risk including illiquidity, planning uncertainty,
              and extended holding periods. Past performance is not indicative of future returns.
              Professional legal, tax, and engineering advice is strongly recommended.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}