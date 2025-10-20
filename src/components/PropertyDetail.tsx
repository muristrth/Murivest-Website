'use client';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft,
  Share2,
  Heart,
  Eye,
  CheckCircle,
  MapPin,
  TrendingUp,
  Download,
  Phone,
  Mail,
  MessageCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Building,
  DollarSign,
  Calendar,
  Users,
  Star,
  Calculator,
  FileText,
  BarChart3,
  Shield,
  Award,
  Crown,
  Clock,
  Globe
} from 'lucide-react';

// --- Type Definition for Safety and Clarity ---

interface Property {
  title: string;
  subtitle: string;
  location: string;
  type: string;
  price: string;
  priceKsh: string;
  yield: string;
  images: string[];
  features: string[];
  occupancyRate: string;
  description: string;
  details: Record<string, string>;
  investment: {
    totalInvestment: number;
    monthlyIncome: number;
    annualIncome: number;
    netYield: number;
    appreciationRate: number;
    totalROI: number;
  };
}

// Define the shape of propertyData with string keys that map to Property objects
interface PropertyData {
    [key: string]: Property;
}


const propertyData: PropertyData = {
  1: {
    title: "Best Western Meridian Hotel",
    subtitle: "Nairobi Central Business District",
    location: "Nairobi CBD",
    type: "Hospitality",
    price: "$10,000,000",
    priceKsh: "KSh 1.2B",
    yield: "15.2%",
    images: [
      'https://content.knightfrank.com/property/hub2547666/images/a531920b-a627-43ed-905e-eacd1b941068-0.jpg?cio=true&w=1200',
      'https://content.knightfrank.com/property/hub2547666/images/82c7a8ae-a715-41ff-a906-e892f78acc0a-0.jpg?cio=true&w=1200',
      'https://content.knightfrank.com/property/hub2547666/images/8a0ac1f8-1e08-4827-ac66-409773bed6b1-0.jpg?cio=true&w=1200',
      'https://content.knightfrank.com/property/hub2547666/images/c59d11e2-6a4b-4700-97e4-6149f4473726-0.jpg?cio=true&w=1200'
    ],
    features: ["119 Premium Suites", "3.5 Star Rating", "Executive Conference", "Basement Parking", "Fine Dining", "Spa & Wellness"],
    occupancyRate: "95%",
    description: "An exceptional hospitality investment in East Africa's financial capital. This established property delivers consistent institutional-grade returns.",
    details: {
      suites: "119",
      floors: "6 + Basement",
      year: "Established",
      occupancy: "95%",
      yield: "15.2%",
      appreciation: "12% p.a."
    },
    investment: {
      totalInvestment: 1200000000,
      monthlyIncome: 17000000,
      annualIncome: 200000000,
      netYield: 15.2,
      appreciationRate: 12,
      totalROI: 27.2
    }
  },
  10: {
    title: "Kenya Comfort Hotel Building",
    subtitle: "Prime Nairobi CBD Sale & Leaseback",
    location: "Monrovia St & Muindi Mbingu St",
    type: "Commercial / Hospitality",
    price: "$5,000,000",
    priceKsh: "KSh 680M",
    yield: "8.2%",
    images: [
      "https://www.africanparadisesafaris.com/images/kenya-comfort-hotel.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/9c/3c/1a/kch-day-view.jpg?w=900&h=500&s=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/593180116.jpg?k=54fb09ca6a5c9b6e676c7ebbc54424857c0634e009bf445365db3a41ba689d65&o=&hp=1"
    ],
    features: ["3,530m² Total Area", "Prime CBD Location", "Sale & Leaseback", "100% Occupied", "Mixed Use", "Expansion Ready"],
    occupancyRate: "100%",
    description: "Secure sale and leaseback opportunity in Nairobi's commercial heart. Immediate income with strategic expansion potential.",
    details: {
      area: "3,530m²",
      floors: "5 + Rooftop",
      lease: "KSh 4.5M/month",
      term: "5 Years Renewable",
      occupancy: "100%",
      appreciation: "10% p.a."
    },
    investment: {
      totalInvestment: 680000000,
      monthlyIncome: 4500000,
      annualIncome: 54000000,
      netYield: 8.2,
      appreciationRate: 10,
      totalROI: 18.2
    }
  },
  2: {
    title: "Buffalo Mall & Development Land",
    subtitle: "Naivasha Tourism Gateway",
    location: "Naivasha",
    type: "Retail & Development",
    price: "$5,000,000",
    priceKsh: "KSh 750M",
    yield: "11.0%",
    images: [
      'https://content.knightfrank.com/property/hub2429185/images/79bb901f-3dba-41b8-9601-d462f09fa400-0.jpg?cio=true&w=1200',
      'https://content.knightfrank.com/property/hub2429185/images/d52cc1be-f7b5-44af-9899-4993fbef9d32-0.jpg?cio=true&w=1200',
      'https://content.knightfrank.com/property/hub2429185/images/1dab0404-50f6-4502-83f3-bcd333726e64-0.jpg?cio=true&w=1200'
    ],
    features: ["58,965 sqft Retail", "33 Units", "9 Acres Land", "70% Occupied", "Highway Access", "Tourist Hub"],
    occupancyRate: "70%",
    description: "Strategic retail investment with substantial development land in Kenya's rapidly growing tourism corridor.",
    details: {
      retail: "58,965 sqft",
      land: "9 Acres",
      units: "33",
      occupancy: "70%",
      yield: "11.0%",
      appreciation: "8% p.a."
    },
    investment: {
      totalInvestment: 550000000,
      monthlyIncome: 5041667,
      annualIncome: 60500000,
      netYield: 11.0,
      appreciationRate: 8,
      totalROI: 19.0
    }
  },
  3: {
    title: "ICD Industrial Complex",
    subtitle: "Mombasa Road Logistics Hub",
    location: "Mombasa Road",
    type: "Industrial & Logistics",
    price: "$8,500,000",
    priceKsh: "KSh 1.0B",
    yield: "14.8%",
    images: [
      "/p/IMG-20250813-WA0001.jpg",
      "/p/IMG-20250813-WA0004.jpg",
      "/p/IMG-20250813-WA0005.jpg"
    ],
    features: ["3 Acres", "99,300 sqft", "4-Storey Office", "Showroom", "Warehouses", "Workshops"],
    occupancyRate: "85%",
    description: "Premier industrial complex at the convergence of JKIA, ICD, and SGR terminus. Strategic infrastructure investment.",
    details: {
      land: "3 Acres",
      area: "99,300 sqft",
      offices: "4-Storey Block",
      occupancy: "85%",
      yield: "14.8%",
      appreciation: "10% p.a."
    },
    investment: {
      totalInvestment: 1000000000,
      monthlyIncome: 12333333,
      annualIncome: 148000000,
      netYield: 14.8,
      appreciationRate: 10,
      totalROI: 24.8
    }
  },
  4: {
    title: "BASL House",
    subtitle: "Kumasi Road, Nairobi CBD",
    location: "Nairobi CBD",
    type: "Commercial",
    price: "$1,450,000",
    priceKsh: "KSh 190M",
    yield: "16.5%",
    images: [
      'https://content.knightfrank.com/property/hub2448515/images/89393bfa-52be-4c67-8bbf-aee9cf35b19d-0.jpg?cio=true&w=1200',
      'https://content.knightfrank.com/property/hub2448515/images/3d3d3b2e-cabe-4a33-8e96-511294b670a0-0.jpg?cio=true&w=1200'
    ],
    features: ["18,988 sqft", "4-Storey", "100% Occupied", "Multiple Tenants", "CBD Core", "High Traffic"],
    occupancyRate: "100%",
    description: "Exceptional income-generating asset in Nairobi's financial district. Consistent returns with established tenant base.",
    details: {
      area: "18,988 sqft",
      floors: "4-Storey",
      occupancy: "100%",
      location: "CBD Core",
      yield: "16.5%",
      appreciation: "8% p.a."
    },
    investment: {
      totalInvestment: 190000000,
      monthlyIncome: 2604167,
      annualIncome: 31350000,
      netYield: 16.5,
      appreciationRate: 8,
      totalROI: 24.5
    }
  },
  5: {
    title: "The Atrium",
    subtitle: "Chaka Road, Kilimani",
    location: "Kilimani",
    type: "Grade A Office",
    price: "$13,500,000",
    priceKsh: "KSh 2.0B",
    yield: "13.8%",
    images: [
      "/p7/Screenshot 2025-08-27 234422.png",
      "/p7/Screenshot 2025-08-27 234459.png",
      "/p7/Screenshot 2025-08-27 234514.png"
    ],
    features: ["161,019 sqft", "6-Storey", "221 Parking", "Glass Facade", "Courtyard", "International Design"],
    occupancyRate: "92%",
    description: "Award-winning architectural masterpiece in Nairobi's premium office district. Regional headquarters address.",
    details: {
      area: "161,019 sqft",
      floors: "6-Storey",
      parking: "221 Bays",
      occupancy: "92%",
      yield: "13.8%",
      appreciation: "9% p.a."
    },
    investment: {
      totalInvestment: 1485000000,
      monthlyIncome: 17081250,
      annualIncome: 204975000,
      netYield: 13.8,
      appreciationRate: 9,
      totalROI: 22.8
    }
  },
  6: {
    title: "Uchumi House",
    subtitle: "Aga Khan Walk, Nairobi CBD",
    location: "Nairobi CBD",
    type: "Commercial",
    price: "$4,400,000",
    priceKsh: "KSh 570M",
    yield: "12.2%",
    images: [
      "/p1/IMG-20250813-WA0009.jpg",
      "/p1/IMG-20250813-WA0010.jpg"
    ],
    features: ["4,491 sqm", "5-Storey + Basement", "Prime CBD", "Established", "Excellent Visibility", "Landmark"],
    occupancyRate: "88%",
    description: "Strategic commercial landmark on Aga Khan Walk. Exceptional visibility and access to Kenya's business community.",
    details: {
      area: "4,491 sqm",
      floors: "5 + Basement",
      occupancy: "88%",
      location: "Aga Khan Walk",
      yield: "12.2%",
      appreciation: "7% p.a."
    },
    investment: {
      totalInvestment: 562500000,
      monthlyIncome: 5729167,
      annualIncome: 68750000,
      netYield: 12.2,
      appreciationRate: 7,
      totalROI: 19.2
    }
  },
  7: {
    title: "The Panari Hotel",
    subtitle: "Mombasa Road, Nairobi West",
    location: "Mombasa Road",
    type: "5-Star Hospitality",
    price: "$25,000,000",
    priceKsh: "KSh 3.2B",
    yield: "18.5%",
    images: [
      "/p8/Screenshot 2025-08-18 224428.png",
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
    ],
    features: ["136 Luxury Suites", "5-Star Rating", "2.5 Acres", "12 Meeting Rooms", "4 Restaurants", "350 Parking"],
    occupancyRate: "88%",
    description: "Kenya's premier 5-star hospitality flagship. Exceptional returns serving international dignitaries and business leaders.",
    details: {
      suites: "136",
      grounds: "2.5 Acres",
      parking: "350 Vehicles",
      occupancy: "88%",
      yield: "18.5%",
      appreciation: "15% p.a."
    },
    investment: {
      totalInvestment: 3500000000,
      monthlyIncome: 53958333,
      annualIncome: 647500000,
      netYield: 18.5,
      appreciationRate: 15,
      totalROI: 33.5
    }
  },
  8: {
    title: "Absa Towers",
    subtitle: "Loita & Market Street, Nairobi CBD",
    location: "Nairobi CBD",
    type: "Grade A Office Tower",
    price: "$16,200,000",
    priceKsh: "KSh 2.1B",
    yield: "9.0%",
    images: [
      "/p3/ABSA_Towers.png",
      "/p3/Screenshot 2025-08-14 212635.png",
      "/p3/Screenshot 2025-08-14 212644.png"
    ],
    features: ["17-Storey Tower", "24,768 sqm", "160 Parking", "99.8% Occupied", "Blue-Chip Tenants", "Financial District"],
    occupancyRate: "99.8%",
    description: "Iconic financial district tower with blue-chip corporate tenants. Irreplaceable trophy asset delivering institutional returns.",
    details: {
      floors: "17-Storey",
      area: "13,313 sqm NLA",
      parking: "160 Bays",
      occupancy: "99.8%",
      yield: "9.0%",
      appreciation: "12% p.a."
    },
    investment: {
      totalInvestment: 2035000000,
      monthlyIncome: 15500000,
      annualIncome: 185000000,
      netYield: 9.0,
      appreciationRate: 12.0,
      totalROI: 21.0
    }
  },
  9: {
    title: "Tembo Coop House",
    subtitle: "Moi Avenue, Nairobi CBD",
    location: "Nairobi CBD",
    type: "Heritage Commercial",
    price: "$3,000,000",
    priceKsh: "KSh 385M",
    yield: "10.9%",
    images: [
      "https://images.pexels.com/photos/1647416/pexels-photo-1647416.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      "https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
    ],
    features: ["30,174 Sq.Ft.", "Historic Building", "Ground Retail", "7 Office Floors", "100% Occupied", "Moi Avenue"],
    occupancyRate: "100%",
    description: "Distinguished heritage commercial asset on Nairobi's historic business artery. Legacy investment with modern returns.",
    details: {
      area: "30,174 Sq.Ft.",
      floors: "Ground + 7",
      occupancy: "100%",
      location: "Moi Avenue",
      yield: "10.9%",
      appreciation: "6% p.a."
    },
    investment: {
      totalInvestment: 385000000,
      monthlyIncome: 3500000,
      annualIncome: 42000000,
      netYield: 10.9,
      appreciationRate: 6,
      totalROI: 16.9
    }
  }
};


const PropertyDetail = () => {
  // useParams returns an object with string or string[] values. We must explicitly get the ID.
  const params = useParams();
  const id = params.id as string | undefined; // id will be a string or undefined
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  // Removed unused states: investmentAmount, activeTab
  
  // Use a string key for type-safe access
  const property: Property | undefined = id ? propertyData[id] : undefined;

  // --- Effects and Handlers ---

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [id]);

  useEffect(() => {
    if (property && property.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [id, property]); // Added property as a dependency for completeness

  const handleWhatsAppContact = (message: string) => {
    if (!property) return; // Guard clause
    const phoneNumber = "254115277610";
    const encodedMessage = encodeURIComponent(
      `Regarding ${property.title} - ${property.location}. ${message}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleDownloadBrochure = () => {
    if (!property) return; // Guard clause
    const link = document.createElement('a');
    link.href = `/brochures/${property.title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
    link.download = `${property.title.replace(/\s+/g, '-').toLowerCase()}-prospectus.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const nextImage = () => {
    if (!property) return; // Guard clause
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    if (!property) return; // Guard clause
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-2xl text-gray-900 mb-6">Property Not Available</h2>
          <Link href="/properties" className="text-[#1e3a5f] hover:text-[#c9a961]">
            Return to Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      
      {/* Refined Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-8">
          <div className="flex items-center justify-between">
            <Link 
              href="/properties"
              className="flex items-center text-gray-600 hover:text-[#1e3a5f] transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 mr-3 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm tracking-wider">BACK TO COLLECTION</span>
            </Link>
            
            <div className="flex items-center gap-6">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="p-3 hover:bg-gray-50 rounded-full transition-colors"
              >
                <Heart className={`h-5 w-5 ${isLiked ? 'fill-[#1e3a5f] text-[#1e3a5f]' : 'text-gray-400'}`} />
              </button>
              <button className="p-3 hover:bg-gray-50 rounded-full transition-colors">
                <Share2 className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        
        {/* --- MODIFIED: Combined Hero Text and Image Gallery into a single, inline grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-20">

          {/* LEFT COLUMN: Hero Text (5/12 width on large screens) */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-12 h-px bg-[#c9a961]"></div>
                <span className="text-[#c9a961] text-xs tracking-[0.3em] uppercase">Exclusive Offering</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl text-[#1e3a5f] mb-5 font-luxury tracking-tight leading-tight">
                {property.title}
              </h1>
              
              <div className="flex items-center text-gray-500 mb-10">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-base tracking-wide">{property.subtitle}</span>
              </div>
              
              <div className="flex items-baseline gap-4 mb-10">
                <div className="text-3xl text-[#1e3a5f] font-luxury">{property.price}</div>
                <div className="text-base text-gray-400">({property.priceKsh})</div>
              </div>

              <p className="text-base text-gray-600 leading-relaxed max-w-3xl font-luxury">
                {property.description}
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Image Gallery (7/12 width on large screens) */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <div className="relative group cursor-pointer" onClick={() => setIsImageModalOpen(true)}>
              {/* Image Aspect Ratio adjusted to 3:2 (paddingBottom: '66.66%') */}
              <div className="relative overflow-hidden bg-gray-100" style={{ paddingBottom: '66.66%' }}>
                <img 
                  src={property.images[currentImageIndex]} 
                  alt={property.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {property.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-3 transition-all opacity-0 group-hover:opacity-100 shadow-lg"
                  >
                    <ChevronLeft className="h-5 w-5 text-[#1e3a5f]" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-3 transition-all opacity-0 group-hover:opacity-100 shadow-lg"
                  >
                    <ChevronRight className="h-5 w-5 text-[#1e3a5f]" />
                  </button>
                </>
              )}
              
              <div className="absolute bottom-6 right-6 bg-[#1e3a5f]/90 text-white px-5 py-2 text-xs tracking-[0.2em]">
                {currentImageIndex + 1} / {property.images.length}
              </div>

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Eye className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {property.images.length > 1 && (
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 mt-6">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative overflow-hidden transition-all ${
                      index === currentImageIndex 
                        ? 'ring-2 ring-[#c9a961] ring-offset-2' 
                        : 'opacity-60 hover:opacity-100'
                    }`}
                    style={{ paddingBottom: '75%' }}
                  >
                    <img 
                      src={image} 
                      alt={`${property.title} ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </div>
        {/* --- END MODIFIED SECTION --- */}

        {/* Details Grid - Clean & Organized */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-20 border-t border-gray-100">
          
          {/* Left Column - Specifications */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xs tracking-[0.3em] text-gray-400 mb-6 uppercase">Property Details</h3>
              <div className="space-y-4">
                {Object.entries(property.details).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-baseline border-b border-gray-50 pb-3">
                    <span className="text-gray-500 capitalize text-sm tracking-wide">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="text-[#1e3a5f] font-light">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.3em] text-gray-400 mb-6 uppercase">Key Features</h3>
              <div className="space-y-3">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-1 h-1 bg-[#c9a961] rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform"></div>
                    <span className="text-gray-600 font-light text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Column - Investment Metrics */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xs tracking-[0.3em] text-gray-400 mb-6 uppercase">Investment Returns</h3>
              <div className="space-y-6">
                <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-[#c9a961] before:to-transparent">
                  <div className="text-xs text-gray-500 mb-1 tracking-wide uppercase">Annual Yield</div>
                  <div className="text-3xl text-[#1e3a5f] font-light">{property.yield}</div>
                </div>
                
                <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-gray-200 before:to-transparent">
                  <div className="text-xs text-gray-500 mb-1 tracking-wide uppercase">Monthly Income</div>
                  <div className="text-xl text-gray-700 font-light">
                    KSh {(property.investment.monthlyIncome / 1000000).toFixed(1)}M
                  </div>
                </div>
                
                <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-gray-200 before:to-transparent">
                  <div className="text-xs text-gray-500 mb-1 tracking-wide uppercase">Annual Income</div>
                  <div className="text-xl text-gray-700 font-light">
                    KSh {(property.investment.annualIncome / 1000000).toFixed(0)}M
                  </div>
                </div>

                <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-gray-200 before:to-transparent">
                  <div className="text-xs text-gray-500 mb-1 tracking-wide uppercase">Total ROI</div>
                  <div className="text-xl text-gray-700 font-light">
                    {property.investment.totalROI}%
                  </div>
                </div>

                <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-gray-200 before:to-transparent">
                  <div className="text-xs text-gray-500 mb-1 tracking-wide uppercase">Capital Appreciation</div>
                  <div className="text-xl text-gray-700 font-light">
                    {property.investment.appreciationRate}% p.a.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-5 w-5 text-[#c9a961]" />
                <h4 className="text-xs tracking-[0.3em] text-gray-600 uppercase">Market Position</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-light">Occupancy</span>
                  <span className="text-[#1e3a5f] font-medium">{property.occupancyRate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-light">Asset Grade</span>
                  <span className="text-[#1e3a5f] font-medium">Institutional</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="border border-gray-200 p-8 bg-gradient-to-br from-white to-gray-50">
              <div className="text-center mb-8">
                <div className="w-10 h-10 border border-[#c9a961] mx-auto mb-5 flex items-center justify-center">
                  <Crown className="h-5 w-5 text-[#c9a961]" />
                </div>
                <h3 className="text-xs tracking-[0.3em] text-gray-400 mb-3 uppercase">Private Consultation</h3>
                <p className="text-gray-600 font-light text-xs leading-relaxed">
                  Arrange a confidential discussion with our investment advisors
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <button
                  onClick={() => handleWhatsAppContact("I would like to arrange a private consultation.")}
                  className="w-full bg-[#1e3a5f] hover:bg-[#152942] text-white py-3.5 transition-colors text-xs tracking-[0.2em] uppercase"
                >
                  Request Consultation
                </button>
                
                <button
                  onClick={handleDownloadBrochure}
                  className="w-full border border-gray-300 hover:border-[#1e3a5f] hover:bg-white text-gray-700 hover:text-[#1e3a5f] py-3.5 transition-all text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2"
                >
                  <FileText className="h-3.5 w-3.5" />
                  Prospectus
                </button>
              </div>

              <div className="space-y-3 pt-6 border-t border-gray-200">
                <div className="flex items-center text-xs text-gray-600">
                  <Phone className="h-3.5 w-3.5 mr-3 text-gray-400" />
                  <span className="font-light">+254 115 277 610</span>
                </div>
                <div className="flex items-center text-xs text-gray-600">
                  <Mail className="h-3.5 w-3.5 mr-3 text-gray-400" />
                  <span className="font-light">investments@murivest.co.ke</span>
                </div>
                <div className="flex items-start text-xs text-gray-600">
                  <Globe className="h-3.5 w-3.5 mr-3 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span className="font-light">Available globally for qualified investors</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-start gap-2.5">
                  <Shield className="h-4 w-4 text-[#c9a961] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-500 leading-relaxed font-light">
                    Available exclusively to qualified investors. Subject to regulatory compliance.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 font-light">Property Type</span>
                    <span className="text-[#1e3a5f]">{property.type}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 font-light">Investment Grade</span>
                    <span className="text-[#1e3a5f]">Institutional</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 font-light">Listing Status</span>
                    <span className="text-green-600">Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="mt-6 border border-gray-100 p-6 bg-white">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-4 w-4 text-[#c9a961]" />
                <h4 className="text-xs tracking-[0.3em] text-gray-600 uppercase">Investment Timeline</h4>
              </div>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                Due diligence and transaction completion typically requires 45-90 days for institutional investors.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA - Elegant & Understated */}
        <div className="py-24 border-t border-gray-100 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="relative w-12 h-12 border border-[#c9a961] mx-auto mb-8 flex items-center justify-center">
              <Building className="h-6 w-6 text-[#c9a961]" />
              <div className="absolute -inset-2 border border-[#c9a961] opacity-20"></div>
            </div>
            
            <h2 className="text-3xl lg:text-4xl text-[#1e3a5f] mb-6 font-light leading-tight">
              Invest in Legacy
            </h2>
            
            <p className="text-base text-gray-600 mb-10 font-light leading-relaxed">
              Join a distinguished circle of international investors in Kenya's premier real estate opportunities.
            </p>
            
            <button
              onClick={() => handleWhatsAppContact("I am interested in learning more about this investment opportunity.")}
              className="inline-block border border-[#1e3a5f] hover:bg-[#1e3a5f] text-[#1e3a5f] hover:text-white px-10 py-3.5 transition-all text-xs tracking-[0.2em] uppercase"
            >
              Begin Conversation
            </button>
          </div>
        </div>

        {/* Legal Disclosure - Subtle */}
        <div className="py-10 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center font-light leading-relaxed max-w-4xl mx-auto">
            All investment opportunities carry inherent risks. Projected returns are estimates based on current market conditions. 
            Past performance does not guarantee future results. Available to accredited investors only. 
            Subject to regulatory compliance and comprehensive due diligence.
          </p>
        </div>
      </div>

      {/* Image Modal - Refined */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageModalOpen(false)}
          >
            <motion.div
              className="relative max-w-6xl max-h-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="absolute -top-16 right-0 text-white/60 hover:text-white transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              
              <img 
                src={property.images[currentImageIndex]} 
                alt={property.title}
                className="max-w-full max-h-[85vh] object-contain"
              />
              
              {property.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 transition-all"
                  >
                    <ChevronLeft className="h-8 w-8 text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 transition-all"
                  >
                    <ChevronRight className="h-8 w-8 text-white" />
                  </button>
                </>
              )}
              
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-white/60 text-sm tracking-wider">
                {currentImageIndex + 1} / {property.images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PropertyDetail;