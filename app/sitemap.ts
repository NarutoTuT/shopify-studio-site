import type { MetadataRoute } from "next"

const siteUrl = "https://whaleleap.studio"

const routes = [
  "",
  "/diagnosis",
  "/pricing",
  "/about",
  "/privacy",
  "/case-studies/silkgear",
  "/case-studies/terrawulf",
  "/learn",
  "/learn/shopify-website-cost",
  "/learn/shopify-ga4-gtm-tracking-plan",
  "/services/shopify-website-build",
  "/services/shopify-theme-customization",
  "/services/shopify-conversion-optimization",
  "/services/shopify-ga4-gtm",
]

const lastModifiedByRoute: Record<string, string> = {
  "": "2026-10-09",
  "/diagnosis": "2026-10-01",
  "/pricing": "2026-10-09",
  "/about": "2026-08-28",
  "/privacy": "2026-09-06",
  "/case-studies/silkgear": "2026-10-01",
  "/case-studies/terrawulf": "2026-10-01",
  "/learn": "2026-10-09",
  "/learn/shopify-website-cost": "2026-10-09",
  "/learn/shopify-ga4-gtm-tracking-plan": "2026-09-07",
  "/services/shopify-website-build": "2026-10-09",
  "/services/shopify-theme-customization": "2026-10-09",
  "/services/shopify-conversion-optimization": "2026-10-09",
  "/services/shopify-ga4-gtm": "2026-10-09",
}

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) => {
    const zhUrl = `${siteUrl}${route}`
    const enUrl = `${siteUrl}/en${route}`
    const shared = {
      lastModified: lastModifiedByRoute[route],
      changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
      priority: route === "" ? 1 : route.startsWith("/services") ? 0.8 : 0.7,
    }

    if (route === "/learn" || route.startsWith("/learn/")) {
      return [{ url: zhUrl, ...shared, alternates: { languages: { "zh-CN": zhUrl, "x-default": zhUrl } } }]
    }

    const alternates = { languages: { "zh-CN": zhUrl, en: enUrl, "x-default": zhUrl } }
    return [{ url: zhUrl, ...shared, alternates }, { url: enUrl, ...shared, alternates }]
  })
}
