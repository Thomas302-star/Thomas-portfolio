"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowUpRight, LogOut, Search } from "lucide-react";

type Status = "new" | "contacted" | "in progress" | "completed";
type Inquiry = { id: string; name: string; email: string; project: string; budget: string | null; message: string; status: Status; created_at: string };
const statuses: Status[] = ["new", "contacted", "in progress", "completed"];

function date(value: string) { return new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value)); }
function budget(value: string | null) { return ({ "under-500": "Under $500", "500-1000": "$500 to $1,000", "1000-2500": "$1,000 to $2,500", "2500-plus": "$2,500+", "not-sure": "Not sure yet" } as Record<string, string>)[value ?? ""] ?? "Not provided"; }

export function InquiryDashboard() {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [items, setItems] = useState<Inquiry[]>([]);
  const [selected, setSelected] = useState<Inquiry | null>(null);
  const [filter, setFilter] = useState<"all" | Status>("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true); setError("");
    const params = new URLSearchParams();
    if (filter !== "all") params.set("status", filter);
    if (search.trim()) params.set("search", search.trim());
    const response = await fetch(`/api/dashboard/inquiries?${params}`, { cache: "no-store" });
    if (response.status === 401) { setLoggedIn(false); setLoading(false); return; }
    const result = await response.json();
    if (!response.ok) { setError(result.error ?? "Could not load inquiries."); setLoading(false); return; }
    setLoggedIn(true); setItems(result.inquiries ?? []); setLoading(false);
  }

  useEffect(() => { void load(); }, [filter]);

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError("");
    const response = await fetch("/api/dashboard/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) });
    const result = await response.json();
    if (!response.ok) { setError(result.error ?? "Could not sign in."); return; }
    setPassword(""); setLoggedIn(true); await load();
  }

  async function updateStatus(id: string, status: Status) {
    const response = await fetch("/api/dashboard/inquiries", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, status }) });
    const result = await response.json();
    if (!response.ok) { setError(result.error ?? "Could not update inquiry."); return; }
    setItems(current => current.map(item => item.id === id ? result.inquiry : item));
    setSelected(result.inquiry);
  }

  async function logout() { await fetch("/api/dashboard/logout", { method: "POST" }); setLoggedIn(false); setItems([]); setSelected(null); }

  if (!loggedIn) return <main className="min-h-screen bg-[var(--background)] px-6 py-32 text-white sm:px-8 lg:px-12"><div className="mx-auto max-w-lg"><p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Private area</p><h1 className="mt-5 font-[var(--font-display)] text-5xl font-semibold tracking-[-0.05em]">Inquiry dashboard.</h1><p className="mt-6 leading-7 text-[var(--muted)]">Sign in to view and manage project inquiries.</p><form onSubmit={login} className="mt-10 space-y-5"><label htmlFor="dashboard-password" className="block text-sm text-[var(--muted)]">Dashboard password<input id="dashboard-password" type="password" value={password} onChange={e => setPassword(e.target.value)} required autoComplete="current-password" className="mt-2 w-full border-b border-[var(--border)] bg-transparent py-4 text-white outline-none focus:border-white" /></label>{error && <p role="alert" className="text-sm text-red-300">{error}</p>}<button type="submit" className="inline-flex items-center gap-3 bg-white px-5 py-3 text-sm font-medium text-black">Open dashboard <ArrowUpRight size={16} /></button></form></div></main>;

  const counts = { total: items.length, new: items.filter(i => i.status === "new").length, active: items.filter(i => i.status === "contacted" || i.status === "in progress").length, completed: items.filter(i => i.status === "completed").length };

  return <main className="min-h-screen bg-[var(--background)] px-5 pb-20 pt-28 text-white sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl"><header className="flex flex-col gap-5 border-b border-[var(--border)] pb-8 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Private dashboard</p><h1 className="mt-4 font-[var(--font-display)] text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">Project inquiries.</h1><p className="mt-4 text-sm leading-6 text-[var(--muted)]">Review incoming projects and keep each inquiry moving.</p></div><button onClick={logout} className="inline-flex w-fit items-center gap-2 text-sm text-[var(--muted)] hover:text-white"><LogOut size={15} /> Sign out</button></header>
  <section className="mt-8 grid gap-px border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">{([["Total", counts.total],["New", counts.new],["Active", counts.active],["Completed", counts.completed]] as const).map(([label,value]) => <div key={label} className="bg-[var(--background)] p-6"><p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{label}</p><p className="mt-3 font-[var(--font-display)] text-3xl">{value}</p></div>)}</section>
  <section className="mt-8 flex flex-col gap-4 border-b border-[var(--border)] pb-6 lg:flex-row lg:items-center lg:justify-between"><div className="relative w-full lg:max-w-md"><Search size={17} className="absolute left-0 top-1/2 -translate-y-1/2 text-[var(--muted)]" /><input value={search} onChange={e => setSearch(e.target.value)} onKeyDown={e => e.key === "Enter" && void load()} placeholder="Search name, email, or project" className="w-full border-b border-[var(--border)] bg-transparent py-3 pl-7 text-sm outline-none focus:border-white" /></div><div className="flex flex-wrap gap-2"><button onClick={() => setFilter("all")} className={`px-3 py-2 text-xs ${filter === "all" ? "bg-white text-black" : "text-[var(--muted)]"}`}>All</button>{statuses.map(status => <button key={status} onClick={() => setFilter(status)} className={`px-3 py-2 text-xs ${filter === status ? "bg-white text-black" : "text-[var(--muted)]"}`}>{status}</button>)}</div></section>
  {error && <p className="mt-5 text-sm text-red-300">{error}</p>}
  <section className="mt-6 overflow-hidden border border-[var(--border)]">{loading ? <p className="p-8 text-sm text-[var(--muted)]">Loading inquiries...</p> : items.length === 0 ? <p className="p-8 text-sm text-[var(--muted)]">No inquiries match this view.</p> : <div className="divide-y divide-[var(--border)]">{items.map(item => <button key={item.id} onClick={() => setSelected(item)} className="grid w-full gap-4 p-5 text-left transition-colors hover:bg-white/[0.03] sm:grid-cols-[1fr_1.3fr_auto] sm:items-center sm:p-6"><div><p className="font-medium">{item.name}</p><p className="mt-1 text-xs text-[var(--muted)]">{item.email}</p></div><div><p className="text-sm">{item.project}</p><p className="mt-1 text-xs text-[var(--muted)]">{date(item.created_at)}</p></div><span className="w-fit border border-white/20 px-2.5 py-1 text-xs">{item.status}</span></button>)}</div>}</section></div>
  {selected && <div className="fixed inset-0 z-[60] bg-black/70 p-4 backdrop-blur-sm sm:p-8" onClick={() => setSelected(null)}><aside className="ml-auto h-full w-full max-w-2xl overflow-y-auto border border-[var(--border)] bg-[var(--background)] p-6 sm:p-8" onClick={e => e.stopPropagation()}><div className="flex items-start justify-between gap-6"><div><p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Inquiry details</p><h2 className="mt-3 font-[var(--font-display)] text-3xl">{selected.name}</h2><p className="mt-2 text-sm text-[var(--muted)]">{selected.email}</p></div><button onClick={() => setSelected(null)} className="text-sm text-[var(--muted)]">Close</button></div><div className="mt-10 grid gap-6 sm:grid-cols-2"><div><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Project</p><p className="mt-2 text-sm">{selected.project}</p></div><div><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Budget</p><p className="mt-2 text-sm">{budget(selected.budget)}</p></div><div className="sm:col-span-2"><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Received</p><p className="mt-2 text-sm">{date(selected.created_at)}</p></div><div className="sm:col-span-2"><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Message</p><p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-[var(--muted)]">{selected.message}</p></div></div><div className="mt-10 border-t border-[var(--border)] pt-6"><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Update status</p><div className="mt-4 grid gap-2 sm:grid-cols-2">{statuses.map(status => <button key={status} onClick={() => void updateStatus(selected.id,status)} className={`border px-4 py-3 text-left text-sm ${selected.status === status ? "border-white bg-white text-black" : "border-[var(--border)] text-[var(--muted)]"}`}>{status}</button>)}</div></div></aside></div>}</main>;
}
