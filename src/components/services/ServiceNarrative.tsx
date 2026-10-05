import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import Reveal from '@/components/home/Reveal';
import ParallaxMedia from '@/components/home/ParallaxMedia';
import { services, type Service } from '@/config/services';

export function ServicePathways() {
  const paths = [
    { index: 'A', title: 'Create', text: 'New homes, commercial environments and industrial facilities built from a clear brief.', image: services[0].image, href: '/services/building-construction' },
    { index: 'B', title: 'Adapt', text: 'Renovation and interiors that find new value in existing buildings and spaces.', image: services[5].image, href: '/services/renovation' },
    { index: 'C', title: 'Protect', text: 'Roofing, waterproofing and durable infrastructure that keep buildings performing.', image: services[7].image, href: '/services/waterproofing' },
  ];
  return <section className="section bg-ink text-white"><div className="site-shell"><Reveal className="grid gap-8 lg:grid-cols-2 lg:items-end"><div><p className="eyebrow text-clay-300">Three ways in</p><h2 className="display-heading mt-5">Build new.<br />Rework. Protect.</h2></div><p className="body-large max-w-xl text-stone-400 lg:justify-self-end">Every commission starts in a different place. Our capabilities connect around the condition and purpose of your project.</p></Reveal><div className="mt-14 grid border-l border-t border-white/20 lg:grid-cols-3">{paths.map((path, index) => <Reveal key={path.title} delay={index * .07} className="h-full"><Link href={path.href} className="service-path group"><div className="relative aspect-[4/3] overflow-hidden"><Image src={path.image} alt="" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-75" /></div><div className="service-path-copy"><span>{path.index}</span><h3>{path.title}</h3><p>{path.text}</p><ArrowRight /></div></Link></Reveal>)}</div></div></section>;
}

export function ServiceSystem() {
  const stages = [['Brief', 'Purpose, scale and priorities'], ['Site', 'Access, context and constraints'], ['Build', 'Structure, envelope and services'], ['Close', 'Finish, review and handover']];
  return <section className="section bg-stone-100"><div className="site-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><Reveal><p className="eyebrow text-accent">One connected system</p><h2 className="display-heading mt-5">The handoffs matter as much as the work.</h2></Reveal><div className="service-system"><Reveal><p className="body-large max-w-2xl">We keep information moving between the brief, the site and the people delivering each stage—so decisions remain visible and the work stays coherent.</p></Reveal>{stages.map(([title, text], index) => <Reveal key={title} delay={index * .05}><div className="system-stage"><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div></div></section>;
}

export function ServiceDetailOutcome({ service }: { service: Service }) {
  return <section className="section overflow-hidden bg-stone-100"><div className="site-shell"><Reveal className="grid gap-8 border-b border-ink/20 pb-12 lg:grid-cols-[.8fr_1.2fr]"><p className="eyebrow text-accent">What this service resolves</p><h2 className="display-heading">Clarity at the start.<br />Confidence at the finish.</h2></Reveal><div className="mt-12 grid gap-5 lg:grid-cols-[.7fr_1.3fr]"><Reveal><div className="detail-outcome-note"><p>{service.summary}</p><span>SDC · Service {service.index}</span></div></Reveal><ParallaxMedia className="relative min-h-[430px] lg:min-h-[620px]"><Image src={service.image} alt={service.title} fill sizes="(max-width: 1024px) 100vw, 65vw" className="object-cover" /></ParallaxMedia></div></div></section>;
}

export function RelatedExpertise({ service }: { service: Service }) {
  const index = services.findIndex((item) => item.slug === service.slug);
  const related = [1, 2, 3].map((offset) => services[(index + offset) % services.length]);
  return <section className="section bg-paper"><div className="site-shell"><Reveal className="flex items-end justify-between border-b border-ink/20 pb-8"><div><p className="eyebrow text-accent">Connected expertise</p><h2 className="mt-5 font-display text-4xl font-semibold tracking-[-.05em] sm:text-6xl">Often considered together.</h2></div></Reveal><div>{related.map((item, itemIndex) => <Reveal key={item.slug} delay={itemIndex * .04}><Link href={`/services/${item.slug}`} className="related-service"><span>{item.index}</span><h3>{item.title}</h3><p>{item.summary}</p><ArrowRight /></Link></Reveal>)}</div></div></section>;
}
