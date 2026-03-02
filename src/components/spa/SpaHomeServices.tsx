import Link from 'next/link';
import Image from 'next/image';
import { ROUTES, IMAGES } from '@/constants';
import { cn } from '@/lib/cn';

const POSAPP_SPA_ME_BE = 'https://posapp.vn/kinh-doanh-spa-me-va-be';

const HOME_SERVICES = [
  { title: 'Chăm sóc mẹ bầu toàn diện tại nhà', slug: 'cham-soc-me-bau-tai-nha', description: 'Nữ hộ sinh đến tận nhà massage bầu, chăm sóc sức khỏe thai kỳ an toàn.', externalUrl: POSAPP_SPA_ME_BE },
  { title: 'Chăm sóc mẹ sau sinh tại nhà', slug: 'cham-soc-me-sau-sinh-tai-nha', description: 'Chăm sóc phục hồi sau sinh, thu gọn vòng bụng, tư vấn nuôi con tại nhà.' },
  { title: 'Thông tắc tia sữa tại nhà', slug: 'thong-tac-tia-sua', description: 'Thông tắc tia sữa chuẩn Y khoa, an toàn, giúp mẹ cho con bú thoải mái.' },
  { title: 'Tắm & massage bé chuẩn Y khoa tại nhà', slug: 'tam-massage-be-tai-nha', description: 'Tắm bé, massage "I LOVE U" chuẩn Y khoa, bé khỏe, mẹ yên tâm.' },
];

/**
 * Home Spa – Spa bầu & Chăm sóc sau sinh tại nhà (theo BON Spa).
 */
export function SpaHomeServices() {
  return (
    <section
      className="bg-pastel-mint-light/50 py-14 md:py-20"
      aria-labelledby="home-spa-heading"
    >
      <div className="container-tight">
        <h2
          id="home-spa-heading"
          className="font-display text-2xl font-bold text-gray-800 md:text-3xl"
        >
          <span className="border-b-4 border-brand-secondary pb-1">HOME SPA BẦU & CHĂM SÓC SAU SINH</span>
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {HOME_SERVICES.map((service) => (
            <article
              key={service.slug}
              className={cn(
                'group flex flex-col overflow-hidden rounded-2xl border border-pastel-mint/40 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl sm:flex-row'
              )}
            >
              <div className="relative aspect-[4/3] w-full shrink-0 sm:aspect-square sm:w-52">
                <Image
                  src={(IMAGES.homeServices as Record<string, string>)[service.slug] ?? IMAGES.hero}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 224px"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6">
                <h3 className="font-semibold text-gray-800 group-hover:text-brand-primary">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                {'externalUrl' in service && service.externalUrl ? (
                  <a
                    href={service.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-brand-secondary hover:underline"
                  >
                    Xem thêm →
                  </a>
                ) : (
                  <Link
                    href={`${ROUTES.spa}#${service.slug}`}
                    className="mt-3 inline-block text-sm font-medium text-brand-secondary hover:underline"
                  >
                    Xem thêm →
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
