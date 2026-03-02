import Link from 'next/link';
import Image from 'next/image';
import { ROUTES, PRODUCT_IMAGES } from '@/constants';
import { cn } from '@/lib/cn';

const DEMO_CATEGORIES = [
  { name: 'Sữa bột', slug: 'sua-bot', image: PRODUCT_IMAGES.formula, count: 120 },
  { name: 'Tã bỉm', slug: 'ta-bim', image: PRODUCT_IMAGES.diaper, count: 85 },
  { name: 'Đồ chơi', slug: 'do-choi', image: PRODUCT_IMAGES.toy, count: 200 },
  { name: 'Thời trang bà bầu', slug: 'thoi-trang-ba-bau', image: PRODUCT_IMAGES.maternity, count: 65 },
];

export function HomeCategories() {
  return (
    <section aria-labelledby="categories-heading">
      <h2 id="categories-heading" className="font-display text-2xl font-bold text-gray-800 md:text-3xl">
        Danh mục nổi bật
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {DEMO_CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={ROUTES.category(cat.slug)}
            className={cn(
              'group relative overflow-hidden rounded-2xl border border-pastel-pink/40 bg-white p-4 shadow-sm transition hover:shadow-md hover:border-pastel-mint'
            )}
          >
            <div className="relative aspect-square overflow-hidden rounded-xl bg-pastel-mint-light">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition group-hover:scale-105"
              />
            </div>
            <p className="mt-3 font-medium text-gray-800 group-hover:text-brand-primary">{cat.name}</p>
            <p className="text-sm text-gray-500">{cat.count} sản phẩm</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
