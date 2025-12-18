'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

import { MapPin, TrendingUp, Star, Filter, Search, ArrowRight, Shield, Award, Users, Globe, Building2, Crown, ChevronDown, CheckCircle } from 'lucide-react';

const UKProperties = () => {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState('All');
  const [selectedContinent, setSelectedContinent] = useState('Europe');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('For Sale');

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
  }
  ];

  const propertyTypes = ['All', 'Commercial', 'Hotel', 'Retail', 'Industrial', 'Office Development', 'Office', 'Leisure', 'Healthcare'];
  const continents = ['All', 'Africa', 'Europe', 'Asia-Pacific', 'Americas', 'Middle East'];
  const propertyTypeIcons = [
    { name: 'Office', icon: '🏢' },
    { name: 'Retail', icon: '🛍️' },
    { name: 'Industrial', icon: '🏭' },
    { name: 'Hospitality', icon: '🏨' },
    { name: 'Mixed-use', icon: '🏙️' },
    { name: 'Medical', icon: '🏥' },
    { name: 'Land', icon: '🌄' },
    { name: 'Residential', icon: '🏠' }
  ];

  const filteredProperties = ukProperties.filter(property => {
    const matchesType = selectedType === 'All' || property.type === selectedType;
    const matchesContinent = selectedContinent === 'All' || property.continent === selectedContinent;
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          property.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesContinent && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-emerald-50 text-emerald-800 border border-emerald-200';
      case 'Exclusive':
      case 'Exclusive Offering':
        return 'bg-amber-50 text-amber-800 border border-amber-200';
      case 'Under Offer':
        return 'bg-orange-50 text-orange-800 border border-orange-200';
      case 'Sold':
        return 'bg-slate-50 text-slate-800 border border-slate-200';
      default:
        return 'bg-slate-50 text-slate-800 border border-slate-200';
    }
  };

  const getTypeColor = (type: string) => {
    return 'bg-slate-50 text-slate-700 border border-slate-200';
  };

  const getButtonHoverColor = () => {
    return 'hover:bg-[#C5A44D] hover:text-white';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-serif font-light text-[#222] mb-4">
              UK Commercial Properties
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Premium UK property investments across London and regional markets
            </p>
          </div>

          {/* Property Type Icons */}
          <div className="mb-8">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {propertyTypeIcons.map((type) => (
                <button
                  key={type.name}
                  onClick={() => setSelectedType(selectedType === type.name ? 'All' : type.name)}
                  className={`flex flex-col items-center p-4 border-2 transition-all duration-300 hover:scale-105 ${
                    selectedType === type.name
                      ? 'border-[#C5A44D] bg-[#C5A44D]/10 text-[#C5A44D]'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-[#C5A44D]'
                  }`}
                >
                  <span className="text-2xl mb-2">{type.icon}</span>
                  <span className="text-xs font-medium">{type.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="mb-12 bg-slate-50 rounded-lg p-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Enter location or property name…"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-4 pr-12 py-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#C5A44D] focus:border-transparent text-slate-900 bg-white"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              </div>

              {/* Filters */}
              <div className="flex items-center gap-4">
                {/* Continent Filter */}
                <div className="flex items-center gap-2">
                  <span className="text-slate-600 font-medium">Continent:</span>
                  <div className="relative">
                    <select
                      value={selectedContinent}
                      onChange={(e) => setSelectedContinent(e.target.value)}
                      className="appearance-none bg-white border border-slate-300 rounded-lg px-4 py-2 pr-8 text-slate-900 focus:ring-2 focus:ring-[#C5A44D] focus:border-transparent"
                    >
                      {continents.map((continent) => (
                        <option key={continent} value={continent}>{continent}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  </div>
                </div>

                {/* Type Filter */}
                <div className="flex items-center gap-2">
                  <span className="text-slate-600 font-medium">Asset Class:</span>
                  <div className="relative">
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="appearance-none bg-white border border-slate-300 rounded-lg px-4 py-2 pr-8 text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      {propertyTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-8 mb-16">
            {filteredProperties.map((property, index) => (
              <div
                key={property.id}
                className="group bg-white border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 rounded-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex flex-col sm:flex-row gap-1 sm:gap-2">
                    <span className={`px-2 sm:px-3 py-1 text-xs font-medium ${getTypeColor(property.type)}`}>
                      {property.type}
                    </span>
                    <span className={`px-2 sm:px-3 py-1 text-xs font-medium ${getStatusColor(property.status)}`}>
                      {property.status}
                    </span>
                  </div>

                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 sm:px-4 py-1 sm:py-2 flex items-center rounded-full shadow-lg">
                    <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    <span className="text-xs sm:text-sm font-semibold">{property.yield}</span>
                  </div>
                </div>

                <div className="p-4 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-serif font-medium text-[#222] mb-2 leading-tight">{property.title}</h3>
                      <div className="flex items-center text-slate-600">
                        <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-base sm:text-lg font-serif font-medium text-amber-600">{property.yield}</div>
                      <div className="text-xs text-slate-500">Annual Yield</div>
                    </div>
                  </div>

                  <div className="text-center mb-4 sm:mb-6">
                    <div className="text-xl sm:text-2xl font-serif font-light text-[#222]">{property.price}</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                      <Link href={`/properties/${property.id}`} className="w-full sm:w-1/2">
                        <button className="w-full border-2 border-stone-500 bg-amber-600 hover:bg-gray-900 text-white py-2 px-4 text-sm font-medium rounded-xl shadow-lg transition-all duration-300 group">
                          VIEW PROPERTY
                        </button>
                      </Link>

                      <Link href={`tel:0729170156`} className="w-full sm:w-1/2">
                        <button className="w-full border-2 border-stone-500 text-stone-700 hover:bg-gray-900 hover:text-white py-2 px-4 text-sm font-medium rounded-xl transition-all duration-300 group">
                          CALL AGENT
                          <ArrowRight className="inline ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-serif font-medium text-[#222] mb-4">No Properties Match Your Criteria</h3>
              <p className="text-slate-600 mb-6">
                Adjust your search or contact our investment team for personalized recommendations
              </p>
              <button
                onClick={() => {
                  setSelectedType('All');
                  setSelectedContinent('Europe');
                  setSearchTerm('');
                }}
                className="bg-[#C5A44D] hover:bg-[#C5A44D]/90 text-white px-6 py-3 font-medium transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Social Proof & Performance */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-light mb-6">
              Trusted by Global
              <br />
              <span className="font-medium">Institutional Investors</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
              Our track record speaks for itself. Join the world's most sophisticated investors who have chosen our portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-serif font-light text-amber-400 mb-2">£2.8T</div>
              <div className="text-slate-300 text-sm uppercase tracking-wider">UK Property Market</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-light text-amber-400 mb-2">850+</div>
              <div className="text-slate-300 text-sm uppercase tracking-wider">Properties Sold</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-light text-amber-400 mb-2">45</div>
              <div className="text-slate-300 text-sm uppercase tracking-wider">Countries Represented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-light text-amber-400 mb-2">99.2%</div>
              <div className="text-slate-300 text-sm uppercase tracking-wider">Client Retention Rate</div>
            </div>
          </div>

          {/* Credentials */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center p-6 border border-slate-700">
              <Award className="h-8 w-8 text-amber-400 mr-3" />
              <div>
                <div className="font-medium">RICS Regulated</div>
                <div className="text-slate-400 text-sm">Royal Institution Standards</div>
              </div>
            </div>

            <div className="flex items-center justify-center p-6 border border-slate-700">
              <Shield className="h-8 w-8 text-amber-400 mr-3" />
              <div>
                <div className="font-medium">FCA Authorised</div>
                <div className="text-slate-400 text-sm">Financial Conduct Authority</div>
              </div>
            </div>

            <div className="flex items-center justify-center p-6 border border-slate-700">
              <Building2 className="h-8 w-8 text-amber-400 mr-3" />
              <div>
                <div className="font-medium">UK Property Specialists</div>
                <div className="text-slate-400 text-sm">London & Regional Markets</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <Crown className="h-11 w-16 text-amber-600 mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-[#222] mb-6">
              Invest in the
              <br />
              <span className="font-medium">UK Property Market</span>
              </h2>
        </div>
      </div>
    </section>

        {/* FAQ Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
          <h2 className="text-3xl font-serif font-light text-[#222] mb-8">UK Investment Questions?</h2>
          <h3 className="text-2xl font-serif font-light text-[#222] mb-6">Frequently Asked Questions</h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-[#222] mb-2">What are the current UK property yields?</h4>
              <p className="text-slate-600 font-light leading-relaxed">
                UK property yields vary by sector and location. Prime London offices typically yield 4-6%, regional offices 6-8%, retail properties 5-8%, and hotels 7-10%. Industrial properties often provide the highest yields at 8-12% in secondary locations.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-[#222] mb-2">How does UK property investment work for international investors?</h4>
              <p className="text-slate-600 font-light leading-relaxed">
                International investors can purchase UK property directly or through regulated investment vehicles. We handle all legal, tax, and regulatory requirements. UK property benefits from strong tenant protections, transparent legal system, and established property management infrastructure.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-[#222] mb-2">What are the tax implications for UK property investment?</h4>
              <p className="text-slate-600 font-light leading-relaxed">
                UK property investment offers attractive tax benefits including relief from double taxation treaties, potential for capital gains tax deferral through reinvestment, and access to UK tax-efficient investment structures. Our tax advisors provide comprehensive guidance for your specific circumstances.
              </p>
            </div>
          </div>
        </div>

      </div>
  );
};

export default UKProperties;