'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Shield, Globe, Award, Building2 } from 'lucide-react';

const Hero = () => {
  // Your specific image array
  const images = [
    '/murivest_secretary.png',
    'https://i.pinimg.com/736x/bc/43/98/bc43988c5de55507f7817ac3b1647e95.jpg',
    '/kenya-night.png',
    '/cin_pdf.png',
    '/murivest_ceo_office.png'
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 3D Mouse Parallax Logic
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 15; // Movement intensity
    const y = (clientY / window.innerHeight - 0.5) * 15;
    setMousePos({ x, y });
  }, []);

  // Image Slider Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(interval);
  }, [images.length]);

  const handleWhatsAppContact = (message: string) => {
    const phoneNumber = "254115277610";
    const encodedMessage = encodeURIComponent(`Greetings from a prospective investor. ${message}`);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] lg:min-h-screen w-full bg-slate-950 text-white overflow-hidden flex items-center"
    >
      {/* BACKGROUND LAYER: Image Slider + Parallax */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-1000 ease-out scale-110"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
        }}
      >
        {images.map((img, index) => (
          <div
            key={img + index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[2000ms] ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url("${img}")` }}
          />
        ))}
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-slate-950/70 z-10" /> {/* Darken for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent z-10" />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative max-w-2xl mx-auto px-6 lg:px-10 z-30 w-full pt-20 pb-12 text-center">
        <div className="max-w-4xl">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
            <Building2 className="h-4 w-4 text-amber-500" />
            <span className="text-amber-500 font-medium text-[10px] uppercase tracking-[0.2em]">
              Established Investment House • Since 2025
            </span>
          </div>

          <h2 className="text-lg text-5xl md:text-3xl lg:text-3xl font-bold mb-8">
            Nairobi CRE: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200">Institutional Yields</span> 8-10%
          </h2>

        </div>

        {/* Dynamic Slider Indicators (Bottom Right) */}
        <div className="absolute right-10 bottom-10 z-40 hidden lg:flex items-center gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                currentImage === i ? 'w-10 bg-amber-500' : 'w-3 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;