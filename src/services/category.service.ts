import type { Category } from '@/types';

const DEMO_CATEGORIES: Category[] = [
  { id: '1', name: 'Sữa bột', slug: 'sua-bot', productCount: 120 },
  { id: '2', name: 'Tã bỉm', slug: 'ta-bim', productCount: 85 },
  { id: '3', name: 'Đồ chơi', slug: 'do-choi', productCount: 200 },
  { id: '4', name: 'Thời trang bà bầu', slug: 'thoi-trang-ba-bau', productCount: 65 },
  { id: '5', name: 'Phụ kiện', slug: 'phu-kien', productCount: 150 },
];

export async function getCategories(): Promise<Category[]> {
  await new Promise((r) => setTimeout(r, 30));
  return [...DEMO_CATEGORIES];
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  await new Promise((r) => setTimeout(r, 20));
  return DEMO_CATEGORIES.find((c) => c.slug === slug) ?? null;
}
