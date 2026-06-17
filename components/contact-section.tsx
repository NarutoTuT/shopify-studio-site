import { ArrowUpRight, Mail, MessageSquare, Timer } from "lucide-react"

const checklist = [
  "产品品类、目标市场和预计 SKU 数量",
  "是否已有 Shopify 店铺、域名和品牌素材",
  "需要对接的支付、物流、ERP 或 CRM",
  "上线时间、预算范围和主要增长目标",
]

export function ContactSection() {
  const email = "liaoshenyuan1999053@gmail.com"
  const wechat = "11058895969"

  return (
    <section id="contact" className="relative overflow-hidden bg-background px-6 py-24 md:px-10 md:py-32 scroll-mt-24">
      <div className="absolute inset-x-0 top-10 mx-auto h-72 max-w-4xl rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex min-h-[520px] flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 md:p-10">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">项目诊断</p>
            <h2 className="max-w-3xl text-[clamp(2.1rem,5vw,5rem)] font-bold leading-[1.05] tracking-tight text-foreground">
              先判断你的 Shopify 站该怎么做，再报价。
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              你不需要先准备完整需求文档。把产品、市场、现有问题和上线目标发来，我们会先给出页面结构、功能范围和交付节奏建议。
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${email}?subject=Shopify%20%E5%BB%BA%E7%AB%99%E5%92%A8%E8%AF%A2`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              发送项目需求
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
            >
              回看套餐
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-4 flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Mail className="size-5" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">建议先发这些信息</h3>
            <div className="space-y-3">
              {checklist.map((item) => (
                <p key={item} className="text-sm leading-relaxed text-muted-foreground">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <MessageSquare className="mb-5 size-6 text-primary" />
              <h3 className="mb-2 text-base font-semibold text-foreground">沟通方式</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                邮箱：{email}
                <br />
                微信：{wechat}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <Timer className="mb-5 size-6 text-primary" />
              <h3 className="mb-2 text-base font-semibold text-foreground">响应节奏</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">明确需求后，通常可在 1 个工作日内给出初步范围和排期。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
