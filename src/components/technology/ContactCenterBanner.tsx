"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const phrases = [
  "matched to the call.",
  "routed to the right person.",
  "on one desktop.",
  "without the repeat.",
] as const;

const calls = [
  { initials: "ML", queue: "Main line", channel: "Voice" },
  { initials: "AH", queue: "After hours", channel: "Voice" },
  { initials: "BL", queue: "Billing", channel: "Chat" },
  { initials: "FD", queue: "Front desk", channel: "SMS" },
] as const;

const states = ["Ringing", "Routed", "With an agent", "Answered"] as const;

function FlyingLine() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const indexRef = { current: 0 };
    let clear = 0;
    const id = window.setInterval(() => {
      const previous = indexRef.current;
      const next = (previous + 1) % phrases.length;
      indexRef.current = next;
      setLeaving(previous);
      setIndex(next);
      window.clearTimeout(clear);
      clear = window.setTimeout(() => setLeaving(null), 700);
    }, 3400);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(clear);
    };
  }, []);

  return (
    <span className="cc-fly" aria-live="polite">
      {leaving !== null ? (
        <span className="cc-fly__word is-out" key={`out-${leaving}`}>
          {phrases[leaving]}
        </span>
      ) : null}
      <span className="cc-fly__word is-in" key={index}>
        {phrases[index]}
      </span>
    </span>
  );
}

function DeskCard() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setStep((value) => value + 1), 1800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <aside className="cc-desk" aria-label="Sample call desk">
      <div className="cc-desk__top">
        <p>Calls</p>
        <span>Sample desk</span>
      </div>
      <ul>
        {calls.map((call, index) => {
          const state = states[(index + step) % states.length];
          const live = index === step % calls.length;
          return (
            <li key={call.queue} className={live ? "is-live" : undefined}>
              <span className={`cc-desk__mark${state === "Ringing" ? " is-hot" : ""}`} aria-hidden="true">
                {call.initials}
              </span>
              <span className="cc-desk__who">
                <strong>{call.queue}</strong>
                <em>{call.channel}</em>
              </span>
              <span className={`cc-desk__state${state === "Ringing" ? " is-hot" : ""}`}>
                <span key={`${call.queue}-${state}`}>{state}</span>
              </span>
            </li>
          );
        })}
      </ul>
      <p className="cc-desk__note">A sample of the floor. Not a live feed from your account.</p>
    </aside>
  );
}

export function ContactCenterBanner({
  kicker,
  lead,
}: {
  kicker: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="cc-banner" data-hero="desk">
      <div className="cc-banner__stage">
        <div className="cc-banner__copy">
          <p className="label cc-rise" style={{ animationDelay: "0.05s" }}>
            {kicker}
          </p>
          <h1>
            <span className="cc-rise" style={{ animationDelay: "0.12s" }}>
              Phone systems
            </span>
            <span className="cc-rise" style={{ animationDelay: "0.22s" }}>
              and contact centers,
            </span>
            <FlyingLine />
          </h1>
          <p className="cc-banner__lead cc-rise" style={{ animationDelay: "0.42s" }}>
            {lead}
          </p>
          <div className="cc-banner__actions cc-rise" style={{ animationDelay: "0.55s" }}>
            <Link href="/contact" className="btn btn-solid">
              Let’s Chat!
            </Link>
          </div>
        </div>
        <DeskCard />
      </div>
    </section>
  );
}
