import { c as createComponent } from './astro-component_CeAmlBsb.mjs';
import 'piccolore';
import { c as renderComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute } from './entrypoint_mb6Ro_Qb.mjs';
import { s as siteConfig, $ as $$BaseLayout, t, c as cryptoCategories } from './BaseLayout_D5KUvymS.mjs';
import { $ as $$CryptoTicker, a as $$MarketData, b as $$FAQ } from './FAQ_DOS78U5L.mjs';
import { $ as $$BlogCard } from './BlogCard_Bwd3q5Fd.mjs';
import { a as getCollection } from './_astro_content_6Z2avJH-.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const locale = "en";
  const tr = t(locale);
  const allPosts = await getCollection("blog", (p) => !p.data.draft && p.data.locale === "en");
  console.log(`[DEBUG EN] Total English posts found: ${allPosts.length}`);
  const sorted = allPosts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  const latestPosts = sorted.slice(0, 6);
  console.log(`[DEBUG EN] Latest posts count: ${latestPosts.length}`);
  latestPosts.forEach((p) => console.log(`- ${p.data.title} (${p.id})`));
  allPosts.filter((p) => p.data.featured).slice(0, 3);
  const homepageSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: tr.seo.homeTitle,
      description: tr.seo.homeDesc,
      url: `${siteConfig.url}/en/`,
      inLanguage: "en-US",
      isPartOf: { "@type": "WebSite", url: siteConfig.url, name: "KryptoWatch" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: tr.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a }
      }))
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": tr.seo.homeTitle, "description": tr.seo.homeDesc, "locale": "en", "schema": homepageSchema, "canonical": `${siteConfig.url}/en/`, "data-astro-cid-dhfotatx": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "CryptoTicker", $$CryptoTicker, { "data-astro-cid-dhfotatx": true })}  ${maybeRenderHead()}<section class="hero-section" aria-labelledby="hero-title" data-astro-cid-dhfotatx> <div class="hero-bg-gradient" aria-hidden="true" data-astro-cid-dhfotatx></div> <div class="hero-grid-bg" aria-hidden="true" data-astro-cid-dhfotatx></div> <div class="container hero-inner" data-astro-cid-dhfotatx> <div class="hero-content animate-fade-in-up" data-astro-cid-dhfotatx> <div class="badge badge-brand hero-badge" data-astro-cid-dhfotatx>${tr.hero.badge}</div> <h1 id="hero-title" class="hero-title" data-astro-cid-dhfotatx> ${tr.hero.title}<br data-astro-cid-dhfotatx> <span class="text-gradient-brand" data-astro-cid-dhfotatx>${tr.hero.titleHighlight}</span> </h1> <p class="hero-subtitle" data-astro-cid-dhfotatx>${tr.hero.subtitle}</p> <div class="hero-cta-row" data-astro-cid-dhfotatx> <a href="/en/blog/" class="btn btn-primary hero-btn" data-astro-cid-dhfotatx> ${tr.hero.ctaPrimary} <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-astro-cid-dhfotatx> <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" data-astro-cid-dhfotatx></path> </svg> </a> <a href="/en/about-us/" class="btn btn-outline hero-btn" data-astro-cid-dhfotatx>${tr.hero.ctaSecondary}</a> </div> <div class="hero-trust" data-astro-cid-dhfotatx> <div class="trust-item" data-astro-cid-dhfotatx> <span class="trust-num" data-astro-cid-dhfotatx>50K+</span> <span class="trust-label" data-astro-cid-dhfotatx>Monthly Readers</span> </div> <div class="trust-divider" aria-hidden="true" data-astro-cid-dhfotatx></div> <div class="trust-item" data-astro-cid-dhfotatx> <span class="trust-num" data-astro-cid-dhfotatx>500+</span> <span class="trust-label" data-astro-cid-dhfotatx>Analyses</span> </div> <div class="trust-divider" aria-hidden="true" data-astro-cid-dhfotatx></div> <div class="trust-item" data-astro-cid-dhfotatx> <span class="trust-num" data-astro-cid-dhfotatx>10+</span> <span class="trust-label" data-astro-cid-dhfotatx>Experts</span> </div> </div> </div> <div class="hero-visual animate-float" aria-hidden="true" data-astro-cid-dhfotatx> <div class="hero-chart-card" data-astro-cid-dhfotatx> <div class="chart-header" data-astro-cid-dhfotatx> <span class="chart-coin" data-astro-cid-dhfotatx>₿ Bitcoin</span> <span class="chart-price" data-astro-cid-dhfotatx>$98,432</span> <span class="chart-change pos" data-astro-cid-dhfotatx>+2.4%</span> </div> <div class="chart-bars" data-astro-cid-dhfotatx> ${[40, 60, 45, 80, 55, 90, 70, 100, 85, 95].map((h) => renderTemplate`<div class="chart-bar"${addAttribute(`height: ${h}%`, "style")} data-astro-cid-dhfotatx></div>`)} </div> <div class="chart-footer" data-astro-cid-dhfotatx> <span data-astro-cid-dhfotatx>24h</span> <span class="chart-vol" data-astro-cid-dhfotatx>Vol: $142B</span> </div> </div> <div class="hero-stat-card" style="top: -1rem; right: -2rem;" data-astro-cid-dhfotatx> <span class="stat-emoji" data-astro-cid-dhfotatx>📈</span> <div data-astro-cid-dhfotatx> <div class="stat-num" data-astro-cid-dhfotatx>+127%</div> <div class="stat-label" data-astro-cid-dhfotatx>YTD Return</div> </div> </div> <div class="hero-stat-card" style="bottom: 2rem; left: -2.5rem;" data-astro-cid-dhfotatx> <span class="stat-emoji" data-astro-cid-dhfotatx>🔗</span> <div data-astro-cid-dhfotatx> <div class="stat-num" data-astro-cid-dhfotatx>$98.5B</div> <div class="stat-label" data-astro-cid-dhfotatx>DeFi TVL</div> </div> </div> </div> </div> </section>  <section class="section market-section" aria-labelledby="market-en-heading" data-astro-cid-dhfotatx> <div class="container" data-astro-cid-dhfotatx> <div class="section-header" data-astro-cid-dhfotatx> <p class="section-label" aria-hidden="true" data-astro-cid-dhfotatx>📊 Live Data</p> <h2 id="market-en-heading" class="section-title" data-astro-cid-dhfotatx>${tr.sections.marketData}</h2> <p class="section-subtitle" data-astro-cid-dhfotatx>${tr.sections.marketDataSubtitle}</p> </div> ${renderComponent($$result2, "MarketData", $$MarketData, { "locale": locale, "data-astro-cid-dhfotatx": true })} </div> </section>  ${latestPosts.length > 0 && renderTemplate`<section class="section" aria-labelledby="latest-en-heading" data-astro-cid-dhfotatx> <div class="container" data-astro-cid-dhfotatx> <div class="section-header" data-astro-cid-dhfotatx> <p class="section-label" aria-hidden="true" data-astro-cid-dhfotatx>🔥 Breaking</p> <h2 id="latest-en-heading" class="section-title" data-astro-cid-dhfotatx>${tr.sections.latestNews}</h2> <p class="section-subtitle" data-astro-cid-dhfotatx>${tr.sections.latestNewsSubtitle}</p> </div> <div class="blog-grid" role="list" data-astro-cid-dhfotatx> ${latestPosts.map((post) => renderTemplate`<div role="listitem" data-astro-cid-dhfotatx>${renderComponent($$result2, "BlogCard", $$BlogCard, { "post": post, "locale": locale, "data-astro-cid-dhfotatx": true })}</div>`)} </div> <div class="view-all-wrap" data-astro-cid-dhfotatx> <a href="/en/blog/" class="btn btn-outline" data-astro-cid-dhfotatx>${tr.sections.viewAll} →</a> </div> </div> </section>`} <section class="section" aria-labelledby="cats-en-heading" data-astro-cid-dhfotatx> <div class="container" data-astro-cid-dhfotatx> <div class="section-header" data-astro-cid-dhfotatx> <p class="section-label" aria-hidden="true" data-astro-cid-dhfotatx>🪙 Categories</p> <h2 id="cats-en-heading" class="section-title" data-astro-cid-dhfotatx>${tr.sections.marketCategories}</h2> <p class="section-subtitle" data-astro-cid-dhfotatx>${tr.sections.marketCategoriesSubtitle}</p> </div> <div class="categories-grid" role="list" data-astro-cid-dhfotatx> ${cryptoCategories.map((cat) => renderTemplate`<a${addAttribute(`/en/blog/?cat=${cat.slug}`, "href")} class="category-card" role="listitem"${addAttribute(`--cat-color: ${cat.color}`, "style")} data-astro-cid-dhfotatx> <span class="cat-emoji" aria-hidden="true" data-astro-cid-dhfotatx>${cat.emoji}</span> <span class="cat-name" data-astro-cid-dhfotatx>${tr.categories[cat.slug] ?? cat.slug}</span> </a>`)} </div> </div> </section>  <section class="section how-section" aria-labelledby="how-en-heading" data-astro-cid-dhfotatx> <div class="container" data-astro-cid-dhfotatx> <div class="section-header" data-astro-cid-dhfotatx> <p class="section-label" aria-hidden="true" data-astro-cid-dhfotatx>🧠 Process</p> <h2 id="how-en-heading" class="section-title" data-astro-cid-dhfotatx>${tr.sections.howItWorks}</h2> <p class="section-subtitle" data-astro-cid-dhfotatx>${tr.sections.howItWorksSubtitle}</p> </div> <div class="how-grid" role="list" data-astro-cid-dhfotatx> ${tr.howItWorks.map((step) => renderTemplate`<div class="how-card" role="listitem" data-astro-cid-dhfotatx> <div class="how-step-num" aria-hidden="true" data-astro-cid-dhfotatx>${step.step}</div> <h3 class="how-title" data-astro-cid-dhfotatx>${step.title}</h3> <p class="how-desc" data-astro-cid-dhfotatx>${step.desc}</p> </div>`)} </div> </div> </section>  <section class="section" aria-labelledby="faq-en-heading" data-astro-cid-dhfotatx> <div class="container" data-astro-cid-dhfotatx> <div class="section-header" data-astro-cid-dhfotatx> <p class="section-label" aria-hidden="true" data-astro-cid-dhfotatx>❓ FAQ</p> <h2 id="faq-en-heading" class="section-title" data-astro-cid-dhfotatx>${tr.sections.faq}</h2> <p class="section-subtitle" data-astro-cid-dhfotatx>${tr.sections.faqSubtitle}</p> </div> ${renderComponent($$result2, "FAQ", $$FAQ, { "faqs": tr.faq, "locale": locale, "data-astro-cid-dhfotatx": true })} </div> </section> ` })}`;
}, "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/pages/en/index.astro", void 0);

const $$file = "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
