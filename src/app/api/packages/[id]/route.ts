import { NextResponse } from "next/server";
import { updatePackage, deletePackage } from "@/lib/services/packages";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

async function requireAdmin() {
  const { data: { user } } = await getSupabaseAdmin().auth.getUser();
  if (!user) throw new Error("Unauthorized");
  return user;
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAdmin();
    const { id } = await params;
    const body = await request.json();
    const pkg = await updatePackage(id, body);
    return NextResponse.json({ success: true, data: pkg });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to update package";
    const status = message === "Unauthorized" ? 401 : 400;
    return NextResponse.json({ success: false, message }, { status });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAdmin();
    const { id } = await params;
    await deletePackage(id);
    return NextResponse.json({ success: true, message: "Package deleted" });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to delete package";
    const status = message === "Unauthorized" ? 401 : 400;
    return NextResponse.json({ success: false, message }, { status });
  }
}
