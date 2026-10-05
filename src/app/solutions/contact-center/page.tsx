import { ContactCenterPage } from "@/components/technology/ContactCenterPage";
import { pageMeta } from "@/lib/seo";
import { contactCenterTopic } from "@/lib/technology-topics";

export const metadata = pageMeta(
  contactCenterTopic.path,
  contactCenterTopic.metaTitle,
  contactCenterTopic.description,
);

export default function Page() {
  return <ContactCenterPage />;
}
