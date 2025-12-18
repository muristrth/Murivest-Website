'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

import { MapPin, TrendingUp, Star, Filter, Search, ArrowRight, Shield, Award, Users, Globe, Building2, Crown, ChevronDown, CheckCircle } from 'lucide-react';

const Properties = () => {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState('All');
  const [selectedContinent, setSelectedContinent] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('For Sale');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProperties = [
    {
      id: "best-western-meridian-hotel",
      title: "Best Western Meridian Hotel",
      location: "Nairobi CBD, Kenya",
      continent: "Africa",
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
      id: "buffalo-mall-development-land",
      title: "Buffalo Mall & Development Land",
      location: "Naivasha, Kenya",
      continent: "Africa",
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
      id: "icd-industrial-complex",
      title: "ICD Industrial Complex",
      location: "Mombasa Road, Nairobi, Kenya",
      continent: "Africa",
      type: "Industrial",
      price: "KSh 1 Billion",
      yield: "14.8%",
       image: "/p/IMG-20250813-WA0001.jpg",
      features: ["3 Acres", "99,300 sqft GLA", "4-Storey Office Block", "Motor Showroom"],
      status: "Available",
      description: "Prime industrial site with offices, showrooms, warehouses and strategic transport connectivity",
      roi: "Industrial demand growth of 25% annually"
    },
    {
      id: "basl-house",
      title: "BASL House",
      location: "Kumasi Road, Nairobi CBD, Kenya",
      continent: "Africa",
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
      id: "the-atrium-office-development",
      title: "The Atrium Office Development",
      location: "Chaka Road, Kilimani, Kenya",
      continent: "Africa",
      type: "Commercial",
      price: "$13.5M (KSh 2B)",
      yield: "13.8%",
      image: "/p7/Screenshot 2025-08-27 234422.png",
      features: ["6 Storey Modern Office", "161,019 sqft", "221 Parking Bays", "International Standards"],
      status: "Available",
      description: "Excellently designed office development with high-grade tenants and international specifications",
      roi: "Trophy asset in premium location"
    },
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

  const filteredProperties = allProperties.filter(property => {
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
              Global Commercial Property Portfolio
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Premium investment opportunities across Africa and Europe
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
                  setSelectedContinent('All');
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
                <div className="font-medium">Savills Alliance</div>
                <div className="text-slate-400 text-sm">International Real Estate</div>
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
              Ready to Invest in
              <br />
              <span className="font-medium">Africa's Future?</span>
              </h2>
        </div>
      </div>
    </section>

        {/* FAQ Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
          <h2 className="text-3xl font-serif font-light text-[#222] mb-8">Have Questions?</h2>
          <h3 className="text-2xl font-serif font-light text-[#222] mb-6">Frequently Asked Questions</h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-[#222] mb-2">What is the average return on investment for commercial properties in Kenya?</h4>
              <p className="text-slate-600 font-light leading-relaxed">
                Prime commercial properties in Kenya typically offer ROI between 8-15% annually depending on location and property type. Office spaces in Nairobi CBD average 8-10%, retail shops in busy areas can yield 10-15%, while well-located warehouses often provide returns of 9-14%. These figures account for both rental income and capital appreciation.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-[#222] mb-2">What should I consider when buying a commercial property in Kenya?</h4>
              <p className="text-slate-600 font-light leading-relaxed">
                Key considerations include: location accessibility and visibility, zoning regulations for your intended use, title deed status (prefer freehold), existing tenancy agreements if applicable, parking availability, power capacity (especially for industrial properties), proximity to transport links, and future development plans in the area that might affect property value.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-[#222] mb-2">Are there financing options available for commercial property purchases?</h4>
              <p className="text-slate-600 font-light leading-relaxed">
                Yes, several Kenyan banks offer commercial mortgages typically covering up to 60-70% of property value with repayment periods of 7-15 years. Development finance is also available for construction projects. Interest rates vary between 12-18% depending on risk assessment. Some Saccos also provide property loans to members at competitive rates.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-[#222] mb-2">How does the due diligence process work for commercial properties?</h4>
              <p className="text-slate-600 font-light leading-relaxed">
                The due diligence process should include: verification of title documents at Ardhi House, searches for any encumbrances or charges, physical inspection of the property by qualified surveyors, review of existing leases (if tenanted), confirmation of all utility connections and outstanding bills, assessment of structural integrity by engineers, and verification of compliance with county government regulations.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-[#222] mb-2">What are the ongoing costs of owning commercial property in Kenya?</h4>
              <p className="text-slate-600 font-light leading-relaxed">
                Beyond purchase price, owners should budget for: annual land rates (0.1-0.2% of value), rental income tax (10% withholding tax), property management fees (5-10% of rent if using an agent), maintenance costs (1-3% of property value annually), insurance premiums (0.2-0.5% of value), and occasional renovations to maintain competitiveness.
              </p>
            </div>
          </div>
        </div>
        
      </div>
  );
};

export default Properties;

