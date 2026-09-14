"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Variant = "business" | "agent";

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
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject =
      variant === "agent"
        ? "Agent program inquiry"
        : String(data.get("inquiry") || "Website inquiry");
    const body = [
      `Name: ${data.get("firstName")} ${data.get("lastName")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "—"}`,
      variant === "business" ? `Organization: ${data.get("organization") || "—"}` : null,
      `Inquiry: ${subject}`,
      "",
      String(data.get("message") || ""),
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailto, "_self");
    setSent(true);
  }

  if (sent) {
    return (
      <p className="rounded-sm border border-line bg-card p-6 text-sm leading-relaxed text-muted">
        Your email client should open with the message. If it doesn’t, write us at{" "}
        <a className="text-red underline" href={site.emailHref}>
          {site.email}
        </a>
        . We typically respond within one business day.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
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
          {variant === "agent" ? "Tell us about your business goals" : "How can we help?"}
        </span>
        <textarea
          name="message"
          rows={5}
          className="rounded-sm border border-line bg-card px-3 py-2.5 text-base outline-none focus:border-red"
          required
        />
      </label>
      <button type="submit" className="btn btn-solid">
        Send message
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
