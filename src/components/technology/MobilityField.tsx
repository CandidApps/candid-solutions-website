"use client";

import { useEffect, useRef, useState } from "react";

const BLUE = "#4D6BC1";
const CREAM = "#F5F1EC";
const CRIMSON = "#E91536";
const INK = "#171614";

type Node = {
  ring: number;
  angle: number;
  lift: number;
  device: boolean;
  tone: "blue" | "cream" | "crimson";
};

function buildNodes(): Node[] {
  const nodes: Node[] = [];
  const rings = [
    { count: 72, lift: 0 },
    { count: 54, lift: 0.16 },
    { count: 54, lift: -0.16 },
  ];
  rings.forEach((ring, ringIndex) => {
    for (let i = 0; i < ring.count; i += 1) {
      const toneRoll = (i + ringIndex) % 9;
      nodes.push({
        ring: ringIndex,
        angle: (i / ring.count) * Math.PI * 2,
        lift: ring.lift + Math.sin(i * 1.7) * 0.04,
        device: i % 3 === 0,
        tone: toneRoll === 0 ? "crimson" : toneRoll === 4 ? "cream" : "blue",
      });
    }
  });
  return nodes;
}

function toneColor(tone: Node["tone"]) {
  if (tone === "crimson") return CRIMSON;
  if (tone === "cream") return CREAM;
  return BLUE;
}

export function MobilityField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const surface: HTMLCanvasElement = canvas;
    const ctx: CanvasRenderingContext2D = context;

    const nodes = buildNodes();
    const flyers = Array.from({ length: 12 }, (_, index) => ({
      x: Math.random(),
      y: Math.random(),
      vx: (0.00011 + (index % 5) * 0.00004) * (index % 2 === 0 ? 1 : -1),
      vy: ((index % 4) - 1.5) * 0.00005,
      rot: index * 0.7,
      vr: (index % 2 === 0 ? 0.0004 : -0.00035),
      scale: 0.75 + (index % 4) * 0.28,
      tone: (index % 5 === 0 ? "crimson" : index % 3 === 0 ? "cream" : "blue") as Node["tone"],
    }));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    let frame = 0;
    let running = true;

    function resize() {
      const parent = surface.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      surface.width = Math.max(1, Math.floor(rect.width * dpr));
      surface.height = Math.max(1, Math.floor(rect.height * dpr));
    }

    function roundRect(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      w: number,
      h: number,
      r: number,
    ) {
      const radius = Math.min(r, w / 2, h / 2);
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.arcTo(x + w, y, x + w, y + h, radius);
      ctx.arcTo(x + w, y + h, x, y + h, radius);
      ctx.arcTo(x, y + h, x, y, radius);
      ctx.arcTo(x, y, x + w, y, radius);
      ctx.closePath();
    }

    function paint(time: number) {
      const width = surface.width;
      const height = surface.height;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = INK;
      ctx.fillRect(0, 0, width, height);

      const t = reduce ? 1.2 : time / 1000;
      pointer.x += (pointer.tx - pointer.x) * 0.06;
      pointer.y += (pointer.ty - pointer.y) * 0.06;
      const spin = t * 0.22 + pointer.x * 0.55;
      const tilt = 0.62 + Math.sin(t * 0.15) * 0.08 + pointer.y * 0.42;
      const cx = width * 0.58;
      const cy = height * 0.52;
      const orbit = Math.min(width, height) * 0.72;
      const cosT = Math.cos(tilt);
      const sinT = Math.sin(tilt);

      const glow = (px: number, py: number, tint: string, size: number, alpha: number) => {
        const g = ctx.createRadialGradient(px, py, 0, px, py, size);
        g.addColorStop(0, tint);
        g.addColorStop(1, "rgba(23,22,20,0)");
        ctx.globalAlpha = alpha;
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
      };
      glow(cx + pointer.x * orbit * 0.08, cy + pointer.y * orbit * 0.06, BLUE, orbit * 1.05, 0.34);
      glow(cx + Math.cos(t * 0.2) * orbit * 0.2, cy, CRIMSON, orbit * 0.42, 0.2);
      ctx.globalAlpha = 1;

      const projected = nodes.map((node) => {
        const speed = node.ring === 0 ? 1 : node.ring === 1 ? -0.65 : 0.4;
        const angle = node.angle + spin * speed;
        const x = Math.cos(angle);
        const z = Math.sin(angle);
        const y = node.lift;
        const y2 = y * cosT - z * sinT;
        const z2 = y * sinT + z * cosT;
        const depth = 2.4 / (2.4 + z2);
        return {
          x: cx + x * orbit * depth,
          y: cy + y2 * orbit * 0.92 * depth,
          z: z2,
          depth,
          device: node.device,
          tone: node.tone,
          ring: node.ring,
        };
      });

      ctx.lineWidth = Math.max(1, width / 1600);
      for (let i = 0; i < projected.length; i += 1) {
        const a = projected[i];
        if (a.z < -0.2) continue;
        const next = projected.find(
          (point, index) => index > i && point.ring === a.ring && point.z > -0.2,
        );
        if (!next) continue;
        const dist = Math.hypot(a.x - next.x, a.y - next.y);
        if (dist > orbit * 0.28) continue;
        ctx.globalAlpha = (1 - dist / (orbit * 0.28)) * 0.45 * Math.min(a.depth, next.depth);
        ctx.strokeStyle = a.tone === "crimson" || next.tone === "crimson" ? CRIMSON : BLUE;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(next.x, next.y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      const ordered = [...projected].sort((a, b) => a.z - b.z);
      for (const point of ordered) {
        ctx.globalAlpha = 0.45 + ((point.z + 1) / 2) * 0.55;
        ctx.fillStyle = toneColor(point.tone);
        ctx.shadowColor = toneColor(point.tone);
        ctx.shadowBlur = (point.device ? 16 : 8) * point.depth;
        const unit = (point.device ? 13 : 4.5) * point.depth * (width / 1100);
        if (point.device) {
          roundRect(ctx, point.x - unit * 0.38, point.y - unit, unit * 0.76, unit * 1.65, unit * 0.2);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(point.x, point.y, unit, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;

      const dt = reduce ? 0 : 16;
      for (const flyer of flyers) {
        flyer.x += flyer.vx * dt;
        flyer.y += flyer.vy * dt;
        flyer.rot += flyer.vr * dt;
        if (flyer.x > 1.12) flyer.x = -0.12;
        if (flyer.x < -0.12) flyer.x = 1.12;
        if (flyer.y > 1.15) flyer.y = -0.15;
        if (flyer.y < -0.15) flyer.y = 1.15;
        const px = flyer.x * width;
        const py = flyer.y * height;
        const phoneH = flyer.scale * Math.min(width, height) * 0.055;
        const phoneW = phoneH * 0.48;
        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(flyer.rot);
        ctx.globalAlpha = 0.82;
        ctx.fillStyle = toneColor(flyer.tone);
        ctx.shadowColor = toneColor(flyer.tone);
        ctx.shadowBlur = 14;
        roundRect(ctx, -phoneW / 2, -phoneH / 2, phoneW, phoneH, phoneW * 0.22);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.fillStyle = INK;
        roundRect(ctx, -phoneW * 0.32, -phoneH * 0.32, phoneW * 0.64, phoneH * 0.5, phoneW * 0.08);
        ctx.fill();
        ctx.restore();
      }
      ctx.globalAlpha = 1;
    }

    const observer = new ResizeObserver(resize);
    if (surface.parentElement) observer.observe(surface.parentElement);
    resize();

    function loop(time: number) {
      if (!running) return;
      paint(time);
      if (!reduce) frame = window.requestAnimationFrame(loop);
    }

    function onHide() {
      if (document.hidden) {
        running = false;
        window.cancelAnimationFrame(frame);
        return;
      }
      if (!running) {
        running = true;
        frame = window.requestAnimationFrame(loop);
      }
    }

    function onMove(event: PointerEvent) {
      const rect = surface.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      pointer.tx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.ty = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    }

    function onLeave() {
      pointer.tx = 0;
      pointer.ty = 0;
    }

    frame = window.requestAnimationFrame(loop);
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);

    return () => {
      running = false;
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className="mobility-field" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}

const swapLines = [
  "Spend optimization",
  "Order routing",
  "Asset management",
  "Centralized depot",
  "Contract negotiation",
] as const;

export function MobilityHeadline({ before }: { before: string }) {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const indexRef = { current: 0 };
    let clear = 0;
    const id = window.setInterval(() => {
      const previous = indexRef.current;
      const next = (previous + 1) % swapLines.length;
      indexRef.current = next;
      setLeaving(previous);
      setIndex(next);
      window.clearTimeout(clear);
      clear = window.setTimeout(() => setLeaving(null), 220);
    }, 1500);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(clear);
    };
  }, []);

  return (
    <h1>
      {before}
      <span className="mobility-swap" aria-live="polite">
        {leaving !== null ? (
          <span className="product-hero__accent mobility-swap__word is-out" key={`out-${leaving}`}>
            {swapLines[leaving]}
          </span>
        ) : null}
        <span className="product-hero__accent mobility-swap__word is-in" key={index}>
          {swapLines[index]}
        </span>
      </span>
    </h1>
  );
}
const previewRows = [
  { label: "Devices reporting", base: 2140, swing: 48 },
  { label: "Orders in motion", base: 24, swing: 9 },
  { label: "Lines to review", base: 11, swing: 5 },
] as const;

export function MobilityPreview() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setStep((value) => value + 1), 900);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="mobility-preview" aria-label="Field preview">
      <p className="label">Field preview</p>
      <dl>
        {previewRows.map((row, index) => {
          const value = row.base + Math.round(Math.sin(step * 0.65 + index) * row.swing);
          return (
            <div key={row.label}>
              <dt>{row.label}</dt>
              <dd>{value.toLocaleString("en-US")}</dd>
            </div>
          );
        })}
      </dl>
      <span className="mobility-preview__scan" aria-hidden="true" />
    </div>
  );
}
