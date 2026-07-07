const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

export async function uploadToCloudinary(file: File): Promise<string> {
  if (!CLOUD_NAME || !UPLOAD_PRESET) {
    throw new Error("Cloudinary not configured");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);
  formData.append("folder", "jp-tour-travels");

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    { method: "POST", body: formData }
  );

  if (!response.ok) {
    throw new Error("Failed to upload to Cloudinary");
  }

  const data = await response.json();
  return data.secure_url;
}

export function getCloudinaryTransformations(url: string, options: {
  width?: number;
  height?: number;
  quality?: number;
  format?: string;
} = {}): string {
  if (!url.includes("cloudinary")) return url;

  const transforms: string[] = [];
  if (options.width) transforms.push(`w_${options.width}`);
  if (options.height) transforms.push(`h_${options.height}`);
  if (options.quality) transforms.push(`q_${options.quality}`);
  if (options.format) transforms.push(`f_${options.format}`);

  if (transforms.length === 0) return url;

  const transformStr = transforms.join(",");
  return url.replace("/upload/", `/upload/${transformStr}/`);
}
