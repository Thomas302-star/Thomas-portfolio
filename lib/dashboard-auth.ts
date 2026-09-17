import { createHmac, timingSafeEqual } from "crypto";

export const DASHBOARD_SESSION_COOKIE = "inquiry_dashboard_session";
export const DASHBOARD_SESSION_MAX_AGE = 60 * 60 * 8;

function sign(value: string, secret: string) {
  return createHmac("sha256", secret).update(value).digest("hex");
}

export function createDashboardSession() {
  const secret = process.env.DASHBOARD_SESSION_SECRET;
  if (!secret) return null;

  const expiresAt = String(Date.now() + DASHBOARD_SESSION_MAX_AGE * 1000);
  return `${expiresAt}.${sign(expiresAt, secret)}`;
}

export function verifyDashboardSession(request: Request) {
  const secret = process.env.DASHBOARD_SESSION_SECRET;
  const cookieHeader = request.headers.get("cookie") ?? "";
  const match = cookieHeader.match(new RegExp(`(?:^|; )${DASHBOARD_SESSION_COOKIE}=([^;]+)`));

  if (!secret || !match) return false;

  const [expiresAt, signature] = decodeURIComponent(match[1]).split(".");
  if (!expiresAt || !signature || Number(expiresAt) < Date.now()) return false;

  const expected = sign(expiresAt, secret);
  const actualBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);

  return actualBuffer.length === expectedBuffer.length && timingSafeEqual(actualBuffer, expectedBuffer);
}
