'use client';

/**
 * MURIVEST PROPERTIES FOR RENT - COMMERCIAL LEASING VIEW
 * =======================================================
 * Commercial properties available for lease across African markets.
 */
import { PropertyForRent } from '@/types';
import React, { useState, useEffect, useMemo } from 'react';
import NextLink from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import {
  MapPin,
  Search,
  X,
  Maximize2,
  Calendar,
  Phone,
  Mail,
  Building2,
  Shield,
} from 'lucide-react';
import dynamic from 'next/dynamic';

const PropertyMap = dynamic(() => import('./PropertyMap'), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-muted animate-pulse" />,
});

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source: any) => builder.image(source);

interface PropertiesForRentProps {
  initialData: PropertyForRent[];
}

// Color Palette
const COLORS = {
  forest: '#1B4332',
  brass: '#B8956B',
  charcoal: '#2C2C2C',
  stone: '#8B8680',
  cream: '#FAF9F6',
};

// Property Card
const PropertyCard: React.FC<{
  property: PropertyForRent;
  index: number;
}> = ({ property, index }) => {
  const imgSrc = property.image
    ? urlFor(property.image).width(800).height(560).fit('crop').url()
    : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className="group bg-white border border-[#E8E6E1] transition-all duration-500 hover:shadow-lg hover:-translate-y-0.5"
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

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-[#1B4332] text-white text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 font-medium">
            {property.assetCategory}
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 font-medium ${
            property.status === 'Available' ? 'bg-[#22c55e] text-white' :
            property.status === 'Under Offer' ? 'bg-[#f59e0b] text-white' :
            'bg-[#6b7280] text-white'
          }`}>
            {property.status}
          </span>
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
              Monthly Rent
            </span>
            <p className="text-lg font-serif text-[#2C2C2C]">{property.rent}</p>
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

{/* Features */}
        {property.features && property.features.length > 0 && (
          <ul className="space-y-1">
            {property.features.slice(0, 3).map((feat, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[#5A5A5A]">
                <div className="w-1 h-1 rounded-full bg-[#B8956B] mt-1.5 flex-shrink-0" />
                {feat}
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center justify-between pt-3">
          <div className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-[#8B8680]">
            <Shield className="w-3 h-3" />
            <span>{property.furnished ? 'Furnished' : 'Unfurnished'}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-[#8B8680]">
            <Calendar className="w-3 h-3" />
            <span>{property.leaseTerm || 'N/A'}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function PropertiesForRent({ initialData }: PropertiesForRentProps) {
  const [properties, setProperties] = useState<PropertyForRent[]>(initialData || []);
  const [loading, setLoading] = useState(!initialData?.length);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(properties.map((p) => p.assetCategory).filter(Boolean)))],
    [properties]
  );

  const filteredProperties = useMemo(
    () =>
      properties.filter((p) => {
        const matchCategory = selectedCategory === 'All' || p.assetCategory === selectedCategory;
        const matchStatus = selectedStatus === 'All' || p.status === selectedStatus;
        const q = searchTerm.toLowerCase();
        const matchSearch =
          !q ||
          p.title?.toLowerCase().includes(q) ||
          p.city?.toLowerCase().includes(q) ||
          p.address?.toLowerCase().includes(q);
        return matchCategory && matchStatus && matchSearch;
      }),
    [properties, selectedCategory, selectedStatus, searchTerm]
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center gap-4">
        <div className="w-10 h-10 border-2 border-[#1B4332] border-t-transparent rounded-full animate-spin" />
        <p className="text-xs tracking-[0.3em] uppercase text-[#8B8680]">Loading Properties</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C2C2C]">
      {/* HERO */}
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
              Commercial Leasing
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-[1.1]">
              Properties For Rent
              <span className="block italic text-[#B8956B] font-light text-3xl md:text-4xl lg:text-5xl mt-3">
                Prime Commercial Spaces Available
              </span>
            </h1>
            <p className="text-[13px] text-white/70 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Retail shops, office spaces, industrial warehouses, and mixed-use developments
              available for lease across African commercial markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8E6E1]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B8680]" strokeWidth={1.5} />
              <input
                type="text"
                placeholder="Search by location or category..."
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

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              {/* Status Filter */}
              {['All', 'Available', 'Under Offer', 'Leased'].map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 text-[10px] tracking-[0.15em] uppercase transition-all duration-200 border ${
                    selectedStatus === status
                      ? 'bg-[#1B4332] text-white border-[#1B4332]'
                      : 'bg-transparent text-[#8B8680] border-[#E8E6E1] hover:border-[#1B4332] hover:text-[#1B4332]'
                  }`}
                >
                  {status}
                </button>
              ))}

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 text-[10px] tracking-[0.15em] uppercase border border-[#E8E6E1] hover:border-[#1B4332] transition-colors text-[#8B8680] bg-transparent outline-none"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'All' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* GRID */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16">
        {filteredProperties.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-lg font-serif text-[#8B8680] italic mb-6">
              No properties match your current criteria.
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSelectedStatus('All'); setSearchTerm(''); }}
              className="text-[11px] tracking-[0.2em] uppercase text-[#1B4332] border border-[#1B4332] px-6 py-3 hover:bg-[#1B4332] hover:text-white transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProperties.map((property, index) => (
              <PropertyCard key={property._id} property={property} index={index} />
            ))}
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E8E6E1] bg-white py-12">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-4 h-4 text-[#B8956B]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#8B8680]">Mandated Advisory</span>
          </div>
          <p className="text-xs text-[#8B8680] leading-relaxed max-w-2xl mx-auto font-light">
            All properties are subject to availability. Lease terms and conditions apply.
            Contact our leasing advisors for full details and viewings.
          </p>
        </div>
      </footer>
    </div>
  );
}