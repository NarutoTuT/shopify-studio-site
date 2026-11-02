import { LearnArticlePage } from "@/components/learn-article-page"
import { verifyShopifyDeveloperArticle as article } from "@/lib/verify-shopify-developer-article"
import { createSitePageMetadata } from "@/lib/site-metadata"

export const metadata = createSitePageMetadata({ title: article.title, description: article.description, path: `/learn/${article.slug}`, language: "zh", zhPath: `/learn/${article.slug}`, type: "article" })

export default function Page() { return <LearnArticlePage article={article} /> }
