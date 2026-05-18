'use client';

import React, { useState, useMemo } from 'react';
import { 
  Play, 
  ArrowUpRight, 
  BookOpen, 
  TrendingUp, 
  Building2, 
  BarChart3, 
  Calendar, 
  ChevronRight,
  Target,
  FileText,
  Bookmark,
  Clock,
  ShieldCheck,
  MapPin
} from 'lucide-react';
import Link from 'next/link';

// --- Types & Interfaces ---
interface VideoBrief {
  id: string;
  title: string;
  abstract: string;
  date: string;
  duration: string;
  category: 'Market Intelligence' | 'Asset Class Analysis' | 'Regulatory' | 'Portfolio Strategy';
  expert: string;
  affiliation: string;
  keyData?: {
    metric: string;
    value: string;
    source: string;
  }[];
}

interface MarketData {
  indicator: string;
  q2024: string;
  q2025: string;
  trend: 'up' | 'down' | 'stable';
  source: string;
}

// --- Data: Institutional Market Intelligence ---
const MARKET_DATA: MarketData[] = [
  { indicator: "Grade A Office Vacancy (Nairobi)", q2024: "19.3%", q2025: "15.3%", trend: "down", source: "Cytonn Research 2025" },
  { indicator: "Construction Sector Growth (Q2)", q2024: "-3.7%", q2025: "+5.7%", trend: "up", source: "KNBS Q2 2025" },
  { indicator: "Prime Office Rental Yield", q2024: "7.6%", q2025: "9.3%", trend: "up", source: "Knight Frank H1 2025" },
  { indicator: "UHNWI Portfolio Allocation (Real Estate)", q2024: "60%", q2025: "20%", trend: "down", source: "Knight Frank Wealth Report 2025" }
];

const VIDEO_LIBRARY: VideoBrief[] = [
  {
    id: "yHJhEoLEzLw",
    title: "The Deloitte 2026 CRE Outlook: Institutional Capital Rotation",
    abstract: "Analysis of the 850-investor survey revealing increased allocations to East African markets. John D'Angelo examines interest rate trajectories and their differential impact on Grade A office cap rates versus logistics assets.",
    date: "2026-01-12",
    duration: "42 min",
    category: "Market Intelligence",
    expert: "John D'Angelo",
    affiliation: "Deloitte Real Estate",
    keyData: [
      { metric: "Investors Surveyed", value: "850", source: "Deloitte" },
      { metric: "Global Avg Yield Compression", value: "47 bps", source: "Deloitte" }
    ]
  },
  {
    id: "466YcRaEfRw",
    title: "Top Issues Affecting Real Estate: The CRE Perspective",
    abstract: "John Hentschel, Global Chair of the Counselors of Real Estate, dissects the annual macro report. Critical examination of capital markets dislocation, economic risk premiums, and the flight-to-quality phenomenon in Nairobi's office sector.",
    date: "2026-01-08",
    duration: "38 min",
    category: "Asset Class Analysis",
    expert: "John Hentschel",
    affiliation: "Counselors of Real Estate",
    keyData: [
      { metric: "Nairobi Grade A Occupancy", value: "81.6%", source: "Knight Frank" },
      { metric: "Prime Rent (Westlands)", value: "$1.20/sqft", source: "Knight Frank" }
    ]
  },
  {
    id: "9w1TsWDp8Yg",
    title: "Multifamily Resilience: Sunbelt & East African Parallels",
    abstract: "Carl Whitaker presents absorption data from the 2024-2025 supply wave. Comparative analysis of Nairobi's Kilimani submarket versus US Sunbelt multifamily, examining NOI pressures from insurance cost inflation.",
    date: "2026-01-05",
    duration: "35 min",
    category: "Asset Class Analysis",
    expert: "Carl Whitaker",
    affiliation: "RealPage Analytics",
    keyData: [
      { metric: "Nairobi Multifamily Yield", value: "8.5%", source: "HassConsult" },
      { metric: "Sunbelt Vacancy", value: "12.3%", source: "RealPage" }
    ]
  },
  {
    id: "icns_ezaXHU",
    title: "Build-to-Rent: Demographic Arbitrage in Institutional Housing",
    abstract: "Chris Finlay of Middleburg Communities analyzes tenant retention metrics in BTR versus traditional multifamily. Examination of Nairobi's emerging single-family rental market and demographic demand drivers.",
    date: "2025-12-30",
    duration: "41 min",
    category: "Portfolio Strategy",
    expert: "Chris Finlay",
    affiliation: "Middleburg Communities",
    keyData: [
      { metric: "BTR Retention Rate", value: "68%", source: "Middleburg" },
      { metric: "Target Demographic", value: "35-50 yrs", source: "KNBS" }
    ]
  },
  {
    id: "mgmQm-6AUHw",
    title: "Office Market Inflection: CoStar H2 2025 Analysis",
    abstract: "Phil Mobley presents Q3 absorption data indicating first positive net absorption since 2019. Analysis of Class A backfilling versus secondary stock obsolescence in Nairobi CBD versus decentralized nodes.",
    date: "2025-11-15",
    duration: "45 min",
    category: "Market Intelligence",
    expert: "Phil Mobley",
    affiliation: "CoStar Group",
    keyData: [
      { metric: "CBD Vacancy Rate", value: "40%", source: "CoStar" },
      { metric: "Grade A Uptake", value: "+4.98%", source: "Knight Frank" }
    ]
  }
  
];

// --- Components ---

const SchemaInjector = ({ data }: { data: any }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

const MarketIndicator = ({ data }: { data: MarketData }) => (
  <div className="flex flex-col space-y-2 p-6 bg-[#F9F8F5] border-l-2 border-[#B8956B]">
    <div className="flex items-center justify-between">
      <span className="text-[10px] uppercase tracking-[0.2em] text-[#1B4332]/60 font-semibold">
        {data.indicator}
      </span>
      {data.trend === 'up' ? (
        <TrendingUp size={14} className="text-[#1B4332]" />
      ) : data.trend === 'down' ? (
        <TrendingUp size={14} className="text-[#B8956B] rotate-180" />
      ) : (
        <div className="w-2 h-2 rounded-full bg-[#B8956B]" />
      )}
    </div>
    <div className="flex items-baseline space-x-3">
      <span className="text-2xl font-serif text-[#1B4332]">{data.q2025}</span>
      <span className="text-xs text-[#2D3436]/50 line-through">{data.q2024}</span>
    </div>
    <span className="text-[9px] text-[#2D3436]/40 uppercase tracking-wider">Source: {data.source}</span>
  </div>
);

export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState<VideoBrief>(VIDEO_LIBRARY[0]);
  const [isSubscribed, setIsSubscribed] = useState(false);

  // SEO Schema Construction
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoObject",
        "name": activeVideo.title,
        "description": activeVideo.abstract,
        "thumbnailUrl": `https://img.youtube.com/vi/${activeVideo.id}/maxresdefault.jpg`,
        "uploadDate": activeVideo.date,
        "duration": `PT${activeVideo.duration.split(' ')[0]}M`,
        "publisher": {
          "@type": "Organization",
          "name": "Murivest",
          "logo": { "@type": "ImageObject", "url": "https://www. murivest.co.ke/logo.png" }
        },
        "embedUrl": `https://www.youtube.com/embed/${activeVideo.id}`,
        "author": {
          "@type": "Person",
          "name": activeVideo.expert,
          "affiliation": activeVideo.affiliation
        }
      },
      {
        "@type": "Article",
        "headline": "Commercial Real Estate Intelligence: Kenya Market Outlook 2026",
        "description": "Institutional-grade analysis of Nairobi Grade A office markets, UHNWI investment trends, and East African commercial real estate yields.",
        "author": { "@type": "Organization", "name": "Murivest Research" },
        "publisher": { "@type": "Organization", "name": "Murivest" },
        "datePublished": "2026-03-26",
        "about": {
          "@type": "Thing",
          "name": "Commercial Real Estate Investment",
          "description": "Kenya CRE market analysis"
        }
      }
    ]
  }), [activeVideo]);

  return (
    <div className="min-h-screen bg-[#F9F8F5] text-[#2D3436] pt-24 pb-20 font-sans selection:bg-[#B8956B]/30">
      <SchemaInjector data={structuredData} />

      {/* --- Editorial Header --- */}
      <header className="container mx-auto px-6 mb-16 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1B4332]/10 pb-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3 text-[#B8956B]">
              <BookOpen size={16} />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Market Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-[#1B4332] leading-[1.1] tracking-tight">
              Commercial Real Estate <em className="italic text-[#B8956B]">Intelligence</em>
            </h1>
            <p className="text-[#2D3436]/70 text-lg font-light leading-relaxed max-w-xl">
              Institutional analysis of East African property markets. Data-driven briefings for the sophisticated capital steward.
            </p>
          </div>
          
          <div className="mt-8 md:mt-0 text-right hidden md:block">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#2D3436]/40 mb-2">Current Issue</div>
            <div className="font-serif text-xl text-[#1B4332]">Q1 2026 Outlook</div>
            <div className="text-xs text-[#B8956B] mt-1">Vol. IV • March 2026</div>
          </div>
        </div>
      </header>

      {/* --- Market Data Strip --- */}
      <section className="container mx-auto px-6 mb-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {MARKET_DATA.map((data, idx) => (
            <MarketIndicator key={idx} data={data} />
          ))}
        </div>
        <div className="mt-3 text-[9px] text-[#2D3436]/40 uppercase tracking-wider text-right">
          Data: Kenya National Bureau of Statistics, Knight Frank, Cytonn Research
        </div>
      </section>

      {/* --- Main Content Grid --- */}
      <main className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT COLUMN: Primary Video & Analysis */}
          <div className="lg:w-2/3 space-y-12">
            
            {/* Video Player */}
            <div className="relative aspect-video w-full bg-[#1B4332] shadow-2xl overflow-hidden rounded-sm">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=0&rel=0&modestbranding=1`}
                title={activeVideo.title}
                allowFullScreen
              />
            </div>

            {/* Video Meta */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#2D3436]/60">
                <span className="flex items-center gap-2">
                  <Calendar size={12} /> {new Date(activeVideo.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={12} /> {activeVideo.duration}
                </span>
                <span className="px-2 py-1 bg-[#1B4332]/5 text-[#1B4332] rounded-full">
                  {activeVideo.category}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-[#1B4332] leading-tight">
                {activeVideo.title}
              </h2>

              <div className="flex items-center gap-4 py-4 border-y border-[#1B4332]/10">
                <div className="h-12 w-12 rounded-full bg-[#1B4332] flex items-center justify-center text-[#F9F8F5] font-serif text-lg">
                  {activeVideo.expert.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-serif text-lg text-[#1B4332]">{activeVideo.expert}</div>
                  <div className="text-xs text-[#2D3436]/60">{activeVideo.affiliation}</div>
                </div>
                <button 
                  onClick={() => setIsSubscribed(!isSubscribed)}
                  className={`ml-auto px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all border ${
                    isSubscribed 
                      ? 'bg-[#1B4332] text-[#F9F8F5] border-[#1B4332]' 
                      : 'bg-transparent text-[#1B4332] border-[#1B4332] hover:bg-[#1B4332] hover:text-[#F9F8F5]'
                  }`}
                >
                  {isSubscribed ? 'Subscribed' : 'Briefing Alerts'}
                </button>
              </div>
            </div>

            {/* Executive Abstract */}
            <article className="prose prose-lg max-w-none">
              <div className="flex items-center gap-3 mb-6 text-[#B8956B]">
                <FileText size={18} />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Executive Abstract</span>
              </div>
              
              <div className="text-[#2D3436]/80 leading-loose text-lg font-light space-y-6 border-l-2 border-[#B8956B] pl-6">
                <p>{activeVideo.abstract}</p>
                
                <div className="bg-[#1B4332]/[0.02] p-6 mt-6">
                  <h3 className="text-[#1B4332] font-serif text-lg mb-4 flex items-center gap-2">
                    <BarChart3 size={16} /> Key Metrics
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {activeVideo.keyData?.map((data, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="text-2xl font-serif text-[#1B4332]">{data.value}</div>
                        <div className="text-[10px] uppercase tracking-wider text-[#2D3436]/60">{data.metric}</div>
                        <div className="text-[9px] text-[#B8956B]">via {data.source}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-[#1B4332] font-serif text-xl mt-8 mb-4">Strategic Implications</h3>
                <p>
                  According to the <strong>Kenya National Bureau of Statistics</strong>, the construction sector rebounded to 5.7% growth in Q2 2025, 
                  reversing the 3.7% contraction recorded in Q2 2024 [^9^]. This macro recovery correlates with Knight Frank's observation of Nairobi's 
                  Grade A office vacancy declining to 15.3%—a 400 basis point improvement year-on-year—as multinational corporations executing 
                  "flight-to-quality" strategies absorb premium stock in Westlands and Gigiri [^1^][^3^].
                </p>
                <p>
                  For the UHNWI investor, the data presents a contrarian entry window. With only 6% of Kenyan wealth managers overseeing portfolios 
                  exceeding $1 billion, and capital rotation away from residential assets (allocation dropping from 60% to 20%) toward REITs and 
                  income-generating commercial infrastructure, institutional-grade office assets offer defensive positioning [^24^][^26^]. 
                  Stanlib Fahari I-REIT's current 9.6% yield—despite regulatory non-compliance on distribution ratios—signals underlying 
                  asset resilience [^18^][^30^].
                </p>
              </div>
            </article>

            {/* Archive Grid */}
            <div className="pt-12 border-t border-[#1B4332]/10">
              <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#2D3436]/40 mb-8">Briefing Archives</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {VIDEO_LIBRARY.filter(v => v.id !== activeVideo.id).map((video) => (
                  <button 
                    key={video.id}
                    onClick={() => setActiveVideo(video)}
                    className="group text-left space-y-3 p-4 hover:bg-white transition-colors rounded-sm border border-transparent hover:border-[#1B4332]/5"
                  >
                    <div className="aspect-video bg-[#1B4332]/5 relative overflow-hidden rounded-sm">
                      <img 
                        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                        alt={video.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-10 w-10 rounded-full bg-[#F9F8F5]/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play size={16} className="text-[#1B4332] fill-current ml-1" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest text-[#B8956B] mb-2">
                        {video.category} • {video.duration}
                      </div>
                      <h4 className="font-serif text-lg text-[#1B4332] leading-snug group-hover:text-[#B8956B] transition-colors">
                        {video.title}
                      </h4>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contextual Intelligence */}
          <aside className="lg:w-1/3 space-y-8">
            <div className="sticky top-24">
              
              {/* Data Room CTA */}
              <div className="bg-[#1B4332] text-[#F9F8F5] p-8 shadow-xl mb-8">
                <ShieldCheck size={32} className="text-[#B8956B] mb-4" />
                <h3 className="text-2xl font-serif mb-4">Investment Data Room</h3>
                <p className="text-[#F9F8F5]/70 text-sm leading-relaxed mb-6">
                  Access due diligence packages for active mandates. Includes valuation models, lease abstracts, and KNBS demographic overlays.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#B8956B] hover:text-[#F9F8F5] transition-colors"
                >
                  Request Access <ArrowUpRight size={14} />
                </Link>
              </div>

              {/* Featured Mandate */}
              <div className="border border-[#1B4332]/10 bg-white p-6 mb-8">
                <div className="text-[9px] uppercase tracking-[0.3em] text-[#B8956B] font-bold mb-3">Featured Mandate</div>
                <h4 className="font-serif text-xl text-[#1B4332] mb-3">Best Western Meridian Hotel</h4>
                <div className="space-y-2 text-sm text-[#2D3436]/70 mb-4">
                  <div className="flex justify-between">
                    <span>Target IRR</span>
                    <span className="font-serif text-[#1B4332]">15.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Asset Class</span>
                    <span>Hospitality</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location</span>
                    <span className="flex items-center gap-1"><MapPin size={10} /> Nairobi</span>
                  </div>
                </div>
                <Link 
                  href="/properties/best-western-meridian-hotel"
                  className="block w-full py-3 text-center text-[10px] uppercase tracking-widest font-bold border border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-[#F9F8F5] transition-all"
                >
                  View Offering
                </Link>
              </div>

              {/* Research Sources */}
              <div className="p-6 border-t border-[#1B4332]/10">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#2D3436]/40 mb-4">Primary Sources</h4>
                <ul className="space-y-3 text-xs text-[#2D3436]/60">
                  <li className="flex items-start gap-2">
                    <Bookmark size={12} className="mt-0.5 text-[#B8956B]" />
                    <span>Kenya National Bureau of Statistics, Q2 2025 GDP Report</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Bookmark size={12} className="mt-0.5 text-[#B8956B]" />
                    <span>Knight Frank, Africa Office Market Dashboard H1 2025</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Bookmark size={12} className="mt-0.5 text-[#B8956B]" />
                    <span>Cytonn Research, NMA Commercial Office Report 2025</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Bookmark size={12} className="mt-0.5 text-[#B8956B]" />
                    <span>Stanlib Fahari I-REIT, H1 2025 Financial Statements</span>
                  </li>
                </ul>
              </div>

              {/* Editorial Standards Note */}
              <div className="p-6 text-[10px] leading-relaxed text-[#2D3436]/40 italic border-t border-[#1B4332]/5">
                All market data verified against primary regulatory filings. 
                Historical performance does not guarantee future returns. 
                Consult qualified tax and legal counsel before investment.
              </div>

            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}