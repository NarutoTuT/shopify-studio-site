import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import { GoogleAnalytics } from "@/components/google-analytics"
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
    languages: { "zh-CN": "/", en: "/en" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/en",
    siteName: "WhaleLeap Studio",
    title: "WhaleLeap Studio | Shopify Growth Engineering",
    description: "Build faster, more maintainable, and conversion-ready Shopify storefronts.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhaleLeap Studio | Shopify Growth Engineering",
    description: "Shopify engineering, CRO, and analytics for global ecommerce brands.",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <StructuredData />
        {children}
        <GoogleAnalytics />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
