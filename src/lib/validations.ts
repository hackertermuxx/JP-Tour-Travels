import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const packageSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9-]+$/, "Slug must be lowercase with hyphens"),
  destination_id: z.string().uuid().optional(),
  description: z.string().optional(),
  price: z.number().positive("Price must be positive").optional(),
  duration: z.string().optional(),
  image_url: z.string().url().optional(),
  itinerary: z.array(z.object({
    day: z.number(),
    title: z.string(),
    description: z.string(),
  })).optional(),
  highlights: z.array(z.string()).optional(),
  inclusions: z.array(z.string()).optional(),
  exclusions: z.array(z.string()).optional(),
  status: z.enum(["draft", "published"]).optional(),
});

export const gallerySchema = z.object({
  url: z.string().url(),
  alt: z.string().optional(),
  category: z.string().optional(),
});

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export const reviewSchema = z.object({
  name: z.string().min(1, "Name is required"),
  rating: z.number().min(1).max(5),
  text: z.string().min(1, "Review text is required"),
  package_id: z.string().uuid().optional(),
  status: z.enum(["draft", "published"]).optional(),
});

export const destinationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9-]+$/),
  description: z.string().optional(),
  region: z.string().optional(),
  status: z.enum(["draft", "published"]).optional(),
});

export const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9-]+$/),
  excerpt: z.string().optional(),
  content: z.string().optional(),
  tags: z.array(z.string()).optional(),
  status: z.enum(["draft", "published"]).optional(),
});

export type PackageInput = z.infer<typeof packageSchema>;
export type GalleryInput = z.infer<typeof gallerySchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type ReviewInput = z.infer<typeof reviewSchema>;
export type DestinationInput = z.infer<typeof destinationSchema>;
export type BlogInput = z.infer<typeof blogSchema>;
