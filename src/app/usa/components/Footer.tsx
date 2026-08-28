import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { SITE, PROPERTY_TYPES } from "../lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="font-serif text-lg font-semibold text-white">
              {SITE.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-400">
              {SITE.description}
            </p>
            <p className="mt-4 text-xs text-ink-500">
              © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-400">
              Platform
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/usa" className="hover:text-white transition-colors">
                  USA Platform
                </Link>
              </li>
              <li>
                <Link
                  href="/usa/investment-sales"
                  className="hover:text-white transition-colors"
                >
                  Investment Sales
                </Link>
              </li>
              <li>
                <Link
                  href="/usa/commercial-real-estate"
                  className="hover:text-white transition-colors"
                >
                  Commercial Real Estate
                </Link>
              </li>
              <li>
                <Link
                  href="/usa/insights"
                  className="hover:text-white transition-colors"
                >
                  Market Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/usa/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-400">
              Property Types
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {PROPERTY_TYPES.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/usa/commercial-real-estate/${p.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-400">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold-400" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
                <span>Representing clients across U.S. markets</span>
              </li>
            </ul>
            <Link
              href="/usa/contact"
              className="mt-5 inline-block rounded-md border border-ink-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              Start a Conversation
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-ink-800 pt-6">
          <p className="text-xs leading-relaxed text-ink-500">
            Murivest Group acts as an intermediary and advisor in commercial real
            estate transactions. This website is for informational purposes only
            and does not constitute an offer to sell or a solicitation of an
            offer to buy any security or property. All offerings are made on a
            confidential basis to qualified investors pursuant to applicable
            regulatory requirements. Past performance is not indicative of
            future results.
          </p>
        </div>
      </div>
    </footer>
  );
}
