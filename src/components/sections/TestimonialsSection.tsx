import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Kamau",
      role: "Businessman, Nairobi",
      quote: "Closed in 30 days. The process was straightforward and the yields are exactly as advertised.",
      type: "brokerage"
    },
    {
      name: "Uchumi FM",
      role: "Facilities Manager",
      quote: "Saved Shs 2.5M/year on energy costs. The dashboard shows real-time savings and alerts.",
      type: "assetcare"
    },
    {
      name: "Sarah Kiptoo",
      role: "Tenant",
      quote: "The portal is so easy to use. Rent payments and maintenance requests are seamless.",
      type: "tenant"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-light text-white mb-4">
            Real Results from Real Clients
          </h2>
          <p className="text-gray-400 font-serif">
            What Kenyan directors and facility managers say about working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <Quote className="w-8 h-8 text-amber-400 mb-4" />
              <blockquote className="text-gray-300 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-slate-700 pt-4">
                <div className="font-serif font-medium text-white">
                  {testimonial.name}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            All testimonials are from verified clients with permission to share their experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;