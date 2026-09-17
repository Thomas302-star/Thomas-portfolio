import { NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

const allowedBudgets = new Set([
  "",
  "under-500",
  "500-1000",
  "1000-2500",
  "2500-plus",
  "not-sure",
]);

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json(
      { error: "Inquiry storage is not configured." },
      { status: 500 },
    );
  }

  try {
    const body = await request.json();
    const name = clean(body.name, 120);
    const email = clean(body.email, 320);
    const project = clean(body.project, 200);
    const budget = clean(body.budget, 100);
    const message = clean(body.message, 5000);

    if (!name || !email || !project || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!allowedBudgets.has(budget)) {
      return NextResponse.json(
        { error: "Please select a valid budget range." },
        { status: 400 },
      );
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/project_inquiries`, {
      method: "POST",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        name,
        email,
        project,
        budget: budget || null,
        message,
        status: "new",
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Supabase inquiry insert failed", await response.text());
      return NextResponse.json(
        { error: "We could not save your inquiry. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 400 },
    );
  }
}
