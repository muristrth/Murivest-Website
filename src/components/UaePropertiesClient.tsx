'use client';

/**
 * MURIVEST — UAE PORTFOLIO CLIENT VIEW
 * =====================================
 * Institutional-grade listing page for UAE properties.
 * Mirrors the Kenya Properties component architecture.
 * Categories: For Sale | For Rent | Off-Plan | Commercial | Portfolio
 */

import React, { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from '../lib/sanity/client';
import type { UaePropertyCard, UaeCategory } from '../lib/sanity/client';
import {
  Search, X, SlidersHorizontal, ChevronDown, MapPin,
  ArrowUpRight, LayoutGrid, Map, Layers, Building2,
  Shield, TrendingUp, Bookmark, Star, Home
} from 'lucide-react';

// ─── Helpers ─────────────────────────────────────────────────────────────────

const builder = imageUrlBuilder(sanityClient);
const urlFor  = (source: any) => builder.image(source);

const CATEGORY_LABELS: Record<UaeCategory, string> = {
  'for-sale':         'For Sale',
  'for-rent':         'For Rent',
  'off-plan':         'Off-Plan',
  'commercial-lease': 'Commercial',
  'portfolio':        'Portfolio',
};

const CATEGORY_COLORS: Record<UaeCategory, string> = {
  'for-sale':         '#1B4332',
  'for-rent':         '#2D5A45',
  'off-plan':         '#B8956B',
  'commercial-lease': '#5A4A3A',
  'portfolio':        '#8B7355',
};

const STATUS_COLORS: Record<string, string> = {
  'available':    '#1B4332',
  'under-offer':  '#B8956B',
  'reserved':     '#8B7355',
  'sold':         '#5A5A5A',
  'coming-soon':  '#2D5A45',
};

const EMIRATES = ['All Emirates', 'Dubai', 'Abu Dhabi', 'Sharjah', 'Ras Al Khaimah', 'Ajman'];
const CATEGORIES: ('all' | UaeCategory)[] = ['all', 'for-sale', 'for-rent', 'off-plan', 'commercial-lease', 'portfolio'];
const ASSET_TYPES = ['All Types', 'Apartment', 'Villa', 'Penthouse', 'Townhouse', 'Office', 'Retail', 'Industrial', 'Hospitality', 'Mixed-Use', 'Land'];

// ─── Property Card ────────────────────────────────────────────────────────────

const UaePropertyCard = React.memo(function UaePropertyCard({
  property,
  index,
  isHovered,
  onHover,
}: {
  property:  UaePropertyCard;
  index:     number;
  isHovered: boolean;
  onHover:   (id: string | null) => void;
}) {
  const imgSrc = property.coverImage
    ? urlFor(property.coverImage).width(800).height(520).fit('crop').quality(85).url()
    : null;

  const catColor = CATEGORY_COLORS[property.category] || '#1B4332';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.5) }}
      onMouseEnter={() => onHover(property._id)}
      onMouseLeave={() => onHover(null)}
      className="group relative bg-white border border-[#E8E6E1] overflow-hidden cursor-pointer"
      style={{ boxShadow: isHovered ? '0 12px 40px rgba(27,67,50,0.12)' : '0 1px 3px rgba(0,0,0,0.04)' }}
    >
      <Link href={`/uae-properties/${property.slug}`} className="block">

        {/* Image */}
        <div className="relative overflow-hidden" style={{ height: 260 }}>
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#1B4332] to-[#2D5A45] flex items-center justify-center">
              <Building2 size={40} className="text-[#B8956B]/40" strokeWidth={0.8} />
            </div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Category badge */}
          <div
            className="absolute top-4 left-4 px-3 py-1 text-[9px] tracking-[0.25em] uppercase font-semibold text-white"
            style={{ background: catColor }}
          >
            {CATEGORY_LABELS[property.category]}
          </div>

          {/* Badges */}
          <div className="absolute top-4 right-4 flex flex-col gap-1.5 items-end">
            {property.isFeatured && (
              <div className="bg-[#B8956B] text-white px-2.5 py-0.5 text-[8px] tracking-[0.2em] uppercase flex items-center gap-1">
                <Star size={8} fill="white" /> Featured
              </div>
            )}
            {property.isExclusive && (
              <div className="bg-[#1B4332] text-white px-2.5 py-0.5 text-[8px] tracking-[0.2em] uppercase flex items-center gap-1">
                <Shield size={8} /> Exclusive
              </div>
            )}
            {property.isOffMarket && (
              <div className="bg-[#5A4A3A] text-white px-2.5 py-0.5 text-[8px] tracking-[0.2em] uppercase">
                Off-Market
              </div>
            )}
          </div>

          {/* Status */}
          {property.status && property.status !== 'available' && (
            <div
              className="absolute bottom-4 left-4 px-2.5 py-1 text-[8px] tracking-[0.2em] uppercase text-white font-medium"
              style={{ background: STATUS_COLORS[property.status] || '#5A5A5A' }}
            >
              {property.status.replace('-', ' ')}
            </div>
          )}

          {/* Hover: Arrow */}
          <div className="absolute bottom-4 right-4 w-9 h-9 border border-white/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <ArrowUpRight size={16} className="text-white" strokeWidth={1.5} />
          </div>
        </div>

        {/* Body */}
        <div className="p-6">

          {/* Location */}
          <div className="flex items-center gap-1.5 mb-3">
            <MapPin size={11} className="text-[#B8956B] flex-shrink-0" strokeWidth={1.5} />
            <span className="text-[11px] text-[#8B8680] tracking-wide truncate">
              {property.community ? `${property.community}, ` : ''}{property.emirate}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-[18px] text-[#2C2C2C] leading-snug mb-1 group-hover:text-[#1B4332] transition-colors line-clamp-2">
            {property.title}
          </h3>

          {property.developmentName && (
            <p className="text-[11px] text-[#8B8680] mb-3 font-light">{property.developmentName}</p>
          )}

          {/* Specs row */}
          {(property.bedrooms || property.sizeSqft) && (
            <div className="flex items-center gap-4 py-3 border-y border-[#F0EDE8] mb-4">
              {property.bedrooms && (
                <div className="flex items-center gap-1.5">
                  <Home size={12} className="text-[#8B8680]" strokeWidth={1.5} />
                  <span className="text-[11px] text-[#5A5A5A]">{property.bedrooms} Bed</span>
                </div>
              )}
              {property.bathrooms && (
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-[#8B8680]">Bath</span>
                  <span className="text-[11px] text-[#5A5A5A]">{property.bathrooms}</span>
                </div>
              )}
              {property.sizeSqft && (
                <div className="flex items-center gap-1.5 ml-auto">
                  <span className="text-[11px] text-[#5A5A5A]">{property.sizeSqft} sq ft</span>
                </div>
              )}
            </div>
          )}

          {/* Price + Yield */}
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] mb-1">
                {property.category === 'for-rent' ? 'Annual Rent' : 'Asking Price'}
              </p>
              <p className="font-serif text-[20px] text-[#2C2C2C] leading-none">
                {property.priceAed || '— Upon Request'}
              </p>
              {property.priceUsd && (
                <p className="text-[10px] text-[#8B8680] mt-0.5">{property.priceUsd}</p>
              )}
            </div>

            {property.annualYield && (
              <div className="text-right">
                <p className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] mb-1">Yield</p>
                <div className="flex items-center gap-1 bg-[#1B4332]/6 border border-[#1B4332]/15 px-3 py-1.5">
                  <TrendingUp size={10} className="text-[#1B4332]" strokeWidth={2} />
                  <span className="text-[13px] font-semibold text-[#1B4332]">{property.annualYield}</span>
                </div>
              </div>
            )}
          </div>

          {/* Payment plan badge */}
          {property.paymentPlan && property.category === 'off-plan' && (
            <div className="mt-3 flex items-center gap-2 bg-[#B8956B]/8 border border-[#B8956B]/20 px-3 py-2">
              <Bookmark size={10} className="text-[#B8956B]" />
              <span className="text-[10px] text-[#8B7355] tracking-wide">{property.paymentPlan} Payment Plan</span>
            </div>
          )}

          {/* Golden Visa indicator */}
          {(property as UaePropertyCard & { investmentMetrics?: { goldenVisa?: boolean } }).investmentMetrics?.goldenVisa && (
            <div className="mt-2 flex items-center gap-1.5">
              <Star size={10} className="text-[#B8956B]" fill="#B8956B" />
              <span className="text-[10px] text-[#B8956B] tracking-wide">Golden Visa Eligible</span>
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  );
});

// ─── Main Component ───────────────────────────────────────────────────────────

export default function UaePropertiesClient({
  initialProperties,
}: {
  initialProperties: UaePropertyCard[];
}) {
  const [searchTerm,       setSearchTerm]       = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | UaeCategory>('all');
  const [selectedEmirate,  setSelectedEmirate]  = useState('All Emirates');
  const [selectedType,     setSelectedType]     = useState('All Types');
  const [viewMode,         setViewMode]         = useState<'grid' | 'list'>('grid');
  const [isFilterOpen,     setIsFilterOpen]     = useState(false);
  const [isEmirateOpen,    setIsEmirateOpen]    = useState(false);
  const [hoveredId,        setHoveredId]        = useState<string | null>(null);
  const [sortBy,           setSortBy]           = useState<'featured' | 'newest' | 'price-asc' | 'price-desc'>('featured');

  // ── Filtering ─────────────────────────────────────────────────────────────

  const filtered = useMemo(() => {
    let list = [...initialProperties];

    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.community?.toLowerCase().includes(q) ||
        p.emirate?.toLowerCase().includes(q) ||
        p.developer?.toLowerCase().includes(q) ||
        p.developmentName?.toLowerCase().includes(q) ||
        p.propertyType?.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== 'all') {
      list = list.filter(p => p.category === selectedCategory);
    }

    if (selectedEmirate !== 'All Emirates') {
      list = list.filter(p => p.emirate === selectedEmirate);
    }

    if (selectedType !== 'All Types') {
      list = list.filter(p => p.propertyType === selectedType);
    }

    // Sort
    if (sortBy === 'newest') {
      list.sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''));
    } else if (sortBy === 'featured') {
      list.sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured));
    }

    return list;
  }, [initialProperties, searchTerm, selectedCategory, selectedEmirate, selectedType, sortBy]);

  const clearFilters = useCallback(() => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedEmirate('All Emirates');
    setSelectedType('All Types');
    setSortBy('featured');
  }, []);

  const activeFilters = [
    selectedCategory !== 'all',
    selectedEmirate !== 'All Emirates',
    selectedType !== 'All Types',
    searchTerm.length > 0,
  ].filter(Boolean).length;

  // ── Counts by category ────────────────────────────────────────────────────

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: initialProperties.length };
    for (const p of initialProperties) {
      counts[p.category] = (counts[p.category] || 0) + 1;
    }
    return counts;
  }, [initialProperties]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C2C2C]">

      {/* ── HERO BANNER ───────────────────────────────────────────────────── */}
      <section className="relative bg-[#1B4332] overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #B8956B 0, #B8956B 1px, transparent 0, transparent 50%)', backgroundSize: '12px 12px' }} />

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link href="/" className="text-[10px] tracking-[0.25em] uppercase text-[#B8956B]/70 hover:text-[#B8956B] transition-colors">Murivest</Link>
            <span className="text-[#B8956B]/30">/</span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#B8956B]/70">UAE Portfolio</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <p className="text-[9px] tracking-[0.4em] uppercase text-[#B8956B] mb-3 font-medium">
                Mandated Advisory · United Arab Emirates
              </p>
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-[#F8F7F4] leading-[1.1] mb-4">
                UAE Property
                <span className="block font-light italic text-[#C4B59D]">Portfolio</span>
              </h1>
              <p className="text-[14px] text-[#9EA89F] max-w-lg leading-relaxed font-light">
                Institutional-grade residential and commercial real estate across Dubai, Abu Dhabi
                and the Emirates — curated for qualified cross-border investors.
              </p>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 lg:gap-12">
              {[
                { label: 'Total Assets',   value: initialProperties.length.toString() },
                { label: 'For Sale',       value: (categoryCounts['for-sale'] || 0).toString() },
                { label: 'For Rent',       value: (categoryCounts['for-rent'] || 0).toString() },
                { label: 'Off-Plan',       value: (categoryCounts['off-plan'] || 0).toString() },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <p className="font-serif text-3xl text-[#F8F7F4]">{value}</p>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#B8956B] mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ────────────────────────────────────────────────────── */}
      <div className="sticky top-0 z-40 bg-white border-b border-[#E8E6E1] shadow-sm">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-4">

          {/* Category tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 mb-3 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 text-[10px] tracking-[0.15em] uppercase font-medium transition-all duration-200 border ${
                  selectedCategory === cat
                    ? 'bg-[#1B4332] text-white border-[#1B4332]'
                    : 'text-[#8B8680] border-[#E8E6E1] hover:border-[#1B4332] hover:text-[#1B4332] bg-transparent'
                }`}
              >
                {cat === 'all' ? 'All' : CATEGORY_LABELS[cat]}
                {' '}
                <span className={`ml-1 ${selectedCategory === cat ? 'text-white/70' : 'text-[#C4B59D]'}`}>
                  ({categoryCounts[cat] || 0})
                </span>
              </button>
            ))}
          </div>

          {/* Search + Filters row */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="relative flex-1 min-w-[200px] max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8B8680]" strokeWidth={1.5} />
              <input
                type="text"
                placeholder="Search by area, development, type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#FAF9F6] border border-[#E8E6E1] focus:border-[#1B4332] pl-9 pr-8 py-2 text-[12px] text-[#2C2C2C] placeholder:text-[#8B8680]/60 outline-none transition-colors"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2">
                  <X className="w-3.5 h-3.5 text-[#8B8680]" />
                </button>
              )}
            </div>

            {/* Emirate Dropdown */}
            <div className="relative">
              <button
                onClick={() => { setIsEmirateOpen(!isEmirateOpen); setIsFilterOpen(false); }}
                className="flex items-center gap-2 px-4 py-2 text-[10px] tracking-[0.15em] uppercase border border-[#E8E6E1] hover:border-[#1B4332] hover:text-[#1B4332] transition-colors text-[#8B8680]"
              >
                <MapPin className="w-3 h-3" />
                {selectedEmirate}
                <ChevronDown className={`w-3 h-3 transition-transform ${isEmirateOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isEmirateOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }}
                    className="absolute top-full left-0 mt-1 bg-white border border-[#E8E6E1] shadow-xl z-50 min-w-[180px]"
                  >
                    {EMIRATES.map((em) => (
                      <button key={em} onClick={() => { setSelectedEmirate(em); setIsEmirateOpen(false); }}
                        className={`w-full text-left px-4 py-2.5 text-[11px] tracking-[0.1em] uppercase transition-colors ${selectedEmirate === em ? 'bg-[#F5F4F0] text-[#1B4332] font-medium' : 'hover:bg-[#FAF9F6] text-[#8B8680]'}`}
                      >{em}</button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Asset Type Dropdown */}
            <div className="relative">
              <button
                onClick={() => { setIsFilterOpen(!isFilterOpen); setIsEmirateOpen(false); }}
                className="flex items-center gap-2 px-4 py-2 text-[10px] tracking-[0.15em] uppercase border border-[#E8E6E1] hover:border-[#1B4332] hover:text-[#1B4332] transition-colors text-[#8B8680]"
              >
                <SlidersHorizontal className="w-3 h-3" />
                {selectedType}
                <ChevronDown className={`w-3 h-3 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }}
                    className="absolute top-full left-0 mt-1 bg-white border border-[#E8E6E1] shadow-xl z-50 min-w-[200px]"
                  >
                    {ASSET_TYPES.map((type) => (
                      <button key={type} onClick={() => { setSelectedType(type); setIsFilterOpen(false); }}
                        className={`w-full text-left px-4 py-2.5 text-[11px] tracking-[0.1em] uppercase transition-colors ${selectedType === type ? 'bg-[#F5F4F0] text-[#1B4332] font-medium' : 'hover:bg-[#FAF9F6] text-[#8B8680]'}`}
                      >{type}</button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="w-px h-5 bg-[#E8E6E1] hidden sm:block" />

            {/* View toggle */}
            <div className="flex items-center border border-[#E8E6E1]">
              {[
                { key: 'grid', icon: <LayoutGrid className="w-3.5 h-3.5" /> },
                { key: 'list', icon: <Layers className="w-3.5 h-3.5" /> },
              ].map(({ key, icon }) => (
                <button
                  key={key}
                  onClick={() => setViewMode(key as any)}
                  className={`px-3 py-2 transition-colors ${viewMode === key ? 'bg-[#1B4332] text-white' : 'text-[#8B8680] hover:bg-[#F5F4F0]'}`}
                >{icon}</button>
              ))}
            </div>

            {/* Count + clear */}
            <span className="text-[11px] text-[#8B8680] hidden md:block tracking-wide">
              {filtered.length} {filtered.length === 1 ? 'Asset' : 'Assets'}
            </span>

            {activeFilters > 0 && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-[#B8956B] hover:text-[#1B4332] transition-colors"
              >
                <X className="w-3 h-3" />
                Clear ({activeFilters})
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── GRID / LIST ───────────────────────────────────────────────────── */}
      <main className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-32">
            <p className="font-serif text-2xl text-[#8B8680] italic mb-4">
              No assets match your current criteria.
            </p>
            <p className="text-[13px] text-[#8B8680] mb-8">
              Adjust your filters or explore our full portfolio.
            </p>
            <button
              onClick={clearFilters}
              className="text-[11px] tracking-[0.2em] uppercase text-[#1B4332] border border-[#1B4332] px-8 py-3 hover:bg-[#1B4332] hover:text-white transition-colors"
            >
              View All Assets
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((property, index) => (
              <UaePropertyCard
                key={property._id}
                property={property}
                index={index}
                isHovered={hoveredId === property._id}
                onHover={setHoveredId}
              />
            ))}
          </div>
        ) : (
          // List view
          <div className="space-y-4">
            {filtered.map((property, index) => (
              <motion.div
                key={property._id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: Math.min(index * 0.04, 0.4) }}
              >
                <Link
                  href={`/uae-properties/${property.slug}`}
                  className="group flex gap-0 bg-white border border-[#E8E6E1] overflow-hidden hover:border-[#1B4332] transition-colors duration-300"
                >
                  {/* Thumbnail */}
                  <div className="relative flex-shrink-0 overflow-hidden" style={{ width: 200, height: 140 }}>
                    {property.coverImage ? (
                      <img
                        src={urlFor(property.coverImage).width(400).height(280).fit('crop').url()}
                        alt={property.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#1B4332] flex items-center justify-center">
                        <Building2 size={28} className="text-[#B8956B]/40" strokeWidth={0.8} />
                      </div>
                    )}
                    <div
                      className="absolute top-3 left-3 px-2 py-0.5 text-[8px] tracking-[0.2em] uppercase text-white font-semibold"
                      style={{ background: CATEGORY_COLORS[property.category] }}
                    >
                      {CATEGORY_LABELS[property.category]}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex items-center justify-between px-6 py-4">
                    <div className="flex-1 min-w-0 pr-6">
                      <div className="flex items-center gap-1.5 mb-1">
                        <MapPin size={10} className="text-[#B8956B]" strokeWidth={1.5} />
                        <span className="text-[10px] text-[#8B8680] tracking-wide">
                          {property.community ? `${property.community}, ` : ''}{property.emirate}
                        </span>
                      </div>
                      <h3 className="font-serif text-[17px] text-[#2C2C2C] group-hover:text-[#1B4332] transition-colors truncate">
                        {property.title}
                      </h3>
                      {property.developmentName && (
                        <p className="text-[11px] text-[#8B8680] mt-0.5">{property.developmentName}</p>
                      )}
                      {(property.bedrooms || property.sizeSqft) && (
                        <div className="flex items-center gap-4 mt-2">
                          {property.bedrooms && <span className="text-[11px] text-[#5A5A5A]">{property.bedrooms} Bed</span>}
                          {property.sizeSqft && <span className="text-[11px] text-[#5A5A5A]">{property.sizeSqft} sq ft</span>}
                          {property.propertyType && <span className="text-[10px] text-[#8B8680]">{property.propertyType}</span>}
                        </div>
                      )}
                    </div>

                    <div className="text-right flex-shrink-0">
                      <p className="font-serif text-[18px] text-[#2C2C2C]">{property.priceAed || 'POA'}</p>
                      {property.annualYield && (
                        <p className="text-[11px] text-[#1B4332] font-semibold mt-1">{property.annualYield} yield</p>
                      )}
                      <ArrowUpRight
                        size={16}
                        className="text-[#B8956B] mt-2 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      {/* ── DISCLAIMER ────────────────────────────────────────────────────── */}
      <footer className="border-t border-[#E8E6E1] bg-white py-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shield className="w-4 h-4 text-[#B8956B]" strokeWidth={1.5} />
            <span className="text-[9px] tracking-[0.3em] uppercase text-[#8B8680]">Mandated Advisory</span>
          </div>
          <p className="text-[11px] text-[#8B8680] leading-relaxed max-w-2xl mx-auto font-light">
            All properties are subject to availability and require verified investor status.
            Full due diligence documentation provided under NDA. Past performance is not indicative of future returns.
            Murivest operates in compliance with UAE RERA regulations.
          </p>
        </div>
      </footer>

      {/* Backdrop for dropdowns */}
      {(isFilterOpen || isEmirateOpen) && (
        <div className="fixed inset-0 z-30" onClick={() => { setIsFilterOpen(false); setIsEmirateOpen(false); }} />
      )}
    </div>
  );
}