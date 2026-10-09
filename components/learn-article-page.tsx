"use client"

import { ArrowUpRight, CheckCircle2, HelpCircle, Library, ShieldCheck } from "lucide-react"

import { FaqStructuredData } from "@/components/faq-structured-data"
import { LanguageProvider } from "@/components/language-provider"
import { Navbar } from "@/components/navbar"
import { PageStructuredData } from "@/components/page-structured-data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export type LearnArticle = {
  slug: string
  eyebrow: string
  title: string
  description: string
  intro: string
  introLink?: { label: string; href: string }
  published: string
  modified: string
  readingTime: string
  sections: Array<{
    title: string
    lead: string
    blocks: Array<{ title: string; paragraphs: string[]; points?: string[] }>
  }>
  faqs: Array<{ q: string; a: string }>
  related: Array<{ title: string; text: string; href: string }>
  ctas: Array<{ label: string; href: string; primary?: boolean }>
  about: string[]
}

const siteUrl = "https://whaleleap.studio"

export function LearnArticlePage({ article }: { article: LearnArticle }) {
  const url = `${siteUrl}/learn/${article.slug}`

  return (
    <LanguageProvider>
    <div className="min-h-screen bg-background text-foreground">
      <FaqStructuredData items={article.faqs} />
      <PageStructuredData
        breadcrumbs={[
          { name: "首页", url: `${siteUrl}/` },
          { name: "学习资源", url: `${siteUrl}/learn` },
          { name: article.title, url },
        ]}
        page={{
          type: "Article",
          name: article.title,
          description: article.description,
          url,
          inLanguage: "zh-CN",
          about: article.about,
          datePublished: article.published,
          dateModified: article.modified,
        }}
      />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <article>
          <header className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#020403] px-6 pb-16 pt-32 md:px-10">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,#0a110c_0%,#040605_48%,#010202_100%)]" />
            <div aria-hidden="true" className="absolute -inset-[42%] animate-theme-aurora-orbit rounded-[42%] bg-[conic-gradient(from_35deg,transparent_0_15%,rgba(34,211,238,0.18)_25%,transparent_39%,rgba(119,252,117,0.25)_52%,transparent_67%,rgba(34,211,238,0.12)_80%,transparent_94%)] opacity-70 blur-3xl motion-reduce:animate-none" />
            <div aria-hidden="true" className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(119,252,117,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.16)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,transparent,black_16%,black_84%,transparent)]" />
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.2)_62%,rgba(0,0,0,0.68)_100%)]" />
            <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 font-mono text-base font-semibold uppercase text-primary"><Library className="size-4" />{article.eyebrow}</p>
              <h1 className="mx-auto mt-6 max-w-5xl bg-gradient-to-r from-white via-primary to-cyan-200 bg-[length:200%_100%] bg-clip-text text-[clamp(2.45rem,5vw,4.4rem)] font-bold leading-[1.06] tracking-normal text-transparent animate-shimmer motion-reduce:animate-none">{article.title}</h1>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-[1.8] text-white/62 md:text-lg">{article.description}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3 text-base text-white/55"><span>{article.modified}</span><span aria-hidden="true">·</span><span>{article.readingTime}</span></div>
            </div>
          </header>

          <div className="bg-black px-6 py-[50px] md:px-10 md:py-[100px]">
            <div className="mx-auto max-w-[1500px]">
              <section className="relative overflow-hidden rounded-[2.8rem_1.45rem_3.2rem_1.8rem] border border-white/20 bg-[radial-gradient(circle_at_18%_20%,rgba(119,252,117,0.09),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.012))] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_35px_90px_rgba(0,0,0,0.28)] md:p-10">
                <p className="max-w-5xl text-lg leading-[1.9] text-white/76">{article.intro}</p>
                {article.introLink && <a href={article.introLink.href} className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-6 text-base font-semibold text-primary hover:bg-primary/[0.13]">{article.introLink.label}<ArrowUpRight className="size-4" /></a>}
              </section>

              <div className="mt-14 space-y-16 md:mt-20 md:space-y-24">
                {article.sections.map((section, sectionIndex) => (
                  <section key={section.title}>
                    <div className="mx-auto mb-8 max-w-4xl text-center md:mb-10">
                      <p className="font-mono text-base font-semibold text-primary">{String(sectionIndex + 1).padStart(2, "0")} / GUIDE</p>
                      <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight">{section.title}</h2>
                      <p className="mt-5 text-base leading-[1.85] text-white/62 md:text-lg">{section.lead}</p>
                    </div>
                    <div className="relative overflow-hidden rounded-[2.8rem_1.45rem_3.2rem_1.8rem] border border-white/20 bg-[radial-gradient(circle_at_84%_18%,rgba(34,211,238,0.06),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.012))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_35px_90px_rgba(0,0,0,0.28)] sm:p-5 lg:p-7">
                    <div className="grid gap-3 lg:grid-cols-2">
                      {section.blocks.map((block, blockIndex) => (
                        <div key={block.title} className="rounded-[1.7rem] bg-black/18 p-6 transition-colors hover:bg-white/[0.035] md:p-8">
                          <div className="flex items-start gap-4"><span className="font-mono text-base text-primary/60">{String(blockIndex + 1).padStart(2, "0")}</span><h3 className="text-xl font-bold leading-snug md:text-2xl">{block.title}</h3></div>
                          <div className="mt-5 space-y-4 text-base leading-[1.85] text-white/65">{block.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                          {block.points && <ul className="mt-6 grid gap-3 md:grid-cols-2">{block.points.map((point) => <li key={point} className="flex items-start gap-3 rounded-xl bg-black/20 p-4 text-base leading-[1.65] text-white/72"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />{point}</li>)}</ul>}
                        </div>
                      ))}
                    </div>
                    </div>
                  </section>
                ))}
              </div>

              <section className="mt-20 md:mt-24">
                <div className="text-center"><p className="font-mono text-base font-semibold text-primary">FAQ</p><h2 className="mt-4 text-[clamp(1.8rem,3vw,2.5rem)] font-bold">常见问题</h2><HelpCircle className="mx-auto mt-5 size-8 text-primary" /></div>
                <Accordion type="single" collapsible className="mt-8 grid gap-x-8 rounded-[2.8rem_1.45rem_3.2rem_1.8rem] border border-white/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.012))] px-5 md:px-8 lg:grid-cols-2">
                  {article.faqs.map((faq, index) => <AccordionItem key={faq.q} value={`faq-${index}`} className="border-white/10"><AccordionTrigger className="min-h-[76px] gap-4 text-left text-base font-semibold hover:no-underline data-[state=open]:text-primary"><span className="flex items-start gap-4"><span className="font-mono text-primary/55">{String(index + 1).padStart(2, "0")}</span>{faq.q}</span></AccordionTrigger><AccordionContent className="pb-6 text-base leading-[1.85] text-white/62 md:pl-10">{faq.a}</AccordionContent></AccordionItem>)}
                </Accordion>
              </section>

              <section className="mt-20 md:mt-24">
                <p className="font-mono text-base font-semibold text-primary">RELATED READING</p><h2 className="mt-4 text-[clamp(1.8rem,3vw,2.5rem)] font-bold">相关阅读</h2>
                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{article.related.map((item) => <a key={item.href} href={item.href} className="group min-h-[210px] rounded-[1.5rem] border border-white/12 bg-white/[0.035] p-6 transition-colors hover:bg-white/[0.06]"><h3 className="text-xl font-bold">{item.title}</h3><p className="mt-3 text-base leading-[1.7] text-white/58">{item.text}</p><span className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-primary">继续阅读<ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span></a>)}</div>
              </section>

              <section className="relative mt-20 overflow-hidden rounded-[3rem_1.4rem_3.4rem_1.7rem] border border-white/25 bg-[linear-gradient(115deg,rgba(255,255,255,0.075),rgba(255,255,255,0.015)_38%,rgba(34,211,238,0.045)_72%,rgba(119,252,117,0.06))] p-8 md:mt-24 md:p-12">
                <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><ShieldCheck className="mb-5 size-8 text-primary" /><h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold">需要把判断变成可执行范围？</h2><p className="mt-4 max-w-2xl text-base leading-[1.8] text-white/62">先确认问题、证据与优先级，再决定预算和实施方式。</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col">{article.ctas.map((cta) => <a key={cta.href} href={cta.href} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-base font-bold ${cta.primary ? "bg-primary text-black" : "border border-white/18 bg-white/[0.045] text-white"}`}>{cta.label}<ArrowUpRight className="size-4" /></a>)}</div></div>
              </section>
            </div>
          </div>
        </article>
      </main>
    </div>
    </LanguageProvider>
  )
}
