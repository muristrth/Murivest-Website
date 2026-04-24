'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Globe, Video, ShieldCheck, Clock, 
  Mail, Phone, MapPin, ArrowUpRight, ExternalLink 
} from 'lucide-react';

const GOOGLE_BOOKING_URL = "https://calendar.app.google/sqKf25S7CFKKywZr6";

const SchedulePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C2C2C] selection:bg-[#B8956B]/20 pt-[64px]">
      
      {/* Brass masthead rule */}
      <div className="w-full h-[2px] bg-[#B8956B]" />

      {/* 1. EDITORIAL HERO */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-12 lg:px-16 pt-14 md:pt-20 pb-10 md:pb-14 border-b border-[#1B4332]/8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[1px] bg-[#B8956B]" />
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#B8956B] font-medium">
            Private Office
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <h1 className="font-serif text-[32px] md:text-[48px] lg:text-[56px] text-[#1B4332] leading-[1.05] tracking-tight">
              Advisory{' '}
              <span className="italic text-[#B8956B] font-light">Calendar</span>
            </h1>
            <p className="mt-5 md:mt-6 text-[15px] md:text-[17px] text-[#2C2C2C]/65 font-light leading-[1.6] max-w-[580px]">
              Private consultations for principals and family offices. 
              Mondays, 09:00–17:00 EAT. By appointment only.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 lg:text-right"
          >
            <div className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.25em] uppercase text-[#1B4332]/50">
              <span className="w-1.5 h-1.5 bg-[#1B4332] rounded-full" />
              Accepting Appointments
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN CONTENT — Asymmetric HBR Grid */}
      <main className="max-w-[1200px] mx-auto px-5 md:px-12 lg:px-16 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* LEFT PANEL — Context & Protocol */}
          <div className="lg:col-span-4 space-y-10 md:space-y-12">
            
            {/* Protocol */}
            <div className="space-y-6">
              <h2 className="text-[10px] tracking-[0.3em] uppercase text-[#1B4332]/45 font-semibold pb-3 border-b border-[#E8E6E1]">
                Scheduling Protocol
              </h2>
              
              <div className="space-y-5">
                {[
                  { icon: Calendar, label: 'Availability', value: 'Mondays Only', sub: '09:00 — 17:00 EAT' },
                  { icon: Globe, label: 'Timezone', value: 'East Africa Time', sub: 'UTC+3 (Nairobi)' },
                  { icon: Video, label: 'Format', value: 'Video Conference', sub: 'Secure Google Meet' },
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <item.icon size={13} strokeWidth={1.5} className="text-[#B8956B]" />
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8956B] font-medium">
                        {item.label}
                      </span>
                    </div>
                    <p className="font-serif text-[18px] md:text-[20px] text-[#1B4332] leading-tight">{item.value}</p>
                    <p className="text-[13px] text-[#2C2C2C]/55 font-light mt-0.5">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Assurance — minimal, institutional */}
            <div className="bg-white border border-[#E8E6E1] p-6 md:p-7 space-y-5">
              <div className="flex items-center gap-2.5 text-[#1B4332]">
                <ShieldCheck size={16} strokeWidth={1.5} />
                <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Client Assurance</span>
              </div>
              <ul className="space-y-2.5">
                {[
                  'Automated calendar invitations',
                  'Multi-currency advisory capability',
                  'NDA execution upon request',
                  'Encrypted video conferencing',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] text-[#2C2C2C]/70 font-light">
                    <div className="w-[5px] h-[5px] bg-[#B8956B] mt-[7px] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contact — elevated, never buried */}
            <div className="bg-[#1B4332] p-6 md:p-8 space-y-5">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8956B] font-medium mb-2">
                  Direct Correspondence
                </p>
                <p className="text-[13px] text-[#FAF9F6]/65 font-light leading-relaxed">
                  Many clients arrange meetings through their private bankers or directly with the team.
                </p>
              </div>
              
              <div className="space-y-3">
                {[
                  { icon: Phone, href: 'tel:+254729170156', text: '+254 729 170 156' },
                  { icon: Mail, href: 'mailto:info@murivest.co.ke', text: 'info@murivest.co.ke' },
                ].map((item, i) => (
                  <a 
                    key={i}
                    href={item.href}
                    className="flex items-center gap-3 text-[#FAF9F6] hover:text-[#B8956B] transition-colors duration-200 group"
                  >
                    <item.icon size={14} strokeWidth={1.5} className="text-[#B8956B]" />
                    <span className="text-[14px] font-light tracking-wide">{item.text}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                  </a>
                ))}
                <div className="flex items-start gap-3 text-[#FAF9F6]/80 pt-1">
                  <MapPin size={14} strokeWidth={1.5} className="text-[#B8956B] mt-0.5 shrink-0" />
                  <span className="text-[13px] font-light leading-relaxed">
                    Westlands Business Park<br />Nairobi, Kenya
                  </span>
                </div>
              </div>
            </div>

            {/* Pull quote — HBR sidebar style */}
            <div className="border-l-2 border-[#B8956B]/40 pl-5 py-1">
              <p className="text-[13px] text-[#2C2C2C]/55 font-light italic leading-relaxed">
                "The meeting was precisely what I needed — no pitch, just clear analysis of the opportunity."
              </p>
              <p className="text-[11px] text-[#B8956B] mt-3 tracking-wide font-medium">
                — Family Office Principal
              </p>
            </div>

            {/* Priority note */}
            <div className="bg-[#1B4332]/[0.04] border-l-2 border-[#1B4332] p-5">
              <p className="text-[12px] text-[#2C2C2C]/65 font-light leading-relaxed italic">
                For matters outside Monday availability, contact our office directly for priority scheduling.
              </p>
            </div>
          </div>

          {/* RIGHT PANEL — Calendar */}
          <div className="lg:col-span-8">
            
            {/* Mobile CTA — UHNWI don't wrestle with iframes on phones */}
            {isMobile && (
              <motion.div 
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <a
                  href={GOOGLE_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-[#1B4332] text-[#FAF9F6] py-[18px] px-6 text-[14px] tracking-wide font-medium active:bg-[#1B4332]/90 transition-colors min-h-[56px]"
                >
                  <Calendar size={18} strokeWidth={1.5} />
                  Open Booking Calendar
                  <ExternalLink size={14} className="opacity-70" />
                </a>
                <p className="text-center text-[11px] text-[#2C2C2C]/40 mt-3 tracking-wide">
                  Opens Google Calendar in a new tab
                </p>
              </motion.div>
            )}

            {/* Calendar Container */}
            <div className="bg-white border border-[#E8E6E1] shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden">
              {/* Header bar */}
              <div className="bg-[#1B4332] px-5 md:px-6 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Calendar size={15} strokeWidth={1.5} className="text-[#B8956B]" />
                  <span className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#FAF9F6]/90 font-medium">
                    Select an Available Time
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#FAF9F6]/50 text-[10px] tracking-wider">
                  <Clock size={11} />
                  <span className="hidden sm:inline">EAT (UTC+3)</span>
                </div>
              </div>
              
              {/* Iframe — hidden on mobile, shown on desktop */}
              <div className={`relative w-full bg-white ${isMobile ? 'h-[400px]' : 'h-[580px] md:h-[680px]'}`}>
                {!isMobile ? (
                  <iframe
                    src={GOOGLE_BOOKING_URL}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    className="absolute inset-0"
                    style={{ backgroundColor: 'white' }}
                    title="Murivest Advisory Schedule"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#FAF9F6] px-8 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full border border-[#B8956B]/30 flex items-center justify-center">
                      <Calendar size={20} className="text-[#B8956B]" />
                    </div>
                    <div>
                      <p className="font-serif text-[18px] text-[#1B4332]">Calendar View</p>
                      <p className="text-[13px] text-[#2C2C2C]/55 font-light mt-1 max-w-[280px]">
                        For the best experience on mobile, please use the button above.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop footer meta */}
            <div className="hidden lg:flex items-center justify-between mt-4 px-1">
              <div className="flex items-center gap-2 text-[10px] text-[#2C2C2C]/40 tracking-wider uppercase">
                <span className="w-1 h-1 bg-[#1B4332] rounded-full" />
                <span>Secure SSL Connection</span>
              </div>
              <a 
                href={GOOGLE_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#B8956B] hover:text-[#1B4332] transition-colors tracking-wide flex items-center gap-1"
              >
                Open in Google Calendar
                <ArrowUpRight size={11} />
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* 3. EDITORIAL FOOTER */}
      <footer className="border-t border-[#1B4332]/8 py-10 md:py-12 px-5 md:px-12 lg:px-16">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#2C2C2C]/45">
            © {new Date().getFullYear()} Murivest Realty Limited
          </p>
          <div className="flex items-center gap-2 text-[10px] text-[#2C2C2C]/45 tracking-wider">
            <span>Estate Agents Registration Board Kenya</span>
            <span className="text-[#B8956B]">•</span>
            <span>Licensed & Regulated</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SchedulePage;