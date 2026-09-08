import {
  AlertTriangle,
  ArrowDown,
  ArrowUpRight,
  Braces,
  CheckCircle2,
  CircleDot,
  ClipboardCheck,
  Database,
  ExternalLink,
  GitBranch,
  Layers3,
  Radar,
  ShieldCheck,
  Tag,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { PageStructuredData } from "@/components/page-structured-data"

const siteUrl = "https://whaleleap.studio"
const guideUrl = `${siteUrl}/learn/shopify-ga4-gtm-tracking-plan`

const architecture: Array<{ number: string; title: string; text: string; icon: LucideIcon }> = [
  { number: "01", title: "Shopify", text: "标准客户事件与订单事实", icon: Database },
  { number: "02", title: "Pixel layer", text: "权限、同意状态与沙箱", icon: ShieldCheck },
  { number: "03", title: "dataLayer", text: "统一事件与参数契约", icon: Braces },
  { number: "04", title: "GTM", text: "变量、触发器、标签", icon: Tag },
  { number: "05", title: "GA4", text: "DebugView 与报表", icon: Radar },
]

const events = [
  {
    event: "view_item",
    shopify: "product_viewed",
    trigger: "商品详情被实际查看；不要用所有页面浏览代替",
    required: "currency · value · items[]",
    qa: "item_id、variant、price 与当前商品一致",
  },
  {
    event: "add_to_cart",
    shopify: "product_added_to_cart",
    trigger: "Shopify 确认商品已加入购物车",
    required: "currency · value · items[] · quantity",
    qa: "一次加购只发一次，数量与行项目一致",
  },
  {
    event: "begin_checkout",
    shopify: "checkout_started",
    trigger: "结账真正开始，而不是点击任何 Checkout 文案",
    required: "currency · value · items[] · coupon",
    qa: "从购物车、Buy Now 等入口进入都能覆盖",
  },
  {
    event: "purchase",
    shopify: "checkout_completed",
    trigger: "订单完成且能取得稳定订单标识",
    required: "transaction_id · currency · value · items[]",
    qa: "刷新感谢页、像素并存时不重复计数",
  },
]

const parameters = [
  ["transaction_id", "Shopify 订单 ID / 订单号的稳定映射", "每笔订单唯一、非空；全链路使用同一格式", "purchase / refund"],
  ["item_id", "Variant SKU；无 SKU 时使用稳定 Variant ID", "不能在同一属性中一会儿用 SKU、一会儿用 Product ID", "全部商品事件"],
  ["item_name", "事件发生时的商品标题", "用于阅读，不作为唯一关联键", "全部商品事件"],
  ["item_variant", "变体标题或可读规格", "与 item_id 指向同一变体", "全部商品事件"],
  ["price / quantity", "Shopify 行项目金额与数量", "price 为单价；value 由 price × quantity 汇总", "全部商品事件"],
  ["currency", "Shopify 事件当时的展示/结算币种", "ISO 4217 三位代码；只要发送 value 就必须同步发送", "全部价值事件"],
  ["value", "商品行价值总和", "GA4 purchase value 不含 shipping 与 tax，二者单独传", "全部价值事件"],
  ["coupon", "订单级或行项目优惠码", "先定义订单级和商品级的归属，避免混用", "checkout / purchase"],
]

const decisions = [
  {
    title: "优先使用 Shopify 官方集成或 App Pixel",
    when: "标准 Google 渠道需求、事件覆盖足够、团队更重视稳定维护",
    reason: "Shopify 将 Web Pixels API 作为受支持的像素集成方式；应用像素运行在受控沙箱中。",
    risk: "自定义参数、跨平台命名和高级去重能力可能受集成边界限制。",
  },
  {
    title: "Custom Pixel + GTM",
    when: "需要明确掌控 Shopify 标准事件到 GA4 / Ads 的映射",
    reason: "可以订阅 product_viewed、product_added_to_cart、checkout_started、checkout_completed，再推入像素沙箱内的数据层。",
    risk: "不是把传统主题里的 GTM 代码原样搬进去；DOM 抓取、主窗口对象和部分第三方脚本在沙箱中受限。",
  },
  {
    title: "主题 dataLayer 仅负责店面事件",
    when: "需要追踪主题自定义交互，且事件发生在 storefront DOM",
    reason: "适合搜索、筛选、表单或自定义组件信号，不应单独承担 checkout_completed。",
    risk: "主题事件与 Pixel / App 同时发送同名电商事件，会产生重复链路。",
  },
  {
    title: "服务端追踪作为独立项目",
    when: "浏览器缺失率、广告回传或数据治理要求足以支撑额外复杂度",
    reason: "需要单独设计 event_id、transaction_id、同意状态、身份字段与客户端去重。",
    risk: "服务端不是自动更准确；没有源事件契约时，它只会把错误更稳定地发送两次。",
  },
]

const qaChecks = [
  "确认生产 GA4 Measurement ID、GTM Container ID 与目标属性，不用测试属性替代生产验收。",
  "从无缓存的新会话依次完成商品浏览、加购、开始结账和测试购买，记录时间与订单号。",
  "在 Shopify Pixel Helper 检查标准事件名称、次数与 payload；再看 GTM Preview 的触发器和变量。",
  "在 GA4 DebugView 对照事件顺序、参数和值；DebugView 不出现时先检查 consent 与 debug_mode。",
  "检查 items[] 每一项的 item_id、item_name、variant、price、quantity，而不只看事件名变绿。",
  "刷新商品页、快速重复点击加购、返回结账、刷新感谢页，专门测试重复触发。",
  "对 purchase 核对 transaction_id、currency、value、tax、shipping 和优惠，不用总额肉眼相似代替字段核对。",
  "发布后隔天在 GA4 标准报告复核，因为 DebugView 实时可见不代表标准报表维度一定正确。",
]

const qaLabels = [
  "核对生产属性与容器",
  "完成一条全链路测试订单",
  "检查 Shopify 源事件",
  "核对 GA4 DebugView",
  "检查每个 items[] 字段",
  "主动制造重复行为",
  "逐字段核对 purchase",
  "次日复核标准报表",
]

const debugSteps = [
  ["01", "先确认源事件", "Shopify Pixel Helper 中没有对应标准事件，就不要先改 GA4 标签。"],
  ["02", "再确认映射", "检查 Shopify payload → dataLayer → GTM Variable 的字段路径和类型。"],
  ["03", "检查触发次数", "同一次行为是否被 App、Custom Pixel、主题脚本或服务端重复发送。"],
  ["04", "检查 GA4 请求", "确认事件进入正确 Measurement ID，参数没有被变量返回 undefined 或字符串化。"],
  ["05", "最后解释报表", "区分采集错误、处理延迟、归因差异和指标口径差异，不把所有不一致都归咎于代码。"],
]

const sources = [
  ["Google：Measure ecommerce", "https://developers.google.com/analytics/devguides/collection/ga4/ecommerce"],
  ["Google：Recommended events reference", "https://developers.google.com/analytics/devguides/collection/ga4/reference/events"],
  ["Google：Transaction ID 去重", "https://support.google.com/analytics/answer/12313109"],
  ["Google：DebugView", "https://support.google.com/analytics/answer/7201382"],
  ["Shopify：Pixels overview", "https://help.shopify.com/en/manual/promoting-marketing/pixels/overview"],
  ["Shopify：GTM custom pixel tutorial", "https://help.shopify.com/en/manual/promoting-marketing/pixels/custom-pixels/gtm-tutorial"],
  ["Shopify：Analytics discrepancies", "https://help.shopify.com/en/manual/reports-and-analytics/discrepancies"],
]

function SectionHeading({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <header className="mx-auto mb-8 max-w-4xl text-center md:mb-10">
      <p className="font-mono text-base font-semibold uppercase tracking-[0.02em] text-cyan-300">{label}</p>
      <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.6rem)] font-bold leading-tight tracking-normal text-white">{title}</h2>
      <p className="mx-auto mt-4 max-w-3xl text-base leading-[1.75] text-white/60 md:text-lg">{description}</p>
    </header>
  )
}

export function ShopifyGa4GtmTrackingPlanPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageStructuredData
        language="zh"
        breadcrumbs={[
          { name: "首页", url: siteUrl },
          { name: "Shopify GA4 / GTM Tracking Plan", url: guideUrl },
        ]}
        page={{
          type: "Article",
          name: "Shopify GA4 / GTM Tracking Plan：事件、参数、去重与 QA",
          description: "面向 Shopify 实施的 GA4 / GTM 追踪计划，覆盖核心电商事件、参数来源、架构决策、重复风险、收入差异与上线 QA。",
          url: guideUrl,
          inLanguage: "zh-CN",
          about: ["Shopify", "Google Analytics 4", "Google Tag Manager", "Ecommerce tracking"],
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          reviewedBy: "Naruto",
        }}
      />
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <article>
          <header className="relative overflow-hidden px-4 pb-[50px] pt-28 sm:px-6 md:px-10 md:pb-[100px] md:pt-36">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(119,252,117,0.2),transparent_32%),radial-gradient(circle_at_84%_36%,rgba(34,211,238,0.17),transparent_31%),linear-gradient(180deg,#020503,#000)]" />
            <div aria-hidden="true" className="absolute -inset-x-[18%] -top-[22%] h-[118%] animate-cro-signal-orbit bg-[radial-gradient(ellipse_at_68%_35%,rgba(34,211,238,0.17),transparent_27%),radial-gradient(ellipse_at_30%_68%,rgba(119,252,117,0.22),transparent_30%)] opacity-90 blur-2xl will-change-transform motion-reduce:animate-none" />
            <div aria-hidden="true" className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(119,252,117,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.24)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(circle_at_50%_42%,black,transparent_80%)]" />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-[19%] hidden h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent sm:block"><span className="block h-full w-32 animate-cro-data-flow bg-gradient-to-r from-transparent via-primary to-cyan-300 shadow-[0_0_20px_rgba(119,252,117,0.68)] motion-reduce:hidden" /></div>

            <div className="relative mx-auto max-w-[1500px]">
              <div className="mx-auto max-w-[1100px] text-center">
                <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary backdrop-blur-xl">
                  <CircleDot className="size-4" /> Tracking knowledge / 01
                </p>
                <h1 className="mx-auto mt-6 max-w-[1050px] text-balance text-[clamp(2.25rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-normal">
                  Shopify GA4 / GTM
                  <span className="block bg-gradient-to-r from-primary via-cyan-200 to-white bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer motion-reduce:animate-none">Tracking Plan</span>
                </h1>
                <p className="mx-auto mt-6 max-w-4xl text-lg font-semibold leading-[1.55] text-white/86 md:text-2xl">先定义事件为什么发生、参数从哪里来、谁负责发送，再打开 GTM。</p>
                <p className="mx-auto mt-4 max-w-4xl text-base leading-[1.75] text-white/58 md:text-lg">这份计划用于 Shopify 真实实施与验收，不是标签安装清单。它把 Shopify 的标准客户事件、GA4 推荐电商事件、GTM 映射、purchase 去重与报表解释放进同一份可交付契约。</p>
              </div>

              <section id="direct-answer" className="relative mx-auto mt-8 max-w-[1200px] scroll-mt-28 overflow-hidden rounded-[2.4rem_1.4rem_2.8rem_1.7rem] border border-primary/25 bg-[radial-gradient(circle_at_85%_10%,rgba(34,211,238,0.14),transparent_30%),linear-gradient(135deg,rgba(119,252,117,0.11),rgba(255,255,255,0.025))] p-5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-7 md:p-9">
                <div>
                  <p className="font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary">Direct answer</p>
                  <h2 className="mt-3 max-w-5xl text-[clamp(1.65rem,3vw,2.35rem)] font-bold leading-tight">可靠的 Shopify GA4 追踪，不等于“装好 GA4 和 GTM”。</h2>
                  <p className="mt-4 max-w-5xl text-base leading-[1.75] text-white/68">可靠追踪需要一份事件契约：业务事实、GA4 事件、参数来源、发送链路，以及如何证明同一次行为只发送一次。</p>
                  <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                    {["view_item", "add_to_cart", "begin_checkout", "purchase"].map((event, index) => <code key={event} className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary/15 bg-black/25 px-3 text-center font-mono text-base text-primary"><span className="text-cyan-300/65">0{index + 1}</span><span>{event}</span></code>)}
                  </div>
                  <p className="mt-5 max-w-6xl text-base leading-[1.75] text-white/64">purchase 必须带稳定且非空的 transaction_id；value 与 items[] 的计算口径必须事先固定。验收必须同时检查 Shopify 源事件、GTM 映射、GA4 请求、重复行为和次日报表。</p>
                </div>
              </section>

              <div className="mx-auto mt-6 flex max-w-[1200px] flex-wrap justify-center gap-x-6 gap-y-2 text-base text-white/52">
                <span><strong className="text-white">作者：</strong>WhaleLeap Studio</span>
                <span><strong className="text-white">审阅：</strong>Naruto</span>
                <span><strong className="text-white">更新：</strong>2026-09-07</span>
                <span><strong className="text-white">依据：</strong>Google 与 Shopify 官方文档</span>
              </div>
            </div>
          </header>

          <section className="px-4 pb-[50px] sm:px-6 md:px-10 md:pb-[100px]">
            <div className="mx-auto max-w-[1500px]">
              <nav aria-label="本文目录" className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-2 backdrop-blur-xl">
                <ol className="grid grid-cols-2 gap-1 md:grid-cols-4">
                  {[
                    ["直接答案", "direct-answer"], ["架构", "architecture"], ["事件契约", "events"], ["参数规划", "parameters"],
                    ["GTM 决策", "gtm-decisions"], ["重复与收入差异", "risks"], ["QA 与调试", "qa"], ["经验与边界", "experience"],
                  ].map(([label, id], index) => (
                    <li key={id}><a className="group flex min-h-14 items-center gap-3 rounded-[1rem] px-3 py-2 transition-colors hover:bg-primary/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:px-4" href={`#${id}`}><span className="font-mono text-base text-primary">0{index + 1}</span><span className="text-base leading-snug text-white/62 group-hover:text-white">{label}</span></a></li>
                  ))}
                </ol>
              </nav>

              <div className="mt-[50px] min-w-0 space-y-[50px] md:mt-[100px] md:space-y-[100px]">

                <section id="architecture" className="scroll-mt-28">
                  <SectionHeading label="Architecture / 01" title="从业务事实到可解释报表" description="把 Shopify、像素层、GTM 和 GA4 分层，出现问题时才能知道应该检查哪一层。" />
                  <div className="grid overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.03] md:grid-cols-5">
                    {architecture.map(({ number, title, text, icon: Glyph }, index) => {
                      return (
                        <div key={title} className={`relative grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4 sm:p-5 md:block md:min-h-[220px] md:border-t-0 ${index > 0 ? "border-t border-white/8 md:border-l" : ""}`}>
                          <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary"><Glyph className="size-5" /></span>
                          <div className="min-w-0 md:mt-5"><p className="font-mono text-base text-cyan-300">{number}</p><h3 className="mt-1 text-lg font-bold">{title}</h3><p className="mt-2 text-base leading-[1.6] text-white/52">{text}</p></div>
                          {index < 4 && <ArrowDown aria-hidden="true" className="size-5 text-primary/55 md:absolute md:-right-3 md:top-1/2 md:z-10 md:-translate-y-1/2 md:-rotate-90" />}
                        </div>
                      )
                    })}
                  </div>
                  <p className="mt-5 text-base leading-[1.75] text-white/55">关键原则：GA4 事件名不是源事件。比如 Shopify 的 <code className="font-mono text-cyan-200">checkout_completed</code> 是业务事实，再映射为 GA4 的 <code className="font-mono text-primary">purchase</code>。把两者混成一个名字，会让排错失去边界。</p>
                </section>

                <section id="events" className="scroll-mt-28">
                  <SectionHeading label="Event contract / 04" title="四个核心电商事件，逐个定义触发与验收" description="Google 建议使用标准电商事件与 items 数组；这张表增加了 Shopify 的源事件和实施验收条件。" />
                  <div className="grid overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.025] lg:grid-cols-2">
                    {events.map((item, index) => (
                      <details name="event-contract" key={item.event} className={`group transition-colors open:bg-primary/[0.045] open:ring-1 open:ring-inset open:ring-primary/25 ${index > 0 ? "border-t border-white/8" : ""} ${index % 2 === 1 ? "lg:border-l lg:border-t-0" : index > 1 ? "lg:border-t" : ""}`}>
                        <summary className="grid min-h-[82px] cursor-pointer list-none grid-cols-[1fr_auto_auto] items-center gap-3 px-4 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary [&::-webkit-details-marker]:hidden sm:px-6"><code className="font-mono text-lg font-bold text-primary">{item.event}</code><span className="hidden rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-1.5 font-mono text-base text-cyan-200 sm:inline-flex">{item.shopify}</span><span aria-hidden="true" className="flex size-8 items-center justify-center rounded-full border border-white/10 font-mono text-base text-white/55 transition-transform group-open:rotate-45">+</span></summary>
                        <div className="px-4 pb-5 sm:px-6 md:pb-7">
                          <p className="mb-4 font-mono text-base text-cyan-200 sm:hidden">{item.shopify}</p>
                          <dl className="grid gap-3">
                          <div className="grid grid-cols-[88px_1fr] gap-3"><dt className="font-mono text-base text-white/35">TRIGGER</dt><dd className="text-base leading-[1.65] text-white/68">{item.trigger}</dd></div>
                          <div className="grid grid-cols-[88px_1fr] gap-3"><dt className="font-mono text-base text-white/35">REQUIRED</dt><dd className="font-mono text-base leading-[1.65] text-white/58">{item.required}</dd></div>
                          <div className="grid grid-cols-[88px_1fr] gap-3"><dt className="font-mono text-base text-white/35">QA GATE</dt><dd className="text-base leading-[1.65] text-white/68">{item.qa}</dd></div>
                          </dl>
                        </div>
                      </details>
                    ))}
                  </div>
                  <p className="mt-5 text-base leading-[1.75] text-white/55"><a className="text-cyan-200 underline decoration-cyan-300/35 underline-offset-4 hover:text-primary" href="https://developers.google.com/analytics/devguides/collection/ga4/reference/events" target="_blank" rel="noreferrer">Google 的推荐事件参考</a>明确说明：发送 value 时应同时发送 currency；purchase 的 value 应是 items 中 price × quantity 的总和，不含 shipping 与 tax。不要用 Shopify Total Sales 直接填 GA4 purchase value，再期待两边收入完全相同。</p>
                </section>

                <section id="parameters" className="scroll-mt-28">
                  <SectionHeading label="Parameter plan / 08" title="参数表先定“来源”，再定“名字”" description="同一个字段如果在主题、Pixel 和服务端有不同来源，事件看似完整，实际无法稳定对账。" />
                  <div className="grid overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.025] md:grid-cols-2">
                    {parameters.map(([name, source, rule, usedBy]) => (
                      <details name="parameter-plan" key={name} className="group border-b border-white/8 transition-colors open:bg-primary/[0.045] open:ring-1 open:ring-inset open:ring-primary/25 md:odd:border-r md:[&:nth-last-child(-n+2)]:border-b-0">
                        <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary [&::-webkit-details-marker]:hidden">
                          <code className="font-mono text-base font-semibold text-primary">{name}</code>
                          <span className="flex items-center gap-3 text-right font-mono text-base text-cyan-200"><span className="hidden sm:inline">{usedBy}</span><span aria-hidden="true" className="flex size-8 items-center justify-center rounded-full border border-white/10 text-white/55 transition-transform group-open:rotate-45">+</span></span>
                        </summary>
                        <div className="grid gap-4 px-5 pb-5 sm:grid-cols-2">
                          <div><span className="font-mono text-base text-white/35">SOURCE</span><p className="mt-2 text-base leading-[1.65] text-white/68">{source}</p></div>
                          <div><span className="font-mono text-base text-white/35">CONTRACT</span><p className="mt-2 text-base leading-[1.65] text-white/68">{rule}</p></div>
                          <div className="sm:hidden"><span className="font-mono text-base text-white/35">USED BY</span><p className="mt-2 text-base leading-[1.65] text-cyan-200">{usedBy}</p></div>
                        </div>
                      </details>
                    ))}
                  </div>
                </section>

                <section id="gtm-decisions" className="scroll-mt-28">
                  <SectionHeading label="Implementation decisions / 04" title="GTM 不是默认答案，而是受约束的实现选择" description="先判断官方集成、App Pixel、Custom Pixel、主题 dataLayer 与服务端各自负责什么。" />
                  <div className="grid overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.045),rgba(255,255,255,0.012))] md:grid-cols-2">
                    {decisions.map((item, index) => (
                      <details name="implementation-decisions" key={item.title} className={`group transition-colors open:bg-cyan-300/[0.045] open:ring-1 open:ring-inset open:ring-cyan-300/25 ${index > 0 ? "border-t border-white/8" : ""} ${index < 2 ? "md:border-t-0" : ""} ${index % 2 === 1 ? "md:border-l" : ""}`}>
                        <summary className="grid min-h-[104px] cursor-pointer list-none grid-cols-[auto_1fr_auto] items-center gap-4 p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary [&::-webkit-details-marker]:hidden sm:p-6">
                          <GitBranch className="size-6 text-primary" /><span className="text-lg font-bold leading-tight">{item.title}</span><span className="flex size-8 items-center justify-center rounded-full border border-white/10 font-mono text-base text-cyan-300 transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <div className="px-5 pb-6 sm:px-6"><p className="text-base leading-[1.7] text-white/68"><strong className="text-white">适用：</strong>{item.when}</p><p className="mt-3 text-base leading-[1.7] text-white/58"><strong className="text-white">依据：</strong>{item.reason}</p><p className="mt-3 text-base leading-[1.7] text-boundary"><strong>风险：</strong>{item.risk}</p><span className="mt-4 block font-mono text-base text-cyan-300">0{index + 1}</span></div>
                      </details>
                    ))}
                  </div>
                </section>

                <section id="risks" className="scroll-mt-28">
                  <SectionHeading label="Risk model / 02" title="重复事件与收入差异，要分开诊断" description="一个是采集链路问题，另一个常常是指标口径、隐私和处理逻辑的差异。" />
                  <div className="grid gap-4 md:grid-cols-2">
                    <article className="rounded-[2rem] border border-boundary/30 bg-boundary/[0.055] p-6 md:p-8">
                      <AlertTriangle className="size-7 text-boundary" />
                      <h3 className="mt-5 text-2xl font-bold">purchase 重复的五个入口</h3>
                      <ol className="mt-5 space-y-3 text-base leading-[1.7] text-white/66">
                        <li>1. Shopify Google 集成和 GTM 同时发送。</li><li>2. App Pixel 与 Custom Pixel 同时映射 checkout_completed。</li><li>3. 主题感谢页脚本仍存在，刷新页面再次发送。</li><li>4. 客户端和服务端都发送，但没有统一去重契约。</li><li>5. transaction_id 为空、格式变化或不同订单复用同一值。</li>
                      </ol>
                      <p className="mt-5 text-base leading-[1.7] text-boundary"><a className="underline decoration-current/35 underline-offset-4 hover:text-white" href="https://support.google.com/analytics/answer/12313109" target="_blank" rel="noreferrer">Google 的 transaction_id 说明</a>指出 Web 数据流会使用相同 ID 去重，但这不是保留重复发送链路的理由；空字符串甚至可能导致购买被错误合并。</p>
                    </article>
                    <article className="rounded-[2rem] border border-cyan-300/25 bg-cyan-300/[0.045] p-6 md:p-8">
                      <Layers3 className="size-7 text-cyan-200" />
                      <h3 className="mt-5 text-2xl font-bold">Shopify 与 GA4 收入不一致</h3>
                      <ul className="mt-5 space-y-3 text-base leading-[1.7] text-white/66">
                        <li>• Shopify Total Sales 包含税、运费、关税、费用与销售冲销；GA4 purchase value 的推荐口径不含 tax 与 shipping。</li><li>• 用户拒绝同意、拦截脚本或禁用 JavaScript，GA4 可能无法观察到购买。</li><li>• 时区、币种换算、订单编辑、退款和测试订单处理时间不同。</li><li>• GA4 报表处理与归因不是 Shopify 订单数据库的实时镜像。</li>
                      </ul>
                      <p className="mt-5 text-base leading-[1.7] text-cyan-200">对账前先根据 <a className="underline decoration-current/35 underline-offset-4 hover:text-white" href="https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/sales-report" target="_blank" rel="noreferrer">Shopify 销售指标定义</a>确定比较的是订单数、purchase 事件数、Gross sales、Net sales 还是 Total sales，以及两边是否使用同一日期、时区、币种与订单集合。</p>
                    </article>
                  </div>
                </section>

                <section id="qa" className="scroll-mt-28">
                  <SectionHeading label="QA protocol / 08" title="上线验收清单与调试顺序" description="不要在四个工具之间随机跳转。先验证源事件，再沿映射链路向下排查。" />
                  <div className="grid overflow-hidden rounded-[2rem] border border-primary/20 bg-[linear-gradient(145deg,rgba(119,252,117,0.05),rgba(255,255,255,0.015))] lg:grid-cols-[1.12fr_0.88fr]">
                    <div className="p-5 sm:p-7 md:p-9">
                      <p className="font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary">Acceptance gates / 08</p>
                      <div className="mt-6 grid overflow-hidden rounded-[1.4rem] border border-primary/15 md:grid-cols-2">
                        {qaChecks.map((item, index) => (
                          <details name="acceptance-gates" key={item} className={`group transition-colors open:bg-primary/[0.055] open:ring-1 open:ring-inset open:ring-primary/25 ${index > 0 ? "border-t border-primary/10" : ""} ${index < 2 ? "md:border-t-0" : ""} ${index % 2 === 1 ? "md:border-l" : ""}`}>
                            <summary className="grid min-h-16 cursor-pointer list-none grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary [&::-webkit-details-marker]:hidden"><CheckCircle2 className="size-5 text-primary" /><span className="text-base font-semibold leading-snug text-white/76">{qaLabels[index]}</span><span aria-hidden="true" className="flex size-7 items-center justify-center rounded-full border border-primary/15 text-primary transition-transform group-open:rotate-45">+</span></summary>
                            <p className="px-4 pb-4 pl-12 text-base leading-[1.7] text-white/58">{item}</p>
                          </details>
                        ))}
                      </div>
                      <p className="mt-6 text-base leading-[1.75] text-white/55">Google 建议通过 <a className="text-cyan-200 underline decoration-cyan-300/35 underline-offset-4 hover:text-primary" href="https://support.google.com/analytics/answer/7201382" target="_blank" rel="noreferrer">Tag Assistant / Preview 开启 DebugView</a>；如果客户端隐私控制或 Consent Mode 未允许 Analytics cookies，调试事件也可能不可见。</p>
                    </div>
                    <div className="border-t border-white/10 bg-black/22 p-5 sm:p-7 md:p-9 lg:border-l lg:border-t-0">
                      <p className="font-mono text-base font-semibold uppercase tracking-[0.02em] text-cyan-300">Debug route / 05</p>
                      <div className="relative mt-6 grid overflow-hidden rounded-[1.4rem] border border-cyan-300/12">
                        {debugSteps.map(([number, title, text], index) => <details name="debug-route" key={number} className={`group transition-colors open:bg-cyan-300/[0.045] open:ring-1 open:ring-inset open:ring-cyan-300/25 ${index > 0 ? "border-t border-cyan-300/10" : ""}`}><summary className="grid min-h-16 cursor-pointer list-none grid-cols-[36px_1fr_auto] items-center gap-3 px-3 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-300 [&::-webkit-details-marker]:hidden"><span className="flex size-9 items-center justify-center rounded-full border border-primary/20 bg-[#06110a] font-mono text-base text-primary">{number}</span><span className="text-lg font-bold">{title}</span><span aria-hidden="true" className="flex size-7 items-center justify-center rounded-full border border-cyan-300/15 text-cyan-300 transition-transform group-open:rotate-45">+</span></summary><p className="px-4 pb-4 pl-[60px] text-base leading-[1.7] text-white/58">{text}</p></details>)}
                      </div>
                    </div>
                  </div>
                </section>

                <section id="experience" className="scroll-mt-28">
                  <SectionHeading label="Delivery evidence" title="这份计划的 Information Gain 在哪里" description="普通教程告诉你复制代码；可引用的实施文档需要说明数据契约、冲突条件和如何证明结果。" />
                  <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                    <article className="rounded-[2rem] border border-white/12 bg-white/[0.035] p-6 md:p-8">
                      <ClipboardCheck className="size-7 text-primary" />
                      <h3 className="mt-5 text-2xl font-bold">WhaleLeap 的真实实施经验</h3>
                      <div className="mt-5 space-y-4 text-base leading-[1.75] text-white/66">
                        <p>在 Shopify 追踪项目里，最容易被低估的工作不是创建标签，而是确认同一业务动作是否被多个集成重复观察。我们会先列出现有 App、Customer Events、主题脚本和广告渠道，再决定保留哪一条主链路。</p>
                        <p>验收记录会保存测试路径、时间、商品/变体、测试订单号、源事件、GTM 触发次数和 GA4 参数，而不是只交付一张“事件已出现”的截图。这样数据异常发生后，团队能回到具体一层，而不是重新安装所有代码。</p>
                        <p>我们不承诺 Shopify、GA4 与广告平台数字完全一致。交付目标是让差异可分类、可复测、可解释，并把无法由浏览器端追踪解决的限制写入交接。</p>
                      </div>
                    </article>
                    <article className="rounded-[2rem] border border-boundary/25 bg-boundary/[0.045] p-6 md:p-8">
                      <ShieldCheck className="size-7 text-boundary" />
                      <h3 className="mt-5 text-2xl font-bold">明确限制</h3>
                      <ul className="mt-5 space-y-4 text-base leading-[1.7] text-white/64">
                        <li>• 本文不是特定店铺的即插即用代码。</li><li>• Custom Pixel 兼容性取决于第三方脚本与 Shopify 沙箱。</li><li>• 隐私同意和浏览器拦截会造成不可恢复的客户端缺失。</li><li>• 服务端追踪、CAPI、Consent Mode 与 BigQuery 需要独立范围。</li><li>• 平台更新后应重新验证事件 payload 和限制。</li>
                      </ul>
                    </article>
                  </div>
                </section>

                <section aria-labelledby="sources-title" className="rounded-[2rem] border border-white/12 p-6 md:p-8">
                  <h2 id="sources-title" className="text-2xl font-bold">官方依据</h2>
                  <p className="mt-3 text-base leading-[1.7] text-white/55">关键实现判断优先链接 Google Analytics 与 Shopify 官方资料；访问日期：2026-09-07。</p>
                  <ul className="mt-5 grid gap-3 md:grid-cols-2">{sources.map(([label, href]) => <li key={href}><a className="group flex min-h-14 items-center justify-between gap-3 rounded-xl bg-white/[0.04] px-4 py-3 text-base text-white/68 transition-colors hover:bg-white/[0.07] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" href={href} target="_blank" rel="noreferrer"><span>{label}</span><ExternalLink className="size-4 shrink-0" /></a></li>)}</ul>
                </section>

                <section className="relative overflow-hidden rounded-[3.2rem_1.5rem_3.6rem_1.8rem] border border-white/25 bg-[linear-gradient(115deg,rgba(255,255,255,0.075),rgba(255,255,255,0.015)_38%,rgba(34,211,238,0.045)_72%,rgba(119,252,117,0.06))] px-7 py-12 shadow-[inset_0_2px_0_rgba(255,255,255,0.24),inset_0_-2px_0_rgba(119,252,117,0.1),0_45px_110px_rgba(0,0,0,0.5),0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-3xl md:px-14 md:py-16">
                  <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(34,211,238,0.15),transparent_28%),radial-gradient(circle_at_16%_0%,rgba(255,255,255,0.08),transparent_32%)]" />
                  <div aria-hidden="true" className="absolute inset-x-[7%] top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                  <div aria-hidden="true" className="absolute -bottom-8 right-[8%] rotate-[-8deg] space-y-2 font-mono text-base leading-relaxed text-cyan-300/16"><p>view_item / add_to_cart</p><p>begin_checkout / purchase</p><p>source / contract / evidence</p></div>
                  <div aria-hidden="true" className="absolute bottom-[22%] right-[2%] h-px w-[62%] rotate-[-8deg] animate-shimmer bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.55),rgba(119,252,117,0.8),transparent)] bg-[length:200%_100%] shadow-[0_0_25px_rgba(119,252,117,0.35)] motion-reduce:animate-none" />
                  <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                    <div><ShieldCheck className="mb-5 size-8 text-primary" /><p className="font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary">From guide to implementation</p><h2 className="mt-3 max-w-4xl text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">需要把这份计划变成你店铺里的可验证追踪链路？</h2><p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">先查看 Tracking Service 的实施范围；如果你不确定问题在 Shopify、GTM 还是 GA4，提交免费诊断，我们先判断链路。</p></div>
                    <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                      <a href="/services/shopify-ga4-gtm" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-bold text-primary-foreground shadow-[0_0_28px_rgba(119,252,117,0.22)] transition-all hover:brightness-110 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">查看 Tracking Service<ArrowUpRight className="size-4" /></a>
                      <a href="/diagnosis" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/18 bg-white/[0.045] px-7 text-base font-semibold text-white transition-colors hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">申请免费诊断<ArrowUpRight className="size-4" /></a>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  )
}
