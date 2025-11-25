import React from 'react';
import Link from 'next/link';

const TaxIntelligenceSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tax & Regulatory Intelligence (KRA Focus)
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maximize post-tax returns and ensure full compliance with Kenyan tax laws for commercial property and wealth transfer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Article/FAQ */}
          <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Optimizing Capital Gains Tax on Land Disposition in Kenya
            </h3>
            <p className="text-gray-600 mb-4">
              Legal strategies to minimize taxes when selling prime land or large assets. KRA Compliant Commercial Property Investment.
            </p>
            <Link href="/tax-optimization-land" className="text-blue-600 hover:text-blue-800 font-medium">
              Read Article →
            </Link>
          </div>

          {/* Trust Structures */}
          <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Family Trusts & Holding Companies for Tax Efficiency
            </h3>
            <p className="text-gray-600 mb-4">
              Structure property ownership via family trusts and holding companies for tax efficiency and asset protection. Kenya Family Office Real Estate Structuring.
            </p>
            <Link href="/trust-structures" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </Link>
          </div>

          {/* In-depth Analysis */}
          <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Quarterly Income: Commercial Leases vs. Treasury Bills
            </h3>
            <p className="text-gray-600 mb-4">
              Clear comparison showing CRE income stability versus traditional financial instruments in Kenya. Tax Efficient Passive Income Kenya CRE.
            </p>
            <Link href="/income-comparison" className="text-blue-600 hover:text-blue-800 font-medium">
              View Analysis →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxIntelligenceSection;