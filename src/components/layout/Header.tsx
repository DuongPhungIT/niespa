'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG } from '@/config/site';
import { ROUTES } from '@/constants';
import { cn } from '@/lib/cn';
import { Logo } from './Logo';

const navLinks = [
  { href: ROUTES.home, label: 'Trang chủ' },
  { href: ROUTES.products, label: 'Sản phẩm' },
  { href: ROUTES.blog, label: 'Bài viết' },
  { href: ROUTES.about, label: 'Giới thiệu' },
  { href: ROUTES.contact, label: 'Liên hệ' },
];

function isActive(pathname: string, href: string): boolean {
  if (href === ROUTES.home) return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

export function Header() {
  const pathname = usePathname() ?? '';

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 shadow-sm backdrop-blur-md">
      {/* Top bar nhẹ - thông tin nhanh */}
      <div className="border-b border-pastel-mint/50 bg-pastel-cream/80">
        <div className="container-tight flex h-9 items-center justify-end gap-6 text-xs text-gray-500">
          <Link href={`tel:${SITE_CONFIG.phone}`} className="hover:text-brand-secondary">
            Hotline: {SITE_CONFIG.phoneDisplay}
          </Link>
          <Link href={ROUTES.contact} className="hover:text-brand-secondary">
            Liên hệ
          </Link>
        </div>
      </div>

      <div className="container-tight flex h-16 items-center justify-between gap-8">
        <Logo />

        <nav className="hidden flex-1 justify-center md:flex" aria-label="Menu chính">
          <ul className="flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const active = isActive(pathname, href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      'rounded-lg px-4 py-2.5 text-sm font-medium transition',
                      active
                        ? 'bg-pastel-pink/50 text-brand-primary shadow-sm'
                        : 'text-gray-600 hover:bg-pastel-mint-light/60 hover:text-brand-secondary'
                    )}
                    aria-current={active ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href={ROUTES.products}
            className={cn(
              'rounded-full bg-gradient-to-r from-brand-secondary to-pastel-mint-dark px-5 py-2.5 text-sm font-semibold text-white shadow-md transition',
              'hover:shadow-lg hover:opacity-95 active:scale-[0.98]'
            )}
          >
            Mua sắm
          </Link>
        </div>
      </div>
    </header>
  );
}
