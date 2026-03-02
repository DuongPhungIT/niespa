import { buildPageMetadata } from '@/utils/seo';
import { ROUTES } from '@/constants';
import { ContactHero, ContactInfo, ContactForm } from '@/components/contact';
import type { Metadata } from 'next';

export const metadata: Metadata = buildPageMetadata({
  title: 'Liên hệ | NieSpa – Chăm sóc mẹ và bé',
  description:
    'Liên hệ NieSpa – Tư vấn và đặt lịch dịch vụ chăm sóc mẹ bầu, sau sinh, tắm & massage bé. Hotline 0901 460 922 (Miss Nhiên).',
  path: ROUTES.contact,
});

export default function LienHePage() {
  return (
    <>
      <ContactHero />
      <section
        className="py-12 md:py-16"
        aria-labelledby="contact-content-heading"
      >
        <div className="container-tight">
          <h2 id="contact-content-heading" className="sr-only">
            Thông tin liên hệ và form gửi tin nhắn
          </h2>
          <div className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10 lg:items-stretch">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
