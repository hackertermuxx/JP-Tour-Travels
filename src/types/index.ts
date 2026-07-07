export interface Package {
  id: string;
  title: string;
  slug: string;
  destination_id: string;
  description: string;
  price: number;
  duration: string;
  image_url?: string;
  itinerary?: ItineraryItem[];
  inclusions?: string[];
  exclusions?: string[];
  highlights?: string[];
  is_featured?: boolean;
  status: "draft" | "published";
  created_at: string;
  updated_at: string;
}

export interface ItineraryItem {
  day: number;
  title: string;
  description: string;
}

export interface Destination {
  id: string;
  name: string;
  slug: string;
  description: string;
  image_url?: string;
  region?: string;
  is_featured?: boolean;
  status: "draft" | "published";
  created_at: string;
  updated_at: string;
}

export interface Vehicle {
  id: string;
  name: string;
  type: "sedan" | "suv" | "hatchback" | "luxury" | "tempo" | "bus";
  description: string;
  capacity: number;
  price_per_km: number;
  image_url?: string;
  features?: string[];
  is_available: boolean;
  created_at: string;
  updated_at: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category?: string;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url?: string;
  author?: string;
  tags?: string[];
  status: "draft" | "published";
  created_at: string;
  updated_at: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  image_url?: string;
  package_id?: string;
  is_featured?: boolean;
  status: "draft" | "published";
  created_at: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
  status: "draft" | "published";
  created_at: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

export interface SiteSettings {
  id: string;
  site_name: string;
  logo_url?: string;
  favicon_url?: string;
  whatsapp_number: string;
  email: string;
  phone: string;
  address: string;
  social_links: Record<string, string>;
  seo_defaults: SEOMetadata;
  updated_at: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  og_image?: string;
  keywords?: string;
}

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: "admin" | "editor";
  created_at: string;
}

export interface HomepageContent {
  hero_title: string;
  hero_subtitle: string;
  hero_image_url: string;
  cta_title: string;
  cta_description: string;
  cta_whatsapp_message: string;
  about_summary: string;
  stats: StatItem[];
  updated_at: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon?: string;
}
