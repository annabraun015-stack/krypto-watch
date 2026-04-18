import { c as createComponent } from './astro-component_CeAmlBsb.mjs';
import 'piccolore';
import { c as renderComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute } from './entrypoint_mb6Ro_Qb.mjs';
import { $ as $$BaseLayout } from './BaseLayout_D5KUvymS.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "404 – Seite nicht gefunden | KryptoWatch", "description": "Diese Seite existiert nicht. Kehren Sie zur KryptoWatch-Startseite zurück.", "locale": "de", "robots": "noindex, follow", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="not-found" aria-labelledby="not-found-title" data-astro-cid-zetdm5md> <div class="container not-found-inner" data-astro-cid-zetdm5md> <div class="not-found-visual" aria-hidden="true" data-astro-cid-zetdm5md> <div class="not-found-code" data-astro-cid-zetdm5md>404</div> <div class="not-found-chart" data-astro-cid-zetdm5md> ${[80, 65, 90, 45, 20, 10, 5].map((h) => renderTemplate`<div class="nf-bar"${addAttribute(`height: ${h}%`, "style")} data-astro-cid-zetdm5md></div>`)} </div> </div> <h1 id="not-found-title" class="not-found-title" data-astro-cid-zetdm5md>Seite nicht gefunden</h1> <p class="not-found-desc" data-astro-cid-zetdm5md>Diese Seite scheint wie ein illiquider Token zu sein – existiert nicht (mehr). Vielleicht wurde die URL falsch eingegeben, oder die Seite wurde verschoben.</p> <div class="not-found-actions" data-astro-cid-zetdm5md> <a href="/" class="btn btn-primary" data-astro-cid-zetdm5md>🏠 Zur Startseite</a> <a href="/blog/" class="btn btn-outline" data-astro-cid-zetdm5md>📰 Zum Blog</a> </div> <div class="not-found-suggestions" data-astro-cid-zetdm5md> <p data-astro-cid-zetdm5md>Vielleicht suchen Sie:</p> <div class="suggestion-links" role="list" data-astro-cid-zetdm5md> <a href="/blog/" class="suggestion-link" role="listitem" data-astro-cid-zetdm5md>Blog</a> <a href="/about-us/" class="suggestion-link" role="listitem" data-astro-cid-zetdm5md>Über uns</a> <a href="/contact-us/" class="suggestion-link" role="listitem" data-astro-cid-zetdm5md>Kontakt</a> <a href="/en/" class="suggestion-link" role="listitem" data-astro-cid-zetdm5md>English</a> </div> </div> </div> </section> ` })}`;
}, "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/pages/404.astro", void 0);

const $$file = "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
