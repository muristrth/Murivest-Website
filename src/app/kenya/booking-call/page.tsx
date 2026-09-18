'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Globe, Video, ShieldCheck, Clock, 
  Mail, Phone, MapPin, ArrowUpRight, ExternalLink 
} from 'lucide-react';

const CALENDLY_URL = "https://calendly.com/murivestrealty/advisory";

const SchedulePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Load Calendly script safely (only once)
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#2C2C2C] pt-[64px]">
      
      {/* Brass rule */}
      <div className="w-full h-[2px] bg-[#8B7355]" />

      {/* HERO */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-12 lg:px-16 pt-14 md:pt-20 pb-10 md:pb-14 border-b border-[#2C2C2C]/8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[1px] bg-[#8B7355]" />
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#8B7355] font-medium">
            Private Office
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <h1 className="font-serif text-[32px] md:text-[48px] lg:text-[56px] text-[#2C2C2C] leading-[1.05] tracking-tight">
              Advisory <span className="italic text-[#8B7355] font-light">Calendar</span>
            </h1>
            <p className="mt-5 text-[15px] md:text-[17px] text-[#2C2C2C]/65 font-light leading-[1.6] max-w-[580px]">
              Private consultations for principals and family offices. 
              Structured, confidential, and by appointment only.
            </p>
          </motion.div>

          <div className="lg:col-span-4 lg:text-right">
            <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#2C2C2C]/50">
              <span className="w-1.5 h-1.5 bg-[#2C2C2C] rounded-full" />
              Accepting Appointments
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <main className="max-w-[1200px] mx-auto px-5 md:px-12 lg:px-16 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* LEFT PANEL */}
          <div className="lg:col-span-4 space-y-10">

            {/* Protocol */}
            <div className="space-y-6">
              <h2 className="text-[10px] tracking-[0.3em] uppercase text-[#2C2C2C]/45 font-semibold pb-3 border-b border-[#E5E2DC]">
                Scheduling Protocol
              </h2>

              <div className="space-y-5">
                {[
                  { icon: Calendar, label: 'Availability', value: 'By Appointment', sub: 'Flexible Scheduling' },
                  { icon: Globe, label: 'Timezone', value: 'East Africa Time', sub: 'UTC+3 (Nairobi)' },
                  { icon: Video, label: 'Format', value: 'Video / In-Person', sub: 'Secure & Private' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <item.icon size={13} className="text-[#8B7355]" />
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B7355] font-medium">
                        {item.label}
                      </span>
                    </div>
                    <p className="font-serif text-[18px] text-[#2C2C2C]">{item.value}</p>
                    <p className="text-[13px] text-[#2C2C2C]/55">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Assurance */}
            <div className="bg-white border border-[#E5E2DC] p-6 space-y-5">
              <div className="flex items-center gap-2.5 text-[#2C2C2C]">
                <ShieldCheck size={16} />
                <span className="text-[10px] tracking-[0.2em] uppercase">Client Assurance</span>
              </div>
              <ul className="space-y-2 text-[13px] text-[#2C2C2C]/70">
                <li>Automated confirmations</li>
                <li>Confidential advisory</li>
                <li>Secure communication</li>
                <li>Structured engagement</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-[#2C2C2C] p-6 space-y-4">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#8B7355]">
                Direct Contact
              </p>

              <a href="tel:+254115277610" className="flex items-center gap-3 text-white">
                <Phone size={14} /> +254 115 277 610
              </a>

              <a href="mailto:capital@murivest.co.ke" className="flex items-center gap-3 text-white">
                <Mail size={14} /> capital@murivest.co.ke
              </a>

              <div className="flex items-start gap-3 text-white/80">
                <MapPin size={14} /> Westlands, Nairobi
              </div>
            </div>
          </div>

          {/* RIGHT PANEL — CALENDLY */}
          <div className="lg:col-span-8">

            {/* Mobile CTA */}
            {isMobile && (
              <div className="mb-6">
                <a
                  href="https://calendly.com/murivestrealty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-[#2C2C2C] text-white py-4"
                >
                  <Calendar size={18} />
                  Open Booking Calendar
                  <ExternalLink size={14} />
                </a>
              </div>
            )}

            {/* Calendly */}
            <div className="bg-white border border-[#E5E2DC] shadow-sm overflow-hidden">
              
              <div className="bg-[#2C2C2C] px-5 py-3 flex justify-between text-white text-xs">
                <span>Select an Available Time</span>
                <span>EAT (UTC+3)</span>
              </div>

              <div className={`${isMobile ? 'h-[500px]' : 'h-[700px]'}`}>
                {!isMobile ? (
                  <div
                    ref={calendlyRef}
                    className="calendly-inline-widget w-full h-full"
                    data-url={CALENDLY_URL}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-center px-6">
                    <p className="text-sm text-gray-500">
                      Open the calendar in a new tab for the best experience.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="hidden lg:flex justify-end mt-4">
              <a href="https://calendly.com/murivestrealty" target="_blank" className="text-xs text-[#8B7355] flex items-center gap-1">
                Open full calendar <ArrowUpRight size={11} />
              </a>
            </div>

          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t py-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Murivest Realty · Nairobi
      </footer>
    </div>
  );
};

export default SchedulePage;