/**
 * Đường dẫn route - single source of truth.
 * Dùng cho Link, redirect, sitemap.
 */
export const ROUTES = {
  home: '/',
  products: '/san-pham',
  productDetail: (slug: string) => `/san-pham/${slug}`,
  category: (slug: string) => `/danh-muc/${slug}`,
  blog: '/bai-viet',
  blogDetail: (slug: string) => `/bai-viet/${slug}`,
  spa: '/spa-me-va-be',
  about: '/gioi-thieu',
  contact: '/lien-he',
} as const;
