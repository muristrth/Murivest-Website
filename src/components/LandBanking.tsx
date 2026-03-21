'use client';

/**
 * MURIVEST LAND BANKING - STRATEGIC LAND INVESTMENT
 * ==================================================
 * Dedicated interface for land acquisition and development opportunities.
 *
 * Design Language: Old Money / Golf Club Lounge / Estate Planning
 * Typography: Editorial serif (Cormorant Garamond) + Swiss sans (Inter)
 * Palette: Forest Green, Warm Cream, Brass Gold, Charcoal, Terra Cotta accents
 */

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import NextLink from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Map,
  Marker,
  NavigationControl,
} from 'react-map-gl/mapbox';
import type { MapRef } from 'react-map-gl/mapbox';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import 'mapbox-gl/dist/mapbox-gl.css';
import {
  MapPin,
  Search,
  ArrowUpRight,
  ChevronDown,
  X,
  Mail,
  Phone,
  Calendar,
  LayoutGrid,
  SlidersHorizontal,
  Layers,
  TreePine,
  Fence,
  FileText,
  Shield,
  Compass,
  Route,
  CheckCircle2,
  Sprout,
  Landmark,
  Sun,
  Moon,
  Map as MapIcon,
} from 'lucide-react';

// ─── Layout Offsets ──────────────────────────────────────────────────────────
// Match these to your actual global header height.
// Current setup assumes roughly 80px desktop / 96px larger layouts.
const HERO_HEADER_OFFSET = 'pt-24 md:pt-28';
const STICKY_HEADER_OFFSET = 'top-20 md:top-24';

// ─── Sanity Client ───────────────────────────────────────────────────────────

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source: any) => builder.image(source);

// ─── Types ───────────────────────────────────────────────────────────────────

interface LandLocation {
  lat?: number | null;
  lng?: number | null;
  area?: string;
}

interface LandAdvisor {
  name: string;
  email: string;
  phone: string;
  photo?: string;
  title?: string;
}

interface LandParcel {
  _id: string;
  title: string;
  slug: string;
  subtitle?: string;
  location: LandLocation | null;
  price: string;
  priceKsh?: string;
  priceUsd?: string;
  squareFootage: string; // acres
  landCategory?: string;
  availabilityStatus?: string;
  description: string;
  image: any;
  brochureUrl?: string;
  advisor: LandAdvisor;
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

// ─── Land Parcel Card ────────────────────────────────────────────────────────

const LandParcelCard: React.FC<{
  parcel: LandParcel;
  isHovered: boolean;
  onHover: (id: string | null) => void;
  onQuickView: (parcel: LandParcel) => void;
  index: number;
}> = ({ parcel, isHovered, onHover, onQuickView, index }) => {
  const imgSrc = parcel.image
    ? urlFor(parcel.image).width(800).height(560).fit('crop').url()
    : '';

  const formatSize = (size: string) => {
    if (!size) return '—';
    const sizeStr = String(size);
    if (sizeStr.toLowerCase().includes('acre') || sizeStr.toLowerCase().includes('ha')) return sizeStr;
    return `${sizeStr} Acres`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className={`group bg-white border border-[#E8E6E1] transition-all duration-500 ${
        isHovered ? 'shadow-xl -translate-y-1 border-[#A0522D]' : 'hover:shadow-lg hover:-translate-y-0.5'
      }`}
      onMouseEnter={() => onHover(parcel._id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="relative h-[280px] overflow-hidden bg-[#F5F4F0]">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={parcel.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#D4E4D4] to-[#E8E6E1]">
            <TreePine className="w-16 h-16 text-[#1B4332]/30" strokeWidth={1} />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-4 left-4">
          <span className="bg-[#A0522D] text-white text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 font-medium flex items-center gap-2">
            <Fence className="w-3 h-3" />
            {parcel.landCategory || 'Land'}
          </span>
        </div>

        <div className="absolute bottom-4 left-4">
          <div className="bg-white/95 backdrop-blur-sm border border-[#E8E6E1] px-4 py-2">
            <span className="text-[10px] tracking-[0.1em] uppercase text-[#8B8680] block">Total Area</span>
            <span className="text-lg font-serif text-[#2C2C2C]">{formatSize(parcel.squareFootage)}</span>
          </div>
        </div>

        <div className="absolute inset-0 bg-[#1B4332]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={() => onQuickView(parcel)}
            className="bg-white text-[#1B4332] px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-medium hover:bg-[#A0522D] hover:text-white transition-colors"
          >
            Site Analysis
          </button>
          <NextLink
            href={`/land-portfolio/${parcel.slug}`}
            className="border border-white text-white px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-medium hover:bg-white hover:text-[#1B4332] transition-colors"
          >
            Prospectus
          </NextLink>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-serif text-[#2C2C2C] group-hover:text-[#1B4332] transition-colors leading-tight mb-2">
            {parcel.title}
          </h3>
          {parcel.subtitle && (
            <p className="text-sm text-[#8B8680] italic mb-2">{parcel.subtitle}</p>
          )}
          {parcel.location?.area && (
            <div className="flex items-center gap-1.5 text-[#8B8680]">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-[11px] tracking-wide">{parcel.location.area}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-[#E8E6E1]">
          <div>
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] block mb-0.5">
              Asking Price
            </span>
            <p className="text-2xl font-serif text-[#2C2C2C]">{parcel.price}</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-[#8B8680]">
            <Shield className="w-3 h-3" />
            <span>Direct Mandate</span>
          </div>
          <button
            onClick={() => onQuickView(parcel)}
            className="text-[10px] tracking-[0.15em] uppercase text-[#A0522D] hover:text-[#1B4332] transition-colors font-medium"
          >
            View Details →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Land Parcel Strip (Below Map) ───────────────────────────────────────────

const LandParcelStrip: React.FC<{
  parcels: LandParcel[];
  hoveredId: string | null;
  onHover: (id: string | null) => void;
  onClick: (parcel: LandParcel) => void;
}> = ({ parcels, hoveredId, onHover, onClick }) => {
  return (
    <div className="border-t border-[#E8E6E1] bg-white">
      <div className="overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex gap-0 min-w-max">
          {parcels.map((parcel) => {
            const thumb = parcel.image
              ? urlFor(parcel.image).width(200).height(200).fit('crop').url()
              : '';

            return (
              <motion.div
                key={parcel._id}
                className={`flex-shrink-0 w-[320px] border-r border-[#E8E6E1] cursor-pointer transition-all duration-300 ${
                  hoveredId === parcel._id ? 'bg-[#F5F4F0]' : 'hover:bg-[#FAF9F6]'
                }`}
                onMouseEnter={() => onHover(parcel._id)}
                onMouseLeave={() => onHover(null)}
                onClick={() => onClick(parcel)}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex gap-4 p-4">
                  <div className="w-24 h-24 flex-shrink-0 overflow-hidden bg-[#F5F4F0]">
                    {thumb ? (
                      <img src={thumb} alt={parcel.title} className="w-full h-full object-cover" loading="lazy" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <TreePine className="w-8 h-8 text-[#D0CCC4]" />
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1 space-y-1 py-1">
                    <h4 className="text-sm font-serif text-[#2C2C2C] truncate leading-tight">
                      {parcel.title}
                    </h4>
                    {parcel.location?.area && (
                      <div className="flex items-center gap-1 text-[#8B8680]">
                        <MapPin className="w-3 h-3" />
                        <span className="text-[10px] tracking-wide truncate">{parcel.location.area}</span>
                      </div>
                    )}
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-sm font-serif text-[#2C2C2C]">{parcel.price}</p>
                      <span className="text-[9px] text-[#8B8680]">{parcel.squareFootage} ac</span>
                    </div>
                    {parcel.landCategory && (
                      <span className="inline-block text-[9px] tracking-wide text-[#A0522D] bg-[#A0522D]/10 px-2 py-0.5 mt-1">
                        {parcel.landCategory}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ─── Land Detail Drawer ─────────────────────────────────────────────────────

const LandDetailDrawer: React.FC<{
  parcel: LandParcel | null;
  isOpen: boolean;
  onClose: () => void;
}> = ({ parcel, isOpen, onClose }) => {
  if (!parcel) return null;

  const imgSrc = parcel.image
    ? urlFor(parcel.image).width(900).height(600).fit('crop').url()
    : '';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#2C2C2C]/20 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 35, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[520px] bg-[#FAF9F6] border-l border-[#E8E6E1] z-50 overflow-y-auto shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm border border-[#E8E6E1] hover:border-[#1B4332] transition-colors"
            >
              <X className="w-4 h-4 text-[#2C2C2C]" />
            </button>

            <div className="relative h-[280px] overflow-hidden">
              {imgSrc ? (
                <img src={imgSrc} alt={parcel.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#D4E4D4] to-[#E8E6E1] flex items-center justify-center">
                  <TreePine className="w-24 h-24 text-[#1B4332]/20" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8956B] font-medium mb-2 block flex items-center gap-2">
                  <Fence className="w-4 h-4" />
                  {parcel.landCategory || 'Strategic Land Asset'}
                </span>
                <h2 className="text-2xl font-serif text-white leading-tight">
                  {parcel.title}
                </h2>
              </div>
            </div>

            <div className="p-6 space-y-8">
              <div className="space-y-4">
                {parcel.location?.area && (
                  <div className="flex items-start gap-2 text-[#8B8680]">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{parcel.location.area}</span>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E8E6E1]">
                  <div>
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] block mb-1">
                      Total Land Area
                    </span>
                    <p className="text-2xl font-serif text-[#2C2C2C]">
                      {parcel.squareFootage ? `${parcel.squareFootage} Acres` : '—'}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] block mb-1">
                      Asking Price
                    </span>
                    <p className="text-2xl font-serif text-[#2C2C2C]">{parcel.price}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] font-medium">
                  Executive Summary
                </span>
                <p className="text-sm text-[#5A5A5A] leading-relaxed font-light">
                  {parcel.description}
                </p>
              </div>

              <div className="bg-white border border-[#E8E6E1] p-5 space-y-4">
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] font-medium">
                  Land Advisory Specialist
                </span>
                <div className="flex items-start gap-4">
                  {parcel.advisor?.photo ? (
                    <img
                      src={parcel.advisor.photo}
                      alt={parcel.advisor.name}
                      className="w-12 h-12 rounded-full object-cover border border-[#E8E6E1]"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[#F5F4F0] border border-[#E8E6E1] flex items-center justify-center">
                      <span className="text-lg font-serif text-[#8B8680]">
                        {parcel.advisor?.name?.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="space-y-1 min-w-0 flex-1">
                    <p className="text-base font-serif text-[#2C2C2C]">{parcel.advisor?.name}</p>
                    <p className="text-[11px] text-[#8B8680]">{parcel.advisor?.title || 'Land Investment Advisor'}</p>
                    <div className="flex items-center gap-2 text-xs text-[#8B8680]">
                      <Mail className="w-3.5 h-3.5" />
                      <span className="truncate">{parcel.advisor?.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#8B8680]">
                      <Phone className="w-3.5 h-3.5" />
                      <span>{parcel.advisor?.phone}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <NextLink
                  href={`/land-portfolio/${parcel.slug}`}
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 w-full h-12 bg-[#1B4332] text-white hover:bg-[#2D5A45] transition-colors text-[11px] tracking-[0.2em] uppercase font-medium"
                >
                  <FileText className="w-4 h-4" />
                  View Investment Memorandum
                </NextLink>

                {parcel.brochureUrl && (
                  <a
                    href={parcel.brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full h-12 border border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white transition-colors text-[11px] tracking-[0.2em] uppercase font-medium"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                    Download Site Report
                  </a>
                )}

                <a
                  href={`mailto:${parcel.advisor?.email}?subject=Land Banking Inquiry: ${parcel.title}`}
                  className="flex items-center justify-center gap-2 w-full h-12 border border-[#E8E6E1] hover:border-[#A0522D] hover:text-[#A0522D] transition-colors text-[11px] tracking-[0.2em] uppercase font-medium text-[#2C2C2C]"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Site Visit
                </a>
              </div>

              <div className="pt-6 border-t border-[#E8E6E1]">
                <p className="text-[10px] text-[#8B8680] leading-relaxed italic text-center">
                  Land banking investments carry inherent risks including planning approval delays,
                  market fluctuations, and infrastructure timing. Past performance not indicative of future returns.
                  Professional due diligence advised.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// ─── Map Styles ──────────────────────────────────────────────────────────────

const MAP_STYLES = {
  light: 'mapbox://styles/mapbox/light-v11',
  dark: 'mapbox://styles/mapbox/dark-v11',
  satellite: 'mapbox://styles/mapbox/satellite-streets-v12',
};

interface LandMapProps {
  parcels: LandParcel[];
  hoveredId: string | null;
  selectedId: string | null;
  onPinHover: (id: string | null) => void;
  onPinClick: (parcel: LandParcel) => void;
}

const LandMap: React.FC<LandMapProps> = ({
  parcels,
  hoveredId,
  selectedId,
  onPinHover,
  onPinClick,
}) => {
  const mapRef = useRef<MapRef>(null);
  const [mapStyle, setMapStyle] = useState<'light' | 'dark' | 'satellite'>('satellite');
  const [isLoaded, setIsLoaded] = useState(false);

  const mappableParcels = useMemo(() =>
    parcels.filter(p => p.location?.lat != null && p.location?.lng != null),
    [parcels]
  );

  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

  const fitAll = useCallback(() => {
    if (!mapRef.current || mappableParcels.length === 0) return;
    if (mappableParcels.length === 1) {
      const first = mappableParcels[0];
      if (first.location?.lat != null && first.location?.lng != null) {
        mapRef.current?.flyTo({ center: [first.location.lng, first.location.lat], zoom: 15, duration: 1200 });
      }
      return;
    }
    const lngs = mappableParcels.map(p => p.location!.lng!);
    const lats = mappableParcels.map(p => p.location!.lat!);
    mapRef.current?.fitBounds(
      [[Math.min(...lngs), Math.min(...lats)], [Math.max(...lngs), Math.max(...lats)]],
      { padding: { top: 80, bottom: 80, left: 80, right: 80 }, duration: 1200 }
    );
  }, [mappableParcels]);

  useEffect(() => {
    if (!selectedId || !mapRef.current) return;
    const parcel = mappableParcels.find(p => p._id === selectedId);
    if (!parcel || parcel.location?.lat == null || parcel.location?.lng == null) return;
    mapRef.current?.flyTo({ center: [parcel.location.lng, parcel.location.lat], zoom: 15, offset: [-200, 0], duration: 800 });
  }, [selectedId, mappableParcels]);

  const defaultCenter = mappableParcels.length > 0 && mappableParcels[0].location?.lat != null
    ? { lat: mappableParcels[0].location.lat!, lng: mappableParcels[0].location.lng! }
    : { lat: -1.2921, lng: 36.8219 };

  if (!token) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#F5F4F0]">
        <div className="text-center">
          <Compass className="w-12 h-12 text-[#8B8680] mx-auto mb-3" />
          <p className="text-sm text-[#8B8680]">Add NEXT_PUBLIC_MAPBOX_TOKEN to .env</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <Map
        ref={mapRef}
        mapboxAccessToken={token}
        initialViewState={{ longitude: defaultCenter.lng, latitude: defaultCenter.lat, zoom: mappableParcels.length === 1 ? 15 : 11 }}
        style={{ width: '100%', height: '100%' }}
        mapStyle={MAP_STYLES[mapStyle]}
        onLoad={() => { setIsLoaded(true); fitAll(); }}
      >
        <NavigationControl position="bottom-right" showCompass={false} />

        {isLoaded && mappableParcels.map((parcel) => {
          const isHovered = hoveredId === parcel._id;
          const isSelected = selectedId === parcel._id;
          const active = isHovered || isSelected;
          const scale = isSelected ? 1.4 : isHovered ? 1.2 : 1;
          const bodyColor = isSelected ? '#A0522D' : isHovered ? '#CD853F' : '#B8956B';

          return (
            <Marker
              key={parcel._id}
              longitude={parcel.location!.lng!}
              latitude={parcel.location!.lat!}
              anchor="bottom"
              onClick={(e) => { e.originalEvent.stopPropagation(); onPinClick(parcel); }}
            >
              <div
                onMouseEnter={() => onPinHover(parcel._id)}
                onMouseLeave={() => onPinHover(null)}
                style={{
                  cursor: 'pointer',
                  transform: `scale(${scale})`,
                  transition: 'transform 0.2s cubic-bezier(0.34,1.56,0.64,1)',
                  transformOrigin: 'bottom center',
                  filter: active ? `drop-shadow(0 0 8px rgba(160,82,45,0.4))` : 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width={isSelected ? 48 : isHovered ? 42 : 36} height={isSelected ? 60 : isHovered ? 52 : 44} viewBox="0 0 36 48">
                  <ellipse cx="18" cy="46" rx="6" ry="2" fill="rgba(0,0,0,0.2)" />
                  <path d="M18 0 L36 18 L18 36 L0 18 Z" fill={bodyColor} stroke={isSelected ? '#1B4332' : '#FFFFFF'} strokeWidth={2} />
                  <circle cx="18" cy="18" r="5" fill="#FAF9F6" />
                  <circle cx="18" cy="18" r="2" fill={bodyColor} />
                </svg>

                {active && (
                  <div style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginBottom: 4,
                    whiteSpace: 'nowrap',
                    backgroundColor: bodyColor,
                    color: '#FAF9F6',
                    fontSize: 10,
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '0.08em',
                    padding: '3px 8px',
                    pointerEvents: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  }}>
                    {parcel.title}
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 0,
                      borderLeft: '5px solid transparent',
                      borderRight: '5px solid transparent',
                      borderTop: `5px solid ${bodyColor}`,
                    }} />
                  </div>
                )}
              </div>
            </Marker>
          );
        })}
      </Map>

      <div style={{ position: 'absolute', bottom: 24, left: 24, display: 'flex', flexDirection: 'column', gap: 8, zIndex: 10 }}>
        <div className="flex items-center gap-0 bg-white border border-[#E8E6E1] overflow-hidden shadow-lg">
          {([
            { key: 'satellite', icon: <Layers className="w-3.5 h-3.5" />, label: 'Satellite' },
            { key: 'light', icon: <Sun className="w-3.5 h-3.5" />, label: 'Light' },
            { key: 'dark', icon: <Moon className="w-3.5 h-3.5" />, label: 'Dark' },
          ] as const).map(({ key, icon, label }) => (
            <button
              key={key}
              onClick={() => setMapStyle(key)}
              title={label}
              className={`px-3 py-2 transition-colors flex items-center gap-1.5 text-[10px] tracking-[0.1em] uppercase ${
                mapStyle === key ? 'bg-[#A0522D] text-white' : 'bg-white/90 text-[#8B8680] hover:bg-[#F5F4F0]'
              }`}
            >
              {icon}
            </button>
          ))}
        </div>

        <button
          onClick={fitAll}
          className="flex items-center gap-2 bg-white border border-[#E8E6E1] px-4 py-2.5 text-[10px] tracking-[0.2em] uppercase hover:border-[#A0522D] hover:text-[#A0522D] transition-all shadow-lg z-10"
        >
          <Layers className="w-3.5 h-3.5" />
          View All Parcels
        </button>
      </div>

      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-[#E8E6E1] px-3 py-1.5 text-[10px] tracking-[0.15em] uppercase text-[#8B8680] shadow-lg z-10">
        {mappableParcels.length} {mappableParcels.length === 1 ? 'parcel' : 'parcels'}
      </div>

      {!isLoaded && (
        <div className="absolute inset-0 bg-[#F5F4F0] flex items-center justify-center z-30">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-[#A0522D] border-t-transparent rounded-full animate-spin" />
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8B8680]">Surveying Land Parcels</p>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── Main Land Banking Component ──────────────────────────────────────────────

interface LandBankingProps {
  initialData: LandParcel[];
}

export default function LandBanking({ initialData }: LandBankingProps) {
  const [parcels, setParcels] = useState<LandParcel[]>(initialData || []);
  const [loading, setLoading] = useState(!initialData?.length);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [drawerParcel, setDrawerParcel] = useState<LandParcel | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'split' | 'map' | 'grid'>('split');
  const [scrolled, setScrolled] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    if (!initialData?.length) {
      sanityClient
        .fetch(`*[_type == "land" && availabilityStatus != "Sold" && !(_id in path("drafts.**"))] | order(featured desc, listingDate desc) {
          _id, title, "slug": slug.current, subtitle,
          "location": { "lat": coordinates.lat, "lng": coordinates.lng, "area": location },
          "squareFootage": totalArea.acres,
          landCategory, availabilityStatus,
          "price": askingPrice.displayPrice,
          "priceKsh": askingPrice.kes,
          "priceUsd": askingPrice.usd,
          description,
          "image": sitePhotographs[0],
          "brochureUrl": investmentMemorandum.asset->url,
          advisor { name, email, phone, "photo": photo.asset->url }
        }`)
        .then((data: LandParcel[]) => {
          setParcels(data);
          setLoading(false);
        });
    }
  }, [initialData]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(parcels.map(p => p.landCategory).filter(Boolean) as string[]))],
    [parcels]
  );

  const filteredParcels = useMemo(() =>
    parcels.filter((p) => {
      const matchCategory = selectedCategory === 'All' || p.landCategory === selectedCategory;
      const acres = parseFloat(p.squareFootage);
      const matchSize = selectedSize === 'All' ||
        (selectedSize === 'Small' && acres < 5) ||
        (selectedSize === 'Medium' && acres >= 5 && acres < 50) ||
        (selectedSize === 'Large' && acres >= 50);
      const q = searchTerm.toLowerCase();
      const matchSearch =
        !q ||
        p.title?.toLowerCase().includes(q) ||
        p.location?.area?.toLowerCase().includes(q);
      return matchCategory && matchSize && matchSearch;
    }),
    [parcels, selectedCategory, selectedSize, searchTerm]
  );

  const handleOpenDrawer = useCallback((parcel: LandParcel) => {
    setDrawerParcel(parcel);
    setDrawerOpen(true);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setDrawerOpen(false);
    setTimeout(() => setDrawerParcel(null), 300);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center gap-4">
        <div className="w-10 h-10 border-2 border-[#A0522D] border-t-transparent rounded-full animate-spin" />
        <p className="text-xs tracking-[0.3em] uppercase text-[#8B8680]">Surveying Portfolio</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C2C2C]">
      {/* ── HERO SECTION ─────────────────────────────────────────────────────── */}
      <section className={`relative h-[60vh] min-h-[500px] w-full flex flex-col items-center justify-center overflow-hidden bg-[#1B4332] ${HERO_HEADER_OFFSET}`}>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B4332]/90 via-[#1B4332]/70 to-[#1B4332]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Fence className="w-5 h-5 text-[#B8956B]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#B8956B] font-medium">
                Strategic Land Assembly
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-[1.1]">
              Land Banking
              <span className="block italic text-[#B8956B] font-light text-3xl md:text-4xl lg:text-5xl mt-3">
                Ground Floor Opportunities
              </span>
            </h1>
            <p className="text-[13px] text-white/70 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Premium land parcels in high-growth corridors. Strategic ground-floor positions
              for patient capital seeking asymmetric returns through entitlement and development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── INVESTMENT THESIS BAR ───────────────────────────────────────────── */}
      <div className="bg-[#2D5A45] text-white py-6 border-b border-[#1B4332]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-serif text-[#B8956B]">15-25%</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/70 mt-1">Target IRR</p>
            </div>
            <div>
              <p className="text-2xl font-serif text-[#B8956B]">3-7 Years</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/70 mt-1">Holding Period</p>
            </div>
            <div>
              <p className="text-2xl font-serif text-[#B8956B]">Direct</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/70 mt-1">Tenure</p>
            </div>
            <div>
              <p className="text-2xl font-serif text-[#B8956B]">Full</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/70 mt-1">Due Diligence</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── STICKY FILTER BAR ──────────────────────────────────────────────── */}
      <div
        className={`sticky ${STICKY_HEADER_OFFSET} z-40 transition-all duration-300 border-b ${
          scrolled ? 'bg-white/95 backdrop-blur-md border-[#E8E6E1] shadow-sm' : 'bg-[#FAF9F6] border-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B8680]" strokeWidth={1.5} />
              <input
                type="text"
                placeholder="Search land parcels by location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent border-b border-[#E8E6E1] focus:border-[#A0522D] pl-8 pr-8 py-2.5 text-[13px] text-[#2C2C2C] placeholder:text-[#8B8680]/60 outline-none transition-colors font-light tracking-wide"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className="absolute right-0 top-1/2 -translate-y-1/2 hover:text-[#A0522D] transition-colors">
                  <X className="w-4 h-4 text-[#8B8680]" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="px-4 py-2 text-[10px] tracking-[0.15em] uppercase border border-[#E8E6E1] bg-transparent text-[#8B8680] focus:border-[#A0522D] outline-none cursor-pointer"
              >
                <option value="All">All Sizes</option>
                <option value="Small">&lt; 5 Acres</option>
                <option value="Medium">5-50 Acres</option>
                <option value="Large">&gt; 50 Acres</option>
              </select>

              <div className="relative">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center gap-2 px-4 py-2 text-[10px] tracking-[0.15em] uppercase border border-[#E8E6E1] hover:border-[#A0522D] hover:text-[#A0522D] transition-colors text-[#8B8680]"
                >
                  <SlidersHorizontal className="w-3 h-3" />
                  {selectedCategory === 'All' ? 'Category' : selectedCategory}
                  <ChevronDown className={`w-3 h-3 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isFilterOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      className="absolute top-full left-0 mt-1 bg-white border border-[#E8E6E1] shadow-xl z-50 min-w-[200px]"
                    >
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => { setSelectedCategory(cat); setIsFilterOpen(false); }}
                          className={`w-full text-left px-4 py-3 text-[11px] tracking-[0.1em] uppercase transition-colors ${
                            selectedCategory === cat
                              ? 'bg-[#F5F4F0] text-[#A0522D] font-medium'
                              : 'hover:bg-[#FAF9F6] text-[#8B8680]'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="w-px h-6 bg-[#E8E6E1] hidden sm:block" />

              <div className="flex items-center border border-[#E8E6E1]">
                {[
                  { key: 'split', icon: <Layers className="w-3.5 h-3.5" />, label: 'Split' },
                  { key: 'map', icon: <MapIcon className="w-3.5 h-3.5" />, label: 'Map' },
                  { key: 'grid', icon: <LayoutGrid className="w-3.5 h-3.5" />, label: 'Grid' },
                ].map(({ key, icon }) => (
                  <button
                    key={key}
                    onClick={() => setViewMode(key as 'split' | 'map' | 'grid')}
                    className={`px-3 py-2 transition-colors ${
                      viewMode === key ? 'bg-[#A0522D] text-white' : 'text-[#8B8680] hover:bg-[#F5F4F0]'
                    }`}
                    title={key}
                  >
                    {icon}
                  </button>
                ))}
              </div>

              <span className="text-[11px] text-[#8B8680] ml-2 hidden md:block tracking-wide">
                {filteredParcels.length} {filteredParcels.length === 1 ? 'Parcel' : 'Parcels'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAP SECTION ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {viewMode !== 'grid' && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: viewMode === 'map' ? '80vh' : '500px', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="relative w-full overflow-hidden border-b border-[#E8E6E1]"
          >
            <LandMap
              parcels={filteredParcels}
              hoveredId={hoveredId}
              selectedId={drawerParcel?._id || null}
              onPinHover={setHoveredId}
              onPinClick={handleOpenDrawer}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── PARCEL STRIP ─────────────────────────────────────────────────────── */}
      {viewMode !== 'grid' && filteredParcels.length > 0 && (
        <LandParcelStrip
          parcels={filteredParcels}
          hoveredId={hoveredId}
          onHover={setHoveredId}
          onClick={handleOpenDrawer}
        />
      )}

      {/* ── PARCEL GRID ─────────────────────────────────────────────────────── */}
      {viewMode !== 'map' && (
        <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16">
          {filteredParcels.length === 0 ? (
            <div className="text-center py-24">
              <TreePine className="w-16 h-16 text-[#D0CCC4] mx-auto mb-6" />
              <p className="text-lg font-serif text-[#8B8680] italic mb-6">
                No land parcels match your current criteria.
              </p>
              <button
                onClick={() => { setSelectedCategory('All'); setSelectedSize('All'); setSearchTerm(''); }}
                className="text-[11px] tracking-[0.2em] uppercase text-[#A0522D] border border-[#A0522D] px-6 py-3 hover:bg-[#A0522D] hover:text-white transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredParcels.map((parcel, index) => (
                <LandParcelCard
                  key={parcel._id}
                  parcel={parcel}
                  isHovered={hoveredId === parcel._id}
                  onHover={setHoveredId}
                  onQuickView={handleOpenDrawer}
                  index={index}
                />
              ))}
            </div>
          )}
        </section>
      )}

      {/* ── EDUCATIONAL SECTION ─────────────────────────────────────────────── */}
      <section className="bg-[#1B4332] text-white py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-[#B8956B] mb-4">Investment Strategy</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
                The Case for Strategic
                <span className="block italic text-[#B8956B]">Land Banking</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-6 font-light">
                Land banking represents one of the most time-tested strategies for wealth preservation
                and appreciation. By acquiring well-located land in the path of growth, investors
                position themselves to capture value creation as urbanization and infrastructure
                development unfold.
              </p>
              <div className="space-y-4">
                {[
                  'Asymmetric return profile with limited downside',
                  'Inflation hedge through scarce resource ownership',
                  'Portfolio diversification uncorrelated to public markets',
                  'Entitlement upside through rezoning potential',
                  'Development optionality for future value realization'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#B8956B] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#2D5A45] p-8 lg:p-12 border border-[#B8956B]/20">
              <h3 className="text-[11px] tracking-[0.25em] uppercase text-[#B8956B] mb-8">Our Acquisition Criteria</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1B4332] flex items-center justify-center flex-shrink-0">
                    <Route className="w-5 h-5 text-[#B8956B]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-1">Infrastructure Proximity</h4>
                    <p className="text-sm text-white/60">Within 5km of major road corridors or planned transport links</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1B4332] flex items-center justify-center flex-shrink-0">
                    <Landmark className="w-5 h-5 text-[#B8956B]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-1">Clear Title & Tenure</h4>
                    <p className="text-sm text-white/60">Freehold or long-leasehold with unencumbered ownership</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1B4332] flex items-center justify-center flex-shrink-0">
                    <Sprout className="w-5 h-5 text-[#B8956B]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-1">Growth Corridor Positioning</h4>
                    <p className="text-sm text-white/60">Identified in master plans or demonstrated urban expansion patterns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer className="border-t border-[#E8E6E1] bg-white py-12">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-4 h-4 text-[#A0522D]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#8B8680]">Mandated Land Advisory</span>
          </div>
          <p className="text-xs text-[#8B8680] leading-relaxed max-w-3xl mx-auto font-light">
            Land banking involves substantial risk including illiquidity, planning approval uncertainty,
            and extended holding periods. All projections are hypothetical and subject to market conditions.
            Professional legal and tax advice recommended. Available exclusively to qualified investors
            under private placement memorandum.
          </p>
        </div>
      </footer>

      {/* ── SIDE DRAWER ─────────────────────────────────────────────────────── */}
      <LandDetailDrawer
        parcel={drawerParcel}
        isOpen={drawerOpen}
        onClose={handleCloseDrawer}
      />

      {/* Filter Dropdown Backdrop */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-30" onClick={() => setIsFilterOpen(false)} />
      )}
    </div>
  );
}