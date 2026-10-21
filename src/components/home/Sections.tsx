import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import Reveal from './Reveal';
import { siteConfig } from '@/config/site';
import ParallaxMedia from './ParallaxMedia';

const services = [
  { number: '01', name: 'Building Construction', text: 'End-to-end delivery for homes, apartments, schools and larger building projects.', image: '/canva/canva-e780339d-9938-4e29-8119-eace3c532866.jpg' },
  { number: '02', name: 'Commercial & Industrial', text: 'Practical facilities planned around operations, safety and durable everyday performance.', image: '/canva/canva-9db5987c-9892-4e38-afda-aa860bea7bac.png' },
  { number: '03', name: 'Government & CSR Works', text: 'Public buildings, school improvements and infrastructure delivered with accountable coordination.', image: '/canva/canva-68e67889-063d-493d-9a8c-62707300557a.png' },
  { number: '04', name: 'Planning & Electrical', text: 'Building planning, blueprints, approvals and HT/LT electrical liaisoning support.', image: '/canva/canva-738ca25b-8343-44c4-a200-625a8b373df4.png' },
  { number: '05', name: 'Roads, Roofing & Protection', text: 'Cement roads, industrial roofing, waterproofing and specialist construction works.', image: '/canva/canva-b58bfa8c-a009-4f9c-95cf-2850e1e72078.png' },
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
      <div><strong className="stat">10+</strong><span className="stat-label">Years of practice</span></div><div><strong className="stat">2</strong><span className="stat-label">Core disciplines</span></div><div><strong className="stat">5</strong><span className="stat-label">Service regions</span></div>
    </div></Reveal>
    <Reveal delay={0.08}><h2 className="display-heading">A dedicated partner in building excellence.</h2><div className="mt-9 grid gap-7 border-t border-ink/15 pt-7 md:grid-cols-2">
      <p className="body-large">We bring construction and electrical expertise together through a consultative approach shaped around each client’s needs.</p>
      <div><p className="text-stone-600">Our work spans homes, commercial spaces, industrial facilities, public projects and specialist construction across Hosur and the wider region.</p><a href={siteConfig.phoneHref} className="text-link mt-7">Talk to our team <ArrowRight size={16} /></a></div>
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
  return <section className="relative min-h-[620px] overflow-hidden text-white"><Image src="/canva/canva-9a751362-a694-4ccc-99b1-f2eba6a43f82.png" alt="Multi-storey institutional construction by Shree Dhurga Constructions" fill sizes="100vw" className="object-cover" /><div className="absolute inset-0 bg-black/60" /><div className="site-shell relative flex min-h-[620px] items-end py-16 sm:py-20"><Reveal className="max-w-5xl"><p className="eyebrow mb-5 text-stone-200">Our construction philosophy</p><h2 className="brand-statement">Built for today.<br />Made to endure.</h2></Reveal></div></section>;
}

export function QualityCommitment() {
  return <section className="section bg-paper"><div className="site-shell grid gap-12 lg:grid-cols-2 lg:items-center"><Reveal><p className="eyebrow text-accent">Our commitment</p><h2 className="display-heading mt-5">Good construction is measured in what lasts.</h2></Reveal><Reveal delay={.08}><p className="body-large mb-8">We focus on the fundamentals that give every project confidence—from thoughtful planning to quality materials and responsible execution.</p><div className="grid gap-4 sm:grid-cols-2">{['Purpose-led planning', 'Quality craftsmanship', 'Practical solutions', 'Attentive handover'].map((item) => <div key={item} className="flex items-center gap-3 border-t border-ink/20 pt-4"><Check size={17} className="text-accent" />{item}</div>)}</div></Reveal></div></section>;
}

export function ProjectAnatomy() {
  const layers = [
    ['01', 'Ground', 'Read the site, levels, access and water before the first structural decision.'],
    ['02', 'Structure', 'Coordinate the load-bearing framework around use, span and long-term performance.'],
    ['03', 'Envelope', 'Resolve roof, walls, openings and weather protection as one connected system.'],
    ['04', 'Finish', 'Bring material, craft and everyday touchpoints together with a disciplined close-out.'],
  ];
  return <section className="anatomy-section bg-ink text-white"><div className="site-shell grid lg:grid-cols-[1.05fr_.95fr]">
    <ParallaxMedia className="anatomy-media min-h-[540px] lg:min-h-[860px]"><Image src="/canva/canva-2a45d16a-e5ad-433d-b018-114f74318aa1.png" alt="Reinforced concrete and masonry construction in progress" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" /></ParallaxMedia>
    <div className="flex flex-col justify-center py-20 lg:py-28 lg:pl-16"><Reveal><p className="eyebrow text-clay-300">Anatomy of a build</p><h2 className="display-heading mt-5">Every layer has a job to do.</h2><p className="mt-7 max-w-lg leading-7 text-stone-400">Good buildings are not assembled as isolated parts. We think from ground condition to final finish as one continuous piece of work.</p></Reveal><div className="mt-12 border-t border-white/20">{layers.map(([number, title, text], index) => <Reveal key={title} delay={index * .04}><article className="anatomy-row"><span>{number}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></div>
  </div></section>;
}

export function SiteDialogue() {
  return <section className="section overflow-hidden bg-paper"><div className="site-shell">
    <Reveal className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end"><div><p className="eyebrow text-accent">Site intelligence</p><p className="mt-6 max-w-sm leading-7 text-stone-600">The most useful decisions often begin with observation: how people arrive, where water moves, how light travels and what the operation needs.</p></div><h2 className="display-heading">The site speaks.<br />We start by listening.</h2></Reveal>
    <div className="mt-14 grid gap-5 md:grid-cols-[1.35fr_.65fr] md:items-end"><ParallaxMedia className="relative min-h-[420px] md:min-h-[680px]"><Image src="/canva/canva-738ca25b-8343-44c4-a200-625a8b373df4.png" alt="Foundation and reinforcement work on a live site" fill sizes="(max-width: 768px) 100vw, 70vw" className="object-cover" /></ParallaxMedia><div className="grid gap-5"><Reveal><div className="site-note"><span>Observe</span><p>Access, orientation, context and constraints are mapped before the build sequence is fixed.</p></div></Reveal><ParallaxMedia className="relative min-h-[300px] md:min-h-[390px]"><Image src="/canva/canva-38c55a6b-ee4f-4b4b-a28f-72d89ff4fd2e.png" alt="Industrial steel roof structure" fill sizes="(max-width: 768px) 100vw, 30vw" className="object-cover" /></ParallaxMedia></div></div>
  </div></section>;
}

export function PrecisionBand() {
  const phrases = ['Plan with clarity', 'Build with discipline', 'Finish with care'];
  return <section className="precision-band" aria-label="Construction principles"><div className="precision-track">{[...phrases, ...phrases].map((phrase, index) => <span key={`${phrase}-${index}`} aria-hidden={index >= phrases.length || undefined}>{phrase}<i /></span>)}</div></section>;
}

export function FinalCTA() {
  return <section id="contact" className="bg-accent text-white"><div className="site-shell py-16 sm:py-24"><Reveal className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow text-white/70">Start a conversation</p><h2 className="cta-heading mt-5">Planning your next<br />construction project?</h2></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><a href={siteConfig.phoneHref} className="button bg-white text-ink">Call {siteConfig.phone} <ArrowUpRight size={17} /></a><a href={`mailto:${siteConfig.email}`} className="button border border-white/40 text-white">Email our team</a></div></Reveal></div></section>;
}
