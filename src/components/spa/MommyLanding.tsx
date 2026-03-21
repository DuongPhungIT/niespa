'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';
import { ROUTES } from '@/constants';
import { cn } from '@/lib/cn';
import { HeroFlipPage } from './HeroFlipPage';
import {
  branches,
  experts,
  featuredProducts,
  heroSlides,
  introStats,
  standoutServices,
  testimonials,
} from './mommyData';

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex text-[clamp(1.8rem,2.4vw,2.5rem)] font-semibold leading-none text-[#7dc4df] [font-family:'Dancing_Script','Brush_Script_MT',cursive]">
        {eyebrow}
      </div>
      <div className="mt-3 text-[18px] text-[#2b567d]">
        {title}
      </div>
      {description ? (
        <p className="mt-5 max-w-2xl text-[16px] italic text-[#6a8094]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function MommyLanding() {
  const statEyebrows = ['Kinh nghiệm', 'Khách hàng', 'Chi nhánh'];
  const productCarouselRef = useRef<HTMLDivElement | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [previewSlideIndex, setPreviewSlideIndex] = useState(heroSlides.length > 1 ? 1 : 0);
  const [isPageTurning, setIsPageTurning] = useState(false);
  const [isProductCarouselPaused, setIsProductCarouselPaused] = useState(false);

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
    <div className="bg-[#f7fcff] text-[#234e70]">
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
                Không gian chăm sóc dành cho mẹ bầu, mẹ sau sinh và bé với liệu trình thư giãn,
                phục hồi và đồng hành nhẹ nhàng trong từng giai đoạn.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={ROUTES.contact}
                  className="type-button rounded-full bg-[#78c6e3] px-7 py-3.5 text-white shadow-[0_12px_28px_rgba(120,198,227,0.24)] transition hover:bg-[#5fb7d8]"
                >
                  Đặt lịch ngay
                </Link>
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

      <section id="gioi-thieu" className="screen-section bg-[#fbfdff]">
        <div className="container-tight grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-[36px]">
            <Image
              src="https://lisanail.vn/wp-content/uploads/2024/03/spa-cham-soc-cho-me-va-be-sau-sinh.jpg"
              alt="Không gian spa xanh và thư giãn"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Giới thiệu"
              title="Không chỉ là spa, đây là hệ sinh thái chăm sóc dành riêng cho phụ nữ mang thai và sau sinh."
              description="Chúng tôi xây dựng hành trình chăm sóc dành riêng cho mẹ đang mang thai, mẹ sau sinh và bé bằng dịch vụ tại spa, dịch vụ tại nhà và đội ngũ tư vấn đồng hành xuyên suốt."
            />
            <div className="mt-5 max-w-2xl text-[16px] italic text-[#6a8094]">
              Từ khâu tư vấn, trị liệu đến chăm sóc tại nhà, mọi điểm chạm đều hướng đến sự an tâm,
              riêng tư và hồi phục dịu dàng cho mẹ. Không gian ưu tiên ánh sáng ấm, chất liệu mộc
              và cảm giác thư giãn đúng với tinh thần một spa dành cho mẹ và bé.
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={ROUTES.about}
                className="type-button rounded-full bg-[#234e70] px-6 py-3 text-white transition hover:bg-[#1d425f]"
              >
                Xem thêm
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="screen-section border-y border-[#e2eef7] bg-[#f8fcff]">
        <div className="container-tight grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeading
            eyebrow="Chứng nhận và tiêu chuẩn"
            title="Cam kết chất lượng trong từng liệu trình chăm sóc."
            description="Mỗi quy trình đều được thiết kế theo hướng an toàn, nhẹ nhàng và phù hợp với thể trạng của mẹ bầu, mẹ sau sinh cũng như làn da nhạy cảm."
          />
          <div className="rounded-[36px] border border-[#dbeaf6] bg-[#f4fbff] p-6 shadow-[0_20px_50px_rgba(120,198,227,0.08)] md:p-8">
            <div className="relative min-h-[360px] overflow-hidden rounded-[28px]">
              <Image
                src="https://mommyspa.vn/vnt_upload/news/07_2025/Post_FB.png"
                alt="Chứng nhận và chuẩn chất lượng"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <p className="type-body mt-5">
              NieSpa luôn ưu tiên sự an tâm của khách hàng thông qua quy trình chăm sóc rõ ràng,
              sản phẩm sử dụng phù hợp và đội ngũ kỹ thuật viên được hướng dẫn bài bản.
            </p>
          </div>
        </div>
      </section>

      <section id="dich-vu" className="screen-section bg-[#fbfdff]">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Dịch vụ nổi bật"
            title="Các gói chăm sóc nổi bật dành cho mẹ và bé."
            description="Những liệu trình được khách hàng lựa chọn nhiều, kết hợp giữa chăm sóc tại spa và phục hồi tại nhà."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {standoutServices.map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-[36px] border border-[#dbeaf6] bg-white shadow-[0_20px_48px_rgba(120,198,227,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_26px_62px_rgba(120,198,227,0.14)]"
              >
                <div className="relative min-h-[360px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 80vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,52,76,0.06)_0%,rgba(17,52,76,0.18)_34%,rgba(17,52,76,0.74)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <div className="mx-auto max-w-[30rem] rounded-[12px] border border-white/18 bg-[linear-gradient(180deg,rgba(13,41,61,0.09)_0%,rgba(13,41,61,0.18)_100%)] p-6 text-white shadow-[0_18px_40px_rgba(10,33,49,0.16)] backdrop-blur-md md:p-7">
                      <p className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-[#cdefff]">
                        {service.eyebrow}
                      </p>
                      <h3 className="text-[clamp(1.3rem,2.2vw,2.3rem)] font-semibold text-white [font-family:'Dancing_Script','Brush_Script_MT',cursive]">
                        {service.title}
                      </h3>
                      <p className="max-w-[28rem] text-[0.8rem] italic leading-7 text-white/82">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="hidden h-px flex-1 bg-[linear-gradient(90deg,rgba(205,239,255,0.36)_0%,rgba(205,239,255,0)_100%)] sm:block" />
                        <Link
                          href={ROUTES.contact}
                          className="type-button inline-flex rounded-full border border-white/70 bg-white/92 px-5 py-2.5 text-[#ffffff] transition hover:bg-white"
                        >
                          {service.cta}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
                  <Link
                    href={ROUTES.contact}
                    className="inline-flex rounded-full border border-[#dbeaf6] px-4 py-2 text-[0.82rem] font-semibold tracking-[0.08em] text-[#2b567d] transition hover:border-[#9bd5ec] hover:bg-[#f4fbff]"
                  >
                    Xem thêm
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="screen-section bg-[#fbfdff]">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Bệnh viện và bác sĩ đồng hành"
            title="Đội ngũ chuyên gia đồng hành cùng hành trình của mẹ."
            description="Sự tư vấn của bác sĩ và nữ hộ sinh giúp các gói chăm sóc trở nên gần gũi, thực tế và đáng tin cậy hơn."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {experts.map((expert) => (
              <article
                key={expert.name}
                className="overflow-hidden rounded-[30px] border border-[#dbeaf6] bg-white shadow-[0_18px_45px_rgba(120,198,227,0.08)]"
              >
                <div className="relative min-h-[280px]">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    sizes="(max-width: 1280px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="type-display-card">{expert.name}</h3>
                  <p className="type-label mt-2 text-[#66aecd]">
                    {expert.role}
                  </p>
                  <p className="type-meta mt-4">{expert.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cam-nhan" className="screen-section border-y border-[#e2eef7] bg-[#f8fcff]">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Cảm nhận khách hàng"
            title="Cảm nhận chân thật từ những khách hàng đã trải nghiệm."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <blockquote
                key={item.name}
                className="rounded-[32px] border border-[#dbeaf6] bg-[#fafdff] p-7 shadow-[0_20px_50px_rgba(120,198,227,0.08)]"
              >
                <div className="font-display text-6xl leading-none text-[#bedcf2]">“</div>
                <p className="type-body -mt-5">{item.quote}</p>
                <footer className="mt-6 border-t border-[#e2d7c7] pt-5">
                  <div className="text-lg font-semibold text-[#234e70]">{item.name}</div>
                  <div className="type-label text-[#66aecd]">
                    Khách hàng {index + 1}
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="chi-nhanh" className="screen-section bg-[#fbfdff]">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Danh sách chi nhánh"
            title="Hệ thống chi nhánh phục vụ tại nhiều tỉnh, thành."
            description="Khách hàng có thể lựa chọn cơ sở gần nhất để được tư vấn và đặt lịch nhanh chóng."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {branches.map((branch) => (
              <div
                key={branch.region}
                className="rounded-[30px] border border-[#dbeaf6] bg-white p-7 shadow-[0_18px_45px_rgba(120,198,227,0.08)]"
              >
                <h3 className="type-display-card text-[#234e70]">{branch.region}</h3>
                <ul className="type-meta mt-5 space-y-3">
                  {branch.locations.map((location) => (
                    <li key={location} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#78c6e3]" />
                      <span>{location}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="screen-section relative overflow-hidden bg-[linear-gradient(135deg,#78c6e3_0%,#b7d9f2_48%,#a5e5dd_100%)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_32%)]" />
        <div className="container-tight relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="type-overline text-white/82">
              Đặt lịch
            </p>
            <h2 className="type-display-section mt-4 text-white">
              Mời bạn đặt lịch để được tư vấn liệu trình phù hợp nhất.
            </h2>
            <p className="type-body mt-5 max-w-2xl text-white/82">
              Luôn có ưu đãi cho khách hàng lần đầu trải nghiệm. Chỉ cần gọi số tư vấn hoặc để lại yêu
              cầu, đội ngũ tư vấn sẽ hỗ trợ chọn chi nhánh và dịch vụ phù hợp.
            </p>
          </div>
          <div className="rounded-[34px] border border-white/30 bg-white/14 p-7 backdrop-blur">
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4">
                Hotline: <strong>{SITE_CONFIG.phoneDisplay}</strong>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4">
                Giờ mở cửa: 9:30 - 20:00, từ thứ 2 đến chủ nhật
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="type-button rounded-full bg-white px-6 py-3 text-[#4b9dbf]"
              >
                Gọi ngay
              </a>
              <Link
                href={ROUTES.contact}
                className="type-button rounded-full border border-white/40 px-6 py-3 text-white"
              >
                Trang liên hệ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
