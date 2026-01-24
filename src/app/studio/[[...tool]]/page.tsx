'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config' // Adjust this path to your sanity.config

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* 1. Header Spacer - Adjust height to match your actual nav height */}
      <div className="h-24" /> 

      {/* 2. Centered Container */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
          {/* 3. The Studio Component */}
          <NextStudio config={config} />
        </div>
      </div>
    </div>
  )
}