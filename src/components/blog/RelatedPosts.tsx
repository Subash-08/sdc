import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowUpRight } from 'lucide-react';
import type { IBlog } from '@/types/blog';

interface Props {
  blogs: IBlog[];
}

export default function RelatedPosts({ blogs }: Props) {
  return (
    <section className="mt-16 border-t border-ink/20 pt-10">
      <p className="eyebrow text-accent">Continue reading</p><h2 className="mb-9 mt-4 font-display text-4xl font-semibold tracking-[-.05em]">Related field notes.</h2>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Link key={blog.slug} href={`/blog/${blog.slug}`} className="group border-t border-ink/20 pt-4 transition-all hover:border-accent">
            {blog.featuredImage?.url && (
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                <Image src={blog.featuredImage.url} alt={blog.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
              </div>
            )}
            <div className="mt-4 min-w-0">
              <div className="flex items-start justify-between gap-3"><p className="font-display text-xl font-semibold leading-tight tracking-[-.035em] transition-colors group-hover:text-accent">{blog.title}</p><ArrowUpRight size={17} className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
              <p className="mt-3 flex items-center gap-1.5 text-xs uppercase tracking-[.08em] text-stone-400">
                <Clock size={11} />
                {blog.seoMetrics?.readingTime ?? 1} min read
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
