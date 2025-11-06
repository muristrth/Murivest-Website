'use client';

import React from 'react';
import Link from 'next/link';
import { Gift, Star, ArrowRight } from 'lucide-react';

const PersonalizedLuxuryGifts = () => {
  return (
    <section className="luxury-spacing bg-gradient-to-br from-amber-50 to-slate-50">
      <div className="luxury-container luxury-padding">
        <div className="text-center luxury-margin-bottom">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-medium mb-8">
            <Gift className="h-4 w-4 mr-2" />
            Exclusive Client Appreciation
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8 luxury-text-spacing">
            Personalized Luxury
            <span className="block font-extralight italic text-slate-600">
              Gifts & Experiences
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light luxury-text-spacing">
            We serve quite luxury clients who appreciate the finest things in life. Our ultra-high-net-worth
            clients receive extraordinary personalized gifts worth over $500,000, including rare antiques,
            artifacts, fine jewelry, and bespoke luxury items that reflect their discerning taste and our
            deep commitment to their success.
          </p>
        </div>

        {/* Luxury Items Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* George Daniels Watch */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200/50">
            <div className="relative h-48">
              <img
                src="https://assets.phillips.com/t_Website_LotDetailZoomImage/auctions/NY080322/173423_001.jpg"
                alt="George Daniels Anniversary Watch"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-slate-900 mb-2">George Daniels Anniversary</h3>
              <p className="text-slate-600 text-sm mb-4">Rare Co-axial escapement wristwatch</p>
              <div className="text-amber-600 font-medium text-sm">$816,500</div>
            </div>
          </div>

          {/* Hermès */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200/50">
            <div className="relative h-48 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
              <div className="text-center text-slate-500">
                <Gift className="h-12 w-12 mx-auto mb-2 text-amber-600" />
                <p className="text-xs">Hermès Rare Leather</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Hermès</h3>
              <p className="text-slate-600 text-sm mb-4">Wallet or Card Holder in rare leather</p>
              <div className="text-amber-600 font-medium text-sm">Upon Request</div>
            </div>
          </div>

          {/* Ferrari 250 GT Lusso */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200/50">
            <div className="relative h-48 bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
              <div className="text-center text-slate-500">
                <Gift className="h-12 w-12 mx-auto mb-2 text-red-600" />
                <p className="text-xs">Ferrari 250 GT Lusso</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Ferrari 250 GT Lusso</h3>
              <p className="text-slate-600 text-sm mb-4">1960s Iconic Sports Car</p>
              <div className="text-amber-600 font-medium text-sm">Upon Request</div>
            </div>
          </div>

          {/* Patek Philippe */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200/50">
            <div className="relative h-48 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
              <div className="text-center text-slate-500">
                <Star className="h-12 w-12 mx-auto mb-2 text-slate-600" />
                <p className="text-xs">Patek Philippe</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Patek Philippe</h3>
              <p className="text-slate-600 text-sm mb-4">Calatrava or Perpetual Calendar</p>
              <div className="text-amber-600 font-medium text-sm">Upon Request</div>
            </div>
          </div>

          {/* Rolls-Royce Phantom */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200/50">
            <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
              <div className="text-center text-slate-500">
                <Gift className="h-12 w-12 mx-auto mb-2 text-blue-600" />
                <p className="text-xs">Rolls-Royce Phantom</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Rolls-Royce Phantom</h3>
              <p className="text-slate-600 text-sm mb-4">Ultimate Luxury Sedan</p>
              <div className="text-amber-600 font-medium text-sm">Upon Request</div>
            </div>
          </div>

          {/* Rémy Martin Louis XIII */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200/50">
            <div className="relative h-48 bg-gradient-to-br from-amber-50 to-yellow-100 flex items-center justify-center">
              <div className="text-center text-slate-500">
                <Star className="h-12 w-12 mx-auto mb-2 text-amber-600" />
                <p className="text-xs">Rémy Martin Louis XIII</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Rémy Martin Louis XIII</h3>
              <p className="text-slate-600 text-sm mb-4">Rare Cask Cognac</p>
              <div className="text-amber-600 font-medium text-sm">Upon Request</div>
            </div>
          </div>
        </div>

        <div className="text-center lg:text-left mb-12">
          <h3 className="text-2xl font-light text-slate-900 mb-4">Why We Curate These Gifts</h3>
          <p className="text-slate-600 max-w-3xl">
            Our ultra-high-net-worth clients deserve more than exceptional investment returns.
            We search the world for extraordinary pieces from brands like TBD Eyewear, Ghurka,
            Land Rover Defender, Bentley Mulsanne, John Lobb Paris, Loro Piana, Huntsman & Sons,
            F.P. Journe, Kari Voutilainen, and more. These become cherished heirlooms,
            strengthening our partnership and creating lasting memories.
          </p>
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6 font-light">
            Experience the Murivest difference - where exceptional wealth management meets extraordinary appreciation.
          </p>
          <Link href="/wealth-management">
            <button className="inline-flex items-center px-8 py-4 bg-amber-600 text-white rounded-2xl font-medium hover:bg-amber-700 transition-colors">
              Explore Wealth Management
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedLuxuryGifts;