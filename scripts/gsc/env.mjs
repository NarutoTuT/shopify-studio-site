import fs from "node:fs"
import path from "node:path"

const projectRoot = path.resolve(import.meta.dirname, "../..")
export const localEnvPath = path.join(projectRoot, ".env.local")

function unquote(value) {
  const trimmed = value.trim()
  if (!trimmed) return ""
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1).replace(/\\n/g, "\n").replace(/\\"/g, '"')
  }
  return trimmed
}

export function loadLocalEnv() {
  if (!fs.existsSync(localEnvPath)) return

  for (const line of fs.readFileSync(localEnvPath, "utf8").split(/\r?\n/)) {
    const match = line.match(/^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/)
    if (!match || process.env[match[1]] !== undefined) continue
    process.env[match[1]] = unquote(match[2])
  }
}

export function requireEnv(names) {
  const missing = names.filter((name) => !process.env[name]?.trim())
  if (missing.length) {
    throw new Error(`Missing ${missing.join(", ")}. Copy .env.example to .env.local and complete the GSC OAuth values.`)
  }
}

export function writeLocalEnvValue(name, value) {
  const existing = fs.existsSync(localEnvPath) ? fs.readFileSync(localEnvPath, "utf8") : ""
  const safeLine = `${name}=${JSON.stringify(value)}`
  const matcher = new RegExp(`^${name}=.*$`, "m")
  const next = matcher.test(existing)
    ? existing.replace(matcher, safeLine)
    : `${existing.trimEnd()}${existing.trim() ? "\n" : ""}${safeLine}\n`

  fs.writeFileSync(localEnvPath, next, { encoding: "utf8", mode: 0o600 })
  fs.chmodSync(localEnvPath, 0o600)
}
