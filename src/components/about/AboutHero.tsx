import Image from 'next/image';
import { IMAGES } from '@/constants';

/**
 * Hero trang Giới thiệu – ảnh bìa và tiêu đề.
 */
export function AboutHero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-br from-pastel-pink/40 via-white to-pastel-mint-light/50"
      aria-label="Giới thiệu NieSpa"
    >
      <div className="relative w-full" style={{ aspectRatio: '21/9', minHeight: 280 }}>
        <Image
          src={IMAGES.whyChoose}
          alt="Không gian chăm sóc mẹ và bé tại NieSpa"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-10 pt-16 md:pb-14">
          <div className="container-tight w-full">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/95">
              Beauty · Mom & Baby Care
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-white drop-shadow-md md:text-4xl lg:text-5xl">
              Về NieSpa
            </h1>
            <p className="mt-2 max-w-xl text-lg text-white/95 drop-shadow">
              Không gian chăm sóc toàn diện cho mẹ bầu, mẹ sau sinh và bé
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
