import { NextResponse } from "next/server";
import {
  createDashboardSession,
  DASHBOARD_SESSION_COOKIE,
  DASHBOARD_SESSION_MAX_AGE,
} from "@/lib/dashboard-auth";

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

    const session = createDashboardSession();
    if (!session) {
      return NextResponse.json(
        { error: "Dashboard authentication is not configured." },
        { status: 500 },
      );
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set(DASHBOARD_SESSION_COOKIE, session, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: DASHBOARD_SESSION_MAX_AGE,
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
