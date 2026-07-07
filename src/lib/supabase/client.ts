import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

const FALLBACK_URL = "https://lpjmzxcsyyazzfxzxuzd.supabase.co";
const FALLBACK_KEY = "sb_publishable_XrhQ0b8_MHmnRvCnXOhJ8Q_dzpqJ-7h";

export function getSupabaseClient(): SupabaseClient {
  if (client) return client;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || FALLBACK_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || FALLBACK_KEY;

  client = createClient(supabaseUrl, supabaseAnonKey);
  return client;
}
