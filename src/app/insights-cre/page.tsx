import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Shield, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Real Estate Insights Kenya | CRE Market Intelligence | Murivest',
  description: 'Institutional-grade CRE analysis. Nairobi office market reports, yield compression data, sector performance, and East Africa capital flow intelligence for accredited investors.',
  keywords: 'commercial real estate insights Kenya, Nairobi office market report, CRE market intelligence Africa, real estate investment analysis Kenya, East Africa property market, office space market trends Nairobi, Murivest insights',
  openGraph: {
    title: 'Commercial Real Estate Insights | Murivest',
    description: 'Institutional CRE analysis on Nairobi office market, yield trends, and East Africa capital flows.',
    type: 'website',
    locale: 'en_KE',
  },
  alternates: { canonical: 'https://murivest.co.ke/insights-cre' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Commercial Real Estate Insights | Murivest',
  description: 'Institutional-grade CRE analysis for accredited investors. Nairobi office market reports, yield data, and East Africa capital flow intelligence.',
  url: 'https://murivest.co.ke/insights-cre',
  publisher: {
    '@type': 'Organization',
    name: 'Murivest Realty Group',
    url: 'https://murivest.co.ke',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://murivest.co.ke' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://murivest.co.ke/insights-cre' },
    ],
  },
};

export default async function InsightsPage() {
  const query = `*[_type == "insight" && !(_id in path("drafts.**"))] | order(publishedAt desc)`;
  const insights = await client.fetch(query);
  const validInsights = insights.filter((i: any) => i.title && i.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-[#1B4332] text-[#2C2C2C]">

        {/* ── Hero ── */}
        <section className="relative bg-amber-200/90 text-[#1B4332] overflow-hidden pt-32 pb-28 px-6 md:px-12 lg:px-16">
          <div className="absolute top-0 left-1/2 w-[600px] h-[400px] bg-amber-600/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="max-w-[1400px] mx-auto relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-[11px] tracking-[0.35em] uppercase text-[#8B7355] hover:text-amber-400 transition-colors mb-12">
              <ArrowLeft className="w-3 h-3" /> Back to Home
            </Link>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-amber-500" />
              <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#1B4332]">Market Intelligence Unit</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-8">
              Commercial<br /><span className="italic text-black">Insights</span>
            </h1>
            <p className="max-w-2xl text-black text-base md:text-lg font-light leading-relaxed border-l border-amber-500/30 pl-6 italic">
              Institutional-grade analysis on Kenyan real estate cycles, yield compressions,
              and emerging commercial corridors — written for investment committee review.
            </p>
          </div>
        </section>

        {/* ── Insights Grid ── */}
        <section className="relative bg-[#F8F7F4]">
          <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">

            {validInsights.length === 0 ? (
              <div className="text-center py-24">
                <p className="text-[#5A5A5A] text-[15px] font-light">No published insights yet. Check back shortly.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E2DC]">
                {validInsights.map((insight: any) => (
                  <Link
                    key={insight._id}
                    href={`/insights-cre/${insight.slug.current}`}
                    className="group bg-[#F8F7F4] p-8 md:p-10 flex flex-col justify-between hover:bg-white transition-colors duration-500"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#8B7355]">
                          {insight.assetClass || 'Market Analysis'}
                        </p>
                        <BookOpen className="w-4 h-4 text-[#E5E2DC] group-hover:text-[#8B7355] transition-colors duration-300" strokeWidth={1} />
                      </div>

                      {insight.mainImage ? (
                        <div className="relative h-44 w-full mb-6 overflow-hidden border border-[#E5E2DC]">
                          <Image src={urlFor(insight.mainImage).url()} alt={insight.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                      ) : (
                        <div className="h-44 w-full mb-6 bg-[#E5E2DC] border border-[#E5E2DC] flex items-center justify-center">
                          <span className="text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A]">No Image</span>
                        </div>
                      )}

                      <h3 className="text-xl font-serif text-[#2C2C2C] group-hover:text-[#8B7355] transition-colors duration-300 leading-snug mb-4">
                        {insight.title}
                      </h3>
                      <div className="w-8 h-[1px] bg-[#E5E2DC] mb-4" />
                      <p className="text-[13px] leading-[1.8] text-[#5A5A5A] font-light line-clamp-3">{insight.excerpt}</p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#E5E2DC] flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#5A5A5A]">
                        {insight.publishedAt ? new Date(insight.publishedAt).toLocaleDateString('en-KE', { month: 'short', year: 'numeric' }) : 'Recent'}
                      </span>
                      <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#8B7355] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Read Report <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── Assurance Footer ── */}
        <section className="relative bg-white">
          <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="text-[#8B7355] w-5 h-5" strokeWidth={1} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#2C2C2C]">Advisory Standards</span>
              </div>
              <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-[0.2em] text-[#5A5A5A]">
                {['Verified Market Data', 'Quarterly Updates', 'Institutional Access', 'Confidential Advisory'].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#8B7355] rounded-full" /> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5E2DC]" />
        </section>

      </div>
    </>
  );
}