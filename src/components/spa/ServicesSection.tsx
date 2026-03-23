'use client';

import Image from 'next/image';
import { BookingButton } from '@/components/booking';
import { SectionHeading } from './SectionHeading';
import { standoutServices } from './mommyData';

export function ServicesSection() {
  return (
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
                      <BookingButton
                        source={`service-${service.title}`}
                        className="type-button inline-flex rounded-full border border-white/70 bg-white/92 px-5 py-2.5 text-[#ffffff] transition hover:bg-white"
                      >
                        {service.cta}
                      </BookingButton>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
