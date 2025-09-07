'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Star, Filter, Search, ArrowRight, Shield, Award, Users, Globe, Building2, Crown, ChevronDown, CheckCircle } from 'lucide-react';

const Properties = () => {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProperties = [
    {
    id: 1,
    title: "Best Western Meridian Hotel",
    location: "Nairobi CBD",
    type: "Hotel",
    price: "US$10M/Ksh 1.2B",
    yield: "15.2%",
    image: "https://content.knightfrank.com/property/hub2547666/images/a531920b-a627-43ed-905e-eacd1b941068-0.jpg?cio=true&w=1200",
    features: ["119 Rooms", "3.5 Star Hotel", "Conference Facilities", "Restaurant & Bar"],
    status: "Available",
    description: "Landmark hotel property in Nairobi CBD with excellent occupancy rates and comprehensive hospitality amenities",
    roi: "Projected 18% ROI within 24 months"
  },

  {
    id: 2,
    title: "Buffalo Mall & Development Land",
    location: "Naivasha",
    type: "Retail",
    price: "$5M (Ksh 750M)",
    yield: "11.0%",
    image: "https://content.knightfrank.com/property/hub2429185/images/79bb901f-3dba-41b8-9601-d462f09fa400-0.jpg?cio=true&w=1200",
    features: ["58,965 sqft GLA", "33 Retail Units", "9 Acres Additional Land", "70% Occupancy"],
    status: "Available",
    description: "Premier shopping destination in Naivasha with significant development potential on adjoining land",
    roi: "Development upside potential of 300%"
  },

  {
    id: 3,
    title: "ICD Industrial Complex",
    location: "Mombasa Road, Nairobi",
    type: "Industrial",
    price: "KSh 1B",
    yield: "14.8%",
    image: "/p/IMG-20250813-WA0001.jpg",
    features: ["3 Acres", "99,300 sqft GLA", "4-Storey Office Block", "Motor Showroom"],
    status: "Available", 
    description: "Prime industrial site with offices, showrooms, warehouses and strategic transport connectivity",
    roi: "Industrial demand growth of 25% annually"
  },

  {
    id: 4,
    title: "BASL House",
    location: "Kumasi Road, Nairobi CBD",
    type: "Commercial",
    price: "$1.45M (KSh 190M)",
    yield: "16.5%",
    image: "/p4/basl house.png",
    features: ["18,988 sqft", "4 Storey Building", "100% Occupied", "Multiple Tenants"],
    status: "Available",
    description: "Prime investment opportunity in CBD with exceptional rental returns and full occupancy",
    roi: "Guaranteed income with blue-chip tenants"
  },

  {
    id: 5,
    title: "The Atrium Office Development",
    location: "Chaka Road, Kilimani",
    type: "Commercial",
    price: "$13.5M (KSh 2B)",
    yield: "13.8%",
    image: "/p7/Screenshot 2025-08-27 234422.png",
    features: ["6 Storey Modern Office", "161,019 sqft", "221 Parking Bays", "International Standards"],
    status: "Available",
    description: "Excellently designed office development with high-grade tenants and international specifications",
    roi: "Trophy asset in premium location"
  },

  {
    id: 6,
    title: "Uchumi House Commercial Building",
    location: "Aga khan Walk, Nairobi CBD",
    type: "Commercial", 
    price: "$4.4M (KSh 570M)",
    yield: "12.2%",
    image: "/p1/IMG-20250813-WA0009.jpg",
    features: ["4,491 sqm", "5 Storey + Basement", "Prime CBD Location", "Excellent Visibility"],
    status: "Available",
    description: "Premier commercial property with excellent visibility and immediate rental income in CBD",
    roi: "Stable CBD appreciation of 12% p.a."
  },

  {
    id: 7,
    title: "The Panari Hotel",
    location: "Mombasa Road, Nairobi West",
    type: "Hotel",
    price: "$25M (KSh 3B)", 
    yield: "18.5%",
    image: "/p8/Screenshot 2025-08-18 224428.png",
    features: ["136 Rooms", "5-Star Rating", "2.5 Acres", "12 Meeting Rooms"],
    status: "Available",
    description: "Magnificent 5-star hotel with luxury amenities, strategic location and international clientele",
    roi: "Premium hospitality asset with MICE revenue"
  },
  {
    id: 8,
    title: "Absa Towers",
    location: "Loita and Market Street, Nairobi CBD",
    type: "Office Development",
    price: "$16.2M (KSh 2.1B)", 
    yield: "9%",
    image: "/p3/ABSA_Towers.png",
    features: ["17 Storey", "143,300 sq.ft NLA", "160 Parking Bays", "99.8% Occupancy"],
    status: "Exclusive",
    description: "Prime Office Development in Nairobi CBD with excellent rental income and blue-chip tenants.",
    roi: "Grade A asset with multinational tenants"
    },
    {
    id: 9,
    title: "Tembo Coop House",
    location: "Moi Avenue, Nairobi CBD",
    type: "Commercial Building",
    price: "$3M (KSh 385M)", 
    yield: "Details on Application",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: ["7 Upper Floors", "Ground Floor Shops", "30,174 Sq. Ft. Built Up Area", "Fully Occupied"],
    status: "Exclusive",
    description: "A fully occupied commercial building located along Moi Avenue in Nairobi CBD, available for sale.",
    roi: "Immediate cash flow with upside potential"
    }
  ];

  const propertyTypes = ['All', 'Commercial', 'Hotel', 'Retail', 'Industrial', 'Office Development', 'Commercial Building'];

  const filteredProperties = allProperties.filter(property => {
    const matchesType = selectedType === 'All' || property.type === selectedType;
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-emerald-50 text-emerald-800 border border-emerald-200';
      case 'Exclusive':
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

  return (
    <div className="min-h-screen bg-white">
            {/* Value Proposition */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-slate-900 mb-6">
              Why International Investors
              <br />
              <span className="font-medium">Choose Kenya</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              East Africa's gateway economy offers unparalleled growth potential with the stability and infrastructure international investors demand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-slate-900 mb-4">Superior Returns</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Average yields of 12-18% far exceed developed markets, with strong capital appreciation driven by rapid urbanization and economic growth.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-slate-900 mb-4">Political Stability</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Kenya's mature democracy, robust legal framework, and business-friendly policies provide the security institutional investors require.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-slate-900 mb-4">Strategic Location</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Regional hub for East Africa's 300M+ population, with world-class infrastructure connecting you to emerging markets across the continent.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <motion.div
            className="mb-12 bg-slate-50 rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search premium properties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-slate-900 bg-white"
                />
              </div>

              {/* Type Filter */}
              <div className="flex items-center gap-4">
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
          </motion.div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                className="group bg-white border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 text-xs font-medium ${getTypeColor(property.type)}`}>
                      {property.type}
                    </span>
                    <span className={`px-3 py-1 text-xs font-medium ${getStatusColor(property.status)}`}>
                      {property.status}
                    </span>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-2 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-sm font-semibold">{property.yield}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-2xl font-serif font-medium">{property.price}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif font-medium text-slate-900 mb-2">{property.title}</h3>
                  <div className="flex items-center text-slate-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {property.description}
                  </p>

                  <div className="bg-amber-50 p-3 mb-4 border border-amber-200">
                    <p className="text-amber-800 text-sm font-medium">
                      {property.roi}
                    </p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {property.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link 
                  href={`/properties/${property.id}`}>
                  <button className="w-full bg-slate-900 hover:bg-amber-600 text-white py-3 font-medium transition-all duration-300 group">
                    
                    LEARN MORE
                    
                    <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredProperties.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-serif font-medium text-slate-900 mb-4">No Properties Match Your Criteria</h3>
              <p className="text-slate-600 mb-6">
                Adjust your search or contact our investment team for personalized recommendations
              </p>
              <button 
                onClick={() => {
                  setSelectedType('All');
                  setSearchTerm('');
                }}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 font-medium transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
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
              Our track record speaks for itself. Join the world's most sophisticated investors who have chosen Kenya as their African gateway.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-serif font-light text-amber-400 mb-2">$2.5B+</div>
              <div className="text-slate-300 text-sm uppercase tracking-wider">Total Transactions</div>
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
                <div className="font-medium">Knight Frank Partner</div>
                <div className="text-slate-400 text-sm">Global Real Estate Advisors</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 border border-slate-700">
              <Shield className="h-8 w-8 text-amber-400 mr-3" />
              <div>
                <div className="font-medium">RICS Regulated</div>
                <div className="text-slate-400 text-sm">Royal Institution Standards</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 border border-slate-700">
              <Building2 className="h-8 w-8 text-amber-400 mr-3" />
              <div>
                <div className="font-medium">FIABCI Member</div>
                <div className="text-slate-400 text-sm">International Real Estate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Crown className="h-11 w-16 text-amber-600 mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-slate-900 mb-6">
              Ready to Invest in
              <br />
              <span className="font-medium">Africa's Future?</span>
              </h2>
        </motion.div>
      </div>
    </section>
    </div>
  );
};

export default Properties;