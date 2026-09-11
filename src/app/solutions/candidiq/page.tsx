import type { Metadata } from "next";
import { CandidIqBody } from "@/components/products/CandidIqBody";
import { ProductHero } from "@/components/products/ProductHero";
import { ProductSubnav } from "@/components/products/ProductSubnav";
import { candidIqPage } from "@/lib/products";

export const metadata: Metadata = {
  title: "CandidIQ",
  description:
    "Commission tracking, reporting, and the Candid Portal — with Frank and Candid specialists who finish the work. Open candidiq.app.",
};

export default function CandidIqPage() {
  return (
    <>
      <ProductHero
        hero={candidIqPage.hero}
        imageSrc="/brand/iq-hero-meeting.png"
        variant="iq"
      />
      <ProductSubnav items={candidIqPage.nav} />
      <CandidIqBody />
    </>
  );
}
