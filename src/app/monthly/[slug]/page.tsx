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
        <p className="label">{story.kicker}</p>
        <h1>{story.title}</h1>
        <p className="page__lead">{story.teaser}</p>
      </div>

      <div className="page page--tight-top">
        <article className="doc doc--story">
          {story.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>

        <div className="page__actions">
          <Link href="/monthly" className="page__back">
            ← All monthly updates
          </Link>
          <Link href="/contact" className="btn btn-solid">
            Talk to {site.name}
          </Link>
        </div>
      </div>
    </>
  );
}
