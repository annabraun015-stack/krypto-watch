import { c as createComponent } from './astro-component_CeAmlBsb.mjs';
import 'piccolore';
import { c as renderComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute } from './entrypoint_mb6Ro_Qb.mjs';
import { $ as $$BaseLayout, r as renderScript, t, s as siteConfig } from './BaseLayout_D5KUvymS.mjs';

const $$ContactUs = createComponent(async ($$result, $$props, $$slots) => {
  const locale = "de";
  const tr = t(locale);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": tr.seo.contactTitle, "description": tr.seo.contactDesc, "locale": "de", "breadcrumbs": [
    { name: "KryptoWatch", url: siteConfig.url },
    { name: "Kontakt", url: `${siteConfig.url}/contact-us/` }
  ], "data-astro-cid-5c24fmmt": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-hero" aria-labelledby="contact-title" data-astro-cid-5c24fmmt> <div class="container" data-astro-cid-5c24fmmt> <div class="badge badge-brand" style="margin-bottom: 1rem;" data-astro-cid-5c24fmmt>📬 Kontakt</div> <h1 id="contact-title" class="page-hero-title" data-astro-cid-5c24fmmt>${tr.contact.title}</h1> <p class="page-hero-subtitle" data-astro-cid-5c24fmmt>${tr.contact.subtitle}</p> </div> </section> <section class="section" data-astro-cid-5c24fmmt> <div class="container contact-layout" data-astro-cid-5c24fmmt> <!-- Contact form --> <div class="contact-form-wrap" data-astro-cid-5c24fmmt> <form id="contact-form" class="contact-form" novalidate aria-label="Kontaktformular" data-astro-cid-5c24fmmt> <div class="form-status" id="form-status" role="status" aria-live="polite" hidden data-astro-cid-5c24fmmt></div> <div class="form-group" data-astro-cid-5c24fmmt> <label for="contact-name" class="form-label" data-astro-cid-5c24fmmt>${tr.contact.name}</label> <input type="text" id="contact-name" name="name" class="form-input" required autocomplete="name" placeholder="Max Mustermann" aria-required="true" data-astro-cid-5c24fmmt> </div> <div class="form-group" data-astro-cid-5c24fmmt> <label for="contact-email" class="form-label" data-astro-cid-5c24fmmt>${tr.contact.email}</label> <input type="email" id="contact-email" name="email" class="form-input" required autocomplete="email" placeholder="max@beispiel.de" aria-required="true" data-astro-cid-5c24fmmt> </div> <div class="form-group" data-astro-cid-5c24fmmt> <label for="contact-message" class="form-label" data-astro-cid-5c24fmmt>${tr.contact.message}</label> <textarea id="contact-message" name="message" class="form-input form-textarea" required rows="6" placeholder="Ihre Nachricht hier..." aria-required="true" data-astro-cid-5c24fmmt></textarea> </div> <button type="submit" id="contact-submit" class="btn btn-primary contact-submit" data-astro-cid-5c24fmmt> ${tr.contact.send} </button> </form> </div> <!-- Contact info --> <div class="contact-info" data-astro-cid-5c24fmmt> <div class="contact-info-card" data-astro-cid-5c24fmmt> <div class="contact-info-icon" aria-hidden="true" data-astro-cid-5c24fmmt>📧</div> <h3 class="contact-info-title" data-astro-cid-5c24fmmt>E-Mail</h3> <p class="contact-info-desc" data-astro-cid-5c24fmmt>Direkter Kontakt zu unserem Redaktionsteam</p> <a${addAttribute(`mailto:${siteConfig.email}`, "href")} class="contact-info-link" data-astro-cid-5c24fmmt>${siteConfig.email}</a> </div> <div class="contact-info-card" data-astro-cid-5c24fmmt> <div class="contact-info-icon" aria-hidden="true" data-astro-cid-5c24fmmt>✈️</div> <h3 class="contact-info-title" data-astro-cid-5c24fmmt>Telegram</h3> <p class="contact-info-desc" data-astro-cid-5c24fmmt>Treten Sie unserer Krypto-Community bei</p> <a${addAttribute(siteConfig.telegram, "href")} target="_blank" rel="noopener noreferrer" class="contact-info-link" data-astro-cid-5c24fmmt>@kryptowatch</a> </div> <div class="contact-info-card" data-astro-cid-5c24fmmt> <div class="contact-info-icon" aria-hidden="true" data-astro-cid-5c24fmmt>🐦</div> <h3 class="contact-info-title" data-astro-cid-5c24fmmt>Twitter / X</h3> <p class="contact-info-desc" data-astro-cid-5c24fmmt>Folgen Sie uns für aktuelle Krypto-News</p> <a${addAttribute(siteConfig.twitterHandle, "href")} target="_blank" rel="noopener noreferrer" class="contact-info-link" data-astro-cid-5c24fmmt>${siteConfig.twitter}</a> </div> <div class="contact-info-card contact-disclaimer" data-astro-cid-5c24fmmt> <p class="contact-disclaimer-text" data-astro-cid-5c24fmmt> <strong data-astro-cid-5c24fmmt>Presseanfragen:</strong> Für Presseanfragen und Medienkooperationen wenden Sie sich bitte an <a${addAttribute(`mailto:presse@krypto-watch.de`, "href")} data-astro-cid-5c24fmmt>presse@krypto-watch.de</a>.
</p> <p class="contact-disclaimer-text" style="margin-top: 0.75rem;" data-astro-cid-5c24fmmt> <strong data-astro-cid-5c24fmmt>Antwortzeiten:</strong> Wir antworten in der Regel innerhalb von 1–2 Werktagen.
</p> </div> </div> </div> </section> ` })}  ${renderScript($$result, "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/pages/contact-us.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/pages/contact-us.astro", void 0);

const $$file = "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/pages/contact-us.astro";
const $$url = "/contact-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContactUs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
