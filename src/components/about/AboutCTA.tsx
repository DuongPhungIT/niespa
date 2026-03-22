import Link from 'next/link';
import { ROUTES } from '@/constants';
import { BookingButton } from '@/components/booking';

/**
 * CTA trang Giới thiệu – Liên hệ / Đặt lịch.
 */
export function AboutCTA() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-r from-brand-primary via-brand-primary to-brand-secondary py-14 text-white shadow-xl"
      aria-label="Liên hệ NieSpa"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center, rgba(255,255,255,0.12)_0%, transparent_70%)]" />
      <div className="container-tight relative text-center">
        <h2 className="font-display text-2xl font-bold md:text-3xl">
          Sẵn sàng đồng hành cùng mẹ & bé
        </h2>
        <p className="mt-3 text-lg text-white/95">
          Hotline: <strong className="text-white">0901 460 922</strong> (Miss Nhiên) · 8h – 20h hàng ngày
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="tel:0901460922"
            className="rounded-full bg-white px-8 py-3.5 font-semibold text-brand-primary shadow-lg transition hover:bg-pastel-cream hover:shadow-xl"
          >
            Gọi ngay
          </a>
          <BookingButton
            source="about-cta"
            className="rounded-full border-2 border-white bg-white/5 px-8 py-3.5 font-semibold backdrop-blur-sm transition hover:bg-white/15"
          >
            Liên hệ / Đặt lịch
          </BookingButton>
          <Link
            href={ROUTES.spa}
            className="rounded-full border-2 border-white/80 bg-transparent px-8 py-3.5 font-semibold transition hover:bg-white/10"
          >
            Xem dịch vụ Spa
          </Link>
        </div>
      </div>
    </section>
  );
}
