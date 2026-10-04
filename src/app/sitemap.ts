import { MetadataRoute } from 'next';
import { getProjects } from '@/services/project.service';
import { getAllBlogSlugs } from '@/services/blogService';
import { env } from '@/config/env';
import { services } from '@/config/services';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = env.NEXT_PUBLIC_APP_URL || 'https://yourdomain.com';

  let projects: Awaited<ReturnType<typeof getProjects>>['data'] = [];
  try {
    const projectsResponse = await getProjects({ status: 'published', limit: 1000 });
    projects = projectsResponse.data;
  } catch (error) {
    console.error('[SITEMAP_PROJECTS_ERROR]', error);
  }

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/works/${project.slug}`,
    lastModified: new Date(project.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const blogSlugs = await getAllBlogSlugs();
  const blogUrls: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/works`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...projectUrls,
    ...blogUrls,
    ...services.map((service) => ({ url: `${baseUrl}/services/${service.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 })),
  ];
}

