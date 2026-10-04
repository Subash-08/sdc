import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import type { IBlog } from '@/models/Blog';
import Reveal from './Reveal';

export default function LatestBlogs({ blogs }: { blogs: IBlog[] }) {
  return (
    <section className="section bg-stone-100"><div className="site-shell">
      <Reveal className="flex items-end justify-between gap-6"><div><p className="eyebrow text-accent">From the field</p><h2 className="display-heading mt-5">Construction insights.</h2></div><Link href="/blog" className="text-link hidden sm:flex">View all articles <ArrowRight size={16} /></Link></Reveal>
      {blogs.length > 0 ? <div className="mt-12 grid gap-8 md:grid-cols-3">{blogs.slice(0, 3).map((blog, index) => (
        <Reveal key={blog.slug} delay={index * .06}><Link href={`/blog/${blog.slug}`} className="insight-card group">{blog.featuredImage?.url && <div className="insight-image"><Image src={blog.featuredImage.url} alt={blog.featuredImage.alt || blog.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" /></div>}<div className="mt-5"><p className="project-meta">{blog.category?.name || 'Insights'}{blog.workflow?.publishedAt ? ` · ${format(new Date(blog.workflow.publishedAt), 'MMM yyyy')}` : ''}</p><h3>{blog.title}</h3><p className="mt-3 line-clamp-2 text-sm leading-6 text-stone-600">{blog.excerpt?.replace(/<[^>]*>/g, '')}</p></div></Link></Reveal>
      ))}</div> : <Reveal className="mt-12 border-y border-ink/20 py-10"><p className="max-w-xl text-stone-600">New articles will appear here automatically when they are published through the existing Blog CMS.</p></Reveal>}
      <Link href="/blog" className="text-link mt-9 sm:hidden">View all articles <ArrowRight size={16} /></Link>
    </div></section>
  );
}
