import { NextResponse } from "next/server";
import { deleteFromCloudinary } from "@/lib/cloudinary";

type DeletePayload = {
  publicId?: string;
};

export async function DELETE(request: Request) {
  const body = (await request.json().catch(() => null)) as DeletePayload | null;

  if (!body?.publicId) {
    return NextResponse.json({ error: "Missing publicId." }, { status: 400 });
  }

  try {
    const result = await deleteFromCloudinary(body.publicId);
    return NextResponse.json({ ok: true, result: result.result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Delete failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}