import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { services } from '@/config/services';
import { generateSEO } from '@/lib/seo';
import Reveal from '@/components/home/Reveal';
import ImageReveal from '@/components/home/ImageReveal';
import { siteConfig } from '@/config/site';

export const metadata = generateSEO({
  title: 'Construction Services',
  description: 'Explore construction, commercial, industrial, renovation, interior and specialist services from Shree Dhurga Constructions in Hosur.',
  url: '/services',
});

export default function ServicesPage() {
  return (
    <main className="bg-paper">
      <section className="page-hero bg-ink text-white">
        <div className="site-shell grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <Reveal><p className="eyebrow text-clay-300">What we build</p><h1 className="page-title mt-6">Capability<br />without compromise.</h1></Reveal>
          <Reveal delay={.1}><p className="body-large max-w-xl text-stone-300">Nine connected services. One practical, quality-led approach from first conversation through final handover.</p></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 3) * .04}>
              <Link href={`/services/${service.slug}`} className="service-index-row group">
                <span>{service.index}</span>
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
                <div className="relative hidden aspect-[4/3] overflow-hidden md:block"><Image src={service.image} alt="" fill sizes="220px" className="object-cover transition-transform duration-700 group-hover:scale-105" /></div>
                <ArrowUpRight />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-stone-100 py-20 sm:py-28">
        <div className="site-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal><p className="eyebrow text-accent">Have a site in mind?</p><h2 className="display-heading mt-5">Let’s define the right way forward.</h2></Reveal>
          <Reveal delay={.08}><a href={siteConfig.phoneHref} className="button bg-ink text-white">Discuss your project <ArrowRight size={17} /></a></Reveal>
        </div>
      </section>
    </main>
  );
}
