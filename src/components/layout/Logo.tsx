'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/constants';
export function Logo() {
  return (
    <Link
      href={ROUTES.home}
      className="inline-flex items-center transition hover:opacity-90"
      aria-label="NieSpa - Về trang chủ"
    >
      <Image
        src="/images/logo.png"
        alt="NieSpa"
        width={160}
        height={46}
        priority
        className="h-auto w-[132px] sm:w-[150px] lg:w-[150px]"
      />
    </Link>
  );
}
