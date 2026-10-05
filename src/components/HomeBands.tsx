import Link from "next/link";
import { desks, faqs, quotes, solutions, values } from "@/lib/site";

export function HomeBands() {
  return (
    <>
      <section className="band band--tight" id="desks">
        <div className="band__head">
          <p className="label">What we built</p>
          <h2>One parent company. Three ways we show up.</h2>
          <p>
            Candid Solutions, Inc. is the firm. CandidPay and CandidIQ grew out of
            real client needs, not a slide deck.
          </p>
        </div>
        <div className="cards cards--3">
          {desks.map((item) => {
            const tone =
              item.kicker === "CandidIQ"
                ? "blue"
                : item.kicker === "CandidPay"
                  ? "pay"
                  : "crimson";
            return (
              <article key={item.title} className="card card--lift" data-tone={tone}>
                <p className="label">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                {item.external ? (
                  <a href={item.href} rel="noopener noreferrer" target="_blank">
                    {item.label} ↗
                  </a>
                ) : (
                  <Link href={item.href}>{item.label}</Link>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="band band--navy" id="solutions">
        <div className="band__shell">
          <div className="band__head band__head--split">
            <div>
              <p className="label">Solutions</p>
              <h2>Phone systems, payments, and IT matched to how you operate.</h2>
            </div>
            <Link href="/solutions" className="band__link">
              All solutions
            </Link>
          </div>
          <div className="cc-stories">
            {solutions.map((item, i) => (
              <Link key={item.title} href={item.href} className="cc-story">
                <p className="label">{String(i + 1).padStart(2, "0")}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band" id="faq">
        <div className="band__head">
          <p className="label">Questions</p>
          <h2>What buyers ask before they call.</h2>
        </div>
        <div className="faq-card">
          {faqs.map((item, i) => (
            <details key={item.q} className="faq-card__item" open={i === 0}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="band" id="quotes">
        <div className="band__head">
          <p className="label">What clients say</p>
          <h2>We keep vendors honest. That’s the job.</h2>
        </div>
        <div className="quotes" aria-label="Client quotes">
          <div className="quotes__track">
            {[...quotes, ...quotes].map((q, i) => (
              <blockquote
                key={`${q.name}-${i}`}
                className="quotes__item"
                aria-hidden={i >= quotes.length ? true : undefined}
              >
                <p>“{q.quote}”</p>
                <footer>
                  <cite>{q.name}</cite>
                  <span>{q.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
        <ul className="values">
          {values.map((v) => (
            <li key={v.title}>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
