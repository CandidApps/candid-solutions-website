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

  // Legal (no dedicated pages yet — land on Company)
  { from: "/about/privacy-policy", to: "/about" },
  { from: "/about/terms-and-conditions", to: "/about" },
  { from: "/privacy-policy", to: "/about" },
  { from: "/privacy", to: "/about" },
  { from: "/terms-and-conditions", to: "/about" },
  { from: "/terms", to: "/about" },

  // Legacy marketing / misc
  { from: "/sap-s4hana.html", to: "/solutions/technology" },
  { from: "/sap-s4hana", to: "/solutions/technology" },
  { from: "/nproject", to: "/about" },
  { from: "/business-machine-agents", to: "/agents" },

  // Blog (no blog on rebuild)
  { from: "/blog", to: "/" },

  // Solutions index stays /solutions — map child pages that collapsed into desks
  { from: "/solutions/cybersecurity", to: "/solutions/technology" },
  { from: "/solutions/cyber-security", to: "/solutions/technology" },
  { from: "/solutions/contact-center", to: "/solutions/technology" },
  { from: "/solutions/customer-experience", to: "/solutions/technology" },
  { from: "/solutions/cloud", to: "/solutions/technology" },
  { from: "/solutions/cloud-infrastructure", to: "/solutions/technology" },
  { from: "/solutions/sd-wan", to: "/solutions/technology" },
  { from: "/solutions/internet", to: "/solutions/technology" },
  { from: "/solutions/internet-sd-wan", to: "/solutions/technology" },
  { from: "/solutions/mobility", to: "/solutions/technology" },
  { from: "/solutions/managed-mobility", to: "/solutions/technology" },
  { from: "/solutions/voip", to: "/solutions/technology" },
  { from: "/solutions/ucaas", to: "/solutions/technology" },
  { from: "/solutions/managed-services", to: "/solutions/technology" },
  { from: "/solutions/managed-it", to: "/solutions/technology" },
  { from: "/solutions/telecom-audits", to: "/solutions/candidiq" },
  { from: "/solutions/tem", to: "/solutions/candidiq" },
  { from: "/solutions/expense-management", to: "/solutions/candidiq" },
  { from: "/solutions/payments", to: "/solutions/candidpay" },
  { from: "/solutions/payment-processing", to: "/solutions/candidpay" },
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
  "/solutions",
  "/solutions/technology",
  "/solutions/candidpay",
  "/solutions/candidiq",
  "/solutions/energy",
] as const;

export function expandRedirectSources(from: string): string[] {
  if (from.endsWith(".html")) {
    return [from];
  }
  const bare = from.replace(/\/$/, "") || "/";
  if (bare === "/") return ["/"];
  return [bare, `${bare}/`];
}
