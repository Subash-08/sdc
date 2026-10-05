import Image from 'next/image';
import PortfolioContainer from '@/components/works/PortfolioContainer';
import Reveal from '@/components/home/Reveal';
import ImageReveal from '@/components/home/ImageReveal';
import { generateSEO } from '@/lib/seo';
import dbConnect from '@/lib/dbConnect';
import Category from '@/models/Category';

export const metadata = generateSEO({ title: 'Construction Projects', description: 'Explore selected residential, commercial and industrial projects from Shree Dhurga Constructions.', keywords: ['construction projects', 'Hosur construction', 'commercial buildings', 'industrial construction'] });
export const revalidate = 3600;

async function getCategories() {
  try {
    await dbConnect();
    return JSON.parse(JSON.stringify(await Category.find().sort({ name: 1 }).lean()));
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export default async function WorksPage() {
  const categories = await getCategories();
  return (
    <main className="bg-paper">
      <section className="page-hero bg-ink text-white">
        <div className="site-shell grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <Reveal><p className="eyebrow text-clay-300">Selected work · Hosur</p><h1 className="page-title mt-6">Proof, built<br />at full scale.</h1></Reveal>
          <Reveal delay={.1}><p className="body-large max-w-xl text-stone-300">A record of residential, commercial and industrial projects shaped by their site, purpose and the people who use them.</p></Reveal>
        </div>
        <div className="site-shell mt-14 lg:mt-20"><ImageReveal className="relative aspect-[16/6] min-h-[280px]"><Image src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=85" alt="Contemporary construction project" fill priority sizes="100vw" className="object-cover" /></ImageReveal></div>
      </section>
      <section className="border-b border-ink/20 bg-clay-200">
        <div className="site-shell grid divide-y divide-ink/20 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            ['01', 'Places to live', 'Homes, villas and residential environments shaped around climate, privacy and daily life.'],
            ['02', 'Places to work', 'Commercial and industrial structures planned for clear movement, durable use and future change.'],
            ['03', 'Specialist works', 'Renovation, roofing and infrastructure assignments resolved through practical site intelligence.'],
          ].map(([number, title, copy]) => <Reveal key={number} className="project-archive-key"><span>{number}</span><h2>{title}</h2><p>{copy}</p></Reveal>)}
        </div>
      </section>
      <section className="section"><div className="site-shell"><div className="mb-12 flex items-end justify-between border-b border-ink/20 pb-5"><p className="eyebrow text-accent">Project index</p><p className="hidden text-sm text-stone-500 sm:block">Browse by discipline</p></div><PortfolioContainer categories={categories} /></div></section>
    </main>
  );
}
