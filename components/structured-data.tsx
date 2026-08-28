const siteUrl = "https://whaleleap.studio"

const services = [
  {
    path: "/services/shopify-website-build",
    name: "Shopify Website Build",
    alternateName: "Shopify 独立站建设服务",
    description: "Shopify website design and development for global ecommerce brands.",
  },
  {
    path: "/services/shopify-theme-customization",
    name: "Shopify Theme Customization",
    alternateName: "Shopify 主题定制与 Liquid 开发",
    description: "Shopify theme customization, Liquid development, sections, blocks, and page modules.",
  },
  {
    path: "/services/shopify-conversion-optimization",
    name: "Shopify Conversion Optimization",
    alternateName: "Shopify 转化率优化服务",
    description: "Shopify conversion optimization for product pages, cart, checkout, trust content, and paid traffic paths.",
  },
  {
    path: "/services/shopify-ga4-gtm",
    name: "Shopify GA4 / GTM Tracking Setup",
    alternateName: "Shopify GA4 / GTM 数据追踪配置",
    description: "GA4, GTM, ecommerce event tracking, ad pixel basics, and Product Schema setup for Shopify stores.",
  },
]

function createStructuredData(language: "zh" | "en") {
  const languagePrefix = language === "en" ? "/en" : ""

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "WhaleLeap Studio",
        url: siteUrl,
        logo: `${siteUrl}/icon.svg`,
        description:
          "WhaleLeap Studio is a Shopify Growth Engineering Studio for global ecommerce brands, combining Shopify website builds, theme customization, conversion optimization, and GA4/GTM measurement.",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "liaoshenyuan1999053@gmail.com",
          availableLanguage: ["zh-CN", "en"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "WhaleLeap Studio",
        url: siteUrl,
        inLanguage: ["zh-CN", "en"],
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#professional-service`,
        name: "WhaleLeap Studio",
        url: siteUrl,
        image: `${siteUrl}/icon.svg`,
        description:
          "Shopify design and development studio focused on launch-ready, conversion-focused, and trackable ecommerce websites.",
        areaServed: {
          "@type": "Place",
          name: "Global",
        },
        serviceType: [
          "Shopify website build",
          "Shopify theme customization",
          "Shopify conversion optimization",
          "Shopify GA4 and GTM tracking setup",
        ],
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Shopify Services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.name,
              alternateName: service.alternateName,
              url: `${siteUrl}${languagePrefix}${service.path}`,
              description: service.description,
              inLanguage: language === "en" ? "en" : "zh-CN",
              provider: {
                "@id": `${siteUrl}/#organization`,
              },
            },
          })),
        },
      },
    ],
  }
}

export function StructuredData({ language = "zh" }: { language?: "zh" | "en" }) {
  const structuredData = createStructuredData(language)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  )
}
