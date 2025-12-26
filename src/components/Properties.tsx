'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  MapPin, TrendingUp, Search, ArrowRight, Shield, Award, 
  Building2, Globe, LayoutGrid, List, Filter, Landmark,
  ExternalLink, Zap, ChevronRight, BarChart3
} from 'lucide-react';

const KEProperties = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isGridView, setIsGridView] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProperties = [
    {
      id: "best-western-meridian-hotel",
      title: "Best Western Meridian",
      location: "Nairobi CBD, Kenya",
      type: "Hospitality",
      price: "US$10.0M",
      yield: "15.2%",
      image: "https://content.knightfrank.com/property/hub2547666/images/a531920b-a627-43ed-905e-eacd1b941068-0.jpg?cio=true&w=1200",
      features: ["119 Rooms", "Stable Occupancy", "Conference Core"],
      status: "Prime Yield",
    },
    {
      id: "the-atrium-office-development",
      title: "The Atrium Development",
      location: "Kilimani, Nairobi",
      type: "Commercial",
      price: "US$13.5M",
      yield: "13.8%",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      features: ["161k sqft GLA", "6-Storey A-Grade", "221 Parking"],
      status: "Trophy Asset",
    },
    {
      id: "icd-industrial-complex",
      title: "ICD Logistics Hub",
      location: "Mombasa Road",
      type: "Industrial",
      price: "KSh 1.0B",
      yield: "14.8%",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
      features: ["3.0 Acres", "99k sqft GLA", "Strategic Access"],
      status: "Growth Asset",
    }
  ];

  const filteredProperties = allProperties.filter(property => {
    const matchesType = selectedType === 'All' || property.type === selectedType;
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          property.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#05070a] text-white font-light">
      
      {/* 1. CINEMATIC HERO HEADER */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-amber-500/20 via-transparent to-transparent" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12">

            {/* UK CROSS-BORDER BRIDGE */}
            <Link href="/uk-properties" className="group w-full lg:w-auto">
              <div className="relative p-8 bg-white/[0.02] border border-white/10 rounded-sm hover:border-amber-500/50 transition-all duration-700">
                <div className="flex items-center gap-6 mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                    <Globe className="text-blue-400 h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">UK Cross-Border</p>
                    <p className="text-sm font-medium text-white">Resident Buyer Services</p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-12">
                   <span className="text-xs text-amber-500 font-bold uppercase tracking-tighter">View UK Portfolio</span>
                   <ChevronRight className="h-4 w-4 text-amber-500 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL CONTROL BAR */}
      <div className="sticky top-0 z-50 bg-[#05070a]/80 backdrop-blur-2xl border-b border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6 w-full md:w-auto border-b md:border-b-0 border-white/10 pb-4 md:pb-0">
            <div className="flex items-center gap-4 text-slate-400">
              <Search size={16} className="text-amber-500" />
              <input 
                type="text" 
                placeholder="Search mandates..." 
                className="bg-transparent border-none outline-none text-xs tracking-widest uppercase w-48 placeholder:text-slate-700 focus:text-white transition-all"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden lg:flex gap-8">
              {['All', 'Commercial', 'Hospitality', 'Industrial'].map(type => (
                <button 
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-all ${selectedType === type ? 'text-amber-500' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="h-4 w-px bg-white/10 mx-2" />
            <button className="flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 hover:border-amber-500/50 text-[10px] font-bold uppercase tracking-widest transition-all">
              <Filter size={12} /> Refine Access
            </button>
          </div>
        </div>
      </div>

      {/* 3. THE MANDATE GRID */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5">
          {filteredProperties.map((property) => (
            <div key={property.id} className="group relative bg-[#05070a] p-8 hover:bg-white/[0.02] transition-all duration-700 overflow-hidden">
              
              {/* Image Area */}
              <div className="relative aspect-[4/5] mb-8 overflow-hidden bg-slate-900">
                <img 
                  src={property.image} 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-[9px] font-bold uppercase tracking-[0.2em] text-amber-500 border border-amber-500/20">
                    {property.status}
                  </span>
                </div>
              </div>

              {/* Data Area */}
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif italic text-white group-hover:text-amber-500 transition-colors">
                    {property.title}
                  </h3>
                  <div className="text-right">
                    <p className="text-[9px] uppercase tracking-widest text-slate-500 mb-1">Target Yield</p>
                    <p className="text-lg font-bold text-amber-500">{property.yield}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-500 text-[10px] uppercase tracking-widest mb-8">
                  <MapPin size={12} className="text-amber-500" />
                  {property.location}
                </div>

                <div className="grid grid-cols-1 gap-3 mb-10">
                  {property.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 text-[10px] text-slate-400 font-light tracking-wide border-b border-white/5 pb-2">
                      <div className="h-1 w-1 bg-amber-500 rounded-full" />
                      {feat}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-slate-600">Asset Value</p>
                    <p className="text-sm font-bold text-slate-200">{property.price}</p>
                  </div>
                  <Link href={`/properties/${property.id}`} className="p-4 bg-white/5 hover:bg-amber-500 group/btn transition-all">
                    <ArrowRight size={16} className="text-white group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FIDUCIARY STANDARDS SECTION */}
      <section className="py-32 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="h-10 w-10 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-8">
                <BarChart3 size={20} />
              </div>
              <h4 className="text-xl font-serif italic">Market Liquidity</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Strategic focus on Nairobi CBD and primary industrial corridors ensuring high resale liquidity 
                and institutional occupancy mandates.
              </p>
            </div>

            <div className="space-y-6">
              <div className="h-10 w-10 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-8">
                <Shield size={20} />
              </div>
              <h4 className="text-xl font-serif italic">Due Diligence</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Every asset undergoes title verification and structural audit under 
                RICS-certified surveyors before inclusion in the mandate.
              </p>
            </div>

            <div className="space-y-6">
              <div className="h-10 w-10 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-8">
                <Landmark size={20} />
              </div>
              <h4 className="text-xl font-serif italic">Currency Strategy</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Specialized advisory on USD-denominated leases to protect your internal 
                rate of return against local currency volatility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO CTA */}
      <section className="relative py-40 overflow-hidden text-center bg-[#080a0f]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto px-8">
          <h2 className="text-4xl lg:text-5xl font-serif italic text-white mb-8">Access Off-Market Mandates</h2>
          <p className="text-slate-500 mb-12 text-lg font-light leading-relaxed">
            Direct access to high-yielding Kenyan tranches currently restricted 
            from the public domain.
          </p>
          <button className="px-12 py-5 bg-amber-600 hover:bg-amber-500 text-black font-bold uppercase tracking-[0.3em] text-[10px] transition-all duration-500 shadow-2xl">
            Request Investment Brief
          </button>
        </div>
      </section>
    </div>
  );
};

export default KEProperties;