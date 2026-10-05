'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import ResponsiveImage from '@/components/shared/ResponsiveImage';
import { IProject } from '@/models/Project';

export default function WorkCard({ project, index = 0 }: { project: IProject; index?: number }) {
  const reduce = useReducedMotion();
  const category = project.displayCategoryOverride || (typeof project.categoryId === 'object' ? (project.categoryId as any)?.name : 'Construction');
  const portrait = index % 4 === 1 || index % 4 === 2;

  return <motion.article initial={reduce ? false : { opacity: 0, y: 50 }} whileInView={reduce ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .14 }} transition={{ duration: .8, delay: (index % 2) * .06, ease: [0.22, 1, 0.36, 1] }} className="work-card group">
    <Link href={`/works/${project.slug}`} className="block">
      <div className={`work-card-media ${portrait ? 'work-card-media--portrait' : ''}`}><ResponsiveImage src={project.thumbnail?.url} alt={project.thumbnail?.alt || project.title} aspectRatio="4:5" fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]" sizes="(max-width: 768px) 100vw, 60vw" /><span className="work-card-index">{String(index + 1).padStart(2, '0')}</span><span className="work-card-open"><ArrowUpRight size={20} /></span></div>
      <div className="mt-5 border-t border-ink/20 pt-4"><div className="flex items-center justify-between gap-5"><p className="project-meta">{category}</p><p className="project-location">{[project.projectLocation, project.projectYear].filter(Boolean).join(' · ')}</p></div><h2 className="mt-3 font-display text-2xl font-semibold tracking-[-.045em] sm:text-4xl">{project.title}</h2>{project.shortSummary && <p className="mt-4 max-w-xl text-sm leading-6 text-stone-500">{project.shortSummary}</p>}</div>
    </Link>
  </motion.article>;
}
