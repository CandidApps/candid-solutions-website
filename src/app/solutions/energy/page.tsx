import { EnergyBody } from "@/components/energy/EnergyBody";
import { EnergyMarketsBar } from "@/components/energy/EnergyMarketsBar";
import { ProductHero } from "@/components/products/ProductHero";
import { ProductSubnav } from "@/components/products/ProductSubnav";
import { energyPage } from "@/lib/energy";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "/solutions/energy",
  "Energy",
  "Energy brokerage from Candid. Electricity, natural gas, solar, water, waste, and EV charging — structures you can explain, suppliers we already work.",
);

export default function EnergyPage() {
  return (
    <>
      <ProductHero
        hero={energyPage.hero}
        imageSrc="/brand/energy-hero.png"
        variant="energy"
      />
      <EnergyMarketsBar />
      <ProductSubnav items={energyPage.nav} />
      <EnergyBody />
    </>
  );
}
