import type { Metadata } from "next"

const socialImage = {
  url: "/hero/whaleleap-growth-current-v1.webp",
  width: 1672,
  height: 941,
  alt: "WhaleLeap Studio Shopify Growth Engineering",
}

type SitePageMetadata = {
  title: string
  description: string
  path: string
  language: "zh" | "en"
  zhPath: string
  enPath?: string
  type?: "website" | "article"
}

export function createSitePageMetadata({ title, description, path, language, zhPath, enPath, type = "website" }: SitePageMetadata): Metadata {
  const languages: Record<string, string> = {
    "zh-CN": zhPath,
    "x-default": zhPath,
  }

  if (enPath) languages.en = enPath

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages,
    },
    openGraph: {
      type,
      locale: language === "zh" ? "zh_CN" : "en_US",
      url: path,
      siteName: "WhaleLeap Studio",
      title: `${title} | WhaleLeap Studio`,
      description,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | WhaleLeap Studio`,
      description,
      images: [socialImage.url],
    },
  }
}
