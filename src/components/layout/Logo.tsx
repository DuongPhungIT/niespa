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
      className="transition hover:opacity-90"
      aria-label="NieSpa - Về trang chủ"
    >
      <span className="text-[2.25rem] font-semibold italic leading-none tracking-[-0.02em] text-[#2c6a73] [font-family:'Dancing_Script','Brush_Script_MT',cursive]">
        Nie Spa
      </span>
    </Link>
  );
}
