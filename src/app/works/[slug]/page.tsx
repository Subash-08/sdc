import { getProjectBySlug, getRelatedProjects } from '@/lib/data/project.queries';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import CaseStudyGallery from '@/components/case-study/CaseStudyGallery';
import CaseStudyProcess from '@/components/case-study/CaseStudyProcess';
import CaseStudyMetrics from '@/components/case-study/CaseStudyMetrics';
import CaseStudyTechStack from '@/components/case-study/CaseStudyTechStack';
import CaseStudyTestimonial from '@/components/case-study/CaseStudyTestimonial';
import WorkCard from '@/components/works/WorkCard';
import ProjectStructuredData from '@/components/seo/ProjectStructuredData';
import CaseStudyStructuredData from '@/components/seo/CaseStudyStructuredData';
import Reveal from '@/components/home/Reveal';

interface PageProps { params: Promise<{ slug: string }>; }
export const revalidate = 60;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project: any = await getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: project.seoTitle || `${project.title} | Construction Project`,
    description: project.seoDescription || project.shortSummary,
    keywords: project.tags,
    openGraph: { title: project.seoTitle || project.title, description: project.seoDescription || project.shortSummary, url: `/works/${project.slug}`, siteName: siteConfig.name, images: [{ url: project.ogImage?.url || project.coverImage?.url || '/default-og.jpg', width: 1200, height: 630, alt: project.title }], locale: 'en_IN', type: 'article' },
    alternates: { canonical: `/works/${project.slug}` },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const project: any = await getProjectBySlug((await params).slug);
  if (!project) notFound();
  const categoryId = typeof project.categoryId === 'string' ? project.categoryId : project.categoryId?._id;
  const relatedProjects = await getRelatedProjects(String(project._id), categoryId ? String(categoryId) : undefined);
  const hasResults = Boolean(project.metrics?.length || project.testimonial?.quote);

  return <>
    <ProjectStructuredData project={project} />
    {project.problemStatement && <CaseStudyStructuredData project={project} challenge={project.problemStatement} solution={project.solution?.join('. ')} results={project.metrics} />}
    <article className="bg-paper">
      <CaseStudyHero project={project} />

      <section className="section">
        <div className="site-shell grid gap-16 lg:grid-cols-[1.2fr_.8fr]">
          <Reveal><p className="eyebrow text-accent">Project reading</p><h2 className="case-lead mt-6">{project.overview || project.shortSummary}</h2><p className="mt-9 max-w-3xl text-lg leading-8 text-stone-600">{project.description}</p></Reveal>
          <Reveal delay={.08} className="lg:border-l lg:border-ink/20 lg:pl-12"><p className="eyebrow text-accent">Scope & material register</p><div className="mt-7"><CaseStudyTechStack techStack={project.techStack} /></div>{project.targetAudience && <div className="mt-10 border-t border-ink/20 pt-6"><p className="eyebrow text-stone-400">Building use</p><p className="mt-3 leading-7 text-stone-600">{project.targetAudience}</p></div>}</Reveal>
        </div>
      </section>

      {project.problemStatement && <section className="case-challenge"><div className="site-shell grid gap-12 lg:grid-cols-[.55fr_1.45fr]"><Reveal><p className="eyebrow text-clay-300">The construction question</p></Reveal><Reveal delay={.08}><h2>{project.problemStatement}</h2>{project.objectives && <p>{project.objectives}</p>}</Reveal></div></section>}

      {project.galleryImages?.length > 0 && <section className="section bg-stone-100"><div className="site-shell"><Reveal className="mb-14 grid gap-6 md:grid-cols-2 md:items-end"><div><p className="eyebrow text-accent">Project plates</p><h2 className="display-heading mt-5">Material, space<br />and assembly.</h2></div><p className="max-w-lg text-stone-600 md:justify-self-end">A visual record of the decisions, surfaces and spatial relationships that define the work.</p></Reveal><CaseStudyGallery images={project.galleryImages} /></div></section>}

      {project.processSteps?.length > 0 && <section className="section"><div className="site-shell"><Reveal className="mb-16 max-w-4xl"><p className="eyebrow text-accent">Construction sequence</p><h2 className="display-heading mt-5">From first reading<br />to final handover.</h2></Reveal><CaseStudyProcess steps={project.processSteps} /></div></section>}

      {project.solution?.length > 0 && <section className="section bg-stone-100"><div className="site-shell grid gap-12 lg:grid-cols-[.65fr_1.35fr]"><Reveal><p className="eyebrow text-accent">Decisions that shaped the work</p><h2 className="mt-5 font-display text-4xl font-semibold tracking-[-.05em]">A response built from the brief.</h2></Reveal><div className="case-decisions">{project.solution.map((item: string, index: number) => <Reveal key={index} delay={index * .05}><div><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></div></Reveal>)}</div></div></section>}

      {hasResults && <section className="section bg-ink text-white"><div className="site-shell"><Reveal><p className="eyebrow text-clay-300">Measured outcome</p><h2 className="display-heading mt-5">What the project delivered.</h2></Reveal>{project.metrics?.length > 0 && <div className="mt-12"><CaseStudyMetrics metrics={project.metrics} /></div>}{project.testimonial?.quote && <div className="mt-12"><CaseStudyTestimonial testimonial={project.testimonial} /></div>}</div></section>}

      <section className="section border-t border-ink/15"><div className="site-shell"><Reveal className="mb-12 flex items-end justify-between gap-6"><div><p className="eyebrow text-accent">Continue through the archive</p><h2 className="mt-5 font-display text-4xl font-semibold tracking-[-.05em] sm:text-6xl">Related work.</h2></div><Link href="/works" className="text-link hidden sm:flex">All projects <ArrowRight size={16} /></Link></Reveal>{relatedProjects.length > 0 ? <div className="grid gap-10 md:grid-cols-2">{relatedProjects.slice(0, 2).map((item: any, index: number) => <WorkCard key={String(item._id)} project={item} index={index} />)}</div> : <Link href="/works" className="inline-flex items-center gap-3 border-b border-ink pb-2 text-sm font-bold uppercase tracking-[.1em]">Return to project index <ArrowLeft size={16} /></Link>}</div></section>
    </article>
  </>;
}
