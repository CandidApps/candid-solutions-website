import { site } from "@/lib/site";

export type MonthlyStory = {
  slug: string;
  kicker: string;
  title: string;
  /** Short blurb shown in the email card */
  teaser: string;
  /** CTA label in the email */
  cta: string;
  /** Full article body paragraphs */
  body: string[];
};

/** Current CANDID Monthly issue stories — edit these with each send. */
export const monthlyStories: MonthlyStory[] = [
  {
    slug: "first-story",
    kicker: "Product",
    title: "First story title goes here",
    teaser:
      "One short paragraph. Say the thing plainly, then stop. Two sentences is usually enough for a newsletter block.",
    cta: "Read more",
    body: [
      "One short paragraph. Say the thing plainly, then stop. Two sentences is usually enough for a newsletter block.",
      "This is where the full write-up lives. Keep it concrete: what changed, who it helps, and what they should do next.",
      "When you send the next issue, replace this placeholder with the real product update — release notes, a portal change, or a capability clients should know about.",
    ],
  },
  {
    slug: "second-story",
    kicker: "Client win",
    title: "Second story title goes here",
    teaser:
      "Another short paragraph. Swap the kicker above to match whatever the block is about.",
    cta: "See the details",
    body: [
      "Another short paragraph. Swap the kicker above to match whatever the block is about.",
      "Use this for the longer client story: the problem, what we changed, and the outcome. Names and numbers belong here when you have permission to share them.",
      "Everything stays in the email — open the dropdown for the full write-up, no extra click-away.",
    ],
  },
  {
    slug: "third-story",
    kicker: "Tip",
    title: "Third story title goes here",
    teaser:
      "Use this block for a portal tip, a reminder, or anything worth one short read.",
    cta: "Show me how",
    body: [
      "Use this block for a portal tip, a reminder, or anything worth one short read.",
      "Spell out the steps here — screenshots optional later. The teaser gets them interested; this dropdown shows them how.",
      "Point the tip at the CandidIQ portal or the habit you want clients to build that month.",
    ],
  },
];

export function getMonthlyStory(slug: string): MonthlyStory | undefined {
  return monthlyStories.find((s) => s.slug === slug);
}

export function monthlyStoryUrl(slug: string): string {
  return `${site.url}/monthly/${slug}`;
}
