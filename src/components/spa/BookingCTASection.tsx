'use client';

import { BookingButton } from '@/components/booking';
import { SITE_CONFIG } from '@/config/site';

export function BookingCTASection() {
  return (
    <section className="screen-section relative overflow-hidden border-t border-[#dbeaf6] bg-[linear-gradient(135deg,#eef8ff_0%,#f7fcff_42%,#edf9f6_100%)] text-[#234e70]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(120,198,227,0.14),_transparent_32%),radial-gradient(circle_at_88%_20%,_rgba(165,229,221,0.18),_transparent_24%)]" />
      <div className="container-tight relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="text-[1.7rem] font-semibold leading-none text-[#7dc4df] [font-family:'Dancing_Script','Brush_Script_MT',cursive] md:text-[2rem]">
            Đặt lịch
          </p>
          <div className="mt-3 text-[32px] font-semibold text-[#234e70]">
            Mời bạn đặt lịch để được tư vấn liệu trình phù hợp nhất.
          </div>
          <p className="mt-5 max-w-2xl text-[1.02rem] italic leading-8 text-[#6a8094]">
            Luôn có ưu đãi cho khách hàng lần đầu trải nghiệm. Chỉ cần để lại yêu cầu, đội ngũ
            NieSpa sẽ liên hệ để hỗ trợ chọn dịch vụ, thời gian và hình thức chăm sóc phù hợp nhất
            cho mẹ.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-full border border-[#dbeaf6] bg-white/86 px-4 py-2 text-[0.86rem] font-medium text-[#5f7f98] shadow-[0_10px_24px_rgba(120,198,227,0.08)]">
              Tư vấn nhanh trong ngày
            </span>
            <span className="rounded-full border border-[#dbeaf6] bg-white/86 px-4 py-2 text-[0.86rem] font-medium text-[#5f7f98] shadow-[0_10px_24px_rgba(120,198,227,0.08)]">
              Chăm sóc tại spa và tại nhà
            </span>
          </div>
        </div>
        <div className="rounded-[36px] border border-[#dbeaf6] bg-white/92 p-7 shadow-[0_24px_60px_rgba(120,198,227,0.12)] backdrop-blur">
          <div className="space-y-4">
            <div className="rounded-[24px] border border-[#e1eff8] bg-[linear-gradient(180deg,#f9fdff_0%,#f1f9ff_100%)] px-5 py-4 shadow-[0_12px_28px_rgba(120,198,227,0.07)]">
              <p className="text-[0.82rem] font-semibold uppercase tracking-[0.2em] text-[#84bdd8]">
                Hotline tư vấn
              </p>
              <p className="mt-2 text-[1.8rem] font-semibold tracking-[-0.02em] text-[#234e70]">
                {SITE_CONFIG.phoneDisplay}
              </p>
            </div>
            <div className="rounded-[24px] border border-[#e1eff8] bg-[linear-gradient(180deg,#f9fdff_0%,#f1f9ff_100%)] px-5 py-4 shadow-[0_12px_28px_rgba(120,198,227,0.07)]">
              <p className="text-[0.82rem] font-semibold uppercase tracking-[0.2em] text-[#84bdd8]">
                Giờ phục vụ
              </p>
              <p className="mt-2 text-[1.02rem] leading-7 text-[#5d7992]">
                9:30 - 20:00, từ thứ 2 đến chủ nhật
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="type-button inline-flex items-center justify-center rounded-full bg-[#78c6e3] px-6 py-3 text-white shadow-[0_12px_28px_rgba(120,198,227,0.22)] transition hover:bg-[#62badc]"
            >
              Gọi ngay
            </a>
            <BookingButton
              source="landing-cta"
              className="type-button inline-flex items-center justify-center rounded-full border border-[#dbeaf6] bg-white px-6 py-3 text-[#234e70] transition hover:border-[#9bd5ec] hover:bg-[#f5fbff]"
            >
              Đặt lịch ngay
            </BookingButton>
          </div>
        </div>
      </div>
    </section>
  );
}
