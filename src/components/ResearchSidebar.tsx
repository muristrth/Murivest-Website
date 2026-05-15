'use client';

import Link from 'next/link';
import Image from 'next/image';

interface SidebarPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
}

interface Props {
  relatedPosts: SidebarPost[];   // pass up to 10
  popularPosts: SidebarPost[];   // pass up to 10
}

// Roman numeral helper for popular posts
function toRoman(n: number): string {
  const map: [number, string][] = [
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
  ];
  let result = '';
  for (const [value, numeral] of map) {
    while (n >= value) { result += numeral; n -= value; }
  }
  return result;
}

export default function ResearchSidebar({ relatedPosts, popularPosts }: Props) {
  return (
    /*
     * STICKY MECHANICS
     * ─────────────────────────────────────────────────────────────────
     * The parent layout must be:  <div className="flex items-start gap-x-12">
     *   <article className="flex-1 min-w-0">…</article>
     *   <ResearchSidebar … />
     * </div>
     *
     * `sticky top-8` on this <aside> makes it pin 2 rem from the viewport
     * top while the article scrolls. Once the flex parent ends (bottom of
     * the article), the sidebar naturally releases and scrolls away —
     * no JavaScript required.
     * ─────────────────────────────────────────────────────────────────
     */
    <aside
      className="
        sticky top-8
        w-full max-w-[340px] shrink-0
        space-y-0
      "
      style={{ fontFamily: "'Cormorant Garamond', 'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
    >

      {/* ── RELATED ARTICLES ─────────────────────────────────────── */}
      <section
        className="border border-stone-300 bg-[#FAF7F2]"
        style={{ borderBottom: 'none' }}
      >
        {/* Section header */}
        <div
          className="px-6 pt-6 pb-4 border-b border-stone-300"
          style={{ background: 'linear-gradient(to bottom, #F0EBE1, #FAF7F2)' }}
        >
          <p
            className="text-[10px] tracking-[0.28em] uppercase text-stone-400 mb-1"
            style={{ fontFamily: 'inherit', letterSpacing: '0.28em' }}
          >
            Further Reading
          </p>
          <h3
            className="text-[17px] font-semibold text-stone-900 leading-tight"
            style={{ fontFamily: 'inherit' }}
          >
            Related Articles
          </h3>
          <p className="mt-1 text-[11px] text-stone-500 tracking-wide" style={{ fontFamily: 'inherit' }}>
            Commercial real estate intelligence
          </p>
        </div>

        {/* Article list */}
        <div className="divide-y divide-stone-200">
          {relatedPosts.slice(0, 10).map((post) => (
            <Link
              key={post.slug}
              href={`/research/${post.slug}`}
              className="group flex gap-3 px-5 py-4 hover:bg-[#F0EBE1] transition-colors duration-200"
            >
              {/* Thumbnail */}
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
                {/* Subtle gold overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ background: '#B8962E' }} />
              </div>

              {/* Text */}
              <div className="min-w-0 flex flex-col justify-center">
                <h4
                  className="text-[13px] font-semibold text-stone-800 leading-snug line-clamp-2 group-hover:text-[#8B6914] transition-colors duration-200"
                  style={{ fontFamily: 'inherit' }}
                >
                  {post.title}
                </h4>
                <p
                  className="mt-1 text-[11.5px] text-stone-500 line-clamp-2 leading-relaxed"
                  style={{ fontFamily: 'inherit' }}
                >
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── POPULAR ARTICLES ─────────────────────────────────────── */}
      <section className="border border-stone-300 bg-[#FAF7F2]" style={{ borderTop: '2px solid #8B6914' }}>

        {/* Section header */}
        <div className="px-6 pt-5 pb-4 border-b border-stone-200">
          <p
            className="text-[10px] tracking-[0.28em] uppercase text-stone-400 mb-1"
            style={{ fontFamily: 'inherit' }}
          >
            Most Read
          </p>
          <h3
            className="text-[17px] font-semibold text-stone-900"
            style={{ fontFamily: 'inherit' }}
          >
            Popular Articles
          </h3>
        </div>

        {/* Numbered list */}
        <div className="divide-y divide-stone-200">
          {popularPosts.slice(0, 10).map((post, index) => (
            <Link
              key={post.slug}
              href={`/research/${post.slug}`}
              className="group flex items-start gap-4 px-5 py-4 hover:bg-[#F0EBE1] transition-colors duration-200"
            >
              {/* Roman numeral index */}
              <span
                className="flex-shrink-0 w-6 text-[11px] font-bold mt-0.5 text-stone-400 group-hover:text-[#8B6914] transition-colors duration-200 select-none"
                style={{ fontFamily: 'inherit', letterSpacing: '0.05em' }}
                aria-hidden="true"
              >
                {toRoman(index + 1)}
              </span>

              {/* Rule separator */}
              <div className="absolute left-[52px] h-full border-l border-stone-200 pointer-events-none" aria-hidden="true" />

              <p
                className="text-[13px] text-stone-700 leading-snug group-hover:text-stone-900 transition-colors duration-200"
                style={{ fontFamily: 'inherit' }}
              >
                {post.title}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────────────── */}
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
          <span className="text-[9px] tracking-[0.3em] uppercase" style={{ color: '#B8962E', fontFamily: 'inherit' }}>
            Murivest Intelligence
          </span>
          <div className="flex-1 h-px" style={{ background: '#8B6914', opacity: 0.5 }} />
        </div>

        <h3
          className="text-[20px] font-semibold leading-snug"
          style={{ color: '#F5F0E4', fontFamily: 'inherit' }}
        >
          Commercial property trends,<br />
          <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>before they become public</em>
        </h3>

        <p className="mt-3 text-[12px] leading-relaxed" style={{ color: '#9E9484', fontFamily: 'inherit' }}>
          Weekly market reports, rental yield data, and off-market opportunities — curated for serious investors.
        </p>

        <div className="mt-5 space-y-2.5">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-3 text-[13px] outline-none focus:ring-0 placeholder:text-stone-500"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(184,150,46,0.35)',
              color: '#F5F0E4',
              fontFamily: 'inherit',
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = '#B8962E')}
            onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(184,150,46,0.35)')}
          />
          <button
            type="button"
            className="w-full px-4 py-3 text-[13px] font-semibold tracking-wider uppercase transition-all duration-300"
            style={{
              background: '#8B6914',
              color: '#FAF7F2',
              letterSpacing: '0.12em',
              fontFamily: 'inherit',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#A07B1E')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#8B6914')}
          >
            Subscribe
          </button>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section
        className="border border-stone-300 px-6 py-7"
        style={{
          background: '#FAF7F2',
          borderTop: '1px solid #D6CFC4',
        }}
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-stone-300" />
          <span
            className="text-[9px] tracking-[0.28em] uppercase text-stone-400"
            style={{ fontFamily: 'inherit' }}
          >
            Advisory
          </span>
          <div className="flex-1 h-px bg-stone-300" />
        </div>

        <h3
          className="text-[19px] font-semibold text-stone-900 leading-snug"
          style={{ fontFamily: 'inherit' }}
        >
          Invest in Nairobi<br />
          <em className="font-normal" style={{ color: '#8B6914', fontStyle: 'italic' }}>with institutional precision</em>
        </h3>

        <p className="mt-3 text-[12px] text-stone-500 leading-relaxed" style={{ fontFamily: 'inherit' }}>
          A private investment strategy tailored to your capital objectives and risk profile.
        </p>

        {/* Thin gold rule */}
        <div className="my-5 h-px" style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }} />

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

        {/* Footer mark */}
        <p
          className="mt-5 text-center text-[9px] tracking-[0.2em] uppercase text-stone-400"
          style={{ fontFamily: 'inherit' }}
        >
          Murivest Wealth · Est. Nairobi
        </p>
      </section>

    </aside>
  );
}