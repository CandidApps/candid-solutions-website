"use client";

import { useEffect, useRef, useState } from "react";

type Parsed = {
  prefix: string;
  suffix: string;
  end: number;
  decimals: number;
  comma: boolean;
};

function parseStat(value: string): Parsed | null {
  const match = value.match(/^([^0-9.]*)([0-9][0-9,]*(?:\.[0-9]+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, raw, suffix] = match;
  const decimals = raw.includes(".") ? (raw.split(".")[1]?.length ?? 0) : 0;
  return {
    prefix,
    suffix,
    end: Number(raw.replace(/,/g, "")),
    decimals,
    comma: raw.includes(","),
  };
}

function format(n: number, parsed: Parsed) {
  const fixed = n.toFixed(parsed.decimals);
  if (!parsed.comma) return `${parsed.prefix}${fixed}${parsed.suffix}`;
  const [int, frac] = fixed.split(".");
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${parsed.prefix}${frac ? `${grouped}.${frac}` : grouped}${parsed.suffix}`;
}

export function CountUp({ value }: { value: string }) {
  const parsed = parseStat(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const next = parseStat(value);
    if (!next) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(value);
      return;
    }

    const node = ref.current;
    if (!node) return;

    let frame = 0;
    let started = false;
    const duration = 1100;
    const zero = format(0, next);

    const run = () => {
      if (started) return;
      started = true;
      setShown(zero);
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - (1 - t) ** 3;
        setShown(format(next.end * eased, next));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          io.disconnect();
          run();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(node);

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  if (!parsed) return value;

  return (
    <span ref={ref} className="count-up" aria-label={value}>
      {shown}
    </span>
  );
}
