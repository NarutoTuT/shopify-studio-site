import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import { GoogleAnalytics } from "@/components/google-analytics"
import { SiteFooter } from "@/components/site-footer"
import { StructuredData } from "@/components/structured-data"
import "../globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://whaleleap.studio"),
  title: {
    default: "WhaleLeap Studio | Shopify Growth Engineering",
    template: "%s | WhaleLeap Studio",
  },
  description: "Shopify engineering, theme customization, conversion optimization, and analytics setup for global ecommerce brands.",
  applicationName: "WhaleLeap Studio",
  authors: [{ name: "WhaleLeap Studio" }],
  creator: "WhaleLeap Studio",
  publisher: "WhaleLeap Studio",
  alternates: {
    canonical: "/en",
    languages: { "zh-CN": "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/en",
    siteName: "WhaleLeap Studio",
    title: "WhaleLeap Studio | Shopify Growth Engineering",
    description: "Build faster, more maintainable, and conversion-ready Shopify storefronts.",
    images: [{ url: "/hero/whaleleap-growth-current-v1.webp", width: 1672, height: 941, alt: "WhaleLeap Studio Shopify Growth Engineering" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhaleLeap Studio | Shopify Growth Engineering",
    description: "Shopify engineering, CRO, and analytics for global ecommerce brands.",
    images: ["/hero/whaleleap-growth-current-v1.webp"],
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} site-min-type font-sans antialiased`}>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-foreground px-5 py-3 font-semibold text-background shadow-xl transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Skip to main content
        </a>
        <StructuredData language="en" />
        {children}
        <SiteFooter language="en" />
        <GoogleAnalytics />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
