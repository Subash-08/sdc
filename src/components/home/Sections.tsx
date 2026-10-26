import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import ParallaxMedia from './ParallaxMedia';
import { siteConfig } from '@/config/site';

const capabilities = [
  {
    number: '01',
    title: 'Homes & buildings',
    copy: 'Independent houses, villas, apartments and institutional buildings coordinated from first plan to final handover.',
    image: '/canva/canva-e3daa938-10fc-456b-aadf-1dc688b22340.jpg',
    href: '/services/building-construction',
    meta: 'Residential · Institutional',
  },
  {
    number: '02',
    title: 'Industrial works',
    copy: 'Robust facilities, steel structures, roofing and operational improvements shaped around safety and performance.',
    image: '/canva/canva-9db5987c-9892-4e38-afda-aa860bea7bac.png',
    href: '/services/industrial-building',
    meta: 'Factories · Roofing · Stores',
  },
  {
    number: '03',
    title: 'Public infrastructure',
    copy: 'Schools, cement roads and community infrastructure delivered through accountable planning and site control.',
    image: '/canva/canva-68e67889-063d-493d-9a8c-62707300557a.png',
    href: '/services/government-projects',
    meta: 'Schools · Roads · CSR',
  },
];

const process = [
  ['01', 'Read the brief', 'Clarify purpose, site conditions, approvals, programme and the construction outcome.'],
  ['02', 'Coordinate', 'Align drawings, estimates, resources, vendors and technical requirements before execution.'],
  ['03', 'Build with control', 'Review progress, quality and safety through every active stage on site.'],
  ['04', 'Close with care', 'Resolve final details, inspect the completed work and prepare it for dependable use.'],
];

export function HomeIntroduction() {
  return (
    <section className="home2-intro" id="about">
      <div className="site-shell">
        <Reveal className="home2-section-head">
          <p className="home2-label">Who we are</p>
          <h2>One accountable team from the first line on paper to the last day on site.</h2>
        </Reveal>
        <div className="home2-intro-grid">
          <Reveal className="home2-intro-copy">
            <p className="home2-lead">Shree Dhurga Constructions is a civil and electrical engineering consultancy and contracting firm built around practical thinking, direct coordination and quality execution.</p>
            <p>Our work spans private homes, industrial facilities, schools, roads and specialist improvements across Hosur and the wider region.</p>
            <Link href="/about" className="home2-text-link">Meet SDC <ArrowRight size={17} /></Link>
          </Reveal>
          <ParallaxMedia className="home2-intro-image">
            <Image src="/canva/canva-9a751362-a694-4ccc-99b1-f2eba6a43f82.png" alt="Multi-storey institutional building under construction by SDC" fill sizes="(max-width: 900px) 100vw, 58vw" className="object-cover" />
          </ParallaxMedia>
          <Reveal className="home2-intro-note">
            <span>Our promise</span>
            <p>Clear decisions.<br />Responsible execution.<br />Work made to endure.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Capabilities() {
  return (
    <section className="home2-capabilities" id="services">
      <div className="site-shell">
        <Reveal className="home2-section-head home2-section-head--light">
          <p className="home2-label">What we build</p>
          <h2>Capability that moves from ground conditions to finished space.</h2>
          <Link href="/services" className="home2-text-link">All services <ArrowRight size={17} /></Link>
        </Reveal>
        <div className="home2-capability-list">
          {capabilities.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.06}>
              <Link href={item.href} className="home2-capability group">
                <div className="home2-capability-number">{item.number}</div>
                <div className="home2-capability-image"><Image src={item.image} alt="" fill sizes="(max-width: 900px) 100vw, 34vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" /></div>
                <div className="home2-capability-copy"><p>{item.meta}</p><h3>{item.title}</h3><span>{item.copy}</span></div>
                <ArrowUpRight className="home2-capability-arrow" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeProcess() {
  return (
    <section className="home2-process">
      <div className="site-shell">
        <Reveal className="home2-process-heading">
          <p className="home2-label">How the work moves</p>
          <h2>A visible process.<br />No mystery between stages.</h2>
          <p>Every project is different. The discipline behind delivery should not be.</p>
        </Reveal>
        <div className="home2-process-grid">
          {process.map(([number, title, copy], index) => (
            <Reveal key={number} delay={index * .05} className="home2-process-card">
              <span>{number}</span><h3>{title}</h3><p>{copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FieldStatement() {
  return (
    <section className="home2-field">
      <div className="site-shell home2-field-grid">
        <Reveal className="home2-field-copy">
          <p className="home2-label">Built in the real world</p>
          <h2>Good construction is a chain of good decisions.</h2>
          <p>Our engineers and project managers connect planning, materials, people and daily site progress—so the result is not only complete, but dependable.</p>
          <Link href="/works" className="home2-button home2-button--light">Explore project evidence <ArrowUpRight size={18} /></Link>
        </Reveal>
        <div className="home2-field-media">
          <ParallaxMedia className="home2-field-image home2-field-image--large"><Image src="/canva/canva-738ca25b-8343-44c4-a200-625a8b373df4.png" alt="Foundation reinforcement on an SDC construction site" fill sizes="(max-width: 900px) 100vw, 48vw" className="object-cover" /></ParallaxMedia>
          <Reveal className="home2-field-caption"><span>01</span><p>Plan for the conditions that are actually on site.</p></Reveal>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section id="contact" className="home2-cta">
      <div className="home2-cta-grid" aria-hidden="true" />
      <div className="site-shell relative z-10">
        <Reveal>
          <p className="home2-label">Start with a conversation</p>
          <h2>Have a site.<br />Have an idea.<br /><em>Let&apos;s build it well.</em></h2>
        </Reveal>
        <Reveal delay={.08} className="home2-cta-bottom">
          <p>Tell us what you are planning and where the project needs to go next.</p>
          <div className="home2-actions"><a href={siteConfig.phoneHref} className="home2-button home2-button--solid">Call {siteConfig.phone} <ArrowUpRight size={18} /></a><a href={`mailto:${siteConfig.email}`} className="home2-button home2-button--line">Email the team</a></div>
        </Reveal>
      </div>
    </section>
  );
}
