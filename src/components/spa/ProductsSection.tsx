'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { BookingButton } from '@/components/booking';
import { SectionHeading } from './SectionHeading';
import { featuredProducts } from './mommyData';

export function ProductsSection() {
  const productCarouselRef = useRef<HTMLDivElement | null>(null);
  const [isProductCarouselPaused, setIsProductCarouselPaused] = useState(false);

  const scrollProducts = (direction: 'prev' | 'next') => {
    if (!productCarouselRef.current) {
      return;
    }

    const track = productCarouselRef.current;
    const card = track.querySelector<HTMLElement>('[data-product-card]');
    const scrollAmount = card ? card.offsetWidth + 24 : 320;

    track.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!productCarouselRef.current || isProductCarouselPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      const track = productCarouselRef.current;

      if (!track) {
        return;
      }

      const card = track.querySelector<HTMLElement>('[data-product-card]');
      const scrollAmount = card ? card.offsetWidth + 24 : 320;
      const isAtEnd =
        track.scrollLeft + track.clientWidth >= track.scrollWidth - scrollAmount / 2;

      if (isAtEnd) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
        return;
      }

      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }, 3600);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isProductCarouselPaused]);

  return (
    <section id="san-pham" className="screen-section border-y border-[#e2eef7] bg-[#f4fbff]">
      <div className="container-tight">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Sản phẩm tiêu biểu"
            title="Những sản phẩm chăm sóc được nhiều mẹ yêu thích."
            description="Các dòng sản phẩm hỗ trợ làm sạch, phục hồi da và chăm sóc tóc phù hợp cho giai đoạn mang thai và sau sinh."
          />
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollProducts('prev')}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#dbeaf6] bg-white text-[#5f9fbe] shadow-[0_12px_28px_rgba(120,198,227,0.08)] transition hover:border-[#9bd5ec] hover:text-[#2b567d]"
              aria-label="Xem sản phẩm trước"
            >
              &#8592;
            </button>
            <button
              type="button"
              onClick={() => scrollProducts('next')}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#dbeaf6] bg-white text-[#5f9fbe] shadow-[0_12px_28px_rgba(120,198,227,0.08)] transition hover:border-[#9bd5ec] hover:text-[#2b567d]"
              aria-label="Xem sản phẩm tiếp"
            >
              &#8594;
            </button>
          </div>
        </div>
        <div
          ref={productCarouselRef}
          onMouseEnter={() => setIsProductCarouselPaused(true)}
          onMouseLeave={() => setIsProductCarouselPaused(false)}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {featuredProducts.map((product) => (
            <article
              key={product.name}
              data-product-card
              className="group min-w-[280px] snap-start rounded-[30px] border border-[#dbeaf6] bg-white p-4 shadow-[0_18px_40px_rgba(120,198,227,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(120,198,227,0.12)] sm:min-w-[320px] lg:min-w-[340px]"
            >
              <div className="relative min-h-[280px] overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#f4fbff_0%,#e7f6ff_100%)]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 80vw, 340px"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(31,76,110,0.12)_100%)]" />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {product.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-[#d8ecf7] bg-[#f4fbff] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#78b8d3]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <h3 className="mt-4 line-clamp-2 text-[1.2rem] font-semibold leading-8 text-[#234e70]">
                {product.name}
              </h3>
              <div className="mt-5 flex items-center justify-between gap-4">
                <p className="text-[1.4rem] font-semibold tracking-[-0.01em] text-[#5fb7d8]">
                  {product.price}
                </p>
                <BookingButton
                  source={`product-${product.name}`}
                  className="inline-flex rounded-full border border-[#dbeaf6] px-4 py-2 text-[0.82rem] font-semibold tracking-[0.08em] text-[#2b567d] transition hover:border-[#9bd5ec] hover:bg-[#f4fbff]"
                >
                  Xem thêm
                </BookingButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
