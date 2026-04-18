import { c as createComponent } from './astro-component_CeAmlBsb.mjs';
import 'piccolore';
import { c as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_mb6Ro_Qb.mjs';
import { $ as $$BaseLayout, t, s as siteConfig } from './BaseLayout_D5KUvymS.mjs';

const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  const locale = "de";
  const tr = t(locale);
  const teamMembers = [
    { name: "Dr. Marcus Richter", role: "Chefredakteur & Bitcoin-Analyst", avatar: "M", bio: "Marcus ist promovierter Ökonom mit über 10 Jahren Erfahrung in der traditionellen Finanzwelt und 7 Jahren im Krypto-Bereich." },
    { name: "Sophia Wagner", role: "Ethereum & DeFi Expertin", avatar: "S", bio: "Sophia hat Blockchain-Technologie an der ETH Zürich studiert und verfolgt das Ethereum-Ökosystem seit dem Genesis-Block." },
    { name: "Dr. Lena Kaufmann", role: "Regulierung & Compliance", avatar: "L", bio: "Lena ist Rechtsanwältin mit Spezialisierung auf Finanzmarktrecht und Krypto-Regulierung." },
    { name: "Alex Turner", role: "Markt-Analytiker", avatar: "A", bio: "Alex kombiniert technische Analyse mit On-Chain-Daten-Interpretation für präzise Markteinschätzungen." }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": tr.seo.aboutTitle, "description": tr.seo.aboutDesc, "locale": "de", "breadcrumbs": [
    { name: "KryptoWatch", url: siteConfig.url },
    { name: "Über uns", url: `${siteConfig.url}/about-us/` }
  ], "data-astro-cid-gkq7oefr": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="page-hero" aria-labelledby="about-title" data-astro-cid-gkq7oefr> <div class="container" data-astro-cid-gkq7oefr> <div class="badge badge-brand" style="margin-bottom: 1rem;" data-astro-cid-gkq7oefr>🏛️ Über uns</div> <h1 id="about-title" class="page-hero-title" data-astro-cid-gkq7oefr>${tr.about.title}</h1> <p class="page-hero-subtitle" data-astro-cid-gkq7oefr>${tr.about.subtitle}</p> </div> </section>  <section class="section" aria-labelledby="mission-heading" data-astro-cid-gkq7oefr> <div class="container about-grid" data-astro-cid-gkq7oefr> <div class="about-text" data-astro-cid-gkq7oefr> <p class="section-label" data-astro-cid-gkq7oefr>${tr.about.mission}</p> <h2 id="mission-heading" class="about-section-title" data-astro-cid-gkq7oefr>Warum KryptoWatch?</h2> <p class="about-body" data-astro-cid-gkq7oefr>${tr.about.missionText}</p> <p class="about-body" data-astro-cid-gkq7oefr>
Gegründet 2021, sind wir heute eine der führenden deutschsprachigen Krypto-Intelligence-Plattformen. Unser Team aus Ökonomen, Blockchain-Entwicklern und Juristen bringt eine einzigartige Perspektive auf den Markt.
</p> <div class="about-stats" role="list" aria-label="Kennzahlen" data-astro-cid-gkq7oefr> ${[
    { num: "2021", label: "Gründungsjahr" },
    { num: "50K+", label: "Monatliche Leser" },
    { num: "500+", label: "Analysen" },
    { num: "10", label: "Experten" }
  ].map((s) => renderTemplate`<div class="about-stat" role="listitem" data-astro-cid-gkq7oefr> <div class="about-stat-num" data-astro-cid-gkq7oefr>${s.num}</div> <div class="about-stat-label" data-astro-cid-gkq7oefr>${s.label}</div> </div>`)} </div> </div> <div class="about-visual" aria-hidden="true" data-astro-cid-gkq7oefr> <div class="about-card" data-astro-cid-gkq7oefr> <div style="font-size: 4rem; margin-bottom: 1rem;" data-astro-cid-gkq7oefr>🔍</div> <h3 style="font-family: var(--font-display); font-weight: 700; color: var(--color-text-primary); margin-bottom: 0.75rem;" data-astro-cid-gkq7oefr>Intelligence-First</h3> <p style="color: var(--color-text-secondary); font-size: 0.9375rem; line-height: 1.65;" data-astro-cid-gkq7oefr>
Wir glauben, dass fundierte Entscheidungen tiefgehende Intelligence erfordern – nicht nur Kursdaten.
</p> </div> <div class="about-card" data-astro-cid-gkq7oefr> <div style="font-size: 4rem; margin-bottom: 1rem;" data-astro-cid-gkq7oefr>⚖️</div> <h3 style="font-family: var(--font-display); font-weight: 700; color: var(--color-text-primary); margin-bottom: 0.75rem;" data-astro-cid-gkq7oefr>Unabhängig</h3> <p style="color: var(--color-text-secondary); font-size: 0.9375rem; line-height: 1.65;" data-astro-cid-gkq7oefr>
Keine versteckten Interessen. Unsere Analysen folgen der Evidenz, nicht dem Marktsentiment.
</p> </div> </div> </div> </section>  <section class="section values-section" aria-labelledby="values-heading" data-astro-cid-gkq7oefr> <div class="container" data-astro-cid-gkq7oefr> <div class="section-header" data-astro-cid-gkq7oefr> <p class="section-label" aria-hidden="true" data-astro-cid-gkq7oefr>💡 Unsere Prinzipien</p> <h2 id="values-heading" class="section-title" data-astro-cid-gkq7oefr>${tr.about.values}</h2> </div> <div class="values-grid" role="list" data-astro-cid-gkq7oefr> ${[
    { icon: "🎯", title: "Präzision", desc: "Jede Analyse basiert auf verifizierten Daten und nachvollziehbarer Methodik." },
    { icon: "🔒", title: "Integrität", desc: "Keine Interessenkonflikte. Klare Offenlegung von Kooperationen und potentiellen Interessenkonflikten." },
    { icon: "📚", title: "Bildung", desc: "Wir machen komplexe Krypto-Konzepte verständlich – ohne die Tiefe zu verlieren." },
    { icon: "🚀", title: "Innovation", desc: "Wir verfolgen die neuesten Entwicklungen im Krypto-Ökosystem für Sie." }
  ].map((v) => renderTemplate`<div class="value-card" role="listitem" data-astro-cid-gkq7oefr> <div class="value-icon" aria-hidden="true" data-astro-cid-gkq7oefr>${v.icon}</div> <h3 class="value-title" data-astro-cid-gkq7oefr>${v.title}</h3> <p class="value-desc" data-astro-cid-gkq7oefr>${v.desc}</p> </div>`)} </div> </div> </section>  <section class="section" aria-labelledby="team-heading" data-astro-cid-gkq7oefr> <div class="container" data-astro-cid-gkq7oefr> <div class="section-header" data-astro-cid-gkq7oefr> <p class="section-label" aria-hidden="true" data-astro-cid-gkq7oefr>👥 Team</p> <h2 id="team-heading" class="section-title" data-astro-cid-gkq7oefr>${tr.about.team}</h2> </div> <div class="team-grid" role="list" data-astro-cid-gkq7oefr> ${teamMembers.map((member) => renderTemplate`<div class="team-card" role="listitem" itemscope itemtype="https://schema.org/Person" data-astro-cid-gkq7oefr> <div class="team-avatar" aria-hidden="true" data-astro-cid-gkq7oefr>${member.avatar}</div> <h3 class="team-name" itemprop="name" data-astro-cid-gkq7oefr>${member.name}</h3> <p class="team-role" itemprop="jobTitle" data-astro-cid-gkq7oefr>${member.role}</p> <p class="team-bio" itemprop="description" data-astro-cid-gkq7oefr>${member.bio}</p> </div>`)} </div> </div> </section>  <section class="section cta-section" aria-label="Kontakt aufnehmen" data-astro-cid-gkq7oefr> <div class="container cta-inner" data-astro-cid-gkq7oefr> <h2 class="cta-title" data-astro-cid-gkq7oefr>Haben Sie Fragen?</h2> <p class="cta-subtitle" data-astro-cid-gkq7oefr>Wir freuen uns über Ihr Feedback, Ihre Geschichte oder Ihre Kooperationsanfragen.</p> <a href="/contact-us/" class="btn btn-primary" data-astro-cid-gkq7oefr>Kontakt aufnehmen</a> </div> </section> ` })}`;
}, "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/pages/about-us.astro", void 0);

const $$file = "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/pages/about-us.astro";
const $$url = "/about-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AboutUs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
