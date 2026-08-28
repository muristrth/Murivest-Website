import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  title,
  description,
  primaryLabel = "Request a Mandate",
  primaryHref = "/usa/contact",
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section className="bg-navy-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mt-3 text-lg leading-relaxed text-navy-200">
                {description}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryHref}
              className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-ink-950 transition-all hover:bg-gold-300"
            >
              {primaryLabel}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="flex items-center justify-center gap-2 rounded-lg border border-navy-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-navy-400 hover:bg-navy-800"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
