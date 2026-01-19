'use client';

import React, { useState, useEffect } from 'react';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import { 
  MapPin, Search, ArrowRight, Shield, 
  Landmark, Filter, ChevronRight, BarChart3,
  Lock, ArrowUpRight
} from 'lucide-react';
import { title } from 'process';

const KEProperties = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProperties = [
    {
      id: "best-western-meridian-hotel",
      title: "The Best Western Meridian Hotel For Sale",
      location: "Nairobi CBD, Kenya",
      type: "Hospitality",
      price: "US$10.0M",
      yield: "15.2%",
      image: "https://content.knightfrank.com/property/hub2547666/images/a531920b-a627-43ed-905e-eacd1b941068-0.jpg?cio=true&w=1200",
      features: ["119 Rooms", "Stable Occupancy", "Conference Core"],
      description: "A premier hospitality asset in the heart of Nairobi, offering stable cash flows and significant yield potential.",
      status: "Prime Yield",
    },
    {
      id: "kenya-comfort-hotel",
      title: "Kenya Comfort Hotel For Sale- Strategic Sale",
      location: "Nairobi CBD, Kenya",
      type: "Hospitality",
      price: "KSh 680M",
      yield: "14.0%",
      image: "https://www.africanparadisesafaris.com/images/kenya-comfort-hotel.jpg",
      features: ["100 Rooms", "Central Location", "Established Clientele"],
      description: "Well-established hotel with a strong market presence in Nairobi's bustling central business district.",
      status: "Established Asset",
    },
    {
      id: 'lynwood-court-westlands',
      title: 'Lynwood Court Building For Sale',
      location: 'Waiyaki Way, Westlands, Nairobi',
      price: "KSh 400M",
      image: 'https://content.knightfrank.com/property/kecom311/images/e80477fd-d2ca-43da-a099-44a0f81bd29b-0.jpg?cio=true&w=1200',
      yield: "18%",
      type: 'Commercial',
      features: ["161k sqft GLA", "6-Storey A-Grade", "221 Parking"],
      description: "Grade-A office development positioned along Nairobi's primary transit corridor with high-profile corporate tenants.",
      status: "Core Asset",
    },
    {
      id: 'basl-house-nairobi-cbd',
      title: 'BASL House - Prime CBD Investment',
      location: 'Kumasi Road, Nairobi CBD',
      price: "Ksh190M",
      image: 'https://content.knightfrank.com/property/hub2448515/images/89393bfa-52be-4c67-8bbf-aee9cf35b19d-0.jpg?cio=true&w=1200',
      type: 'Commercial',
      features: ["18,988 sqft GLA", "CBD Location", "Office Investment"],
      description: "Strategic commercial block with consistent rental demand and central accessibility.",
      status: "Prime Asset",
    },
    {
      id: "panari-hotel",
      title: "Panari Hotel For Sale - Investment Opportunity",
      location: "Nairobi, Kenya",
      type: "Hospitality",
      price: "KSh 3.5B",
      yield: "18.5%",
      image: "https://ext.same-assets.com/2267512097/3134620964.jpeg",
      features: ["136 Luxury Suites", "5-Star Rating", "2.5 Acres", "12 Meeting Rooms", "4 Restaurants", "350 Parking"],
      description: "Kenya's premier 5-star hospitality flagship. Exceptional returns serving international dignitaries and business leaders.",
      status: "Diverse Revenue",
    },
    {
      id: "the-atrium-office-development",
      title: "The Atrium Office Development",
      location: "Chaka Road, Kilimani, Nairobi",
      type: "Office",
      price: "US$12.5M",
      yield: "12.5%",
      image: "https://content.knightfrank.com/property/kecom271/images/226a7572-f157-48c6-abb5-6defef5af962-0.jpg?cio=true&w=1200",
      features: ["14,959 sqm", "6-storey modern office", "221 parking bays"],
      description: "Modern architectural landmark in Kilimani offering premium office spaces and state-of-the-art facilities.",
      status: "Development Asset",
    },
    {
      id: "icd-industrial-complex",
      title: "ICD Logistics Hub/Office For Sale",
      location: "Mombasa Road, Nairobi",
      type: "Industrial",
      price: "KSh 1.0B",
      yield: "14.8%",
      image: "/p/IMG-20250813-WA0001.jpg",
      features: ["3.0 Acres", "99k sqft GLA", "Strategic Access"],
      description: "High-capacity logistics facility near the Inland Container Depot, ideal for regional distribution.",
      status: "Growth Asset",
    },
    {
      id: "uchumi-house",
      title: "Uchumi House Building For Sale",
      location: "Aga Khan Walk, Nairobi CBD",
      type: "Commercial",
      price: "KSh 570M",
      yield: "9%",
      image: "/p1/IMG-20250813-WA0009.jpg",
      features: ["17 Storey", "143,300 sq.ft NLA", "99.8% Occupancy"],
      description: "Institutional grade office tower with blue-chip tenants and unparalleled visibility in the CBD.",
      status: "Institutional Grade",
    },
    {
      id: "absa-towers-for-sale",
      title: "Absa Towers Building for Sale",
      location: "Loita Street, Nairobi CBD",
      type: "Commercial",
      price: "KSh 2.1B",
      yield: "9%",
      image: "/p3/absa.jpg",
      features: ["17 Storey", "143,300 sq.ft NLA", "99.8% Occupancy"],
      description: "Institutional grade office tower with blue-chip tenants and unparalleled visibility in the CBD.",
      status: "Institutional Grade",
    },
    {
    id: "tassia-fully-occupied-block",
    title: "Tassia Fully Occupied Apartment Block For Sale",
    location: "Tassia Estate, Nairobi",
    type: "Residential",
    price: "KSh 33,000,000",
    yield: "8.5%",
    image: "https://www.pointproperties.org/wp-content/uploads/2019/11/1-Bedroom-Apartments-Rongai-1.jpeg",
    features: ["2,178 sqm plot", "Secure parking", "Unfurnished units", "Fully occupied"],
    description: "A ready, fully occupied residential apartment block on a 2,178 sqm plot with secure parking.",
    status: "Fully Occupied"
  },
  {
    id: "tassia-high-yield-apartment",
    title: "Tassia Residential Block Residential Apartment For Sale",
    location: "Tassia Estate, Nairobi",
    type: "Residential",
    price: "KSh 37,000,000",
    yield: "10%",
    image: "https://propscout.co.ke/storage/properties/files/block-of-flats/webp/tassia-embakasi-block-of-flats-for-sale-hbihi.webp",
    features: ["KSh 300,000/month income", "25×66 ft plot", "Multi-storey", "Sewer & water connected"],
    description: "Located on a 25×66 ft plot, this multi-storey block is connected to the sewer line and has a reliable water supply.",
    status: "High Yield"
  },
  {
    id: "tassia-makuti-ready-occupied",
    title: "Tassia Residential Block Apartment For Sale",
    location: "Makuti Stage, Tassia Estate, Nairobi",
    type: "Residential",
    price: "KSh 26,000,000",
    yield: "11.8%",
    image: "https://pictures-kenya.jijistatic.com/46941574_MzAwLTUzMy05ZmZkYzAxZThm.webp",
    features: ["KSh 256,000/month income", "Units: KSh 13K-25K/month", "2 shops included", "Mixed-use"],
    description: "Comprises various units ranging from KSh 13,000 to KSh 25,000 per month and includes 2 shops.",
    status: "Ready Occupied"
  },
  {
    id: "tassia-ii-prime-block",
    title: "Prime Residential Block",
    location: "Tassia-II Estate, Nairobi",
    type: "Residential",
    price: "KSh 33,000,000",
    yield: "8.06%",
    image: "https://pictures-kenya.jijistatic.com/46941577_NjIwLTM0OS02Y2ZlNGFmM2Ri.webp",
    features: ["KSh 2.8M annual income", "29 one-bedroom + 1 bedsitter", "24/7 live CCTV", "Metered electricity"],
    description: "A ground floor plus four (4) floor development featuring 29 one-bedroom units and one bedsitter.",
    status: "Prime"
  },
  { 
    id: "warehouse-godown-mlolongo",
    title: "Warehouse Godown in Mlolongo",
    location: "Mlolongo, Nairobi",
    type: "Industrial",
    price: "KSh 95,000,000 + VAT",
    yield: "14.5%",
    image: "/p2/mlolongo-godown.png",
    features: ["0.5 Acre Plot", "99,000 sqft GLA", "High Ceilings"],
    description: "Spacious warehouse situated on a prime 0.5-acre plot, ideal for commercial endeavors.",
    status: "Strategic Location"
  },
  {
  
    id: "wood-avenue-apartment-block",
    title: "Wood Avenue Apartment Block",
    location: "Kilimani, Nairobi",
    type: "Residential",
    price: "KSh 1,000,000,000",
    yield: "7.5%",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzULT2CNLinGqobwI5YlWTtkc7keVQJfhLCulFDmqq6LMlC88_Tj9iuTlqWxi5gruypHpAY2TV03KcSjsNC2HCieG9ARejHMRPOO9KLKMnm0tdF7UGsna-E7Qd-SK5YjmUSbPfIiw=s680-w680-h510-rw",
    features: ["Prime Location", "Modern Amenities", "Secure Parking"],
    description: "A luxury apartment block in the heart of Kilimani, offering modern living spaces with top-tier amenities.",
    status: "Luxury Living"
  },
  {
    id: "upper-hill-1acre-vacant",
    title: "1 Acres Vacant Land For Sale in Upper Hill",
    location: "Upper Hill, Nairobi",
    type: "Land",
    price: "KES500,000,000",
    yield: "",
    image: "/p1/upper-hill-1acre.jpg",
    features: ["1 Acres", "Prime location", "Ready for development"],
    description: "Prime vacant land in Upper Hill with exclusive mandate.",
    status: "Exclusive Mandate"
  },
  {
    id: "kilimani-0.77acre-vacant",
    title: "0.77 Acres Vacant Land For Sale in Kilimani",
    location: "Kilimani, Nairobi",
    type: "Land",
    price: "KES470,000,000",
    yield: "",
    image: "/p1/kilimani-0.77acre.jpg",
    features: ["0.77 Acres", "Kilimani location", "Development ready"],
    description: "Vacant land opportunity in Kilimani.",
    status: ""
  },
  {
    id: "upper-hill-1acre-vacant-new",
    title: "1 Acres Vacant Land For Sale in Upper Hill",
    location: "Upper Hill, Nairobi",
    type: "Land",
    price: "KES460,000,000",
    yield: "",
    image: "/p1/upper-hill-1acre-new.jpg",
    features: ["1 Acres", "Upper Hill", "New listing"],
    description: "New vacant land listing in Upper Hill.",
    status: "New"
  },
  {
    id: "westlands-0.85acre-vacant",
    title: "0.85 Acres Vacant Land For Sale in Westlands",
    location: "Westlands, Nairobi",
    type: "Land",
    price: "KES445,000,000",
    yield: "",
    image: "/p1/westlands-0.85acre.jpg",
    features: ["0.85 Acres", "Westlands prime area", "Exclusive mandate"],
    description: "Exclusive mandate vacant land in Westlands.",
    status: "Exclusive Mandate"
  },
  {
    id: "parklands-2771sqm-office",
    title: "2,771m² Office For Sale in Parklands",
    location: "Parklands, Nairobi",
    type: "Commercial",
    price: "KES328,097,000",
    yield: "",
    image: "/p1/parklands-2771sqm-office.jpg",
    features: ["2,771m²", "Office space", "Parklands location"],
    description: "Office space for sale in Parklands.",
    status: ""
  },
  {
    id: "upper-hill-0.67acre-vacant",
    title: "0.67 Acres Vacant Land For Sale in Upper Hill",
    location: "Upper Hill, Nairobi",
    type: "Land",
    price: "KES310,000,000",
    yield: "",
    image: "/p1/upper-hill-0.67acre.jpg",
    features: ["0.67 Acres", "Upper Hill", "Development land"],
    description: "Vacant land in Upper Hill for development.",
    status: ""
  },
  {
    id: "thika-12.50acre-vacant",
    title: "12.50 Acres Vacant Land For Sale in Thika",
    location: "Thika",
    type: "Land",
    price: "KES300,000,000",
    yield: "",
    image: "/p1/thika-12.50acre.jpg",
    features: ["12.50 Acres", "Thika location", "Large scale development"],
    description: "Large vacant land parcel in Thika.",
    status: ""
  },
  {
    id: "lavington-0.76acre-vacant",
    title: "0.76 Acres Vacant Land For Sale in Lavington",
    location: "Lavington, Nairobi",
    type: "Land",
    price: "KES250,000,000",
    yield: "",
    image: "/p1/lavington-0.76acre.jpg",
    features: ["0.76 Acres", "Lavington", "Exclusive mandate"],
    description: "Exclusive mandate vacant land in Lavington.",
    status: "Exclusive Mandate"
  },
  {
    id: "westlands-0.27acre-vacant",
    title: "0.27 Acres Vacant Land For Sale in Westlands",
    location: "Westlands, Nairobi",
    type: "Land",
    price: "KES227,500,000",
    yield: "",
    image: "/p1/westlands-0.27acre.jpg",
    features: ["0.27 Acres", "Westlands", "Prime location"],
    description: "Vacant land in Westlands.",
    status: ""
  },
  {
    id: "industrial-area-1.25acre-vacant",
    title: "1.25 Acres Vacant Land For Sale in Industrial Area",
    location: "Industrial Area, Nairobi",
    type: "Land",
    price: "KES180,000,000",
    yield: "",
    image: "/p1/industrial-area-1.25acre.jpg",
    features: ["1.25 Acres", "Industrial Area", "Commercial development"],
    description: "Vacant land in Industrial Area for commercial development.",
    status: ""
  },
  {
    id: "westlands-0.31acre-vacant",
    title: "0.31 Acres Vacant Land For Sale in Westlands",
    location: "Westlands, Nairobi",
    type: "Land",
    price: "KES160,000,000",
    yield: "",
    image: "/p1/westlands-0.31acre.jpg",
    features: ["0.31 Acres", "Westlands", "Prime location"],
    description: "Vacant land opportunity in Westlands.",
    status: ""
  },
  {
    id: "westlands-0.29acre-vacant",
    title: "0.29 Acres Vacant Land For Sale in Westlands",
    location: "Westlands, Nairobi",
    type: "Land",
    price: "KES150,000,000",
    yield: "",
    image: "/p1/westlands-0.29acre.jpg",
    features: ["0.29 Acres", "Westlands", "Exclusive mandate"],
    description: "Exclusive mandate vacant land in Westlands.",
    status: "Exclusive Mandate"
  },
  {
    id: "upper-hill-0.31acre-vacant",
    title: "0.31 Acres Vacant Land For Sale in Upper Hill",
    location: "Upper Hill, Nairobi",
    type: "Land",
    price: "KES135,000,000",
    yield: "",
    image: "/p1/upper-hill-0.31acre.jpg",
    features: ["0.31 Acres", "Upper Hill", "Exclusive mandate"],
    description: "Exclusive mandate vacant land in Upper Hill.",
    status: "Exclusive Mandate"
  },
  {
    id: "westlands-0.26acre-vacant",
    title: "0.26 Acres Vacant Land For Sale in Westlands",
    location: "Westlands, Nairobi",
    type: "Land",
    price: "KES133,000,000",
    yield: "",
    image: "/p1/westlands-0.26acre.jpg",
    features: ["0.26 Acres", "Westlands", "Exclusive mandate"],
    description: "Exclusive mandate vacant land in Westlands.",
    status: "Exclusive Mandate"
  }

  ];

  const filteredProperties = allProperties.filter(property => {
    const matchesType = selectedType === 'All' || property.type === selectedType;
    const matchesSearch = (property.title ?? '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (property.location ?? '').toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white font-light">
      
      {/* 1. CINEMATIC HERO HEADER */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-amber-500/20 via-transparent to-transparent" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
            <div>
              <h1 className="text-5xl lg:text-7xl font-serif italic mb-6">Kenyan Mandates</h1>
              <p className="text-slate-400 max-w-xl text-lg uppercase tracking-widest leading-relaxed">
                Institutional-grade real estate opportunities across East Africa's economic hub.
              </p>
            </div>
            <NextLink href="/uk-properties" className="group w-full lg:w-auto">
              <div className="relative p-8 bg-white/[0.02] border border-white/10 rounded-sm hover:border-amber-500/50 transition-all duration-700">
                <div className="flex items-center justify-between gap-12">
                   <span className="text-xs text-amber-500 font-bold uppercase tracking-tighter">View UK Portfolio</span>
                   <ChevronRight className="h-4 w-4 text-amber-500 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </NextLink>
          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL CONTROL BAR */}
      <div className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-2xl border-b border-white/5 py-6">
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
              {['All', 'Commercial', 'Hospitality', 'Industrial', 'Office'].map(type => (
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

      {/* 3. PREMIUM ASSET GRID (Updated to Requested Style) */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10">
          {filteredProperties.map((asset) => (
            <motion.div 
              layout
              key={asset.id} 
              className="group bg-[#05070a] grid grid-cols-1 lg:grid-cols-12 overflow-hidden hover:bg-white/[0.02] transition-colors"
            >
              {/* Image Column */}
              <div className="lg:col-span-4 relative h-[400px] lg:h-auto overflow-hidden">
                <img 
                  src={asset.image} 
                  className="w-full h-full" 
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
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xl">
                    {asset.description}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    <div className="p-4 border border-white/5 bg-white/[0.01]">
                      <p className="text-[8px] uppercase tracking-widest text-slate-600 mb-1">Net Yield</p>
                      <p className="text-lg font-serif italic text-amber-500">{asset.yield}</p>
                    </div>
                    {asset.features.slice(0, 3).map((feat, i) => (
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
                  <NextLink 
                    href={`/properties/${asset.id}`} 
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