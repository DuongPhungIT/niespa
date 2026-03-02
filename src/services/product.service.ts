import type { Product, PaginatedResponse } from '@/types';
import { PRODUCT_IMAGES } from '@/constants';

/**
 * Demo data – ảnh sản phẩm Mẹ & Bé thực tế (sữa, tã, bình sữa, đồ chơi, thời trang bà bầu).
 */
const DEMO_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Sữa bột Friso Gold 4 - 900g',
    slug: 'sua-bot-friso-gold-4-900g',
    price: 520000,
    salePrice: 468000,
    image: PRODUCT_IMAGES.formula,
    categoryId: 'sua',
    categoryName: 'Sữa bột',
    brand: 'Friso',
    ageRange: '2-6 tuổi',
    rating: 4.8,
    reviewCount: 120,
    shortDescription: 'Sữa công thức dinh dưỡng cho trẻ 2-6 tuổi.',
    inStock: true,
  },
  {
    id: '2',
    name: 'Tã quần Huggies Dry - size M',
    slug: 'ta-quan-huggies-dry-size-m',
    price: 289000,
    image: PRODUCT_IMAGES.diaper,
    categoryId: 'ta',
    categoryName: 'Tã bỉm',
    brand: 'Huggies',
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
  },
  {
    id: '3',
    name: 'Bình sữa chống sặc 250ml',
    slug: 'binh-sua-chong-sac-250ml',
    price: 185000,
    salePrice: 149000,
    image: PRODUCT_IMAGES.bottle,
    categoryId: 'phu-kien',
    categoryName: 'Phụ kiện',
    rating: 4.9,
    reviewCount: 256,
    inStock: true,
  },
  {
    id: '4',
    name: 'Đồ chơi xếp hình gỗ an toàn',
    slug: 'do-choi-xep-hinh-go-an-toan',
    price: 320000,
    image: PRODUCT_IMAGES.toy,
    categoryId: 'do-choi',
    categoryName: 'Đồ chơi',
    ageRange: '1-3 tuổi',
    rating: 4.7,
    reviewCount: 45,
    inStock: true,
  },
  {
    id: '5',
    name: 'Sữa Meiji số 0 - 800g',
    slug: 'sua-meiji-so-0-800g',
    price: 485000,
    image: PRODUCT_IMAGES.formula2,
    categoryId: 'sua',
    categoryName: 'Sữa bột',
    brand: 'Meiji',
    ageRange: '0-12 tháng',
    rating: 4.9,
    reviewCount: 312,
    inStock: true,
  },
  {
    id: '6',
    name: 'Váy bà bầu cotton thoáng mát',
    slug: 'vay-ba-bau-cotton-thoang-mat',
    price: 350000,
    salePrice: 279000,
    image: PRODUCT_IMAGES.maternity,
    categoryId: 'thoi-trang',
    categoryName: 'Thời trang bà bầu',
    rating: 4.5,
    reviewCount: 67,
    inStock: true,
  },
];

function cloneProducts(): Product[] {
  return JSON.parse(JSON.stringify(DEMO_PRODUCTS));
}

export async function getFeaturedProducts(
  type: 'bestSeller' | 'new'
): Promise<Product[]> {
  await delay(50);
  const list = cloneProducts();
  if (type === 'new') return list.reverse();
  return list;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  await delay(30);
  const product = cloneProducts().find((p) => p.slug === slug) ?? null;
  if (product) {
    product.images = [product.image, product.image, product.image];
    product.description =
      'Sản phẩm chất lượng cao, an toàn cho mẹ và bé. Xuất xứ rõ ràng, bảo hành chính hãng. Giao hàng nhanh toàn quốc.';
  }
  return product;
}

export async function getProducts(options?: {
  categorySlug?: string;
  page?: number;
  pageSize?: number;
  minPrice?: number;
  maxPrice?: number;
}): Promise<PaginatedResponse<Product>> {
  await delay(80);
  const page = options?.page ?? 1;
  const pageSize = options?.pageSize ?? 12;
  let items = cloneProducts();
  if (options?.categorySlug) {
    const slugToName: Record<string, string> = {
      'sua-bot': 'Sữa bột',
      'ta-bim': 'Tã bỉm',
      'do-choi': 'Đồ chơi',
      'thoi-trang-ba-bau': 'Thời trang bà bầu',
      'phu-kien': 'Phụ kiện',
    };
    const categoryName = slugToName[options.categorySlug];
    if (categoryName) items = items.filter((p) => p.categoryName === categoryName);
  }
  if (options?.minPrice != null) {
    items = items.filter((p) => (p.salePrice ?? p.price) >= options.minPrice!);
  }
  if (options?.maxPrice != null) {
    items = items.filter((p) => (p.salePrice ?? p.price) <= options.maxPrice!);
  }
  const total = items.length;
  const start = (page - 1) * pageSize;
  const paginatedItems = items.slice(start, start + pageSize);
  return {
    items: paginatedItems,
    total,
    page,
    pageSize,
    totalPages: Math.ceil(total / pageSize),
  };
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
