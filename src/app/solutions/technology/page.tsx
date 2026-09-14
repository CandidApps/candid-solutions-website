import type { Metadata } from "next";
import { CyberTicker } from "@/components/technology/CyberTicker";
import { TechHero } from "@/components/technology/TechHero";
import { TechnologySections } from "@/components/technology/TechnologySections";
import { getSosNews } from "@/lib/sos-news";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Managed IT, connectivity, cloud, cybersecurity, contact center, and expense management — planned and built by Candid.",
};

export default async function TechnologyPage() {
  const tickets = await getSosNews();

  return (
    <>
      <TechHero />
      <CyberTicker tickets={tickets} />
      <TechnologySections />
    </>
  );
}
