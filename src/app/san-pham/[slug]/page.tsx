import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout';
import { JsonLdProduct } from '@/components/shared/JsonLd';
import { ROUTES } from '@/constants';
import { formatPrice } from '@/utils/format';
import { getProductBySlug } from '@/services/product.service';
import { buildPageMetadata } from '@/utils/seo';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: 'Không tìm thấy sản phẩm' };
  return buildPageMetadata({
    title: product.name,
    description: product.shortDescription || product.description || product.name,
    path: ROUTES.productDetail(slug),
    image: product.image,
  });
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const images = product.images?.length ? product.images : [product.image];

  return (
    <>
      <JsonLdProduct product={product} />
      <Container className="py-8">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href={ROUTES.home} className="hover:text-brand-primary">
            Trang chủ
          </Link>
          <span className="mx-2">/</span>
          <Link href={ROUTES.products} className="hover:text-brand-primary">
            Sản phẩm
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{product.name}</span>
        </nav>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-pastel-mint-light">
            <Image
              src={images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold text-gray-800 md:text-3xl">
              {product.name}
            </h1>
            {product.brand && (
              <p className="mt-2 text-sm text-gray-500">Thương hiệu: {product.brand}</p>
            )}
            <div className="mt-4 flex items-center gap-4">
              <span className="text-2xl font-semibold text-brand-primary">
                {formatPrice(product.salePrice ?? product.price)}
              </span>
              {product.salePrice != null && (
                <span className="text-gray-400 line-through">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>
            {product.rating != null && (
              <p className="mt-2 text-sm text-gray-600">
                ⭐ {product.rating.toFixed(1)} ({product.reviewCount ?? 0} đánh giá)
              </p>
            )}
            <p className="mt-6 text-gray-700">
              {product.shortDescription || product.description}
            </p>
            <div className="mt-8 flex gap-4">
              <button
                type="button"
                className="rounded-full bg-brand-primary px-8 py-3 font-medium text-white transition hover:bg-brand-primary/90"
              >
                Thêm vào giỏ
              </button>
              <button
                type="button"
                className="rounded-full border-2 border-brand-primary px-8 py-3 font-medium text-brand-primary transition hover:bg-pastel-pink-light"
              >
                Liên hệ
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
