import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { destinationSchema, type DestinationInput } from "@/lib/validations";

export async function getDestinations(options?: { status?: string }) {
  let query = getSupabaseAdmin().from("destinations").select("*");

  if (options?.status) {
    query = query.eq("status", options.status);
  }

  const { data, error } = await query.order("name", { ascending: true });

  if (error) throw new Error(error.message);
  return data;
}

export async function getDestinationBySlug(slug: string) {
  const { data, error } = await getSupabaseAdmin()
    .from("destinations")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function createDestination(input: DestinationInput) {
  const validation = destinationSchema.safeParse(input);
  if (!validation.success) {
    throw new Error(validation.error.issues.map((e) => e.message).join(", "));
  }

  const { data, error } = await getSupabaseAdmin()
    .from("destinations")
    .insert(validation.data)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function updateDestination(id: string, input: Partial<DestinationInput>) {
  const { data, error } = await getSupabaseAdmin()
    .from("destinations")
    .update(input)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function deleteDestination(id: string) {
  const { error } = await getSupabaseAdmin()
    .from("destinations")
    .update({ status: "draft" })
    .eq("id", id);

  if (error) throw new Error(error.message);
}
