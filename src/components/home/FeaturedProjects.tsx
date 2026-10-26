import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { IProject } from '@/models/Project';
import Reveal from './Reveal';

export default function FeaturedProjects({ projects }: { projects: IProject[] }) {
  return (
    <section className="home2-projects" id="project-evidence">
      <div className="site-shell">
        <Reveal className="home2-projects-head">
          <div><p className="home2-label">Project evidence</p><h2>See the work before reading the claims.</h2></div>
          <div><p>Published work across residential, industrial and public construction, shown with real project photography.</p><Link href="/works" className="home2-text-link">View all projects <ArrowRight size={17} /></Link></div>
        </Reveal>
        {projects.length > 0 ? (
          <div className="home2-project-grid">
            {projects.map((project, index) => {
              const category = typeof project.categoryId === 'object' ? (project.categoryId as unknown as { name?: string }).name || 'Construction' : 'Construction';
              return (
                <Reveal key={String(project._id)} delay={(index % 2) * .06} className={index === 0 ? 'home2-project-featured' : ''}>
                  <Link href={`/works/${project.slug}`} className="home2-project-card group">
                    <div className="home2-project-image"><Image src={project.thumbnail.url} alt={project.thumbnail.alt || project.title} fill sizes={index === 0 ? '(max-width: 900px) 100vw, 66vw' : '(max-width: 900px) 100vw, 33vw'} className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" /><span>{String(index + 1).padStart(2, '0')}</span><i><ArrowUpRight size={20} /></i></div>
                    <div className="home2-project-meta">
                      <p>{category}{project.projectLocation ? ` · ${project.projectLocation}` : ''}</p>
                      <div><h3>{project.title}</h3><span>{project.shortSummary}</span></div>
                      <strong>View case study <ArrowRight size={15} /></strong>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        ) : <Reveal className="home2-empty">Published projects will appear here from the existing Project CMS.</Reveal>}
      </div>
    </section>
  );
}
