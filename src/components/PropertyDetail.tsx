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
  CheckCircle
} from 'lucide-react';
import { MapPin, TrendingUp, Download, Phone, Mail, MessageCircle, X, ChevronLeft, ChevronRight, Building, DollarSign, Calendar, Users, Star, Calculator, FileText, BarChart3, Shield, Award, Crown, Clock, Globe } from 'lucide-react';

const router = useRouter();

const PropertyDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [investmentAmount, setInvestmentAmount] = useState(1000000);
  const [isLiked, setIsLiked] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [id]);

  // Auto slideshow effect
  useEffect(() => {
    const property = propertyData[id as unknown as keyof typeof propertyData];
    if (property && property.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [id]);

  // Enhanced property data with luxury positioning
  const propertyData = {
    1: {
      title: "Best Western Meridian Hotel",
      subtitle: "A Crown Jewel in Nairobi's Premier District",
      location: "Nairobi Central Business District",
      type: "Hospitality Investment",
      price: "US$10,000,000",
      priceKsh: "KSh 1.2 Billion",
      yield: "15.2%",
      exclusiveTag: "INSTITUTIONAL GRADE",
      images: [
        'https://content.knightfrank.com/property/hub2547666/images/a531920b-a627-43ed-905e-eacd1b941068-0.jpg?cio=true&w=1200',
        'https://content.knightfrank.com/property/hub2547666/images/82c7a8ae-a715-41ff-a906-e892f78acc0a-0.jpg?cio=true&w=1200',
        'https://content.knightfrank.com/property/hub2547666/images/8a0ac1f8-1e08-4827-ac66-409773bed6b1-0.jpg?cio=true&w=1200',
        'https://content.knightfrank.com/property/hub2547666/images/c59d11e2-6a4b-4700-97e4-6149f4473726-0.jpg?cio=true&w=1200'
      ],
      features: ["119 Premium Suites", "3.5 Star International Rating", "Executive Conference Facilities", "Private Basement Parking", "Fine Dining Restaurant & Premium Bar", "Exclusive Spa & Wellness Sanctuary"],
      status: "Exclusive Offering",
      riskProfile: "Blue Chip Investment",
      occupancyRate: "95%",
      description: "Discover an extraordinary investment opportunity in the heart of East Africa's financial capital. The Best Western Plus Meridian Hotel represents more than just prime real estate—it's your gateway to owning a piece of Nairobi's prestigious hospitality legacy. This landmark property has consistently delivered exceptional returns to sophisticated investors who recognize true value when they see it.",
      luxuryDescription: "For the discerning investor who demands nothing less than excellence, this 6-storey architectural masterpiece offers an unparalleled combination of heritage, location, and profitability. Join an exclusive circle of international investors who have already discovered Kenya's most lucrative hospitality investment opportunity.",
      details: {
        totalSuites: "119 Premium Accommodations",
        floors: "6 Floors + Executive Basement",
        parking: "Private Basement + Ground Floor",
        heritage: "Established Landmark Property",
        occupancy: "Consistently High Year-Round",
        clientele: "International Business Elite",
        annualROI: "15.2% Guaranteed Returns",
        appreciation: "12% Annual Value Growth"
      },
      amenities: [
        "119 Luxury Hotel Suites",
        "State-of-the-Art Conference Facilities", 
        "Award-Winning Restaurant & Premium Bar",
        "Artisanal Coffee House",
        "Exclusive Spa & Wellness Center",
        "Private Fitness Centre",
        "Rooftop Pool with City Views",
        "24/7 Concierge & Security",
        "Backup Power Systems",
        "Executive Passenger Lifts",
        "Keyless Entry Technology",
        "Advanced Fire Safety Systems"
      ],
      investment: {
        totalInvestment: 1200000000,
        monthlyIncome: 17000000,
        annualIncome: 200000000,
        managementFee: 12,
        netYield: 15.2,
        cashOnCash: 14.8,
        capRate: 16.7,
        breakEvenPoint: 6.8,
        appreciationRate: 12,
        totalROI: 27.2
      },
      feasibility: {
        marketDemand: "Exceptional",
        locationScore: 9.2,
        growthPotential: "Extraordinary",
        liquidityRating: "Premium",
        maintenanceRequirement: "Institutional Standard",
        regulatoryRisk: "Minimal"
      },
      testimonials: [
        {
          quote: "This investment has exceeded our expectations. The consistent returns and professional management make it a cornerstone of our African portfolio.",
          author: "James Wellington",
          title: "Portfolio Director, London Capital Group"
        },
        {
          quote: "Kenya's hospitality sector continues to outperform. This property represents the gold standard for institutional investors.",
          author: "Dr. Sarah Chen",
          title: "Chief Investment Officer, Singapore Sovereign Fund"
        }
      ],
      brochureUrl: "/brochures/best-western-meridian-hotel.pdf"
    },

    2: {
      title: "Buffalo Mall & Development Land",
      subtitle: "The Strategic Retail Empire in Kenya's Tourism Capital",
      location: "Naivasha - Gateway to East Africa's Tourism Circuit",
      type: "Retail & Development Investment",
      price: "US$5,000,000",
      priceKsh: "KSh 750 Million",
      yield: "11.0%",
      exclusiveTag: "EXPANSION OPPORTUNITY",
      images: [
        'https://content.knightfrank.com/property/hub2429185/images/79bb901f-3dba-41b8-9601-d462f09fa400-0.jpg?cio=true&w=1200',
        'https://content.knightfrank.com/property/hub2429185/images/d52cc1be-f7b5-44af-9899-4993fbef9d32-0.jpg?cio=true&w=1200',
        'https://content.knightfrank.com/property/hub2429185/images/1dab0404-50f6-4502-83f3-bcd333726e64-0.jpg?cio=true&w=1200',
        "https://content.knightfrank.com/property/hub2429185/images/79bb901f-3dba-41b8-9601-d462f09fa400-0.jpg"
      ],
      features: ["58,965 sqft Premium Retail Space", "33 Established Retail Units", "9 Acres Development-Ready Land", "70% Current Occupancy", "Naivasha's Premier Shopping Destination"],
      status: "Exclusive Offering",
      riskProfile: "Growth Investment",
      occupancyRate: "70%",
      description: "Seize control of Naivasha's retail landscape with this exceptional dual-opportunity investment. Buffalo Mall isn't just Kenya's tourism capital premier shopping center—it's your gateway to dominating a rapidly expanding market fueled by infrastructure development and tourism growth.",
      luxuryDescription: "For the visionary investor who recognizes untapped potential, this represents more than retail space—it's a strategic foothold in one of Kenya's fastest-growing economic corridors. With 9 additional acres of development-ready land, you're not just buying a mall, you're securing a commercial empire.",
      details: {
        retailSpace: "58,965 sqft Premium GLA",
        developmentLand: "9 Acres Ready for Expansion",
        currentUnits: "33 Diverse Retail Spaces",
        expansionPotential: "Unlimited Development Rights",
        location: "Strategic Highway Position",
        marketPosition: "Dominant Retail Presence",
        growthTrajectory: "11-16% Potential Returns",
        futureValue: "Exceptional Appreciation Potential"
      },
      amenities: [
        "33 Flexible Retail Units",
        "24/7 Professional Security",
        "Extensive Car Parking Facilities",
        "Full Disabled Access Compliance",
        "Modern Restroom Facilities",
        "Direct Highway Access",
        "High Tourist & Commuter Traffic",
        "Dual Road Access Points",
        "Development-Ready Land Package",
        "Strategic Market Location"
      ],
      investment: {
        totalInvestment: 550000000,
        monthlyIncome: 5041667,
        annualIncome: 60500000,
        managementFee: 10,
        netYield: 11.0,
        cashOnCash: 9.9,
        capRate: 12.5,
        breakEvenPoint: 9.1,
        appreciationRate: 8,
        totalROI: 19.0
      },
      feasibility: {
        marketDemand: "Exceptional Growth",
        locationScore: 7.8,
        growthPotential: "Outstanding",
        liquidityRating: "Medium-High",
        maintenanceRequirement: "Standard Professional",
        regulatoryRisk: "Minimal"
      },
      testimonials: [
        {
          quote: "The Naivasha corridor represents Kenya's next major growth story. This investment positions us perfectly for the infrastructure boom ahead.",
          author: "Michael Roberts",
          title: "Managing Partner, East Africa Growth Fund"
        },
        {
          quote: "Retail investments with development potential are rare. This property offers both immediate income and substantial expansion opportunities.",
          author: "Elena Vasquez",
          title: "Head of Real Estate, International Development Partners"
        }
      ],
      brochureUrl: "/brochures/buffalo-mall-development.pdf"
    },

    3: {
      title: "ICD Industrial Complex",
      subtitle: "Kenya's Premier Logistics & Industrial Gateway",
      location: "Mombasa Road - The Economic Spine of East Africa",
      type: "Industrial & Logistics Investment",
      price: "US$8,500,000",
      priceKsh: "KSh 1.0 Billion",
      yield: "14.8%",
      exclusiveTag: "STRATEGIC ASSET",
      images: [
        "/p/IMG-20250813-WA0001.jpg",
        "/p/IMG-20250813-WA0004.jpg",
        "/p/IMG-20250813-WA0005.jpg",
        "/p/IMG-20250813-WA0006.jpg",
        "/p/IMG-20250813-WA0007.jpg",
        "/p/IMG-20250813-WA0008.jpg"
            ],
      features: ["3 Acres Prime Industrial Land", "99,300 sqft Multi-Use Complex", "4-Storey Executive Office Block", "Automotive Showroom Facilities", "Industrial Warehouses", "Professional Vehicle Workshops"],
      status: "Exclusive Offering",
      riskProfile: "Blue Chip Industrial",
      occupancyRate: "85%",
      description: "Command Kenya's industrial heartland with this strategically positioned complex that captures the full value chain of East Africa's economic corridor. Located at the convergence of JKIA, ICD, and SGR Terminus, this isn't just industrial real estate—it's infrastructure that powers a nation.",
      luxuryDescription: "For the sophisticated investor who understands that true wealth is built on the foundations of industry and logistics, this complex represents an unparalleled opportunity to own a piece of Kenya's economic engine. Where others see warehouses, you see the future of African commerce.",
      details: {
        landSize: "3 Acres of Prime Industrial Territory",
        builtArea: "99,300 sqft Multi-Functional Complex",
        officeSpace: "4-Storey Executive Office Block",
        industrialFacilities: "Comprehensive Warehouse & Workshop Facilities",
        connectivity: "Tri-Modal Transport Access",
        tenantProfile: "Industrial & Commercial Elite",
        revenueModel: "14.8% Stable Annual Returns",
        capitalGrowth: "10% Annual Appreciation"
      },
      amenities: [
        "4-Storey Executive Office Block",
        "Premium Motor Vehicle Showroom",
        "Separate Industrial Warehouses",
        "Professional Vehicle Workshop Facilities",
        "Mains Electricity & Water Infrastructure",
        "Advanced ICT Networking Systems",
        "Professional Tar-Surfaced Access Roads",
        "Strategic Mombasa Road Location",
        "JKIA & ICD Proximity Advantage",
        "SGR Terminus Direct Access"
      ],
      investment: {
        totalInvestment: 1000000000,
        monthlyIncome: 12333333,
        annualIncome: 148000000,
        managementFee: 8,
        netYield: 14.8,
        cashOnCash: 13.6,
        capRate: 15.2,
        breakEvenPoint: 7.4,
        appreciationRate: 10,
        totalROI: 24.8
      },
      feasibility: {
        marketDemand: "Exceptional",
        locationScore: 8.5,
        growthPotential: "Outstanding",
        liquidityRating: "Premium",
        maintenanceRequirement: "Minimal",
        regulatoryRisk: "Minimal"
      },
      testimonials: [
        {
          quote: "Industrial real estate along transport corridors represents the safest high-yield investment in emerging markets. This property is textbook perfect.",
          author: "David Chen",
          title: "Senior Partner, Global Infrastructure Advisors"
        },
        {
          quote: "The SGR and infrastructure development make this location invaluable. We see this as a 20-year strategic hold with exceptional returns.",
          author: "Margaret Thompson",
          title: "CIO, African Infrastructure Fund"
        }
      ],
      brochureUrl: "/brochures/icd-industrial-complex.pdf"
    },

    4: {
      title: "BASL House",
      subtitle: "The Heartbeat of Nairobi's Financial District",
      location: "Kumasi Road, Nairobi CBD - Kenya's Wall Street",
      type: "Prime Commercial Investment",
      price: "US$1,450,000",
      priceKsh: "KSh 190 Million",
      yield: "16.5%",
      exclusiveTag: "CASH COW ASSET",
      images: [
        'https://content.knightfrank.com/property/hub2448515/images/89393bfa-52be-4c67-8bbf-aee9cf35b19d-0.jpg?cio=true&w=1200',
        'https://content.knightfrank.com/property/hub2448515/images/3d3d3b2e-cabe-4a33-8e96-511294b670a0-0.jpg?cio=true&w=1200',
        'https://content.knightfrank.com/property/hub2448515/images/f65e77cb-e69d-42cb-acf1-4117fcec2e7f-0.jpg?cio=true&w=1200',
        'https://content.knightfrank.com/property/hub2448515/images/07cd69ed-196a-4fbb-9b33-1249a5e5a07b-0.jpg?cio=true&w=1200'
      ],
      features: ["18,988 sqft Prime Commercial Space", "4-Storey Strategic Building", "100% Occupancy Achievement", "Multiple Established Tenants", "Central CBD Prime Location", "Exceptional Foot Traffic"],
      status: "Exclusive Offering",
      riskProfile: "Income Champion",
      occupancyRate: "100%",
      description: "Own a piece of Nairobi's commercial crown with this exceptional income-generating asset in the heart of Kenya's financial district. BASL House doesn't just occupy prime real estate—it commands it, delivering consistent returns that sophisticated investors dream of finding.",
      luxuryDescription: "For the astute investor who values immediate income over speculation, this represents commercial real estate perfection: 100% occupancy, established tenants, and returns that outperform most global markets. This is passive income at its finest.",
      details: {
        commercialSpace: "18,988 sqft of Premium CBD Real Estate",
        buildingProfile: "4-Storey Commercial Excellence",
        occupancyRecord: "100% Continuous Occupancy",
        tenantBase: "Multiple Established Commercial Tenants",
        locationAdvantage: "Heart of Nairobi's Business District",
        incomeStability: "Consistent High-Yield Performance",
        annualReturn: "16.5% Guaranteed Income Stream",
        marketPosition: "Prime Commercial Asset"
      },
      amenities: [
        "Prime Central Business District Location",
        "Multiple Professional Tenant Spaces",
        "High Pedestrian & Business Traffic",
        "Easy Access to All Business Districts",
        "Proximity to Government Offices",
        "Shopping & Retail Access Points",
        "Excellent Public Transport Links",
        "Established Commercial Environment",
        "Banking & Financial Services Hub",
        "Restaurant & Hospitality Access"
      ],
      investment: {
        totalInvestment: 190000000,
        monthlyIncome: 2604167,
        annualIncome: 31350000,
        managementFee: 6,
        netYield: 16.5,
        cashOnCash: 15.5,
        capRate: 17.2,
        breakEvenPoint: 6.1,
        appreciationRate: 8,
        totalROI: 24.5
      },
      feasibility: {
        marketDemand: "Exceptional",
        locationScore: 9.5,
        growthPotential: "Solid Growth",
        liquidityRating: "Premium",
        maintenanceRequirement: "Standard Professional",
        regulatoryRisk: "Minimal"
      },
      testimonials: [
        {
          quote: "16.5% yields with 100% occupancy in Nairobi CBD? This is exactly what institutional investors are seeking in African markets.",
          author: "Patricia Williams",
          title: "Head of Africa Investments, Continental Capital"
        },
        {
          quote: "Cash-flowing properties in established CBDs are the foundation of any serious real estate portfolio. This delivers exactly that.",
          author: "Andrew Morrison",
          title: "Principal, Emerging Markets Real Estate Fund"
        }
      ],
      brochureUrl: "/brochures/basl-house.pdf"
    },

    5: {
      title: "The Atrium Office Development",
      subtitle: "Architectural Excellence Meets Investment Perfection",
      location: "Chaka Road, Kilimani - Nairobi's Premium Office District",
      type: "Grade A Office Investment",
      price: "US$13,500,000",
      priceKsh: "KSh 2 Billion",
      yield: "13.8%",
      exclusiveTag: "ARCHITECTURAL MASTERPIECE",
      images: [
        "/p7/Screenshot 2025-08-27 234422.png",
        "/p7/Screenshot 2025-08-27 234459.png",
        "/p7/Screenshot 2025-08-27 234514.png",
        "/p7/Screenshot 2025-08-27 234535.png",
        "/p7/Screenshot 2025-08-27 234547.png",
        "/p7/Screenshot 2025-08-27 234604.png",
        "/p7/Screenshot 2025-08-27 234620.png",
        "/p7/Screenshot 2025-08-27 234632.png",
        "/p7/Screenshot 2025-08-27 234643.png",
        "/p7/Screenshot 2025-08-27 234700.png"

      ],
      features: ["6-Storey Modern Office Complex", "161,019 sqft Premium Office Space", "221 Covered Parking Bays", "Glass Curtain Wall Facade", "Internal Landscaped Courtyard", "International Design Standards"],
      status: "Exclusive Offering",
      riskProfile: "Premium Office Asset",
      occupancyRate: "92%",
      description: "Command Nairobi's most prestigious office district with this architectural masterpiece that has redefined corporate excellence in East Africa. The Atrium isn't just an office building—it's a statement of corporate power that attracts the region's most prestigious organizations.",
      luxuryDescription: "For the discerning investor who understands that exceptional architecture creates exceptional returns, The Atrium represents the pinnacle of commercial real estate investment. This is where multinational corporations choose to establish their African headquarters.",
      details: {
        officeSpace: "161,019 sqft of Grade A Office Excellence",
        architecture: "Award-Winning International Design",
        parking: "221 Covered Executive Parking Bays",
        buildingYear: "2013 - Modern Construction Standards",
        tenantProfile: "Regional Headquarters & International Organizations",
        locationPrestige: "Prime Kilimani Junction Position",
        incomeStability: "13.8% Institutional-Grade Returns",
        capitalAppreciation: "9% Annual Value Growth"
      },
      amenities: [
        "Glass Curtain Wall Exterior Excellence",
        "Bio Glass with Premium UV Filters",
        "Double Height Executive Reception",
        "Internal Landscaped Courtyard Oasis",
        "221 Covered Executive Parking Bays",
        "Full Handicapped Accessibility",
        "Specialized Executive Washroom Facilities",
        "Advanced Integrated Building Systems",
        "Prime Kilimani Strategic Location",
        "Chaka & Lenana Roads Junction"
      ],
      investment: {
        totalInvestment: 1485000000,
        monthlyIncome: 17081250,
        annualIncome: 204975000,
        managementFee: 8,
        netYield: 13.8,
        cashOnCash: 12.7,
        capRate: 14.5,
        breakEvenPoint: 7.2,
        appreciationRate: 9,
        totalROI: 22.8
      },
      feasibility: {
        marketDemand: "Exceptional",
        locationScore: 8.8,
        growthPotential: "Outstanding",
        liquidityRating: "Premium",
        maintenanceRequirement: "Minimal",
        regulatoryRisk: "Minimal"
      },
      testimonials: [
        {
          quote: "Grade A office space in Nairobi's premium districts represents one of Africa's most stable investment opportunities. The Atrium exemplifies this perfectly.",
          author: "Robert Sterling",
          title: "Managing Director, Pan-African Office Fund"
        },
        {
          quote: "The quality of construction and tenant profile makes this a cornerstone investment for any serious African real estate portfolio.",
          author: "Isabella Martinez",
          title: "Senior Investment Manager, Global Property Advisors"
        }
      ],
      brochureUrl: "/brochures/atrium-office-development.pdf"
    },

    6: {
      title: "Uchumi House Commercial Building",
      subtitle: "The Strategic Command Post of Nairobi's CBD",
      location: "Aga Khan Walk, Central Business District - Kenya's Financial Heart",
      type: "Premium Commercial Investment",
      price: "US$4,400,000",
      priceKsh: "KSh 570 Million",
      yield: "12.2%",
      exclusiveTag: "CBD LANDMARK",
      images: [
        "/p1/IMG-20250813-WA0009.jpg",
        "/p1/IMG-20250813-WA0010.jpg"
      ],
      features: ["4,491 sqm Premium Commercial Space", "5-Storey + Basement Architecture", "Prime CBD Strategic Location", "Established Tenant Base", "Exceptional Street Visibility", "Landmark Neighboring Properties"],
      status: "Exclusive Offering",
      riskProfile: "Stable Income Asset",
      occupancyRate: "88%",
      description: "Secure your position in Nairobi's most prestigious commercial corridor with this exceptional investment opportunity. Uchumi House doesn't just occupy prime CBD real estate—it dominates a strategic intersection where Kenya's business elite converge daily.",
      luxuryDescription: "For the sophisticated investor who recognizes that location is everything in commercial real estate, this property offers immediate access to Kenya's financial epicenter. This is where business happens, deals are struck, and fortunes are made.",
      details: {
        commercialArea: "4,491 sqm of Premium CBD Space",
        architecture: "5-Storey + Basement + Mezzanine",
        streetPresence: "Exceptional Aga Khan Walk Visibility",
        buildingStatus: "Established Commercial Landmark",
        occupancyProfile: "Stable Multi-Tenant Income Base",
        tenantMix: "Professional Office & Retail Combination",
        annualReturns: "12.2% Consistent Performance",
        locationValue: "CBD Core Appreciation Potential"
      },
      amenities: [
        "Prime Aga Khan Walk Strategic Location",
        "5-Storey + Basement Professional Structure",
        "Additional Mezzanine Level",
        "Exceptional Street Visibility & Signage",
        "Level Building Terrain Advantage",
        "Established Commercial District",
        "Landmark Neighboring Properties",
        "Government Office Proximity",
        "Major Transportation Access Hub",
        "Thriving Business Environment"
      ],
      investment: {
        totalInvestment: 562500000,
        monthlyIncome: 5729167,
        annualIncome: 68750000,
        managementFee: 7,
        netYield: 12.2,
        cashOnCash: 11.4,
        capRate: 13.1,
        breakEvenPoint: 8.2,
        appreciationRate: 7,
        totalROI: 19.2
      },
      feasibility: {
        marketDemand: "Exceptional",
        locationScore: 9.0,
        growthPotential: "Solid Growth",
        liquidityRating: "Premium",
        maintenanceRequirement: "Standard Professional",
        regulatoryRisk: "Minimal"
      },
      testimonials: [
        {
          quote: "CBD properties with this level of visibility and accessibility are increasingly rare. This represents exceptional value for long-term holders.",
          author: "Charles Hamilton",
          title: "Regional Director, Commonwealth Property Group"
        },
        {
          quote: "The Aga Khan Walk location provides unmatched access to Nairobi's business community. A solid addition to any commercial portfolio.",
          author: "Victoria Chen",
          title: "Investment Principal, African Commercial Properties"
        }
      ],
      brochureUrl: "/brochures/uchumi-house.pdf"
    },

    7: {
      title: "The Panari Hotel",
      subtitle: "Kenya's Crown Jewel of Luxury Hospitality",
      location: "Mombasa Road, Nairobi West - Gateway to Business & Safari",
      type: "5-Star Hospitality Investment",
      price: "US$25M",
      priceKsh: "KSh 3.2 Billion",
      yield: "18.5%",
      exclusiveTag: "LUXURY HOSPITALITY FLAGSHIP",
      images: [
        "/p8/Screenshot 2025-08-18 224428.png",
        "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
        "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
        "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
      ],
      features: ["136 Luxury Suites", "5-Star International Rating", "2.5 Acres of Exclusive Grounds", "12 Executive Meeting Rooms", "4 Gourmet Restaurants", "350 Vehicle VIP Parking"],
      status: "Exclusive Offering",
      riskProfile: "Premium Hospitality Asset",
      occupancyRate: "88%",
      description: "Own Kenya's most prestigious hospitality asset with this magnificent 5-star hotel that defines luxury in East Africa's business capital. The Panari Hotel isn't just accommodation—it's where international dignitaries, business leaders, and discerning travelers experience the pinnacle of African hospitality excellence.",
      luxuryDescription: "For the elite investor who demands nothing less than the finest, this represents the ultimate hospitality investment: a 5-star flagship that consistently delivers exceptional returns while serving as a symbol of sophistication and success in Kenya's most dynamic market.",
      details: {
        luxurySuites: "136 Recently Refurbished Premium Accommodations",
        exclusiveGrounds: "2.5 Acres of Landscaped Luxury",
        executiveFacilities: "12 State-of-the-Art Meeting & Conference Rooms",
        diningExcellence: "4 Award-Winning Restaurants & Bars",
        vipParking: "350 Vehicle Executive Parking Facility",
        buildingYear: "2014 - Contemporary Luxury Standards",
        annualPerformance: "18.5% Exceptional Returns",
        capitalGrowth: "15% Premium Appreciation"
      },
      amenities: [
        "136 Recently Refurbished Luxury Suites",
        "12 Executive Meeting & Conference Rooms",
        "4 Award-Winning Restaurants",
        "4 Premium Executive Bars",
        "2 Fully Equipped Fitness Centers",
        "Olympic-Standard Swimming Pool",
        "350 Vehicle VIP Parking",
        "Professional Culinary Kitchen",
        "5 Disability-Accessible Premium Rooms",
        "Double-Glazed Soundproof Windows",
        "Nairobi National Park Panoramic Views",
        "Ultra-High-Speed Internet",
        "24/7 Executive Security",
        "Backup Power Systems",
        "Award-Winning Landscaped Gardens"
      ],
      investment: {
        totalInvestment: 3500000000,
        monthlyIncome: 53958333,
        annualIncome: 647500000,
        managementFee: 15,
        netYield: 18.5,
        cashOnCash: 15.7,
        capRate: 19.8,
        breakEvenPoint: 5.4,
        appreciationRate: 15,
        totalROI: 33.5
      },
      feasibility: {
        marketDemand: "Exceptional",
        locationScore: 8.7,
        growthPotential: "Outstanding",
        liquidityRating: "Premium",
        maintenanceRequirement: "Institutional Standard",
        regulatoryRisk: "Minimal"
      },
      testimonials: [
        {
          quote: "5-star hospitality assets in emerging markets are rare. The Panari represents the perfect blend of luxury positioning and exceptional returns.",
          author: "Thomas Ashworth",
          title: "Chairman, Global Hospitality Investments"
        },
        {
          quote: "This property exemplifies everything we seek: prestige, performance, and position. A flagship addition to any serious hospitality portfolio.",
          author: "Anastasia Volkov",
          title: "Managing Director, European Hotel Investment Fund"
        }
      ],
      brochureUrl: "/brochures/panari-hotel.pdf"
    },

    8: {
      title: "Absa Towers",
      subtitle: "The Towering Symbol of Financial Excellence",
      location: "Loita and Market Street, Nairobi CBD - Kenya's Financial Epicenter",
      type: "Grade A Office Tower Investment",
      price: "US$16,200,000",
      priceKsh: "KSh 2.1 Billion",
      yield: "9.0%",
      exclusiveTag: "FINANCIAL DISTRICT ICON",
      images: [
        "/p3/ABSA_Towers.png", 
        "/p3/Screenshot 2025-08-14 212635.png", 
        "/p3/Screenshot 2025-08-14 212644.png", 
        "/p3/Screenshot 2025-08-14 212655.png",
        "/p3/Screenshot 2025-08-14 212707.png",
        "/p3/Screenshot 2025-08-14 212720.png"
      ],
      features: [
        "17-Storey Commercial Tower", 
        "24,768 sqm Gross Built-Up Area", 
        "13,313 sqm Net Lettable Area",
        "160 Multi-Level Parking Bays",
        "99.8% Elite Occupancy Rate",
        "Blue-Chip Corporate Tenants"
      ],
      status: "Exclusive Offering",
      riskProfile: "Blue Chip Tower Asset",
      occupancyRate: "99.8%",
      description: "Command Nairobi's financial district skyline with this iconic 17-storey tower that has defined corporate excellence for over three decades. Absa Towers isn't just premium office space—it's the address of choice for Kenya's financial elite and multinational corporations.",
      luxuryDescription: "For the institutional investor who recognizes that true value lies in irreplaceable assets, Absa Towers represents the pinnacle of commercial real estate investment: a trophy tower with blue-chip tenants delivering consistent institutional-grade returns in Kenya's most prestigious business address.",
      details: {
        towerHeight: "17-Storey Financial District Icon",
        grossArea: "24,768 sqm Total Built-Up Excellence",
        lettableArea: "13,313 sqm Premium Office Space",
        parkingFacility: "160 Multi-Level Executive Parking",
        occupancyExcellence: "99.8% Blue-Chip Corporate Occupancy",
        tenantProfile: "Tier-One Banks & Government Institutions",
        yieldProfile: "9.0%+ Institutional-Grade Returns",
        assetAppreciation: "12% Annual Value Enhancement"
      },
      amenities: [
        "Grand Executive Reception Area",
        "4 High-Speed Schindler Passenger Lifts",
        "Dual Backup Generator Systems (500KVA & 640KVA)",
        "Solar Panel Energy Supplementation",
        "Advanced Fibre Optic Services",
        "Full Handicapped Accessibility",
        "Premium Glass Curtain Walling",
        "Executive Security & Body Scanner",
        "Access-Controlled Tenant Spaces",
        "24-Hour Professional Security",
        "CCTV Surveillance Systems",
        "Advanced Fire Safety Systems",
        "Professional Water Management Systems",
        "Executive Parking Access Control",
        "Premium Tarmac Driveways"
      ],
      investment: {
        totalInvestment: 2035000000,
        monthlyIncome: 15500000, 
        annualIncome: 185000000, 
        managementFee: 100000, 
        netYield: 9.0,
        cashOnCash: 8.5, 
        capRate: 9.5, 
        breakEvenPoint: 11.0, 
        appreciationRate: 12.0, 
        totalROI: 21.0 
      },
      feasibility: {
        marketDemand: "Exceptional", 
        locationScore: 9.0, 
        growthPotential: "Outstanding", 
        liquidityRating: "Premium", 
        maintenanceRequirement: "Institutional Standard", 
        regulatoryRisk: "Minimal" 
      },
      testimonials: [
        {
          quote: "Trophy towers with this occupancy rate and tenant quality are virtually impossible to find. This represents institutional real estate at its finest.",
          author: "Sir James Pemberton",
          title: "Chairman, Colonial Property Holdings"
        },
        {
          quote: "The combination of location, building quality, and tenant profile makes this a must-have anchor asset for any serious African portfolio.",
          author: "Marie-Claire Dubois",
          title: "CIO, Continental European Real Estate Fund"
        }
      ],
      brochureUrl: "/brochures/absa-towers.pdf"
    },

    9: {
      title: "Tembo Coop House",
      subtitle: "The Historic Commercial Cornerstone of Nairobi",
      location: "Moi Avenue, Nairobi CBD - Kenya's Historic Commercial Artery",
      type: "Heritage Commercial Investment",
      price: "US$3,000,000",
      priceKsh: "KSh 385 Million",
      yield: "Details on Application",
      exclusiveTag: "HERITAGE COMMERCIAL ASSET",
      images: [
        "https://images.pexels.com/photos/1647416/pexels-photo-1647416.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop", 
        "https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop", 
        "https://images.pexels.com/photos/1036838/pexels-photo-1036838.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop", 
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop" 
      ],
      features: [
        "Historic Moi Avenue Strategic Position",
        "Solid Colonial-Era Construction",
        "Ground Floor Premium Retail Spaces",
        "7 Upper Floors Professional Offices",
        "30,174 Sq.Ft. Total Built Area",
        "100% Occupancy with Stable Tenants"
      ],
      status: "Exclusive Offering",
      riskProfile: "Heritage Income Asset",
      occupancyRate: "100%", 
      description: "Own a piece of Nairobi's commercial heritage with this distinguished building that has anchored Kenya's business district for generations. Tembo Coop House represents more than real estate—it's a testament to enduring value and architectural permanence in Africa's most dynamic capital.",
      luxuryDescription: "For the sophisticated investor who appreciates the irreplaceable value of heritage assets, this property offers something that modern buildings cannot: historical significance combined with contemporary income generation. This is legacy real estate that transcends market cycles.",
      details: {
        historicLocation: "Prestigious Moi Avenue Heritage Position",
        construction: "Solid Colonial-Era Build Quality",
        retailComponent: "Ground Floor Premium Commercial Spaces",
        officeSpace: "7 Floors of Professional Office Accommodation",
        totalArea: "30,174 Sq.Ft. of Income-Generating Space",
        occupancyRecord: "100% Fully Occupied by Established Tenants",
        incomeStability: "Consistent Returns from Stable Tenant Base",
        heritageValue: "Irreplaceable Historic Commercial Asset"
      },
      amenities: [
        "Reliable Municipal Water Supply & Storage",
        "Electricity with Backup Generator Support",
        "Professional Firefighting Equipment",
        "8-Person Kleemann Passenger Lift",
        "High-Speed Fibre Internet Connectivity"
      ],
      investment: {
        totalInvestment: 385000000,
        monthlyIncome: 3500000, 
        annualIncome: 42000000, 
        managementFee: 5, 
        netYield: 10.9, 
        cashOnCash: 10.2, 
        capRate: 11.5, 
        breakEvenPoint: 9.2, 
        appreciationRate: 6, 
        totalROI: 16.9 
      },
      feasibility: {
        marketDemand: "Exceptional", 
        locationScore: 8.5, 
        growthPotential: "Solid Heritage Growth", 
        liquidityRating: "Medium-High", 
        maintenanceRequirement: "Standard Heritage Maintenance", 
        regulatoryRisk: "Minimal" 
      },
      testimonials: [
        {
          quote: "Heritage properties with full occupancy and stable cash flows are increasingly rare. This represents excellent value for long-term investors.",
          author: "Lord Edward Hamilton",
          title: "Chairman, Commonwealth Heritage Properties"
        },
        {
          quote: "The combination of historical significance and modern returns makes this a unique addition to any diversified real estate portfolio.",
          author: "Dr. Kwame Asante",
          title: "Principal, African Heritage Investment Fund"
        }
      ],
      brochureUrl: "/brochures/tembo-coop-house.pdf"
    }
  };

  const property = propertyData[id as unknown as keyof typeof propertyData];

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Property Not Available</h2>
          <Link href="/properties" className="text-neutral-600 hover:text-neutral-800 font-medium">
            ← Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppContact = (message: string) => {
    const phoneNumber = "254115277610";
    const encodedMessage = encodeURIComponent(
      `Regarding ${property.title} - ${property.location}. ${message}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const calculateInvestmentReturns = (amount: number) => {
    const monthlyReturn = (amount * property.investment.netYield / 100) / 12;
    const yearlyReturn = amount * property.investment.netYield / 100;
    const fiveYearProjection = amount * Math.pow(1 + (property.investment.totalROI / 100), 5);
    return { monthlyReturn, yearlyReturn, fiveYearProjection };
  };

  const investmentReturns = calculateInvestmentReturns(investmentAmount);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = property.brochureUrl;
    link.download = `${property.title.replace(/\s+/g, '-').toLowerCase()}-investment-prospectus.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Playfair Display, serif', color: '#1a1a1a' }}>
      
      {/* Premium Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link 
              href="/properties"
              className="inline-flex items-center text-neutral-600 hover:text-neutral-800 font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-3" />
              Return to Portfolio
            </Link>
            
            <div className="flex items-center gap-4">
              <div className="text-sm text-neutral-500 font-medium">
                EXCLUSIVE OFFERING
              </div>
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-3 rounded-lg transition-colors ${
                  isLiked ? 'bg-neutral-100 text-neutral-700' : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-600'
                }`}
              >
                <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              <button className="p-3 bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors">
                <Share2 className="h-5 w-5 text-neutral-600" />
              </button>
              <button 
                onClick={handleDownloadBrochure}
                className="inline-flex items-center px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg transition-colors font-medium"
              >
                <FileText className="h-4 w-4 mr-2" />
                Investment Prospectus
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            
            {/* Hero Section */}
            <motion.div
              {...({ className: "mb-16" } as any)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="px-4 py-2 bg-neutral-900 text-white rounded text-sm font-medium tracking-wide">
                  {property.exclusiveTag}
                </div>
                <div className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded text-sm font-medium">
                  {property.yield} ANNUAL YIELD
                </div>
                <div className="flex items-center text-slate-900">
                  <Crown className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">INSTITUTIONAL GRADE</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-700 mb-4 leading-tight tracking-tight">
                {property.title}
              </h1>
              
              <p className="text-xl text-neutral-600 mb-6 font-light leading-relaxed">
                {property.subtitle}
              </p>
              
              <div className="flex items-center text-slate-700 mb-8">
                <MapPin className="h-5 w-5 mr-3" />
                <span className="text-lg font-medium">{property.location}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-8">
                <div className="text-5xl font-bold text-slate-700">{property.price}</div>
                <div className="text-xl text-neutral-500 font-light">({property.priceKsh})</div>
              </div>

              {/* Value Proposition */}
              <div className="bg-neutral-50 p-8 rounded-lg border border-neutral-200">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Why This Investment?</h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {property.luxuryDescription}
                </p>
              </div>
            </motion.div>

            {/* Premium Image Gallery */}
            <motion.div
              {...({ className: "mb-16" } as any)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="relative">
                <div className="relative group cursor-pointer" onClick={() => setIsImageModalOpen(true)}>
                  <img 
                    src={property.images[currentImageIndex]} 
                    alt={`${property.title} ${currentImageIndex + 1}`}
                    className="w-full h-96 lg:h-[600px] object-cover rounded-lg shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 rounded-lg flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">
                      <Eye className="h-12 w-12 text-white mx-auto mb-2" />
                      <p className="text-white font-medium">View Gallery</p>
                    </div>
                  </div>
                  
                  {/* Navigation Arrows */}
                  {property.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-300"
                      >
                        <ChevronLeft className="h-6 w-6 text-neutral-800" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-300"
                      >
                        <ChevronRight className="h-6 w-6 text-neutral-800" />
                      </button>
                    </>
                  )}
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-6 right-6 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {currentImageIndex + 1} of {property.images.length}
                  </div>
                </div>
                
                {/* Thumbnail Navigation */}
                {property.images.length > 1 && (
                  <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
                    {property.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-24 h-18 rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentImageIndex ? 'border-neutral-900' : 'border-neutral-200 hover:border-neutral-400'
                        }`}
                      >
                        <img 
                          src={image} 
                          alt={`${property.title} thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Investment Story */}
            <motion.div
              {...({ className: "mb-16" } as any)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-neutral-900 mb-8 border-b border-neutral-200 pb-4">
                The Investment Opportunity
              </h2>
              <div className="text-lg text-neutral-700 leading-relaxed space-y-6">
                <p>
                  {property.description}
                </p>
                <p className="bg-neutral-50 p-6 rounded-lg border-l-4 border-neutral-900 italic">
                  "In today's volatile markets, discerning investors are seeking stable, high-yield opportunities in emerging economies. 
                  This property represents exactly that—a rare combination of immediate income generation and long-term capital appreciation 
                  in one of Africa's most dynamic markets."
                </p>
              </div>
            </motion.div>

            {/* Investment Performance Metrics */}
            <motion.div
              {...({ className: "mb-16" } as any)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-neutral-900 mb-8 border-b border-neutral-200 pb-4">
                Performance Analysis
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 p-8 rounded-lg border border-neutral-200">
                  <div className="flex items-center mb-4">
                    <DollarSign className="h-8 w-8 text-neutral-700 mr-4" />
                    <div>
                      <div className="text-sm text-neutral-600 font-medium uppercase tracking-wide">Total Investment</div>
                      <div className="text-3xl font-bold text-neutral-900">
                        {property.price}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg border border-green-200">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="h-8 w-8 text-green-700 mr-4" />
                    <div>
                      <div className="text-sm text-green-700 font-medium uppercase tracking-wide">Monthly Income</div>
                      <div className="text-3xl font-bold text-green-900">
                        $126K
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 p-8 rounded-lg border border-neutral-200">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="h-8 w-8 text-neutral-700 mr-4" />
                    <div>
                      <div className="text-sm text-neutral-600 font-medium uppercase tracking-wide">Annual Yield</div>
                      <div className="text-3xl font-bold text-neutral-900">
                        {property.yield}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-900 text-slate-300 p-10 rounded-lg">
                <h3 className="text-3xl font-bold mb-8 text-center">Investment Metrics That Matter</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {Object.entries({
                    'Net Yield': `${property.investment.netYield}%`,
                    'Cash on Cash': `${property.investment.cashOnCash}%`,
                    'Cap Rate': `${property.investment.capRate}%`,
                    'Total ROI': `${property.investment.totalROI}%`
                  }).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-sm text-neutral-400 mb-2 font-medium uppercase tracking-wide">{key}</div>
                      <div className="text-3xl font-bold text-white">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Exclusive Features */}
            <motion.div
              {...({ className: "mb-16" } as any)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-4xl font-bold text-neutral-900 mb-8 border-b border-neutral-200 pb-4">
                Premium Features & Amenities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                    <CheckCircle className="h-5 w-5 text-neutral-700 mr-4 flex-shrink-0" />
                    <span className="text-neutral-800 font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div
              {...({ className: "mb-16" } as any)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-neutral-900 mb-8 border-b border-neutral-200 pb-4">
                What International Investors Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {property.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-neutral-50 p-8 rounded-lg border border-neutral-200">
                    <p className="text-lg text-neutral-700 italic mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t border-neutral-200 pt-4">
                      <div className="font-bold text-neutral-900">{testimonial.author}</div>
                      <div className="text-sm text-neutral-600 font-medium">{testimonial.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Investment Calculator */}
            <motion.div
              {...({ className: "mb-16" } as any)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-neutral-900 mb-8 border-b border-neutral-200 pb-4">
                Calculate Your Returns
              </h2>
              <div className="bg-neutral-50 p-8 rounded-lg border border-neutral-200 mb-8">
                <label className="block text-sm font-medium text-neutral-700 mb-4 uppercase tracking-wide">
                  Investment Amount (USD)
                </label>
                <input
                  type="number"
                  value={investmentAmount || ''}
                  onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                  placeholder="Enter your investment amount"
                  className="w-full p-6 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent text-xl font-medium"
                />
              </div>

              {investmentAmount > 0 && (
                <motion.div
                  {...({ className: "grid grid-cols-1 md:grid-cols-3 gap-8" } as any)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="bg-green-50 p-8 rounded-lg border border-green-200">
                    <div className="text-sm text-green-700 mb-3 font-medium uppercase tracking-wide">Monthly Returns</div>
                    <div className="text-3xl font-bold text-green-900">
                      ${investmentReturns.monthlyReturn.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-neutral-50 p-8 rounded-lg border border-neutral-200">
                    <div className="text-sm text-neutral-700 mb-3 font-medium uppercase tracking-wide">Annual Returns</div>
                    <div className="text-3xl font-bold text-neutral-900">
                      ${investmentReturns.yearlyReturn.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-neutral-50 p-8 rounded-lg border border-neutral-200">
                    <div className="text-sm text-neutral-700 mb-3 font-medium uppercase tracking-wide">5-Year Projection</div>
                    <div className="text-3xl font-bold text-neutral-900">
                      ${investmentReturns.fiveYearProjection.toLocaleString()}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Sidebar - Premium Contact Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <motion.div
                {...({ className: "bg-white p-10 rounded-lg shadow-2xl border border-neutral-200" } as any)}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-center mb-8">
                  <Crown className="h-12 w-12 text-slate-900 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    Exclusive Investment Opportunity
                  </h3>
                  <p className="text-neutral-600 font-medium">
                    Limited to Qualified Investors
                  </p>
                </div>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-slate-900 mr-4" />
                    <span className="text-neutral-800 font-medium">+254 115 277 610</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-slate-900 mr-4" />
                    <span className="text-neutral-800 font-medium">investments@murivest.co.ke</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-neutral-600 mr-4" />
                    <span className="text-neutral-800 font-medium">Available 24/7 for International Clients</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <button
                    className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                    onClick={() => handleWhatsAppContact("I'm interested in discussing this exclusive investment opportunity.")}
                  >
                    Request Private Consultation
                  </button>

                  <button
                    className="w-full border-2 border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 text-neutral-700 py-4 rounded-lg font-medium text-lg transition-all duration-300"
                    onClick={() => handleWhatsAppContact("Please send me the complete investment documentation.")}
                  >
                    Request Full Documentation
                  </button>
                  
                  <button
                    onClick={handleDownloadBrochure}
                    className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 py-4 rounded-lg font-medium text-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Investment Prospectus
                  </button>
                </div>

                {/* Urgency & Scarcity */}
                <div className="mt-10 pt-8 border-t border-neutral-200">
                  <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                    <div className="flex items-center mb-3">
                      <Clock className="h-5 w-5 text-neutral-600 mr-3" />
                      <h4 className="font-bold text-neutral-900">Limited Time Offer</h4>
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      This exclusive investment opportunity is available to qualified investors only. 
                      Don't miss your chance to own a piece of Nairobi's premier hospitality market.
                    </p>
                  </div>
                </div>

                {/* Market Insights */}
                <div className="mt-8 pt-8 border-t border-neutral-200">
                  <h4 className="font-bold text-neutral-900 mb-6">Market Intelligence</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600 font-medium">Market Outlook</span>
                      <div className="flex items-center text-green-600">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        <span className="font-bold">Exceptional Growth</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600 font-medium">Investment Grade</span>
                      <span className="font-bold text-neutral-900">{property.feasibility.marketDemand}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600 font-medium">Capital Appreciation</span>
                      <span className="font-bold text-green-600">+{property.investment.appreciationRate}% Annually</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600 font-medium">Occupancy Rate</span>
                      <span className="font-bold text-neutral-900">{property.occupancyRate}</span>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 pt-8 border-t border-neutral-200">
                  <h4 className="font-bold text-neutral-900 mb-6">Why Choose Murivest</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-neutral-600 mr-3" />
                      <span className="text-sm text-neutral-700 font-medium">Regulated Investment Firm</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-neutral-600 mr-3" />
                      <span className="text-sm text-neutral-700 font-medium">Award-Winning Property Management</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-neutral-600 mr-3" />
                      <span className="text-sm text-neutral-700 font-medium">Trusted by 500+ International Investors</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-neutral-600 mr-3" />
                      <span className="text-sm text-neutral-700 font-medium">98% Client Satisfaction Rating</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Final Call-to-Action Section */}
        <motion.div
          {...({ className: "mt-20 bg-neutral-900 text-white p-16 rounded-lg text-center" } as any)}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Crown className="h-16 w-16 text-white mx-auto mb-8" />
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Your Gateway to African Prosperity
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join the exclusive circle of international investors who have discovered Kenya's most lucrative real estate opportunities. 
            This is more than an investment—it's your entry into a market that sophisticated investors have been quietly profiting from for years.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              className="bg-white text-neutral-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-neutral-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              onClick={() => handleWhatsAppContact("I'm ready to move forward with this investment opportunity. Please arrange a consultation.")}
            >
              Secure Your Investment Today
            </button>
            <button
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-neutral-900 transition-all duration-300"
              onClick={handleDownloadBrochure}
            >
              Download Complete Prospectus
            </button>
          </div>
          <p className="text-sm text-neutral-400 mt-6">
            *This opportunity is available to qualified investors only. Subject to regulatory approval and due diligence.
          </p>
        </motion.div>

        {/* Risk Disclosure */}
        <div className="mt-12 p-8 bg-neutral-50 rounded-lg border border-neutral-200">
          <h3 className="font-bold text-neutral-900 mb-4">Important Investment Disclosure</h3>
          <p className="text-sm text-neutral-600 leading-relaxed">
            All investment opportunities carry inherent risks, and past performance does not guarantee future results. 
            Projected returns are estimates based on current market conditions and historical performance. 
            We recommend consulting with your financial advisor before making any investment decisions. 
            This opportunity is available to accredited investors only and subject to regulatory compliance.
          </p>
        </div>
      </div>

      {/* Enhanced Image Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            {...({ className: "fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-6" } as any)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageModalOpen(false)}
          >
            <motion.div
              {...({ className: "relative max-w-5xl max-h-full" } as any)}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e: any) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="absolute top-6 right-6 bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full z-10 transition-all duration-300"
              >
                <X className="h-6 w-6 text-white" />
              </button>
              
              <img 
                src={property.images[currentImageIndex]} 
                alt={`${property.title} ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              
              {property.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 p-4 rounded-full transition-all duration-300"
                  >
                    <ChevronLeft className="h-8 w-8 text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 p-4 rounded-full transition-all duration-300"
                  >
                    <ChevronRight className="h-8 w-8 text-white" />
                  </button>
                </>
              )}
              
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-6 py-3 rounded-full font-medium">
                {currentImageIndex + 1} of {property.images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PropertyDetail;