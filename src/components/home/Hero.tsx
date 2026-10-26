import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import { siteConfig } from '@/config/site';

const facts = [
  ['01', 'Hosur, Tamil Nadu'],
  ['02', 'Civil + electrical'],
  ['03', 'Homes · Industry · Public works'],
];

export default function Hero() {
  return (
    <section id="top" className="home2-hero">
      <Image src="/canva/canva-e780339d-9938-4e29-8119-eace3c532866.jpg" alt="SDC construction team working on an active building site in Hosur" fill priority sizes="100vw" className="home2-hero-backdrop" />
      <div className="home2-hero-shade" aria-hidden="true" />
      <div className="site-shell home2-hero-content">
        <Reveal className="home2-hero-main">
          <p className="home2-kicker"><span /> Civil &amp; electrical engineering · Hosur</p>
          <h1 className="home2-hero-title">From plan to site, <em>one coordinated build.</em></h1>
          <p className="home2-hero-summary">Residential, industrial, commercial and public construction shaped by practical engineering and accountable execution.</p>
          <div className="home2-actions">
            <a href={siteConfig.phoneHref} className="home2-button home2-button--solid">Discuss your project <ArrowUpRight size={18} /></a>
            <Link href="/works" className="home2-button home2-button--glass">See completed work <ArrowUpRight size={18} /></Link>
          </div>
        </Reveal>

        <Reveal delay={.1} className="home2-hero-rail">
          {facts.map(([number, value]) => <div key={number}><span>{number}</span><p>{value}</p></div>)}
        </Reveal>

        <a href="#project-evidence" className="home2-scroll-cue" aria-label="Scroll to project evidence"><span>Explore</span><ArrowDown size={17} /></a>
      </div>
    </section>
  );
}
