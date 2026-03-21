/**
 * Cấu hình site - URL gốc, tên thương hiệu, mạng xã hội.
 * Dùng cho SEO, sitemap, OpenGraph, JSON-LD.
 */
export const SITE_CONFIG = {
  name: 'NIE SPA',
  shortName: 'NieSpa',
  description:
    'Không gian chăm sóc sức khỏe và sắc đẹp cho mẹ bầu, mẹ sau sinh và bé với liệu trình thư giãn, phục hồi và chăm sóc tại nhà chuẩn mực, nhẹ nhàng và tận tâm.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://niespa.vn',
  locale: 'vi_VN',
  defaultLocale: 'vi',
  ogImage: '/images/og-default.jpg',
  twitterHandle: '@niespa_vn',
  phone: '0901 460 922',
  phoneDisplay: '0901 460 922',
  links: {
    facebook: 'https://facebook.com/niespa',
    instagram: 'https://instagram.com/niespa',
    zalo: 'https://zalo.me/0788681616',
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
