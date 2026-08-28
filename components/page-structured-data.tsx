type BreadcrumbItem = {
  name: string
  url: string
}

type ServiceItem = {
  name: string
  description: string
  url: string
}

type PageItem = {
  type?: "WebPage" | "AboutPage" | "Article"
  name: string
  description: string
  url: string
  inLanguage?: string
  about?: string[]
}

type PageStructuredDataProps = {
  breadcrumbs: BreadcrumbItem[]
  service?: ServiceItem
  page?: PageItem
  language?: "zh" | "en"
}

const siteUrl = "https://whaleleap.studio"

export function PageStructuredData({ breadcrumbs, service, page, language = "zh" }: PageStructuredDataProps) {
  const inLanguage = language === "zh" ? "zh-CN" : "en"
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      },
      page
        ? {
            "@type": page.type ?? "WebPage",
            "@id": `${page.url}#webpage`,
            name: page.name,
            description: page.description,
            url: page.url,
            inLanguage: page.inLanguage ?? inLanguage,
            isPartOf: {
              "@type": "WebSite",
              "@id": `${siteUrl}/#website`,
              name: "WhaleLeap Studio",
              url: siteUrl,
            },
            about: page.about?.map((name) => ({
              "@type": "Thing",
              name,
            })),
            ...(page.type === "Article"
              ? {
                  author: { "@id": `${siteUrl}/#organization` },
                  publisher: { "@id": `${siteUrl}/#organization` },
                }
              : {}),
          }
        : null,
      service
        ? {
            "@type": "Service",
            inLanguage,
            name: service.name,
            description: service.description,
            url: service.url,
            provider: {
              "@type": "Organization",
              "@id": `${siteUrl}/#organization`,
              name: "WhaleLeap Studio",
              url: siteUrl,
            },
          }
        : null,
    ].filter(Boolean),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  )
}
