import { CandidIqBody } from "@/components/products/CandidIqBody";
import { ProductHero } from "@/components/products/ProductHero";
import { ProductSubnav } from "@/components/products/ProductSubnav";
import { candidIqPage } from "@/lib/products";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "/solutions/candidiq",
  "CandidIQ for technology spend",
  "Frank, Candid’s AI, monitors contracts, invoices, and technology spend. Specialists negotiate and finish the work. You approve.",
);

export default function CandidIqPage() {
  return (
    <>
      <ProductHero
        hero={candidIqPage.hero}
        imageSrc="/brand/iq-hero-devices.png"
        variant="iq"
      />
      <ProductSubnav items={candidIqPage.nav} />
      <CandidIqBody />
    </>
  );
}
