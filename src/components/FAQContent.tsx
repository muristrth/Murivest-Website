'use client'


import Link from 'next/link'

interface FAQItem {
  id: string
  question: string
  answer: string
}

interface FAQContentProps {
  faqData: FAQItem[]
}

export default function FAQContent({ faqData }: FAQContentProps) {
  return (
    <section className="luxury-spacing bg-gradient-to-br from-slate-50 to-white min-h-screen">
      <div className="luxury-container luxury-padding">
        {/* Header */}
        <div
          className="text-center luxury-margin-bottom"
          }
          }
          }
        >
          <h1 className="text-5xl md:text-6xl font-serif font-light text-slate-900 mb-6 luxury-text-spacing">
            Commercial Real Estate <span className="text-amber-600">FAQ</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light luxury-text-spacing">
            Expert insights and institutional-grade answers to your most pressing commercial real estate questions.
            Discover why Murivest Realty Group is East Africa's premier investment authority.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200/50"
                }
                }
                }
              >
                <Link
                  href={`/faq/${faq.id}`}
                  className="block group"
                >
                  <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-6 luxury-text-spacing group-hover:text-amber-600 transition-colors duration-300">
                    {faq.question}
                  </h2>
                </Link>
                <Link
                  href={`/faq/${faq.id}`}
                  className="text-amber-600 hover:text-amber-700 font-medium text-sm inline-flex items-center gap-2"
                >
                  Read full answer →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="bg-slate-900 rounded-2xl p-8 lg:p-12 text-white text-center mt-16"
          }
          }
          }
          }
        >
          <h3 className="text-3xl font-serif font-bold mb-4">Ready to Architect Your Wealth?</h3>
          <p className="text-slate-300 font-light mb-8 max-w-2xl mx-auto luxury-text-spacing">
            Join the exclusive circle of sophisticated investors who trust Murivest Realty Group
            with their generational wealth. Our institutional-grade opportunities await.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg text-center"
            >
              Begin Your Journey
            </Link>
            <Link
              href="/commercial-real-estate"
              className="border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-center"
            >
              Explore Properties
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
