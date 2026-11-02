import { NextRequest, NextResponse } from "next/server"

export function proxy(request: NextRequest) {
  if (request.headers.get("host")?.split(":")[0] !== "www.whaleleap.studio") return NextResponse.next()
  const destination = request.nextUrl.clone()
  destination.protocol = "https:"
  destination.hostname = "whaleleap.studio"
  destination.port = ""
  return NextResponse.redirect(destination, 301)
}

export const config = {
  matcher: "/:path*",
}
