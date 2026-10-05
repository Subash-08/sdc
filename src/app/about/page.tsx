import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/home/Reveal';
import ImageReveal from '@/components/home/ImageReveal';
import { generateSEO } from '@/lib/seo';
import { siteConfig } from '@/config/site';

export const metadata = generateSEO({ title: 'About Shree Dhurga Constructions', description: 'Learn how Shree Dhurga Constructions approaches residential, commercial, industrial and specialist building work in Hosur.', url: '/about' });

const principles = [
  ['01', 'Read before responding', 'We begin with the site, the purpose of the building and the practical conditions that shape the work.'],
  ['02', 'Keep decisions connected', 'Structure, materials, services and finishing are considered as parts of one construction sequence.'],
  ['03', 'Make progress legible', 'Clear stages and review points help everyone understand what is resolved and what comes next.'],
  ['04', 'Finish for everyday use', 'The final measure is how confidently the completed place supports the people and work inside it.'],
];

const fields = [
  ['Residential', 'Homes and living environments planned around privacy, climate and daily routines.'],
  ['Commercial', 'Workplaces and customer-facing spaces shaped around movement, identity and adaptable use.'],
  ['Industrial', 'Facilities, warehouses and roofing systems coordinated for durable operational performance.'],
  ['Renewal', 'Renovation, interiors, waterproofing and specialist work that extends the useful life of a place.'],
];

export default function AboutPage() {
  return <main className="bg-paper">
    <section className="page-hero bg-ink text-white"><div className="site-shell grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end"><Reveal><p className="eyebrow text-clay-300">About SDC · Hosur</p><h1 className="page-title mt-6">Built around<br />the realities<br />of the site.</h1></Reveal><Reveal delay={.08}><p className="body-large max-w-xl text-stone-300">Shree Dhurga Constructions brings planning and execution together across residential, commercial, industrial and specialist construction.</p></Reveal></div><div className="site-shell mt-12"><ImageReveal className="relative aspect-[16/7] min-h-[300px] overflow-hidden"><Image src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2200&q=85" alt="Construction team working on site" fill priority sizes="100vw" className="object-cover" /></ImageReveal></div></section>

    <section className="section"><div className="site-shell grid gap-14 lg:grid-cols-[.65fr_1.35fr]"><Reveal><p className="eyebrow text-accent">Our point of view</p><p className="mt-7 max-w-sm leading-7 text-stone-600">A building is not a collection of isolated tasks. It is a connected sequence of decisions, people, materials and site conditions.</p></Reveal><Reveal delay={.08}><h2 className="display-heading">Good construction begins with clarity—and earns trust through the work.</h2><div className="mt-10 grid gap-7 border-t border-ink/20 pt-7 md:grid-cols-2"><p className="body-large">We approach each brief by understanding what the place needs to do, how the site behaves and what a practical delivery path looks like.</p><p className="leading-7 text-stone-600">That thinking continues through coordination, execution, finishing and handover, keeping the purpose of the project visible from beginning to end.</p></div></Reveal></div></section>

    <section className="bg-stone-100"><div className="site-shell grid lg:grid-cols-2"><ImageReveal className="relative min-h-[460px] lg:min-h-[760px]"><Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85" alt="Building structure during construction" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" /></ImageReveal><div className="flex flex-col justify-center py-14 lg:py-20 lg:pl-16"><Reveal><p className="eyebrow text-accent">How we think</p><h2 className="display-heading mt-5">One build.<br />Four commitments.</h2></Reveal><div className="mt-10 border-t border-ink/20">{principles.map(([number, title, text], index) => <Reveal key={title} delay={index * .04}><article className="about-principle"><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article></Reveal>)}</div></div></div></section>

    <section className="section bg-ink text-white"><div className="site-shell"><Reveal className="grid gap-8 border-b border-white/20 pb-10 lg:grid-cols-2 lg:items-end"><div><p className="eyebrow text-clay-300">Where we contribute</p><h2 className="display-heading mt-5">Different buildings.<br />One practical mindset.</h2></div><p className="max-w-lg leading-7 text-stone-400 lg:justify-self-end">Our services meet different project conditions while sharing the same focus on clear planning, coordinated execution and lasting use.</p></Reveal><div className="grid md:grid-cols-2">{fields.map(([title, text], index) => <Reveal key={title} delay={index * .04}><article className="about-field"><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div><Link href="/services" className="text-link mt-10 text-white">Explore all services <ArrowRight size={16} /></Link></div></section>

    <section className="section"><div className="site-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><Reveal><p className="eyebrow text-accent">Based in Hosur</p><h2 className="mt-5 font-display text-4xl font-semibold tracking-[-.05em] sm:text-6xl">Close to the work.<br />Available for the conversation.</h2></Reveal><Reveal delay={.08}><div className="border-t border-ink/20 pt-7"><p className="body-large max-w-2xl">Visit our team, call with an early brief, or share the site information you already have. A useful project conversation can begin before every answer is known.</p><div className="mt-9 grid gap-5 sm:grid-cols-3"><div><p className="eyebrow text-stone-400">Visit</p><p className="mt-3 text-sm leading-6">{siteConfig.address}</p></div><div><p className="eyebrow text-stone-400">Call</p><a className="mt-3 inline-block font-semibold" href={siteConfig.phoneHref}>{siteConfig.phone}</a></div><div><p className="eyebrow text-stone-400">Write</p><a className="mt-3 inline-block break-all font-semibold" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div></div><a href={siteConfig.phoneHref} className="button button--accent mt-10">Start a conversation <ArrowUpRight size={16} /></a></div></Reveal></div></section>
  </main>;
}
