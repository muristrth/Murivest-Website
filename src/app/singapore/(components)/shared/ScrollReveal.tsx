'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { ANIMATION } from '../data/singapore-market-data';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
}: ScrollRevealProps) {
  const directionMap = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration: ANIMATION.duration,
        ease: ANIMATION.easing,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
