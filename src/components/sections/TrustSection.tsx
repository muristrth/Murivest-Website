'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';

const TrustSection = () => {
  return (
    <section className="py-16 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-serif font-light text-white mb-4">
            Verified Partners → Trust at Every Step
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          {/* ERB License */}
          <div className="text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
              <img
                src="/erb-logo.png"
                alt="ERB License"
                className="w-16 h-16 mx-auto mb-4"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling!.textContent = 'ERB';
                }}
              />
              <div className="text-black font-serif font-medium">ERB</div>
            </div>
            <p className="text-gray-300 text-sm mb-2">ERB License #2025-XXXX</p>
            <a
              href="https://erb.go.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 text-sm flex items-center justify-center"
            >
              View Certificate <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Legal Counsel */}
          <div className="text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
              <img
                src="/legal-counsel.jpg"
                alt="Michael Mungai Advocates"
                className="w-16 h-16 mx-auto mb-4 object-cover rounded"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling!.textContent = 'MMA';
                }}
              />
              <div className="text-black font-serif font-medium">MMA</div>
            </div>
            <p className="text-gray-300 text-sm mb-2">Michael Mungai Advocates</p>
            <p className="text-gray-400 text-xs">LL.B (Nbi), LL.M (Oxf)</p>
          </div>

          {/* Connectivity SLA */}
          <div className="text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
              <img
                src="/liquid-telcom-logo.png"
                alt="Liquid Telcom"
                className="w-16 h-16 mx-auto mb-4"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling!.textContent = 'LT';
                }}
              />
              <div className="text-black font-serif font-medium">LT</div>
            </div>
            <p className="text-gray-300 text-sm mb-2">Connectivity SLA</p>
            <p className="text-gray-400 text-xs">99.5% Uptime</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">Tax Compliance: Auto-filed via KRA iTax API</p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;