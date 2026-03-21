'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/constants';
import { cn } from '@/lib/cn';
import { Logo } from './Logo';

const navLinks = [
  { href: '/#gioi-thieu', label: 'Giới thiệu', sectionId: 'gioi-thieu' },
  { href: '/#dich-vu', label: 'Dịch vụ', sectionId: 'dich-vu' },
  { href: '/#san-pham', label: 'Sản phẩm', sectionId: 'san-pham' },
  { href: ROUTES.blog, label: 'Tin tức' },
  { href: ROUTES.contact, label: 'Liên hệ' },
] as const;

function hasSectionId(
  link: (typeof navLinks)[number]
): link is Extract<(typeof navLinks)[number], { sectionId: string }> {
  return 'sectionId' in link;
}

function isRouteActive(pathname: string, href: string): boolean {
  if (href.startsWith('/#')) return false;
  if (href === ROUTES.home) return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

export function Header() {
  const pathname = usePathname() ?? '';
  const [activeSection, setActiveSection] = useState<string>('');

  const sectionLinks = useMemo(() => navLinks.filter(hasSectionId), []);

  useEffect(() => {
    if (pathname !== ROUTES.home) {
      setActiveSection('');
      return;
    }

    const sectionIds = sectionLinks.map((link) => link.sectionId).filter(Boolean) as string[];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const updateFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && sectionIds.includes(hash)) {
        setActiveSection(hash);
      }
    };

    updateFromHash();

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-22% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener('hashchange', updateFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', updateFromHash);
    };
  }, [pathname, sectionLinks]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#deedf8] bg-[rgba(247,252,255,0.9)] backdrop-blur-xl">
      <div className="container-tight flex min-h-[64px] items-center justify-between gap-6 py-2">
        <Logo />

        <nav className="hidden flex-1 justify-center xl:flex" aria-label="Menu chính">
          <ul className="flex items-center gap-3">
            {navLinks.map((link) => {
              const active =
                (hasSectionId(link) && pathname === ROUTES.home
                  ? activeSection === link.sectionId
                  : isRouteActive(pathname, link.href)) ?? false;

              return (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    href={link.href}
                    className={cn(
                      'relative px-4 pb-2 pt-1.5 font-display text-[0.98rem] font-semibold tracking-[0.01em] transition duration-200',
                      active
                        ? 'text-[#4f8fb1]'
                        : 'text-[#6e8194] hover:text-[#4f8fb1]'
                    )}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                    <span
                      className={cn(
                        'absolute bottom-[1px] left-1/2 h-[1px] w-10 -translate-x-1/2 rounded-full transition',
                        active ? 'bg-[#8bcfeb]' : 'bg-transparent'
                      )}
                      aria-hidden
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href={ROUTES.contact}
            className="rounded-full bg-[#78c6e3] px-8 py-2 text-[0.95rem] font-semibold text-white shadow-[0_12px_28px_rgba(120,198,227,0.22)] transition hover:bg-[#63badb]"
          >
            Đặt lịch
          </Link>
        </div>
      </div>
    </header>
  );
}
