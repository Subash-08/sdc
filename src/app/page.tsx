import { getFeaturedProjects } from '@/services/project.service';
import { getBlogs } from '@/services/blogService';
import { generateSEO } from '@/lib/seo';
import { OrganizationStructuredData } from '@/components/seo/StructuredData';
import Hero from '@/components/home/Hero';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import LatestBlogs from '@/components/home/LatestBlogs';
import { AboutIntro, BrandStatement, FinalCTA, Process, QualityCommitment, Services, WhyChooseUs } from '@/components/home/Sections';

export const revalidate = 3600;
export const metadata = generateSEO({ title: 'Construction Company in Hosur', description: 'Residential, commercial, industrial, interior and renovation services from Shree Dhurga Constructions in Hosur, Tamil Nadu.', keywords: ['construction company Hosur', 'commercial construction Hosur', 'industrial construction Tamil Nadu', 'renovation Hosur'] });

async function loadHomepageData() {
  try {
    const [projects, blogs] = await Promise.all([getFeaturedProjects(4), getBlogs({ page: 1, limit: 3, status: 'published' })]);
    return { projects, blogs: blogs.data };
  } catch (error) {
    console.error('[HOMEPAGE_DATA_ERROR]', error);
    return { projects: [], blogs: [] };
  }
}

export default async function HomePage() {
  const { projects, blogs } = await loadHomepageData();
  return <main><OrganizationStructuredData /><Hero /><AboutIntro /><Services /><FeaturedProjects projects={projects} /><WhyChooseUs /><Process /><BrandStatement /><QualityCommitment /><LatestBlogs blogs={blogs} /><FinalCTA /></main>;
}
