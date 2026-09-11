import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { SolutionsCatalog } from "@/components/solutions/SolutionsCatalog";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Enterprise-level payments, contact center, network, cloud, cybersecurity, and expense management — sourced and managed by Candid.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageBanner
        kicker="Solutions"
        title="Enterprise-level technology, matched to the end client, not the vendor."
        lead="No two customers are the same. We listen, collaborate, and use long-standing relationships with cloud, contact center, network, and colo providers to get world-class service at below-market cost."
        ctaHref="/contact"
        ctaLabel="Get a free solutions quote"
        imageSrc="/brand/solutions-hero.png"
        imagePosition="center 45%"
        bright
      />
      <SolutionsCatalog />
    </>
  );
}
