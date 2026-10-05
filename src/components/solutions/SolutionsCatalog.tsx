import type { CSSProperties } from "react";
import Link from "next/link";

const solutions = [
  {
    n: "01",
    title: "Technology",
    body: "Voice, network, cloud, cyber, and managed IT.",
    href: "/solutions/technology",
    action: "See Technology",
    tone: "crimson",
  },
  {
    n: "02",
    title: "CandidPay",
    body: "Merchant processing and point of sale, with rates you can explain.",
    href: "/solutions/candidpay",
    action: "See CandidPay",
    tone: "blue",
  },
  {
    n: "03",
    title: "CandidIQ",
    body: "Contracts, invoices, and technology spend, watched before you ask.",
    href: "/solutions/candidiq",
    action: "See CandidIQ",
    tone: "crimson",
  },
  {
    n: "04",
    title: "Energy",
    body: "Electricity, gas, solar, water, waste, and EV charging.",
    href: "/solutions/energy",
    action: "See Energy",
    tone: "blue",
  },
] as const;

export function SolutionsCatalog() {
  return (
    <section className="solutions-index" aria-label="All solutions">
      <header className="solutions-index__head">
        <p className="label">All solutions</p>
        <h2>Choose where to start.</h2>
      </header>
      <ul className="solutions-index__grid">
        {solutions.map((item, i) => (
          <li
            key={item.href}
            className={`solutions-index__item solutions-index__item--${item.tone}`}
            style={{ "--i": i } as CSSProperties}
          >
            <Link href={item.href}>
              <span className="solutions-index__n">{item.n}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <span className="solutions-index__go">
                {item.action}
                <span aria-hidden="true">→</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
