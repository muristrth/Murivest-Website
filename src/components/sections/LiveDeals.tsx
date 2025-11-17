'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, FileText, Video, Eye, TrendingUp } from 'lucide-react';

const LiveDeals = () => {
  const deals = [
    {
      type: 'Office',
      title: 'Sameer Business Park, Block D',
      price: 'Shs 580M',
      yield: '8.1%',
      tenant: 'NGO (5-yr lease)',
      image: '/p3/ABSA_Towers.png',
      video: 'drone-video-1',
      titleDeed: 'title-deed-office.pdf',
      lease: 'lease-abstract-office.pdf'
    },
    {
      type: 'Retail',
      title: 'Kiambu Rd Convenience Centre',
      price: 'Shs 320M',
      yield: '8.7%',
      tenant: 'Anchor: QuickMart',
      image: '/p6/Buffalo_Mall.png',
      video: 'drone-video-2',
      titleDeed: 'title-deed-retail.pdf',
      lease: 'lease-abstract-retail.pdf'
    },
    {
      type: 'Industrial',
      title: 'Mlolongo Cold-Store',
      price: 'Shs 420M',
      yield: '9.2%',
      tenant: 'Tenant: Twiga Foods',
      image: '/p2/mlolongo-godown.png',
      video: 'drone-video-3',
      titleDeed: 'title-deed-industrial.pdf',
      lease: 'lease-abstract-industrial.pdf'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-medium mb-8">
            <TrendingUp className="h-4 w-4 mr-2" />
            Live Investment Opportunities
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8">
            Current Deals
            <span className="block font-extralight italic text-slate-600">
              Ready for Investment
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Exclusive access to verified properties with complete due diligence packages. Each deal includes drone footage, title deeds, and lease abstracts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {/* Property Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                        <div class="text-center text-slate-500">
                          <svg class="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                          </svg>
                          <p class="text-sm">${deal.type} Property</p>
                        </div>
                      </div>
                    `;
                  }}
                />
                <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {deal.yield} Yield
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                    {deal.type}
                  </span>
                  <span className="text-2xl font-bold text-slate-900">{deal.price}</span>
                </div>

                <h3 className="text-lg font-medium text-slate-900 mb-2">{deal.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{deal.tenant}</p>

                {/* Due Diligence Links */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <Video className="h-4 w-4 mr-2 text-blue-500" />
                    <span>Drone Video Available</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <FileText className="h-4 w-4 mr-2 text-green-500" />
                    <span>Title Deed & Lease Abstract</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link href={`/properties/${deal.title.toLowerCase().replace(/\s+/g, '-').replace(/,/g, '')}`}>
                  <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors">
                    <Eye className="h-4 w-4 mr-2" />
                    View Full Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">
            All deals are KRA-compliant with verified documentation and professional valuations.
          </p>
          <Link href="/properties">
            <button className="inline-flex items-center px-8 py-4 bg-amber-600 text-white rounded-2xl font-medium hover:bg-amber-700 transition-colors">
              View All Properties
              <MapPin className="h-4 w-4 ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LiveDeals;