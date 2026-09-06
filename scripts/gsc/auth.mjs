import crypto from "node:crypto"
import http from "node:http"
import { spawn } from "node:child_process"

import { loadLocalEnv, requireEnv, writeLocalEnvValue } from "./env.mjs"

loadLocalEnv()
requireEnv(["GSC_CLIENT_ID", "GSC_CLIENT_SECRET"])

const clientId = process.env.GSC_CLIENT_ID
const clientSecret = process.env.GSC_CLIENT_SECRET
const port = Number(process.env.GSC_OAUTH_PORT || 53682)
const redirectUri = `http://127.0.0.1:${port}/oauth2/callback`
const state = crypto.randomBytes(24).toString("hex")
const scope = "https://www.googleapis.com/auth/webmasters.readonly"

const authorizationUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth")
authorizationUrl.search = new URLSearchParams({
  client_id: clientId,
  redirect_uri: redirectUri,
  response_type: "code",
  scope,
  access_type: "offline",
  prompt: "consent",
  include_granted_scopes: "true",
  state,
}).toString()

function openBrowser(url) {
  const command = process.platform === "darwin" ? "open" : process.platform === "win32" ? "cmd" : "xdg-open"
  const args = process.platform === "win32" ? ["/c", "start", "", url] : [url]
  const child = spawn(command, args, { detached: true, stdio: "ignore" })
  child.unref()
}

const result = await new Promise((resolve, reject) => {
  const timeout = setTimeout(() => {
    server.close()
    reject(new Error("OAuth authorization timed out after 5 minutes. Run npm run gsc:auth again."))
  }, 5 * 60 * 1000)

  const server = http.createServer(async (request, response) => {
    const requestUrl = new URL(request.url, redirectUri)
    if (requestUrl.pathname !== "/oauth2/callback") {
      response.writeHead(404).end("Not found")
      return
    }

    try {
      if (requestUrl.searchParams.get("state") !== state) throw new Error("OAuth state mismatch")
      if (requestUrl.searchParams.get("error")) throw new Error(`Google OAuth error: ${requestUrl.searchParams.get("error")}`)
      const code = requestUrl.searchParams.get("code")
      if (!code) throw new Error("Google did not return an authorization code")

      const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ code, client_id: clientId, client_secret: clientSecret, redirect_uri: redirectUri, grant_type: "authorization_code" }),
      })
      const token = await tokenResponse.json()
      if (!tokenResponse.ok) throw new Error(token.error_description || token.error || `Token exchange failed (${tokenResponse.status})`)
      if (!token.refresh_token) throw new Error("Google did not return a refresh token. Revoke the app grant and run authorization again with consent.")

      writeLocalEnvValue("GSC_REFRESH_TOKEN", token.refresh_token)
      response.writeHead(200, { "content-type": "text/html; charset=utf-8" })
      response.end("<h1>WhaleLeap GSC authorization complete</h1><p>The refresh token was stored in .env.local. You can close this tab.</p>")
      resolve(true)
    } catch (error) {
      response.writeHead(400, { "content-type": "text/plain; charset=utf-8" })
      response.end("Authorization failed. Return to the terminal for details.")
      reject(error)
    } finally {
      clearTimeout(timeout)
      server.close()
    }
  })

  server.on("error", reject)
  server.listen(port, "127.0.0.1", () => {
    console.log(`Opening Google OAuth consent. If it does not open, visit:\n${authorizationUrl.toString()}\n`)
    console.log(`Using the Desktop app loopback callback: ${redirectUri}`)
    openBrowser(authorizationUrl.toString())
  })
})

if (result) {
  console.log("Authorization complete. GSC_REFRESH_TOKEN is stored in .env.local and will not be committed.")
  console.log("If the OAuth app remains in Testing status, Google expires this refresh token after 7 days. See README.md before scheduling unattended reports.")
}
