import { ProcessRail } from "@/components/ProcessRail";
import { EnergyPrice } from "@/components/energy/EnergyPrice";
import { EnergySuppliers } from "@/components/energy/EnergySuppliers";
import { energyPage } from "@/lib/energy";
import { site } from "@/lib/site";

export function EnergyBody() {
  const { overview, markets, electricity, gas, suppliers, grid, process, close } =
    energyPage;
  const loop = [...suppliers.items, ...suppliers.items];

  return (
    <div className="energy-body">
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
        <EnergyPrice electricity={electricity} gas={gas} />
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
        <EnergySuppliers items={suppliers.items} />
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

      <section className="how how--4 how--interactive energy-how" id="how">
        <div className="band__head how__intro">
          <p className="label">{process.label}</p>
          <h2>{process.title}</h2>
        </div>
        <ProcessRail
          steps={process.steps}
          label="Energy brokerage process"
          columns={4}
          showNumbers
        />
      </section>

      <section className="product-close energy-close" id="close">
        <div className="energy-close__card">
          <div className="product-close__copy">
            <p className="label">{close.label}</p>
            <h2>{close.title}</h2>
          </div>
          <div className="product-close__actions">
            <a href={site.phoneHref} className="btn btn-pay">
              {close.call}
            </a>
            <a href={site.emailHref} className="btn btn-line">
              {close.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
