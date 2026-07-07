import { NextResponse } from "next/server";
import { getDestinations, createDestination } from "@/lib/services/destinations";

export async function GET() {
  try {
    const destinations = await getDestinations({ status: "published" });
    return NextResponse.json({ success: true, data: destinations });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to fetch destinations" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const destination = await createDestination(body);
    return NextResponse.json({ success: true, data: destination }, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to create destination" },
      { status: 400 }
    );
  }
}
