有，而且你这个需求我会建议找 “Shopify Theme / Liquid 专项团队”，不一定要找做整站的大 agency。因为你要的是 OS 2.0 原生 Section + Blocks + Schema 配置，最好最后运营能直接在 Theme Editor 里改内容，而不是每次找开发。

我筛下来，下面几类比较匹配：

Yaxify：服务页面就是专门做 Custom Shopify Sections，明确写了 Shopify 2.0、merchant-editable schema、metafield、现有主题集成，甚至把 schema/settings/block 架构作为单独开发步骤。对于“已经有主题，只补几个自定义 Section”的需求，匹配度很高。
Yaxify
The Checkout Agency：更适合你后面可能持续加模块的情况。他们明确做 OS 2.0 sections/blocks，让运营可以在 Theme Editor 里增删、排序和编辑，同时强调代码和文档交付。
The Checkout Agency
Lintel：如果除了页面内容，还涉及 产品 metafields / metaobjects，比如不同 SKU 自动显示不同卖点、参数、FAQ、对比表，这类结构化内容他们的服务描述比较对口。
Lintel
Subframe：更偏“长期可维护的主题工程”，会做 reusable sections、metafields、性能控制，并强调交付 repo、文档和运营培训。如果未来想把整套 landing page 都模块化，会比较合适。
subframe.agency

如果你希望找美国本地、方便沟通的 Shopify 团队，洛杉矶这边也有几家：

MiradeWeb 做 Shopify / Shopify Plus theme customization、性能优化和 custom feature，比较适合已有店铺继续迭代。

Newthink 偏 Shopify/Shopify Plus 定制开发，一个重点就是让内部团队减少对开发人员的日常依赖。

Shopify Developers & eCommerce Website Experts | Conspire 更偏完整的 Shopify 品牌站、重构和持续支持，如果项目后续不只是几个 Section，可以考虑。

4.6
MiradeWeb
5.0
Newthink
4.7
Conspire
Use two fingers to move the map
Use ⌘ + scroll to zoom the map
MiradeWeb
4.6
•
Information services
已关闭
Newthink
5.0
•
E commerce agency
已关闭
Shopify Developers & eCommerce Website Experts | Conspire
4.7
•
Website designer
已关闭
你发需求时，建议把这几点直接写进 Scope

这样比较不容易遇到“页面做出来了，但运营还是不会用”的情况：

Native Shopify OS 2.0 Section，不要依赖 Page Builder。
每个 Section 必须支持合理的 settings + blocks。
文案、图片、按钮链接、背景、模块开关等由运营在 Theme Editor 修改。
重复内容支持 add / remove / reorder blocks。
产品级动态内容优先用 metafields / metaobjects + dynamic source，不要硬编码。
Responsive，明确 desktop / tablet / mobile 行为。
CSS/JS 不污染现有 theme，尽量复用主题已有 variables / design tokens。
Section 要有 presets，运营可以直接 Add section。
交付完整 .liquid / assets 源码，代码归你所有。
要求开发后提供一个简单的 运营使用说明或 Loom walkthrough。

比如一个“图文卖点 Section”，不要只要求：

做一个左图右文模块。

而应该定义成：

图片可替换；
eyebrow / heading / rich text 可编辑；
CTA 文案和链接可编辑；
图片左右位置可切换；
mobile 可指定图片顺序；
支持最多 6 个 icon/text blocks；
spacing / background 使用有限选项而不是任意数值；
整个 section 可在 Theme Editor 中复用。

这才是真正给运营用的组件。

如果只是做 3–10 个 Section，我会先找 Yaxify / 类似的小型 Shopify Liquid 专项团队报价，不建议一上来找大型 Shopify Plus agency。 大 agency 更适合整站重构、复杂 app/API 或长期 retainer；单纯 Section 开发，小团队通常沟通链路更短。

如果你愿意，我也可以直接帮你整理一份**“Shopify 2.0 Section 开发需求文档/询价模板”**，你把 Figma 或想做的几个模块发给开发，对方就能直接报价。

## Captured inline links
- [Yaxify: Custom Shopify Sections Development | Shopify 2.0 Section Experts | Yaxify | Yaxify.digital, https://yaxify.com/shopify-custom-sections-development?utm_source=chatgpt.com](https://yaxify.com/shopify-custom-sections-development?utm_source=chatgpt.com)
- [The Checkout Agency: Shopify Theme Development & Customization — The Checkout Agency, https://thecheckoutagency.com/services/shopify-theme-development/?utm_source=chatgpt.com](https://thecheckoutagency.com/services/shopify-theme-development/?utm_source=chatgpt.com)
- [Lintel: Shopify theme development: custom Liquid sections · Lintel, https://lintelagency.com/services/shopify-theme-development?utm_source=chatgpt.com](https://lintelagency.com/services/shopify-theme-development?utm_source=chatgpt.com)
- [subframe.agency: Custom Shopify Theme Development on Online Store 2.0, https://subframe.agency/services/development?utm_source=chatgpt.com](https://subframe.agency/services/development?utm_source=chatgpt.com)
- [Mapbox homepage](https://www.mapbox.com/)
