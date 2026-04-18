import { c as createComponent } from './astro-component_CeAmlBsb.mjs';
import 'piccolore';
import { c as renderComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute } from './entrypoint_mb6Ro_Qb.mjs';
import { g as getEntry, r as renderEntry, a as getCollection } from './_astro_content_6Z2avJH-.mjs';
import { s as siteConfig, $ as $$BaseLayout } from './BaseLayout_D5KUvymS.mjs';
import { $ as $$RelatedPosts } from './RelatedPosts_BVUYxp8N.mjs';

const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) return Astro2.redirect("/en/blog/");
  const post = await getEntry("blog", `en/${slug}`);
  if (!post || post.data.draft) {
    return new Response(null, { status: 404, statusText: "Not found" });
  }
  const { title, description, date, author, category, tags, image, imageAlt, readingTime, coinSymbols } = post.data;
  const { Content } = await renderEntry(post);
  const allPosts = await getCollection("blog", (p) => !p.data.draft && p.data.locale === "en");
  const postUrl = `${siteConfig.url}/en/blog/${Astro2.params.slug}/`;
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: postUrl,
    datePublished: new Date(date).toISOString(),
    dateModified: new Date(date).toISOString(),
    author: { "@type": "Person", name: author },
    publisher: { "@type": "Organization", name: "KryptoWatch", logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.svg` } },
    image: image ? `${siteConfig.url}${image}` : `${siteConfig.url}${siteConfig.ogImage}`,
    keywords: [...tags ?? [], ...coinSymbols ?? []].join(", "),
    articleSection: category,
    inLanguage: "en-US",
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl }
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric" }).format(new Date(date));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${title} | KryptoWatch`, "description": description, "locale": "en", "schema": blogPostSchema, "canonical": postUrl, "ogImage": image ?? siteConfig.ogImage, "breadcrumbs": [
    { name: "KryptoWatch", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/en/blog/` },
    { name: title, url: postUrl }
  ], "data-astro-cid-zskweizq": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="post-page" itemscope itemtype="https://schema.org/BlogPosting" data-astro-cid-zskweizq> <div class="post-breadcrumb" data-astro-cid-zskweizq> <div class="container" data-astro-cid-zskweizq> <nav aria-label="Breadcrumb" data-astro-cid-zskweizq> <a href="/en/" data-astro-cid-zskweizq>KryptoWatch</a> <span aria-hidden="true" data-astro-cid-zskweizq>/</span> <a href="/en/blog/" data-astro-cid-zskweizq>Blog</a> <span aria-hidden="true" data-astro-cid-zskweizq>/</span> <span aria-current="page" data-astro-cid-zskweizq>${title}</span> </nav> </div> </div> <header class="post-header" data-astro-cid-zskweizq> <div class="container post-header-inner" data-astro-cid-zskweizq> <div class="post-meta-top" data-astro-cid-zskweizq> <a${addAttribute(`/en/blog/?cat=${category}`, "href")} class="badge badge-brand" data-astro-cid-zskweizq>${category}</a> ${coinSymbols?.map((s) => renderTemplate`<span class="badge badge-bitcoin" data-astro-cid-zskweizq>${s}</span>`)} ${readingTime && renderTemplate`<span class="post-reading-time" data-astro-cid-zskweizq>⏱ ${readingTime} min read</span>`} </div> <h1 class="post-title" itemprop="headline" data-astro-cid-zskweizq>${title}</h1> <p class="post-description" data-astro-cid-zskweizq>${description}</p> <div class="post-author-row" data-astro-cid-zskweizq> <div class="post-author-avatar" aria-hidden="true" data-astro-cid-zskweizq>${author.charAt(0)}</div> <div data-astro-cid-zskweizq> <span class="post-author-name" itemprop="author" data-astro-cid-zskweizq>${author}</span> <time class="post-date"${addAttribute(new Date(date).toISOString(), "datetime")} itemprop="datePublished" data-astro-cid-zskweizq>${formattedDate}</time> </div> <div class="post-share" aria-label="Share article" data-astro-cid-zskweizq> <a${addAttribute(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(postUrl)}`, "href")} target="_blank" rel="noopener noreferrer" class="share-btn" aria-label="Share on Twitter" data-astro-cid-zskweizq>𝕏</a> <a${addAttribute(`https://t.me/share/url?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(title)}`, "href")} target="_blank" rel="noopener noreferrer" class="share-btn" aria-label="Share on Telegram" data-astro-cid-zskweizq>✈</a> </div> </div> </div> </header> ${image && renderTemplate`<div class="post-featured-image" data-astro-cid-zskweizq> <div class="container" data-astro-cid-zskweizq> <img${addAttribute(image, "src")}${addAttribute(imageAlt ?? title, "alt")} width="1200" height="630" class="featured-img" itemprop="image" data-astro-cid-zskweizq> </div> </div>`} <div class="post-body" data-astro-cid-zskweizq> <div class="container post-layout" data-astro-cid-zskweizq> <div class="post-content prose-crypto" itemprop="articleBody" data-astro-cid-zskweizq> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-zskweizq": true })} <div class="post-disclaimer" role="note" data-astro-cid-zskweizq> <strong data-astro-cid-zskweizq>⚠️ Disclaimer:</strong> This article does not constitute investment advice. Cryptocurrencies are highly volatile assets with significant risk of loss.
</div> ${tags && tags.length > 0 && renderTemplate`<div class="post-tags" aria-label="Tags" data-astro-cid-zskweizq> ${tags.map((tag) => renderTemplate`<a${addAttribute(`/en/blog/?tag=${tag}`, "href")} class="tag-chip" data-astro-cid-zskweizq>#${tag}</a>`)} </div>`} </div> <aside class="post-sidebar" aria-label="Sidebar" data-astro-cid-zskweizq> <div class="sidebar-card" data-astro-cid-zskweizq> <h3 class="sidebar-card-title" data-astro-cid-zskweizq>Table of Contents</h3> <p style="font-size: 0.85rem; color: var(--color-text-muted);" data-astro-cid-zskweizq>Navigate the article using the headings.</p> </div> <div class="sidebar-card sidebar-newsletter" data-astro-cid-zskweizq> <div class="newsletter-icon" data-astro-cid-zskweizq>📬</div> <h3 class="sidebar-card-title" data-astro-cid-zskweizq>Crypto Newsletter</h3> <p class="sidebar-newsletter-desc" data-astro-cid-zskweizq>Daily top crypto news in your inbox.</p> <form id="sidebar-nl-en" aria-label="Newsletter signup" data-astro-cid-zskweizq> <input type="email" placeholder="your@email.com" class="form-input" required aria-label="Email" data-astro-cid-zskweizq> <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 0.5rem;" data-astro-cid-zskweizq>Subscribe</button> </form> </div> ${coinSymbols && coinSymbols.length > 0 && renderTemplate`<div class="sidebar-card" data-astro-cid-zskweizq> <h3 class="sidebar-card-title" data-astro-cid-zskweizq>Coins Covered</h3> <div class="sidebar-coins" data-astro-cid-zskweizq> ${coinSymbols.map((s) => renderTemplate`<a${addAttribute(`/en/blog/?coin=${s}`, "href")} class="sidebar-coin-chip" data-astro-cid-zskweizq>${s}</a>`)} </div> </div>`} </aside> </div> <div class="container" data-astro-cid-zskweizq> ${renderComponent($$result2, "RelatedPosts", $$RelatedPosts, { "currentPost": post, "allPosts": allPosts, "locale": "en", "data-astro-cid-zskweizq": true })} </div> </div> </article> ` })}`;
}, "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/pages/en/blog/[slug].astro", void 0);

const $$file = "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/pages/en/blog/[slug].astro";
const $$url = "/en/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
