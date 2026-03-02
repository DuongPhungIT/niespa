'use client';

import Link from 'next/link';
import { ROUTES } from '@/constants';

/**
 * Logo NieSpa – icon mẹ và bé (silhouette mẹ ôm con) + chữ.
 */
export function Logo() {
  return (
    <Link
      href={ROUTES.home}
      className="flex items-center gap-2.5 transition opacity-90 hover:opacity-100"
      aria-label="NieSpa - Về trang chủ"
    >
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary shadow-md">
        {/* Icon trái tim – tình yêu mẹ và bé */}
        <svg
          viewBox="0 0 24 24"
          fill="white"
          className="h-5 w-5"
          aria-hidden
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </span>
      <span className="font-display text-xl font-bold tracking-tight text-gray-800">
        <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
          Nie
        </span>
        <span className="text-brand-secondary">Spa</span>
      </span>
    </Link>
  );
}
