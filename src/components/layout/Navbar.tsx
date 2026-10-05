'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { services } from '@/config/services';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/works' },
  { name: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); setServicesOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (pathname?.startsWith('/admin')) return null;
  const hasDarkHero = pathname === '/' || pathname === '/about' || pathname?.startsWith('/works') || pathname?.startsWith('/blog') || pathname?.startsWith('/services');
  const lightHeader = open || servicesOpen || (hasDarkHero && !scrolled);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''} ${lightHeader ? 'site-header--light' : ''}`} onMouseLeave={() => setServicesOpen(false)}>
      <div className="site-shell flex h-[76px] items-center justify-between lg:h-[88px]">
        <Link href="/" className="brand-mark" aria-label={`${siteConfig.name} home`}>
          <span className="brand-monogram">SDC</span>
          <span className="brand-name">Shree Dhurga<br />Constructions</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {links.slice(0, 2).map((link) => <Link key={link.name} href={link.href} className="nav-link">{link.name}</Link>)}
          <button className="nav-link flex items-center gap-1.5" type="button" aria-expanded={servicesOpen} aria-controls="services-mega-menu" onMouseEnter={() => setServicesOpen(true)} onFocus={() => setServicesOpen(true)} onClick={() => setServicesOpen((value) => !value)}>
            Services <ChevronDown size={13} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
          </button>
          {links.slice(2).map((link) => <Link key={link.name} href={link.href} className="nav-link">{link.name}</Link>)}
        </nav>
        <div className="hidden lg:block"><a href={siteConfig.phoneHref} className="header-cta">Start a project <ArrowUpRight size={16} /></a></div>
        <button type="button" className="mobile-menu-button lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</button>
      </div>

      <AnimatePresence>
        {servicesOpen && (
          <motion.div id="services-mega-menu" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .24, ease: [0.22, 1, 0.36, 1] }} className="mega-menu hidden lg:block" onMouseEnter={() => setServicesOpen(true)}>
            <div className="site-shell grid grid-cols-[.72fr_1.55fr_.73fr]">
              <div className="mega-intro"><p className="eyebrow text-clay-300">Built around your brief</p><h2>One team.<br />Every stage.</h2><Link href="/services" className="text-link mt-auto">Explore all services <ArrowRight size={15} /></Link></div>
              <div className="mega-services">
                {services.map((service) => <Link href={`/services/${service.slug}`} key={service.slug} className="mega-service-link"><span>{service.index}</span><strong>{service.shortTitle}</strong><ArrowUpRight size={15} /></Link>)}
              </div>
              <Link href="/services/building-construction" className="mega-feature group">
                <div className="relative aspect-[4/3] overflow-hidden"><Image src={services[0].image} alt="Building construction" fill sizes="320px" className="object-cover transition-transform duration-700 group-hover:scale-105" /></div>
                <p className="eyebrow mt-5 text-accent">Featured capability</p><h3>Building construction, planned end to end.</h3><span className="text-link mt-4">See the service <ArrowRight size={15} /></span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: .28, ease: [0.22, 1, 0.36, 1] }} className="mobile-menu lg:hidden">
            <nav className="site-shell h-full overflow-y-auto pb-10 pt-28" aria-label="Mobile navigation">
              <p className="eyebrow mb-5 text-stone-500">Navigate</p>
              {links.slice(0, 2).map((link, index) => <Link key={link.name} href={link.href} onClick={() => setOpen(false)} className="mobile-nav-link"><span>0{index + 1}</span>{link.name}</Link>)}
              <button type="button" className="mobile-nav-link w-full" aria-expanded={mobileServicesOpen} onClick={() => setMobileServicesOpen((value) => !value)}><span>03</span>Services <ChevronDown className={`ml-auto transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} /></button>
              <AnimatePresence>{mobileServicesOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-b border-white/15"><div className="grid gap-1 py-4 pl-11">{services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`} onClick={() => setOpen(false)} className="py-1.5 text-sm text-stone-300">{service.index} — {service.shortTitle}</Link>)}</div></motion.div>}</AnimatePresence>
              {links.slice(2).map((link, index) => <Link key={link.name} href={link.href} onClick={() => setOpen(false)} className="mobile-nav-link"><span>0{index + 4}</span>{link.name}</Link>)}
              <div className="mt-10 border-t border-white/15 pt-7 text-sm text-stone-300"><a href={siteConfig.phoneHref} className="block text-xl text-white">{siteConfig.phone}</a><span>{siteConfig.serviceArea}</span></div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
