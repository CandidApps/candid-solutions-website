import type { NextConfig } from "next";
import {
  expandRedirectSources,
  legacyRedirects,
} from "./src/lib/redirects";

const nextConfig: NextConfig = {
  async redirects() {
    const exact = legacyRedirects.flatMap(({ from, to }) =>
      expandRedirectSources(from).map((source) => ({
        source,
        destination: to,
        permanent: true,
      })),
    );

    return [
      ...exact,
      // Catch remaining WP blog posts
      {
        source: "/blog/:path*",
        destination: "/",
        permanent: true,
      },
      // Legacy case-study / project detail URLs
      {
        source: "/nproject/:path*",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
