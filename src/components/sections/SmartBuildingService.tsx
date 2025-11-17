'use client';

import React, { useState, useEffect } from 'react';
import { Zap, TrendingDown, DollarSign, Activity, BarChart3 } from 'lucide-react';

const SmartBuildingService = () => {
  const [energyConsumption, setEnergyConsumption] = useState(12.3);

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setEnergyConsumption(prev => {
        const change = (Math.random() - 0.5) * 0.5; // Random change between -0.25 and 0.25
        return Math.max(10, Math.min(15, prev + change)); // Keep between 10-15
      });
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const buildingSize = 50000; // ft²
  const monthlySavings = 180000; // Shs
  const serviceFee = 62500; // Shs
  const netGain = monthlySavings - serviceFee;

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-medium mb-8">
            <Zap className="h-4 w-4 mr-2" />
            AI Smart-Building Service
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Asset Care
            <span className="block font-extralight italic text-slate-300">
              Shs 25/ft²/month
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
            Asset Care: Shs 25/ft²/month. Intelligent building management powered by AI for Offices, Retail, Industrial, and Hospitality properties. Monitor, optimize, and reduce operational costs with real-time data from Shelly 3EM meters.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Live Dashboard */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-medium">Live Energy Dashboard</h3>
              <div className="flex items-center text-green-400">
                <Activity className="h-4 w-4 mr-2" />
                <span className="text-sm">Live</span>
              </div>
            </div>

            <div className="space-y-6">
              {/* Murivest Plaza */}
              <div className="bg-slate-700 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-medium">Murivest Plaza</h4>
                    <p className="text-slate-400 text-sm">Office Building • 50,000 ft²</p>
                  </div>
                  <Zap className="h-6 w-6 text-amber-400" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-light text-amber-400 mb-1">
                      {energyConsumption.toFixed(1)}
                    </div>
                    <div className="text-slate-400 text-sm">kWh/ft²/month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-green-400 mb-1">
                      23%
                    </div>
                    <div className="text-slate-400 text-sm">Efficiency Gain</div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex justify-between text-sm text-slate-400 mb-2">
                    <span>Energy Usage</span>
                    <span>Target: 12.0 kWh/ft²</span>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-2">
                    <div
                      className="bg-amber-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${Math.min(100, (energyConsumption / 15) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Additional Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-700 rounded-lg p-4 text-center">
                  <BarChart3 className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-lg font-medium">98.5%</div>
                  <div className="text-slate-400 text-xs">Uptime</div>
                </div>
                <div className="bg-slate-700 rounded-lg p-4 text-center">
                  <TrendingDown className="h-6 w-6 text-green-400 mx-auto mb-2" />
                  <div className="text-lg font-medium">18%</div>
                  <div className="text-slate-400 text-xs">Cost Reduction</div>
                </div>
                <div className="bg-slate-700 rounded-lg p-4 text-center">
                  <DollarSign className="h-6 w-6 text-amber-400 mx-auto mb-2" />
                  <div className="text-lg font-medium">Shs 180k</div>
                  <div className="text-slate-400 text-xs">Monthly Savings</div>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Pitch */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-light mb-6">Proven ROI Results</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-amber-100">Building Size</span>
                  <span className="font-medium">{buildingSize.toLocaleString()} ft²</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-100">Monthly Energy Savings</span>
                  <span className="font-medium">Shs {monthlySavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-100">Our Service Fee</span>
                  <span className="font-medium">Shs {serviceFee.toLocaleString()}</span>
                </div>
                <hr className="border-amber-400/30" />
                <div className="flex justify-between items-center text-xl">
                  <span className="text-amber-100 font-medium">Net Monthly Gain</span>
                  <span className="font-bold">Shs {netGain.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h4 className="text-xl font-medium mb-4">Asset-Specific Use Cases</h4>
              <div className="space-y-4 text-slate-300">
                <div>
                  <h5 className="font-medium text-amber-400 mb-2">Office Buildings</h5>
                  <p className="text-sm">HVAC occupancy tuning, meeting-room usage analytics → 15% energy savings</p>
                </div>
                <div>
                  <h5 className="font-medium text-amber-400 mb-2">Retail Properties</h5>
                  <p className="text-sm">Footfall heatmaps, tenant sales vs. rent ratio alerts → optimize turnover rent</p>
                </div>
                <div>
                  <h5 className="font-medium text-amber-400 mb-2">Industrial Facilities</h5>
                  <p className="text-sm">Power theft detection, cold-chain temp monitoring → prevent stock loss</p>
                </div>
                <div>
                  <h5 className="font-medium text-amber-400 mb-2">Hospitality Assets</h5>
                  <p className="text-sm">Leak detection, predictive maintenance → reduce downtime</p>
                </div>
              </div>
            </div>

            <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 px-6 rounded-xl font-medium transition-colors flex items-center justify-center">
              <Zap className="h-5 w-5 mr-2" />
              Install Smart Meters Today
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-slate-400 mb-6">
            Asset Care: Shs 25/ft²/month for any CRE type. Join Nairobi's most advanced properties with AI-powered building management.
          </p>
          <div className="text-sm text-slate-500">
            Works for Offices, Retail, Industrial & Hospitality • No setup fees • 30-day trial available
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartBuildingService;