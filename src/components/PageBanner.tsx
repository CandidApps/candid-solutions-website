import Image from "next/image";
import Link from "next/link";

export function PageBanner({
  kicker,
  title,
  lead,
  ctaHref,
  ctaLabel,
  imageSrc = "/brand/tech-hero.png",
  imagePosition = "center",
  bright = false,
}: {
  kicker: string;
  title: string;
  lead: string;
  ctaHref: string;
  ctaLabel: string;
  imageSrc?: string;
  imagePosition?: string;
  bright?: boolean;
}) {
  return (
    <section
      className={`tech-hero tech-hero--banner${bright ? " tech-hero--banner-bright" : ""}`}
    >
      <Image
        src={imageSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className="tech-hero__img"
        style={{ objectPosition: imagePosition }}
      />
      <div className="tech-hero__shade" aria-hidden="true" />
      <div className="tech-hero__stage">
        <div className="tech-hero__copy">
          <p className="label">{kicker}</p>
          <h1>{title}</h1>
          <p className="tech-hero__lead">{lead}</p>
          <div className="tech-hero__actions">
            <Link href={ctaHref} className="btn btn-solid">
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
