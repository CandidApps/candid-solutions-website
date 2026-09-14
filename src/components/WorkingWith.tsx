import { workingWith } from "@/lib/site";

export function WorkingWith() {
  return (
    <section
      className="band band--navy team"
      id="working-with"
      aria-labelledby="team-heading"
    >
      <div className="band__shell">
        <div className="band__head">
          <p className="label">{workingWith.label}</p>
          <h2 id="team-heading">{workingWith.title}</h2>
          <p>{workingWith.lead}</p>
        </div>
        <div className="team__grid">
          {workingWith.desks.map((desk) => (
            <article key={desk.title} className="team__card">
              <h3>{desk.title}</h3>
              <ul>
                {desk.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
