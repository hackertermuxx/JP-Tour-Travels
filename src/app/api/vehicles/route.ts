import { NextResponse } from "next/server";
import { getVehicles } from "@/lib/services/vehicles";

export async function GET() {
  try {
    const vehicles = await getVehicles({ is_available: true });
    return NextResponse.json({ success: true, data: vehicles });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to fetch vehicles" },
      { status: 500 }
    );
  }
}
