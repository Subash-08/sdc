import React from 'react';
import Sidebar from '@/components/admin/Sidebar';
import ErrorBoundary from '@/components/ErrorBoundary';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Admin Dashboard',
    description: 'Manage construction projects and articles',
};

// Admin pages depend on the authenticated user and live MongoDB data.
export const dynamic = 'force-dynamic';

export default function AdminRootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="admin-shell flex h-screen bg-[#e8e3d8] text-[#171713]">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">
                <div className="admin-content mx-auto max-w-screen-2xl p-4 sm:p-6 lg:p-10">
                    <ErrorBoundary>
                        {children}
                    </ErrorBoundary>
                </div>
            </main>
        </div>
    );
}
