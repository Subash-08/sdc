'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef, type ReactNode } from 'react';

export default function ParallaxMedia({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['-7%', '7%']);
  const scale = useTransform(scrollYProgress, [0, .5, 1], reduced ? [1, 1, 1] : [1.08, 1, 1.08]);

  return <motion.div ref={ref} className={`relative overflow-hidden ${className}`} initial={reduced ? false : { clipPath: 'inset(12% 0 12% 0)' }} whileInView={reduced ? undefined : { clipPath: 'inset(0% 0 0% 0)' }} viewport={{ once: true, amount: .15 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}><motion.div className="absolute inset-x-0 -top-[8%] h-[116%]" style={{ y, scale }}>{children}</motion.div></motion.div>;
}
