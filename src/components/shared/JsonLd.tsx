/**
 * Component inject JSON-LD schema vào head.
 * Next.js 15 có thể dùng trong layout hoặc page.
 */
import type { Product, BlogPost } from '@/types';
import {
  getOrganizationSchema,
  getProductSchema,
  getArticleSchema,
} from '@/utils/seo';

interface JsonLdOrganizationProps {
  data?: object;
}

export function JsonLdOrganization({ data }: JsonLdOrganizationProps) {
  const schema = data ?? getOrganizationSchema();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface JsonLdProductProps {
  product: Product;
}

export function JsonLdProduct({ product }: JsonLdProductProps) {
  const schema = getProductSchema(product);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface JsonLdArticleProps {
  post: BlogPost;
}

export function JsonLdArticle({ post }: JsonLdArticleProps) {
  const schema = getArticleSchema(post);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
