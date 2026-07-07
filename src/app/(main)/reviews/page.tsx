"use client";

import { PageTransition } from "@/components/shared/PageTransition";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { REVIEWS } from "@/lib/constants";

const MORE_REVIEWS = [
  { name: "Vikram Joshi", rating: 5, text: "Excellent service! Our Manali trip was perfectly organized.", location: "Delhi" },
  { name: "Ananya Reddy", rating: 5, text: "JP Tour Travels made our honeymoon unforgettable.", location: "Hyderabad" },
  { name: "Rohit Sharma", rating: 4, text: "Great packages at reasonable prices. The team was very responsive.", location: "Mumbai" },
  { name: "Kavita Nair", rating: 5, text: "We booked a family trip to Kerala. Everything was fantastic.", location: "Chennai" },
  { name: "Arjun Singh", rating: 5, text: "Trustworthy and professional. Our Rajasthan trip was a royal experience!", location: "Jaipur" },
  { name: "Meera Patel", rating: 4, text: "Good service overall. The WhatsApp booking process is very convenient.", location: "Ahmedabad" },
  { name: "Surya Prakash", rating: 5, text: "Best travel agency in India. Highly recommended.", location: "Bangalore" },
  { name: "Deepika Gupta", rating: 5, text: "Our Goa trip was amazing! The sunset cruise was the highlight.", location: "Kolkata" },
];

const allReviews = [...REVIEWS, ...MORE_REVIEWS];

export default function ReviewsPage() {
  return (
    <PageTransition>
      <div className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Reviews" }]} />
          <SectionHeading
            title="Customer Reviews"
            subtitle="Hear from travelers who have explored with us."
          />

          <div className="mb-8 rounded-xl border bg-card p-6 shadow-sm backdrop-blur-lg">
            <div className="text-center">
              <p className="font-heading text-5xl font-bold text-primary">4.8</p>
              <p className="mt-1 text-sm text-muted-foreground">Average rating from {allReviews.length}+ reviews</p>
              <div className="mt-2 flex justify-center gap-0.5">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className="text-golden text-2xl">&#9733;</span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {allReviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
