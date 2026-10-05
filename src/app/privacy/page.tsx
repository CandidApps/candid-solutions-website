import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta(
  "/privacy",
  "Privacy policy",
  "How Candid Solutions collects, uses, and shares personal information on candid.solutions.",
);

export default function PrivacyPage() {
  return (
    <div className="page">
      <p className="label">Privacy</p>
      <h1>Privacy policy</h1>
      <p className="page__lead">
        This policy describes how {site.legal} collects, uses, and shares personal
        information when you use {site.url}. We use that information to provide and
        improve the site and to respond when you contact us. We do not sell it.
      </p>

      <div className="doc">
        <section>
          <h2>What we collect</h2>
          <p>
            If you write to us through the contact form, we receive the name, email,
            phone, organization, inquiry type, and message you submit. If you email
            or call, we receive whatever you send. The site also receives ordinary
            server logs, such as browser type and the page you requested.
          </p>
        </section>
        <section>
          <h2>How we use it</h2>
          <p>
            We use this information to reply, to scope a quote or bill review, and
            to operate the site. By sending a message you agree we may use it for
            that purpose.
          </p>
        </section>
        <section>
          <h2>Who we share it with</h2>
          <p>
            We share it with the people at Candid who handle your inquiry, and with
            the services that deliver email and host the site. We do not share it
            for someone else’s marketing. CandidPay, CandidIQ, and the agent login
            are separate sites with their own policies.
          </p>
        </section>
        <section>
          <h2>Security</h2>
          <p>
            We use commercially reasonable safeguards. No method of transmission or
            storage is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>
        <section>
          <h2>Questions</h2>
          <p>
            Email{" "}
            <a href={site.emailHref}>
              {site.email}
            </a>{" "}
            or call{" "}
            <a href={site.phoneHref}>
              {site.phone}
            </a>
            . The{" "}
            <Link href="/terms">
              terms of use
            </Link>{" "}
            cover how you may use the site.
          </p>
        </section>
      </div>
    </div>
  );
}
