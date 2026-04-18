import { c as createComponent } from './astro-component_CeAmlBsb.mjs';
import 'piccolore';
import { c as renderComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as Fragment } from './entrypoint_mb6Ro_Qb.mjs';
import { $ as $$BaseLayout, t, s as siteConfig } from './BaseLayout_D5KUvymS.mjs';
import { $ as $$BlogCard } from './BlogCard_Bwd3q5Fd.mjs';
import { a as getCollection } from './_astro_content_6Z2avJH-.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const locale = "en";
  const tr = t(locale);
  const page = Number(Astro2.url.searchParams.get("page") ?? "1");
  const catFilter = Astro2.url.searchParams.get("cat") ?? "";
  const PER_PAGE = siteConfig.postsPerPage;
  let allPosts = await getCollection("blog", (p) => !p.data.draft && p.data.locale === "en");
  allPosts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  if (catFilter) {
    allPosts = allPosts.filter((p) => p.data.category === catFilter);
  }
  const totalPages = Math.ceil(allPosts.length / PER_PAGE);
  const posts = allPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const allEnPosts = await getCollection("blog", (p) => !p.data.draft && p.data.locale === "en");
  const categories = [...new Set(allEnPosts.map((p) => p.data.category))].sort();
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "KryptoWatch Blog",
    url: `${siteConfig.url}/en/blog/`,
    description: tr.seo.blogDesc,
    inLanguage: "en-US"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": tr.seo.blogTitle, "description": tr.seo.blogDesc, "locale": "en", "schema": blogSchema, "canonical": `${siteConfig.url}/en/blog/`, "breadcrumbs": [
    { name: "KryptoWatch", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/en/blog/` }
  ], "data-astro-cid-s63ypivo": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="blog-hero" aria-labelledby="blog-en-title" data-astro-cid-s63ypivo> <div class="container" data-astro-cid-s63ypivo> <div class="badge badge-brand" style="margin-bottom: 1rem;" data-astro-cid-s63ypivo>📰 ${tr.blog.title}</div> <h1 id="blog-en-title" class="blog-page-title" data-astro-cid-s63ypivo>${tr.blog.title}</h1> <p class="blog-page-subtitle" data-astro-cid-s63ypivo>${tr.blog.subtitle}</p> </div> </section> <section class="blog-filters-section" aria-label="Blog Filters" data-astro-cid-s63ypivo> <div class="container" data-astro-cid-s63ypivo> <div class="filters-row" role="group" aria-label="Category Filter" data-astro-cid-s63ypivo> <a href="/en/blog/"${addAttribute(`filter-pill ${!catFilter ? "filter-pill--active" : ""}`, "class")} data-astro-cid-s63ypivo> ${tr.blog.allCategories} </a> ${categories.map((cat) => renderTemplate`<a${addAttribute(`/en/blog/?cat=${cat}`, "href")}${addAttribute(`filter-pill ${catFilter === cat ? "filter-pill--active" : ""}`, "class")} data-astro-cid-s63ypivo> ${tr.categories[cat] ?? cat} </a>`)} </div> </div> </section> <section class="section blog-listing" aria-label="Articles" data-astro-cid-s63ypivo> <div class="container" data-astro-cid-s63ypivo> ${posts.length > 0 ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-s63ypivo": true }, { "default": async ($$result3) => renderTemplate` <div class="blog-grid" role="list" data-astro-cid-s63ypivo> ${posts.map((post) => renderTemplate`<div role="listitem" data-astro-cid-s63ypivo>${renderComponent($$result3, "BlogCard", $$BlogCard, { "post": post, "locale": locale, "data-astro-cid-s63ypivo": true })}</div>`)} </div> ${totalPages > 1 && renderTemplate`<nav class="pagination" aria-label="Page navigation" data-astro-cid-s63ypivo> ${page > 1 && renderTemplate`<a${addAttribute(`/en/blog/?page=${page - 1}${catFilter ? `&cat=${catFilter}` : ""}`, "href")} class="pagination-btn" data-astro-cid-s63ypivo>
← ${tr.blog.newerPosts} </a>`} <span class="pagination-info" aria-live="polite" data-astro-cid-s63ypivo> ${tr.blog.page} ${page} ${tr.blog.of} ${totalPages} </span> ${page < totalPages && renderTemplate`<a${addAttribute(`/en/blog/?page=${page + 1}${catFilter ? `&cat=${catFilter}` : ""}`, "href")} class="pagination-btn" data-astro-cid-s63ypivo> ${tr.blog.olderPosts} →
</a>`} </nav>`}` })}` : renderTemplate`<div class="no-results" role="alert" data-astro-cid-s63ypivo> <span data-astro-cid-s63ypivo>🔍</span> <p data-astro-cid-s63ypivo>${tr.blog.noResults}</p> <a href="/en/blog/" class="btn btn-outline" style="margin-top: 1rem;" data-astro-cid-s63ypivo>${tr.blog.allCategories}</a> </div>`} </div> </section> ` })}`;
}, "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/pages/en/blog/index.astro", void 0);

const $$file = "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/pages/en/blog/index.astro";
const $$url = "/en/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
