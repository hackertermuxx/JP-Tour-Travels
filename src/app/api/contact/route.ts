import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { success: false, message: "Validation failed", errors: validation.error.issues },
        { status: 400 }
      );
    }

    const { data, error } = await getSupabaseAdmin()
      .from("contact_submissions")
      .insert(validation.data)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
