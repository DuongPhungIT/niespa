/**
 * Hero nhỏ trang Liên hệ – tiêu đề và mô tả.
 */
export function ContactHero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-pastel-pink/50 via-white to-pastel-mint-light/50 py-14 md:py-16"
      aria-label="Liên hệ NieSpa"
    >
      <div className="container-tight text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-secondary">
          Liên hệ & Đặt lịch
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-gray-800 md:text-4xl">
          Liên hệ NieSpa
        </h1>
        <p className="mt-3 max-w-xl mx-auto text-lg text-gray-600">
          Gửi tin nhắn hoặc gọi ngay – đội ngũ sẵn sàng tư vấn và đặt lịch cho mẹ & bé.
        </p>
      </div>
    </section>
  );
}
