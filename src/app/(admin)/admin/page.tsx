import React from 'react';
import Project from '@/models/Project';
import Category from '@/models/Category';
import dbConnect from '@/lib/db';
import Link from 'next/link';
import { FolderKanban, CheckCircle2, FileEdit, FolderTree, Plus, ArrowRight } from 'lucide-react';

export default async function AdminDashboardPage() {
    await dbConnect();

    const projectCount = await Project.countDocuments();
    const categoryCount = await Category.countDocuments();
    const publishedProjects = await Project.countDocuments({ status: 'published' });
    const draftProjects = await Project.countDocuments({ status: 'draft' });

    const stats = [
        {
            label: 'Total Projects',
            value: projectCount,
            icon: FolderKanban,
            color: 'text-[#9a4529]',
            bg: 'bg-[#efe2da]',
            border: 'border-[#d8a48e]',
        },
        {
            label: 'Published',
            value: publishedProjects,
            icon: CheckCircle2,
            color: 'text-emerald-600',
            bg: 'bg-emerald-50',
            border: 'border-emerald-100',
        },
        {
            label: 'Drafts',
            value: draftProjects,
            icon: FileEdit,
            color: 'text-amber-600',
            bg: 'bg-amber-50',
            border: 'border-amber-100',
        },
        {
            label: 'Categories',
            value: categoryCount,
            icon: FolderTree,
            color: 'text-violet-600',
            bg: 'bg-violet-50',
            border: 'border-violet-100',
        },
    ];

    const quickActions = [
        {
            label: 'Create New Project',
            href: '/admin/projects/create',
            description: 'Add a new portfolio project',
        },
        {
            label: 'Manage Projects',
            href: '/admin/projects',
            description: 'View and edit all projects',
        },
        {
            label: 'Create Category',
            href: '/admin/categories/create',
            description: 'Add a new project category',
        },
        {
            label: 'Portfolio Layout',
            href: '/admin/portfolio-layout',
            description: 'Configure the portfolio grid',
        },
    ];

    return (
        <div className="space-y-10">
            {/* Page Header */}
            <div className="border-b border-black/20 pb-7">
                <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#9a4529]">SDC content studio</p>
                <h1 className="mt-3 font-display text-4xl font-semibold tracking-[-.05em] text-[#171713] sm:text-6xl">Project overview.</h1>
                <p className="mt-3 text-sm text-stone-600">Manage construction work, field notes and the public portfolio.</p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={stat.label}
                            className={`flex min-h-40 flex-col justify-between border ${stat.border} bg-[#f6f3ec] p-5`}
                        >
                            <div className={`${stat.bg} ${stat.color} grid h-10 w-10 place-items-center shrink-0`}>
                                <Icon size={20} />
                            </div>
                            <div className="min-w-0">
                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider truncate">
                                    {stat.label}
                                </p>
                                <p className={`mt-2 font-display text-4xl font-semibold tracking-[-.05em] ${stat.color}`}>
                                    {stat.value}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Quick Actions */}
            <div>
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Quick Actions
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {quickActions.map((action) => (
                        <Link
                            key={action.href}
                            href={action.href}
                            className="group flex min-h-24 items-center justify-between border border-black/15 bg-[#f6f3ec] p-5 transition-all duration-200 hover:border-[#9a4529] hover:bg-white"
                        >
                            <div>
                                <p className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-[#9a4529]">
                                    {action.label}
                                </p>
                                <p className="text-xs text-gray-500 mt-0.5">{action.description}</p>
                            </div>
                            <ArrowRight
                                size={16}
                                className="ml-4 shrink-0 text-gray-300 transition-all group-hover:translate-x-1 group-hover:text-[#9a4529]"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
