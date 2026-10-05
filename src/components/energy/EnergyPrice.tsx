"use client";

import { useState } from "react";

type PriceItem = { title: string; body: string };

type PriceGroup = {
  label: string;
  title: string;
  items: readonly PriceItem[];
};

export function EnergyPrice({
  electricity,
  gas,
}: {
  electricity: PriceGroup & {
    passThroughs: { title: string; items: readonly PriceItem[] };
  };
  gas: PriceGroup;
}) {
  const [tab, setTab] = useState<"power" | "gas">("power");
  const [openKey, setOpenKey] = useState("power-0");
  const current = tab === "power" ? electricity : gas;

  function selectTab(next: "power" | "gas") {
    setTab(next);
    setOpenKey(`${next}-0`);
  }

  return (
    <div className="energy-price">
      <div className="energy-tabs" role="tablist" aria-label="Pricing">
        <button
          type="button"
          role="tab"
          id="products-tab"
          aria-selected={tab === "power"}
          aria-controls="products-panel"
          onClick={() => selectTab("power")}
        >
          {electricity.label}
        </button>
        <button
          type="button"
          role="tab"
          id="gas"
          aria-selected={tab === "gas"}
          aria-controls="products-panel"
          onClick={() => selectTab("gas")}
        >
          {gas.label}
        </button>
      </div>

      <div
        className="energy-price__panel"
        role="tabpanel"
        id="products-panel"
        aria-labelledby={tab === "power" ? "products-tab" : "gas"}
      >
        <h2>{current.title}</h2>
        <ol className={`energy-list${tab === "gas" ? " is-blue" : ""}`}>
          {current.items.map((item, index) => {
            const key = `${tab}-${index}`;
            return (
              <li key={item.title}>
                <details
                  open={openKey === key}
                  onToggle={(event) => {
                    if (event.currentTarget.open) setOpenKey(key);
                    else setOpenKey((currentKey) => (currentKey === key ? "" : currentKey));
                  }}
                >
                  <summary>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{item.title}</h3>
                  </summary>
                  <p>{item.body}</p>
                </details>
              </li>
            );
          })}
        </ol>

        {tab === "power" ? (
          <details className="energy-passthru">
            <summary>{electricity.passThroughs.title}</summary>
            <ul className="energy-passthru-list">
              {electricity.passThroughs.items.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ul>
          </details>
        ) : null}
      </div>
    </div>
  );
}
