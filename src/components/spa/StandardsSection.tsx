'use client';

import Image from 'next/image';
import { SectionHeading } from './SectionHeading';

export function StandardsSection() {
  return (
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
            NieSpa luôn ưu tiên sự an tâm của khách hàng thông qua quy trình chăm sóc rõ ràng, sản
            phẩm sử dụng phù hợp và đội ngũ kỹ thuật viên được hướng dẫn bài bản.
          </p>
        </div>
      </div>
    </section>
  );
}
