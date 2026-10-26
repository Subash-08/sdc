import { getFeaturedProjects } from '@/services/project.service';
import { generateSEO } from '@/lib/seo';
import { OrganizationStructuredData } from '@/components/seo/StructuredData';
import Hero from '@/components/home/Hero';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import { BuyerPathways, Capabilities, FieldStatement, FinalCTA, HomeFooter, HomeIntroduction, HomeProcess, TrustPanel } from '@/components/home/Sections';

export const revalidate = 3600;
export const metadata = generateSEO({ title: 'Construction Company in Hosur', description: 'Residential, commercial, industrial, interior and renovation services from Shree Dhurga Constructions in Hosur, Tamil Nadu.', keywords: ['construction company Hosur', 'commercial construction Hosur', 'industrial construction Tamil Nadu', 'renovation Hosur'] });

async function loadHomepageData() {
  try {
    const projects = await getFeaturedProjects(4);
    return { projects };
  } catch (error) {
    console.error('[HOMEPAGE_DATA_ERROR]', error);
    return { projects: [] };
  }
}

export default async function HomePage() {
  const { projects } = await loadHomepageData();
  return <><main className="home2"><OrganizationStructuredData /><Hero /><FeaturedProjects projects={projects} /><BuyerPathways /><HomeIntroduction /><Capabilities /><HomeProcess /><FieldStatement /><TrustPanel /><FinalCTA /></main><HomeFooter /></>;
}
