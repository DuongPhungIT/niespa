import Link from 'next/link';
import { buildPageMetadata } from '@/utils/seo';
import { ROUTES } from '@/constants';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';
import { BookingForm } from '@/components/booking';
import { branches } from '@/components/spa/mommyData';

export const metadata: Metadata = buildPageMetadata({
  title: 'Liên hệ | NieSpa',
  description:
    'Liên hệ NieSpa để được tư vấn, đặt lịch chăm sóc mẹ bầu, mẹ sau sinh và bé.',
  path: ROUTES.contact,
});

export default function LienHePage() {
  return (
    <div className="bg-[#f7fcff] text-[#234e70]">
      <section className="border-b border-[#e5dacb] bg-[#253126] py-16 text-white md:py-24">
        <div className="container-tight">
          <p className="type-overline text-white/82">
            Liên hệ
          </p>
          <h1 className="type-display-page mt-4 max-w-4xl text-white">
            Đặt lịch để đội ngũ chọn cho bạn chi nhánh và liệu trình phù hợp nhất.
          </h1>
          <p className="type-body-lg mt-6 max-w-3xl text-white/82">
            Liên hệ ngay để được hướng dẫn chọn gói chăm sóc, cơ sở phù hợp và thời gian đặt lịch
            thuận tiện nhất cho mẹ.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-tight grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[34px] border border-[#e7dccd] bg-white p-7 shadow-sm">
            <h2 className="type-display-section">Thông tin nhanh</h2>
            <div className="type-meta mt-6 space-y-4">
              <p>Hotline: {SITE_CONFIG.phoneDisplay}</p>
              <p>Email: info@niespa.vn</p>
              <p>Giờ mở cửa: 9:30 - 20:00, từ thứ 2 đến chủ nhật</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="type-button rounded-full bg-brand-secondary px-6 py-3 text-white"
              >
                Gọi tư vấn ngay
              </a>
              <Link
                href="/#chi-nhanh"
                className="type-button rounded-full border border-[#d6e8f6] px-6 py-3 text-[#234e70]"
              >
                Xem chi nhánh
              </Link>
            </div>
          </div>

          <div className="rounded-[34px] border border-[#dbeaf6] bg-[linear-gradient(180deg,#f7fcff_0%,#eef8ff_100%)] p-7 shadow-sm">
            <h2 className="type-display-section">Form đặt lịch</h2>
            <p className="mt-3 text-[0.98rem] italic text-[#6a8094]">
              Điền thông tin bên dưới, đội ngũ NieSpa sẽ liên hệ để xác nhận dịch vụ, thời gian và chi nhánh phù hợp.
            </p>
            <BookingForm source="contact-page" submitLabel="Gửi yêu cầu đặt lịch" className="mt-6" />
          </div>
        </div>

        <div className="container-tight mt-6">
          <div className="rounded-[34px] border border-[#e7dccd] bg-[#f4ecdf] p-7 shadow-sm">
            <h2 className="type-display-section">Chi nhánh phục vụ</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {branches.map((branch) => (
                <div key={branch.region} className="rounded-[24px] bg-white p-5">
                  <h3 className="text-lg font-semibold text-[#234e70]">{branch.region}</h3>
                  <p className="type-meta mt-3">{branch.locations[0]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
