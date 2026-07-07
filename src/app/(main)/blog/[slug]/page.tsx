"use client";

import { useParams } from "next/navigation";
import { Calendar, User } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Separator } from "@/components/ui/separator";

const BLOG_DATA: Record<string, { title: string; content: string; author: string; date: string }> = {
  "top-10-kashmir": {
    title: "Top 10 Places to Visit in Kashmir",
    author: "JP Team",
    date: "January 15, 2025",
    content: "Kashmir, often called Paradise on Earth, is a breathtaking destination that offers something for every traveler. From the serene Dal Lake to the snow-capped peaks of Gulmarg, here are the top 10 places you must visit.\n\n1. Dal Lake - Experience a shikara ride and stay in a houseboat.\n2. Gulmarg - Famous for its gondola ride and skiing.\n3. Pahalgam - Known for its lush valleys and betaab valley.\n4. Sonmarg - The meadow of gold with stunning landscapes.\n5. Mughal Gardens - Nishat Bagh, Shalimar Bagh, and Chashme Shahi.\n6. Shankaracharya Temple - Ancient temple with panoramic views.\n7. Yusmarg - Offbeat destination with peaceful meadows.\n8. Doodhpathri - A hidden gem with milky streams.\n9. Aru Valley - Perfect for camping and trekking.\n10. Wular Lake - One of the largest freshwater lakes in Asia.\n\nPlan your Kashmir trip with JP Tour Travels for a seamless experience!",
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = BLOG_DATA[slug] || {
    title: "Blog Post",
    author: "JP Tour Travels",
    date: new Date().toLocaleDateString(),
    content: "Content coming soon.",
  };

  return (
    <div className="py-8">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
        <article>
          <h1 className="font-heading text-3xl font-bold leading-tight md:text-4xl">{post.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
          </div>
          <Separator className="my-8" />
          <div className="prose prose-gray max-w-none leading-relaxed">
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("http")) {
                return null;
              }
              if (line.match(/^\d+\./)) {
                return (
                  <p key={i} className="mb-2">
                    {line}
                  </p>
                );
              }
              if (line.trim() === "") return <br key={i} />;
              return (
                <p key={i} className="mb-4">
                  {line}
                </p>
              );
            })}
          </div>
        </article>
      </div>
    </div>
  );
}
