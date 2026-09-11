import { CountUp } from "@/components/CountUp";
import { ProcessRail } from "@/components/ProcessRail";
import { ProductClose } from "@/components/products/ProductClose";
import { site } from "@/lib/site";
import { candidIqPage } from "@/lib/products";

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
    <>
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
                <dt>
                  <CountUp value={item.n} />
                </dt>
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
        <ProcessRail steps={flow.steps} label="Question to result" />
      </section>

      <section className="band">
        <div className="band__head">
          <p className="label">{operators.label}</p>
          <h2>{operators.title}</h2>
        </div>
        <div className="team__grid">
          {operators.items.map((item) => (
            <article key={item.title} className="card" data-tone="blue">
              <p className="label">{item.kicker}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <ul className="iq-points">
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
          <ul className="iq-points iq-points--lg">
            {marketplace.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="tech-process tech-process--iq" id="how">
        <div className="tech-shell">
          <p className="label">{how.label}</p>
          <h2>{how.title}</h2>
          <p className="tech-process__lead">{how.lead}</p>
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
          <dl className="iq-how-stats">
            {how.stats.map((item) => (
              <div key={item.n}>
                <dt>
                  <CountUp value={item.n} />
                </dt>
                <dd>{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="band" id="capabilities">
        <div className="band__head">
          <p className="label">{capabilities.label}</p>
          <h2>{capabilities.title}</h2>
        </div>
        <div className="cards cards--3">
          {capabilities.items.map((item) => (
            <article key={item.title} className="card" data-tone="blue">
              <p className="label">{item.n}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band band--tight" id="plans">
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
      </section>

      <section className="band band--tight">
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
    </>
  );
}
