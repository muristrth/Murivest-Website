'use client';

/**
 * MURIVEST PROPERTIES - INSTITUTIONAL PORTFOLIO VIEW
 * ==================================================
 * A refined, editorial interface for UHNWI property discovery.
 * 
 * Design Language: Old Money / Golf Club Lounge
 * Typography: Editorial serif (Cormorant Garamond) + Swiss sans (Inter)
 * Palette: Forest Green, Warm Cream, Brass Gold, Charcoal
 */
import { Property } from '@/types';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import NextLink from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import {
  MapPin,
  Search,
  ArrowUpRight,
  ChevronDown,
  X,
  Maximize2,
  Mail,
  Phone,
  Calendar,
  Map,
  LayoutGrid,
  SlidersHorizontal,
  Layers,
  TrendingUp,
  Building2,
  Shield,
  FileText,
  Bookmark,
} from 'lucide-react';
import dynamic from 'next/dynamic';

const PropertyMap = dynamic(() => import('./PropertyMap'), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-muted animate-pulse" />
});

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

interface WalkScores {
  walk: number;
  transit: number | null;
  bike: number | null;
}

interface Broker {
  name: string;
  email: string;
  phone: string;
  photo?: string;
}

interface PropertyLocation {
  lat?: number | null;
  lng?: number | null;
  area?: string;
}


// ─── Color Palette (Old Money Aesthetic) ─────────────────────────────────────

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

// ─── Score Helpers ───────────────────────────────────────────────────────────

const getScoreColor = (score: number) => {
  if (score >= 90) return COLORS.forest;
  if (score >= 70) return '#D4AF37'; // Gold
  if (score >= 50) return COLORS.brass;
  return '#8B4513'; // Saddle brown
};

const getScoreLabel = (score: number) => {
  if (score >= 90) return "Walker's Paradise";
  if (score >= 70) return 'Very Walkable';
  if (score >= 50) return 'Somewhat Walkable';
  if (score >= 25) return 'Car-Dependent';
  return 'Auto-Dependent';
};

// ─── Walk Score Ring ─────────────────────────────────────────────────────────

const WalkScoreRing: React.FC<{
  score: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
}> = ({ score, size = 48, strokeWidth = 3, label }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = getScoreColor(score);

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#E8E6E1"
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-[#2C2C2C]">
          {score}
        </span>
      </div>
      {label && (
        <span className="text-[8px] tracking-[0.2em] uppercase text-[#8B8680] font-medium">
          {label}
        </span>
      )}
    </div>
  );
};

// ─── Property Hover Card (Map Overlay) ───────────────────────────────────────

const PropertyHoverCard: React.FC<{
  property: Property;
  onClose: () => void;
}> = ({ property, onClose }) => {
  const imgSrc = property.image
    ? urlFor(property.image).width(480).height(320).fit('crop').url()
    : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: 0.96 }}
      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
      className="w-[320px] bg-white shadow-2xl overflow-hidden border border-[#E8E6E1]"
      style={{ pointerEvents: 'auto' }}
    >
      {/* Image */}
      <div className="relative h-[180px] overflow-hidden">
        {imgSrc ? (
          <img src={imgSrc} alt={property.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-[#F5F4F0] flex items-center justify-center">
            <MapPin className="w-8 h-8 text-[#8B8680]" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="bg-[#1B4332] text-white text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 font-medium">
            {property.propertyType}
          </span>
        </div>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-7 h-7 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
        >
          <X className="w-3.5 h-3.5 text-[#2C2C2C]" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div>
          <h3 className="text-lg font-serif text-[#2C2C2C] leading-tight mb-1">
            {property.title}
          </h3>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-[#8B8680]" />
            <span className="text-[11px] text-[#8B8680] tracking-wide">
              {property.city}, {property.state}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-[#E8E6E1]">
          <div>
            <span className="text-[9px] tracking-[0.15em] uppercase text-[#8B8680] block mb-0.5">
              Value
            </span>
            <span className="text-base font-serif text-[#2C2C2C]">{property.price}</span>
          </div>
          <div className="text-right">
            <span className="text-[9px] tracking-[0.15em] uppercase text-[#8B8680] block mb-0.5">
              Size
            </span>
            <span className="text-sm text-[#2C2C2C]">{property.squareFootage}</span>
          </div>
        </div>

        {property.walkScores && (
          <div className="flex items-center justify-around pt-3 border-t border-[#E8E6E1]">
            <WalkScoreRing score={property.walkScores.walk} size={36} strokeWidth={2.5} label="Walk" />
            {property.walkScores.transit !== null && (
              <WalkScoreRing score={property.walkScores.transit} size={36} strokeWidth={2.5} label="Transit" />
            )}
            {property.walkScores.bike !== null && (
              <WalkScoreRing score={property.walkScores.bike} size={36} strokeWidth={2.5} label="Bike" />
            )}
          </div>
        )}

        <div className="text-[9px] tracking-[0.15em] uppercase text-[#B8956B] pt-1 font-medium">
          Click for details →
        </div>
      </div>

      {/* Pointer */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r border-b border-[#E8E6E1] rotate-45" />
    </motion.div>
  );
};


// ─── Side Drawer (Property Detail) ───────────────────────────────────────────

const PropertyDrawer: React.FC<{
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}> = ({ property, isOpen, onClose }) => {
  if (!property) return null;

  const imgSrc = property.image
    ? urlFor(property.image).width(900).height(600).fit('crop').url()
    : '';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#2C2C2C]/20 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 35, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[480px] bg-[#FAF9F6] border-l border-[#E8E6E1] z-50 overflow-y-auto shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm border border-[#E8E6E1] hover:border-[#1B4332] transition-colors"
            >
              <X className="w-4 h-4 text-[#2C2C2C]" />
            </button>

            {/* Hero Image */}
            <div className="relative h-[300px] overflow-hidden">
              {imgSrc ? (
                <img src={imgSrc} alt={property.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-[#F5F4F0]" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8956B] font-medium mb-2 block">
                  {property.listingType || 'For Sale'} · {property.propertyType}
                </span>
                <h2 className="text-2xl font-serif text-white leading-tight">
                  {property.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Address & Price */}
              <div className="space-y-4">
                <div className="flex items-start gap-2 text-[#8B8680]">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">
                    {property.address}, {property.city}, {property.state} {property.zipCode || ''}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E8E6E1]">
                  <div>
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] block mb-1">
                      Asset Value
                    </span>
                    <p className="text-xl font-serif text-[#2C2C2C]">{property.price}</p>
                    {property.priceUsd && (
                      <p className="text-xs text-[#8B8680] mt-1">USD {property.priceUsd}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] block mb-1">
                      Size
                    </span>
                    <div className="flex items-center justify-end gap-1.5">
                      <Maximize2 className="w-4 h-4 text-[#8B8680]" />
                      <span className="text-sm font-medium text-[#2C2C2C]">{property.squareFootage}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="text-[9px] tracking-[0.15em] uppercase bg-[#1B4332] text-white px-3 py-1.5">
                  {property.propertyType}
                </span>
                <span className="text-[9px] tracking-[0.15em] uppercase bg-[#F5F4F0] text-[#2C2C2C] px-3 py-1.5 border border-[#E8E6E1]">
                  {property.listingType || 'For Sale'}
                </span>
                {property.yield && (
                  <span className="text-[9px] tracking-[0.15em] uppercase bg-[#B8956B] text-white px-3 py-1.5">
                    Yield: {property.yield}
                  </span>
                )}
                {property.occupancyRate && (
                  <span className="text-[9px] tracking-[0.15em] uppercase bg-[#F5F4F0] text-[#2C2C2C] px-3 py-1.5 border border-[#E8E6E1]">
                    {property.occupancyRate} Occupied
                  </span>
                )}
              </div>

              {/* Walk Scores */}
              {property.walkScores && (
                <div className="bg-white border border-[#E8E6E1] p-5 space-y-4">
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] font-medium">
                    Location Accessibility
                  </span>
                  <div className="flex items-center justify-around">
                    <WalkScoreRing score={property.walkScores.walk} size={56} strokeWidth={4} label="Walk" />
                    {property.walkScores.transit !== null && (
                      <WalkScoreRing score={property.walkScores.transit} size={56} strokeWidth={4} label="Transit" />
                    )}
                    {property.walkScores.bike !== null && (
                      <WalkScoreRing score={property.walkScores.bike} size={56} strokeWidth={4} label="Bike" />
                    )}
                  </div>
                  <p className="text-xs text-center text-[#8B8680] italic">
                    {getScoreLabel(property.walkScores.walk)}
                  </p>
                </div>
              )}

              {/* Investment Metrics */}
              {property.investment && (
                <div className="space-y-3">
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] font-medium flex items-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Investment Metrics
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    {property.investment.monthlyIncome && (
                      <div className="bg-[#F5F4F0] p-3">
                        <span className="text-[9px] text-[#8B8680] uppercase tracking-wide block mb-1">Monthly Income</span>
                        <span className="text-sm font-medium text-[#2C2C2C]">{property.investment.monthlyIncome}</span>
                      </div>
                    )}
                    {property.investment.annualIncome && (
                      <div className="bg-[#F5F4F0] p-3">
                        <span className="text-[9px] text-[#8B8680] uppercase tracking-wide block mb-1">Annual Income</span>
                        <span className="text-sm font-medium text-[#2C2C2C]">{property.investment.annualIncome}</span>
                      </div>
                    )}
                    {property.investment.totalROI && (
                      <div className="bg-[#1B4332] text-white p-3 col-span-2">
                        <span className="text-[9px] uppercase tracking-wide block mb-1 opacity-80">Target ROI</span>
                        <span className="text-lg font-serif">{property.investment.totalROI}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="space-y-3">
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] font-medium">
                  Executive Summary
                </span>
                <p className="text-sm text-[#5A5A5A] leading-relaxed font-light">
                  {property.description}
                </p>
              </div>

              {/* Features */}
              {property.features?.length > 0 && (
                <div className="space-y-3">
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] font-medium">
                    Key Attributes
                  </span>
                  <ul className="space-y-2">
                    {property.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#2C2C2C]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#B8956B] mt-1.5 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Details */}
              {property.details && property.details.length > 0 && (
                <div className="space-y-3">
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] font-medium flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5" />
                    Specifications
                  </span>
                  <div className="space-y-2">
                    {property.details.map((detail, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-[#E8E6E1] last:border-0">
                        <span className="text-xs text-[#8B8680] uppercase tracking-wide">{detail.label}</span>
                        <span className="text-sm text-[#2C2C2C]">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Broker */}
              <div className="bg-white border border-[#E8E6E1] p-5 space-y-4">
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] font-medium">
                  Mandated Advisor
                </span>
                <div className="flex items-start gap-4">
                  {property.broker?.photo ? (
                    <img
                      src={property.broker.photo}
                      alt={property.broker.name}
                      className="w-12 h-12 rounded-full object-cover border border-[#E8E6E1]"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[#F5F4F0] border border-[#E8E6E1]" />
                  )}
                  <div className="space-y-1 min-w-0 flex-1">
                    <p className="text-base font-serif text-[#2C2C2C]">{property.broker?.name}</p>
                    <div className="flex items-center gap-2 text-xs text-[#8B8680]">
                      <Mail className="w-3.5 h-3.5" />
                      <span className="truncate">{property.broker?.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#8B8680]">
                      <Phone className="w-3.5 h-3.5" />
                      <span>{property.broker?.phone}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-4">
                <NextLink
                  href={`/properties/${property.slug}`}
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 w-full h-12 bg-[#1B4332] text-white hover:bg-[#2D5A45] transition-colors text-[11px] tracking-[0.2em] uppercase font-medium"
                >
                  <FileText className="w-4 h-4" />
                  View Full Prospectus
                </NextLink>
                
                {property.brochureUrl && (
                  <a
                    href={property.brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full h-12 border border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white transition-colors text-[11px] tracking-[0.2em] uppercase font-medium"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                    Download Brochure
                  </a>
                )}
                
                <a
                  href={`mailto:${property.broker?.email}?subject=Investment Inquiry: ${property.title}`}
                  className="flex items-center justify-center gap-2 w-full h-12 border border-[#E8E6E1] hover:border-[#B8956B] hover:text-[#B8956B] transition-colors text-[11px] tracking-[0.2em] uppercase font-medium text-[#2C2C2C]"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Consultation
                </a>
              </div>

              {/* Disclaimer */}
              <div className="pt-6 border-t border-[#E8E6E1]">
                <p className="text-[10px] text-[#8B8680] leading-relaxed italic text-center">
                  Confidential investment materials. Qualified investors only. 
                  All figures indicative subject to due diligence.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// ─── Property Card (Grid View) ───────────────────────────────────────────────

const PropertyCard: React.FC<{
  property: Property;
  isHovered: boolean;
  onHover: (id: string | null) => void;
  onQuickView: (property: Property) => void;
  index: number;
}> = ({ property, isHovered, onHover, onQuickView, index }) => {
  const imgSrc = property.image
    ? urlFor(property.image).width(800).height(560).fit('crop').url()
    : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className={`group bg-white border border-[#E8E6E1] transition-all duration-500 ${
        isHovered ? 'shadow-xl -translate-y-1 border-[#B8956B]' : 'hover:shadow-lg hover:-translate-y-0.5'
      }`}
      onMouseEnter={() => onHover(property._id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Image */}
      <div className="relative h-[260px] overflow-hidden bg-[#F5F4F0]">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Building2 className="w-12 h-12 text-[#D0CCC4]" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-[#1B4332] text-white text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 font-medium">
            {property.propertyType}
          </span>
        </div>

        {/* Yield Badge */}
        {property.yield && (
          <div className="absolute top-4 right-4">
            <span className="bg-[#B8956B] text-white text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 font-medium">
              {property.yield} Yield
            </span>
          </div>
        )}

        {/* Walk Score */}
        {property.walkScores && (
          <div className="absolute bottom-4 right-4">
            <div className="bg-white/95 backdrop-blur-sm border border-[#E8E6E1] px-3 py-1.5 flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: getScoreColor(property.walkScores.walk) }}
              />
              <span className="text-[10px] tracking-[0.1em] uppercase text-[#2C2C2C] font-medium">
                Walk {property.walkScores.walk}
              </span>
            </div>
          </div>
        )}

        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-[#1B4332]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={() => onQuickView(property)}
            className="bg-white text-[#1B4332] px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-medium hover:bg-[#B8956B] hover:text-white transition-colors"
          >
            Quick View
          </button>
          <NextLink
            href={`/properties/${property.slug}`}
            className="border border-white text-white px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-medium hover:bg-white hover:text-[#1B4332] transition-colors"
          >
            Prospectus
          </NextLink>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-serif text-[#2C2C2C] group-hover:text-[#1B4332] transition-colors leading-tight mb-2">
            {property.title}
          </h3>
          <div className="flex items-center gap-1.5 text-[#8B8680]">
            <MapPin className="w-3.5 h-3.5" />
            <span className="text-[11px] tracking-wide">
              {property.city}, {property.state}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#E8E6E1]">
          <div>
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] block mb-0.5">
              Value
            </span>
            <p className="text-lg font-serif text-[#2C2C2C]">{property.price}</p>
          </div>
          <div className="text-right">
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] block mb-0.5">
              Size
            </span>
            <div className="flex items-center justify-end gap-1.5 text-[#2C2C2C]">
              <Maximize2 className="w-3.5 h-3.5 text-[#8B8680]" />
              <span className="text-sm">{property.squareFootage}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3">
          <div className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-[#8B8680]">
            <Shield className="w-3 h-3" />
            <span>Mandate Only</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onQuickView(property)}
              className="text-[10px] tracking-[0.15em] uppercase text-[#8B8680] hover:text-[#1B4332] transition-colors"
            >
              Details →
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Property Strip (Below Map) ──────────────────────────────────────────────

const PropertyStrip: React.FC<{
  properties: Property[];
  hoveredId: string | null;
  onHover: (id: string | null) => void;
  onClick: (property: Property) => void;
}> = ({ properties, hoveredId, onHover, onClick }) => {
  return (
    <div className="border-t border-[#E8E6E1] bg-white">
      <div className="overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex gap-0 min-w-max">
          {properties.map((property) => {
            const thumb = property.image
              ? urlFor(property.image).width(200).height(200).fit('crop').url()
              : '';

            return (
              <motion.div
                key={property._id}
                className={`flex-shrink-0 w-[300px] border-r border-[#E8E6E1] cursor-pointer transition-all duration-300 ${
                  hoveredId === property._id ? 'bg-[#F5F4F0]' : 'hover:bg-[#FAF9F6]'
                }`}
                onMouseEnter={() => onHover(property._id)}
                onMouseLeave={() => onHover(null)}
                onClick={() => onClick(property)}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex gap-4 p-4">
                  <div className="w-24 h-24 flex-shrink-0 overflow-hidden bg-[#F5F4F0]">
                    {thumb && (
                      <img src={thumb} alt={property.title} className="w-full h-full object-cover" loading="lazy" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1 space-y-1 py-1">
                    <h4 className="text-sm font-serif text-[#2C2C2C] truncate leading-tight">
                      {property.title}
                    </h4>
                    <div className="flex items-center gap-1 text-[#8B8680]">
                      <MapPin className="w-3 h-3" />
                      <span className="text-[10px] tracking-wide truncate">
                        {property.city}, {property.state}
                      </span>
                    </div>
                    <p className="text-sm font-serif text-[#2C2C2C] mt-2">{property.price}</p>
                    {property.walkScores && (
                      <div className="flex items-center gap-1.5 mt-1">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: getScoreColor(property.walkScores.walk) }}
                        />
                        <span className="text-[9px] text-[#8B8680] tracking-wide">
                          Walk {property.walkScores.walk}
                        </span>
                      </div>
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

// ─── Walk Score Fetcher ──────────────────────────────────────────────────────

async function fetchWalkScore(
  address: string,
  lat: number,
  lng: number
): Promise<WalkScores | null> {
  try {
    const params = new URLSearchParams({
      address: encodeURIComponent(address),
      lat: String(lat),
      lon: String(lng),
    });
    const res = await fetch(`/api/walkscore?${params}`);
    if (!res.ok) return null;
    const data = await res.json();
    return {
      walk: data.walkscore ?? 0,
      transit: data.transit?.score ?? null,
      bike: data.bike?.score ?? null,
    };
  } catch {
    return null;
  }
}

// ─── Main Properties Component ───────────────────────────────────────────────

interface PropertiesProps {
  initialData: Property[];
}

export default function Properties({ initialData }: PropertiesProps) {
  const [properties, setProperties] = useState<Property[]>(initialData || []);
  const [loading, setLoading] = useState(!initialData?.length);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedListing, setSelectedListing] = useState('All');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [drawerProperty, setDrawerProperty] = useState<Property | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isDarkMap, setIsDarkMap] = useState(false);
  const [viewMode, setViewMode] = useState<'split' | 'map' | 'grid'>('split');
  const [scrolled, setScrolled] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Enrich with walk scores on mount
  useEffect(() => {
    if (!initialData?.length) {
      // Fetch from Sanity if no initial data
      sanityClient
        .fetch(`*[_type == "property" && !(_id in path("drafts.**"))] | order(_createdAt desc) {
          _id, title, "slug": slug.current, subtitle, address, city, state, zipCode,
          price, priceKsh, priceUsd, priceGbp, priceEur, squareFootage,
          "propertyType": coalesce(propertyType, type, "Commercial"),
          listingType, occupancyRate, yield, description, features, details, investment,
          "location": select(
            defined(coordinates) => coordinates,
            defined(location) => {"lat": null, "lng": null, "area": location},
            {"lat": null, "lng": null}
          ),
          "image": images[0], "gallery": images,
          "brochureUrl": brochure.asset->url,
          broker { name, email, phone, "photo": photo.asset->url }
        }`)
        .then(async (data) => {
          setProperties(data);
          setLoading(false);
          // Fetch walk scores for properties with coordinates
          const enriched = await Promise.all(
            data.map(async (p: Property) => {
              if (!p.location?.lat || !p.location?.lng) return p;
              const scores = await fetchWalkScore(
                `${p.address}, ${p.city}, ${p.state}`,
                p.location.lat,
                p.location.lng
              );
              return scores ? { ...p, walkScores: scores } : p;
            })
          );
          setProperties(enriched);
        });
    } else {
      // Enrich initial data with walk scores
      Promise.all(
        initialData.map(async (p) => {
          if (!p.location?.lat || !p.location?.lng) return p;
          const scores = await fetchWalkScore(
            `${p.address}, ${p.city}, ${p.state}`,
            p.location.lat,
            p.location.lng
          );
          return scores ? { ...p, walkScores: scores } : p;
        })
      ).then(setProperties);
    }
  }, [initialData]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const propertyTypes = useMemo(
    () => ['All', ...Array.from(new Set(properties.map((p) => p.propertyType).filter(Boolean)))],
    [properties]
  );

  const filteredProperties = useMemo(
    () =>
      properties.filter((p) => {
        const matchType = selectedType === 'All' || p.propertyType === selectedType;
        const matchListing = selectedListing === 'All' || p.listingType === selectedListing;
        const q = searchTerm.toLowerCase();
        const matchSearch =
          !q ||
          p.title?.toLowerCase().includes(q) ||
          p.city?.toLowerCase().includes(q) ||
          p.address?.toLowerCase().includes(q);
        return matchType && matchListing && matchSearch;
      }),
    [properties, selectedType, selectedListing, searchTerm]
  );

  const handleOpenDrawer = useCallback((property: Property) => {
    setDrawerProperty(property);
    setDrawerOpen(true);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setDrawerOpen(false);
    setTimeout(() => setDrawerProperty(null), 300);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center gap-4">
        <div className="w-10 h-10 border-2 border-[#1B4332] border-t-transparent rounded-full animate-spin" />
        <p className="text-xs tracking-[0.3em] uppercase text-[#8B8680]">Loading Portfolio</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C2C2C]">
      
      {/* ── HERO SECTION ─────────────────────────────────────────────────────── */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#1B4332]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B4332]/90 via-[#1B4332]/70 to-[#1B4332]" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#B8956B] mb-6 font-medium">
              Private Placement
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-[1.1]">
              Institutional Real Estate
              <span className="block italic text-[#B8956B] font-light text-3xl md:text-4xl lg:text-5xl mt-3">
                Curated for Discerning Investors
              </span>
            </h1>
            <p className="text-[13px] text-white/70 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Exclusive commercial assets across prime African markets. 
              Mandate-only opportunities with full due diligence support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STICKY FILTER BAR ──────────────────────────────────────────────── */}
      <div
        className={`sticky top-0 z-40 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-[#E8E6E1] shadow-sm'
            : 'bg-[#FAF9F6] border-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B8680]" strokeWidth={1.5} />
              <input
                type="text"
                placeholder="Search assets by location or type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent border-b border-[#E8E6E1] focus:border-[#1B4332] pl-8 pr-8 py-2.5 text-[13px] text-[#2C2C2C] placeholder:text-[#8B8680]/60 outline-none transition-colors font-light tracking-wide"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')} 
                  className="absolute right-0 top-1/2 -translate-y-1/2 hover:text-[#1B4332] transition-colors"
                >
                  <X className="w-4 h-4 text-[#8B8680]" />
                </button>
              )}
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              {/* Listing Type */}
              {['All', 'For Sale', 'For Lease'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedListing(type)}
                  className={`px-4 py-2 text-[10px] tracking-[0.15em] uppercase transition-all duration-200 border ${
                    selectedListing === type
                      ? 'bg-[#1B4332] text-white border-[#1B4332]'
                      : 'bg-transparent text-[#8B8680] border-[#E8E6E1] hover:border-[#1B4332] hover:text-[#1B4332]'
                  }`}
                >
                  {type}
                </button>
              ))}

              {/* Property Type Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center gap-2 px-4 py-2 text-[10px] tracking-[0.15em] uppercase border border-[#E8E6E1] hover:border-[#1B4332] hover:text-[#1B4332] transition-colors text-[#8B8680]"
                >
                  <SlidersHorizontal className="w-3 h-3" />
                  {selectedType === 'All' ? 'Asset Type' : selectedType}
                  <ChevronDown className={`w-3 h-3 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isFilterOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      className="absolute top-full left-0 mt-1 bg-white border border-[#E8E6E1] shadow-xl z-50 min-w-[180px]"
                    >
                      {propertyTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => { setSelectedType(type); setIsFilterOpen(false); }}
                          className={`w-full text-left px-4 py-3 text-[11px] tracking-[0.1em] uppercase transition-colors ${
                            selectedType === type
                              ? 'bg-[#F5F4F0] text-[#1B4332] font-medium'
                              : 'hover:bg-[#FAF9F6] text-[#8B8680]'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="w-px h-6 bg-[#E8E6E1] hidden sm:block" />

              {/* View Mode */}
              <div className="flex items-center border border-[#E8E6E1]">
                {[
                  { key: 'split', icon: <Layers className="w-3.5 h-3.5" />, label: 'Split' },
                  { key: 'map', icon: <Map className="w-3.5 h-3.5" />, label: 'Map' },
                  { key: 'grid', icon: <LayoutGrid className="w-3.5 h-3.5" />, label: 'Grid' },
                ].map(({ key, icon }) => (
                  <button
                    key={key}
                    onClick={() => setViewMode(key as any)}
                    className={`px-3 py-2 transition-colors ${
                      viewMode === key ? 'bg-[#1B4332] text-white' : 'text-[#8B8680] hover:bg-[#F5F4F0]'
                    }`}
                    title={key}
                  >
                    {icon}
                  </button>
                ))}
              </div>

              {/* Map Theme Toggle */}
              {viewMode !== 'grid' && (
                <button
                  onClick={() => setIsDarkMap(!isDarkMap)}
                  className="px-3 py-2 text-[10px] tracking-[0.15em] uppercase border border-[#E8E6E1] hover:border-[#1B4332] transition-colors text-[#8B8680]"
                >
                  {isDarkMap ? '☀' : '☾'}
                </button>
              )}

              {/* Count */}
              <span className="text-[11px] text-[#8B8680] ml-2 hidden md:block tracking-wide">
                {filteredProperties.length} {filteredProperties.length === 1 ? 'Asset' : 'Assets'}
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
            <PropertyMap
              properties={filteredProperties}
              hoveredId={hoveredId}
              selectedId={drawerProperty?._id || null}
              onPinHover={setHoveredId}
              onPinClick={handleOpenDrawer}
              isDark={isDarkMap}
              onStyleChange={setIsDarkMap}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── PROPERTY STRIP ──────────────────────────────────────────────────── */}
      {viewMode !== 'grid' && filteredProperties.length > 0 && (
        <PropertyStrip
          properties={filteredProperties}
          hoveredId={hoveredId}
          onHover={setHoveredId}
          onClick={handleOpenDrawer}
        />
      )}

      {/* ── PROPERTY GRID ───────────────────────────────────────────────────── */}
      {viewMode !== 'map' && (
        <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16">
          {filteredProperties.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-lg font-serif text-[#8B8680] italic mb-6">
                No assets match your current criteria.
              </p>
              <button
                onClick={() => { setSelectedType('All'); setSelectedListing('All'); setSearchTerm(''); }}
                className="text-[11px] tracking-[0.2em] uppercase text-[#1B4332] border border-[#1B4332] px-6 py-3 hover:bg-[#1B4332] hover:text-white transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProperties.map((property, index) => (
                <PropertyCard
                  key={property._id}
                  property={property}
                  isHovered={hoveredId === property._id}
                  onHover={setHoveredId}
                  onQuickView={handleOpenDrawer}
                  index={index}
                />
              ))}
            </div>
          )}
        </section>
      )}

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="border-t border-[#E8E6E1] bg-white py-12">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-4 h-4 text-[#B8956B]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#8B8680]">Mandated Advisory</span>
          </div>
          <p className="text-xs text-[#8B8680] leading-relaxed max-w-2xl mx-auto font-light">
            All properties are subject to availability and require qualified investor verification.
            Full due diligence materials provided under NDA. Past performance is not indicative of future returns.
          </p>
        </div>
      </footer>

      {/* ── SIDE DRAWER ─────────────────────────────────────────────────────── */}
      <PropertyDrawer
        property={drawerProperty}
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