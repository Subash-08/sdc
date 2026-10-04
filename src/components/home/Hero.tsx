import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import { siteConfig } from '@/config/site';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[760px] overflow-hidden bg-ink text-white lg:min-h-screen">
      <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85" alt="Contemporary high-rise architecture" fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,18,16,.90)_0%,rgba(17,18,16,.55)_52%,rgba(17,18,16,.20)_100%)]" />
      <div className="absolute inset-0 construction-grid opacity-30" />
      <div className="site-shell relative flex min-h-[760px] flex-col justify-end pb-12 pt-32 lg:min-h-screen lg:pb-16">
        <div className="max-w-5xl">
          <Reveal><p className="eyebrow mb-6 text-stone-200">Construction & engineering · Hosur, Tamil Nadu</p></Reveal>
          <Reveal delay={0.08}><h1 className="hero-title">We build with<br /><span>purpose.</span></h1></Reveal>
          <Reveal delay={0.16} className="mt-7 grid gap-7 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-xl text-base leading-7 text-stone-200 sm:text-lg">From first plans to final handover, {siteConfig.name} delivers residential, commercial, industrial and renovation work with disciplined attention to detail.</p>
            <div className="flex flex-wrap gap-3"><a href={siteConfig.phoneHref} className="button button--accent">Start a project <ArrowUpRight size={17} /></a><Link href="/works" className="button button--ghost">View projects</Link></div>
          </Reveal>
        </div>
        <div className="mt-16 flex items-end justify-between border-t border-white/25 pt-5 text-xs uppercase tracking-[.18em] text-stone-300"><span>Established 1998</span><a href="#about" className="flex items-center gap-2">Explore <ArrowDown size={15} /></a></div>
      </div>
    </section>
  );
}
