import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { fetchProjects } from '@/actions/project.actions';
import { Plus, ArrowUpRight } from 'lucide-react';

export default async function AdminProjectsPage() {
    const projects = await fetchProjects();

    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div className="flex flex-col justify-between gap-5 border-b border-black/20 pb-7 sm:flex-row sm:items-end">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#9a4529]">Portfolio register</p>
                    <h1 className="mt-3 font-display text-4xl font-semibold tracking-[-.05em] text-[#171713] sm:text-6xl">Projects.</h1>
                    <p className="mt-2 text-sm text-stone-600">{projects.length} project{projects.length !== 1 ? 's' : ''} in the construction archive</p>
                </div>
                <Link
                    href="/admin/projects/create"
                    className="inline-flex min-h-12 shrink-0 items-center gap-2 bg-[#111210] px-5 text-xs font-bold uppercase tracking-[.1em] text-white transition-colors hover:bg-[#9a4529]"
                >
                    <Plus size={16} />
                    Create Project
                </Link>
            </div>

            {/* Projects List */}
            <div className="overflow-hidden border border-black/15 bg-[#f6f3ec]">
                {projects.length === 0 ? (
                    <div className="text-center py-16 px-6">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Plus size={20} className="text-gray-400" />
                        </div>
                        <p className="text-sm font-medium text-gray-900 mb-1">No projects yet</p>
                        <p className="text-sm text-gray-500 mb-4">Get started by creating your first project.</p>
                        <Link
                            href="/admin/projects/create"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700"
                        >
                            <Plus size={14} /> Create Project
                        </Link>
                    </div>
                ) : (
                    <ul role="list" className="divide-y divide-black/10">
                        {projects.map((project: any) => (
                            <li key={project._id} className="group transition-colors hover:bg-white">
                                <Link href={`/admin/projects/edit/${project._id}`} className="block px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-3 min-w-0">
                                            {project.thumbnail?.url ? (
                                                <Image
                                                    src={project.thumbnail.url}
                                                    alt={project.title}
                                                    width={52}
                                                    height={52}
                                                    className="h-[52px] w-[52px] shrink-0 object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center bg-stone-200 text-xs font-bold text-stone-500">
                                                    {project.title?.charAt(0)?.toUpperCase()}
                                                </div>
                                            )}
                                            <div className="min-w-0">
                                                <p className="truncate font-display text-base font-semibold tracking-[-.025em] text-gray-900 transition-colors group-hover:text-[#9a4529]">
                                                    {project.title}
                                                </p>
                                                <p className="text-xs text-gray-500 truncate mt-0.5">
                                                    {project.clientName}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex shrink-0 items-center gap-4"><span
                                            className={`inline-flex items-center border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.08em] ${
                                                project.status === 'published'
                                                    ? 'border-emerald-700/20 bg-emerald-50 text-emerald-700'
                                                    : project.status === 'archived'
                                                    ? 'border-stone-300 bg-stone-100 text-stone-600'
                                                    : 'border-amber-700/20 bg-amber-50 text-amber-700'
                                            }`}
                                        >
                                            {project.status}
                                        </span><ArrowUpRight size={17} className="hidden text-stone-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:block" /></div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
