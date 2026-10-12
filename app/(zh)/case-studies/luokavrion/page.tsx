import { LanguageProvider } from "@/components/language-provider"
import { LuokavrionCaseStudyPage } from "@/components/luokavrion-case-study-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { createSitePageMetadata } from "@/lib/site-metadata"

export const metadata = createSitePageMetadata({
  title: "LUOKAVRION Shopify 主题定制与交互工程案例",
  description: "WhaleLeap Studio 为 LUOKAVRION 实施 Shopify 主题定制、Liquid sections、JSON templates、Theme Editor 配置与 Three.js 前端交互。",
  path: "/case-studies/luokavrion",
  language: "zh",
  zhPath: "/case-studies/luokavrion",
  enPath: "/en/case-studies/luokavrion",
  type: "article",
})

export default function Page() {
  return <LanguageProvider><SmoothScrollProvider><LuokavrionCaseStudyPage /></SmoothScrollProvider></LanguageProvider>
}
