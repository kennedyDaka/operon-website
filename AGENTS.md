# Operon Systems — Digital Operations Website

This is the marketing website for Operon Systems, a software consultancy based in Lilongwe, Malawi.

## Tech Stack

- React 19 + TypeScript
- TanStack Start (SSR)
- Tailwind CSS v4
- shadcn/ui components
- Supabase (backend for contact form submissions)
- Deployed on Vercel

## Development

```bash
bun install
bun run dev
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your Supabase credentials:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Deployment

Push to the `main` branch to trigger automatic deployment on Vercel.
