'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/constants';
import { SectionHeading } from './SectionHeading';

export function AboutSection() {
  return (
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
            riêng tư và hồi phục dịu dàng cho mẹ. Không gian ưu tiên ánh sáng ấm, chất liệu mộc và
            cảm giác thư giãn đúng với tinh thần một spa dành cho mẹ và bé.
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
  );
}
