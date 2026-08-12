"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface InteractiveButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "dark" | "outline-dark";
  children: ReactNode;
  className?: string;
  download?: boolean;
}

export default function InteractiveButton({
  href,
  variant = "primary",
  children,
  className = "",
  download = false,
}: InteractiveButtonProps) {
  const base =
    "inline-block font-sans text-[0.8rem] font-semibold tracking-[0.1em] uppercase px-10 py-4 transition-all duration-300 ease-out no-underline whitespace-nowrap";

  const variants: Record<string, string> = {
    primary:
      "bg-[#B8956B] text-[#1B4332] border border-[#B8956B] hover:bg-transparent hover:text-[#B8956B]",
    secondary:
      "bg-transparent text-[#FAF9F6] border border-[rgba(250,249,246,0.4)] hover:border-[#FAF9F6] hover:bg-[rgba(250,249,246,0.08)]",
    dark:
      "bg-[#1B4332] text-[#FAF9F6] border border-[#1B4332] hover:bg-transparent hover:text-[#1B4332]",
    "outline-dark":
      "bg-transparent text-[#1B4332] border border-[#1B4332] hover:bg-[#1B4332] hover:text-[#FAF9F6]",
  };

  if (download) {
    return (
      <a
        href={href}
        download
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}