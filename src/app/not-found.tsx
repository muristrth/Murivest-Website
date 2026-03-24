'use client';

import Link from 'next/link';
import { Home, ArrowLeft, Shield, FileX } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C2C2C] font-sans selection:bg-[#B8956B]/30 flex flex-col items-center px-6 overflow-hidden relative">
      
      {/* Background Architectural Element - Subtle elegance */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#1B4332]/5 rounded-full blur-[120px]" />
      </div>

      {/* Decorative border frame */}
      <div className="absolute inset-8 border border-[#E8E6E1] pointer-events-none hidden md:block" />
      <div className="absolute inset-12 border border-[#E8E6E1]/50 pointer-events-none hidden lg:block" />

      {/* Content Container */}
      <div className="text-center max-w-2xl relative z-10 pt-32 pb-24 md:pt-48 md:pb-32 flex-grow flex flex-col justify-center">
        
        {/* The 404 Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="flex justify-center mb-8"
        >
          <div className="p-4 border border-[#B8956B]/30 bg-white/80 backdrop-blur-sm">
            <FileX className="h-6 w-6 text-[#B8956B]" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Large Watermark */}
        <div className="text-[10rem] md:text-[16rem] font-serif leading-none text-[#1B4332]/[0.03] absolute top-16 left-1/2 -translate-x-1/2 select-none pointer-events-none tracking-tighter">
          404
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="text-[#B8956B] uppercase tracking-[0.4em] text-[10px] font-medium mb-6"
        >
          Page Not Found
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 tracking-tight leading-[1.1] text-[#2C2C2C]"
        >
          This Page is <span className="italic text-[#1B4332] font-light">Unavailable</span>
        </motion.h1>

        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-[1px] w-24 bg-[#B8956B] mx-auto mb-10" 
        />

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="text-[#8B8680] font-light leading-[1.8] text-[15px] mb-12 max-w-md mx-auto"
        >
          The requested resource may have been relocated, removed, or requires 
          <span className="text-[#1B4332] italic"> authenticated access</span>. 
          Please return to the main collection or contact your portfolio advisor.
        </motion.p>

        {/* Institutional Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/"
            className="w-full sm:w-auto px-10 py-4 bg-[#1B4332] text-[#FAF9F6] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#2D5A45] transition-colors duration-500 flex items-center justify-center gap-3 group"
          >
            <Home size={14} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-300" />
            Return Home
          </Link>

          <Link
            href="/properties"
            className="w-full sm:w-auto px-10 py-4 border border-[#1B4332] text-[#1B4332] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#1B4332] hover:text-[#FAF9F6] transition-colors duration-500 flex items-center justify-center gap-3"
          >
            <Shield size={14} strokeWidth={1.5} />
            View Portfolio
          </Link>
        </motion.div>

        {/* Secondary Navigation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <button
            onClick={() => window.history.back()}
            className="text-[10px] tracking-[0.2em] uppercase text-[#8B8680] hover:text-[#B8956B] transition-colors duration-300 flex items-center gap-2 mx-auto group"
          >
            <ArrowLeft size={14} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Go Back
          </button>
        </motion.div>

        {/* Footer Signature */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-24 pt-12 border-t border-[#E8E6E1]"
        >
          <div className="flex flex-col items-center gap-4">
             <div className="flex items-center gap-3 opacity-60">
                <div className="w-8 h-[1px] bg-[#B8956B]" />
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#8B8680]">Murivest</span>
                <div className="w-8 h-[1px] bg-[#B8956B]" />
             </div>
             <p className="text-[10px] text-[#8B8680] uppercase tracking-[0.2em]">
                Institutional Real Estate
             </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}