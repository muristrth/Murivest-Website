'use client';

import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, ArrowRight, Clock, Calendar, User } from 'lucide-react';
import Link from 'next/link';

// ─────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────
interface BlogEntry {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

// ─────────────────────────────────────────────────────────────
// DATA  (262 articles — no image fields)
// ─────────────────────────────────────────────────────────────
const blog: BlogEntry[] = [
   {
    id: 'land-ownership-laws-kenya',
    title: 'Understanding Land Ownership Laws in Kenya',
    excerpt: 'Kenya\'s land ownership framework is governed by comprehensive legislation designed to provide security of tenure while protecting both individual rights and...',
    author: 'Murivest Editorial',
    category: 'Land & Property',
    date: '2025-01-01',
    readTime: '8 min read',
    featured: true,
  },

  {
    id: 'coastal-property-investment-mombasa',
    title: 'Coastal Property Investment: Mombasa and Beyond',
    excerpt: 'Kenya\'s coastal region presents unique investment opportunities that combine the allure of beachfront living with solid financial returns. From Mombasa\'s...',
    author: 'Murivest Editorial',
    category: 'Logistics & Industrial',
    date: '2025-01-01',
    readTime: '8 min read',
    featured: true,
  },

  {
    id: 'investment-properties-kiambu-county',
    title: 'Investment Properties in Kiambu County',
    excerpt: 'Kiambu County has emerged as one of Kenya\'s most attractive property investment destinations, offering a perfect blend of accessibility to Nairobi, natural...',
    author: 'Murivest Editorial',
    category: 'Logistics & Industrial',
    date: '2025-01-01',
    readTime: '7 min read',
    featured: true,
  },

  {
    id: 'property-buying-process-kenya',
    title: 'Property Buying Process in Kenya: Step by Step Guide',
    excerpt: 'Purchasing property in Kenya requires careful navigation through various legal, financial, and administrative processes. Understanding each step of the...',
    author: 'Murivest Editorial',
    category: 'Land & Property',
    date: '2025-01-01',
    readTime: '6 min read',
    featured: true,
  },

  {
    id: 'real-estate-financing-options-kenya',
    title: 'Real Estate Financing Options in Kenya',
    excerpt: 'Financing real estate purchases in Kenya has evolved significantly over the past decade, with financial institutions developing innovative products to meet...',
    author: 'Murivest Editorial',
    category: 'Land & Property',
    date: '2025-01-01',
    readTime: '5 min read',
    featured: true,
  },

  {
    id: 'due-diligence-checklist-kenya-land-2025',
    title: 'The Ultimate Due Diligence Checklist for Buying Land in Kenya 2025 (Post-Ardhisasa)',
    excerpt: 'Buying land in Kenya is a significant investment, and in 2025, while the process is becoming more transparent with digitization, thorough due diligence remai...',
    author: 'Murivest Editorial',
    category: 'Land & Property',
    date: '2025-01-01',
    readTime: '5 min read',
    featured: true,
  },

  {
    id: 'affordable-housing-hotspots-beyond-nairobi-2025',
    title: 'Affordable Housing Hotspots Beyond Nairobi\'s Traditional Borders in 2025',
    excerpt: 'The dream of homeownership in Kenya often seems synonymous with Nairobi., as the capital\'s property prices continue to soar and congestion mounts, savvy...',
    author: 'Murivest Editorial',
    category: 'Logistics & Industrial',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'financing-real-estate-kenya-2025-options',
    title: 'Financing Your Real Estate Dream in Kenya 2025: Mortgages, SACCOs, and Creative Options',
    excerpt: 'Acquiring real estate, whether for a primary residence or investment, is a capital-intensive venture. In Kenya\'s dynamic 2025 market, a variety of financing...',
    author: 'Murivest Editorial',
    category: 'Land & Property',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'kenyan-real-estate-covid-impact',
    title: 'How COVID-19 Reshaped the Kenyan Real Estate Market',
    excerpt: 'The COVID-19 pandemic disrupted nearly every industry, and Kenyan real estate was no exception. Lockdowns, economic uncertainty, and changing consumer...',
    author: 'Murivest Editorial',
    category: 'Nairobi Office',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'commercial-property-investment-kenya',
    title: 'Commercial Property Investment in Kenya: Complete Guide',
    excerpt: 'Commercial real estate represents one of the most lucrative investment opportunities in Kenya\'s property market. Unlike residential properties, commercial re...',
    author: 'Murivest Editorial',
    category: 'Nairobi Office',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'sustainable-designs-kenyan-housing',
    title: 'The Future of Affordable Living: Sustainable Designs in Kenyan Housing',
    excerpt: 'As Kenya grapples with a housing deficit estimated at over 2 million units, affordable housing has become a key focus for government and private developers.,...',
    author: 'Murivest Editorial',
    category: 'Construction',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'nairobi-real-estate-trends-2025-investment-forecast',
    title: 'Nairobi Real Estate Trends 2025: Key Insights and Investment Forecast',
    excerpt: 'Nairobi’s real estate landscape is undergoing a significant transformation in 2025. As Kenya’s capital city and economic nerve center, Nairobi continues to...',
    author: 'Murivest Editorial',
    category: 'Nairobi Office',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'why-land-investment-in-kenya-remains-lucrative-in-2025',
    title: 'Why Land Investment in Kenya Remains Lucrative in 2025',
    excerpt: 'Land has long been considered the foundation of wealth creation in Kenya, and in 2025, this investment vehicle continues to shine. From seasoned real estate...',
    author: 'Murivest Editorial',
    category: 'Land & Property',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'best-areas-to-buy-land-in-nairobi',
    title: 'Best Areas to Buy Land in Nairobi 2025',
    excerpt: 'Nairobi\'s land market offers diverse opportunities for investors seeking both residential and commercial properties. As Kenya\'s capital continues to expand,...',
    author: 'Murivest Editorial',
    category: 'Logistics & Industrial',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'buying-land-vs-buying-house-kenya',
    title: 'Buying Land vs Buying a House in Kenya: What Should You Choose?',
    excerpt: 'One of the biggest financial decisions any Kenyan can make is choosing between buying land and building their own home or purchasing a completed house. Each...',
    author: 'Murivest Editorial',
    category: 'Land & Property',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'kenya-land-vs-apartment-investment',
    title: 'Land vs Apartments in Kenya: Which Is the Better Investment?',
    excerpt: 'If you\'re planning to invest in Kenyan real estate, two of the most common options are buying land or investing in apartments. Each has its own advantages an...',
    author: 'Murivest Editorial',
    category: 'Nairobi Office',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'land-use-zoning-changes-nairobi-2025',
    title: 'Nairobi\'s Evolving Skyline: Understanding Land Use and Zoning Changes in 2025',
    excerpt: 'Nairobi\'s rapid urbanization necessitates continuous review and adaptation of its land use and zoning policies. In 2025, several changes, whether recently...',
    author: 'Murivest Editorial',
    category: 'Nairobi Office',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'serviced-apartments-vs-traditional-rentals-kenya-2025',
    title: 'Serviced Apartments vs. Traditional Rentals in Kenya 2025: An Investor\'s Dilemma',
    excerpt: 'For property investors in Kenya looking to generate rental income, a key decision in 2025 is whether to venture into the serviced apartment market or stick...',
    author: 'Murivest Editorial',
    category: 'Nairobi Office',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'understanding-capital-gains-tax-kenya-real-estate-2025',
    title: 'Capital Gains Tax (CGT) on Real Estate in Kenya 2025: A Clear Guide',
    excerpt: 'Capital Gains Tax (CGT) is a significant consideration for anyone selling property in Kenya. Reintroduced and then revised, understanding its application,...',
    author: 'Murivest Editorial',
    category: 'Land & Property',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'real-estate-auctions-kenya-2025-guide',
    title: 'Buying Property at Auction in Kenya 2025: A Guide to Opportunities and Pitfalls',
    excerpt: 'Property auctions in Kenya, often involving distressed properties or sales by lenders, can be a source of real estate deals for savvy investors., the process...',
    author: 'Murivest Editorial',
    category: 'Land & Property',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'digital-nomads-kenya-real-estate-impact-2025',
    title: 'Digital Nomads in Kenya 2025: Impact on Niche Rental Markets and Co-working Spaces',
    excerpt: 'The global rise of remote work has led to a surge in digital nomads – individuals who leverage technology to work from anywhere in the world. Kenya, with its...',
    author: 'Murivest Editorial',
    category: 'Nairobi Office',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'sectional-properties-act-kenya-2025-explained',
    title: 'Kenya\'s Sectional Properties Act 2020: A 2025 Guide for Apartment Owners and Developers',
    excerpt: 'The Sectional Properties Act, 2020, significantly reformed the ownership and management of multi-unit developments in Kenya, replacing the previous regime...',
    author: 'Murivest Editorial',
    category: 'Land & Property',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'emerging-affordable-property-hubs',
    title: 'Beyond Nairobi: Emerging Investment Hubs for Affordable Property in Kenya',
    excerpt: 'Nairobi has long been the focal point of real estate investment in Kenya., escalating property prices, congestion, and shifting population trends have led...',
    author: 'Murivest Editorial',
    category: 'Logistics & Industrial',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'real-estate-photography-videography-kenya-2025',
    title: 'Visual Appeal: The Power of Professional Real Estate Photography & Videography in Kenya 2025',
    excerpt: 'In Kenya\'s increasingly competitive 2025 real estate market, first impressions are overwhelmingly digital. High-quality photography and videography are no...',
    author: 'Murivest Editorial',
    category: 'Land & Property',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'government-housing-projects-kenya',
    title: 'Government Initiatives Driving Real Estate Growth in Kenya: A Deep Dive',
    excerpt: 'Kenya’s real estate sector has seen a significant transformation in recent years, with government-backed initiatives acting as a catalyst for growth. From...',
    author: 'Murivest Editorial',
    category: 'Land & Property',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'impact-infrastructure-kenya-property-values-2025',
    title: 'The Ripple Effect: How Major Infrastructure Projects are Shaping Kenyan Property Values in 2025',
    excerpt: 'systems development is a primary catalyst for real estate growth and value appreciation in Kenya. In 2025, the impact of several mega-projects completed or...',
    author: 'Murivest Editorial',
    category: 'Nairobi Office',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'agricultural-land-investment-kenya-2025',
    title: 'Investing in Green Gold: Agricultural Land Investment Trends in Kenya 2025',
    excerpt: 'Agriculture remains a cornerstone of Kenya\'s economy, and investing in agricultural land offers diverse opportunities beyond traditional real estate. In 2025...',
    author: 'Murivest Editorial',
    category: 'Land & Property',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'short-term-rentals-airbnb-kenya-2025-guide',
    title: 'The Short-Term Rental Market (Airbnb) in Kenya 2025: A Host\'s Guide to Success',
    excerpt: 'The short-term rental (STR) market, popularized by platforms like Airbnb, Booking.com, and Vrbo, has become a significant segment of Kenya\'s hospitality and...',
    author: 'Murivest Editorial',
    category: 'Nairobi Office',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'renovating-older-properties-kenya-profit-2025',
    title: 'Flipping Houses in Kenya 2025: A Guide to Renovating Older Properties for Profit',
    excerpt: 'Renovating older properties, often called "house flipping" when done for quick resale, can be a profitable real estate venture in Kenya if approached...',
    author: 'Murivest Editorial',
    category: 'Land & Property',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'climate-change-coastal-properties-kenya-2025',
    title: 'Climate Change & Coastal Properties in Kenya 2025: Risks and Resilience Strategies',
    excerpt: 'Kenya\'s coastline, a prime area for tourism and residential property, faces increasing threats from climate change. By 2025, the impacts of sea-level rise,...',
    author: 'Murivest Editorial',
    category: 'Land & Property',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'women-in-kenyan-real-estate-2025',
    title: 'The Rising Influence of Women in Kenyan Real Estate 2025: Trends and Opportunities',
    excerpt: 'The Kenyan real estate sector, historically male-dominated, is witnessing a significant and growing influence from women in 2025. From individual homebuyers...',
    author: 'Murivest Editorial',
    category: 'Land & Property',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'sustainable-building-materials-kenya-2025',
    title: 'Eco-Construction 2025: Top Sustainable Building Materials Gaining Traction in Kenya',
    excerpt: 'As Kenya embraces green building principles, the choice of construction materials is becoming increasingly critical. Sustainable building materials offer...',
    author: 'Murivest Editorial',
    category: 'Construction',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'housing-levy-kenya-investment',
    title: 'Is the Housing Levy a Good Investment for Kenyans? Expert Analysis',
    excerpt: 'In 2023, the Kenyan government introduced the Housing Levy as part of its push to bridge the country\'s housing deficit. While the initiative promises to make...',
    author: 'Murivest Editorial',
    category: 'Land & Property',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'cheap-houses-for-sale-in-nairobi',
    title: 'Unlocking Value: Finding Cheap Houses for Sale in Nairobi and Beyond',
    excerpt: 'The demand for affordable housing in Nairobi and its surrounding areas has led to a surge in interest in cheap houses for sale. Whether you\'re a first-time...',
    author: 'Murivest Editorial',
    category: 'Land & Property',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'maximizing-rental-yields-nairobi-2025',
    title: 'Maximizing Rental Yields in Nairobi 2025: A Landlord\'s Strategic Guide',
    excerpt: 'Nairobi\'s rental market in 2025 is dynamic and competitive. For landlords, achieving optimal rental yields requires more than just owning property; it demand...',
    author: 'Murivest Editorial',
    category: 'Land & Property',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'the-rise-of-satellite-towns-in-kenya',
    title: 'The Rise of Satellite Towns: Affordable Land & Housing Hotspots in Kenya',
    excerpt: 'Kenya’s satellite towns are experiencing rapid growth, transforming from rural outposts into bustling urban centers. These towns, including Ruiru, Kitengela,...',
    author: 'Murivest Editorial',
    category: 'Logistics & Industrial',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'warehousing-logistics-real-estate-kenya-2025',
    title: 'The Boom in Warehousing & Logistics Real Estate in Kenya 2025',
    excerpt: 'Kenya\'s strategic position as a regional trade hub, coupled with the rise of e-commerce and manufacturing, is fueling unprecedented demand for modern...',
    author: 'Murivest Editorial',
    category: 'Logistics & Industrial',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'retirement-homes-kenya-market-2025',
    title: 'Retirement Communities in Kenya 2025: An Emerging Real Estate Niche',
    excerpt: 'As Kenya\'s population ages and lifestyles evolve, the concept of dedicated retirement homes and senior living communities is gradually gaining traction. Whil...',
    author: 'Murivest Editorial',
    category: 'Tax & Legal',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'investing-in-kenyas-affordable-housing-projects',
    title: 'Investing in Kenya\'s Affordable Housing Projects: What You Need to Know',
    excerpt: 'Kenya’s affordable housing sector presents a significant opportunity for both local and foreign investors. As the government pushes forward with the Affordab...',
    author: 'Murivest Editorial',
    category: 'Land & Property',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'rent-to-own-schemes-in-kenya',
    title: 'Rent-to-Own Schemes in Kenya: A Path to Homeownership for Many',
    excerpt: 'Rent-to-own housing schemes are becoming a popular option for many Kenyans seeking an affordable and manageable route to homeownership. These schemes offer...',
    author: 'Murivest Editorial',
    category: 'Tax & Legal',
    date: '2025-01-01',
    readTime: '5 min read',
  },

  {
    id: 'kenyas-affordable-housing-progress-challenges-and-your-role-as-an-investor',
    title: 'Kenya\'s Affordable Housing: Progress, Challenges, and Your Role as an Investor',
    excerpt: 'Kenya\'s affordable housing initiative is a cornerstone of the country\'s development agenda, aiming to provide quality homes for all income levels. Spearheade...',
    author: 'Murivest Editorial',
    category: 'Land & Property',
    date: '2025-01-01',
    readTime: '5 min read',
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
export default function Blog() {
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState('All');
  const [showAllCats, setShowAllCats] = useState(false);

  const catMap = useMemo(() => {
    const m = new Map<string, number>();
    blog.forEach(p => m.set(p.category, (m.get(p.category) || 0) + 1));
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
    return blog.filter(p => {
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
        /* ═══ Blog page — exact palette from BlogPost.tsx ═══ */
        .bp-page {
          font-family: Georgia, "Times New Roman", serif;
          min-height: 100vh;
          background: #FAFAF8;
        }

        /* Header */
        .bp-header {
          border-bottom: 1px solid #E2DDD6;
          background: #FAFAF8;
        }
        .bp-header-inner {
          max-width: 1160px;
          margin: 0 auto;
          padding: 44px 24px 36px;
        }
        .bp-kicker {
          font-family: Georgia, serif;
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #9B8F7E;
          margin: 0 0 14px 0;
        }
        .bp-headline {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(28px, 4vw, 46px);
          font-weight: 700;
          color: #1C1C1C;
          line-height: 1.12;
          letter-spacing: -0.4px;
          margin: 0 0 12px 0;
        }
        .bp-subhead {
          font-family: Georgia, serif;
          font-size: 16px;
          color: #6B6259;
          line-height: 1.65;
          margin: 0;
          max-width: 540px;
        }

        /* Layout */
        .bp-body {
          max-width: 1160px;
          margin: 0 auto;
          padding: 44px 24px 100px;
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 0 56px;
          align-items: start;
        }

        /* Sidebar */
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
          width: 13px;
          height: 13px;
          color: #9B8F7E;
          pointer-events: none;
        }
        .bp-search {
          width: 100%;
          padding: 10px 14px 10px 34px;
          border: 1px solid #E2DDD6;
          background: #FAFAF8;
          font-family: Georgia, serif;
          font-size: 13px;
          color: #1C1C1C;
          outline: none;
          transition: border-color 0.2s;
          -webkit-appearance: none;
        }
        .bp-search::placeholder { color: #B0A89F; }
        .bp-search:focus { border-color: #7B6C55; }

        .bp-cat-label {
          font-family: Georgia, serif;
          font-size: 10px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #9B8F7E;
          font-weight: 700;
          margin: 0 0 6px 0;
          padding-left: 12px;
        }
        .bp-all-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 9px 12px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: Georgia, serif;
          font-size: 13px;
          color: #3A3530;
          border-left: 2px solid transparent;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
          margin-bottom: 2px;
          text-align: left;
        }
        .bp-all-btn:hover { background: #F5F3EE; color: #1C1C1C; }
        .bp-all-btn.bp-active {
          background: #F5F3EE;
          color: #1C1C1C;
          border-left-color: #7B6C55;
          font-weight: 700;
        }
        .bp-cat-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 7px 12px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: Georgia, serif;
          font-size: 13px;
          color: #3A3530;
          border-left: 2px solid transparent;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
          margin-bottom: 1px;
          line-height: 1.35;
          text-align: left;
        }
        .bp-cat-btn:hover { background: #F5F3EE; color: #1C1C1C; }
        .bp-cat-btn.bp-active {
          background: #F5F3EE;
          color: #1C1C1C;
          border-left-color: #7B6C55;
          font-weight: 700;
        }
        .bp-cat-count {
          font-size: 11px;
          color: #B0A89F;
          flex-shrink: 0;
          margin-left: 8px;
        }
        .bp-cat-btn.bp-active .bp-cat-count,
        .bp-all-btn.bp-active .bp-cat-count { color: #7B6C55; }

        .bp-show-more {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 8px 12px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: Georgia, serif;
          font-size: 12px;
          color: #7B6C55;
          transition: color 0.15s;
          margin-top: 4px;
        }
        .bp-show-more:hover { color: #1C1C1C; }
        .bp-show-more svg { width: 12px; height: 12px; }

        /* Main */
        .bp-main { min-width: 0; }

        .bp-results-bar {
          border-bottom: 2px solid #1C1C1C;
          padding-bottom: 16px;
          margin-bottom: 0;
        }
        .bp-results-label {
          font-family: Georgia, serif;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #9B8F7E;
          display: block;
          margin-bottom: 4px;
        }
        .bp-results-count {
          font-family: Georgia, serif;
          font-size: 22px;
          font-weight: 700;
          color: #1C1C1C;
        }

        /* Article card */
        .bp-card {
          padding: 32px 0;
          border-bottom: 1px solid #E2DDD6;
        }
        .bp-card:last-of-type { border-bottom: none; }

        .bp-featured-strip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 10px;
        }
        .bp-featured-dot {
          width: 6px; height: 6px;
          background: #7B6C55;
          border-radius: 50%;
        }
        .bp-featured-text {
          font-family: Georgia, serif;
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #7B6C55;
        }

        .bp-card-cat-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        .bp-card-cat {
          font-family: Georgia, serif;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #9B8F7E;
          white-space: nowrap;
        }
        .bp-card-rule {
          flex: 1;
          height: 1px;
          background: #E2DDD6;
        }

        .bp-card-title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(17px, 2vw, 22px);
          font-weight: 700;
          color: #1C1C1C;
          line-height: 1.25;
          text-decoration: none;
          display: block;
          margin: 0 0 12px 0;
          transition: color 0.2s;
        }
        .bp-card-title:hover { color: #7B6C55; }

        .bp-card-excerpt {
          font-family: Georgia, serif;
          font-size: 15px;
          line-height: 1.75;
          color: #4A4540;
          margin: 0 0 16px 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .bp-card-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 4px 14px;
          margin-bottom: 18px;
        }
        .bp-card-meta-item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-family: Georgia, serif;
          font-size: 12px;
          color: #9B8F7E;
        }
        .bp-card-meta-item svg {
          width: 12px; height: 12px;
          color: #B0A89F;
        }
        .bp-meta-sep { color: #D4CFC9; font-size: 11px; }

        .bp-read-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: Georgia, serif;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #7B6C55;
          text-decoration: none;
          padding-bottom: 2px;
          border-bottom: 1px solid #C8BFB4;
          transition: color 0.2s, border-color 0.2s;
        }
        .bp-read-link:hover { color: #1C1C1C; border-color: #1C1C1C; }
        .bp-read-link svg {
          width: 12px; height: 12px;
          transition: transform 0.2s;
        }
        .bp-read-link:hover svg { transform: translateX(3px); }

        .bp-empty {
          padding: 64px 0;
          text-align: center;
        }
        .bp-empty p {
          font-family: Georgia, serif;
          font-size: 15px;
          color: #9B8F7E;
        }

        /* Mobile */
        @media (max-width: 900px) {
          .bp-body {
            grid-template-columns: 1fr;
          }
          .bp-sidebar {
            position: static;
            border-bottom: 1px solid #E2DDD6;
            padding-bottom: 28px;
            margin-bottom: 32px;
          }
          .bp-cat-label { padding-left: 0; }
          .bp-all-btn,
          .bp-cat-btn {
            padding-left: 0;
            border-left: none !important;
          }
        }
        @media (max-width: 640px) {
          .bp-header-inner { padding: 32px 20px 28px; }
          .bp-body { padding: 28px 20px 80px; gap: 0; }
          .bp-card-title { font-size: 17px; }
          .bp-card-excerpt { font-size: 14px; -webkit-line-clamp: 2; }
        }
      `}</style>

      <div className="bp-page" style={{ paddingTop: '64px' }}>

        {/* ── Page header ── */}
        <div className="bp-header">
          <div className="bp-header-inner">
            <p className="bp-kicker">Market Intelligence</p>
            <h1 className="bp-headline">The Murivest Journal</h1>
            <p className="bp-subhead">
              Institutional-grade analysis, market intelligence, and investment
              insight for Kenya&apos;s property market — sourced from KNBS, PwC,
              Deloitte, McKinsey, and Statista.
            </p>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="bp-body">

          {/* ── Sidebar ── */}
          <aside className="bp-sidebar">
            <div className="bp-search-wrap">
              <Search className="bp-search-icon" />
              <input
                className="bp-search"
                type="text"
                placeholder="Search 262 articles…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                aria-label="Search articles"
              />
            </div>

            <p className="bp-cat-label">Categories</p>

            <button
              className={`bp-all-btn${activeCat === 'All' ? ' bp-active' : ''}`}
              onClick={() => setActiveCat('All')}
            >
              <span>All Posts</span>
              <span className="bp-cat-count">{blog.length}</span>
            </button>

            {visibleCats.map(({ name, count }) => (
              <button
                key={name}
                className={`bp-cat-btn${activeCat === name ? ' bp-active' : ''}`}
                onClick={() => setActiveCat(name)}
              >
                <span>{name}</span>
                <span className="bp-cat-count">{count}</span>
              </button>
            ))}

            {sortedCats.length > CATS_VISIBLE && (
              <button
                className="bp-show-more"
                onClick={() => setShowAllCats(v => !v)}
              >
                {showAllCats
                  ? <><ChevronUp />Show less</>
                  : <><ChevronDown />{sortedCats.length - CATS_VISIBLE} more categories</>
                }
              </button>
            )}
          </aside>

          {/* ── Article list ── */}
          <main className="bp-main">
            <div className="bp-results-bar">
              <span className="bp-results-label">
                {activeCat === 'All' ? 'All Articles' : activeCat}
                {search ? ` matching "${search}"` : ''}
              </span>
              <span className="bp-results-count">
                {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
              </span>
            </div>

            {filtered.length === 0 ? (
              <div className="bp-empty">
                <p>No articles found{search ? ` for "${search}"` : ''}.</p>
              </div>
            ) : (
              filtered.map(post => (
                <article key={post.id} className="bp-card">

                  {post.featured && (
                    <div className="bp-featured-strip">
                      <span className="bp-featured-dot" />
                      <span className="bp-featured-text">Featured</span>
                    </div>
                  )}

                  <div className="bp-card-cat-row">
                    <span className="bp-card-cat">{post.category}</span>
                    <span className="bp-card-rule" />
                  </div>

                  <Link href={`/blog/${post.id}`} className="bp-card-title">
                    {post.title}
                  </Link>

                  <p className="bp-card-excerpt">{post.excerpt}</p>

                  <div className="bp-card-meta">
                    <span className="bp-card-meta-item">
                      <Calendar />{formatDate(post.date)}
                    </span>
                    <span className="bp-meta-sep">·</span>
                    <span className="bp-card-meta-item">
                      <Clock />{post.readTime}
                    </span>
                    <span className="bp-meta-sep">·</span>
                    <span className="bp-card-meta-item">
                      <User />{post.author}
                    </span>
                  </div>

                  <Link href={`/blog/${post.id}`} className="bp-read-link">
                    Read article <ArrowRight />
                  </Link>

                </article>
              ))
            )}
          </main>
        </div>
      </div>
    </>
  );
}