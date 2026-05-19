'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import {
  ArrowLeft, Calendar, Clock, User, Twitter, Linkedin,
  MessageCircle, Copy, Check, ChevronRight, Mail,
} from 'lucide-react';
import { researchData, type researchPostData } from '@/lib/researchData';

// ─── Discussion imports (Claude's addition) ────────────────────────────────────
import AnalystSummary    from '@/components/discussions/AnalystSummary';
import DiscussionSection from '@/components/discussions/DiscussionSection';
import RelatedInsights   from '@/components/discussions/RelatedInsights';

// ─── Types ────────────────────────────────────────────────────────────────────
interface TocItem {
  id: string;
  text: string;
  level: number;
}

export interface researchPostProps {
  post?: researchPostData;
  /** Optional analyst summary rendered below the article body.
   *  Falls back to the post's built-in analystSummary field if omitted. */
  analystSummary?: string;
}

// ─── Utilities ────────────────────────────────────────────────────────────────
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function calcReadTime(html: string): string {
  const text = html.replace(/<[^>]*>/g, ' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.ceil(words / 220));
  return `${mins} min read`;
}

function extractToc(html: string): TocItem[] {
  if (typeof document === 'undefined') return [];
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const headings = doc.querySelectorAll('h2, h3');
  const toc: TocItem[] = [];
  headings.forEach((h) => {
    const text = h.textContent?.trim() ?? '';
    if (!text) return;
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    toc.push({ id, text, level: h.tagName === 'H2' ? 2 : 3 });
  });
  return toc;
}

function injectHeadingIds(html: string): string {
  return html.replace(/<(h[23])[^>]*>(.*?)<\/h[23]>/gi, (_match, tag, content) => {
    const text = content.replace(/<[^>]*>/g, '').trim();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `<${tag} id="${id}">${content}</${tag}>`;
  });
}

function getRelatedPosts(currentId: string, currentCategory: string, count = 3): Array<{ id: string; data: researchPostData }> {
  const sameCat = Object.entries(researchData)
    .filter(([id, post]) => id !== currentId && post.category === currentCategory)
    .slice(0, count);

  if (sameCat.length >= count) return sameCat.map(([id, data]) => ({ id, data }));

  const others = Object.entries(researchData)
    .filter(([id, post]) => id !== currentId && post.category !== currentCategory)
    .slice(0, count - sameCat.length);

  return [...sameCat, ...others].map(([id, data]) => ({ id, data }));
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString('en-KE', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

// ─── Author profiles ──────────────────────────────────────────────────────────
const AUTHOR_PROFILES: Record<string, { role: string; bio: string; linkedin?: string; email?: string }> = {
  'Murivest': {
    role: 'Murivest Realty Group',
    bio: "This piece was put together by the Murivest desk — a mix of analysts, advisors, and the occasional opinionated partner who just got back from a site walk. We write what we actually think, not what sounds good in a press release.",
    linkedin: 'https://www.linkedin.com/company/murivest',
    email: 'hello@murivest.co.ke',
  },
};

const DEFAULT_AUTHOR = {
  role: 'Murivest Editorial',
  bio: "Written by the Murivest team — analysts, advisors, and deal-doers based in Nairobi. We write from the field, not from a template.",
  email: 'hello@murivest.co.ke',
};

// ─── Scroll Progress ──────────────────────────────────────────────────────────
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, height: '3px', background: 'transparent' }}>
      <div style={{ height: '100%', background: '#7B6C55', width: `${progress}%`, transition: 'width 0.1s linear' }} />
    </div>
  );
}

// ─── Share Bar ────────────────────────────────────────────────────────────────
function ShareBar({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const copyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  const btnStyle: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: '6px',
    padding: '8px 14px', border: '1px solid #E2DDD6', background: 'transparent',
    color: '#6B6259', fontSize: '12px', letterSpacing: '0.05em', cursor: 'pointer',
    fontFamily: 'Georgia, serif', textDecoration: 'none', transition: 'all 0.15s',
  };
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
      <span style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9B8F7E', fontFamily: 'Georgia, serif', marginRight: '4px' }}>Share</span>
      <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noopener noreferrer" style={btnStyle}>
        <Twitter style={{ width: '13px', height: '13px' }} strokeWidth={1.5} /> X / Twitter
      </a>
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noopener noreferrer" style={btnStyle}>
        <Linkedin style={{ width: '13px', height: '13px' }} strokeWidth={1.5} /> LinkedIn
      </a>
      <a href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`} target="_blank" rel="noopener noreferrer" style={btnStyle}>
        <MessageCircle style={{ width: '13px', height: '13px' }} strokeWidth={1.5} /> WhatsApp
      </a>
      <button onClick={copyLink} style={{ ...btnStyle, border: copied ? '1px solid #7B6C55' : '1px solid #E2DDD6' }}>
        {copied
          ? <><Check style={{ width: '13px', height: '13px' }} strokeWidth={2} /> Copied</>
          : <><Copy style={{ width: '13px', height: '13px' }} strokeWidth={1.5} /> Copy Link</>}
      </button>
    </div>
  );
}

// ─── Table of Contents ────────────────────────────────────────────────────────
function TableOfContents({ toc }: { toc: TocItem[] }) {
  const [active, setActive] = useState('');
  useEffect(() => {
    const onScroll = () => {
      for (let i = toc.length - 1; i >= 0; i--) {
        const el = document.getElementById(toc[i].id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(toc[i].id);
          return;
        }
      }
      setActive('');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [toc]);
  if (toc.length < 3) return null;
  return (
    <nav aria-label="Table of contents" style={{ background: '#F5F3EE', border: '1px solid #E2DDD6', padding: '24px', marginBottom: '48px' }}>
      <p style={{ fontFamily: 'Georgia, serif', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#9B8F7E', margin: '0 0 16px 0' }}>
        In this article
      </p>
      <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {toc.map((item) => (
          <li key={item.id} style={{ paddingLeft: item.level === 3 ? '16px' : '0', marginBottom: '6px' }}>
            <a
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
              style={{
                display: 'block', fontFamily: 'Georgia, serif', fontSize: item.level === 2 ? '14px' : '13px',
                color: active === item.id ? '#1C1C1C' : '#6B6259', textDecoration: 'none',
                lineHeight: '1.5', paddingLeft: item.level === 3 ? '12px' : '0',
                borderLeft: item.level === 3 ? '1px solid #C8BFB4' : 'none',
                fontWeight: active === item.id ? '700' : '400', transition: 'color 0.15s',
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

// ─── Inline Related Posts (ad-style cards inside article) ─────────────────────
function InlineRelatedPosts({ currentId, category }: { currentId: string; category: string }) {
  const related = getRelatedPosts(currentId, category, 2);
  if (related.length === 0) return null;

  return (
    <aside aria-label="Recommended reading" style={{ 
      margin: '48px 0', 
      padding: '28px', 
      background: '#F5F3EE', 
      border: '1px solid #E2DDD6',
      borderLeft: '3px solid #7B6C55'
    }}>
      <p style={{ 
        fontFamily: 'Georgia, serif', 
        fontSize: '10px', 
        letterSpacing: '0.22em', 
        textTransform: 'uppercase', 
        color: '#9B8F7E', 
        marginBottom: '20px' 
      }}>
        You might also like
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
        {related.map(({ id, data }) => (
          <Link key={id} href={`/research/${id}`} style={{ 
            textDecoration: 'none', 
            display: 'block',
            background: '#FAFAF8',
            border: '1px solid #E2DDD6',
            padding: '20px',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}>
            <p style={{ 
              fontFamily: 'Georgia, serif', 
              fontSize: '10px', 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase', 
              color: '#9B8F7E', 
              marginBottom: '8px' 
            }}>
              {data.category}
            </p>
            <p style={{ 
              fontFamily: 'Georgia, "Times New Roman", serif', 
              fontSize: '15px', 
              fontWeight: '700', 
              color: '#1C1C1C', 
              lineHeight: '1.4', 
              marginBottom: '10px' 
            }}>
              {data.title}
            </p>
            <p style={{ 
              fontFamily: 'Georgia, serif', 
              fontSize: '13px', 
              color: '#6B6259', 
              lineHeight: '1.5',
              marginBottom: '12px',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}>
              {data.excerpt || stripHtml(data.content).slice(0, 120)}...
            </p>
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '4px',
              fontFamily: 'Georgia, serif', 
              fontSize: '11px', 
              color: '#7B6C55', 
              letterSpacing: '0.05em' 
            }}>
              Read article <ChevronRight style={{ width: '12px', height: '12px' }} />
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
}

// ─── Newsletter CTA (original interactive form restored) ────────────────────────
function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <aside 
      className="mv-newsletter not-prose bg-white px-8 py-12 my-16 border border-gray-200"
      aria-label="Newsletter signup"
    >
      {submitted ? (
        <p className="font-serif text-base text-gray-600 text-center m-0 leading-relaxed">
          Done. We email when it matters. Never fluff.
        </p>
      ) : (
        <div className="max-w-2xl">
          <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-gray-500 font-medium mb-4">
            Murivest Journal
          </p>

          <h3 className="font-serif text-2xl md:text-[28px] font-bold text-gray-900 leading-tight mb-3 tracking-tight">
            Institutional Global Property Trends and Market Analysis.
          </h3>
          <p className="font-serif text-base text-gray-600 m-0 leading-relaxed">
            Stay informed with our weekly insights on the latest trends and market analysis in global commercial real estate.
          </p>

          <div className="flex flex-wrap gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 min-w-[240px] bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 px-4 py-3.5 font-sans text-sm outline-none focus:border-gray-900 transition-colors"
            />
            <button
              onClick={() => { if (email.includes('@')) setSubmitted(true); }}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3.5 text-[11px] tracking-[0.15em] uppercase font-sans font-semibold cursor-pointer whitespace-nowrap transition-colors duration-200"
            >
              Subscribe
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}

// ─── Bottom Related Posts (original grid layout restored) ─────────────────────
function RelatedPosts({ posts }: { posts: Array<{ id: string; data: researchPostData }> }) {
  if (posts.length === 0) return null;
  return (
    <section aria-label="Related articles" style={{ borderTop: '1px solid #E2DDD6', paddingTop: '48px', marginTop: '48px' }}>
      <p style={{ fontFamily: 'Georgia, serif', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#9B8F7E', marginBottom: '24px' }}>
        Related Reading
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
        {posts.map(({ id, data }) => (
          <Link key={id} href={`/research/${id}`} style={{ textDecoration: 'none', display: 'block', borderTop: '2px solid #E2DDD6', paddingTop: '16px' }}>
            <p style={{ fontFamily: 'Georgia, serif', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9B8F7E', marginBottom: '8px' }}>{data.category}</p>
            <p style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '15px', fontWeight: '700', color: '#1C1C1C', lineHeight: '1.4', marginBottom: '8px' }}>{data.title}</p>
            <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#9B8F7E' }}>{data.readTime || calcReadTime(data.content)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

// ─── Author Bio ───────────────────────────────────────────────────────────────
function AuthorBio({ authorName }: { authorName: string }) {
  const profile = AUTHOR_PROFILES[authorName] ?? DEFAULT_AUTHOR;
  return (
    <footer style={{ borderTop: '1px solid #E2DDD6', borderBottom: '1px solid #E2DDD6', padding: '32px 0', marginTop: '48px', marginBottom: '48px' }}>
      <p style={{ fontFamily: 'Georgia, serif', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#9B8F7E', marginBottom: '8px' }}>Written by</p>
      <p style={{ fontFamily: 'Georgia, serif', fontSize: '18px', fontWeight: '700', color: '#1C1C1C', marginBottom: '4px' }}>{authorName}</p>
      <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9B8F7E', marginBottom: '12px' }}>{profile.role}</p>
      <p style={{ fontFamily: 'Georgia, serif', fontSize: '15px', color: '#6B6259', lineHeight: '1.7', margin: '0 0 16px 0', maxWidth: '560px' }}>{profile.bio}</p>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {profile.linkedin && (
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontFamily: 'Georgia, serif', fontSize: '12px', color: '#7B6C55', textDecoration: 'none', letterSpacing: '0.05em' }}>
            <Linkedin style={{ width: '13px', height: '13px' }} strokeWidth={1.5} /> LinkedIn
          </a>
        )}
        {profile.email && (
          <a href={`mailto:${profile.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontFamily: 'Georgia, serif', fontSize: '12px', color: '#7B6C55', textDecoration: 'none', letterSpacing: '0.05em' }}>
            <Mail style={{ width: '13px', height: '13px' }} strokeWidth={1.5} /> {profile.email}
          </a>
        )}
      </div>
    </footer>
  );
}

// ─── 404 ─────────────────────────────────────────────────────────────────────
function NotFoundPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FAFAF8', padding: '24px' }}>
      <div style={{ textAlign: 'center', maxWidth: '400px' }}>
        <p style={{ fontFamily: 'Georgia, serif', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#9B8F7E', marginBottom: '16px' }}>404</p>
        <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '28px', fontWeight: '700', color: '#1C1C1C', marginBottom: '12px', lineHeight: '1.3' }}>
          Article Not Found
        </h1>
        <p style={{ fontFamily: 'Georgia, serif', fontSize: '15px', color: '#6B6259', lineHeight: '1.7', marginBottom: '32px' }}>
          This article doesn't exist — or was moved. Either way, the research's got plenty of other reading.
        </p>
        <Link href="/research" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'Georgia, serif', fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7B6C55', textDecoration: 'none' }}>
          <ArrowLeft style={{ width: '14px', height: '14px' }} strokeWidth={1.5} /> Return to Journal
        </Link>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function researchPost({ post: postProp, analystSummary: analystSummaryProp }: researchPostProps) {
  const params = useParams();
  const id = (params?.id as string) ?? '';
  const post = postProp ?? (id ? researchData[id] : undefined);

  const [toc, setToc] = useState<TocItem[]>([]);
  const [ctaShown, setCtaShown] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  useEffect(() => {
    if (post?.content) setToc(extractToc(post.content));
  }, [post?.content]);

  useEffect(() => {
    const onScroll = () => {
      const scrollRatio = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollRatio >= 0.4) setCtaShown(true);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!post) return <NotFoundPage />;

  const readTime = post.readTime || calcReadTime(post.content);
  const postUrl = typeof window !== 'undefined' ? window.location.href : `https://murivest.co.ke/research/${id}`;
  const heroImage = post.image || 'https://murivest.co.ke/default-research-image.webp';
  const relatedPosts = getRelatedPosts(id, post.category);
  const processedContent = injectHeadingIds(post.content);

  // Analyst summary: prop override > post field
  const summaryToShow = analystSummaryProp ?? (post as any).analystSummary;

  // Structured data
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://murivest.co.ke' },
      { '@type': 'ListItem', position: 2, name: 'Research', item: 'https://murivest.co.ke/research' },
      { '@type': 'ListItem', position: 3, name: post.category, item: `https://murivest.co.ke/research?category=${encodeURIComponent(post.category)}` },
      { '@type': 'ListItem', position: 4, name: post.title, item: postUrl },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    dateModified: (post as any).dateModified ?? post.date,
    author: { '@type': 'Organization', name: post.author || 'Murivest' },
    publisher: { '@type': 'Organization', name: 'Murivest Realty Group', url: 'https://murivest.co.ke' },
    image: heroImage,
    url: postUrl,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <ScrollProgress />

      <div style={{ minHeight: '100vh', background: '#FAFAF8', paddingTop: '64px' }}>

        {/* Top Nav */}
        <div style={{ borderBottom: '1px solid #E2DDD6', background: '#FAFAF8' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '18px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <Link href="/research" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7B6C55', textDecoration: 'none', fontFamily: 'Georgia, serif' }}>
              <ArrowLeft style={{ width: '14px', height: '14px' }} strokeWidth={1.5} /> Back to Journal
            </Link>
            <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#9B8F7E', fontFamily: 'Georgia, serif', flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: '#9B8F7E', textDecoration: 'none' }}>Home</Link>
              <ChevronRight style={{ width: '10px', height: '10px' }} />
              <Link href="/research" style={{ color: '#9B8F7E', textDecoration: 'none' }}>Research</Link>
              <ChevronRight style={{ width: '10px', height: '10px' }} />
              <Link href={`/research?category=${encodeURIComponent(post.category)}`} style={{ color: '#9B8F7E', textDecoration: 'none' }}>{post.category}</Link>
              <ChevronRight style={{ width: '10px', height: '10px' }} />
              <span style={{ color: '#6B6259', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '180px' }}>{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <article style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 80px 24px' }}>

          {/* Header */}
          <header style={{ borderBottom: '1px solid #E2DDD6', paddingBottom: '32px', marginBottom: '48px', paddingTop: '48px' }}>
            <p style={{ fontFamily: 'Georgia, serif', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#9B8F7E', marginBottom: '16px' }}>{post.category}</p>
            <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: '700', color: '#1C1C1C', lineHeight: '1.15', marginBottom: '28px', letterSpacing: '-0.3px' }}>
              {post.title}
            </h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px 24px', fontSize: '13px', color: '#6B6259', fontFamily: 'Georgia, serif', marginBottom: '20px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar style={{ width: '13px', height: '13px', color: '#9B8F7E' }} strokeWidth={1.5} />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              {(post as any).dateModified && (post as any).dateModified !== post.date && (
                <>
                  <span style={{ color: '#C8BFB4' }}>·</span>
                  <span style={{ fontSize: '12px', color: '#9B8F7E' }}>Updated {formatDate((post as any).dateModified)}</span>
                </>
              )}
              <span style={{ color: '#C8BFB4' }}>·</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock style={{ width: '13px', height: '13px', color: '#9B8F7E' }} strokeWidth={1.5} /> {readTime}
              </span>
              <span style={{ color: '#C8BFB4' }}>·</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <User style={{ width: '13px', height: '13px', color: '#9B8F7E' }} strokeWidth={1.5} /> {post.author}
              </span>
            </div>
            <ShareBar title={post.title} url={postUrl} />
          </header>

          {/* Hero Image */}
          <div className="relative w-full overflow-hidden rounded-2xl bg-neutral-100">
            <Image
              src={heroImage}
              alt={post.title}
              width={1600}
              height={900}
              priority
              className="w-full h-auto object-contain"
              sizes="(max-width: 860px) 100vw, 860px"
              placeholder="blur"
              blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='900'%3E%3Crect fill='%23E8E4DE'/%3E%3C/svg%3E"
              onError={(e) => { (e.target as HTMLImageElement).src = '/default-research-image.webp'; }}
            />
          </div>

          <TableOfContents toc={toc} />

          {/* Body */}
          <div ref={contentRef}>
            <div
              style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '18px', lineHeight: '1.85', color: '#1C1C1C' }}
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />

            <InlineRelatedPosts currentId={id} category={post.category} />
            {ctaShown && <NewsletterCTA />}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <section aria-label="Tags" style={{ borderTop: '1px solid #E2DDD6', paddingTop: '32px', marginTop: '64px' }}>
              <p style={{ fontFamily: 'Georgia, serif', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#9B8F7E', marginBottom: '14px' }}>Filed under</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {post.tags.map((tag: string, i: number) => (
                  <Link key={i} href={`/research?tag=${encodeURIComponent(tag)}`} style={{ border: '1px solid #E2DDD6', padding: '6px 14px', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B6259', fontFamily: 'Georgia, serif', textDecoration: 'none', display: 'inline-block' }}>
                    {tag}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div style={{ borderTop: '1px solid #E2DDD6', paddingTop: '32px', marginTop: '40px' }}>
            <ShareBar title={post.title} url={postUrl} />
          </div>

          <AuthorBio authorName={post.author} />
          <RelatedPosts posts={relatedPosts} />

          {/* ── Claude's new discussion sections ─────────────────────────── */}
          {summaryToShow && (
            <div style={{ marginTop: '48px' }}>
              <AnalystSummary summary={summaryToShow} variant="article" />
            </div>
          )}

          <DiscussionSection
            pageSlug={id}
            pageType="article"
            variant="article"
          />

          <RelatedInsights variant="article" />

          <div style={{ textAlign: 'center', paddingTop: '8px', marginTop: '48px', borderTop: '1px solid #E2DDD6' }}>
            <Link href="/research" style={{ fontFamily: 'Georgia, serif', fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7B6C55', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <ArrowLeft style={{ width: '13px', height: '13px' }} strokeWidth={1.5} /> Back to Journal
            </Link>
          </div>

        </article>

        <div style={{ display: 'none' }} className="mobile-sticky-back">
          <Link href="/research" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'Georgia, serif', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7B6C55', textDecoration: 'none' }}>
            <ArrowLeft style={{ width: '13px', height: '13px' }} strokeWidth={1.5} /> Journal
          </Link>
        </div>

      </div>

      {/* ── Original CSS (full visual consistency rules restored) ────────── */}
      <style>{`
        @media (max-width: 640px) {
          .mobile-sticky-back { display: flex !important; position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); background: #FAFAF8; border: 1px solid #E2DDD6; padding: 10px 20px; z-index: 50; box-shadow: 0 2px 12px rgba(0,0,0,0.08); }
        }
        article blockquote, .prose blockquote { border-left: 3px solid #7B6C55 !important; padding: 20px 24px !important; margin: 32px 0 !important; background: #F5F3EE !important; font-style: normal !important; font-size: 19px !important; line-height: 1.7 !important; color: #1C1C1C !important; position: relative; }
        article blockquote p, .prose blockquote p { margin: 0 !important; font-style: italic; }
        article blockquote cite, .prose blockquote cite { display: block; font-size: 13px; color: #9B8F7E; font-style: normal; letter-spacing: 0.05em; margin-top: 10px; }
        .honestly, .editors-note { background: #FFF8F0 !important; border-left: 3px solid #C8902A !important; padding: 20px 24px !important; margin: 32px 0 !important; font-size: 16px !important; color: #4A3B2A !important; line-height: 1.7 !important; }
        .honestly::before { content: "Honestly: "; font-weight: 700; color: #C8902A; }
        .editors-note::before { content: "Editor's note: "; font-weight: 700; font-style: italic; color: #C8902A; }
        article strong, .prose strong { color: #1C1C1C !important; font-weight: 700 !important; background: none !important; border-bottom: 1.5px solid #C8BFB4; padding-bottom: 1px; }
        article .lead, article p.lead, .hbr-lede { font-size: 20px !important; line-height: 1.75 !important; color: #4A4540 !important; font-style: italic; margin-bottom: 32px !important; }
        article h2, .prose h2 { font-family: Georgia, "Times New Roman", serif !important; font-size: clamp(20px, 3vw, 26px) !important; font-weight: 700 !important; color: #1C1C1C !important; margin-top: 56px !important; margin-bottom: 20px !important; line-height: 1.25 !important; letter-spacing: -0.2px; padding-top: 8px; border-top: 2px solid #E2DDD6; }
        article h3, .prose h3 { font-family: Georgia, "Times New Roman", serif !important; font-size: clamp(17px, 2.5vw, 21px) !important; font-weight: 700 !important; color: #1C1C1C !important; margin-top: 36px !important; margin-bottom: 14px !important; line-height: 1.3 !important; }
        article p, .prose p { font-family: Georgia, "Times New Roman", serif !important; font-size: 18px !important; line-height: 1.85 !important; color: #1C1C1C !important; margin-bottom: 24px !important; }
        article ul, article ol, .prose ul, .prose ol { padding-left: 24px !important; margin: 24px 0 !important; }
        article li, .prose li { font-family: Georgia, "Times New Roman", serif !important; font-size: 17px !important; line-height: 1.75 !important; color: #1C1C1C !important; margin-bottom: 8px !important; }
        article table, .hbr-table { width: 100% !important; border-collapse: collapse !important; margin: 32px 0 !important; font-family: Georgia, serif !important; font-size: 14px !important; }
        article th, .hbr-table th { background: #F5F3EE !important; color: #1C1C1C !important; font-weight: 700 !important; padding: 12px 16px !important; text-align: left !important; border-bottom: 2px solid #C8BFB4 !important; font-size: 12px !important; letter-spacing: 0.06em !important; text-transform: uppercase !important; }
        article td, .hbr-table td { padding: 12px 16px !important; border-bottom: 1px solid #E2DDD6 !important; color: #4A4540 !important; vertical-align: top !important; }
        article tr:hover td { background: #F9F7F4 !important; }
        article .bg-slate-50, article [class*="bg-slate"], article [class*="bg-emerald"], article [class*="border-emerald"], article [class*="border-l-4"] { background: #F5F3EE !important; border-left-color: #7B6C55 !important; border-radius: 0 !important; }
        .human-written-badge { display: inline-flex; align-items: center; gap: 5px; font-family: Georgia, serif; font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #9B8F7E; border: 1px solid #E2DDD6; padding: 4px 10px; }
        article a:not([class]) { color: #7B6C55 !important; text-decoration: underline !important; text-decoration-color: #C8BFB4 !important; text-underline-offset: 3px !important; transition: color 0.15s !important; }
        article a:not([class]):hover { color: #1C1C1C !important; text-decoration-color: #7B6C55 !important; }
        .hbr-source, article p[style*="font-size: 12px"], article p[style*="font-style: italic"][style*="color: #7f8c8d"] { font-size: 12px !important; color: #9B8F7E !important; font-style: italic !important; margin-top: -16px !important; letter-spacing: 0.03em !important; }
        article [style*="background-color: #f8fafc"], article [style*="background-color: #dcfce7"], article [style*="background-color: #dbeafe"], article [style*="background-color: #fef3c7"], article [style*="background-color: #ffebee"], article [style*="background-color: #f3e5f5"], article [style*="background-color: #fff3cd"], article [style*="background-color: #e8f5e9"], article [style*="background-color: #f8f9fa"] { background: #F5F3EE !important; border-radius: 0 !important; border-color: #C8BFB4 !important; }
        article [style*="background-color: #34495e"], article [style*="background-color: #1e3c72"], article [style*="background-color: #2a5298"], article [style*="background-color: #c0392b"], article [style*="background-color: #27ae60"], article [style*="background-color: #8e44ad"], article [style*="background-color: #e74c3c"] { background: #1C1C1C !important; color: #FAFAF8 !important; }
        article [style*="color: #2980b9"], article [style*="color: #27ae60"], article [style*="color: #8e44ad"], article [style*="color: #c0392b"], article [style*="color: #e74c3c"], article [style*="color: #2563eb"], article [style*="color: #1e40af"], article [style*="color: #15803d"], article [style*="color: #a16207"] { color: #7B6C55 !important; }
        article [style*="border-left: 5px solid"], article [style*="border-left: 4px solid"], article [style*="border-left: 3px solid"] { border-left-color: #7B6C55 !important; border-left-width: 3px !important; }
        article [style*="border-bottom: 5px solid"], article [style*="border-bottom: 3px solid"], article [style*="border-bottom: 2px solid #2563eb"] { border-bottom-color: #C8BFB4 !important; }
        article body { padding: 0 !important; margin: 0 !important; background: none !important; }
        article [style*="font-size: 1.5rem"] { font-size: 18px !important; }
        @media (max-width: 640px) {
          article p { font-size: 16px !important; }
          article h2 { font-size: 20px !important; margin-top: 40px !important; }
          article h3 { font-size: 17px !important; }
          article li { font-size: 16px !important; }
          article th, article td { padding: 8px 10px !important; font-size: 12px !important; }
          article blockquote { padding: 16px 18px !important; }
          article blockquote p { font-size: 17px !important; }
          [style*="display: grid"] { display: block !important; }
          [style*="grid-template-columns"] { display: block !important; }
        }
      `}</style>
    </>
  );
}