'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * Murivest Hero - Independent Advisory
 * Aesthetic: Institutional clarity meets boutique firm precision
 */
const Hero = () => {
  const images = [
    '/nairobi.png',
    '/murivest_ceo_office.png',
    '/kenya-night.png',
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Subtle parallax
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;
    setMousePos({ x, y });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#2a4a2e] text-[#FAF9F6] overflow-hidden flex items-center"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-[6000ms] ease-out will-change-transform"
        style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) scale(1.03)` }}
      >
        {images.map((img, i) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-[4000ms] ease-in-out ${
              i === currentImage ? 'opacity-40' : 'opacity-0'
            }`}
          >
            <Image
              src={img}
              alt={`Murivest Advisory ${i === 0 ? 'Office' : 'Nairobi Markets'}`}
              fill
              className="object-cover object-center grayscale-[20%]"
              priority={i === 0}
              sizes="100vw"
              quality={80}
            />
          </div>
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a4a2e]/95 via-[#2D5A45]/60 to-[#2a4a2e]/90" />
        <div className="absolute inset-0 bg-[#B8956B]/10 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-16 py-20 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#B8956B]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#B8956B] font-medium">
                Independent Advisory
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8 text-[#FAF9F6]">
              Independent Advisory in<br />
              <span className="italic text-[#B8956B] font-light">East African Commercial Real Estate</span>
            </h1>

            <div className="w-16 h-[1px] bg-[#B8956B] mb-8" />
            
            <p className="text-[15px] leading-[1.8] text-[#B8956B] font-light max-w-lg mb-6">
              Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi. We originate and structure mandate-based engagements for qualified investors in East African commercial property markets.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-[12px] tracking-[0.15em] uppercase text-[#B8956B] mb-4">
              <span>Select Commercial Mandates</span>
              <span className="w-1 h-1 rounded-full bg-[#B8956B]" />
              <span>Institutional Grade Focus</span>
            </div>

            <p className="text-[10px] tracking-[0.15em] uppercase text-[#8B8680] mb-8">
              Engagements subject to formal mandate documentation and KYC verification
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#B8956B] text-[#FAF9F6] hover:bg-[#B8956B] hover:text-[#2a4a2e] transition-all duration-300 text-[11px] tracking-[0.25em] uppercase"
              >
                Request Advisory Briefing
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#B8956B]/30 text-[#B8956B] hover:border-[#B8956B] hover:text-[#FAF9F6] transition-all duration-300 text-[11px] tracking-[0.25em] uppercase"
              >
                About Our Approach
              </Link>
            </div>
          </motion.div>

          {/* Right: Action Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 lg:pl-12"
          >
            <div className="bg-[#FAF9F6]/5 backdrop-blur-sm border border-[#B8956B]/20 p-8 lg:p-10">
              <p className="text-[11px] tracking-[0.3em] uppercase text-[#B8956B] mb-4">
                Advisory Services
              </p>
              
              <p className="text-[14px] leading-[1.7] text-[#B8956B] font-light mb-6">
                We provide independent advisory on commercial property transactions. Our role is to analyze, structure, and facilitate mandate-based engagements with disciplined underwriting standards.
              </p>

              <div className="space-y-3">
                <Link
                  href="/commercial-real-estate"
                  className="group flex items-center justify-between w-full py-3 border-b border-[#B8956B]/30 hover:border-[#B8956B] transition-colors duration-300"
                >
                  <span className="text-[11px] tracking-[0.2em] uppercase text-[#FAF9F6] group-hover:text-[#B8956B] transition-colors">
                    Advisory Services Overview
                  </span>
                  <span className="text-[#B8956B] group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </Link>

                <Link
                  href="/process"
                  className="group flex items-center justify-between w-full py-3 border-b border-[#B8956B]/30 hover:border-[#B8956B] transition-colors duration-300"
                >
                  <span className="text-[11px] tracking-[0.2em] uppercase text-[#FAF9F6] group-hover:text-[#B8956B] transition-colors">
                    Our Process
                  </span>
                  <span className="text-[#B8956B] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </Link>

                <Link
                  href="/legal-compliance"
                  className="group flex items-center justify-between w-full py-3 border-b border-[#B8956B]/30 hover:border-[#B8956B] transition-colors duration-300"
                >
                  <span className="text-[11px] tracking-[0.2em] uppercase text-[#FAF9F6] group-hover:text-[#B8956B] transition-colors">
                    Compliance Framework
                  </span>
                  <span className="text-[#B8956B] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </Link>
              </div>

              <p className="mt-6 text-[10px] text-[#8B8680] font-light leading-relaxed border-t border-[#B8956B]/20 pt-4">
                Murivest Realty Group Ltd is an independent advisory firm. We do not pool capital or operate collective investment schemes. All engagements are mandate-based and subject to KYC/AML compliance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#1B4332] to-transparent" />
      
      <div className="absolute bottom-8 right-8 text-[10px] tracking-[0.2em] uppercase text-[#8B8680]">
        <span>Nairobi-Based</span>
      </div>
    </section>
  );
};

export default Hero;