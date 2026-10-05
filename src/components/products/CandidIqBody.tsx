import { ProcessRail } from "@/components/ProcessRail";
import { ProductClose } from "@/components/products/ProductClose";
import { site } from "@/lib/site";
import { candidIqPage } from "@/lib/products";

const capabilityIcons = [
  <svg key="spend" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 19V5M4 19h16" />
    <path d="M8 15v-4M12 15V8M16 15v-6" />
  </svg>,
  <svg key="talk" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 16l-1 4 4-1 9-9-3-3-9 9z" />
    <path d="M14 7l3 3" />
  </svg>,
  <svg key="vault" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 3h7l5 5v13H7z" />
    <path d="M14 3v5h5M9 13h6M9 17h4" />
  </svg>,
  <svg key="flow" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 7h9M6 12h12M6 17h7" />
    <path d="M15 5l3 2-3 2M18 15l3 2-3 2" />
  </svg>,
  <svg key="desk" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 15a7 7 0 0 1 14 0" />
    <path d="M4 16h16v3H4zM9 16v-2M15 16v-2" />
  </svg>,
  <svg key="util" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13 2L6 13h6l-1 9 8-12h-6l0-8z" />
  </svg>,
];

export function CandidIqBody() {
  const {
    overview,
    flow,
    operators,
    marketplace,
    how,
    capabilities,
    plans,
    quotes,
    close,
  } = candidIqPage;

  return (
    <div className="iq-body">
      <section className="iq-overview-wrap" id="overview">
        <div className="iq-overview">
          <div className="iq-overview__copy">
            <p className="label">{overview.label}</p>
            <h2>{overview.title}</h2>
            <p>{overview.body}</p>
          </div>
          <dl className="iq-overview__stats">
            {overview.stats.map((item, i) => (
              <div
                key={item.label}
                className={`iq-overview__stat${i === 0 ? " iq-overview__stat--lead" : ""}`}
              >
                <dt>{item.n}</dt>
                <dd>{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="how how--4 how--interactive" id="flow">
        <div className="band__head how__intro">
          <p className="label">{flow.label}</p>
          <h2>{flow.title}</h2>
          <p>{flow.lead}</p>
        </div>
        <ProcessRail
          steps={flow.steps}
          label="Question to result"
          columns={4}
        />
      </section>

      <section className="band" id="operators">
        <div className="band__head">
          <p className="label">{operators.label}</p>
          <h2>{operators.title}</h2>
        </div>
        <div className="team__grid">
            {operators.items.map((item) => (
              <article key={item.title} className="card">
                <p className="label">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
        </div>
      </section>

      <section className="band" id="marketplace">
        <div className="pay-overview">
          <div>
            <p className="label">{marketplace.label}</p>
            <h2>{marketplace.title}</h2>
            <p>{marketplace.body}</p>
          </div>
          <aside className="iq-frank" aria-label="Frank">
            <div className="iq-frank__top">
              <span>Frank</span>
            </div>
            <ul>
              {marketplace.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="iq-frank__save">
              <strong>{how.stats[0].n}</strong>
              <span>{how.stats[0].label}</span>
            </p>
          </aside>
        </div>
      </section>

      <section className="band iq-how" id="how">
        <div className="band__head">
          <p className="label">{how.label}</p>
          <h2>{how.title}</h2>
          <p>{how.lead}</p>
        </div>
        <ol>
          {how.steps.map((step) => (
            <li key={step.n}>
              <span>{step.n}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="iq-stats" aria-label={how.label}>
        <dl>
          {how.stats.map((item) => (
            <div key={item.n}>
              <dt>{item.n}</dt>
              <dd>{item.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="iq-wash" id="capabilities">
        <div className="iq-wash__inner">
          <div className="band__head">
            <p className="label">{capabilities.label}</p>
            <h2>{capabilities.title}</h2>
          </div>
          <div className="cards cards--3">
            {capabilities.items.map((item, i) => (
              <article key={item.title} className="card" data-tone="blue">
                <span className="iq-cap__icon">{capabilityIcons[i]}</span>
                <p className="label">{item.n}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="iq-plans-band" id="plans">
        <div className="iq-wash__inner">
          <div className="band__head">
          <p className="label">{plans.label}</p>
          <h2>{plans.title}</h2>
          <p>{plans.lead}</p>
        </div>
        <div className="iq-plans">
          {plans.items.map((plan) => (
            <article
              key={plan.name}
              className={`card${"featured" in plan && plan.featured ? " iq-plan--featured" : ""}`}
              data-tone="blue"
            >
              <p className="label">
                {plan.name}
                {"badge" in plan && plan.badge ? ` · ${plan.badge}` : ""}
              </p>
              <h3>{plan.price}</h3>
              <p>{plan.note}</p>
              <ul className="iq-points">
                {plan.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        </div>
      </section>

      <section className="band iq-quotes">
        <div className="cards cards--3">
          {quotes.map((quote) => (
            <blockquote key={quote} className="card card--quote">
              <p>“{quote}”</p>
            </blockquote>
          ))}
        </div>
      </section>

      <ProductClose
        label={close.label}
        title={close.title}
        call={close.call}
        email={close.email}
        visit={close.visit}
        visitHref={site.candidIq}
      />
    </div>
  );
}
