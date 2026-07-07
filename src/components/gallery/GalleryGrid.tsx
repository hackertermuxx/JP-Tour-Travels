"use client";

import { useState } from "react";
import { GalleryLightbox } from "./GalleryLightbox";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => openLightbox(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-muted text-left"
          >
            <div className="flex h-full items-center justify-center text-muted-foreground">
              <div className="p-4 text-center">
                <p className="text-sm font-medium">{img.alt}</p>
                {img.category && (
                  <p className="text-xs text-muted-foreground/60">{img.category}</p>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      <GalleryLightbox
        images={images}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentIndex}
      />
    </>
  );
}
