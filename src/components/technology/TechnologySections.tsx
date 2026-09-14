import Link from "next/link";
import type { CSSProperties } from "react";
import { technology } from "@/lib/technology";

function ServiceIcon({ index }: { index: number }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {index === 0 && <path d="M4 8h16v10H4zM4 8l8 5 8-5" />}
      {index === 1 && (
        <>
          <path d="M5 13a7 7 0 0 1 14 0" />
          <path d="M5 13v3a2 2 0 0 0 2 2h1v-5H5z" />
          <path d="M19 13v3a2 2 0 0 1-2 2h-1v-5h3z" />
        </>
      )}
      {index === 2 && <path d="M8 4h8v16H8zM11 17h2" />}
      {index === 3 && <path d="M12 3 5 6v6c0 4.5 3 7.2 7 8.5 4-1.3 7-4 7-8.5V6z" />}
      {index === 4 && (
        <path d="M7 17h10a4 4 0 0 0 0-8 5 5 0 0 0-9.6 1.2A3.5 3.5 0 0 0 7 17z" />
      )}
      {index === 5 && (
        <>
          <circle cx="6" cy="12" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path d="M8 12h8M16.2 7.6 8 11.2M8 12.8l8.2 3.6" />
        </>
      )}
    </svg>
  );
}

export function TechnologySections() {
  const { services, split, quote, staff, process, network } = technology;

  return (
    <div className="tech-page">
      <section className="tech-services" id="services">
        <div className="tech-shell tech-services__layout">
          <header className="tech-services__head">
            <p className="label">{services.label}</p>
            <h2>{services.title}</h2>
            <p>{services.lead}</p>
          </header>
          <div className="tech-services__grid">
            {services.items.map((item, i) => (
              <article key={item.title}>
                <p className="label">{String(i + 1).padStart(2, "0")}</p>
                <ServiceIcon index={i} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <p className="tech-shell tech-services__more">
          {services.more}{" "}
          <Link href="/contact">Get started</Link>
        </p>
      </section>

      <section className="band">
        <div className="cards cards--2">
          {split.map((block) => (
            <article key={block.title} className="card" data-tone="crimson">
              <p className="label">{block.kicker}</p>
              <h3>{block.title}</h3>
              <p>{block.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="pay-overview">
          <div>
            <p className="label">Quote</p>
            <h2>{quote.title}</h2>
            <p>{quote.body}</p>
            <Link href="/contact" className="btn btn-solid">
              {quote.cta}
            </Link>
          </div>
          <div className="cards">
            {quote.steps.map((step, i) => (
              <article key={step.title} className="card" data-tone="crimson">
                <p className="label">{String(i + 1).padStart(2, "0")}</p>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band" id="staff">
        <div className="band__head">
          <p className="label">{staff.label}</p>
          <h2>{staff.title}</h2>
          <p>{staff.lead}</p>
        </div>
        <div className="cards cards--3">
          {staff.items.map((item) => (
            <article key={item.title} className="card" data-tone="crimson">
              <p className="label">{item.kicker}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="how how--4" id="how">
        <div className="band__head how__intro">
          <p className="label">{process.label}</p>
          <h2>{process.title}</h2>
          <p>{process.lead}</p>
        </div>
        <ol className="how__rail how__rail--4" aria-label="Technology process">
          {process.steps.map((step, index) => {
            const next = process.steps[index + 1];
            return (
              <li
                key={step.n}
                className="how__stop"
                style={
                  {
                    "--tone": "var(--crimson)",
                    "--tone-next": "var(--crimson)",
                  } as CSSProperties
                }
              >
                <div className="how__track" aria-hidden="true">
                  <span className="how__node">{step.n}</span>
                  {next ? <span className="how__line" /> : null}
                </div>
                <div className="how__card">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="band">
        <div className="band__head">
          <p className="label">{network.label}</p>
          <h2>{network.title}</h2>
          <p>{network.lead}</p>
        </div>
        <div className="cards cards--2">
          {network.desks.map((desk) => (
            <article key={desk.title} className="card" data-tone="crimson">
              <p className="label">{desk.kicker}</p>
              <h3>{desk.title}</h3>
              <p>{desk.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
