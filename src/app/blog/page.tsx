import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getBlogs } from '@/services/blogService';
import { getAllBlogCategories } from '@/services/blogCategoryService';
import BlogCard from '@/components/blog/BlogCard';
import { generateSEO } from '@/lib/seo';
import NewsletterSignup from '@/components/blog/NewsletterSignup';
import Reveal from '@/components/home/Reveal';
import type { IBlog } from '@/types/blog';

export const revalidate = 3600;
interface PageProps { searchParams: Promise<{ page?: string; category?: string }>; }

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { category } = await searchParams;
  if (category) {
    const name = category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ');
    return generateSEO({ title: `${name} Blog Posts`, description: `Read our latest articles about ${category.replace(/-/g, ' ')}`, url: `/blog?category=${category}` });
  }
  return generateSEO({ title: 'Construction Journal', description: 'Construction ideas, project insights and practical guidance from Shree Dhurga Constructions.', url: '/blog' });
}

async function loadJournal(page: number, categorySlug?: string) {
  try {
    const [blogsData, categories] = await Promise.all([getBlogs({ page, limit: 10, status: 'published', categorySlug }), getAllBlogCategories()]);
    return { ...blogsData, categories };
  } catch (error) {
    console.error('[BLOG_PAGE_ERROR]', error);
    return { data: [] as IBlog[], pagination: { page, limit: 10, total: 0, totalPages: 0, hasMore: false }, categories: [] as any[] };
  }
}

export default async function BlogPage({ searchParams }: PageProps) {
  const { page: pageParam, category: categorySlug } = await searchParams;
  const page = Number(pageParam) || 1;
  const { data: blogs, pagination, categories } = await loadJournal(page, categorySlug);

  return <main className="bg-paper">
    <section className="page-hero bg-ink text-white"><div className="site-shell grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><Reveal><p className="eyebrow text-clay-300">Notes from the field</p><h1 className="page-title mt-6">The construction<br />journal.</h1></Reveal><Reveal delay={.1}><p className="body-large max-w-xl text-stone-300">Clear thinking on materials, planning and the decisions that turn ambitious briefs into enduring places.</p></Reveal></div></section>
    <div className="sticky top-[76px] z-20 border-b border-ink/15 bg-paper/95 backdrop-blur-lg lg:top-[88px]"><div className="site-shell no-scrollbar flex overflow-x-auto"><Link href="/blog" className={`journal-filter ${!categorySlug ? 'journal-filter--active' : ''}`}>All notes</Link>{categories.map((category) => <Link key={category._id?.toString()} href={`/blog?category=${category.slug}`} className={`journal-filter ${categorySlug === category.slug ? 'journal-filter--active' : ''}`}>{category.name}<sup>{category.blogCount || ''}</sup></Link>)}</div></div>
    <section className="section"><div className="site-shell">
      {blogs.length === 0 ? <div className="border-y border-ink/20 py-24"><p className="eyebrow text-accent">Journal archive</p><h2 className="mt-5 font-display text-3xl tracking-[-.04em] text-stone-500">New field notes are being prepared.</h2>{categorySlug && <Link href="/blog" className="text-link mt-8">View all notes <ArrowRight size={15} /></Link>}</div> : <>
        <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-3">{blogs.map((blog, index) => <BlogCard key={blog.slug} blog={blog} featured={index === 0 && page === 1 && !categorySlug} index={index} />)}</div>
        {pagination.totalPages > 1 && <nav className="mt-20 flex items-center justify-between border-t border-ink/20 pt-6" aria-label="Blog pages">{page > 1 ? <Link href={`/blog?page=${page - 1}${categorySlug ? `&category=${categorySlug}` : ''}`} className="text-link"><ArrowLeft size={15} /> Previous</Link> : <span /> }<span className="eyebrow text-stone-400">{page} / {pagination.totalPages}</span>{pagination.hasMore && <Link href={`/blog?page=${page + 1}${categorySlug ? `&category=${categorySlug}` : ''}`} className="text-link">Next <ArrowRight size={15} /></Link>}</nav>}
      </>}
    </div></section>
    <section className="site-shell pb-20 sm:pb-28"><NewsletterSignup variant="hero" source="blog-listing" /></section>
  </main>;
}
