interface PackageGalleryProps {
  images?: string[];
}

export function PackageGallery({ images }: PackageGalleryProps) {
  if (!images || images.length === 0) {
    return <div className="aspect-[21/9] w-full rounded-xl bg-muted" />;
  }

  return (
    <div className="grid gap-2 sm:grid-cols-2">
      <div className="sm:row-span-2">
        <div className="aspect-[4/3] rounded-xl bg-muted sm:aspect-auto sm:h-full" />
      </div>
      {images.slice(0, 2).map((_, i) => (
        <div key={i} className="aspect-[16/9] rounded-xl bg-muted" />
      ))}
    </div>
  );
}
