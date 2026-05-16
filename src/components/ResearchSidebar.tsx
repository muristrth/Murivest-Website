'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SidebarPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
}

interface Props {
  relatedPosts: SidebarPost[];
  popularPosts: SidebarPost[];
}

function toRoman(n: number): string {
  const map: [number, string][] = [
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];
  let result = '';
  for (const [value, numeral] of map) {
    while (n >= value) {
      result += numeral;
      n -= value;
    }
  }
  return result;
}

export default function ResearchSidebar({ relatedPosts, popularPosts }: Props) {
  // ─── Newsletter state ────────────────────────────────────
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Subscription failed');
      }

      setStatus('success');
      setMessage(data.message || 'Subscribed successfully!');
      setEmail('');
    } catch (err: any) {
      setStatus('error');
      setMessage(err.message || 'Something went wrong.');
    }
  }

  return (
    <aside
      className="
        sticky top-8
        w-full max-w-[340px] shrink-0
        space-y-0
      "
      style={{
        fontFamily:
          "'Cormorant Garamond', 'Palatino Linotype', 'Book Antiqua', Georgia, serif",
      }}
    >
      {/* ── RELATED ARTICLES ──────────────────────────────── */}
      <section
        className="border border-stone-300 bg-[#FAF7F2]"
        style={{ borderBottom: 'none' }}
      >
        {/* header unchanged */}
        <div
          className="px-6 pt-6 pb-4 border-b border-stone-300"
          style={{ background: 'linear-gradient(to bottom, #F0EBE1, #FAF7F2)' }}
        >
          <p className="text-[10px] tracking-[0.28em] uppercase text-stone-400 mb-1">
            Further Reading
          </p>
          <h3 className="text-[17px] font-semibold text-stone-900 leading-tight">
            Related Articles
          </h3>
          <p className="mt-1 text-[11px] text-stone-500 tracking-wide">
            Commercial real estate intelligence
          </p>
        </div>

        <div className="divide-y divide-stone-200">
          {relatedPosts.slice(0, 10).map((post) => (
            <Link
              key={post.slug}
              href={`/research/${post.slug}`}
              className="group flex gap-3 px-5 py-4 hover:bg-[#F0EBE1] transition-colors duration-200"
            >
              <div
                className="relative flex-shrink-0 overflow-hidden"
                style={{ width: 72, height: 72, border: '1px solid #D6CFC4' }}
              >
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={72}
                  height={72}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ background: '#B8962E' }}
                />
              </div>

              <div className="min-w-0 flex flex-col justify-center">
                <h4 className="text-[13px] font-semibold text-stone-800 leading-snug line-clamp-2 group-hover:text-[#8B6914] transition-colors duration-200">
                  {post.title}
                </h4>
                <p className="mt-1 text-[11.5px] text-stone-500 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── POPULAR ARTICLES ──────────────────────────────── */}
      <section
        className="border border-stone-300 bg-[#FAF7F2]"
        style={{ borderTop: '2px solid #8B6914' }}
      >
        <div className="px-6 pt-5 pb-4 border-b border-stone-200">
          <p className="text-[10px] tracking-[0.28em] uppercase text-stone-400 mb-1">
            Most Read
          </p>
          <h3 className="text-[17px] font-semibold text-stone-900">
            Popular Articles
          </h3>
        </div>

        <div className="divide-y divide-stone-200">
          {popularPosts.slice(0, 10).map((post, index) => (
            <Link
              key={post.slug}
              href={`/research/${post.slug}`}
              className="group relative flex items-start gap-4 px-5 py-4 hover:bg-[#F0EBE1] transition-colors duration-200"
            >
              {/* Roman numeral */}
              <span
                className="flex-shrink-0 w-6 text-[11px] font-bold mt-0.5 text-stone-400 group-hover:text-[#8B6914] transition-colors duration-200 select-none"
                style={{ letterSpacing: '0.05em' }}
                aria-hidden="true"
              >
                {toRoman(index + 1)}
              </span>

              {/* Rule separator – now properly contained */}
              <div
                className="absolute left-[52px] top-0 h-full border-l border-stone-200 pointer-events-none"
                aria-hidden="true"
              />

              <p className="text-[13px] text-stone-700 leading-snug group-hover:text-stone-900 transition-colors duration-200">
                {post.title}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── NEWSLETTER ─────────────────────────────────────── */}
      <section
        className="border border-stone-300 px-6 py-7"
        style={{
          background: 'linear-gradient(160deg, #1C1611 0%, #2D2318 60%, #1C1611 100%)',
          borderTop: '2px solid #8B6914',
        }}
      >
        {/* Decorative rule */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px" style={{ background: '#8B6914', opacity: 0.5 }} />
          <span
            className="text-[9px] tracking-[0.3em] uppercase"
            style={{ color: '#B8962E' }}
          >
            Murivest Intelligence
          </span>
          <div className="flex-1 h-px" style={{ background: '#8B6914', opacity: 0.5 }} />
        </div>

        <h3 className="text-[20px] font-semibold leading-snug" style={{ color: '#F5F0E4' }}>
          Commercial property trends,<br />
          <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>before they become public</em>
        </h3>

        <p className="mt-3 text-[12px] leading-relaxed" style={{ color: '#9E9484' }}>
          Weekly market reports, rental yield data, and off-market opportunities — curated for serious investors.
        </p>

        <form onSubmit={handleSubscribe} className="mt-5 space-y-2.5">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 text-[13px] outline-none focus:ring-0 placeholder:text-stone-500"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(184,150,46,0.35)',
              color: '#F5F0E4',
              fontFamily: 'inherit',
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = '#B8962E')}
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = 'rgba(184,150,46,0.35)')
            }
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-4 py-3 text-[13px] font-semibold tracking-wider uppercase transition-all duration-300 disabled:opacity-50"
            style={{
              background: '#8B6914',
              color: '#FAF7F2',
              letterSpacing: '0.12em',
              fontFamily: 'inherit',
            }}
            onMouseEnter={(e) => {
              if (status !== 'loading') e.currentTarget.style.background = '#A07B1E';
            }}
            onMouseLeave={(e) => {
              if (status !== 'loading') e.currentTarget.style.background = '#8B6914';
            }}
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>

          {/* Status messages */}
          {message && (
            <p
              className={`text-[11px] mt-1 ${
                status === 'success' ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section
        className="border border-stone-300 px-6 py-7"
        style={{
          background: '#FAF7F2',
          borderTop: '1px solid #D6CFC4',
        }}
      >
        {/* … CTA content unchanged … */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-stone-300" />
          <span className="text-[9px] tracking-[0.28em] uppercase text-stone-400">
            Advisory
          </span>
          <div className="flex-1 h-px bg-stone-300" />
        </div>

        <h3 className="text-[19px] font-semibold text-stone-900 leading-snug">
          Invest in Nairobi<br />
          <em className="font-normal" style={{ color: '#8B6914', fontStyle: 'italic' }}>
            with institutional precision
          </em>
        </h3>

        <p className="mt-3 text-[12px] text-stone-500 leading-relaxed">
          A private investment strategy tailored to your capital objectives and risk profile.
        </p>

        <div
          className="my-5 h-px"
          style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }}
        />

        <div className="space-y-2.5">
          <Link
            href="https://calendly.com/murivestrealty/advisory"
            className="block w-full px-4 py-3 text-center text-[12px] font-semibold tracking-widest uppercase transition-all duration-300"
            style={{
              background: '#1C1611',
              color: '#FAF7F2',
              letterSpacing: '0.14em',
              fontFamily: 'inherit',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#2D2318')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#1C1611')}
          >
            Book Consultation
          </Link>

          <Link
            href="/brochures/kenya-comfort-hotel-building.pdf"
            className="block w-full px-4 py-3 text-center text-[12px] tracking-wider uppercase transition-all duration-300"
            style={{
              border: '1px solid #8B6914',
              color: '#8B6914',
              letterSpacing: '0.1em',
              fontFamily: 'inherit',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#8B6914';
              e.currentTarget.style.color = '#FAF7F2';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#8B6914';
            }}
          >
            Download Asset Brief
          </Link>
        </div>

        <p className="mt-5 text-center text-[9px] tracking-[0.2em] uppercase text-stone-400">
          Murivest Wealth · Est. Nairobi
        </p>
      </section>
    </aside>
  );
}