import Image from "next/image";
import Link from "next/link";
import { MobilityField, MobilityHeadline, MobilityPreview } from "@/components/technology/MobilityField";

type HeroCopy = {
  eyebrow: string;
  titleBefore: string;
  titleAccent: string;
  lead: string;
  ghost: { href: string; label: string };
  solid: { href: string; label: string };
  panelKicker: string;
  panelTitle: string;
  panelBody?: string;
  panelAlt?: { title: string; body?: string };
  panelLink: { href: string; label: string };
};

export function ProductHero({
  hero,
  imageSrc,
  variant,
}: {
  hero: HeroCopy;
  imageSrc: string;
  variant: "pay" | "iq" | "partner" | "energy" | "mobility";
}) {
  const panelIsExternal = /^https?:/i.test(hero.panelLink.href);

  return (
    <section className={`tech-hero product-hero product-hero--${variant}`}>
      {variant === "mobility" ? <MobilityField /> : null}
      {variant === "mobility" ? null : (
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="tech-hero__img"
        />
      )}
      {variant === "mobility" ? null : <div className="tech-hero__shade" aria-hidden="true" />}
      <div className="tech-hero__stage">
        <div className="tech-hero__copy">
          <p className="label">{hero.eyebrow}</p>
          {variant === "mobility" ? (
            <MobilityHeadline before={hero.titleBefore} />
          ) : (
            <h1>
              {hero.titleBefore}
              <span className="product-hero__accent">{hero.titleAccent}</span>
            </h1>
          )}
          <p className="tech-hero__lead">{hero.lead}</p>
          {variant === "mobility" ? <MobilityPreview /> : null}
          {variant === "mobility" ? null : (
            <div className="tech-hero__actions">
              <a href={hero.ghost.href} className="btn btn-ghost">
                {hero.ghost.label}
              </a>
              <Link href={hero.solid.href} className="btn btn-solid">
                {hero.solid.label}
              </Link>
            </div>
          )}
        </div>
        <div className={variant === "mobility" ? "product-hero__side" : "product-hero__side product-hero__side--plain"}>
        <aside className="product-hero__panel">
          <p className="label">{hero.panelKicker}</p>
          {hero.panelAlt ? (
            <div className="product-hero__slides">
              <div className="product-hero__slide product-hero__slide--a">
                <h2>{hero.panelTitle}</h2>
                {hero.panelBody ? <p>{hero.panelBody}</p> : null}
              </div>
              <div className="product-hero__slide product-hero__slide--b">
                <h2>{hero.panelAlt.title}</h2>
                {hero.panelAlt.body ? <p>{hero.panelAlt.body}</p> : null}
              </div>
            </div>
          ) : (
            <>
              <h2>{hero.panelTitle}</h2>
              {hero.panelBody ? <p>{hero.panelBody}</p> : null}
            </>
          )}
          {panelIsExternal ? (
            <a href={hero.panelLink.href} rel="noopener noreferrer" target="_blank">
              {hero.panelLink.label} ↗
            </a>
          ) : (
            <a href={hero.panelLink.href}>{hero.panelLink.label} →</a>
          )}
        </aside>
        {variant === "mobility" ? (
          <div className="tech-hero__actions">
            <a href={hero.ghost.href} className="btn btn-ghost">
              {hero.ghost.label}
            </a>
            <Link href={hero.solid.href} className="btn btn-solid">
              {hero.solid.label}
            </Link>
          </div>
        ) : null}
        </div>
      </div>
    </section>
  );
}
