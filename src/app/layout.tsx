import type { Metadata } from 'next';
import { Archivo, DM_Sans, Inter, Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/config/site';
import ScrollProgress from '@/components/layout/ScrollProgress';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo', display: 'swap' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.seo.defaultTitle, template: siteConfig.seo.titleTemplate },
  description: siteConfig.seo.defaultDescription,
  applicationName: siteConfig.name,
  icons: { icon: '/brand/sdc-logo-transparent-v2.png', apple: '/brand/sdc-logo-transparent-v2.png' },
  openGraph: { type: 'website', locale: 'en_IN', siteName: siteConfig.name, title: siteConfig.seo.defaultTitle, description: siteConfig.seo.defaultDescription },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${manrope.variable} ${archivo.variable} ${dmSans.variable} scroll-smooth`}><body className="bg-paper font-sans text-ink antialiased"><ScrollProgress /><Navbar />{children}<Footer /></body></html>;
}
