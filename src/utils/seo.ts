import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';
import type { Product, BlogPost } from '@/types';

export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} - ${SITE_CONFIG.shortName} | Đồ dùng mẹ và bé`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'mẹ và bé',
    'đồ dùng trẻ em',
    'sữa bột',
    'tã bỉm',
    'đồ chơi trẻ em',
    'thời trang bà bầu',
    'chăm sóc mẹ và bé',
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630, alt: SITE_CONFIG.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    creator: SITE_CONFIG.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Thêm khi có: google: 'xxx', yandex: 'xxx'
  },
};

/**
 * Tạo metadata cho trang (dùng trong generateMetadata hoặc export metadata).
 */
export function buildPageMetadata({
  title,
  description,
  path = '',
  image,
  noIndex = false,
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const url = path ? `${SITE_CONFIG.url}${path}` : SITE_CONFIG.url;
  const ogImage = image ? (image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`) : `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`;

  return {
    title,
    description: description || SITE_CONFIG.description,
    openGraph: {
      title,
      description: description || SITE_CONFIG.description,
      url,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: description || SITE_CONFIG.description,
    },
    alternates: { canonical: url },
    ...(noIndex && { robots: { index: false, follow: true } }),
  };
}

/**
 * Schema Organization - JSON-LD cho trang chủ / layout.
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/icons/logo.png`,
    description: SITE_CONFIG.description,
    sameAs: [
      SITE_CONFIG.links.facebook,
      SITE_CONFIG.links.instagram,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: `${SITE_CONFIG.url}/lien-he`,
    },
  };
}

/**
 * Schema Product - JSON-LD cho trang chi tiết sản phẩm.
 */
export function getProductSchema(product: Product) {
  const price = product.salePrice ?? product.price;
  const imageUrl = product.image.startsWith('http') ? product.image : `${SITE_CONFIG.url}${product.image}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription || product.description || product.name,
    image: product.images?.length ? product.images.map((img) => (img.startsWith('http') ? img : `${SITE_CONFIG.url}${img}`)) : [imageUrl],
    sku: product.id,
    brand: product.brand ? { '@type': 'Brand', name: product.brand } : undefined,
    offers: {
      '@type': 'Offer',
      url: `${SITE_CONFIG.url}/san-pham/${product.slug}`,
      priceCurrency: 'VND',
      price,
      availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
    },
    ...(product.rating != null && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.rating,
        reviewCount: product.reviewCount ?? 0,
      },
    }),
  };
}

/**
 * Schema Article - JSON-LD cho bài viết blog.
 */
export function getArticleSchema(post: BlogPost) {
  const imageUrl = post.image.startsWith('http') ? post.image : `${SITE_CONFIG.url}${post.image}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: post.author ? { '@type': 'Person', name: post.author } : { '@type': 'Organization', name: SITE_CONFIG.name },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: { '@type': 'ImageObject', url: `${SITE_CONFIG.url}/icons/logo.png` },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/bai-viet/${post.slug}`,
    },
  };
}
