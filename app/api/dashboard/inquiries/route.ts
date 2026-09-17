import { NextResponse } from "next/server";
import { verifyDashboardSession } from "@/lib/dashboard-auth";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const allowedStatuses = new Set(["new", "contacted", "in progress", "completed"]);

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
}

function configured() {
  return Boolean(supabaseUrl && serviceRoleKey);
}

export async function GET(request: Request) {
  if (!verifyDashboardSession(request)) return unauthorized();
  if (!configured()) {
    return NextResponse.json({ error: "Dashboard storage is not configured." }, { status: 500 });
  }

  const url = new URL(request.url);
  const status = url.searchParams.get("status");
  const search = url.searchParams.get("search")?.trim();
  const params = new URLSearchParams({
    select: "id,name,email,project,budget,message,status,created_at",
    order: "created_at.desc",
  });

  if (status && allowedStatuses.has(status)) {
    params.set("status", `eq.${status}`);
  }

  if (search) {
    const safeSearch = search.replace(/[,()]/g, " ");
    params.set("or", `name.ilike.*${safeSearch}*,email.ilike.*${safeSearch}*,project.ilike.*${safeSearch}*`);
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/project_inquiries?${params.toString()}`, {
      headers: {
        apikey: serviceRoleKey!,
        Authorization: `Bearer ${serviceRoleKey}`,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Inquiry dashboard read failed", await response.text());
      return NextResponse.json({ error: "Could not load inquiries." }, { status: 502 });
    }

    return NextResponse.json({ inquiries: await response.json() });
  } catch {
    return NextResponse.json({ error: "Could not load inquiries." }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  if (!verifyDashboardSession(request)) return unauthorized();
  if (!configured()) {
    return NextResponse.json({ error: "Dashboard storage is not configured." }, { status: 500 });
  }

  try {
    const body = await request.json();
    const id = typeof body.id === "string" ? body.id : "";
    const status = typeof body.status === "string" ? body.status : "";

    if (!id || !allowedStatuses.has(status)) {
      return NextResponse.json({ error: "Invalid inquiry update." }, { status: 400 });
    }

    const response = await fetch(
      `${supabaseUrl}/rest/v1/project_inquiries?id=eq.${encodeURIComponent(id)}`,
      {
        method: "PATCH",
        headers: {
          apikey: serviceRoleKey!,
          Authorization: `Bearer ${serviceRoleKey}`,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: JSON.stringify({ status }),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      console.error("Inquiry dashboard update failed", await response.text());
      return NextResponse.json({ error: "Could not update inquiry." }, { status: 502 });
    }

    return NextResponse.json({ inquiry: (await response.json())[0] ?? null });
  } catch {
    return NextResponse.json({ error: "Could not update inquiry." }, { status: 400 });
  }
}
