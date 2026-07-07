"use client";

import { MediaUploader } from "@/components/admin/MediaUploader";

const MEDIA_ITEMS = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Image ${i + 1}`,
  url: `/gallery/${i + 1}.jpg`,
}));

export default function AdminMediaPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold">Media Library</h1>
        <p className="text-muted-foreground">Upload and manage your images.</p>
      </div>

      <MediaUploader />

      <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-8">
        {MEDIA_ITEMS.map((item) => (
          <div
            key={item.id}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-muted transition-all hover:ring-2 hover:ring-primary"
          >
            <div className="flex h-full items-center justify-center text-muted-foreground">
              <p className="text-xs text-center p-2">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
