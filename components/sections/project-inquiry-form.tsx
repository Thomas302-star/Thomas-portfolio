"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const inputClassName =
  "w-full border-b border-[var(--border)] bg-transparent px-0 py-4 text-base text-white outline-none transition-colors placeholder:text-[var(--muted)] focus:border-white";

export function ProjectInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          project: formData.get("project"),
          budget: formData.get("budget"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "We could not save your inquiry.");
      }

      setSubmitted(true);
      form.reset();
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="border border-[var(--border)] p-8 sm:p-10">
        <p className="text-sm uppercase tracking-[0.16em] text-[var(--muted)]">
          Inquiry received
        </p>
        <h2 className="mt-4 font-[var(--font-display)] text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
          Thanks for sharing the project.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
          Your project details have been saved. I&apos;ll review the inquiry and
          follow up using the email address you provided.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 text-sm underline underline-offset-4 transition-opacity hover:opacity-70"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label htmlFor="name" className="text-sm text-[var(--muted)]">
          Name
        </label>
        <input id="name" name="name" type="text" required placeholder="Your name" className={inputClassName} />
      </div>

      <div>
        <label htmlFor="email" className="text-sm text-[var(--muted)]">
          Email
        </label>
        <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClassName} />
      </div>

      <div>
        <label htmlFor="project" className="text-sm text-[var(--muted)]">
          What are you building?
        </label>
        <input id="project" name="project" type="text" required placeholder="Website, landing page, product, or redesign" className={inputClassName} />
      </div>

      <div>
        <label htmlFor="budget" className="text-sm text-[var(--muted)]">
          Budget range
        </label>
        <select id="budget" name="budget" defaultValue="" className={`${inputClassName} appearance-none`}>
          <option value="" disabled>
            Select a range
          </option>
          <option value="under-500">Under $500</option>
          <option value="500-1000">$500 to $1,000</option>
          <option value="1000-2500">$1,000 to $2,500</option>
          <option value="2500-plus">$2,500+</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm text-[var(--muted)]">
          Project details
        </label>
        <textarea id="message" name="message" required rows={5} placeholder="Tell me about the goal, audience, pages, or anything else that matters." className={`${inputClassName} resize-none`} />
      </div>

      {error ? (
        <p role="alert" className="text-sm leading-6 text-red-300">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-3 border border-white bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-transparent hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Saving inquiry..." : "Submit inquiry"}
        <ArrowUpRight size={16} aria-hidden="true" />
      </button>
    </form>
  );
}
