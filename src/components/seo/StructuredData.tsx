import type { IProject } from '@/models/Project';
import { siteConfig } from '@/config/site';

export function OrganizationStructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: siteConfig.organization.name,
    url: siteConfig.url,
    logo: new URL(siteConfig.organization.logo, siteConfig.url).toString(),
    description: siteConfig.organization.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: { '@type': 'PostalAddress', ...siteConfig.organization.address },
    areaServed: { '@type': 'City', name: 'Hosur' },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ProjectStructuredData({ project }: { project: IProject }) {
  const data = { '@context': 'https://schema.org', '@type': 'CreativeWork', name: project.seoTitle || project.title, description: project.seoDescription || project.shortSummary, image: project.thumbnail?.url, author: { '@type': 'Organization', name: siteConfig.name }, datePublished: project.publishDate || project.createdAt, dateModified: project.updatedAt, keywords: project.seoKeywords?.join(', ') || project.tags?.join(', '), inLanguage: 'en-IN' };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function BreadcrumbStructuredData({ items }: { items: { name: string; item: string }[] }) {
  const data = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: item.item.startsWith('http') ? item.item : new URL(item.item, siteConfig.url).toString() })) };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
