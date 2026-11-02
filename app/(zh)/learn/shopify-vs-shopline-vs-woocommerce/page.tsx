import { LearnArticlePage } from "@/components/learn-article-page"
import { platformComparisonArticle as article } from "@/lib/shopify-shopline-woocommerce-article"
import { createSitePageMetadata } from "@/lib/site-metadata"

export const metadata = createSitePageMetadata({ title: article.title, description: article.description, path: `/learn/${article.slug}`, language: "zh", zhPath: `/learn/${article.slug}`, type: "article" })

export default function Page() { return <LearnArticlePage article={article} /> }
