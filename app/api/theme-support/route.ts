export const runtime = "nodejs"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const allowedImages = new Set(["image/png", "image/jpeg", "image/webp"])
const maxImageSize = 5 * 1024 * 1024
const attempts = new Map<string, number[]>()

function text(value: FormDataEntryValue | null, limit: number) {
  return typeof value === "string" ? value.trim().slice(0, limit) : ""
}

function limited(ip: string) {
  const now = Date.now()
  const recent = (attempts.get(ip) || []).filter((time) => now - time < 10 * 60 * 1000)
  recent.push(now)
  attempts.set(ip, recent)
  return recent.length > 5
}

async function send(apiKey: string, idempotencyKey: string, body: Record<string, unknown>) {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "Idempotency-Key": idempotencyKey },
    body: JSON.stringify(body),
  })
}

export async function POST(request: Request) {
  let data: FormData
  try { data = await request.formData() } catch { return Response.json({ message: "Invalid form submission." }, { status: 400 }) }

  if (text(data.get("companyWebsite"), 100)) return Response.json({ message: "Invalid form submission." }, { status: 400 })
  const startedAt = Number(text(data.get("startedAt"), 32))
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 1500) return Response.json({ message: "Please try again." }, { status: 400 })

  const name = text(data.get("name"), 120)
  const email = text(data.get("email"), 254)
  const storeUrl = text(data.get("storeUrl"), 500)
  const problem = text(data.get("problem"), 5000)
  if (!name || !emailPattern.test(email) || !problem) return Response.json({ message: "Complete the required fields." }, { status: 400 })
  try {
    const url = new URL(storeUrl)
    if (url.protocol !== "https:" || !url.hostname.includes(".")) throw new Error("Invalid URL")
  } catch { return Response.json({ message: "Enter a valid HTTPS Shopify store URL." }, { status: 400 }) }

  const screenshot = data.get("screenshot")
  if (screenshot !== null && !(screenshot instanceof File)) return Response.json({ message: "Invalid screenshot." }, { status: 400 })
  if (screenshot instanceof File && screenshot.size && (!allowedImages.has(screenshot.type) || screenshot.size > maxImageSize)) {
    return Response.json({ message: "Use a PNG, JPEG, or WebP screenshot no larger than 5 MB." }, { status: 400 })
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
  if (limited(ip)) return Response.json({ message: "Too many requests. Please try again later." }, { status: 429 })
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL
  const to = process.env.CONTACT_EMAIL_TO
  if (!apiKey || !from || !to) return Response.json({ message: "Support is temporarily unavailable. Please try again later." }, { status: 503 })

  const ticketId = crypto.randomUUID()
  const body = [`Reference: ${ticketId}`, `Theme: WhaleLeap Custom Theme`, `Name: ${name}`, `Email: ${email}`, `Store URL: ${storeUrl}`, "", "Issue:", problem].join("\n")
  const attachments = screenshot instanceof File && screenshot.size ? [{ filename: screenshot.name.slice(0, 120) || "screenshot", content: Buffer.from(await screenshot.arrayBuffer()).toString("base64") }] : []
  try {
    const support = await send(apiKey, `theme-support-${ticketId}`, { from, to: [to], reply_to: email, subject: `[WhaleLeap Theme Support] ${ticketId}`, text: body, attachments })
    if (!support.ok) { console.error("Theme support email rejected", support.status); return Response.json({ message: "Could not send your request. Please try again." }, { status: 502 }) }
    const receipt = await send(apiKey, `theme-support-receipt-${ticketId}`, {
      from, to: [email], reply_to: to, subject: `We received your WhaleLeap theme request (${ticketId})`,
      text: `Thank you, ${name}. We received your WhaleLeap Custom Theme support request.\n\nReference: ${ticketId}\nStore: ${storeUrl}\n\nWe aim to reply within two business days. Critical theme defects are prioritized.`,
    })
    if (!receipt.ok) console.error("Theme support receipt rejected", receipt.status, ticketId)
    return Response.json({ ticketId, receiptSent: receipt.ok })
  } catch (error) {
    console.error("Theme support submission failed", error)
    return Response.json({ message: "Could not send your request. Please try again." }, { status: 502 })
  }
}
