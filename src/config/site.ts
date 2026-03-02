/**
 * Cấu hình site - URL gốc, tên thương hiệu, mạng xã hội.
 * Dùng cho SEO, sitemap, OpenGraph, JSON-LD.
 */
export const SITE_CONFIG = {
  name: 'MẸ & BÉ',
  shortName: 'Mom & Son',
  description:
    'Shop Mẹ & Bé - Đồ dùng mẹ và bé chính hãng, an toàn. Sữa, tã, đồ chơi, thời trang bà bầu và trẻ em.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://momandson.vn',
  locale: 'vi_VN',
  defaultLocale: 'vi',
  ogImage: '/images/og-default.jpg',
  twitterHandle: '@momandson_vn',
  phone: '0901460922',
  phoneDisplay: '0901 460 922 (Miss Nhiên)',
  links: {
    facebook: 'https://facebook.com/momandson',
    instagram: 'https://instagram.com/momandson',
    zalo: 'https://zalo.me/0901460922',
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
