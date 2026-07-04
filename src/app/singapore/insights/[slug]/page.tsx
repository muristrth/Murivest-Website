import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { SAMPLE_ARTICLES } from '../../(components)/data/singapore-market-data';
import ScrollReveal from '../../(components)/shared/ScrollReveal';
import { BreadcrumbSchema } from '../../(components)/shared/SchemaMarkup';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = SAMPLE_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: 'Article Not Found' };
  
  return {
    title: `${article.title} — Murivest Singapore`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      authors: [article.author],
      publishedTime: article.date,
    },
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = SAMPLE_ARTICLES.find((a) => a.slug === slug);
  
  if (!article) notFound();

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://murivest.com' },
        { name: 'Singapore', url: 'https://murivest.com/singapore' },
        { name: 'Insights', url: 'https://murivest.com/singapore/insights' },
        { name: article.title, url: `https://murivest.com/singapore/insights/${article.slug}` },
      ]} />

      <main>
        {/* Navigation */}
        <div className="bg-[#1B4332] border-b border-white/10">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-4">
            <Link href="/singapore/insights" className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
              Back to Insights
            </Link>
          </div>
        </div>

        {/* Article Hero */}
        <section className="relative bg-[#1B4332] py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D1F17]/60" />
          <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-12 text-center">
            <span className="inline-block text-[9px] tracking-[0.3em] uppercase bg-[#B8956B]/20 text-[#B8956B] px-3 py-1.5 mb-6">
              {article.category}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] mb-6">
              {article.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-[11px] text-white/60">
              <span className="text-[#B8956B]">{article.author}</span>
              <span className="text-white/20">|</span>
              <span>{article.authorRole}</span>
              <span className="text-white/20">|</span>
              <span>{article.date}</span>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-[#F8F7F4]">
          <div className="max-w-[800px] mx-auto px-6 md:px-12">
            <ScrollReveal>
              <div className="bg-white border border-[#E8E6E1] p-8 md:p-12">
                {/* Lead */}
                <p className="text-lg text-[#2C2C2C] leading-relaxed font-light mb-8 border-l-2 border-[#B8956B] pl-6 italic">
                  {article.excerpt}
                </p>

                {/* Full article content — would be fetched from Sanity */}
                <div className="prose prose-lg max-w-none">
                  <div className="p-8 bg-[#FAF9F6] border border-dashed border-[#E8E6E1] text-center">
                    <p className="text-sm text-[#8B8680] font-light mb-2">
                      Full article content loaded from Sanity CMS
                    </p>
                    <p className="text-[11px] text-[#B8956B] tracking-wider uppercase">
                      {article.title}
                    </p>
                    <p className="text-[10px] text-[#8B8680] mt-2">
                      Tags: {article.tags.join(', ')}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-10 pt-6 border-t border-[#E8E6E1]">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span key={tag} className="text-[10px] tracking-wider uppercase bg-[#1B4332]/5 text-[#1B4332] px-3 py-1.5 border border-[#1B4332]/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="mt-8 flex items-center gap-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B8680]">Share</span>
                  <button className="w-8 h-8 border border-[#E8E6E1] flex items-center justify-center hover:border-[#B8956B] transition-colors">
                    <Share2 className="w-3.5 h-3.5 text-[#8B8680]" strokeWidth={1.5} />
                  </button>
                  <button className="w-8 h-8 border border-[#E8E6E1] flex items-center justify-center hover:border-[#B8956B] transition-colors">
                    <Bookmark className="w-3.5 h-3.5 text-[#8B8680]" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
