import Link from 'next/link';
import Image from 'next/image';
import { ROUTES, IMAGES } from '@/constants';

/**
 * Hero trang chủ – Chăm sóc mẹ và bé. Ấn tượng, rõ thương hiệu.
 */
export function SpaHero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-pastel-pink/50 via-white to-pastel-mint-light/60 py-20 md:py-28"
      aria-label="Giới thiệu NieSpa"
    >
      <div className="container-tight">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-4 ring-white/50">
              <Image
                src={IMAGES.hero}
                alt="Chăm sóc mẹ và bé - NieSpa"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
          <div className="order-1 text-center lg:order-2 lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-secondary">
              Beauty · Mom & Baby Care
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-gray-800 md:text-4xl lg:text-5xl">
              NIE SPA – Chăm sóc mẹ và bé trọn vẹn
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              NieSpa là không gian chăm sóc toàn diện cho chị em phụ nữ, mẹ bầu và mẹ sau sinh với
              liệu trình chuẩn Y khoa, liệu pháp massage bầu – sau sinh – thông tắc tia sữa và tắm &
              massage bé an toàn, nhẹ nhàng.
            </p>
            <p className="mt-4 text-gray-600">
              Trên hành trình phụng sự từ tâm, NieSpa mong muốn được chăm sóc và lan tỏa những điều
              tốt đẹp nhất đến mẹ & bé; là nơi mẹ có thể trút bỏ mệt mỏi, được lắng nghe và được nâng
              niu bằng cả trái tim.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                href={ROUTES.contact}
                className="inline-flex rounded-full bg-brand-primary px-8 py-3.5 font-semibold text-white shadow-lg transition hover:bg-brand-primary/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
              >
                Tìm hiểu thêm
              </Link>
              <Link
                href="tel:0901460922"
                className="inline-flex rounded-full border-2 border-brand-secondary bg-white px-8 py-3.5 font-semibold text-brand-secondary transition hover:bg-pastel-mint-light"
              >
                Gọi ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
