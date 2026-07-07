import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jptourtravels.com";

  const routes = [
    "",
    "/packages",
    "/packages/kashmir-paradise",
    "/packages/goa-beach-escape",
    "/packages/manali-adventure",
    "/destinations",
    "/destinations/kashmir",
    "/about",
    "/gallery",
    "/blog",
    "/reviews",
    "/faq",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
