'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Building, Wrench, CheckCircle } from 'lucide-react';

const pricingPlans = [
  {
    name: 'CRE Brokerage',
    icon: Building,
    description: 'Commission-based commercial real estate transactions',
    features: [
      'Property acquisition advisory',
      'Transaction structuring',
      'Due diligence coordination',
      'Closing support'
    ],
    pricing: '2.0-3.5% commission',
    popular: false
  },
  {
    name: 'AssetCare+ Management',
    icon: Wrench,
    description: 'Comprehensive smart building management services',
    features: [
      '24/7 facility monitoring',
      'Predictive maintenance',
      'Tenant coordination',
      'Financial reporting'
    ],
    pricing: 'From $2,500/month',
    popular: true
  },
  {
    name: 'Institutional Advisory',
    icon: DollarSign,
    description: 'Full-service investment advisory for large mandates',
    features: [
      'Portfolio strategy',
      'Market intelligence',
      'Tax optimization',
      'Performance reporting'
    ],
    pricing: 'Custom pricing',
    popular: false
  }
];

const PricingSection = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <DollarSign className="h-8 w-8 text-amber-500 mr-3" />
              <span className="text-amber-500 font-serif italic text-lg">Transparent Pricing</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              No Hidden Fees,
              <span className="block text-amber-200/90 font-serif italic">Clear Costs</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed font-light">
              Transparent pricing for CRE brokerage and AssetCare+ services. No surprises, no hidden fees - just clear, competitive costs for premium commercial real estate services.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative bg-white/[0.02] border rounded-lg p-8 ${
                  plan.popular ? 'border-amber-500/50' : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-amber-500 text-black px-4 py-1 text-xs font-bold uppercase tracking-widest rounded">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <plan.icon className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-serif mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-sm font-light">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-serif text-amber-400">{plan.pricing}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-slate-300 text-sm">
                      <CheckCircle className="h-4 w-4 text-amber-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 font-bold uppercase tracking-widest transition-all ${
                  plan.popular
                    ? 'bg-amber-500 text-black hover:bg-amber-400'
                    : 'border border-amber-500/60 text-amber-300 hover:bg-amber-500 hover:text-black'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
            Need Custom Pricing?
          </h2>
          <p className="text-slate-400 text-xl mb-8 leading-relaxed font-light">
            For institutional mandates, large portfolios, or specialized services, contact our team for customized pricing structures.
          </p>

          <div className="bg-white/[0.02] border border-white/10 rounded-lg p-8">
            <h3 className="text-xl font-serif mb-4">Institutional Partnerships</h3>
            <p className="text-slate-400 mb-6 font-light">
              Volume discounts available for institutional clients with multiple properties or ongoing management needs.
            </p>
            <div className="text-amber-400 font-serif italic">
              Contact us for enterprise pricing
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;