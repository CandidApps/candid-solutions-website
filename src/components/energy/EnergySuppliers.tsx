"use client";

import { useState } from "react";

const PREVIEW = 9;

export function EnergySuppliers({
  items,
}: {
  items: readonly { name: string; body: string }[];
}) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? items : items.slice(0, PREVIEW);
  const hidden = items.length > PREVIEW && !showAll;

  return (
    <>
      <ul className="energy-names">
        {visible.map((item) => (
          <li key={item.name}>
            <details>
              <summary>{item.name}</summary>
              <p>{item.body}</p>
            </details>
          </li>
        ))}
      </ul>
      {hidden ? (
        <button
          type="button"
          className="btn btn-line energy-names__more"
          onClick={() => setShowAll(true)}
        >
          Show all suppliers
        </button>
      ) : null}
    </>
  );
}
