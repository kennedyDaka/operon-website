import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ContactSubmission = {
  id?: string;
  industry: string;
  challenge: string;
  current_systems: string;
  team_size: string;
  timeline: string;
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  notes: string;
  created_at?: string;
};

export async function submitContactForm(data: Omit<ContactSubmission, "id" | "created_at">) {
  const { error } = await supabase.from("contact_submissions").insert(data);
  if (error) throw error;
}
