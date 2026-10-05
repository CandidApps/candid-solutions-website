import { TechnologyTopicPage } from "@/components/technology/TechnologyTopicPage";
import { pageMeta } from "@/lib/seo";
import { internetTopic } from "@/lib/technology-topics";

export const metadata = pageMeta(
  internetTopic.path,
  internetTopic.metaTitle,
  internetTopic.description,
);

export default function InternetPage() {
  return <TechnologyTopicPage topic={internetTopic} />;
}
