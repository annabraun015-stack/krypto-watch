import { c as createComponent } from './astro-component_CeAmlBsb.mjs';
import 'piccolore';
import { c as renderComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute } from './entrypoint_mb6Ro_Qb.mjs';
import { $ as $$BaseLayout } from './BaseLayout_D5KUvymS.mjs';
import { a as getCollection } from './_astro_content_6Z2avJH-.mjs';

const $$Sitemap = createComponent(async ($$result, $$props, $$slots) => {
  const dePosts = await getCollection("blog", (p) => !p.data.draft && p.data.locale === "de");
  const enPosts = await getCollection("blog", (p) => !p.data.draft && p.data.locale === "en");
  dePosts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  enPosts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  const staticPages = [
    { url: "/", label: "Startseite (DE)", lang: "de" },
    { url: "/en/", label: "Homepage (EN)", lang: "en" },
    { url: "/blog/", label: "Blog (DE)", lang: "de" },
    { url: "/en/blog/", label: "Blog (EN)", lang: "en" },
    { url: "/about-us/", label: "Über uns (DE)", lang: "de" },
    { url: "/en/about-us/", label: "About Us (EN)", lang: "en" },
    { url: "/contact-us/", label: "Kontakt (DE)", lang: "de" },
    { url: "/en/contact-us/", label: "Contact (EN)", lang: "en" },
    { url: "/privacy/", label: "Datenschutz", lang: "de" },
    { url: "/terms/", label: "AGB", lang: "de" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Sitemap – KryptoWatch", "description": "Vollständige Sitemap von KryptoWatch mit allen Seiten und Blog-Artikeln.", "locale": "de", "robots": "index, follow", "data-astro-cid-qob6xzsh": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-hero" aria-labelledby="sitemap-title" data-astro-cid-qob6xzsh> <div class="container" data-astro-cid-qob6xzsh> <h1 id="sitemap-title" class="page-hero-title" data-astro-cid-qob6xzsh>Sitemap</h1> <p class="page-hero-subtitle" data-astro-cid-qob6xzsh>Alle Seiten und Artikel im Überblick</p> </div> </section> <section class="section" data-astro-cid-qob6xzsh> <div class="container sitemap-layout" data-astro-cid-qob6xzsh> <!-- Static pages --> <div class="sitemap-section" data-astro-cid-qob6xzsh> <h2 class="sitemap-heading" data-astro-cid-qob6xzsh>📄 Seiten</h2> <ul class="sitemap-list" role="list" data-astro-cid-qob6xzsh> ${staticPages.map((p) => renderTemplate`<li role="listitem" data-astro-cid-qob6xzsh> <a${addAttribute(p.url, "href")} class="sitemap-link" data-astro-cid-qob6xzsh> <span class="lang-chip" data-astro-cid-qob6xzsh>${p.lang.toUpperCase()}</span> ${p.label} </a> </li>`)} </ul> </div> <!-- DE Blog posts --> <div class="sitemap-section" data-astro-cid-qob6xzsh> <h2 class="sitemap-heading" data-astro-cid-qob6xzsh>📝 Blog-Artikel (Deutsch)</h2> <ul class="sitemap-list" role="list" data-astro-cid-qob6xzsh> ${dePosts.map((post) => {
    const slug = post.id.replace(/^de\//, "").replace(/\.mdx?$/, "");
    const date = new Intl.DateTimeFormat("de-DE", { year: "numeric", month: "short", day: "numeric" }).format(new Date(post.data.date));
    return renderTemplate`<li role="listitem" data-astro-cid-qob6xzsh> <a${addAttribute(`/blog/${slug}/`, "href")} class="sitemap-link" data-astro-cid-qob6xzsh> <span class="lang-chip" data-astro-cid-qob6xzsh>DE</span> <span class="sitemap-post-title" data-astro-cid-qob6xzsh>${post.data.title}</span> <span class="sitemap-date" data-astro-cid-qob6xzsh>${date}</span> </a> </li>`;
  })} </ul> </div> <!-- EN Blog posts --> <div class="sitemap-section" data-astro-cid-qob6xzsh> <h2 class="sitemap-heading" data-astro-cid-qob6xzsh>📝 Blog Articles (English)</h2> <ul class="sitemap-list" role="list" data-astro-cid-qob6xzsh> ${enPosts.map((post) => {
    const slug = post.id.replace(/^en\//, "").replace(/\.mdx?$/, "");
    const date = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "numeric" }).format(new Date(post.data.date));
    return renderTemplate`<li role="listitem" data-astro-cid-qob6xzsh> <a${addAttribute(`/en/blog/${slug}/`, "href")} class="sitemap-link" data-astro-cid-qob6xzsh> <span class="lang-chip" data-astro-cid-qob6xzsh>EN</span> <span class="sitemap-post-title" data-astro-cid-qob6xzsh>${post.data.title}</span> <span class="sitemap-date" data-astro-cid-qob6xzsh>${date}</span> </a> </li>`;
  })} </ul> </div> </div> </section> ` })}`;
}, "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/pages/sitemap.astro", void 0);

const $$file = "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/pages/sitemap.astro";
const $$url = "/sitemap";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sitemap,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
