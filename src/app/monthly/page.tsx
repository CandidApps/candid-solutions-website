import type { Metadata } from "next";
import Link from "next/link";
import { monthlyStories } from "@/lib/monthly";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Monthly updates",
  description: `Stories and tips from the ${site.name} monthly email.`,
  alternates: { canonical: `${site.url}/monthly` },
};

export default function MonthlyIndexPage() {
  return (
    <div className="page">
      <p className="text-xs font-semibold tracking-[0.22em] text-red uppercase">
        CANDID Monthly
      </p>
      <h1 className="mt-3 max-w-3xl lg:max-w-5xl font-display text-4xl text-balance sm:text-5xl">
        Updates worth a full read
      </h1>
      <p className="mt-5 max-w-2xl lg:max-w-4xl text-lg leading-relaxed text-muted">
        Longer versions of the stories from our monthly email. Same facts, more
        room to explain.
      </p>

      <ul className="mt-12 grid max-w-2xl lg:max-w-4xl gap-6 sm:gap-8">
        {monthlyStories.map((story) => (
          <li
            key={story.slug}
            className="border border-line bg-card px-6 py-6 sm:px-8 sm:py-7"
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-red uppercase">
              {story.kicker}
            </p>
            <h2 className="mt-2 font-display text-2xl text-balance">
              <Link
                href={`/monthly/${story.slug}`}
                className="hover:text-red"
              >
                {story.title}
              </Link>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {story.teaser}
            </p>
            <Link
              href={`/monthly/${story.slug}`}
              className="mt-4 inline-block text-sm font-semibold text-red hover:text-red-dark"
            >
              {story.cta} →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
