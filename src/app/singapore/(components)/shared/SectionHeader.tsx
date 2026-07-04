'use client';

import { COLORS } from '../data/singapore-market-data';

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  kicker,
  title,
  subtitle,
  align = 'left',
  dark = false,
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const textColor = dark ? 'text-white' : 'text-[#2C2C2C]';
  const subtitleColor = dark ? 'text-white/70' : 'text-[#5A5A5A]';
  const kickerColor = dark ? 'text-[#B8956B]' : 'text-[#B8956B]';

  return (
    <div className={`${alignClass} ${className}`}>
      {kicker && (
        <p className={`text-[10px] tracking-[0.3em] uppercase ${kickerColor} font-medium mb-4`}>
          {kicker}
        </p>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl ${textColor} leading-[1.1] mb-4`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg ${subtitleColor} max-w-2xl ${align === 'center' ? 'mx-auto' : ''} leading-relaxed`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 w-12 h-px bg-[#B8956B] ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}
