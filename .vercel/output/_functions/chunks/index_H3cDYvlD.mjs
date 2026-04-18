import { c as createComponent } from './astro-component_CeAmlBsb.mjs';
import 'piccolore';
import { c as renderComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as Fragment } from './entrypoint_mb6Ro_Qb.mjs';
import { $ as $$BaseLayout, t, s as siteConfig } from './BaseLayout_D5KUvymS.mjs';
import { $ as $$BlogCard } from './BlogCard_Bwd3q5Fd.mjs';
import { a as getCollection } from './_astro_content_6Z2avJH-.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const locale = "de";
  const tr = t(locale);
  const page = Number(Astro2.url.searchParams.get("page") ?? "1");
  const catFilter = Astro2.url.searchParams.get("cat") ?? "";
  const PER_PAGE = siteConfig.postsPerPage;
  let allPosts = await getCollection("blog", (p) => !p.data.draft && p.data.locale === "de");
  allPosts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  if (catFilter) {
    allPosts = allPosts.filter((p) => p.data.category === catFilter);
  }
  const totalPages = Math.ceil(allPosts.length / PER_PAGE);
  const posts = allPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const allDePosts = await getCollection("blog", (p) => !p.data.draft && p.data.locale === "de");
  const categories = [...new Set(allDePosts.map((p) => p.data.category))].sort();
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "KryptoWatch Blog",
    url: `${siteConfig.url}/blog/`,
    description: tr.seo.blogDesc,
    inLanguage: "de-DE",
    blogPost: posts.slice(0, 6).map((p) => ({
      "@type": "BlogPosting",
      headline: p.data.title,
      description: p.data.description,
      datePublished: new Date(p.data.date).toISOString(),
      author: { "@type": "Person", name: p.data.author }
    }))
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": tr.seo.blogTitle, "description": tr.seo.blogDesc, "locale": "de", "schema": blogSchema, "breadcrumbs": [
    { name: "KryptoWatch", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog/` }
  ], "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="blog-hero" aria-labelledby="blog-page-title" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> <div class="badge badge-brand" style="margin-bottom: 1rem;" data-astro-cid-5tznm7mj>📰 ${tr.blog.title}</div> <h1 id="blog-page-title" class="blog-page-title" data-astro-cid-5tznm7mj>${tr.blog.title}</h1> <p class="blog-page-subtitle" data-astro-cid-5tznm7mj>${tr.blog.subtitle}</p> </div> </section>  <section class="blog-filters-section" aria-label="Blog-Filter" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> <div class="filters-row" role="group" aria-label="Kategorie-Filter" data-astro-cid-5tznm7mj> <a href="/blog/"${addAttribute(`filter-pill ${!catFilter ? "filter-pill--active" : ""}`, "class")}${addAttribute(!catFilter ? "true" : void 0, "aria-current")} data-astro-cid-5tznm7mj> ${tr.blog.allCategories} </a> ${categories.map((cat) => renderTemplate`<a${addAttribute(`/blog/?cat=${cat}`, "href")}${addAttribute(`filter-pill ${catFilter === cat ? "filter-pill--active" : ""}`, "class")}${addAttribute(catFilter === cat ? "true" : void 0, "aria-current")} data-astro-cid-5tznm7mj> ${tr.categories[cat] ?? cat} </a>`)} </div> </div> </section>  <section class="section blog-listing" aria-label="Artikel" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> ${posts.length > 0 ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-5tznm7mj": true }, { "default": async ($$result3) => renderTemplate` <div class="blog-grid" role="list" data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`<div role="listitem" data-astro-cid-5tznm7mj>${renderComponent($$result3, "BlogCard", $$BlogCard, { "post": post, "locale": locale, "data-astro-cid-5tznm7mj": true })}</div>`)} </div>  ${totalPages > 1 && renderTemplate`<nav class="pagination" aria-label="Seitennavigation" data-astro-cid-5tznm7mj> ${page > 1 && renderTemplate`<a${addAttribute(`/blog/?page=${page - 1}${catFilter ? `&cat=${catFilter}` : ""}`, "href")} class="pagination-btn" aria-label="Vorherige Seite" data-astro-cid-5tznm7mj>
← ${tr.blog.newerPosts} </a>`} <span class="pagination-info" aria-live="polite" data-astro-cid-5tznm7mj> ${tr.blog.page} ${page} ${tr.blog.of} ${totalPages} </span> ${page < totalPages && renderTemplate`<a${addAttribute(`/blog/?page=${page + 1}${catFilter ? `&cat=${catFilter}` : ""}`, "href")} class="pagination-btn" aria-label="Nächste Seite" data-astro-cid-5tznm7mj> ${tr.blog.olderPosts} →
</a>`} </nav>`}` })}` : renderTemplate`<div class="no-results" role="alert" data-astro-cid-5tznm7mj> <span aria-hidden="true" data-astro-cid-5tznm7mj>🔍</span> <p data-astro-cid-5tznm7mj>${tr.blog.noResults}</p> <a href="/blog/" class="btn btn-outline" style="margin-top: 1rem;" data-astro-cid-5tznm7mj> ${tr.blog.allCategories} </a> </div>`} </div> </section> ` })}`;
}, "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
