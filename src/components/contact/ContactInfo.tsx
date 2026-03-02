import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';
import { cn } from '@/lib/cn';

const ITEMS = [
  {
    label: 'Hotline',
    value: SITE_CONFIG.phoneDisplay,
    href: `tel:${SITE_CONFIG.phone}`,
    Icon: IconPhone,
  },
  {
    label: 'Email',
    value: 'hello@niespa.vn',
    href: 'mailto:hello@niespa.vn',
    Icon: IconMail,
  },
  {
    label: 'Giờ phục vụ',
    value: '8h – 20h hàng ngày · Home Spa: 7h30 – 18h30',
    Icon: IconClock,
  },
  {
    label: 'Facebook',
    value: 'NieSpa',
    href: SITE_CONFIG.links.facebook,
    external: true,
    Icon: IconFacebook,
  },
  {
    label: 'Zalo',
    value: SITE_CONFIG.phoneDisplay,
    href: SITE_CONFIG.links.zalo,
    external: true,
    Icon: IconZalo,
  },
];

function IconPhone({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn('h-5 w-5', className)}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn('h-5 w-5', className)}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn('h-5 w-5', className)}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn('h-5 w-5', className)} aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconZalo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn('h-5 w-5', className)} aria-hidden>
      <path d="M12.378 4.035c-4.687 0-8.49 3.475-8.49 7.762 0 2.623 1.42 4.942 3.556 6.287l-.985 3.604 3.732-2.246c1.078.31 2.22.477 3.398.477 4.687 0 8.49-3.475 8.49-7.762s-3.803-7.762-8.49-7.762h-.221zm.331 11.587c-.264 0-.524-.027-.778-.08l-2.347 1.41.877-3.206a4.67 4.67 0 01-1.845-3.71c0-2.583 2.244-4.68 5.008-4.68s5.008 2.097 5.008 4.68c0 2.582-2.244 4.68-5.008 4.68z" />
    </svg>
  );
}

/**
 * Khối thông tin liên hệ – Hotline, Email, giờ phục vụ, mạng xã hội.
 */
export function ContactInfo() {
  return (
    <div className="flex min-h-0 flex-col rounded-2xl border border-pastel-pink/40 bg-white p-6 shadow-lg ring-1 ring-black/5 md:p-8 lg:min-h-[420px]">
      <div className="mb-1 h-1 w-12 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary" aria-hidden />
      <h2 className="font-display text-xl font-bold text-gray-800">
        Thông tin liên hệ
      </h2>
      <ul className="mt-6 flex-1 space-y-5">
        {ITEMS.map((item) => (
          <li key={item.label} className="flex gap-4">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary"
              aria-hidden
            >
              <item.Icon />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-500">{item.label}</p>
              {item.href ? (
                <Link
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="mt-0.5 font-medium text-gray-800 hover:text-brand-primary hover:underline"
                >
                  {item.value}
                </Link>
              ) : (
                <p className="mt-0.5 text-gray-800">{item.value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
