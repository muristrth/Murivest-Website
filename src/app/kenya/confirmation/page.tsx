'use client';

import React from 'react';
import { CheckCircle, Calendar, Mail, Phone, ArrowUpRight, Clock, Shield } from 'lucide-react';

const BookingConfirmation = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Top brass rule */}
      <div className="w-full h-[2px] bg-[#B8956B]" />

      <div className="max-w-[1000px] mx-auto px-5 md:px-12 lg:px-16">

        {/* Header */}
        <header className="pt-16 md:pt-24 pb-10 border-b border-[#1B4332]/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#B8956B]" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#B8956B] font-medium">
              Appointment Confirmed
            </span>
          </div>

          <h1 className="font-serif text-[34px] md:text-[52px] text-[#1B4332] leading-[1.05] tracking-tight max-w-[700px]">
            Your Consultation is{' '}
            <span className="italic text-[#B8956B] font-light">Confirmed</span>
          </h1>

          <p className="mt-6 text-[15px] md:text-[17px] text-[#2C2C2C]/70 font-light leading-[1.6] max-w-[560px]">
            Your session has been successfully scheduled. A confirmation email has been sent with full details and access instructions.
          </p>
        </header>

        {/* Body */}
        <div className="py-12 md:py-16 grid md:grid-cols-12 gap-10 md:gap-16">

          {/* Left — Status + Next Steps */}
          <div className="md:col-span-7 space-y-10">

            {/* Confirmation Card */}
            <div className="bg-white border border-[#E8E6E1] p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#B8956B] mt-1" />
                <div>
                  <p className="text-[16px] font-medium text-[#1B4332]">
                    Booking Successfully Completed
                  </p>
                  <p className="text-[14px] text-[#2C2C2C]/60 mt-2 leading-relaxed">
                    Your appointment has been reserved. Please refer to your email for calendar access, meeting link, and session details.
                  </p>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="space-y-5">
              <h2 className="text-[10px] tracking-[0.3em] uppercase text-[#1B4332]/50 font-semibold">
                What Happens Next
              </h2>

              <div className="space-y-5">
                {[
                  {
                    icon: Mail,
                    title: 'Check Your Email',
                    desc: 'A confirmation with meeting access and details has been sent.',
                  },
                  {
                    icon: Calendar,
                    title: 'Add to Calendar',
                    desc: 'Secure your time slot by saving the event to your calendar.',
                  },
                  {
                    icon: Clock,
                    title: 'Prepare Brief',
                    desc: 'Outline your objectives, preferred locations, and investment range.',
                  },
                  {
                    icon: Shield,
                    title: 'Confidential Session',
                    desc: 'Your consultation will be handled with full discretion.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full border border-[#B8956B]/30 flex items-center justify-center mt-0.5">
                      <item.icon className="w-3.5 h-3.5 text-[#B8956B]" />
                    </div>
                    <div>
                      <p className="text-[14px] font-medium text-[#1B4332]">{item.title}</p>
                      <p className="text-[13px] text-[#2C2C2C]/60 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Contact + Assurance */}
          <div className="md:col-span-5 space-y-8">

            {/* Contact Box */}
            <div className="bg-[#1B4332] p-6 md:p-8 space-y-5">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8956B] font-medium">
                Need Immediate Assistance?
              </p>

              <div className="space-y-3">
                <a
                  href="tel:+254115277610"
                  className="flex items-center gap-3 text-[#FAF9F6] hover:text-[#B8956B] transition-colors group"
                >
                  <Phone className="w-4 h-4 text-[#B8956B]" />
                  <span className="text-[14px] font-light">+254 115 277 610</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href="mailto:capital@murivest.co.ke"
                  className="flex items-center gap-3 text-[#FAF9F6] hover:text-[#B8956B] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#B8956B]" />
                  <span className="text-[14px] font-light">capital@murivest.co.ke</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Assurance */}
            <div className="border-l-2 border-[#B8956B]/40 pl-5">
              <p className="text-[12px] text-[#2C2C2C]/50 font-light italic leading-relaxed">
                "The advisory session was precise, structured, and highly relevant to our acquisition strategy."
              </p>
              <p className="text-[11px] text-[#B8956B] mt-2 tracking-wide">
                — Private Investor, Nairobi
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#1B4332]/10 py-10">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <p className="text-[11px] text-[#2C2C2C]/40 tracking-wide">
              Murivest Advisory · Westlands, Nairobi
            </p>
            <p className="text-[11px] text-[#2C2C2C]/40 tracking-wide">
              All consultations are confidential and by appointment only
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookingConfirmation;