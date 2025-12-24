'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  MapPin, TrendingUp, Search, ArrowRight, Shield, Award, 
  Building2, Globe, LayoutGrid, List, Filter, Landmark,
  ExternalLink, Zap
} from 'lucide-react';

const KEProperties = () => {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isGridView, setIsGridView] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProperties = [
    {
      id: "best-western-meridian-hotel",
      title: "Best Western Meridian Hotel",
      location: "Nairobi CBD, Kenya",
      type: "Hotel",
      price: "US$10M / Ksh 1.2B",
      yield: "15.2%",
      image: "https://content.knightfrank.com/property/hub2547666/images/a531920b-a627-43ed-905e-eacd1b941068-0.jpg?cio=true&w=1200",
      features: ["119 Rooms", "3.5 Star Hotel", "Conference Facilities"],
      status: "Available",
      description: "Landmark hotel property in Nairobi CBD with excellent occupancy rates.",
      roi: "18% Projected ROI"
    },
    {
      id: "the-atrium-office-development",
      title: "The Atrium Office Development",
      location: "Chaka Road, Kilimani, Kenya",
      type: "Commercial",
      price: "US$13.5M / Ksh 2B",
      yield: "13.8%",
      image: "/p7/Screenshot 2025-08-27 234422.png",
      features: ["161,019 sqft", "6 Storey Modern Office", "221 Parking Bays"],
      status: "Trophy Asset",
      description: "Excellently designed office development with international specifications.",
      roi: "Premium Location"
    },
    {
      id: "icd-industrial-complex",
      title: "ICD Industrial Complex",
      location: "Mombasa Road, Nairobi, Kenya",
      type: "Industrial",
      price: "KSh 1 Billion",
      yield: "14.8%",
      image: "/p/IMG-20250813-WA0001.jpg",
      features: ["3 Acres", "99,300 sqft GLA", "Motor Showroom"],
      status: "High Demand",
      description: "Prime industrial site with strategic transport connectivity.",
      roi: "25% Annual Growth"
    }
  ];

  const filteredProperties = allProperties.filter(property => {
    const matchesType = selectedType === 'All' || property.type === selectedType;
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          property.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 1. HERO & UK BRIDGE HEADER */}
      <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-10">
          
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Institutional <span className="text-amber-500">Asset</span> Portfolio
            </h1>
            <p className="text-gray-400 text-lg lg:text-xl font-light">
              Access off-market commercial yields and trophy assets across the world's most resilient markets.
            </p>
          </div>

          {/* UK PORTFOLIO BRIDGE BUTTON */}
          <Link href="/uk-properties" className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-amber-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative flex flex-col items-center bg-slate-900 border border-white/10 p-6 rounded-2xl transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-2">
                    <Globe className="text-blue-400 h-6 w-6" />
                    <span className="text-sm font-bold tracking-widest uppercase text-white">UK Resident Buyer?</span>
                </div>
                <div className="flex items-center gap-4 text-amber-500">
                    <span className="text-lg font-bold">View UK Properties Only</span>
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </div>
                <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-tighter italic">Stamp Duty & Buy-to-Let Specialist Advice Included</p>
            </button>
          </Link>
        </div>
      </section>

      {/* 2. STICKY FILTER BAR */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 bg-slate-100 rounded-full px-5 py-2.5 border border-slate-200 flex-1 max-w-md group">
            <Search className="text-slate-400 h-4 w-4 group-focus-within:text-amber-500 transition-colors" />
            <input 
                type="text" 
                placeholder="Search Nairobi, Naivasha, Mombasa..." 
                className="bg-transparent border-none outline-none text-sm w-full"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
                <button onClick={() => setIsGridView(true)} className={`p-2.5 rounded-lg ${isGridView ? 'bg-white shadow-sm text-slate-950' : 'text-slate-400'}`}><LayoutGrid size={18}/></button>
                <button onClick={() => setIsGridView(false)} className={`p-2.5 rounded-lg ${!isGridView ? 'bg-white shadow-sm text-slate-950' : 'text-slate-400'}`}><List size={18}/></button>
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-950 text-white rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-slate-800 transition-all">
                <Filter size={16} /> Filters
            </button>
          </div>
        </div>
      </div>

      {/* 3. PROPERTY GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className={isGridView ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" : "flex flex-col gap-8"}>
          {filteredProperties.map((property) => (
            <div key={property.id} className="group relative bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2">
              
              <div className="relative h-72 overflow-hidden">
                <img src={property.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                
                <div className="absolute top-6 left-6 flex gap-2">
                    <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase rounded-full tracking-widest">
                        {property.type}
                    </span>
                    <span className="px-4 py-1.5 bg-emerald-500 text-white text-[10px] font-black uppercase rounded-full tracking-widest">
                        {property.status}
                    </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
                    <div>
                        <div className="text-[10px] text-slate-300 uppercase font-bold tracking-[0.2em] mb-1">Asset Value</div>
                        <div className="text-2xl font-bold tracking-tight">{property.price}</div>
                    </div>
                    <div className="text-right">
                        <div className="text-[10px] text-amber-400 uppercase font-bold tracking-[0.2em] mb-1">Net Yield</div>
                        <div className="text-2xl font-bold">{property.yield}</div>
                    </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-amber-600 transition-colors">
                    {property.title}
                </h3>
                <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-6">
                    <MapPin size={16} className="text-amber-500" />
                    {property.location}
                </div>

                <div className="space-y-3 mb-8">
                    {property.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-600 uppercase tracking-tighter">
                            <Zap size={14} className="text-amber-500" />
                            {feat}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Link href={`/properties/${property.id}`} className="flex items-center justify-center bg-slate-950 text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-slate-800 transition-all">
                        Property Details
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PERFORMANCE & COMPLIANCE - SHARED DESIGN LANGUAGE */}
      <section className="bg-white py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-amber-500/30 transition-all">
                    <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-amber-500 transition-colors">
                        <Award className="text-amber-600 group-hover:text-white" size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">Market Liquidity</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">
                        Strategic focus on Nairobi CBD and primary industrial corridors ensuring high resale liquidity and stable occupancy.
                    </p>
                </div>

                <div className="group p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-amber-500/30 transition-all">
                    <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-amber-500 transition-colors">
                        <Shield className="text-amber-600 group-hover:text-white" size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">Due Diligence</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">
                        Every asset undergoes rigorous title verification and structural audit under RICS-certified Kenyan surveyors.
                    </p>
                </div>

                <div className="group p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-amber-500/30 transition-all">
                    <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-amber-500 transition-colors">
                        <Landmark className="text-amber-600 group-hover:text-white" size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">Currency Hedging</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">
                        Advisory on US Dollar-denominated leases to protect institutional returns against local currency fluctuations.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 5. FOOTER CTA */}
      <section className="py-24 bg-slate-950 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />
        <div className="relative max-w-3xl mx-auto px-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Explore Off-Market Kenyan Assets</h2>
            <p className="text-slate-400 mb-10 text-lg">Direct access to high-yielding mandates currently not on the public market.</p>
            <button className="px-10 py-5 bg-amber-500 text-slate-950 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20">
                Contact Our Investment Desk
            </button>
        </div>
      </section>
    </div>
  );
};

export default KEProperties;