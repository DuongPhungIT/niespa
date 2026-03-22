import Link from 'next/link';
import { ROUTES } from '@/constants';
import { BookingButton } from '@/components/booking';

export function HomeCTA() {
  return (
    <section
      className="bg-gradient-to-r from-brand-primary to-brand-secondary py-14 text-white"
      aria-label="Kêu gọi hành động"
    >
      <div className="container-tight text-center">
        <h2 className="font-display text-2xl font-bold md:text-3xl">
          Đăng ký nhận ưu đãi & tin tức
        </h2>
        <p className="mt-2 text-white/90">
          Nhận ngay mã giảm giá và các bài viết chăm sóc mẹ và bé.
        </p>
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <BookingButton
            source="home-cta"
            className="rounded-full bg-white px-8 py-3 font-medium text-brand-primary transition hover:bg-pastel-cream"
          >
            Liên hệ tư vấn
          </BookingButton>
          <Link
            href={ROUTES.products}
            className="rounded-full border-2 border-white px-8 py-3 font-medium transition hover:bg-white/10"
          >
            Mua sắm ngay
          </Link>
        </div>
      </div>
    </section>
  );
}
