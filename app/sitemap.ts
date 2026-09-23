import type { MetadataRoute } from "next";

import { getPublicSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getPublicSiteUrl();

  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/privacidad`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/terminos`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
