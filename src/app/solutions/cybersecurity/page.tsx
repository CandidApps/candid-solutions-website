import { TechnologyTopicPage } from "@/components/technology/TechnologyTopicPage";
import { pageMeta } from "@/lib/seo";
import { cybersecurityTopic } from "@/lib/technology-topics";

export const metadata = pageMeta(
  cybersecurityTopic.path,
  cybersecurityTopic.metaTitle,
  cybersecurityTopic.description,
);

export default function CybersecurityPage() {
  return <TechnologyTopicPage topic={cybersecurityTopic} />;
}
