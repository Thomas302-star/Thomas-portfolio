import { createHmac, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";

const SESSION_MAX_AGE = 60 * 60 * 8;

function sign(value: string, secret: string) {
  return createHmac("sha256", secret).update(value).digest("hex");
}

export async function POST(request: Request) {
  const password = process.env.DASHBOARD_PASSWORD;
  const secret = process.env.DASHBOARD_SESSION_SECRET;

  if (!password || !secret) {
    return NextResponse.json(
      { error: "Dashboard authentication is not configured." },
      { status: 500 },
    );
  }

  try {
    const body = await request.json();
    const submittedPassword = typeof body.password === "string" ? body.password : "";

    if (submittedPassword.length === 0 || submittedPassword !== password) {
      return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
    }

    const expiresAt = String(Date.now() + SESSION_MAX_AGE * 1000);
    const value = `${expiresAt}.${sign(expiresAt, secret)}`;
    const response = NextResponse.json({ success: true });

    response.cookies.set("inquiry_dashboard_session", value, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: SESSION_MAX_AGE,
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}

export function verifyDashboardSession(request: Request) {
  const secret = process.env.DASHBOARD_SESSION_SECRET;
  const cookieHeader = request.headers.get("cookie") ?? "";
  const match = cookieHeader.match(/(?:^|; )inquiry_dashboard_session=([^;]+)/);

  if (!secret || !match) return false;

  const [expiresAt, signature] = decodeURIComponent(match[1]).split(".");
  if (!expiresAt || !signature || Number(expiresAt) < Date.now()) return false;

  const expected = sign(expiresAt, secret);
  const actualBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);

  return actualBuffer.length === expectedBuffer.length && timingSafeEqual(actualBuffer, expectedBuffer);
}
