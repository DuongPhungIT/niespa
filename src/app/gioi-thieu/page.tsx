import { buildPageMetadata } from '@/utils/seo';
import { ROUTES } from '@/constants';
import { AboutHero, AboutStory, AboutValues, AboutCTA } from '@/components/about';
import type { Metadata } from 'next';

export const metadata: Metadata = buildPageMetadata({
  title: 'Giới thiệu | NieSpa – Chăm sóc mẹ và bé',
  description:
    'Về NieSpa – Không gian chăm sóc toàn diện cho mẹ bầu, mẹ sau sinh và bé. Liệu trình chuẩn Y khoa, phụng sự từ tâm.',
  path: ROUTES.about,
});

export default function GioiThieuPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutCTA />
    </>
  );
}
