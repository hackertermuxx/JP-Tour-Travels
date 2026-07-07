import { getSupabaseAdmin } from "@/lib/supabase/admin";

export async function getGalleryImages(options?: { category?: string }) {
  let query = getSupabaseAdmin().from("gallery").select("*");

  if (options?.category) {
    query = query.eq("category", options.category);
  }

  const { data, error } = await query.order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data;
}

export async function createGalleryImage(input: {
  url: string;
  alt?: string;
  category?: string;
}) {
  const { data, error } = await getSupabaseAdmin()
    .from("gallery")
    .insert(input)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function deleteGalleryImage(id: string) {
  const { error } = await getSupabaseAdmin()
    .from("gallery")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);
}
