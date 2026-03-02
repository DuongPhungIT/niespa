import { Suspense } from 'react';
import { Container } from '@/components/layout';
import { ProductCard } from '@/components/product/ProductCard';
import { ProductListSkeleton } from '@/components/ui/ProductListSkeleton';
import { getProducts } from '@/services/product.service';
import { buildPageMetadata } from '@/utils/seo';
import { ROUTES } from '@/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = buildPageMetadata({
  title: 'Sản phẩm Mẹ & Bé',
  description:
    'Danh sách sản phẩm đồ dùng mẹ và bé: sữa bột, tã bỉm, đồ chơi, thời trang bà bầu. Chính hãng, giá tốt.',
  path: ROUTES.products,
});

async function ProductList() {
  const { items } = await getProducts({ page: 1, pageSize: 12 });
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default function SanPhamPage() {
  return (
    <Container className="py-10">
      <h1 className="font-display text-3xl font-bold text-gray-800">Sản phẩm</h1>
      <p className="mt-2 text-gray-600">
        Đồ dùng mẹ và bé chính hãng, an toàn. Filter theo danh mục sẽ bổ sung ở bước sau.
      </p>
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList />
      </Suspense>
    </Container>
  );
}
