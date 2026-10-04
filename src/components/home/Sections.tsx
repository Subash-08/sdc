import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import Reveal from './Reveal';
import { siteConfig } from '@/config/site';

const services = [
  { number: '01', name: 'Building Construction', text: 'End-to-end delivery for residential and large-scale construction projects.', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80' },
  { number: '02', name: 'Commercial Building', text: 'Functional, modern environments planned around the way your business operates.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80' },
  { number: '03', name: 'Industrial Building', text: 'Durable warehouses, manufacturing facilities and industrial structures built for performance.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80' },
  { number: '04', name: 'Renovation & Interiors', text: 'Considered renovation, restoration and interior work that gives existing spaces new purpose.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80' },
  { number: '05', name: 'Specialist Works', text: 'Industrial roofing, cement roads, waterproofing and public-infrastructure construction.', image: 'https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=900&q=80' },
];
const principles = [
  ['Quality in every detail', 'Materials, workmanship and finishes are approached with care from the outset.'],
  ['Clear project coordination', 'A deliberate process keeps planning, execution and client communication connected.'],
  ['Built for lasting use', 'We consider how each space will perform long after handover, not only how it looks today.'],
  ['Solutions shaped to the brief', 'Residential, commercial and industrial requirements each receive a purpose-led response.'],
];
const process = [
  ['01', 'Discover', 'Understand the site, your priorities and the way the finished space needs to work.'],
  ['02', 'Plan & design', 'Develop the direction, scope and visual understanding needed before construction begins.'],
  ['03', 'Build', 'Coordinate people, materials and progress with close attention to execution quality.'],
  ['04', 'Finish & hand over', 'Complete the details, inspect the work and prepare the project for use.'],
];

export function AboutIntro() {
  return <section id="about" className="section bg-stone-100"><div className="site-shell grid gap-14 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
    <Reveal><p className="eyebrow text-accent">About Shree Dhurga</p><div className="mt-12 grid grid-cols-3 gap-3 border-y border-ink/15 py-6">
      <div><strong className="stat">25+</strong><span className="stat-label">Years experience</span></div><div><strong className="stat">500+</strong><span className="stat-label">Projects done</span></div><div><strong className="stat">100+</strong><span className="stat-label">Happy clients</span></div>
    </div></Reveal>
    <Reveal delay={0.08}><h2 className="display-heading">A dedicated partner in building excellence.</h2><div className="mt-9 grid gap-7 border-t border-ink/15 pt-7 md:grid-cols-2">
      <p className="body-large">We translate ideas into considered, enduring places—bringing experience and practical guidance to each stage of the journey.</p>
      <div><p className="text-stone-600">Our work spans homes, commercial spaces, industrial facilities, renovations and specialist construction in and around Hosur.</p><a href={siteConfig.phoneHref} className="text-link mt-7">Talk to our team <ArrowRight size={16} /></a></div>
    </div></Reveal>
  </div></section>;
}

export function Services() {
  return <section id="services" className="section bg-paper"><div className="site-shell">
    <Reveal className="grid gap-7 border-b border-ink/20 pb-10 lg:grid-cols-2 lg:items-end"><div><p className="eyebrow text-accent">Core capabilities</p><h2 className="display-heading mt-5">One team.<br />A complete build.</h2></div><p className="body-large max-w-xl lg:justify-self-end">A broad construction capability, organized around the real demands of each site and every client brief.</p></Reveal>
    <div>{services.map((service, index) => <Reveal key={service.name} delay={index * 0.035}><article className="service-row group"><span className="service-number">{service.number}</span><div><h3>{service.name}</h3><p>{service.text}</p></div><div className="service-image"><Image src={service.image} alt="" fill sizes="180px" className="object-cover transition-transform duration-700 group-hover:scale-105" /></div><ArrowUpRight className="service-arrow" aria-hidden="true" /></article></Reveal>)}</div>
  </div></section>;
}

export function WhyChooseUs() {
  return <section className="section bg-ink text-white"><div className="site-shell grid gap-16 lg:grid-cols-[.85fr_1.15fr]">
    <Reveal className="lg:sticky lg:top-32 lg:self-start"><p className="eyebrow text-clay-300">How we work</p><h2 className="display-heading mt-5">Trust is built into the process.</h2><p className="mt-7 max-w-md leading-7 text-stone-400">Strong outcomes begin with clear thinking and continue through every decision on site.</p></Reveal>
    <div className="border-t border-white/20">{principles.map(([title, text], index) => <Reveal key={title} delay={index * .05}><div className="principle-row"><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></div></Reveal>)}</div>
  </div></section>;
}

export function Process() {
  return <section id="process" className="section bg-stone-100"><div className="site-shell"><Reveal className="max-w-3xl"><p className="eyebrow text-accent">From concept to creation</p><h2 className="display-heading mt-5">A clear path from first conversation to final handover.</h2></Reveal><div className="mt-14 grid border-l border-t border-ink/20 sm:grid-cols-2 lg:grid-cols-4">{process.map(([number, title, text], index) => <Reveal key={title} delay={index * .06} className="h-full"><article className="process-step"><span>{number}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></div></section>;
}

export function BrandStatement() {
  return <section className="relative min-h-[620px] overflow-hidden text-white"><Image src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2400&q=85" alt="Geometric concrete architecture" fill sizes="100vw" className="object-cover" /><div className="absolute inset-0 bg-black/55" /><div className="site-shell relative flex min-h-[620px] items-end py-16 sm:py-20"><Reveal className="max-w-5xl"><p className="eyebrow mb-5 text-stone-200">Our construction philosophy</p><h2 className="brand-statement">Built for today.<br />Made to endure.</h2></Reveal></div></section>;
}

export function QualityCommitment() {
  return <section className="section bg-paper"><div className="site-shell grid gap-12 lg:grid-cols-2 lg:items-center"><Reveal><p className="eyebrow text-accent">Our commitment</p><h2 className="display-heading mt-5">Good construction is measured in what lasts.</h2></Reveal><Reveal delay={.08}><p className="body-large mb-8">We focus on the fundamentals that give every project confidence—from thoughtful planning to quality materials and responsible execution.</p><div className="grid gap-4 sm:grid-cols-2">{['Purpose-led planning', 'Quality craftsmanship', 'Practical solutions', 'Attentive handover'].map((item) => <div key={item} className="flex items-center gap-3 border-t border-ink/20 pt-4"><Check size={17} className="text-accent" />{item}</div>)}</div></Reveal></div></section>;
}

export function FinalCTA() {
  return <section id="contact" className="bg-accent text-white"><div className="site-shell py-16 sm:py-24"><Reveal className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow text-white/70">Start a conversation</p><h2 className="cta-heading mt-5">Planning your next<br />construction project?</h2></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><a href={siteConfig.phoneHref} className="button bg-white text-ink">Call {siteConfig.phone} <ArrowUpRight size={17} /></a><a href={`mailto:${siteConfig.email}`} className="button border border-white/40 text-white">Email our team</a></div></Reveal></div></section>;
}
