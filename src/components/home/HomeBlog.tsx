import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/constants';
import { formatRelativeTime } from '@/utils/format';
import { getRecentPosts } from '@/services/blog.service';

export async function HomeBlog() {
  const posts = await getRecentPosts(3);

  return (
    <section className="mt-16" aria-labelledby="blog-heading">
      <div className="flex items-center justify-between">
        <h2 id="blog-heading" className="font-display text-2xl font-bold text-gray-800 md:text-3xl">
          Chia sẻ kiến thức Mẹ & Bé
        </h2>
        <Link href={ROUTES.blog} className="text-sm font-medium text-brand-primary hover:underline">
          Xem tất cả →
        </Link>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
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
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 line-clamp-2 group-hover:text-brand-primary">
                {post.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{formatRelativeTime(post.publishedAt)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
