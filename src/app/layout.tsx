import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NextTopLoader from 'nextjs-toploader';
import AuthProvider from '@/components/providers/AuthProvider';
import { siteConfig } from '@/config/site';
import ScrollProgress from '@/components/layout/ScrollProgress';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.seo.defaultTitle, template: siteConfig.seo.titleTemplate },
  description: siteConfig.seo.defaultDescription,
  applicationName: siteConfig.name,
  icons: { icon: '/favicon.ico' },
  openGraph: { type: 'website', locale: 'en_IN', siteName: siteConfig.name, title: siteConfig.seo.defaultTitle, description: siteConfig.seo.defaultDescription },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${manrope.variable} scroll-smooth`}><body className="bg-paper font-sans text-ink antialiased"><AuthProvider><NextTopLoader color="#9a4529" showSpinner={false} /><ScrollProgress /><Navbar />{children}<Footer /></AuthProvider></body></html>;
}
