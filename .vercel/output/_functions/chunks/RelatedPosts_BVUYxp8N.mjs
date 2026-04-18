import { c as createComponent } from './astro-component_CeAmlBsb.mjs';
import 'piccolore';
import { m as maybeRenderHead, a as addAttribute, r as renderTemplate } from './entrypoint_mb6Ro_Qb.mjs';
import 'clsx';

const $$RelatedPosts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$RelatedPosts;
  const { currentPost, allPosts, locale } = Astro2.props;
  function score(post) {
    let s = 0;
    if (post.data.category === currentPost.data.category) s += 5;
    const sharedCoins = (post.data.coinSymbols ?? []).filter(
      (c) => (currentPost.data.coinSymbols ?? []).includes(c)
    );
    s += sharedCoins.length * 3;
    const sharedTags = (post.data.tags ?? []).filter(
      (tag) => (currentPost.data.tags ?? []).includes(tag)
    );
    s += sharedTags.length;
    return s;
  }
  const related = allPosts.filter((p) => p.id !== currentPost.id && p.data.locale === currentPost.data.locale).map((p) => ({ post: p, score: score(p) })).sort((a, b) => b.score - a.score || new Date(b.post.data.date).getTime() - new Date(a.post.data.date).getTime()).slice(0, 3).map((p) => p.post);
  function postUrl(post) {
    const slugPath = post.id.replace(/^(de|en)\//, "").replace(/\.mdx?$/, "");
    return locale === "de" ? `/blog/${slugPath}/` : `/en/blog/${slugPath}/`;
  }
  return renderTemplate`${related.length > 0 && renderTemplate`${maybeRenderHead()}<aside class="related-posts" aria-labelledby="related-heading" data-astro-cid-dpgbfi7r><h2 id="related-heading" class="related-title" data-astro-cid-dpgbfi7r>${locale === "de" ? "Verwandte Artikel" : "Related Posts"}</h2><ul class="related-list" role="list" data-astro-cid-dpgbfi7r>${related.map((post) => {
    const formattedDate = new Intl.DateTimeFormat(locale === "de" ? "de-DE" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    }).format(new Date(post.data.date));
    return renderTemplate`<li class="related-item" role="listitem" data-astro-cid-dpgbfi7r><a${addAttribute(postUrl(post), "href")} class="related-link" data-astro-cid-dpgbfi7r><div class="related-content" data-astro-cid-dpgbfi7r><div class="related-meta" data-astro-cid-dpgbfi7r><span class="related-category" data-astro-cid-dpgbfi7r>${post.data.category}</span>${post.data.coinSymbols?.map((s) => renderTemplate`<span class="related-coin" data-astro-cid-dpgbfi7r>${s}</span>`)}</div><h3 class="related-post-title" data-astro-cid-dpgbfi7r>${post.data.title}</h3><div class="related-footer" data-astro-cid-dpgbfi7r><time${addAttribute(new Date(post.data.date).toISOString(), "datetime")} class="related-date" data-astro-cid-dpgbfi7r>${formattedDate}</time>${post.data.readingTime && renderTemplate`<span class="related-read-time" data-astro-cid-dpgbfi7r>${post.data.readingTime} min</span>`}</div></div><svg class="related-arrow" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-astro-cid-dpgbfi7r><path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" data-astro-cid-dpgbfi7r></path></svg></a></li>`;
  })}</ul></aside>`}`;
}, "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/components/RelatedPosts.astro", void 0);

export { $$RelatedPosts as $ };
