'use client';

import React, { useState, useEffect } from 'react';
import NextLink from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Search, Filter, Lock, ArrowUpRight, 
  ChevronDown, X
} from 'lucide-react';
import { urlFor } from "@/sanity/lib/image";

interface Property {
  _id: string;
  title: string;
  mainImage: string;
  slug: string;
  price: string;
  location: string;
  type: string;
  description: string;
  yield?: string;
  features: string[];
  image: any;
}

const KEProperties = ({ data = [] }: { data: Property[] }) => {
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const propertyTypes = ['All', ...Array.from(new Set(data.map(p => p.type)))];
  
  const filteredProperties = data.filter(property => {
    const matchesType = selectedType === 'All' || property.type === selectedType;
    const matchesSearch = 
      (property.title ?? '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (property.location ?? '').toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#2C2C2C] font-light">
      
      {/* HERO - Club Grounds Style */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#2C2C2C]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C2C2C]/80 via-[#2C2C2C]/40 to-[#F8F7F4]" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#C4B59D] mb-6">
              Private Collection
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#F8F7F4] mb-6 leading-[1.1]">
              Commercial Assets<br />
              <span className="italic text-[#C4B59D] font-light">Available by Mandate</span>
            </h1>
            <p className="text-[15px] text-[#A8A39D] font-light max-w-2xl mx-auto leading-relaxed">
              A curated selection of institutional-grade commercial properties 
              and development sites. Available exclusively to qualified partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STICKY FILTER BAR - Club Directory Style */}
      <div className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-[#F8F7F4]/95 border-b border-[#E5E2DC] shadow-sm' : 'bg-[#F8F7F4]'
      }`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            
            {/* Search - Minimal */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B7355]" strokeWidth={1.5} />
              <input
                type="text"
                placeholder="Search by location or asset type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent border-b border-[#E5E2DC] focus:border-[#8B7355] pl-8 pr-4 py-3 text-[14px] text-[#2C2C2C] placeholder:text-[#A8A39D] outline-none transition-colors font-light"
              />
            </div>

            {/* Filter Pills - Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              {propertyTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-5 py-2 text-[11px] tracking-[0.15em] uppercase transition-all duration-300 border ${
                    selectedType === type
                      ? 'bg-[#8B7355] text-[#F8F7F4] border-[#8B7355]'
                      : 'bg-transparent text-[#5A5A5A] border-[#E5E2DC] hover:border-[#8B7355]'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Mobile Filter Toggle */}
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#8B7355] border border-[#E5E2DC] px-4 py-3"
            >
              <Filter className="w-4 h-4" />
              Filter
              <ChevronDown className={`w-3 h-3 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Mobile Filter Dropdown */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="pt-6 pb-2 flex flex-wrap gap-2">
                  {propertyTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setSelectedType(type);
                        setIsFilterOpen(false);
                      }}
                      className={`px-4 py-2 text-[10px] tracking-[0.15em] uppercase transition-all duration-300 border ${
                        selectedType === type
                          ? 'bg-[#8B7355] text-[#F8F7F4] border-[#8B7355]'
                          : 'bg-transparent text-[#5A5A5A] border-[#E5E2DC]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* PROPERTIES GRID - Club Honours Board Style */}
      <section className="py-16 lg:py-24 px-6 lg:px-16 max-w-[1400px] mx-auto">
        {filteredProperties.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-[15px] text-[#5A5A5A] font-light italic">No properties match your criteria.</p>
          </div>
        ) : (
          <div className="space-y-px bg-[#E5E2DC] border border-[#E5E2DC]">
            {filteredProperties.map((asset, index) => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={asset._id} 
                className="group bg-[#F8F7F4] hover:bg-[#FDFCFA] transition-colors duration-500"
              >
                {/* Mobile Layout: Stacked */}
                <div className="lg:hidden">
                  {/* Mobile Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={asset.mainImage}
                      className="w-full h-full object-cover"
                      alt={asset.title}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-[#8B7355] text-[#F8F7F4] text-[9px] tracking-[0.2em] uppercase font-medium">
                        {asset.type}
                      </span>
                    </div>
                  </div>
                  
                  {/* Mobile Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-serif text-[#2C2C2C] mb-2 group-hover:text-[#8B7355] transition-colors">
                        {asset.title}
                      </h3>
                      <div className="flex items-center gap-2 text-[#5A5A5A] text-[11px] uppercase tracking-wider">
                        <MapPin className="w-3 h-3 text-[#8B7355]" />
                        {asset.location}
                      </div>
                    </div>

                    <div className="flex justify-between items-end pt-4 border-t border-[#E5E2DC]">
                      <div>
                        <p className="text-[9px] tracking-[0.2em] uppercase text-[#8B7355] mb-1">Asset Value</p>
                        <p className="text-xl font-serif text-[#2C2C2C]">{asset.price}</p>
                      </div>
                      {asset.yield && (
                        <div className="text-right">
                          <p className="text-[9px] tracking-[0.2em] uppercase text-[#8B7355] mb-1">Net Yield</p>
                          <p className="text-lg font-serif text-[#8B7355]">{asset.yield}</p>
                        </div>
                      )}
                    </div>

                    <NextLink 
                      href={`/properties/${asset.slug}`}
                      className="flex items-center justify-between w-full pt-4 border-t border-[#E5E2DC] text-[10px] tracking-[0.2em] uppercase text-[#2C2C2C] hover:text-[#8B7355] transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </NextLink>
                  </div>
                </div>

                {/* Desktop Layout: Horizontal */}
                <div className="hidden lg:grid lg:grid-cols-12 gap-0">
                  {/* Image Column */}
                  <div className="lg:col-span-4 relative h-[320px] overflow-hidden">
                    <img 
                      src={asset.mainImage}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      alt={asset.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7F4] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-6 left-6">
                      <span className="px-3 py-1.5 bg-[#8B7355] text-[#F8F7F4] text-[9px] tracking-[0.2em] uppercase font-medium">
                        {asset.type}
                      </span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-8 p-8 xl:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className="max-w-lg">
                          <h3 className="text-2xl xl:text-3xl font-serif text-[#2C2C2C] mb-3 group-hover:text-[#8B7355] transition-colors duration-500 leading-tight">
                            {asset.title}
                          </h3>
                          <div className="flex items-center gap-2 text-[#5A5A5A] text-[11px] uppercase tracking-wider">
                            <MapPin className="w-3.5 h-3.5 text-[#8B7355]" />
                            {asset.location}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-[9px] tracking-[0.2em] uppercase text-[#8B7355] mb-1">Asset Value</p>
                          <p className="text-2xl font-serif text-[#2C2C2C]">{asset.price}</p>
                        </div>
                      </div>

                      {/* Specs Grid */}
                      <div className="grid grid-cols-2 xl:grid-cols-4 gap-px bg-[#E5E2DC] border border-[#E5E2DC] mb-8">
                        <div className="bg-[#F8F7F4] p-4 xl:p-5 group-hover:bg-[#FDFCFA] transition-colors">
                          <p className="text-[9px] tracking-[0.2em] uppercase text-[#8B7355] mb-2">Net Yield</p>
                          <p className="text-lg font-serif text-[#2C2C2C]">{asset.yield || '—'}</p>
                        </div>
                        {asset.features?.slice(0, 3).map((feat, i) => (
                          <div key={`${asset._id}-spec-${i}`} className="bg-[#F8F7F4] p-4 xl:p-5 group-hover:bg-[#FDFCFA] transition-colors">
                            <p className="text-[9px] tracking-[0.2em] uppercase text-[#8B7355] mb-2">Feature {i+1}</p>
                            <p className="text-[13px] text-[#2C2C2C] font-medium uppercase tracking-wide truncate">{feat}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-6 border-t border-[#E5E2DC]">
                      <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[#8B7355]">
                        <Lock className="w-3 h-3" /> 
                        <span>Mandate Only</span>
                      </div>
                      <NextLink 
                        href={`/properties/${asset.slug}`}
                        className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-[#2C2C2C] hover:text-[#8B7355] transition-colors group/link"
                      >
                        <span>View Prospectus</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      </NextLink>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* DISCRETION FOOTER */}
      <section className="py-16 border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 text-center">
          <p className="text-[12px] text-[#5A5A5A] font-light italic max-w-2xl mx-auto leading-relaxed">
            All properties are subject to availability and require qualified investor verification. 
            Full due diligence materials provided under NDA.
          </p>
        </div>
      </section>
    </div>
  );
};

export default KEProperties;