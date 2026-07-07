const pg = require('pg');

const sql = `
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS packages (
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

CREATE TABLE IF NOT EXISTS destinations (
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

CREATE TABLE IF NOT EXISTS vehicles (
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

CREATE TABLE IF NOT EXISTS gallery (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  url TEXT NOT NULL,
  alt TEXT,
  category TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS blog_posts (
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

CREATE TABLE IF NOT EXISTS reviews (
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

CREATE TABLE IF NOT EXISTS faqs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT DEFAULT 'general',
  display_order INTEGER DEFAULT 0,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  package_id UUID REFERENCES packages(id) ON DELETE SET NULL,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_email TEXT,
  people_count INTEGER,
  travel_date DATE,
  notes TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS site_settings (
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

ALTER TABLE packages DROP CONSTRAINT IF EXISTS fk_package_destination;
ALTER TABLE packages ADD CONSTRAINT fk_package_destination
  FOREIGN KEY (destination_id) REFERENCES destinations(id) ON DELETE SET NULL;

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = NOW(); RETURN NEW; END; $$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_packages_updated_at ON packages;
CREATE TRIGGER update_packages_updated_at BEFORE UPDATE ON packages EXECUTE FUNCTION update_updated_at();
DROP TRIGGER IF EXISTS update_destinations_updated_at ON destinations;
CREATE TRIGGER update_destinations_updated_at BEFORE UPDATE ON destinations EXECUTE FUNCTION update_updated_at();
DROP TRIGGER IF EXISTS update_vehicles_updated_at ON vehicles;
CREATE TRIGGER update_vehicles_updated_at BEFORE UPDATE ON vehicles EXECUTE FUNCTION update_updated_at();
DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts EXECUTE FUNCTION update_updated_at();
DROP TRIGGER IF EXISTS update_site_settings_updated_at ON site_settings;
CREATE TRIGGER update_site_settings_updated_at BEFORE UPDATE ON site_settings EXECUTE FUNCTION update_updated_at();

ALTER TABLE packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read packages" ON packages;
CREATE POLICY "Public read packages" ON packages FOR SELECT USING (status = 'published');
DROP POLICY IF EXISTS "Public read destinations" ON destinations;
CREATE POLICY "Public read destinations" ON destinations FOR SELECT USING (status = 'published');
DROP POLICY IF EXISTS "Public read gallery" ON gallery;
CREATE POLICY "Public read gallery" ON gallery FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public read blog_posts" ON blog_posts;
CREATE POLICY "Public read blog_posts" ON blog_posts FOR SELECT USING (status = 'published');
DROP POLICY IF EXISTS "Public read reviews" ON reviews;
CREATE POLICY "Public read reviews" ON reviews FOR SELECT USING (status = 'published');
DROP POLICY IF EXISTS "Public read faqs" ON faqs;
CREATE POLICY "Public read faqs" ON faqs FOR SELECT USING (status = 'published');
DROP POLICY IF EXISTS "Public read vehicles" ON vehicles;
CREATE POLICY "Public read vehicles" ON vehicles FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public read site_settings" ON site_settings;
CREATE POLICY "Public read site_settings" ON site_settings FOR SELECT USING (true);

DROP POLICY IF EXISTS "Admin all packages" ON packages;
CREATE POLICY "Admin all packages" ON packages FOR ALL TO authenticated USING (true);
DROP POLICY IF EXISTS "Admin all destinations" ON destinations;
CREATE POLICY "Admin all destinations" ON destinations FOR ALL TO authenticated USING (true);
DROP POLICY IF EXISTS "Admin all vehicles" ON vehicles;
CREATE POLICY "Admin all vehicles" ON vehicles FOR ALL TO authenticated USING (true);
DROP POLICY IF EXISTS "Admin all gallery" ON gallery;
CREATE POLICY "Admin all gallery" ON gallery FOR ALL TO authenticated USING (true);
DROP POLICY IF EXISTS "Admin all blog_posts" ON blog_posts;
CREATE POLICY "Admin all blog_posts" ON blog_posts FOR ALL TO authenticated USING (true);
DROP POLICY IF EXISTS "Admin all reviews" ON reviews;
CREATE POLICY "Admin all reviews" ON reviews FOR ALL TO authenticated USING (true);
DROP POLICY IF EXISTS "Admin all faqs" ON faqs;
CREATE POLICY "Admin all faqs" ON faqs FOR ALL TO authenticated USING (true);
DROP POLICY IF EXISTS "Admin all contact_submissions" ON contact_submissions;
CREATE POLICY "Admin all contact_submissions" ON contact_submissions FOR ALL TO authenticated USING (true);
DROP POLICY IF EXISTS "Admin all bookings" ON bookings;
CREATE POLICY "Admin all bookings" ON bookings FOR ALL TO authenticated USING (true);
DROP POLICY IF EXISTS "Admin all site_settings" ON site_settings;
CREATE POLICY "Admin all site_settings" ON site_settings FOR ALL TO authenticated USING (true);

INSERT INTO site_settings (site_name, seo_defaults)
VALUES ('JP Tour Travels', '{"title": "JP Tour Travels", "description": "Explore the world with JP Tour Travels"}')
ON CONFLICT DO NOTHING;
`;

async function main() {
  const client = new pg.Client({
    connectionString: 'postgresql://postgres:adityaraj%402004@db.lpjmzxcsyyazzfxzxuzd.supabase.co:5432/postgres',
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log("Connected to database!");
    await client.query(sql);
    console.log("Migration completed!");
    const tables = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema='public' ORDER BY table_name");
    console.log("Tables:", tables.rows.map(r => r.table_name).join(", "));
  } catch(e) {
    console.error("Error:", e.message);
  } finally {
    await client.end();
  }
}

main();
