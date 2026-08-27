import type { MetadataRoute } from "next";
import { projectsData, siteUrl } from "@/constants/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/work`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/pricing`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${siteUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteUrl}/terms`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];

  // Case studies come straight from the same array that renders them, so a new
  // project in data.ts lands in the sitemap with no extra step.
  const projectRoutes: MetadataRoute.Sitemap = projectsData.map((project) => ({
    url: `${siteUrl}/work/${project.slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
