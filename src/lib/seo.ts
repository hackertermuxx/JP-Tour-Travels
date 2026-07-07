import type { Metadata } from "next";

interface SEOInput {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  keywords?: string;
}

export function generateMetadata({
  title,
  description,
  path,
  ogImage,
  keywords,
}: SEOInput): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jptourtravels.com";
  const fullTitle = `${title} | JP Tour Travels`;

  return {
    title: fullTitle,
    description,
    keywords,
    openGraph: {
      title: fullTitle,
      description,
      url: `${baseUrl}${path}`,
      siteName: "JP Tour Travels",
      images: ogImage ? [{ url: ogImage }] : undefined,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
  };
}
