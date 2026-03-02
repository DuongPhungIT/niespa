# Cấu trúc thư mục - Mom & Son (MẸ & BÉ)

## Giải thích nhiệm vụ từng folder

### `src/app/`
**App Router của Next.js** – Định nghĩa routes và layout.
- `layout.tsx` – Root layout: SEO meta, fonts, providers, header/footer.
- `page.tsx` – Trang chủ.
- `san-pham/` – Danh sách sản phẩm + `[slug]/` chi tiết sản phẩm.
- `danh-muc/` – Trang danh mục (ví dụ `[slug]/page.tsx`).
- `bai-viet/` – Blog: danh sách + `[slug]/` chi tiết bài viết.
- `gioi-thieu/` – Trang giới thiệu.
- `lien-he/` – Trang liên hệ.
- `(auth)/` – Route group cho đăng nhập/đăng ký (nếu cần).
- `api/` – API routes (Next.js Route Handlers).

### `src/components/`
**Components tái sử dụng** – Chia theo domain và vai trò.
- `layout/` – Header, Footer, MobileNav, Container.
- `ui/` – Button, Input, Card, Skeleton, Modal (base UI).
- `product/` – ProductCard, ProductGrid, ProductGallery, ProductFilters.
- `blog/` – BlogCard, BlogList, ArticleContent.
- `home/` – HomeBanner, HomeCategories, HomeProducts, HomeBlog, HomeCTA.
- `shared/` – SEO (JsonLd, Meta), Tracking scripts, common wrappers.

### `src/services/`
**Gọi API / data layer** – Không gọi fetch trong component.
- `product.service.ts` – getProducts, getProductBySlug, getRelatedProducts.
- `blog.service.ts` – getPosts, getPostBySlug.
- `category.service.ts` – getCategories, getCategoryBySlug.

### `src/hooks/`
**Custom React hooks** – useTracking, useProducts, useDebounce, etc.

### `src/store/`
**State management** – Zustand/Context (cart, filters, UI state) nếu cần.

### `src/types/`
**TypeScript types & interfaces** – Product, Category, Post, ApiResponse.

### `src/constants/`
**Hằng số** – routes, labels, config cố định (không nhạy cảm).

### `src/utils/`
**Hàm tiện ích** – pure functions, không side effect UI.
- `seo.ts` – build metadata, JSON-LD helpers.
- `format.ts` – formatPrice, formatDate.
- `slug.ts` – toSlug, fromSlug.
- `analytics.ts` – GA4, Facebook Pixel, GTM wrappers.

### `src/lib/`
**Thư viện bên thứ 3** – cấu hình client (axios, stripe), helpers (cn = clsx + tailwind-merge).

### `src/config/`
**Cấu hình app** – site URL, feature flags, env mapping.

### `src/styles/`
**Global CSS** – Tailwind directives, CSS variables, base styles.

### `public/`
**Static assets** – phục vụ tại `/`.
- `images/` – ảnh sản phẩm, banner.
- `icons/` – favicon, PWA icons.
- `favicon.ico` – Favicon mặc định.
