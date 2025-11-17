'use client';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { DollarSign, Euro, PoundSterling, Coins } from 'lucide-react';

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
  priceGbp: string;
  priceUsd: string;
  priceEur: string;
  yield: string;
  images: string[];
  features: string[];
  occupancyRate: string;
  description: string;
  details: Record<string, string>;
  investment: {
    totalInvestment: string;
    monthlyIncome: string;
    annualIncome: string;
    netYield: string;
    appreciationRate: string;
    totalROI: string;
  };
}

// Define the shape of propertyData with string keys that map to Property objects
interface PropertyData {
    [key: string]: Property;
}


const propertyData: PropertyData = {
  1: {
    title: "Best Western Meridian Hotel",
    subtitle: "A Prime Landmark Hotel For Sale In The Nairobi CBD",
    location: "Nairobi CBD, Kenya",
    type: "Hospitality",
    price: "$10,000,000",
    priceUsd: "$10,000,000",
    priceGbp: "£8,200,000",
    priceEur: "€9,200,000",
    priceKsh: "KSh 1.2B",
    yield: "15.2%",
    images: [
      'https://content.knightfrank.com/property/hub2547666/images/a531920b-a627-43ed-905e-eacd1b941068-0.jpg?cio=true&w=1200',
      'https://content.knightfrank.com/property/hub2547666/images/82c7a8ae-a715-41ff-a906-e892f78acc0a-0.jpg?cio=true&w=1200',
      'https://content.knightfrank.com/property/hub2547666/images/8a0ac1f8-1e08-4827-ac66-409773bed6b1-0.jpg?cio=true&w=1200'
    ],
    features: ["119 Premium Suites", "3.5 Star Rating", "Executive Conference", "Basement Parking", "Fine Dining", "Spa & Wellness", "44yrs remaining on the lease"],
    occupancyRate: "95%",
    description: "An exceptional hospitality investment in East Africa's financial capital. This established property delivers consistent institutional-grade returns.",
    details: {
      suites: "119",
      floors: "6 + Basement",
      year: "Established 1971",
      occupancy: "60%",
      yield: "15.2%",
      appreciation: "12% p.a."
    },
    investment: {
      totalInvestment: "1,200,000,000",
      monthlyIncome: "17,000,000",
      annualIncome: "200,000,000",
      netYield: "15.2%",
      appreciationRate: "12%",
      totalROI: "27.2%"
    }
  },
  2: {
    title: "Buffalo Mall & Development Land",
    subtitle: "Excellent retail investment with significant asset management potential in Naivasha.",
    location: "Naivasha, Kenya",
    type: "Retail & Development",
    price: "KSh 750M",
    priceKsh: "KSh 750M",
    priceUsd: "$6,200,000",
    priceGbp: "£5,100,000",
    priceEur: "€5,700,000",
    yield: "11.0%",
    images: [
      'https://content.knightfrank.com/property/hub2429185/images/79bb901f-3dba-41b8-9601-d462f09fa400-0.jpg?cio=true&w=1200',
      'https://content.knightfrank.com/property/hub2429185/images/d52cc1be-f7b5-44af-9899-4993fbef9d32-0.jpg?cio=true&w=1200'
    ],
    features: ["58,965 sqft Retail", "33 Units", "77yrs remaining on the lease", "70% Occupied", "Highway Access", "Tourist Hub"],
    occupancyRate: "70%",
    description: "A unique investment opportunity strategically located on the northwest edge of Naivasha Central Business District, approximately 95 km and a 90-minute drive from Nairobi. The property is situated immediately off Moi South Lake Road and benefits from direct access from the Nairobi-Nakuru highway. Its location makes it conveniently accessible to both transit and local traffic. The mall is positioned to serve the growing population of Naivasha and the increasing number of tourists visiting the area, making it a prime retail and development asset.",
    details: {
      retail: "58,965 sqft",
      land: "9 Acres",
      units: "33",
      occupancy: "70%",
      yield: "11.0%",
      appreciation: "8% p.a."
    },
    investment: {
      totalInvestment: "550,000,000",
      monthlyIncome: "3,759,167",
      annualIncome: "45,110,000",
      netYield: "11.0%",
      appreciationRate: "8%",
      totalROI: "19.0%"
    }
  },
  3: {
    title: "ICD Industrial Complex Mombasa Road Logistics Hub",
    subtitle: "A 3 Acre Industrial Complex For Sale In An Excellent Location",
    location: "Mombasa Road",
    type: "Industrial",
    price: "KSh 1.0B",
    priceUsd: "$8,500,000",
    priceGbp: "£6,900,000",
    priceEur: "€7,800,000",
    priceKsh: "KSh 1.0B",
    yield: "14.8%",
    images: [
      "/p/IMG-20250813-WA0001.jpg",
      "/p/IMG-20250813-WA0004.jpg",
      "/p/IMG-20250813-WA0005.jpg",
      "/p/IMG-20250813-WA0006.jpg",
      "/p/IMG-20250813-WA0007.jpg",
      "/p/IMG-20250813-WA0008.jpg",
    ],
    features: ["3 Acres", "99,300 sqft", "4-Storey Office", "Showroom", "Warehouses", "Workshops"],
    occupancyRate: "85%",
    description: "The property presents a unique opportunity to acquire a prime site, comprehensively developed with a four storey office block, motor showroom and offices, separate warehouses and motor vehicle workshops with a total gross lettable area of approximately 99,300 square feet. Premier industrial complex at the convergence of JKIA, ICD, and SGR terminus. Strategic infrastructure investment.",
    details: {
      land: "3 Acres",
      area: "99,300 sqft",
      offices: "4-Storey Block",
      occupancy: "100%",
      yield: "20%",
      appreciation: "10% p.a."
    },
    investment: {
      totalInvestment: "1,000,000,000",
      monthlyIncome: "0",
      annualIncome: "0",
      netYield: "18%",
      appreciationRate: "10%",
      totalROI: "30%"
    }
  },
  4: {
    title: "BASL House",
    subtitle: "Kumasi Road, Nairobi CBD",
    location: "Nairobi CBD",
    type: "Commercial",
    price: "$1,450,000",
    priceKsh: "KSh 190M",
    priceUsd: "$1,450,000",
    priceGbp: "£1,200,000",
    priceEur: "€1,350,000",
    yield: "16.5%",
    images: [
      'https://content.knightfrank.com/property/hub2448515/images/89393bfa-52be-4c67-8bbf-aee9cf35b19d-0.jpg?cio=true&w=1200',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80'
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
      totalInvestment: "190,000,000",
      monthlyIncome: "2,604,167",
      annualIncome: "31,350,000",
      netYield: "16.5%",
      appreciationRate: "8%",
      totalROI: "24.5%"
    }
  },
  5: {
    title: "The Atrium, Chaka Road, Kilimani",
    subtitle: "An excellently designed office development with exceptional rental income and high technological specifications for sale in Kilimani.",
    location: "Chaka Road, Kilimani, Kenya",
    type: "Grade A Office",
    price: "$13,500,000",
    priceKsh: "KSh 2.0B",
    priceUsd: "$13,500,000",
    priceGbp: "£11,200,000",
    priceEur: "€12,600,000",
    yield: "13.8%",
    images: [
      "https://ext.same-assets.com/2267512097/3285424901.jpeg",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
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
      totalInvestment: "1,485,000,000",
      monthlyIncome: "17,081,250",
      annualIncome: "204,975,000",
      netYield: "13.8%",
      appreciationRate: "9%",
      totalROI: "22.8%"
    }
  },
  6: {
    title: "Uchumi House",
    subtitle: "Aga Khan Walk, Nairobi CBD",
    location: "Nairobi CBD",
    type: "Commercial",
    price: "$4,400,000",
    priceKsh: "KSh 570M",
    priceUsd: "$4,400,000",
    priceGbp: "£3,650,000",
    priceEur: "€4,100,000",
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
      totalInvestment: "562,500,000",
      monthlyIncome: "5,729,167",
      annualIncome: "68,750,000",
      netYield: "12.2%",
      appreciationRate: "7%",
      totalROI: "19.2%"
    }
  },
  7: {
    title: "The Panari Hotel",
    subtitle: "Mombasa Road, Nairobi West",
    location: "Mombasa Road",
    type: "5-Star Hospitality",
    price: "$25,000,000",
    priceKsh: "KSh 3.2B",
    priceUsd: "$25,000,000",
    priceGbp: "£20,800,000",
    priceEur: "€23,100,000",
    yield: "18.5%",
    images: [
      "https://ext.same-assets.com/2267512097/3134620964.jpeg",
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?w=1200&q=80"
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
      totalInvestment: "3,500,000,000",
      monthlyIncome: "53,958,333",
      annualIncome: "647,500,000",
      netYield: "18.5%",
      appreciationRate: "15%",
      totalROI: "33.5%"
    }
  },
  8: {
    title: "Absa Towers",
    subtitle: "Loita & Market Street, Nairobi CBD",
    location: "Nairobi CBD",
    type: "Grade A Office Tower",
    price: "$16,200,000",
    priceKsh: "KSh 2.1B",
    priceUsd: "$16,200,000",
    priceGbp: "£13,500,000",
    priceEur: "€15,000,000",
    yield: "9.0%",
    images: [
      "https://ext.same-assets.com/2267512097/2522671175.jpeg",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
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
      totalInvestment: "2,035,000,000",
      monthlyIncome: "15,500,000",
      annualIncome: "185,000,000",
      netYield: "9.0%",
      appreciationRate: "12.0%",
      totalROI: "21.0%"
    }
  },
  9: {
    title: "Tembo Coop House",
    subtitle: "Moi Avenue, Nairobi CBD",
    location: "Nairobi CBD",
    type: "Heritage Commercial",
    price: "$3,000,000",
    priceKsh: "KSh 385M",
    priceUsd: "$3,000,000",
    priceGbp: "£2,500,000",
    priceEur: "€2,800,000",
    yield: "10.9%",
    images: [
      "https://images.pexels.com/photos/1647416/pexels-photo-1647416.jpeg?w=1200&q=80",
      "https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?w=1200&q=80"
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
      totalInvestment: "385,000,000",
      monthlyIncome: "3,500,000",
      annualIncome: "42,000,000",
      netYield: "10.9%",
      appreciationRate: "6%",
      totalROI: "16.9%"
    }
  },
  10: {
    title: "Kenya Comfort Hotel Building",
    subtitle: "Prime Nairobi CBD Sale & Leaseback",
    location: "Monrovia St & Muindi Mbingu St",
    type: "Commercial / Hospitality",
    price: "$5,000,000",
    priceKsh: "KSh 680M",
    priceUsd: "$5,000,000",
    priceGbp: "£4,100,000",
    priceEur: "€4,600,000",
    yield: "8.2%",
    images: [
      "https://www.africanparadisesafaris.com/images/kenya-comfort-hotel.jpg",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80"
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
      totalInvestment: "680,000,000",
      monthlyIncome: "4,500,000",
      annualIncome: "54,000,000",
      netYield: "8.2%",
      appreciationRate: "10%",
      totalROI: "18.2%"
    }
  },
  11: {
    title: "70 Chancery Lane",
    subtitle: "London Legal District",
    location: "London, WC2A",
    type: "Prime Office",
    price: "£75,000,000",
    priceKsh: "KSh 13.5B",
    priceUsd: "$91,500,000",
    priceEur: "€85,000,000",
    priceGbp: "£75,000,000",
    yield: "5.5%",
    images: [
      "https://ext.same-assets.com/2541468600/712425661.jpeg",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
    ],
    features: ["77,812 sqft", "4 Car Parking", "Air Conditioning", "Raised Floors", "Net Initial Yield 5.5%", "Grade A"],
    occupancyRate: "100%",
    description: "Premium office building in London's legal district with institutional tenants and excellent transport links.",
    details: {
      area: "77,812 sqft",
      parking: "4 Spaces",
      grade: "Grade A",
      occupancy: "100%",
      yield: "5.5%",
      appreciation: "4% p.a."
    },
    investment: {
      totalInvestment: "13,500,000,000",
      monthlyIncome: "61,875,000",
      annualIncome: "742,500,000",
      netYield: "5.5%",
      appreciationRate: "4%",
      totalROI: "9.5%"
    }
  },
  12: {
    title: "22-23 Princes Street",
    subtitle: "London West End",
    location: "London, W1B",
    type: "Mixed Use",
    price: "£32,500,000",
    priceKsh: "KSh 5.9B",
    priceUsd: "$39,650,000",
    priceEur: "€36,900,000",
    priceGbp: "£32,500,000",
    yield: "3.75%",
    images: [
      "https://ext.same-assets.com/2541468600/2302614904.jpeg",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&q=80"
    ],
    features: ["11,016 sqft", "West End", "Retail Ground Floor", "Net Initial Yield 3.75%", "Prime Location", "Modern Offices"],
    occupancyRate: "100%",
    description: "Exceptional mixed-use building in London's prestigious West End with prime retail and office space.",
    details: {
      area: "11,016 sqft",
      location: "West End",
      retail: "Ground Floor",
      occupancy: "100%",
      yield: "3.75%",
      appreciation: "5% p.a."
    },
    investment: {
      totalInvestment: "5,850,000,000",
      monthlyIncome: "18,281,250",
      annualIncome: "219,375,000",
      netYield: "3.75%",
      appreciationRate: "5%",
      totalROI: "8.75%"
    }
  },
  13: {
    title: "Estuary House",
    subtitle: "Liverpool Business Park",
    location: "Leeward Drive, Speke, Liverpool",
    type: "Office",
    price: "£5,200,000",
    priceKsh: "KSh 936M",
    priceUsd: "$6,336,000",
    priceEur: "€5,904,000",
    priceGbp: "£5,200,000",
    yield: "15%",
    images: [
      "https://ext.same-assets.com/2541468600/3801818977.jpeg",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80"
    ],
    features: ["75,623 sqft", "Business Park", "Air Conditioning", "Net Initial Yield 15%", "Transport Links", "Parking"],
    occupancyRate: "95%",
    description: "Large office complex in established business park with excellent yield and regional connectivity.",
    details: {
      area: "75,623 sqft",
      type: "Business Park",
      occupancy: "95%",
      yield: "15%",
      appreciation: "3% p.a."
    },
    investment: {
      totalInvestment: "936,000,000",
      monthlyIncome: "11,700,000",
      annualIncome: "140,400,000",
      netYield: "15%",
      appreciationRate: "3%",
      totalROI: "18%"
    }
  },
  14: {
    title: "307 Euston Road",
    subtitle: "King's Cross Development Zone",
    location: "London, NW1",
    type: "Modern Office",
    price: "£14,000,000",
    priceKsh: "KSh 2.52B",
    priceUsd: "$17,040,000",
    priceEur: "€15,888,000",
    priceGbp: "£14,000,000",
    yield: "6.34%",
    images: [
      "https://ext.same-assets.com/2541468600/1105006406.jpeg",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
    ],
    features: ["18,102 sqft", "Air Conditioning", "Raised Floors", "Shower Facilities", "Net Initial Yield 6.34%", "King's Cross"],
    occupancyRate: "100%",
    description: "Modern office building near King's Cross with excellent connectivity and strong rental growth prospects.",
    details: {
      area: "18,102 sqft",
      location: "King's Cross",
      occupancy: "100%",
      yield: "6.34%",
      appreciation: "6% p.a."
    },
    investment: {
      totalInvestment: "2,520,000,000",
      monthlyIncome: "13,300,000",
      annualIncome: "159,760,000",
      netYield: "6.34%",
      appreciationRate: "6%",
      totalROI: "12.34%"
    }
  },
  15: {
    title: "Vintners Place",
    subtitle: "City of London Financial District",
    location: "68 Upper Thames Street, EC4V",
    type: "Office Tower",
    price: "£140,000,000",
    priceKsh: "KSh 25.2B",
    priceUsd: "$170,400,000",
    priceEur: "€158,880,000",
    priceGbp: "£140,000,000",
    yield: "9.78%",
    images: [
      "https://ext.same-assets.com/2541468600/3522491577.jpeg",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
    ],
    features: ["274,175 sqft", "City Location", "Grade A", "River Views", "Net Initial Yield 9.78%", "Landmark"],
    occupancyRate: "100%",
    description: "Landmark office tower in the City of London financial district with exceptional income and capital growth.",
    details: {
      area: "274,175 sqft",
      location: "City of London",
      grade: "Grade A",
      occupancy: "100%",
      yield: "9.78%",
      appreciation: "4% p.a."
    },
    investment: {
      totalInvestment: "25,200,000,000",
      monthlyIncome: "205,380,000",
      annualIncome: "2,464,560,000",
      netYield: "9.78%",
      appreciationRate: "4%",
      totalROI: "13.78%"
    }
  },
  16: {
    title: "The Great Eastern Wharf Estate",
    subtitle: "Battersea Riverside",
    location: "London, SW11",
    type: "Office Estate",
    price: "£46,000,000",
    priceKsh: "KSh 8.28B",
    priceUsd: "$56,040,000",
    priceEur: "€52,080,000",
    priceGbp: "£46,000,000",
    yield: "5.25%",
    images: [
      "https://ext.same-assets.com/2541468600/4022238478.jpeg",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
    ],
    features: ["52,407 sqft", "Riverside", "Modern Design", "Parking", "Net Initial Yield 5.25%", "Thames Frontage"],
    occupancyRate: "100%",
    description: "Contemporary office estate in vibrant Battersea with Thames frontage and excellent capital growth potential.",
    details: {
      area: "52,407 sqft",
      location: "Battersea",
      riverside: "Thames Frontage",
      occupancy: "100%",
      yield: "5.25%",
      appreciation: "7% p.a."
    },
    investment: {
      totalInvestment: "8,280,000,000",
      monthlyIncome: "36,225,000",
      annualIncome: "434,700,000",
      netYield: "5.25%",
      appreciationRate: "7%",
      totalROI: "12.25%"
    }
  },
  17: {
    title: "Former Wilko & Car Park",
    subtitle: "Mansfield Town Centre",
    location: "32-38 Clumber Street, Mansfield",
    type: "Retail",
    price: "£900,000",
    priceKsh: "KSh 162M",
    priceUsd: "$1,200,000",
    priceEur: "€1,350,000",
    priceGbp: "£900,000",
    yield: "Details on Application",
    images: [
      "https://ext.same-assets.com/2541468600/580233546.jpeg",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
    ],
    features: ["City Centre", "Car Park", "Redevelopment Potential", "High Footfall", "Prime Retail", "Planning Opportunities"],
    occupancyRate: "0%",
    description: "Prime retail opportunity in Mansfield town centre with significant development and repositioning potential.",
    details: {
      location: "Town Centre",
      carpark: "Included",
      potential: "Redevelopment",
      yield: "TBA",
      appreciation: "10% p.a."
    },
    investment: {
      totalInvestment: "162,000,000",
      monthlyIncome: "0",
      annualIncome: "0",
      netYield: "0%",
      appreciationRate: "10%",
      totalROI: "10%"
    }
  },
  18: {
    title: "4-8 East Street & 1-5 Cambridge Place, Farnham, GU9",
    subtitle: "Farnham Mixed Use",
    location: "Farnham, GU9",
    type: "Retail",
    price: "£2,375,000",
    priceKsh: "KSh 427.5M",
    priceUsd: "$2,850,000",
    priceEur: "€2,625,000",
    priceGbp: "£2,375,000",
    yield: "9%",
    images: [
      "https://ext.same-assets.com/2541468600/1958743568.jpeg",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
    ],
    features: ["12,794 sqft", "Town Centre", "Multiple Units", "Net Initial Yield 9%", "Established", "Residential Upper"],
    occupancyRate: "100%",
    description: "Prominent position in central Farnham, adjacent to 40,336 sq ft Sainsbury’s supermarket and in close proximity to key regeneration sites, Brightwells Yard and The Woolmead. Freehold, multi-let parade comprising nine retail units, one office suite and a gym. Potential for residential conversion, subject to the necessary planning permission. We are instructed to seek offers in excess of £2,375,000 (Two Million, Three Hundred and Seventy Five Thousand Pounds), subject to contract and exclusive of VAT. This reflects an attractive Net Initial Yield of 9.00%",
    details: {
      area: "12,794 sqft",
      location: "Town Centre",
      units: "Multiple",
      occupancy: "100%", 
      yield: "9%",
      appreciation: "4% p.a."
    },
    investment: {
      totalInvestment: "427,500,000",
      monthlyIncome: "3,206,250",
      annualIncome: "38,475,000",
      netYield: "9%",
      appreciationRate: "4%",
      totalROI: "13%"
    }
  },
  19: {
    title: "The Royal Arcade",
    subtitle: "Mayfair Luxury Retail",
    location: "28 Old Bond Street, W1S",
    type: "Retail",
    price: "£13,150,000",
    priceKsh: "KSh 2.37B",
    priceUsd: "$15,780,000",
    priceEur: "€14,525,000",
    priceGbp: "£13,150,000",
    yield: "2.5%",
    images: [
      "https://ext.same-assets.com/2541468600/3592092843.jpeg",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
    ],
    features: ["9,458 sqft", "Mayfair", "Historic Arcade", "Net Initial Yield 2.5%", "Prime Retail", "Luxury District"],
    occupancyRate: "100%",
    description: "Prestigious retail arcade in the heart of London's luxury shopping district with ultra-prime positioning.",
    details: {
      area: "9,458 sqft",
      location: "Mayfair",
      type: "Historic Arcade",
      occupancy: "100%",
      yield: "2.5%",
      appreciation: "8% p.a."
    },
    investment: {
      totalInvestment: "2,367,000,000",
      monthlyIncome: "4,930,625",
      annualIncome: "59,167,500",
      netYield: "2.5%",
      appreciationRate: "8%",
      totalROI: "10.5%"
    }
  },
  20: {
    title: "Co-working Spaces Lavington",
    subtitle: "Nairobi Premium Suburb",
    location: "Lavington, Nairobi",
    type: "Commercial",
    price: "$70,833",
    priceKsh: "KSh 8.5M",
    priceUsd: "$70,833",
    priceGbp: "£58,333",
    priceEur: "€66,667",
    yield: "12%",
    images: [
      "https://ext.same-assets.com/2267512097/3165367225.jpeg",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
    ],
    features: ["9 Workstations", "Modern Facilities", "High-Speed Internet", "Meeting Rooms", "Turnkey Operation", "Affluent Area"],
    occupancyRate: "100%",
    description: "Turnkey co-working space in affluent Lavington neighborhood with growing demand for flexible workspaces.",
    details: {
      workstations: "9",
      facilities: "Complete",
      internet: "High-Speed",
      occupancy: "100%",
      yield: "12%",
      appreciation: "8% p.a."
    },
    investment: {
      totalInvestment: "8,500,000",
      monthlyIncome: "85,000",
      annualIncome: "1,020,000",
      netYield: "12%",
      appreciationRate: "8%",
      totalROI: "20%"
    }
  },

  22: {
    title: "Warehouse Godown Mlolongo",
    subtitle: "Unlock excellent investment potential with this spacious warehouse situated on a prime 0.5-acre plot. Priced at KSh 95 million plus VAT, this property offers a robust foundation for your commercial endeavors.",
    location: "Mlolongo",
    type: "Industrial",
    price: "$750,000",
    priceKsh: "KSh 90M",
    priceUsd: "$750,000",
    priceGbp: "£625,000",
    priceEur: "€700,000",
    yield: "11%",
    images: [
      "/p2/mlolongo-godown.png",
      "/p2/IMG-20250515-WA0008.jpg",
      "/p2/IMG-20250515-WA0006.jpg",
      "/p2/IMG-20250515-WA0009.jpg",
      "/p2/IMG-20250515-WA0011.jpg",
      "/p2/IMG-20250515-WA0013.jpg",
      "/p2/IMG-20250813-WA0003.jpg"
    ],
    features: ["1/2 Acre", "Newly Built", "Strategic Location", "SGR Access", "Modern Construction", "High Ceilings"],
    occupancyRate: "100%",
    description: "Modern warehouse facility near SGR terminus with excellent logistics access and growing industrial demand.  Mlolongo Business Park, Quarry Road, Behind Rhombus Quarry Masters, Mlolongo, Nairobi. Large Storage Space: The warehouse spans 11,600 sq ft, providing ample room for operations, logistics, or manufacturing activities. Expandable Infrastructure: The site still has capacity to develop an additional 6,000sq ft warehouse, offering room for future growth or diversification. Built-In Amenities: The property includes three office areas, facilitating administrative and operational functions. Sanitary Facilities: Two common washrooms and one private washroom ensure convenience for staff and visitors. Storage & Utilities: Two sizable storage rooms accommodate inventory or equipment, complemented by a kitchen area. Power & Security: Equipped with a reliable generator and three-phase power supply, supported by CCTV cameras for enhanced security. Water Supply: Water is sourced from a borehole, with a storage capacity of 2,000 liters, which can be expanded to meet increasing water demands.",
    details: {
      land: "1/2 Acre",
      construction: "New Build",
      location: "SGR Zone",
      occupancy: "100%",
      yield: "11%",
      appreciation: "12% p.a."
    },
    investment: {
      totalInvestment: "90,000,000",
      monthlyIncome: "0",
      annualIncome: "0",
      netYield: "11%",
      appreciationRate: "15%",
      totalROI: "26%"
    }
  },

  24: {
    title: "Fine Dine Restaurant Lavington",
    subtitle: "Premium Dining Establishment",
    location: "Lavington, Nairobi",
    type: "Leisure",
    price: "$91,667",
    priceKsh: "KSh 11M",
    priceUsd: "$91,667",
    priceGbp: "£76,389",
    priceEur: "€85,417",
    yield: "16%",
    images: [
      "https://ext.same-assets.com/2267512097/52631664.jpeg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80"
    ],
    features: ["Complete Equipment", "Aesthetic Design", "Established Menu", "Parking Available", "Licensed", "Turnkey"],
    occupancyRate: "100%",
    description: "Turnkey restaurant with modern equipment and loyal customer base in affluent Lavington area.",
    details: {
      equipment: "Complete",
      design: "High-End",
      menu: "Established",
      occupancy: "100%",
      yield: "16%",
      appreciation: "7% p.a."
    },
    investment: {
      totalInvestment: "11,000,000",
      monthlyIncome: "146,667",
      annualIncome: "1,760,000",
      netYield: "16%",
      appreciationRate: "7%",
      totalROI: "23%"
    }
  },
  25: {
    title: "Physiotherapy Clinic",
    subtitle: "Parklands Healthcare Facility",
    location: "Parklands/Highridge, Nairobi",
    type: "Healthcare",
    price: "$137,500",
    priceKsh: "KSh 16.5M",
    priceUsd: "$137,500",
    priceGbp: "£114,583",
    priceEur: "€128,125",
    yield: "14%",
    images: [
      "https://ext.same-assets.com/2267512097/2522671175.jpeg",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80"
    ],
    features: ["11 Treatment Rooms", "Modern Equipment", "Established Practice", "Prime Location", "Licensed", "Patient Database"],
    occupancyRate: "100%",
    description: "Fully equipped physiotherapy clinic with established patient base and growing healthcare demand.",
    details: {
      rooms: "11 Treatment",
      equipment: "Modern",
      practice: "Established",
      occupancy: "100%",
      yield: "14%",
      appreciation: "9% p.a."
    },
    investment: {
      totalInvestment: "16,500,000",
      monthlyIncome: "192,500",
      annualIncome: "2,310,000",
      netYield: "14%",
      appreciationRate: "9%",
      totalROI: "23%"
    }
  },
  26: {
    title: "Supermarket Nakuru",
    subtitle: "Town Centre Retail",
    location: "Nakuru Town East",
    type: "Retail",
    price: "$1,541,667",
    priceKsh: "KSh 185M",
    priceUsd: "$1,541,667",
    priceGbp: "£1,284,722",
    priceEur: "€1,437,500",
    yield: "13%",
    images: [
      "https://ext.same-assets.com/2267512097/1324109704.jpeg",
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80"
    ],
    features: ["Operational Business", "Large Floor Area", "Prime Location", "Established Supply Chain", "Customer Base", "Parking"],
    occupancyRate: "100%",
    description: "Profitable supermarket in Nakuru's busiest commercial district with strong brand and customer loyalty.",
    details: {
      status: "Operational",
      area: "Large Format",
      location: "Town Centre",
      occupancy: "100%",
      yield: "13%",
      appreciation: "8% p.a."
    },
    investment: {
      totalInvestment: "185,000,000",
      monthlyIncome: "2,004,167",
      annualIncome: "24,050,000",
      netYield: "13%",
      appreciationRate: "8%",
      totalROI: "21%"
    }
  },
  27: {
    title: "Cross House, Westgate Road, Newcastle upon Tyne, Tyne and Wear, NE1",
    subtitle: "For Sale - Landmark building in Newcastle City Centre, United Kingdom",
    location: "Westgate Road, Newcastle, UK",
    type: "Office",
    price: "£2,000,000",
    priceKsh: "KSh 360M",
    priceUsd: "$2,400,000",
    priceEur: "€2,200,000",
    priceGbp: "£2,000,000",
    yield: "Details on Application",
    images: [
      "https://content.knightfrank.com/property/ncc012339456/images/2b8d4be6-7a79-44fd-929c-c9f282d11a3f-0.jpg?cio=true&w=900&f=webp",
      "https://content.knightfrank.com/property/ncc012339456/images/4d2d6da6-8bb0-4dfa-947f-57475a2ee2fa-0.jpg?cio=true&w=480&f=webp",
      "https://content.knightfrank.com/property/ncc012339456/images/0ea13c8e-e508-460f-8df9-eaa4a7482e61-0.jpg?cio=true&w=480&f=webp",
      "https://content.knightfrank.com/property/ncc012339456/images/bdf3183e-3f19-412c-9f5d-3f30cb103b2c-0.jpg?cio=true&w=900&f=webp",
      "https://content.knightfrank.com/property/ncc012339456/images/113e36ee-7289-4b07-af8d-bd4c853a1957-0.jpg?cio=true&w=1200",
      "https://content.knightfrank.com/property/ncc012339456/images/42a4aa9f-9de1-4079-93f4-8e59e1f7bbb5-0.jpg?cio=true&w=1200",
      "https://content.knightfrank.com/property/ncc012339456/images/60852c6e-bce6-46ec-a819-8aa07a258dcc-0.jpg?cio=true&w=1200"
    ],
    features: ["Freehold with Vacant Possession", "Highly prominent 5 storey office building", "Centrally situated within a 2-minute walk from Central Station", "Potential for comprehensive office refurbishment", "Ideal for an office headquarters or an office investment opportunity", "Potential redevelopment to residential, hotel and other uses, subject to planning","Income producing roof level telecoms equipment"],
    occupancyRate: "80%",
    description: "Cross House offers a unique opportunity to purchase a distinctive office building in Newcastle City Centre, which is suitable for a range of uses (subject to planning). Character office building in Newcastle city centre with refurbishment and repositioning potential.",
    details: {
      location: "City Centre",
      type: "Period",
      potential: "Refurbishment",
      occupancy: "0%",
      yield: "0%",
      appreciation: "5% p.a."
    },
    investment: {
      totalInvestment: "360,000,000",
      monthlyIncome: "0",
      annualIncome: "0",
      netYield: "0%",
      appreciationRate: "5%",
      totalROI: "13%"
    }
  },
  28: {
    title: "14 Coates Crescent",
    subtitle: "Edinburgh West End",
    location: "Edinburgh, EH3 7AF",
    type: "Office",
    price: "£1,750,000",
    priceKsh: "KSh 315M",
    priceUsd: "$2,100,000",
    priceEur: "€1,925,000",
    priceGbp: "£1,750,000",
    yield: "7%",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
    ],
    features: ["4,514 sqft", "West End", "Period Property", "High Specification", "Prestigious Address", "Parking"],
    occupancyRate: "100%",
    description: "Elegant office space in Edinburgh's prestigious West End with period features and modern specification.",
    details: {
      area: "4,514 sqft",
      location: "West End",
      type: "Period",
      occupancy: "100%",
      yield: "7%",
      appreciation: "4% p.a."
    },
    investment: {
      totalInvestment: "315,000,000",
      monthlyIncome: "1,837,500",
      annualIncome: "22,050,000",
      netYield: "7%",
      appreciationRate: "4%",
      totalROI: "11%"
    }
  },
  29: {
    title: "Grand Plaza Serviced Apartments, 42 Princes Square, London, W2",
    subtitle: "An exceptional opportunity to acquire the freehold of a profitable aparthotel in central London that has significant scale and value-add potential.",
    location: "Bayswater, London",
    type: "Hotel",
    price: "£100,000,000",
    priceUsd: "$131,037,500",
    priceKsh: "KSh 18B",
    priceEur: "€113,600,000",
    priceGbp: "£100,000,000",
    yield: "7.5%",
    images: [
      "https://content.knightfrank.com/property/htv012466201/images/56d93359-a3b8-480a-8a20-fd8ead365481-0.jpg?cio=true&w=1200",
      "https://content.knightfrank.com/property/htv012466201/images/096867e5-e28d-46c0-befd-6f29f453d614-0.jpg?cio=true&w=1200",
      "https://content.knightfrank.com/property/htv012466201/images/6032e1e2-74ff-47c7-957c-22fdffd3773d-0.jpg?cio=true&w=1200",
      "https://content.knightfrank.com/property/htv012466201/images/5c8c1821-27b6-4ddc-be12-bc4f839e4dc1-0.jpg?cio=true&w=1200",
      "https://content.knightfrank.com/property/htv012466201/images/6dc6bcb8-fdaf-454a-b578-425a33859c42-0.jpg?cio=true&w=1200",
      "https://content.knightfrank.com/property/htv012466201/images/cbfc1f26-b47a-4529-8a7a-61a6ccffb4d1-0.jpg?cio=true&w=1200",
      "https://content.knightfrank.com/property/htv012466201/images/6a835b0d-1550-4b5e-b296-64df6925c420-0.jpg?cio=true&w=1200",
      "https://content.knightfrank.com/property/htv012466201/images/a6ea8365-21b7-4809-9017-2dd79040197a-0.jpg?cio=true&w=1200",
      "https://content.knightfrank.com/property/htv012466201/images/872b37e2-bd0e-4fde-9583-d4732ab1e318-0.jpg?cio=true&w=1200",
      "https://content.knightfrank.com/property/htv012466201/images/088cfbf3-eaf5-4ba0-b82e-81d6dd5f7c56-0.jpg?cio=true&w=1200",
      "https://content.knightfrank.com/property/htv012466201/images/dcbd411e-7117-4ec5-8649-818a11e25e49-0.jpg?cio=true&w=1200",
      "https://content.knightfrank.com/property/htv012466201/images/5f2430a7-cb84-4ef3-82fb-d7e1ddf92b19-0.jpg?cio=true&w=1200",
      "https://content.knightfrank.com/property/htv012466201/images/2e8f84ae-1801-4ef9-b7a0-3cb7986ead47-0.jpg?cio=true&w=1200",
      "https://content.knightfrank.com/property/htv012466201/images/7658c6ab-7b4e-4d55-aeca-228df0a72e6f-0.jpg?cio=true&w=1200",
      "https://content.knightfrank.com/property/htv012466201/images/b4ff5897-cd6e-46a5-9b4f-002c8a82d40a-0.jpg?cio=true&w=1200",
      "https://content.knightfrank.com/property/htv012466201/images/3ed50d76-bd46-4cca-b097-494d061faa2f-0.jpg?cio=true&w=1200"
    ],
    features: ["Freehold Vacant Possession", "198 self-contained serviced apartments", "A rare freehold opportunity in central London", "Business turnover in excess of £12.5m net of VAT", "Highly profitable business model with consistent NOI margin of between 50%-53% achieved over the last three years", "Potential to increase ADR from £196 to £280+ net of VAT subject to repositioning and a capital improvement plan", "To be sold with vacant possession free from branding and management", "Conveniently positioned between Notting Hill and Marylebone", "Prominently located on Prince’s Square, with excellent transport links including Bayswater (0.2 miles), Queensway (0.4 miles) and Paddington station (0.6 miles)", "Combination of studios and two and three bedroom apartments, which all include a kitchenette", "Average apartment size of 28 sq m", "Restaurant with 85 covers", "Total gross internal area of approximately 105,355 sq ft", "Grade II listed" ],
    occupancyRate: "92%",
    description: "Grand Plaza is located in the heart of Bayswater, in London's West End, within the City of Westminster. The building occupies a prominent position between the gardens of Prince's Square and Kensington Gardens Square. The Bayswater area is bordered by Notting Hill to the west, Marylebone to the east and Paddington and Hyde Park to the south. Premier serviced apartment hotel in the heart of Bayswater. Exceptional location near Hyde Park with consistent high occupancy and strong corporate demand.",
    details: {
      area: "105,355 sqft",
      bedrooms: "198",
      occupancy: "92%",
      location: "42 Princes Square, W2",
      yield: "7.5%",
      appreciation: "8% p.a."
    },
    investment: {
      totalInvestment: "100,000,000",
      monthlyIncome: "177,083,330",
      annualIncome: "2,125,000,000",
      netYield: "13.5%",
      appreciationRate: "8%",
      totalROI: "15.5%"
    }
  },
  30: {
    title: "Velvet Hotel",
    subtitle: "2 Canal Street, Manchester M1",
    location: "Manchester City Centre",
    type: "Hotel",
    price: "£11,000,000",
    priceKsh: "KSh 1.98B",
    priceUsd: "$13,200,000",
    priceEur: "€12,100,000",
    priceGbp: "£11,000,000",
    yield: "8.2%",
    images: [
      "https://ext.same-assets.com/2541468600/3798123555.jpeg",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80"
    ],
    features: ["36 Bedrooms", "Boutique Hotel", "Canal Street", "Modern Design", "Bar & Restaurant", "City Centre"],
    occupancyRate: "85%",
    description: "Contemporary boutique hotel in Manchester's iconic Canal Street. Perfect blend of style and location with strong leisure and business trade.",
    details: {
      bedrooms: "36",
      occupancy: "85%",
      location: "2 Canal Street, M1",
      yield: "8.2%",
      appreciation: "6.5% p.a."
    },
    investment: {
      totalInvestment: "11,000,000",
      monthlyIncome: "75,167",
      annualIncome: "902,000",
      netYield: "8.2%",
      appreciationRate: "6.5%",
      totalROI: "14.7%"
    }
  },
  31: {
    title: "29 Albany Street",
    subtitle: "Townhouse Hotel, Edinburgh EH1",
    location: "Edinburgh City Centre",
    type: "Hotel",
    price: "£7,500,000",
    priceKsh: "KSh 1.35B",
    priceUsd: "$9,000,000",
    priceEur: "€8,250,000",
    priceGbp: "£7,500,000",
    yield: "9.1%",
    images: [
      "https://ext.same-assets.com/2541468600/3516624965.jpeg",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80"
    ],
    features: ["7,100 sqft", "17 Bedrooms", "Georgian Building", "Premium Finish", "Central Location", "Historic"],
    occupancyRate: "88%",
    description: "Beautifully restored Georgian townhouse hotel on prestigious Albany Street. High-end accommodation in Edinburgh's most desirable location.",
    details: {
      area: "7,100 sqft",
      bedrooms: "17",
      occupancy: "88%",
      location: "29 Albany Street, EH1",
      yield: "9.1%",
      appreciation: "7% p.a."
    },
    investment: {
      totalInvestment: "7,500,000",
      monthlyIncome: "56,875",
      annualIncome: "682,500",
      netYield: "9.1%",
      appreciationRate: "7%",
      totalROI: "16.1%"
    }
  },
  32: {
    title: "The Royal Arcade",
    subtitle: "28 Old Bond Street, Mayfair, London W1S",
    location: "Mayfair, London",
    type: "Retail",
    price: "£13,150,000",
    priceKsh: "KSh 2.37B",
    priceUsd: "$15,780,000",
    priceEur: "€14,525,000",
    priceGbp: "£13,150,000",
    yield: "2.5%",
    images: [
      "https://ext.same-assets.com/2541468600/2084512286.jpeg",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
    ],
    features: ["9,458 sqft", "Old Bond Street", "Historic Arcade", "Prime Mayfair", "Luxury Retail", "Heritage Building"],
    occupancyRate: "95%",
    description: "Iconic retail space within The Royal Arcade on Old Bond Street. Exceptional location in the heart of Mayfair's luxury retail district.",
    details: {
      area: "9,458 sqft",
      occupancy: "95%",
      location: "28 Old Bond Street, W1S",
      yield: "2.5%",
      appreciation: "5% p.a."
    },
    investment: {
      totalInvestment: "13,150,000",
      monthlyIncome: "27,396",
      annualIncome: "328,750",
      netYield: "2.5%",
      appreciationRate: "5%",
      totalROI: "7.5%"
    }
  },
  33: {
    title: "London City Island",
    subtitle: "Retail Development, London E14",
    location: "Canary Wharf, London",
    type: "Retail",
    price: "£7,150,000",
    priceKsh: "KSh 1.29B",
    priceUsd: "$8,580,000",
    priceEur: "€7,925,000",
    priceGbp: "£7,150,000",
    yield: "8.0%",
    images: [
      "https://ext.same-assets.com/2541468600/327513321.jpeg",
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80"
    ],
    features: ["23,645 sqft", "Waterfront", "Modern Development", "High Footfall", "Mixed Use", "Transport Links"],
    occupancyRate: "90%",
    description: "Contemporary retail space in London City Island's vibrant waterfront development. Strong catchment area and excellent transport connectivity.",
    details: {
      area: "23,645 sqft",
      occupancy: "90%",
      location: "London City Island, E14",
      yield: "8.0%",
      appreciation: "9% p.a."
    },
    investment: {
      totalInvestment: "7,150,000",
      monthlyIncome: "47,667",
      annualIncome: "572,000",
      netYield: "8.0%",
      appreciationRate: "9%",
      totalROI: "17.0%"
    }
  },
  34: {
    title: "Cary Arms & Spa",
    subtitle: "Babbacombe Bay, Devon TQ1 3LX",
    location: "Devon Coast",
    type: "Hotel",
    price: "£4,500,000",
    priceKsh: "KSh 810M",
    priceUsd: "$5,400,000",
    priceEur: "€4,950,000",
    priceGbp: "£4,500,000",
    yield: "10.5%",
    images: [
      "https://ext.same-assets.com/2541468600/1667188204.jpeg",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80"
    ],
    features: ["Coastal Location", "Spa Facilities", "Sea Views", "Boutique Hotel", "Premium Amenities", "Restaurant"],
    occupancyRate: "82%",
    description: "An exceptional opportunity to acquire a renowned freehold beachfront hotel in the South West, occupying an elevated position with uninterrupted sea views. Extensively refurbished in 2018, the property features eight sea-facing inn rooms, two luxury cottage suites, six premium beach huts, and two beach suites, complemented by a fully restored 4-bedroom beach cottage. The hotel boasts an award-winning restaurant with indoor and outdoor dining for over 180 guests, and a luxury spa with hydrotherapy pool, sauna, steam room, and treatment rooms. Set within 1.5 acres of prime coastal land with parking for 30 vehicles, the property generated annual net sales of £2.26 million (FY2024) with strong growth prospects for 2025. Located just 2.4 miles from Torquay’s Torre Train Station, the asset presents significant development potential, subject to planning, and represents a rare chance to acquire a profitable, family-held hospitality asset in one of the UK’s most desirable coastal locations.",
    details: {
      occupancy: "82%",
      location: "Babbacombe Bay, TQ1 3LX",
      yield: "10.5%",
      appreciation: "8.5% p.a."
    },
    investment: {
      totalInvestment: "4,500,000",
      monthlyIncome: "39,375",
      annualIncome: "472,500",
      netYield: "10.5%",
      appreciationRate: "8.5%",
      totalROI: "19.0%"
    }
  },
  35: {
    title: "Former Land Rover Showroom",
    subtitle: "Wheatley Hall Road, Doncaster DN2",
    location: "Doncaster, South Yorkshire",
    type: "Retail",
    price: "£2,800,000",
    priceKsh: "KSh 504M",
    priceUsd: "$3,360,000",
    priceEur: "€2,940,000",
    priceGbp: "£2,800,000",
    yield: "9.5%",
    images: [
      "https://ext.same-assets.com/2541468600/1724353550.jpeg",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
    ],
    features: ["17,573 sqft", "Former Dealership", "High Visibility", "Large Format", "Development Potential", "Strategic Location"],
    occupancyRate: "0%",
    description: "Substantial automotive retail premises with significant redevelopment potential. Prime roadside location with excellent visibility and accessibility.",
    details: {
      area: "17,573 sqft",
      occupancy: "0%",
      location: "Wheatley Hall Road, DN2",
      yield: "9.5%",
      appreciation: "6% p.a."
    },
    investment: {
      totalInvestment: "2,800,000",
      monthlyIncome: "22,167",
      annualIncome: "266,000",
      netYield: "9.5%",
      appreciationRate: "6%",
      totalROI: "15.5%"
    }
  },
  36: {
    title: "Hampton by Hilton",
    subtitle: "Liverpool John Lennon Airport, L24 1YD",
    location: "Liverpool Airport",
    type: "Hotel",
    price: "£12,500,000",
    priceKsh: "KSh 2.25B",
    priceUsd: "$15,000,000",
    priceEur: "€13,750,000",
    priceGbp: "£12,500,000",
    yield: "8.8%",
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80"
    ],
    features: ["160 Bedrooms", "Airport Location", "Branded Hotel", "Corporate Demand", "Parking", "Hilton Franchise"],
    occupancyRate: "87%",
    description: "Established Hampton by Hilton hotel at Liverpool John Lennon Airport. Strong brand, reliable income stream, and excellent corporate demand.",
    details: {
      bedrooms: "160",
      occupancy: "87%",
      location: "Speke Hall Avenue, L24",
      yield: "8.8%",
      appreciation: "7.5% p.a."
    },
    investment: {
      totalInvestment: "12,500,000",
      monthlyIncome: "91,667",
      annualIncome: "1,100,000",
      netYield: "8.8%",
      appreciationRate: "7.5%",
      totalROI: "16.3%"
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
  const [selectedCurrency, setSelectedCurrency] = useState('KES');
  // Removed unused states: investmentAmount, activeTab

  const currencies = [
    { code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh', rate: 1, flag: '🇰🇪', icon: <Coins className="h-4 w-4" /> },
    { code: 'USD', name: 'US Dollar', symbol: '$', rate: 0.0075, flag: '🇺🇸', icon: <DollarSign className="h-4 w-4" /> },
    { code: 'EUR', name: 'Euro', symbol: '€', rate: 0.0067, flag: '🇪🇺', icon: <Euro className="h-4 w-4" /> },
    { code: 'GBP', name: 'British Pound', symbol: '£', rate: 0.0059, flag: '🇬🇧', icon: <PoundSterling className="h-4 w-4" /> }
  ];

  const convertAmount = (amount: number, fromCurrency: string, toCurrency: string) => {
    const fromRate = currencies.find(c => c.code === fromCurrency)?.rate || 1;
    const toRate = currencies.find(c => c.code === toCurrency)?.rate || 1;
    return amount * (toRate / fromRate);
  };
  
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
    const phoneNumber = "+254729170156";
    const encodedMessage = encodeURIComponent(
      `Regarding ${property.title} - ${property.location}. ${message}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleDownloadBrochure = () => {
    if (!property) return; // Guard clause
    const link = document.createElement('a');
    link.href = `/brochures/${property.title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
    link.download = `${property.title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
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
              <span className="text-sm tracking-wider">BACK TO COMMERCIAL PROPERTIES</span>
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
          <div className="lg:col-span-5">
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
              
              <div className="mb-10">
                <div className="flex items-baseline gap-4 mb-4">
                  <div className="text-3xl text-[#1e3a5f] font-luxury">
                    {selectedCurrency === 'KES' ? property.priceKsh :
                     selectedCurrency === 'USD' ? property.priceUsd :
                     selectedCurrency === 'EUR' ? property.priceEur :
                     selectedCurrency === 'GBP' ? property.priceGbp :
                     property.price}
                  </div>
                  <div className="text-base text-gray-400">
                    ({selectedCurrency === 'KES' ? property.price : property.priceUsd})
                  </div>
                </div>

                {/* Currency Selector */}
                <div className="flex gap-2">
                  {currencies.map((currency) => (
                    <button
                      key={currency.code}
                      onClick={() => setSelectedCurrency(currency.code)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all ${
                        selectedCurrency === currency.code
                          ? 'border-[#c9a961] bg-[#c9a961]/10 text-[#1e3a5f]'
                          : 'border-gray-200 hover:border-gray-300 text-gray-600'
                      }`}
                    >
                      <span className="text-sm">{currency.flag}</span>
                      <span className="text-xs font-medium">{currency.code}</span>
                    </button>
                  ))}
                </div>
              </div>

              
            </div>
          </div>

          {/* RIGHT COLUMN: Image Gallery (7/12 width on large screens) */}
          <div className="lg:col-span-7">
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
          </div>
        </div>
        
        <h3 className="text-s tracking-[0.3em] text-black mb-6 uppercase">Investment Summary</h3>
              <p className="text-base text-gray-600 leading-relaxed max-w-3xl font-luxury">
                {property.description}
              </p>

        <button>
          <span 
            onClick={handleDownloadBrochure} 
            className="justify-center bg-[#1e3a5f] hover:bg-[#152942] text-white py-3.5 transition-colors text-xs tracking-[0.2em] uppercase px-6 mt-10 inline-block"
          >
            <Download className="h-5 w-5 text-gray-400 mr-2 inline-block" />
            Download Brochure
          </span>
        </button>
        {/* Details Grid - Clean & Organized */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-20 border-t border-gray-100">
          
          {/* Left Column - Specifications */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xs tracking-[0.3em] text-black mb-6 uppercase">Property Details</h3>
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
              <h3 className="text-xs tracking-[0.3em] text-black mb-6 uppercase">Investment Returns</h3>
              <div className="space-y-6">
                <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-[#c9a961] before:to-transparent">
                  <div className="text-xs text-gray-500 mb-1 tracking-wide uppercase">Annual Yield</div>
                  <div className="text-3xl text-[#1e3a5f] font-light">{property.yield}</div>
                </div>
                
                <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-gray-200 before:to-transparent">
                  <div className="text-xs text-gray-500 mb-1 tracking-wide uppercase">Monthly Income</div>
                  <div className="text-xl text-gray-700 font-light">
                    {currencies.find(c => c.code === selectedCurrency)?.symbol}
                    {(convertAmount(Number(property.investment.monthlyIncome.replace(/,/g, '')), 'KES', selectedCurrency) / 1000000).toFixed(1)}M
                  </div>
                </div>

                <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-gray-200 before:to-transparent">
                  <div className="text-xs text-gray-500 mb-1 tracking-wide uppercase">Annual Income</div>
                  <div className="text-xl text-gray-700 font-light">
                    {currencies.find(c => c.code === selectedCurrency)?.symbol}
                    {(convertAmount(Number(property.investment.annualIncome.replace(/,/g, '')), 'KES', selectedCurrency) / 1000000).toFixed(3)}M
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
            <div className="border border-gray-400 p-8 bg-gradient-to-br from-white to-gray-50">
              <div className="text-center mb-8">
                <div className="w-10 h-10 border border-[#c9a961] mx-auto mb-5 flex items-center justify-center">
                  <Crown className="h-5 w-5 text-[#c9a961]" />
                </div>
                <h3 className="text-xs tracking-[0.3em] text-black mb-3 uppercase">Private Consultation</h3>
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
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-8"
            onClick={() => setIsImageModalOpen(false)}
          >
            <div
              className="relative max-w-6xl max-h-full"
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
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PropertyDetail;
