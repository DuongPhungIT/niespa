/**
 * Analytics & Tracking - Google Analytics 4, Facebook Pixel, Google Tag Manager.
 * Chỉ chạy phía client (window). Env: NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_FB_PIXEL_ID, NEXT_PUBLIC_GTM_ID.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    _fbq?: typeof window.fbq;
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

// --- Google Analytics 4 ---
export function initGA(): void {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: true,
    cookie_flags: 'SameSite=None;Secure',
  });
}

export function trackGAEvent(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window === 'undefined' || !window.gtag || !GA_MEASUREMENT_ID) return;
  window.gtag('event', eventName, params);
}

export function trackGAViewPage(path: string, title?: string): void {
  if (typeof window === 'undefined' || !window.gtag || !GA_MEASUREMENT_ID) return;
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
    page_title: title,
  });
}

// --- Facebook Pixel ---
type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  push?: Fbq;
  queue: unknown[];
  loaded?: boolean;
  version?: string;
};

export function initFBPixel(): void {
  if (typeof window === 'undefined' || !FB_PIXEL_ID) return;
  const f = window as Window & { fbq?: Fbq; _fbq?: Fbq };
  const b = document;
  const e = 'script';
  const v = 'https://connect.facebook.net/en_US/fbevents.js';
  if (f.fbq) return;
  const j = b.createElement(e) as HTMLScriptElement;
  j.async = true;
  j.src = v;
  const i = b.getElementsByTagName(e)[0];
  if (i.parentNode) i.parentNode.insertBefore(j, i);
  const fbqImpl: Fbq = function (...args: unknown[]) {
    if (fbqImpl.callMethod) fbqImpl.callMethod(...args);
    else fbqImpl.queue.push(args);
  } as Fbq;
  fbqImpl.push = fbqImpl;
  fbqImpl.loaded = true;
  fbqImpl.version = '2.0';
  fbqImpl.queue = [];
  f.fbq = fbqImpl;
  if (!f._fbq) f._fbq = fbqImpl;
  f.fbq('init', FB_PIXEL_ID);
  f.fbq('track', 'PageView');
}

export function trackFBEvent(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', eventName, params);
}

// ViewContent cho trang sản phẩm
export function trackFBViewContent(contentIds: string[], value?: number, currency = 'VND'): void {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', 'ViewContent', {
    content_ids: contentIds,
    content_type: 'product',
    value,
    currency,
  });
}

// AddToCart
export function trackFBAddToCart(contentIds: string[], value?: number, currency = 'VND'): void {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', 'AddToCart', {
    content_ids: contentIds,
    content_type: 'product',
    value,
    currency,
  });
}

// --- Google Tag Manager ---
export function initGTM(): void {
  if (typeof window === 'undefined' || !GTM_ID) return;
  window.dataLayer = window.dataLayer || [];
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}

export function pushDataLayer(data: Record<string, unknown>): void {
  if (typeof window === 'undefined' || !window.dataLayer) return;
  window.dataLayer.push(data);
}

// --- Tổng hợp init (gọi 1 lần khi app load client) ---
export function initAnalytics(): void {
  initGA();
  initFBPixel();
  initGTM();
}
