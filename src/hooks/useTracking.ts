'use client';

import {
  trackGAEvent,
  trackFBEvent,
  trackFBViewContent,
  trackFBAddToCart,
  pushDataLayer,
} from '@/utils/analytics';

/**
 * Hook gom tracking - dùng trong component client.
 * GA + Facebook + GTM (dataLayer).
 */
export function useTracking() {
  const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
    trackGAEvent(eventName, params);
    trackFBEvent(eventName, params);
    pushDataLayer({ event: eventName, ...params });
  };

  const trackViewProduct = (productId: string, value?: number) => {
    trackFBViewContent([productId], value);
    trackGAEvent('view_item', {
      currency: 'VND',
      value,
      items: [{ item_id: productId }],
    });
    pushDataLayer({
      event: 'view_item',
      ecommerce: {
        currency: 'VND',
        value,
        items: [{ item_id: productId }],
      },
    });
  };

  const trackAddToCart = (productId: string, value?: number) => {
    trackFBAddToCart([productId], value);
    trackGAEvent('add_to_cart', {
      currency: 'VND',
      value,
      items: [{ item_id: productId }],
    });
    pushDataLayer({
      event: 'add_to_cart',
      ecommerce: {
        currency: 'VND',
        value,
        items: [{ item_id: productId }],
      },
    });
  };

  return {
    trackEvent,
    trackViewProduct,
    trackAddToCart,
  };
}
