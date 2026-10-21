import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/home/Reveal';
import ImageReveal from '@/components/home/ImageReveal';
import { generateSEO } from '@/lib/seo';
import { siteConfig } from '@/config/site';

export const metadata = generateSEO({ title: 'About Shree Dhurga Constructions', description: 'Learn how Shree Dhurga Constructions approaches residential, commercial, industrial and specialist building work in Hosur.', url: '/about' });

const principles = [
  ['01', 'Qualified technical team', 'Qualified engineers and project managers bring practical expertise to every stage of the work.'],
  ['02', 'Committed teamwork', 'Site and office teams work as one coordinated unit, with daily review and next-day scheduling.'],
  ['03', 'Consultative approach', 'We stay integrated with our clients so requirements, decisions and progress remain clearly connected.'],
  ['04', 'Dependable turnaround', 'Every project is planned around disciplined execution, safety, quality and a responsible turnaround time.'],
];

const fields = [
  ['Residential', 'Homes and living environments planned around privacy, climate and daily routines.'],
  ['Commercial', 'Workplaces and customer-facing spaces shaped around movement, identity and adaptable use.'],
  ['Industrial', 'Facilities, warehouses and roofing systems coordinated for durable operational performance.'],
  ['Renewal', 'Renovation, interiors, waterproofing and specialist work that extends the useful life of a place.'],
];

const clients = [
  { name: 'TPC Engineering & Construction', image: '/canva/canva-9d2dd1e2-262d-46eb-ac7e-7c52ed25e9fa.png' },
  { name: 'Manika Plastech Ltd', image: '/canva/canva-6276c9ac-f962-4b12-873c-c87305e4c20b.png' },
  { name: 'Dynaspede', image: '/canva/canva-7c788d6d-f90c-4cfd-b7df-8443e698a31f.png' },
  { name: 'Global Calcium', image: '/canva/canva-da51cfa5-5f82-459b-8252-bcf40fd27b7d.png' },
  { name: 'Pegasus', image: '/canva/canva-90b9d801-5d38-40ca-ae45-9f6f1bcf3c42.png' },
  { name: 'Danblock', image: '/canva/canva-d41df3d6-0c9e-43aa-9ea3-affc0f6eb164.png' },
];

export default function AboutPage() {
  return <main className="bg-paper">
    <section className="page-hero bg-ink text-white"><div className="site-shell grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end"><Reveal><p className="eyebrow text-clay-300">About SDC · Hosur</p><h1 className="page-title mt-6">Expertise on site.<br />Trust in every<br />relationship.</h1></Reveal><Reveal delay={.08}><p className="body-large max-w-xl text-stone-300">Shree Dhurga Constructions is a civil and electrical engineering consultancy and contracting firm serving public and private-sector clients.</p></Reveal></div><div className="site-shell mt-12"><ImageReveal className="relative aspect-[16/7] min-h-[300px] overflow-hidden"><Image src="/canva/canva-9a751362-a694-4ccc-99b1-f2eba6a43f82.png" alt="Institutional construction project delivered by Shree Dhurga Constructions" fill priority sizes="100vw" className="object-cover" /></ImageReveal></div></section>

    <section className="section"><div className="site-shell grid gap-14 lg:grid-cols-[.65fr_1.35fr]"><Reveal><p className="eyebrow text-accent">Company profile</p><p className="mt-7 max-w-sm leading-7 text-stone-600">More than a decade of construction and electrical investigation has built a satisfied client base and a reputation carried forward through referrals.</p></Reveal><Reveal delay={.08}><h2 className="display-heading">Experience made available with passion, discipline and responsibility.</h2><div className="mt-10 grid gap-7 border-t border-ink/20 pt-7 md:grid-cols-2"><p className="body-large">Our commitment is to maintain quality and integrity while delivering dependable solutions for both public and private sectors.</p><p className="leading-7 text-stone-600">A dedicated team of engineers and project managers maintains strict standards through planning, execution, daily review and handover.</p></div></Reveal></div></section>

    <section className="section bg-stone-100"><div className="site-shell"><Reveal><p className="eyebrow text-accent">Mission & vision</p><h2 className="display-heading mt-5 max-w-5xl">A shared growth path built on loyalty and useful solutions.</h2></Reveal><div className="mt-12 grid gap-px bg-ink/15 lg:grid-cols-2"><Reveal className="bg-paper p-8 sm:p-12"><span className="eyebrow text-accent">Mission</span><h3 className="mt-6 font-display text-3xl font-semibold tracking-[-.04em]">Set a benchmark through loyalty.</h3><p className="mt-5 max-w-xl leading-7 text-stone-600">To achieve benchmark objectives in the present market environment through loyal relationships, responsible execution and consistent quality.</p></Reveal><Reveal delay={.08} className="bg-paper p-8 sm:p-12"><span className="eyebrow text-accent">Vision</span><h3 className="mt-6 font-display text-3xl font-semibold tracking-[-.04em]">Deliver the best solution, every time.</h3><p className="mt-5 max-w-xl leading-7 text-stone-600">To deliver clients the best practical solutions while bringing employees, vendors and partners with us on a distinctive growth path in industrial electrical and construction work.</p></Reveal></div></div></section>

    <section className="bg-stone-100"><div className="site-shell grid lg:grid-cols-2"><ImageReveal className="relative min-h-[460px] lg:min-h-[760px]"><Image src="/canva/canva-e780339d-9938-4e29-8119-eace3c532866.jpg" alt="Shree Dhurga Constructions site team at work" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" /></ImageReveal><div className="flex flex-col justify-center py-14 lg:py-20 lg:pl-16"><Reveal><p className="eyebrow text-accent">Our strengths</p><h2 className="display-heading mt-5">One team.<br />Four strengths.</h2></Reveal><div className="mt-10 border-t border-ink/20">{principles.map(([number, title, text], index) => <Reveal key={title} delay={index * .04}><article className="about-principle"><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article></Reveal>)}</div></div></div></section>

    <section className="section"><div className="site-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><Reveal><p className="eyebrow text-accent">Social responsibility</p><h2 className="display-heading mt-5">Growth should strengthen the community around it.</h2><p className="mt-7 max-w-xl leading-7 text-stone-600">Beyond commercial work, SDC supports rural students and school infrastructure. Our published portfolio includes government-school construction and improvement work.</p><Link href="/works" className="text-link mt-8">See public and CSR work <ArrowRight size={16} /></Link></Reveal><ImageReveal className="relative min-h-[420px] overflow-hidden"><Image src="/canva/canva-68e67889-063d-493d-9a8c-62707300557a.png" alt="Government school improvement and CSR work" fill sizes="(max-width:1024px) 100vw, 60vw" className="object-cover" /></ImageReveal></div></section>

    <section className="section bg-ink text-white"><div className="site-shell"><Reveal className="grid gap-8 border-b border-white/20 pb-10 lg:grid-cols-2 lg:items-end"><div><p className="eyebrow text-clay-300">Where we contribute</p><h2 className="display-heading mt-5">Different buildings.<br />One practical mindset.</h2></div><p className="max-w-lg leading-7 text-stone-400 lg:justify-self-end">From building planning and approvals to construction, interiors, roofing, roads, waterproofing and HT/LT electrical liaisoning, our services connect around the client brief.</p></Reveal><div className="grid md:grid-cols-2">{fields.map(([title, text], index) => <Reveal key={title} delay={index * .04}><article className="about-field"><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div><Link href="/services" className="text-link mt-10 text-white">Explore all services <ArrowRight size={16} /></Link></div></section>

    <section className="section bg-white"><div className="site-shell"><Reveal className="grid gap-8 border-b border-ink/15 pb-9 lg:grid-cols-2 lg:items-end"><div><p className="eyebrow text-accent">Published client roster</p><h2 className="display-heading mt-5">Relationships carried by the work.</h2></div><p className="max-w-lg leading-7 text-stone-600 lg:justify-self-end">The SDC company profile presents work and relationships across industrial, engineering and manufacturing organisations.</p></Reveal><div className="mt-10 grid grid-cols-2 gap-px bg-ink/15 sm:grid-cols-3">{clients.map((client, index) => <Reveal key={client.name} delay={index * .035} className="bg-paper"><div className="relative aspect-[4/3] p-7"><Image src={client.image} alt={client.name} fill sizes="(max-width:640px) 50vw, 33vw" className="object-contain p-8" /></div></Reveal>)}</div></div></section>

    <section className="section"><div className="site-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><Reveal><p className="eyebrow text-accent">Based in Hosur</p><h2 className="mt-5 font-display text-4xl font-semibold tracking-[-.05em] sm:text-6xl">Close to the work.<br />Available for the conversation.</h2></Reveal><Reveal delay={.08}><div className="border-t border-ink/20 pt-7"><p className="body-large max-w-2xl">Visit our team, call with an early brief, or share the site information you already have. A useful project conversation can begin before every answer is known.</p><div className="mt-9 grid gap-5 sm:grid-cols-3"><div><p className="eyebrow text-stone-400">Visit</p><p className="mt-3 text-sm leading-6">{siteConfig.address}</p></div><div><p className="eyebrow text-stone-400">Call</p><a className="mt-3 inline-block font-semibold" href={siteConfig.phoneHref}>{siteConfig.phone}</a></div><div><p className="eyebrow text-stone-400">Write</p><a className="mt-3 inline-block break-all font-semibold" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div></div><a href={siteConfig.phoneHref} className="button button--accent mt-10">Start a conversation <ArrowUpRight size={16} /></a></div></Reveal></div></section>
  </main>;
}
