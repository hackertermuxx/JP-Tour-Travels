-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Packages table
CREATE TABLE packages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  destination_id UUID,
  description TEXT,
  price DECIMAL(10, 2),
  duration TEXT,
  image_url TEXT,
  itinerary JSONB DEFAULT '[]',
  inclusions TEXT[] DEFAULT '{}',
  exclusions TEXT[] DEFAULT '{}',
  highlights TEXT[] DEFAULT '{}',
  is_featured BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Destinations table
CREATE TABLE destinations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  image_url TEXT,
  region TEXT,
  is_featured BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Vehicles table
CREATE TABLE vehicles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('sedan', 'suv', 'hatchback', 'luxury', 'tempo', 'bus')),
  description TEXT,
  capacity INTEGER,
  price_per_km DECIMAL(10, 2),
  image_url TEXT,
  features TEXT[] DEFAULT '{}',
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Gallery table
CREATE TABLE gallery (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  url TEXT NOT NULL,
  alt TEXT,
  category TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Blog posts table
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT,
  image_url TEXT,
  author TEXT DEFAULT 'JP Tour Travels',
  tags TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Reviews table
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  text TEXT NOT NULL,
  image_url TEXT,
  package_id UUID REFERENCES packages(id) ON DELETE SET NULL,
  is_featured BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- FAQ table
CREATE TABLE faqs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT DEFAULT 'general',
  display_order INTEGER DEFAULT 0,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Contact submissions table
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Site settings table
CREATE TABLE site_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  site_name TEXT DEFAULT 'JP Tour Travels',
  logo_url TEXT,
  favicon_url TEXT,
  whatsapp_number TEXT,
  email TEXT,
  phone TEXT,
  address TEXT,
  social_links JSONB DEFAULT '{}',
  seo_defaults JSONB DEFAULT '{}',
  homepage_content JSONB DEFAULT '{}',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add foreign key for packages.destination_id
ALTER TABLE packages
  ADD CONSTRAINT fk_package_destination
  FOREIGN KEY (destination_id)
  REFERENCES destinations(id)
  ON DELETE SET NULL;

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply updated_at triggers
CREATE TRIGGER update_packages_updated_at
  BEFORE UPDATE ON packages
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_destinations_updated_at
  BEFORE UPDATE ON destinations
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_vehicles_updated_at
  BEFORE UPDATE ON vehicles
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_site_settings_updated_at
  BEFORE UPDATE ON site_settings
  EXECUTE FUNCTION update_updated_at();

-- Enable Row Level Security
ALTER TABLE packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Public read packages" ON packages FOR SELECT USING (status = 'published');
CREATE POLICY "Public read destinations" ON destinations FOR SELECT USING (status = 'published');
CREATE POLICY "Public read gallery" ON gallery FOR SELECT USING (true);
CREATE POLICY "Public read blog_posts" ON blog_posts FOR SELECT USING (status = 'published');
CREATE POLICY "Public read reviews" ON reviews FOR SELECT USING (status = 'published');
CREATE POLICY "Public read faqs" ON faqs FOR SELECT USING (status = 'published');
CREATE POLICY "Public read vehicles" ON vehicles FOR SELECT USING (true);
CREATE POLICY "Public read site_settings" ON site_settings FOR SELECT USING (true);

-- Insert default settings
INSERT INTO site_settings (site_name, seo_defaults)
VALUES ('JP Tour Travels', '{"title": "JP Tour Travels", "description": "Explore the world with JP Tour Travels"}')
ON CONFLICT (id) DO NOTHING;
