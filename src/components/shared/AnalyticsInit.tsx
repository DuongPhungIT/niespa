'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initAnalytics, trackGAViewPage } from '@/utils/analytics';

/**
 * Client component: khởi tạo GA, FB Pixel, GTM một lần.
 * Track page view khi pathname thay đổi (SPA).
 */
export function AnalyticsInit() {
  const pathname = usePathname();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    if (pathname) {
      trackGAViewPage(pathname);
    }
  }, [pathname]);

  return null;
}
