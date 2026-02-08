import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, TrendingUp, Shield } from 'lucide-react';

export default async function InsightsPage() {
  const query = `*[_type == "insight"] | order(publishedAt desc)`;
  const insights = await client.fetch(query);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-light selection:bg-amber-500/30">
      
      {/* 1. ARCHITECTURAL HERO HEADER */}
      <section className="relative pt-40 pb-20 px-8">
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-amber-600/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <TrendingUp size={14} className="text-amber-500" />
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-amber-500">Market Intelligence Unit</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-serif italic mb-6">Commercial <span className="text-amber-200/90">Insights</span></h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg font-light leading-relaxed">
            Institutional-grade analysis on Kenyan real estate cycles, yield compressions, and emerging commercial corridors.
          </p>
        </div>
      </section>

      {/* 2. INSIGHTS GRID */}
      <main className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {insights.map((insight: any) => (
            <Link 
              key={insight._id} 
              href={`/insights-cre/${insight.slug.current}`}
              className="group bg-[#080a0f] p-8 lg:p-12 flex flex-col justify-between transition-all hover:bg-slate-900/50"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-500">
                    {insight.category}
                  </span>
                  <BookOpen size={16} className="text-slate-600 group-hover:text-amber-500 transition-colors" />
                </div>

                <div className="relative h-48 w-full mb-8 overflow-hidden border border-white/5">
                   <Image 
                      src={urlFor(insight.mainImage).url()} 
                      alt={insight.title}
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
                    />
                </div>
                
                <h3 className="text-2xl font-serif italic group-hover:text-amber-200 transition-colors leading-tight mb-4">
                  {insight.title}
                </h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed line-clamp-3">
                  {insight.excerpt}
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
                  {new Date(insight.publishedAt).toLocaleDateString('en-KE', { month: 'short', year: 'numeric' })}
                </span>
                <span className="text-amber-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  View Report +
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* 3. ASSURANCE FOOTER */}
        <div className="mt-20 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="text-amber-500" size={24} strokeWidth={1} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">Advisory Standards</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-xs uppercase tracking-[0.2em] text-slate-500">
             <span className="flex items-center gap-3"><div className="w-1 h-1 bg-amber-500 rounded-full" /> Verified Market Data</span>
             <span className="flex items-center gap-3"><div className="w-1 h-1 bg-amber-500 rounded-full" /> Quarterly Updates</span>
             <span className="flex items-center gap-3"><div className="w-1 h-1 bg-amber-500 rounded-full" /> Institutional Access</span>
          </div>
        </div>
      </main>
    </div>
  );
}