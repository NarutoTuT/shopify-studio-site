import type { MetadataRoute } from "next"

const siteUrl = "https://whaleleap.studio"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended"], allow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
