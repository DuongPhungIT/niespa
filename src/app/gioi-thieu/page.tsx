import { buildPageMetadata } from '@/utils/seo';
import { ROUTES } from '@/constants';
import type { Metadata } from 'next';
import { branches, experts, introStats } from '@/components/spa/mommyData';

export const metadata: Metadata = buildPageMetadata({
  title: 'Giới thiệu | NieSpa',
  description:
    'Giới thiệu về NieSpa, hành trình chăm sóc mẹ bầu, mẹ sau sinh và bé bằng dịch vụ tận tâm.',
  path: ROUTES.about,
});

export default function GioiThieuPage() {
  return (
    <div className="bg-[#f7fcff] text-[#234e70]">
      <section className="border-b border-[#e5dacb] bg-[#f4ecdf] py-16 md:py-24">
        <div className="container-tight">
          <p className="type-overline">
            Giới thiệu thương hiệu
          </p>
          <h1 className="type-display-page mt-4 max-w-4xl">
            NieSpa đồng hành cùng mẹ và bé bằng sự dịu dàng, an tâm và tận tâm trong từng liệu trình.
          </h1>
          <p className="type-body-lg mt-6 max-w-3xl">
            Từ dịch vụ chăm sóc tại spa đến các gói phục hồi tại nhà, NieSpa luôn hướng đến cảm
            giác nhẹ nhàng, riêng tư và phù hợp với từng giai đoạn của mẹ.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-tight grid gap-6 md:grid-cols-3">
          {introStats.map((item) => (
            <div key={item.label} className="rounded-[30px] border border-[#e7dccd] bg-white p-7">
              <div className="type-display-section text-brand-secondary">{item.value}</div>
              <p className="type-meta mt-3">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#e5dacb] bg-white/70 py-16 md:py-24">
        <div className="container-tight">
          <h2 className="type-display-section">Đội ngũ đồng hành</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {experts.map((expert) => (
              <div key={expert.name} className="rounded-[30px] border border-[#e7dccd] bg-white p-7">
                <h3 className="type-display-card">{expert.name}</h3>
                <p className="type-label mt-2">
                  {expert.role}
                </p>
                <p className="type-meta mt-4">{expert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-tight">
          <h2 className="type-display-section">Mạng lưới chi nhánh</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {branches.map((branch) => (
              <div key={branch.region} className="rounded-[30px] border border-[#e7dccd] bg-white p-7">
                <h3 className="type-display-card">{branch.region}</h3>
                <ul className="type-meta mt-4 space-y-3">
                  {branch.locations.map((location) => (
                    <li key={location}>{location}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
