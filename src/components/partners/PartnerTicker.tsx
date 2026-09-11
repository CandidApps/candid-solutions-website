import { partnerPage } from "@/lib/partners";

export function PartnerTicker() {
  const { ticker } = partnerPage;
  const loop = [...ticker.items, ...ticker.items];

  return (
    <section className="cyber-ticker partner-ticker" aria-label="What partners can sell">
      <div className="cyber-ticker__meta">
        <span className="cyber-ticker__live">
          <i aria-hidden="true" />
          {ticker.live}
        </span>
        <span className="cyber-ticker__label">{ticker.label}</span>
      </div>
      <div className="cyber-ticker__viewport">
        <ul className="cyber-ticker__track">
          {loop.map((item, i) => (
            <li key={`${item}-${i}`} aria-hidden={i >= ticker.items.length || undefined}>
              <span className="partner-ticker__item">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
