'use client';

import Link from 'next/link';
import Image from 'next/image';

interface SidebarPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
}

interface Props {
  relatedPosts: SidebarPost[];
  popularPosts: SidebarPost[];
}

export default function BlogSidebar({
  relatedPosts,
  popularPosts,
}: Props) {
  return (
    <aside className="w-full">

      <div className="sticky space-y-6">

        {/* RELATED POSTS */}
        <section className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">

          <div className="mb-5">
            <h3 className="text-lg font-semibold text-stone-900">
              Related Articles
            </h3>

            <p className="mt-1 text-sm text-stone-500">
              More Nairobi real estate insights
            </p>
          </div>

          <div className="space-y-4">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex gap-3 rounded-2xl hover:bg-stone-50 transition p-2"
              >

                {/* Smaller responsive image */}
                <div className="relative flex-shrink-0 overflow-hidden rounded-xl">

                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={90}
                    height={90}
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105

                      w-20 h-20
                      sm:w-24 sm:h-24
                    "
                  />
                </div>

                {/* Content */}
                <div className="min-w-0">

                  <h4
                    className="
                      text-sm
                      sm:text-[15px]
                      font-semibold
                      text-stone-900
                      leading-snug
                      line-clamp-2
                    "
                  >
                    {post.title}
                  </h4>

                  <p
                    className="
                      mt-1
                      text-xs
                      sm:text-sm
                      text-stone-500
                      line-clamp-2
                    "
                  >
                    {post.excerpt}
                  </p>

                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* POPULAR ARTICLES */}
        <section className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">

          <h3 className="text-lg font-semibold text-stone-900">
            Popular Articles
          </h3>

          <div className="mt-4 space-y-3">

            {popularPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex items-start gap-3 group"
              >

                <span
                  className="
                    text-xs
                    font-semibold
                    text-amber-700
                    mt-1
                  "
                >
                  0{index + 1}
                </span>

                <p
                  className="
                    text-sm
                    text-stone-700
                    leading-relaxed
                    group-hover:text-amber-700
                    transition
                  "
                >
                  {post.title}
                </p>

              </Link>
            ))}

          </div>
        </section>

        {/* NEWSLETTER */}
        <section
          className="
            rounded-3xl
            bg-stone-900
            p-6
            text-white
            shadow-lg
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-stone-400
            "
          >
            Weekly Insights
          </p>

          <h3 className="mt-3 text-2xl font-semibold leading-snug">
            Get Nairobi property trends before everyone else
          </h3>

          <p className="mt-3 text-sm text-stone-300 leading-relaxed">
            Market reports, investment opportunities, and rental yield analysis.
          </p>

          <form className="mt-5 space-y-3">

            <input
              type="email"
              placeholder="Enter your email"
              className="
                w-full
                rounded-xl
                border
                border-stone-700
                bg-stone-800
                px-4
                py-3
                text-sm
                outline-none
                focus:border-amber-600
              "
            />

            <button
              className="
                w-full
                rounded-xl
                bg-amber-700
                px-4
                py-3
                text-sm
                font-medium
                hover:bg-amber-800
                transition
              "
            >
              Subscribe
            </button>

          </form>

        </section>

        {/* CTA */}
        <section
          className="
            rounded-3xl
            border
            border-amber-200
            bg-amber-50
            p-6
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-[0.18em]
              text-amber-700
            "
          >
            Free Consultation
          </p>

          <h3 className="mt-3 text-xl font-semibold text-stone-900">
            Looking to invest in Nairobi real estate?
          </h3>

          <p className="mt-3 text-sm text-stone-600 leading-relaxed">
            Get a property investment strategy tailored to your budget and goals.
          </p>

          <div className="mt-5 space-y-3">

            <Link
              href="/consultation"
              className="
                block
                w-full
                rounded-xl
                bg-stone-900
                px-4
                py-3
                text-center
                text-sm
                font-medium
                text-white
                hover:bg-stone-800
                transition
              "
            >
              Book Consultation
            </Link>

            <Link
              href="/guides/nairobi-investment-guide-2026"
              className="
                block
                w-full
                rounded-xl
                border
                border-stone-300
                px-4
                py-3
                text-center
                text-sm
                font-medium
                text-stone-700
                hover:bg-white
                transition
              "
            >
              Download Investment Guide
            </Link>

          </div>

        </section>

      </div>

    </aside>
  );
}