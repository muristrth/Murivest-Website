'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { 
  ArrowRight, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  PoundSterling, 
  Search,
  X,
  LayoutGrid,
  Map,
  Maximize2,
  Mail,
  Phone,
  Layers,
  Sun,
  Moon,
  Filter,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Property } from '@/types';

// Dynamic import for Mapbox to avoid SSR issues
const PropertyMap = dynamic(() => import('./PropertyMap'), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-[#F5F4F0] animate-pulse flex items-center justify-center">
    <span className="text-[#8B7355] text-sm">Loading map...</span>
  </div>
});

// Types for UK Property
interface UKPropertyLocation {
  lat?: number;
  lng?: number;
}

interface UKPropertyAgent {
  name?: string;
  title?: string;
  phone?: string;
  email?: string;
  photoUrl?: string;
}

interface UKPropertyInvestment {
  monthlyIncome?: string;
  annualIncome?: string;
  appreciationRate?: string;
  totalROI?: string;
}

interface UKPropertyDetailItem {
  label: string;
  value: string;
}

interface UKPropertyRegulatory {
  fcaCompliant?: boolean;
  stampDuty?: boolean;
  sicr?: boolean;
}

interface UKProperty {
  _id: string;
  title: string;
  subtitle?: string;
  slug: string;
  price: string;
  priceGbp?: string;
  location: string;
  city?: string;
  region?: string;
  postcode?: string;
  type?: string;
  status?: string;
  description?: string;
  yield?: string;
  roi?: string;
  mainImage?: string;
  mainImageUrl?: string;
  images?: string[];
  imageUrls?: string[];
  brochureUrl?: string;
  features?: string[];
  sqft?: string;
  details?: UKPropertyDetailItem[];
  investment?: UKPropertyInvestment;
  tenure?: string;
  regulatory?: UKPropertyRegulatory;
  coordinates?: UKPropertyLocation;
  agent?: UKPropertyAgent;
}

interface UKPropertiesClientProps {
  properties?: UKProperty[];
}

// Default fallback properties when Sanity has no data
const defaultProperties: UKProperty[] = [
  {
    _id: '1',
    title: 'The Kensington Residence',
    subtitle: 'Exceptional five-bedroom residence in prestigious Kensington',
    slug: 'kensington-residence',
    price: '£4,250,000',
    location: 'Kensington, London W8',
    city: 'London',
    region: 'Greater London',
    postcode: 'W8 4PX',
    type: 'Residential',
    status: 'Available',
    description: 'An exceptional five-bedroom residence in one of London\'s most sought-after addresses. This meticulously designed home offers the perfect blend of classical elegance and contemporary luxury.',
    yield: '4.5%',
    mainImage: '/murivest_ceo_office.webp',
    images: ['/kenya-night.webp'],
    features: [
      'Grand reception hall',
      'Three reception rooms',
      'Bespoke kitchen',
      'Private garden',
      'Master suite',
      'Underfloor heating'
    ],
    sqft: '4,200',
    tenure: 'Freehold',
    coordinates: { lat: 51.5014, lng: -0.1919 }
  },
  {
    _id: '2',
    title: 'Canary Wharf Office Tower',
    subtitle: 'Prime Grade A office space in London\'s financial district',
    slug: 'canary-wharf-tower',
    price: '£28,500,000',
    location: 'Canada Square, London E14',
    city: 'London',
    region: 'Greater London',
    postcode: 'E14 5AB',
    type: 'Office',
    status: 'Available',
    description: 'Prime Grade A office tower in Canary Wharf with stunning views of the London skyline. Fully let to blue-chip tenants.',
    yield: '6.2%',
    mainImage: '/kenya-night.webp',
    images: ['/murivest_ceo_office.webp'],
    features: [
      'Grade A specification',
      'Floor-by-floor lettable',
      '24/7 security',
      'Underground parking',
      'Bike storage',
      'ESG compliant'
    ],
    sqft: '125,000',
    tenure: 'Leasehold',
    coordinates: { lat: 51.5054, lng: -0.0235 }
  },
  {
    _id: '3',
    title: 'Manchester Retail Centre',
    subtitle: 'High-yield retail investment in prime Manchester location',
    slug: 'manchester-retail-centre',
    price: '£15,750,000',
    location: 'Market Street, Manchester M1',
    city: 'Manchester',
    region: 'North West',
    postcode: 'M1 1AB',
    type: 'Retail',
    status: 'Available',
    description: 'Prime retail centre in Manchester city centre with strong tenant mix and excellent footfall.',
    yield: '8.1%',
    mainImage: '/murivest_ceo_office.webp',
    features: [
      'Prime city centre location',
      'Strong tenant mix',
      'Excellent footfall',
      'Multi-let scheme',
      'Asset management potential'
    ],
    sqft: '45,000',
    tenure: 'Freehold',
    coordinates: { lat: 53.4808, lng: -2.2426 }
  },
  {
    _id: '4',
    title: 'Birmingham Industrial Estate',
    subtitle: 'Modern logistics facility in Birmingham',
    slug: 'birmingham-industrial',
    price: '£9,200,000',
    location: 'Birmingham Interchange, B24',
    city: 'Birmingham',
    region: 'West Midlands',
    postcode: 'B24 9FE',
    type: 'Industrial',
    status: 'Under Offer',
    description: 'Modern logistics facility with excellent access to motorway network. Let to national logistics operator.',
    yield: '7.4%',
    mainImage: '/kenya-night.webp',
    features: [
      'Strategic location',
      'Motorway access',
      'Modern specification',
      'Let to national tenant',
      'ESG compliant'
    ],
    sqft: '85,000',
    tenure: 'Freehold',
    coordinates: { lat: 52.4862, lng: -1.8904 }
  }
];

// Color palette
const COLORS = {
  forest: '#1B4332',
  forestLight: '#2D5A45',
  cream: '#FAF9F6',
  creamDark: '#F5F4F0',
  brass: '#B8956B',
  brassLight: '#C9A87C',
  charcoal: '#2C2C2C',
  stone: '#8B8680',
  paper: '#FFFFFF',
  border: '#E8E6E1',
};

// Transform UK property to Property type for Mapbox
const transformToProperty = (ukProperty: UKProperty) => ({
  _id: ukProperty._id,
  title: ukProperty.title,
  slug: ukProperty.slug,
  subtitle: ukProperty.subtitle,
  address: ukProperty.location,
  city: ukProperty.city || '',
  state: ukProperty.region || '',
  zipCode: ukProperty.postcode,
  location: ukProperty.coordinates ? {
    lat: ukProperty.coordinates.lat || 51.5074,
    lng: ukProperty.coordinates.lng || -0.1278,
  } : { lat: 51.5074, lng: -0.1278 }, // Default to London
  price: ukProperty.price,
  priceGbp: ukProperty.priceGbp,
  yield: ukProperty.yield,
  investment: ukProperty.investment,
  squareFootage: ukProperty.sqft || '',
  propertyType: ukProperty.type || 'Commercial',
  listingType: 'For Sale',
  image: ukProperty.mainImage || null,
  thumbnailUrl: ukProperty.mainImage,
  description: ukProperty.description || '',
  features: ukProperty.features || [],
  details: ukProperty.details?.map(d => ({ label: d.label || '', value: d.value || '' })) || [],
  broker: {
    name: ukProperty.agent?.name || '',
    email: ukProperty.agent?.email || '',
    phone: ukProperty.agent?.phone || '',
  },
});

// App Drawer Component
const PropertyDrawer: React.FC<{
  property: UKProperty | null;
  isOpen: boolean;
  onClose: () => void;
}> = ({ property, isOpen, onClose }) => {
  if (!property) return null;

  const images = property.images && property.images.length > 0 
    ? [property.mainImage, ...property.images].filter(Boolean)
    : [property.mainImage];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#2C2C2C]/20 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 35, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[520px] bg-[#FAF9F6] border-l border-[#E8E6E1] z-50 overflow-y-auto shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm border border-[#E8E6E1] hover:border-[#1B4332] transition-colors"
            >
              <X className="w-4 h-4 text-[#2C2C2C]" />
            </button>

            {/* Hero Image */}
            <div className="relative h-[280px] overflow-hidden">
              {(property.mainImage || property.mainImageUrl) ? (
                <Image 
                  src={property.mainImage || property.mainImageUrl || '/kenya-night.webp'} 
                  alt={property.title || 'Property'} 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              ) : (
                <div className="w-full h-full bg-[#F5F4F0] flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-[#8B8680]" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8956B] font-medium mb-2 block">
                  {property.type || 'Commercial'} · {property.status || 'Available'}
                </span>
                <h2 className="text-2xl font-serif text-white leading-tight">
                  {property.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Address & Price */}
              <div className="space-y-4">
                <div className="flex items-start gap-2 text-[#8B8680]">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">
                    {property.location}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E8E6E1]">
                  <div>
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] block mb-1">
                      Asset Value
                    </span>
                    <p className="text-xl font-serif text-[#2C2C2C]">{property.price}</p>
                    {property.yield && (
                      <p className="text-xs text-[#8B8680] mt-1">Yield: {property.yield}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] block mb-1">
                      Size
                    </span>
                    <div className="flex items-center justify-end gap-1.5">
                      <Maximize2 className="w-4 h-4 text-[#8B8680]" />
                      <span className="text-sm font-medium text-[#2C2C2C]">{property.sqft || 'N/A'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="text-[9px] tracking-[0.15em] uppercase bg-[#1B4332] text-white px-3 py-1.5">
                  {property.type || 'Commercial'}
                </span>
                <span className="text-[9px] tracking-[0.15em] uppercase bg-[#F5F4F0] text-[#2C2C2C] px-3 py-1.5 border border-[#E8E6E1]">
                  {property.status || 'Available'}
                </span>
                {property.yield && (
                  <span className="text-[9px] tracking-[0.15em] uppercase bg-[#B8956B] text-white px-3 py-1.5">
                    Yield: {property.yield}
                  </span>
                )}
                {property.tenure && (
                  <span className="text-[9px] tracking-[0.15em] uppercase bg-[#F5F4F0] text-[#2C2C2C] px-3 py-1.5 border border-[#E8E6E1]">
                    {property.tenure}
                  </span>
                )}
              </div>

              {/* Description */}
              {property.description && (
                <div>
                  <h3 className="text-sm font-serif text-[#2C2C2C] mb-3">Investment Summary</h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed line-clamp-4">
                    {property.description}
                  </p>
                </div>
              )}

              {/* Features */}
              {property.features && property.features.length > 0 && (
                <div>
                  <h3 className="text-sm font-serif text-[#2C2C2C] mb-3">Key Investment Attributes</h3>
                  <ul className="grid grid-cols-1 gap-2">
                    {property.features.slice(0, 6).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#B8956B] mt-2 shrink-0" />
                        <span className="text-xs text-[#5A5A5A]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technical Details */}
              {property.details && property.details.length > 0 && (
                <div className="bg-white border border-[#E8E6E1] p-4">
                  <h3 className="text-xs tracking-[0.15em] uppercase text-[#8B8680] mb-3">Technical Specifications</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {property.details.map((detail, index) => (
                      <div key={index}>
                        <span className="text-[10px] text-[#8B8680] block">{detail.label}</span>
                        <span className="text-xs text-[#2C2C2C]">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Financial Metrics */}
              {property.investment && (
                <div className="bg-[#1B4332]/5 border border-[#1B4332]/10 p-4">
                  <h3 className="text-xs tracking-[0.15em] uppercase text-[#1B4332] mb-3">Financial Performance</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {property.investment.annualIncome && (
                      <div>
                        <span className="text-[10px] text-[#8B8680] block">Annual Income</span>
                        <span className="text-sm font-medium text-[#2C2C2C]">{property.investment.annualIncome}</span>
                      </div>
                    )}
                    {property.investment.totalROI && (
                      <div>
                        <span className="text-[10px] text-[#8B8680] block">Target ROI</span>
                        <span className="text-sm font-medium text-[#2C2C2C]">{property.investment.totalROI}</span>
                      </div>
                    )}
                    {property.investment.appreciationRate && (
                      <div>
                        <span className="text-[10px] text-[#8B8680] block">Appreciation</span>
                        <span className="text-sm font-medium text-[#2C2C2C]">{property.investment.appreciationRate}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Regulatory */}
              {property.regulatory && (
                <div className="flex flex-wrap gap-2">
                  {property.regulatory.fcaCompliant && (
                    <span className="text-[9px] tracking-[0.1em] uppercase bg-green-50 text-green-700 px-2 py-1 border border-green-200">
                      FCA Compliant
                    </span>
                  )}
                  {property.regulatory.sicr && (
                    <span className="text-[9px] tracking-[0.1em] uppercase bg-blue-50 text-blue-700 px-2 py-1 border border-blue-200">
                      SICR Compliant
                    </span>
                  )}
                  {property.regulatory.stampDuty && (
                    <span className="text-[9px] tracking-[0.1em] uppercase bg-amber-50 text-amber-700 px-2 py-1 border border-amber-200">
                      Stamp Duty Included
                    </span>
                  )}
                </div>
              )}

              {/* Agent Card */}
              {property.agent && (
                <div className="bg-white border border-[#E8E6E1] p-5">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B8680] mb-4">Portfolio Agent</p>
                  <h3 className="text-lg font-serif mb-1">{property.agent.name}</h3>
                  <p className="text-xs text-[#B8956B] mb-4">{property.agent.title}</p>
                  
                  <div className="space-y-2">
                    {property.agent.phone && (
                      <a 
                        href={`tel:${property.agent.phone}`}
                        className="flex items-center gap-3 text-sm text-[#5A5A5A] hover:text-[#8B7355] transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        <span>{property.agent.phone}</span>
                      </a>
                    )}
                    {property.agent.email && (
                      <a 
                        href={`mailto:${property.agent.email}`}
                        className="flex items-center gap-3 text-sm text-[#5A5A5A] hover:text-[#8B7355] transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span>{property.agent.email}</span>
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="space-y-3">
                <a 
                  href={`/uk-properties/${property.slug}`}
                  className="w-full py-4 bg-[#2C2C2C] text-[#F8F7F4] text-[12px] tracking-[0.2em] uppercase font-medium text-center block hover:bg-[#8B7355] transition-colors duration-500"
                >
                  View Full Details
                </a>
                <a 
                  href="/contact"
                  className="w-full py-4 border border-[#2C2C2C] text-[#2C2C2C] text-[12px] tracking-[0.2em] uppercase font-medium text-center block hover:bg-[#2C2C2C] hover:text-white transition-colors duration-500"
                >
                  Request Private Viewing
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Main Component
const UKPropertiesClient = ({ properties = [] }: UKPropertiesClientProps) => {
  // Use default properties if no properties from Sanity
  const displayProperties = properties.length > 0 ? properties : defaultProperties;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [showMap, setShowMap] = useState(false);
  const [isDarkMap, setIsDarkMap] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [drawerProperty, setDrawerProperty] = useState<UKProperty | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedFilters, setExpandedFilters] = useState(false);

  // Get unique property types for filter
  const propertyTypes = useMemo(() => {
    const types = new Set(displayProperties.map(p => p.type).filter(Boolean));
    return ['all', ...Array.from(types)];
  }, [displayProperties]);

  // Filter properties
  const filteredProperties = useMemo(() => {
    return displayProperties.filter(property => {
      const matchesSearch = !searchQuery || 
        property.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.city?.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesType = selectedType === 'all' || property.type === selectedType;
      
      return matchesSearch && matchesType;
    });
  }, [displayProperties, searchQuery, selectedType]);

  // Check if there are properties with coordinates for map
  const hasMapProperties = useMemo(() => {
    return filteredProperties.some(p => p.coordinates?.lat && p.coordinates?.lng);
  }, [filteredProperties]);

  // Transform properties for Mapbox - only those with coordinates
  const mapProperties = useMemo((): Property[] => {
    return filteredProperties
      .filter(p => p.coordinates?.lat && p.coordinates?.lng)
      .map(transformToProperty) as Property[];
  }, [filteredProperties]);

  // Show map by default if there are map properties
  useEffect(() => {
    if (hasMapProperties && viewMode === 'map') {
      setShowMap(true);
    }
  }, [hasMapProperties, viewMode]);

  const handleOpenDrawer = useCallback((property: UKProperty) => {
    setDrawerProperty(property);
    setDrawerOpen(true);
  }, []);

  // Handle map pin click - convert Property back to UKProperty
  const handleMapPinClick = useCallback((property: Property) => {
    const ukProp = filteredProperties.find(p => p._id === property._id);
    if (ukProp) {
      setDrawerProperty(ukProp);
      setDrawerOpen(true);
    }
  }, [filteredProperties]);

  const handleCloseDrawer = useCallback(() => {
    setDrawerOpen(false);
    setTimeout(() => setDrawerProperty(null), 300);
  }, []);

  const getStatusColor = (status?: string) => {
    switch (status?.toLowerCase()) {
      case 'under offer':
        return 'bg-amber-600';
      case 'sold':
        return 'bg-red-600';
      default:
        return 'bg-green-600';
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#2C2C2C]">
      
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B7355]/5 blur-[120px] rounded-full" />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-[1px] bg-[#8B7355]" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">
              UK Collection
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8">
            Prime UK <span className="italic text-[#8B7355] font-light">Properties</span>
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-12 items-end mt-12">
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light border-l border-[#8B7355]/30 pl-6">
              A curated collection of exceptional properties across the United Kingdom. 
              Each asset represents institutional-grade investment opportunities in prime locations.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#2C2C2C] text-[#F8F7F4] text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-[#8B7355] transition-colors duration-500"
              >
                Request Private Viewing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="sticky top-0 z-40 bg-[#F8F7F4]/95 backdrop-blur-sm border-b border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4">
          <div className="flex flex-wrap items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 min-w-[200px] max-w-[400px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B8680]" />
              <input
                type="text"
                placeholder="Search by location or property..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-[#E8E6E1] text-sm focus:outline-none focus:border-[#8B7355] transition-colors"
              />
            </div>

            {/* Property Type Filter */}
            <div className="relative">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="appearance-none pl-4 pr-10 py-3 bg-white border border-[#E8E6E1] text-sm cursor-pointer focus:outline-none focus:border-[#8B7355]"
              >
                {propertyTypes.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B8680] pointer-events-none" />
            </div>

            {/* View Toggle */}
            <div className="flex items-center border border-[#E8E6E1]">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 ${viewMode === 'grid' ? 'bg-[#2C2C2C] text-white' : 'bg-white text-[#8B8680]'} transition-colors`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => { setViewMode('map'); setShowMap(true); }}
                className={`p-3 ${viewMode === 'map' ? 'bg-[#2C2C2C] text-white' : 'bg-white text-[#8B8680]'} transition-colors`}
              >
                <Map className="w-4 h-4" />
              </button>
            </div>

            {/* Results count */}
            <span className="text-sm text-[#8B8680] ml-auto">
              {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'}
            </span>
          </div>
        </div>
      </section>

      {/* Map Section (when toggled) */}
      {showMap && viewMode === 'map' && (
        <section className="border-b border-[#E8E6E1]">
          <div className="h-[500px] relative">
            <PropertyMap 
              properties={mapProperties}
              hoveredId={hoveredId}
              selectedId={drawerProperty?._id || null}
              onPinHover={setHoveredId}
              onPinClick={handleMapPinClick}
              isDark={isDarkMap}
              onStyleChange={setIsDarkMap}
              renderPopup={(prop, onClose) => (
                <div className="p-3 min-w-[180px]">
                  <h3 className="font-serif text-sm mb-1 line-clamp-1">{prop.title}</h3>
                  <p className="text-xs text-gray-600 line-clamp-1">{prop.address}, {prop.city}</p>
                  <p className="font-medium text-sm mt-1">{prop.price}</p>
                  <button 
                    onClick={onClose}
                    className="mt-2 text-xs text-gray-500 hover:text-gray-700"
                  >
                    Close
                  </button>
                </div>
              )}
            />
            
            {/* Map Controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button
                onClick={() => setIsDarkMap(!isDarkMap)}
                className="p-3 bg-white border border-[#E8E6E1] hover:border-[#8B7355] transition-colors shadow-sm"
                title={isDarkMap ? 'Light Mode' : 'Dark Mode'}
              >
                {isDarkMap ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setShowMap(false)}
                className="p-3 bg-white border border-[#E8E6E1] hover:border-[#8B7355] transition-colors shadow-sm"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Properties Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {filteredProperties.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#8B8680]">No properties found matching your criteria.</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedType('all'); }}
                className="mt-4 text-[#8B7355] text-sm hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <motion.article
                  key={property._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group bg-white border border-[#E5E2DC] overflow-hidden hover:shadow-lg transition-shadow duration-500 cursor-pointer"
                  onClick={() => handleOpenDrawer(property)}
                >
                  {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#E5E2DC]">
                  {(property.mainImage || property.mainImageUrl) ? (
                    <img
                      src={
                        typeof property.mainImage === 'string'
                          ? property.mainImage
                          : typeof property.mainImageUrl === 'string'
                          ? property.mainImageUrl
                          : '/kenya-night.webp'
                      }
                      alt={property.title || 'Property image'}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/kenya-night.webp';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-[#F5F4F0] flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-8 h-8 text-[#8B8680] mx-auto mb-2" />
                        <span className="text-xs text-[#8B8680]">No Image</span>
                      </div>
                    </div>
                  )}

                  {property.status && (
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 ${getStatusColor(property.status)} text-[10px] tracking-[0.2em] uppercase text-white font-medium`}>
                        {property.status}
                      </span>
                    </div>
                  )}

                  {property.type && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-[#2C2C2C]/80 text-[10px] tracking-[0.2em] uppercase text-white font-medium">
                        {property.type}
                      </span>
                    </div>
                  )}
                </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-3 h-3 text-[#8B7355]" />
                      <span className="text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A]">
                        {property.city}, {property.region}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif mb-2 text-[#2C2C2C] group-hover:text-[#8B7355] transition-colors duration-500 line-clamp-1">
                      {property.title}
                    </h3>

                    <p className="text-xs text-[#8B8680] mb-4 line-clamp-2">
                      {property.subtitle || property.location}
                    </p>

                    {/* Features */}
                    <div className="flex items-center gap-4 mb-4 text-[12px] text-[#5A5A5A]">
                      {property.sqft && (
                        <div className="flex items-center gap-1">
                          <Square className="w-3 h-3" strokeWidth={1} />
                          <span>{property.sqft}</span>
                        </div>
                      )}
                      {property.yield && (
                        <div className="flex items-center gap-1">
                          <PoundSterling className="w-3 h-3" strokeWidth={1} />
                          <span>{property.yield} yield</span>
                        </div>
                      )}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#E5E2DC]">
                      <div className="flex items-center gap-2">
                        <PoundSterling className="w-4 h-4 text-[#8B7355]" strokeWidth={1} />
                        <span className="text-lg font-serif text-[#2C2C2C]">{property.price}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-medium group-hover:text-[#2C2C2C] transition-colors duration-300">
                        <span>Quick View</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#2C2C2C] text-[#F8F7F4]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Access <span className="italic text-[#C4B59D] font-light">Off-Market</span> Opportunities
          </h2>
          <p className="text-[15px] leading-[1.8] text-[#A8A39D] font-light max-w-2xl mx-auto mb-10">
            Our private collection includes properties not publicly listed. 
            Contact our UK office for exclusive access.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#C4B59D] text-[12px] tracking-[0.2em] uppercase text-[#F8F7F4] font-medium hover:bg-[#C4B59D] hover:text-[#2C2C2C] transition-all duration-500"
          >
            Contact UK Office
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* App Drawer */}
      <PropertyDrawer
        property={drawerProperty}
        isOpen={drawerOpen}
        onClose={handleCloseDrawer}
      />
    </div>
  );
};

export default UKPropertiesClient;
