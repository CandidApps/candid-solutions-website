import { NextResponse } from "next/server";
import { site } from "@/lib/site";
import { sendZohoMail, zohoConfigured } from "@/lib/zoho-mail";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = {
  firstName: 80,
  lastName: 80,
  email: 200,
  phone: 40,
  organization: 160,
  inquiry: 120,
  message: 5000,
} as const;

type ContactPayload = {
  variant?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  organization?: string;
  inquiry?: string;
  message?: string;
  website?: string; // honeypot
};

function clean(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Silent success for bots filling the honeypot.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const firstName = clean(body.firstName, LIMITS.firstName);
  const lastName = clean(body.lastName, LIMITS.lastName);
  const email = clean(body.email, LIMITS.email);
  const phone = clean(body.phone, LIMITS.phone);
  const organization = clean(body.organization, LIMITS.organization);
  const inquiry = clean(body.inquiry, LIMITS.inquiry) || "Website inquiry";
  const message = clean(body.message, LIMITS.message);
  const variant = clean(body.variant, 40) === "agent" ? "agent" : "business";

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!zohoConfigured()) {
    console.error("contact: Zoho Mail API env vars are not set");
    return NextResponse.json(
      {
        error:
          "Email delivery is not configured yet. Please email us directly.",
      },
      { status: 503 },
    );
  }

  const subject =
    variant === "agent"
      ? "Agent program inquiry"
      : `Website inquiry: ${inquiry}`;

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111;">
      <p><strong>Name:</strong> ${escapeHtml(`${firstName} ${lastName}`)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
      ${
        variant === "business"
          ? `<p><strong>Organization:</strong> ${escapeHtml(organization || "—")}</p>`
          : ""
      }
      <p><strong>Inquiry:</strong> ${escapeHtml(inquiry)}</p>
      <p><strong>Source:</strong> ${
        variant === "agent" ? "Partner apply form" : "Contact form"
      }</p>
      <p><strong>Reply to:</strong> ${escapeHtml(email)}</p>
      <hr />
      <p style="white-space:pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `;

  try {
    await sendZohoMail({
      subject,
      html,
      replyTo: email,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("contact: Zoho Mail API error", error);
    return NextResponse.json(
      {
        error: `Could not send your message. Please try again or email ${site.email}.`,
      },
      { status: 502 },
    );
  }
}
