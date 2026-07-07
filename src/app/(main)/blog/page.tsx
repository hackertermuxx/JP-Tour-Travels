"use client";

import { useState } from "react";
import { PageTransition } from "@/components/shared/PageTransition";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SearchBar } from "@/components/shared/SearchBar";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

const BLOG_POSTS = [
  { title: "Top 10 Places to Visit in Kashmir", slug: "top-10-kashmir", excerpt: "Discover the breathtaking beauty of Kashmir — from Dal Lake to Gulmarg.", author: "JP Team", date: "Jan 15, 2025", tags: ["Kashmir", "Travel Guide"] },
  { title: "Complete Goa Travel Guide 2025", slug: "goa-travel-guide-2025", excerpt: "Everything you need to know before planning your Goa trip.", author: "JP Team", date: "Jan 10, 2025", tags: ["Goa", "Travel Guide"] },
  { title: "Himalayan Trekking: A Beginner's Guide", slug: "himalayan-trekking-guide", excerpt: "Essential tips and tricks for your first Himalayan trekking adventure.", author: "JP Team", date: "Dec 28, 2024", tags: ["Trekking", "Adventure"] },
  { title: "Best Time to Visit Rajasthan", slug: "best-time-rajasthan", excerpt: "Plan your Rajasthan trip with our seasonal guide.", author: "JP Team", date: "Dec 20, 2024", tags: ["Rajasthan", "Travel Tips"] },
  { title: "Kerala Backwaters: A Complete Guide", slug: "kerala-backwaters-guide", excerpt: "Everything about houseboat cruises and backwater experiences.", author: "JP Team", date: "Dec 15, 2024", tags: ["Kerala", "Travel Guide"] },
  { title: "Budget Travel Tips for India", slug: "budget-travel-tips", excerpt: "Travel India on a budget without compromising on experience.", author: "JP Team", date: "Dec 10, 2024", tags: ["Budget", "Travel Tips"] },
];

export default function BlogPage() {
  const [search, setSearch] = useState("");

  const filtered = BLOG_POSTS.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageTransition>
      <div className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog" }]} />
          <SectionHeading
            title="Travel Blog"
            subtitle="Tips, guides, and stories from our travels."
          />
          <SearchBar
            placeholder="Search blog posts..."
            value={search}
            onChange={setSearch}
            className="mb-8 max-w-md"
          />
          {filtered.length > 0 ? (
            <BlogGrid posts={filtered} />
          ) : (
            <p className="py-12 text-center text-muted-foreground">No posts found.</p>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
