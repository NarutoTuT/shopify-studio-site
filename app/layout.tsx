import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { StructuredData } from '@/components/structured-data'
import { GoogleAnalytics } from '@/components/google-analytics'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL('https://whaleleap.studio'),
  title: {
    default: 'WhaleLeap Studio | Shopify 建站、主题定制与转化优化',
    template: '%s | WhaleLeap Studio',
  },
  description: 'WhaleLeap Studio 为跨境品牌提供 Shopify 建站、主题定制、转化率优化、GA4/GTM 数据追踪和基础 SEO 服务。',
  applicationName: 'WhaleLeap Studio',
  authors: [{ name: 'WhaleLeap Studio' }],
  creator: 'WhaleLeap Studio',
  publisher: 'WhaleLeap Studio',
  keywords: [
    'Shopify 建站',
    'Shopify 独立站建设',
    'Shopify 主题定制',
    'Shopify Liquid 开发',
    'Shopify 转化率优化',
    'Shopify GA4 GTM',
    '跨境电商建站',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: '/',
    siteName: 'WhaleLeap Studio',
    title: 'WhaleLeap Studio | Shopify 建站、主题定制与转化优化',
    description: '面向跨境品牌的 Shopify 建站、主题定制、转化率优化、GA4/GTM 数据追踪和基础 SEO 服务。',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhaleLeap Studio | Shopify 建站、主题定制与转化优化',
    description: '面向跨境品牌的 Shopify 建站、主题定制、转化率优化、GA4/GTM 数据追踪和基础 SEO 服务。',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} font-sans antialiased`}>
        <StructuredData />
        {children}
        <GoogleAnalytics />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
