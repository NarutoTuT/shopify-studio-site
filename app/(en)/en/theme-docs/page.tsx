import Link from "next/link"

export const metadata = {
  title: "WhaleLeap Custom Theme documentation",
  description: "Setup, editing, media, filters, gift cards, and support for WhaleLeap Custom Theme.",
}

const questions = [
  ["Why are demo images missing?", "Demo store media does not transfer when you install a theme. Upload your own images and select them in the theme editor."],
  ["Why is a support link missing?", "Create and publish a contact page, then select it in Theme settings → Support."],
  ["Why are filters missing?", "Configure filters in Shopify Search & Discovery and ensure products have matching data."],
  ["Can I use video and 3D models?", "Yes. Add supported media to a product in Shopify Admin, then check its gallery on desktop and mobile."],
  ["Why is an app block empty?", "Install and configure the related app, then enable its block in the theme editor."],
]

export default function ThemeDocsPage() {
  return <main className="mx-auto max-w-4xl px-6 py-16 text-white">
    <p className="text-sm uppercase tracking-widest text-lime-300">WhaleLeap Studio · Version 1.0.0</p>
    <h1 className="mt-4 text-4xl font-bold">WhaleLeap Custom Theme documentation</h1>
    <p className="mt-6 text-lg text-zinc-300">Set up your store, replace demo content, and configure the theme’s key features.</p>
    <div className="mt-8"><Link className="inline-block rounded-lg bg-lime-300 px-5 py-3 font-semibold text-black" href="/en/theme-support">Contact theme support</Link></div>
    <section className="mt-16 space-y-5"><h2 className="text-2xl font-bold">Get started</h2>
      <ol className="list-decimal space-y-3 pl-6 text-zinc-300">
        <li>Add the theme and open Online Store → Themes → Customize.</li>
        <li>Create a contact page. Under Theme settings → Support, select it as the support page.</li>
        <li>Upload your logo, favicon, and page images. Demo store media does not transfer.</li>
        <li>Set up your header and footer menus, then check each link.</li>
        <li>Add products, collections, policies, and contact information. Replace demonstration copy before publishing.</li>
      </ol>
    </section>
    <section className="mt-14 space-y-4"><h2 className="text-2xl font-bold">Templates and sections</h2>
      <p className="text-zinc-300">Use the page selector in Customize to edit Home, Product, Collection, Search, Cart, Page, Contact, Blog, Article, 404, and collection-list templates. Each section exposes its content and styling settings in the sidebar.</p>
      <p className="text-zinc-300">Custom Liquid accepts your own Liquid and HTML. Featured product lets you choose a product and add app or Custom Liquid blocks. App blocks require their app to be installed and enabled. Duplicate your theme before changing theme code.</p>
    </section>
    <section className="mt-14 space-y-4"><h2 className="text-2xl font-bold">Products and media</h2>
      <p className="text-zinc-300">Add product images, Shopify-hosted video, and supported 3D models in Shopify Admin. Configure product options and the add-to-cart button in Product main. Review every gallery on desktop and mobile.</p>
      <p className="text-zinc-300">The default product template contains electric-bike demonstration copy in optional sections. Replace or disable these sections for other products. Gift card products hide bike-specific sections and show recipient fields where Shopify supports them.</p>
    </section>
    <section className="mt-14 space-y-4"><h2 className="text-2xl font-bold">Search, filters, and cart</h2>
      <p className="text-zinc-300">Configure storefront filters in Shopify Search & Discovery. Search and collection pages use your store’s filter data. After installation, check cart upsell products and collections because demo store products do not transfer.</p>
    </section>
    <section className="mt-14"><h2 className="text-2xl font-bold">FAQ</h2><dl className="mt-5 space-y-6">{questions.map(([question, answer]) => <div key={question}><dt className="font-semibold">{question}</dt><dd className="mt-1 text-zinc-300">{answer}</dd></div>)}</dl></section>
    <section className="mt-14 border-t border-white/15 pt-8"><h2 className="text-2xl font-bold">Support</h2><p className="mt-3 text-zinc-300">We answer theme-related questions within two business days and address critical theme defects promptly. Include your store URL, affected page, reproduction steps, and a screenshot when possible. Custom code and third-party apps may require separate assistance.</p><Link className="mt-5 inline-block text-lime-300 underline" href="/en/theme-support">Open the theme support form</Link></section>
  </main>
}
