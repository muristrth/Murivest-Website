'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, PoundSterling, Shield, Award, 
  Globe, Filter, Landmark,
  ChevronRight, Search, Building,
  ArrowUpRight, BarChart3, Lock, X
} from 'lucide-react';

interface UKProperty {
  _id: string;
  title?: string;
  slug?: string;
  price?: string;
  location?: string;
  city?: string;
  region?: string;
  postcode?: string;
  type?: string;
  description?: string;
  yield?: string;
  features?: string[];
  mainImage?: string;
  images?: string[];
}

interface UKPropertiesProps {
  data?: UKProperty[];
}

const UKProperties = ({ data = [] }: UKPropertiesProps) => {
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProperties, setFilteredProperties] = useState<UKProperty[]>(data);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const filtered = data.filter(property => {
      const matchesType = selectedType === 'All' || property.type === selectedType;
      const matchesSearch = (property.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            property.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            property.city?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            property.postcode?.toLowerCase().includes(searchTerm.toLowerCase())) || false;
      return matchesType && matchesSearch;
    });
    setFilteredProperties(filtered);
  }, [data, selectedType, searchTerm]);

  const propertyTypes = ['All', 'Office', 'Hotel', 'Retail', 'Industrial', 'Mixed-Use'];

  return (
    <div className="min-h-screen bg-[#05070a] text-white font-light selection:bg-amber-500/30">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative pt-24 md:pt-40 pb-16 md:pb-24 px-6 md:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/5 blur-[80px] md:blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6 md:mb-8"
          >
            <div className="h-px w-6 md:w-8 bg-amber-500" />
            <span className="text-[10px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-amber-500">
              Direct UK Institutional Desk
            </span>
          </motion.div>
        </div>
      </section>

      {/* 2. SOPHISTICATED TOOLBAR - Fixed position to prevent overlap */}
      <div className="sticky top-0 z-40 bg-[#05070a]/95 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            {/* Search */}
            <div className="relative flex-1 max-w-full md:max-w-md group order-2 md:order-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-amber-500 transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="SEARCH BY POSTCODE OR ASSET..." 
                className="w-full pl-10 pr-4 py-2.5 md:py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] md:text-[10px] font-bold tracking-[0.15em] md:tracking-[0.2em] focus:ring-1 focus:ring-amber-500/50 focus:border-amber-500/50 placeholder:text-slate-700 text-white"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Filter Toggle - Mobile */}
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center justify-center gap-2 px-4 py-2.5 border border-white/10 text-[9px] font-bold uppercase tracking-widest hover:bg-white/5 transition-all order-1"
            >
              <Filter size={14} /> 
              {selectedType === 'All' ? 'All Types' : selectedType}
            </button>

            {/* Filter Buttons - Desktop */}
            <nav className="hidden md:flex items-center gap-6 order-2">
              {propertyTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`text-[10px] font-bold uppercase tracking-[0.25em] transition-all relative py-2 ${
                    selectedType === type ? 'text-amber-500' : 'text-slate-500 hover:text-white'
                  }`}
                >
                  {type}
                  {selectedType === type && (
                    <motion.div 
                      layoutId="underline-uk" 
                      className="absolute bottom-0 left-0 w-full h-px bg-amber-500" 
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Refine Button */}
            <button className="hidden md:flex items-center gap-3 px-5 py-2 border border-white/10 text-[9px] font-bold uppercase tracking-widest hover:bg-white/5 transition-all order-3">
              <Filter size={14} /> Refine Portfolio
            </button>
          </div>

          {/* Mobile Filter Dropdown */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden border-t border-white/10 mt-3 pt-3"
              >
                <div className="flex flex-wrap gap-2">
                  {propertyTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setSelectedType(type);
                        setIsFilterOpen(false);
                      }}
                      className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition-all ${
                        selectedType === type 
                          ? 'bg-amber-500 text-black' 
                          : 'bg-white/5 border border-white/10 hover:bg-white/10'
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

      {/* 3. PREMIUM ASSET GRID */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        {filteredProperties.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-400 text-base md:text-lg">No properties found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-px bg-white/10 border border-white/10">
            {filteredProperties.map((asset) => (
              <motion.div 
                layout
                key={asset._id} 
                className="group bg-[#05070a] grid grid-cols-1 md:grid-cols-12 overflow-hidden hover:bg-white/[0.02] transition-colors"
              >
                {/* Image Column */}
                <div className="md:col-span-4 relative h-[280px] md:h-auto overflow-hidden">
                  <img 
                    src={asset.mainImage || asset.images?.[0] || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80'} 
                    alt={asset.title || 'UK Property'}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#05070a] via-transparent to-transparent hidden md:block" />
                  <div className="absolute top-4 left-4 md:top-8 md:left-8">
                    <span className="px-2.5 py-1 md:px-3 md:py-1 bg-amber-500 text-black text-[9px] md:text-[9px] font-black uppercase tracking-tighter">
                      {asset.type || 'Commercial'}
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="md:col-span-8 p-6 md:p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4 md:mb-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-serif italic mb-2">{asset.title}</h3>
                        <div className="flex items-center gap-2 text-slate-500 text-[10px] uppercase tracking-widest">
                          <MapPin size={12} className="text-amber-500" />
                          {asset.location}
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="text-[9px] uppercase tracking-[0.2em] text-slate-500 mb-1">Asset Value</p>
                        <p className="text-xl md:text-2xl font-bold">{asset.price}</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 md:mb-8 max-w-xl line-clamp-2">
                      {asset.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-12">
                      <div className="p-3 md:p-4 border border-white/5 bg-white/[0.01]">
                        <p className="text-[8px] uppercase tracking-widest text-slate-600 mb-1">Net Yield</p>
                        <p className="text-lg md:text-lg font-serif italic text-amber-500">{asset.yield}</p>
                      </div>
                      {(asset.features || []).slice(0, 3).map((feat, i) => (
                        <div key={i} className="p-3 md:p-4 border border-white/5">
                          <p className="text-[8px] uppercase tracking-widest text-slate-600 mb-1">Spec {i+1}</p>
                          <p className="text-xs md:text-xs font-bold uppercase tracking-tighter truncate">{feat}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/5 pt-6 md:pt-8">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-amber-500 uppercase tracking-widest">
                      <Lock size={12} /> Direct Investment
                    </div>
                    <Link 
                      href={`/uk-properties/${asset.slug}`}
                      className="flex items-center gap-2 md:gap-4 text-[10px] font-bold uppercase tracking-[0.25em] hover:text-amber-500 transition-colors group/link"
                    >
                      View Prospectus <ArrowUpRight size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform md:text-base" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* 4. INSTITUTIONAL FRAMEWORK */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
            <div className="space-y-4 md:space-y-6">
              <Shield className="text-amber-500 w-7 h-7 md:w-8 md:h-8" />
              <h4 className="text-lg md:text-xl font-serif italic">FCA Regulated</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Investment vehicles compliant with Financial Conduct Authority regulations for institutional and qualified investors.</p>
            </div>
            <div className="space-y-4 md:space-y-6">
              <Landmark className="text-amber-500 w-7 h-7 md:w-8 md:h-8" />
              <h4 className="text-lg md:text-xl font-serif italic">UK REIT Structure</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Tax-efficient investment through Real Estate Investment Trust structures with established track records.</p>
            </div>
            <div className="space-y-4 md:space-y-6">
              <Award className="text-amber-500 w-7 h-7 md:w-8 md:h-8" />
              <h4 className="text-lg md:text-xl font-serif italic">RICS Compliant</h4>
              <p className="text-slate-500 text-sm leading-relaxed">All properties valued in accordance with Royal Institution of Chartered Surveyors Red Book standards.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default UKProperties;
