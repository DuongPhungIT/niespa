'use client';

import Image from 'next/image';
import { SectionHeading } from './SectionHeading';
import { experts } from './mommyData';

export function ExpertsSection() {
  return (
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
                <p className="type-label mt-2 text-[#66aecd]">{expert.role}</p>
                <p className="type-meta mt-4">{expert.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
