import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { HomeBands } from "@/components/HomeBands";
import { HowWeWork } from "@/components/HowWeWork";
import { Story } from "@/components/Story";
import { WorkingWith } from "@/components/WorkingWith";
import { pageMeta } from "@/lib/seo";
import { faqs } from "@/lib/site";

const homeTitle = "Business phone systems, payments & IT – Candid Solutions";
const homeDescription =
  "Vendor-neutral IT consulting for business phone systems, payment processing, POS, cybersecurity, and technology spend. Advisory at no cost to you.";

export const metadata: Metadata = {
  ...pageMeta("/", homeTitle, homeDescription),
  title: { absolute: homeTitle },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <div className="home">
        <Story />
        <div className="cc-lower">
          <HowWeWork />
        </div>
        <WorkingWith />
        <div className="cc-lower">
          <HomeBands />
        </div>
      </div>
    </>
  );
}
