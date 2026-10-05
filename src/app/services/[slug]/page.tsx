import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { getService, services } from '@/config/services';
import { generateSEO } from '@/lib/seo';
import { siteConfig } from '@/config/site';
import Reveal from '@/components/home/Reveal';
import ImageReveal from '@/components/home/ImageReveal';
import { RelatedExpertise, ServiceDetailOutcome } from '@/components/services/ServiceNarrative';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const service = getService((await params).slug);
  if (!service) return { title: 'Service Not Found' };
  return generateSEO({ title: service.title, description: service.summary, url: `/services/${service.slug}`, image: service.image });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const service = getService((await params).slug);
  if (!service) notFound();
  const currentIndex = services.findIndex((item) => item.slug === service.slug);
  const next = services[(currentIndex + 1) % services.length];
  const projectLenses = [
    ['01', 'Use', `How the ${service.shortTitle.toLowerCase()} work needs to perform every day.`],
    ['02', 'Site', 'Access, exposure, existing conditions and the constraints that shape delivery.'],
    ['03', 'Buildability', 'A practical sequence that connects materials, trades and important junctions.'],
  ];
  const coordinationChecks = [
    ['Scope definition', 'What is included, where responsibilities meet and what must be resolved first.'],
    ['Material direction', 'Selections considered for use, exposure, upkeep and the character of the finished work.'],
    ['Site sequence', 'Access, trade order and review points arranged into a legible construction path.'],
    ['Handover readiness', 'Finishing, inspection and close-out information gathered before completion.'],
  ];

  return (
    <main className="bg-paper">
      <section className="service-detail-hero">
        <Image src={service.image} alt={service.title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,18,16,.88),rgba(17,18,16,.30))]" />
        <div className="site-shell relative flex min-h-[78vh] flex-col justify-end pb-12 pt-36 text-white">
          <Reveal><Link href="/services" className="mb-12 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-stone-300"><ArrowLeft size={15} /> All services</Link><p className="eyebrow text-clay-300">Service {service.index}</p><h1 className="service-detail-title mt-5">{service.title}</h1><p className="body-large mt-7 max-w-2xl text-stone-200">{service.summary}</p></Reveal>
        </div>
      </section>

      <ServiceDetailOutcome service={service} />

      <section className="section">
        <div className="site-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal><p className="eyebrow text-accent">The approach</p><h2 className="mt-5 font-display text-4xl font-semibold tracking-[-.05em] sm:text-5xl">Built around the work it needs to do.</h2></Reveal>
          <Reveal delay={.08}><p className="service-intro">{service.introduction}</p><div className="mt-10 grid gap-4 sm:grid-cols-2">{service.capabilities.map((item) => <div key={item} className="flex items-center gap-3 border-t border-ink/20 pt-4"><Check size={16} className="text-accent" />{item}</div>)}</div></Reveal>
        </div>
      </section>

      <section className="site-shell pb-10 sm:pb-16">
        <ImageReveal className="relative aspect-[16/8] overflow-hidden"><Image src={service.secondaryImage} alt={`${service.title} work`} fill sizes="100vw" className="object-cover" /></ImageReveal>
      </section>

      <section className="border-y border-ink/20 bg-clay-200"><div className="site-shell grid md:grid-cols-3">{projectLenses.map(([index, title, text]) => <Reveal key={title} className="service-lens"><span>{index}</span><h2>{title}</h2><p>{text}</p></Reveal>)}</div></section>

      <section className="section bg-ink text-white">
        <div className="site-shell"><Reveal><p className="eyebrow text-clay-300">How it moves</p><h2 className="display-heading mt-5 max-w-4xl">A deliberate sequence. A clearer build.</h2></Reveal><div className="mt-14 grid border-l border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4">{service.process.map((step, index) => <Reveal key={step.title} delay={index * .06}><article className="service-process-step"><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article></Reveal>)}</div></div>
      </section>

      <section className="section bg-stone-100"><div className="site-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><Reveal><p className="eyebrow text-accent">Coordination register</p><h2 className="mt-5 font-display text-4xl font-semibold tracking-[-.05em] sm:text-6xl">The decisions we keep visible.</h2><p className="mt-7 max-w-md leading-7 text-stone-600">A useful service is more than a list of tasks. These are the conversations that keep the work coherent from first brief to final review.</p></Reveal><div className="service-register">{coordinationChecks.map(([title, text], index) => <Reveal key={title} delay={index * .05}><article><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{text}</p></div></article></Reveal>)}</div></div></section>

      <section className="section bg-paper"><div className="site-shell"><Reveal className="grid gap-8 border-b border-ink/20 pb-10 lg:grid-cols-2 lg:items-end"><div><p className="eyebrow text-accent">Before work begins</p><h2 className="display-heading mt-5">A better first<br />conversation.</h2></div><p className="body-large max-w-xl text-stone-600 lg:justify-self-end">Bring what you know and what is still uncertain. Early clarity about the site, purpose and priorities gives the project a stronger starting point.</p></Reveal><div className="grid md:grid-cols-3">{[['Site information', 'Location, access, available drawings and known site conditions.'], ['Project intent', 'The required spaces, operational needs and the quality you are aiming for.'], ['Practical frame', 'Expected timing, decision-makers and any constraints already identified.']].map(([title, text], index) => <Reveal key={title} delay={index * .05} className="service-brief-item"><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>

      <RelatedExpertise service={service} />

      <section className="bg-accent text-white">
        <div className="site-shell grid gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal><p className="eyebrow text-white/70">Your project</p><h2 className="cta-heading mt-5">Start with a<br />clear conversation.</h2></Reveal>
          <Reveal delay={.08}><div className="flex flex-col gap-3"><a href={siteConfig.phoneHref} className="button bg-white text-ink">Call {siteConfig.phone}</a><a href={`mailto:${siteConfig.email}`} className="button border border-white/40 text-white">Email the team</a></div></Reveal>
        </div>
      </section>

      <Link href={`/services/${next.slug}`} className="next-service"><span>Next service · {next.index}</span><strong>{next.title}</strong><ArrowRight /></Link>
    </main>
  );
}
