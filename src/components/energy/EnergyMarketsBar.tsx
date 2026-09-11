import { energyPage } from "@/lib/energy";

export function EnergyMarketsBar() {
  const { marketsBar } = energyPage;

  return (
    <section className="energy-markets-bar" aria-label="Energy markets">
      <p className="energy-markets-bar__label">{marketsBar.label}</p>
      <ul className="energy-markets-bar__list">
        {marketsBar.items.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </section>
  );
}
