type BreadcrumbItem = {
  name: string
  url: string
}

type FaqItem = {
  q: string
  a: string
}

type ServiceItem = {
  name: string
  description: string
  url: string
}

type PageItem = {
  type?: "WebPage" | "Article"
  name: string
  description: string
  url: string
  inLanguage?: string
  about?: string[]
}

type PageStructuredDataProps = {
  breadcrumbs: BreadcrumbItem[]
  faqItems: FaqItem[]
  service?: ServiceItem
  page?: PageItem
}

const siteUrl = "https://whaleleap.studio"

export function PageStructuredData({ breadcrumbs, faqItems, service, page }: PageStructuredDataProps) {
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
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      page
        ? {
            "@type": page.type ?? "WebPage",
            "@id": `${page.url}#webpage`,
            name: page.name,
            description: page.description,
            url: page.url,
            inLanguage: page.inLanguage ?? "zh-CN",
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
          }
        : null,
      service
        ? {
            "@type": "Service",
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
