'use client';

import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, ArrowRight, Clock, Calendar, User } from 'lucide-react';
import Link from 'next/link';
import { getAuthor } from "@/lib/genAuthor"
import Image from 'next/image';
// ─────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────
interface ResearchEntry {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  image: string
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

// ─────────────────────────────────────────────────────────────
// DATA  (262 articles — no image fields)
// ─────────────────────────────────────────────────────────────
const research: ResearchEntry[] = [
  {
    id: 'standard-chartered-nakumatt-auction-distressed-real-estate-kenya-2026',
    title: 'Distressed Real Estate in Kenya: The Nakumatt Auction and the Anatomy of Secured Lending Recovery',
    excerpt: 'An institutional analysis of the Standard Chartered Bank Kenya auction of Nakumatt-linked properties over Sh1.9 billion in debt, examining the mechanics of statutory notices, charged land recovery, and the strategic opportunities emerging in commercial real estate.',
    author: getAuthor('investment'),
    image: '/nairobi.webp',
    category: 'Market Intelligence',
    date: '2026-05-03',
    readTime: '52 min read',
    featured: true
    },
    {
      id: 'standard-chartered-chiromo-headquarters-sale-westlands-nairobi-2026',
      title: "The Chiromo Disposition: Standard Chartered's Exit from Physical Banking and the Institutional Investment Imperative in Nairobi's Prime Commercial Real Estate",
      excerpt: 'Comprehensive analysis of Standard Chartered Bank Kenya\'s Ksh 1.41 billion Chiromo headquarters sale, examining the structural retreat from physical banking, Westlands land value dynamics and Grade A commercial property.',
      author: getAuthor('investment'),
      image: '/research-images/standard-chartered-chiromo-headquarters-sale-westlands-nairobi-2026.webp',
      category: 'Market Intelligence',
      date: '2026-05-05',
      readTime: '65 min read',
      featured: true
    },
    {
      id: 'stamp-duty-commercial-property-rates-reliefs-2026',
      title: 'How the Stamp Duty on UK Commercial Property Rate Structures, Available Reliefs, and Strategic Calculation for 2026 Acquisitions can be avhieved',
      excerpt: 'Technical analysis of SDLT on UK commercial property, examining rate structures, calculation methodologies, TOGC reliefs, anti-avoidance provisions, and strategic structuring for legitimate tax efficiency.',
      author: getAuthor('investment'),
      image: '/research-images/stamp-duty-commercial-property-rates-reliefs-2026.webp',
      category: 'Process & Legal',
      date: '2026-04-05',
      readTime: '38 min read',
      featured: false
    },
    {
      id: 'petrol-station-investment-forecourt-real-estate',
      title: 'Why Petrol Stations is the MOST Overlooked Commercial Asset Class with High Barriers to Entry',
      excerpt: 'Comprehensive analysis of UK forecourt real estate, examining environmental liability frameworks, fuel retailing economics, the EV transition, and the high barriers to entry creating niche investment opportunities.',
      author: getAuthor('investment'),
      image: '/research-images/petrol-station-investment-forecourt-real-estate.webp',
      category: 'Investment',
      date: '2026-03-18',
      readTime: '14 min read',
      featured: false
    },

    {
    id: 'absa-towers-nairobi-cbd-exclusive-investment',
    title: 'Your Exclusive Invitation: Absa Towers — Nairobi CBD\'s Best Kept Institutional Secret',
    excerpt: 'How Kenya\'s UHNWI are deploying capital into income-producing commercial assets on Loita Street while sitting on their 10-acre Runda estate or Muthaiga golf course.',
    author: getAuthor('investment'),
    category: 'Investment',
    image: '/p3/absa.webp',
    date: '2026-05-13',
    readTime: '15 min read',
    featured: true,
  },
    {
      id: 'murivest-institutional-wealth-preservation-guide',
      title: 'The Dangerous Wealth Preservation Myths Costing Kenyan Investors Millions in Commercial Real Estate',
      excerpt: 'Across global markets, investors are being misled by outdated financial assumptions, passive investment structures, and institutional inefficiencies.',
      image: 'https://i.ibb.co/pjD16k20/The-Dangerous-wealth-preservation-myths.webp',
      author: getAuthor('wealth'),
      category: 'Wealth Preservation',
      date: '2026-05-14',
      readTime: '14 min read',
      featured: true,
    },
    {
    id: '3-dangerous-retirement-lies',
    title: '3 Dangerous Retirement Lies Brokers Are Telling Americans (And How to Protect Your Nest Egg)',
    excerpt: 'Former banking insider Chris Mayer exposes the three most costly retirement myths perpetuated by brokers and financial advisors.',
    author: getAuthor('investment'),
    category: 'Investment',
    image: 'https://i.ibb.co/3yxJYKS9/3-most-dangerous-retirment-lies.webp',
    date: '2026-05-15',
    readTime: '10 min read',
    featured: true,
    },
    {
    id: 'diani-and-watamu-land-have-appreciated-by-400%-since-2020',
    title: 'Diani and Watamu Land have appreciated by 400% since 2020',
    excerpt: 'Diani and Watamu Land have appreciated by 400% since 2020 Kenya\'s 536-kilometer coastline. Demand for Land in Watamu and Diani is increasing. There is also an increase in land prices in Mombasa hotspots.',
    author: getAuthor('investment'),
    image: 'https://i.ibb.co/cc2ttgK2/diani-watamu-land-2026.webp',
    category: 'Investment',
    date: '2026-05-13',
    readTime: '9 min read',
    featured: true,
    },
   {
    id: 'land-ownership-laws-kenya',
    title: 'Understanding Land Ownership Laws in Kenya',
    excerpt: 'Kenya\'s land ownership framework is governed by comprehensive legislation designed to provide security of tenure while protecting both individual rights and...',
    author: getAuthor('investment'),
    category: "Legal",
    date: "2024-12-28",
    readTime: "16 min read",
    image: "/land-ownership-laws-kenya.webp",
    featured: true,
  },

  {
    id: 'coastal-property-investment-mombasa',
    title: 'Coastal Property Investment: Mombasa and Beyond',
    excerpt: 'Kenya\'s coastal region presents unique investment opportunities that combine the allure of beachfront living with solid financial returns. From Mombasa\'s...',
    author: getAuthor('investment'),
    category: "Coastal",
    date: "2025-01-05",
    readTime: "13 min read",
    image: "/coastal-property-investment-mombasa.webp",
    featured: true,
  },

  {
    id: 'investment-properties-kiambu-county',
    title: 'Investment Properties in Kiambu County',
    excerpt: 'Kiambu County has emerged as one of Kenya\'s most attractive property investment destinations, offering a perfect blend of accessibility to Nairobi, natural...',
    author: getAuthor('development'),
    category: "Investment",
    date: "2025-01-01",
    readTime: "9 min read",
    image: "/investment-properties-kiambu-county.webp",
    featured: true,
  },

  {
    id: 'property-buying-process-kenya',
    title: 'Property Buying Process in Kenya: Step by Step Guide',
    excerpt: 'Purchasing property in Kenya requires careful navigation through various legal, financial, and administrative processes. Understanding each step of the...',
    author: getAuthor('development'),
    category: "Legal",
    date: "2025-01-08",
    readTime: "14 min read",
    image: "/property-buying-process-kenya.webp",
    featured: true,
  },

  {
    id: 'real-estate-financing-options-kenya',
    title: 'Real Estate Financing Options in Kenya',
    excerpt: 'Financing real estate purchases in Kenya has evolved significantly over the past decade, with financial institutions developing innovative products to meet...',
    author: getAuthor('development'),
    category: "Finance",
    date: "2025-01-03",
    readTime: "11 min read",
    image: "/real-estate-financing-options-kenya.webp",
    featured: true,
  },

  {
    id: 'due-diligence-checklist-kenya-land-2025',
    title: 'The Ultimate Due Diligence Checklist for Buying Land in Kenya 2025 (Post-Ardhisasa)',
    excerpt: 'Buying land in Kenya is a significant investment, and in 2025, while the process is becoming more transparent with digitization, thorough due diligence remai...',
    author: getAuthor('investment'),
    category: "Legal & Due Diligence",
    date: "2025-02-05",
    readTime: "15 min read",
    image: "/due-diligence-checklist-kenya-land-2025.webp",
    featured: true,
  },

  {
    id: 'affordable-housing-hotspots-beyond-nairobi-2025',
    title: 'Affordable Housing Hotspots Beyond Nairobi\'s Traditional Borders in 2025',
    excerpt: 'The dream of homeownership in Kenya often seems synonymous with Nairobi., as the capital\'s property prices continue to soar and congestion mounts, savvy...',
    author: getAuthor('affordableHousing'),
    image: "/affordable-housing-hotspots-beyond-nairobi-2025.webp",
    category: 'Logistics & Industrial',
    date: '2025-02-23',
    readTime: '12 min read',
  },

  {
    id: 'financing-real-estate-kenya-2025-options',
    title: 'Financing Your Real Estate Dream in Kenya 2025: Mortgages, SACCOs, and Creative Options',
    excerpt: 'Acquiring real estate, whether for a primary residence or investment, is a capital-intensive venture. In Kenya\'s dynamic 2025 market, a variety of financing...',
    author: getAuthor('investment'),
    category: "Finance & Mortgages",
    date: "2025-02-10",
    readTime: "14 min read",
    image: "/financing-real-estate-kenya-2025-options.webp",
  },

  {
    id: 'kenyan-real-estate-covid-impact',
    title: 'How COVID-19 Reshaped the Kenyan Real Estate Market',
    excerpt: 'The COVID-19 pandemic disrupted nearly every industry, and Kenyan real estate was no exception. Lockdowns, economic uncertainty, and changing consumer...',
    author: getAuthor('investment'),
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmOMAVkulcPrlDqtg5FgGf9nQ7Kg1HXUkNiw&s",
    category: 'Nairobi Office',
    date: '2025-03-28',
    readTime: '10 min read',
  },

  {
    id: 'commercial-property-investment-kenya',
    title: 'Commercial Property Investment in Kenya: Complete Guide',
    excerpt: 'Commercial real estate represents one of the most lucrative investment opportunities in Kenya\'s property market. Unlike residential properties, commercial re...',
    author: getAuthor('investment'),
    category: "Commercial",
    date: "2025-01-12",
    readTime: "15 min read",
    image: "/commercial-property-investment-kenya.webp",
  },

  {
    id: 'sustainable-designs-kenyan-housing',
    title: 'The Future of Affordable Living: Sustainable Designs in Kenyan Housing',
    excerpt: 'As Kenya grapples with a housing deficit estimated at over 2 million units, affordable housing has become a key focus for government and private developers.,...',
    author: getAuthor('affordableHousing'),
    category: "Construction",
    date: "2025-04-25",
    readTime: "10 min read",
    image: "https://static.ntvkenya.co.ke/uploads/2023/12/WhatsApp-Image-2022-12-07-at-11.48.33-1-1-e1701848346908-1320x762.webp",
  },

  {
    id: 'nairobi-real-estate-trends-2025-investment-forecast',
    title: 'Nairobi Real Estate Trends 2025: Key Insights and Investment Forecast',
    excerpt: 'Nairobi’s real estate landscape is undergoing a significant transformation in 2025. As Kenya’s capital city and economic nerve center, Nairobi continues to...',
    author: getAuthor('development'),
    image: "/nairobi-real-estate-trends-2025-investment-forecast.webp",
    category: 'Nairobi Office',
    date: '2025-08-29',
    readTime: '10 min read',
  },

  {
    id: 'why-land-investment-in-kenya-remains-lucrative-in-2025',
    title: 'Why Land Investment in Kenya Remains Lucrative in 2025',
    excerpt: 'Land has long been considered the foundation of wealth creation in Kenya, and in 2025, this investment vehicle continues to shine. From seasoned real estate...',
    author: getAuthor('investment'),
    image: "/why-land-investment-in-kenya-remains-lucrative-in-2025.webp",
    category: 'Land Investment',
    date: '2025-09-29',
    readTime: '10 min read',
  },

  {
    id: 'best-areas-to-buy-land-in-nairobi',
    title: 'Best Areas to Buy Land in Nairobi 2025',
    excerpt: 'Nairobi\'s land market offers diverse opportunities for investors seeking both residential and commercial properties. As Kenya\'s capital continues to expand,...',
    author: getAuthor('investment'),
    category: "Land Investment",
    date: "2025-01-15",
    readTime: "12 min read",
    image: "/kenya-night.webp",
  },

  {
    id: 'buying-land-vs-buying-house-kenya',
    title: 'Buying Land vs Buying a House in Kenya: What Should You Choose?',
    excerpt: 'One of the biggest financial decisions any Kenyan can make is choosing between buying land and building their own home or purchasing a completed house. Each...',
    author: getAuthor('investment'),
    category: "Home Ownership",
  date: "2025-05-28",
  readTime: "10 min read",
  image: "https://shiftersmovers.com/wp-content/uploads/2021/10/Building-a-house-vs-buying-cost_032601b80_4999.webp",
  },

  {
    id: 'kenya-land-vs-apartment-investment',
    title: 'Land vs Apartments in Kenya: Which Is the Better Investment?',
    excerpt: 'If you\'re planning to invest in Kenyan real estate, two of the most common options are buying land or investing in apartments. Each has its own advantages an...',
    author: getAuthor('investment'),
      image: "/research-images/kenya-land-vs-apartment-investment.webp",
    category: 'Nairobi Office',
    date: '2025-07-28',
    readTime: '10 min read',
  },

  {
    id: 'land-use-zoning-changes-nairobi-2025',
    title: 'Nairobi\'s Evolving Skyline: Understanding Land Use and Zoning Changes in 2025',
    excerpt: 'Nairobi\'s rapid urbanization necessitates continuous review and adaptation of its land use and zoning policies. In 2025, several changes, whether recently...',
    author: getAuthor('development'),
    category: "Legal & Regulations",
    date: "2025-09-10",
    readTime: "11 min read",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5I75J_Z5qHtpDJVY-yeMvyMo6Wq1OJU27ew&s",
  },

  {
    id: 'serviced-apartments-vs-traditional-rentals-kenya-2025',
    title: 'Serviced Apartments vs. Traditional Rentals in Kenya 2025: An Investor\'s Dilemma',
    excerpt: 'For property investors in Kenya looking to generate rental income, a key decision in 2025 is whether to venture into the serviced apartment market or stick...',
    author: getAuthor('development'),
   category: "Investment",
    date: "2025-09-05",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },

  {
    id: 'understanding-capital-gains-tax-kenya-real-estate-2025',
    title: 'Capital Gains Tax (CGT) on Real Estate in Kenya 2025: A Clear Guide',
    excerpt: 'Capital Gains Tax (CGT) is a significant consideration for anyone selling property in Kenya. Reintroduced and then revised, understanding its application,...',
    author: getAuthor('development'),
    category: "Taxation",
    date: "2025-07-19",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGF4JTIwY2FsY3VsYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },

  {
    id: 'real-estate-auctions-kenya-2025-guide',
    title: 'Buying Property at Auction in Kenya 2025: A Guide to Opportunities and Pitfalls',
    excerpt: 'Property auctions in Kenya, often involving distressed properties or sales by lenders, can be a source of real estate deals for savvy investors., the process...',
    author: getAuthor('development'),
    category: "Buying & Selling",
    date: "2025-08-20",
    readTime: "9 min read",
    image: "https://i0.wp.com/www.bidlegacy.com/wp-content/uploads/2024/05/Plymouth-street.webp?fit=806%2C841&ssl=1",
  },

  {
    id: 'digital-nomads-kenya-real-estate-impact-2025',
    title: 'Digital Nomads in Kenya 2025: Impact on Niche Rental Markets and Co-working Spaces',
    excerpt: 'The global rise of remote work has led to a surge in digital nomads – individuals who leverage technology to work from anywhere in the world. Kenya, with its...',
    author: getAuthor('development'),
    category: "Market Trends",
    date: "2025-09-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1517404215738-15263e9f9178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlnaXRhbCUyMG5vbWFkfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },

  {
    id: 'sectional-properties-act-kenya-2025-explained',
    title: 'Kenya\'s Sectional Properties Act 2020: A 2025 Guide for Apartment Owners and Developers',
    excerpt: 'The Sectional Properties Act, 2020, significantly reformed the ownership and management of multi-unit developments in Kenya, replacing the previous regime...',
    author: getAuthor('development'),
    category: "Legal & Regulations",
    date: "2025-06-28",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50JTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },

  {
    id: 'emerging-affordable-property-hubs',
    title: 'Beyond Nairobi: Emerging Investment Hubs for Affordable Property in Kenya',
    excerpt: 'Nairobi has long been the focal point of real estate investment in Kenya., escalating property prices, congestion, and shifting population trends have led...',
    author: getAuthor('affordableHousing'),
    image: "/emerging-affordable-property-hubs.webp",
    category: 'Logistics & Industrial',
    date: '2025-05-02',
    readTime: '8 min read',
  },

  {
    id: 'real-estate-photography-videography-kenya-2025',
    title: 'Visual Appeal: The Power of Professional Real Estate Photography & Videography in Kenya 2025',
    excerpt: 'In Kenya\'s increasingly competitive 2025 real estate market, first impressions are overwhelmingly digital. High-quality photography and videography are no...',
    author: getAuthor('marketing'),
    category: "Marketing & Sales",
    date: "2025-07-12",
    readTime: "8 min read",
    image: "/nairobi.webp",
  },

  {
    id: 'government-housing-projects-kenya',
    title: 'Government Initiatives Driving Real Estate Growth in Kenya: A Deep Dive',
    excerpt: 'Kenya’s real estate sector has seen a significant transformation in recent years, with government-backed initiatives acting as a catalyst for growth. From...',
    author: getAuthor('investment'),
    image: '/government-housing-projects-kenya.webp',
    category: 'Investment',
    date: '2026-01-05',
    readTime: '13 min read',
  },

  {
    id: 'impact-infrastructure-kenya-property-values-2025',
    title: 'The Ripple Effect: How Major Infrastructure Projects are Shaping Kenyan Property Values in 2025',
    excerpt: 'systems development is a primary catalyst for real estate growth and value appreciation in Kenya. In 2025, the impact of several mega-projects completed or...',
    author: getAuthor('development'),
    category: "Market Trends",
    date: "2025-06-20",
    readTime: "11 min read",
    image: "/impact-infrastructure-kenya-property-values-2025.webp",
  },

  {
    id: 'agricultural-land-investment-kenya-2025',
    title: 'Investing in Green Gold: Agricultural Land Investment Trends in Kenya 2025',
    excerpt: 'Agriculture remains a cornerstone of Kenya\'s economy, and investing in agricultural land offers diverse opportunities beyond traditional real estate. In 2025...',
    author: getAuthor('development'),
    category: "Land Investment",
    date: "2025-09-20",
    readTime: "10 min read",
    image: "/agricultural-land-investment-kenya-2025.webp",
  },

  {
    id: 'short-term-rentals-airbnb-kenya-2025-guide',
    title: 'The Short-Term Rental Market (Airbnb) in Kenya 2025: A Host\'s Guide to Success',
    excerpt: 'The short-term rental (STR) market, popularized by platforms like Airbnb, Booking.com, and Vrbo, has become a significant segment of Kenya\'s hospitality and...',
    author: getAuthor('development'),
    category: "Niche Investments",
    date: "2025-07-26",
    readTime: "10 min read",
    image: "/short-term-rentals-airbnb-kenya-2025-guide.webp",
  },

  {
    id: 'renovating-older-properties-kenya-profit-2025',
    title: 'Flipping Houses in Kenya 2025: A Guide to Renovating Older Properties for Profit',
    excerpt: 'Renovating older properties, often called "house flipping" when done for quick resale, can be a profitable real estate venture in Kenya if approached...',
    author: getAuthor('development'),
    category: "Development",
    date: "2025-08-25",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2UlMjByZW5vdmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },

  {
    id: 'climate-change-coastal-properties-kenya-2025',
    title: 'Climate Change & Coastal Properties in Kenya 2025: Risks and Resilience Strategies',
    excerpt: 'Kenya\'s coastline, a prime area for tourism and residential property, faces increasing threats from climate change. By 2025, the impacts of sea-level rise,...',
    author: getAuthor('development'),
    category: "Sustainable Development",
    date: "2025-08-15",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29hc3RhbCUyMGVyb3Npb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },

  {
    id: 'c',
    title: 'The Rising Influence of Women in Kenyan Real Estate 2025: Trends and Opportunities',
    excerpt: 'The Kenyan real estate sector, historically male-dominated, is witnessing a significant and growing influence from women in 2025. From individual homebuyers...',
    author: getAuthor('development'),
    category: "Market Trends",
    date: "2025-09-01",
    readTime: "9 min read",
    image: "/women-in-kenyan-real-estate-2025.webp",
  },

  {
    id: 'sustainable-building-materials-kenya-2025',
    title: 'Eco-Construction 2025: Top Sustainable Building Materials Gaining Traction in Kenya',
    excerpt: 'As Kenya embraces green building principles, the choice of construction materials is becoming increasingly critical. Sustainable building materials offer...',
    author: getAuthor('development'),
    category: "Sustainable Development",
    date: "2025-07-05",
    readTime: "9 min read",
    image: "/sustainable-building-materials-kenya-2025.webp",
  },

  {
    id: 'housing-levy-kenya-investment',
    title: 'Is the Housing Levy a Good Investment for Kenyans? Expert Analysis',
    excerpt: 'In 2023, the Kenyan government introduced the Housing Levy as part of its push to bridge the country\'s housing deficit. While the initiative promises to make...',
    author: getAuthor('development'),
    image: '/research-images/housing-levy-kenya-investment.webp',
    category: 'Investment',
    date: '2025-11-28',
    readTime: '7 min read',
  },

  {
    id: 'cheap-houses-for-sale-in-nairobi',
    title: 'Unlocking Value: Finding Cheap Houses for Sale in Nairobi and Beyond',
    excerpt: 'The demand for affordable housing in Nairobi and its surrounding areas has led to a surge in interest in cheap houses for sale. Whether you\'re a first-time...',
    author: getAuthor('development'),
    image: 'https://i.ibb.co/Xfpdjvd0/cheap-houses-for-sale-in-nairobi.webp',
    category: 'Affordable Housing',
    date: '2026-04-23',
    readTime: '12 min read',
  },

  {
    id: 'maximizing-rental-yields-nairobi-2025',
    title: 'Maximizing Rental Yields in Nairobi 2025: A Landlord\'s Strategic Guide',
    excerpt: 'Nairobi\'s rental market in 2025 is dynamic and competitive. For landlords, achieving optimal rental yields requires more than just owning property; it demand...',
    author: getAuthor('development'),
    category: "Property Management",
    date: "2025-06-15",
    readTime: "9 min read",
    image: "https://yourhost.io/wp-content/uploads/2024/12/GTC-Project-Aerial-Shot-10-DJI_0578-1-Copy-4-1-1024x682.jpg",
  },

  {
    id: 'the-rise-of-satellite-towns-in-kenya',
    title: 'The Rise of Satellite Towns: Affordable Land & Housing Hotspots in Kenya',
    excerpt: 'Kenya’s satellite towns are experiencing rapid growth, transforming from rural outposts into bustling urban centers. These towns, including Ruiru, Kitengela,...',
    author: getAuthor('development'),
    image: 'https://i.ibb.co/4g25Xrgj/the-rise-of-satellite-towns-in-kenya.webp',
    category: 'Location Insights',
    date: '2026-04-13',
    readTime: '13 min read',
  },

  {
    id: 'warehousing-logistics-real-estate-kenya-2025',
    title: 'The Boom in Warehousing & Logistics Real Estate in Kenya 2025',
    excerpt: 'Kenya\'s strategic position as a regional trade hub, coupled with the rise of e-commerce and manufacturing, is fueling unprecedented demand for modern...',
    author: getAuthor('development'),
    category: "Commercial Real Estate",
    date: "2025-08-05",
    readTime: "9 min read",
    image: "/warehousing-logistics-real-estate-kenya-2025.webp",
  },

  {
    id: 'retirement-homes-kenya-market-2025',
    title: 'Retirement Communities in Kenya 2025: An Emerging Real Estate Niche',
    excerpt: 'As Kenya\'s population ages and lifestyles evolve, the concept of dedicated retirement homes and senior living communities is gradually gaining traction. Whil...',
    author: getAuthor('development'),
    category: "Niche Investments",
    date: "2025-08-10",
    readTime: "8 min read",
    image: "/retirement-homes-kenya-market-2025.webp",
  },

  {
    id: 'investing-in-kenyas-affordable-housing-projects',
    title: 'Investing in Kenya\'s Affordable Housing Projects: What You Need to Know',
    excerpt: 'Kenya’s affordable housing sector presents a significant opportunity for both local and foreign investors. As the government pushes forward with the Affordab...',
    author: getAuthor('investment'),
    image: 'https://coastproperties.co.ke/wp-content/uploads/2023/07/Facebook-card-010.webp',
    category: 'Investment',
    date: '2026-05-01',
    readTime: '14 min read',
  },

  {
    id: 'rent-to-own-schemes-in-kenya',
    title: 'Rent-to-Own Schemes in Kenya: A Path to Homeownership for Many',
    excerpt: 'Rent-to-own housing schemes are becoming a popular option for many Kenyans seeking an affordable and manageable route to homeownership. These schemes offer...',
    author: getAuthor('affordableHousing'),
    image: '/research-images/rent-to-own-kenya-2026.webp',
    category: 'Affordable Housing',
    date: '2026-03-13',
    readTime: '11 min read',
  },

  {
      id: 'kenyas-affordable-housing-progress-challenges-and-your-role-as-an-investor',
      title: 'Kenya\'s Affordable Housing: Progress, Challenges, and Your Role as an Investor',
      excerpt: 'Kenya\'s affordable housing initiative is a cornerstone of the country\'s development agenda, aiming to provide quality homes for all income levels. Spearheade...',
      author: getAuthor('affordableHousing'),
      image: 'https://www.kenyaforum.net/wp-content/uploads/2024/12/images-8.jpeg',
      category: 'Affordable Housing',
      date: '2025-05-28',
      readTime: '6 min read',
    },
    {
    id: 'commercial-property-solicitor-fees-costs-2026',
    title: 'How much should you pay commercial property broker or solicitor fees in 2026?',
    excerpt: 'Comprehensive analysis of commercial property legal fee structures, examining hourly versus fixed-fee arrangements, value-based billing methodologies, disbursement allocations, and strategic procurement protocols for institutional and private investors.',
    author: getAuthor('investment'),
    image: '/research-images/commercial-property-solicitor-fees-costs-2026.webp',
    category: 'Process & Legal',
    date: '2026-04-08',
    readTime: '46 min read',
    featured: false
  },
  {
      id: 'purpose-built-student-accommodation-pbsa-demographics-2026',  
    title: 'What is the best student Housing PBSA Investment in 2026 in UK Student Property',
      excerpt: 'Purpose-built student accommodation yields have compressed from 6.5% in 2018 to 4.8–5.5% today — yet structural supply deficits in 28 of the UK\'s 30 major university cities mean demand fundamentals remain robust.',
      author: getAuthor('investment'),
      date: '2026-03-28',
      readTime: '15 min read',
      category: 'Asset Class Intelligence',
      image: '/research-images/purpose-built-student-accommodation-pbsa-demographics-2026.webp',
      featured: false

  },

    {
    id: 'global-macro-allocation-commercial-real-estate-dedollarization-2026',
    title: 'Where are Institutions (Cardone Capital) deploying their capital and funds for investments & income in 2026?',
    excerpt: 'Global de-dollarization is not an academic debate. It is a capital flow reality reshaping commercial real estate pricing in Dubai, Singapore, and selected African markets.',
    author: getAuthor('investment'),
    image: '/research-images/global-macro-allocation-commercial-real-estate-dedollarization-2026.webp',
    category: 'Investment & Wealth',
    date: '2026-04-10',
    readTime: '17 min read',
    featured: false
  },
  {
    id: 'medical-centre-property-investment-healthcare-real-estate-uk-2026',
    title: 'Medical Centre Property Investment: Why Healthcare Real Estate Outperforms in the UK',
    excerpt: 'Comprehensive analysis of UK medical centre investment, examining NHS lease security, demographic demand drivers, and the defensive characteristics that enable healthcare real estate to outperform through economic cycles.',
    author: getAuthor('investment'),
    image: '/research-images/medical-centre-property-investment-healthcare-real-estate-uk-2026.webp',
    category: 'Asset Class Intelligence',
    date: '2026-04-14',
    readTime: '13 min read',
    featured: false
  },
  {
    id: 'industrial-property-investment-uk-growth-corridors-2026',
    title: 'Where to Buy UK Industrial Property in 2026?',
    excerpt: 'Infrastructure-led analysis of the UK\'s premier logistics corridors, examining motorway networks, port connectivity, and land constraints to identify optimal industrial deployment locations.',
    author: getAuthor('investment'),
    image:'/research-images/industrial-property-investment-uk-growth-corridors-2026.webp',
    category: 'Asset Class Intelligence',
    date: '2026-04-18',
    readTime: '14 min read',
    featured: false
  },
  {
    id: 'lease-structures-fri-iri-full-repairing-institutional-guide-2026',
    title: 'Where Should You Buy or Lease Office Space in the UK in 2026?',
    excerpt: 'An institutional-grade analysis of commercial lease structures, examining Full Repairing and Insuring (FRI) covenants, Internal Repairing and Insuring (IRI) mechanisms, and hybrid allocations from the perspective of family offices, sovereign wealth vehicles, and corporate real estate directors navigating £100M+ portfolios.',
    author: getAuthor('investment'),
    image: '/research-images/lease-structures-fri-iri-full-repairing-institutional-guide-2026.webp',
    category: 'Process & Legal',
    date: '2026-04-22',
    readTime: '12 min read',
    featured: false
  },
    {
    id: 'commercial-property-vs-residential-returns-2026',
    title: 'Should Investors Choose Commercial or Residential Property in 2026?',
    excerpt: 'A data-driven comparative analysis examining gross yields, net returns, tax efficiency, and regulatory burdens to determine optimal asset allocation for sophisticated investors.',
    author: getAuthor('investment'),
    image: '/research-images/commercial-property-vs-residential-returns-2026.webp',
    category: 'Investment & Wealth',
    date: '2026-03-22',
    readTime: '24 min read',
    featured: false
    },
  {
    id: 'understanding-commercial-property-office-kpis-explained',
    title: 'Which Commercial Property KPI Matters Most for Investors?',
    excerpt: 'Three properties. Three identical headline rents. Three materially different yields — and three different investment implications. Understanding the distinction between net initial yield, equivalent yield, and reversionary yield is not jargon. It is the foundation of every defensible commercial property bid.',
    author: getAuthor('investment'),
    image: '/research-images/commercial-property-office-kpis-explained.webp',
    category: 'Investment & Wealth',
    date: '2026-03-22',
    readTime: '26 min read',
    featured: false
  },
  {
    id: 'commercial-property-due-diligence-checklist-uk',
    title: 'Commercial Property Due Diligence in the UK using The Institutional Framework for Minimising Acquisition Risk',
    excerpt: 'An institutional framework for risk mitigation covering legal title verification, lease analysis, building condition assessment, and regulatory compliance verification.',
    author: getAuthor('investment'),
    image: '/research-images/commercial-property-due-diligence-checklist-uk.webp',
    category: 'Process & Legal',
    date: '2026-04-30',
    readTime: '10 min read',
    featured: false
  },
  {
    id: 'london-commercial-real-estate-market-report-q2-2026',
    title: 'London Commercial Real Estate Q2 2026 Market Intelligence Report for Institutional Investors',
    excerpt: 'Comprehensive analysis of Greater London\'s £4.2 billion Q2 transaction volume, sector yield stabilisation, and institutional capital flows as markets recover from monetary tightening.',
    author: getAuthor('investment'),
    image: '/research-images/london-commercial-real-estate-market-report-q2-2026.webp',
    category: 'Market Intelligence',
    date: '2026-05-02',
    readTime: '10 min read',
    featured: false
  },

      {
      id: 'retail-property-recovery-contrarian-analysis-2026',
      title: 'Is the High Street Really Dead, or Is Retail Property Recovering?',
      excerpt: 'Contrarian analysis of UK retail property revealing selective recovery dynamics, experiential retail demand, and repurposing economics that challenge sector obsolescence narratives.',
      author: getAuthor('investment'),
      image: '/research-images/retail-property-recovery-contrarian-analysis-2026.webp',
      category: 'Market Intelligence',
      date: '2026-05-08',
      readTime: '13 min read',
      featured: false
    },

    {
      id: 'uk-bond-market-labour-rhetoric-housing-2026',
      title: 'UK Bond Markets Are Repricing Political Risk',
      excerpt: 'Rising gilt yields and renewed concerns around fiscal discipline are reshaping mortgage pricing, residential demand, and investor sentiment across the British housing market.',
      author: getAuthor('market'),
      image: '/research-images/uk-bond-market-housing-2026.webp',
      category: 'Market Intelligence',
      date: '2026-05-18',
      readTime: '9 min read',
      featured: true
    },
    {
      id: 'uk-first-time-buyer-deposit-scheme-2026',
      title: 'Low-Deposit Lending Is Returning to the UK Housing Market',
      excerpt: 'Lloyds Banking Group’s £5,000 deposit mortgage signals the cautious return of high loan-to-value lending as affordability pressures reshape the UK housing market.',
      author: getAuthor('market'),
      image: '/research-images/uk-first-time-buyers-2026.webp',
      category: 'Residential Intelligence',
      date: '2026-05-18',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 'us-investors-rotating-into-uk-property-2026',
      title: 'Why American Capital Is Rotating Into UK Real Estate',
      excerpt: 'US investors are increasingly allocating capital into UK residential and commercial property as taxes, insurance costs, and market fragmentation reshape global investment strategy.',
      author: getAuthor('market'),
      image: '/research-images/us-investors-uk-property-2026.webp',
      category: 'Global Capital Markets',
      date: '2026-05-18',
      readTime: '11 min read',
      featured: true
    },
    {
      id: 'global-capital-allocation-dubai-2026',
      title: 'Global Capital Allocation: Why Dubai’s Real Estate Market Remains Highly Resilient',
      excerpt: 'Dubai’s equity-driven property market continues demonstrating resilience despite regional uncertainty and remains central to GCC investment allocation strategies.',
      author: getAuthor('investment'),
      image: '/research-images/dubai-global-allocation-2026.webp',
      category: 'Market Intelligence',
      date: '2026-04-28',
      readTime: '8 min read',
      featured: false
    },
    {
      id: 'kenya-psv-strike-commercial-real-estate-2026',
      title: 'Kenya’s PSV Fuel Strike and the Commercial Real Estate Fragility Question',
      excerpt: 'Kenya’s two-day PSV strike exposed a structural vulnerability within Nairobi’s commercial real estate ecosystem: transport-linked operational fragility. Rising diesel costs are increasingly shaping logistics pricing, retail absorption, industrial occupancy costs, and institutional capital allocation decisions across Kenya’s urban corridors.',
      author: getAuthor('investment'),
      image: '/research-images/kenya-psv-strike-commercial-real-estate-2026.webp',
      category: 'Breaking News',
      date: '2026-05-19',
      readTime: '9 min read',
      featured: true
    },
    {
      id: 'kenya-fuel-crisis-transport-strike-commercial-real-estate-2026',
      title: 'Kenya Fuel Crisis Latest: How Record Pump Prices and PSV StriKsh Are Forcing a Commercial Real Estate Repricing',
      excerpt: 'Kenya’s nationwide transport paralysis following record fuel price increases has exposed deeper structural risks within Nairobi’s commercial real estate ecosystem. Rising diesel costs are beginning to influence logistics pricing, tenant affordability, industrial demand patterns, and institutional capital allocation across East Africa.',
      author: getAuthor('investment'),
      image: '/research-images/kenya-fuel-crisis-commercial-real-estate-2026.webp',
      category: 'Breaking News',
      date: '2026-05-19',
      readTime: '10 min read',
      featured: true
    },
    {

      id: 'kenya-transport-strike-inflation-commercial-property-2026',
      title: 'Kenya Transport Strike & Inflation Shock: Why Commercial Property is Entering a Major Repricing Cycle',
      excerpt: 'Kenya’s nationwide transport paralysis following record fuel price increases has exposed structural vulnerabilities across Nairobi’s commercial real estate ecosystem. Rising diesel costs, inflationary pressure, and supply-chain disruption are beginning to reshape tenant affordability, industrial logistics demand, and institutional capital allocation across East Africa.',
      author: getAuthor('investment'),
      image: '/research-images/kenya-transport-strike-inflation-commercial-property-2026.webp',
      category: 'Breaking News',
      date: '2026-05-19',
      readTime: '9 min read',
      featured: false
    },
    {

      id: 'legacy-wealth-nairobi-commercial-property-2026',
      title: 'Legacy Wealth and Nairobi’s Institutional Property Transition: Why Old Money Capital Is Quietly Repositioning',
      excerpt: 'As Nairobi enters a new commercial real estate cycle shaped by inflation, infrastructure pressure, and generational capital transfer, East Africa’s wealthiest families are increasingly prioritising institutional-grade property, capital preservation, and legacy-driven portfolio structures over speculative growth narratives.',
      image: '/research-images/legacy-wealth-2026.webp',
      author: getAuthor('investment'),
      date: '2026-05-19',
      readTime: '10 min read',
      category: 'Private Wealth & Capital Strategy',
      featured: false
    },
    {
      id: 'inflation-property-industry-reaction-uk-2026',
      title: 'UK Inflation Surprise Reshapes Property and Mortgage Pricing Expectations',
      excerpt: 'The UK inflation rate unexpectedly fell to 2.8% in May 2026, easing pressure across mortgage markets and triggering renewed debate around interest rates, housing affordability, and institutional property allocation strategies.',
      image: '/research-images/uk-inflation-property-reaction-2026.webp',
      author: getAuthor('investment'),
      date: '2026-05-20',
      readTime: '6 min read',
      category: 'Global Property & Capital Markets',
      featured: false
    },


];

// ─────────────────────────────────────────────────────────────
// UTILITIES
// ─────────────────────────────────────────────────────────────
function formatDate(raw: string): string {
  const d = new Date(raw);
  if (isNaN(d.getTime())) return raw;
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// ─────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────
export default function Research() {
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState('All');
  const [showAllCats, setShowAllCats] = useState(false);

  const catMap = useMemo(() => {
    const m = new Map<string, number>();
    research.forEach(p => m.set(p.category, (m.get(p.category) || 0) + 1));
    return m;
  }, []);

  const sortedCats = useMemo(
    () =>
      Array.from(catMap.entries())
        .sort((a, b) => b[1] - a[1])
        .map(([name, count]) => ({ name, count })),
    [catMap]
  );

  const CATS_VISIBLE = 12;
  const visibleCats = showAllCats ? sortedCats : sortedCats.slice(0, CATS_VISIBLE);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return research.filter(p => {
      const catOk = activeCat === 'All' || p.category === activeCat;
      const searchOk =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q);
      return catOk && searchOk;
    });
  }, [search, activeCat]);

   return (
    <>
      <style>{`
        .bp-page {
          font-family: Georgia, "Times New Roman", serif;
          min-height: 100vh;
          background: #FAFAF8;
        }

        /* HEADER */

        .bp-header {
          border-bottom: 1px solid #E2DDD6;
          background: #FAFAF8;
        }

        .bp-header-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 52px 24px 42px;
        }

        .bp-kicker {
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #9B8F7E;
          margin-bottom: 16px;
        }

        .bp-headline {
          font-size: clamp(34px, 5vw, 56px);
          line-height: 1.08;
          font-weight: 700;
          color: #1C1C1C;
          margin-bottom: 16px;
        }

        .bp-subhead {
          max-width: 640px;
          font-size: 16px;
          line-height: 1.75;
          color: #6B6259;
        }

        /* BODY */

        .bp-body {
          max-width: 1180px;
          margin: 0 auto;
          padding: 48px 24px 100px;
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 60px;
          align-items: start;
        }

        /* SIDEBAR */

        .bp-sidebar {
          position: sticky;
          top: 84px;
        }

        .bp-search-wrap {
          position: relative;
          margin-bottom: 28px;
        }

        .bp-search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          width: 14px;
          height: 14px;
          color: #9B8F7E;
        }

        .bp-search {
          width: 100%;
          padding: 12px 14px 12px 36px;
          border: 1px solid #E2DDD6;
          background: #FAFAF8;
          font-size: 13px;
          color: #1C1C1C;
          outline: none;
        }

        .bp-search:focus {
          border-color: #7B6C55;
        }

        .bp-cat-label {
          font-size: 10px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #9B8F7E;
          margin-bottom: 8px;
        }

        .bp-all-btn,
        .bp-cat-btn {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: none;
          border: none;
          padding: 10px 0;
          cursor: pointer;
          color: #3A3530;
          font-size: 13px;
          text-align: left;
        }

        .bp-active {
          font-weight: 700;
          color: #1C1C1C;
        }

        .bp-cat-count {
          color: #9B8F7E;
          font-size: 11px;
        }

        .bp-show-more {
          margin-top: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          color: #7B6C55;
          font-size: 12px;
        }

        /* MAIN */

        .bp-results-bar {
          border-bottom: 2px solid #1C1C1C;
          padding-bottom: 18px;
          margin-bottom: 12px;
        }

        .bp-results-label {
          font-size: 10px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #9B8F7E;
          display: block;
          margin-bottom: 4px;
        }

        .bp-results-count {
          font-size: 24px;
          font-weight: 700;
          color: #1C1C1C;
        }

        /* CARD */

        .bp-card {
          padding: 34px 0;
          border-bottom: 1px solid #E2DDD6;
        }

        .bp-card-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 28px;
          align-items: start;
        }

        .bp-card-image-link {
          position: relative;
          overflow: hidden;
          background: #F3F1EC;
          aspect-ratio: 16 / 10;
          display: block;
        }

        .bp-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .bp-card:hover .bp-card-image {
          transform: scale(1.03);
        }

        .bp-card-content {
          min-width: 0;
        }

        .bp-featured-strip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 12px;
        }

        .bp-featured-dot {
          width: 6px;
          height: 6px;
          background: #7B6C55;
          border-radius: 50%;
        }

        .bp-featured-text {
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #7B6C55;
        }

        .bp-card-cat-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .bp-card-cat {
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #9B8F7E;
        }

        .bp-card-rule {
          flex: 1;
          height: 1px;
          background: #E2DDD6;
        }

        .bp-card-title {
          display: block;
          font-size: clamp(20px, 2vw, 28px);
          line-height: 1.2;
          font-weight: 700;
          color: #1C1C1C;
          text-decoration: none;
          margin-bottom: 14px;
          transition: color 0.2s;
        }

        .bp-card-title:hover {
          color: #7B6C55;
        }

        .bp-card-excerpt {
          font-size: 15px;
          line-height: 1.8;
          color: #4A4540;
          margin-bottom: 18px;
        }

        .bp-card-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 18px;
        }

        .bp-card-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #9B8F7E;
        }

        .bp-card-meta-item svg {
          width: 12px;
          height: 12px;
        }

        .bp-read-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #7B6C55;
          border-bottom: 1px solid #C8BFB4;
          padding-bottom: 2px;
        }

        .bp-read-link:hover {
          color: #1C1C1C;
          border-color: #1C1C1C;
        }

        /* MOBILE */

        @media (max-width: 900px) {
          .bp-body {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .bp-sidebar {
            position: static;
            margin-bottom: 32px;
            padding-bottom: 24px;
            border-bottom: 1px solid #E2DDD6;
          }

          .bp-card-grid {
            grid-template-columns: 1fr;
          }

          .bp-card-image-link {
            aspect-ratio: 16 / 9;
          }
        }

        @media (max-width: 640px) {
          .bp-header-inner {
            padding: 38px 20px 30px;
          }

          .bp-body {
            padding: 28px 20px 80px;
          }

          .bp-card-title {
            font-size: 22px;
          }

          .bp-card-excerpt {
            font-size: 14px;
          }
        }
      `}</style>

      <div
        className="bp-page"
        style={{ paddingTop: '64px' }}
      >
        {/* HEADER */}

        <div className="bp-header">
          <div className="bp-header-inner">
            <p className="bp-kicker">Market Intelligence</p>

            <h1 className="bp-headline">
              Research & Insights
            </h1>

            <p className="bp-subhead">
              Institutional-grade analysis, investment
              intelligence, and strategic market insight for
              Kenya&apos;s evolving commercial real estate sector.
            </p>
          </div>
        </div>

        {/* BODY */}

        <div className="bp-body">
          {/* SIDEBAR */}

          <aside className="bp-sidebar">
            <div className="bp-search-wrap">
              <Search className="bp-search-icon" />

              <input
                className="bp-search"
                type="text"
                placeholder="Search research..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <p className="bp-cat-label">Categories</p>

            <button
              className={`bp-all-btn${
                activeCat === 'All' ? ' bp-active' : ''
              }`}
              onClick={() => setActiveCat('All')}
            >
              <span>All Research</span>

              <span className="bp-cat-count">
                {research.length}
              </span>
            </button>

            {visibleCats.map(({ name, count }) => (
              <button
                key={name}
                className={`bp-cat-btn${
                  activeCat === name ? ' bp-active' : ''
                }`}
                onClick={() => setActiveCat(name)}
              >
                <span>{name}</span>

                <span className="bp-cat-count">
                  {count}
                </span>
              </button>
            ))}

            {sortedCats.length > CATS_VISIBLE && (
              <button
                className="bp-show-more"
                onClick={() => setShowAllCats((v) => !v)}
              >
                {showAllCats ? (
                  <>
                    <ChevronUp />
                    Show less
                  </>
                ) : (
                  <>
                    <ChevronDown />
                    {sortedCats.length - CATS_VISIBLE} more
                  </>
                )}
              </button>
            )}
          </aside>

          {/* MAIN */}

          <main className="bp-main">
            <div className="bp-results-bar">
              <span className="bp-results-label">
                {activeCat === 'All'
                  ? 'All Research'
                  : activeCat}
              </span>

              <span className="bp-results-count">
                {filtered.length}{' '}
                {filtered.length === 1
                  ? 'article'
                  : 'articles'}
              </span>
            </div>

            {filtered.map((post) => (
              <article
                key={post.id}
                className="bp-card"
              >
                <div className="bp-card-grid">
                  {/* IMAGE */}

                  <Link
                    href={`/research/${post.id}`}
                    className="bp-card-image-link"
                  >
                    <Image
                      src={
                        post.image ||
                        '/default-research-image.webp'
                      }
                      alt={post.title}
                      width={1200}
                      height={700}
                      className="bp-card-image"
                    />
                  </Link>

                  {/* CONTENT */}

                  <div className="bp-card-content">
                    {post.featured && (
                      <div className="bp-featured-strip">
                        <span className="bp-featured-dot" />
                        <span className="bp-featured-text">
                          Featured
                        </span>
                      </div>
                    )}

                    <div className="bp-card-cat-row">
                      <span className="bp-card-cat">
                        {post.category}
                      </span>

                      <span className="bp-card-rule" />
                    </div>

                    <Link
                      href={`/research/${post.id}`}
                      className="bp-card-title"
                    >
                      {post.title}
                    </Link>

                    <p className="bp-card-excerpt">
                      {post.excerpt}
                    </p>

                    <div className="bp-card-meta">
                      <span className="bp-card-meta-item">
                        <Calendar />
                        {formatDate(post.date)}
                      </span>

                      <span className="bp-card-meta-item">
                        <Clock />
                        {post.readTime}
                      </span>

                      <span className="bp-card-meta-item">
                        <User />
                        {post.author}
                      </span>
                    </div>

                    <Link
                      href={`/research/${post.id}`}
                      className="bp-read-link"
                    >
                      Read article <ArrowRight />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </main>
        </div>
      </div>
    </>
  );
}