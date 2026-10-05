import type { Metadata } from "next";
import { site } from "@/lib/site";

export function pageMeta(
  path: string,
  title: string,
  description: string,
): Metadata {
  const url = path === "/" ? site.url : `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legal,
  alternateName: site.name,
  url: site.url,
  telephone: "+1-815-207-8000",
  email: "connect@candid.solutions",
  foundingDate: "2006",
  areaServed: "US",
  sameAs: [site.linkedin, site.facebook, site.twitter],
  description:
    "Vendor-neutral IT consulting firm for business phone systems, payment processing, cybersecurity, and technology spend. Parent company of CandidPay and CandidIQ.",
};
