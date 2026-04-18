import { c as createComponent } from './astro-component_CeAmlBsb.mjs';
import 'piccolore';
import { m as maybeRenderHead, a as addAttribute, r as renderTemplate } from './entrypoint_mb6Ro_Qb.mjs';
import 'clsx';

const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BlogCard;
  const { post, locale } = Astro2.props;
  const { title, description, date, author, category, tags, image, imageAlt, readingTime, featured, coinSymbols } = post.data;
  const slugPath = post.id.replace(/^(de|en)\//, "").replace(/\.mdx?$/, "");
  const postUrl = locale === "de" ? `/blog/${slugPath}/` : `/en/blog/${slugPath}/`;
  const formattedDate = new Intl.DateTimeFormat(locale === "de" ? "de-DE" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(date));
  const categoryColors = {
    bitcoin: "badge-bitcoin",
    ethereum: "badge-eth",
    defi: "badge-defi",
    regulation: "badge-default",
    nfts: "badge-purple",
    altcoins: "badge-pink"
  };
  const catClass = categoryColors[category] ?? "badge-default";
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`blog-card ${featured ? "blog-card--featured" : ""}`, "class")}${addAttribute(title, "aria-label")} data-astro-cid-e3grugc2> <!-- Image --> <a${addAttribute(postUrl, "href")} class="blog-card-image-wrap" tabindex="-1" aria-hidden="true" data-astro-cid-e3grugc2> ${image ? renderTemplate`<img${addAttribute(image, "src")}${addAttribute(imageAlt ?? title, "alt")} class="blog-card-image" loading="lazy" decoding="async" width="600" height="340" data-astro-cid-e3grugc2>` : renderTemplate`<div class="blog-card-image-placeholder" aria-hidden="true" data-astro-cid-e3grugc2> <span class="placeholder-coin" data-astro-cid-e3grugc2> ${category === "bitcoin" ? "₿" : category === "ethereum" ? "Ξ" : "🪙"} </span> </div>`} ${featured && renderTemplate`<div class="featured-badge" aria-label="Featured" data-astro-cid-e3grugc2>⭐ Featured</div>`} ${coinSymbols?.length > 0 && renderTemplate`<div class="coin-chips"${addAttribute(`Coins: ${coinSymbols.join(", ")}`, "aria-label")} data-astro-cid-e3grugc2> ${coinSymbols.map((s) => renderTemplate`<span class="coin-chip" data-astro-cid-e3grugc2>${s}</span>`)} </div>`} </a> <!-- Content --> <div class="blog-card-body" data-astro-cid-e3grugc2> <!-- Category + reading time --> <div class="blog-card-meta" data-astro-cid-e3grugc2> <span${addAttribute(`badge ${catClass}`, "class")} data-astro-cid-e3grugc2>${category}</span> ${readingTime && renderTemplate`<span class="reading-time" data-astro-cid-e3grugc2> <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-astro-cid-e3grugc2> <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm0 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2zm0 2a.75.75 0 0 1 .75.75v3.5l2.25 1.3a.75.75 0 1 1-.75 1.299l-2.625-1.5A.75.75 0 0 1 7.25 8.75v-4A.75.75 0 0 1 8 4z" data-astro-cid-e3grugc2></path> </svg> ${readingTime} ${locale === "de" ? "Min." : "min"} </span>`} </div> <!-- Title --> <h2 class="blog-card-title" data-astro-cid-e3grugc2> <a${addAttribute(postUrl, "href")} class="blog-card-title-link" data-astro-cid-e3grugc2>${title}</a> </h2> <!-- Description --> <p class="blog-card-desc" data-astro-cid-e3grugc2>${description}</p> <!-- Footer: author + date --> <footer class="blog-card-footer" data-astro-cid-e3grugc2> <div class="blog-card-author" data-astro-cid-e3grugc2> <div class="author-avatar" aria-hidden="true" data-astro-cid-e3grugc2>${author.charAt(0).toUpperCase()}</div> <div data-astro-cid-e3grugc2> <div class="author-name" data-astro-cid-e3grugc2>${author}</div> <time class="post-date"${addAttribute(new Date(date).toISOString(), "datetime")} data-astro-cid-e3grugc2>${formattedDate}</time> </div> </div> <a${addAttribute(postUrl, "href")} class="read-more-link"${addAttribute(`${locale === "de" ? "Weiterlesen" : "Read more"}: ${title}`, "aria-label")} data-astro-cid-e3grugc2> ${locale === "de" ? "Weiterlesen" : "Read more"} <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-astro-cid-e3grugc2> <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" data-astro-cid-e3grugc2></path> </svg> </a> </footer> </div> </article>`;
}, "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/components/BlogCard.astro", void 0);

export { $$BlogCard as $ };
