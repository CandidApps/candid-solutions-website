import { ContactForm } from "@/components/ContactForm";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta(
  "/contact",
  "Contact",
  "Talk with Candid about business phone systems, payment processing, IT, or a zero-cost bill review.",
);

export default function ContactPage() {
  return (
    <section className="contact-stage">
      <div className="contact-stage__grid">
        <div className="contact-stage__panel">
          <p className="label">Connect</p>
          <h1>The start of a long-term partnership.</h1>
          <p className="contact-stage__lead">
            Call, email, or send the form. You’ll know the people on your account
            by name. A team member typically replies within one business day. Quote
            details stay private and are only shared with suppliers if needed.
          </p>
          <p className="contact-stage__fit">
            One team for a single location or a company of any size. Vendor-neutral.
            You approve before anything moves.
          </p>
          <dl className="contact-stage__facts">
            <div>
              <dt>Call</dt>
              <dd>
                <a href={site.phoneHref}>{site.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={site.emailHref}>{site.email}</a>
              </dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>
                {site.hours.map((row) => (
                  <span key={row.days}>
                    <strong>{row.days}</strong>
                    {row.time}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
        <div className="contact-stage__form">
          <ContactForm />
        </div>
        <a
          className="contact-frank"
          href={site.candidIq}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="contact-frank__name">Frank</span>
          <span className="contact-frank__note">
            Candid’s AI in the CandidIQ portal. Ask there. He takes it to a specialist. You approve.
          </span>
          <span className="contact-frank__go">Open CandidIQ</span>
        </a>
      </div>
    </section>
  );
}
