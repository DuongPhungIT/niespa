'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { BookingForm } from './BookingForm';

export function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState('website');

  useEffect(() => {
    const openModal = (event: Event) => {
      const detail =
        event instanceof CustomEvent && typeof event.detail === 'object' && event.detail
          ? (event.detail as { source?: string })
          : {};

      setSource(detail.source || 'website');
      setIsOpen(true);
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('booking:open', openModal as EventListener);
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      window.removeEventListener('booking:open', openModal as EventListener);
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6">
      <button
        type="button"
        className="absolute inset-0 bg-[rgba(15,39,58,0.48)] backdrop-blur-sm"
        aria-label="Đóng form đặt lịch"
        onClick={() => setIsOpen(false)}
      />
      <div className="relative z-10 flex h-[min(88vh,860px)] w-full max-w-4xl flex-col overflow-hidden rounded-[40px] border border-white/70 bg-[linear-gradient(180deg,#fcfeff_0%,#f1f9ff_100%)] p-5 shadow-[0_28px_80px_rgba(13,41,61,0.18)] md:p-8">
        <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(120,198,227,0.14),transparent_68%)]" />
        <div className="relative flex items-start justify-between gap-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="NieSpa"
                width={120}
                height={120}
                className="w-auto"
              />
              <p className="text-[1.8rem] font-semibold leading-none text-[#7dc4df]">
                Đặt lịch
              </p>
            </div>
            <p className="mt-3 mb-5 max-w-2xl text-[0.98rem] italic leading-7 text-[#6d86a0]">
              Nhập thông tin của quý khách hàng để NieSpa có thể hỗ trợ tốt nhất.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#dbeaf6] bg-white/94 text-[#7db7d3] shadow-[0_10px_24px_rgba(120,198,227,0.08)] transition hover:text-[#234e70]"
            aria-label="Đóng"
          >
            &#10005;
          </button>
        </div>

        <div className="relative mt-6 min-h-0 flex-1 overflow-hidden rounded-[30px] border border-[#dbeaf6] bg-white/92 shadow-[0_18px_45px_rgba(120,198,227,0.08)]">
          <div className="h-full overflow-y-auto px-5 py-5 md:px-7 md:py-6">
            <BookingForm source={source} onSuccess={() => setTimeout(() => setIsOpen(false), 1500)} />
          </div>
        </div>
      </div>
    </div>
  );
}
