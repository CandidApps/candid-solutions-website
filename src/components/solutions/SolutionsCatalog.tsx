import type { CSSProperties } from "react";
import Link from "next/link";
import { solutions } from "@/lib/site";

const catalog = [
  { ...solutions[0], href: "/solutions/candidpay", n: "01" },
  { ...solutions[1], href: "/solutions/technology", n: "02" },
  { ...solutions[2], href: "/solutions/technology", n: "03" },
  { ...solutions[3], href: "/solutions/technology", n: "04" },
  { ...solutions[4], href: "/solutions/technology", n: "05" },
  { ...solutions[5], href: "/solutions/technology", n: "06" },
] as const;

export function SolutionsCatalog() {
  return (
    <div className="solutions-deck">
      <div className="solutions-deck__intro">
        <p className="label">The desks</p>
        <h2>Shop, structure, and stay after the sale.</h2>
      </div>

      <Link href="/solutions/energy" className="solutions-feature">
        <span className="solutions-feature__scan" aria-hidden="true" />
        <p className="label">Energy brokerage</p>
        <h3>Electricity, gas, solar, water, waste, and EV charging.</h3>
        <p>
          Candid shops suppliers and structures. You keep one relationship. Open
          the Energy desk.
        </p>
        <span className="solutions-feature__go">See Energy →</span>
      </Link>

      <ul className="solutions-bento">
        {catalog.map((item, i) => (
          <li
            key={item.title}
            className={`solutions-tile solutions-tile--${i % 2 === 0 ? "crimson" : "blue"}`}
            style={{ "--i": i } as CSSProperties}
          >
            <Link href={item.href}>
              <span className="solutions-tile__scan" aria-hidden="true" />
              <span className="solutions-tile__n">{item.n}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Link>
          </li>
        ))}
      </ul>

      <section className="solutions-close">
        <span className="solutions-close__scan" aria-hidden="true" />
        <div>
          <p className="label">Next</p>
          <h2>Leave the IT worry with Candid.</h2>
          <p>
            Obsolete stacks, rotating account managers, and no backup plan will
            stall growth. We align to your expectations on cloud, voice, data,
            network, managed services, and TEM so you can stay on the business.
          </p>
        </div>
        <div className="solutions-close__side">
          <p>
            It starts with a conversation about current and longer-term goals. A
            solutions engineer reviews options and typically presents within
            24–48 hours.
          </p>
          <Link href="/contact" className="btn btn-solid">
            Get a free solutions quote
          </Link>
        </div>
      </section>
    </div>
  );
}
