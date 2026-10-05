import { MobilityPage } from "@/components/technology/MobilityPage";
import { mobilityPage } from "@/lib/mobility";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  mobilityPage.path,
  mobilityPage.metaTitle,
  mobilityPage.description,
);

export default function Page() {
  return <MobilityPage />;
}
