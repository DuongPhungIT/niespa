import Link from 'next/link';
import { ROUTES } from '@/constants';
import { SITE_CONFIG } from '@/config/site';
import { Logo } from './Logo';

const footerLinks = {
  muaSam: [
    { href: ROUTES.products, label: 'Sản phẩm' },
    { href: ROUTES.category('sua-bot'), label: 'Sữa bột' },
    { href: ROUTES.category('ta-bim'), label: 'Tã bỉm' },
    { href: ROUTES.category('do-choi'), label: 'Đồ chơi' },
  ],
  hoTro: [
    { href: ROUTES.spa, label: 'Spa mẹ và bé' },
    { href: ROUTES.about, label: 'Giới thiệu' },
    { href: ROUTES.contact, label: 'Liên hệ' },
    { href: ROUTES.blog, label: 'Blog' },
  ],
};

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function IconZalo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.378 4.035c-4.687 0-8.49 3.475-8.49 7.762 0 2.623 1.42 4.942 3.556 6.287l-.985 3.604 3.732-2.246c1.078.31 2.22.477 3.398.477 4.687 0 8.49-3.475 8.49-7.762s-3.803-7.762-8.49-7.762h-.221zm.331 11.587c-.264 0-.524-.027-.778-.08l-2.347 1.41.877-3.206a4.67 4.67 0 01-1.845-3.71c0-2.583 2.244-4.68 5.008-4.68s5.008 2.097 5.008 4.68c0 2.582-2.244 4.68-5.008 4.68zm2.505-5.768h-1.229v1.229h-.819v-1.229h-1.23v-.819h1.23v-1.229h.819v1.229h1.229v.819zm4.341.819h-1.638v.819h1.638v-.819z" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-pastel-pink/50 bg-gradient-to-b from-pastel-mint-light/40 via-pastel-cream/60 to-white">
      <div className="container-tight w-full max-w-6xl px-4 py-12 sm:px-6 md:py-14">
        {/* Main: 3 cột cân bằng, dùng full width */}
        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0">
          {/* Cột 1: Brand + mô tả + hotline + mạng xã hội */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-5">
            <div className="flex items-center">
              <Logo />
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600">
              {SITE_CONFIG.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-brand-primary shadow-md ring-1 ring-pastel-pink/50 transition hover:bg-pastel-pink/25 hover:shadow-sm"
              >
                <IconPhone className="h-4 w-4 shrink-0" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>
              <div className="flex items-center gap-2">
                <a
                  href={SITE_CONFIG.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-gray-500 shadow-md ring-1 ring-gray-200/80 transition hover:bg-[#1877f2] hover:text-white hover:ring-[#1877f2]/40"
                  aria-label="Facebook"
                >
                  <IconFacebook className="h-5 w-5" />
                </a>
                <a
                  href={SITE_CONFIG.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-gray-500 shadow-md ring-1 ring-gray-200/80 transition hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:text-white hover:ring-pink-300/40"
                  aria-label="Instagram"
                >
                  <IconInstagram className="h-5 w-5" />
                </a>
                <a
                  href={SITE_CONFIG.links.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-gray-500 shadow-md ring-1 ring-gray-200/80 transition hover:bg-[#0068ff] hover:text-white hover:ring-[#0068ff]/40"
                  aria-label="Zalo"
                >
                  <IconZalo className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Cột 2: Mua sắm */}
          <div className="min-w-0 lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
              Mua sắm
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.muaSam.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-600 transition hover:text-brand-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 3: Hỗ trợ */}
          <div className="min-w-0 lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
              Hỗ trợ
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.hoTro.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-600 transition hover:text-brand-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom: chỉ copyright + social nhỏ, không trùng link */}
        <div className="mt-10 flex w-full flex-col items-center justify-between gap-3 border-t border-pastel-pink/40 pt-6 sm:flex-row">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. Bảo lưu mọi quyền.
          </p>
          <div className="flex items-center gap-3">
            <a href={SITE_CONFIG.links.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 transition hover:text-brand-primary" aria-label="Facebook">
              <IconFacebook className="h-4 w-4" />
            </a>
            <a href={SITE_CONFIG.links.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 transition hover:text-brand-primary" aria-label="Instagram">
              <IconInstagram className="h-4 w-4" />
            </a>
            <a href={SITE_CONFIG.links.zalo} target="_blank" rel="noopener noreferrer" className="text-gray-400 transition hover:text-brand-primary" aria-label="Zalo">
              <IconZalo className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
