import { IProject } from '@/models/Project';
import Image from 'next/image';
import Reveal from '@/components/home/Reveal';

export default function CaseStudyHero({ project }: { project: IProject }) {
  const heroImage = project.heroImageOverride?.url ? project.heroImageOverride : project.coverImage;
  const category = project.displayCategoryOverride || (typeof project.categoryId === 'object' ? (project.categoryId as any)?.name : 'Construction');
  return <section className="case-hero">
    <Image src={heroImage.url} alt={heroImage.alt || project.title} fill priority sizes="100vw" className="object-cover" />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,18,16,.25),rgba(17,18,16,.92))]" />
    <div className="site-shell relative flex min-h-[88vh] flex-col justify-end pb-10 pt-36 text-white">
      <Reveal><div className="flex items-center gap-3"><span className="eyebrow text-clay-300">{category}</span>{project.projectYear && <><i className="h-px w-10 bg-white/40" /><span className="eyebrow text-stone-300">{project.projectYear}</span></>}</div><h1 className="case-hero-title mt-6">{project.title}</h1><p className="body-large mt-7 max-w-2xl text-stone-200">{project.shortSummary}</p></Reveal>
      <Reveal delay={.12} className="mt-12 grid grid-cols-2 border-t border-white/25 pt-5 md:grid-cols-4">
        {[['Project for', project.clientName], ['Location', project.projectLocation], ['Programme', project.projectDuration], ['Type', typeof project.categoryId === 'object' ? (project.categoryId as any)?.name : 'Construction']].map(([label, value]) => value && <div key={label} className="case-meta"><span>{label}</span><strong>{value}</strong></div>)}
      </Reveal>
    </div>
  </section>;
}
