'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, FolderKanban, FileText, LayoutGrid, FolderTree,
  LogOut, PlusCircle, Inbox, Trash2, Tags, ChevronDown, ChevronRight, Mail, ExternalLink,
} from 'lucide-react';
import { signOut } from 'next-auth/react';
import { useState } from 'react';

const Sidebar = () => {
  const pathname = usePathname();
  const [blogExpanded, setBlogExpanded] = useState(pathname?.startsWith('/admin/blogs') ?? false);

  const topLinks = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/projects', label: 'Projects', icon: FolderKanban },
    { href: '/admin/portfolio-layout', label: 'Portfolio Layout', icon: LayoutGrid },
    { href: '/admin/categories', label: 'Project Categories', icon: FolderTree },
    { href: '/admin/newsletters', label: 'Newsletter', icon: Mail },
  ];

  const blogLinks = [
    { href: '/admin/blogs', label: 'All Posts', icon: FileText, exact: true },
    { href: '/admin/blogs/new', label: 'New Post', icon: PlusCircle, exact: false },
    { href: '/admin/blogs/review-queue', label: 'AI Review Queue', icon: Inbox, exact: false },
    { href: '/admin/blogs/trash', label: 'Trash', icon: Trash2, exact: false },
    { href: '/admin/blogs/categories', label: 'Categories', icon: Tags, exact: false },
  ];

  const isLinkActive = (href: string, exact: boolean) =>
    exact ? pathname === href : pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <aside className="flex h-full w-20 shrink-0 flex-col border-r border-white/10 bg-[#111210] text-white md:w-72">
      {/* Brand */}
      <div className="flex min-h-24 items-center gap-3 border-b border-white/10 px-4 md:px-6">
        <span className="grid h-11 w-11 shrink-0 place-items-center border border-white/50 text-[10px] font-bold tracking-[.14em]">SDC</span>
        <div className="hidden md:block"><p className="text-sm font-semibold uppercase leading-tight tracking-[-.02em]">Shree Dhurga<br />Constructions</p><p className="mt-1 text-[9px] font-bold uppercase tracking-[.18em] text-[#d8a48e]">Content studio</p></div>
      </div>

      {/* Navigation */}
      <nav className="no-scrollbar flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {topLinks.map((link) => {
          const Icon = link.icon;
          const active = link.href === '/admin' ? pathname === '/admin' : pathname === link.href || pathname?.startsWith(`${link.href}/`);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex min-h-11 items-center gap-3 border px-3 text-sm font-medium transition-all duration-200 ${
                active ? 'border-[#d8a48e] bg-[#9a4529] text-white' : 'border-transparent text-stone-400 hover:border-white/15 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Icon size={17} className="shrink-0" />
              <span className="hidden truncate md:block">{link.label}</span>
            </Link>
          );
        })}

        {/* Blogs Collapsible Group */}
        <div>
          <button
            onClick={() => setBlogExpanded((p) => !p)}
            className={`flex min-h-11 w-full items-center justify-between gap-3 border px-3 text-sm font-medium transition-all duration-200 ${
              pathname?.startsWith('/admin/blogs')
                ? 'border-[#d8a48e] bg-white/10 text-white'
                : 'border-transparent text-stone-400 hover:border-white/15 hover:bg-white/5 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <FileText size={17} className="shrink-0" />
              <span className="hidden md:block">Journal</span>
            </div>
            <span className="hidden md:block">{blogExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}</span>
          </button>

          {blogExpanded && (
            <div className="ml-5 mt-2 hidden space-y-1 border-l border-white/15 pl-3 md:block">
              {blogLinks.map((link) => {
                const Icon = link.icon;
                const active = isLinkActive(link.href, link.exact);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-2.5 px-3 py-2 text-sm font-medium transition-all duration-150 ${
                      active ? 'bg-[#9a4529] text-white' : 'text-stone-500 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Icon size={15} className="shrink-0" />
                    <span className="truncate">{link.label}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* Logout */}
      <div className="space-y-1 border-t border-white/10 px-3 pb-14 pt-4 md:pb-8">
        <Link href="/" className="flex min-h-11 w-full items-center gap-3 border border-transparent px-3 text-sm font-medium text-stone-400 transition hover:border-white/15 hover:text-white"><ExternalLink size={17} /><span className="hidden md:block">View website</span></Link>
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="flex min-h-11 w-full items-center gap-3 border border-transparent px-3 text-sm font-medium text-[#d8a48e] transition hover:border-[#9a4529] hover:bg-[#9a4529]/20"
        >
          <LogOut size={17} className="shrink-0" />
          <span className="hidden md:block">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
