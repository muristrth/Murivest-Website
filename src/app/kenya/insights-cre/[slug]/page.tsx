import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Share2, FileText, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getInsight(slug: string) {
  const query = `*[_type == "insight" && slug.current == $slug && !(_id in path("drafts.**"))][0]`;
  return await client.fetch(query, { slug });
}

async function getRelated(assetClass: string, currentSlug: string) {
  const query = `*[_type == "insight" && assetClass == $assetClass && slug.current != $currentSlug && !(_id in path("drafts.**"))][0..2]`;
  return await client.fetch(query, { assetClass, currentSlug });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = await getInsight(slug);
  if (!insight) return {};
  return {
    title: `${insight.title} | Murivest Market Intelligence`,
    description: insight.excerpt || 'Institutional CRE analysis from Murivest Realty Group.',
    openGraph: {
      title: insight.title,
      description: insight.excerpt,
      type: 'article',
      publishedTime: insight.publishedAt,
      locale: 'en_KE',
      images: insight.mainImage ? [{ url: urlFor(insight.mainImage).width(1200).url() }] : [],
    },
    alternates: { canonical: `https://murivest.com/insights-cre/${slug}` },
  };
}

const ptComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-12 border border-[#E5E2DC]">
        <div className="relative h-[400px] w-full">
          <Image src={urlFor(value).url()} alt="Asset analysis visual" fill className="object-cover" />
        </div>
        <p className="text-[10px] uppercase tracking-widest text-[#5A5A5A] mt-4 px-4 pb-4">
          Fig — Strategic Asset Analysis Visual
        </p>
      </div>
    ),
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-2xl md:text-3xl font-serif text-[#2C2C2C] mt-16 mb-8 border-l-4 border-[#8B7355] pl-6">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-lg font-medium uppercase tracking-[0.2em] text-[#2C2C2C] mt-12 mb-6">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-[#5A5A5A] text-base font-light leading-[1.9] mb-8 last:mb-0">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <div className="my-12 p-8 bg-[#F8F7F4] border-y border-[#E5E2DC] relative">
        <span className="absolute -top-3 left-8 bg-white px-4 text-[#8B7355] text-[10px] font-bold uppercase tracking-widest">
          Advisory Note
        </span>
        <p className="text-xl font-serif italic text-[#2C2C2C] leading-relaxed text-center">{children}</p>
      </div>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="space-y-4 mb-12 border-l border-[#E5E2DC] pl-8">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="flex items-start gap-4 text-[#5A5A5A] text-sm font-light">
        <div className="w-1.5 h-1.5 bg-[#8B7355] rounded-full mt-2 flex-shrink-0" />
        {children}
      </li>
    ),
  },
};

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = await getInsight(slug);
  if (!insight) notFound();

  const related = await getRelated(insight.assetClass, slug);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: insight.title,
    description: insight.excerpt,
    datePublished: insight.publishedAt,
    publisher: { '@type': 'Organization', name: 'Murivest Realty Group', url: 'https://murivest.com' },
    url: `https://murivest.com/insights-cre/${slug}`,
    image: insight.mainImage ? urlFor(insight.mainImage).width(1200).url() : undefined,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://murivest.com' },
        { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://murivest.com/insights-cre' },
        { '@type': 'ListItem', position: 3, name: insight.title, item: `https://murivest.com/insights-cre/${slug}` },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <div className="min-h-screen bg-[#F8F7F4] text-[#2C2C2C]">

        {/* ── Nav ── */}
        <nav className="fixed top-0 w-full z-50 bg-[#F8F7F4]/90 backdrop-blur-md border-b border-[#E5E2DC] px-6 md:px-12 py-4">
          <div className="max-w-[1400px] mx-auto flex justify-between items-center">
            <Link href="/insights-cre" className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-[#5A5A5A] hover:text-[#8B7355] transition-colors">
              <ArrowLeft className="w-3 h-3" /> Back to Intelligence
            </Link>
            <Share2 className="w-4 h-4 text-[#5A5A5A] hover:text-[#2C2C2C] cursor-pointer transition-colors" strokeWidth={1} />
          </div>
        </nav>

        <main className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-28 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* ── Content ── */}
            <article className="lg:col-span-8">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-[#8B7355]" />
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#8B7355]">
                    {insight.assetClass} Analysis
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-8 text-[#2C2C2C]">
                  {insight.title}
                </h1>
                {insight.excerpt && (
                  <p className="text-lg text-[#5A5A5A] font-light leading-relaxed italic border-l-2 border-[#8B7355]/30 pl-6 mb-12">
                    {insight.excerpt}
                  </p>
                )}
              </div>

              {insight.mainImage && (
                <div className="relative h-[400px] md:h-[500px] w-full mb-16 border border-[#E5E2DC]">
                  <Image src={urlFor(insight.mainImage).url()} alt={insight.title} fill className="object-cover" priority />
                </div>
              )}

              <div className="max-w-3xl">
                <PortableText value={insight.body} components={ptComponents} />
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                <div className="border border-[#E5E2DC] bg-white">
                  <div className="px-8 py-6 border-b border-[#E5E2DC]">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#5A5A5A] flex items-center gap-2">
                      <FileText className="w-3 h-3" /> Report Metadata
                    </h3>
                  </div>
                  <div className="px-8 py-8 space-y-8">
                    <div>
                      <p className="text-[10px] font-bold text-[#8B7355] uppercase tracking-widest mb-2">Date of Issue</p>
                      <p className="text-base font-serif text-[#2C2C2C]">
                        {new Date(insight.publishedAt).toLocaleDateString('en-KE', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#8B7355] uppercase tracking-widest mb-2">Resource Type</p>
                      <p className="text-base font-serif text-[#2C2C2C]">Institutional Advisory</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#8B7355] uppercase tracking-widest mb-2">Asset Class</p>
                      <p className="text-base font-serif text-[#2C2C2C]">{insight.assetClass}</p>
                    </div>
                    {insight.readTime && (
                      <div className="flex items-center gap-2 text-[#5A5A5A] text-sm font-light">
                        <Clock className="w-3 h-3" strokeWidth={1} /> {insight.readTime} read
                      </div>
                    )}
                  </div>
                  <div className="px-8 pb-8">
                    <Link
                      href="/contact"
                      className="block w-full text-center py-4 bg-[#2C2C2C] text-white text-[10px] uppercase tracking-[0.2em] hover:bg-[#8B7355] transition-colors duration-500"
                    >
                      Request Full Data Set
                    </Link>
                  </div>
                </div>

                <div className="px-8 py-6 border-l border-[#E5E2DC]">
                  <p className="text-[10px] text-[#5A5A5A] leading-relaxed uppercase tracking-widest">
                    This analysis is for institutional clients only. Distribution without express consent from Murivest Advisory is prohibited.
                  </p>
                </div>
              </div>
            </aside>

          </div>

          {/* ── Related ── */}
          {related?.length > 0 && (
            <div className="mt-24 pt-16 border-t border-[#E5E2DC]">
              <div className="flex items-center gap-3 mb-12">
                <div className="w-8 h-[1px] bg-[#8B7355]" />
                <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">Related Intelligence</p>
              </div>
              <div className="grid md:grid-cols-2 gap-px bg-[#E5E2DC]">
                {related.map((r: any) => (
                  <Link key={r._id} href={`/insights-cre/${r.slug.current}`} className="group bg-[#F8F7F4] p-8 hover:bg-white transition-colors duration-500">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#8B7355] mb-3">{r.assetClass}</p>
                    <h3 className="text-lg font-serif text-[#2C2C2C] group-hover:text-[#8B7355] transition-colors duration-300 mb-4">{r.title}</h3>
                    <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#8B7355] opacity-0 group-hover:opacity-100 transition-opacity">
                      Read Report <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </main>

      </div>
    </>
  );
}