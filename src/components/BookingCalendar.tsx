'use client';

import React from 'react';

const BookingCalendar = () => {
  // Google Calendar Appointment URL
  const googleBookingUrl = "https://calendar.app.google/sqKf25S7CFKKywZr6";

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-[64px]">
      {/* Editorial Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Editorial Content */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-[#B8956B]" />
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#B8956B] font-medium">
                  Private Office
                </span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1B4332] leading-[1.1]">
                Schedule Your <span className="italic text-[#B8956B] font-light">Consultation</span>
              </h1>
            </div>

            <div className="prose prose-lg space-y-6 text-[#2C2C2C]/80 font-light leading-relaxed border-l-2 border-[#B8956B]/30 pl-6">
              <p>
                We invite discerning investors and property principals to arrange 
                a private consultation with our advisory team. Each meeting is 
                conducted with the utmost discretion and tailored to your specific 
                portfolio objectives.
              </p>
              
              <p className="text-sm text-[#2C2C2C]/60 italic">
                Select a convenient time from the available slots. Consultations 
                are held via secure video conference or in person at our Westlands 
                office.
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-white border border-[#E8E6E1] p-6 md:p-8 space-y-4">
              <h3 className="font-serif text-lg text-[#1B4332]">Prefer to correspond directly?</h3>
              <div className="space-y-2 text-sm text-[#2C2C2C]/70">
                <p className="flex items-center gap-3">
                  <span className="text-[#B8956B]">T.</span>
                  <span>+254 729 170 156</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-[#B8956B]">E.</span>
                   <span>info@murivest.co.ke</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Calendar Embed */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E8E6E1] shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
              {/* Calendar Header */}
              <div className="bg-[#1B4332] px-6 py-4 flex items-center justify-between">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8956B] font-medium">
                  Available Appointments
                </span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#B8956B]" />
                  <div className="w-2 h-2 rounded-full bg-[#FAF9F6]/30" />
                </div>
              </div>
              
              {/* Google Calendar iframe - Clean light theme */}
              <div className="relative w-full h-[600px] md:h-[700px] bg-white">
                <iframe
                  src={googleBookingUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="absolute inset-0"
                  style={{
                    filter: 'none', // Removed invert filters for clean aesthetic
                    backgroundColor: 'white'
                  }}
                  title="Murivest Advisory Schedule"
                  loading="lazy"
                />
              </div>
            </div>
            
            {/* Footer note */}
            <p className="mt-4 text-[10px] text-[#2C2C2C]/40 text-center tracking-wider uppercase">
              All times shown in Nairobi EAT (UTC+3)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;