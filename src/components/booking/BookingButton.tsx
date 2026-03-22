'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type BookingButtonProps = {
  children: ReactNode;
  className?: string;
  source?: string;
  ariaLabel?: string;
};

export function BookingButton({
  children,
  className,
  source = 'website',
  ariaLabel,
}: BookingButtonProps) {
  const handleClick = () => {
    window.dispatchEvent(
      new CustomEvent('booking:open', {
        detail: { source },
      })
    );
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(className)}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
