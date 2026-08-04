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

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services") ? 0.8 : 0.7,
  }))
}
