'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MapPin, DollarSign, Shield, Award,
  Globe, Filter, Landmark,
  ChevronRight, Search, Building,
  ArrowUpRight, BarChart3, Lock
} from 'lucide-react';

interface USProperty {
  _id: string;
  title?: string;
  slug?: string;
  price?: string;
  location?: string;
  city?: string;
  state?: string;
  type?: string;
  description?: string;
  yield?: string;
  features?: string[];
  mainImage?: string;
  images?: string[];
}

interface USPropertiesProps {
  data?: USProperty[];
}

const USProperties = ({ data = [] }: USPropertiesProps) => {
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProperties, setFilteredProperties] = useState<USProperty[]>(data);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const filtered = data.filter(property => {
      const matchesType = selectedType === 'All' || property.type === selectedType;
      const matchesSearch = (property.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            property.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            property.city?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            property.state?.toLowerCase().includes(searchTerm.toLowerCase())) || false;
      return matchesType && matchesSearch;
    });
    setFilteredProperties(filtered);
  }, [data, selectedType, searchTerm]);

  return (
    <div className="min-h-screen bg-[#05070a] text-white font-light selection:bg-amber-500/30">
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-24 px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px]bg-blue-600/5 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-500">
              US Institutional Desk
            </span>
          </motion.div>
        </div>
      </section>

      {/* TOOLBAR */}
      <div className="sticky top-0 z-50 bg-[#05070a]/80 backdrop-blur-xl border-y border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-8 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-8 flex-1">
            <div className="relative flex-1 max-w-md group">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-amber-500 transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="SEARCH BY CITY OR ASSET..." 
                className="w-full pl-8 pr-4 py-2 bg-transparent border-none text-[10px] font-bold tracking-[0.2em] focus:ring-0 placeholder:text-slate-700"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <nav className="hidden lg:flex items-center gap-8">
              {['All', 'Office', 'Hotel', 'Industrial', 'Retail', 'Mixed-Use'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative py-2 ${
                    selectedType === type ? 'text-amber-500' : 'text-slate-500 hover:text-white'
                  }`}
                >
                  {type}
                  {selectedType === type && <motion.div layoutId="underline-us" className="absolute bottom-0 left-0 w-full h-px bg-amber-500" />}
                </button>
              ))}
            </nav>
          </div>

          <button className="flex items-center gap-3 px-6 py-2 border border-white/10 text-[9px] font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
            <Filter size={14} /> Refine Portfolio
          </button>
        </div>
      </div>

      {/* ASSET GRID */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        {filteredProperties.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-slate-400 text-lg">No properties found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-px bg-white/10 border border-white/10">
            {filteredProperties.map((asset) => (
              <motion.div 
                layout
                key={asset._id} 
                className="group bg-[#05070a] grid grid-cols-1 lg:grid-cols-12 overflow-hidden hover:bg-white/[0.02] transition-colors"
              >
                {/* Image Column */}
                <div className="lg:col-span-4 relative h-[400px] lg:h-auto overflow-hidden">
                  <img 
                    src={asset.mainImage || asset.images?.[0] || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80'} 
                    alt={asset.title || 'US Property'}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#05070a] via-transparent to-transparent hidden lg:block" />
                  <div className="absolute top-8 left-8">
                    <span className="px-3 py-1 bg-amber-500 text-black text-[9px] font-black uppercase tracking-tighter">
                      {asset.type || 'Commercial'}
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-8 p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-3xl font-serif italic mb-2">{asset.title}</h3>
                        <div className="flex items-center gap-2 text-slate-500 text-[10px] uppercase tracking-widest">
                          <MapPin size={12} className="text-amber-500" />
                          {asset.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[9px] uppercase tracking-[0.2em] text-slate-500 mb-1">Asset Value</p>
                        <p className="text-2xl font-bold">{asset.price}</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xl">
                      {asset.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                      <div className="p-4 border border-white/5 bg-white/[0.01]">
                        <p className="text-[8px] uppercase tracking-widest text-slate-600 mb-1">Net Yield</p>
                        <p className="text-lg font-serif italic text-amber-500">{asset.yield}</p>
                      </div>
                      {(asset.features || []).slice(0, 3).map((feat, i) => (
                        <div key={i} className="p-4 border border-white/5">
                          <p className="text-[8px] uppercase tracking-widest text-slate-600 mb-1">Spec {i+1}</p>
                          <p className="text-xs font-bold uppercase tracking-tighter">{feat}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/5 pt-8">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-amber-500 uppercase tracking-widest">
                      <Lock size={12} /> Institutional Mandate
                    </div>
                    <Link 
                      href={`/us-properties/${asset.slug}`}
                      className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:text-amber-500 transition-colors group/link"
                    >
                      View Prospectus <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* REGULATORY SECTION */}
      <section className="bg-white/5 border-y border-white/10 py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <Shield className="text-amber-500" size={32} />
              <h4 className="text-xl font-serif italic">SEC Compliance</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Full adherence to SEC regulations for offshore and domestic institutional investors in US real estate.</p>
            </div>
            <div className="space-y-6">
              <Landmark className="text-amber-500" size={32} />
              <h4 className="text-xl font-serif italic">1031 Exchange</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Expert structuring advice on 1031 like-kind exchanges and tax-deferred investment vehicles.</p>
            </div>
            <div className="space-y-6">
              <Award className="text-amber-500" size={32} />
              <h4 className="text-xl font-serif italic">CREFC Standards</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Industry-leading reporting and compliance with Commercial Real Estate Finance Council standards.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default USProperties;
