import Link from "next/link";
import { desks, quotes, solutions, values } from "@/lib/site";

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
              <h2>We match technology to how you operate.</h2>
            </div>
            <Link href="/solutions" className="band__link">
              All solutions
            </Link>
          </div>
          <div className="cards cards--3">
            {solutions.map((item, i) => (
              <article key={item.title} className="card card--navy">
                <p className="label">{String(i + 1).padStart(2, "0")}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
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
