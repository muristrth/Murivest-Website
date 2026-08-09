'use client';

import React, { useState } from 'react';
import { Calendar, Phone, Mail, ArrowUpRight, Clock, MapPin, Shield } from 'lucide-react';

const BookingCalendar = () => {
  const [showDirectOptions, setShowDirectOptions] = useState(false);
  
  const googleBookingUrl = "https://calendar.app.google/sqKf25S7CFKKywZr6";

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Thin brass rule — club stationery detail */}
      <div className="w-full h-[2px] bg-[#B8956B]" />
      
      <div className="max-w-[1200px] mx-auto px-5 md:px-12 lg:px-16">
        
        {/* Header — HBR editorial masthead style */}
        <header className="pt-12 md:pt-20 pb-8 md:pb-12 border-b border-[#1B4332]/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#B8956B]" />
            <span className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#B8956B] font-medium">
              Advisory Access
            </span>
          </div>
          
          <h1 className="font-serif text-[32px] md:text-[48px] lg:text-[56px] text-[#1B4332] leading-[1.05] tracking-tight max-w-[700px]">
            Schedule a{' '}
            <span className="italic text-[#B8956B] font-light">Private</span>{' '}
            Consultation
          </h1>
          
          <p className="mt-5 md:mt-6 text-[15px] md:text-[17px] text-[#2C2C2C]/70 font-light leading-[1.6] max-w-[580px]">
            One-on-one advisory sessions for principals and family offices. 
            Confidential, structured, and conducted at your convenience.
          </p>
        </header>

        {/* Main Content — Asymmetric HBR grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 py-10 md:py-16">
          
          {/* Left Column — Context & Credentials */}
          <div className="lg:col-span-4 space-y-10">
            
            {/* What to expect — editorial sidebar */}
            <div className="space-y-5">
              <h2 className="text-[10px] tracking-[0.3em] uppercase text-[#1B4332]/50 font-semibold">
                What to Expect
              </h2>
              
              <div className="space-y-5">
                {[
                  { 
                    icon: Clock, 
                    title: '45 Minutes', 
                    desc: 'Focused, agenda-driven discussion' 
                  },
                  { 
                    icon: MapPin, 
                    title: 'Westlands or Video', 
                    desc: 'In-person at our office or secure call' 
                  },
                  { 
                    icon: Shield, 
                    title: 'Strictly Confidential', 
                    desc: 'No obligation. No follow-up pressure' 
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-8 h-8 rounded-full border border-[#B8956B]/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-[#B8956B] transition-colors">
                      <item.icon className="w-3.5 h-3.5 text-[#B8956B]" />
                    </div>
                    <div>
                      <p className="text-[13px] font-medium text-[#1B4332]">{item.title}</p>
                      <p className="text-[13px] text-[#2C2C2C]/60 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct contact — always visible, never buried */}
            <div className="bg-[#1B4332] p-6 md:p-8 space-y-5">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8956B] font-medium mb-2">
                  Prefer Direct Contact?
                </p>
                <p className="text-[13px] text-[#FAF9F6]/70 font-light leading-relaxed">
                  Many of our clients arrange meetings through their private bankers or directly with the team.
                </p>
              </div>
              
              <div className="space-y-3">
                <a 
                  href="tel:+254729170156" 
                  className="flex items-center gap-3 text-[#FAF9F6] hover:text-[#B8956B] transition-colors group"
                >
                  <Phone className="w-4 h-4 text-[#B8956B]" />
                  <span className="text-[14px] font-light tracking-wide">+254 115 277 610</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                
                <a 
                  href="mailto:info@murivest.co.ke" 
                  className="flex items-center gap-3 text-[#FAF9F6] hover:text-[#B8956B] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#B8956B]" />
                  <span className="text-[14px] font-light tracking-wide">info@murivest.co.ke</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Trust marker — minimal */}
            <div className="border-l-2 border-[#B8956B]/40 pl-5">
              <p className="text-[12px] text-[#2C2C2C]/50 font-light italic leading-relaxed">
                "The meeting was precisely what I needed — no pitch, just clear analysis of the land banking opportunity."
              </p>
              <p className="text-[11px] text-[#B8956B] mt-2 tracking-wide">— Family Office Principal, Nairobi</p>
            </div>
          </div>

          {/* Right Column — Calendar */}
          <div className="lg:col-span-8">
            
            {/* Mobile-First Booking Action */}
            <div className="lg:hidden mb-6">
              <a
                href={googleBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#1B4332] text-[#FAF9F6] py-4 px-6 text-[14px] tracking-wide font-medium hover:bg-[#1B4332]/90 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Open Booking Calendar
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-center text-[11px] text-[#2C2C2C]/40 mt-3 tracking-wide">
                Opens Google Calendar in a new tab
              </p>
            </div>

            {/* Calendar Container — Desktop shows inline, mobile shows compact */}
            <div className="bg-white border border-[#E8E6E1] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              {/* Calendar header bar */}
              <div className="bg-[#1B4332] px-5 md:px-6 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-[#B8956B]" />
                  <span className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#FAF9F6]/90 font-medium">
                    Select an Available Time
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B8956B]" />
                  <span className="text-[10px] text-[#FAF9F6]/50 tracking-wider hidden sm:inline">Nairobi EAT (UTC+3)</span>
                </div>
              </div>
              
              {/* Iframe — taller on desktop, optimized for mobile */}
              <div className="relative w-full h-[520px] md:h-[640px] lg:h-[700px] bg-white">
                <iframe
                  src={googleBookingUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="absolute inset-0"
                  style={{
                    backgroundColor: 'white',
                  }}
                  title="Murivest Advisory Schedule"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Desktop fallback link — subtle, elegant */}
            <div className="hidden lg:flex items-center justify-between mt-4 px-1">
              <p className="text-[11px] text-[#2C2C2C]/40 tracking-wider">
                All times shown in Nairobi EAT (UTC+3)
              </p>
              <a 
                href={googleBookingUrl}
                target="_blank"
                rel="noopener noreferrer" 
                className="text-[11px] text-[#B8956B] hover:text-[#1B4332] transition-colors tracking-wide flex items-center gap-1"
              >
                Open in Google Calendar
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer rule */}
        <div className="border-t border-[#1B4332]/10 py-8 md:py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-[11px] text-[#2C2C2C]/40 tracking-wide">
              Murivest Advisory · Westlands, Nairobi
            </p>
            <p className="text-[11px] text-[#2C2C2C]/40 tracking-wide">
              Private consultations by appointment only
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;