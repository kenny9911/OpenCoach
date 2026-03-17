import type { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://opencoach.ai";

  const pages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/ai-native", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url:
        locale === "en"
          ? `${baseUrl}${page.path}`
          : `${baseUrl}/${locale}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [
            l,
            l === "en"
              ? `${baseUrl}${page.path}`
              : `${baseUrl}/${l}${page.path}`,
          ])
        ),
      },
    }))
  );
}
