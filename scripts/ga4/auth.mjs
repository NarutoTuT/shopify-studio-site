import crypto from "node:crypto"
import http from "node:http"

import { loadLocalEnv, requireEnv, writeLocalEnvValue } from "../gsc/env.mjs"

loadLocalEnv()
requireEnv(["GSC_CLIENT_ID", "GSC_CLIENT_SECRET"])

const clientId = process.env.GSC_CLIENT_ID
const clientSecret = process.env.GSC_CLIENT_SECRET
const port = Number(process.env.GA4_OAUTH_PORT || 53683)
const redirectUri = `http://127.0.0.1:${port}/oauth2/callback`
const state = crypto.randomBytes(24).toString("hex")
const scope = "https://www.googleapis.com/auth/analytics.readonly"

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

const result = await new Promise((resolve, reject) => {
  const timeout = setTimeout(() => {
    server.close()
    reject(new Error("GA4 OAuth authorization timed out after 5 minutes."))
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
      if (!token.refresh_token) throw new Error("Google did not return a refresh token")

      writeLocalEnvValue("GA4_REFRESH_TOKEN", token.refresh_token)
      response.writeHead(200, { "content-type": "text/html; charset=utf-8" })
      response.end("<h1>WhaleLeap GA4 read-only authorization complete</h1><p>The refresh token was stored locally. You can close this tab.</p>")
      resolve(true)
    } catch (error) {
      response.writeHead(400, { "content-type": "text/plain; charset=utf-8" })
      response.end("Authorization failed. Return to Codex for details.")
      reject(error)
    } finally {
      clearTimeout(timeout)
      server.close()
    }
  })

  server.on("error", reject)
  server.listen(port, "127.0.0.1", () => {
    console.log(`GA4_AUTHORIZATION_URL=${authorizationUrl.toString()}`)
    console.log(`GA4_REDIRECT_URI=${redirectUri}`)
  })
})

if (result) console.log("GA4 read-only authorization complete. The refresh token remains in .env.local.")
