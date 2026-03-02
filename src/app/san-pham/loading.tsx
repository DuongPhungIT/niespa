import { ProductListSkeleton } from '@/components/ui/ProductListSkeleton';

export default function Loading() {
  return (
    <div className="container-tight py-10">
      <div className="h-9 w-56 animate-pulse rounded bg-gray-200" />
      <div className="mt-2 h-4 w-full max-w-md animate-pulse rounded bg-gray-100" />
      <ProductListSkeleton className="mt-8" count={12} />
    </div>
  );
}
