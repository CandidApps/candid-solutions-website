import Image from "next/image";
import { candidPayPage } from "@/lib/products";

type MethodName = (typeof candidPayPage.methods.items)[number];

const brandLogos: Record<
  Exclude<MethodName, "CandidPay">,
  { src: string; width: number; height: number; matchCandid?: boolean }
> = {
  Visa: { src: "/brand/pay/visa.svg", width: 72, height: 24, matchCandid: true },
  Mastercard: { src: "/brand/pay/mastercard.svg", width: 40, height: 24 },
  "American Express": {
    src: "/brand/pay/americanexpress.svg",
    width: 48,
    height: 48,
    matchCandid: true,
  },
  Discover: {
    src: "/brand/pay/discover.svg",
    width: 72,
    height: 24,
    matchCandid: true,
  },
  PayPal: { src: "/brand/pay/paypal.svg", width: 48, height: 48 },
  "Apple Pay": {
    src: "/brand/pay/applepay.svg",
    width: 72,
    height: 48,
    matchCandid: true,
  },
  "Google Pay": {
    src: "/brand/pay/googlepay.svg",
    width: 72,
    height: 32,
    matchCandid: true,
  },
};

export function PayMethodMark({ name }: { name: MethodName }) {
  if (name === "CandidPay") {
    return (
      <span className="pay-method__mark pay-method__mark--candid" aria-hidden="true">
        <Image
          src="/brand/candidpay-logo.png"
          alt=""
          width={1007}
          height={350}
          className="pay-method__logo pay-method__logo--candid"
        />
      </span>
    );
  }

  const logo = brandLogos[name];

  return (
    <span className="pay-method__mark" aria-hidden="true">
      <Image
        src={logo.src}
        alt=""
        width={logo.width}
        height={logo.height}
        unoptimized
        className={
          logo.matchCandid
            ? "pay-method__logo pay-method__logo--candid"
            : "pay-method__logo"
        }
      />
    </span>
  );
}
