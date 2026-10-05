import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta(
  "/terms",
  "Terms of use",
  "Terms for using the Candid Solutions website at candid.solutions.",
);

export default function TermsPage() {
  return (
    <div className="page">
      <p className="label">Terms</p>
      <h1>Terms of use</h1>
      <p className="page__lead">
        These terms apply to {site.url}, operated by {site.legal}. By using the
        site you agree to them. If you do not agree, do not use the site.
      </p>

      <div className="doc">
        <section>
          <h2>The site</h2>
          <p>
            Pages, examples, and savings figures describe how we work. They are
            not a quote, a guarantee of savings, or an offer to sell a specific
            carrier product. A project starts only after you approve it.
          </p>
        </section>
        <section>
          <h2>What you send us</h2>
          <p>
            Information you submit, including on the contact form, must be
            accurate. Do not send anything you are not allowed to share. Our{" "}
            <Link href="/privacy">
              privacy policy
            </Link>{" "}
            explains what we do with it.
          </p>
        </section>
        <section>
          <h2>Other sites</h2>
          <p>
            Links to CandidPay, CandidIQ, the agent login, and other third parties
            leave this site. We do not control those sites and we are not
            responsible for their content, policies, or services. Read their terms
            before you use them.
          </p>
        </section>
        <section>
          <h2>As is</h2>
          <p>
            The site is provided as is and as available, without warranties of
            any kind, including implied warranties of merchantability, fitness for
            a particular purpose, and non-infringement.
          </p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>
            Questions about these terms:{" "}
            <a href={site.emailHref}>
              {site.email}
            </a>{" "}
            or{" "}
            <a href={site.phoneHref}>
              {site.phone}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
