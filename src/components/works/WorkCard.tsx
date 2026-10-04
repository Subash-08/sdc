'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import ResponsiveImage from '@/components/shared/ResponsiveImage';
import { IProject } from '@/models/Project';

export default function WorkCard({ project, index = 0 }: { project: IProject; index?: number }) {
  const reduce = useReducedMotion();
  const category = typeof project.categoryId === 'object' ? (project.categoryId as any)?.name : 'Construction';
  return <motion.article initial={reduce ? false : { opacity: 0, y: 42 }} whileInView={reduce ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .72, delay: (index % 2) * .08, ease: [0.22, 1, 0.36, 1] }} className="work-card group">
    <Link href={`/works/${project.slug}`} className="block">
      <div className="work-card-media"><ResponsiveImage src={project.thumbnail?.url} alt={project.thumbnail?.alt || project.title} aspectRatio="4:5" fill className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.035]" sizes="(max-width: 768px) 100vw, 50vw" /><span className="work-card-open"><ArrowUpRight size={20} /></span></div>
      <div className="mt-5 flex justify-between gap-6 border-t border-ink/20 pt-4"><div><p className="project-meta">{category}{project.clientName ? ` · ${project.clientName}` : ''}</p><h2 className="mt-2 font-display text-2xl font-semibold tracking-[-.04em] sm:text-3xl">{project.title}</h2>{project.shortSummary && <p className="mt-3 max-w-xl text-sm leading-6 text-stone-500">{project.shortSummary}</p>}</div><span className="pt-1 text-xs text-stone-400">{String(index + 1).padStart(2, '0')}</span></div>
    </Link>
  </motion.article>;
}
