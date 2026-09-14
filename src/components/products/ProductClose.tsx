import Link from "next/link";
import { site } from "@/lib/site";

export function ProductClose({
  label,
  title,
  call,
  email,
  visit,
  visitHref,
}: {
  label: string;
  title: string;
  call: string;
  email: string;
  visit?: string;
  visitHref?: string;
}) {
  return (
    <section className="product-close" id="close">
      <p className="label">{label}</p>
      <h2>{title}</h2>
      <div className="product-close__actions">
        <a href={site.phoneHref} className="btn btn-pay">
          {call}
        </a>
        <a href={site.emailHref} className="btn btn-ghost">
          {email}
        </a>
        {visit && visitHref ? (
          <a
            href={visitHref}
            className="btn btn-line"
            rel="noopener noreferrer"
            target="_blank"
          >
            {visit} ↗
          </a>
        ) : null}
      </div>
    </section>
  );
}
