import { CyberTicker } from "@/components/technology/CyberTicker";
import { TechHero } from "@/components/technology/TechHero";
import { TechnologySections } from "@/components/technology/TechnologySections";
import { pageMeta } from "@/lib/seo";
import { getSosNews } from "@/lib/sos-news";

export const metadata = pageMeta(
  "/solutions/technology",
  "Business phone systems & managed IT",
  "UCaaS, contact center, internet, SD-WAN, cloud, and cybersecurity. Candid compares providers and stays on the account.",
);

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
