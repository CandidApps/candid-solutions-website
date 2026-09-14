import type { Metadata } from "next";
import { CandidPayBody } from "@/components/products/CandidPayBody";
import { PayGateways } from "@/components/products/PayGateways";
import { ProductHero } from "@/components/products/ProductHero";
import { ProductSubnav } from "@/components/products/ProductSubnav";
import { candidPayPage } from "@/lib/products";

export const metadata: Metadata = {
  title: "CandidPay",
  description:
    "Payment processing and merchant services from Candid. Rates you can explain, hardware that fits, and a link to candidpay.app.",
};

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
