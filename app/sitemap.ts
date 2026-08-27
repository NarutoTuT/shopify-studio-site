import type { MetadataRoute } from "next"

const siteUrl = "https://whaleleap.studio"

const routes = [
  "",
  "/diagnosis",
  "/pricing",
  "/about",
  "/learn/shopify-website-cost",
  "/services/shopify-website-build",
  "/services/shopify-theme-customization",
  "/services/shopify-conversion-optimization",
  "/services/shopify-ga4-gtm",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.flatMap((route) => {
    const zhUrl = `${siteUrl}${route}`
    const enUrl = `${siteUrl}/en${route}`
    const shared = {
      lastModified,
      changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
      priority: route === "" ? 1 : route.startsWith("/services") ? 0.8 : 0.7,
    }

    if (route.startsWith("/learn/")) {
      return [{ url: zhUrl, ...shared, alternates: { languages: { "zh-CN": zhUrl } } }]
    }

    const alternates = { languages: { "zh-CN": zhUrl, en: enUrl } }
    return [{ url: zhUrl, ...shared, alternates }, { url: enUrl, ...shared, alternates }]
  })
}
