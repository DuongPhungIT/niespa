import Link from 'next/link';
import { ROUTES } from '@/constants';

/**
 * Dải nhỏ trên trang chủ: gợi ý mua sắm sản phẩm Mẹ & Bé.
 */
export function HomeShopStrip() {
  return (
    <section
      className="border-y border-pastel-mint/50 bg-white py-12"
      aria-labelledby="shop-strip-heading"
    >
      <div className="container-tight flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <h2 id="shop-strip-heading" className="font-display text-xl font-bold text-gray-800">
            Mua sắm đồ dùng Mẹ & Bé
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Sữa bột, tã bỉm, đồ chơi, thời trang bà bầu – giao hàng nhanh toàn quốc.
          </p>
        </div>
        <Link
          href={ROUTES.products}
          className="shrink-0 rounded-full bg-pastel-mint px-6 py-3 font-semibold text-gray-800 transition hover:bg-pastel-mint-dark hover:text-white"
        >
          Xem sản phẩm →
        </Link>
      </div>
    </section>
  );
}
