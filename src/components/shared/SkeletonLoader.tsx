import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface SkeletonLoaderProps {
  variant?: "card" | "text" | "image" | "list";
  count?: number;
  className?: string;
}

export function SkeletonLoader({ variant = "card", count = 1, className }: SkeletonLoaderProps) {
  const items = Array.from({ length: count }, (_, i) => i);

  if (variant === "text") {
    return (
      <div className={cn("space-y-2", className)}>
        {items.map((i) => (
          <Skeleton key={i} className="h-4 w-full" />
        ))}
      </div>
    );
  }

  if (variant === "image") {
    return (
      <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
        {items.map((i) => (
          <Skeleton key={i} className="aspect-video w-full rounded-lg" />
        ))}
      </div>
    );
  }

  if (variant === "list") {
    return (
      <div className={cn("space-y-4", className)}>
        {items.map((i) => (
          <div key={i} className="flex gap-4">
            <Skeleton className="h-20 w-20 rounded-lg" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((i) => (
        <div key={i} className="rounded-lg border p-4">
          <Skeleton className="aspect-video w-full rounded-lg" />
          <div className="mt-4 space-y-2">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}
