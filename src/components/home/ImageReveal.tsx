'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

export default function ImageReveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { clipPath: 'inset(0 0 100% 0)', scale: 1.04 }}
      whileInView={reduced ? undefined : { clipPath: 'inset(0 0 0% 0)', scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ clipPath: { duration: .95, ease: [0.22, 1, 0.36, 1] }, scale: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }}
    >
      {children}
    </motion.div>
  );
}
