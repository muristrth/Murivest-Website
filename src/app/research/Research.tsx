'use client';

import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, ArrowRight, Clock, Calendar, User } from 'lucide-react';
import Link from 'next/link';
import { getAuthor } from "@/lib/genAuthor"
import Image from 'next/image';
// ─────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────
interface ResearchEntry {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  image: string
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const research: ResearchEntry[] = [
  {
    id: 'global-commercial-real-estate-2026',
    title: 'Global Commercial Real Estate Roars Back in 2026: $144 Billion in Fresh Capital Ready to Deploy',
    excerpt: 'After years of hesitation, institutional investors are returning to commercial real estate with renewed conviction. Falling interest rates and structural shifts in occupier demand have sparked a $144 billion capital wave, reshaping the investment landscape across offices, logistics, and alternative assets.',
    author: getAuthor('global-research'),
    image: '/research-images/global-commercial-real-estate-2026.webp',
    category: 'Global Commercial Real Estate',
    date: '2026-08-11',
    readTime: '12 min read',
    featured: true,
  },

];

// ─────────────────────────────────────────────────────────────
// UTILITIES
// ─────────────────────────────────────────────────────────────
function formatDate(raw: string): string {
  const d = new Date(raw);
  if (isNaN(d.getTime())) return raw;
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// ─────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────
export default function Research() {
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState('All');
  const [showAllCats, setShowAllCats] = useState(false);

  const catMap = useMemo(() => {
    const m = new Map<string, number>();
    research.forEach(p => m.set(p.category, (m.get(p.category) || 0) + 1));
    return m;
  }, []);

  const sortedCats = useMemo(
    () =>
      Array.from(catMap.entries())
        .sort((a, b) => b[1] - a[1])
        .map(([name, count]) => ({ name, count })),
    [catMap]
  );

  const CATS_VISIBLE = 12;
  const visibleCats = showAllCats ? sortedCats : sortedCats.slice(0, CATS_VISIBLE);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return research.filter(p => {
      const catOk = activeCat === 'All' || p.category === activeCat;
      const searchOk =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q);
      return catOk && searchOk;
    });
  }, [search, activeCat]);

   return (
    <>
      <style>{`
        .bp-page {
          font-family: Georgia, "Times New Roman", serif;
          min-height: 100vh;
          background: #FAFAF8;
        }

        /* HEADER */

        .bp-header {
          border-bottom: 1px solid #E2DDD6;
          background: #FAFAF8;
        }

        .bp-header-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 52px 24px 42px;
        }

        .bp-kicker {
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #9B8F7E;
          margin-bottom: 16px;
        }

        .bp-headline {
          font-size: clamp(34px, 5vw, 56px);
          line-height: 1.08;
          font-weight: 700;
          color: #1C1C1C;
          margin-bottom: 16px;
        }

        .bp-subhead {
          max-width: 640px;
          font-size: 16px;
          line-height: 1.75;
          color: #6B6259;
        }

        /* BODY */

        .bp-body {
          max-width: 1180px;
          margin: 0 auto;
          padding: 48px 24px 100px;
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 60px;
          align-items: start;
        }

        /* SIDEBAR */

        .bp-sidebar {
          position: sticky;
          top: 84px;
        }

        .bp-search-wrap {
          position: relative;
          margin-bottom: 28px;
        }

        .bp-search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          width: 14px;
          height: 14px;
          color: #9B8F7E;
        }

        .bp-search {
          width: 100%;
          padding: 12px 14px 12px 36px;
          border: 1px solid #E2DDD6;
          background: #FAFAF8;
          font-size: 13px;
          color: #1C1C1C;
          outline: none;
        }

        .bp-search:focus {
          border-color: #7B6C55;
        }

        .bp-cat-label {
          font-size: 10px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #9B8F7E;
          margin-bottom: 8px;
        }

        .bp-all-btn,
        .bp-cat-btn {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: none;
          border: none;
          padding: 10px 0;
          cursor: pointer;
          color: #3A3530;
          font-size: 13px;
          text-align: left;
        }

        .bp-active {
          font-weight: 700;
          color: #1C1C1C;
        }

        .bp-cat-count {
          color: #9B8F7E;
          font-size: 11px;
        }

        .bp-show-more {
          margin-top: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          color: #7B6C55;
          font-size: 12px;
        }

        /* MAIN */

        .bp-results-bar {
          border-bottom: 2px solid #1C1C1C;
          padding-bottom: 18px;
          margin-bottom: 12px;
        }

        .bp-results-label {
          font-size: 10px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #9B8F7E;
          display: block;
          margin-bottom: 4px;
        }

        .bp-results-count {
          font-size: 24px;
          font-weight: 700;
          color: #1C1C1C;
        }

        /* CARD */

        .bp-card {
          padding: 34px 0;
          border-bottom: 1px solid #E2DDD6;
        }

        .bp-card-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 28px;
          align-items: start;
        }

        .bp-card-image-link {
          position: relative;
          overflow: hidden;
          background: #F3F1EC;
          aspect-ratio: 16 / 10;
          display: block;
        }

        .bp-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .bp-card:hover .bp-card-image {
          transform: scale(1.03);
        }

        .bp-card-content {
          min-width: 0;
        }

        .bp-featured-strip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 12px;
        }

        .bp-featured-dot {
          width: 6px;
          height: 6px;
          background: #7B6C55;
          border-radius: 50%;
        }

        .bp-featured-text {
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #7B6C55;
        }

        .bp-card-cat-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .bp-card-cat {
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #9B8F7E;
        }

        .bp-card-rule {
          flex: 1;
          height: 1px;
          background: #E2DDD6;
        }

        .bp-card-title {
          display: block;
          font-size: clamp(20px, 2vw, 28px);
          line-height: 1.2;
          font-weight: 700;
          color: #1C1C1C;
          text-decoration: none;
          margin-bottom: 14px;
          transition: color 0.2s;
        }

        .bp-card-title:hover {
          color: #7B6C55;
        }

        .bp-card-excerpt {
          font-size: 15px;
          line-height: 1.8;
          color: #4A4540;
          margin-bottom: 18px;
        }

        .bp-card-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 18px;
        }

        .bp-card-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #9B8F7E;
        }

        .bp-card-meta-item svg {
          width: 12px;
          height: 12px;
        }

        .bp-read-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #7B6C55;
          border-bottom: 1px solid #C8BFB4;
          padding-bottom: 2px;
        }

        .bp-read-link:hover {
          color: #1C1C1C;
          border-color: #1C1C1C;
        }

        /* MOBILE */

        @media (max-width: 900px) {
          .bp-body {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .bp-sidebar {
            position: static;
            margin-bottom: 32px;
            padding-bottom: 24px;
            border-bottom: 1px solid #E2DDD6;
          }

          .bp-card-grid {
            grid-template-columns: 1fr;
          }

          .bp-card-image-link {
            aspect-ratio: 16 / 9;
          }
        }

        @media (max-width: 640px) {
          .bp-header-inner {
            padding: 38px 20px 30px;
          }

          .bp-body {
            padding: 28px 20px 80px;
          }

          .bp-card-title {
            font-size: 22px;
          }

          .bp-card-excerpt {
            font-size: 14px;
          }
        }
      `}</style>

      <div
        className="bp-page"
        style={{ paddingTop: '64px' }}
      >
        {/* HEADER */}

        <div className="bp-header">
          <div className="bp-header-inner">
            <p className="bp-kicker">Market Intelligence</p>

            <h1 className="bp-headline">
              Research & Insights
            </h1>

            <p className="bp-subhead">
              Institutional-grade analysis, investment
              intelligence, and strategic market insight for
              Kenya&apos;s evolving commercial real estate sector.
            </p>
          </div>
        </div>

        {/* BODY */}

        <div className="bp-body">
          {/* SIDEBAR */}

          <aside className="bp-sidebar">
            <div className="bp-search-wrap">
              <Search className="bp-search-icon" />

              <input
                className="bp-search"
                type="text"
                placeholder="Search research..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <p className="bp-cat-label">Categories</p>

            <button
              className={`bp-all-btn${
                activeCat === 'All' ? ' bp-active' : ''
              }`}
              onClick={() => setActiveCat('All')}
            >
              <span>All Research</span>

              <span className="bp-cat-count">
                {research.length}
              </span>
            </button>

            {visibleCats.map(({ name, count }) => (
              <button
                key={name}
                className={`bp-cat-btn${
                  activeCat === name ? ' bp-active' : ''
                }`}
                onClick={() => setActiveCat(name)}
              >
                <span>{name}</span>

                <span className="bp-cat-count">
                  {count}
                </span>
              </button>
            ))}

            {sortedCats.length > CATS_VISIBLE && (
              <button
                className="bp-show-more"
                onClick={() => setShowAllCats((v) => !v)}
              >
                {showAllCats ? (
                  <>
                    <ChevronUp />
                    Show less
                  </>
                ) : (
                  <>
                    <ChevronDown />
                    {sortedCats.length - CATS_VISIBLE} more
                  </>
                )}
              </button>
            )}
          </aside>

          {/* MAIN */}

          <main className="bp-main">
            <div className="bp-results-bar">
              <span className="bp-results-label">
                {activeCat === 'All'
                  ? 'All Research'
                  : activeCat}
              </span>

              <span className="bp-results-count">
                {filtered.length}{' '}
                {filtered.length === 1
                  ? 'article'
                  : 'articles'}
              </span>
            </div>

            {filtered.map((post) => (
              <article
                key={post.id}
                className="bp-card"
              >
                <div className="bp-card-grid">
                  {/* IMAGE */}

                  <Link
                    href={`/research/${post.id}`}
                    className="bp-card-image-link"
                  >
                    <Image
                      src={
                        post.image ||
                        '/default-research-image.webp'
                      }
                      alt={post.title}
                      width={1200}
                      height={700}
                      className="bp-card-image"
                    />
                  </Link>

                  {/* CONTENT */}

                  <div className="bp-card-content">
                    {post.featured && (
                      <div className="bp-featured-strip">
                        <span className="bp-featured-dot" />
                        <span className="bp-featured-text">
                          Featured
                        </span>
                      </div>
                    )}

                    <div className="bp-card-cat-row">
                      <span className="bp-card-cat">
                        {post.category}
                      </span>

                      <span className="bp-card-rule" />
                    </div>

                    <Link
                      href={`/research/${post.id}`}
                      className="bp-card-title"
                    >
                      {post.title}
                    </Link>

                    <p className="bp-card-excerpt">
                      {post.excerpt}
                    </p>

                    <div className="bp-card-meta">
                      <span className="bp-card-meta-item">
                        <Calendar />
                        {formatDate(post.date)}
                      </span>

                      <span className="bp-card-meta-item">
                        <Clock />
                        {post.readTime}
                      </span>

                      <span className="bp-card-meta-item">
                        <User />
                        {post.author}
                      </span>
                    </div>

                    <Link
                      href={`/research/${post.id}`}
                      className="bp-read-link"
                    >
                      Read article <ArrowRight />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </main>
        </div>
      </div>
    </>
  );
}