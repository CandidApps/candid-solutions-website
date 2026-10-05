/**
 * Old WordPress / legacy paths → current App Router paths.
 * Used by next.config.ts redirects. Keep public/.htaccess in sync.
 */
export type LegacyRedirect = {
  /** Path without trailing slash (both /path and /path/ are handled). */
  from: string;
  to: string;
};

export const legacyRedirects: readonly LegacyRedirect[] = [
  // Core IA
  { from: "/home", to: "/" },
  { from: "/contact-us", to: "/contact" },
  { from: "/become-an-agent", to: "/agents" },
  { from: "/partner-program", to: "/agents" },
  { from: "/partners", to: "/agents" },
  { from: "/agent", to: "/agents" },
  { from: "/our-company", to: "/about" },
  { from: "/company", to: "/about" },
  { from: "/save", to: "/solutions" },
  { from: "/sitemap", to: "/sitemap.xml" },

  { from: "/about/privacy-policy", to: "/privacy" },
  { from: "/privacy-policy", to: "/privacy" },
  { from: "/about/terms-and-conditions", to: "/terms" },
  { from: "/terms-and-conditions", to: "/terms" },

  // Legacy marketing / misc
  { from: "/sap-s4hana.html", to: "/solutions/technology" },
  { from: "/sap-s4hana", to: "/solutions/technology" },
  { from: "/nproject", to: "/about" },
  { from: "/business-machine-agents", to: "/agents" },

  // Blog (no blog on rebuild)
  { from: "/blog", to: "/" },

  // Solutions index stays /solutions — map child pages that collapsed into desks
  { from: "/solutions/physical-security", to: "/solutions/technology" },
  { from: "/solutions/cyber-security", to: "/solutions/cybersecurity" },
  { from: "/solutions/customer-experience", to: "/solutions/contact-center" },
  { from: "/solutions/cloud-infrastructure", to: "/solutions/cloud" },
  { from: "/solutions/sd-wan", to: "/solutions/internet" },
  { from: "/solutions/internet-sd-wan", to: "/solutions/internet" },
  { from: "/solutions/managed-mobility", to: "/solutions/mobility" },
  { from: "/solutions/voip", to: "/solutions/contact-center" },
  { from: "/solutions/ucaas", to: "/solutions/contact-center" },
  { from: "/solutions/managed-services", to: "/solutions/technology" },
  { from: "/solutions/managed-it", to: "/solutions/technology" },
  { from: "/solutions/telecom-audits", to: "/solutions/candidiq" },
  { from: "/solutions/tem", to: "/solutions/candidiq" },
  { from: "/solutions/expense-management", to: "/solutions/candidiq" },
  { from: "/solutions/payments", to: "/solutions/payment-processing" },
  { from: "/solutions/industry-solutions", to: "/solutions" },
  { from: "/solutions/industry-solutions/commerce", to: "/solutions" },
  { from: "/solutions/industry-solutions/payments", to: "/solutions/candidpay" },
  {
    from: "/solutions/industry-solutions/commercial-real-estate",
    to: "/solutions",
  },
] as const;

/** Paths included in the public XML sitemap. */
export const sitemapPaths = [
  "/",
  "/about",
  "/agents",
  "/contact",
  "/monthly",
  "/monthly/first-story",
  "/monthly/second-story",
  "/monthly/third-story",
  "/solutions",
  "/solutions/technology",
  "/solutions/payment-processing",
  "/solutions/contact-center",
  "/solutions/mobility",
  "/solutions/cybersecurity",
  "/solutions/cloud",
  "/solutions/internet",
  "/solutions/candidpay",
  "/solutions/candidiq",
  "/solutions/energy",
  "/privacy",
  "/terms",
] as const;

export function expandRedirectSources(from: string): string[] {
  if (from.endsWith(".html")) {
    return [from];
  }
  const bare = from.replace(/\/$/, "") || "/";
  if (bare === "/") return ["/"];
  return [bare, `${bare}/`];
}
