"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { process, site } from "@/lib/site";

const toneVar = {
  crimson: "var(--crimson)",
  blue: "var(--blue)",
  ink: "var(--ink)",
} as const;

export function HowWeWork() {
  const [active, setActive] = useState(0);
  const railRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const root = railRef.current;
    if (!root) return;
    const nodes = [...root.querySelectorAll<HTMLElement>("[data-step]")];
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!hit) return;
        const i = Number(hit.target.getAttribute("data-step"));
        if (!Number.isNaN(i)) setActive(i);
      },
      { threshold: [0.45, 0.7], rootMargin: "-10% 0px -20% 0px" },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section className="how" id="how-we-work" aria-labelledby="how-heading">
      <div className="band__head how__intro">
        <p className="label">How we work</p>
        <h2 id="how-heading">You focus on the business. We manage the technology.</h2>
        <p>
          Candid handles the suppliers and services so you don’t have to. Same
          disciplined process we’ve run for years, from discovery through
          monitoring, plus a seventh step we added: act first.
        </p>
      </div>

      <ol className="how__rail" ref={railRef} aria-label="Process timeline">
        {process.map((step, index) => {
          const next = process[index + 1];
          return (
            <li
              key={step.n}
              id={`step-${step.n}`}
              data-step={index}
              className={`how__stop${active === index ? " is-active" : ""}`}
              aria-current={active === index ? "step" : undefined}
              style={
                {
                  "--tone": toneVar[step.tone],
                  "--tone-next": next ? toneVar[next.tone] : toneVar[step.tone],
                } as CSSProperties
              }
            >
              <div className="how__track" aria-hidden="true">
                <span className="how__node">{step.n}</span>
                {next ? <span className="how__line" /> : null}
              </div>
              <div className="how__card">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                {step.n === "07" ? (
                  <a href={site.candidIq} rel="noopener noreferrer" target="_blank">
                    See CandidIQ ↗
                  </a>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
