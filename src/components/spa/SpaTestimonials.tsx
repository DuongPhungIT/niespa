import Image from 'next/image';
import { IMAGES } from '@/constants';
import { cn } from '@/lib/cn';

const TESTIMONIALS = [
  {
    quote:
      'Mang bầu khiến cơ thể thay đổi nhiều. Nhờ ghé NieSpa mỗi tuần, mình đỡ đau mỏi, ngủ sâu và tinh thần nhẹ nhàng hơn. Lần đầu làm mẹ, NieSpa giúp mình lắng nghe cơ thể theo cách an toàn và dễ chịu.',
    author: 'Chị Hương',
    role: 'Mẹ bầu',
  },
  {
    quote:
      'Sau sinh mình được chăm sóc tại nhà rất tận tâm. Tắm bé chuẩn, massage nhẹ nhàng, mình hồi phục nhanh và yên tâm nuôi con. Cảm ơn NieSpa đã đồng hành.',
    author: 'Chị Mai',
    role: 'Mẹ sau sinh',
  },
  {
    quote:
      'Massage bầu ở NieSpa thật sự giải mỏi và giúp mình khỏe khoắn, hạnh phúc suốt thai kỳ. Nhân viên chuyên nghiệp, không gian sạch sẽ, mình rất hài lòng.',
    author: 'Chị Lan',
    role: 'Khách hàng',
  },
];

/**
 * Cảm nhận khách hàng – section testimonials (theo BON Spa).
 */
export function SpaTestimonials() {
  return (
    <section
      className="bg-pastel-pink/30 py-14 md:py-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-tight">
        <h2
          id="testimonials-heading"
          className="font-display text-2xl font-bold text-gray-800 md:text-3xl"
        >
          <span className="border-b-4 border-brand-primary pb-1">CẢM NHẬN KHÁCH HÀNG</span>
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <blockquote
              key={i}
              className={cn(
                'flex flex-col rounded-2xl border border-pastel-pink/40 bg-white p-6 shadow-md transition hover:shadow-lg'
              )}
            >
              <p className="flex-1 text-gray-700">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-4 flex items-center gap-4 border-t border-pastel-pink/20 pt-4">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-pastel-pink/50">
                  <Image
                    src={IMAGES.avatars[i] ?? IMAGES.avatars[0]}
                    alt=""
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <cite className="not-italic font-semibold text-gray-800">{item.author}</cite>
                  <span className="text-gray-500"> – {item.role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
