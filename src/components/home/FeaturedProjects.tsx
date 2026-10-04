import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { IProject } from '@/models/Project';
import Reveal from './Reveal';

export default function FeaturedProjects({ projects }: { projects: IProject[] }) {
  return (
    <section className="section bg-paper"><div className="site-shell">
      <Reveal className="flex items-end justify-between gap-6 border-b border-ink/20 pb-9"><div><p className="eyebrow text-accent">Selected work</p><h2 className="display-heading mt-5">Projects built to perform.</h2></div><Link href="/works" className="text-link hidden sm:flex">View all projects <ArrowRight size={16} /></Link></Reveal>
      {projects.length > 0 ? <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">{projects.map((project, index) => (
        <Reveal key={String(project._id)} delay={(index % 2) * .08} className={index % 2 ? 'md:mt-24' : ''}><Link href={`/works/${project.slug}`} className="project-card group">
          <div className="project-media"><Image src={project.thumbnail.url} alt={project.thumbnail.alt || project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" /><span className="project-open"><ArrowUpRight /></span></div>
          <div className="mt-5 flex items-start justify-between gap-5 border-t border-ink/20 pt-4"><div><p className="project-meta">{typeof project.categoryId === 'object' ? (project.categoryId as unknown as { name?: string }).name || 'Project' : 'Project'}</p><h3>{project.title}</h3></div>{project.projectLocation && <span className="project-location">{project.projectLocation}</span>}</div>
        </Link></Reveal>
      ))}</div> : <Reveal className="project-empty mt-12"><p className="eyebrow text-accent">Portfolio in progress</p><h3>Our latest work will appear here as projects are published through the existing Project CMS.</h3><Link href="/works" className="text-link">Explore projects <ArrowRight size={16} /></Link></Reveal>}
      <Link href="/works" className="text-link mt-9 sm:hidden">View all projects <ArrowRight size={16} /></Link>
    </div></section>
  );
}
