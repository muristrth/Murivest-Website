'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  ArrowUpRight,
  MapPin,
  Mail,
  Shield,
  Phone,
} from 'lucide-react';

// ─── Types ──────────────────────────────────────────────────────────────────

export interface SidebarProperty {
  slug: string;
  title: string;
  price: string;
  priceKsh?: string;
  yield?: string;
  city: string;
  state: string;
  propertyType: string;
  coverImage?: string | null;
  description?: string;
}

interface Props {
  relatedProperties: SidebarProperty[];   // up to 5 — same asset class
  popularProperties: SidebarProperty[];   // up to 8 — most recent / featured
  brokerEmail?: string;
  brokerPhone?: string;
}

// ─── Roman numeral helper ───────────────────────────────────────────────────

function toRoman(n: number): string {
  const map: [number, string][] = [
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
  ];
  let out = '';
  for (const [v, r] of map) while (n >= v) { out += r; n -= v; }
  return out;
}

// ─── Component ──────────────────────────────────────────────────────────────

export default function PropertySidebar({
  relatedProperties,
  popularProperties,
  brokerEmail = 'capital@murivest.co.ke',
  brokerPhone = '+254 115 277 610',
}: Props) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Wire to your email provider / Sanity action here
      setSubscribed(true);
    }
  };

  return (
    <aside className="space-y-0 w-full">

      {/* ── RELATED PROPERTIES ──────────────────────────────────────── */}
      {relatedProperties.length > 0 && (
        <section
          className="border border-[#E8E6E1] bg-white"
          style={{ borderBottom: 'none' }}
        >
          {/* Header */}
          <div
            className="px-6 pt-6 pb-4 border-b border-[#E8E6E1]"
            style={{ background: 'linear-gradient(to bottom, #F5F4F0, #FFFFFF)' }}
          >
            <p className="text-[9px] tracking-[0.3em] uppercase text-[#B8956B] mb-1 font-medium">
              Same Asset Class
            </p>
            <h3 className="font-serif text-[17px] text-[#2C2C2C] leading-tight">
              Related Opportunities
            </h3>
            <p className="mt-1 text-[11px] text-[#8B8680] tracking-wide">
              Comparable mandates from our portfolio
            </p>
          </div>

          {/* List */}
          <div className="divide-y divide-[#E8E6E1]">
            {relatedProperties.slice(0, 5).map((prop, i) => (
              <motion.div
                key={prop.slug}
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={`/properties/${prop.slug}`}
                  className="group flex gap-3 px-5 py-4 hover:bg-[#FAF9F6] transition-colors duration-200"
                >
                  {/* Thumbnail or colour block */}
                  <div
                    className="relative flex-shrink-0 overflow-hidden"
                    style={{
                      width: 72,
                      height: 72,
                      border: '1px solid #E8E6E1',
                      background: '#1B4332',
                    }}
                  >
                    {prop.coverImage ? (
                      <img
                        src={prop.coverImage}
                        alt={prop.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-[10px] tracking-[0.15em] uppercase text-[#B8956B] text-center px-1 leading-tight">
                          {prop.propertyType}
                        </span>
                      </div>
                    )}
                    {/* Gold overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      style={{ background: '#B8956B' }}
                    />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex flex-col justify-between py-0.5">
                    <div>
                      <h4 className="font-serif text-[13px] text-[#2C2C2C] leading-snug line-clamp-2 group-hover:text-[#1B4332] transition-colors duration-200">
                        {prop.title}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-1">
                        <MapPin size={11} className="text-[#B8956B] flex-shrink-0" strokeWidth={1.5} />
                        <span className="text-[11px] text-[#8B8680] truncate">
                          {prop.city}, {prop.state}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-end justify-between mt-2">
                      <span className="text-[12px] font-medium text-[#2C2C2C]">{prop.price}</span>
                      {prop.yield && (
                        <span className="text-[10px] tracking-wide text-[#1B4332] bg-[#1B4332]/8 px-2 py-0.5 border border-[#1B4332]/20">
                          {prop.yield} yield
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 self-center ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ArrowUpRight size={14} className="text-[#B8956B]" strokeWidth={1.5} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View all */}
          <div className="px-5 py-4 border-t border-[#E8E6E1]">
            <Link
              href="/kenya/properties"
              className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#8B8680] hover:text-[#1B4332] transition-colors group"
            >
              <span>View Asset</span>
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
            </Link>
          </div>
        </section>
      )}

      {/* ── MOST VIEWED / FEATURED ──────────────────────────────────── */}
      {popularProperties.length > 0 && (
        <section
          className="border border-[#E8E6E1] bg-white"
          style={{ borderTop: '2px solid #1B4332', borderBottom: 'none' }}
        >
          {/* Header */}
          <div className="px-6 pt-5 pb-4 border-b border-[#E8E6E1]">
            <div className="flex items-center gap-3 mb-1">
              <TrendingUp size={13} className="text-[#B8956B]" strokeWidth={1.5} />
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#B8956B] font-medium">
                High Interest
              </p>
            </div>
            <h3 className="font-serif text-[17px] text-[#2C2C2C]">
              Most Viewed Listings
            </h3>
          </div>

          {/* Numbered list */}
          <div className="divide-y divide-[#E8E6E1]">
            {popularProperties.slice(0, 8).map((prop, i) => (
              <Link
                key={prop.slug}
                href={`/properties/${prop.slug}`}
                className="group flex items-start gap-4 px-5 py-4 hover:bg-[#FAF9F6] transition-colors duration-200"
              >
                {/* Roman numeral */}
                <span
                  className="flex-shrink-0 w-5 text-[10px] font-bold mt-0.5 text-[#8B8680] group-hover:text-[#B8956B] transition-colors duration-200 select-none font-serif"
                  aria-hidden="true"
                >
                  {toRoman(i + 1)}
                </span>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] text-[#2C2C2C] leading-snug group-hover:text-[#1B4332] transition-colors duration-200 font-serif">
                    {prop.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-[10px] tracking-wide text-[#8B8680]">{prop.propertyType}</span>
                    <span className="w-1 h-1 rounded-full bg-[#E8E6E1]" />
                    <span className="text-[10px] text-[#8B8680]">{prop.city}</span>
                    {prop.yield && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-[#E8E6E1]" />
                        <span className="text-[10px] text-[#1B4332] font-medium">{prop.yield}</span>
                      </>
                    )}
                  </div>
                </div>

                <ArrowUpRight
                  size={13}
                  className="flex-shrink-0 self-center text-[#B8956B] opacity-0 group-hover:opacity-100 transition-opacity"
                  strokeWidth={1.5}
                />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── NEWSLETTER ──────────────────────────────────────────────── */}
      <section
        className="border border-[#E8E6E1] px-6 py-7"
        style={{
          background: 'linear-gradient(160deg, #1C1611 0%, #2D2318 65%, #1C1611 100%)',
          borderTop: '2px solid #B8956B',
        }}
      >
        {/* Ornamental rule */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px" style={{ background: '#8B6914', opacity: 0.4 }} />
          <span className="text-[9px] tracking-[0.3em] uppercase" style={{ color: '#B8956B', fontFamily: 'Georgia, serif' }}>
            Murivest Intelligence
          </span>
          <div className="flex-1 h-px" style={{ background: '#8B6914', opacity: 0.4 }} />
        </div>

        <h3
          className="text-[19px] font-serif leading-snug"
          style={{ color: '#F5F0E4' }}
        >
          Exclusive listings &amp;
          <em className="block font-light" style={{ color: '#C9A84C' }}>
            investment intelligence
          </em>
        </h3>

        <p className="mt-3 text-[12px] leading-relaxed" style={{ color: '#9E9484', fontFamily: 'Georgia, serif' }}>
          Off-market deals, yield analysis, and Nairobi market reports — delivered weekly.
        </p>

        {/* Form */}
        {subscribed ? (
          <div className="mt-5 flex items-center gap-3 border border-[#B8956B]/40 px-4 py-3">
            <Shield size={14} className="text-[#B8956B]" strokeWidth={1.5} />
            <p className="text-[12px]" style={{ color: '#C9A84C', fontFamily: 'Georgia, serif' }}>
              You&apos;re on the list. We&apos;ll be in touch.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="mt-5 space-y-2.5">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-[13px] outline-none placeholder:text-stone-500"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(184,150,46,0.3)',
                color: '#F5F0E4',
                fontFamily: 'Georgia, serif',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#B8956B')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(184,150,46,0.3)')}
            />
            <button
              type="submit"
              className="w-full px-4 py-3 text-[11px] font-semibold tracking-[0.18em] uppercase transition-all duration-300"
              style={{
                background: '#1B4332',
                color: '#FAF9F6',
                border: '1px solid #2D5A45',
                fontFamily: 'Georgia, serif',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#2D5A45')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#1B4332')}
            >
              Subscribe to Intelligence Brief
            </button>
          </form>
        )}
      </section>

      {/* ── CONTACT / CONSULTATION CTA ──────────────────────────────── */}
      <section
        className="border border-[#E8E6E1] px-6 py-7"
        style={{ background: '#FAF9F6', borderTop: '1px solid #E8E6E1' }}
      >
        {/* Ornamental rule */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-[#E8E6E1]" />
          <span className="text-[9px] tracking-[0.28em] uppercase text-[#8B8680]" style={{ fontFamily: 'Georgia, serif' }}>
            Advisory
          </span>
          <div className="flex-1 h-px bg-[#E8E6E1]" />
        </div>

        <h3 className="font-serif text-[19px] text-[#2C2C2C] leading-snug">
          Speak to an advisor
          <em className="block font-light text-[#B8956B] text-[17px]">
            on this opportunity
          </em>
        </h3>

        <p className="mt-3 text-[12px] text-[#8B8680] leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
          Our investment advisory team will provide a full briefing and arrange a site visit at your convenience.
        </p>

        {/* Thin gold gradient rule */}
        <div
          className="my-5 h-px"
          style={{ background: 'linear-gradient(to right, transparent, #B8956B, transparent)' }}
        />

        {/* Direct contact links */}
        <div className="space-y-2.5 mb-5">
          <a
            href={`mailto:${brokerEmail}`}
            className="flex items-center gap-3 text-[13px] text-[#5A5A5A] hover:text-[#1B4332] transition-colors group"
          >
            <div className="w-8 h-8 bg-[#F5F4F0] border border-[#E8E6E1] flex items-center justify-center group-hover:border-[#1B4332] transition-colors">
              <Mail size={14} className="text-[#B8956B]" strokeWidth={1.5} />
            </div>
            <span style={{ fontFamily: 'Georgia, serif' }}>{brokerEmail}</span>
          </a>
          <a
            href={`tel:${brokerPhone}`}
            className="flex items-center gap-3 text-[13px] text-[#5A5A5A] hover:text-[#1B4332] transition-colors group"
          >
            <div className="w-8 h-8 bg-[#F5F4F0] border border-[#E8E6E1] flex items-center justify-center group-hover:border-[#1B4332] transition-colors">
              <Phone size={14} className="text-[#B8956B]" strokeWidth={1.5} />
            </div>
            <span style={{ fontFamily: 'Georgia, serif' }}>{brokerPhone}</span>
          </a>
        </div>

        <div className="space-y-2.5">
          {/* Primary CTA */}
          <a
            href={`https://calendly.com/murivestrealty/advisory`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-4 py-3.5 text-center text-[11px] font-semibold tracking-[0.18em] uppercase transition-all duration-300"
            style={{
              background: '#1B4332',
              color: '#FAF9F6',
              fontFamily: 'Georgia, serif',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#2D5A45')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#1B4332')}
          >
            Book a Consultation
          </a>

          {/* Secondary CTA */}
          <a
            href={`mailto:${brokerEmail}?subject=Investment Inquiry`}
            className="block w-full px-4 py-3 text-center text-[11px] tracking-[0.15em] uppercase transition-all duration-300"
            style={{
              border: '1px solid #B8956B',
              color: '#B8956B',
              fontFamily: 'Georgia, serif',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#B8956B';
              e.currentTarget.style.color = '#FAF9F6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#B8956B';
            }}
          >
            Send an Enquiry
          </a>
        </div>

        {/* Footer mark */}
        <p
          className="mt-6 text-center text-[9px] tracking-[0.22em] uppercase text-[#8B8680]"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Murivest Wealth · Nairobi · Est.
        </p>
      </section>

    </aside>
  );
}