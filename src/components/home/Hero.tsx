import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import { siteConfig } from '@/config/site';

export default function Hero() {
  return (
    <section id="top" className="home2-hero">
      <div className="home2-grid" aria-hidden="true" />
      <div className="site-shell relative z-10">
        <div className="home2-hero-layout">
          <div className="home2-hero-copy">
            <Reveal>
              <p className="home2-kicker"><span /> Civil + electrical construction · Hosur</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="home2-hero-title">We build<br /><em>what lasts.</em></h1>
            </Reveal>
            <Reveal delay={0.12} className="home2-hero-bottom">
              <p>From planning and approvals to disciplined site execution, SDC delivers homes, industrial facilities and public works built for everyday performance.</p>
              <div className="home2-actions">
                <a href={siteConfig.phoneHref} className="home2-button home2-button--solid">Start a project <ArrowUpRight size={18} /></a>
                <Link href="/works" className="home2-button home2-button--line">See our work <ArrowDownRight size={18} /></Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="home2-hero-visual">
            <div className="home2-hero-image">
              <Image src="/canva/canva-e780339d-9938-4e29-8119-eace3c532866.jpg" alt="SDC construction team completing masonry work on site" fill priority sizes="(max-width: 900px) 100vw, 46vw" className="object-cover" />
            </div>
            <div className="home2-image-tag"><span>On site</span><strong>Hosur<br />Tamil Nadu</strong></div>
            <div className="home2-image-index">SDC / 01</div>
          </Reveal>
        </div>

        <Reveal delay={0.18} className="home2-proof-strip">
          <div><strong>10+</strong><span>Years of practical experience</span></div>
          <div><strong>02</strong><span>Civil and electrical disciplines</span></div>
          <div><strong>05</strong><span>Regions served across Tamil Nadu & Bengaluru</span></div>
          <p>Consultants<br />& contractors</p>
        </Reveal>
      </div>
    </section>
  );
}
