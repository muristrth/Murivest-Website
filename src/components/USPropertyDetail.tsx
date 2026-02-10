'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MapPin, DollarSign, Shield, Award,
  ChevronRight, Building, ArrowLeft,
  ArrowUpRight, Lock, Phone, Mail, Landmark
} from 'lucide-react';

interface USPropertyDetailProps {
  property: {
    title?: string;
    subtitle?: string;
    location?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    type?: string;
    status?: string;
    price?: string;
    yield?: string;
    description?: string;
    roi?: string;
    mainImageUrl?: string;
    images?: string[];
    features?: string[];
    sqft?: string;
    details?: Array<{ label?: string; value?: string }>;
    investment?: {
      monthlyIncome?: string;
      annualIncome?: string;
      appreciationRate?: string;
      totalROI?: string;
    };
    regulatory?: {
      secCompliant?: boolean;
      exchange1031?: boolean;
      crefcStandards?: boolean;
    };
  };
}

export default function USPropertyDetail({ property }: USPropertyDetailProps) {
  const allImages = property.mainImageUrl 
    ? [property.mainImageUrl, ...(property.images || [])]
    : property.images || [];

  if (!allImages.length) {
    allImages.push('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80');
  }

  const detailsMap = property.details?.reduce((acc, item) => {
    if (item.label && item.value) {
      acc[item.label] = item.value;
    }
    return acc;
  }, {} as Record<string, string>) || {};

  return (
    <div className="min-h-screen bg-[#05070a] text-white font-light">
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-16 px-4 md:px-8">
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/5 blur-[80px] md:blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/us-properties" className="inline-flex items-center gap-2 text-amber-500 text-sm font-bold uppercase tracking-widest mb-6 md:mb-8 hover:text-white transition-colors">
            <ArrowLeft size={16} /> <span className="hidden sm:inline">Back to US Properties</span><span className="sm:hidden">Back</span>
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="lg:w-1/2">
              <img 
                src={allImages[0]} 
                alt={property.title || 'US Property'}
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg"
              />
            </div>
            
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-amber-500 text-black text-[10px] font-black uppercase tracking-tighter">
                  {property.type || 'Commercial'}
                </span>
                <span className="px-3 py-1 border border-amber-500/50 text-amber-400 text-[10px] font-bold uppercase tracking-widest">
                  {property.status || 'Available'}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif italic mb-4">
                {property.title}
              </h1>
              
              <div className="flex items-center gap-2 text-slate-400 text-sm uppercase tracking-widest mb-6 md:mb-8">
                <MapPin size={16} className="text-amber-500" />
                {property.location}
              </div>
              
              <div className="grid grid-cols-2 gap-6 md:gap-8 mb-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-1">Asset Value</p>
                  <p className="text-2xl md:text-3xl font-bold text-amber-400">{property.price}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-1">Net Yield</p>
                  <p className="text-2xl md:text-3xl font-bold text-amber-400">{property.yield}</p>
                </div>
              </div>
              
              <div className="border-t border-white/10 pt-8">
                <p className="text-slate-400 leading-relaxed mb-6">
                  {property.description || 'Premium commercial property investment opportunity.'}
                </p>
                
                {property.roi && (
                  <div className="flex items-center gap-2 text-[10px] font-bold text-amber-500 uppercase tracking-widest">
                    <Lock size={12} /> {property.roi}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Details */}
      <section className="py-16 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-serif italic mb-6">Key Features</h2>
              <ul className="space-y-4">
                {property.features?.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <ChevronRight size={16} className="text-amber-500" />
                    {feature}
                  </li>
                ))}
                {property.sqft && (
                  <li className="flex items-center gap-3 text-slate-300">
                    <ChevronRight size={16} className="text-amber-500" />
                    {property.sqft}
                  </li>
                )}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif italic mb-6">Property Details</h2>
              <div className="space-y-4">
                {Object.entries(detailsMap).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-slate-500 uppercase tracking-widest text-sm">{key}</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
                {property.city && (
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-slate-500 uppercase tracking-widest text-sm">City</span>
                    <span className="text-white font-medium">{property.city}</span>
                  </div>
                )}
                {property.state && (
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-slate-500 uppercase tracking-widest text-sm">State</span>
                    <span className="text-white font-medium">{property.state}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Details */}
      {property.investment && (
        <section className="py-16 px-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-serif italic mb-8">Investment Summary</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {property.investment.monthlyIncome && (
                <div className="bg-white/5 border border-white/10 p-6">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">Monthly Income</p>
                  <p className="text-xl font-bold text-amber-400">{property.investment.monthlyIncome}</p>
                </div>
              )}
              {property.investment.annualIncome && (
                <div className="bg-white/5 border border-white/10 p-6">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">Annual Income</p>
                  <p className="text-xl font-bold text-amber-400">{property.investment.annualIncome}</p>
                </div>
              )}
              {property.investment.appreciationRate && (
                <div className="bg-white/5 border border-white/10 p-6">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">Appreciation</p>
                  <p className="text-xl font-bold text-amber-400">{property.investment.appreciationRate}</p>
                </div>
              )}
              {property.investment.totalROI && (
                <div className="bg-white/5 border border-white/10 p-6">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">Total ROI</p>
                  <p className="text-xl font-bold text-amber-400">{property.investment.totalROI}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-8 bg-white/5 border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif italic mb-4">Interested in this property?</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Contact our US Institutional Desk for more information and to arrange a viewing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-amber-500 text-black font-bold uppercase tracking-widest hover:bg-amber-400 transition-all flex items-center justify-center">
              <Phone className="mr-3 h-5 w-5" />
              Schedule Viewing
            </Link>
            <Link href="/contact" className="px-8 py-4 border border-amber-500/60 text-amber-300 hover:bg-amber-500 hover:text-black transition-all font-bold uppercase tracking-widest flex items-center justify-center">
              <Mail className="mr-3 h-5 w-5" />
              Request Brochure
            </Link>
          </div>
        </div>
      </section>

      {/* Regulatory Info */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <Shield className="text-amber-500" size={32} />
              <h4 className="text-lg font-serif italic">SEC Compliance</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Full adherence to SEC regulations for offshore and domestic institutional investors.</p>
            </div>
            <div className="space-y-4">
              <Landmark className="text-amber-500" size={32} />
              <h4 className="text-lg font-serif italic">1031 Exchange</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Expert structuring advice on 1031 like-kind exchanges and tax-deferred investment vehicles.</p>
            </div>
            <div className="space-y-4">
              <Award className="text-amber-500" size={32} />
              <h4 className="text-lg font-serif italic">CREFC Standards</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Industry-leading reporting and compliance with Commercial Real Estate Finance Council standards.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
