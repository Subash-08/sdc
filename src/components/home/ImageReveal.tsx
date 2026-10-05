'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

export default function ImageReveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: .45, scale: 1.025 }}
      whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ opacity: { duration: .7, ease: [0.22, 1, 0.36, 1] }, scale: { duration: 1.05, ease: [0.22, 1, 0.36, 1] } }}
    >
      {children}
    </motion.div>
  );
}
