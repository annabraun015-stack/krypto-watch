import { c as createComponent } from './astro-component_CeAmlBsb.mjs';
import 'piccolore';
import { c as renderComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute } from './entrypoint_mb6Ro_Qb.mjs';
import { s as siteConfig, $ as $$BaseLayout, r as renderScript } from './BaseLayout_D5KUvymS.mjs';
import { g as getEntry, r as renderEntry, a as getCollection } from './_astro_content_6Z2avJH-.mjs';
import { $ as $$RelatedPosts } from './RelatedPosts_BVUYxp8N.mjs';

const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) return Astro2.redirect("/blog/");
  const post = await getEntry("blog", `de/${slug}`);
  if (!post || post.data.draft) {
    return new Response(null, { status: 404, statusText: "Not found" });
  }
  const { title, description, date, author, category, tags, image, imageAlt, readingTime, coinSymbols } = post.data;
  const { Content } = await renderEntry(post);
  const allPosts = await getCollection("blog", (p) => !p.data.draft && p.data.locale === "de");
  const postUrl = `${siteConfig.url}/blog/${Astro2.params.slug}/`;
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: postUrl,
    datePublished: new Date(date).toISOString(),
    dateModified: new Date(date).toISOString(),
    author: {
      "@type": "Person",
      name: author
    },
    publisher: {
      "@type": "Organization",
      name: "KryptoWatch",
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.svg` }
    },
    image: image ? `${siteConfig.url}${image}` : `${siteConfig.url}${siteConfig.ogImage}`,
    keywords: [...tags ?? [], ...coinSymbols ?? []].join(", "),
    articleSection: category,
    inLanguage: "de-DE",
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl }
  };
  const formattedDate = new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(date));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${title} | KryptoWatch`, "description": description, "locale": "de", "schema": blogPostSchema, "ogImage": image ?? siteConfig.ogImage, "breadcrumbs": [
    { name: "KryptoWatch", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog/` },
    { name: title, url: postUrl }
  ], "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="post-page" itemscope itemtype="https://schema.org/BlogPosting" data-astro-cid-4sn4zg3r> <!-- Breadcrumb visual --> <div class="post-breadcrumb" aria-label="Breadcrumb" data-astro-cid-4sn4zg3r> <div class="container" data-astro-cid-4sn4zg3r> <nav data-astro-cid-4sn4zg3r> <a href="/" data-astro-cid-4sn4zg3r>KryptoWatch</a> <span aria-hidden="true" data-astro-cid-4sn4zg3r>/</span> <a href="/blog/" data-astro-cid-4sn4zg3r>Blog</a> <span aria-hidden="true" data-astro-cid-4sn4zg3r>/</span> <span aria-current="page" data-astro-cid-4sn4zg3r>${title}</span> </nav> </div> </div> <!-- Post header --> <header class="post-header" data-astro-cid-4sn4zg3r> <div class="container post-header-inner" data-astro-cid-4sn4zg3r> <div class="post-meta-top" data-astro-cid-4sn4zg3r> <a${addAttribute(`/blog/?cat=${category}`, "href")} class="badge badge-brand post-category" data-astro-cid-4sn4zg3r>${category}</a> ${coinSymbols?.map((s) => renderTemplate`<a${addAttribute(`/blog/?cat=${category}`, "href")} class="badge badge-bitcoin post-coin"${addAttribute(`${s} Artikel`, "aria-label")} data-astro-cid-4sn4zg3r>${s}</a>`)} ${readingTime && renderTemplate`<span class="post-reading-time" data-astro-cid-4sn4zg3r> <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-astro-cid-4sn4zg3r> <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm0 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2zm0 2a.75.75 0 0 1 .75.75v3.5l2.25 1.3a.75.75 0 1 1-.75 1.299l-2.625-1.5A.75.75 0 0 1 7.25 8.75v-4A.75.75 0 0 1 8 4z" data-astro-cid-4sn4zg3r></path> </svg> ${readingTime} Min. Lesezeit
</span>`} </div> <h1 class="post-title" itemprop="headline" data-astro-cid-4sn4zg3r>${title}</h1> <p class="post-description" data-astro-cid-4sn4zg3r>${description}</p> <div class="post-author-row" data-astro-cid-4sn4zg3r> <div class="post-author-avatar" aria-hidden="true" data-astro-cid-4sn4zg3r>${author.charAt(0)}</div> <div data-astro-cid-4sn4zg3r> <span class="post-author-name" itemprop="author" itemscope itemtype="https://schema.org/Person" data-astro-cid-4sn4zg3r> <span itemprop="name" data-astro-cid-4sn4zg3r>${author}</span> </span> <time class="post-date"${addAttribute(new Date(date).toISOString(), "datetime")} itemprop="datePublished" data-astro-cid-4sn4zg3r> ${formattedDate} </time> </div> <!-- Social share --> <div class="post-share" aria-label="Artikel teilen" data-astro-cid-4sn4zg3r> <a${addAttribute(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(postUrl)}`, "href")} target="_blank" rel="noopener noreferrer" class="share-btn" aria-label="Auf Twitter teilen" data-astro-cid-4sn4zg3r>
𝕏
</a> <a${addAttribute(`https://t.me/share/url?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(title)}`, "href")} target="_blank" rel="noopener noreferrer" class="share-btn" aria-label="Auf Telegram teilen" data-astro-cid-4sn4zg3r>
✈
</a> </div> </div> </div> </header> <!-- Featured image --> ${image && renderTemplate`<div class="post-featured-image" role="img"${addAttribute(imageAlt ?? title, "aria-label")} data-astro-cid-4sn4zg3r> <div class="container" data-astro-cid-4sn4zg3r> <img${addAttribute(image, "src")}${addAttribute(imageAlt ?? title, "alt")} width="1200" height="630" class="featured-img" itemprop="image" data-astro-cid-4sn4zg3r> </div> </div>`} <!-- Post body --> <div class="post-body" data-astro-cid-4sn4zg3r> <div class="container post-layout" data-astro-cid-4sn4zg3r> <!-- Main content --> <div class="post-content prose-crypto" itemprop="articleBody" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-4sn4zg3r": true })} <!-- Disclaimer --> <div class="post-disclaimer" role="note" data-astro-cid-4sn4zg3r> <strong data-astro-cid-4sn4zg3r>⚠️ Disclaimer:</strong> Dieser Artikel stellt keine Anlageberatung dar. Kryptowährungen sind hochvolatile Anlagen mit erheblichem Verlustrisiko.
</div> <!-- Tags --> ${tags && tags.length > 0 && renderTemplate`<div class="post-tags" aria-label="Tags" data-astro-cid-4sn4zg3r> ${tags.map((tag) => renderTemplate`<a${addAttribute(`/blog/?tag=${tag}`, "href")} class="tag-chip" data-astro-cid-4sn4zg3r>#${tag}</a>`)} </div>`} </div> <!-- Sidebar --> <aside class="post-sidebar" aria-label="Sidebar" data-astro-cid-4sn4zg3r> <!-- TOC placeholder --> <div class="sidebar-card sidebar-toc" data-astro-cid-4sn4zg3r> <h3 class="sidebar-card-title" data-astro-cid-4sn4zg3r>Inhaltsverzeichnis</h3> <p class="sidebar-toc-hint" style="font-size: 0.85rem; color: var(--color-text-muted);" data-astro-cid-4sn4zg3r>Navigieren Sie durch den Artikel über die Überschriften.</p> </div> <!-- Newsletter --> <div class="sidebar-card sidebar-newsletter" data-astro-cid-4sn4zg3r> <div class="newsletter-icon" aria-hidden="true" data-astro-cid-4sn4zg3r>📬</div> <h3 class="sidebar-card-title" data-astro-cid-4sn4zg3r>Krypto-Newsletter</h3> <p class="sidebar-newsletter-desc" data-astro-cid-4sn4zg3r>Täglich die wichtigsten Krypto-Nachrichten in Ihr Postfach.</p> <form class="sidebar-newsletter-form" id="sidebar-nl" aria-label="Newsletter Anmeldung" data-astro-cid-4sn4zg3r> <input type="email" placeholder="ihre@email.de" class="form-input" required aria-label="E-Mail" data-astro-cid-4sn4zg3r> <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 0.5rem;" data-astro-cid-4sn4zg3r>Abonnieren</button> </form> </div> <!-- Coin chips if present --> ${coinSymbols && coinSymbols.length > 0 && renderTemplate`<div class="sidebar-card" data-astro-cid-4sn4zg3r> <h3 class="sidebar-card-title" data-astro-cid-4sn4zg3r>Behandelte Coins</h3> <div class="sidebar-coins" data-astro-cid-4sn4zg3r> ${coinSymbols.map((s) => renderTemplate`<a${addAttribute(`/blog/?coin=${s}`, "href")} class="sidebar-coin-chip" data-astro-cid-4sn4zg3r>${s}</a>`)} </div> </div>`} </aside> </div> <!-- Related posts --> <div class="container" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "RelatedPosts", $$RelatedPosts, { "currentPost": post, "allPosts": allPosts, "locale": "de", "data-astro-cid-4sn4zg3r": true })} </div> </div> </article> ` })}  ${renderScript($$result, "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/pages/blog/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
