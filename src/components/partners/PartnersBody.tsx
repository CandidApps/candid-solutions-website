import type { CSSProperties } from "react";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";
import { partnerPage } from "@/lib/partners";

export function PartnersBody() {
  const { overview, tracks, how, fill, tools, apply } = partnerPage;

  return (
    <>
      <section className="band" id="overview">
        <div className="pay-overview">
          <div>
            <p className="label">{overview.label}</p>
            <h2>{overview.title}</h2>
            <p>{overview.body}</p>
          </div>
          <dl className="pay-stats partner-stats">
            {overview.stats.map((item) => (
              <div key={item.label}>
                <dt>{item.n}</dt>
                <dd>{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="band" id="tracks">
        <div className="band__head">
          <p className="label">{tracks.label}</p>
          <h2>{tracks.title}</h2>
          <p>{tracks.lead}</p>
        </div>
        <div className="cards cards--3">
          {tracks.items.map((track) => (
            <article
              key={track.kicker}
              className={`card${"featured" in track && track.featured ? " partner-track--featured" : ""}`}
              data-tone="crimson"
            >
              <p className="label">{track.kicker}</p>
              <p className="partner-track__rate">{track.rate}</p>
              <p className="partner-track__note">{track.note}</p>
              <h3>{track.title}</h3>
              <p>{track.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="how how--4" id="how">
        <div className="band__head how__intro">
          <p className="label">{how.label}</p>
          <h2>{how.title}</h2>
        </div>
        <ol className="how__rail how__rail--4" aria-label="Partner process">
          {how.steps.map((step, index) => {
            const next = how.steps[index + 1];
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
          <p className="label">{fill.label}</p>
          <h2>{fill.title}</h2>
        </div>
        <div className="cards cards--3">
          {fill.items.map((item) => (
            <article key={item.title} className="card" data-tone="crimson">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band" id="tools">
        <div className="band__head">
          <p className="label">{tools.label}</p>
          <h2>{tools.title}</h2>
        </div>
        <div className="cards cards--2">
          {tools.items.map((item) => (
            <article key={item.title} className="card" data-tone="ink">
              <p className="label">{item.n}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="partner-apply" id="apply">
        <div className="partner-apply__copy">
          <p className="label">{apply.label}</p>
          <h2>{apply.title}</h2>
          <p>{apply.body}</p>
          <div className="partner-apply__links">
            <a
              href={site.agentLogin}
              className="btn btn-line"
              rel="noopener noreferrer"
              target="_blank"
            >
              {apply.login} ↗
            </a>
            <a
              href={apply.overviewHref}
              className="btn btn-line"
              rel="noopener noreferrer"
              target="_blank"
            >
              {apply.overview} ↗
            </a>
          </div>
        </div>
        <div className="partner-apply__form">
          <ContactForm variant="agent" />
        </div>
      </section>
    </>
  );
}
