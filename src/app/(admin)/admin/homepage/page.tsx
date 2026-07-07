"use client";

import { useState } from "react";
import { PageTransition } from "@/components/shared/PageTransition";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Save, Upload } from "lucide-react";
import { toast } from "sonner";

export default function AdminHomepagePage() {
  const [heroTitle, setHeroTitle] = useState("Explore the World with JP Tour Travels");
  const [heroSubtitle, setHeroSubtitle] = useState("Premium travel packages, unforgettable experiences.");
  const [ctaTitle, setCtaTitle] = useState("Ready for Your Next Adventure?");
  const [ctaText, setCtaText] = useState("Contact us on WhatsApp to plan your dream trip today.");
  const [statsHeading, setStatsHeading] = useState("Our Achievements");
  const [galleryHeading, setGalleryHeading] = useState("Moments We've Captured");
  const [reviewsHeading, setReviewsHeading] = useState("What Our Travelers Say");

  const handleSave = () => {
    toast.success("Homepage content saved successfully");
  };

  return (
    <PageTransition>
      <div className="flex h-16 items-center border-b px-6">
        <h1 className="text-xl font-bold text-blue-950">Homepage CMS</h1>
      </div>
      <div className="mx-auto max-w-4xl space-y-8 p-6">
        <div className="rounded-xl border bg-white p-6 shadow-soft">
          <h2 className="mb-4 text-lg font-semibold text-blue-950">Hero Section</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="heroTitle">Title</Label>
              <Input id="heroTitle" value={heroTitle} onChange={(e) => setHeroTitle(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="heroSubtitle">Subtitle</Label>
              <Textarea id="heroSubtitle" value={heroSubtitle} onChange={(e) => setHeroSubtitle(e.target.value)} />
            </div>
            <div>
              <Label>Hero Background</Label>
              <div className="flex items-center gap-4">
                <Button variant="outline">
                  <Upload className="mr-2 h-4 w-4" /> Upload Image
                </Button>
                <span className="text-sm text-gray-500">Recommended: 1920x1080</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-soft">
          <h2 className="mb-4 text-lg font-semibold text-blue-950">CTA Section</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="ctaTitle">Title</Label>
              <Input id="ctaTitle" value={ctaTitle} onChange={(e) => setCtaTitle(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="ctaText">Text</Label>
              <Textarea id="ctaText" value={ctaText} onChange={(e) => setCtaText(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-soft">
          <h2 className="mb-4 text-lg font-semibold text-blue-950">Section Headings</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="statsHeading">Stats Section</Label>
              <Input id="statsHeading" value={statsHeading} onChange={(e) => setStatsHeading(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="galleryHeading">Gallery Section</Label>
              <Input id="galleryHeading" value={galleryHeading} onChange={(e) => setGalleryHeading(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="reviewsHeading">Reviews Section</Label>
              <Input id="reviewsHeading" value={reviewsHeading} onChange={(e) => setReviewsHeading(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" /> Save Changes
          </Button>
        </div>
      </div>
    </PageTransition>
  );
}
