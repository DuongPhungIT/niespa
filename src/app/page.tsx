import type { Metadata } from 'next';
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
import { HomeShopStrip } from '@/components/home';

export const metadata: Metadata = buildPageMetadata({
  title: 'Chăm sóc mẹ và bé | NieSpa – Beauty, Mom & Baby Care',
  description:
    'NieSpa – Chăm sóc toàn diện cho mẹ bầu, mẹ sau sinh và bé: massage bầu, chăm sóc sau sinh tại nhà, thông tắc tia sữa, tắm & massage bé chuẩn Y khoa. Dịch vụ tại spa chuyên nghiệp.',
  path: ROUTES.home,
});

/**
 * Trang chủ = Chăm sóc mẹ và bé (NieSpa).
 */
export default function HomePage() {
  return (
    <>
      <SpaHero />
      <SpaServicesAtSpa />
      <SpaHomeServices />
      <SpaWhyChoose />
      <SpaTestimonials />
      <HomeShopStrip />
      <SpaCTA />
    </>
  );
}
