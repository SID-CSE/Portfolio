import { timingSafeEqual } from "node:crypto";

export function hasAdminToken(request: Request) {
  const configuredToken = process.env.CLOUDINARY_ADMIN_TOKEN;
  const requestToken = request.headers.get("x-admin-token");

  if (!configuredToken || !requestToken) {
    return false;
  }

  const configuredBuffer = Buffer.from(configuredToken);
  const requestBuffer = Buffer.from(requestToken);

  return (
    configuredBuffer.length === requestBuffer.length &&
    timingSafeEqual(configuredBuffer, requestBuffer)
  );
}
