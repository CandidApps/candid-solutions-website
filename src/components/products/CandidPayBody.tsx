import { ProcessRail } from "@/components/ProcessRail";
import { ProductClose } from "@/components/products/ProductClose";
import { site } from "@/lib/site";
import { candidPayPage } from "@/lib/products";

export function CandidPayBody() {
  const { overview, stats, quote, integrations, process, close } = candidPayPage;

  return (
    <>
      <section className="band" id="overview">
        <div className="pay-overview">
          <div>
            <p className="label">{overview.label}</p>
            <h2>{overview.title}</h2>
            <p>{overview.body}</p>
          </div>
          <dl className="pay-stats">
            {stats.map((item) => (
              <div key={item.label}>
                <dt>{item.n}</dt>
                <dd>{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="band" id="quote">
        <div className="band__head">
          <p className="label">{quote.label}</p>
          <h2>{quote.title}</h2>
        </div>
        <div className="cards cards--3">
          {quote.items.map((item) => (
            <article key={item.title} className="card" data-tone="pay">
              <p className="label">{item.kicker}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <p className="pay-partners__label">{quote.partnersLabel}</p>
        <ul className="pay-partners">
          {quote.partners.map((name) => (
            <li key={name}>{name}</li>
          ))}
          <li className="pay-partners__more">
            (<em>and dozens more</em>)
          </li>
        </ul>
      </section>

      <section className="band" id="integrations">
        <div className="pay-integrations">
          <div className="band__head">
            <p className="label">{integrations.label}</p>
            <h2>{integrations.title}</h2>
            <p>{integrations.body}</p>
          </div>
          <div className="cards cards--3">
            {integrations.items.map((item) => (
              <article key={item.title} className="card" data-tone="pay">
                <p className="label">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="how how--4 how--interactive" id="how">
        <div className="band__head how__intro">
          <p className="label">{process.label}</p>
          <h2>{process.title}</h2>
        </div>
        <ProcessRail
          steps={process.steps}
          label="CandidPay process"
          columns={4}
        />
      </section>

      <ProductClose
        label={close.label}
        title={close.title}
        call={close.call}
        email={close.email}
        visit={close.visit}
        visitHref={site.candidPay}
      />
    </>
  );
}
