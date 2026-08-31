import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`px-6 md:px-12 lg:px-16 ${className}`}>
      <div className="mx-auto max-w-[1400px]">{children}</div>
    </section>
  );
}

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="w-8 h-[1px] bg-[#8B7355]" />
      <span className="text-[10px] tracking-[0.35em] uppercase text-[#8B7355] font-medium">
        {children}
      </span>
    </span>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-6 font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] text-[#2C2C2C]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[14px] leading-[1.8] text-[#5A5A5A] font-light text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
