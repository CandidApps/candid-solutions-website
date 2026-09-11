"use client";

import { technology } from "@/lib/technology";
import type { SosTicket } from "@/lib/sos-news";

export function CyberTicker({ tickets }: { tickets: SosTicket[] }) {
  const loop = [...tickets, ...tickets];
  const { ticker } = technology;

  return (
    <section className="cyber-ticker" aria-label="Live cybersecurity headlines">
      <div className="cyber-ticker__meta">
        <span className="cyber-ticker__live">
          <i aria-hidden="true" />
          {ticker.live}
        </span>
        <span className="cyber-ticker__label">{ticker.label}</span>
        <a href={ticker.sourceHref} rel="noopener noreferrer" target="_blank">
          {ticker.source}
        </a>
      </div>
      <div className="cyber-ticker__viewport">
        <ul className="cyber-ticker__track">
          {loop.map((ticket, i) => (
            <li key={`${ticket.id}-${i}`} aria-hidden={i >= tickets.length}>
              <a href={ticket.href} rel="noopener noreferrer" target="_blank">
                <span className="cyber-ticker__id">{ticket.id}</span>
                <span className="cyber-ticker__cat">{ticket.category}</span>
                <span className="cyber-ticker__title">{ticket.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
