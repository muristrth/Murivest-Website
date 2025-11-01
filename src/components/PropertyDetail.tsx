'use client';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

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
      'https://content.knightfrank.com/property/hub2547666/images/8a0ac1f8-1e08-4827-ac66-409773bed6b1-0.jpg?cio=true&w=1200'
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
      'https://content.knightfrank.com/property/hub2429185/images/d52cc1be-f7b5-44af-9899-4993fbef9d32-0.jpg?cio=true&w=1200'
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
      "https://ext.same-assets.com/2267512097/2415429296.jpeg",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
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
      "https://ext.same-assets.com/2267512097/1411722178.jpeg",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
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
      totalInvestment: 385000000,
      monthlyIncome: 3500000,
      annualIncome: 42000000,
      netYield: 10.9,
      appreciationRate: 6,
      totalROI: 16.9
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
      totalInvestment: 680000000,
      monthlyIncome: 4500000,
      annualIncome: 54000000,
      netYield: 8.2,
      appreciationRate: 10,
      totalROI: 18.2
    }
  },
  11: {
    title: "70 Chancery Lane",
    subtitle: "London Legal District",
    location: "London, WC2A",
    type: "Prime Office",
    price: "£75,000,000",
    priceKsh: "KSh 13.5B",
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
      totalInvestment: 13500000000,
      monthlyIncome: 61875000,
      annualIncome: 742500000,
      netYield: 5.5,
      appreciationRate: 4,
      totalROI: 9.5
    }
  },
  12: {
    title: "22-23 Princes Street",
    subtitle: "London West End",
    location: "London, W1B",
    type: "Mixed Use",
    price: "£32,500,000",
    priceKsh: "KSh 5.9B",
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
      totalInvestment: 5850000000,
      monthlyIncome: 18281250,
      annualIncome: 219375000,
      netYield: 3.75,
      appreciationRate: 5,
      totalROI: 8.75
    }
  },
  13: {
    title: "Estuary House",
    subtitle: "Liverpool Business Park",
    location: "Leeward Drive, Speke, Liverpool",
    type: "Office",
    price: "£5,200,000",
    priceKsh: "KSh 936M",
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
      totalInvestment: 936000000,
      monthlyIncome: 11700000,
      annualIncome: 140400000,
      netYield: 15,
      appreciationRate: 3,
      totalROI: 18
    }
  },
  14: {
    title: "307 Euston Road",
    subtitle: "King's Cross Development Zone",
    location: "London, NW1",
    type: "Modern Office",
    price: "£14,000,000",
    priceKsh: "KSh 2.52B",
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
      totalInvestment: 2520000000,
      monthlyIncome: 13300000,
      annualIncome: 159760000,
      netYield: 6.34,
      appreciationRate: 6,
      totalROI: 12.34
    }
  },
  15: {
    title: "Vintners Place",
    subtitle: "City of London Financial District",
    location: "68 Upper Thames Street, EC4V",
    type: "Office Tower",
    price: "£140,000,000",
    priceKsh: "KSh 25.2B",
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
      totalInvestment: 25200000000,
      monthlyIncome: 205380000,
      annualIncome: 2464560000,
      netYield: 9.78,
      appreciationRate: 4,
      totalROI: 13.78
    }
  },
  16: {
    title: "The Great Eastern Wharf Estate",
    subtitle: "Battersea Riverside",
    location: "London, SW11",
    type: "Office Estate",
    price: "£46,000,000",
    priceKsh: "KSh 8.28B",
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
      totalInvestment: 8280000000,
      monthlyIncome: 36225000,
      annualIncome: 434700000,
      netYield: 5.25,
      appreciationRate: 7,
      totalROI: 12.25
    }
  },
  17: {
    title: "Former Wilko & Car Park",
    subtitle: "Mansfield Town Centre",
    location: "32-38 Clumber Street, Mansfield",
    type: "Retail",
    price: "£900,000",
    priceKsh: "KSh 162M",
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
      totalInvestment: 162000000,
      monthlyIncome: 0,
      annualIncome: 0,
      netYield: 0,
      appreciationRate: 10,
      totalROI: 10
    }
  },
  18: {
    title: "4-8 East Street & 1-5 Cambridge Place, Farnham, GU9",
    subtitle: "Farnham Mixed Use",
    location: "Farnham, GU9",
    type: "Retail",
    price: "£2,375,000",
    priceKsh: "KSh 427.5M",
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
      totalInvestment: 427500000,
      monthlyIncome: 3206250,
      annualIncome: 38475000,
      netYield: 9,
      appreciationRate: 4,
      totalROI: 13
    }
  },
  19: {
    title: "The Royal Arcade",
    subtitle: "Mayfair Luxury Retail",
    location: "28 Old Bond Street, W1S",
    type: "Retail",
    price: "£13,150,000",
    priceKsh: "KSh 2.37B",
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
      totalInvestment: 2367000000,
      monthlyIncome: 4930625,
      annualIncome: 59167500,
      netYield: 2.5,
      appreciationRate: 8,
      totalROI: 10.5
    }
  },
  20: {
    title: "Co-working Spaces Lavington",
    subtitle: "Nairobi Premium Suburb",
    location: "Lavington, Nairobi",
    type: "Commercial",
    price: "$70,833",
    priceKsh: "KSh 8.5M",
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
      totalInvestment: 8500000,
      monthlyIncome: 85000,
      annualIncome: 1020000,
      netYield: 12,
      appreciationRate: 8,
      totalROI: 20
    }
  },
  21: {
    title: "Entertainment Club/Lounge",
    subtitle: "Umoja II Nairobi",
    location: "Umoja II, Nairobi",
    type: "Leisure",
    price: "$35,000",
    priceKsh: "KSh 4.2M",
    yield: "18%",
    images: [
      "https://ext.same-assets.com/2267512097/1722438595.jpeg",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80"
    ],
    features: ["Fully Equipped", "Established Clientele", "Prime Location", "Liquor License", "Sound System", "Operational"],
    occupancyRate: "100%",
    description: "Operational entertainment venue with strong customer base and excellent returns in vibrant neighborhood.",
    details: {
      status: "Operational",
      license: "Full Liquor",
      equipment: "Complete",
      occupancy: "100%",
      yield: "18%",
      appreciation: "6% p.a."
    },
    investment: {
      totalInvestment: 4200000,
      monthlyIncome: 63000,
      annualIncome: 756000,
      netYield: 18,
      appreciationRate: 6,
      totalROI: 24
    }
  },
  22: {
    title: "Warehouse Godown Mlolongo",
    subtitle: "SGR Logistics Hub",
    location: "Mlolongo",
    type: "Industrial",
    price: "$750,000",
    priceKsh: "KSh 90M",
    yield: "11%",
    images: [
      "https://ext.same-assets.com/2267512097/2415429296.jpeg",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
    ],
    features: ["1/2 Acre", "Newly Built", "Strategic Location", "SGR Access", "Modern Construction", "High Ceilings"],
    occupancyRate: "100%",
    description: "Modern warehouse facility near SGR terminus with excellent logistics access and growing industrial demand.",
    details: {
      land: "1/2 Acre",
      construction: "New Build",
      location: "SGR Zone",
      occupancy: "100%",
      yield: "11%",
      appreciation: "12% p.a."
    },
    investment: {
      totalInvestment: 90000000,
      monthlyIncome: 825000,
      annualIncome: 9900000,
      netYield: 11,
      appreciationRate: 12,
      totalROI: 23
    }
  },
  23: {
    title: "Petrol Station Sagana",
    subtitle: "Nairobi-Nyeri Highway",
    location: "Sagana, Kerugoya",
    type: "Retail",
    price: "$208,333",
    priceKsh: "KSh 25M",
    yield: "20%+",
    images: [
      "https://ext.same-assets.com/2267512097/3069981277.jpeg",
      "https://images.unsplash.com/photo-1545262810-77515befe149?w=1200&q=80"
    ],
    features: ["Fully Operational", "Highway Location", "Convenience Store", "High Traffic", "Fuel Pumps", "Established Business"],
    occupancyRate: "100%",
    description: "Profitable petrol station on busy Nairobi-Nyeri highway with consistent fuel demand and additional retail income.",
    details: {
      status: "Operational",
      location: "Highway",
      store: "Convenience",
      occupancy: "100%",
      yield: "20%",
      appreciation: "5% p.a."
    },
    investment: {
      totalInvestment: 25000000,
      monthlyIncome: 416667,
      annualIncome: 5000000,
      netYield: 20,
      appreciationRate: 5,
      totalROI: 25
    }
  },
  24: {
    title: "Fine Dine Restaurant Lavington",
    subtitle: "Premium Dining Establishment",
    location: "Lavington, Nairobi",
    type: "Leisure",
    price: "$91,667",
    priceKsh: "KSh 11M",
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
      totalInvestment: 11000000,
      monthlyIncome: 146667,
      annualIncome: 1760000,
      netYield: 16,
      appreciationRate: 7,
      totalROI: 23
    }
  },
  25: {
    title: "Physiotherapy Clinic",
    subtitle: "Parklands Healthcare Facility",
    location: "Parklands/Highridge, Nairobi",
    type: "Healthcare",
    price: "$137,500",
    priceKsh: "KSh 16.5M",
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
      totalInvestment: 16500000,
      monthlyIncome: 192500,
      annualIncome: 2310000,
      netYield: 14,
      appreciationRate: 9,
      totalROI: 23
    }
  },
  26: {
    title: "Supermarket Nakuru",
    subtitle: "Town Centre Retail",
    location: "Nakuru Town East",
    type: "Retail",
    price: "$1,541,667",
    priceKsh: "KSh 185M",
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
      totalInvestment: 185000000,
      monthlyIncome: 2004167,
      annualIncome: 24050000,
      netYield: 13,
      appreciationRate: 8,
      totalROI: 21
    }
  },
  27: {
    title: "Cross House Newcastle",
    subtitle: "City Centre Period Building",
    location: "Westgate Road, Newcastle",
    type: "Office",
    price: "£2,000,000",
    priceKsh: "KSh 360M",
    yield: "Details on Application",
    images: [
      "https://ext.same-assets.com/2541468600/3437953458.jpeg",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80"
    ],
    features: ["City Centre", "Period Building", "Refurbishment Potential", "Transport Links", "Character Property", "Development Scope"],
    occupancyRate: "80%",
    description: "Character office building in Newcastle city centre with refurbishment and repositioning potential.",
    details: {
      location: "City Centre",
      type: "Period",
      potential: "Refurbishment",
      occupancy: "80%",
      yield: "8%",
      appreciation: "5% p.a."
    },
    investment: {
      totalInvestment: 360000000,
      monthlyIncome: 2400000,
      annualIncome: 28800000,
      netYield: 8,
      appreciationRate: 5,
      totalROI: 13
    }
  },
  28: {
    title: "14 Coates Crescent",
    subtitle: "Edinburgh West End",
    location: "Edinburgh, EH3 7AF",
    type: "Office",
    price: "£1,750,000",
    priceKsh: "KSh 315M",
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
      totalInvestment: 315000000,
      monthlyIncome: 1837500,
      annualIncome: 22050000,
      netYield: 7,
      appreciationRate: 4,
      totalROI: 11
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
              
              <div className="flex items-baseline gap-4 mb-10">
                <div className="text-3xl text-[#1e3a5f] font-luxury">{property.price}</div>
                <div className="text-base text-gray-400">({property.priceKsh})</div>
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
