import type { Metadata, Viewport } from 'next';
import { Inter, Quicksand } from 'next/font/google';
import { DEFAULT_METADATA } from '@/utils/seo';
import { JsonLdOrganization } from '@/components/shared/JsonLd';
import { AnalyticsInit } from '@/components/shared/AnalyticsInit';
import { Header, Footer } from '@/components/layout';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-inter',
  display: 'swap',
});

const quicksand = Quicksand({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-quicksand',
  display: 'swap',
});

export const metadata: Metadata = {
  ...DEFAULT_METADATA,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FADADD',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${quicksand.variable}`}>
      <head>
        <JsonLdOrganization />
      </head>
      <body className="min-h-screen flex flex-col font-sans overflow-x-hidden">
        <AnalyticsInit />
        <Header />
        <main className="min-w-0 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
