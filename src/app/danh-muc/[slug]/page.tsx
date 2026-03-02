import { notFound } from 'next/navigation';
import { Container } from '@/components/layout';
import { ProductCard } from '@/components/product/ProductCard';
import { getCategoryBySlug } from '@/services/category.service';
import { getProducts } from '@/services/product.service';
import { buildPageMetadata } from '@/utils/seo';
import { ROUTES } from '@/constants';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) return { title: 'Danh mục' };
  return buildPageMetadata({
    title: `${category.name} | Mẹ & Bé`,
    description: `Mua ${category.name} chính hãng tại MẸ & BÉ. ${category.productCount ?? 0} sản phẩm.`,
    path: ROUTES.category(slug),
  });
}

export default async function DanhMucPage({ params }: PageProps) {
  const { slug } = await params;
  const [category, { items }] = await Promise.all([
    getCategoryBySlug(slug),
    getProducts({ categorySlug: slug, pageSize: 24 }),
  ]);
  if (!category) notFound();

  return (
    <Container className="py-10">
      <h1 className="font-display text-3xl font-bold text-gray-800">{category.name}</h1>
      <p className="mt-2 text-gray-600">
        {category.productCount ?? items.length} sản phẩm
      </p>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
}
