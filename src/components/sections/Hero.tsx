'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * Private Club Hero - Murivest
 * Aesthetic: Augusta National meets family office library
 */
const Hero = () => {
  const images = [
    '/murivest_ceo_office.png',
    '/kenya-night.png',
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Gentler parallax - like observing from a leather chair
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;
    setMousePos({ x, y });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000); // Slower, more stately transitions
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#2a4a2e] text-[#FAF9F6] overflow-hidden flex items-center"
    >
      {/* Background - Like paintings in a club library */}
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
              alt={`Murivest ${i === 0 ? 'Advisory' : 'Markets'}`}
              fill
              className="object-cover object-center grayscale-[20%]"
              priority={i === 0}
              sizes="100vw"
              quality={80}
            />
          </div>
        ))}
        
        {/* Clubhouse warmth - tobacco-toned overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a4a2e]/95 via-[#2D5A45]/60 to-[#2a4a2e]/90" />
        <div className="absolute inset-0 bg-[#B8956B]/10 mix-blend-overlay" />
      </div>

      {/* Content - Centered like a club crest */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-16 py-20 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Typography - Like engraved stationery */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            {/* Club Mark */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#B8956B]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#B8956B] font-medium">
                Established Advisory
              </p>
            </div>

            {/* Main Headline - Serif, stately */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8 text-[#FAF9F6]">
              Off-Market <br />Income-Producing Institutional Grade A<br />
              <span className="italic text-[#B8956B] font-light">Commercial Properties</span>
            </h1>

            {/* Subtle divider - like a scorecard line */}
            <div className="w-16 h-[1px] bg-[#B8956B] mb-8" />
            "Where do I deploy this capital that isn't correlated to equities?"<br />
            {/* Description - Understated authority */}
            <p className="text-[15px] leading-[1.8] text-[#B8956B] font-light max-w-lg mb-10">
              <br />
              We originate off-market commercial mandates across Nairobi CBD, Kilimani, Karen, Westlands, Upperhill, Nakuru and other key locations — structuring them for international capital that demands yield certainty, governance transparency, and clear exit pathways.
            </p>

            {/* Mandate Parameters - The "membership criteria" */}
            <div className="flex flex-wrap items-center gap-6 text-[12px] tracking-[0.15em] uppercase text-[#B8956B]">
              <span>USD 2M – 100M+</span>
              <span className="w-1 h-1 rounded-full bg-[#B8956B]" />
              <span>Retail • Office • Industrial • Hospitality</span>
            </div>
          </motion.div>

          {/* Right: Action Card - Like a member's invitation */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 lg:pl-12"
          >
            <div className="bg-[#FAF9F6]/5 backdrop-blur-sm border border-[#B8956B]/20 p-10 lg:p-12">
              <p className="text-[11px] tracking-[0.3em] uppercase text-[#B8956B] mb-6">
                Private Mandates
              </p>
              
              <p className="text-[14px] leading-[1.7] text-[#B8956B] font-light mb-8">
                Current availability for new advisory engagements. 
                Q2 2026 mandate window now open for qualified institutional partners.
              </p>

              <div className="space-y-4">
                <Link
                  href="/institutional-investors"
                  className="group flex items-center justify-between w-full py-4 border-b border-[#B8956B]/30 hover:border-[#B8956B] transition-colors duration-500"
                >
                  <span className="text-[12px] tracking-[0.2em] uppercase text-[#FAF9F6] group-hover:text-[#B8956B] transition-colors">
                    Request Introduction
                  </span>
                  <span className="text-[#B8956B] group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </Link>

                <Link
                  href="/uk-properties"
                  className="group flex items-center justify-between w-full py-4 border-b border-[#B8956B]/30 hover:border-[#B8956B] transition-colors duration-500"
                >
                  <span className="text-[12px] tracking-[0.2em] uppercase text-[#B8956B] group-hover:text-[#B8956B] transition-colors">
                    View UK Collection
                  </span>
                  <span className="text-[#B8956B] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </Link>
              </div>

              {/* Discreet footnote */}
              <p className="mt-8 text-[10px] text-[#5A5A5A] italic">
                "We do not pool capital. We advise and originate under specific mandate."
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade - like mist on the fairway */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#1B4332] to-transparent" />
      
      {/* Corner detail - like a course marker */}
      <div className="absolute bottom-8 right-8 text-[10px] tracking-[0.2em] uppercase text-[#8B8680]">
        <span className="text-[#B8956B]">NBO</span> • London • Dubai
      </div>
    </section>
  );
};

export default Hero;