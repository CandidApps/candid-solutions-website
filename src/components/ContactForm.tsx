"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Variant = "business" | "agent";
type Status = "idle" | "submitting" | "sent" | "error";

const inquiryOptions = [
  "General information",
  "Payments & POS",
  "Cloud",
  "Internet / SD-WAN",
  "UCaaS / Contact center",
  "Cybersecurity",
  "Managed services",
  "Expense management",
  "Agent program",
  "Other",
];

export function ContactForm({ variant = "business" }: { variant?: Variant }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    setError("");

    const payload = {
      variant,
      firstName: String(data.get("firstName") || ""),
      lastName: String(data.get("lastName") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      organization: String(data.get("organization") || ""),
      inquiry: String(data.get("inquiry") || "Website inquiry"),
      message: String(data.get("message") || ""),
      website: String(data.get("website") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        setStatus("error");
        setError(
          result?.error ||
            "Could not send your message. Please try again or email us.",
        );
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setError(
        "Could not send your message. Check your connection and try again.",
      );
    }
  }

  if (status === "sent") {
    return (
      <p className="rounded-sm border border-line bg-card p-6 text-sm leading-relaxed text-muted">
        Thanks — your message is on its way. We typically respond within one
        business day. Prefer email?{" "}
        <a className="text-red underline" href={site.emailHref}>
          {site.email}
        </a>
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate={false}>
      {/* Honeypot — leave empty */}
      <label className="hp" aria-hidden="true">
        <span>Website</span>
        <input
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="firstName" label="First name" required />
        <Field name="lastName" label="Last name" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="email" label="Work email" type="email" required />
        <Field name="phone" label="Phone" type="tel" />
      </div>
      {variant === "business" ? (
        <>
          <Field name="organization" label="Organization" />
          <label className="grid gap-1.5 text-sm">
            <span className="font-medium text-fg">What is this about?</span>
            <select
              name="inquiry"
              className="rounded-sm border border-line bg-card px-3 py-2.5 text-base outline-none focus:border-red"
              defaultValue="General information"
            >
              {inquiryOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        </>
      ) : null}
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium text-fg">
          {variant === "agent"
            ? "Tell us about your business goals"
            : "How can we help?"}
        </span>
        <textarea
          name="message"
          rows={5}
          className="rounded-sm border border-line bg-card px-3 py-2.5 text-base outline-none focus:border-red"
          required
        />
      </label>

      {status === "error" && error ? (
        <p className="text-sm text-red" role="alert">
          {error}{" "}
          <a className="underline" href={site.emailHref}>
            {site.email}
          </a>
        </p>
      ) : null}

      <button
        type="submit"
        className="btn btn-solid"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="font-medium text-fg">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-sm border border-line bg-card px-3 py-2.5 text-base outline-none focus:border-red"
      />
    </label>
  );
}
