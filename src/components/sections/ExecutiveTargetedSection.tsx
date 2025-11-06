'use client';

import React from 'react';
import Link from 'next/link';
import { Users, Crown, Briefcase, ArrowRight, Shield } from 'lucide-react';

const ExecutiveTargetedSection = () => {
  return (
    <section className="luxury-spacing bg-gradient-to-br from-slate-50 to-amber-50">
      <div className="luxury-container luxury-padding">
        <div className="text-center luxury-margin-bottom">
          <div className="inline-flex items-center px-4 py-2 bg-slate-900/5 rounded-full text-slate-700 text-sm font-medium mb-8">
            <Crown className="h-4 w-4 mr-2" />
            Exclusive Executive Network
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8 luxury-text-spacing">
            For UK & Kenyan
            <span className="block font-extralight italic text-slate-600">
              Executive Directors
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light luxury-text-spacing">
            We understand the unique investment needs of successful executives and business leaders.
            Our discreet, institutional-grade services cater specifically to company directors,
            golf club members, and high-net-worth individuals seeking sophisticated wealth preservation strategies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 luxury-grid-gap items-center">
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200/50">
              <div className="flex items-center mb-6">
                <Briefcase className="h-8 w-8 text-amber-600 mr-3" />
                <h3 className="text-2xl font-light text-slate-900">Executive Director Services</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-600">Confidential investment consultations for company directors</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-600">Tax-efficient structures for executive compensation</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-600">Legacy planning and succession wealth management</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-600">Cross-border investment advisory for UK-Kenya opportunities</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200/50">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-amber-600 mr-3" />
                <h3 className="text-2xl font-light text-slate-900">Golf Membership Network</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-600">Exclusive introductions to premium golf clubs in Kenya and UK</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-600">Private golf investment opportunities and club memberships</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-600">Networking events at prestigious golf venues</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-600">Luxury lifestyle investment opportunities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-light text-slate-900 mb-4">Why Executives Choose Murivest</h3>
              <p className="text-slate-600 mb-6">
                As successful business leaders, you understand the importance of discreet, professional wealth management.
                Our institutional approach ensures your investments are handled with the same confidentiality and expertise
                you expect in your business dealings.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200/50">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <h4 className="text-lg font-medium text-slate-900 mb-2">UK-Kenya Expertise</h4>
                <p className="text-slate-600 text-sm">Specialized knowledge of both markets for seamless cross-border investing</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200/50">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Crown className="h-6 w-6 text-amber-600" />
                </div>
                <h4 className="text-lg font-medium text-slate-900 mb-2">Executive Network</h4>
                <p className="text-slate-600 text-sm">Access to exclusive executive and business leader communities</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200/50">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-amber-600" />
                </div>
                <h4 className="text-lg font-medium text-slate-900 mb-2">Absolute Discretion</h4>
                <p className="text-slate-600 text-sm">Bank-level confidentiality and privacy protection</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200/50">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-amber-600" />
                </div>
                <h4 className="text-lg font-medium text-slate-900 mb-2">Board-Level Service</h4>
                <p className="text-slate-600 text-sm">Direct access to senior partners and decision-makers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6 font-light">
            Join our exclusive network of UK and Kenyan executive directors who trust Murivest with their wealth management needs.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-2xl font-medium hover:bg-slate-800 transition-colors">
              Request Executive Consultation
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveTargetedSection;