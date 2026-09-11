import Link from "next/link";
import { solutions } from "@/lib/site";

const catalog = [
  {
    n: "01",
    href: "/solutions/energy",
    title: "Energy Brokerage",
    body: "Electricity, gas, solar, water, waste, and EV charging. Candid shops suppliers and structures. You keep one relationship.",
  },
  { ...solutions[0], href: "/solutions/candidpay", n: "02" },
  { ...solutions[1], href: "/solutions/technology", n: "03" },
  { ...solutions[2], href: "/solutions/technology", n: "04" },
  { ...solutions[3], href: "/solutions/technology", n: "05" },
  { ...solutions[4], href: "/solutions/technology", n: "06" },
  { ...solutions[5], href: "/solutions/technology", n: "07" },
] as const;

export function SolutionsCatalog() {
  return (
    <div className="tech-page">
      <section className="tech-break">
        <div className="tech-shell">
          <div className="band__head">
            <p className="label">The desks</p>
            <h2>Shop, structure, and stay after the sale.</h2>
          </div>
          <div className="tech-panel tech-panel--flow reveal">
            <ul className="tech-staff energy-cells solutions-cells">
              {catalog.map((item) => (
                <li key={item.title}>
                  <Link href={item.href}>
                    <p className="label">{item.n}</p>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="tech-break solutions-note">
        <div className="tech-shell">
          <div className="band__head">
            <h2>Leave the IT worry with Candid.</h2>
            <p>
              Obsolete stacks, rotating account managers, and no backup plan will
              stall growth. We align to your expectations on cloud, voice, data,
              network, managed services, and TEM so you can stay on the business.
            </p>
            <p>
              It starts with a conversation about current and longer-term goals. A
              solutions engineer reviews options and typically presents within
              24–48 hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
