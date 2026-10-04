'use client';

import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: .2 });
  if (reduced) return null;
  return <motion.div aria-hidden="true" className="fixed inset-x-0 top-0 z-[80] h-[2px] origin-left bg-accent" style={{ scaleX }} />;
}
