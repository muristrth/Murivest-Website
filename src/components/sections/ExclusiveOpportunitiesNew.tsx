'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Calendar, TrendingUp } from 'lucide-react';

const ExclusiveOpportunities = () => {
  const opportunities = [
    {
      id: 1,
      title: "Best Western Meridian Hotel",
      location: "Nairobi CBD, Kenya",
      type: "Hotel",
      investment: "$9.2M (KSh 1.2B)",
      returns: "15.2% IRR",
      timeline: "Q2 2025",
      image: "/p5/facade-exterieure.jpg",
      status: "Bid Closing Soon",
      description: "Landmark hotel property in Nairobi CBD with excellent occupancy rates and comprehensive hospitality amenities"
    },
    {
      id: 2,
      title: "Buffalo Mall & Development Land",
      location: "Naivasha",
      type: "Retail",
      investment: "$5M (KSh 750M)",
      returns: "11% IRR",
      timeline: "Q3 2025",
      image: "/p6/Buffalo_Mall.png",
      status: "Under Offer",
      description: "Premier shopping destination in Naivasha with significant development potential on adjoining land."
    },
    {
      id: 3,
      title: "ICD Industrial Complex",
      location: "Mombasa Road, Nairobi",
      type: "Industrial",
      investment: "$8M (KSh 1B)",
      returns: "15% IRR",
      timeline: "Q4 2025",
      image: "/p/IMG-20250813-WA0001.jpg",
      status: "By Invitation Only",
      description: "Prime industrial site with offices, showrooms, warehouses and strategic transport connectivity."
    }
  ];

  return (
    <section className="luxury-spacing bg-gradient-to-br from-slate-50 to-stone-100">
      <div className="luxury-container luxury-padding">
        <div className="text-center luxury-margin-bottom">
          <div className="inline-flex items-center px-4 py-2 bg-slate-900/5 rounded-full text-slate-700 text-sm font-medium mb-8">
            <TrendingUp className="h-4 w-4 mr-2" />
            Exclusive Access Required
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8 luxury-text-spacing">
            Curated Investment
            <span className="block font-extralight italic text-slate-600">
              Opportunities
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light luxury-text-spacing">
            These exceptional opportunities are reserved for qualified investors
            who appreciate the value of exclusivity and superior returns.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <Link href="/properties" className="text-amber-600 hover:text-amber-700 font-serif font-medium transition-colors">
              View All Properties →
            </Link>
            <Link href="/market" className="text-amber-600 hover:text-amber-700 font-serif font-medium transition-colors">
              Market Analysis →
            </Link>
            <Link href="/calculator" className="text-amber-600 hover:text-amber-700 font-serif font-medium transition-colors">
              ROI Calculator →
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 luxury-grid-gap">
          {opportunities.map((opportunity, index) => (
            <div
              key={opportunity.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200/50 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64">
                <img
                  src={opportunity.image}
                  alt={opportunity.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-900/90 text-white px-3 py-2 rounded-full text-xs font-medium">
                    {opportunity.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-slate-700 px-3 py-2 rounded-full text-xs font-medium">
                    {opportunity.returns}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-4">
                  <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                    {opportunity.type}
                  </span>
                </div>

                <h3 className="text-2xl font-light text-slate-900 mb-3">
                  {opportunity.title}
                </h3>

                <div className="flex items-center text-slate-600 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">{opportunity.location}</span>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 text-sm">Investment Range</span>
                    <span className="text-slate-900 font-medium">{opportunity.investment}</span>
                  </div>
                </div>

                <Link href="/contact">
                  <button
                    className="w-full bg-slate-900 text-white py-4 rounded-2xl font-medium hover:bg-slate-800 transition-colors flex items-center justify-center"
                  >
                    Request Private Briefing
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6 font-light">
            Access to our complete portfolio requires qualification and invitation.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-2xl font-medium hover:bg-slate-800 transition-colors">
              Schedule Private Consultation
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveOpportunities;
