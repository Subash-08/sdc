import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  keywords?: string[];
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

export function generateSEO({ title, description, url = '/', image = siteConfig.seo.defaultImage, keywords = [], type = 'website', publishedTime, modifiedTime }: SEOProps): Metadata {
  const absoluteUrl = url.startsWith('http') ? url : new URL(url, siteConfig.url).toString();
  const absoluteImage = image.startsWith('http') ? image : new URL(image, siteConfig.url).toString();
  return {
    title,
    description,
    keywords,
    alternates: { canonical: absoluteUrl },
    openGraph: { title, description, url: absoluteUrl, siteName: siteConfig.name, images: [{ url: absoluteImage, width: 1200, height: 630, alt: title }], type, ...(type === 'article' && publishedTime ? { publishedTime } : {}), ...(type === 'article' && modifiedTime ? { modifiedTime } : {}) },
    twitter: { card: 'summary_large_image', title, description, images: [absoluteImage] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}
