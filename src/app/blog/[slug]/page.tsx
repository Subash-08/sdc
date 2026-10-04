import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { Clock, Calendar, ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { getBlogBySlug, getRelatedBlogs, getAllBlogSlugs } from '@/services/blogService';
import { renderBlocksToHtml } from '@/lib/blog/blocksToHtml';
import { generateTableOfContents } from '@/lib/blog/tableOfContents';
import { generateSEO } from '@/lib/seo';
import AdvancedStructuredData from '@/components/seo/AdvancedStructuredData';
import SpeakableSchema from '@/components/seo/SpeakableSchema';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogContent from '@/components/blog/BlogContent';
import AISummary from '@/components/blog/AISummary';
import FeaturedSnippet from '@/components/blog/FeaturedSnippet';
import RelatedPosts from '@/components/blog/RelatedPosts';
import ShareButtons from '@/components/blog/ShareButtons';
import NewsletterSignup from '@/components/blog/NewsletterSignup';
import ImageReveal from '@/components/home/ImageReveal';
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

      <main className="min-h-screen bg-paper">
        {/* Hero */}
        <div className="bg-ink pb-20 pt-36 text-white sm:pb-28 sm:pt-44">
          <div className="site-shell max-w-6xl">
            <Reveal>
            <Link
              href="/blog"
              className="mb-10 inline-flex items-center gap-2 text-sm text-stone-400 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            <Link
              href={`/blog?category=${blog.category?.slug}`}
              className="eyebrow mb-5 inline-block text-clay-300 transition-colors hover:text-white"
            >
              {blog.category?.name}
            </Link>

            <h1 className="blog-title max-w-5xl font-display text-4xl font-semibold leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-7xl">
              {blog.title}
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-stone-400">
              <span className="flex items-center gap-1.5">
                <Calendar size={15} />
                {blog.workflow?.publishedAt
                  ? format(new Date(blog.workflow.publishedAt), 'MMMM d, yyyy')
                  : 'Unknown date'}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={15} />
                {blog.seoMetrics?.readingTime ?? 1} min read
              </span>
              <span className="font-medium text-stone-200">By {blog.author}</span>
            </div>
            </Reveal>
          </div>
        </div>

        {/* Featured Image */}
        {blog.featuredImage?.url && (
          <div className="site-shell max-w-6xl pt-10">
            <ImageReveal className="relative aspect-[21/9] min-h-[260px] w-full overflow-hidden bg-stone-200">
              <Image
                src={blog.featuredImage.url}
                alt={blog.featuredImage.alt || blog.title}
                fill
                className="object-cover"
                priority
              />
            </ImageReveal>
          </div>
        )}

        {/* Main Content */}
        <div className="site-shell max-w-6xl py-16 sm:py-24">
          <div className="flex gap-10">
            {/* TOC Sidebar */}
            {toc.length > 0 && (
              <aside className="hidden lg:block w-64 shrink-0">
                <TableOfContents items={toc} />
              </aside>
            )}

            {/* Article */}
            <article className="flex-1 min-w-0">
              {/* Excerpt */}
              {blog.excerpt && (
                <p className="blog-excerpt mb-10 border-b border-ink/20 pb-10 font-display text-xl leading-relaxed tracking-[-.02em] text-stone-600 sm:text-2xl">
                  {blog.excerpt.replace(/<[^>]*>/g, '')}
                </p>
              )}

              {/* AI Summary */}
              <div className="blog-summary">
                <AISummary 
                  blog={{
                    title: blog.title,
                    excerpt: blog.excerpt?.replace(/<[^>]*>/g, '') || '',
                    keyTakeaways: blog.keyTakeaways || []
                  }} 
                />
              </div>

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
                <div className="flex flex-wrap items-center gap-2 mt-10 pt-8 border-t border-gray-100">
                  <span className="text-sm font-medium text-gray-500 mr-1">Tags:</span>
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                    className="border border-ink/20 px-3 py-1 text-xs font-medium text-stone-600 transition-colors hover:border-accent hover:text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Share */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <ShareButtons url={`/blog/${blog.slug}`} title={blog.title} />
              </div>
            </article>
          </div>

          {/* Related Posts */}
          {relatedBlogs.length > 0 && (
            <RelatedPosts blogs={relatedBlogs} />
          )}

          {/* Newsletter CTA */}
          <div className="mt-16">
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
