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
    id: 'nairobi-cbd-office-market-analysis-2026',
    title: 'Nairobi CBD Office Market Analysis 2026: Trends, Yields & Opportunities',
    excerpt:
      'An in-depth analysis of Nairobi CBD\'s office market in 2026, covering vacancy rates, rental trends, key developments, and investment opportunities.',
    author: 'Murivest Research Team',
    category: 'Market Analysis',
    date: '2024-08-10',
    readTime: '30 min read',
    featured: true,
  },
  {
    id: 'improve-credit-score-property-loans-kenya',
    title: 'How to Improve Your Credit Score for Property Loans in Kenya',
    excerpt: 'A vital guide for aspiring homeowners in Kenya, detailing actionable steps to enhance your credit score and secure favorable property loan terms in 2025.',
    author: 'Esther Wanjiku',
    category: 'Financing',
    date: '2025-06-15',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 'special-warranty-deed',
    title: 'Special Warranty Deed: Understanding Real Estate Transactions',
    excerpt: 'Understand how a special warranty deed works, what risks it shifts to the buyer, and how to protect your investment in commercial real estate deals.',
    author: 'LoopNet Team',
    category: 'Investing',
    date: 'September 28, 2025',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 'what-is-a-cap-rate',
    title: 'What Is a Cap Rate? Calculating This Critical CRE Investment Metric',
    excerpt: 'A capitalization (cap) rate is a measurement of the perceived risk of owning a property, expressing an anticipated annual return on an investment. Learn how to calculate cap rates and why this metric matters.',
    author: 'LoopNet Team',
    category: 'Investing',
    date: 'September 18, 2025',
    readTime: '10 min read',
    featured: true,
  },
  {
    id: "ngong-heritage-villas",
    title: "NGONG: The New Luxury Frontier for Kenya's Elite Families",
    excerpt: "The market has spoken: While traditional luxury enclaves like Kilimani face oversupply, Ngong is emerging as Kenya's premier lifestyle destination with property values appreciating faster than ever.",
    author: "Ngong Heritage Villas",
    category: "Luxury Properties",
    date: "2025-07-01",
    readTime: "3 min read",
    featured: false
  },
  {
    id: 'unlocking-homeownership-mortgages-kenya',
    title: 'Unlocking Homeownership: A Comprehensive Guide to Mortgages in Kenya',
    excerpt: 'Demystify the mortgage application process in Kenya for 2025, exploring different types of mortgages, eligibility criteria, and tips for first-time homebuyers.',
    author: 'David Mwangi',
    category: 'Homeownership',
    date: '2025-06-20',
    readTime: '12 min read',
    featured: true,
  },
  {
    id: 'step-by-step-home-insurance-kenya',
    title: 'Step-by-Step Guide on Home Insurance in Kenya: Protecting Your Investment',
    excerpt: 'Understand the essentials of home insurance in Kenya, including coverage types, benefits, and how to choose the right policy to safeguard your property in 2025.',
    author: 'Grace Adhiambo',
    category: 'Property Management',
    date: '2025-06-25',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'affordable-housing-kenya-2025',
    title: 'Affordable Housing in Kenya 2025: Opportunities and Challenges',
    excerpt: 'An in-depth look at the progress and hurdles in Kenya\'s affordable housing sector for 2025, highlighting government initiatives and private sector contributions.',
    author: 'Samwel Kimani',
    category: 'Development',
    date: '2025-07-01',
    readTime: '11 min read',
    featured: true,
  },
  {
    id: 'housing-levy-bill-passes-kenya-kwanza',
    title: 'The Housing Levy Bill Passes: A Major Win for Kenya Kwanza\'s Affordable Housing Agenda',
    excerpt: 'Analyzing the implications of the recently passed Housing Levy Bill for affordable housing development and its impact on Kenyans in 2025.',
    author: 'Christine Wanjiru',
    category: 'Policy',
    date: '2025-07-05',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'kmrc-mortgage-limit-increase-2025',
    title: 'KMRC to Increase Mortgage Limit to KES 10.5M: What it Means for Kenyan Homebuyers',
    excerpt: 'Exploring the significant impact of KMRC\'s increased mortgage limit on accessibility to homeownership for a broader segment of Kenyans in 2025.',
    author: 'Daniel Omondi',
    category: 'Financing',
    date: '2025-07-10',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'sacco-loans-homeownership-kenya',
    title: 'Sacco Loans: Fueling 33% of New Homeownership in Kenya',
    excerpt: 'Discover how SACCOs are becoming a powerful force in enabling homeownership in Kenya, providing flexible and accessible financing options for many in 2025.',
    author: 'Sarah Njeri',
    category: 'Financing',
    date: '2025-07-15',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 'unity-homes-absa-bank-affordable-housing',
    title: 'Unity Homes and Absa Bank Partnership: Paving the Way for Affordable Housing in Kenya',
    excerpt: 'A detailed look into the strategic partnership between Unity Homes and Absa Bank and its expected contribution to boosting affordable housing supply in Kenya for 2025.',
    author: 'Paul Kamau',
    category: 'Partnerships',
    date: '2025-07-20',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'dual-impact-housing-levy-kenya',
    title: 'The Dual Impact of the Housing Levy in Kenya: A Deep Dive for Property Owners and Buyers',
    excerpt: 'Examining the multifaceted effects of Kenya\'s Housing Levy on both property owners and prospective buyers, analyzing its benefits and potential challenges in 2025.',
    author: 'Joyce Achieng',
    category: 'Policy',
    date: '2025-07-25',
    readTime: '11 min read',
    featured: false,
  },
  {
    id: 'service-charge-kenya-what-to-know',
    title: 'Service Charge in Kenya: What Property Owners and Tenants Need to Know in 2025',
    excerpt: 'A comprehensive guide to understanding service charges in Kenyan real estate, clarifying rights, responsibilities, and common disputes for 2025.',
    author: 'Kevin Mwangi',
    category: 'Legal',
    date: '2025-08-01',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'emerging-real-estate-trends-kenya-2025',
    title: 'Emerging Real Estate Trends in Kenya 2025: Shaping the Market Landscape',
    excerpt: 'Stay ahead of the curve with insights into the latest real estate trends in Kenya for 2025, including technological advancements, sustainable development, and investor preferences.',
    author: 'Cynthia Akinyi',
    category: 'Market Trends',
    date: '2025-08-05',
    readTime: '12 min read',
    featured: true,
  },
  {
    id: 'current-state-real-estate-kenya-2025-outlook',
    title: 'The Current State of the Real Estate Market in Kenya: A 2025 Outlook',
    excerpt: 'An expert analysis of the current health and future projections of Kenya\'s real estate market in 2025, covering investment opportunities and challenges.',
    author: 'Robert Kiptoo',
    category: 'Market Analysis',
    date: '2025-08-10',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'impact-sgr-real-estate-kenya-decade-on',
    title: 'Impact of the Standard Gauge Railway (SGR) on Kenya\'s Real Estate Industry: A Decade On',
    excerpt: 'A retrospective and prospective analysis of how the SGR has transformed real estate development and property values along its corridor in Kenya over the past decade.',
    author: 'Elizabeth Wairimu',
    category: 'Infrastructure',
    date: '2025-08-15',
    readTime: '11 min read',
    featured: false,
  },
  {
    id: 'real-estate-events-kenya-october-2025',
    title: 'Real Estate Events in Kenya: Your October 2025 Networking and Investment Guide',
    excerpt: 'A curated list of top real estate events, expos, and conferences happening in Kenya in October 2025, essential for networking and investment opportunities.',
    author: 'Brian Kipkemboi',
    category: 'Events',
    date: '2025-08-20',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 'most-expensive-cities-africa-2025-nairobi',
    title: 'Most Expensive Cities to Live in Africa 2025: Where Does Nairobi Stand?',
    excerpt: 'Comparing Nairobi\'s cost of living and real estate prices against other major African cities in 2025, offering insights for residents and investors.',
    author: 'Angela Moraa',
    category: 'Lifestyle',
    date: '2025-08-25',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'housing-menace-nairobi-high-rise-development',
    title: 'The Housing Menace in Nairobi: Navigating High-Rise Development and Urban Sprawl',
    excerpt: 'An examination of Nairobi\'s rapid vertical and horizontal expansion, its implications for urban planning, infrastructure, and housing affordability in 2025.',
    author: 'James Kariuki',
    category: 'Urban Development',
    date: '2025-09-01',
    readTime: '12 min read',
    featured: true,
  },
  {
    id: 'navigating-kenya-real-estate-ms-expert',
    title: 'Navigating Kenya\'s Real Estate Landscape with Ms. [Expert Name]: Key Insights for 2025',
    excerpt: 'An exclusive interview with a leading real estate expert, Ms. [Expert Name], providing invaluable insights and predictions for the Kenyan property market in 2025.',
    author: 'Editor',
    category: 'Expert Interview',
    date: '2025-09-05',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'land-buying-selling-firms-license-fees-kenya',
    title: 'Land Buying & Selling Firms in Kenya Face KES 500M License Fees: Impact on the Market',
    excerpt: 'Analyzing the new regulatory changes requiring land firms to pay significant license fees and their potential effects on land prices and market operations in Kenya for 2025.',
    author: 'Peter Kinyanjui',
    category: 'Policy',
    date: '2025-09-10',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'mombasa-gate-bridge-project-real-estate-impact',
    title: 'Mombasa Gate Bridge Project: Changing the Landscape of Coastal Real Estate',
    excerpt: 'A comprehensive review of the Mombasa Gate Bridge project and its projected transformative impact on infrastructure, accessibility, and real estate values in Kenya\'s coastal region.',
    author: 'Fatuma Hassan',
    category: 'Infrastructure',
    date: '2025-09-15',
    readTime: '11 min read',
    featured: true,
  },
  {
    id: 'jkia-westlands-expressway-traffic-menace',
    title: 'JKIA-Westlands Expressway: Has It Solved Nairobi\'s Traffic Menace in 2025?',
    excerpt: 'An evaluation of the effectiveness of the JKIA-Westlands Expressway in alleviating Nairobi\'s notorious traffic congestion and its broader impact on urban mobility and real estate access in 2025.',
    author: 'Joseph Maina',
    category: 'Infrastructure',
    date: '2025-09-20',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'kenya-affordable-housing-progress-challenges',
    title: "Kenya's Affordable Housing: Progress and Challenges",
    excerpt: "Delve into the current state of affordable housing initiatives in Kenya, highlighting key milestones achieved, persistent challenges, and potential solutions to bridge the housing gap.",
    author: 'David Omondi',
    category: 'Development',
    date: '2025-08-01',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'cs-wahome-housing-levy-funds-construction-home-ownership-lags',
    title: 'CS Wahome: Housing Levy Funds Construction, But Home Ownership Lags',
    excerpt: 'An exploration of the Housing Levy\'s impact on construction funding versus the actual rate of homeownership, scrutinizing the disparities and policy implications as stated by CS Wahome.',
    author: 'Aisha Khan',
    category: 'Government Policy',
    date: '2025-07-22',
    readTime: '11 min read',
    featured: false,
  },
  {
    id: 'did-kenya-state-house-need-makeover',
    title: "Did Kenya's State House Need a Makeover?",
    excerpt: 'A nuanced look at the recent renovations and expenditures on Kenya\'s State House, discussing the public perception, historical context, and economic implications in the current climate.',
    author: 'Kiplagat Ruto',
    category: 'Current Affairs',
    date: '2025-06-10',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'environmental-oversight-halts-langata-housing-project',
    title: "Environmental Oversight Halts Lang'ata Housing Project",
    excerpt: 'Examining the reasons behind the suspension of a major housing project in Lang\'ata due to environmental concerns, underscoring the growing importance of sustainability in real estate development.',
    author: 'Sophia Nzomo',
    category: 'Sustainability',
    date: '2025-08-15',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'kra-new-system-tax-filing-landlords-agents',
    title: 'KRA Launches New System to Make Tax Filing Easier for Landlords and Agents',
    excerpt: 'A detailed breakdown of the Kenya Revenue Authority\'s (KRA) new digital system designed to simplify tax compliance for real estate landlords and agents, and its potential impact.',
    author: 'James Mwangi',
    category: 'Taxation',
    date: '2025-09-01',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 'kuscco-scandal-ksh-12b-fraud-sacco-housing-risk',
    title: 'KUSCCO Scandal: KSh 12B Fraud Puts SACCO Housing at Risk',
    excerpt: 'Investigating the ramifications of the KSh 12 billion fraud scandal involving KUSCCO, and how this affects the stability and future of SACCO-backed housing projects in Kenya.',
    author: 'Njeri Kamau',
    category: 'Finance',
    date: '2025-07-05',
    readTime: '13 min read',
    featured: true,
  },
  {
    id: 'win-real-estate-investors-against-off-plan-developer',
    title: 'Win for Real Estate Investors Against Off-Plan Developer',
    excerpt: 'A case study detailing a landmark legal victory for real estate investors against a defaulting off-plan developer, offering crucial lessons for mitigating risks in off-plan purchases.',
    author: 'Daniel Otieno',
    category: 'Legal',
    date: '2025-08-20',
    readTime: '11 min read',
    featured: false,
  },
  {
    id: 'bpo-boom-commercial-developers-rethink-office-spaces',
    title: 'BPO Boom: Why Commercial Developers Must Rethink Office Spaces',
    excerpt: 'Exploring how the flourishing Business Process Outsourcing (BPO) sector in Kenya is reshaping demand for commercial office spaces, urging developers to innovate in design and functionality.',
    author: 'Catherine Chege',
    category: 'Commercial Real Estate',
    date: '2025-09-10',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'why-commercial-real-estate-kenya-facing-new-challenges',
    title: 'Why Commercial Real Estate in Kenya is Facing New Challenges',
    excerpt: 'An analysis of the evolving landscape of commercial real estate in Kenya, addressing new challenges such as remote work trends, oversupply, and shifting economic conditions.',
    author: 'Peter Kihara',
    category: 'Market Trends',
    date: '2025-07-28',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'northlands-heights-apartments-look-inside',
    title: 'Northlands Heights Apartments – A Look Inside',
    excerpt: 'A comprehensive review and virtual tour of the highly anticipated Northlands Heights Apartments, offering insights into their design, amenities, and investment potential.',
    author: 'Esther Wambui',
    category: 'Property Review',
    date: '2025-06-25',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 'rise-branded-residences-kenya',
    title: 'The Rise of Branded Residences in Kenya',
    excerpt: 'Unpacking the growing trend of branded residences in Kenya, where luxury hospitality brands are partnering with developers to offer exclusive living experiences.',
    author: 'Samuel Kariuki',
    category: 'Luxury Real Estate',
    date: '2025-09-05',
    readTime: '10 min read',
    featured: true,
  },
  {
    id: 'how-urbanisation-redefining-housing-kenya',
    title: 'How Urbanisation is Redefining Housing in Kenya',
    excerpt: 'An examination of how rapid urbanization is profoundly impacting housing patterns and demand in Kenya, leading to innovative solutions and concentrated development in urban centers.',
    author: 'Joyce Akinyi',
    category: 'Urban Planning',
    date: '2025-08-25',
    readTime: '11 min read',
    featured: false,
  },
  {
    id: '6-types-residential-buildings-kenya-perfect-fit',
    title: '6 Types of Residential Buildings in Kenya: Find the Perfect Fit',
    excerpt: 'A practical guide outlining the various types of residential properties available in Kenya, helping prospective homeowners and investors understand their options and make informed decisions.',
    author: 'Michael Okello',
    category: 'Home Buying Guide',
    date: '2025-07-10',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'how-to-build-cost-effectively-without-compromising-quality',
    title: 'How to Build Cost-Effectively Without Compromising on Quality',
    excerpt: 'Practical strategies and tips for developers and individual builders in Kenya to reduce construction costs while maintaining high standards of quality and durability.',
    author: 'Collins Kipkemoi',
    category: 'Construction',
    date: '2025-09-15',
    readTime: '12 min read',
    featured: false,
  },
  {
    id: 'interest-rates-how-they-impact-your-mortgage',
    title: 'Interest Rates and How They Impact Your Mortgage',
    excerpt: 'A comprehensive guide explaining the intricacies of interest rates in Kenya and their direct influence on mortgage payments, affordability, and the overall real estate market.',
    author: 'Monica Wanjiru',
    category: 'Mortgage & Finance',
    date: '2025-08-08',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'why-homeownership-rates-dropping-urban-areas',
    title: 'Why Are Homeownership Rates Dropping in Urban Areas?',
    excerpt: 'Investigating the factors contributing to the decline in homeownership rates within Kenya\'s urban centers, exploring economic shifts, affordability challenges, and changing lifestyle priorities.',
    author: 'Paul Kimani',
    category: 'Market Analysis',
    date: '2025-07-01',
    readTime: '11 min read',
    featured: false,
  },
  {
    id: 'could-fractional-ownership-kenya-next-real-estate-trend',
    title: "Could Fractional Ownership Be Kenya's Next Real Estate Trend?",
    excerpt: "An insightful look into fractional ownership as an emerging investment model in Kenya's real estate sector, assessing its potential benefits, challenges, and market viability.",
    author: 'Ruth Adhiambo',
    category: 'Investment Trends',
    date: '2025-09-20',
    readTime: '10 min read',
    featured: true,
  },
  {
    id: 'do-i-really-need-real-estate-agent-buying-house',
    title: 'Do I Really Need a Real Estate Agent When Buying a House?',
    excerpt: 'A balanced discussion on the role of real estate agents in Kenya, weighing the pros and cons of engaging an agent versus navigating the property market independently.',
    author: 'Benard Kiprotich',
    category: 'Buying Guide',
    date: '2025-06-18',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'best-grass-types-transform-lawn-create-dream-garden',
    title: 'Best Grass Types to Transform Your Lawn and Create a Dream Garden',
    excerpt: 'A practical guide for Kenyan homeowners on selecting the ideal grass types for their lawns, considering climate, maintenance, and aesthetic appeal to achieve a stunning garden.',
    author: 'Lillian Owino',
    category: 'Home Improvement',
    date: '2025-08-12',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 'women-in-real-estate-breaking-barriers-kenya-property-industry',
    title: "Women in Real Estate: Breaking Barriers in Kenya's Property Industry",
    excerpt: "Celebrating the achievements and contributions of women in Kenya's real estate sector, highlighting their growing influence, leadership roles, and the challenges they overcome.",
    author: 'Christine Wanjiku',
    category: 'Industry Leaders',
    date: '2025-10-01',
    readTime: '11 min read',
    featured: true,
  },
  {
    id: 'ceo-elizabeth-lizzie-costabir-featured-ntv-women-in-business',
    title: "CEO Elizabeth 'Lizzie' Costabir Featured on NTV's 'Women in Business'",
    excerpt: 'A spotlight on Elizabeth Costabir\'s inspiring journey and insights shared during her feature on NTV\'s \'Women in Business,\' discussing her leadership and impact in the real estate industry.',
    author: 'Editor',
    category: 'Industry Leaders',
    date: '2025-10-05',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 'celebrating-decade-excellence-elizabeth-costabir-real-estate-journey',
    title: "Celebrating a Decade of Excellence: Elizabeth Costabir's Real Estate Journey",
    excerpt: 'A retrospective look at Elizabeth Costabir\'s ten-year career in real estate, chronicling her milestones, contributions, and vision for the future of the Kenyan property market.',
    author: 'Editorial Team',
    category: 'Industry Leaders',
    date: '2025-10-10',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'timeless-beauty-nairobi-colonial-era-buildings',
    title: "The Timeless Beauty of Nairobi's Colonial-Era Buildings",
    excerpt: "A captivating journey through Nairobi's architectural heritage, admiring the enduring charm and historical significance of its colonial-era buildings and their place in modern urban planning.",
    author: 'Historian',
    category: 'Architecture',
    date: '2025-06-30',
    readTime: '11 min read',
    featured: false,
  },
  {
    id: 'home-buying-tips',
    title: 'Essential Home Buying Tips for First-Time Buyers',
    excerpt:
      'Navigate the home buying process with confidence using these expert tips and strategies for first-time buyers.',
    author: 'Mark Muriithi',
    category: 'Tips',
    date: '2025-02-05',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 'serviced-apartments-vs-hotels',
    title: 'Services apartments vs Hotels: Which is Right for You?',
    excerpt:
      'Investing in serviced apartments is a fairly new concept, especially in the Kenyan real estate market.',
    author: 'Mark Muriithi',
    category: 'Trends',
    date: '2024-05-13',
    readTime: '10 min read',
  },
  {
    id: 'real-estate-investment-amount-kenya',
    title: 'How Much Do You Need to Invest in Real Estate in Kenya',
    excerpt:
      'Investing in real estate in Kenya has become a popular option for many investors looking to diversify their portfolios and build long-term wealth.',
    author: 'Mark Muriithi',
    category: 'Investment',
    date: '2023-07-19',
    readTime: '10 min read',
  },
  {
    id: 'making-money-real-estate-kenya',
    title: 'How to Make Money in Real Estate in Kenya',
    excerpt:
      'Overview of the real estate in Kenya. Real estate in Kenya is one of the most lucrative investment opportunities available today.',
    author: 'Mark Muriithi',
    category: 'Updates',
    date: '2022-10-10',
    readTime: '15 min read',
  },
  {
    id: 'what-is-real-estate-investment',
    title: 'What is Real Estate Investment?',
    excerpt:
      'Real estate investment involves purchasing, owning, managing, renting, or selling real estate for profit.',
    author: 'Mark Muriithi',
    category: 'Investment',
    date: '2023-07-19',
    readTime: '7 min read',
  },
  {
    id: 'boost-home-value',
    title: '10 Ways to Boost Your Home Value Before Selling',
    excerpt:
      'Maximize your property\'s market appeal and value with these strategic home improvement tips.',
    author: 'Mark Muriithi',
    category: 'Tips',
    date: '2024-03-10',
    readTime: '9 min read',
  },
  {
    id: 'kenya-real-estate-2025-outlook',
    title: 'Kenya Real Estate Outlook 2025: Navigating Growth and Challenges',
    excerpt: 'A comprehensive analysis of Kenya\'s real estate market projections for 2025, examining growth opportunities, potential challenges, and strategic insights for investors and homebuyers.',
    author: 'Murivest Research Team',
    category: 'Market Analysis',
    date: '2025-01-15',
    readTime: '15 min read',
    featured: true,
  },
  {
    id: 'political-impact-property-kenya',
    title: 'How Political Stability Shapes the Real Estate Landscape in Kenya',
    excerpt: 'Exploring the intricate relationship between political dynamics and property market trends in Kenya, and how policy changes and stability influence investment decisions.',
    author: 'Dr. Samuel Ochieng',
    category: 'Market Trends',
    date: '2025-02-01',
    readTime: '12 min read',
    featured: false,
  },
  {
    id: 'affordable-housing-initiatives-kenya',
    title: 'Kenya\'s Affordable Housing Agenda: Opportunities for Developers and Homeowners',
    excerpt: 'An in-depth look at Kenya\'s affordable housing initiatives and how they are creating new opportunities for property developers and potential homeowners across the country.',
    author: 'Hassan Ibrahim',
    category: 'Development',
    date: '2025-02-10',
    readTime: '11 min read',
    featured: false,
  },
  {
    id: 'land-investment-satellite-towns',
    title: 'Unlocking Value: Land Investment in Kenya\'s Satellite Towns',
    excerpt: 'A strategic guide to land investment opportunities in Kenya\'s rapidly developing satellite towns, highlighting key areas with high growth potential.',
    author: 'James Njoroge',
    category: 'Investment',
    date: '2025-02-15',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'economic-indicators-property-market',
    title: 'Key Economic Indicators to Watch for Real Estate Investors in Kenya',
    excerpt: 'Understanding how GDP growth, inflation rates, and employment figures impact Kenya\'s property market and guide investment decisions.',
    author: 'Dr. Sarah Aketch',
    category: 'Market Analysis',
    date: '2025-02-20',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'commercial-real-estate-nairobi-trends',
    title: 'The Evolution of Commercial Real Estate in Nairobi: Post-Pandemic Shifts',
    excerpt: 'Analyzing how commercial real estate in Nairobi has transformed since the pandemic, including changes in demand, tenant preferences, and emerging opportunities.',
    author: 'Michael Chang',
    category: 'Commercial Real Estate',
    date: '2025-02-25',
    readTime: '14 min read',
    featured: true,
  },
  {
    id: 'green-building-kenya-sustainability',
    title: 'Building Green: The Rise of Sustainable Real Estate in Kenya',
    excerpt: 'Exploring the growing trend of green building practices in Kenya\'s real estate sector and the benefits of sustainable development for investors and the environment.',
    author: 'Eng. Patricia Odhiambo',
    category: 'Sustainability',
    date: '2025-03-01',
    readTime: '12 min read',
    featured: false,
  },
  {
    id: 'diaspora-investment-kenya-property',
    title: 'Diaspora Investment: Tapping into Kenya\'s Booming Property Market from Abroad',
    excerpt: 'A comprehensive guide for Kenyans in the diaspora looking to invest in property back home, covering legal requirements, financing options, and best practices.',
    author: 'Grace Wahu',
    category: 'Diaspora Investment',
    date: '2025-03-05',
    readTime: '15 min read',
    featured: true,
  },
  {
    id: 'nairobi-expressway-real-estate-impact',
    title: 'The Nairobi Expressway: Reshaping Real Estate Values Along Its Corridor',
    excerpt: 'Examining how the Nairobi Expressway has influenced property values, development patterns, and investment opportunities along its route.',
    author: 'John Mwaura',
    category: 'Infrastructure',
    date: '2025-03-10',
    readTime: '11 min read',
    featured: false,
  },
  {
    id: 'property-management-tips-kenya',
    title: 'Essential Property Management Tips for Landlords in Kenya',
    excerpt: 'Best practices for managing rental properties in Kenya',
    author: 'Samuel Kamau',
    category: 'Property Management',
    date: '2025-03-15',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'short-term-rentals-investment-kenya',
    title: 'Short-Term Rentals: Unlocking High Yields in Kenya\'s Tourism & Business Hubs',
    excerpt: 'Analyzing the potential of short-term rental investments in Kenya\'s key tourism destinations and business centers.',
    author: 'Lisa Njeri',
    category: 'Investment',
    date: '2025-03-20',
    readTime: '12 min read',
    featured: false,
  },
  {
    id: 'impact-inflation-property-kenya',
    title: 'The Impact of Inflation on Real Estate Investments in Kenya',
    excerpt: 'Understanding how inflation affects property values, rental incomes, and investment returns in Kenya\'s real estate market.',
    author: 'Dr. Emmanuel Ooko',
    category: 'Market Analysis',
    date: '2025-03-25',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'understanding-property-tax-kenya',
    title: 'Understanding Property Taxation in Kenya: A Comprehensive Guide',
    excerpt: 'A detailed guide to property taxes in Kenya, including rates, exemptions, and compliance requirements for property owners.',
    author: 'Tax Expert',
    category: 'Legal',
    date: '2025-03-30',
    readTime: '14 min read',
    featured: false,
  },
  {
    id: 'student-accommodation-investment',
    title: 'Student Accommodation in Kenya: A High-Yield Niche Investment',
    excerpt: 'Exploring investment opportunities in purpose-built student accommodation near universities in Kenya.',
    author: 'David Maina',
    category: 'Investment',
    date: '2025-04-01',
    readTime: '11 min read',
    featured: false,
  },
  {
    id: 'land-reforms-impact-kenya',
    title: 'Land Reforms in Kenya: Navigating the Changing Landscape of Ownership',
    excerpt: 'An overview of recent land policy reforms in Kenya and their implications for property owners and investors.',
    author: 'Legal Analyst',
    category: 'Policy',
    date: '2025-04-05',
    readTime: '13 min read',
    featured: false,
  },
  {
    id: 'urbanization-driving-property-demand',
    title: 'Urbanization: The Unstoppable Force Driving Kenya\'s Property Demand',
    excerpt: 'How Kenya\'s rapid urbanization is fueling demand for housing and commercial real estate across the country.',
    author: 'Urban Planner',
    category: 'Market Trends',
    date: '2025-04-10',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'real-estate-investment-trusts-kenya',
    title: 'Real Estate Investment Trusts (REITs) in Kenya: A Comprehensive Guide',
    excerpt: 'Understanding how REITs work in Kenya and their potential as an alternative investment vehicle for property investors.',
    author: 'Financial Analyst',
    category: 'Investment',
    date: '2025-04-15',
    readTime: '12 min read',
    featured: false,
  },
  {
    id: 'how-to-buy-commercial-property',
    title: 'How to Buy Commercial Property: A Step-by-Step Guide for Kenyan Investors',
    excerpt: 'A comprehensive guide to purchasing commercial real estate in Kenya, from property search to closing the deal.',
    author: 'Commercial Real Estate Expert',
    category: 'Commercial Real Estate',
    date: '2025-04-20',
    readTime: '16 min read',
    featured: true,
  },
  {
    id: 'property-valuation-software-kenya',
    title: 'Modern Property Valuation: Software and Tools for Kenyan Investors',
    excerpt: 'Exploring the latest valuation tools and software available for accurately assessing property values in Kenya.',
    author: 'Tech Analyst',
    category: 'Technology',
    date: '2025-04-25',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 'property-development-cost-estimation',
    title: 'Property Development Cost Estimation in Kenya: What You Need to Know',
    excerpt: 'A practical guide to estimating development costs for property projects in Kenya, including land, construction, and soft costs.',
    author: 'Developer',
    category: 'Development',
    date: '2025-04-28',
    readTime: '11 min read',
    featured: false,
  },
  {
    id: 'real-estate-technology-trends-kenya',
    title: 'PropTech Revolution: How Technology is Transforming Kenya\'s Real Estate Sector',
    excerpt: 'Exploring the impact of property technology (PropTech) on buying, selling, and managing real estate in Kenya.',
    author: 'Tech Journalist',
    category: 'Technology',
    date: '2025-05-01',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'apartment-investment-westlands-nairobi',
    title: 'Apartment Investment in Westlands, Nairobi: Opportunities and Considerations',
    excerpt: 'Analyzing the apartment investment landscape in Westlands, one of Nairobi\'s premium property markets.',
    author: 'Real Estate Analyst',
    category: 'Investment',
    date: '2025-05-05',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'property-security-systems-kenya',
    title: 'Modern Security Systems for Kenyan Properties: Protecting Your Investment',
    excerpt: 'A guide to implementing effective security systems for residential and commercial properties in Kenya.',
    author: 'Security Expert',
    category: 'Technology',
    date: '2025-05-08',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 'auction-glossary',
    title: 'Property Auction Glossary: Key Terms Every Kenyan Investor Should Know',
    excerpt: 'Essential terminology for navigating property auctions in Kenya, from reserve prices to hammer prices.',
    author: 'Auction Expert',
    category: 'Auctions',
    date: '2025-05-10',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 'real-estate-negotiation-strategies',
    title: 'Mastering Real Estate Negotiation: Strategies for Kenyan Buyers and Sellers',
    excerpt: 'Proven negotiation techniques for getting the best deals in Kenya\'s property market.',
    author: 'Negotiation Coach',
    category: 'Tips',
    date: '2025-05-12',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'holiday-homes-coastal-kenya',
    title: 'Holiday Homes on Kenya\'s Coast: A Viable Investment Option?',
    excerpt: 'Evaluating the investment potential of holiday homes in Mombasa, Diani, and other coastal destinations.',
    author: 'Coastal Property Expert',
    category: 'Investment',
    date: '2025-05-15',
    readTime: '11 min read',
    featured: false,
  },
  {
    id: 'kenya-mortgage-rates-outlook-2026',
    title: 'Kenya Mortgage Rates Outlook 2026: Trends and Predictions',
    excerpt: 'Expert analysis of mortgage rate trends and their implications for the Kenyan property market in 2026.',
    author: 'Banking Analyst',
    category: 'Mortgage & Finance',
    date: '2025-05-20',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'nairobi-office-space-outlook-2026',
    title: 'Nairobi Office Space Outlook 2026: Trends and Opportunities',
    excerpt: 'Comprehensive analysis of Nairobi\'s commercial office space market, including trends, vacancies, and investment opportunities.',
    author: 'Commercial Real Estate Analyst',
    category: 'Commercial Real Estate',
    date: '2025-05-25',
    readTime: '12 min read',
    featured: true,
  },
  {
    id: 'land-valuation-myths-kenya',
    title: 'Land Valuation Myths in Kenya: Separating Fact from Fiction',
    excerpt: 'Debunking common misconceptions about land valuation in Kenya and what buyers should really know.',
    author: 'Valuation Expert',
    category: 'Tips',
    date: '2025-05-28',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 'konza-technopolis-status-report-2026',
    title: 'Konza Technopolis Status Report 2026: Real Estate Implications',
    excerpt: 'An update on the Konza Technopolis development and its potential impact on surrounding property values.',
    author: 'Urban Analyst',
    category: 'Development',
    date: '2025-06-01',
    readTime: '11 min read',
    featured: false,
  },
  {
    id: 'diani-watamu-coastal-boom-2026',
    title: 'Coastal Real Estate Boom: Diani and Watamu Lead the Way in 2026',
    excerpt: 'Exploring the rapid growth of coastal real estate markets in Diani and Watamu.',
    author: 'Coastal Property Expert',
    category: 'Market Trends',
    date: '2025-06-05',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'kenya-property-tax-guide-2026',
    title: 'Kenya Property Tax Guide 2026: Updates and Compliance',
    excerpt: 'Latest updates on property taxation in Kenya and essential compliance tips for property owners.',
    author: 'Tax Consultant',
    category: 'Legal',
    date: '2025-06-08',
    readTime: '12 min read',
    featured: false,
  },
  {
    id: 'ardhisasa-property-transfer-guide-2026',
    title: 'Ardhisasa: A Step-by-Step Guide to Digital Property Transfer in Kenya',
    excerpt: 'Navigating Kenya\'s digital land transaction system, Ardhisasa, for seamless property transfers.',
    author: 'Land Registrar',
    category: 'Technology',
    date: '2025-06-10',
    readTime: '14 min read',
    featured: true,
  },
  {
    id: 'cost-to-build-3-bedroom-house-kenya-2026',
    title: 'Cost to Build a 3-Bedroom House in Kenya: 2026 Estimates',
    excerpt: 'Detailed cost breakdown for constructing a 3-bedroom house in different locations across Kenya.',
    author: 'Construction Cost Expert',
    category: 'Development',
    date: '2025-06-12',
    readTime: '11 min read',
    featured: false,
  },
  {
    id: 'sectional-properties-act-2026-impact',
    title: 'Sectional Properties Act 2026: What Property Buyers Need to Know',
    excerpt: 'Understanding the implications of the Sectional Properties Act for apartment buyers in Kenya.',
    author: 'Legal Expert',
    category: 'Legal',
    date: '2025-06-15',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'real-estate-crowdfunding-kenya-2026',
    title: 'Real Estate Crowdfunding in Kenya: Opportunities and Risks',
    excerpt: 'Exploring the emerging trend of real estate crowdfunding platforms in Kenya.',
    author: 'Fintech Analyst',
    category: 'Investment',
    date: '2025-06-18',
    readTime: '12 min read',
    featured: false,
  },
  {
    id: 'nakuru-kisumu-investment-outlook-2026',
    title: 'Investment Outlook for Nakuru and Kisumu: Kenya\'s Growing Secondary Cities',
    excerpt: 'Analyzing real estate investment opportunities in Kenya\'s major secondary cities.',
    author: 'Regional Analyst',
    category: 'Market Analysis',
    date: '2025-06-20',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'off-grid-real-estate-kenya-2026',
    title: 'Off-Grid Living: Solar and Borehole Solutions for Kenyan Properties',
    excerpt: 'How off-grid solutions are influencing property development and values in Kenya.',
    author: 'Sustainability Expert',
    category: 'Technology',
    date: '2025-06-22',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'land-surveying-drone-tech-kenya',
    title: 'Modern Land Surveying: Drone Technology in Kenyan Real Estate',
    excerpt: 'How drone technology is revolutionizing land surveying in Kenya.',
    author: 'Surveying Expert',
    category: 'Technology',
    date: '2025-06-25',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 'student-housing-investment-kenya-2026',
    title: 'Student Housing Investment: The Acorn Effect in Kenya',
    excerpt: 'How the Acorn model is transforming student housing investments in Kenya.',
    author: 'Investment Analyst',
    category: 'Investment',
    date: '2025-06-28',
    readTime: '11 min read',
    featured: false,
  },
  {
    id: 'retirement-homes-investment-kenya-2026',
    title: 'Retirement Homes: An Emerging Investment Niche in Kenya',
    excerpt: 'Exploring investment opportunities in retirement and senior living communities in Kenya.',
    author: 'Healthcare Real Estate Analyst',
    category: 'Investment',
    date: '2025-07-01',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'legal-framework-fractional-property-kenya',
    title: 'Fractional Property Ownership in Kenya: Legal Framework and Considerations',
    excerpt: 'Understanding the legal aspects of fractional property ownership in Kenya.',
    author: 'Legal Consultant',
    category: 'Legal',
    date: '2025-07-05',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'industrial-warehousing-demand-kenya-2026',
    title: 'Industrial Warehousing Demand in Kenya: 2026 Outlook',
    excerpt: 'Analyzing the growing demand for industrial and warehouse spaces in Kenya.',
    author: 'Industrial Real Estate Analyst',
    category: 'Commercial Real Estate',
    date: '2025-07-08',
    readTime: '12 min read',
    featured: false,
  },
  {
    id: 'blockchain-land-titles-kenya-future',
    title: 'Blockchain for Land Titles in Kenya: Future Prospects',
    excerpt: 'Exploring the potential of blockchain technology for secure land titling in Kenya.',
    author: 'Blockchain Expert',
    category: 'Technology',
    date: '2025-07-10',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'airbnb-vs-longterm-rental-math-2026',
    title: 'Airbnb vs Long-Term Rentals: The Math for Kenyan Investors in 2026',
    excerpt: 'Comparing the financial returns of short-term vacation rentals versus traditional rentals.',
    author: 'Investment Analyst',
    category: 'Investment',
    date: '2025-07-12',
    readTime: '11 min read',
    featured: false,
  },
  {
    id: 'nairobi-cbd-office-to-residential-conversion',
    title: 'The CBD Office-to-Residential Conversion Trend in Nairobi',
    excerpt: 'How converting commercial offices to residential use is reshaping Nairobi\'s CBD.',
    author: 'Urban Development Expert',
    category: 'Development',
    date: '2025-07-15',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'property-insurance-kenya-guide-2026',
    title: 'Property Insurance in Kenya: A Complete Guide for 2026',
    excerpt: 'Comprehensive guide to property insurance options and coverage in Kenya.',
    author: 'Insurance Expert',
    category: 'Risk Management',
    date: '2025-07-18',
    readTime: '12 min read',
    featured: false,
  },
  {
    id: 'land-banking-satellite-towns-2026',
    title: 'Land Banking in Kenya\'s Satellite Towns: Strategy and Returns',
    excerpt: 'Investment strategy analysis for land banking in Kenya\'s growing satellite towns.',
    author: 'Investment Strategist',
    category: 'Investment',
    date: '2025-07-20',
    readTime: '11 min read',
    featured: false,
  },
  {
    id: 'green-mortgages-sustainability-kenya-2026',
    title: 'Green Mortgages: Sustainability Incentives in Kenya\'s 2026 Market',
    excerpt: 'How green mortgage products are promoting sustainable real estate in Kenya.',
    author: 'Banking Analyst',
    category: 'Mortgage & Finance',
    date: '2025-07-22',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'ai-property-valuers-kenya-2026',
    title: 'AI-Powered Property Valuations: The Future in Kenya',
    excerpt: 'How artificial intelligence is transforming property valuation methods in Kenya.',
    author: 'PropTech Analyst',
    category: 'Technology',
    date: '2025-07-25',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'tigoni-real-estate-boom-2026',
    title: 'Tigoni Real Estate Boom: Nairobi\'s Suburban Growth Story',
    excerpt: 'Analyzing the rapid growth and investment potential of Tigoni\'s real estate market.',
    author: 'Regional Analyst',
    category: 'Market Trends',
    date: '2025-07-28',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'construction-vat-impact-kenya-2026',
    title: 'Construction VAT Changes: Impact on Kenyan Real Estate in 2026',
    excerpt: 'Analyzing how recent VAT changes affect construction costs and property prices.',
    author: 'Tax Analyst',
    category: 'Taxation',
    date: '2025-07-30',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'bamboo-construction-materials-kenya-2026',
    title: 'Bamboo as Construction Material: Sustainable Building in Kenya',
    excerpt: 'Exploring the use of bamboo in sustainable real estate development in Kenya.',
    author: 'Sustainable Architecture Expert',
    category: 'Sustainability',
    date: '2025-08-01',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 'digital-asset-tax-real-estate-tokenization',
    title: 'Digital Asset Tax and Real Estate Tokenization in Kenya',
    excerpt: 'Understanding the tax implications of property tokenization and digital assets.',
    author: 'Tax Expert',
    category: 'Taxation',
    date: '2025-08-05',
    readTime: '11 min read',
    featured: false,
  },
  {
    id: 'nakuru-real-estate-growth-2026',
    title: 'Nakuru\'s City Status Impact on Real Estate Growth',
    excerpt: 'How Nakuru\'s elevation to city status is affecting property markets.',
    author: 'Regional Analyst',
    category: 'Market Analysis',
    date: '2025-08-08',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'kenya-national-building-code-2026-summary',
    title: 'Kenya National Building Code 2026: Summary and Compliance',
    excerpt: 'Key updates from the revised Kenya National Building Code and compliance requirements.',
    author: 'Building Inspector',
    category: 'Legal',
    date: '2025-08-10',
    readTime: '12 min read',
    featured: false,
  },
  {
    id: 'national-property-tax-kenya-2026',
    title: 'The 0.3% National Property Tax: What You Need to Know',
    excerpt: 'Understanding Kenya\'s national property tax and its implications for property owners.',
    author: 'Tax Consultant',
    category: 'Taxation',
    date: '2025-08-12',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'syokimau-commuter-rail-real-estate-impact',
    title: 'Syokimau Commuter Rail: Driving Real Estate Development',
    excerpt: 'How the Syokimau commuter rail line is spurring real estate growth in the area.',
    author: 'Infrastructure Analyst',
    category: 'Infrastructure',
    date: '2025-08-15',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: '3d-printed-houses-kenya-2026-update',
    title: '3D Printed Houses in Kenya: 2026 Update',
    excerpt: 'The latest developments in 3D printed housing technology in Kenya.',
    author: 'Construction Technology Expert',
    category: 'Technology',
    date: '2025-08-18',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'kilifi-real-estate-investment-guide-2026',
    title: 'Kilifi Real Estate Investment Guide 2026',
    excerpt: 'Comprehensive investment guide for Kilifi\'s growing real estate market.',
    author: 'Coastal Property Expert',
    category: 'Investment',
    date: '2025-08-20',
    readTime: '11 min read',
    featured: false,
  },
  {
    id: 'crowdfunding-legal-due-diligence-kenya',
    title: 'Real Estate Crowdfunding: Legal Due Diligence for Kenyan Investors',
    excerpt: 'Essential legal checks before investing in property crowdfunding platforms.',
    author: 'Legal Expert',
    category: 'Legal',
    date: '2025-08-22',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'hempcrete-sustainable-building-materials-kenya',
    title: 'Hempcrete: Sustainable Building for Kenyan Real Estate',
    excerpt: 'Exploring hempcrete as an eco-friendly building material for Kenya.',
    author: 'Sustainable Building Expert',
    category: 'Sustainability',
    date: '2025-08-25',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 'upper-hill-vs-westlands-office-market-2026',
    title: 'Upper Hill vs. Westlands: Nairobi\'s Premium Office Market Comparison',
    excerpt: 'Comparing investment potential of Upper Hill and Westlands office markets.',
    author: 'Commercial Real Estate Analyst',
    category: 'Commercial Real Estate',
    date: '2025-08-28',
    readTime: '12 min read',
    featured: false,
  },
  {
    id: 'kenya-reit-market-growth-2026',
    title: 'The Return of REITs: Kenya\'s REIT Market Growth 2026',
    excerpt: 'Analyzing the resurgence of REIT investments in Kenya\'s property market.',
    author: 'Financial Analyst',
    category: 'Investment',
    date: '2025-08-30',
    readTime: '11 min read',
    featured: false,
  },
  {
    id: 'expat-rental-market-nairobi-2026',
    title: 'The Expat Rental Market in Nairobi: Trends and Opportunities',
    excerpt: 'Analyzing the demand for rental properties from expatriates in Nairobi.',
    author: 'Rental Market Analyst',
    category: 'Rental Market',
    date: '2025-09-01',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'eldoret-residential-real-estate-2026',
    title: 'Eldoret\'s Champion Residential Boom: Investment Analysis',
    excerpt: 'Exploring the rapid growth of Eldoret\'s residential real estate market.',
    author: 'Regional Analyst',
    category: 'Market Analysis',
    date: '2025-09-05',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'land-fraud-prevention-kenya-2026',
    title: 'Avoiding Title Deed Scams in Kenya: 2026 Guide',
    excerpt: 'Essential tips for protecting yourself from land fraud in Kenya.',
    author: 'Legal Expert',
    category: 'Risk Management',
    date: '2025-09-08',
    readTime: '11 min read',
    featured: true,
  },
  {
    id: 'kikuyu-satellite-town-investment-2026',
    title: 'Mixed-Use Pods: The Kikuyu Model for Satellite Town Development',
    excerpt: 'Analyzing the mixed-use development model in Kikuyu satellite town.',
    author: 'Urban Planner',
    category: 'Development',
    date: '2025-09-10',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'smart-irrigation-landscaping-kenya-2026',
    title: 'Smart Irrigation Systems for Kenyan Properties',
    excerpt: 'How smart irrigation is adding value to residential properties in Kenya.',
    author: 'Landscaping Expert',
    category: 'Technology',
    date: '2025-09-12',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 'top-real-estate-agents-kenya-2026',
    title: 'Top Real Estate Agents in Kenya: 2026 Rankings',
    excerpt: 'Guide to finding and working with top real estate agents in Kenya.',
    author: 'Industry Reporter',
    category: 'Tips',
    date: '2025-09-15',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'nanyuki-eco-resort-boom-2026',
    title: 'Nanyuki\'s Eco-Resort Boom: Investment Opportunities',
    excerpt: 'Exploring investment potential in Nanyuki\'s growing eco-tourism real estate.',
    author: 'Tourism Property Expert',
    category: 'Investment',
    date: '2025-09-18',
    readTime: '11 min read',
    featured: false,
  },
  {
    id: 'nairobi-railway-city-project-update-2026',
    title: 'Nairobi Railway City Project: 2026 Status Update',
    excerpt: 'Latest developments in the Nairobi Railway City smart city project.',
    author: 'Project Analyst',
    category: 'Development',
    date: '2025-09-20',
    readTime: '12 min read',
    featured: false,
  },
  {
    id: 'kenya-real-estate-market-predictions-2030',
    title: 'Kenya Real Estate 2030: Market Predictions and Investment Strategy',
    excerpt: 'Long-term projections for Kenya\'s real estate market through 2030.',
    author: 'Market Analyst',
    category: 'Market Analysis',
    date: '2025-09-22',
    readTime: '14 min read',
    featured: true,
  },
  {
    id: 'diani-digital-nomad-visa-impact',
    title: 'Digital Nomads in Diani: The New Real Estate Market',
    excerpt: 'How Kenya\'s digital nomad visa is affecting Diani\'s property market.',
    author: 'Expat Property Analyst',
    category: 'Market Trends',
    date: '2025-09-25',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'common-land-valuation-mistakes-kenya',
    title: 'Common Land Valuation Mistakes in Kenya: How to Avoid Them',
    excerpt: 'Pitfalls to avoid when valuing land in Kenya\'s property market.',
    author: 'Valuation Expert',
    category: 'Tips',
    date: '2025-09-28',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'tatu-city-living-standards-2026',
    title: 'Tatu City: Living Standards and Real Estate Values in 2026',
    excerpt: 'Analyzing living standards and property values in Tatu City.',
    author: 'New City Analyst',
    category: 'Development',
    date: '2025-09-30',
    readTime: '11 min read',
    featured: false,
  },
  {
    id: 'luxury-prefab-homes-naivasha-2026',
    title: 'Luxury Prefabricated Homes: The Naivasha Market in 2026',
    excerpt: 'Growth of luxury prefabricated homes in Naivasha\'s property market.',
    author: 'Construction Analyst',
    category: 'Development',
    date: '2025-10-02',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'small-commercial-retail-trends-kenya-2026',
    title: 'Small-Scale Commercial: The "Duka" Model for Kenyan Investors',
    excerpt: 'Investment potential in small-scale commercial retail properties in Kenya.',
    author: 'Retail Property Analyst',
    category: 'Commercial Real Estate',
    date: '2025-10-05',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'eldoret-student-housing-market-2026',
    title: 'Student Housing Market in Eldoret: Investment Outlook',
    excerpt: 'Growing opportunities in Eldoret\'s student housing market.',
    author: 'Education Property Analyst',
    category: 'Investment',
    date: '2025-10-08',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'machakos-gated-community-growth-2026',
    title: 'Gated Community Growth in Machakos: Investment Analysis',
    excerpt: 'Analyzing the rise of gated communities in Machakos county.',
    author: 'Regional Analyst',
    category: 'Market Trends',
    date: '2025-10-10',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'real-estate-photography-tips-kenya-2026',
    title: 'Real Estate Photography: Tips for Kenyan Properties in 2026',
    excerpt: 'Professional photography tips for selling or renting Kenyan properties.',
    author: 'Real Estate Photographer',
    category: 'Tips',
    date: '2025-10-12',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 'digital-tenant-management-apps-kenya',
    title: 'Managing Tenants Digitally: Best Apps for Kenyan Landlords',
    excerpt: 'Top digital tools for efficient tenant management in Kenya.',
    author: 'PropTech Expert',
    category: 'Technology',
    date: '2025-10-15',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'kenya-real-estate-market-summary-2026',
    title: 'Kenya Real Estate Market Summary 2026: The Final Word',
    author: 'Murivest Research Team',
    category: 'Market Analysis',
    date: '2025-10-20',
    readTime: '15 min read',
    featured: true,
    excerpt: 'Comprehensive year-end review of Kenya\'s real estate market performance.',
  },
  {
    id: 'duplex-triplex-fourplex',
    title: 'Duplex vs. Triplex vs. Fourplex for Investors',
    excerpt: 'Compare financing, management requirements, and risk factors across 2-4 unit properties to choose the right investment for your goals.',
    author: 'LoopNet Team',
    category: 'Investing',
    date: 'October 15, 2025',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: '3d-printed-homes-kenya-kilifi',
    title: '3D Printed Homes: The Kilifi Success Story of 2026',
    excerpt: 'How 14 Trees printed 52 homes in record time at Mvule Gardens.',
    author: 'Paul Kamau',
    category: 'Tech',
    date: '2025-11-20',
    readTime: '14 min read',
    featured: true,
  },
  {
    id: '6TypesResidentialBuildingsKenyaPerfectFit',
    title: '6 Types of Residential Buildings in Kenya: Find the Perfect Fit',
    excerpt: 'A practical guide outlining the various types of residential properties available in Kenya, helping prospective homeowners and investors understand their options and make informed decisions.',
    author: 'Michael Okello',
    category: 'Home Buying Guide',
    date: '2025-07-10',
    readTime: '9 min read',
  },
  {
    id: 'adverse-possession-legal-guide',
    title: 'Avoiding',
    excerpt: 'Lessons from the Waweru v Njoroge [2025] case on protecting your land.',
    author: 'Paul Kamau',
    category: 'Legal',
    date: '2026-01-09',
    readTime: '15 min read',
  },
  {
    id: 'ai-property-management-2026',
    title: 'How AI is Managing Nairobi’s Apartments in 2026',
    excerpt: 'From automated rent reminders to predictive maintenance for busy landlords.',
    author: 'Elizabeth Costabir',
    category: 'Tech',
    date: '2026-01-25',
    readTime: '12 min read',
  },
  {
    id: 'bestGrassTypesToTransformYourLawnAndCreateADreamGarden',
    title: 'Best Grass Types to Transform Your Lawn and Create a Dream Garden',
    excerpt: 'A practical guide for Kenyan homeowners on selecting the ideal grass types for their lawns, considering climate, maintenance, and aesthetic appeal to achieve a stunning garden.',
    author: 'Lillian Owino',
    category: 'Home Improvement',
    date: '2025-08-12',
    readTime: '8 min read',
  },
  {
    id: 'bonus-depreciation',
    title: 'Bonus Depreciation: A Tax Secret for Commercial Owners',
    excerpt: 'How to use accelerated depreciation to lower your taxable income in the first years of ownership.',
    author: 'Paul Kamau',
    category: 'Finance',
    date: '2025-11-25',
    readTime: '9 min read',
  },
  {
    id: 'bpoBoomCommercialDevelopersRethinkOfficeSpaces',
    title: 'BPO Boom: Why Commercial Developers Must Rethink Office Spaces',
    excerpt: 'Exploring how the flourishing Business Process Outsourcing (BPO) sector in Kenya is reshaping demand for commercial office spaces, urging developers to innovate in design and functionality.',
    author: 'Catherine Chege',
    category: 'Commercial Real Estate',
    date: '2025-09-10',
    readTime: '9 min read',
  },
  {
    id: 'building-a-property-pension',
    title: 'The Property Pension: How to Retire on Rental Income by 55',
    excerpt: 'Ditching the NSSF for a portfolio that pays you every month.',
    author: 'Paul Kamau',
    category: 'Investment',
    date: '2026-01-13',
    readTime: '15 min read',
  },
  {
    id: 'buy-now-investors-guide',
    title: 'Buy Now: Why Late 2025 is the Window for Kenyan Real Estate',
    excerpt: 'Analyzing market cycles and the impending price surge due to rising construction costs.',
    author: 'Elizabeth Costabir',
    category: 'Investment',
    date: '2025-11-24',
    readTime: '9 min read',
  },
  {
    id: 'buy-to-let-ruaka-analysis',
    title: 'Is Ruaka Still a Good Buy in 2026? A Market Deep Dive',
    excerpt: 'Analyzing the rental saturation vs. the infrastructure demand.',
    author: 'Paul Kamau',
    category: 'Market Analysis',
    date: '2026-01-05',
    readTime: '13 min read',
  },
  {
    id: 'buying-apartments-nairobi-step-by-step',
    title: 'Buying an Apartment in Nairobi: The Step-by-Step Guide',
    excerpt: 'From the Letter of Offer to the handover of the Sectional Title.',
    author: 'Paul Kamau',
    category: 'Residential',
    date: '2025-12-28',
    readTime: '14 min read',
  },
  {
    id: 'capital-gains-tax-optimization-2026',
    title: 'CGT Optimization: Legal Ways to Lower Your Tax on Sale',
    excerpt: 'Understanding the 15% Capital Gains Tax and how to report expenses.',
    author: 'Elizabeth Costabir',
    category: 'Finance',
    date: '2025-11-15',
    readTime: '13 min read',
  },
  {
    id: 'cash-on-cash-return',
    title: 'Cash-on-Cash Return: The Real Metric for Kenyan Investors',
    excerpt: 'Why this formula is more important than simple yield when you are using bank financing.',
    author: 'Paul Kamau',
    category: 'Finance',
    date: '2025-11-27',
    readTime: '8 min read',
  },
  {
    id: 'celebratingADecadeOfExcellenceElizabethCostabirRealEstateJourney',
    title: 'Celebrating a Decade of Excellence: Elizabeth Costabir’s Real Estate Journey',
    excerpt: 'A retrospective look at Elizabeth Costabir',
    author: 'Editorial Team',
    category: 'Industry Leaders',
    date: '2025-10-10',
    readTime: '10 min read',
  },
  {
    id: 'ceoElizabethLizzieCostabirFeaturedOnNtvWomenInBusiness',
    title: 'CEO Elizabeth ‘Lizzie’ Costabir Featured on NTV’s ‘Women in Business’',
    excerpt: 'A spotlight on Elizabeth Costabir',
    author: 'Editor',
    category: 'Industry Leaders',
    date: '2025-10-05',
    readTime: '8 min read',
  },
  {
    id: 'co-working-hubs-in-residentials',
    title: 'The Hybrid Home: Co-working Hubs as the New Amenity',
    excerpt: 'Why 2026 apartments without',
    author: 'Elizabeth Costabir',
    category: 'Residential',
    date: '2025-12-01',
    readTime: '11 min read',
  },
  {
    id: 'commercial-lease-trends-nairobi-2026',
    title: 'Grade-A Office Trends: ESG and Flexible Leasing',
    excerpt: 'Why multinational tenants are demanding green-certified buildings in 2026.',
    author: 'Elizabeth Costabir',
    category: 'Commercial',
    date: '2025-12-20',
    readTime: '12 min read',
  },
  {
    id: 'commercial-real-estate-terms',
    title: 'The Ultimate Glossary: Commercial Real Estate (CRE) Terms',
    excerpt: 'Demystifying the jargon of commercial real estate to help you negotiate better deals.',
    author: 'Elizabeth Costabir',
    category: 'Education',
    date: '2025-11-29',
    readTime: '15 min read',
  },
  {
    id: 'couldFractionalOwnershipBeKenyaNextRealEstateTrend',
    title: 'Could Fractional Ownership Be Kenya’s Next Real Estate Trend?',
    excerpt: 'An insightful look into fractional ownership as an emerging investment model in Kenya',
    author: 'Ruth Adhiambo',
    category: 'Investment Trends',
    date: '2025-09-20',
    readTime: '10 min read',
    featured: true,
  },
  {
    id: 'csWahomeHousingLevyFundsConstructionHomeOwnershipLags',
    title: 'CS Wahome: Housing Levy Funds Construction, But Home Ownership Lags',
    excerpt: 'An exploration of the Housing Levy',
    author: 'Aisha Khan',
    category: 'Government Policy',
    date: '2025-07-22',
    readTime: '11 min read',
  },
  {
    id: 'debt-yield-cre',
    title: 'What is Debt Yield and Why Do Banks Care?',
    excerpt: 'Understanding the metric that Kenyan banks use to gauge risk in commercial lending.',
    author: 'Paul Kamau',
    category: 'Finance',
    date: '2025-11-23',
    readTime: '10 min read',
  },
  {
    id: 'detached-homes-vs-apartments-2026',
    title: 'The Great Move Out: Why Detached Homes are Winning in 2026',
    excerpt: 'Suburban land prices are up 6.3% as families flee high-rise density.',
    author: 'Elizabeth Costabir',
    category: 'Residential',
    date: '2026-01-19',
    readTime: '11 min read',
  },
  {
    id: 'diaspora-investment-checklist-2026',
    title: 'The 2026 Diaspora Investment Checklist: Buying Safely',
    excerpt: 'A 10-point guide to utilizing Ardhisasa and video due diligence from abroad.',
    author: 'Elizabeth Costabir',
    category: 'Investment',
    date: '2025-12-30',
    readTime: '15 min read',
  },
  {
    id: 'diaspora-investment-strategy-2026',
    title: 'Beyond Remittances: The 2026 Diaspora Real Estate Strategy',
    excerpt: 'How the new State Department framework protects overseas investors.',
    author: 'Paul Kamau',
    category: 'Investment',
    date: '2026-01-10',
    readTime: '16 min read',
    featured: true,
  },
  {
    id: 'didKenyaStateHouseNeedMakeover',
    title: 'Did Kenya’s State House Need a Makeover?',
    excerpt: 'A nuanced look at the recent renovations and expenditures on Kenya',
    author: 'Kiplagat Ruto',
    category: 'Current Affairs',
    date: '2025-06-10',
    readTime: '9 min read',
  },
  {
    id: 'discounted-cash-flow',
    title: 'Discounted Cash Flow (DCF): Predicting Future Wealth',
    excerpt: 'Using the DCF method to value a property based on its future potential earnings.',
    author: 'Paul Kamau',
    category: 'Finance',
    date: '2025-11-26',
    readTime: '13 min read',
  },
  {
    id: 'doIReallyNeedARealEstateAgentWhenBuyingAHouse',
    title: 'Do I Really Need a Real Estate Agent When Buying a House?',
    excerpt: 'A balanced discussion on the role of real estate agents in Kenya, weighing the pros and cons of engaging an agent versus navigating the property market independently.',
    author: 'Benard Kiprotich',
    category: 'Buying Guide',
    date: '2025-06-18',
    readTime: '9 min read',
  },
  {
    id: 'dongo-kundu-sez-investment',
    title: 'Dongo Kundu SEZ: The Coast’s New Industrial Frontier',
    excerpt: 'Why the signing of new lease agreements is sparking a Mombasa land rush.',
    author: 'Elizabeth Costabir',
    category: 'Market Analysis',
    date: '2025-12-29',
    readTime: '11 min read',
  },
  {
    id: 'duplex-vs-triplex-vs-fourplex',
    title: 'Duplex vs. Triplex vs. Fourplex: Scaling Your Rental Portfolio',
    excerpt: 'Comparing the management complexity and cash flow potential of small multi-family units.',
    author: 'Elizabeth Costabir',
    category: 'Residential',
    date: '2025-11-23',
    readTime: '12 min read',
  },
  {
    id: 'eco-concrete-sustainable-building-kenya',
    title: 'Carbon-Negative Construction: The Rise of Eco-Concrete in 2026',
    excerpt: 'How recycled aggregates and hempcrete are reducing building costs.',
    author: 'Elizabeth Costabir',
    category: 'Construction',
    date: '2025-12-26',
    readTime: '12 min read',
  },
  {
    id: 'eldoret-real-estate-market-2026',
    title: 'Eldoret: The 2026 Real Estate Boom in the',
    excerpt: 'Why the elevation to City status is driving a 20% land hike.',
    author: 'Elizabeth Costabir',
    category: 'Market Analysis',
    date: '2025-12-25',
    readTime: '11 min read',
  },
  {
    id: 'environmentalOversightHaltsLangataHousingProject',
    title: 'Environmental Oversight Halts Lang’ata Housing Project',
    excerpt: 'Examining the reasons behind the suspension of a major housing project in Lang’ata due to environmental concerns, underscoring the growing importance of sustainability in real estate development.',
    author: 'Sophia Nzomo',
    category: 'Sustainability',
    date: '2025-08-15',
    readTime: '10 min read',
  },
  {
    id: 'eviction-laws-tenant-disputes-kenya',
    title: 'Landlord-Tenant Law: Navigating Disputes in 2026',
    excerpt: 'The legal way to handle non-payment without the',
    author: 'Elizabeth Costabir',
    category: 'Legal',
    date: '2025-12-10',
    readTime: '15 min read',
  },
  {
    id: 'exit-cap-rates',
    title: 'The Exit Cap Rate: Planning Your Property Sale',
    excerpt: 'How to project what your property will be worth 10 years from now when you decide to sell.',
    author: 'Elizabeth Costabir',
    category: 'Finance',
    date: '2025-11-25',
    readTime: '10 min read',
  },
  {
    id: 'expressway-economic-impact-2026',
    title: 'The Expressway Effect: 4 Years On, Who Won?',
    excerpt: 'How the Nairobi Expressway reshaped land values from Mlolongo to Westlands.',
    author: 'Paul Kamau',
    category: 'Market Analysis',
    date: '2026-01-01',
    readTime: '14 min read',
    featured: true,
  },
  {
    id: 'farming-vs-housing-outskirts-kenya',
    title: 'Farming vs. Housing: The Land Use Battle in 2026',
    excerpt: 'Why zoning changes in Kiambu and Kajiado are creating instant millionaires.',
    author: 'Elizabeth Costabir',
    category: 'Market Analysis',
    date: '2025-12-20',
    readTime: '12 min read',
  },
  {
    id: 'feng-shui-real-estate-trends-kenya',
    title: 'Harmonious Homes: Why 2026 Luxury Buyers Hire Feng Shui Consultants',
    excerpt: 'The psychological and market impact of',
    author: 'Elizabeth Costabir',
    category: 'Lifestyle',
    date: '2026-01-01',
    readTime: '10 min read',
  },
  {
    id: 'fractional-land-ownership-explained',
    title: 'Land Banking for Everyone: The Rise of Fractional Ownership',
    excerpt: 'Own 1/10th of an acre in a gated community via digital certificates.',
    author: 'Paul Kamau',
    category: 'Investment',
    date: '2026-01-04',
    readTime: '12 min read',
  },
  {
    id: 'green-building-incentives-kenya',
    title: 'Going Green: Tax Incentives and Higher ROI for Developers',
    excerpt: 'How to save on operational costs through sustainable architecture.',
    author: 'Elizabeth Costabir',
    category: 'Construction',
    date: '2025-12-10',
    readTime: '13 min read',
  },
  {
    id: 'green-building-standard-2026',
    title: 'Green is the New Standard: Why 2026 Buyers Demand EDGE',
    excerpt: 'Sustainability is no longer a luxury; it is a requirement for high rental occupancy.',
    author: 'Elizabeth Costabir',
    category: 'Construction',
    date: '2026-01-03',
    readTime: '14 min read',
  },
  {
    id: 'gross-rent-multiplier',
    title: 'Gross Rent Multiplier (GRM): Screening Deals Quickly',
    excerpt: 'How to use GRM to compare properties across different Nairobi neighborhoods.',
    author: 'Elizabeth Costabir',
    category: 'Finance',
    date: '2025-11-23',
    readTime: '7 min read',
  },
  {
    id: 'high-yield-airbnb-locations-nairobi-2026',
    title: 'Airbnb 2026: The Top 5 High-Yield Spots in Nairobi',
    excerpt: 'Why Upper Hill and Lavington are outperforming Kilimani this year.',
    author: 'Paul Kamau',
    category: 'Investment',
    date: '2025-12-22',
    readTime: '15 min read',
    featured: true,
  },
  {
    id: 'hotel-innovation',
    title: 'Hotel Innovation: Redefining Hospitality Real Estate in Kenya',
    excerpt: 'Exploring how AI and contactless technology are transforming Kenyan hotels into high-yield assets.',
    author: 'Elizabeth Costabir',
    category: 'Innovation',
    date: '2025-11-27',
    readTime: '11 min read',
  },
  {
    id: 'how-to-buy-a-duplex',
    title: 'How to Buy a Duplex: The',
    excerpt: 'Why duplexes are becoming the preferred entry point for first-time Kenyan investors.',
    author: 'Paul Kamau',
    category: 'Residential',
    date: '2025-11-24',
    readTime: '11 min read',
  },
  {
    id: 'how-to-buy-a-hotel',
    title: 'How to Buy a Hotel: An Investor’s Roadmap',
    excerpt: 'From feasibility studies to tourism licenses, learn the steps to owning hospitality property.',
    author: 'Elizabeth Costabir',
    category: 'Commercial',
    date: '2025-11-26',
    readTime: '15 min read',
    featured: true,
  },
  {
    id: 'how-to-buy-a-retail-property',
    title: 'How to Buy a Retail Property: A Strategic Guide for Investors',
    excerpt: 'An essential guide for investors looking to enter the retail real estate market in Kenya, focusing on location, footfall, and tenant mix.',
    author: 'Elizabeth Costabir',
    category: 'Commercial',
    date: '2025-12-01',
    readTime: '12 min read',
    featured: true,
  },
  {
    id: 'howToBuildCostEffectivelyWithoutCompromisingQuality',
    title: 'How to Build Cost-Effectively Without Compromising on Quality',
    excerpt: 'Practical strategies and tips for developers and individual builders in Kenya to reduce construction costs while maintaining high standards of quality and durability.',
    author: 'Collins Kipkemoi',
    category: 'Construction',
    date: '2025-09-15',
    readTime: '12 min read',
  },
  {
    id: 'howUrbanisationRedefiningHousingKenya',
    title: 'How Urbanisation is Redefining Housing in Kenya',
    excerpt: 'An examination of how rapid urbanization is profoundly impacting housing patterns and demand in Kenya, leading to innovative solutions and concentrated development in urban centers.',
    author: 'Joyce Akinyi',
    category: 'Urban Planning',
    date: '2025-08-25',
    readTime: '11 min read',
  },
  {
    id: 'identifying-real-estate-market-cycles-2026',
    title: 'Market Cycles: Are We in a Boom or a Bubble in 2026?',
    excerpt: 'Using the 18-year property cycle to time your entry and exit.',
    author: 'Paul Kamau',
    category: 'Market Analysis',
    date: '2025-11-01',
    readTime: '16 min read',
    featured: true,
  },
  {
    id: 'industrial-area-to-tatu-city-migration',
    title: 'The Great Industrial Migration: From Industrial Area to Tatu City',
    excerpt: 'Why 100+ firms have moved to SEZs for 95% renewable energy and tax breaks.',
    author: 'Paul Kamau',
    category: 'Commercial',
    date: '2026-01-16',
    readTime: '13 min read',
  },
  {
    id: 'industrial-warehousing-boom-2026',
    title: 'The Warehouse Goldmine: Grade A Industrial Real Estate in 2026',
    excerpt: 'Why every tap on a smartphone is filling up Kenya’s logistics hubs.',
    author: 'Elizabeth Costabir',
    category: 'Commercial',
    date: '2026-01-11',
    readTime: '11 min read',
  },
  {
    id: 'interestRatesAndHowTheyImpactYourMortgage',
    title: 'Interest Rates and How They Impact Your Mortgage',
    excerpt: 'A comprehensive guide explaining the intricacies of interest rates in Kenya and their direct influence on mortgage payments, affordability, and the overall real estate market.',
    author: 'Monica Wanjiru',
    category: 'Mortgage & Finance',
    date: '2025-08-08',
    readTime: '10 min read',
  },
  {
    id: 'interior-design-rental-yield-hacks',
    title: 'Interior Hacks to Boost Your Rental Income by 15%',
    excerpt: 'How minor aesthetic upgrades lead to major rental premiums in 2026.',
    author: 'Paul Kamau',
    category: 'Residential',
    date: '2025-12-18',
    readTime: '10 min read',
  },
  {
    id: 'internal-rate-of-return-irr',
    title: 'Internal Rate of Return (IRR): The Gold Standard of Metrics',
    excerpt: 'Going beyond simple yield to understand the total lifecycle profitability of a project.',
    author: 'Elizabeth Costabir',
    category: 'Finance',
    date: '2025-11-23',
    readTime: '15 min read',
  },
  {
    id: 'international-bidders-auctions',
    title: 'Can Foreigners Bid at Kenyan Property Auctions?',
    excerpt: 'The legal framework for international investors participating in public auctions and e-GP platforms.',
    author: 'Paul Kamau',
    category: 'Legal',
    date: '2025-11-25',
    readTime: '10 min read',
  },
  {
    id: 'irr-calculator',
    title: 'How to Build Your Own IRR Calculator in Excel',
    excerpt: 'A step-by-step guide to projecting your long-term real estate wealth.',
    author: 'Paul Kamau',
    category: 'Finance',
    date: '2025-11-22',
    readTime: '18 min read',
  },
  {
    id: 'isOneMillionHousingUnitsTargetRealistic2027',
    title: 'Is the One Million Housing Units Target by 2027 Realistic?',
    excerpt: 'An in-depth analysis of Kenya',
    author: 'Grace Wanjiku',
    category: 'Housing Policy',
    date: '2025-07-15',
    readTime: '12 min read',
    featured: true,
  },
  {
    id: 'itax-compliance-for-landlords',
    title: 'Landlords and iTax: Navigating the 2026 KRA Enforcement',
    excerpt: 'KRA’s new digital tracking of rental income and what it means for your profit.',
    author: 'Paul Kamau',
    category: 'Legal',
    date: '2026-01-01',
    readTime: '13 min read',
    featured: true,
  },
  {
    id: 'kenyaAffordableHousingProgressChallenges',
    title: 'Kenya’s Affordable Housing: Progress and Challenges',
    excerpt: 'Delve into the current state of affordable housing initiatives in Kenya, highlighting key milestones achieved, persistent challenges, and potential solutions to bridge the housing gap.',
    author: 'David Omondi',
    category: 'Development',
    date: '2025-08-01',
    readTime: '10 min read',
  },
  {
    id: 'kraNewSystemTaxFilingLandlordsAgents',
    title: 'KRA Launches New System to Make Tax Filing Easier for Landlords and Agents',
    excerpt: 'A detailed breakdown of the Kenya Revenue Authority',
    author: 'James Mwangi',
    category: 'Taxation',
    date: '2025-09-01',
    readTime: '8 min read',
  },
  {
    id: 'kusccoScandalKsh12BFraudSaccoHousingRisk',
    title: 'KUSCCO Scandal: KSh 12B Fraud Puts SACCO Housing at Risk',
    excerpt: 'Investigating the ramifications of the KSh 12 billion fraud scandal involving KUSCCO, and how this affects the stability and future of SACCO-backed housing projects in Kenya.',
    author: 'Njeri Kamau',
    category: 'Finance',
    date: '2025-07-05',
    readTime: '13 min read',
    featured: true,
  },
  {
    id: 'land-loans',
    title: 'How to Secure a Land Loan in Kenya',
    excerpt: 'A guide to financing land purchases, from Sacco loans to commercial bank mortgages.',
    author: 'Paul Kamau',
    category: 'Finance',
    date: '2025-11-28',
    readTime: '8 min read',
  },
  {
    id: 'land-rates-vs-land-rent-payments',
    title: 'Land Rates vs. Land Rent: Don’t Get Your Taxes Mixed Up',
    excerpt: 'Understanding the difference between National and County payments.',
    author: 'Paul Kamau',
    category: 'Legal',
    date: '2025-11-28',
    readTime: '9 min read',
  },
  {
    id: 'landlord-tenant-bill-2026-impact',
    title: 'The 2026 Tenant Bill: New Rules for Rent Hikes and Evictions',
    excerpt: 'Why you can no longer increase rent without a 90-day notice.',
    author: 'Paul Kamau',
    category: 'Legal',
    date: '2026-01-22',
    readTime: '14 min read',
    featured: true,
  },
  {
    id: 'micro-mixed-use-developments-kenya',
    title: 'Micro Mixed-Use: The 1/8th Acre Business-Home Hybrid',
    excerpt: 'Building shops on the ground floor and 2-bedroom units above.',
    author: 'Elizabeth Costabir',
    category: 'Commercial',
    date: '2025-12-19',
    readTime: '12 min read',
  },
  {
    id: 'mixed-use-developments-nairobi-2026',
    title: 'Live-Work-Play: The Dominance of Mixed-Use in 2026',
    excerpt: 'Why Nairobians are ditching the commute for integrated environments.',
    author: 'Paul Kamau',
    category: 'Residential',
    date: '2025-12-26',
    readTime: '12 min read',
  },
  {
    id: 'mortgage-refinancing-trends-kenya-2026',
    title: 'Mortgage Refinancing: Switching Banks for a Better Rate',
    excerpt: 'How to move your 18% loan to a 9% fixed rate in today’s market.',
    author: 'Elizabeth Costabir',
    category: 'Finance',
    date: '2025-11-05',
    readTime: '12 min read',
  },
  {
    id: 'multifamily-financing',
    title: 'Navigating Multifamily Financing Options in Kenya',
    excerpt: 'Comparing bank mortgages, Sacco developer loans, and private equity for apartment blocks.',
    author: 'Paul Kamau',
    category: 'Residential',
    date: '2025-11-25',
    readTime: '11 min read',
  },
  {
    id: 'nairobi-market-report-2026',
    title: 'Nairobi 2026 Outlook: The Rise of Detached Housing',
    excerpt: 'Market data shows a shift from congested high-rises to spacious suburban gated communities.',
    author: 'Elizabeth Costabir',
    category: 'Market Analysis',
    date: '2026-01-05',
    readTime: '12 min read',
    featured: true,
  },
  {
    id: 'nairobi-railway-city-impact',
    title: 'Nairobi Railway City: Shifting the CBD Southward in 2026',
    excerpt: 'How the £9M technical assistance and multimodal hub is redefining Nairobi’s core.',
    author: 'Paul Kamau',
    category: 'Market Analysis',
    date: '2026-01-13',
    readTime: '13 min read',
    featured: true,
  },
  {
    id: 'nanyuki-investment-conservation-boom',
    title: 'Nanyuki 2026: Investing in the',
    excerpt: 'Why conservation-themed developments are seeing 20% capital gains.',
    author: 'Elizabeth Costabir',
    category: 'Residential',
    date: '2025-11-25',
    readTime: '12 min read',
  },
  {
    id: 'nema-compliance-guide-2026',
    title: 'Building Near Riparian Land: The 2026 NEMA Guidelines',
    excerpt: 'Avoiding the',
    author: 'Paul Kamau',
    category: 'Legal',
    date: '2025-12-16',
    readTime: '13 min read',
  },
  {
    id: 'net-leases-in-cre',
    title: 'Understanding Net Leases in Commercial Real Estate',
    excerpt: 'Comparing Single, Double, and Triple Net (NNN) leases for passive income seekers.',
    author: 'Elizabeth Costabir',
    category: 'Commercial',
    date: '2025-11-27',
    readTime: '12 min read',
  },
  {
    id: 'northlands-city-investment-guide',
    title: 'Northlands City: Investing in Kenya’s 11,000-Acre',
    excerpt: 'A deep dive into the Sh500bn mega-city and the ripple effects on Ruiru property.',
    author: 'Paul Kamau',
    category: 'Market Analysis',
    date: '2026-01-28',
    readTime: '15 min read',
    featured: true,
  },
  {
    id: 'northlandsHeightsApartmentsLookInside',
    title: 'Northlands Heights Apartments – A Look Inside',
    excerpt: 'A comprehensive review and virtual tour of the highly anticipated Northlands Heights Apartments, offering insights into their design, amenities, and investment potential.',
    author: 'Esther Wambui',
    category: 'Property Review',
    date: '2025-06-25',
    readTime: '8 min read',
  },
  {
    id: 'off-plan-red-flags-2026',
    title: 'Buying Off-Plan? 5 Red Flags to Watch in 2026',
    excerpt: 'How to tell if a developer will finish your apartment or',
    author: 'Paul Kamau',
    category: 'Advice',
    date: '2025-12-05',
    readTime: '13 min read',
  },
  {
    id: 'passive-design-architecture-nairobi',
    title: 'Architecture Without AC: The Rise of Passive Design in 2026',
    excerpt: 'How building orientation and natural ventilation are saving millions.',
    author: 'Paul Kamau',
    category: 'Construction',
    date: '2025-12-28',
    readTime: '13 min read',
  },
  {
    id: 'passive-income-through-reits-2026',
    title: 'REITs: Building a Real Estate Portfolio Without a Landlord Headache',
    excerpt: 'Comparing Acorn I-REIT and Fahari I-REIT dividend yields in 2026.',
    author: 'Paul Kamau',
    category: 'Finance',
    date: '2025-12-10',
    readTime: '14 min read',
  },
  {
    id: 'prefab-luxury-homes-kenya-market',
    title: 'Luxury in 90 Days: The Rise of High-End Prefab in 2026',
    excerpt: 'Why Naivasha and Laikipia holiday homes are going modular.',
    author: 'Elizabeth Costabir',
    category: 'Construction',
    date: '2025-12-13',
    readTime: '11 min read',
  },
  {
    id: 'property-development-project-management',
    title: 'The Phases of Successful Property Project Management',
    excerpt: 'From feasibility studies to the final',
    author: 'Elizabeth Costabir',
    category: 'Construction',
    date: '2025-12-05',
    readTime: '15 min read',
  },
  {
    id: 'property-investment-mistakes-avoid',
    title: 'Top 7 Property Investment Mistakes to Avoid in Kenya',
    excerpt: 'From emotional buying to ignoring zoning laws, learn what can tank your ROI.',
    author: 'Paul Kamau',
    category: 'Investment',
    date: '2025-11-24',
    readTime: '13 min read',
  },
  {
    id: 'property-investment-tax-benefits',
    title: 'Tax Benefits for Property Investors in Kenya',
    excerpt: 'Maximizing your returns by utilizing wear and tear allowances and solar incentives.',
    author: 'Paul Kamau',
    category: 'Finance',
    date: '2025-11-22',
    readTime: '11 min read',
  },
  {
    id: 'property-management-automation-2026',
    title: 'Automate Your Rent: Top 3 Platforms for 2026 Landlords',
    excerpt: 'How to handle 50 units without a single phone call.',
    author: 'Elizabeth Costabir',
    category: 'Tech',
    date: '2026-01-08',
    readTime: '9 min read',
  },
  {
    id: 'property-management-software-kenya',
    title: 'Top Property Management Software for Kenyan Landlords',
    excerpt: 'How automation is solving the rent collection and utility management headache in Nairobi.',
    author: 'Elizabeth Costabir',
    category: 'Technology',
    date: '2025-11-28',
    readTime: '9 min read',
  },
  {
    id: 'property-market-analysis-tools',
    title: 'Must-Use Property Market Analysis Tools for 2026',
    excerpt: 'From digital maps to PropTech valuation apps, the tools every modern investor needs.',
    author: 'Paul Kamau',
    category: 'Tech',
    date: '2025-11-23',
    readTime: '10 min read',
  },
  {
    id: 'property-rental-yield-calculation',
    title: 'Mastering Property Rental Yield Calculations',
    excerpt: 'Learn how to accurately calculate gross and net rental yields to determine the profitability of your Kenyan property investment.',
    author: 'Paul Kamau',
    category: 'Finance',
    date: '2025-11-30',
    readTime: '8 min read',
  },
  {
    id: 'property-tax-management-kenya',
    title: 'Property Tax in 2026: Navigating the Finance Act 2025',
    excerpt: 'Essential updates on the KES 360,000 interest deduction and new tax loss limits.',
    author: 'Elizabeth Costabir',
    category: 'Finance',
    date: '2026-01-10',
    readTime: '13 min read',
    featured: true,
  },
  {
    id: 'property-title-search',
    title: 'The Modern Property Title Search: Navigating Ardhisasa in 2026',
    excerpt: 'Step-by-step guide to verifying land ownership through Kenya’s digital land management system.',
    author: 'Paul Kamau',
    category: 'Legal',
    date: '2025-11-24',
    readTime: '10 min read',
  },
  {
    id: 'pros-cons-buying-land',
    title: 'The Pros and Cons of Buying Land in Kenya',
    excerpt: 'Analyzing land as a',
    author: 'Paul Kamau',
    category: 'Land',
    date: '2025-11-27',
    readTime: '10 min read',
  },
  {
    id: 'purpose-built-student-accommodation-kenya',
    title: 'PBSA: The 2026 Gold Rush in Student Housing',
    excerpt: 'Why institutional investors are pouring billions into',
    author: 'Paul Kamau',
    category: 'Commercial',
    date: '2026-01-10',
    readTime: '14 min read',
  },
  {
    id: 'real-estate-crowdfunding-kenya',
    title: 'Is Real Estate Crowdfunding the Future for Kenyan Investors?',
    excerpt: 'Exploring how fractional ownership allows small investors to participate in large-scale projects.',
    author: 'Elizabeth Costabir',
    category: 'Investment',
    date: '2025-11-22',
    readTime: '10 min read',
  },
  {
    id: 'real-estate-crowdfunding-youth-2026',
    title: 'Real Estate Crowdfunding: How Gen Z is Owning Nairobi',
    excerpt: 'You no longer need KES 50M to own luxury; fractional ownership is the 2026 trend.',
    author: 'Elizabeth Costabir',
    category: 'Investment',
    date: '2026-01-07',
    readTime: '10 min read',
  },
  {
    id: 'real-estate-financial-modeling-excel',
    title: 'Advanced Financial Modeling for Kenyan Developers',
    excerpt: 'Calculating IRR and NPV for high-rise developments in Upper Hill.',
    author: 'Paul Kamau',
    category: 'Finance',
    date: '2025-12-25',
    readTime: '18 min read',
  },
  {
    id: 'real-estate-investment-analysis-software',
    title: 'Top Investment Analysis Tools for the Kenyan Market in 2026',
    excerpt: 'Ditching spreadsheets for Yardi, DoorLoop, and Mashvisor-style local data.',
    author: 'Paul Kamau',
    category: 'Technology',
    date: '2026-01-12',
    readTime: '11 min read',
  },
  {
    id: 'real-estate-investment-portfolio-diversification',
    title: 'Diversifying Your Property Portfolio for 2026 Stability',
    excerpt: 'Why you shouldn’t put all your money into residential apartments.',
    author: 'Paul Kamau',
    category: 'Investment',
    date: '2025-12-10',
    readTime: '12 min read',
  },
  {
    id: 'real-estate-investment-trusts-reits',
    title: 'Real Estate Investment Trusts (REITs): Understanding the Basics and Benefits',
    excerpt: 'Expert analysis on Real Estate Investment Trusts (REITs): Understanding the Basics and Benefits in Kenya\'s real estate market.',
    author: 'LoopNet Team',
    category: 'Investing',
    date: 'August 25, 2025',
    readTime: '9 min read',
  },
  {
    id: 'real-estate-mentorship-programs',
    title: 'The Value of Real Estate Mentorship in Kenya',
    excerpt: 'Why having a mentor can save you millions in mistakes during your first development.',
    author: 'Elizabeth Costabir',
    category: 'Education',
    date: '2025-11-23',
    readTime: '9 min read',
  },
  {
    id: 'real-estate-portfolio-management-strategy',
    title: 'Balancing REITs and Brick-and-Mortar in Your Portfolio',
    excerpt: 'How to maintain liquidity while holding long-term physical assets.',
    author: 'Paul Kamau',
    category: 'Investment',
    date: '2026-01-03',
    readTime: '10 min read',
  },
  {
    id: 'real-estate-taxes-kenya',
    title: 'Real Estate Taxes in Kenya: What Every Landlord Needs to Know',
    excerpt: 'A comprehensive guide to Stamp Duty, Capital Gains Tax, and Rental Income Tax under the latest KRA regulations.',
    author: 'Paul Kamau',
    category: 'Legal',
    date: '2025-11-25',
    readTime: '12 min read',
    featured: true,
  },
  {
    id: 'rent-to-own-schemes-kenya-2026',
    title: 'The Rent-to-Own Reality: Is it Finally Working in 2026?',
    excerpt: 'Analyzing the Pangani and Boma Yangu schemes for middle-income earners.',
    author: 'Elizabeth Costabir',
    category: 'Residential',
    date: '2026-01-01',
    readTime: '14 min read',
  },
  {
    id: 'retail-reits-small-investors-kenya',
    title: 'Owning a Piece of the Mall: Retail REITs in 2026',
    excerpt: 'How to invest in Kenya’s biggest shopping centers with KES 5,000.',
    author: 'Paul Kamau',
    category: 'Finance',
    date: '2025-12-25',
    readTime: '11 min read',
  },
  {
    id: 'riseBrandedResidencesKenya',
    title: 'The Rise of Branded Residences in Kenya',
    excerpt: 'Unpacking the growing trend of branded residences in Kenya, where luxury hospitality brands are partnering with developers to offer exclusive living experiences.',
    author: 'Samuel Kariuki',
    category: 'Luxury Real Estate',
    date: '2025-09-05',
    readTime: '10 min read',
    featured: true,
  },
  {
    id: 'sacco-vs-bank-mortgages-2026',
    title: 'SACCO vs. Bank Mortgages: Where Should You Borrow in 2026?',
    excerpt: 'Comparing the 9% KMRC-backed bank loans with SACCO dividend offsets.',
    author: 'Elizabeth Costabir',
    category: 'Finance',
    date: '2026-01-12',
    readTime: '12 min read',
    featured: true,
  },
  {
    id: 'satellite-towns-growth-corridors-2026',
    title: 'The',
    excerpt: 'Analyzing the infrastructure-led growth of Nairobi’s satellite towns.',
    author: 'Paul Kamau',
    category: 'Market Analysis',
    date: '2025-12-15',
    readTime: '11 min read',
  },
  {
    id: 'sectional-properties-act-implementation-2026',
    title: 'Sectional Titles: The 2026 Progress Report',
    excerpt: 'How the transition from long-term leases to individual unit titles is changing ownership.',
    author: 'Paul Kamau',
    category: 'Legal',
    date: '2026-01-08',
    readTime: '14 min read',
  },
  {
    id: 'sectional-titles-for-beginners',
    title: 'Sectional Titles for Beginners: Owning Your Slice of Air',
    excerpt: 'Everything you need to know about the new ownership certificates.',
    author: 'Elizabeth Costabir',
    category: 'Legal',
    date: '2025-12-28',
    readTime: '10 min read',
  },
  {
    id: 'serviced-apartments-nairobi',
    title: 'The Boom of Serviced Apartments in Nairobi',
    excerpt: 'Why business travelers are ditching hotels for serviced apartments in Westlands and Upper Hill.',
    author: 'Paul Kamau',
    category: 'Residential',
    date: '2025-10-29',
    readTime: '7 min read',
  },
  {
    id: 'short-term-rentals-market-shift',
    title: 'Airbnb vs. Traditional Letting: The 2026 Comparison',
    excerpt: 'Analyzing why many hosts are returning to long-term leases this year.',
    author: 'Elizabeth Costabir',
    category: 'Investment',
    date: '2025-12-22',
    readTime: '14 min read',
  },
  {
    id: 'single-net-lease',
    title: 'The Single Net Lease (N): Risk vs. Reward',
    excerpt: 'Understanding the simplest form of net leases where the tenant pays property taxes.',
    author: 'Elizabeth Costabir',
    category: 'Commercial',
    date: '2025-11-25',
    readTime: '8 min read',
  },
  {
    id: 'small-vs-large-multifamily',
    title: 'Small vs. Large Multifamily: Which is Best for You?',
    excerpt: 'Comparing the management of a 4-unit apartment block vs. a 50-unit complex.',
    author: 'Paul Kamau',
    category: 'Residential',
    date: '2025-11-23',
    readTime: '11 min read',
  },
  {
    id: 'smart-home-security-trends-kenya',
    title: 'Invisible Fences: The 2026 Smart Security Tech for Homes',
    excerpt: 'Why biometrics and AI-powered cameras are replacing traditional guards.',
    author: 'Elizabeth Costabir',
    category: 'Tech',
    date: '2026-01-13',
    readTime: '10 min read',
  },
  {
    id: 'smart-home-tech-karen-luxury',
    title: 'The Smart Mansions of Karen: 2026 Luxury Trends',
    excerpt: 'From voice-controlled solar grids to AI-monitored perimeter security.',
    author: 'Paul Kamau',
    category: 'Residential',
    date: '2025-12-15',
    readTime: '10 min read',
  },
  {
    id: 'talanta-sports-city-real-estate',
    title: 'The',
    excerpt: 'How the Talanta Sports City Stadium is boosting real estate in its orbit.',
    author: 'Paul Kamau',
    category: 'Market Analysis',
    date: '2026-01-05',
    readTime: '12 min read',
  },
  {
    id: 'tech-corridor-kilimani-westlands-2026',
    title: 'The Tech Corridor: How Silicon Savannah Drives Rent in 2026',
    excerpt: 'Why proximity to startup hubs is the biggest predictor of rental growth.',
    author: 'Paul Kamau',
    category: 'Market Analysis',
    date: '2025-11-10',
    readTime: '11 min read',
  },
  {
    id: 'tenant-improvement-allowance',
    title: 'Negotiating Tenant Improvement Allowances (TIA)',
    excerpt: 'A guide for commercial landlords and tenants on funding office fit-outs.',
    author: 'Elizabeth Costabir',
    category: 'Commercial',
    date: '2025-11-23',
    readTime: '12 min read',
  },
  {
    id: 'the-fix-and-flip-strategy-kenya',
    title: 'Fix and Flip: How to Spot Undervalued Gems in Kileleshwa',
    excerpt: 'Renovating 1990s apartments for a 30% profit margin in 2026.',
    author: 'Elizabeth Costabir',
    category: 'Investment',
    date: '2026-01-03',
    readTime: '11 min read',
  },
  {
    id: 'theTimelessBeautyOfNairobiColonialEraBuildings',
    title: 'The Timeless Beauty of Nairobi’s Colonial-Era Buildings',
    excerpt: 'A captivating journey through Nairobi',
    author: 'Historian',
    category: 'Architecture',
    date: '2025-06-30',
    readTime: '11 min read',
  },
  {
    id: 'urban-farming-apartment-amenity-2026',
    title: 'The Green Roof Trend: Rooftop Farming as a Tenant Amenity',
    excerpt: 'How 2026 developments are using hydroponics to attract health-conscious tenants.',
    author: 'Elizabeth Costabir',
    category: 'Residential',
    date: '2025-12-07',
    readTime: '10 min read',
  },
  {
    id: 'warranty-deed',
    title: 'Understanding the Warranty Deed in Kenyan Land Transactions',
    excerpt: 'A deep dive into how warranty deeds protect buyers and the legal guarantees regarding clear titles.',
    author: 'Paul Kamau',
    category: 'Legal',
    date: '2025-11-28',
    readTime: '9 min read',
  },
  {
    id: 'water-conservation-real-estate-kenya',
    title: 'Water is Money: Why Modern Tenants Demand Green Plumbing',
    excerpt: 'How low-flow fixtures and gray-water recycling increase ROI in 2026.',
    author: 'Elizabeth Costabir',
    category: 'Construction',
    date: '2026-01-07',
    readTime: '11 min read',
  },
  {
    id: 'what-is-improved-land',
    title: 'Raw vs. Improved Land: Which Should You Buy?',
    excerpt: 'Understanding the value-add of infrastructure like roads, water, and electricity on your plot.',
    author: 'Paul Kamau',
    category: 'Land',
    date: '2025-11-25',
    readTime: '7 min read',
  },
  {
    id: 'whyAreHomeownershipRatesDroppingInUrbanAreas',
    title: 'Why Are Homeownership Rates Dropping in Urban Areas?',
    excerpt: 'Investigating the factors contributing to the decline in homeownership rates within Kenya',
    author: 'Paul Kimani',
    category: 'Market Analysis',
    date: '2025-07-01',
    readTime: '11 min read',
  },
  {
    id: 'whyCommercialRealEstateKenyaFacingNewChallenges',
    title: 'Why Commercial Real Estate in Kenya is Facing New Challenges',
    excerpt: 'An analysis of the evolving landscape of commercial real estate in Kenya, addressing new challenges such as remote work trends, oversupply, and shifting economic conditions.',
    author: 'Peter Kihara',
    category: 'Market Trends',
    date: '2025-07-28',
    readTime: '10 min read',
  },
  {
    id: 'winRealEstateInvestorsAgainstOffPlanDeveloper',
    title: 'Win for Real Estate Investors Against Off-Plan Developer',
    excerpt: 'A case study detailing a landmark legal victory for real estate investors against a defaulting off-plan developer, offering crucial lessons for mitigating risks in off-plan purchases.',
    author: 'Daniel Otieno',
    category: 'Legal',
    date: '2025-08-20',
    readTime: '11 min read',
  },
  {
    id: 'womenInRealEstateBreakingBarriersInKenyaPropertyIndustry',
    title: 'Women in Real Estate: Breaking Barriers in Kenya’s Property Industry',
    excerpt: 'Celebrating the achievements and contributions of women in Kenya',
    author: 'Christine Wanjiku',
    category: 'Industry Leaders',
    date: '2025-10-01',
    readTime: '11 min read',
    featured: true,
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