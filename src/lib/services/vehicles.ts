import { getSupabaseAdmin } from "@/lib/supabase/admin";

export async function getVehicles(options?: { is_available?: boolean }) {
  let query = getSupabaseAdmin().from("vehicles").select("*");

  if (options?.is_available !== undefined) {
    query = query.eq("is_available", options.is_available);
  }

  const { data, error } = await query.order("name", { ascending: true });

  if (error) throw new Error(error.message);
  return data;
}

export async function getVehicleById(id: string) {
  const { data, error } = await getSupabaseAdmin()
    .from("vehicles")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  return data;
}
