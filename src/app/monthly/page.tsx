import Link from "next/link";
import { monthlyStories } from "@/lib/monthly";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta(
  "/monthly",
  "Monthly updates",
  `Stories and tips from the ${site.name} monthly email.`,
);

export default function MonthlyIndexPage() {
  return (
    <div className="page">
      <p className="label">CANDID Monthly</p>
      <h1>Updates worth a full read</h1>
      <p className="page__lead">
        Longer versions of the stories from our monthly email. Same facts, more
        room to explain.
      </p>

      <ul className="monthly-list">
        {monthlyStories.map((story) => (
          <li key={story.slug}>
            <p className="label">{story.kicker}</p>
            <h2>
              <Link href={`/monthly/${story.slug}`}>{story.title}</Link>
            </h2>
            <p>{story.teaser}</p>
            <Link className="monthly-list__more" href={`/monthly/${story.slug}`}>
              {story.cta} →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
