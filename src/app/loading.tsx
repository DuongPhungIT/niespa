import { ProductListSkeleton } from '@/components/ui/ProductListSkeleton';

export default function Loading() {
  return (
    <div className="container-tight py-10">
      <div className="h-8 w-48 animate-pulse rounded bg-gray-200" />
      <div className="mt-4 h-4 w-96 animate-pulse rounded bg-gray-100" />
      <ProductListSkeleton className="mt-8" />
    </div>
  );
}
