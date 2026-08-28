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
  return routes.flatMap((route) => {
    const zhUrl = `${siteUrl}${route}`
    const enUrl = `${siteUrl}/en${route}`
    const shared = {
      changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
      priority: route === "" ? 1 : route.startsWith("/services") ? 0.8 : 0.7,
    }

    if (route.startsWith("/learn/")) {
      return [{ url: zhUrl, ...shared, alternates: { languages: { "zh-CN": zhUrl, "x-default": zhUrl } } }]
    }

    const alternates = { languages: { "zh-CN": zhUrl, en: enUrl, "x-default": zhUrl } }
    return [{ url: zhUrl, ...shared, alternates }, { url: enUrl, ...shared, alternates }]
  })
}
