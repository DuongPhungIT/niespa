import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/site';
import { getProducts } from '@/services/product.service';
import { getPosts } from '@/services/blog.service';
import { getCategories } from '@/services/category.service';
import { ROUTES } from '@/constants';

/**
 * Sitemap.xml tự động - Next.js 15.
 * Bao gồm: trang tĩnh + sản phẩm + bài viết + danh mục.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}${ROUTES.products}`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}${ROUTES.spa}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}${ROUTES.blog}`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}${ROUTES.about}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}${ROUTES.contact}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];

  const [{ items: products }, { items: posts }, categories] = await Promise.all([
    getProducts({ pageSize: 500 }),
    getPosts({ pageSize: 100 }),
    getCategories(),
  ]);

  const productUrls: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${baseUrl}${ROUTES.productDetail(p.slug)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const postUrls: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${baseUrl}${ROUTES.blogDetail(p.slug)}`,
    lastModified: new Date(p.updatedAt || p.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const categoryUrls: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${baseUrl}${ROUTES.category(c.slug)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryUrls, ...productUrls, ...postUrls];
}
