import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getMonthlyStory,
  monthlyStories,
  monthlyStoryUrl,
} from "@/lib/monthly";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return monthlyStories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = getMonthlyStory(slug);
  if (!story) return { title: "Update" };
  return {
    title: story.title,
    description: story.teaser,
    alternates: { canonical: monthlyStoryUrl(story.slug) },
  };
}

export default async function MonthlyStoryPage({ params }: Props) {
  const { slug } = await params;
  const story = getMonthlyStory(slug);
  if (!story) notFound();

  return (
    <>
      <div className="page page--tight-bottom">
        <p className="text-xs font-semibold tracking-[0.22em] text-red uppercase">
          {story.kicker}
        </p>
        <h1 className="mt-3 max-w-3xl lg:max-w-5xl font-display text-4xl text-balance sm:text-5xl">
          {story.title}
        </h1>
        <p className="mt-5 max-w-2xl lg:max-w-4xl text-lg leading-relaxed text-muted">
          {story.teaser}
        </p>
      </div>

      <div className="page page--tight-top">
        <article className="w-full max-w-2xl lg:max-w-4xl space-y-5">
          {story.body.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-fg">
              {p}
            </p>
          ))}
        </article>

        <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-line pt-10">
          <Link
            href="/monthly"
            className="text-sm font-semibold text-red hover:text-red-dark"
          >
            ← All monthly updates
          </Link>
          <Link
            href="/contact"
            className="inline-block rounded-sm bg-red px-5 py-3 text-sm font-semibold text-white hover:bg-red-dark"
          >
            Talk to {site.name}
          </Link>
        </div>
      </div>
    </>
  );
}
