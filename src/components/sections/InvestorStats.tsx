'use client';

import React from 'react';

import { TrendingUp, Users, Globe, Award } from 'lucide-react';

const InvestorStats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "KES 1B",
      label: "Target Raise",
      description: "By Q4 2025"
    },
    {
      icon: Users,
      value: "12+",
      label: "Distinguished Investors",
      description: "From 47 countries worldwide"
    },
    {
      icon: Globe,
      value: "15+",
      label: "Prime Markets",
      description: "Across East Africa's finest locations"
    },
    {
      icon: Award,
      value: "28.4%",
      label: "Average Annual Returns",
      description: "Consistently outperforming markets"
    }
  ];

  return (
    <section className="luxury-section-spacing bg-slate-900">
      <div className="luxury-container luxury-padding">
        <div className="text-center luxury-margin-bottom">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 luxury-text-spacing">
            Trusted by the World's
            <span className="block font-extralight italic text-slate-300">
              Most Discerning Investors
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light luxury-text-spacing">
            Our track record speaks to those who understand that true wealth
            is built through strategic patience and exclusive opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 luxury-grid-gap">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 rounded-2xl mb-6 group-hover:bg-slate-700 transition-colors">
                <stat.icon className="h-8 w-8 text-slate-300" />
              </div>
              <div className="text-4xl font-light text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-medium text-slate-300 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-slate-500 font-light">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorStats;
