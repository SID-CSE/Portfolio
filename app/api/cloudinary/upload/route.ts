import { NextResponse } from "next/server";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { hasAdminToken } from "@/lib/api-auth";

const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;

export async function POST(request: Request) {
  if (!hasAdminToken(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");
  const folder = String(formData.get("folder") ?? "portfolio");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Missing file upload." }, { status: 400 });
  }

  if (file.size > MAX_UPLOAD_BYTES) {
    return NextResponse.json({ error: "File exceeds the 10 MB limit." }, { status: 413 });
  }

  try {
    const result = await uploadToCloudinary(file, folder);

    return NextResponse.json({
      ok: true,
      assetId: result.asset_id,
      publicId: result.public_id,
      secureUrl: result.secure_url,
      width: result.width,
      height: result.height,
      format: result.format,
      bytes: result.bytes,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Upload failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
