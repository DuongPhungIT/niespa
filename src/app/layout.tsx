import type { Metadata, Viewport } from 'next';
import { DEFAULT_METADATA } from '@/utils/seo';
import { JsonLdOrganization } from '@/components/shared/JsonLd';
import { AnalyticsInit } from '@/components/shared/AnalyticsInit';
import { Header, Footer } from '@/components/layout';
import { BookingModal } from '@/components/booking';
import '@/styles/globals.css';

export const metadata: Metadata = {
  ...DEFAULT_METADATA,
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#253126',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <JsonLdOrganization />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-hidden font-sans">
        <AnalyticsInit />
        <BookingModal />
        <Header />
        <main className="min-w-0 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
