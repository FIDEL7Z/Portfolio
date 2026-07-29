import type { MetadataRoute } from "next";
import { getPrimaryProjects, siteConfig } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/projects",
    "/ai",
    "/resume",
    "/events",
    "/contact",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = getPrimaryProjects().map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
