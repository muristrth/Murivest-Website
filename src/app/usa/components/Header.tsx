"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "../lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-950/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-ink-950"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/usa" className="flex items-center gap-3">
          <span className="font-serif text-xl font-semibold tracking-tight text-white">
            {SITE.name}
          </span>
          <span className="hidden rounded-sm border border-gold-400/40 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-gold-300 sm:inline-block">
            USA
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-200 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/usa/contact"
            className="rounded-md bg-gold-400 px-5 py-2 text-sm font-semibold text-ink-950 transition-all hover:bg-gold-300"
          >
            Request a Mandate
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-800 bg-ink-950 lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-ink-200 transition-colors hover:bg-ink-800 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/usa/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-gold-400 px-5 py-2.5 text-center text-sm font-semibold text-ink-950"
            >
              Request a Mandate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
