import { TechnologyTopicPage } from "@/components/technology/TechnologyTopicPage";
import { pageMeta } from "@/lib/seo";
import { paymentProcessingTopic } from "@/lib/technology-topics";

export const metadata = pageMeta(
  paymentProcessingTopic.path,
  paymentProcessingTopic.metaTitle,
  paymentProcessingTopic.description,
);

export default function PaymentProcessingPage() {
  return <TechnologyTopicPage topic={paymentProcessingTopic} />;
}
