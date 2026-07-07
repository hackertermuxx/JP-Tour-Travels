"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEOEditor } from "@/components/admin/SEOEditor";

export default function AdminSEOPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold">SEO</h1>
        <p className="text-muted-foreground">Manage SEO metadata for all pages.</p>
      </div>

      <Tabs defaultValue="home">
        <TabsList>
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="packages">Packages</TabsTrigger>
          <TabsTrigger value="destinations">Destinations</TabsTrigger>
          <TabsTrigger value="blog">Blog</TabsTrigger>
        </TabsList>

        <TabsContent value="home" className="mt-6">
          <SEOEditor
            page="home"
            defaultTitle="JP Tour Travels — Explore the World with Premium Travel Packages"
            defaultDescription="Discover curated travel packages, destinations, and experiences with JP Tour Travels. Book via WhatsApp for the best deals."
          />
        </TabsContent>

        <TabsContent value="packages" className="mt-6">
          <SEOEditor
            page="packages"
            defaultTitle="Travel Packages | JP Tour Travels"
            defaultDescription="Browse our wide range of curated travel packages across India. From Kashmir to Kerala, find your perfect getaway."
          />
        </TabsContent>

        <TabsContent value="destinations" className="mt-6">
          <SEOEditor
            page="destinations"
            defaultTitle="Destinations | JP Tour Travels"
            defaultDescription="Explore top travel destinations across India. Find information about places, attractions, and travel tips."
          />
        </TabsContent>

        <TabsContent value="blog" className="mt-6">
          <SEOEditor
            page="blog"
            defaultTitle="Travel Blog | JP Tour Travels"
            defaultDescription="Travel tips, guides, and stories from JP Tour Travels. Stay updated with the latest travel insights."
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
