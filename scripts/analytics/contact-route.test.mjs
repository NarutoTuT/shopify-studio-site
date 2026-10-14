import assert from "node:assert/strict"
import test from "node:test"

const { POST } = await import("../../app/api/contact/route.ts")

function request(body, ip) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": ip },
    body: JSON.stringify(body),
  })
}

const validPayload = {
  email: "test@example.com",
  language: "en",
  startedAt: Date.now() - 5000,
  firstTouchUtmSource: "google",
  ctaSource: "service:shopify-theme-customization",
}

test("validation, honeypot, and too-fast submissions never send email", async () => {
  const originalFetch = globalThis.fetch
  let calls = 0
  globalThis.fetch = async () => { calls += 1; return new Response("{}", { status: 200 }) }
  try {
    assert.equal((await POST(request({ startedAt: Date.now() - 5000 }, "198.51.100.1"))).status, 400)
    assert.deepEqual(await (await POST(request({ ...validPayload, companyWebsite: "spam.test" }, "198.51.100.2"))).json(), { ok: true, accepted: false })
    assert.deepEqual(await (await POST(request({ ...validPayload, startedAt: Date.now() }, "198.51.100.3"))).json(), { ok: true, accepted: false })
    assert.equal(calls, 0)
  } finally {
    globalThis.fetch = originalFetch
  }
})

test("accepted submission shares one non-PII submission ID with response and notification", async () => {
  const originalFetch = globalThis.fetch
  const originalEnv = { ...process.env }
  const sent = []
  process.env.RESEND_API_KEY = "test-key"
  process.env.RESEND_FROM_EMAIL = "WhaleLeap <test@example.com>"
  process.env.CONTACT_EMAIL_TO = "inbox@example.com"
  globalThis.fetch = async (_url, init) => {
    sent.push(JSON.parse(init.body))
    return new Response("{}", { status: 200 })
  }
  try {
    const response = await POST(request(validPayload, "198.51.100.4"))
    const result = await response.json()
    assert.equal(response.status, 200)
    assert.equal(result.accepted, true)
    assert.match(result.submissionId, /^[0-9a-f-]{36}$/)
    assert.equal(sent.length, 2)
    assert.match(sent[0].text, new RegExp(result.submissionId))
    assert.match(sent[0].text, /service:shopify-theme-customization/)
  } finally {
    globalThis.fetch = originalFetch
    process.env = originalEnv
  }
})

test("notification provider failure is not reported as an accepted lead", async () => {
  const originalFetch = globalThis.fetch
  const originalEnv = { ...process.env }
  process.env.RESEND_API_KEY = "test-key"
  process.env.RESEND_FROM_EMAIL = "WhaleLeap <test@example.com>"
  globalThis.fetch = async () => new Response("provider error", { status: 500 })
  try {
    const response = await POST(request(validPayload, "198.51.100.5"))
    assert.equal(response.status, 502)
    assert.equal((await response.json()).accepted, undefined)
  } finally {
    globalThis.fetch = originalFetch
    process.env = originalEnv
  }
})
