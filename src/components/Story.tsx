import type { CSSProperties } from "react";
import { growth, homeNav } from "@/lib/site";

export function Story() {
  return (
    <>
      <nav className="subnav" aria-label="On this page">
        <div className="subnav__inner">
          {homeNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section className="band" id="story">
        <div className="band__head">
          <p className="label">Our story</p>
          <h2>From a carrier desk to a company that builds what clients need next.</h2>
          <p>
            This isn’t a rebrand for its own sake. It’s the same people, growing
            because our clients asked us to do more, and we refused to stay
            reactionary.
          </p>
        </div>

        <ol className="timeline" aria-label="Company chronology">
          {growth.map((step, index) => (
            <li
              key={step.n}
              className="timeline__item"
              style={{ "--i": index } as CSSProperties}
            >
              <div className="timeline__rail" aria-hidden="true">
                <span className="timeline__dot" />
              </div>
              <article className="timeline__card">
                <p className="timeline__eyebrow">
                  <span className="timeline__n">{step.n}</span>
                  <span className="timeline__sep" aria-hidden="true">
                    ·
                  </span>
                  <span className="timeline__era">{step.era}</span>
                </p>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
