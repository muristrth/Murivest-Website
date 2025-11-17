'use client';

import React from 'react';
import { Building2, TrendingDown, Zap, Droplets, Thermometer, Shield, CheckCircle, Calendar, Download, FileText, MapPin, MessageSquare, ExternalLink } from 'lucide-react';

const UchumiHouseProposal = () => {
  const whatsIncluded = [
    {
      feature: 'Energy Monitoring',
      hardware: 'Shelly 3EM meter',
      software: 'Real-time dashboard',
      cost: 'Shs 0 (trial)'
    },
    {
      feature: 'Leak Detection',
      hardware: '2 LoRaWAN sensors',
      software: 'WhatsApp alerts',
      cost: 'Shs 0 (trial)'
    },
    {
      feature: 'HVAC Optimization',
      hardware: 'Existing BMS integration',
      software: 'AI scheduling',
      cost: 'Shs 0 (trial)'
    }
  ];

  const timeline = [
    { day: 'Day 1', task: 'Site survey (2 hours)', status: 'completed' },
    { day: 'Day 7', task: 'Install sensors (4 hours, no tenant disruption)', status: 'completed' },
    { day: 'Day 8', task: 'Dashboard live (24/7 access)', status: 'active' },
    { day: 'Day 30', task: 'Savings report & proposal', status: 'upcoming' }
  ];

  const resources = [
    {
      icon: FileText,
      title: 'Installation Checklist',
      description: 'PDF (1 page)',
      link: '#'
    },
    {
      icon: MapPin,
      title: 'Sensor Placement Map',
      description: 'Floor plan with red dots',
      link: '#'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Alert Setup Guide',
      description: 'Screenshot guide',
      link: '#'
    },
    {
      icon: Download,
      title: 'Energy Savings Calculator',
      description: 'Excel file (input bill, get savings)',
      link: '#'
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <Building2 className="h-6 w-6 text-amber-500 mr-3" />
            <span className="text-amber-500 font-serif text-sm tracking-widest uppercase">
              Murivest Realty Group • Asset Care Pilot
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-light text-white mb-6 leading-tight">
            Uchumi House Asset Care Pilot
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-serif leading-relaxed mb-8">
            Free 30-day trial. Save Shs 200k/month on energy. No setup cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://uchumi-asset-care.streamlit.app"
              className="bg-amber-600 hover:bg-amber-700 text-white font-serif py-4 px-8 transition-colors duration-300 flex items-center justify-center"
            >
              <ExternalLink className="h-5 w-5 mr-3" />
              View Live Dashboard
            </a>
            <a
              href="#"
              className="bg-white/10 hover:bg-white/20 text-white font-serif py-4 px-8 border border-white/20 transition-colors duration-300 flex items-center justify-center"
            >
              <Download className="h-5 w-5 mr-3" />
              Download Pilot Proposal
            </a>
          </div>
        </div>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-serif font-light text-white mb-8">The Problem</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <TrendingDown className="h-6 w-6 text-red-400 mr-4 mt-1" />
                <div>
                  <p className="text-gray-300 leading-relaxed font-serif">
                    Uchumi House spends <span className="text-red-400 font-medium">Shs 2.1M/month</span> on electricity.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Zap className="h-6 w-6 text-red-400 mr-4 mt-1" />
                <div>
                  <p className="text-gray-300 leading-relaxed font-serif">
                    <span className="text-red-400 font-medium">15% is waste</span> from HVAC over-cooling at night.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-serif font-light text-white mb-8">Our Solution</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-green-400 mr-4 mt-1" />
                <div>
                  <p className="text-gray-300 leading-relaxed font-serif">
                    IoT sensors auto-adjust HVAC based on occupancy.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingDown className="h-6 w-6 text-green-400 mr-4 mt-1" />
                <div>
                  <p className="text-gray-300 leading-relaxed font-serif">
                    Expected savings: <span className="text-green-400 font-medium">Shs 250k/month</span>.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-400 mr-4 mt-1" />
                <div>
                  <p className="text-gray-300 leading-relaxed font-serif">
                    Live pilot running on Floor 3. See dashboard above.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-24">
          <h2 className="text-3xl font-serif font-light text-white mb-12 text-center">What's Included</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white/5 backdrop-blur-sm border border-white/10">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-amber-400 font-serif font-medium">Feature</th>
                  <th className="text-left p-4 text-amber-400 font-serif font-medium">Hardware</th>
                  <th className="text-left p-4 text-amber-400 font-serif font-medium">Software</th>
                  <th className="text-left p-4 text-amber-400 font-serif font-medium">Your Cost</th>
                </tr>
              </thead>
              <tbody>
                {whatsIncluded.map((item, index) => (
                  <tr key={index} className="border-b border-white/5">
                    <td className="p-4 text-white font-serif">{item.feature}</td>
                    <td className="p-4 text-gray-300 font-serif">{item.hardware}</td>
                    <td className="p-4 text-gray-300 font-serif">{item.software}</td>
                    <td className="p-4 text-gray-300 font-serif">{item.cost}</td>
                  </tr>
                ))}
                <tr className="border-b border-white/5 bg-amber-900/10">
                  <td className="p-4 text-amber-400 font-serif font-medium" colSpan={3}>After Trial</td>
                  <td className="p-4 text-amber-400 font-serif font-medium">Shs 25/ft²/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Installation Timeline */}
        <div className="mb-24">
          <h2 className="text-3xl font-serif font-light text-white mb-12 text-center">Installation Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((step, index) => (
              <div key={index} className={`bg-white/5 backdrop-blur-sm border border-white/10 p-6 text-center ${
                step.status === 'completed' ? 'border-green-500/20 bg-green-900/10' :
                step.status === 'active' ? 'border-amber-500/20 bg-amber-900/10' :
                'border-gray-500/20'
              }`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  step.status === 'completed' ? 'bg-green-500/20' :
                  step.status === 'active' ? 'bg-amber-500/20' :
                  'bg-gray-500/20'
                }`}>
                  <Calendar className={`h-6 w-6 ${
                    step.status === 'completed' ? 'text-green-400' :
                    step.status === 'active' ? 'text-amber-400' :
                    'text-gray-400'
                  }`} />
                </div>
                <h3 className="text-lg font-serif font-medium text-white mb-2">{step.day}</h3>
                <p className="text-gray-300 font-serif text-sm">{step.task}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resources for Uchumi FM Team */}
        <div>
          <h2 className="text-3xl font-serif font-light text-white mb-12 text-center">Resources for Uchumi FM Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <resource.icon className="h-6 w-6 text-amber-400 mr-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-serif font-medium text-white">{resource.title}</h3>
                </div>
                <p className="text-gray-300 font-serif text-sm group-hover:text-gray-200 transition-colors">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UchumiHouseProposal;