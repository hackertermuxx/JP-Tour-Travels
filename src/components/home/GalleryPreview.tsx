import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const GALLERY_IMAGES = [
  { src: "/gallery/1.jpg", alt: "Mountain landscape" },
  { src: "/gallery/2.jpg", alt: "Beach view" },
  { src: "/gallery/3.jpg", alt: "Heritage site" },
  { src: "/gallery/4.jpg", alt: "Adventure activity" },
];

export function GalleryPreview() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Moments We've Captured"
          subtitle="A glimpse into the memories our travelers have made."
          centered
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-muted"
            >
              <div className="flex h-full items-center justify-center text-muted-foreground">
                <div className="text-center p-4">
                  <p className="text-sm font-medium">{img.alt}</p>
                  <p className="text-xs text-muted-foreground/60">Image placeholder</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/gallery"
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-2.5 text-sm font-medium whitespace-nowrap text-foreground transition-all hover:bg-muted hover:text-foreground"
          >
            View Full Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
