"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { REVIEWS } from "@/lib/constants";

export function ReviewCarousel() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Travelers Say"
          subtitle="Real reviews from travelers who explored with us."
          centered
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/reviews"
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-2.5 text-sm font-medium whitespace-nowrap text-foreground transition-all hover:bg-muted hover:text-foreground"
          >
            Read All Reviews
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
