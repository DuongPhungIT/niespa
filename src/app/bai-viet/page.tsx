import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout';
import { ROUTES } from '@/constants';
import { formatRelativeTime } from '@/utils/format';
import { getPosts } from '@/services/blog.service';
import { buildPageMetadata } from '@/utils/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildPageMetadata({
  title: 'Bài viết | Kiến thức Mẹ & Bé',
  description: 'Chia sẻ kinh nghiệm chăm sóc mẹ và bé, gợi ý sản phẩm, dinh dưỡng.',
  path: ROUTES.blog,
});

export default async function BaiVietPage() {
  const { items } = await getPosts({ pageSize: 12 });

  return (
    <Container className="py-10">
      <h1 className="font-display text-3xl font-bold text-gray-800">Bài viết</h1>
      <p className="mt-2 text-gray-600">Kiến thức và kinh nghiệm chăm sóc mẹ & bé.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((post) => (
          <Link
            key={post.id}
            href={ROUTES.blogDetail(post.slug)}
            className="group overflow-hidden rounded-2xl border border-pastel-pink/30 bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-pastel-mint-light">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-gray-800 line-clamp-2 group-hover:text-brand-primary">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
              <p className="mt-2 text-sm text-gray-400">{formatRelativeTime(post.publishedAt)}</p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
