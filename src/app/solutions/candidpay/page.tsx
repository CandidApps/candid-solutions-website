import { CandidPayBody } from "@/components/products/CandidPayBody";
import { PayGateways } from "@/components/products/PayGateways";
import { ProductHero } from "@/components/products/ProductHero";
import { ProductSubnav } from "@/components/products/ProductSubnav";
import { candidPayPage } from "@/lib/products";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "/solutions/candidpay",
  "Payment processing & point of sale",
  "CandidPay is Candid’s payments ISO: merchant processing, POS, and QuickBooks Online sync, with rates you can explain.",
);

export default function CandidPayPage() {
  return (
    <>
      <ProductHero
        hero={candidPayPage.hero}
        imageSrc="/brand/pay-hero.png"
        variant="pay"
      />
      <PayGateways />
      <ProductSubnav items={candidPayPage.nav} />
      <CandidPayBody />
    </>
  );
}
