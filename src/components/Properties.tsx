'use client';

import React, { useState, useEffect } from 'react';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import { 
  MapPin, Search, Filter, Lock, ArrowUpRight, 
  BarChart3, Shield, Landmark, ChevronRight 
} from 'lucide-react';
import { urlFor } from "@/sanity/lib/image";

// 1. Define the interface for the Sanity data
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
  image: any; // This will handle the Sanity image object
}

// 2. Accept 'data' as a prop from the Server Component
const KEProperties = ({ data = [] }: { data: Property[] }) => {
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 3. Filter using the live data from props
  const filteredProperties = data.filter(property => {
    const matchesType = selectedType === 'All' || property.type === selectedType;
    const matchesSearch = 
      (property.title ?? '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (property.location ?? '').toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white font-light">
      {/* ... HERO HEADER & CONTROL BAR REMAIN THE SAME ... */}
      
      {/* (Sections 1 & 2 omitted for brevity, keeping your exact styling) */}

      {/* 3. PREMIUM ASSET GRID */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10">
          {filteredProperties.map((asset) => (
            <motion.div 
              layout
              key={asset._id} 
              className="group bg-[#05070a] grid grid-cols-1 lg:grid-cols-12 overflow-hidden hover:bg-white/[0.02] transition-colors"
            >
              {/* Image Column */}
              <div className="lg:col-span-4 relative h-[400px] lg:h-auto overflow-hidden">
                <img 
                  // Use urlFor to generate the Sanity image URL
                  src={asset.mainImage}
                  className="w-full h-full object-cover" 
                  alt={asset.title}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#05070a] via-transparent to-transparent hidden lg:block" />
                <div className="absolute top-8 left-8">
                  <span className="px-3 py-1 bg-amber-500 text-black text-[9px] font-black uppercase tracking-tighter">
                    {asset.type}
                  </span>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-8 p-12 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                    <div>
                      <h3 className="text-3xl font-serif italic mb-2 text-white group-hover:text-amber-500 transition-colors">
                        {asset.title}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-500 text-[10px] uppercase tracking-widest">
                        <MapPin size={12} className="text-amber-500" />
                        {asset.location}
                      </div>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-slate-500 mb-1">Asset Value</p>
                      <p className="text-2xl font-bold text-white">{asset.price}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    <div className="p-4 border border-white/5 bg-white/[0.01]">
                      <p className="text-[8px] uppercase tracking-widest text-slate-600 mb-1">Net Yield</p>
                      <p className="text-lg font-serif italic text-amber-500">{asset.yield || 'N/A'}</p>
                    </div>
                    {asset.features?.slice(0, 3).map((feat, i) => (
                      <div key={`${asset._id}-spec-${i}`} className="p-4 border border-white/5">
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
                  <NextLink 
                    // Link to the dynamic slug from Sanity
                    href={`/properties/${asset.slug}`} 
                    className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:text-amber-500 transition-colors group/link"
                  >
                    View Prospectus <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </NextLink>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ... REMAINING SECTIONS 4 & 5 ... */}
    </div>
  );
};

export default KEProperties;