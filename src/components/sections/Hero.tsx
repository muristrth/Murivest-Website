'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const images = [
    '/murivest_ceo_office.png', // Start with the most "Institutional" image
    'https://i.pinimg.com/736x/bc/43/98/bc43988c5de55507f7817ac3b1647e95.jpg',
    '/kenya-night.png',
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 10;
    const y = (clientY / window.innerHeight - 0.5) * 10;
    setMousePos({ x, y });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000); // Slower transitions for a calmer feel
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-slate-950 text-white overflow-hidden flex flex-col justify-center items-center"
    >
      {/* BACKGROUND LAYER */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-[3000ms] ease-out scale-105"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
        }}
      >
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[3000ms] ease-in-out ${
              index === currentImage ? 'opacity-40' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url("${img}")` }}
          />
        ))}
        
        {/* Sophisticated Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950" />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-30 w-full max-w-5xl px-6 text-center">
        <p className="mb-6 text-amber-200/60 uppercase tracking-[0.4em] text-xs font-light animate-pulse">
          Private Client Group
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight tracking-tight">
          Securing Legacies Through <br />
          <span className="italic">Institutional Heritage.</span>
        </h1>

        <div className="h-[1px] w-24 bg-amber-500/50 mx-auto mb-8" />

        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
          Strategic commercial acquisition and asset stewardship for 
          Kenya&apos;s most distinguished portfolios.
        </p>

        {/* Minimalist Contact */}
        <Link
          href="/institutional-investors"
          className="group relative px-12 py-4 bg-transparent border border-white/20 hover:border-amber-500/50 transition-all duration-700"
        >
          <span className="relative z-10 text-sm tracking-[0.2em] uppercase group-hover:text-amber-200 transition-colors">
            Access Institutional Data
          </span>
          <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
        </Link>
      </div>

      {/* SCROLL INDICATOR - The "Settle" factor */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4 opacity-60">
        <span className="text-[10px] uppercase tracking-[0.3em] font-light">Explore Portfolio</span>
        <div className="relative h-12 w-[1px] bg-gradient-to-b from-amber-500 to-transparent overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white animate-scroll-line" />
        </div>
      </div>

      {/* CSS for the scroll animation */}
      <style jsx>{`
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scroll-line {
          animation: scroll-line 2.5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;