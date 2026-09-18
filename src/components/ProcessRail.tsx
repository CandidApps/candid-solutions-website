"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const CYCLE_MS = 4800;
const HOLD_MS = 8000;

export type ProcessRailStep = {
  n: string;
  title: string;
  body: string;
  tone?: "crimson" | "blue";
  link?: { href: string; label: string; external?: boolean };
};

export function ProcessRail({
  steps,
  label,
  columns = 4,
}: {
  steps: readonly ProcessRailStep[];
  label: string;
  columns?: 4 | 7;
}) {
  const [active, setActive] = useState(0);
  const railRef = useRef<HTMLOListElement>(null);
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
      return;
    }
    const id = window.setInterval(() => {
      if (pausedRef.current) return;
      setActive((index) => (index + 1) % steps.length);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, [steps.length]);

  useEffect(() => {
    const root = railRef.current;
    if (!root) return;
    const node = root.querySelector<HTMLElement>(`[data-step="${active}"]`);
    if (!node) return;
    if (root.scrollWidth <= root.clientWidth + 8) return;

    // Scroll only the rail horizontally — never the page.
    const left =
      node.offsetLeft - (root.clientWidth - node.offsetWidth) / 2;
    root.scrollTo({
      left: Math.max(0, left),
      behavior: "smooth",
    });
  }, [active]);

  useEffect(() => {
    return () => window.clearTimeout(holdTimer.current);
  }, []);

  return (
    <ol
      className={`how__rail${columns === 4 ? " how__rail--4" : ""}`}
      ref={railRef}
      aria-label={label}
      onMouseEnter={() => pause()}
      onMouseLeave={() => resume()}
      onFocusCapture={() => pause()}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          resume();
        }
      }}
    >
      {steps.map((step, index) => {
        const next = steps[index + 1];
        const last = Math.max(steps.length - 1, 1);
        const t = index / last;
        /* Ease toward the ends so middle steps stay clearer red/blue, less muddy. */
        const mix = Math.pow(t, 1.35) * 100;
        return (
          <li
            key={step.n}
            data-step={index}
            className={`how__stop${active === index ? " is-active" : ""}`}
            aria-current={active === index ? "step" : undefined}
            onClick={() => select(index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                select(index);
              }
            }}
            tabIndex={0}
            style={
              {
                "--mix": mix,
                "--index": index,
                "--steps": steps.length,
              } as CSSProperties
            }
          >
            <div className="how__track" aria-hidden="true">
              <span className="how__node">{step.n}</span>
              {next ? (
                <span
                  className={`how__line${active > index ? " is-filled" : ""}`}
                />
              ) : null}
            </div>
            <div className="how__card">
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              {step.link ? (
                <a
                  href={step.link.href}
                  rel={step.link.external ? "noopener noreferrer" : undefined}
                  target={step.link.external ? "_blank" : undefined}
                >
                  {step.link.label} ↗
                </a>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
