'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  author?: string;
}

interface BlogClientViewProps {
  post?: BlogPost;
  relatedPosts?: BlogPost[];
}

/**
 * Blog Client View - Golf Club Lounge Aesthetic
 * Full article view with editorial typography
 */
const BlogClientView = ({ 
  post,
  relatedPosts = []
}: BlogClientViewProps) => {
  const defaultPost: BlogPost = {
    id: '1',
    title: 'The Case for East African Commercial Real Estate',
    content: `
      <p>The East African commercial real estate market has emerged as a compelling destination for institutional capital seeking yield, diversification, and long-term growth. At the heart of this opportunity lies Nairobi, a city that has quietly established itself as the financial and commercial capital of the region.</p>
      
      <p>What distinguishes this market is not merely its growth trajectory, but the structural drivers underpinning it. Rapid urbanization, a burgeoning middle class, and significant infrastructure investment have created conditions favorable to commercial property development and investment.</p>
      
      <h3>The Yield Advantage</h3>
      
      <p>Perhaps the most immediate attraction for international investors is the yield premium available in Nairobi compared to more developed markets. Grade-A office yields of 8-12% compare favorably to the sub-5% returns typical in London or New York.</p>
      
      <p>This yield advantage is not merely a reflection of risk, but of market maturity. As the institutional framework strengthens and transparency improves, we anticipate yield compression that will deliver capital appreciation alongside attractive income returns.</p>
      
      <h3>Navigating the Landscape</h3>
      
      <p>Success in this market requires more than capital; it demands local expertise, established relationships, and a deep understanding of regulatory and cultural nuances. The most successful investments are those made with the guidance of partners who have navigated these waters for decades.</p>
      
      <p>At Murivest, we have built our practice on this foundation of local knowledge combined with international standards of governance and transparency. Our mandate-based approach ensures that every investment decision is aligned with our partners' long-term objectives.</p>
    `,
    excerpt: 'Examining the structural drivers behind Nairobi\'s emergence as a premier destination for institutional capital.',
    date: 'January 15, 2026',
    category: 'Market Analysis',
    image: '/kenya-night.png',
    readTime: '8 min read',
    author: 'Mark Muriithi',
    slug: ''
  };

  const displayPost = post || defaultPost;

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#2C2C2C]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F7F4]/95 backdrop-blur-sm border-b border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-4">
          <div className="flex items-center justify-between">
            <a 
              href="/insights"
              className="group inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-medium hover:text-[#2C2C2C] transition-colors duration-500"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Insights</span>
            </a>

            <div className="flex items-center gap-2">
              <div className="w-6 h-[1px] bg-[#8B7355]" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#8B7355] font-medium">
                Murivest
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="pt-16">
        <div className="relative aspect-[21/9] md:aspect-[3/1] overflow-hidden">
          <Image
            src={displayPost.image}
            alt={displayPost.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/60 via-transparent to-transparent" />
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4 mb-8"
        >
          <span className="px-3 py-1 border border-[#E5E2DC] text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-medium">
            {displayPost.category}
          </span>
          <div className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A]">
            <Calendar className="w-3 h-3" />
            <span>{displayPost.date}</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A]">
            <Clock className="w-3 h-3" />
            <span>{displayPost.readTime}</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] mb-8 text-[#2C2C2C]"
        >
          {displayPost.title}
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-16 h-[1px] bg-[#8B7355] mb-12 origin-left"
        />

        {/* Author */}
        {displayPost.author && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A]">
              By <span className="text-[#2C2C2C] font-medium">{displayPost.author}</span>
            </p>
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-[#2C2C2C] prose-p:text-[#5A5A5A] prose-p:font-light prose-p:leading-[1.8] prose-a:text-[#8B7355] prose-a:no-underline hover:prose-a:underline prose-h3:text-xl prose-h3:mt-12 prose-h3:mb-6"
          dangerouslySetInnerHTML={{ __html: displayPost.content }}
        />

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 pt-16 border-t border-[#E5E2DC]"
        >
          <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light mb-8">
            For more insights on East African commercial real estate and institutional investment opportunities, 
            subscribe to our private briefing series.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#8B7355] text-[12px] tracking-[0.2em] uppercase text-[#2C2C2C] font-medium hover:bg-[#8B7355] hover:text-[#F8F7F4] transition-all duration-500"
          >
            <span>Request Private Briefing</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#FAFAF8] border-t border-[#E5E2DC] py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="text-2xl md:text-3xl font-serif mb-12 text-[#2C2C2C]">
              Related <span className="italic text-[#8B7355] font-light">Insights</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <a 
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug || relatedPost.id}`}
                  className="group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#E5E2DC] mb-4">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <span className="text-[11px] tracking-[0.15em] uppercase text-[#8B7355]">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-lg font-serif mt-2 text-[#2C2C2C] group-hover:text-[#8B7355] transition-colors duration-500 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogClientView;