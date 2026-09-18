import { ProcessRail } from "@/components/ProcessRail";
import { ProductClose } from "@/components/products/ProductClose";
import { energyPage } from "@/lib/energy";

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
    <>
      <section className="band energy-overview" id="overview">
        <div className="energy-overview__copy">
          <p className="label">{overview.label}</p>
          <h2>{overview.title}</h2>
          <p>{overview.body}</p>
        </div>
        <aside className="energy-overview__aside">
          <p className="label">The split</p>
          <p>
            Utilities keep the wires and pipes. Candid brokers supply, structure,
            and the contract so finance can read the rate.
          </p>
        </aside>
      </section>

      <section className="band" id="markets">
        <div className="band__head">
          <p className="label">{markets.label}</p>
          <h2>{markets.title}</h2>
        </div>
        <ul className="energy-markets">
          {markets.items.map((item) => (
            <li key={item.title}>
              <p className="label">{item.kicker}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="band" id="products">
        <div className="band__head">
          <p className="label">{electricity.label}</p>
          <h2>{electricity.title}</h2>
        </div>
        <ol className="energy-list">
          {electricity.items.map((item, i) => (
            <li key={item.title} className={i % 2 === 1 ? "is-blue" : undefined}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>

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
      </section>

      <section className="band band--navy energy-gas" id="gas">
        <div className="band__shell">
          <div className="band__head">
            <p className="label">{gas.label}</p>
            <h2>{gas.title}</h2>
          </div>
          <ol className="energy-list energy-list--ink">
            {gas.items.map((item, i) => (
              <li key={item.title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band" id="suppliers">
        <div className="band__head">
          <p className="label">{suppliers.label}</p>
          <h2>{suppliers.title}</h2>
          <p>{suppliers.lead}</p>
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
        <ul className="energy-supplier-mosaic">
          {suppliers.items.map((item, i) => (
            <li key={item.name} className={i % 3 === 1 ? "is-blue" : undefined}>
              <h3>{item.name}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="energy-live" id="markets-data">
        <div className="energy-live__inner">
          <div>
            <p className="label">{grid.label}</p>
            <h2>{grid.title}</h2>
            <p>{grid.body}</p>
          </div>
          <div className="energy-live__actions">
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
      </section>

      <section className="how how--4 how--interactive" id="how">
        <div className="band__head how__intro">
          <p className="label">{process.label}</p>
          <h2>{process.title}</h2>
        </div>
        <ProcessRail
          steps={process.steps}
          label="Energy brokerage process"
          columns={4}
        />
      </section>

      <ProductClose
        label={close.label}
        title={close.title}
        call={close.call}
        email={close.email}
        visit={close.visit}
        visitHref={close.visitHref}
      />
    </>
  );
}
