import { ProcessRail } from "@/components/ProcessRail";
import { process, site } from "@/lib/site";

const steps = process.map((step) => ({
  n: step.n,
  title: step.title,
  body: step.body,
  tone: step.tone === "ink" ? ("crimson" as const) : step.tone,
  link:
    step.n === "07"
      ? { href: site.candidIq, label: "See CandidIQ", external: true }
      : undefined,
}));

export function HowWeWork() {
  return (
    <section
      className="how how--interactive"
      id="how-we-work"
      aria-labelledby="how-heading"
    >
      <div className="band__head how__intro">
        <p className="label">How we work</p>
        <h2 id="how-heading">You focus on the business. We manage the technology.</h2>
        <p>
          Candid handles the suppliers and services so you don’t have to. Same
          disciplined process we’ve run for years, from discovery through
          monitoring, plus a seventh step we added: act first.
        </p>
      </div>

      <ProcessRail steps={steps} label="Process timeline" columns={7} />
    </section>
  );
}
