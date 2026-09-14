import Image from "next/image";
import Link from "next/link";
import { technology } from "@/lib/technology";

export function TechHero() {
  const { hero } = technology;

  return (
    <section className="tech-hero">
      <Image
        src="/brand/tech-hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="tech-hero__img"
      />
      <div className="tech-hero__shade" aria-hidden="true" />
      <div className="tech-hero__stage">
        <div className="tech-hero__copy">
          <p className="label">{hero.eyebrow}</p>
          <h1>
            {hero.titleBefore}
            <span>{hero.titleAccent}</span>
          </h1>
          <p className="tech-hero__lead">{hero.lead}</p>
          <div className="tech-hero__actions">
            <a href={hero.ghost.href} className="btn btn-ghost">
              {hero.ghost.label}
            </a>
            <Link href={hero.solid.href} className="btn btn-solid">
              {hero.solid.label}
            </Link>
          </div>
        </div>
        <aside className="tech-hero__panel">
          <p className="label">{hero.panelKicker}</p>
          <h2>{hero.panelTitle}</h2>
          <p>{hero.panelBody}</p>
          <a href={hero.panelLink.href}>{hero.panelLink.label} →</a>
        </aside>
      </div>
    </section>
  );
}
