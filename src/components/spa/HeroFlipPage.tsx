import Image from 'next/image';
import { cn } from '@/lib/cn';
import { heroSlides } from './mommyData';

type HeroFlipPageProps = {
  slide: (typeof heroSlides)[number];
  className?: string;
  priority?: boolean;
  onAnimationEnd?: () => void;
};

export function HeroFlipPage({
  slide,
  className,
  priority = false,
  onAnimationEnd,
}: HeroFlipPageProps) {
  return (
    <article className={cn('flipbook-page', className)} onAnimationEnd={onAnimationEnd}>
      <div className="relative min-h-[560px]">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          sizes="(max-width: 1280px) 100vw, 46vw"
          priority={priority}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17354b]/74 via-[#234e70] to-transparent" />
        <div className="absolute left-6 top-6 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-semibold text-white/92 backdrop-blur-md">
          16 năm đồng hành cùng mẹ và bé
        </div>
        <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-9">
          <div className="max-w-[430px] rounded-[28px] border border-white/16 bg-[rgba(20,45,67,0.34)] p-6 backdrop-blur-md">
            <p className="type-label text-[#d9f3ff]">{slide.subtitle}</p>
            <div className="type-display-section text-[32px] mt-4 text-white [font-family:'Dancing_Script','Brush_Script_MT',cursive]">
              {slide.title}
            </div>
            <p className="type-body mt-4 text-white">{slide.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
