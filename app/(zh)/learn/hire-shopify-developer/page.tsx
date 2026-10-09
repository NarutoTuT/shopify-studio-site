import { LearnArticlePage } from "@/components/learn-article-page"
import { hireDeveloperArticle as article } from "@/lib/learn-articles"
import { createSitePageMetadata } from "@/lib/site-metadata"

export const metadata = createSitePageMetadata({ title: article.title, description: article.description, path: `/learn/${article.slug}`, language: "zh", zhPath: `/learn/${article.slug}`, type: "article" })

export default function Page() { return <LearnArticlePage article={article} /> }
