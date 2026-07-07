"use client";

import { useState } from "react";
import { PageTransition } from "@/components/shared/PageTransition";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Button } from "@/components/ui/button";

const CATEGORIES = ["All", "Mountains", "Beaches", "Heritage", "Adventure", "Cultural"];
const IMAGES = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  src: `/gallery/${i + 1}.jpg`,
  alt: `Gallery image ${i + 1}`,
  category: CATEGORIES[((i % 5) + 1)],
}));

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? IMAGES
    : IMAGES.filter((img) => img.category === activeCategory);

  return (
    <PageTransition>
      <div className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Gallery" }]} />
          <SectionHeading
            title="Gallery"
            subtitle="Beautiful moments captured across our travels."
          />

          <div className="mb-8 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <GalleryGrid images={filtered} />
          ) : (
            <p className="py-12 text-center text-muted-foreground">No images in this category.</p>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
