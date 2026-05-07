'use client';

import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import {
  ArrowLeft,
  MapPin,
  PoundSterling,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  TrendingUp,
  Shield,
  FileText,
  Download,
  Share2,
  X,
  Calendar,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Menu,
  Home
} from 'lucide-react';
import { urlFor } from '@/sanity/lib/image';

// Dynamic import for Mapbox
const PropertyMap = dynamic(() => import('./PropertyMap'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-[#F5F4F0] animate-pulse flex items-center justify-center">
      <span className="text-[#8B7355] text-sm tracking-widest uppercase">Loading Map…</span>
    </div>
  ),
});

// ─── Types ────────────────────────────────────────────────────────────────────

interface UKPropertyAgent {
  name?: string;
  title?: string;
  phone?: string;
  email?: string;
  photoUrl?: string;
}

interface UKPropertyInvestment {
  monthlyIncome?: string;
  annualIncome?: string;
  appreciationRate?: string;
  totalROI?: string;
}

interface UKPropertyDetailItem {
  label: string;
  value: string;
}

interface UKPropertyRegulatory {
  fcaCompliant?: boolean;
  stampDuty?: boolean;
  sicr?: boolean;
}

interface UKPropertyCoordinates {
  lat?: number;
  lng?: number;
}

interface UKPropertyImage {
  _type?: string;
  asset?: {
    _ref?: string;
    _type?: string;
  };
  hotspot?: {
    x?: number;
    y?: number;
  };
  crop?: {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
  };
}

interface UKProperty {
  _id: string;
  title: string;
  subtitle?: string;
  slug?: string;
  price: string;
  priceGbp?: string;
  location: string;
  city?: string;
  region?: string;
  postcode?: string;
  type?: string;
  status?: string;
  description?: string;
  yield?: string;
  roi?: string;
  mainImage?: UKPropertyImage;
  mainImageUrl?: string;
  images?: UKPropertyImage[];
  imageUrls?: string[];
  brochureUrl?: string;
  features?: string[];
  sqft?: string;
  details?: UKPropertyDetailItem[];
  investment?: UKPropertyInvestment;
  tenure?: string;
  regulatory?: UKPropertyRegulatory;
  coordinates?: UKPropertyCoordinates;
  agent?: UKPropertyAgent;
}

interface UKPropertyDetailClientProps {
  property: UKProperty;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const statusColour = (status?: string) => {
  switch (status?.toLowerCase()) {
    case 'under offer': return 'bg-amber-600';
    case 'sold': return 'bg-red-600';
    default: return 'bg-emerald-700';
  }
};

const getImageUrl = (image: UKPropertyImage | string | undefined | null, width = 800): string | null => {
  if (!image) return null;
  if (typeof image === 'string') return image;
  if (image.asset?._ref) {
    return urlFor(image).width(width).url();
  }
  return null;
};

// ─── Side Drawer ─────────────────────────────────────────────────────────────

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  property: UKProperty;
}

const EnquiryDrawer = ({ open, onClose, property }: DrawerProps) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    window.scrollTo(0, 0);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSent(true);
    setIsSubmitting(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-[90]"
            onClick={onClose}
          />

          {/* Drawer panel */}
          <motion.aside
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#FAF9F6] z-[100] overflow-y-auto shadow-2xl flex flex-col"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5E2DC] bg-white">
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#8B7355] font-medium">Murivest Realty</p>
                <h2 className="text-lg font-serif text-[#2C2C2C] mt-0.5">Request Information</h2>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 flex items-center justify-center hover:bg-[#E5E2DC] transition-colors"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5 text-[#5A5A5A]" />
              </button>
            </div>

            {/* Property snapshot */}
            <div className="px-6 py-4 bg-[#2C2C2C] text-[#F8F7F4]">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#C4B59D] mb-1">Selected Property</p>
              <p className="font-serif text-base leading-snug">{property.title}</p>
              {property.location && (
                <p className="text-xs text-[#A8A39D] mt-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {property.location}
                </p>
              )}
              {property.price && (
                <p className="text-[#C9A87C] text-sm mt-2 font-medium">{property.price}</p>
              )}
            </div>

            {/* Form */}
            <div className="flex-1 px-6 py-6">
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600" strokeWidth={1} />
                  <h3 className="text-xl font-serif text-[#2C2C2C]">Enquiry Received</h3>
                  <p className="text-sm text-[#5A5A5A] font-light leading-relaxed">
                    A member of our UK team will be in touch within 24 hours to discuss this opportunity.
                  </p>
                  <button
                    onClick={() => { setSent(false); onClose(); }}
                    className="mt-4 px-6 py-3 bg-[#2C2C2C] text-[#F8F7F4] text-[11px] tracking-[0.2em] uppercase hover:bg-[#8B7355] transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full border border-[#E5E2DC] bg-white px-4 py-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#8B7355] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">Email Address *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full border border-[#E5E2DC] bg-white px-4 py-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#8B7355] transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="w-full border border-[#E5E2DC] bg-white px-4 py-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#8B7355] transition-colors"
                      placeholder="+44 …"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">Message</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="w-full border border-[#E5E2DC] bg-white px-4 py-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#8B7355] transition-colors resize-none"
                      placeholder="I would like to learn more about this property…"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#2C2C2C] text-[#F8F7F4] text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-[#8B7355] transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting…' : 'Submit Enquiry'}
                  </button>

                  <p className="text-[10px] text-[#8B8680] text-center leading-relaxed">
                    By submitting you agree to our privacy policy. Your details will never be shared without consent.
                  </p>
                </form>
              )}
            </div>

            {/* Agent quick contact */}
            {property.agent && (
              <div className="px-6 py-5 border-t border-[#E5E2DC] bg-white">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-3">Speak Directly</p>
                <div className="flex items-center gap-4">
                  {property.agent.photoUrl ? (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image src={property.agent.photoUrl} alt={property.agent.name || 'Agent'} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#E5E2DC] flex items-center justify-center flex-shrink-0">
                      <span className="font-serif text-[#8B7355]">{property.agent.name?.charAt(0) || 'A'}</span>
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-serif text-[#2C2C2C] truncate">{property.agent.name}</p>
                    <p className="text-[11px] text-[#8B7355]">{property.agent.title}</p>
                  </div>
                  <div className="flex gap-2">
                    {property.agent.phone && (
                      <a href={`tel:${property.agent.phone}`} className="w-9 h-9 border border-[#E5E2DC] flex items-center justify-center hover:bg-[#8B7355] hover:text-white hover:border-[#8B7355] transition-colors">
                        <Phone className="w-4 h-4" strokeWidth={1} />
                      </a>
                    )}
                    {property.agent.email && (
                      <a href={`mailto:${property.agent.email}`} className="w-9 h-9 border border-[#E5E2DC] flex items-center justify-center hover:bg-[#8B7355] hover:text-white hover:border-[#8B7355] transition-colors">
                        <Mail className="w-4 h-4" strokeWidth={1} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const UKPropertyDetailClient = ({ property }: UKPropertyDetailClientProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMapExpanded, setIsMapExpanded] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Reset gallery index when property changes
  useEffect(() => {
    setCurrentImage(0);
    setIsLoading(false);
  }, [property?._id]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  // Build image array with proper URL generation
  const images = React.useMemo(() => {
    const all: string[] = [];
    
    // Add main image
    const mainUrl = getImageUrl(property?.mainImage, 1200) || property?.mainImageUrl;
    if (mainUrl) all.push(mainUrl);
    
    // Add additional images
    if (property?.images?.length) {
      property.images.forEach((img, idx) => {
        const url = getImageUrl(img, 1200) || property.imageUrls?.[idx];
        if (url && !all.includes(url)) all.push(url);
      });
    }
    
    return all.length > 0 ? all : [];
  }, [property?.mainImage, property?.mainImageUrl, property?.images, property?.imageUrls]);

  const nextImage = useCallback(() => setCurrentImage(p => (p + 1) % images.length), [images.length]);
  const prevImage = useCallback(() => setCurrentImage(p => (p - 1 + images.length) % images.length), [images.length]);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Silently fail
    }
  };

  if (!property) {
    notFound();
  }

  const hasCoordinates = !!(property.coordinates?.lat && property.coordinates?.lng);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F8F7F4] flex items-center justify-center pt-[64px]">
        <div className="text-[#8B7355] text-sm tracking-widest uppercase">Loading Property…</div>
      </div>
    );
  }

  return (
    <>
      {/* ── Side Drawer ──────────────────────────────────────────────────── */}
      <EnquiryDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} property={property} />

      <div className="min-h-screen bg-[#F8F7F4] text-[#2C2C2C] pt-[64px]">

        {/* ── Sub-Navigation ── */}
        <div className="sticky top-[64px] z-40 bg-[#F8F7F4]/95 backdrop-blur-md border-b border-[#E5E2DC]">
          <div className="max-w-[1600px] mx-auto px-4 md:px-10 lg:px-16 py-3">
            <div className="flex items-center justify-between gap-4">
              {/* Back link */}
              <a
                href="/uk-properties"
                className="group inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-medium hover:text-[#2C2C2C] transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="hidden sm:inline">Back to Collection</span>
                <span className="sm:hidden">Back</span>
              </a>

              {/* Breadcrumb – hidden on small screens */}
              <div className="hidden md:flex items-center gap-2 text-[11px] text-[#8B8680]">
                <span>UK Properties</span>
                <span>/</span>
                <span className="text-[#2C2C2C] truncate max-w-[200px]">{property.title}</span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  title={copied ? 'Copied!' : 'Copy link'}
                  className="p-2 hover:bg-[#E5E2DC] transition-colors relative"
                >
                  {copied ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Share2 className="w-4 h-4 text-[#8B7355]" />
                  )}
                </button>
                <button
                  onClick={() => setDrawerOpen(true)}
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#2C2C2C] text-[#F8F7F4] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#8B7355] transition-colors duration-300"
                >
                  Enquire
                </button>
                {/* Mobile hamburger for enquire */}
                <button
                  onClick={() => setDrawerOpen(true)}
                  className="sm:hidden p-2 hover:bg-[#E5E2DC] transition-colors"
                  aria-label="Open enquiry"
                >
                  <Menu className="w-5 h-5 text-[#2C2C2C]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Hero Gallery ──────────────────────────────────────────────────── */}
        <div className="relative w-full overflow-hidden bg-[#E5E2DC]" style={{ aspectRatio: '21/9', minHeight: '300px', maxHeight: '70vh' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {images.length > 0 ? (
                <Image
                  src={images[currentImage]}
                  alt={`${property.title} – image ${currentImage + 1}`}
                  fill
                  className="object-cover"
                  priority={currentImage === 0}
                  sizes="100vw"
                />
              ) : (
                <div className="w-full h-full bg-[#E5E2DC] flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-[#8B8680]" strokeWidth={1} />
                </div>
              )}
              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                aria-label="Previous image"
                className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-[#F8F7F4]/90 flex items-center justify-center hover:bg-[#8B7355] hover:text-white transition-colors duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-[#F8F7F4]/90 flex items-center justify-center hover:bg-[#8B7355] hover:text-white transition-colors duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Bottom-right badges */}
          <div className="absolute bottom-4 right-4 flex items-center gap-3">
            {property.status && (
              <span className={`px-3 py-1.5 ${statusColour(property.status)} text-[10px] tracking-[0.2em] uppercase text-white font-medium`}>
                {property.status}
              </span>
            )}
            {images.length > 1 && (
              <div className="bg-black/70 px-3 py-1.5">
                <span className="text-[11px] text-white font-light">
                  {currentImage + 1} / {images.length}
                </span>
              </div>
            )}
          </div>

          {/* Bottom-left property type badge */}
          {property.type && (
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1.5 bg-[#8B7355] text-[10px] tracking-[0.2em] uppercase text-white font-medium">
                {property.type}
              </span>
            </div>
          )}
        </div>

        {/* ── Thumbnail Strip ──────────────────────────────────────────── */}
        {images.length > 1 && (
          <div className="hidden md:flex gap-2 px-6 md:px-10 py-3 bg-white border-b border-[#E5E2DC] overflow-x-auto scrollbar-thin">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                aria-label={`View image ${index + 1}`}
                className={`relative flex-shrink-0 w-20 h-14 overflow-hidden transition-all duration-300 ${
                  index === currentImage
                    ? 'ring-2 ring-[#8B7355] ring-offset-1 opacity-100'
                    : 'opacity-50 hover:opacity-80'
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
                {index === 0 && (
                  <span className="absolute bottom-0 left-0 right-0 text-center bg-[#2C2C2C]/70 text-[8px] text-white tracking-widest py-0.5">
                    MAIN
                  </span>
                )}
              </button>
            ))}
          </div>
        )}

        {/* ── Main Content ──────────────────────────────────────────────────── */}
        <div className="max-w-[1600px] mx-auto px-4 md:px-10 lg:px-16 py-10 md:py-16">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">

            {/* ── Left Column ──────────────────────────────────────────────── */}
            <div className="lg:col-span-8 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Location breadcrumb */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#8B7355]" strokeWidth={1} />
                    <span className="text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A]">
                      {[property.city, property.region].filter(Boolean).join(', ')}
                    </span>
                  </div>
                  {property.type && (
                    <span className="px-2.5 py-1 bg-[#2C2C2C] text-[9px] tracking-[0.2em] uppercase text-white">
                      {property.type}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-3 text-[#2C2C2C] leading-tight">
                  {property.title}
                </h1>

                {/* Subtitle */}
                {property.subtitle && (
                  <p className="text-base md:text-lg text-[#8B7355] font-light mb-5 leading-relaxed">
                    {property.subtitle}
                  </p>
                )}

                {/* Full address */}
                <div className="flex items-start gap-2 pb-8 border-b border-[#E5E2DC] mb-8">
                  <MapPin className="w-4 h-4 mt-0.5 text-[#8B7355] flex-shrink-0" strokeWidth={1} />
                  <span className="text-sm text-[#5A5A5A]">
                    {property.location}
                    {property.postcode && `, ${property.postcode}`}
                  </span>
                </div>

                {/* Key stats bar */}
                <div className="flex flex-wrap gap-6 md:gap-10 mb-8 pb-8 border-b border-[#E5E2DC]">
                  {property.sqft && (
                    <div className="flex items-center gap-3">
                      <Maximize2 className="w-5 h-5 text-[#8B7355]" strokeWidth={1} />
                      <div>
                        <p className="text-[9px] tracking-[0.15em] uppercase text-[#5A5A5A]">Size</p>
                        <p className="text-base md:text-lg font-serif">{property.sqft} sq ft</p>
                      </div>
                    </div>
                  )}
                  {property.yield && (
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-[#8B7355]" strokeWidth={1} />
                      <div>
                        <p className="text-[9px] tracking-[0.15em] uppercase text-[#5A5A5A]">Net Yield</p>
                        <p className="text-base md:text-lg font-serif">{property.yield}</p>
                      </div>
                    </div>
                  )}
                  {property.tenure && (
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-[#8B7355]" strokeWidth={1} />
                      <div>
                        <p className="text-[9px] tracking-[0.15em] uppercase text-[#5A5A5A]">Tenure</p>
                        <p className="text-base md:text-lg font-serif">{property.tenure}</p>
                      </div>
                    </div>
                  )}
                  {property.city && (
                    <div className="flex items-center gap-3">
                      <Home className="w-5 h-5 text-[#8B7355]" strokeWidth={1} />
                      <div>
                        <p className="text-[9px] tracking-[0.15em] uppercase text-[#5A5A5A]">City</p>
                        <p className="text-base md:text-lg font-serif">{property.city}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="mb-12">
                  <h2 className="text-lg md:text-xl font-serif mb-5 text-[#8B7355]">Investment Overview</h2>
                  <div className="text-[14px] md:text-[15px] leading-[1.9] text-[#5A5A5A] font-light whitespace-pre-line">
                    {property.description || 'No description available.'}
                  </div>
                </div>

                {/* Investment Thesis */}
                {property.roi && (
                  <div className="mb-12 bg-[#1B4332]/5 border-l-4 border-[#1B4332]/30 pl-5 py-4 pr-4">
                    <h2 className="text-lg md:text-xl font-serif mb-3 text-[#1B4332]">Investment Thesis</h2>
                    <p className="text-[14px] md:text-[15px] leading-[1.9] text-[#5A5A5A] font-light">
                      {property.roi}
                    </p>
                  </div>
                )}

                {/* Key Features */}
                {property.features && property.features.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-lg md:text-xl font-serif mb-5 text-[#8B7355]">Key Investment Attributes</h2>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {(showAllFeatures ? property.features : property.features.slice(0, 8)).map((f, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-[#8B7355] mt-[7px] flex-shrink-0 rounded-full" />
                          <span className="text-[13px] md:text-[14px] text-[#5A5A5A] font-light">{f}</span>
                        </li>
                      ))}
                    </ul>
                    {property.features.length > 8 && (
                      <button
                        onClick={() => setShowAllFeatures(s => !s)}
                        className="mt-5 inline-flex items-center gap-1.5 text-[#8B7355] text-sm hover:underline underline-offset-4"
                      >
                        {showAllFeatures ? (
                          <><ChevronUp className="w-4 h-4" /> Show less</>
                        ) : (
                          <><ChevronDown className="w-4 h-4" /> Show all {property.features.length} features</>
                        )}
                      </button>
                    )}
                  </div>
                )}

                {/* Technical Specifications */}
                {property.details && property.details.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-lg md:text-xl font-serif mb-5 text-[#8B7355]">Technical Specifications</h2>
                    <div className="bg-white border border-[#E8E6E1]">
                      <div className="divide-y divide-[#E8E6E1]">
                        {property.details.map((d, i) => (
                          <div key={i} className="flex justify-between items-center px-5 py-3">
                            <span className="text-sm text-[#8B8680]">{d.label}</span>
                            <span className="text-sm font-medium text-[#2C2C2C]">{d.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Financial Performance */}
                {property.investment && Object.values(property.investment).some(Boolean) && (
                  <div className="mb-12">
                    <h2 className="text-lg md:text-xl font-serif mb-5 text-[#8B7355]">Financial Performance</h2>
                    <div className="bg-[#1B4332] text-white p-6">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {property.investment.monthlyIncome && (
                          <div>
                            <p className="text-[9px] tracking-[0.15em] uppercase text-[#C9A87C] mb-1">Monthly Income</p>
                            <p className="text-lg md:text-xl font-serif">{property.investment.monthlyIncome}</p>
                          </div>
                        )}
                        {property.investment.annualIncome && (
                          <div>
                            <p className="text-[9px] tracking-[0.15em] uppercase text-[#C9A87C] mb-1">Annual Income</p>
                            <p className="text-lg md:text-xl font-serif">{property.investment.annualIncome}</p>
                          </div>
                        )}
                        {property.investment.appreciationRate && (
                          <div>
                            <p className="text-[9px] tracking-[0.15em] uppercase text-[#C9A87C] mb-1">Appreciation</p>
                            <p className="text-lg md:text-xl font-serif">{property.investment.appreciationRate}</p>
                          </div>
                        )}
                        {property.investment.totalROI && (
                          <div>
                            <p className="text-[9px] tracking-[0.15em] uppercase text-[#C9A87C] mb-1">Target ROI</p>
                            <p className="text-lg md:text-xl font-serif">{property.investment.totalROI}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Regulatory Compliance */}
                {property.regulatory && (
                  <div className="mb-12">
                    <h2 className="text-lg md:text-xl font-serif mb-5 text-[#8B7355]">Regulatory Compliance</h2>
                    <div className="flex flex-wrap gap-3">
                      {property.regulatory.fcaCompliant && (
                        <span className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 border border-green-200 text-sm">
                          <Shield className="w-4 h-4" />
                          FCA Compliant
                        </span>
                      )}
                      {property.regulatory.sicr && (
                        <span className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 border border-blue-200 text-sm">
                          <Shield className="w-4 h-4" />
                          SICR Compliant
                        </span>
                      )}
                      {property.regulatory.stampDuty && (
                        <span className="flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 border border-amber-200 text-sm">
                          <FileText className="w-4 h-4" />
                          Stamp Duty Included
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* ── Mapbox Location ─────────────────────────────────────── */}
                {hasCoordinates && (
                  <div className="mb-12">
                    <div className="flex items-center justify-between mb-5">
                      <h2 className="text-lg md:text-xl font-serif text-[#8B7355]">Location</h2>
                      <button
                        onClick={() => setIsMapExpanded(e => !e)}
                        className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A] hover:text-[#8B7355] transition-colors border border-[#E5E2DC] px-3 py-1.5"
                      >
                        {isMapExpanded ? (
                          <><ChevronUp className="w-3.5 h-3.5" /> Collapse</>
                        ) : (
                          <><Maximize2 className="w-3.5 h-3.5" /> Expand</>
                        )}
                      </button>
                    </div>
                    <motion.div
                      animate={{ height: isMapExpanded ? 520 : 320 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="relative border border-[#E8E6E1] overflow-hidden bg-[#F5F4F0]"
                    >
                      <PropertyMap
                        properties={[
                          {
                            _id: property._id,
                            title: property.title,
                            slug: property.slug || '',
                            address: property.location,
                            city: property.city || '',
                            state: property.region || '',
                            zipCode: property.postcode,
                            location: {
                              lat: property.coordinates!.lat ?? 51.5074,
                              lng: property.coordinates!.lng ?? -0.1278,
                            },
                            price: property.price,
                            squareFootage: property.sqft || '',
                            propertyType: property.type || 'Commercial',
                            image: images[0] || null,
                            description: property.description || '',
                            features: property.features || [],
                            broker: {
                              name: property.agent?.name || '',
                              email: property.agent?.email || '',
                              phone: property.agent?.phone || '',
                            },
                          },
                        ]}
                        hoveredId={null}
                        selectedId={property._id}
                        onPinHover={() => {}}
                        onPinClick={() => {}}
                        isDark={false}
                        onStyleChange={() => {}}
                        renderPopup={(prop, onClose) => (
                          <div className="p-3 min-w-[180px]">
                            <h3 className="font-serif text-sm mb-1 text-[#2C2C2C]">{prop.title}</h3>
                            <p className="text-xs text-[#5A5A5A]">{prop.address}</p>
                            <p className="font-medium text-sm mt-1 text-[#8B7355]">{prop.price}</p>
                            <button
                              onClick={onClose}
                              className="mt-2 text-xs text-[#8B8680] hover:text-[#2C2C2C] transition-colors"
                            >
                              Close
                            </button>
                          </div>
                        )}
                      />
                    </motion.div>

                    {/* Google Maps link */}
                    {property.coordinates?.lat && property.coordinates?.lng && (
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${property.coordinates.lat},${property.coordinates.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-[11px] tracking-[0.15em] uppercase text-[#8B7355] hover:text-[#2C2C2C] transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Open in Google Maps
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            </div>

            {/* ── Right Sidebar ─────────────────────────────────────────────── */}
            <div className="lg:col-span-4 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="lg:sticky lg:top-[136px] space-y-5"
              >
                {/* Price Card */}
                <div className="bg-white border border-[#E5E2DC] p-6 md:p-7">
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#5A5A5A] mb-2">Indicative Value</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <PoundSterling className="w-5 h-5 text-[#8B7355] flex-shrink-0" strokeWidth={1} />
                    <span className="text-2xl md:text-3xl font-serif text-[#2C2C2C] leading-none">{property.price}</span>
                  </div>
                  {property.yield && (
                    <p className="text-sm text-[#8B7355] mb-6">Net Yield: {property.yield}</p>
                  )}
                  <div className="space-y-3">
                    <button
                      onClick={() => setDrawerOpen(true)}
                      className="w-full py-3.5 bg-[#2C2C2C] text-[#F8F7F4] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#8B7355] transition-colors duration-500"
                    >
                      Request Viewing
                    </button>
                    <button
                      onClick={() => setDrawerOpen(true)}
                      className="w-full py-3.5 border border-[#2C2C2C] text-[#2C2C2C] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#2C2C2C] hover:text-white transition-colors duration-500"
                    >
                      Make Enquiry
                    </button>
                  </div>
                </div>

                {/* Brochure Download */}
                {property.brochureUrl && (
                  <div className="bg-white border border-[#E5E2DC] p-6 md:p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="w-4 h-4 text-[#8B7355]" />
                      <p className="text-[9px] tracking-[0.2em] uppercase text-[#5A5A5A]">Investment Memorandum</p>
                    </div>
                    <a
                      href={property.brochureUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 border border-[#E8E6E1] hover:border-[#8B7355] transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        <Download className="w-4 h-4 text-[#8B7355]" />
                        <span className="text-sm text-[#2C2C2C]">Download Brochure (PDF)</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#8B8680] group-hover:text-[#8B7355] transition-colors" />
                    </a>
                  </div>
                )}

                {/* Quick Stats (mobile supplement for stats bar) */}
                <div className="bg-white border border-[#E5E2DC] p-6 md:p-7 lg:hidden">
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#5A5A5A] mb-4">Quick Facts</p>
                  <div className="grid grid-cols-2 gap-4">
                    {property.sqft && (
                      <div>
                        <p className="text-[9px] uppercase tracking-widest text-[#8B8680]">Size</p>
                        <p className="text-sm font-serif mt-0.5">{property.sqft} sq ft</p>
                      </div>
                    )}
                    {property.tenure && (
                      <div>
                        <p className="text-[9px] uppercase tracking-widest text-[#8B8680]">Tenure</p>
                        <p className="text-sm font-serif mt-0.5">{property.tenure}</p>
                      </div>
                    )}
                    {property.city && (
                      <div>
                        <p className="text-[9px] uppercase tracking-widest text-[#8B8680]">City</p>
                        <p className="text-sm font-serif mt-0.5">{property.city}</p>
                      </div>
                    )}
                    {property.region && (
                      <div>
                        <p className="text-[9px] uppercase tracking-widest text-[#8B8680]">Region</p>
                        <p className="text-sm font-serif mt-0.5">{property.region}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Agent Card */}
                {property.agent && (
                  <div className="bg-white border border-[#E5E2DC] p-6 md:p-7">
                    <p className="text-[9px] tracking-[0.25em] uppercase text-[#5A5A5A] mb-4">Portfolio Agent</p>
                    <div className="flex items-start gap-4 mb-5">
                      {property.agent.photoUrl ? (
                        <div className="relative w-14 h-14 flex-shrink-0 rounded-full overflow-hidden">
                          <Image
                            src={property.agent.photoUrl}
                            alt={property.agent.name || 'Agent'}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-14 h-14 flex-shrink-0 rounded-full bg-[#E5E2DC] flex items-center justify-center">
                          <span className="text-xl font-serif text-[#8B7355]">
                            {property.agent.name?.charAt(0) || 'A'}
                          </span>
                        </div>
                      )}
                      <div className="min-w-0">
                        <h3 className="text-base md:text-lg font-serif text-[#2C2C2C] leading-snug">{property.agent.name}</h3>
                        <p className="text-[11px] text-[#8B7355] mt-0.5">{property.agent.title}</p>
                      </div>
                    </div>
                    <div className="space-y-2.5">
                      {property.agent.phone && (
                        <a
                          href={`tel:${property.agent.phone}`}
                          className="flex items-center gap-3 text-[13px] text-[#5A5A5A] hover:text-[#8B7355] transition-colors duration-300"
                        >
                          <Phone className="w-4 h-4 flex-shrink-0" strokeWidth={1} />
                          <span>{property.agent.phone}</span>
                        </a>
                      )}
                      {property.agent.email && (
                        <a
                          href={`mailto:${property.agent.email}`}
                          className="flex items-center gap-3 text-[13px] text-[#5A5A5A] hover:text-[#8B7355] transition-colors duration-300"
                        >
                          <Mail className="w-4 h-4 flex-shrink-0" strokeWidth={1} />
                          <span className="break-all">{property.agent.email}</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Book a call CTA */}
                <a
                  href="/booking-call"
                  className="flex items-center justify-center gap-2 w-full py-3.5 border border-[#C4B59D] text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-medium hover:bg-[#8B7355] hover:text-white hover:border-[#8B7355] transition-all duration-500"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Call
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── CTA Section ──────────────────────────────────────────────────── */}
        <section className="py-14 md:py-20 bg-[#2C2C2C] text-[#F8F7F4]">
          <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-5 leading-snug">
              Interested in this{' '}
              <span className="italic text-[#C4B59D] font-light">Investment Opportunity</span>
            </h2>
            <p className="text-[14px] md:text-[15px] leading-[1.9] text-[#A8A39D] font-light max-w-xl mx-auto mb-10">
              Our team provides detailed financial analysis, due diligence reports, and guides you through every stage of the acquisition process.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setDrawerOpen(true)}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#8B7355] text-[11px] tracking-[0.2em] uppercase text-[#F8F7F4] font-medium hover:bg-[#C4B59D] hover:text-[#2C2C2C] transition-all duration-500"
              >
                Contact Our Team
              </button>
              <a
                href="/booking-call"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#C4B59D] text-[11px] tracking-[0.2em] uppercase text-[#F8F7F4] font-medium hover:bg-[#C4B59D] hover:text-[#2C2C2C] transition-all duration-500"
              >
                <Calendar className="w-4 h-4" />
                Book a Call
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UKPropertyDetailClient;