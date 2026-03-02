import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/site';

/**
 * Robots.txt - cho phép crawler index toàn site.
 * Disallow chỉ khi cần (ví dụ /api/, /(auth)/).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    host: SITE_CONFIG.url,
  };
}
