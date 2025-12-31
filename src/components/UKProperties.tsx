'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Search, Shield, Award, 
  Globe, Filter, Landmark,
  ChevronRight, ExternalLink, Building,
  ArrowUpRight, BarChart3, Lock
} from 'lucide-react';

const UKProperties = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ukProperties = [
    {
      id: "vintners-place",
      title: "Vintners Place",
      location: "68 Upper Thames Street, London, EC4V, UK",
      continent: "Europe",
      type: "Office",
      price: "£140,000,000",
      yield: "9.78%",
      image: "https://ext.same-assets.com/2541468600/3522491577.jpeg",
      features: ["274,175 sqft", "City of London", "Grade A Offices", "River Views"],
      status: "Available",
      description: "Landmark office tower in the City of London financial district",
      roi: "Institutional grade investment"
    },
    {
      id: "the-great-eastern-wharf-estate",
      title: "The Great Eastern Wharf Estate",
      location: "London, SW11, UK",
      continent: "Europe",
      type: "Office",
      price: "£46,000,000",
      yield: "5.25%",
      image: "https://ext.same-assets.com/2541468600/4022238478.jpeg",
      features: ["52,407 sqft", "Riverside Location", "Modern Design", "Parking"],
      status: "Available",
      description: "Contemporary office estate in vibrant Battersea with Thames frontage",
      roi: "Capital growth opportunity"
    },
    {
      id: "former-wilko-car-park",
      title: "Former Wilko & Car Park",
      location: "32-38 Clumber Street, Mansfield, UK",
      continent: "Europe",
      type: "Retail",
      price: "£900,000",
      yield: "Details on Application",
      image: "https://ext.same-assets.com/2541468600/580233546.jpeg",
      features: ["City Centre Location", "Car Park Included", "Redevelopment Potential", "High Footfall Area"],
      status: "Available",
      description: "Prime retail opportunity in Mansfield town centre with development potential",
      roi: "Value-add opportunity"
    },
    {
      id: "4-8-east-street-cambridge-place",
      title: "4-8 East Street & 1-5 Cambridge Place",
      location: "Farnham, GU9, UK",
      continent: "Europe",
      type: "Retail",
      price: "£2,375,000",
      yield: "9%",
      image: "https://ext.same-assets.com/2541468600/1958743568.jpeg",
      features: ["12,794 sqft", "Town Centre", "Multiple Units", "Established Location"],
      status: "Under Offer",
      description: "Mixed retail and residential property in historic market town",
      roi: "Strong town centre investment"
    },
    {
      id: 19,
      title: "The Royal Arcade",
      location: "28 Old Bond Street, Mayfair, London, W1S, UK",
      continent: "Europe",
      type: "Retail",
      price: "£13,150,000",
      yield: "2.5%",
      image: "https://ext.same-assets.com/2541468600/3592092843.jpeg",
      features: ["9,458 sqft", "Mayfair Location", "Historic Arcade", "Prime Retail"],
      status: "Under Offer",
      description: "Prestigious retail arcade in the heart of London's luxury shopping district",
      roi: "Ultra-prime Mayfair asset"
    },
    {
      id: "70-chancery-lane",
      title: "70 Chancery Lane",
      location: "London, WC2A, UK",
      continent: "Europe",
      type: "Office",
      price: "£75,000,000",
      yield: "5.5%",
      image: "https://ext.same-assets.com/2541468600/712425661.jpeg",
      features: ["77,812 sqft", "4 Car Parking Spaces", "Air Conditioning", "Raised Access Flooring"],
      status: "Available",
      description: "Premium office building in the heart of London's legal district with institutional tenants",
      roi: "Prime London asset with stable income"
    },
    {
      id: "22-23-princes-street",
      title: "22-23 Princes Street",
      location: "London, W1B, UK",
      continent: "Europe",
      type: "Office",
      price: "£32,500,000",
      yield: "3.75%",
      image: "https://ext.same-assets.com/2541468600/2302614904.jpeg",
      features: ["11,016 sqft", "West End Location", "Prime Retail Ground Floor", "Modern Offices"],
      status: "Available",
      description: "Exceptional mixed-use building in London's prestigious West End",
      roi: "Trophy asset in world-class location"
    },
    {
      id: 13,
      title: "Estuary House",
      location: "Leeward Drive, Speke, Liverpool, UK",
      continent: "Europe",
      type: "Office",
      price: "£5,200,000",
      yield: "15%",
      image: "https://ext.same-assets.com/2541468600/3801818977.jpeg",
      features: ["75,623 sqft", "Business Park", "Air Conditioning", "Excellent Transport Links"],
      status: "Available",
      description: "Large office complex in established business park with excellent yield",
      roi: "Superior returns outside London"
    },
    {
      id: 14,
      title: "307 Euston Road",
      location: "London, NW1, UK",
      continent: "Europe",
      type: "Office",
      price: "£14,000,000",
      yield: "6.34%",
      image: "https://ext.same-assets.com/2541468600/1105006406.jpeg",
      features: ["18,102 sqft", "Air Conditioning", "Raised Access Flooring", "Shower Facilities"],
      status: "Available",
      description: "Modern office building near King's Cross with excellent connectivity",
      roi: "Strong rental growth area"
    },
    {
      id: 27,
      title: "Cross House Newcastle",
      location: "Westgate Road, Newcastle upon Tyne, UK",
      continent: "Europe",
      type: "Office",
      price: "£2,000,000",
      yield: "Details on Application",
      image: "https://ext.same-assets.com/2541468600/3437953458.jpeg",
      features: ["City Centre", "Period Building", "Refurbishment Potential", "Transport Links"],
      status: "Available",
      description: "Character office building in Newcastle city centre",
      roi: "Northern powerhouse growth"
    },
    {
      id: 28,
      title: "14 Coates Crescent",
      location: "Edinburgh, EH3 7AF, UK",
      continent: "Europe",
      type: "Office",
      price: "£1,750,000",
      yield: "Details on Application",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      features: ["4,514 sqft", "Edinburgh West End", "Period Property", "High Specification"],
      status: "Available",
      description: "Elegant office space in Edinburgh's prestigious West End",
      roi: "Scotland's capital investment"
    },
    {
    id: 29,
    title: "Grand Plaza Serviced Apartments",
    location: "42 Princes Square, London, W2",
    continent: "Europe",
    type: "Hotel",
    price: "£100M",
    yield: "7.5%",
    image: "https://ext.same-assets.com/2541468600/3581754212.jpeg",
    features: ["105,355 sqft", "198 Bedrooms", "Prime London", "Serviced Apartments"],
    status: "Available",
    description: "Prestigious serviced apartments in prime London location with excellent investment potential",
    roi: "Prime London appreciation of 8% p.a."
  },
  {
    id: 30,
    title: "Velvet Hotel Manchester",
    location: "2 Canal Street, Manchester, M1",
    continent: "Europe",
    type: "Hotel",
    price: "£11M",
    yield: "8.2%",
    image: "https://ext.same-assets.com/2541468600/3798123555.jpeg",
    features: ["36 Bedrooms", "City Centre", "Modern Boutique", "Full Service"],
    status: "Available",
    description: "Contemporary boutique hotel in Manchester's vibrant Canal Street district",
    roi: "Manchester market growth of 6.5% p.a."
  },
  {
    id: 31,
    title: "29 Albany Street Townhouse Hotel",
    location: "Edinburgh, EH1",
    continent: "Europe",
    type: "Hotel",
    price: "£7.5M",
    yield: "9.1%",
    image: "https://ext.same-assets.com/2541468600/3516624965.jpeg",
    features: ["7,100 sqft", "17 Bedrooms", "Historic Building", "Premium Location"],
    status: "Available",
    description: "Elegant townhouse hotel in Edinburgh's prestigious Albany Street",
    roi: "Edinburgh hospitality sector growth of 7% p.a."
  },
  {
    id: 32,
    title: "The Royal Arcade Mayfair",
    location: "28 Old Bond Street, London, W1S",
    continent: "Europe",
    type: "Retail",
    price: "£13.15M",
    yield: "2.5%",
    image: "https://ext.same-assets.com/2541468600/2084512286.jpeg",
    features: ["9,458 sqft", "Prime Mayfair", "Historic Arcade", "Luxury Retail"],
    status: "Under Offer",
    description: "Prestigious retail space in Mayfair's iconic Royal Arcade on Old Bond Street",
    roi: "Mayfair retail capital appreciation of 5% p.a."
  },
  {
    id: 33,
    title: "London City Island Retail",
    location: "London, E14",
    continent: "Europe",
    type: "Retail",
    price: "£7.15M",
    yield: "8.0%",
    image: "https://ext.same-assets.com/2541468600/327513321.jpeg",
    features: ["23,645 sqft", "Waterfront Location", "Modern Development", "High Footfall"],
    status: "Under Offer",
    description: "Contemporary retail space in vibrant waterfront development with strong tenant demand",
    roi: "East London regeneration growth of 9% p.a."
  },
  {
    id: 34,
    title: "Cary Arms & Spa",
    location: "Babbacombe Bay, Devon TQ1 3LX",
    continent: "Europe",
    type: "Hotel",
    price: "£4.5M",
    yield: "10.5%",
    image: "https://ext.same-assets.com/2541468600/1667188204.jpeg",
    features: ["Coastal Location", "Spa Facilities", "Boutique Hotel", "Premium Amenities"],
    status: "Available",
    description: "Stunning coastal hotel and spa with breathtaking sea views in Devon",
    roi: "Coastal hospitality premium of 8.5% p.a."
  },
  {
    id: 35,
    title: "Former Land Rover Showroom",
    location: "Wheatley Hall Road, Doncaster, DN2",
    continent: "Europe",
    type: "Retail",
    price: "£2.8M",
    yield: "9.5%",
    image: "https://ext.same-assets.com/2541468600/1724353550.jpeg",
    features: ["17,573 sqft", "Automotive", "Excellent Visibility", "Development Potential"],
    status: "Available",
    description: "Large-format retail/automotive space with redevelopment opportunities",
    roi: "Regional retail sector growth of 6% p.a."
  },
  {
    id: 36,
    title: "Hampton by Hilton Liverpool Airport",
    location: "Speke Hall Avenue, Liverpool, L24 1YD",
    continent: "Europe",
    type: "Hotel",
    price: "£12.5M",
    yield: "8.8%",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80",
    features: ["160 Bedrooms", "Airport Location", "Branded Hotel", "Strong Covenant"],
    status: "Under Offer",
    description: "Established Hampton by Hilton at Liverpool John Lennon Airport with reliable income",
    roi: "Airport hotel sector stability with 7.5% p.a. growth"
  },
  {
    id: 37,
    title: "Project Forth Townhouse",
    location: "3 Rothesay Terrace, Edinburgh, EH3",
    continent: "Europe",
    type: "Hotel",
    price: "£5M",
    yield: "8.9%",
    image: "https://ext.same-assets.com/2541468600/1872935202.jpeg",
    features: ["27 Bedrooms", "West End Location", "Georgian Building", "Boutique"],
    status: "Available",
    description: "Premier bed and breakfast in Edinburgh's desirable West End district",
    roi: "Edinburgh tourism growth of 7.2% p.a."
  },
  {
    id: 38,
    title: "Churchill House Hotel",
    location: "Mosley Street, Newcastle upon Tyne, NE1",
    continent: "Europe",
    type: "Hotel",
    price: "£5M",
    yield: "9.3%",
    image: "https://ext.same-assets.com/2541468600/2741718123.jpeg",
    features: ["City Centre", "Modern Facilities", "Strong Trading", "Prime Location"],
    status: "Available",
    description: "Well-established hotel in Newcastle city centre with consistent performance",
    roi: "Newcastle commercial growth of 6.8% p.a."
  },
  {
    id: 39,
    title: "Former Wilko Retail Unit",
    location: "32-38 Clumber Street, Mansfield, NG18 1NU",
    continent: "Europe",
    type: "Retail",
    price: "£900K",
    yield: "11.2%",
    image: "https://ext.same-assets.com/2541468600/1968892523.jpeg",
    features: ["Town Centre", "Large Format", "Car Park Included", "High Street"],
    status: "Available",
    description: "Former Wilko store with car park in Mansfield town centre location",
    roi: "Regional retail redevelopment potential of 5% p.a."
  },
  {
    id: 40,
    title: "Embassy Gardens Retail Unit",
    location: "Nine Elms, London, SW11",
    continent: "Europe",
    type: "Retail",
    price: "£890K",
    yield: "7.0%",
    image: "https://ext.same-assets.com/2541468600/1155013741.jpeg",
    features: ["1,732 sqft", "New Development", "Nine Elms", "High Specification"],
    status: "Under Offer",
    description: "Modern retail unit in Embassy Gardens, one of London's premier new developments",
    roi: "Nine Elms regeneration premium of 10% p.a."
  },
  {
    id: 41,
    title: "Merchants Manor Hotel",
    location: "Westen Terrace, Falmouth, Cornwall, TR11",
    continent: "Europe",
    type: "Hotel",
    price: "£3.2M",
    yield: "10.8%",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80",
    features: ["39 Bedrooms", "Wet Spa", "Coastal Town", "Waterfront"],
    status: "Available",
    description: "Characterful hotel with spa facilities in the picturesque coastal town of Falmouth",
    roi: "Cornwall tourism growth of 8.2% p.a."
  },
  {
    id: 42,
    title: "Volvo Welwyn Garden City",
    location: "57 Great North Road, Hertfordshire, AL8",
    continent: "Europe",
    type: "Retail",
    price: "£2M",
    yield: "9.8%",
    image: "https://ext.same-assets.com/2541468600/415265675.jpeg",
    features: ["Automotive", "Main Road", "Large Site", "Strategic Location"],
    status: "Available",
    description: "Substantial automotive retail premises on Great North Road",
    roi: "Hertfordshire commercial growth of 6.5% p.a."
  },
  {
    id: 43,
    title: "Farnham Town Centre Retail",
    location: "4-8 East Street, Farnham, GU9",
    continent: "Europe",
    type: "Retail",
    price: "£2.375M",
    yield: "9.0%",
    image: "https://ext.same-assets.com/2541468600/3038036623.jpeg",
    features: ["12,794 sqft", "Prime Pitch", "Town Centre", "Multi-unit"],
    status: "Under Offer",
    description: "Prime town centre retail investment in historic Farnham with strong covenant tenants",
    roi: "Surrey market town stability of 5.5% p.a."
  },
  {
    id: 44,
    title: "VW Wirral Dealership",
    location: "1 Pool Lane, Bromborough, Wirral, CH62",
    continent: "Europe",
    type: "Retail",
    price: "£2.5M",
    yield: "9.6%",
    image: "https://ext.same-assets.com/2541468600/2287617688.jpeg",
    features: ["Automotive", "Established Site", "Strong Brand", "Parking"],
    status: "Under Offer",
    description: "Volkswagen dealership in established Wirral location with strong trading history",
    roi: "Automotive sector stability of 6% p.a."
  },
  {
    id: 45,
    title: "Cross House Newcastle Commercial Building",
    location: "Westgate Road, Newcastle upon Tyne, UK",
    continent: "Europe",
    type: "Commercial",
    price: "£2M",
    yield: "Details on Application",
    image: "https://content.knightfrank.com/property/hub2547666/images/a531920b-a627-43ed-905e-eacd1b941068-0.jpg?cio=true&w=1200",
    features: ["City Centre", "Period Building", "Refurbishment Potential", "Transport Links"],
    status: "Available",
    description: "Character office building in Newcastle city centre with development potential",
    roi: "Northern powerhouse growth"
  },
  ];

  const filteredProperties = ukProperties.filter(property => {
    const matchesType = selectedType === 'All' || property.type === selectedType;
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          property.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#05070a] text-white font-light selection:bg-amber-500/30">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative pt-40 pb-24 px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-500">
              Direct UK Institutional Desk
            </span>
          </motion.div>
        </div>
      </section>

      {/* 2. SOPHISTICATED TOOLBAR */}
      <div className="sticky top-0 z-50 bg-[#05070a]/80 backdrop-blur-xl border-y border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-8 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-8 flex-1">
            <div className="relative flex-1 max-w-md group">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-amber-500 transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="SEARCH BY POSTCODE OR ASSET..." 
                className="w-full pl-8 pr-4 py-2 bg-transparent border-none text-[10px] font-bold tracking-[0.2em] focus:ring-0 placeholder:text-slate-700"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <nav className="hidden lg:flex items-center gap-8">
              {['All', 'Office', 'Hotel', 'Retail'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative py-2 ${
                    selectedType === type ? 'text-amber-500' : 'text-slate-500 hover:text-white'
                  }`}
                >
                  {type}
                  {selectedType === type && <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-px bg-amber-500" />}
                </button>
              ))}
            </nav>
          </div>

          <button className="flex items-center gap-3 px-6 py-2 border border-white/10 text-[9px] font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
            <Filter size={14} /> Refine Portfolio
          </button>
        </div>
      </div>

      {/* 3. PREMIUM ASSET GRID */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
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
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
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
                  <Link 
                    href={`/properties/${asset.id}`} 
                    className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:text-amber-500 transition-colors group/link"
                  >
                    View Prospectus <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. REGULATORY TRUST SECTION */}
      <section className="bg-white/5 border-y border-white/10 py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <Shield className="text-amber-500" size={32} />
              <h4 className="text-xl font-serif italic">FCA Compliance</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Full adherence to UK Financial Conduct Authority guidelines for offshore and domestic institutional investors.</p>
            </div>
            <div className="space-y-6">
              <Landmark className="text-amber-500" size={32} />
              <h4 className="text-xl font-serif italic">SDLT Structure</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Expert structuring advice on Stamp Duty Land Tax and tax-efficient UK holding vehicles including REITs.</p>
            </div>
            <div className="space-y-6">
              <Award className="text-amber-500" size={32} />
              <h4 className="text-xl font-serif italic">RICS Valuations</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Mandatory Red Book valuations by the Royal Institution of Chartered Surveyors for all listed assets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MARKET INTELLIGENCE FAQ */}
      <section className="py-32 max-w-4xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif italic mb-4">Market Intelligence</h2>
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.4em]">Quarterly UK Sector Insights</p>
        </div>
        
        <div className="space-y-px bg-white/10 border border-white/10">
          {[
            { q: "What is the NIY for prime London offices?", a: "Current Net Initial Yields (NIY) for prime City of London Grade A offices fluctuate between 4.5% and 5.5%, depending on lease length and tenant covenant strength." },
            { q: "Do you assist with non-resident financing?", a: "Yes. We have established relationships with UK commercial lenders who specialize in non-resident and SPV-based financing structures." }
          ].map((faq, i) => (
            <div key={i} className="p-8 bg-[#05070a] hover:bg-white/[0.02] transition-colors cursor-pointer group">
              <h4 className="font-bold text-[11px] uppercase tracking-[0.2em] flex items-center justify-between mb-4">
                {faq.q} <ChevronRight size={16} className="text-amber-500 group-hover:translate-x-2 transition-transform" />
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed italic font-serif">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer className="py-24 border-t border-white/10 text-center">
        <h2 className="text-2xl font-serif italic mb-8">Access the Restricted Portfolio</h2>
        <button className="bg-amber-600 hover:bg-amber-500 text-black px-12 py-5 text-[10px] font-bold uppercase tracking-[0.4em] transition-all">
          Request Institutional Access
        </button>
      </footer>
    </div>
  );
};

export default UKProperties;