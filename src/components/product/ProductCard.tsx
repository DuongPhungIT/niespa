import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/types';
import { ROUTES } from '@/constants';
import { formatPrice } from '@/utils/format';
import { cn } from '@/lib/cn';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const hasSale = product.salePrice != null && product.salePrice < product.price;
  const displayPrice = product.salePrice ?? product.price;

  return (
    <Link
      href={ROUTES.productDetail(product.slug)}
      className={cn(
        'group flex flex-col overflow-hidden rounded-2xl border border-pastel-pink/30 bg-white shadow-sm transition hover:shadow-md hover:border-pastel-mint',
        className
      )}
      aria-label={`Xem chi tiết ${product.name}`}
    >
      <div className="relative aspect-square overflow-hidden bg-pastel-mint-light">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition group-hover:scale-105"
          loading="lazy"
        />
        {hasSale && (
          <span className="absolute right-2 top-2 rounded-full bg-brand-primary px-2 py-0.5 text-xs font-medium text-white">
            Sale
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 font-medium text-gray-800 group-hover:text-brand-primary">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center gap-2">
          <span className="font-semibold text-brand-primary">{formatPrice(displayPrice)}</span>
          {hasSale && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.price)}
            </span>
          )}
        </div>
        {product.rating != null && (
          <p className="mt-1 text-sm text-gray-500">
            ⭐ {product.rating.toFixed(1)} ({product.reviewCount ?? 0})
          </p>
        )}
      </div>
    </Link>
  );
}
