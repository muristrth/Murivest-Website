'use client';

import React from 'react';
import { Zap, Droplets, Shield, Thermometer, Building2, Cpu, Database, MessageSquare, Calendar, Download, ExternalLink } from 'lucide-react';

const AssetCareResources = () => {
  const buildingTypes = [
    {
      type: 'Office Tower',
      sensors: 'Energy, HVAC, Occupancy',
      savings: '15% power',
      trialCost: 'Shs 0'
    },
    {
      type: 'Retail Mall',
      sensors: 'Footfall, Water, Security',
      savings: '10% water',
      trialCost: 'Shs 0'
    },
    {
      type: 'Industrial Godown',
      sensors: 'Power, Temperature, Leaks',
      savings: '12% maintenance',
      trialCost: 'Shs 0'
    },
    {
      type: 'Mixed-Use (Uchumi-style)',
      sensors: 'All above + Lifts',
      savings: '14% total ops',
      trialCost: 'Shs 0'
    }
  ];

  const hardwareStack = [
    {
      icon: Zap,
      name: 'Energy Monitoring',
      details: 'Shelly 3EM smart meter ($180/building)'
    },
    {
      icon: Droplets,
      name: 'Water Leak Detection',
      details: 'LoRaWAN sensors ($40/point)'
    },
    {
      icon: Database,
      name: 'Dashboard',
      details: 'Supabase (free tier) + Streamlit (open-source)'
    },
    {
      icon: MessageSquare,
      name: 'Alerts',
      details: 'WhatsApp Business API ($0.007/message)'
    },
    {
      icon: Shield,
      name: 'Installation',
      details: 'Partnered with Kenya Power certified techs (Shs 5k/setup)'
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <Building2 className="h-6 w-6 text-amber-500 mr-3" />
            <span className="text-amber-500 font-serif text-sm tracking-widest uppercase">
              Murivest Realty Group • Asset Care Division
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-light text-white mb-6 leading-tight">
            Asset Care Resources:
            <span className="text-amber-400 block font-medium">AI-Powered Building Management</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-serif leading-relaxed">
            Transform your commercial property operations with intelligent IoT monitoring and automated optimization.
          </p>
        </div>

        {/* Section 1: What is Asset Care? */}
        <div className="mb-24">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
            <h2 className="text-2xl font-serif font-light text-white mb-6">What is Asset Care?</h2>
            <p className="text-gray-300 leading-relaxed font-serif text-lg">
              Asset Care is AI-powered building management for CRE owners. We install IoT sensors to monitor energy, water, security & HVAC.
              You save 12-15% on ops costs. We charge Shs 25/ft²/month. No setup fees. 30-day trial.
            </p>
          </div>
        </div>

        {/* Section 2: Supported Building Types */}
        <div className="mb-24">
          <h2 className="text-3xl font-serif font-light text-white mb-12 text-center">Supported Building Types</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white/5 backdrop-blur-sm border border-white/10">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-amber-400 font-serif font-medium">Building Type</th>
                  <th className="text-left p-4 text-amber-400 font-serif font-medium">Sensors Installed</th>
                  <th className="text-left p-4 text-amber-400 font-serif font-medium">Typical Savings</th>
                  <th className="text-left p-4 text-amber-400 font-serif font-medium">Trial Cost</th>
                </tr>
              </thead>
              <tbody>
                {buildingTypes.map((building, index) => (
                  <tr key={index} className="border-b border-white/5">
                    <td className="p-4 text-white font-serif">{building.type}</td>
                    <td className="p-4 text-gray-300 font-serif">{building.sensors}</td>
                    <td className="p-4 text-gray-300 font-serif">{building.savings}</td>
                    <td className="p-4 text-gray-300 font-serif">{building.trialCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: Hardware & Software Stack */}
        <div className="mb-24">
          <h2 className="text-3xl font-serif font-light text-white mb-12 text-center">Hardware & Software Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardwareStack.map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6">
                <div className="flex items-center mb-4">
                  <item.icon className="h-6 w-6 text-amber-400 mr-3" />
                  <h3 className="text-lg font-serif font-medium text-white">{item.name}</h3>
                </div>
                <p className="text-gray-300 font-serif text-sm">{item.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Case Study: Live Dashboard */}
        <div className="mb-24">
          <h2 className="text-3xl font-serif font-light text-white mb-12 text-center">Case Study: Live Dashboard</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
            <h3 className="text-xl font-serif font-medium text-white mb-6">Murivest Plaza (Test Building)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-amber-900/20 border border-amber-500/20">
                <div className="text-2xl font-serif text-amber-400 mb-2">1,234 kWh</div>
                <div className="text-gray-300 font-serif text-sm">Energy Today</div>
              </div>
              <div className="text-center p-4 bg-amber-900/20 border border-amber-500/20">
                <div className="text-2xl font-serif text-amber-400 mb-2">Shs 18,500</div>
                <div className="text-gray-300 font-serif text-sm">Cost</div>
              </div>
              <div className="text-center p-4 bg-green-900/20 border border-green-500/20">
                <div className="text-2xl font-serif text-green-400 mb-2">↓ 12%</div>
                <div className="text-gray-300 font-serif text-sm">Savings vs Last Month</div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center text-green-400 font-serif">
                <Shield className="h-4 w-4 mr-2" />
                <span>Status: ✅ All systems normal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Get Started */}
        <div className="text-center">
          <h2 className="text-3xl font-serif font-light text-white mb-12">Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="#"
              className="bg-amber-600 hover:bg-amber-700 text-white font-serif py-4 px-6 transition-colors duration-300 flex items-center justify-center"
            >
              <Calendar className="h-5 w-5 mr-3" />
              Schedule Free Energy Audit
            </a>
            <a
              href="#"
              className="bg-white/10 hover:bg-white/20 text-white font-serif py-4 px-6 border border-white/20 transition-colors duration-300 flex items-center justify-center"
            >
              <Download className="h-5 w-5 mr-3" />
              Download IoT Sensor Spec Sheet
            </a>
            <a
              href="/asset-care/uchumi-house"
              className="bg-white/10 hover:bg-white/20 text-white font-serif py-4 px-6 border border-white/20 transition-colors duration-300 flex items-center justify-center"
            >
              <ExternalLink className="h-5 w-5 mr-3" />
              View Uchumi House Pilot Proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetCareResources;