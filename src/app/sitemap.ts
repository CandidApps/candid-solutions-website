import type { MetadataRoute } from "next";
import { sitemapPaths } from "@/lib/redirects";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return sitemapPaths.map((path) => ({
    url: path === "/" ? site.url : `${site.url}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/solutions" || path === "/contact"
          ? 0.9
          : 0.7,
  }));
}
