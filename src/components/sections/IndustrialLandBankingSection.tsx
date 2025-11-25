import React from 'react';
import Link from 'next/link';

const IndustrialLandBankingSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industrial & Land Banking Deep Dive
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized industrial real estate and strategic land banking for owners of big companies in manufacturing and logistics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Industrial Asset Analysis */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Industrial Real Estate Analysis
            </h3>
            <p className="text-gray-600 mb-4">
              Detailed metrics: vacancy rates near Mombasa Road (2.3%), average logistics lease lengths (7.5 years). Industrial Real Estate Yields Nairobi.
            </p>
            <Link href="/industrial-properties" className="text-blue-600 hover:text-blue-800 font-medium">
              Explore Industrial Properties →
            </Link>
          </div>

          {/* Strategic Land Banking */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Strategic Land Banking
            </h3>
            <p className="text-gray-600 mb-4">
              Acquire large tracts near upcoming infrastructure projects for 5-10 year growth. Prime Land Banking Opportunities Kenya.
            </p>
            <Link href="/strategic-land-banking" className="text-blue-600 hover:text-blue-800 font-medium">
              View Land Opportunities →
            </Link>
          </div>
        </div>

        {/* Local High-Value Names */}
        <div className="bg-gray-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Prime Commercial Hubs in Nairobi
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <Link href="/properties?location=westlands" className="text-blue-600 hover:text-blue-800">
                Commercial Property Westlands
              </Link>
            </div>
            <div>
              <Link href="/properties?location=upper-hill" className="text-blue-600 hover:text-blue-800">
                Upper Hill Office Towers
              </Link>
            </div>
            <div>
              <Link href="/properties?location=industrial-area" className="text-blue-600 hover:text-blue-800">
                Industrial Area Developments
              </Link>
            </div>
            <div>
              <Link href="/properties?location=karen" className="text-blue-600 hover:text-blue-800">
                Karen Commercial Spaces
              </Link>
            </div>
          </div>
        </div>

        {/* Legacy Investment Brief */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            The 2025 Legacy Investment Brief
          </h3>
          <p className="text-gray-600 mb-4">
            Discreet guide for family trust Kenya CRE investments, selling manufacturing plants, and structuring for generational wealth.
          </p>
          <Link href="/2025-legacy-brief" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Download Brief
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustrialLandBankingSection;