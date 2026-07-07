# Phase 8: Migration Strategy

## Content Preservation
- All existing content (packages, destinations, gallery, blog) will be migrated from the old site
- Manual migration via Supabase dashboard or CSV import
- Images re-uploaded via Media Library or direct Cloudinary URL

## Data Migration Steps
1. Export old data as CSV
2. Transform to match new schema (see supabase/migrations/)
3. Import via Supabase SQL editor or REST API
4. Verify data integrity

## Media Handling
- Images stored in Cloudinary or Supabase Storage
- Media URLs stored in database
- Migration: Download from old host, upload to Cloudinary, update URLs

## SEO Preservation
- Maintain existing URL structure where possible
- Set up 301 redirects for changed URLs
- Preserve existing meta titles and descriptions
