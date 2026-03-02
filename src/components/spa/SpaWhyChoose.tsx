import Image from 'next/image';
import { IMAGES } from '@/constants';
import { cn } from '@/lib/cn';

const REASONS = [
  {
    title: 'Liệu pháp đạt chuẩn – An toàn và hiệu quả',
    description:
      'Quy trình chăm sóc được thiết kế theo chuẩn quốc tế, đảm bảo tính chuyên môn và an toàn. Sản phẩm lành tính cho mẹ bầu, mẹ sau sinh và làn da nhạy cảm.',
    Icon: IconCheck,
  },
  {
    title: 'Phụng sự từ tâm',
    description:
      'Hướng về khách hàng bằng sự nhiệt huyết và tận tâm, trở thành người bạn đồng hành lâu dài trên hành trình sức khỏe và làm đẹp.',
    Icon: IconHeart,
  },
  {
    title: 'Chân thành và tin cậy',
    description:
      'NieSpa là nơi khách hàng có thể đặt trọn niềm tin, an tâm gửi trao sức khỏe với những liệu pháp chăm sóc an toàn và lành tính.',
    Icon: IconShield,
  },
  {
    title: 'Chăm sóc từ trái tim',
    description:
      'Đội ngũ với phương châm "phụng sự từ tâm" nâng niu mọi trải nghiệm của khách hàng bằng dịch vụ từ trái tim chạm đến trái tim.',
    Icon: IconHandCare,
  },
  {
    title: 'Phụng sự cộng đồng',
    description:
      'Đồng hành và hỗ trợ chị em phụ nữ tự tin làm chủ bản thân thông qua các chương trình chia sẻ, tọa đàm và lan tỏa yêu thương.',
    Icon: IconCommunity,
  },
];

function IconCheck({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn('h-6 w-6', className)}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function IconHeart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn('h-6 w-6', className)}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn('h-6 w-6', className)}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconHandCare({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn('h-6 w-6', className)}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function IconCommunity({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn('h-6 w-6', className)}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

/**
 * Tại sao nên chọn NieSpa – 5 lý do, icon phù hợp mẹ và bé (chuẩn, trái tim, tin cậy, chăm sóc, cộng đồng).
 */
export function SpaWhyChoose() {
  return (
    <section
      className="py-14 md:py-20"
      aria-labelledby="why-choose-heading"
    >
      <div className="container-tight">
        <div className="relative mb-12 aspect-[21/9] overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={IMAGES.whyChoose}
            alt="Không gian chăm sóc tại NieSpa"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        <h2
          id="why-choose-heading"
          className="font-display text-2xl font-bold text-gray-800 md:text-3xl"
        >
          <span className="border-b-4 border-brand-primary pb-1">TẠI SAO NÊN CHỌN NIE SPA?</span>
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.slice(0, 3).map((item, i) => (
            <div
              key={i}
              className={cn(
                'rounded-2xl border border-pastel-pink/20 bg-white p-6 shadow-md transition hover:shadow-lg',
                'flex flex-col'
              )}
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary"
                aria-hidden
              >
                <item.Icon />
              </span>
              <h3 className="mt-4 font-semibold text-gray-800">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {REASONS.slice(3).map((item, i) => (
            <div
              key={i}
              className={cn(
                'rounded-2xl border border-pastel-pink/20 bg-white p-6 shadow-md transition hover:shadow-lg',
                'flex flex-col'
              )}
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary"
                aria-hidden
              >
                <item.Icon />
              </span>
              <h3 className="mt-4 font-semibold text-gray-800">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
