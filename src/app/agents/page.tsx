import type { Metadata } from "next";
import { PartnerTicker } from "@/components/partners/PartnerTicker";
import { PartnersBody } from "@/components/partners/PartnersBody";
import { ProductHero } from "@/components/products/ProductHero";
import { ProductSubnav } from "@/components/products/ProductSubnav";
import { partnerPage } from "@/lib/partners";

export const metadata: Metadata = {
  title: "Partner Program",
  description:
    "Candid’s Partner Program: 250+ suppliers, real-time quoting, and residuals with no quotas. Refer, co-sell, or add a full practice.",
};

export default function AgentsPage() {
  return (
    <>
      <ProductHero
        hero={partnerPage.hero}
        imageSrc="/brand/partner-hero.png"
        variant="partner"
      />
      <PartnerTicker />
      <ProductSubnav items={partnerPage.nav} />
      <PartnersBody />
    </>
  );
}
