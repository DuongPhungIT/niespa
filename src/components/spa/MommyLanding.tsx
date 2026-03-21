'use client';

import { useEffect, useState } from 'react';
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
              src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=1400&q=80"
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
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=80"
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
                className="overflow-hidden rounded-[34px] border border-[#dbeaf6] bg-white shadow-[0_22px_55px_rgba(120,198,227,0.08)]"
              >
                <div className="relative min-h-[300px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#234e70]/72 via-[#234e70]/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-8">
                    <p className="type-label text-[#d9f3ff]">
                      {service.eyebrow}
                    </p>
                    <h3 className="type-display-card mt-3 text-white md:text-[2.4rem]">{service.title}</h3>
                    <p className="type-meta mt-4 max-w-xl text-white/88">
                      {service.description}
                    </p>
                    <Link
                      href={ROUTES.contact}
                      className="type-button mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-[#234e70]"
                    >
                      {service.cta}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="san-pham" className="screen-section border-y border-[#e2eef7] bg-[#f4fbff]">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Sản phẩm tiêu biểu"
            title="Những sản phẩm chăm sóc được nhiều mẹ yêu thích."
            description="Các dòng sản phẩm hỗ trợ làm sạch, phục hồi da và chăm sóc tóc phù hợp cho giai đoạn mang thai và sau sinh."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {featuredProducts.map((product) => (
              <article
                key={product.name}
                className="rounded-[28px] border border-[#dbeaf6] bg-white p-4 shadow-[0_18px_40px_rgba(120,198,227,0.08)]"
              >
                <div className="relative min-h-[220px] overflow-hidden rounded-[22px] bg-[#f0f9ff]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1280px) 50vw, 20vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.badges.map((badge) => (
                    <span
                      key={badge}
                      className="type-label rounded-full bg-[#edf7fd] px-3 py-1 text-[#66aecd]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 line-clamp-2 text-lg font-semibold leading-7 text-[#234e70]">
                  {product.name}
                </h3>
                <p className="type-display-card mt-3 text-[#78c6e3]">{product.price}</p>
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
