import type { MetadataRoute } from "next";

const SITE = "https://sprintzero.sh";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${SITE}/case-studies`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE}/case-studies/cra-to-vite-migration-healthcare-saas`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE}/case-studies/laravel-modernization-healthcare-saas`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE}/x-ray`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
