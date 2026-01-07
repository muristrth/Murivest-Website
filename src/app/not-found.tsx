'use client';

import Link from 'next/link';
import { Home, ArrowLeft, Lock, Globe, ShieldAlert } from 'lucide-react';

export default function NotFound() {
  return (
    // Removed justify-center to allow padding to dictate the "air" around the content
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-amber-500/30 flex flex-col items-center px-6 overflow-hidden relative">
      
      {/* Background Architectural Element - Scaled up for larger page feel */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-amber-900/10 rounded-full blur-[160px]" />
      </div>

      {/* INCREASED PAGE SIZE: 
          pt-64 (Top padding) ensures clearance from the Institutional Header.
          pb-48 (Bottom padding) ensures clearance from the Footer.
      */}
      <div className="text-center max-w-2xl relative z-10 pt-64 pb-48 flex-grow flex flex-col justify-center">
        
        {/* The 404 Indicator */}
        <div className="flex justify-center mb-10">
          <div className="p-5 border border-amber-500/20 rounded-full bg-white/[0.02] backdrop-blur-md animate-pulse">
            <Lock className="h-7 w-7 text-amber-500" />
          </div>
        </div>

        {/* Large Watermark - Positioned to fill the vertical void */}
        <div className="text-[12rem] md:text-[20rem] font-serif leading-none text-white/[0.02] absolute top-20 left-1/2 -translate-x-1/2 select-none pointer-events-none tracking-tighter">
          404
        </div>

        <p className="text-amber-500 uppercase tracking-[0.5em] text-[11px] font-bold mb-8">
          Protocol Restriction Established
        </p>

        <h1 className="text-5xl md:text-7xl font-serif mb-10 tracking-tight leading-tight">
          Page <span className="italic text-amber-200/90">Unavailable</span>
        </h1>

        <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-12" />

        <p className="text-slate-400 font-light leading-loose text-xl mb-16 max-w-lg mx-auto">
          The requested endpoint is either highly restricted or has been moved to a 
          <span className="text-amber-200/80 italic"> secured secondary server</span>. 
          Please re-authenticate or return to the main terminal.
        </p>

        {/* Institutional Actions - Wider spacing */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <Link
            href="/"
            className="w-full sm:w-auto px-12 py-6 bg-white/5 border border-white/10 text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-white/10 hover:border-amber-500/30 transition-all flex items-center justify-center gap-4 group"
          >
            <Home size={14} className="text-amber-500 group-hover:scale-110 transition-transform" />
            Go to Homepage
          </Link>

          <Link
            href="/properties"
            className="w-full sm:w-auto px-12 py-6 bg-amber-600 hover:bg-amber-500 text-slate-950 text-[10px] tracking-[0.4em] uppercase font-bold transition-all shadow-[0_0_30px_rgba(217,119,6,0.2)] flex items-center justify-center gap-4"
          >
            <Globe size={14} />
            View Portfolio
          </Link>
        </div>

        {/* Secondary Navigation */}
        <div className="mt-16">
          <button
            onClick={() => window.history.back()}
            className="text-[10px] tracking-[0.4em] uppercase font-bold text-slate-500 hover:text-amber-200 transition-colors flex items-center gap-3 mx-auto"
          >
            <ArrowLeft size={14} />
            Return to Previous Session
          </button>
        </div>

        {/* System Diagnostics Footer (Sits just above the actual global footer) */}
        <div className="mt-32 pt-16 border-t border-white/5">
          <div className="flex flex-col items-center gap-6">
             <div className="flex items-center gap-4 opacity-40">
                <ShieldAlert size={16} className="text-amber-500" />
                <span className="text-[9px] font-mono tracking-[0.2em] text-slate-500">AUTH_STATUS: REDACTED // NBO_NODE_404</span>
             </div>
             <p className="text-[10px] text-slate-700 uppercase tracking-[0.5em]">
                Murivest Asset Framework
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}