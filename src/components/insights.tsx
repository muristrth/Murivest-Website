import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';

export default function InsightCard({ insight }: { insight: any }) {
  return (
    <article className="group border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
      <Link href={`/insights-cre/${insight.slug.current}`}>
        <div className="relative h-56 w-full mb-6 overflow-hidden">
          <Image 
            src={urlFor(insight.mainImage).url()} 
            alt={insight.title}
            fill 
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          {/* Amber Accent Tag */}
          <div className="absolute top-0 left-0 bg-[#d97706] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
            {insight.category}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-[#d97706] transition-colors">
          {insight.title}
        </h3>
        
        <p className="text-slate-600 text-sm font-light leading-relaxed mb-6 line-clamp-3">
          {insight.excerpt}
        </p>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-[11px] text-slate-400 uppercase tracking-tighter italic">
            Advisory Report — {insight.publishedAt}
          </span>
          <span className="text-[#d97706] text-sm font-semibold">Read Analysis →</span>
        </div>
      </Link>
    </article>
  );
}