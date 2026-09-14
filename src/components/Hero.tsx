import type { CSSProperties } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

const KINETIC = "more";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__stage">
        <div className="hero__copy">
          <p className="hero__eyebrow">Candid Solutions, Inc. · since 2006</p>
          <div className="hero__text">
            <h1 className="hero__title">
              A technology partner that{" "}
              <span className="hero__title-break">keeps becoming </span>
              <span className="hero__kinetic" aria-label={KINETIC}>
                {KINETIC.split("").map((ch, i) => (
                  <span
                    key={`${ch}-${i}`}
                    className="hero__letter"
                    style={{ "--i": i } as CSSProperties}
                    aria-hidden="true"
                  >
                    {ch}
                  </span>
                ))}
              </span>
              .
            </h1>
            <p className="hero__lead">
              We began dealing with the carriers so you didn’t have to. Clients asked
              for more: payments, cloud, cyber, spend. We grew with them. Today
              Candid Solutions is a full-service IT consulting firm that owns{" "}
              <a href={site.candidPay} rel="noopener noreferrer" target="_blank">
                CandidPay
              </a>{" "}
              and{" "}
              <a href={site.candidIq} rel="noopener noreferrer" target="_blank">
                CandidIQ
              </a>
              . Visionary. Proactive. Client first.
            </p>
          </div>
          <div className="hero__actions">
            <a href="#story" className="btn btn-ghost">
              See our story
            </a>
          </div>
          <dl className="hero__stats">
            <div>
              <dt>300+</dt>
              <dd>providers</dd>
            </div>
            <div>
              <dt>20+</dt>
              <dd>years</dd>
            </div>
            <div>
              <dt>25–30%</dt>
              <dd>typical savings</dd>
            </div>
            <div>
              <dt>$0</dt>
              <dd>advisory cost</dd>
            </div>
          </dl>
        </div>

        <aside className="hero__panel">
          <p className="hero__panel-kicker">Why we keep growing</p>
          <h2>Because clients asked us to.</h2>
          <ul>
            <li>Treat every account like family</li>
            <li>Act before the ticket, not after</li>
            <li>Stay on your side of the table</li>
            <li>Build what the market still won’t</li>
          </ul>
          <Link href="/contact" className="btn btn-solid">
            Schedule a conversation
          </Link>
        </aside>
      </div>
    </section>
  );
}
