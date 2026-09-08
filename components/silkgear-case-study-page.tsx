import Image from "next/image"
import { ArrowUpRight, CheckCircle2, CircleDot, ExternalLink, Layers3, ShieldCheck } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { PageStructuredData } from "@/components/page-structured-data"

const siteUrl = "https://whaleleap.studio"
const caseUrl = `${siteUrl}/case-studies/silkgear`
const liveStoreUrl = "https://www.silkgear.com.au/"

const sections = [
  {
    number: "01",
    label: "Challenge",
    title: "产品很多，但用户不能只靠参数做决定。",
    body: "SilkGear 面向高客单、多品类科技零售。公开店铺同时覆盖 Robot Companion、Care & Wellness、Smart Device、Smart Home、Image、Wearable、Maker Shed 与 Accessories。页面要让第一次到访的用户先理解选品逻辑，再进入具体产品，而不是面对一整面缺少关系的商品。",
  },
  {
    number: "02",
    label: "Scope",
    title: "把品牌发现、商品理解与线下体验接成一条路径。",
    body: "本案例公开范围聚焦 Shopify storefront experience：主页叙事、场景化品类入口、集合与商品详情体验、会员入口，以及实体门店与联系信息。这里不把未公开的后台系统、投放账户或运营结果算进合作范围。",
  },
  {
    number: "03",
    label: "Diagnosis",
    title: "核心问题不是页面数量，而是每一层应该回答什么。",
    body: "主页负责解释品牌为何精选这些科技产品；集合页负责帮助用户按需求或设备类型缩小选择；商品页负责把图片、规格、购买动作与保障信息放在同一决策上下文；门店信息负责把线上兴趣延续到线下体验。",
  },
]

const decisions = [
  ["按使用场景组织发现", "优先呈现可理解的品类名称和产品用途，让导航承担筛选任务。"],
  ["用编辑式主页建立判断", "先表达 SELECTED / OBSESSED 的选品立场，再进入 Best Sellers 与 New Arrivals。"],
  ["让 PDP 服务高客单决策", "把主视觉、辅助角度、价格、购买入口与相关产品放在连续阅读区域。"],
  ["保留真实门店出口", "在页脚持续呈现墨尔本门店地址、营业时间、联系信息与会员入口。"],
]

const implementation = [
  "多品类主导航与 Explore the collection 发现入口",
  "品牌主张、精选产品与新品内容的首页节奏",
  "商品图集、购买信息与相关产品并置的 PDP 结构",
  "会员、合作、联系和实体门店信息的全站出口",
]

function SectionHeading({ number, label, title }: { number: string; label: string; title: string }) {
  return (
    <header className="mx-auto max-w-4xl text-center">
      <p className="font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary">{number} / {label}</p>
      <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal text-white">{title}</h2>
    </header>
  )
}

export function SilkGearCaseStudyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageStructuredData
        language="zh"
        breadcrumbs={[
          { name: "首页", url: siteUrl },
          { name: "案例", url: `${siteUrl}/#work` },
          { name: "SilkGear", url: caseUrl },
        ]}
        page={{
          type: "Article",
          name: "SilkGear Shopify 案例：高端科技零售体验",
          description: "多品类科技零售 Shopify 项目的挑战、范围、诊断、决策、实施证据、结果与限制。",
          url: caseUrl,
          inLanguage: "zh-CN",
          about: ["Shopify", "Storefront architecture", "Product discovery", "Premium technology retail"],
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
        }}
      />
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <article>
          <header className="relative overflow-hidden px-4 pb-[50px] pt-28 sm:px-6 md:px-10 md:pb-[100px] md:pt-36">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(119,252,117,0.18),transparent_31%),radial-gradient(circle_at_82%_34%,rgba(45,212,191,0.14),transparent_34%),linear-gradient(180deg,#030806,#000)]" />
            <div aria-hidden="true" className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(119,252,117,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.18)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_50%_36%,black,transparent_76%)]" />
            <div className="relative mx-auto max-w-[1500px]">
              <div className="mx-auto max-w-[1100px] text-center">
                <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary">
                  <CircleDot className="size-4" /> Real case study / 01
                </p>
                <h1 className="mx-auto mt-7 text-balance text-[clamp(2.25rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-normal">
                  SilkGear
                  <span className="mt-2 block bg-gradient-to-r from-primary via-emerald-200 to-white bg-clip-text text-transparent">Premium Tech Retail</span>
                </h1>
                <p className="mx-auto mt-7 max-w-[900px] text-lg font-semibold leading-[1.55] text-white/84 md:text-2xl">让高客单、多品类科技产品，从“看见设备”走到“理解为什么值得选”。</p>
                <p className="mx-auto mt-5 max-w-[1000px] text-base leading-[1.8] text-white/60 md:text-lg">这不是结果包装页。下面只记录当前可由公开店铺、项目截图和已确认合作关系支持的范围、决策与交付证据。</p>
                <a href={liveStoreUrl} target="_blank" rel="noreferrer noopener" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-base font-bold text-black transition-transform hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                  查看 SilkGear 线上店铺 <ExternalLink className="size-5" />
                </a>
              </div>
              <figure className="mt-10 overflow-hidden rounded-[2.2rem] border border-white/15 bg-white/[0.035] p-2 shadow-[0_32px_100px_rgba(0,0,0,0.42)] md:mt-14">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.8rem] bg-[#061018]">
                  <Image src="/images/about/project-tech-collection.webp" alt="SilkGear 科技产品集合页面截图，展示按使用场景组织的商品分类" fill priority sizes="(max-width: 1024px) 92vw, 96vw" className="object-contain object-top" />
                </div>
                <figcaption className="px-4 py-4 text-base leading-[1.6] text-white/52">公开交付截图：场景化科技产品集合入口。</figcaption>
              </figure>
            </div>
          </header>

          <section className="px-4 pb-[50px] sm:px-6 md:px-10 md:pb-[100px]">
            <div className="mx-auto grid max-w-[1500px] gap-4 lg:grid-cols-3">
              {sections.map((item) => (
                <section key={item.label} className="rounded-[2rem] border border-white/12 bg-white/[0.035] p-6 sm:p-8">
                  <p className="font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary">{item.number} / {item.label}</p>
                  <h2 className="mt-4 text-[clamp(1.5rem,2.2vw,2rem)] font-bold leading-tight tracking-normal">{item.title}</h2>
                  <p className="mt-5 text-base leading-[1.78] text-white/62">{item.body}</p>
                </section>
              ))}
            </div>
          </section>

          <section className="px-4 pb-[50px] sm:px-6 md:px-10 md:pb-[100px]">
            <div className="mx-auto max-w-[1500px]">
              <SectionHeading number="04" label="Decisions" title="四个决定，共同减少选择成本。" />
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {decisions.map(([title, body], index) => (
                  <div key={title} className="rounded-[1.8rem] border border-white/12 bg-[linear-gradient(135deg,rgba(119,252,117,0.08),rgba(255,255,255,0.025))] p-6 sm:p-8">
                    <p className="font-mono text-base text-primary">0{index + 1}</p>
                    <h3 className="mt-4 text-xl font-bold">{title}</h3>
                    <p className="mt-3 text-base leading-[1.75] text-white/60">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 pb-[50px] sm:px-6 md:px-10 md:pb-[100px]">
            <div className="mx-auto max-w-[1500px]">
              <SectionHeading number="05" label="Implementation" title="实施证据放在页面里，而不是藏在形容词里。" />
              <div className="mt-8 grid gap-5 lg:grid-cols-[1.18fr_0.82fr]">
                <figure className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.035] p-2">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.6rem] bg-white">
                    <Image src="/images/about/project-smart-glasses-pdp.webp" alt="智能眼镜 Shopify 商品详情页截图，展示商品图集、价格、购买入口与相关产品" fill sizes="(max-width: 1024px) 92vw, 58vw" className="object-contain object-top" />
                  </div>
                  <figcaption className="px-4 py-4 text-base leading-[1.6] text-white/52">商品详情页证据：产品图集、购买信息与相关商品处于同一决策上下文。</figcaption>
                </figure>
                <div className="rounded-[2rem] border border-primary/20 bg-primary/[0.055] p-6 sm:p-8">
                  <Layers3 className="size-7 text-primary" />
                  <h3 className="mt-5 text-2xl font-bold">公开可核验的交付面</h3>
                  <ul className="mt-6 space-y-4">
                    {implementation.map((item) => (
                      <li key={item} className="flex gap-3 text-base leading-[1.7] text-white/68">
                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 pb-[50px] sm:px-6 md:px-10 md:pb-[100px]">
            <div className="mx-auto grid max-w-[1500px] gap-8 rounded-[2.4rem] border border-white/12 bg-white/[0.035] p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
              <div>
                <SectionHeading number="06" label="Evidence" title="线上页面是当前证据，不是历史 KPI 的替代品。" />
                <p className="mt-5 text-base leading-[1.8] text-white/62">截至本案例整理时，公开站点仍可看到场景化分类、精选商品、新品、会员、合作与实体门店信息。截图保留了集合、PDP 与全站信息结构，便于核对案例描述是否与实际界面一致。</p>
                <a href={liveStoreUrl} target="_blank" rel="noreferrer noopener" className="mt-6 inline-flex min-h-11 items-center gap-2 text-base font-semibold text-primary underline decoration-primary/35 underline-offset-4 hover:text-white">核对公开站点 <ArrowUpRight className="size-4" /></a>
              </div>
              <figure className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-black p-2">
                <div className="relative aspect-[16/9] overflow-hidden rounded-[1.45rem]">
                  <Image src="/images/about/project-footer-system.webp" alt="SilkGear Shopify 页脚截图，展示订阅、导航、联系方式、营业时间与社交入口" fill sizes="(max-width: 1024px) 90vw, 52vw" className="object-cover object-top" />
                </div>
                <figcaption className="px-4 py-4 text-base leading-[1.6] text-white/52">全站信息结构证据：订阅、导航、门店与联系信息。</figcaption>
              </figure>
            </div>
          </section>

          <section className="px-4 pb-[50px] sm:px-6 md:px-10 md:pb-[100px]">
            <div className="mx-auto grid max-w-[1500px] gap-4 lg:grid-cols-2">
              <section className="rounded-[2rem] border border-primary/20 bg-primary/[0.05] p-6 sm:p-8">
                <p className="font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary">07 / Outcome</p>
                <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">可确认的结果，是一套已经公开运行的零售路径。</h2>
                <p className="mt-5 text-base leading-[1.8] text-white/64">当前公开结果是：用户可以从品牌选品主张进入场景化品类，再到具体商品与购买动作，并可继续查看会员和墨尔本实体门店信息。这里不把“已经上线”解释成转化提升，也不提供未经授权的营收或流量数字。</p>
              </section>
              <section className="rounded-[2rem] border border-amber-300/20 bg-amber-300/[0.045] p-6 sm:p-8">
                <p className="font-mono text-base font-semibold uppercase tracking-[0.02em] text-amber-200">08 / Limitations</p>
                <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">本案例有意保留三条边界。</h2>
                <ul className="mt-5 space-y-3 text-base leading-[1.75] text-white/64">
                  <li>不公开未获授权的后台数据、投放数据或商业指标。</li>
                  <li>不将第三方应用、品牌运营或后续内容更新自动归入 WhaleLeap 的交付范围。</li>
                  <li>不使用客户评价或百分比结果代替可以直接查看的页面证据。</li>
                </ul>
              </section>
            </div>
          </section>

          <section className="px-4 pb-[50px] sm:px-6 md:px-10 md:pb-[100px]">
            <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[3.2rem_1.5rem_3.6rem_1.8rem] border border-white/25 bg-[linear-gradient(115deg,rgba(255,255,255,0.075),rgba(255,255,255,0.015)_38%,rgba(45,212,191,0.045)_72%,rgba(119,252,117,0.06))] px-7 py-12 shadow-[inset_0_2px_0_rgba(255,255,255,0.24),inset_0_-2px_0_rgba(119,252,117,0.1),0_45px_110px_rgba(0,0,0,0.5),0_0_80px_rgba(45,212,191,0.08)] backdrop-blur-3xl md:px-14 md:py-16">
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(45,212,191,0.15),transparent_28%),radial-gradient(circle_at_16%_0%,rgba(255,255,255,0.08),transparent_32%)]" />
              <div aria-hidden="true" className="absolute inset-x-[7%] top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
              <div aria-hidden="true" className="absolute -bottom-8 right-[8%] rotate-[-8deg] space-y-2 font-mono text-base leading-relaxed text-cyan-300/16"><p>Shopify website build</p><p>GA4 tracking plan</p><p>free Shopify review</p></div>
              <div aria-hidden="true" className="absolute bottom-[22%] right-[2%] h-px w-[62%] rotate-[-8deg] animate-shimmer bg-[linear-gradient(90deg,transparent,rgba(45,212,191,0.55),rgba(119,252,117,0.8),transparent)] bg-[length:200%_100%] shadow-[0_0_25px_rgba(119,252,117,0.35)] motion-reduce:animate-none" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <ShieldCheck className="mb-5 size-8 text-primary" />
                  <p className="font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary">09 / Related service & guide</p>
                  <h2 className="mt-4 max-w-4xl text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">需要的是同类 Shopify 结构判断，而不是复制 SilkGear 的视觉。</h2>
                  <p className="mt-5 max-w-4xl text-base leading-[1.8] text-white/62 md:text-lg">建站服务负责把品牌、品类、PDP 与交付边界组织成可维护的系统；GA4 / GTM Tracking Plan 则说明上线后如何定义事件和验证数据。两者解决的是不同阶段的问题。</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:max-w-[25rem] lg:flex-col">
                  <a href="/services/shopify-website-build" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-bold text-black shadow-[0_0_28px_rgba(119,252,117,0.22)] transition-all hover:brightness-110 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">相关服务：Shopify 建站 <ArrowUpRight className="size-5" /></a>
                  <a href="/learn/shopify-ga4-gtm-tracking-plan" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/[0.06] px-7 text-base font-semibold text-cyan-200 transition-colors hover:bg-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">相关 Guide：GA4 / GTM Tracking Plan <ArrowUpRight className="size-5" /></a>
                  <a href="/diagnosis" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.025] px-7 text-base font-semibold text-white transition-colors hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">免费 Shopify Review <ArrowUpRight className="size-5" /></a>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  )
}
