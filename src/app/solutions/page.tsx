import { pageMeta } from "@/lib/seo";
import { PageBanner } from "@/components/PageBanner";
import { SolutionsCatalog } from "@/components/solutions/SolutionsCatalog";

export const metadata = pageMeta(
  "/solutions",
  "Solutions",
  "Technology, CandidPay, CandidIQ, and Energy. Four pages under one company. Open the one that matches the work.",
);

export default function SolutionsPage() {
  return (
    <>
      <PageBanner
        kicker="Solutions"
        title="All solutions, one company."
        lead="Technology, payments, spend, and energy. Open the page that matches the work."
        ctaHref="/contact"
        ctaLabel="Let’s Chat!"
        imageSrc="/brand/solutions-hero.png"
        imagePosition="center 45%"
        bright
      />
      <SolutionsCatalog />
    </>
  );
}
