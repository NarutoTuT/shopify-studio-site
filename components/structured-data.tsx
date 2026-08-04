const siteUrl = "https://whaleleap.studio"

const services = [
  {
    name: "Shopify Website Build",
    alternateName: "Shopify 独立站建设服务",
    url: `${siteUrl}/services/shopify-website-build`,
    description: "Shopify website design and development for global ecommerce brands.",
  },
  {
    name: "Shopify Theme Customization",
    alternateName: "Shopify 主题定制与 Liquid 开发",
    url: `${siteUrl}/services/shopify-theme-customization`,
    description: "Shopify theme customization, Liquid development, sections, blocks, and page modules.",
  },
  {
    name: "Shopify Conversion Optimization",
    alternateName: "Shopify 转化率优化服务",
    url: `${siteUrl}/services/shopify-conversion-optimization`,
    description: "Shopify conversion optimization for product pages, cart, checkout, trust content, and paid traffic paths.",
  },
  {
    name: "Shopify GA4 / GTM Tracking Setup",
    alternateName: "Shopify GA4 / GTM 数据追踪配置",
    url: `${siteUrl}/services/shopify-ga4-gtm`,
    description: "GA4, GTM, ecommerce event tracking, ad pixel basics, and Product Schema setup for Shopify stores.",
  },
]

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "WhaleLeap Studio",
      url: siteUrl,
      logo: `${siteUrl}/icon.svg`,
      description:
        "WhaleLeap Studio designs and develops Shopify sales systems for global ecommerce brands, covering Shopify website builds, theme customization, conversion optimization, and GA4/GTM tracking.",
      sameAs: [],
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
            url: service.url,
            description: service.description,
            provider: {
              "@id": `${siteUrl}/#organization`,
            },
          },
        })),
      },
    },
  ],
}

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  )
}
