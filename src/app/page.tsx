import type { Metadata } from 'next';
import { buildPageMetadata } from '@/utils/seo';
import { ROUTES } from '@/constants';
import { MommyLanding } from '@/components/spa';

export const metadata: Metadata = buildPageMetadata({
  title: 'Chăm sóc mẹ bầu và sau sinh | NieSpa',
  description:
    'NieSpa - Không gian chăm sóc mẹ bầu, mẹ sau sinh và bé với dịch vụ thư giãn, phục hồi và tư vấn tận tâm.',
  path: ROUTES.home,
});

export default function HomePage() {
  return <MommyLanding />;
}
