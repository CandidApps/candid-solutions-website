"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const CYCLE_MS = 4800;
const HOLD_MS = 8000;

export function TechFlowSteps({
  steps,
  label,
}: {
  steps: readonly { n: string; title: string; body: string }[];
  label: string;
}) {
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);
  const holdTimer = useRef<number>(0);

  function pause(holdMs?: number) {
    pausedRef.current = true;
    window.clearTimeout(holdTimer.current);
    if (holdMs) {
      holdTimer.current = window.setTimeout(() => {
        pausedRef.current = false;
      }, holdMs);
    }
  }

  function resume() {
    window.clearTimeout(holdTimer.current);
    pausedRef.current = false;
  }

  function select(index: number) {
    setActive(index);
    pause(HOLD_MS);
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(steps.length - 1);
      return;
    }
    const id = window.setInterval(() => {
      if (pausedRef.current) return;
      setActive((index) => (index + 1) % steps.length);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, [steps.length]);

  useEffect(() => {
    return () => window.clearTimeout(holdTimer.current);
  }, []);

  return (
    <div
      className="tech-panel tech-panel--flow tech-flow-panel reveal"
      style={
        {
          "--flow-progress": (active + 1) / steps.length,
        } as CSSProperties
      }
      onMouseEnter={() => pause()}
      onMouseLeave={() => resume()}
      onFocusCapture={() => pause()}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          resume();
        }
      }}
    >
      <ol className="tech-flow__steps" aria-label={label}>
        {steps.map((step, index) => (
          <li
            key={step.n}
            className={`${index % 2 === 0 ? "is-crimson" : "is-blue"}${active === index ? " is-active" : ""}`}
            aria-current={active === index ? "step" : undefined}
            tabIndex={0}
            onClick={() => select(index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                select(index);
              }
            }}
          >
            <span>{step.n}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
