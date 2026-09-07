"use client"

import { Database, Eye, FileText, LockKeyhole, Mail, ShieldCheck } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { PageStructuredData } from "@/components/page-structured-data"
import { useLanguage } from "@/components/language-provider"

const updatedAt = "2026-09-06"

const copy = {
  zh: {
    eyebrow: "PRIVACY / DATA USE",
    title: "隐私政策",
    intro: "这份政策说明 WhaleLeap Studio 网站和 WhaleLeap GSC Reader 如何处理信息。我们只收集完成咨询、网站分析和经授权的 Search Console 报告所需要的数据。",
    updated: "更新日期：2026 年 9 月 6 日",
    summary: [
      { title: "表单信息", text: "用于回复诊断与项目咨询", icon: FileText },
      { title: "网站分析", text: "用于了解页面与功能表现", icon: Eye },
      { title: "GSC 只读访问", text: "只生成经授权的网站报告", icon: Database },
    ],
    sections: [
      {
        id: "controller",
        title: "1. 谁在处理这些信息",
        paragraphs: [
          "WhaleLeap Studio 是本网站以及 WhaleLeap GSC Reader 的运营者。隐私相关问题、数据访问或删除请求，可发送至 liaoshenyuan1999053@gmail.com。",
        ],
      },
      {
        id: "information",
        title: "2. 网站会处理哪些信息",
        paragraphs: [
          "当你提交 Free Shopify Review 或联系表单时，我们可能收到店铺链接、产品品类、目标市场、项目阶段、SKU 数量、预算、时间计划、问题描述、邮箱、微信，以及提交页面、来源页面和 UTM 参数。",
          "表单接口会短暂读取 IP 地址用于限制重复提交和防止滥用。该 IP 不会写入咨询邮件或 GSC 报告。浏览器还会在本地保存语言偏好，用于在中文与英文页面之间切换。",
        ],
      },
      {
        id: "services",
        title: "3. 网站分析与第三方服务",
        paragraphs: [
          "网站在配置启用时使用 Google Analytics，并在生产环境使用 Vercel Analytics。它们可能处理页面访问、来源、设备或浏览器信息、近似地区和站内交互事件，用于理解网站表现与改进体验。你可以通过浏览器设置限制 Cookie 或追踪，也可以使用 Google 提供的分析退出工具。",
          "咨询表单通过 Resend 发送给 WhaleLeap Studio；如果你填写邮箱，系统还可能发送一封提交确认邮件。我们不会把咨询信息出售给第三方，也不会用于与本次咨询无关的营销。",
        ],
        links: [
          { label: "Google 隐私政策", href: "https://policies.google.com/privacy" },
          { label: "Google Analytics 退出工具", href: "https://tools.google.com/dlpage/gaoptout" },
          { label: "Vercel 隐私政策", href: "https://vercel.com/legal/privacy-policy" },
          { label: "Resend 隐私政策", href: "https://resend.com/legal/privacy-policy" },
        ],
      },
      {
        id: "gsc-reader",
        title: "4. WhaleLeap GSC Reader 与 Google 用户数据",
        paragraphs: [
          "WhaleLeap GSC Reader 是运营者使用的免费内部报告工具。它通过 Google 官方 OAuth 2.0 请求 Search Console 只读权限（webmasters.readonly），仅访问授权账号可查看的 Search Console 资源。",
          "工具会读取 28 天与 90 天的点击、展示、CTR、平均排名、查询、页面、国家/地区、设备和 Sitemap 提交状态，并输出本地 JSON 与 CSV 报告。它不会修改 Search Console、网站或 Google 账号中的数据。",
          "OAuth 客户端密钥与刷新令牌保存在运营者控制的本地环境中，不提交到 Git。生成的报告也保存在本地项目目录中；当前版本不会自动把 Google 用户数据发送给 AI、广告平台、数据经纪商或付费 SEO 工具。",
          "Google 用户数据只用于生成和分析经授权网站的搜索表现报告，不会出售、用于广告，也不会与无关第三方共享。WhaleLeap GSC Reader 对 Google API 数据的使用和传输遵守 Google API Services User Data Policy，包括 Limited Use 要求。",
        ],
        links: [
          { label: "Google API Services User Data Policy", href: "https://developers.google.com/terms/api-services-user-data-policy" },
          { label: "管理 Google 账号的第三方连接", href: "https://myaccount.google.com/connections" },
        ],
      },
      {
        id: "retention",
        title: "5. 使用目的、保存与共享",
        paragraphs: [
          "我们使用信息来回复咨询、评估 Shopify 项目、保障表单安全、理解网站表现，以及生成经授权的 Search Console 报告。数据只在完成这些目的、处理争议或满足法律要求所需的时间内保存。",
          "除提供网站托管、分析和邮件发送所必需的服务商外，我们不会共享个人信息。服务商按照各自条款处理必要数据。若数据处理方式发生实质变化，我们会先更新本政策，并在需要时重新取得授权。",
        ],
      },
      {
        id: "requests",
        title: "6. 安全、撤销与数据请求",
        paragraphs: [
          "我们采取合理措施保护凭据、表单信息和报告，但任何互联网传输或存储方式都无法保证绝对安全。",
          "你可以随时在 Google 账号的第三方连接页面撤销 WhaleLeap GSC Reader 的访问权限。你也可以通过邮件申请查看、更正或删除你提供的信息及本地保存的相关 Google API 数据；我们会在核实请求后处理。",
        ],
      },
      {
        id: "updates",
        title: "7. 儿童与政策更新",
        paragraphs: [
          "本网站和 GSC Reader 面向企业与专业用户，不面向儿童。政策更新会发布在本页面，并修改顶部的更新日期。",
        ],
      },
    ],
    contactLabel: "隐私与数据请求",
    contactTitle: "需要访问、删除或撤销数据？",
    contactText: "请说明涉及的网站、表单提交或 Google 授权账号，以便我们核实并处理请求。请不要在邮件中发送密码、OAuth 密钥或刷新令牌。",
    contactCta: "发送邮件",
  },
  en: {
    eyebrow: "PRIVACY / DATA USE",
    title: "Privacy Policy",
    intro: "This policy explains how the WhaleLeap Studio website and WhaleLeap GSC Reader handle information. We collect only what is needed to respond to inquiries, understand website use, and create authorized Search Console reports.",
    updated: "Last updated: September 6, 2026",
    summary: [
      { title: "Form information", text: "Used to respond to reviews and project inquiries", icon: FileText },
      { title: "Website analytics", text: "Used to understand page and feature performance", icon: Eye },
      { title: "Read-only GSC access", text: "Used only for authorized website reports", icon: Database },
    ],
    sections: [
      {
        id: "controller",
        title: "1. Who handles this information",
        paragraphs: [
          "WhaleLeap Studio operates this website and WhaleLeap GSC Reader. For privacy questions or requests to access or delete data, email liaoshenyuan1999053@gmail.com.",
        ],
      },
      {
        id: "information",
        title: "2. Information handled by the website",
        paragraphs: [
          "When you submit the Free Shopify Review or contact form, we may receive your store URL, product category, target market, project stage, SKU count, budget, timeline, problem description, email, WeChat ID, submission page, referrer, and UTM parameters.",
          "The form endpoint temporarily reads an IP address to limit repeated submissions and prevent abuse. The IP address is not included in inquiry emails or GSC reports. Your browser also stores a language preference locally to switch between the Chinese and English versions of the site.",
        ],
      },
      {
        id: "services",
        title: "3. Website analytics and service providers",
        paragraphs: [
          "When configured, the site uses Google Analytics and, in production, Vercel Analytics. These services may process page visits, referrers, device or browser information, approximate location, and on-site interaction events so we can understand performance and improve the experience. You can limit cookies or tracking in your browser and use Google's Analytics opt-out tool.",
          "The inquiry form uses Resend to deliver submissions to WhaleLeap Studio. If you provide an email address, the system may also send a submission confirmation. We do not sell inquiry data or use it for marketing unrelated to your request.",
        ],
        links: [
          { label: "Google Privacy Policy", href: "https://policies.google.com/privacy" },
          { label: "Google Analytics Opt-out", href: "https://tools.google.com/dlpage/gaoptout" },
          { label: "Vercel Privacy Policy", href: "https://vercel.com/legal/privacy-policy" },
          { label: "Resend Privacy Policy", href: "https://resend.com/legal/privacy-policy" },
        ],
      },
      {
        id: "gsc-reader",
        title: "4. WhaleLeap GSC Reader and Google user data",
        paragraphs: [
          "WhaleLeap GSC Reader is a free internal reporting tool used by the operator. Through Google's official OAuth 2.0 flow, it requests the read-only Search Console scope (webmasters.readonly) and accesses only Search Console resources available to the authorizing account.",
          "The tool retrieves 28-day and 90-day clicks, impressions, CTR, average position, queries, pages, countries, devices, and sitemap submission status, then creates local JSON and CSV reports. It does not modify Search Console, websites, or Google Account data.",
          "OAuth client credentials and refresh tokens are stored in an operator-controlled local environment and are not committed to Git. Generated reports remain in the local project directory. The current version does not automatically send Google user data to AI services, advertising platforms, data brokers, or paid SEO tools.",
          "Google user data is used only to create and analyze authorized search performance reports. It is not sold, used for advertising, or shared with unrelated third parties. WhaleLeap GSC Reader's use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements.",
        ],
        links: [
          { label: "Google API Services User Data Policy", href: "https://developers.google.com/terms/api-services-user-data-policy" },
          { label: "Manage third-party connections to your Google Account", href: "https://myaccount.google.com/connections" },
        ],
      },
      {
        id: "retention",
        title: "5. Purposes, retention, and sharing",
        paragraphs: [
          "We use information to respond to inquiries, assess Shopify projects, protect the form from abuse, understand website performance, and create authorized Search Console reports. Data is retained only as long as reasonably needed for these purposes, dispute handling, or legal requirements.",
          "We do not share personal information except with providers needed for hosting, analytics, and email delivery. Those providers process necessary information under their own terms. If our handling of data changes materially, we will update this policy first and request renewed authorization where required.",
        ],
      },
      {
        id: "requests",
        title: "6. Security, revocation, and data requests",
        paragraphs: [
          "We take reasonable measures to protect credentials, form information, and reports, but no internet transmission or storage method can guarantee absolute security.",
          "You can revoke WhaleLeap GSC Reader access at any time from your Google Account's third-party connections page. You may also email us to request access, correction, or deletion of information you provided and related Google API data stored locally. We will process the request after verification.",
        ],
      },
      {
        id: "updates",
        title: "7. Children and policy updates",
        paragraphs: [
          "This website and GSC Reader are intended for businesses and professional users, not children. Updates will be posted on this page with a revised date at the top.",
        ],
      },
    ],
    contactLabel: "PRIVACY / DATA REQUESTS",
    contactTitle: "Need to access, delete, or revoke data?",
    contactText: "Tell us which website, form submission, or authorized Google Account the request concerns so we can verify and process it. Do not send passwords, OAuth secrets, or refresh tokens by email.",
    contactCta: "Email us",
  },
}

export function PrivacyPage() {
  const { language } = useLanguage()
  const text = copy[language]
  const baseUrl = "https://whaleleap.studio"
  const pageUrl = language === "zh" ? `${baseUrl}/privacy` : `${baseUrl}/en/privacy`

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageStructuredData
        language={language}
        breadcrumbs={[
          { name: language === "zh" ? "首页" : "Home", url: language === "zh" ? `${baseUrl}/` : `${baseUrl}/en` },
          { name: text.title, url: pageUrl },
        ]}
        page={{
          type: "WebPage",
          name: text.title,
          description: text.intro,
          url: pageUrl,
          about: ["WhaleLeap Studio", "WhaleLeap GSC Reader", "Privacy", "Google Search Console API"],
        }}
      />
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <section className="relative overflow-hidden bg-[#020403] px-4 pb-[50px] pt-32 sm:px-6 md:px-10 md:pb-[100px] md:pt-40">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_16%_18%,rgba(119,252,117,0.2),transparent_34%),radial-gradient(ellipse_at_84%_24%,rgba(34,211,238,0.14),transparent_33%)]" />
          <div aria-hidden="true" className="absolute -inset-x-[18%] -top-[24%] h-[112%] animate-cro-signal-orbit bg-[radial-gradient(ellipse_at_66%_34%,rgba(34,211,238,0.15),transparent_26%),radial-gradient(ellipse_at_32%_68%,rgba(119,252,117,0.19),transparent_29%)] opacity-90 blur-2xl will-change-transform motion-reduce:animate-none" />
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.13] [background-image:radial-gradient(circle,rgba(119,252,117,0.5)_1px,transparent_1.3px)] [background-size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-[23%] hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent sm:block">
            <span className="block h-full w-32 animate-cro-data-flow bg-gradient-to-r from-transparent via-primary to-cyan-300 shadow-[0_0_18px_rgba(119,252,117,0.7)] will-change-transform motion-reduce:hidden" />
          </div>

          <div className="relative mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-[980px] text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.08] px-4 py-2 font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary backdrop-blur-xl">
                <span className="size-2 animate-pulse rounded-full bg-primary shadow-[0_0_14px_rgba(119,252,117,0.9)] motion-reduce:animate-none" />
                {text.eyebrow}
              </p>
              <h1 className="mt-6 bg-gradient-to-r from-white via-primary to-cyan-300 bg-[length:200%_100%] bg-clip-text font-display text-[clamp(3rem,7vw,7rem)] font-bold leading-[0.94] tracking-[-0.055em] text-transparent animate-shimmer motion-reduce:animate-none">{text.title}</h1>
              <p className="mx-auto mt-7 max-w-3xl text-base leading-[1.8] text-white/68 md:text-lg">{text.intro}</p>
              <p className="mt-5 font-mono text-base tracking-[0.02em] text-white/45">{text.updated}</p>
            </div>

            <div className="relative mx-auto mt-12 max-w-[1500px] overflow-hidden rounded-[1.75rem] border border-white/12 bg-black/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_28px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px animate-shimmer bg-gradient-to-r from-transparent via-primary/80 to-cyan-300/70 bg-[length:200%_100%] motion-reduce:animate-none" />
              <div className="grid grid-cols-2 md:grid-cols-3">
                {text.summary.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className={`relative flex min-w-0 items-start gap-3 p-5 sm:gap-4 sm:p-6 ${index === 2 ? "col-span-2 border-t border-white/8 md:col-span-1 md:border-l md:border-t-0" : index === 1 ? "border-l border-white/8" : ""}`}>
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Icon className="size-5" /></span>
                      <div className="min-w-0">
                        <h2 className="text-base font-semibold text-white">{item.title}</h2>
                        <p className="mt-1 text-base leading-relaxed text-white/52">{item.text}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black px-4 py-[50px] sm:px-6 md:px-10 md:py-[100px]">
          <div className="mx-auto max-w-[1500px]">
            <nav aria-label={language === "zh" ? "隐私政策目录" : "Privacy policy navigation"} className="mx-auto max-w-[1500px] rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-2 backdrop-blur-xl">
              <ol className="grid grid-cols-2 gap-1 md:grid-cols-4">
                {text.sections.map((section, index) => (
                  <li key={section.id} className={index === 6 ? "col-span-2 md:col-span-1" : ""}>
                    <a href={`#${section.id}`} className="group flex min-h-14 items-center gap-3 rounded-[1rem] px-3 py-2 text-left transition-colors hover:bg-primary/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 sm:px-4">
                      <span className="font-mono text-base text-primary">{String(index + 1).padStart(2, "0")}</span>
                      <span className="min-w-0 text-base leading-snug text-white/62 transition-colors group-hover:text-white">{section.title.replace(/^\d+\.\s*/, "")}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mx-auto mt-8 max-w-[1500px] overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_32px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl md:mt-10">
              <div className="p-5 sm:p-7 md:p-10 lg:p-12">
                <div className="mb-8 flex items-center gap-3 md:mb-10">
                  <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary"><FileText className="size-5" /></span>
                  <p className="font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary">{language === "zh" ? "WEBSITE DATA / 01—03" : "WEBSITE DATA / 01—03"}</p>
                </div>
                <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
                  {text.sections.slice(0, 3).map((section, index) => (
                    <article key={section.id} id={section.id} className="scroll-mt-28">
                      <span className="font-mono text-base text-primary/72">0{index + 1}</span>
                      <h2 className="mt-3 text-[1.65rem] font-semibold leading-[1.18] tracking-[-0.025em] text-white md:text-3xl">{section.title.replace(/^\d+\.\s*/, "")}</h2>
                      <div className="mt-5 grid gap-4">
                        {section.paragraphs.map((paragraph) => <p key={paragraph} className="text-base leading-[1.85] text-white/62">{paragraph}</p>)}
                      </div>
                      {section.links && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          {section.links.map((link) => (
                            <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-full border border-white/10 bg-black/20 px-4 text-base text-white/68 transition-colors hover:border-primary/35 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </div>

              <article id={text.sections[3].id} className="relative scroll-mt-28 overflow-hidden border-y border-primary/18 bg-[radial-gradient(circle_at_12%_0%,rgba(119,252,117,0.17),transparent_42%),radial-gradient(circle_at_90%_75%,rgba(34,211,238,0.12),transparent_34%),rgba(1,12,7,0.62)] p-5 sm:p-7 md:p-10 lg:p-12">
                <div aria-hidden="true" className="absolute inset-y-0 right-[10%] hidden w-px bg-gradient-to-b from-transparent via-primary/45 to-transparent md:block">
                  <span className="block h-24 w-full animate-cro-data-flow-y bg-gradient-to-b from-transparent via-cyan-300 to-primary shadow-[0_0_16px_rgba(119,252,117,0.62)] motion-reduce:hidden" />
                </div>
                <div className="relative grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
                  <div>
                    <span className="flex size-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary"><LockKeyhole className="size-6" /></span>
                    <p className="mt-6 font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary">GOOGLE DATA VAULT / 04</p>
                    <h2 className="mt-4 text-3xl font-semibold leading-[1.12] tracking-[-0.035em] text-white md:text-4xl">{text.sections[3].title.replace(/^\d+\.\s*/, "")}</h2>
                    <p className="mt-5 text-base leading-[1.8] text-white/58">{language === "zh" ? "只读访问、明确用途、本地保存。授权边界与数据流向在这里集中说明。" : "Read-only access, a defined purpose, and local storage. Authorization boundaries and data flow are documented here."}</p>
                    <div className="mt-7 grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
                      {(language === "zh" ? ["只读权限", "本地报告", "不出售数据"] : ["Read only", "Local reports", "No data sale"]).map((item) => (
                        <div key={item} className="flex min-h-12 items-center gap-3 rounded-full border border-primary/15 bg-black/20 px-4 text-base text-white/72">
                          <ShieldCheck className="size-4 shrink-0 text-primary" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid content-start gap-4">
                    {text.sections[3].paragraphs.map((paragraph, index) => (
                      <div key={paragraph} className="grid grid-cols-[auto_1fr] gap-4 rounded-[1.25rem] bg-black/22 p-4 sm:p-5">
                        <span className="font-mono text-base text-cyan-300/75">0{index + 1}</span>
                        <p className="text-base leading-[1.85] text-white/68">{paragraph}</p>
                      </div>
                    ))}
                    {text.sections[3].links && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {text.sections[3].links.map((link) => (
                          <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-primary/20 bg-primary/[0.07] px-5 text-base text-white/76 transition-colors hover:border-primary/45 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>

              <div className="p-5 sm:p-7 md:p-10 lg:p-12">
                <div className="mb-8 flex items-center gap-3 md:mb-10">
                  <span className="flex size-11 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-300"><ShieldCheck className="size-5" /></span>
                  <p className="font-mono text-base font-semibold uppercase tracking-[0.02em] text-cyan-300">{language === "zh" ? "DATA RIGHTS / 05—07" : "DATA RIGHTS / 05—07"}</p>
                </div>
                <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
                  {text.sections.slice(4).map((section, index) => (
                    <article key={section.id} id={section.id} className="scroll-mt-28">
                      <span className="font-mono text-base text-cyan-300/72">0{index + 5}</span>
                      <h2 className="mt-3 text-[1.65rem] font-semibold leading-[1.18] tracking-[-0.025em] text-white md:text-3xl">{section.title.replace(/^\d+\.\s*/, "")}</h2>
                      <div className="mt-5 grid gap-4">
                        {section.paragraphs.map((paragraph) => <p key={paragraph} className="text-base leading-[1.85] text-white/62">{paragraph}</p>)}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black px-4 pb-[50px] sm:px-6 md:px-10 md:pb-[100px]">
          <div className="mx-auto max-w-[1500px] rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_0%_0%,rgba(119,252,117,0.13),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.018))] p-6 md:p-10 lg:flex lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-3xl">
              <p className="font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary">{text.contactLabel}</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-white md:text-5xl">{text.contactTitle}</h2>
              <p className="mt-5 text-base leading-[1.8] text-white/60">{text.contactText}</p>
            </div>
            <a href="mailto:liaoshenyuan1999053@gmail.com?subject=WhaleLeap%20Privacy%20Request" className="mt-7 inline-flex min-h-14 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-bold text-black transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 lg:mt-0">
              <Mail className="size-5" />
              {text.contactCta}
            </a>
          </div>
        </section>
      </main>
      <time dateTime={updatedAt} className="sr-only">{updatedAt}</time>
    </div>
  )
}
