'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';

/**
 * Institutional Hero Component for Murivest
 * Features: Subliminal parallax, smooth image transitions, and tiered filtering copy.
 */
const Hero = () => {
  const images = [
    '/murivest_ceo_office.png', // Ensure these paths exist in your /public folder
    '/kenya-night.png',
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Subtle parallax effect for "Stately" movement
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 15;
    const y = (e.clientY / window.innerHeight - 0.5) * 15;
    setMousePos({ x, y });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-slate-950 text-white overflow-hidden flex items-center justify-center pt-20"
    >
      {/* Background Layer with Depth */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-[4000ms] ease-out will-change-transform"
        style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) scale(1.05)` }}
      >
        {images.map((img, i) => (
          <div
            key={img}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[3000ms] ${
              i === currentImage ? 'opacity-30' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        {/* Cinematic Vignette & Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-6xl px-6 text-center">
        {/* Eyebrow - Signals Professional Breadth */}
        <p className="mb-6 text-amber-500/80 uppercase tracking-[0.5em] text-[10px] md:text-xs font-semibold">
          Murivest Realty Group Ltd
        </p>

        {/* H1 - Institutional Hook */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.15] mb-8 tracking-tight text-white/95">
          Strategic Advisory for <br className="hidden md:block" />
          <span className="italic text-amber-50/90">Commercial Real Estate</span>
        </h1>

        {/* Sub-headline - The "How & Who" */}
        <p className="text-xs text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
          Murivest advises how these transactions are structured, underwritten, and executed — acting exclusively for institutional investors, family offices, and financial corporates deploying capital into large-scale commercial real estate across Kenya, the United Kingdom and select few international markets.
        </p>

        {/* Institutional Filter - The "Credibility Line" */}
        <div className="mb-8 inline-flex items-center gap-4 py-2 px-6 border-x border-amber-500/20 bg-amber-500/5 backdrop-blur-sm">
          <p className="text-slate-400 text-[10px] md:text-xs tracking-widest uppercase">
            Mandate Size: <span className="text-amber-200/90">USD 2M – 100M+</span>
            <span className="mx-4 opacity-30">|</span>
            Asset Classes: <span className="text-amber-200/90 font-medium">Retail • Office • Hotel • Industrial</span>
          </p>
        </div>

        {/* Advisory Positioning Statement */}
        <p className="text-slate-500 text-xs max-w-2xl mx-auto mb-12 leading-relaxed">
          Murivest is an independent real estate investment advisory and deal-origination firm. We do not pool capital or act as a fund unless under a specific mandate.
        </p>

        {/* Action Tier */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <Link
            href="/institutional-investors"
            className="group relative px-10 py-4 bg-amber-500 text-slate-950 text-xs tracking-[0.2em] uppercase font-bold hover:bg-white transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">Request Institutional Briefing</span>
            <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
          </Link>

          <Link
            href="/uk-properties"
            className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-slate-400 hover:text-amber-300 transition-colors duration-300"
          >
            <span>View UK Portfolio</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Aesthetic Detail: Bottom Fade Out */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
};

export default Hero;