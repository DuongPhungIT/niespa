# MẸ & BÉ - Website bán hàng Mẹ & Bé

Next.js (App Router) + TypeScript + TailwindCSS. Chuẩn SEO, tối ưu quảng cáo (Google Ads, Facebook Pixel), cấu trúc production-ready.

## Cấu trúc thư mục

Xem [STRUCTURE.md](./STRUCTURE.md) để biết nhiệm vụ từng folder.

## Yêu cầu

- Node.js 18+
- npm 10+

## Cài đặt

```bash
npm install
```

## Biến môi trường

Copy `.env.example` thành `.env.local` và điền:

- `NEXT_PUBLIC_SITE_URL`: URL production (dùng cho SEO, sitemap)
- `NEXT_PUBLIC_GA_ID`: Google Analytics 4 Measurement ID
- `NEXT_PUBLIC_FB_PIXEL_ID`: Facebook Pixel ID
- `NEXT_PUBLIC_GTM_ID`: Google Tag Manager ID (tùy chọn)

## Chạy dev

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Build production

```bash
npm run build
npm run start
```

## Lint & Format

```bash
npm run lint
npm run format
```

## Tính năng đã có

- **Trang chủ**: Banner, danh mục, sản phẩm bán chạy/mới, blog, CTA
- **Sản phẩm**: Danh sách, chi tiết (gallery, schema Product)
- **Danh mục**: Trang danh mục theo slug
- **Blog**: Danh sách bài viết, chi tiết (schema Article)
- **SEO**: Metadata API, OpenGraph, Twitter Card, JSON-LD (Organization, Product, Article), sitemap.xml, robots.txt
- **Tracking**: GA4, Facebook Pixel, GTM; hook `useTracking()`
- **Performance**: next/image, loading/skeleton, Suspense

## Favicon

Đặt `favicon.ico` trong `public/`. Ảnh mặc định đặt trong `public/images/`, `public/icons/`.
