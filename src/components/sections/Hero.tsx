'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { ArrowRight, TrendingUp, Shield, Crown, Globe, Award, Building } from 'lucide-react';

const Hero = () => {
  // Old money inspired images - classic architecture, luxury estates
  const images = [
    '/murivest_secretary.png',
    'https://i.pinimg.com/736x/bc/43/98/bc43988c5de55507f7817ac3b1647e95.jpg', // Luxury modern building
    '/kenya-night.png',
    '/murivest_secretary.png',
    '/cin_pdf.png',
    '/murivest_ceo_office.png'
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppContact = (message: string) => {
    const phoneNumber = "254115277610";
    const encodedMessage = encodeURIComponent(
      `Greetings from a prospective investor. ${message}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="relative h-full w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Sophisticated overlay with subtle pattern */}
      <div className="absolute inset-0 bg-[#0A1A2F] opacity-60 z-10"></div>
      <div className="absolute inset-0 opacity-5 z-15" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,.02) 2px, rgba(255,255,255,.02) 4px)`
      }}></div>

      {/* Premium background transitions */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-all duration-2000 ease-in-out"
        style={{
          backgroundImage: `url("${images[currentImage]}")`,
        }}
      ></div>

      {/* Elegant floating elements */}
      <div className="absolute inset-0 overflow-hidden z-20">
        <div className="absolute top-32 left-16 w-2 h-2 bg-amber-400 rounded-full opacity-30" />
        <div className="absolute top-64 right-32 w-3 h-3 bg-amber-300 rounded-full opacity-25" />
        <div className="absolute bottom-48 left-32 w-1.5 h-1.5 bg-amber-500 rounded-full opacity-40" />
      </div>

      {/* Main corporate content */}
      <div className="relative luxury-container luxury-padding py-12 lg:py-20 z-30">
        <div className="max-w-5xl">
          {/* Prestigious header */}
          <div className="flex items-center mb-8">
            <Building className="h-7 w-7 text-amber-500 mr-3" />
            <span className="text-amber-500 font-serif text-sm tracking-widest uppercase">
              Established Investment House • Since 2025
            </span>
          </div>

          {/* Power headline with social proof */}
          <h1 className="text-3xl md:text-5xl font-serif font-light mb-8 leading-tight tracking-tight luxury-text-spacing">
            Nairobi CRE: Offices, Retail, Industrial. Net Yields 8-10%. Quarterly Income. KRA-Compliant.
          </h1>

          {/* Authority subheadline */}
          <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed font-serif font-light max-w-4xl luxury-text-spacing">
            Connecting institutional-grade investors to premium commercial assets across Africa, the Middle East, and Asia-Pacific. Our philosophy: steady income, capital preservation, and fiduciary intelligence for discerning global investors.
          </p>

          {/* Urgency and scarcity */}
          <p className="text-base mb-12 text-amber-200 font-serif italic luxury-text-spacing">
            Confidential opportunities available for a limited time. Secure your access to our exclusive portfolio today.
          </p>

          {/* CTA buttons with hierarchy */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/properties">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 font-serif font-medium text-base transition-all duration-300 flex items-center justify-center group shadow-2xl hover:shadow-amber-500/25 border border-amber-500">
                View Exclusive Portfolio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            
            <button
              className="border-2 border-amber-400 hover:bg-amber-400 hover:text-slate-900 text-amber-400 px-6 py-3 font-serif font-medium text-base transition-all duration-300"
              onClick={() => handleWhatsAppContact("I am an international investor interested in your exclusive portfolio. Please arrange a private consultation.")}
            >
              Private Consultation
            </button>
          </div>

          {/* Social proof metrics - more corporate */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-none p-4 hover:bg-white/10 transition-all duration-300">
              <TrendingUp className="h-6 w-6 text-amber-400 mr-3" />
              <div>
                <div className="text-2xl font-serif font-light text-amber-400">22%</div>
                <div className="text-gray-300 font-serif text-xs uppercase tracking-wide">Target IRR*</div>
              </div>
            </div>

            <div className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-none p-4 hover:bg-white/10 transition-all duration-300">
              <Globe className="h-6 w-6 text-amber-400 mr-3" />
              <div>
                <div className="text-2xl font-serif font-light text-amber-400">4+</div>
                <div className="text-gray-300 font-serif text-xs uppercase tracking-wide">Countries</div>
              </div>
            </div>

            <div className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-none p-4 hover:bg-white/10 transition-all duration-300">
              <Shield className="h-6 w-6 text-amber-400 mr-3" />
              <div>
                <div className="text-2xl font-serif font-light text-amber-400">KES 1B</div>
                <div className="text-gray-300 font-serif text-xs uppercase tracking-wide">Target Raise by Q4 2025</div>
              </div>
            </div>

            <div className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-none p-4 hover:bg-white/10 transition-all duration-300">
              <Award className="h-6 w-6 text-amber-400 mr-3" />
              <div>
                <div className="text-2xl font-serif font-light text-amber-400">100%</div>
                <div className="text-gray-300 font-serif text-xs uppercase tracking-wide">Investor Retention</div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-gray-400 font-serif text-sm uppercase tracking-widest mb-4">
              Trusted By International Investors From
            </p>
            <div className="flex flex-wrap gap-8 text-gray-500 font-serif text-sm">
              <span>United Kingdom</span>
              <span>•</span>
              <span>Kenya</span>
              <span>•</span>
              <span>Dubai</span>
              <span>•</span>
              <span>Singapore</span>
              <span>•</span>
              <span>South Africa</span>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-8 p-4 bg-black/20 border border-amber-400/20 rounded-none">
            <p className="text-xs text-gray-300 font-light leading-relaxed">
              * <strong>Investment Disclaimer:</strong> Past performance does not guarantee future results. All investments involve risk including loss of principal. The target IRR is historical and not indicative of future performance. Real estate investments are illiquid. Please consult qualified advisors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
