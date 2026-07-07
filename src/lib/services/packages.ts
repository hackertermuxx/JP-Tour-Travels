import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { packageSchema, type PackageInput } from "@/lib/validations";

export async function getPackages(options?: {
  status?: string;
  featured?: boolean;
  page?: number;
  limit?: number;
  search?: string;
}) {
  let query = getSupabaseAdmin().from("packages").select("*", { count: "exact" });

  if (options?.status) {
    query = query.eq("status", options.status);
  }

  if (options?.featured) {
    query = query.eq("is_featured", true);
  }

  if (options?.search) {
    query = query.ilike("title", `%${options.search}%`);
  }

  query = query.order("created_at", { ascending: false });

  if (options?.page && options?.limit) {
    const from = (options.page - 1) * options.limit;
    const to = from + options.limit - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) throw new Error(error.message);

  return {
    data: data || [],
    total: count || 0,
    page: options?.page || 1,
    limit: options?.limit || data?.length || 0,
    totalPages: options?.limit ? Math.ceil((count || 0) / options.limit) : 1,
  };
}

export async function getPackageBySlug(slug: string) {
  const { data, error } = await getSupabaseAdmin()
    .from("packages")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function getPackageById(id: string) {
  const { data, error } = await getSupabaseAdmin()
    .from("packages")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function createPackage(input: PackageInput) {
  const validation = packageSchema.safeParse(input);
  if (!validation.success) {
    throw new Error(validation.error.issues.map((e) => e.message).join(", "));
  }

  const existing = await getSupabaseAdmin()
    .from("packages")
    .select("id")
    .eq("slug", validation.data.slug)
    .maybeSingle();

  if (existing.data) {
    throw new Error("A package with this slug already exists");
  }

  const { data, error } = await getSupabaseAdmin()
    .from("packages")
    .insert(validation.data)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function updatePackage(id: string, input: Partial<PackageInput>) {
  const { data, error } = await getSupabaseAdmin()
    .from("packages")
    .update(input)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function deletePackage(id: string) {
  const { error } = await getSupabaseAdmin()
    .from("packages")
    .update({ status: "draft" })
    .eq("id", id);

  if (error) throw new Error(error.message);
}
