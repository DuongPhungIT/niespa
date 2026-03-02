import { buildPageMetadata } from '@/utils/seo';
import { ROUTES } from '@/constants';
import {
  SpaHero,
  SpaServicesAtSpa,
  SpaHomeServices,
  SpaWhyChoose,
  SpaTestimonials,
  SpaCTA,
} from '@/components/spa';
import type { Metadata } from 'next';

export const metadata: Metadata = buildPageMetadata({
  title: 'Spa mẹ và bé | NieSpa – Beauty, Mom & Baby Care',
  description:
    'NieSpa – Chăm sóc toàn diện cho mẹ bầu, mẹ sau sinh và bé: massage bầu, chăm sóc sau sinh tại nhà, thông tắc tia sữa, tắm & massage bé chuẩn Y khoa.',
  path: ROUTES.spa,
});

/**
 * Trang Spa mẹ và bé – cùng nội dung với trang chủ (scroll đến section tương ứng khi cần).
 */
export default function SpaMeVaBePage() {
  return (
    <>
      <SpaHero />
      <SpaServicesAtSpa />
      <SpaHomeServices />
      <SpaWhyChoose />
      <SpaTestimonials />
      <SpaCTA />
    </>
  );
}
