import Link from "next/link";
import { ProcessRail } from "@/components/ProcessRail";
import { ProductSubnav } from "@/components/products/ProductSubnav";
import { ContactCenterBanner } from "@/components/technology/ContactCenterBanner";
import { contactCenterPage } from "@/lib/contact-center";
import { site } from "@/lib/site";
import { contactCenterTopic } from "@/lib/technology-topics";

export function ContactCenterPage() {
  const { rail, overview, examples, work, process, close } = contactCenterPage;
  const loop = [...rail.items, ...rail.items];

  return (
    <>
      <ContactCenterBanner
        kicker={contactCenterTopic.kicker}
        title={contactCenterTopic.title}
        lead={contactCenterTopic.lead}
      />

      <div className="pay-rails">
        <section className="pay-gateways" aria-label={rail.label}>
          <p className="pay-gateways__label">{rail.label}</p>
          <div className="pay-gateways__viewport">
            <ul className="pay-gateways__track">
              {loop.map((name, i) => (
                <li key={`${name}-${i}`} aria-hidden={i >= rail.items.length || undefined}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <ProductSubnav items={contactCenterPage.nav} />

      <section className="band cc-page" id="overview">
        <div className="pay-overview">
          <div>
            <p className="label">{overview.label}</p>
            <h2>{overview.title}</h2>
            <p>{overview.body}</p>
          </div>
          <aside className="cc-sheet" aria-label={overview.sheetTitle}>
            <div className="cc-sheet__top">
              <p>{overview.sheetTitle}</p>
              <span>{overview.sheetKicker}</span>
            </div>
            <ul>
              {overview.rows.map((row) => (
                <li key={row.title}>
                  <strong>{row.title}</strong>
                  <em>{row.body}</em>
                </li>
              ))}
            </ul>
            <p className="cc-sheet__note">{overview.note}</p>
          </aside>
        </div>
      </section>

      <section className="band band--navy team" id="examples">
        <div className="band__shell">
          <div className="band__head">
            <p className="label">{examples.label}</p>
            <h2>{examples.title}</h2>
            <p>{examples.lead}</p>
          </div>
          <div className="cc-stories">
            {examples.items.map((item) => (
              <article key={item.title} className="cc-story">
                <p className="label">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="cc-lower">
      <section className="band" id="work">
        <div className="pay-overview mobility-work">
          <div>
            <p className="label">{work.label}</p>
            <h2>{work.title}</h2>
            <p>{work.lead}</p>
          </div>
          <ol className="mobility-steps">
            {work.items.map((item) => (
              <li key={item.n}>
                <span>{item.n}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="how how--4 how--interactive" id="how">
        <div className="band__head how__intro">
          <p className="label">{process.label}</p>
          <h2>{process.title}</h2>
        </div>
        <ProcessRail steps={process.steps} label="Contact center" columns={4} />
      </section>

      <section className="product-close" id="close">
        <div className="product-close__inner">
          <div className="product-close__copy">
            <p className="label">{close.label}</p>
            <h2>{close.title}</h2>
          </div>
          <div className="product-close__actions">
            <a href={site.phoneHref} className="btn btn-solid">
              {close.call}
            </a>
            <a href={site.emailHref} className="btn btn-line">
              {close.email}
            </a>
            <Link href="/contact" className="btn btn-line">
              Let’s Chat!
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
