'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { services } from '@/config/services';

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;

  return (
    <footer className="bg-ink text-stone-300">
      <div className="site-shell py-16 sm:py-20">
        <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-[1.25fr_.75fr_.75fr]">
          <div>
            <div className="mb-7 flex items-center gap-4 text-white">
              <span className="grid h-12 w-12 place-items-center border border-white/30 font-display text-sm font-semibold tracking-[.18em]">SDC</span>
              <span className="font-display text-xl font-semibold leading-none">Shree Dhurga<br />Constructions</span>
            </div>
            <p className="max-w-md text-base leading-7 text-stone-400">Thoughtful planning, disciplined execution and enduring construction across residential, commercial and industrial projects.</p>
          </div>
          <div>
            <h2 className="footer-heading">Explore</h2>
            <div className="grid gap-3"><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/works">Projects</Link><Link href="/blog">Blog</Link></div>
          </div>
          <div>
            <h2 className="footer-heading">Services</h2>
            <div className="grid gap-3">{services.slice(0, 5).map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.shortTitle}</Link>)}</div>
          </div>
        </div>
        <div className="grid gap-8 border-b border-white/15 py-10 md:grid-cols-3">
          <div><p className="footer-label">Visit</p><p>{siteConfig.address}</p></div>
          <div><p className="footer-label">Call</p><a href={siteConfig.phoneHref}>{siteConfig.phone}</a></div>
          <div><p className="footer-label">Write</p><a className="break-all" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-xs uppercase tracking-[.14em] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <a href="#top" className="inline-flex items-center gap-2 text-stone-300">Back to top <ArrowUpRight size={14} /></a>
        </div>
      </div>
    </footer>
  );
}
