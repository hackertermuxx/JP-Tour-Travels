import { NextResponse } from "next/server";
import { getPackages, createPackage } from "@/lib/services/packages";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

async function requireAdmin() {
  const { data: { user } } = await getSupabaseAdmin().auth.getUser();
  if (!user) {
    throw new Error("Unauthorized");
  }
  return user;
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = parseInt(url.searchParams.get("limit") || "12");
    const search = url.searchParams.get("search") || undefined;

    const result = await getPackages({
      status: "published",
      page,
      limit,
      search,
    });

    return NextResponse.json({ success: true, ...result });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to fetch packages" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await requireAdmin();
    const body = await request.json();
    const pkg = await createPackage(body);
    return NextResponse.json({ success: true, data: pkg }, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to create package";
    const status = message === "Unauthorized" ? 401 : 400;
    return NextResponse.json({ success: false, message }, { status });
  }
}
