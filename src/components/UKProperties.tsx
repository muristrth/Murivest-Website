'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  MapPin, TrendingUp, Search, ArrowRight, Shield, Award, 
  Building2, Globe, LayoutGrid, List, Filter, Landmark,
  ChevronRight, ExternalLink
} from 'lucide-react';

const UKProperties = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isGridView, setIsGridView] = useState(true);

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
    <div className="min-h-screen bg-slate-50">
      {/* 1. INSTITUTIONAL HERO HEADER */}
      <section className="relative py-24 bg-[#0A192F] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/graphy-dark.png')]" />
        
        {/* Decorative Union Jack Gradient Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            <Landmark size={12} /> UK Institutional Desk
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                London & Regional <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Capital Markets</span>
              </h1>
              <p className="text-slate-400 text-xl font-light leading-relaxed">
                Direct access to Tier-1 UK commercial assets. From City of London trophy towers 
                to high-yielding regional industrial logistics.
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="flex gap-8 pb-2 border-b border-white/10 w-full lg:w-auto">
                <div>
                    <div className="text-2xl font-bold text-white">£2.8T</div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Market Size</div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-white">9.2%</div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Avg. Ind. Yield</div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER & VIEW TOGGLE */}
      <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-6 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search by Postcode or Asset Name..." 
                className="w-full pl-12 pr-4 py-3 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-amber-500 transition-all"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <nav className="hidden md:flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
              {['All', 'Office', 'Industrial', 'Retail'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                    selectedType === type ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {type}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
             <button className="flex items-center gap-2 px-5 py-3 border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors">
                <Filter size={16} /> Advanced Filters
             </button>
          </div>
        </div>
      </div>

      {/* 3. ASSET GRID */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProperties.map((asset) => (
            <div key={asset.id} className="group bg-white rounded-[2rem] border border-slate-200 overflow-hidden flex flex-col md:flex-row h-full transition-all duration-500 hover:shadow-2xl hover:border-amber-500/30">
              {/* Asset Image */}
              <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img src={asset.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#0A192F] text-[10px] font-black uppercase rounded-lg shadow-sm">
                    {asset.type}
                  </span>
                </div>
              </div>

              {/* Asset Content */}
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-amber-600 transition-colors">{asset.title}</h3>
                    <div className="text-right">
                      <div>
                        <div className="text-[10px] text-slate-300 uppercase font-bold tracking-[0.2em] mb-1">Asset Value</div>
                        <div className="text-2xl font-bold tracking-tight">{asset.price}</div>
                    </div>
                        <div className="text-2xl font-bold text-slate-900">{asset.yield}</div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">NIY (Net Initial Yield)</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
                    <MapPin size={14} className="text-blue-600" />
                    {asset.location}
                  </div>

                  <div className="space-y-2 mb-8">
                    {asset.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <div className="h-1 w-1 rounded-full bg-amber-500" />
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                    <Link href={`/properties/${asset.id}`} className="flex-1 bg-[#0A192F] text-white text-center py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                        View Property <ExternalLink size={14} />
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. REGULATORY TRUST SECTION */}
      <section className="bg-[#0A192F] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <Shield className="text-amber-500 mb-6" size={40} />
                    <h4 className="text-xl font-bold mb-4">FCA Compliance</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Full adherence to UK Financial Conduct Authority guidelines for offshore and domestic investors.</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <Landmark className="text-amber-500 mb-6" size={40} />
                    <h4 className="text-xl font-bold mb-4">SDLT Mitigation</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Specialist structural advice on Stamp Duty Land Tax and UK tax-efficient holding vehicles (REITs).</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <Award className="text-amber-500 mb-6" size={40} />
                    <h4 className="text-xl font-bold mb-4">RICS Valuations</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">All assets undergo rigorous Red Book valuations by Royal Institution of Chartered Surveyors.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 5. DYNAMIC FAQ */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">UK Market <span className="text-amber-600">Intelligence</span></h2>
        <div className="space-y-4">
            {[
                { q: "What is the NIY for prime London offices?", a: "Current Net Initial Yields (NIY) for prime City of London Grade A offices fluctuate between 4.5% and 5.5%, depending on lease length and tenant covenant strength." },
                { q: "Do you assist with non-resident financing?", a: "Yes. We have established relationships with UK commercial lenders who specialize in non-resident and SPV-based financing structures." }
            ].map((faq, i) => (
                <div key={i} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-amber-500 transition-colors cursor-help">
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center justify-between">
                        {faq.q} <ChevronRight size={16} className="text-amber-500" />
                    </h4>
                    <p className="text-slate-500 text-sm">{faq.a}</p>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default UKProperties;