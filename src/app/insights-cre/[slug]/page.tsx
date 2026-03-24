import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Share2, FileText } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getInsight(slug: string) {
  const query = `*[_type == "insight" && slug.current == $slug][0]`;
  return await client.fetch(query, { slug });
}

const ptComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-12 border border-white/10 p-2 bg-[#080a0f]">
        <div className="relative h-[400px] w-full">
          <Image src={urlFor(value).url()} alt="Strategic Location" fill className="object-cover" />
        </div>
        <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-4 px-2">
          Fig 1.1 — Strategic Asset Analysis Visual
        </p>
      </div>
    ),
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-serif italic text-amber-200/90 mt-16 mb-8 border-l-4 border-amber-600 pl-6">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold uppercase tracking-[0.3em] text-white mt-12 mb-6">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-slate-400 text-lg font-light leading-relaxed mb-8 last:mb-0">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <div className="my-12 p-8 bg-amber-600/5 border-y border-amber-600/20 relative">
        <span className="absolute -top-3 left-8 bg-slate-950 px-4 text-amber-500 text-[10px] font-bold uppercase tracking-widest">
          Advisory Note
        </span>
        <p className="text-xl font-serif italic text-amber-100/80 leading-relaxed text-center">
          {children}
        </p>
      </div>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="space-y-4 mb-12 border-l border-white/10 pl-8">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="flex items-start gap-4 text-slate-400 text-sm uppercase tracking-widest">
        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-1.5" />
        {children}
      </li>
    ),
  },
};


export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = await getInsight(slug);

  if (!insight) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-white font-light selection:bg-amber-500/30">
      
      {/* HEADER NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5 px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/insights-cre" className="flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors text-xs uppercase tracking-widest">
            <ArrowLeft size={14} /> Back to Intelligence
          </Link>
          <div className="flex gap-6">
             <Share2 size={14} className="text-slate-500 hover:text-white cursor-pointer" />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: CONTENT ANALYSIS (8 Columns) */}
          <div className="lg:col-span-8">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-amber-500" />
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-500">
                  {insight.assetClass} Analysis
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-serif italic leading-tight mb-8 text-amber-50/90">
                {insight.title}
              </h1>
              <p className="text-xl text-slate-400 font-light leading-relaxed italic border-l-2 border-amber-500/30 pl-6 mb-12">
                {insight.excerpt}
              </p>
            </div>

            <div className="relative h-[500px] w-full mb-16">
              <Image 
                src={urlFor(insight.mainImage).url()} 
                alt={insight.title}
                fill 
                className="object-cover"
                priority
              />
            </div>

            {/* PORTABLE TEXT BODY */}
            <div className="prose prose-invert prose-amber max-w-none 
              prose-p:text-slate-300 prose-p:leading-loose prose-p:text-lg
              prose-headings:font-serif prose-headings:italic prose-headings:text-amber-100
              prose-blockquote:border-amber-500 prose-blockquote:bg-white/5 prose-blockquote:py-2">
              <div className="max-w-3xl mx-auto">
            <PortableText value={insight.body} components={ptComponents} />
            </div>
            </div>
          </div>

          {/* RIGHT: INSTITUTIONAL SIDEBAR (4 Columns) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="bg-[#080a0f] border border-white/10 p-8">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 mb-8 flex items-center gap-2">
                  <FileText size={12} /> Report Metadata
                </h3>
                
                <div className="space-y-8">
                  <div>
                    <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-1">Date of Issue</p>
                    <p className="text-lg font-serif italic text-white">
                      {new Date(insight.publishedAt).toLocaleDateString('en-KE', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-1">Resource Type</p>
                    <p className="text-lg font-serif italic text-white">Institutional Advisory</p>
                  </div>

                  <div className="flex items-center gap-2 text-slate-400 text-sm italic">
                    <Clock size={14} /> {insight.readTime || '10 min'} read
                  </div>
                </div>

                <button className="w-full mt-10 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold py-4 text-[10px] uppercase tracking-[0.2em] transition-all">
                  Request Full Data Set
                </button>
              </div>

              <div className="p-8 border-l border-white/5">
                <p className="text-[10px] text-slate-500 leading-relaxed uppercase tracking-widest">
                  Notice: This analysis is intended for institutional clients. Distribution without express consent from Murivest Advisory is prohibited.
                </p>
              </div>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}