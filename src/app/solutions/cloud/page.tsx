import { TechnologyTopicPage } from "@/components/technology/TechnologyTopicPage";
import { pageMeta } from "@/lib/seo";
import { cloudTopic } from "@/lib/technology-topics";

export const metadata = pageMeta(
  cloudTopic.path,
  cloudTopic.metaTitle,
  cloudTopic.description,
);

export default function CloudPage() {
  return <TechnologyTopicPage topic={cloudTopic} />;
}
