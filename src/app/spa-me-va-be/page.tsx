import { buildPageMetadata } from '@/utils/seo';
import { ROUTES } from '@/constants';
import { MommyLanding } from '@/components/spa';
import type { Metadata } from 'next';

export const metadata: Metadata = buildPageMetadata({
  title: 'Spa mẹ và bé | NieSpa',
  description:
    'Dịch vụ chăm sóc mẹ và bé tại NieSpa với các liệu trình thư giãn, phục hồi và chăm sóc tại nhà.',
  path: ROUTES.spa,
});

export default function SpaMeVaBePage() {
  return <MommyLanding />;
}
