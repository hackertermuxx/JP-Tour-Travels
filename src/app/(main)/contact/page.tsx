"use client";

import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ContactForm } from "@/components/shared/ContactForm";
import { PageTransition } from "@/components/shared/PageTransition";
import { EMAIL, PHONE, ADDRESS, WHATSAPP_URL } from "@/lib/constants";

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <SectionHeading
            title="Contact Us"
            subtitle="Have a question or want to book a trip? We'd love to hear from you."
          />

          <div className="grid gap-12 lg:grid-cols-2">
            <ContactForm />

            <div className="space-y-6">
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="mb-4 font-heading text-lg font-semibold">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <a href={`tel:${PHONE}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {PHONE}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a href={`mailto:${EMAIL}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Address</p>
                      <p className="text-sm text-muted-foreground">{ADDRESS}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-sm backdrop-blur-lg">
                <h3 className="mb-2 font-heading text-lg font-semibold">Book via WhatsApp</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  The fastest way to get a response. Message us directly on WhatsApp.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-lg bg-green-500 px-2.5 text-sm font-medium whitespace-nowrap text-white transition-all hover:bg-green-600"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="aspect-[21/9] rounded-xl bg-muted shadow-sm" />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
