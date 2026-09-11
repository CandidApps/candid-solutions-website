import { ProcessRail } from "@/components/ProcessRail";
import { ProductClose } from "@/components/products/ProductClose";
import { energyPage } from "@/lib/energy";

function ProductList({
  items,
}: {
  items: readonly { title: string; body: string }[];
}) {
  return (
    <ol className="energy-list reveal">
      {items.map((item, i) => (
        <li key={item.title} className={i % 2 === 0 ? "is-crimson" : "is-blue"}>
          <span>{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function EnergyBody() {
  const {
    overview,
    markets,
    electricity,
    gas,
    suppliers,
    grid,
    process,
    close,
  } = energyPage;
  const loop = [...suppliers.items, ...suppliers.items];

  return (
    <div className="tech-page">
      <section className="tech-break" id="overview">
        <div className="tech-shell">
          <div className="band__head">
            <p className="label">{overview.label}</p>
            <h2>{overview.title}</h2>
            <p>{overview.body}</p>
          </div>
          <div id="markets">
            <p className="label energy-kicker">{markets.label}</p>
            <h3 className="energy-subhead">{markets.title}</h3>
            <div className="tech-panel tech-panel--flow reveal">
              <ul className="tech-staff energy-cells">
                {markets.items.map((item) => (
                  <li key={item.title}>
                    <p className="label">{item.kicker}</p>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-break" id="products">
        <div className="tech-shell">
          <div className="band__head">
            <p className="label">{electricity.label}</p>
            <h2>{electricity.title}</h2>
          </div>
          <div className="tech-panel tech-panel--flow reveal">
            <ul className="tech-staff energy-cells">
              {electricity.items.map((item, i) => (
                <li key={item.title}>
                  <p className="label">{String(i + 1).padStart(2, "0")}</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ul>
            <div className="energy-passthru-panel">
              <p className="label">{electricity.passThroughs.title}</p>
              <ul className="energy-passthru-list">
                {electricity.passThroughs.items.map((item) => (
                  <li key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="energy-gas">
            <p className="label">{gas.label}</p>
            <h3 className="energy-subhead">{gas.title}</h3>
            <ProductList items={gas.items} />
          </div>
        </div>
      </section>

      <section className="tech-break" id="suppliers">
        <div className="tech-shell">
          <div className="band__head">
            <p className="label">{suppliers.label}</p>
            <h2>{suppliers.title}</h2>
            <p>{suppliers.lead}</p>
          </div>
        </div>
        <div className="energy-suppliers-ticker" aria-label="Energy suppliers">
          <div className="pay-gateways__viewport">
            <ul className="pay-gateways__track">
              {loop.map((item, i) => (
                <li
                  key={`${item.name}-${i}`}
                  aria-hidden={i >= suppliers.items.length || undefined}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="tech-quote" id="markets-data">
        <div className="tech-shell tech-quote__layout reveal">
          <div>
            <p className="label">{grid.label}</p>
            <h2>{grid.title}</h2>
            <p>{grid.body}</p>
            <div className="energy-grid__actions">
              <a
                href={grid.primary.href}
                className="btn btn-solid"
                rel="noopener noreferrer"
                target="_blank"
              >
                {grid.primary.label} ↗
              </a>
              <a
                href={grid.secondary.href}
                className="btn btn-ghost"
                rel="noopener noreferrer"
                target="_blank"
              >
                {grid.secondary.label} ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="how how--4 how--interactive" id="how">
        <div className="band__head how__intro">
          <p className="label">{process.label}</p>
          <h2>{process.title}</h2>
        </div>
        <ProcessRail steps={process.steps} label="Energy brokerage process" />
      </section>

      <ProductClose
        label={close.label}
        title={close.title}
        call={close.call}
        email={close.email}
        visit={close.visit}
        visitHref={close.visitHref}
      />
    </div>
  );
}
