const origin = process.env.SITE_ORIGIN || "http://localhost:3000"
const site = new URL(origin)

async function request(path) {
  const response = await fetch(new URL(path, site), { redirect: "manual" })
  return response
}

const sitemap = await request("/sitemap.xml")
if (sitemap.status !== 200) throw new Error(`sitemap.xml returned ${sitemap.status}`)
const xml = await sitemap.text()
const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname)
const internal = new Set([...paths, "/en/learn"])

for (const path of paths) {
  const response = await request(path)
  if (response.status !== 200) throw new Error(`${path}: ${response.status}`)
  const html = await response.text()
  for (const match of html.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)) {
    const href = match[1].replace(/&amp;/g, "&")
    if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) continue
    let url
    try { url = new URL(href, new URL(path, site)) } catch { continue }
    if (url.hostname === "whaleleap.studio" || url.origin === site.origin) {
      if (!url.pathname.startsWith("/_next/") && !url.pathname.startsWith("/api/")) internal.add(url.pathname.replace(/\/$/, "") || "/")
    }
  }
}

const failures = []
const urls = [...internal]
for (let i = 0; i < urls.length; i += 8) {
  await Promise.all(urls.slice(i, i + 8).map(async (path) => {
    try {
      const response = await request(path)
      if (![200, 301].includes(response.status)) failures.push(`${path}: ${response.status}`)
    } catch (error) { failures.push(`${path}: ${error.message}`) }
  }))
}
console.log(`Sitemap URLs: ${paths.length}; internal destinations: ${internal.size}; failures: ${failures.length}`)
if (failures.length) { console.error(failures.join("\n")); process.exitCode = 1 }
