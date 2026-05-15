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
    id: 'absa-towers-nairobi-cbd-exclusive-investment',
    title: 'Your Exclusive Invitation: Absa Towers — Nairobi CBD\'s Best Kept Institutional Secret',
    excerpt: 'How Kenya\'s UHNWI are deploying capital into income-producing commercial assets on Loita Street while sitting on their 10-acre Runda estate or Muthaiga golf course.',
    author: getAuthor('investment'),
    category: 'Investment',
    image: '/p3/absa.jpg',
    date: '2026-05-13',
    readTime: '15 min read',
    featured: true,
  },
    {
      id: 'murivest-institutional-wealth-preservation-guide',
      title: 'The Dangerous Wealth Preservation Myths Costing Kenyan Investors Millions in Commercial Real Estate',
      excerpt: 'Across global markets, investors are being misled by outdated financial assumptions, passive investment structures, and institutional inefficiencies.',
      image: 'https://i.ibb.co/pjD16k20/The-Dangerous-wealth-preservation-myths.png',
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
    image: 'https://i.ibb.co/3yxJYKS9/3-most-dangerous-retirment-lies.png',
    date: '2026-05-15',
    readTime: '10 min read',
    featured: true,
    },
    {
    id: 'diani-and-watamu-land-have-appreciated-by-400%-since-2020',
    title: 'Diani and Watamu Land have appreciated by 400% since 2020',
    excerpt: 'Diani and Watamu Land have appreciated by 400% since 2020 Kenya\'s 536-kilometer coastline. Demand for Land in Watamu and Diani is increasing. There is also an increase in land prices in Mombasa hotspots.',
    author: getAuthor('investment'),
    image: 'https://i.ibb.co/cc2ttgK2/diani-watamu-land-2026.jpg',
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
    image: "https://ext.same-assets.com/3537751143/2626151244.jpeg",
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
    image: "https://ext.same-assets.com/3537751143/3343173247.jpeg",
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
    image: "https://ext.same-assets.com/3537751143/2651570011.jpeg",
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
    image: "https://ext.same-assets.com/3537751143/690996310.jpeg",
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
    image: "https://ext.same-assets.com/3537751143/2320505287.jpeg",
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
    image: "https://www.constructionkenya.com/wp-content/uploads/2024/06/ardhisasa.jpeg",
    featured: true,
  },

  {
    id: 'affordable-housing-hotspots-beyond-nairobi-2025',
    title: 'Affordable Housing Hotspots Beyond Nairobi\'s Traditional Borders in 2025',
    excerpt: 'The dream of homeownership in Kenya often seems synonymous with Nairobi., as the capital\'s property prices continue to soar and congestion mounts, savvy...',
    author: getAuthor('affordableHousing'),
    image: "https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/c212548f-9b66-4bdb-8def-845271f90e09/39f1e18f-2c92-4f52-99f5-de6eae1c5145.jpg",
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
    image: "https://www.denvers.co.ke/wp-content/uploads/2024/08/research-POSTS-28th-03-scaled.jpg",
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
    image: "https://ext.same-assets.com/3537751143/542694753.jpeg",
  },

  {
    id: 'sustainable-designs-kenyan-housing',
    title: 'The Future of Affordable Living: Sustainable Designs in Kenyan Housing',
    excerpt: 'As Kenya grapples with a housing deficit estimated at over 2 million units, affordable housing has become a key focus for government and private developers.,...',
    author: getAuthor('affordableHousing'),
    category: "Construction",
    date: "2025-04-25",
    readTime: "10 min read",
    image: "https://static.ntvkenya.co.ke/uploads/2023/12/WhatsApp-Image-2022-12-07-at-11.48.33-1-1-e1701848346908-1320x762.jpg",
  },

  {
    id: 'nairobi-real-estate-trends-2025-investment-forecast',
    title: 'Nairobi Real Estate Trends 2025: Key Insights and Investment Forecast',
    excerpt: 'Nairobi’s real estate landscape is undergoing a significant transformation in 2025. As Kenya’s capital city and economic nerve center, Nairobi continues to...',
    author: getAuthor('development'),
    image: "https://media.licdn.com/dms/image/v2/D4D12AQFR4UOOR9bbBw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1738995219856?e=2147483647&v=beta&t=efKk6zmc_Ft2_g12Nf-98-xfAt6_sYAzTPJsNw1zpIs",
    category: 'Nairobi Office',
    date: '2025-08-29',
    readTime: '10 min read',
  },

  {
    id: 'why-land-investment-in-kenya-remains-lucrative-in-2025',
    title: 'Why Land Investment in Kenya Remains Lucrative in 2025',
    excerpt: 'Land has long been considered the foundation of wealth creation in Kenya, and in 2025, this investment vehicle continues to shine. From seasoned real estate...',
    author: getAuthor('investment'),
    image: "https://www.usernameproperties.com/research/wp-content/uploads/2025/03/Why-Investing-in-Land-in-Kenya-is-Better-Than-Other-Investments-in-2025-.jpg",
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
    image: "https://ext.same-assets.com/3537751143/3375681213.jpeg",
  },

  {
    id: 'buying-land-vs-buying-house-kenya',
    title: 'Buying Land vs Buying a House in Kenya: What Should You Choose?',
    excerpt: 'One of the biggest financial decisions any Kenyan can make is choosing between buying land and building their own home or purchasing a completed house. Each...',
    author: getAuthor('investment'),
    category: "Home Ownership",
  date: "2025-05-28",
  readTime: "10 min read",
  image: "https://shiftersmovers.com/wp-content/uploads/2021/10/Building-a-house-vs-buying-cost_032601b80_4999.jpg",
  },

  {
    id: 'kenya-land-vs-apartment-investment',
    title: 'Land vs Apartments in Kenya: Which Is the Better Investment?',
    excerpt: 'If you\'re planning to invest in Kenyan real estate, two of the most common options are buying land or investing in apartments. Each has its own advantages an...',
    author: getAuthor('investment'),
      image: "/research-images/kenya-land-vs-apartment-investment.png",
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
    image: "https://i0.wp.com/www.bidlegacy.com/wp-content/uploads/2024/05/Plymouth-street.jpg?fit=806%2C841&ssl=1",
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
    image: "https://usernameproperties.com/research/wp-content/uploads/2025/04/Property-Investment-Trends-Emerging-Opportunities-in-Kenyas-Market.jpg",
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
    image: "https://images.unsplash.com/photo-1587024615493-a20788b7667c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbCUyMGVzdGF0ZSUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },

  {
    id: 'government-housing-projects-kenya',
    title: 'Government Initiatives Driving Real Estate Growth in Kenya: A Deep Dive',
    excerpt: 'Kenya’s real estate sector has seen a significant transformation in recent years, with government-backed initiatives acting as a catalyst for growth. From...',
    author: getAuthor('investment'),
    image: 'https://proxima.co.ke/assets/img/1740380938-new-research-feb-23.jpg',
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
    image: "https://images.unsplash.com/photo-1618060932034-407a9160a3f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5mcmFzdHJ1Y3R1cmUlMjBrZW55YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },

  {
    id: 'agricultural-land-investment-kenya-2025',
    title: 'Investing in Green Gold: Agricultural Land Investment Trends in Kenya 2025',
    excerpt: 'Agriculture remains a cornerstone of Kenya\'s economy, and investing in agricultural land offers diverse opportunities beyond traditional real estate. In 2025...',
    author: getAuthor('development'),
    category: "Land Investment",
    date: "2025-09-20",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1557095603-1510d20a5231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWdyaWN1bHR1cmUlMjBrZW55YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },

  {
    id: 'short-term-rentals-airbnb-kenya-2025-guide',
    title: 'The Short-Term Rental Market (Airbnb) in Kenya 2025: A Host\'s Guide to Success',
    excerpt: 'The short-term rental (STR) market, popularized by platforms like Airbnb, Booking.com, and Vrbo, has become a significant segment of Kenya\'s hospitality and...',
    author: getAuthor('development'),
    category: "Niche Investments",
    date: "2025-07-26",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1611048264200-747f00d9398a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWlyYm5iJTIwaG9zdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
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
    id: 'women-in-kenyan-real-estate-2025',
    title: 'The Rising Influence of Women in Kenyan Real Estate 2025: Trends and Opportunities',
    excerpt: 'The Kenyan real estate sector, historically male-dominated, is witnessing a significant and growing influence from women in 2025. From individual homebuyers...',
    author: getAuthor('development'),
    category: "Market Trends",
    date: "2025-09-01",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1551829143-a819d5eDEC03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWFuJTIwYXJjaGl0ZWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },

  {
    id: 'sustainable-building-materials-kenya-2025',
    title: 'Eco-Construction 2025: Top Sustainable Building Materials Gaining Traction in Kenya',
    excerpt: 'As Kenya embraces green building principles, the choice of construction materials is becoming increasingly critical. Sustainable building materials offer...',
    author: getAuthor('development'),
    category: "Sustainable Development",
    date: "2025-07-05",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1558819375-dd47a917888e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VzdGFpbmFibGUlMjBidWlsZGluZyUyMG1hdGVyaWFsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },

  {
    id: 'housing-levy-kenya-investment',
    title: 'Is the Housing Levy a Good Investment for Kenyans? Expert Analysis',
    excerpt: 'In 2023, the Kenyan government introduced the Housing Levy as part of its push to bridge the country\'s housing deficit. While the initiative promises to make...',
    author: getAuthor('development'),
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQHcX__hGFNZiA/feedshare-shrink_800/B4DZUc2Mg3HYAg-/0/1739945727667?e=2147483647&v=beta&t=wVvY7FTaFsIN0ZtOVHgprKjOW4T1m5_tfBI_qrhNVxE',
    category: 'Investment',
    date: '2025-11-28',
    readTime: '7 min read',
  },

  {
    id: 'cheap-houses-for-sale-in-nairobi',
    title: 'Unlocking Value: Finding Cheap Houses for Sale in Nairobi and Beyond',
    excerpt: 'The demand for affordable housing in Nairobi and its surrounding areas has led to a surge in interest in cheap houses for sale. Whether you\'re a first-time...',
    author: getAuthor('development'),
    image: 'https://i.ibb.co/Xfpdjvd0/cheap-houses-for-sale-in-nairobi.png',
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
    image: 'https://i.ibb.co/4g25Xrgj/the-rise-of-satellite-towns-in-kenya.png',
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
    image: "https://images.unsplash.com/photo-1587293852726-70cdb16d2866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FyZWhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },

  {
    id: 'retirement-homes-kenya-market-2025',
    title: 'Retirement Communities in Kenya 2025: An Emerging Real Estate Niche',
    excerpt: 'As Kenya\'s population ages and lifestyles evolve, the concept of dedicated retirement homes and senior living communities is gradually gaining traction. Whil...',
    author: getAuthor('development'),
    category: "Niche Investments",
    date: "2025-08-10",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1605299746144-50f009795104?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VuaW9yJTIwbGl2aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },

  {
    id: 'investing-in-kenyas-affordable-housing-projects',
    title: 'Investing in Kenya\'s Affordable Housing Projects: What You Need to Know',
    excerpt: 'Kenya’s affordable housing sector presents a significant opportunity for both local and foreign investors. As the government pushes forward with the Affordab...',
    author: getAuthor('investment'),
    image: 'https://coastproperties.co.ke/wp-content/uploads/2023/07/Facebook-card-010.jpg',
    category: 'Investment',
    date: '2026-05-01',
    readTime: '14 min read',
  },

  {
    id: 'rent-to-own-schemes-in-kenya',
    title: 'Rent-to-Own Schemes in Kenya: A Path to Homeownership for Many',
    excerpt: 'Rent-to-own housing schemes are becoming a popular option for many Kenyans seeking an affordable and manageable route to homeownership. These schemes offer...',
    author: getAuthor('affordableHousing'),
    image: '/research-images/rent-to-own-kenya-2026.jpg',
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
                        '/default-research-image.png'
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