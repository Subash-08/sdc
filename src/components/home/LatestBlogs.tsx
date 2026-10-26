import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { format } from 'date-fns';
import type { IBlog } from '@/models/Blog';
import Reveal from './Reveal';

export default function LatestBlogs({ blogs }: { blogs: IBlog[] }) {
  return (
    <section className="home2-journal">
      <div className="site-shell">
        <Reveal className="home2-journal-head"><div><p className="home2-label">Field notes</p><h2>Useful thinking<br />before work begins.</h2></div><Link href="/blog" className="home2-text-link">Read all articles <ArrowRight size={17} /></Link></Reveal>
        {blogs.length > 0 ? <div className="home2-journal-list">{blogs.slice(0, 3).map((blog, index) => (
          <Reveal key={blog.slug} delay={index * .05}>
            <Link href={`/blog/${blog.slug}`} className="home2-journal-row group">
              <span className="home2-journal-index">0{index + 1}</span>
              {blog.featuredImage?.url && <div className="home2-journal-image"><Image src={blog.featuredImage.url} alt={blog.featuredImage.alt || blog.title} fill sizes="240px" className="object-cover transition-transform duration-700 group-hover:scale-105" /></div>}
              <div className="home2-journal-copy"><p>{blog.category?.name || 'Insights'}{blog.workflow?.publishedAt ? ` · ${format(new Date(blog.workflow.publishedAt), 'MMM yyyy')}` : ''}</p><h3>{blog.title}</h3></div>
              <ArrowUpRight />
            </Link>
          </Reveal>
        ))}</div> : <Reveal className="home2-empty">New articles will appear here when they are published through the Blog CMS.</Reveal>}
      </div>
    </section>
  );
}
