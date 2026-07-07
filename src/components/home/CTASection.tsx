"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="bg-primary py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-primary-foreground sm:text-4xl">
          Ready for Your Next Adventure?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
          Let us plan the perfect trip for you. Reach out on WhatsApp and our team will craft a personalized
          itinerary tailored to your preferences and budget.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-golden px-2.5 text-sm font-medium whitespace-nowrap text-secondary transition-all hover:bg-golden/90"
          >
            <MessageCircle className="h-5 w-5" />
            Book via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
