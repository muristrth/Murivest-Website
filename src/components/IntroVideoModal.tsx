"use client";

import React, { useState, useEffect } from "react";

const IntroVideoModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    // 1-second delay for a prestigious entrance
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-1000">
      
      {/* Container: Reduced to 70% width for better balance */}
      <div className="relative w-[90%] md:w-[70%] lg:w-[60%] flex flex-col items-center animate-in fade-in zoom-in-95 duration-700">
        
        {/* Improved Close Button: Institutional Minimalist */}
        <button
          onClick={() => setIsOpen(false)}
          className="group mb-4 flex items-center space-x-2 text-white/60 hover:text-white transition-all duration-300"
          aria-label="Close Video"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-light">Exit Overview</span>
          <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 group-hover:bg-white transition-all duration-500"></div>
          <span className="text-lg font-extralight">&times;</span>
        </button>

        {/* Video Frame with Gold/Charcoal Shadowing */}
        <div className="relative w-full aspect-video shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 bg-black">
          <video
            autoPlay
            controls
            className="w-full h-full object-contain"
          >
            <source src="/intro-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Brand Caption */}
        <p className="mt-6 font-serif text-[#C5A059] text-[11px] uppercase tracking-[0.4em] opacity-80">
          Murivest &bull; Private Wealth Management
        </p>
      </div>
    </div>
  );
};

export default IntroVideoModal;