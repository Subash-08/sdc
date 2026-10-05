import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { Clock, Calendar, ArrowLeft } from 'lucide-react';
import { getBlogBySlug, getRelatedBlogs, getAllBlogSlugs } from '@/services/blogService';
import { renderBlocksToHtml } from '@/lib/blog/blocksToHtml';
import { generateTableOfContents } from '@/lib/blog/tableOfContents';
import { generateSEO } from '@/lib/seo';
import AdvancedStructuredData from '@/components/seo/AdvancedStructuredData';
import SpeakableSchema from '@/components/seo/SpeakableSchema';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogContent from '@/components/blog/BlogContent';
import FeaturedSnippet from '@/components/blog/FeaturedSnippet';
import RelatedPosts from '@/components/blog/RelatedPosts';
import ShareButtons from '@/components/blog/ShareButtons';
import NewsletterSignup from '@/components/blog/NewsletterSignup';
import Reveal from '@/components/home/Reveal';

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) return { title: 'Blog Not Found' };

  return generateSEO({
    title: blog.seo?.metaTitle || blog.title,
    description: blog.seo?.metaDescription || blog.excerpt?.replace(/<[^>]*>/g, ''),
    image: blog.seo?.ogImage || blog.featuredImage?.url,
    url: `/blog/${blog.slug}`,
    keywords: [blog.seo?.focusKeyword, ...(blog.seo?.secondaryKeywords || []), ...blog.tags].filter(Boolean) as string[],
    type: 'article',
    publishedTime: blog.workflow?.publishedAt?.toString(),
    modifiedTime: blog.workflow?.lastModifiedAt?.toString(),
  });
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog || blog.workflow?.status !== 'published') {
    notFound();
  }

  const [relatedBlogs, toc] = await Promise.all([
    getRelatedBlogs(blog._id.toString(), blog.category?.slug, 3),
    generateTableOfContents(blog.contentBlocks || []),
  ]);

  const contentHtml = renderBlocksToHtml(blog.contentBlocks || []);
  
  // Extract first FAQ for Featured Snippet optimization
  const firstFaqBlock = blog.contentBlocks?.find((b) => b.type === 'faq' && b.question && b.answer);

  return (
    <>
      <AdvancedStructuredData
        blog={blog}
      />
      <SpeakableSchema 
        blog={{
          title: blog.title,
          slug: blog.slug,
          excerpt: blog.excerpt?.replace(/<[^>]*>/g, '') || ''
        }} 
      />

      <main className="bg-paper">
        {/* Hero */}
        <section className="bg-ink pb-10 pt-32 text-white sm:pb-14 sm:pt-40">
          <div className="site-shell">
            <Reveal>
              <div className="flex flex-wrap items-center justify-between gap-5 border-b border-white/20 pb-5">
                <Link href="/blog" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] text-stone-400 transition-colors hover:text-white"><ArrowLeft size={16} />Back to journal</Link>
                <Link href={`/blog?category=${blog.category?.slug}`} className="eyebrow text-clay-300 transition-colors hover:text-white">{blog.category?.name}</Link>
              </div>
              <div className="py-9 lg:py-11">
                <h1 className="blog-title max-w-[78rem] font-display text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[.88] tracking-[-.07em]">{blog.title}</h1>
                <div className="mt-9 grid gap-6 border-t border-white/20 pt-5 lg:grid-cols-2 lg:items-start">
                  <p className="max-w-xl text-base leading-7 text-stone-300">{blog.excerpt?.replace(/<[^>]*>/g, '')}</p>
                  <div className="flex flex-wrap gap-x-5 gap-y-3 text-[10px] font-bold uppercase tracking-[.1em] text-stone-400 lg:justify-self-end">
                    <span className="flex items-center gap-1.5"><Calendar size={14} />{blog.workflow?.publishedAt ? format(new Date(blog.workflow.publishedAt), 'MMMM d, yyyy') : 'Unknown date'}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} />{blog.seoMetrics?.readingTime ?? 1} min read</span>
                    <span className="text-stone-200">By {blog.author}</span>
                  </div>
                </div>
              </div>
            </Reveal>
            {blog.featuredImage?.url && <Reveal delay={.08} className="relative aspect-[16/7] min-h-[300px] overflow-hidden"><Image src={blog.featuredImage.url} alt={blog.featuredImage.alt || blog.title} fill className="object-cover" priority sizes="100vw" /><div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" /><span className="absolute bottom-4 left-4 bg-ink/85 px-3 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-stone-200">Field image · {blog.category?.name}</span></Reveal>}
          </div>
        </section>

        {/* Main Content */}
        <div className="site-shell py-14 sm:py-20">
          <div className={toc.length > 0 ? 'grid gap-12 lg:grid-cols-[240px_minmax(0,760px)] lg:justify-center' : 'mx-auto max-w-[760px]'}>
            {/* TOC Sidebar */}
            {toc.length > 0 && (
              <aside className="hidden lg:block">
                <TableOfContents items={toc} />
              </aside>
            )}

            {/* Article */}
            <article className="flex-1 min-w-0">
              {/* Featured Snippet (AEO) */}
              {firstFaqBlock && (
                <FeaturedSnippet
                  question={firstFaqBlock.question || ''}
                  answer={firstFaqBlock.answer || ''}
                />
              )}

              <BlogContent html={contentHtml} />

              {/* Tags */}
              {blog.tags?.length > 0 && (
                <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-ink/20 pt-7">
                  <span className="eyebrow mr-2 text-stone-500">Filed under</span>
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                    className="border border-ink/20 px-3 py-1.5 text-xs font-medium text-stone-600 transition-colors hover:border-accent hover:text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Share */}
              <div className="mt-8 border-t border-ink/20 pt-6">
                <ShareButtons url={`/blog/${blog.slug}`} title={blog.title} />
              </div>
            </article>
          </div>

          {/* Related Posts */}
          {relatedBlogs.length > 0 && (
            <RelatedPosts blogs={relatedBlogs} />
          )}

          {/* Newsletter CTA */}
          <div className="mt-14">
            <NewsletterSignup
              variant="hero"
              source={`blog-post-${blog.slug}`}
            />
          </div>
        </div>
      </main>
    </>
  );
}
