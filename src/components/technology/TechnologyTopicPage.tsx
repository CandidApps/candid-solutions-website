import Link from "next/link";
import type { ReactNode } from "react";
import { ProductSubnav } from "@/components/products/ProductSubnav";

export type TechnologyTopicPoint = {
  title: string;
  body: string;
  details?: readonly string[];
};

export type TechnologyTopicGroup = {
  label: string;
  title: string;
  points: readonly TechnologyTopicPoint[];
};

export type TechnologyTopic = {
  path: string;
  metaTitle: string;
  description: string;
  kicker: string;
  title: string;
  lead: string;
  sectionLabel: string;
  sectionTitle: string;
  sectionLead?: string;
  points: readonly TechnologyTopicPoint[];
  more?: TechnologyTopicGroup;
  extra?: TechnologyTopicGroup;
  aside?: { before: string; href: string; label: string; after: string };
};

function TopicSheet({
  label,
  points,
}: {
  label: string;
  points: readonly TechnologyTopicPoint[];
}) {
  return (
    <aside className="cc-sheet" aria-label={label}>
      <div className="cc-sheet__top">
        <p>{label}</p>
      </div>
      <ul>
        {points.map((point) => (
          <li key={point.title}>
            <strong>{point.title}</strong>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function TopicOverview({
  id,
  label,
  title,
  lead,
  points,
}: {
  id: string;
  label: string;
  title: string;
  lead?: string;
  points: readonly TechnologyTopicPoint[];
}) {
  return (
    <section className="band cc-page" id={id}>
      <div className="pay-overview">
        <div>
          <p className="label">{label}</p>
          <h2>{title}</h2>
          {lead ? <p>{lead}</p> : null}
        </div>
        <aside className="cc-sheet" aria-label={label}>
          <div className="cc-sheet__top">
            <p>{label}</p>
          </div>
          <ul>
            {points.map((point) => (
              <li key={point.title}>
                <strong>{point.title}</strong>
                <em>{point.body}</em>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

function TopicWork({
  id,
  label,
  title,
  points,
}: {
  id: string;
  label: string;
  title: string;
  points: readonly TechnologyTopicPoint[];
}) {
  return (
    <div className="cc-lower cc-lower--topic">
      <section className="band" id={id}>
        <div className="pay-overview mobility-work">
          <div>
            <p className="label">{label}</p>
            <h2>{title}</h2>
          </div>
          <ol className="mobility-steps">
            {points.map((point, index) => (
              <li key={point.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}

function TopicBand({
  id,
  label,
  title,
  points,
}: {
  id: string;
  label: string;
  title: string;
  points: readonly TechnologyTopicPoint[];
}) {
  return (
    <section className="band band--navy team" id={id}>
      <div className="band__shell">
        <div className="band__head">
          <p className="label">{label}</p>
          <h2>{title}</h2>
        </div>
        <div className="cc-stories">
          {points.map((point) => (
            <article key={point.title} className="cc-story">
              <h3>{point.title}</h3>
              <p>{point.body}</p>
              {point.details ? (
                <ul>
                  {point.details.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechnologyTopicPage({
  topic,
  banner,
}: {
  topic: TechnologyTopic;
  banner?: ReactNode;
}) {
  const page = (
    <>
      {banner ?? (
        <section className="cc-banner cc-banner--topic">
          <div className="cc-banner__stage">
            <div className="cc-banner__copy">
              <p className="label">{topic.kicker}</p>
              <h1>{topic.title}</h1>
              <p className="cc-banner__lead">{topic.lead}</p>
              <div className="cc-banner__actions">
                <Link href="/contact" className="btn btn-solid">
                  Let’s Chat!
                </Link>
              </div>
              {topic.aside ? (
                <p className="tech-topic__aside">
                  {topic.aside.before}{" "}
                  <Link href={topic.aside.href}>{topic.aside.label}</Link>
                  {topic.aside.after}
                </p>
              ) : null}
            </div>
            <TopicSheet label={topic.sectionLabel} points={topic.points} />
          </div>
        </section>
      )}
      {topic.more && topic.extra ? (
        <>
          <ProductSubnav
            items={[
              { href: "#coverage", label: topic.sectionLabel },
              { href: "#more", label: topic.more.label },
              { href: "#extra", label: topic.extra.label },
            ]}
          />
          {topic.path === "/solutions/internet" ? (
            <TopicBand
              id="coverage"
              label={topic.sectionLabel}
              title={topic.sectionTitle}
              points={topic.points}
            />
          ) : (
            <TopicOverview
              id="coverage"
              label={topic.sectionLabel}
              title={topic.sectionTitle}
              lead={topic.sectionLead}
              points={topic.points}
            />
          )}
          {topic.path === "/solutions/internet" ? (
            <TopicOverview
              id="more"
              label={topic.more.label}
              title={topic.more.title}
              points={topic.more.points}
            />
          ) : (
            <TopicBand
              id="more"
              label={topic.more.label}
              title={topic.more.title}
              points={topic.more.points}
            />
          )}
          <TopicWork
            id="extra"
            label={topic.extra.label}
            title={topic.extra.title}
            points={topic.extra.points}
          />
        </>
      ) : (
        <TopicBand
          id="coverage"
          label={topic.sectionLabel}
          title={topic.sectionTitle}
          points={topic.points}
        />
      )}
    </>
  );

  if (topic.path !== "/solutions/internet") return page;
  return <div className="internet-page">{page}</div>;
}
