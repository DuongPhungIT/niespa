'use client';

import { SectionHeading } from './SectionHeading';
import { testimonials } from './mommyData';

export function TestimonialsSection() {
  return (
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
                <div className="type-label text-[#66aecd]">Khách hàng {index + 1}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
