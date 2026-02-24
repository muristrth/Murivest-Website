import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, TrendingUp, Shield } from 'lucide-react';

export default async function InsightsPage() {
  const query = `*[_type == "insight" && !(_id in path("drafts.**"))] | order(publishedAt desc)`;
  const insights = await client.fetch(query);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-light selection:bg-amber-500/30">
      
      {/* 1. ARCHITECTURAL HERO HEADER */}
      <section className="relative pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-20 px-4 md:px-6 lg:px-8">
        <div className="absolute top-0 left-1/2 w-[300px] md:w-[500px] lg:w-[800px] h-[250px] md:h-[350px] lg:h-[400px] bg-amber-600/5 blur-[80px] md:blur-[100px] lg:blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
            <TrendingUp size={14} className="text-amber-500" />
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase text-amber-500">Market Intelligence Unit</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-serif italic mb-4 md:mb-6">Commercial <span className="text-amber-200/90">Insights</span></h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base lg:text-lg font-light leading-relaxed px-2 md:px-0">
            Institutional-grade analysis on Kenyan real estate cycles, yield compressions, and emerging commercial corridors.
          </p>
        </div>
      </section>

      {/* 2. INSIGHTS GRID */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-20 md:pb-28 lg:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {insights.filter((insight: any) => insight.title && insight.slug).map((insight: any) => (
            <Link 
              key={insight._id} 
              href={`/insights-cre/${insight.slug.current}`}
              className="group bg-[#080a0f] p-5 md:p-6 lg:p-12 flex flex-col justify-between transition-all hover:bg-slate-900/50"
            >
              <div>
                <div className="flex justify-between items-start mb-4 md:mb-6 lg:mb-8">
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-amber-500">
                    {insight.assetClass}
                  </span>
                  <BookOpen size={16} className="text-slate-600 group-hover:text-amber-500 transition-colors" />
                </div>

                <div className="relative h-36 md:h-40 lg:h-48 w-full mb-4 md:mb-6 lg:mb-8 overflow-hidden border border-white/5">
                   {insight.mainImage ? (
                    <Image 
                      src={urlFor(insight.mainImage).url()} 
                      alt={insight.title}
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
                    />
                   ) : (
                    <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                      <span className="text-slate-600 text-xs">No Image</span>
                    </div>
                   )}
                </div>
                
                <h3 className="text-lg md:text-xl lg:text-2xl font-serif italic group-hover:text-amber-200 transition-colors leading-tight mb-3 md:mb-4">
                  {insight.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed line-clamp-2 md:line-clamp-3">
                  {insight.excerpt}
                </p>
              </div>

              <div className="mt-6 md:mt-8 lg:mt-12 pt-4 md:pt-6 lg:pt-8 border-t border-white/5 flex items-center justify-between">
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-600">
                  {new Date(insight.publishedAt).toLocaleDateString('en-KE', { month: 'short', year: 'numeric' })}
                </span>
                <span className="text-amber-500 text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  View Report +
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* 3. ASSURANCE FOOTER */}
        <div className="mt-12 md:mt-16 lg:mt-20 flex flex-col items-center">
          <div className="flex items-center gap-2 md:gap-3 lg:gap-4 mb-4 md:mb-6">
            <Shield className="text-amber-500" size={24} strokeWidth={1} />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white">Advisory Standards</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-5 lg:gap-8 text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] text-slate-500 px-2 md:px-0">
             <span className="flex items-center gap-2 md:gap-3"><div className="w-0.5 md:w-1 h-0.5 md:h-1 bg-amber-500 rounded-full" /> Verified Market Data</span>
             <span className="flex items-center gap-2 md:gap-3"><div className="w-0.5 md:w-1 h-0.5 md:h-1 bg-amber-500 rounded-full" /> Quarterly Updates</span>
             <span className="flex items-center gap-2 md:gap-3"><div className="w-0.5 md:w-1 h-0.5 md:h-1 bg-amber-500 rounded-full" /> Institutional Access</span>
          </div>
        </div>
      </main>
    </div>
  );
}