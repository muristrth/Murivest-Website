'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Globe, Video, ShieldCheck, Clock, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import BookingCalendar from '@/components/BookingCalendar';

const SchedulePage = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C2C2C] selection:bg-[#B8956B]/20 pt-[64px]">
      
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="relative py-16 md:py-24 px-6 md:px-12 border-b border-[#E8E6E1]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B8956B]/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-[1px] bg-[#B8956B]" />
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#B8956B] font-medium">
                  Private Consultation
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1B4332] leading-[1.1]"
              >
                Advisory <span className="italic text-[#B8956B] font-light">Calendar</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-[#2C2C2C]/70 font-light leading-relaxed max-w-2xl border-l-2 border-[#B8956B]/30 pl-6"
              >
                We invite principals and qualified investors to schedule a private consultation. 
                Meetings are held exclusively on Mondays to ensure dedicated attention to each portfolio inquiry.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-4 lg:text-right"
            >
              <div className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-[#2C2C2C]/60">
                <span className="w-2 h-2 bg-[#1B4332] rounded-full" />
                Accepting Appointments
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT GRID */}
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT PANEL: PROTOCOL & CONTACT */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Scheduling Protocol */}
            <div className="space-y-8">
              <div className="pb-4 border-b border-[#E8E6E1]">
                <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#2C2C2C]/60 font-medium">
                  Scheduling Protocol
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="group">
                  <div className="flex items-center gap-3 mb-2 text-[#B8956B]">
                    <Calendar size={14} strokeWidth={1.5} />
                    <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Availability</span>
                  </div>
                  <p className="font-serif text-xl text-[#1B4332]">Mondays Only</p>
                  <p className="text-sm text-[#2C2C2C]/60 font-light mt-1">09:00 — 17:00 EAT</p>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3 mb-2 text-[#B8956B]">
                    <Globe size={14} strokeWidth={1.5} />
                    <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Timezone</span>
                  </div>
                  <p className="font-serif text-xl text-[#1B4332]">East Africa Time</p>
                  <p className="text-sm text-[#2C2C2C]/60 font-light mt-1">UTC+3 (Nairobi)</p>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3 mb-2 text-[#B8956B]">
                    <Video size={14} strokeWidth={1.5} />
                    <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Format</span>
                  </div>
                  <p className="font-serif text-xl text-[#1B4332]">Video Conference</p>
                  <p className="text-sm text-[#2C2C2C]/60 font-light mt-1">Secure Google Meet link</p>
                </div>
              </div>
            </div>

            {/* Assurance Section */}
            <div className="bg-white border border-[#E8E6E1] p-6 md:p-8 space-y-6">
              <div className="flex items-center gap-3 text-[#1B4332]">
                <ShieldCheck size={18} strokeWidth={1.5} />
                <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Client Assurance</span>
              </div>
              
              <ul className="space-y-3 text-sm text-[#2C2C2C]/70 font-light">
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-[#B8956B] mt-2 shrink-0" />
                  <span>Automated calendar invitations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-[#B8956B] mt-2 shrink-0" />
                  <span>Multi-currency advisory capability</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-[#B8956B] mt-2 shrink-0" />
                  <span>NDA execution available upon request</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-[#B8956B] mt-2 shrink-0" />
                  <span>Encrypted video conferencing</span>
                </li>
              </ul>
            </div>

            {/* Direct Contact */}
            <div className="space-y-6">
              <div className="pb-4 border-b border-[#E8E6E1]">
                <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#2C2C2C]/60 font-medium">
                  Direct Correspondence
                </h3>
              </div>
              
              <div className="space-y-4 text-sm">
                <a href="mailto:info@murivest.co.ke" className="flex items-center gap-3 text-[#2C2C2C]/80 hover:text-[#B8956B] transition-colors group">
                  <Mail size={14} strokeWidth={1.5} className="text-[#B8956B]" />
                  <span className="font-light">info@murivest.co.ke</span>
                </a>
                
                <a href="tel:+254729170156" className="flex items-center gap-3 text-[#2C2C2C]/80 hover:text-[#B8956B] transition-colors">
                  <Phone size={14} strokeWidth={1.5} className="text-[#B8956B]" />
                  <span className="font-light">+254 729 170 156</span>
                </a>
                
                <div className="flex items-start gap-3 text-[#2C2C2C]/80">
                  <MapPin size={14} strokeWidth={1.5} className="text-[#B8956B] mt-1" />
                  <span className="font-light">Westlands Business Park<br />Nairobi, Kenya</span>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="bg-[#1B4332]/5 border-l-2 border-[#1B4332] p-6">
              <p className="text-xs text-[#2C2C2C]/70 font-light leading-relaxed italic">
                For matters requiring immediate attention outside Monday availability, 
                please contact our office directly for priority scheduling.
              </p>
            </div>
          </div>

          {/* RIGHT PANEL: CALENDAR */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-[#E8E6E1] shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
              {/* Calendar Header */}
              <div className="bg-[#1B4332] px-6 py-4 flex items-center justify-between">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8956B] font-medium">
                  Select Appointment Time
                </span>
                <div className="flex items-center gap-2 text-[#FAF9F6]/60 text-[10px] tracking-wider">
                  <Clock size={12} />
                  <span>EAT (UTC+3)</span>
                </div>
              </div>
              
              {/* Calendar Component */}
              <div className="h-[600px] md:h-[700px] bg-white">
                <BookingCalendar />
              </div>
            </div>
            
            {/* Footer Note */}
            <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] text-[#2C2C2C]/50 tracking-wider uppercase">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#1B4332] rounded-full" />
                <span>Secure SSL Connection</span>
              </div>
              <p>All times displayed in Nairobi local time</p>
            </div>
          </div>
          
        </div>
      </main>

      {/* 3. EDITORIAL FOOTER */}
      <footer className="border-t border-[#E8E6E1] py-12 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#2C2C2C]/50">
            © {new Date().getFullYear()} Murivest Realty Limited
          </p>
          
          <div className="flex items-center gap-2 text-[10px] text-[#2C2C2C]/50 tracking-wider">
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