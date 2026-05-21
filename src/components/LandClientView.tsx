'use client';

/**
 * LAND CLIENT VIEW
 * =================
 * Revised to safely handle Sanity object-based location fields.
 * Prevents React runtime/prerender errors caused by rendering objects directly.
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

// ─────────────────────────────────────────────────────────────
// Layout
// ─────────────────────────────────────────────────────────────

const HERO_HEADER_OFFSET = 'pt-24 md:pt-28';
const SIDEBAR_STICKY_OFFSET = 'top-28 md:top-32';
const TOAST_OFFSET = 'top-28 md:top-32';

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

interface LandParcel {
  _id: string;
  title: string;
  slug: string;
  subtitle?: string;
  description?: string;
  landCategory?: string;
  availabilityStatus?: string;

  location?: {
    area?: string;
    neighborhood?: string;
  } | string;

  coordinates?: {
    lat?: number;
    lng?: number;
  };

  totalArea?: {
    acres?: number;
    hectares?: number;
    squareMeters?: number;
  };

  askingPrice?: {
    displayPrice?: string;
    kes?: string;
    usd?: string;
  };

  images?: string[];
  brochureUrl?: string;

  advisor?: {
    name?: string;
    title?: string;
    email?: string;
    phone?: string;
    photo?: string;
  };

  featured?: boolean;
  listingDate?: string;
}

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────

const getLocationLabel = (
  location?: LandParcel['location']
): string => {
  if (!location) return 'Location unavailable';

  if (typeof location === 'string') {
    return location;
  }

  if (typeof location === 'object') {
    return (
      location.area ||
      location.neighborhood ||
      'Location unavailable'
    );
  }

  return 'Location unavailable';
};

const formatArea = (land: LandParcel): string => {
  if (land.totalArea?.acres) {
    return `${land.totalArea.acres} Acres`;
  }

  if (land.totalArea?.hectares) {
    return `${land.totalArea.hectares} Hectares`;
  }

  if (land.totalArea?.squareMeters) {
    return `${(
      land.totalArea.squareMeters / 4046.86
    ).toFixed(2)} Acres`;
  }

  return 'Size on request';
};

// ─────────────────────────────────────────────────────────────
// Section Title
// ─────────────────────────────────────────────────────────────

const SectionTitle = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="w-10 h-10 bg-[#F5F4F0] flex items-center justify-center">
      {icon}
    </div>

    <h3 className="text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] font-medium">
      {title}
    </h3>
  </div>
);

// ─────────────────────────────────────────────────────────────
// Status Badge
// ─────────────────────────────────────────────────────────────

const StatusBadge = ({
  status,
}: {
  status?: string;
}) => {
  const colors: Record<string, string> = {
    Available: 'bg-[#1B4332] text-white',
    'Under Offer': 'bg-[#B8956B] text-white',
    Sold: 'bg-[#8B8680] text-white',
    'Joint Venture': 'bg-[#A0522D] text-white',
  };

  return (
    <span
      className={`${
        colors[status || ''] ||
        'bg-[#8B8680] text-white'
      } text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 font-medium`}
    >
      {status || 'Available'}
    </span>
  );
};

// ─────────────────────────────────────────────────────────────
// Map
// ─────────────────────────────────────────────────────────────

const MAP_CONTAINER_STYLE = {
  width: '100%',
  height: '100%',
};

const LandMap = ({
  parcel,
}: {
  parcel: LandParcel;
}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  const center = parcel.coordinates?.lat &&
    parcel.coordinates?.lng
    ? {
        lat: parcel.coordinates.lat,
        lng: parcel.coordinates.lng,
      }
    : {
        lat: -1.2921,
        lng: 36.8219,
      };

  if (!isLoaded) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-[#F5F4F0]">
        <div className="w-8 h-8 border-2 border-[#A0522D] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative h-[400px] overflow-hidden border border-[#E8E6E1]">
      <GoogleMap
        mapContainerStyle={MAP_CONTAINER_STYLE}
        center={center}
        zoom={14}
        options={{
          disableDefaultUI: true,
          mapTypeId: 'hybrid',
        }}
      >
        {parcel.coordinates?.lat &&
          parcel.coordinates?.lng && (
            <MarkerF
              position={{
                lat: parcel.coordinates.lat,
                lng: parcel.coordinates.lng,
              }}
            />
          )}
      </GoogleMap>

      <div className="absolute bottom-5 left-5 bg-white border border-[#E8E6E1] px-4 py-3 shadow-lg">
        <div className="flex items-center gap-2 mb-1">
          <Compass className="w-4 h-4 text-[#A0522D]" />

          <span className="text-[10px] uppercase tracking-[0.2em] text-[#8B8680]">
            Site Location
          </span>
        </div>

        <p className="text-sm font-medium text-[#2C2C2C]">
          {getLocationLabel(parcel.location)}
        </p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// Gallery
// ─────────────────────────────────────────────────────────────

const ImageGallery = ({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
}: {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}) => {
  const [currentIndex, setCurrentIndex] =
    useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const next = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev + 1) % images.length
    );
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + images.length) % images.length
    );
  }, [images.length]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white"
        >
          <X size={30} />
        </button>

        <button
          onClick={prev}
          className="absolute left-6 text-white"
        >
          <ChevronLeft size={40} />
        </button>

        <img
          src={images[currentIndex]}
          alt=""
          className="max-h-[85vh] max-w-[90vw] object-contain"
        />

        <button
          onClick={next}
          className="absolute right-6 text-white"
        >
          <ChevronRight size={40} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

// ─────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────

export default function LandClientView({
  land,
}: {
  land: LandParcel;
}) {
  const [galleryOpen, setGalleryOpen] =
    useState(false);

  const [galleryIndex, setGalleryIndex] =
    useState(0);

  const [showShareToast, setShowShareToast] =
    useState(false);

  const [isLiked, setIsLiked] = useState(false);

  const images = land.images || [];

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(
        window.location.href
      );

      setShowShareToast(true);

      setTimeout(() => {
        setShowShareToast(false);
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">

      {/* Hero */}

      <section
        className={`relative h-[75vh] min-h-[600px] overflow-hidden bg-[#1B4332] ${HERO_HEADER_OFFSET}`}
      >
        <div className="absolute inset-0">
          {images[0] ? (
            <img
              src={images[0]}
              alt={land.title}
              className="w-full h-full object-cover opacity-50"
            />
          ) : (
            <div className="w-full h-full bg-[#1B4332]" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332] to-transparent" />
        </div>

        <div className="relative z-10 h-full flex items-end pb-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <StatusBadge
                status={land.availabilityStatus}
              />

              <span className="text-[10px] tracking-[0.2em] uppercase text-white/80">
                {land.landCategory}
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl text-white font-serif leading-tight max-w-5xl">
              {land.title}
            </h1>

            {land.subtitle && (
              <p className="text-[#B8956B] italic text-xl mt-6 max-w-3xl">
                {land.subtitle}
              </p>
            )}

            <div className="flex flex-wrap gap-6 mt-10 text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B8956B]" />

                <span className="text-sm">
                  {getLocationLabel(
                    land.location
                  )}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-[#B8956B]" />

                <span className="text-sm">
                  {formatArea(land)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actions */}

      <div className="border-b border-[#E8E6E1] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
          <Link
            href="/land-portfolio"
            className="flex items-center gap-3 text-sm text-[#5A5A5A]"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Land Portfolio
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                setIsLiked(!isLiked)
              }
              className="w-10 h-10 border border-[#E8E6E1] flex items-center justify-center"
            >
              <Heart
                className={`w-4 h-4 ${
                  isLiked
                    ? 'fill-[#1B4332] text-[#1B4332]'
                    : 'text-[#2C2C2C]'
                }`}
              />
            </button>

            <button
              onClick={handleShare}
              className="w-10 h-10 border border-[#E8E6E1] flex items-center justify-center"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={() => window.print()}
              className="w-10 h-10 border border-[#E8E6E1] flex items-center justify-center"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Toast */}

      <AnimatePresence>
        {showShareToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`fixed ${TOAST_OFFSET} left-1/2 -translate-x-1/2 z-[100] bg-[#1B4332] text-white px-6 py-3 text-xs uppercase tracking-[0.2em]`}
          >
            Link copied
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main */}

      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-12 gap-14">

          {/* Left */}

          <div className="lg:col-span-8 space-y-14">

            <section>
              <SectionTitle
                icon={
                  <FileText className="w-5 h-5 text-[#1B4332]" />
                }
                title="Executive Summary"
              />

              <p className="text-[16px] leading-[1.9] text-[#5A5A5A]">
                {land.description}
              </p>
            </section>

            {images.length > 0 && (
              <section>
                <SectionTitle
                  icon={
                    <TreePine className="w-5 h-5 text-[#1B4332]" />
                  }
                  title="Visual Documentation"
                />

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setGalleryIndex(idx);
                        setGalleryOpen(true);
                      }}
                      className="aspect-square overflow-hidden"
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </button>
                  ))}
                </div>
              </section>
            )}

            <section>
              <SectionTitle
                icon={
                  <Compass className="w-5 h-5 text-[#1B4332]" />
                }
                title="Location Intelligence"
              />

              <LandMap parcel={land} />
            </section>
          </div>

          {/* Sidebar */}

          <div className="lg:col-span-4">
            <div
              className={`sticky ${SIDEBAR_STICKY_OFFSET} space-y-6`}
            >

              {/* Price */}

              <div className="bg-[#1B4332] text-white p-8">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#B8956B] mb-3">
                  Asking Price
                </p>

                <p className="text-4xl font-serif">
                  {land.askingPrice?.displayPrice ||
                    'Price on request'}
                </p>
              </div>

              {/* Summary */}

              <div className="bg-white border border-[#E8E6E1] p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8B8680] mb-4">
                  Parcel Summary
                </p>

                <div className="space-y-4 text-sm">

                  <div className="flex justify-between border-b border-[#E8E6E1] pb-3">
                    <span className="text-[#8B8680]">
                      Category
                    </span>

                    <span className="font-medium">
                      {land.landCategory}
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-[#E8E6E1] pb-3">
                    <span className="text-[#8B8680]">
                      Total Area
                    </span>

                    <span className="font-medium">
                      {formatArea(land)}
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-[#E8E6E1] pb-3 gap-6">
                    <span className="text-[#8B8680]">
                      Location
                    </span>

                    <span className="font-medium text-right">
                      {getLocationLabel(
                        land.location
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-[#8B8680]">
                      Status
                    </span>

                    <span className="font-medium">
                      {land.availabilityStatus}
                    </span>
                  </div>

                </div>
              </div>

              {/* Advisor */}

              {land.advisor && (
                <div className="bg-white border border-[#E8E6E1] p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#8B8680] mb-4">
                    Land Advisor
                  </p>

                  <div className="flex items-start gap-4">
                    {land.advisor.photo ? (
                      <img
                        src={land.advisor.photo}
                        alt={land.advisor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-[#F5F4F0] flex items-center justify-center">
                        <span className="font-serif text-xl">
                          {land.advisor.name?.charAt(0)}
                        </span>
                      </div>
                    )}

                    <div>
                      <p className="font-serif text-lg">
                        {land.advisor.name}
                      </p>

                      <p className="text-sm text-[#8B8680]">
                        {land.advisor.title ||
                          'Land Investment Advisor'}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">

                    {land.advisor.email && (
                      <a
                        href={`mailto:${land.advisor.email}`}
                        className="flex items-center gap-3 text-sm"
                      >
                        <Mail className="w-4 h-4 text-[#B8956B]" />
                        {land.advisor.email}
                      </a>
                    )}

                    {land.advisor.phone && (
                      <a
                        href={`tel:${land.advisor.phone}`}
                        className="flex items-center gap-3 text-sm"
                      >
                        <Phone className="w-4 h-4 text-[#B8956B]" />
                        {land.advisor.phone}
                      </a>
                    )}

                  </div>
                </div>
              )}

              {/* CTA */}

              <div className="space-y-3">

                {land.advisor?.email && (
                  <a
                    href={`mailto:${land.advisor.email}?subject=Land Inquiry: ${land.title}`}
                    className="flex items-center justify-center gap-2 h-12 bg-[#1B4332] text-white uppercase tracking-[0.2em] text-[11px]"
                  >
                    <Calendar className="w-4 h-4" />
                    Schedule Site Visit
                  </a>
                )}

                {land.brochureUrl && (
                  <a
                    href={land.brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 h-12 border border-[#1B4332] text-[#1B4332] uppercase tracking-[0.2em] text-[11px]"
                  >
                    <Download className="w-4 h-4" />
                    Download IM
                  </a>
                )}

              </div>

            </div>
          </div>
        </div>
      </main>

      {/* Gallery Modal */}

      <ImageGallery
        images={images}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        initialIndex={galleryIndex}
      />
    </div>
  );
}