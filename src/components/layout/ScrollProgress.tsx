'use client';

import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react';
import { usePathname } from 'next/navigation';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();
  const pathname = usePathname();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: .2 });
  if (reduced || pathname?.startsWith('/admin')) return null;
  return <motion.div aria-hidden="true" className="fixed inset-x-0 top-0 z-[80] h-[2px] origin-left bg-accent" style={{ scaleX }} />;
}
