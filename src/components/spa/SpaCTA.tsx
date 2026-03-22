import { BookingButton } from '@/components/booking';

/**
 * CTA đặt lịch / liên hệ cuối trang Spa.
 */
export function SpaCTA() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-r from-brand-primary via-brand-primary to-brand-secondary py-16 text-white shadow-2xl"
      aria-label="Đặt lịch tư vấn"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center, rgba(255,255,255,0.12)_0%, transparent_70%)]" />
      <div className="container-tight relative text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Đặt lịch hoặc tư vấn ngay
        </h2>
        <p className="mt-3 text-lg text-white/95">
          Hotline: <strong className="text-white">0901 460 922</strong> (Miss Nhiên) · Giờ phục vụ: 8h – 20h hàng ngày
        </p>
        <p className="mt-1 text-sm text-white/85">
          Home Spa (chăm sóc tại nhà): 7h30 – 18h30
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="tel:0901460922"
            className="rounded-full bg-white px-10 py-4 font-semibold text-brand-primary shadow-lg transition hover:bg-pastel-cream hover:shadow-xl"
          >
            Gọi ngay
          </a>
          <BookingButton
            source="spa-cta"
            className="rounded-full border-2 border-white bg-white/5 px-10 py-4 font-semibold backdrop-blur-sm transition hover:bg-white/15"
          >
            Liên hệ
          </BookingButton>
        </div>
      </div>
    </section>
  );
}
