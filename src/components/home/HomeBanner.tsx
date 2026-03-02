import Link from 'next/link';
import { ROUTES } from '@/constants';

export function HomeBanner() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-r from-pastel-pink via-pastel-pink-light to-pastel-mint-light py-16 md:py-24"
      aria-label="Banner chào mừng"
    >
      <div className="container-tight flex flex-col items-center text-center">
        <h1 className="font-display text-3xl font-bold tracking-tight text-gray-800 md:text-4xl lg:text-5xl">
          Đồ dùng Mẹ & Bé
          <br />
          <span className="text-brand-primary">Chất lượng - An toàn - Giá tốt</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Sữa bột, tã bỉm, đồ chơi và thời trang cho mẹ và bé. Giao hàng nhanh, tư vấn tận tâm.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href={ROUTES.products}
            className="rounded-full bg-brand-primary px-8 py-3 font-medium text-white shadow-lg transition hover:bg-brand-primary/90 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
          >
            Xem sản phẩm
          </Link>
          <Link
            href={ROUTES.blog}
            className="rounded-full border-2 border-brand-secondary bg-white px-8 py-3 font-medium text-brand-secondary transition hover:bg-pastel-mint-light"
          >
            Đọc blog
          </Link>
        </div>
      </div>
    </section>
  );
}
