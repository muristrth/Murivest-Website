import React from 'react';
import Link from 'next/link';

const LegacyPlanningSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Succession & Legacy Planning for Kenyan Business Owners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Convert operating capital into generational wealth. Secure stable income for future generations through strategic commercial real estate investments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* White Paper */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              The Kenyan Business Owner's Guide to Converting Operating Capital into Generational Wealth
            </h3>
            <p className="text-gray-600 mb-4">
              Shift capital from high-risk active business to low-risk passive assets. Business Owner Real Estate Succession Kenya.
            </p>
            <Link href="/legacy-guide" className="text-blue-600 hover:text-blue-800 font-medium">
              Download White Paper →
            </Link>
          </div>

          {/* Service Page */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Sale & Leaseback Advisory for Kenyan Manufacturers
            </h3>
            <p className="text-gray-600 mb-4">
              Monetize factories or head offices to unlock cash while maintaining operations. Factory Sale and Leaseback Nairobi.
            </p>
            <Link href="/sale-leaseback" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </Link>
          </div>

          {/* Case Study */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Preserving the Legacy: Industrialist Success Story
            </h3>
            <p className="text-gray-600 mb-4">
              How a 65-year-old industrialist secured KSh billions in tax-efficient quarterly income. Real Estate Investment for Retirement Kenya.
            </p>
            <Link href="/case-study-legacy" className="text-blue-600 hover:text-blue-800 font-medium">
              Read Case Study →
            </Link>
          </div>
        </div>

        {/* Fiduciary Statement */}
        <div className="bg-blue-50 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Our Fiduciary Commitment
          </h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            We prioritize discretion, capital safety, and long-term wealth preservation. As your trusted fiduciary real estate manager, we focus on legacy building over high-risk growth. Fiduciary Real Estate Management Kenya.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegacyPlanningSection;