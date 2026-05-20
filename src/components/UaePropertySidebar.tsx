'use client';

/**
 * MURIVEST — UAE PROPERTY SIDEBAR
 * =================================
 * Discovery sidebar for the UAE property detail page.
 * Mirrors Propertysidebar.tsx architecture.
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight, MapPin, Mail, Shield, Phone } from 'lucide-react';
import type { UaeCategory } from '@/lib/sanity/client';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface UaeSidebarProperty {
  slug:          string;
  title:         string;
  priceAed?:     string;
  priceUsd?:     string;
  annualYield?:  string;
  emirate:       string;
  community?:    string;
  propertyType:  string;
  category:      UaeCategory;
  coverImage?:   string | null;
}

interface Props {
  relatedProperties: UaeSidebarProperty[];
  popularProperties: UaeSidebarProperty[];
  brokerEmail?:      string;
  brokerPhone?:      string;
}

const CATEGORY_LABELS: Record<UaeCategory, string> = {
  'for-sale':         'For Sale',
  'for-rent':         'For Rent',
  'off-plan':         'Off-Plan',
  'commercial-lease': 'Commercial',
  'portfolio':        'Portfolio',
};

const CATEGORY_DOT: Record<UaeCategory, string> = {
  'for-sale':         '#1B4332',
  'for-rent':         '#2D5A45',
  'off-plan':         '#B8956B',
  'commercial-lease': '#5A4A3A',
  'portfolio':        '#8B7355',
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function UaePropertySidebar({
  relatedProperties,
  popularProperties,
  brokerEmail = 'uae@murivest.co.ke',
  brokerPhone = '+971 50 123 4567',
}: Props) {
  const [email,      setEmail]      = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <aside className="space-y-0 w-full">

      {/* ── RELATED PROPERTIES ─────────────────────────────────────── */}
      {relatedProperties.length > 0 && (
        <section className="border border-[#E8E6E1] bg-white" style={{ borderBottom: 'none' }}>
          <div className="px-6 pt-6 pb-4 border-b border-[#E8E6E1]"
            style={{ background: 'linear-gradient(to bottom, #F5F4F0, #FFFFFF)' }}
          >
            <p className="text-[9px] tracking-[0.3em] uppercase text-[#B8956B] mb-1 font-medium">
              Same Asset Class · UAE
            </p>
            <h3 className="font-serif text-[17px] text-[#2C2C2C] leading-tight">
              Related Opportunities
            </h3>
            <p className="mt-1 text-[11px] text-[#8B8680] tracking-wide">
              Comparable mandates from our UAE portfolio
            </p>
          </div>

          <div className="divide-y divide-[#E8E6E1]">
            {relatedProperties.slice(0, 5).map((prop, i) => (
              <motion.div key={prop.slug}
                initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              >
                <Link href={`/uae-properties/${prop.slug}`}
                  className="group flex gap-3 px-5 py-4 hover:bg-[#FAF9F6] transition-colors duration-200"
                >
                  {/* Thumbnail */}
                  <div className="relative flex-shrink-0 overflow-hidden"
                    style={{ width: 72, height: 72, border: '1px solid #E8E6E1', background: '#1B4332' }}
                  >
                    {prop.coverImage ? (
                      <img src={prop.coverImage} alt={prop.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-[9px] tracking-[0.1em] uppercase text-[#B8956B] text-center px-1 leading-tight">
                          {prop.propertyType}
                        </span>
                      </div>
                    )}
                    {/* Category dot */}
                    <div className="absolute bottom-1.5 left-1.5 w-2 h-2 rounded-full"
                      style={{ background: CATEGORY_DOT[prop.category] || '#B8956B' }} />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex flex-col justify-between py-0.5">
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[8px] tracking-[0.2em] uppercase font-medium"
                          style={{ color: CATEGORY_DOT[prop.category] || '#B8956B' }}>
                          {CATEGORY_LABELS[prop.category]}
                        </span>
                      </div>
                      <h4 className="font-serif text-[13px] text-[#2C2C2C] leading-snug line-clamp-2 group-hover:text-[#1B4332] transition-colors">
                        {prop.title}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-1">
                        <MapPin size={10} className="text-[#B8956B] flex-shrink-0" strokeWidth={1.5} />
                        <span className="text-[10px] text-[#8B8680] truncate">
                          {prop.community ? `${prop.community}, ` : ''}{prop.emirate}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-end justify-between mt-2">
                      <span className="text-[12px] font-medium text-[#2C2C2C]">{prop.priceAed || 'POA'}</span>
                      {prop.annualYield && (
                        <span className="text-[10px] tracking-wide text-[#1B4332] bg-[#1B4332]/6 border border-[#1B4332]/15 px-2 py-0.5">
                          {prop.annualYield} yield
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex-shrink-0 self-center ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={13} className="text-[#B8956B]" strokeWidth={1.5} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="px-5 py-4 border-t border-[#E8E6E1]">
            <Link href="/uae-properties"
              className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#8B8680] hover:text-[#1B4332] transition-colors group"
            >
              <span>View UAE Portfolio</span>
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
            </Link>
          </div>
        </section>
      )}

      {/* ── MOST VIEWED ────────────────────────────────────────────── */}
      {popularProperties.length > 0 && (
        <section className="border border-[#E8E6E1] bg-white"
          style={{ borderTop: '2px solid #1B4332', borderBottom: 'none' }}
        >
          <div className="px-6 pt-5 pb-4 border-b border-[#E8E6E1]">
            <div className="flex items-center gap-3 mb-1">
              <TrendingUp size={12} className="text-[#B8956B]" strokeWidth={1.5} />
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#B8956B] font-medium">High Interest</p>
            </div>
            <h3 className="font-serif text-[17px] text-[#2C2C2C]">Featured Listings</h3>
          </div>

          <div className="divide-y divide-[#E8E6E1]">
            {popularProperties.slice(0, 8).map((prop, i) => (
              <Link key={prop.slug} href={`/uae-properties/${prop.slug}`}
                className="group flex items-center gap-3 px-5 py-3.5 hover:bg-[#FAF9F6] transition-colors"
              >
                <span className="flex-shrink-0 font-serif text-[13px] text-[#E8E6E1] group-hover:text-[#B8956B] transition-colors w-5 text-right">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[12px] text-[#2C2C2C] group-hover:text-[#1B4332] transition-colors truncate font-light">
                    {prop.title}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[9px] text-[#8B8680]">{prop.emirate}</span>
                    {prop.annualYield && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-[#E8E6E1]" />
                        <span className="text-[9px] text-[#1B4332] font-medium">{prop.annualYield}</span>
                      </>
                    )}
                  </div>
                </div>
                <ArrowUpRight size={12} className="flex-shrink-0 text-[#B8956B] opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── NEWSLETTER ─────────────────────────────────────────────── */}
      <section className="border border-[#E8E6E1] px-6 py-7"
        style={{ background: 'linear-gradient(160deg, #1C1611 0%, #2D2318 65%, #1C1611 100%)', borderTop: '2px solid #B8956B' }}
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px" style={{ background: '#8B6914', opacity: 0.4 }} />
          <span className="text-[9px] tracking-[0.3em] uppercase font-serif" style={{ color: '#B8956B' }}>
            Murivest Intelligence
          </span>
          <div className="flex-1 h-px" style={{ background: '#8B6914', opacity: 0.4 }} />
        </div>

        <h3 className="text-[19px] font-serif leading-snug" style={{ color: '#F5F0E4' }}>
          UAE Market Alerts &amp;
          <em className="block font-light" style={{ color: '#C9A84C' }}>off-market deals</em>
        </h3>

        <p className="mt-3 text-[12px] leading-relaxed font-serif" style={{ color: '#9E9484' }}>
          Dubai off-plan releases, yield analysis, and cross-border investor reports — delivered weekly.
        </p>

        {subscribed ? (
          <div className="mt-5 flex items-center gap-3 border border-[#B8956B]/40 px-4 py-3">
            <Shield size={13} className="text-[#B8956B]" strokeWidth={1.5} />
            <p className="text-[12px] font-serif" style={{ color: '#C9A84C' }}>You&apos;re on the list. We&apos;ll be in touch.</p>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="mt-5 space-y-2.5">
            <input type="email" required placeholder="Your email address" value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-[13px] outline-none placeholder:text-stone-500 font-serif"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(184,150,46,0.3)', color: '#F5F0E4' }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#B8956B')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(184,150,46,0.3)')}
            />
            <button type="submit"
              className="w-full px-4 py-3 text-[11px] font-semibold tracking-[0.18em] uppercase font-serif transition-all duration-300 hover:bg-[#2D5A45]"
              style={{ background: '#1B4332', color: '#FAF9F6', border: '1px solid #2D5A45' }}
            >
              Subscribe to UAE Intelligence
            </button>
          </form>
        )}
      </section>

      {/* ── CONTACT / CONSULTATION ─────────────────────────────────── */}
      <section className="border border-[#E8E6E1] px-6 py-7" style={{ background: '#FAF9F6' }}>
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-[#E8E6E1]" />
          <span className="text-[9px] tracking-[0.28em] uppercase text-[#8B8680] font-serif">UAE Advisory</span>
          <div className="flex-1 h-px bg-[#E8E6E1]" />
        </div>

        <h3 className="font-serif text-[19px] text-[#2C2C2C] leading-snug">
          Speak to a UAE advisor
          <em className="block font-light text-[#B8956B] text-[17px]">on this opportunity</em>
        </h3>

        <p className="mt-3 text-[12px] text-[#8B8680] leading-relaxed font-serif">
          Our UAE investment team provides full briefings and arranges property viewings in Dubai and Abu Dhabi.
        </p>

        <div className="my-5 h-px"
          style={{ background: 'linear-gradient(to right, transparent, #B8956B, transparent)' }} />

        <div className="space-y-2.5 mb-5">
          <a href={`mailto:${brokerEmail}`}
            className="flex items-center gap-3 text-[12px] text-[#5A5A5A] hover:text-[#1B4332] transition-colors group"
          >
            <div className="w-8 h-8 bg-[#F5F4F0] border border-[#E8E6E1] flex items-center justify-center group-hover:border-[#1B4332] transition-colors">
              <Mail size={13} className="text-[#B8956B]" strokeWidth={1.5} />
            </div>
            <span className="font-serif">{brokerEmail}</span>
          </a>
          <a href={`tel:${brokerPhone}`}
            className="flex items-center gap-3 text-[12px] text-[#5A5A5A] hover:text-[#1B4332] transition-colors group"
          >
            <div className="w-8 h-8 bg-[#F5F4F0] border border-[#E8E6E1] flex items-center justify-center group-hover:border-[#1B4332] transition-colors">
              <Phone size={13} className="text-[#B8956B]" strokeWidth={1.5} />
            </div>
            <span className="font-serif">{brokerPhone}</span>
          </a>
        </div>

        <div className="space-y-2.5">
          <a href="https://calendly.com/murivestrealty/uae-advisory" target="_blank" rel="noopener noreferrer"
            className="block w-full px-4 py-3.5 text-center text-[11px] font-semibold tracking-[0.18em] uppercase font-serif transition-all duration-300 hover:bg-[#2D5A45]"
            style={{ background: '#1B4332', color: '#FAF9F6' }}
          >
            Book UAE Consultation
          </a>
          <a href={`mailto:${brokerEmail}?subject=UAE Investment Inquiry`}
            className="block w-full px-4 py-3 text-center text-[11px] tracking-[0.15em] uppercase font-serif transition-all duration-300"
            style={{ border: '1px solid #B8956B', color: '#B8956B' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#B8956B'; e.currentTarget.style.color = '#FAF9F6'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#B8956B'; }}
          >
            Send an Enquiry
          </a>
        </div>

        <p className="mt-6 text-center text-[9px] tracking-[0.22em] uppercase text-[#8B8680] font-serif">
          Murivest · Nairobi · Dubai · London
        </p>
      </section>

    </aside>
  );
}