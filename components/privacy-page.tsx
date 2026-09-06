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
        title: "1. 谁在处理这些信息",
        paragraphs: [
          "WhaleLeap Studio 是本网站以及 WhaleLeap GSC Reader 的运营者。隐私相关问题、数据访问或删除请求，可发送至 liaoshenyuan1999053@gmail.com。",
        ],
      },
      {
        title: "2. 网站会处理哪些信息",
        paragraphs: [
          "当你提交 Free Shopify Review 或联系表单时，我们可能收到店铺链接、产品品类、目标市场、项目阶段、SKU 数量、预算、时间计划、问题描述、邮箱、微信，以及提交页面、来源页面和 UTM 参数。",
          "表单接口会短暂读取 IP 地址用于限制重复提交和防止滥用。该 IP 不会写入咨询邮件或 GSC 报告。浏览器还会在本地保存语言偏好，用于在中文与英文页面之间切换。",
        ],
      },
      {
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
        title: "5. 使用目的、保存与共享",
        paragraphs: [
          "我们使用信息来回复咨询、评估 Shopify 项目、保障表单安全、理解网站表现，以及生成经授权的 Search Console 报告。数据只在完成这些目的、处理争议或满足法律要求所需的时间内保存。",
          "除提供网站托管、分析和邮件发送所必需的服务商外，我们不会共享个人信息。服务商按照各自条款处理必要数据。若数据处理方式发生实质变化，我们会先更新本政策，并在需要时重新取得授权。",
        ],
      },
      {
        title: "6. 安全、撤销与数据请求",
        paragraphs: [
          "我们采取合理措施保护凭据、表单信息和报告，但任何互联网传输或存储方式都无法保证绝对安全。",
          "你可以随时在 Google 账号的第三方连接页面撤销 WhaleLeap GSC Reader 的访问权限。你也可以通过邮件申请查看、更正或删除你提供的信息及本地保存的相关 Google API 数据；我们会在核实请求后处理。",
        ],
      },
      {
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
        title: "1. Who handles this information",
        paragraphs: [
          "WhaleLeap Studio operates this website and WhaleLeap GSC Reader. For privacy questions or requests to access or delete data, email liaoshenyuan1999053@gmail.com.",
        ],
      },
      {
        title: "2. Information handled by the website",
        paragraphs: [
          "When you submit the Free Shopify Review or contact form, we may receive your store URL, product category, target market, project stage, SKU count, budget, timeline, problem description, email, WeChat ID, submission page, referrer, and UTM parameters.",
          "The form endpoint temporarily reads an IP address to limit repeated submissions and prevent abuse. The IP address is not included in inquiry emails or GSC reports. Your browser also stores a language preference locally to switch between the Chinese and English versions of the site.",
        ],
      },
      {
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
        title: "5. Purposes, retention, and sharing",
        paragraphs: [
          "We use information to respond to inquiries, assess Shopify projects, protect the form from abuse, understand website performance, and create authorized Search Console reports. Data is retained only as long as reasonably needed for these purposes, dispute handling, or legal requirements.",
          "We do not share personal information except with providers needed for hosting, analytics, and email delivery. Those providers process necessary information under their own terms. If our handling of data changes materially, we will update this policy first and request renewed authorization where required.",
        ],
      },
      {
        title: "6. Security, revocation, and data requests",
        paragraphs: [
          "We take reasonable measures to protect credentials, form information, and reports, but no internet transmission or storage method can guarantee absolute security.",
          "You can revoke WhaleLeap GSC Reader access at any time from your Google Account's third-party connections page. You may also email us to request access, correction, or deletion of information you provided and related Google API data stored locally. We will process the request after verification.",
        ],
      },
      {
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
        <section className="relative overflow-hidden border-b border-white/8 bg-[#020403] px-4 pb-16 pt-32 sm:px-6 md:px-10 md:pb-20 md:pt-40">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_8%,rgba(119,252,117,0.16),transparent_34%),radial-gradient(ellipse_at_82%_20%,rgba(34,211,238,0.1),transparent_32%)]" />
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.11] [background-image:radial-gradient(circle,rgba(119,252,117,0.45)_1px,transparent_1.3px)] [background-size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_84%)]" />

          <div className="relative mx-auto max-w-[1500px]">
            <div className="max-w-4xl">
              <p className="font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary">{text.eyebrow}</p>
              <h1 className="mt-5 font-display text-[clamp(3rem,7vw,7rem)] font-bold leading-[0.94] tracking-[-0.055em] text-white">{text.title}</h1>
              <p className="mt-7 max-w-3xl text-base leading-[1.8] text-white/68 md:text-lg">{text.intro}</p>
              <p className="mt-5 font-mono text-base tracking-[0.02em] text-white/45">{text.updated}</p>
            </div>

            <div className="mt-12 grid gap-3 md:grid-cols-3">
              {text.summary.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex min-w-0 items-start gap-4 rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
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
        </section>

        <section className="bg-black px-4 py-[50px] sm:px-6 md:px-10 md:py-[100px]">
          <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(145deg,rgba(119,252,117,0.09),rgba(255,255,255,0.025))] p-6 md:p-8">
                <span className="flex size-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary"><ShieldCheck className="size-6" /></span>
                <p className="mt-6 font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary">WhaleLeap GSC Reader</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight text-white md:text-3xl">{language === "zh" ? "只读访问，明确用途，本地保存。" : "Read-only access, clear purpose, local storage."}</h2>
                <p className="mt-5 text-base leading-[1.8] text-white/58">{language === "zh" ? "工具只读取你已授权的 Search Console 数据，不会修改资源，也不会把报告自动传给第三方分析平台。" : "The tool only reads Search Console data you authorize. It does not modify resources or automatically send reports to third-party analysis platforms."}</p>
                <a href="#gsc-reader" className="mt-6 inline-flex min-h-11 items-center rounded-full border border-white/12 px-5 text-base font-semibold text-white transition-colors hover:border-primary/35 hover:bg-primary/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
                  {language === "zh" ? "查看 Google 数据说明" : "Read the Google data disclosure"}
                </a>
              </div>
            </aside>

            <div className="min-w-0 divide-y divide-white/10">
              {text.sections.map((section) => (
                <article key={section.title} id={section.id} className="scroll-mt-28 py-8 first:pt-0 md:py-10">
                  <h2 className="text-2xl font-semibold leading-tight tracking-[-0.025em] text-white md:text-3xl">{section.title}</h2>
                  <div className="mt-5 grid gap-4">
                    {section.paragraphs.map((paragraph) => <p key={paragraph} className="text-base leading-[1.85] text-white/62">{paragraph}</p>)}
                  </div>
                  {section.links && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {section.links.map((link) => (
                        <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-full border border-white/10 bg-white/[0.035] px-4 text-base text-white/68 transition-colors hover:border-primary/30 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              ))}
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
