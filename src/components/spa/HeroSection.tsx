'use client';

import { useEffect, useState } from 'react';
import { BookingButton } from '@/components/booking';
import { SITE_CONFIG } from '@/config/site';
import { cn } from '@/lib/cn';
import { HeroFlipPage } from './HeroFlipPage';
import { heroSlides, introStats } from './mommyData';

const statEyebrows = ['Kinh nghiệm', 'Khách hàng', 'Chi nhánh'];

export function HeroSection() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [previewSlideIndex, setPreviewSlideIndex] = useState(heroSlides.length > 1 ? 1 : 0);
  const [isPageTurning, setIsPageTurning] = useState(false);

  useEffect(() => {
    if (heroSlides.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setIsPageTurning((currentValue) => {
        if (currentValue) {
          return currentValue;
        }

        return true;
      });
    }, 5200);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const activeSlide = heroSlides[activeSlideIndex];
  const nextSlide = heroSlides[previewSlideIndex];

  const handlePageTurnComplete = () => {
    if (!isPageTurning) {
      return;
    }

    setActiveSlideIndex(previewSlideIndex);
    setPreviewSlideIndex((previewSlideIndex + 1) % heroSlides.length);
    setIsPageTurning(false);
  };

  return (
    <section className="screen-section relative overflow-hidden border-b border-[#e2eef7] bg-[linear-gradient(180deg,#f8fcff_0%,#eef7ff_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(120,198,227,0.08),_transparent_30%),radial-gradient(circle_at_82%_20%,_rgba(183,217,242,0.16),_transparent_22%)]" />
      <div className="container-tight relative">
        <div className="grid gap-10 xl:grid-cols-[0.94fr_1.06fr] xl:items-center">
          <div className="max-w-[660px]">
            <div className="type-hero hero-title mt-6 max-w-[620px] text-[clamp(2rem,2.2vw,5rem)] text-[#234e70]">
              Chạm vào sự dịu dàng
            </div>

            <div className="type-hero hero-title mt-3 bg-[linear-gradient(90deg,#67b9d9_0%,#8ed7ef_42%,#5fa8cf_100%)] py-2 bg-clip-text text-[clamp(2.4rem,2.6vw,6rem)] text-transparent">
              trong hành trình làm mẹ
            </div>

            <p className="type-body-lg text-balance-justify mt-6 max-w-[560px]">
              Không gian chăm sóc dành cho mẹ bầu, mẹ sau sinh và bé với liệu trình thư giãn, phục
              hồi và đồng hành nhẹ nhàng trong từng giai đoạn.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <BookingButton
                source="hero"
                className="type-button rounded-full bg-[#78c6e3] px-7 py-3.5 text-white shadow-[0_12px_28px_rgba(120,198,227,0.24)] transition hover:bg-[#5fb7d8]"
              >
                Đặt lịch ngay
              </BookingButton>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="type-button rounded-full border border-[#d6e8f6] bg-white px-7 py-3.5 text-[#234e70] shadow-[0_10px_24px_rgba(35,78,112,0.06)] transition hover:border-[#78c6e3] hover:bg-[#f2f9ff]"
              >
                Tư vấn {SITE_CONFIG.phoneDisplay}
              </a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
              {introStats.map((item, index) => (
                <article
                  key={item.label}
                  className="group relative overflow-hidden rounded-[26px] border border-[#deecf6] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(248,252,255,0.96)_100%)] px-6 py-5 shadow-[0_14px_30px_rgba(120,198,227,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(120,198,227,0.12)]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(120,198,227,0)_0%,rgba(120,198,227,0.55)_50%,rgba(120,198,227,0)_100%)]" />
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#89bfd9]">
                    {statEyebrows[index]}
                  </p>
                  <div className="mt-3 flex items-end gap-3">
                    <div className="type-display-card leading-none text-[#2f6487]">
                      {item.value}
                    </div>
                    <div className="mb-2 h-px flex-1 bg-[linear-gradient(90deg,#cceaf6_0%,rgba(204,234,246,0)_100%)]" />
                  </div>
                  <p className="mt-4 max-w-[22ch] text-[0.98rem] leading-7 text-[#678095]">
                    {item.label}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="xl:pl-8">
            <div className="flipbook-scene">
              <div className="flipbook-stack">
                <HeroFlipPage
                  slide={nextSlide}
                  className={cn('flipbook-page--back', isPageTurning && 'is-revealing')}
                />
                <HeroFlipPage
                  slide={activeSlide}
                  priority
                  className={cn('flipbook-page--front', isPageTurning && 'is-turning')}
                  onAnimationEnd={handlePageTurnComplete}
                />
                <div className="pointer-events-none absolute inset-y-8 left-0 z-30 w-10 rounded-r-full bg-[linear-gradient(90deg,rgba(18,58,84,0.24)_0%,rgba(18,58,84,0.08)_44%,rgba(18,58,84,0)_100%)] blur-[1px]" />
                <div className="absolute bottom-6 right-6 z-30 rounded-full border border-white/30 bg-white/12 px-4 py-2 text-[0.78rem] font-semibold tracking-[0.18em] text-white/90 backdrop-blur-md">
                  0{activeSlideIndex + 1} / 0{heroSlides.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
