import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import CTABanner from "../components/CTABanner";
import { supabase } from "../lib/supabase";
import type { InsightArticle } from "../lib/types";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Market Insights — USA Commercial Real Estate Intelligence",
  description:
    "Murivest Research publishes proprietary analysis of U.S. commercial real estate market conditions, cap rate trends, sector briefs, and macro factors affecting institutional CRE investors.",
  alternates: { canonical: `https://${SITE.domain}/usa/insights` },
};

const CATEGORY_LABELS: Record<string, string> = {
  market_report: "Market Report",
  cap_rate: "Cap Rate Analysis",
  sector_brief: "Sector Brief",
  macro: "Macro Outlook",
  transaction_news: "Transaction News",
};

export default async function InsightsPage() {
  const { data } = await supabase
    .from("usa_insights")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false })
    .limit(50);

  const articles = (data || []) as InsightArticle[];

  const categories = articles.length
    ? Array.from(new Set(articles.map((a) => a.category)))
    : [];

  return (
    <>
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">Market Intelligence</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Murivest Research
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-200">
              Proprietary analysis of U.S. commercial real estate market
              conditions, cap rate trends, sector dynamics, and macroeconomic
              factors affecting institutional investors.
            </p>
          </div>
        </div>
      </section>

      <Section className="py-20">
        {articles.length === 0 ? (
          <div className="rounded-2xl border border-ink-100 bg-ink-50 py-20 text-center">
            <FileText size={48} className="mx-auto text-ink-300" />
            <h2 className="mt-4 font-serif text-2xl font-semibold text-ink-900">
              Research publications coming soon
            </h2>
            <p className="mx-auto mt-2 max-w-md text-ink-500">
              Our research team is preparing the first installment of Murivest
              market intelligence. Please check back or subscribe via our
              contact form to be notified when new analysis is published.
            </p>
            <Link
              href="/usa/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-navy-700 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-600"
            >
              Get in touch
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <>
            {categories.length > 0 && (
              <div className="mb-10 flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full border border-ink-200 bg-white px-4 py-1.5 text-sm font-medium text-ink-600"
                  >
                    {CATEGORY_LABELS[cat] || cat}
                  </span>
                ))}
              </div>
            )}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/usa/insights/${article.slug}`}
                  className="group flex flex-col rounded-xl border border-ink-100 bg-white p-6 transition-all hover:border-navy-300 hover:shadow-lg hover:shadow-ink-900/5"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span className="rounded-full bg-navy-50 px-3 py-1 font-medium uppercase tracking-wide text-navy-600">
                      {CATEGORY_LABELS[article.category] || article.category}
                    </span>
                    {article.sector && (
                      <span className="text-ink-400">{article.sector}</span>
                    )}
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold leading-snug text-ink-900 group-hover:text-navy-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                    {article.summary}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-ink-400">
                    <span>
                      {new Date(article.published_at).toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </span>
                    <span>{article.author}</span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </Section>

      <CTABanner
        title="Access Murivest research and market intelligence"
        description="Our research is published for clients and the broader market. Contact us to discuss specific sectors, markets, or investment themes."
        primaryLabel="Contact Our Research Team"
      />
    </>
  );
}
