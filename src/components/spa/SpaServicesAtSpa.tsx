import Link from 'next/link';
import Image from 'next/image';
import { ROUTES, IMAGES } from '@/constants';
import { cn } from '@/lib/cn';

const POSAPP_SPA_ME_BE = 'https://posapp.vn/wp-content/uploads/2021/06/a.jpg';

const SERVICES_AT_SPA = [
  { title: 'Chăm sóc mẹ bầu toàn diện tại Spa', slug: 'cham-soc-me-bau-tai-spa', description: 'Liệu trình massage bầu, giảm đau lưng, phù nề, thư giãn an toàn trong thai kỳ.', externalUrl: POSAPP_SPA_ME_BE },
  { title: 'Gội đầu dưỡng sinh & chăm sóc da mặt', slug: 'goi-dau-duong-sinh', description: 'Gội đầu thư giãn, chăm sóc da mặt nhẹ nhàng cho mẹ bầu và mẹ sau sinh.' },
  { title: 'Massage body chuyên sâu', slug: 'massage-body', description: 'Massage toàn thân giảm căng cơ, đau mỏi, giúp ngủ ngon và tinh thần thoải mái.' },
  { title: 'Bé bơi thủy liệu', slug: 'be-boi-thuy-lieu', description: 'Bé vận động trong bể thủy liệu an toàn, kích thích phát triển vận động.' },
  { title: 'Facial NieSpa', slug: 'facial-niespa', description: 'Chăm sóc da mặt chuyên sâu, da sáng mịn, phục hồi sau sinh.' },
  { title: 'Tẩy ủ da sáng mịn', slug: 'tay-u-da', description: 'Liệu trình tẩy tế bào chết, da sáng mịn, đều màu.' },
  { title: 'Liệu trình săn chắc', slug: 'lieu-trinh-san-chac', description: 'Chăm sóc body săn chắc, thu gọn vòng eo sau sinh.' },
  { title: 'Tắm trắng Collagen', slug: 'tam-trang-collagen', description: 'Tắm trắng an toàn, bổ sung collagen cho làn da khỏe đẹp.' },
  { title: 'Triệt lông', slug: 'triet-long', description: 'Dịch vụ triệt lông công nghệ cao, an toàn cho làn da nhạy cảm.' },
];

/**
 * Dịch vụ tại Spa - grid cards kiểu BON Spa (Read More).
 */
export function SpaServicesAtSpa() {
  return (
    <section className="py-14 md:py-20" aria-labelledby="services-at-spa-heading">
      <div className="container-tight">
        <h2
          id="services-at-spa-heading"
          className="font-display text-2xl font-bold text-gray-800 md:text-3xl"
        >
          <span className="border-b-4 border-brand-primary pb-1">DỊCH VỤ TẠI SPA</span>
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_AT_SPA.map((service) => (
            <article
              key={service.slug}
              className={cn(
                'group flex flex-col overflow-hidden rounded-2xl border border-pastel-pink/20 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl'
              )}
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={(IMAGES.services as Record<string, string>)[service.slug] ?? IMAGES.services['cham-soc-me-bau-tai-spa']}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-semibold text-gray-800 group-hover:text-brand-primary">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-gray-600 line-clamp-2">
                  {service.description}
                </p>
                {'externalUrl' in service && service.externalUrl ? (
                  <a
                    href={service.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-medium text-brand-secondary hover:underline"
                  >
                    Xem thêm →
                  </a>
                ) : (
                  <Link
                    href={`${ROUTES.spa}#${service.slug}`}
                    className="mt-4 inline-block text-sm font-medium text-brand-secondary hover:underline"
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
