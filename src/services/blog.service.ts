import type { BlogPost } from '@/types';
import { PRODUCT_IMAGES } from '@/constants';

const DEMO_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Cách chọn sữa bột phù hợp cho từng độ tuổi',
    slug: 'cach-chon-sua-bot-phu-hop-cho-tung-do-tuoi',
    excerpt: 'Gợi ý chọn sữa công thức theo tháng tuổi và nhu cầu dinh dưỡng của bé.',
    image: PRODUCT_IMAGES.formula.replace('w=400', 'w=800'),
    author: 'Đội ngũ MẸ & BÉ',
    publishedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    tags: ['sữa bột', 'dinh dưỡng'],
  },
  {
    id: '2',
    title: 'Bí quyết thay tã đúng cách cho trẻ sơ sinh',
    slug: 'bi-quyet-thay-ta-dung-cach-cho-tre-so-sinh',
    excerpt: 'Hướng dẫn chi tiết giúp mẹ thay tã nhanh, sạch và an toàn.',
    image: PRODUCT_IMAGES.diaper.replace('w=400', 'w=800'),
    author: 'Đội ngũ MẸ & BÉ',
    publishedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    tags: ['tã bỉm', 'chăm sóc bé'],
  },
  {
    id: '3',
    title: 'Top đồ chơi an toàn cho bé 0-12 tháng',
    slug: 'top-do-choi-an-toan-cho-be-0-12-thang',
    excerpt: 'Gợi ý đồ chơi kích thích giác quan và phát triển vận động.',
    image: PRODUCT_IMAGES.toy.replace('w=400', 'w=800'),
    author: 'Đội ngũ MẸ & BÉ',
    publishedAt: new Date(Date.now() - 86400000 * 7).toISOString(),
    tags: ['đồ chơi', 'phát triển'],
  },
];

export async function getRecentPosts(limit = 10): Promise<BlogPost[]> {
  await new Promise((r) => setTimeout(r, 40));
  return DEMO_POSTS.slice(0, limit);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  await new Promise((r) => setTimeout(r, 30));
  const post = DEMO_POSTS.find((p) => p.slug === slug) ?? null;
  if (post) {
    post.content = `
      <p>Đây là nội dung mẫu cho bài viết "${post.title}".</p>
      <p>Trong production, nội dung sẽ được lấy từ CMS hoặc API.</p>
    `;
    post.updatedAt = post.publishedAt;
  }
  return post;
}

export async function getPosts(options?: {
  page?: number;
  pageSize?: number;
}): Promise<{ items: BlogPost[]; total: number; totalPages: number }> {
  await new Promise((r) => setTimeout(r, 50));
  const page = options?.page ?? 1;
  const pageSize = options?.pageSize ?? 9;
  const total = DEMO_POSTS.length;
  const start = (page - 1) * pageSize;
  const items = DEMO_POSTS.slice(start, start + pageSize);
  return {
    items,
    total,
    totalPages: Math.ceil(total / pageSize),
  };
}
