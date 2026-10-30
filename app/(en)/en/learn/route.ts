export function GET(request: Request) {
  return Response.redirect(new URL("/en", request.url), 301)
}
