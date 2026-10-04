import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { ArrowUpRight } from 'lucide-react';
import type { IBlog } from '@/types/blog';
import Reveal from '@/components/home/Reveal';
import ImageReveal from '@/components/home/ImageReveal';

export default function BlogCard({ blog, featured = false, index = 0 }: { blog: IBlog; featured?: boolean; index?: number }) {
  return <Reveal delay={(index % 3) * .05} className={featured ? 'md:col-span-2' : ''}><article className="insight-entry group">
    {blog.featuredImage?.url && <Link href={`/blog/${blog.slug}`} className="block"><ImageReveal className={`relative overflow-hidden bg-stone-200 ${featured ? 'aspect-[16/8]' : 'aspect-[4/3]'}`}><Image src={blog.featuredImage.url} alt={blog.featuredImage.alt || blog.title} fill sizes={featured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'} className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.035]" /></ImageReveal></Link>}
    <div className="mt-5 border-t border-ink/20 pt-4">
      <div className="flex items-center justify-between gap-4"><Link href={`/blog?category=${blog.category?.slug}`} className="project-meta">{blog.category?.name || 'Field notes'}</Link><span className="text-xs text-stone-400">{blog.workflow?.publishedAt ? format(new Date(blog.workflow.publishedAt), 'dd.MM.yyyy') : 'Draft'}</span></div>
      <Link href={`/blog/${blog.slug}`} className="mt-3 flex items-start justify-between gap-5"><h2 className={`font-display font-semibold leading-[1.08] tracking-[-.045em] transition-colors group-hover:text-accent ${featured ? 'text-3xl sm:text-5xl' : 'text-2xl'}`}>{blog.title}</h2><ArrowUpRight className="mt-1 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>
      {blog.excerpt && <p className="mt-4 max-w-2xl text-sm leading-6 text-stone-500 line-clamp-3">{blog.excerpt.replace(/<[^>]*>/g, '')}</p>}
      <p className="mt-5 text-[11px] uppercase tracking-[.12em] text-stone-400">{blog.seoMetrics?.readingTime ?? 1} min read · {blog.author}</p>
    </div>
  </article></Reveal>;
}
