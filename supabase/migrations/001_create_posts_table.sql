-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  featured BOOLEAN DEFAULT false,
  category TEXT,
  tags TEXT[] DEFAULT '{}',
  excerpt TEXT,
  content TEXT,
  seo_title TEXT,
  meta_description TEXT,
  featured_image TEXT,
  publish_date DATE,
  read_time INTEGER DEFAULT 5,
  author_name TEXT DEFAULT 'Maleo AI Team',
  author_role TEXT,
  author_bio TEXT,
  author_avatar TEXT,
  author_linkedin TEXT,
  author_twitter TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on slug for faster lookups
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS idx_posts_status ON posts(status);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON posts(created_at DESC);

-- Enable Row Level Security
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations for service role
CREATE POLICY "Allow all operations for service role" ON posts
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Create policy to allow public/anonymous users to read published posts
CREATE POLICY "Allow public read access to published posts" ON posts
  FOR SELECT
  USING (status = 'published');
