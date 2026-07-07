import { NextResponse } from "next/server";
import { getGalleryImages, createGalleryImage } from "@/lib/services/gallery";

export async function GET() {
  try {
    const images = await getGalleryImages();
    return NextResponse.json({ success: true, data: images });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to fetch gallery" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const alt = formData.get("alt") as string | null;
    const category = formData.get("category") as string | null;

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file provided" },
        { status: 400 }
      );
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { success: false, message: "Invalid file type. Allowed: JPEG, PNG, WebP" },
        { status: 400 }
      );
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, message: "File too large. Maximum 5MB" },
        { status: 400 }
      );
    }

    const image = await createGalleryImage({
      url: URL.createObjectURL(file),
      alt: alt || undefined,
      category: category || undefined,
    });

    return NextResponse.json({ success: true, data: image }, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to upload image" },
      { status: 500 }
    );
  }
}
