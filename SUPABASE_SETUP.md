# Supabase Setup

Follow these steps to set up the Supabase backend for the contact form.

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Choose a project name (e.g., "operon-systems")
4. Set a database password
5. Choose a region closest to your users (e.g., US East)
6. Click "Create new project"

## 2. Get Your Credentials

Once the project is created:

1. Go to **Settings** → **API**
2. Copy the **Project URL** (looks like `https://xxxx.supabase.co`)
3. Copy the **anon/public** key

## 3. Run the Migration

Go to the **SQL Editor** in Supabase and run this SQL:

```sql
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
```

## 4. Configure Environment Variables

Create a `.env.local` file in the project root:

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## 5. Deploy to Vercel

Add these environment variables in your Vercel project settings:

- `VITE_SUPABASE_URL` = your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` = your Supabase anon key

## 6. Test the Form

After deployment, submit a test form and check the **Table Editor** in Supabase to see the data.
