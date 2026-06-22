-- Create contact_submissions table for the consultation booking form
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  industry TEXT NOT NULL,
  challenge TEXT NOT NULL,
  current_systems TEXT NOT NULL,
  team_size TEXT NOT NULL,
  timeline TEXT NOT NULL,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  role TEXT DEFAULT '',
  email TEXT NOT NULL,
  phone TEXT DEFAULT '',
  notes TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (the contact form is public)
CREATE POLICY "Allow anonymous inserts" ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated reads (for admin dashboard later)
CREATE POLICY "Allow authenticated reads" ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at
  ON contact_submissions (created_at DESC);
