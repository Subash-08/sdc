import { getProjectBySlug, getRelatedProjects } from '@/lib/data/project.queries';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import Container from '@/components/layout/Container';
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import CaseStudyGallery from '@/components/case-study/CaseStudyGallery';
import CaseStudyProcess from '@/components/case-study/CaseStudyProcess';
import CaseStudyMetrics from '@/components/case-study/CaseStudyMetrics';
import CaseStudyTechStack from '@/components/case-study/CaseStudyTechStack';
import CaseStudyTestimonial from '@/components/case-study/CaseStudyTestimonial';
import WorkCard from '@/components/works/WorkCard';
import ProjectStructuredData from '@/components/seo/ProjectStructuredData';
import CaseStudyStructuredData from '@/components/seo/CaseStudyStructuredData';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export const revalidate = 60; // ISR

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);
    if (!project) return { title: 'Project Not Found' };

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    return {
        title: project.seoTitle || `${project.title} | Portfolio`,
        description: project.seoDescription || project.description || project.shortSummary,
        keywords: project.tags?.join(', '),
        
        openGraph: {
            title: project.seoTitle || project.title,
            description: project.seoDescription || project.description || project.shortSummary,
            url: `/works/${project.slug}`,
            siteName: siteConfig.name,
            images: [
                {
                    url: project.ogImage?.url || project.coverImage?.url || '/default-og.jpg',
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
                ...(project.galleryImages?.slice(0, 3).map((img: any) => ({
                    url: img.url,
                    width: 1200,
                    height: 630,
                    alt: img.alt || project.title,
                })) || []),
            ],
            locale: 'en_US',
            type: 'article',
            publishedTime: project.publishedAt ? new Date(project.publishedAt).toISOString() : undefined,
            modifiedTime: project.updatedAt ? new Date(project.updatedAt).toISOString() : undefined,
            tags: project.tags,
        },
        
        twitter: {
            card: 'summary_large_image',
            title: project.seoTitle || project.title,
            description: project.seoDescription || project.description || project.shortSummary,
            images: [project.ogImage?.url || project.coverImage?.url || '/default-og.jpg'],
            creator: siteConfig.seo.twitterHandle,
        },
        
        alternates: {
            canonical: project.canonicalUrl || `/works/${project.slug}`,
        },
        
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const relatedProjects = await getRelatedProjects(project._id as string, typeof project.categoryId === 'string' ? project.categoryId : (project.categoryId as any)?._id);

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    return (
        <>
            <ProjectStructuredData project={project} />
            {project.problemStatement && (
                <CaseStudyStructuredData
                    project={project}
                    challenge={project.problemStatement}
                    solution={project.solution?.map((s: any) => typeof s === 'string' ? s : s.value).join('. ')}
                    results={project.metrics}
                />
            )}
            <article className="bg-paper pb-32">
                {/* 1. Hero Section */}
                <CaseStudyHero project={project} />

            {/* 2. Overview & Problem */}
            <section className="py-24 lg:py-32 relative">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-7 space-y-12">
                            <div>
                                <h2 className="eyebrow mb-6 text-accent">Overview</h2>
                                <h3 className="mb-8 font-display text-3xl font-semibold leading-tight tracking-[-.05em] text-ink md:text-5xl">
                                    {project.shortSummary}
                                </h3>
                                <div className="prose prose-lg text-gray-600 leading-relaxed max-w-none">
                                    {project.description}
                                </div>
                            </div>

                            {project.problemStatement && (
                                <div className="border-l-2 border-accent bg-stone-100 p-10">
                                    <h4 className="mb-4 flex items-center text-xl font-bold text-ink">
                                        <span className="mr-3 grid h-8 w-8 place-items-center border border-accent text-sm text-accent">!</span>
                                        The Challenge
                                    </h4>
                                    <p className="text-gray-700 text-lg leading-relaxed">{project.problemStatement}</p>
                                </div>
                            )}

                            {project.projectUrl && (
                                <div className="pt-4">
                                    <a
                                        href={project.projectUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-all hover:scale-105 shadow-lg shadow-gray-900/20"
                                    >
                                        Visit Live Site <ExternalLink size={20} className="ml-3" />
                                    </a>
                                </div>
                            )}
                        </div>

                        <div className="lg:col-span-4 lg:col-start-9 space-y-12">
                            <div className="border-t border-ink/20 bg-stone-100 p-8">
                                <h4 className="font-bold text-gray-900 mb-6 text-xl">Technologies</h4>
                                <CaseStudyTechStack techStack={project.techStack} />
                            </div>

                            {project.objectives && (
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-4 text-xl border-b border-gray-100 pb-2">Objectives</h4>
                                    <p className="text-gray-600 leading-relaxed">{project.objectives}</p>
                                </div>
                            )}
                            {project.targetAudience && (
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-4 text-xl border-b border-gray-100 pb-2">Platform & Audience</h4>
                                    <p className="text-gray-600 leading-relaxed">{project.targetAudience}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </section>

            {/* 3. Gallery (Full Width Impact) */}
            {project.galleryImages && project.galleryImages.length > 0 && (
                <section className="bg-stone-100 py-20">
                    <Container>
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="eyebrow mb-3 text-accent">Gallery</h2>
                            <h3 className="font-display text-3xl font-semibold tracking-[-.04em] text-ink md:text-4xl">Visual highlights</h3>
                        </div>
                        <CaseStudyGallery images={project.galleryImages} />
                    </Container>
                </section>
            )}

            {/* 4. Process */}
            {project.processSteps && project.processSteps.length > 0 && (
                <section className="py-24 lg:py-32 overflow-hidden">
                    <Container>
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="eyebrow mb-3 text-accent">Process</h2>
                            <h3 className="font-display text-4xl font-semibold tracking-[-.05em] text-ink md:text-5xl">How the work came together</h3>
                        </div>
                        <CaseStudyProcess steps={project.processSteps} />
                    </Container>
                </section>
            )}

            {/* 5. Results & Validation (Dark Theme) */}
            <section className="relative overflow-hidden bg-ink py-24 text-white">
                {/* Abstract bg shapes */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2" />
                </div>

                <Container className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="eyebrow mb-3 text-clay-300">Results</h2>
                            <h3 className="mb-8 font-display text-4xl font-semibold leading-tight tracking-[-.05em] md:text-5xl">Impact & outcomes</h3>
                            <p className="text-gray-300 text-xl leading-relaxed mb-12 font-light">
                                The completed project brings the brief, construction decisions and final delivery into one coherent result.
                            </p>
                            <CaseStudyMetrics metrics={project.metrics} />
                        </div>
                        <div>
                            <CaseStudyTestimonial testimonial={project.testimonial} />
                        </div>
                    </div>
                </Container>
            </section>

            {/* 6. Solution List */}
            {project.solution && project.solution.length > 0 && (
                <section className="py-24">
                    <Container>
                        <div className="border-y border-ink/20 bg-stone-100 p-12">
                            <div className="text-center max-w-3xl mx-auto mb-12">
                                <h3 className="font-display text-3xl font-semibold tracking-[-.04em] text-ink">Key solutions</h3>
                                <p className="mt-2 text-stone-600">The project decisions that responded to the brief.</p>
                            </div>

                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                {project.solution.map((item: any, idx: number) => (
                                    <li key={idx} className="flex items-start bg-white p-5 rounded-xl shadow-sm border border-emerald-100/50">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold mr-4 mt-0.5">✓</span>
                                        <span className="text-gray-700 font-medium">{typeof item === 'string' ? item : item.value || item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Container>
                </section>
            )}

            {/* 7. Next Projects */}
            <section className="py-24 border-t border-gray-100">
                <Container>
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">Selected Work</h2>
                            <p className="text-gray-500 mt-2">More projects you might find interesting</p>
                        </div>

                        <Link href="/works" className="group flex items-center text-gray-900 font-bold hover:text-blue-600 transition-colors">
                            View All <ArrowLeft size={18} className="ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {relatedProjects.map((proj: any) => (
                            <WorkCard key={proj._id as string} project={proj} />
                        ))}
                    </div>
                </Container>
            </section>
        </article>
        </>
    );
}
