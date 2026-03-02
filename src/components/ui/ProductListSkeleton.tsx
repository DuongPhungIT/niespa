import { cn } from '@/lib/cn';

function CardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-pastel-pink/20 bg-white">
      <div className="aspect-square animate-pulse bg-pastel-mint-light" />
      <div className="flex flex-1 flex-col p-4">
        <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
        <div className="mt-2 h-4 w-1/2 animate-pulse rounded bg-gray-200" />
        <div className="mt-2 h-3 w-1/4 animate-pulse rounded bg-gray-100" />
      </div>
    </div>
  );
}

interface ProductListSkeletonProps {
  count?: number;
  className?: string;
}

export function ProductListSkeleton({ count = 8, className }: ProductListSkeletonProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4',
        className
      )}
      aria-hidden
    >
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
