'use client';

import React, { useState, useMemo } from 'react';
import { 
  Play, 
  ArrowUpRight, 
  Shield, 
  Globe, 
  Building2, 
  Briefcase, 
  Calendar, 
  ChevronRight,
  Target,
  FileText,
  BellRing,
  Bell,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

export default function VideosPage() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const [activeVideo, setActiveVideo] = useState({
    id: "bdyqseFrrak",
    title: "Advanced 1031 Exchange Strategies for Institutional Investors",
    longDescription: `This executive briefing covers the complex mechanics of 1031 exchanges within the East African and Global context. 
    Key topics include Capital Gains Tax Deferral in Commercial Real Estate, Reverse Exchange Structures for High-Net-Worth Portfolios, and 
    identifying replacement properties in Nairobi's Grade A Office Sector. We analyze how institutional risk mitigation and legal 
    compliance drive long-term capital preservation in the commercial sector.`,
    date: "2024-06-12",
    displayDate: "June 12, 2024",
    keywords: "1031 Exchange, Commercial Real Estate Nairobi, Investment Mandate"
  });

  const videoLibrary = [
    {
    id: "yHJhEoLEzLw",
    title: "2026 Deloitte Commercial Real Estate Outlook with John D'Angelo",
    description: "Analysis of global interest rates and their impact on equity.",
    date: "Jan 12, 2026",
    longDescription: "What do 850 global real estate investors across 13 countries really think about the year ahead? In this episode, John D’Angelo of Deloitte joins Michael Bull of Bull Realty – TCN Worldwide to break down the new 2026 Deloitte Global Real Estate Sentiment Survey, revealing how investor attitudes have shifted year over year. You’ll hear the biggest surprises in this year’s findings — including increased allocations to real estate, growing interest in U.S. markets, and eye-opening responses around maturing debt."
  },
  {
    id: "466YcRaEfRw",
    title: "Top Issues Affecting Real Estate in 2026 | Insights from CRE Global Chair John Hentschel",
    description: "KC Conway breaks down GDP and CRE growth forecasts for the new year.",
    date: "Jan 08, 2026",
    longDescription: "What are the biggest forces shaping real estate today? John Hentschel, CRE, Global Chair of the Counselors of Real Estate, joins Michael Bull, CCIM to break down the Top Issues Affecting Real Estate and what they mean for investors, developers, and property owners. This annual report is widely regarded as one of the most influential sources of thought leadership in the industry. In this episode, John shares expert insight on capital markets, economic risk, property use trends, and the evolving factors impacting real estate investment and decision-making worldwide. If you want to stay ahead of shifting market conditions and make smarter, data-driven real estate decisions, this episode delivers must-know intelligence from one of the industry’s leading voices. Ideal for commercial real estate investors, brokers, developers, lenders, advisors, and market strategists."
  },
  {
    id: "9w1TsWDp8Yg",
    title: "2026 Multifamily Market Outlook for 2026 & Beyond with Carl Whitaker",
    description: "Expert analysis on apartment sector performance and occupancy trends.",
    date: "Jan 05, 2026",
    longDescription: "Is the multifamily sector finally absorbing the massive supply wave of 2024-2025? In this episode, we dive into the latest data on rent growth and vacancy rates across the Sunbelt and Midwest. Our guest experts discuss where cap rates are settling and how developers are navigating the current financing environment for new projects. We also touch on the rising impact of insurance costs on NOI and how top operators are mitigating these expenses."
  },
  {
    id: "icns_ezaXHU",
    title: "Build-to-Rent Trends with Chris Finlay #realestate #BTR",
    description: "A look at the booming build-to-rent sector within the multifamily market.",
    date: "Dec 30, 2025",
    longDescription: "Chris Finlay, founder and CEO of Middleburg Communities, joins host Michael Bull, CCIM, to discuss the booming build-to-rent sector within the multifamily market. With over 20 years of experience in rental housing, Chris shares insights into the characteristics and demand for build-to-rent communities, including the demographics of tenants, retention rates, and how these developments compare to traditional multifamily housing. They explore the design and operational aspects of build-to-rent projects, the impact of current economic conditions on construction and financing, and the future outlook for this growing asset class."
  },
  {
    id: "466YcRaEfRw",
    title: "Top Issues Affecting Real Estate in 2026 | Insights from CRE Global Chair",
    description: "What are the biggest forces shaping real estate today?",
    date: "Dec 20, 2025",
    longDescription: "John Hentschel, CRE, Global Chair of the Counselors of Real Estate, joins Michael Bull to break down the Top Issues Affecting Real Estate. This annual report is widely regarded as one of the most influential sources of thought leadership in the industry. In this episode, John shares expert insight on capital markets, economic risk, property use trends, and the evolving factors impacting real estate investment and decision-making worldwide."
  },
  {
    id: "mK9lP2nB4vX",
    title: "The Evolution of PropTech in 2026: AI & Automation",
    description: "How AI and technology are changing property management and brokerage.",
    date: "Dec 15, 2025",
    longDescription: "PropTech has moved beyond simple property management software. Today, AI is driving site selection, predictive maintenance, and automated underwriting. In this episode, we interview tech founders and early adopters to see how these tools are creating a competitive advantage for firms that embrace them. Learn how to separate the hype from the tools that actually improve your bottom line and streamline your operations in the digital age."
  },
  {
    id: "vC3xZ7aQ8wE",
    title: "Medical Office Buildings: The Safest Bet in CRE?",
    description: "Why MOB remains a top choice for conservative investors.",
    date: "Dec 10, 2025",
    longDescription: "Healthcare real estate has long been considered 'recession-proof,' but does that hold true in 2026? We analyze the demand for outpatient facilities, the impact of an aging population, and why health systems are increasingly looking to off-campus locations for expansion. This episode features a deep dive into lease structures, tenant credit-worthiness, and the specific property requirements that make Medical Office Buildings a unique and stable asset class."
  },
  {
    id: "pL1oK4mJ7nH",
    title: "Industrial Real Estate: Beyond the Big Box",
    description: "Exploring infill logistics and small-bay industrial opportunities.",
    date: "Dec 03, 2025",
    longDescription: "While large-scale distribution centers get the headlines, small-bay and multi-tenant industrial properties are seeing record-low vacancies. We explore the 'last mile' logistics challenge and how the rise of localized manufacturing is driving demand for flexible industrial space. Our guests discuss the renovation of older industrial stock and the high barriers to entry that are keeping rents high in urban infill locations across the country."
  },
  {
    id: "hG6fD9sS3aQ",
    title: "Retail Renaissance: The Return of the Physical Store",
    description: "New tenant mixes driving traffic in suburban and urban retail.",
    date: "Nov 25, 2025",
    longDescription: "Retail is far from dead—it's evolving. From 'medtail' to experiential entertainment, the tenant mix in modern shopping centers looks very different than it did a decade ago. We talk to retail brokers and landlords about the types of tenants currently expanding and why physical storefronts are becoming a key part of an omnichannel brand strategy. Discover which retail formats are attracting the most capital in the current market."
  },
  {
    id: "mgmQm-6AUHw",
    title: "Is the Office Market Finally Turning Around? with CoStar's Phil Mobley",
    description: "How Grade-A office spaces are adapting to the hybrid era.",
    date: "Nov 15, 2025",
    longDescription: "Is the office sector at an inflection point? In this episode, host Michael Bull sits down with Phil Mobley, National Director of Office Analytics at CoStar Group, to break down what’s really happening in the U.S. office market. You’ll learn why Q3 data shows the first major positive absorption since 2019 and how Class A buildings are backfilling as tenant demand stabilizes for high-quality, amenity-rich workspace."
  },
  {
    id: "uY8iO1pL4kM",
    title: "Interest Rates & The Fed: What's Next for CRE Capital?",
    description: "Navigating the 'higher for longer' environment in late 2025.",
    date: "Nov 10, 2025",
    longDescription: "The Federal Reserve's moves continue to be the primary driver of CRE activity. We sit down with capital markets experts to discuss the current spread between Treasuries and Cap Rates. This episode provides a technical look at debt service coverage ratios, the availability of bank versus non-bank lending, and when we might see a more significant easing of credit conditions for commercial acquisitions."
  },
  {
    id: "zX5cV2bN8mM",
    title: "Student Housing Trends for the 2026 Academic Year",
    description: "Enrollment growth and its impact on off-campus housing.",
    date: "Nov 03, 2025",
    longDescription: "Student housing continues to show resilience as an alternative asset class. We look at the 'flight to quality' among tier-one universities and how enrollment trends are impacting supply in college towns. Guest experts share data on pre-leasing velocities and the increasing cost of development near campus. If you are looking for an asset class with consistent cash flow and high barriers to entry, this student housing update is a must."
  },
  {
    id: "qW4eR7tT2yY",
    title: "Data Centers: Powering the AI Revolution",
    description: "The massive demand for power and cooling in commercial real estate.",
    date: "Oct 27, 2025",
    longDescription: "Data centers have become one of the hottest sectors in commercial real estate. However, the challenge is no longer just building the shell—it's securing the power. We discuss the grid limitations, the shift toward liquid cooling, and why land with existing power infrastructure is selling at a massive premium. Learn why the expansion of Artificial Intelligence is reshaping the industrial landscape and creating new investment opportunities."
  },
  {
    id: "aK9sD2fF4gG",
    title: "Net Lease Strategies for a Volatile Market",
    description: "How NNN investors are protecting yields and navigating inflation.",
    date: "Oct 20, 2025",
    longDescription: "Single-tenant net lease properties remain a favorite for 1031 exchange investors. In this episode, we analyze how lease escalations and tenant credit quality are being scrutinized in the current high-interest-rate environment. We look at the most active buyers in the space—including REITs and private equity—and provide advice for sellers on how to position their NNN assets to achieve maximum pricing."
  },
  {
    id: "lO8iP1uY5tT",
    title: "Mixed-Use Development: Creating Live-Work-Play Hubs",
    description: "The design and financing trends shaping successful mixed-use projects.",
    date: "Oct 13, 2025",
    longDescription: "Modern mixed-use developments are moving toward 'micro-cities' that provide all-day activation. We talk to lead architects and developers about the complexities of managing residential, retail, and office components within a single project. We also discuss the financing hurdles for these larger developments and how public-private partnerships are often the key to getting these high-impact projects off the ground."
  },
  {
    id: "mN3bV6cX9zL",
    title: "ESG & Commercial Real Estate: Costs vs. Benefits",
    description: "Assessing the real-world ROI of sustainability initiatives.",
    date: "Oct 06, 2025",
    longDescription: "Environmental, Social, and Governance (ESG) criteria are no longer just for institutional investors. We explore how energy efficiency and carbon footprint reduction are becoming critical for tenant retention and debt terms. Our panel of experts discusses which 'green' upgrades provide the fastest payback and how recent legislative changes are impacting property valuations for older, less-efficient buildings."
  },
  {
    id: "vB5nK2mJ8hG",
    title: "Distressed Asset Opportunities in 2026",
    description: "Where to find value as debt matures and bridge loans expire.",
    date: "Sep 29, 2025",
    longDescription: "The 'maturity wall' is hitting many properties that were financed with short-term floating-rate debt in 2021 and 2022. We discuss where the opportunities lie for 'rescue capital' and how to identify properties that are fundamentally sound but balance-sheet broken. This episode offers a tactical guide for opportunistic investors looking to acquire assets at a discount to replacement cost during this phase of the cycle."
  },
  {
    id: "rE1wQ4tT7yU",
    title: "Life Sciences Real Estate: Post-Pandemic Correction?",
    description: "Analyzing the slowdown and recovery in lab space demand.",
    date: "Sep 22, 2025",
    longDescription: "After a massive boom, the Life Sciences sector is seeing a period of consolidation. We look at the major hubs like Boston, San Diego, and the Research Triangle to see how much vacant lab space is on the market. Our guests discuss the future of biotech funding and why, despite the current lull, the long-term fundamentals for lab and R&D space remain strong as healthcare technology continues to advance."
  },
  {
    id: "pM6oI3uY0tR",
    title: "Senior Housing Outlook: Demographic Tailwinds",
    description: "Investing in the silver tsunami and the evolution of care facilities.",
    date: "Sep 15, 2025",
    longDescription: "The aging Baby Boomer population is creating a massive demand for independent living, assisted living, and memory care facilities. We analyze the operations-heavy nature of this asset class and why choosing the right management partner is just as important as the real estate itself. This episode looks at the current occupancy trends and the new design features that today's seniors (and their families) are demanding."
  },
  {
    id: "sD2fG5hH8jJ",
    title: "Land Trends: Where Development is Heading Next",
    description: "The hottest submarkets for land acquisition and entitlement.",
    date: "Sep 08, 2025",
    longDescription: "Land is the raw material of real estate. We talk to land brokers about where developers are currently land-banking for the next cycle. From residential subdivisions to industrial parks, we explore how infrastructure projects like highway expansions and new utilities are creating value in previously overlooked areas. Learn the common pitfalls in land entitlement and how to properly value land in a fluctuating market."
  }
  ];

  const internalPromos = [
    {
      title: "The Best Western Meridian Hotel for Sale",
      type: "Investment Opportunity",
      image: "https://content.knightfrank.com/property/hub2547666/images/a531920b-a627-43ed-905e-eacd1b941068-0.jpg?cio=true&w=1200",
      link: "/properties/best-western-meridian-hotel",
      metric: "Target IRR: 15.2%"
    },
    {
      title: "London Prime Residential Portfolio",
      type: "Sterling Diversification",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070", // Iconic London Architecture
      link: "/uk-properties",
      metric: "Currency Hedge: GBP Asset"
    }
  ];

  // --- 2. SEO TECHNICAL LAYER (JSON-LD) ---
  const videoSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": activeVideo.title,
    "description": activeVideo.longDescription,
    "thumbnailUrl": `https://img.youtube.com/vi/${activeVideo.id}/maxresdefault.jpg`,
    "uploadDate": activeVideo.date,
    "publisher": {
      "@type": "Organization",
      "name": "Murivest",
      "logo": { "@type": "ImageObject", "url": "https://www.murivest.com/logo.png" }
    },
    "embedUrl": `https://www.youtube.com/embed/${activeVideo.id}`
  }), [activeVideo]);

  // --- 3. HANDLERS ---
  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
    if (!isSubscribed) {
      alert("Notification Preference Saved: You will receive an email briefing when new institutional videos are released.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-28 pb-20 font-sans selection:bg-amber-500/30">
      {/* Injecting SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      <div className="container mx-auto px-6">
        
        {/* --- SEO HEADER SECTION --- */}
        <header className="max-w-4xl mb-16">
          <div className="flex items-center gap-2 text-amber-500 mb-4">
            <Shield size={16} />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Intelligence Hub</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight leading-tight">
            Commercial Real Estate <span className="italic text-amber-200/60">Intelligence</span>
          </h1>
          <p className="text-slate-400 text-lg font-light leading-relaxed border-l border-amber-500/30 pl-8 max-w-2xl">
            Synthesizing global trends with <strong className="text-white font-medium">America's commercial property market</strong>. 
            Data-driven briefings for the sophisticated capital steward.
          </p>
        </header>

        {/* --- MAIN LAYOUT GRID --- */}
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* LEFT COLUMN: Player & Detailed SEO Content */}
          <div className="lg:w-2/3 space-y-12">
            
            {/* The Video Player */}
            <div className="group relative aspect-video w-full bg-slate-900 border border-white/10 overflow-hidden shadow-2xl rounded-xl">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=0&rel=0&modestbranding=1`}
                title={activeVideo.title}
                allowFullScreen
              ></iframe>
            </div>

            {/* Title & Interaction Row */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6 text-slate-500 text-[10px] uppercase tracking-widest font-bold">
                  <span className="flex items-center gap-2"><Calendar size={14} className="text-amber-500" /> {activeVideo.displayDate}</span>
                  <span className="flex items-center gap-2 font-bold text-amber-500/80"><CheckCircle2 size={14} /> Verified Mandate</span>
                </div>
                
                <button 
                  onClick={handleSubscribe}
                  className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all flex items-center gap-2 ${
                    isSubscribed ? 'bg-slate-800 text-slate-400' : 'bg-white text-slate-950 hover:bg-amber-500'
                  }`}
                >
                  {isSubscribed ? <Bell size={14} /> : <BellRing size={14} />}
                  {isSubscribed ? 'Notifying' : 'Notify Me'}
                </button>
              </div>

              <h2 className="text-4xl font-serif leading-tight">{activeVideo.title}</h2>
            </div>

            {/* SEO ARTICLE SECTION (Crucial for Search Ranking) */}
            <article className="prose prose-invert max-w-none bg-white/[0.02] border border-white/5 p-8 rounded-2xl">
              <div className="flex items-center gap-4 text-amber-500 mb-6">
                <FileText size={20} />
                <h2 className="text-xs uppercase tracking-[0.3em] font-bold m-0 text-amber-500">Executive Analysis</h2>
              </div>
              
              <div className="text-slate-300 font-light leading-loose text-lg space-y-6">
                <p>{activeVideo.longDescription}</p>
                
                <h3 className="text-white text-base font-bold uppercase tracking-widest mt-8">Asset Class Relevance</h3>
                <p>
                  For investors targeting the <strong>East African Commercial Sector</strong>, understanding global 1031 strategies 
                  is vital for optimizing <strong>Net Operating Income (NOI)</strong>. By leveraging institutional-grade data, 
                  buyers can mitigate inflationary risks and secure core assets with high capital appreciation potential.
                </p>
              </div>
            </article>

            {/* RELATED VIDEOS GRID */}
            <div className="space-y-8 pt-12">
              <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">Technical Briefing Archives</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {videoLibrary.map((vid) => (
                  <button 
                    key={vid.id}
                    onClick={() => {
                      setActiveVideo({...activeVideo, ...vid, displayDate: vid.date});
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group flex flex-col text-left border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all p-4 rounded-lg"
                  >
                    <div className="aspect-video bg-slate-800 mb-6 overflow-hidden relative rounded-md">
                       <img 
                        src={`https://img.youtube.com/vi/${vid.id}/maxresdefault.jpg`} 
                        alt={vid.title} 
                        className="w-full h-full"
                       />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center bg-slate-950/50 backdrop-blur-sm group-hover:bg-amber-500 group-hover:border-amber-500 transition-all">
                             <Play size={16} className="text-white fill-current ml-1" />
                          </div>
                       </div>
                    </div>
                    <p className="text-[9px] text-amber-500 font-bold uppercase tracking-widest mb-2">{vid.date}</p>
                    <h4 className="font-serif text-xl mb-3 group-hover:text-amber-200 transition-colors leading-snug">{vid.title}</h4>
                    <div className="flex items-center text-[10px] text-slate-500 gap-2 mt-auto uppercase tracking-widest font-bold">
                      Watch Video <ChevronRight size={12} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Mandatory Ads & Promotion */}
          <aside className="lg:w-1/3">
            <div className="sticky top-32 space-y-10">
              
              {/* Internal Portfolio Promos */}
              <div className="space-y-6">
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">Strategic Mandates</h3>
                
                {internalPromos.map((promo, idx) => (
                  <Link href={promo.link} key={idx} className="block group">
                    <div className="relative border border-white/10 overflow-hidden bg-slate-900 shadow-xl rounded-lg">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img 
                          src={promo.image} 
                          alt={promo.title} 
                          className="w-full h-full" 
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
                      
                      <div className="absolute bottom-0 left-0 p-6 w-full">
                        <p className="text-amber-500 text-[9px] font-bold uppercase tracking-[0.3em] mb-2">{promo.type}</p>
                        <h4 className="text-xl font-serif mb-3 text-white leading-tight">{promo.title}</h4>
                        <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                          <span>{promo.metric}</span>
                          <span className="flex items-center gap-1 text-amber-200">Data Room <ArrowUpRight size={12} /></span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* High-Impact Conversion CTA */}
              <div className="bg-amber-600 p-8 shadow-2xl relative overflow-hidden group rounded-xl">
                 <div className="absolute -right-4 -top-4 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                    <Target size={120} />
                 </div>
                 <div className="relative z-10 space-y-6">
                    <Briefcase size={32} className="text-slate-950" />
                    <h4 className="text-3xl font-serif text-slate-950 leading-tight">Investment Advisory</h4>
                    <p className="text-sm font-medium text-slate-900 leading-relaxed opacity-90">
                      Looking to deploy capital in the East African commercial sector? Access our private deal flow and off-market mandates.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-3 px-6 py-3 bg-slate-950 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all rounded shadow-lg">
                      Secure Consultation <ArrowUpRight size={14} />
                    </Link>
                 </div>
              </div>

              {/* Trust Symbols */}
              <div className="pt-8 border-t border-white/5 flex items-center justify-around">
                  <Shield size={24} />
                  <Building2 size={24} />
                  <Globe size={24} />
              </div>

            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}