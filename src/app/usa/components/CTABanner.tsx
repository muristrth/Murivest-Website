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
    <section className="bg-[#2C2C2C] border-t border-[#8B7355]/20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 lg:py-20">
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl text-[#F8F7F4] leading-[1.1]">
              {title}
            </h2>
            {description && (
              <p className="mt-3 text-[14px] leading-[1.8] text-[#F8F7F4]/65 font-light">
                {description}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row shrink-0">
            <Link
              href={primaryHref}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F8F7F4] text-[#2C2C2C] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#8B7355] hover:text-[#F8F7F4] transition-colors duration-500"
            >
              {primaryLabel}
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#F8F7F4]/25 text-[#F8F7F4]/85 text-[11px] tracking-[0.2em] uppercase font-medium hover:border-[#8B7355] hover:text-[#F8F7F4] transition-all duration-500"
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
