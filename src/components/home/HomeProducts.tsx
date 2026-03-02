import Link from 'next/link';
import { ROUTES } from '@/constants';
import { ProductCard } from '@/components/product/ProductCard';
import { getFeaturedProducts } from '@/services/product.service';

export async function HomeProducts() {
  const [bestSellers, newProducts] = await Promise.all([
    getFeaturedProducts('bestSeller'),
    getFeaturedProducts('new'),
  ]);

  return (
    <section className="mt-16" aria-labelledby="products-heading">
      <div className="flex flex-col gap-12 md:gap-16">
        <div>
          <div className="flex items-center justify-between">
            <h2 id="products-heading" className="font-display text-2xl font-bold text-gray-800 md:text-3xl">
              Sản phẩm bán chạy
            </h2>
            <Link
              href={ROUTES.products}
              className="text-sm font-medium text-brand-primary hover:underline"
            >
              Xem tất cả →
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {bestSellers.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-gray-800 md:text-3xl">
            Sản phẩm mới
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {newProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
