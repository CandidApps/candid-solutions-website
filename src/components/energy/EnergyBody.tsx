import type { CSSProperties } from "react";
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
      <section className="band" id="overview">
        <div className="band__head">
          <p className="label">{overview.label}</p>
          <h2>{overview.title}</h2>
          <p>{overview.body}</p>
        </div>
      </section>

      <section className="band" id="markets">
        <div className="band__head">
          <p className="label">{markets.label}</p>
          <h2>{markets.title}</h2>
        </div>
        <div className="cards cards--3">
          {markets.items.map((item) => (
            <article key={item.title} className="card">
              <p className="label">{item.kicker}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band" id="products">
        <div className="band__head">
          <p className="label">{electricity.label}</p>
          <h2>{electricity.title}</h2>
        </div>
        <div className="cards cards--3">
          {electricity.items.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className="band__head energy-passthru">
          <h3>{electricity.passThroughs.title}</h3>
        </div>
        <div className="cards cards--2">
          {electricity.passThroughs.items.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="band__head">
          <p className="label">{gas.label}</p>
          <h2>{gas.title}</h2>
        </div>
        <div className="cards cards--3">
          {gas.items.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
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
        <div className="cards cards--3 energy-supplier-cards">
          {suppliers.items.map((item) => (
            <article key={item.name} className="card">
              <h3>{item.name}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band" id="markets-data">
        <div className="energy-grid">
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

      <section className="how how--4" id="how">
        <div className="band__head how__intro">
          <p className="label">{process.label}</p>
          <h2>{process.title}</h2>
        </div>
        <ol className="how__rail how__rail--4" aria-label="Energy brokerage process">
          {process.steps.map((step, index) => {
            const next = process.steps[index + 1];
            return (
              <li
                key={step.n}
                className="how__stop"
                style={
                  {
                    "--tone": "var(--crimson)",
                    "--tone-next": next ? "var(--blue)" : "var(--crimson)",
                  } as CSSProperties
                }
              >
                <div className="how__track" aria-hidden="true">
                  <span className="how__node">{step.n}</span>
                  {next ? <span className="how__line how__line--pay" /> : null}
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
