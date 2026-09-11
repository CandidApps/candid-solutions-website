import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Connect",
  description: "Talk with Candid Solutions about quotes, support, or partnership.",
};

export default function ContactPage() {
  return (
    <div className="page">
      <p className="text-xs font-semibold tracking-[0.22em] text-red uppercase">
        Connect
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl text-balance sm:text-5xl">
        The start of a long-term partnership.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        Call, email, or send the form. You’ll know the people on your account
        by name. A team member typically replies within one business day. Quote
        details stay private and are only shared with suppliers if needed.
      </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="space-y-6">
          <div className="contact-card">
            <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
              Main office
            </p>
            <a className="mt-2 block text-xl font-semibold" href={site.phoneHref}>
              {site.phone}
            </a>
            <p className="mt-1 text-sm text-muted">{site.hours}</p>
          </div>
          <div className="contact-card">
            <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
              Email
            </p>
            <a className="mt-2 block text-lg font-semibold contact-card__email" href={site.emailHref}>
              {site.email}
            </a>
          </div>
        </aside>
        <div className="contact-card contact-card--form">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
