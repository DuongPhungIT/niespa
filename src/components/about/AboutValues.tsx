import Link from 'next/link';
import { ROUTES } from '@/constants';
import { cn } from '@/lib/cn';

const VALUES = [
  {
    title: 'Liệu pháp chuẩn Y khoa',
    description: 'Quy trình an toàn, sản phẩm lành tính cho mẹ bầu, mẹ sau sinh và làn da nhạy cảm.',
    Icon: IconCheck,
  },
  {
    title: 'Phụng sự từ tâm',
    description: 'Tận tâm đồng hành cùng mẹ trên hành trình sức khỏe và làm đẹp.',
    Icon: IconHeart,
  },
  {
    title: 'Chân thành & tin cậy',
    description: 'Nơi mẹ có thể đặt trọn niềm tin, an tâm gửi trao sức khỏe.',
    Icon: IconShield,
  },
  {
    title: 'Chăm sóc từ trái tim',
    description: 'Dịch vụ từ trái tim chạm đến trái tim – nâng niu mọi trải nghiệm.',
    Icon: IconHand,
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

function IconHand({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn('h-6 w-6', className)}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

/**
 * Giá trị cốt lõi – 4 giá trị, grid cards.
 */
export function AboutValues() {
  return (
    <section
      className="bg-pastel-mint-light/40 py-14 md:py-20"
      aria-labelledby="about-values-heading"
    >
      <div className="container-tight">
        <h2
          id="about-values-heading"
          className="font-display text-2xl font-bold text-gray-800 md:text-3xl"
        >
          <span className="border-b-4 border-brand-secondary pb-1">GIÁ TRỊ CỐT LÕI</span>
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((item, i) => (
            <div
              key={i}
              className="min-w-0 rounded-2xl border border-pastel-mint/50 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-secondary/10 text-brand-secondary"
                aria-hidden
              >
                <item.Icon />
              </span>
              <h3 className="mt-4 font-semibold text-gray-800">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-gray-600">
          <Link href={ROUTES.spa} className="font-medium text-brand-primary hover:underline">
            Xem dịch vụ Spa mẹ và bé →
          </Link>
        </p>
      </div>
    </section>
  );
}
