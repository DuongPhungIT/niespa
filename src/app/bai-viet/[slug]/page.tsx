import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout';
import { JsonLdArticle } from '@/components/shared/JsonLd';
import { ROUTES } from '@/constants';
import { formatDate } from '@/utils/format';
import { getPostBySlug } from '@/services/blog.service';
import { buildPageMetadata } from '@/utils/seo';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Bài viết' };
  return buildPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: ROUTES.blogDetail(slug),
    image: post.image,
  });
}

export default async function BaiVietDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLdArticle post={post} />
      <Container className="py-10">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href={ROUTES.home} className="hover:text-brand-primary">
            Trang chủ
          </Link>
          <span className="mx-2">/</span>
          <Link href={ROUTES.blog} className="hover:text-brand-primary">
            Bài viết
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 line-clamp-1">{post.title}</span>
        </nav>
        <article>
          <h1 className="font-display text-3xl font-bold text-gray-800 md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-gray-500">
            {post.author && <span>{post.author}</span>}
            <span className="mx-2">·</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </p>
          <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl bg-pastel-mint-light">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="prose prose-lg mt-8 max-w-none text-gray-700">
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <p>{post.excerpt}</p>
            )}
          </div>
        </article>
      </Container>
    </>
  );
}
