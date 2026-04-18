import { c as createComponent } from './astro-component_CeAmlBsb.mjs';
import 'piccolore';
import { j as createRenderInstruction, m as maybeRenderHead, a as addAttribute, r as renderTemplate, c as renderComponent, k as renderSlot, l as renderHead, u as unescapeHTML, d as Fragment } from './entrypoint_mb6Ro_Qb.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const siteConfig = {
  url: "https://krypto-watch.de",
  email: "redaktion@krypto-watch.de",
  twitter: "@kryptowatch_de",
  twitterHandle: "https://twitter.com/kryptowatch_de",
  telegram: "https://t.me/kryptowatch",
  linkedin: "https://linkedin.com/company/kryptowatch",
  postsPerPage: 12,
  ogImage: "/og-default.jpg",
  themeColor: "#0f172a"};
const navLinks = {
  de: [
    { label: "Blog", href: "/blog/" },
    { label: "Über uns", href: "/about-us/" },
    { label: "Kontakt", href: "/contact-us/" }
  ],
  en: [
    { label: "Blog", href: "/en/blog/" },
    { label: "About Us", href: "/en/about-us/" },
    { label: "Contact", href: "/en/contact-us/" }
  ]
};
const footerLinks = {
  de: [
    { label: "Datenschutz", href: "/privacy/" },
    { label: "AGB", href: "/terms/" },
    { label: "Sitemap", href: "/sitemap/" },
    { label: "Über uns", href: "/about-us/" }
  ],
  en: [
    { label: "Privacy Policy", href: "/en/privacy/" },
    { label: "Terms", href: "/en/terms/" },
    { label: "Sitemap", href: "/sitemap/" },
    { label: "About Us", href: "/en/about-us/" }
  ]
};
const socialLinks = [
  { name: "Twitter/X", href: "https://twitter.com/kryptowatch_de", icon: "twitter" },
  { name: "Telegram", href: "https://t.me/kryptowatch", icon: "telegram" },
  { name: "LinkedIn", href: "https://linkedin.com/company/kryptowatch", icon: "linkedin" }
];
const cryptoCategories = [
  { slug: "bitcoin", emoji: "₿", color: "#f7931a" },
  { slug: "ethereum", emoji: "Ξ", color: "#627eea" },
  { slug: "defi", emoji: "🔗", color: "#00d395" },
  { slug: "nfts", emoji: "🎨", color: "#a855f7" },
  { slug: "layer1", emoji: "⛓️", color: "#3b82f6" },
  { slug: "layer2", emoji: "⚡", color: "#eab308" },
  { slug: "altcoins", emoji: "🪙", color: "#ec4899" },
  { slug: "regulation", emoji: "⚖️", color: "#64748b" },
  { slug: "exchanges", emoji: "🏦", color: "#14b8a6" },
  { slug: "web3", emoji: "🌐", color: "#8b5cf6" }
];

const nav$1 = {"home":"Startseite","blog":"Blog","about":"Über uns","contact":"Kontakt","privacy":"Datenschutz","terms":"AGB","sitemap":"Sitemap"};
const hero$1 = {"badge":"🔥 Krypto-Intelligence-Plattform","title":"Krypto-Nachrichten die Sie","titleHighlight":"wirklich voranbringen","subtitle":"Tiefgehende Analysen, Marktdaten und Krypto-Intelligence für Bitcoin, Ethereum, DeFi und mehr – für informierte Anlageentscheidungen.","ctaPrimary":"Zum Blog","ctaSecondary":"Über uns"};
const sections$1 = {"latestNews":"Neueste Nachrichten","latestNewsSubtitle":"Aktuelle Entwicklungen aus der Kryptowelt","featuredAnalysis":"Featured Analysen","featuredAnalysisSubtitle":"Exklusive Einblicke von unseren Experten","marketCategories":"Marktbereiche","marketCategoriesSubtitle":"Erkunden Sie alle Segmente der Kryptowelt","howItWorks":"So funktioniert es","howItWorksSubtitle":"Unsere Plattform bringt Ihnen professionelle Krypto-Intelligence","marketData":"Marktdaten im Überblick","marketDataSubtitle":"Live-Indikatoren und Trendanalysen","faq":"Häufige Fragen","faqSubtitle":"Alles was Sie über Krypto-Intelligence wissen müssen","readMore":"Weiterlesen","viewAll":"Alle ansehen","minRead":"Min. Lesezeit","publishedOn":"Veröffentlicht am"};
const blog$1 = {"title":"Krypto Blog","subtitle":"Analysen, Nachrichten und Markteinblicke","filterBy":"Filtern nach","allCategories":"Alle Kategorien","searchPlaceholder":"Artikel suchen...","noResults":"Keine Artikel gefunden","newerPosts":"Neuere Artikel","olderPosts":"Ältere Artikel","page":"Seite","of":"von","relatedPosts":"Verwandte Artikel","sameCategory":"Weitere Artikel in dieser Kategorie","coinRelated":"Weitere Artikel zu"};
const about$1 = {"title":"Über KryptoWatch","subtitle":"Ihre vertrauenswürdige Quelle für Krypto-Intelligence","mission":"Unsere Mission","missionText":"KryptoWatch wurde gegründet, um privaten und institutionellen Anlegern gleichermaßen Zugang zu professioneller Krypto-Intelligence zu verschaffen. Wir kombinieren tiefgehende Marktanalyse mit verständlicher Aufbereitung – für fundierte Entscheidungen in einem volatilen Markt.","values":"Unsere Werte","team":"Unser Team"};
const contact$1 = {"title":"Kontakt","subtitle":"Schreiben Sie uns","name":"Ihr Name","email":"E-Mail-Adresse","message":"Ihre Nachricht","send":"Nachricht senden","sending":"Wird gesendet...","successTitle":"Nachricht gesendet!","successText":"Wir melden uns so bald wie möglich bei Ihnen.","errorText":"Fehler beim Senden. Bitte versuchen Sie es erneut.","fallbackEmail":"Alternativ können Sie uns direkt schreiben an:"};
const faq$1 = [{"q":"Was ist KryptoWatch?","a":"KryptoWatch ist eine Krypto-Intelligence-Plattform, die tiefgehende Analysen, Marktdaten und aktuelle Nachrichten zu Bitcoin, Ethereum, DeFi und dem gesamten Krypto-Ökosystem bietet."},{"q":"Für wen ist KryptoWatch geeignet?","a":"Unsere Plattform richtet sich an private Anleger, institutionelle Investoren, Entwickler und alle, die fundierte Entscheidungen im Kryptomarkt treffen möchten."},{"q":"Wie oft werden die Inhalte aktualisiert?","a":"Unser Redaktionsteam veröffentlicht täglich neue Analysen und Nachrichten. Marktdaten werden in Echtzeit aktualisiert."},{"q":"Sind die Inhalte kostenlos?","a":"Der Großteil unserer Inhalte ist kostenlos zugänglich. Premium-Analysen und exklusive Marktberichte sind für registrierte Nutzer verfügbar."},{"q":"Gibt es eine mobile App?","a":"Unsere Plattform ist vollständig für mobile Endgeräte optimiert. Eine native App ist in Entwicklung."},{"q":"Wie kann ich Krypto-Nachrichten abonnieren?","a":"Sie können unseren Newsletter abonnieren und erhalten täglich die wichtigsten Krypto-Informationen direkt in Ihr Postfach."}];
const categories$1 = {"bitcoin":"Bitcoin","ethereum":"Ethereum","defi":"DeFi","nfts":"NFTs","layer1":"Layer 1","layer2":"Layer 2","altcoins":"Altcoins","regulation":"Regulierung","exchanges":"Börsen","web3":"Web3"};
const howItWorks$1 = [{"step":"01","title":"Quellen überwachen","desc":"Wir aggregieren Daten aus Tausenden von Quellen – On-Chain-Daten, Nachrichten, Social Media und institutionelle Reports."},{"step":"02","title":"KI-Analyse","desc":"Unser System analysiert Trends, Sentimente und Marktbewegungen in Echtzeit für Sie auf."},{"step":"03","title":"Intelligence liefern","desc":"Sie erhalten präzise, umsetzbare Einblicke von unseren Experten – klar und verständlich aufbereitet."}];
const footer$1 = {"description":"KryptoWatch ist Ihre führende Plattform für Krypto-Intelligence. Professionelle Analysen, aktuelle Nachrichten und Marktdaten für fundierte Anlageentscheidungen.","copyright":"© 2025 KryptoWatch. Alle Rechte vorbehalten.","disclaimer":"Keine Anlageberatung. Alle Inhalte dienen ausschließlich Informationszwecken."};
const seo$1 = {"homeTitle":"KryptoWatch – Krypto-Intelligence & Marktanalysen","homeDesc":"Tiefgehende Krypto-Analysen, Marktdaten und Nachrichten zu Bitcoin, Ethereum, DeFi und mehr. Ihre professionelle Quelle für Krypto-Intelligence.","blogTitle":"Krypto Blog – Analysen & Markteinblicke | KryptoWatch","blogDesc":"Aktuelle Krypto-Artikel, Bitcoin-Analysen, DeFi-Nachrichten und Marktkommentare von erfahrenen Analysten.","aboutTitle":"Über KryptoWatch – Krypto-Intelligence-Plattform","aboutDesc":"Erfahren Sie mehr über KryptoWatch, unsere Mission, unser Team und wie wir Krypto-Intelligence für jeden zugänglich machen.","contactTitle":"Kontakt – KryptoWatch","contactDesc":"Nehmen Sie Kontakt mit dem KryptoWatch-Team auf. Wir freuen uns auf Ihre Nachricht.","privacyTitle":"Datenschutzerklärung – KryptoWatch","termsTitle":"Allgemeine Geschäftsbedingungen – KryptoWatch"};
const de = {
  nav: nav$1,
  hero: hero$1,
  sections: sections$1,
  blog: blog$1,
  about: about$1,
  contact: contact$1,
  faq: faq$1,
  categories: categories$1,
  howItWorks: howItWorks$1,
  footer: footer$1,
  seo: seo$1,
};

const nav = {"home":"Home","blog":"Blog","about":"About Us","contact":"Contact","privacy":"Privacy Policy","terms":"Terms","sitemap":"Sitemap"};
const hero = {"badge":"🔥 Crypto Intelligence Platform","title":"Crypto News That","titleHighlight":"Actually Move You Forward","subtitle":"In-depth analysis, market data and crypto intelligence for Bitcoin, Ethereum, DeFi and more – for informed investment decisions.","ctaPrimary":"Read the Blog","ctaSecondary":"About Us"};
const sections = {"latestNews":"Latest News","latestNewsSubtitle":"Current developments from the crypto world","featuredAnalysis":"Featured Analysis","featuredAnalysisSubtitle":"Exclusive insights from our experts","marketCategories":"Market Categories","marketCategoriesSubtitle":"Explore all segments of the crypto ecosystem","howItWorks":"How It Works","howItWorksSubtitle":"Our platform delivers professional crypto intelligence","marketData":"Market Overview","marketDataSubtitle":"Live indicators and trend analysis","faq":"Frequently Asked Questions","faqSubtitle":"Everything you need to know about crypto intelligence","readMore":"Read More","viewAll":"View All","minRead":"min read","publishedOn":"Published on"};
const blog = {"title":"Crypto Blog","subtitle":"Analysis, News and Market Insights","filterBy":"Filter by","allCategories":"All Categories","searchPlaceholder":"Search articles...","noResults":"No articles found","newerPosts":"Newer Posts","olderPosts":"Older Posts","page":"Page","of":"of","relatedPosts":"Related Posts","sameCategory":"More in this Category","coinRelated":"More Articles on"};
const about = {"title":"About KryptoWatch","subtitle":"Your Trusted Source for Crypto Intelligence","mission":"Our Mission","missionText":"KryptoWatch was founded to give retail and institutional investors alike access to professional crypto intelligence. We combine deep market analysis with clear presentation – for informed decisions in a volatile market.","values":"Our Values","team":"Our Team"};
const contact = {"title":"Contact Us","subtitle":"Get in Touch","name":"Your Name","email":"Email Address","message":"Your Message","send":"Send Message","sending":"Sending...","successTitle":"Message Sent!","successText":"We will get back to you as soon as possible.","errorText":"Error sending message. Please try again.","fallbackEmail":"Alternatively, you can email us directly at:"};
const faq = [{"q":"What is KryptoWatch?","a":"KryptoWatch is a crypto intelligence platform offering in-depth analysis, market data, and breaking news on Bitcoin, Ethereum, DeFi, and the broader crypto ecosystem."},{"q":"Who is KryptoWatch for?","a":"Our platform is aimed at retail investors, institutional players, developers, and anyone who wants to make informed decisions in the crypto market."},{"q":"How often is content updated?","a":"Our editorial team publishes new analyses and news daily. Market data is updated in real time."},{"q":"Is the content free?","a":"Most of our content is freely accessible. Premium analyses and exclusive market reports are available for registered users."},{"q":"Is there a mobile app?","a":"Our platform is fully optimized for mobile devices. A native app is in development."},{"q":"How can I subscribe to crypto news?","a":"You can subscribe to our newsletter and receive the most important crypto information directly in your inbox every day."}];
const categories = {"bitcoin":"Bitcoin","ethereum":"Ethereum","defi":"DeFi","nfts":"NFTs","layer1":"Layer 1","layer2":"Layer 2","altcoins":"Altcoins","regulation":"Regulation","exchanges":"Exchanges","web3":"Web3"};
const howItWorks = [{"step":"01","title":"Monitor Sources","desc":"We aggregate data from thousands of sources – on-chain data, news, social media, and institutional reports."},{"step":"02","title":"AI Analysis","desc":"Our system analyzes trends, sentiments, and market movements in real time on your behalf."},{"step":"03","title":"Deliver Intelligence","desc":"You receive precise, actionable insights from our experts – clearly and understandably presented."}];
const footer = {"description":"KryptoWatch is your leading platform for crypto intelligence. Professional analysis, breaking news and market data for informed investment decisions.","copyright":"© 2025 KryptoWatch. All rights reserved.","disclaimer":"Not investment advice. All content is for informational purposes only."};
const seo = {"homeTitle":"KryptoWatch – Crypto Intelligence & Market Analysis","homeDesc":"In-depth crypto analysis, market data and news on Bitcoin, Ethereum, DeFi and more. Your professional source for crypto intelligence.","blogTitle":"Crypto Blog – Analysis & Market Insights | KryptoWatch","blogDesc":"Current crypto articles, Bitcoin analysis, DeFi news and market commentary from experienced analysts.","aboutTitle":"About KryptoWatch – Crypto Intelligence Platform","aboutDesc":"Learn more about KryptoWatch, our mission, our team and how we make crypto intelligence accessible to everyone.","contactTitle":"Contact – KryptoWatch","contactDesc":"Get in touch with the KryptoWatch team. We look forward to hearing from you.","privacyTitle":"Privacy Policy – KryptoWatch","termsTitle":"Terms and Conditions – KryptoWatch"};
const en = {
  nav,
  hero,
  sections,
  blog,
  about,
  contact,
  faq,
  categories,
  howItWorks,
  footer,
  seo,
};

const defaultLocale = "de";
const translations = { de, en };
function getLocalizedUrl(path, locale) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return cleanPath;
  return `/en${cleanPath}`;
}
function t(locale) {
  return translations[locale] ?? translations[defaultLocale];
}
function getLangAttribute(locale) {
  return locale === "de" ? "de" : "en";
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  const { locale } = Astro2.props;
  const links = navLinks[locale];
  const altLocale = locale === "de" ? "en" : "de";
  const altPath = locale === "de" ? `/en${Astro2.url.pathname}` : Astro2.url.pathname.replace(/^\/en/, "") || "/";
  return renderTemplate`${maybeRenderHead()}<header class="header" id="site-header" role="banner" data-astro-cid-3ef6ksr2> <div class="header-inner container" data-astro-cid-3ef6ksr2> <!-- Logo --> <a${addAttribute(getLocalizedUrl("/", locale), "href")} class="header-logo" aria-label="KryptoWatch – Startseite" data-astro-cid-3ef6ksr2> <div class="logo-icon" aria-hidden="true" data-astro-cid-3ef6ksr2> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3ef6ksr2> <rect width="32" height="32" rx="8" fill="url(#logoGrad)" data-astro-cid-3ef6ksr2></rect> <path d="M10 22V10l6 4 6-4v12" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2></path> <path d="M16 14v8" stroke="white" stroke-width="2.5" stroke-linecap="round" data-astro-cid-3ef6ksr2></path> <defs data-astro-cid-3ef6ksr2> <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse" data-astro-cid-3ef6ksr2> <stop stop-color="#6366f1" data-astro-cid-3ef6ksr2></stop> <stop offset="1" stop-color="#4338ca" data-astro-cid-3ef6ksr2></stop> </linearGradient> </defs> </svg> </div> <span class="logo-text" data-astro-cid-3ef6ksr2>Krypto<span class="logo-accent" data-astro-cid-3ef6ksr2>Watch</span></span> </a> <!-- Desktop Nav --> <nav class="header-nav" aria-label="Hauptnavigation" data-astro-cid-3ef6ksr2> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`nav-link ${Astro2.url.pathname === link.href ? "nav-link--active" : ""}`, "class")} data-astro-cid-3ef6ksr2> ${link.label} </a>`)} </nav> <!-- Right actions --> <div class="header-actions" data-astro-cid-3ef6ksr2> <!-- Language switcher --> <a${addAttribute(altPath, "href")} class="lang-switch"${addAttribute(altLocale === "en" ? "Switch to English" : "Zu Deutsch wechseln", "aria-label")}${addAttribute(altLocale === "en" ? "English" : "Deutsch", "title")} data-astro-cid-3ef6ksr2> ${altLocale === "en" ? "🇬🇧 EN" : "🇩🇪 DE"} </a> <!-- CTA --> <a${addAttribute(getLocalizedUrl("/blog/", locale), "href")} class="btn btn-primary btn-sm hidden sm:inline-flex" data-astro-cid-3ef6ksr2> ${locale === "de" ? "Zum Blog" : "Read Blog"} </a> <!-- Hamburger --> <button id="menu-toggle" class="menu-toggle" aria-controls="mobile-menu" aria-expanded="false" aria-label="Menü öffnen" data-astro-cid-3ef6ksr2> <span class="hamburger-bar" data-astro-cid-3ef6ksr2></span> <span class="hamburger-bar" data-astro-cid-3ef6ksr2></span> <span class="hamburger-bar" data-astro-cid-3ef6ksr2></span> </button> </div> </div> <!-- Mobile menu backdrop --> <div id="menu-backdrop" class="menu-backdrop" aria-hidden="true" data-astro-cid-3ef6ksr2></div> <!-- Mobile menu --> <nav id="mobile-menu" class="mobile-menu" aria-label="Mobile Navigation" aria-hidden="true" role="dialog" data-astro-cid-3ef6ksr2> <div class="mobile-menu-header" data-astro-cid-3ef6ksr2> <span class="logo-text text-lg" data-astro-cid-3ef6ksr2>Krypto<span class="logo-accent" data-astro-cid-3ef6ksr2>Watch</span></span> <button id="menu-close" class="menu-close" aria-label="Menü schließen" data-astro-cid-3ef6ksr2> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" data-astro-cid-3ef6ksr2> <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> <ul class="mobile-nav-list" role="list" data-astro-cid-3ef6ksr2> ${links.map((link) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(link.href, "href")}${addAttribute(`mobile-nav-link ${Astro2.url.pathname === link.href ? "mobile-nav-link--active" : ""}`, "class")} data-astro-cid-3ef6ksr2> ${link.label} </a> </li>`)} <li data-astro-cid-3ef6ksr2> <a${addAttribute(altPath, "href")} class="mobile-nav-link lang-mobile" data-astro-cid-3ef6ksr2> ${altLocale === "en" ? "🇬🇧 English" : "🇩🇪 Deutsch"} </a> </li> </ul> </nav> </header>  ${renderScript($$result, "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Footer;
  const { locale } = Astro2.props;
  const tr = t(locale);
  const links = footerLinks[locale];
  const altLocale = locale === "de" ? "en" : "de";
  const altPath = locale === "de" ? `/en${Astro2.url.pathname}` : Astro2.url.pathname.replace(/^\/en/, "") || "/";
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer" role="contentinfo" data-astro-cid-sz7xmlte> <!-- Gradient separator --> <div class="footer-divider" aria-hidden="true" data-astro-cid-sz7xmlte></div> <div class="container" data-astro-cid-sz7xmlte> <div class="footer-grid" data-astro-cid-sz7xmlte> <!-- Brand column --> <div class="footer-brand" data-astro-cid-sz7xmlte> <a${addAttribute(locale === "de" ? "/" : "/en/", "href")} class="footer-logo" aria-label="KryptoWatch" data-astro-cid-sz7xmlte> <div class="logo-mark" aria-hidden="true" data-astro-cid-sz7xmlte> <svg width="36" height="36" viewBox="0 0 32 32" fill="none" data-astro-cid-sz7xmlte> <rect width="32" height="32" rx="8" fill="url(#fLogoGrad)" data-astro-cid-sz7xmlte></rect> <path d="M10 22V10l6 4 6-4v12" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sz7xmlte></path> <path d="M16 14v8" stroke="white" stroke-width="2.5" stroke-linecap="round" data-astro-cid-sz7xmlte></path> <defs data-astro-cid-sz7xmlte> <linearGradient id="fLogoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse" data-astro-cid-sz7xmlte> <stop stop-color="#6366f1" data-astro-cid-sz7xmlte></stop><stop offset="1" stop-color="#4338ca" data-astro-cid-sz7xmlte></stop> </linearGradient> </defs> </svg> </div> <span class="footer-logo-text" data-astro-cid-sz7xmlte>Krypto<span data-astro-cid-sz7xmlte>Watch</span></span> </a> <p class="footer-desc" data-astro-cid-sz7xmlte>${tr.footer.description}</p> <!-- Social links --> <div class="footer-socials" role="list" aria-label="Social Media Links" data-astro-cid-sz7xmlte> ${socialLinks.map((s) => renderTemplate`<a${addAttribute(s.href, "href")} class="social-link" target="_blank" rel="noopener noreferrer"${addAttribute(s.name, "aria-label")} role="listitem" data-astro-cid-sz7xmlte> ${s.icon === "twitter" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" data-astro-cid-sz7xmlte></path> </svg>`} ${s.icon === "telegram" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte> <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" data-astro-cid-sz7xmlte></path> </svg>`} ${s.icon === "linkedin" && renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-astro-cid-sz7xmlte></path> </svg>`} </a>`)} </div> </div> <!-- Quick links --> <div class="footer-col" data-astro-cid-sz7xmlte> <h3 class="footer-col-title" data-astro-cid-sz7xmlte>Navigation</h3> <nav aria-label="Footer Navigation" data-astro-cid-sz7xmlte> <ul class="footer-links" role="list" data-astro-cid-sz7xmlte> ${links.map((link) => renderTemplate`<li role="listitem" data-astro-cid-sz7xmlte> <a${addAttribute(link.href, "href")} class="footer-link" data-astro-cid-sz7xmlte>${link.label}</a> </li>`)} </ul> </nav> </div> <!-- Categories --> <div class="footer-col" data-astro-cid-sz7xmlte> <h3 class="footer-col-title" data-astro-cid-sz7xmlte>Kategorien</h3> <ul class="footer-links" role="list" data-astro-cid-sz7xmlte> <li role="listitem" data-astro-cid-sz7xmlte><a${addAttribute(locale === "de" ? "/blog/?cat=bitcoin" : "/en/blog/?cat=bitcoin", "href")} class="footer-link" data-astro-cid-sz7xmlte>₿ Bitcoin</a></li> <li role="listitem" data-astro-cid-sz7xmlte><a${addAttribute(locale === "de" ? "/blog/?cat=ethereum" : "/en/blog/?cat=ethereum", "href")} class="footer-link" data-astro-cid-sz7xmlte>Ξ Ethereum</a></li> <li role="listitem" data-astro-cid-sz7xmlte><a${addAttribute(locale === "de" ? "/blog/?cat=defi" : "/en/blog/?cat=defi", "href")} class="footer-link" data-astro-cid-sz7xmlte>🔗 DeFi</a></li> <li role="listitem" data-astro-cid-sz7xmlte><a${addAttribute(locale === "de" ? "/blog/?cat=altcoins" : "/en/blog/?cat=altcoins", "href")} class="footer-link" data-astro-cid-sz7xmlte>🪙 Altcoins</a></li> <li role="listitem" data-astro-cid-sz7xmlte><a${addAttribute(locale === "de" ? "/blog/?cat=regulation" : "/en/blog/?cat=regulation", "href")} class="footer-link" data-astro-cid-sz7xmlte>⚖️ ${locale === "de" ? "Regulierung" : "Regulation"}</a></li> </ul> </div> <!-- Newsletter --> <div class="footer-col" data-astro-cid-sz7xmlte> <h3 class="footer-col-title" data-astro-cid-sz7xmlte>${locale === "de" ? "Newsletter" : "Newsletter"}</h3> <p class="footer-newsletter-desc" data-astro-cid-sz7xmlte> ${locale === "de" ? "Täglich die wichtigsten Krypto-News in Ihrem Postfach." : "Daily top crypto news delivered to your inbox."} </p> <form class="newsletter-form" id="footer-newsletter" aria-label="Newsletter Anmeldung" data-astro-cid-sz7xmlte> <div class="newsletter-row" data-astro-cid-sz7xmlte> <input type="email" name="email"${addAttribute(locale === "de" ? "ihre@email.de" : "your@email.com", "placeholder")} class="form-input newsletter-input" required${addAttribute(locale === "de" ? "E-Mail-Adresse" : "Email Address", "aria-label")} data-astro-cid-sz7xmlte> <button type="submit" class="btn btn-primary newsletter-btn"${addAttribute(locale === "de" ? "Abonnieren" : "Subscribe", "aria-label")} data-astro-cid-sz7xmlte>
→
</button> </div> </form> <!-- Language switcher --> <div class="footer-lang" data-astro-cid-sz7xmlte> <span class="footer-lang-label" data-astro-cid-sz7xmlte>${locale === "de" ? "Sprache:" : "Language:"}</span> <a${addAttribute(altPath, "href")} class="footer-lang-link" data-astro-cid-sz7xmlte> ${altLocale === "en" ? "🇬🇧 English" : "🇩🇪 Deutsch"} </a> </div> </div> </div> <!-- Bottom bar --> <div class="footer-bottom" data-astro-cid-sz7xmlte> <p class="footer-copyright" data-astro-cid-sz7xmlte>${tr.footer.copyright.replace("2025", String(currentYear))}</p> <p class="footer-disclaimer" data-astro-cid-sz7xmlte>${tr.footer.disclaimer}</p> </div> </div> </footer>  ${renderScript($$result, "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/components/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description,
    canonical,
    ogImage = siteConfig.ogImage,
    robots = "index, follow",
    locale = "de",
    schema,
    breadcrumbs
  } = Astro2.props;
  const canonicalUrl = canonical ?? new URL(Astro2.url.pathname, siteConfig.url).href;
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : new URL(ogImage, siteConfig.url).href;
  const lang = getLangAttribute(locale);
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KryptoWatch",
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    sameAs: [
      siteConfig.twitterHandle,
      siteConfig.telegram,
      siteConfig.linkedin
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      contactType: "editorial"
    }
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "KryptoWatch",
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/blog/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: crumb.url
    }))
  } : null;
  const allSchemas = [
    orgSchema,
    websiteSchema,
    ...breadcrumbSchema ? [breadcrumbSchema] : [],
    ...schema ? Array.isArray(schema) ? schema : [schema] : []
  ];
  return renderTemplate(_a || (_a = __template(["<html", ' class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="IE=edge"><!-- Primary Meta --><title>', '</title><meta name="description"', '><meta name="robots"', '><link rel="canonical"', "><!-- Hreflang -->", '<!-- Open Graph --><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:locale"', '><meta property="og:site_name" content="KryptoWatch"><!-- Twitter Cards --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Theme --><meta name="theme-color"', '><meta name="color-scheme" content="dark"><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><!-- Sitemap --><link rel="sitemap" href="/sitemap-index.xml"><!-- JSON-LD --><script type="application/ld+json">', '<\/script><!-- Preconnect fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>', '</head> <body> <!-- Skip link --> <a href="#main-content" class="skip-link">Skip to content</a> ', ' <main id="main-content" tabindex="-1"> ', " </main> ", " </body></html>"])), addAttribute(lang, "lang"), title, addAttribute(description, "content"), addAttribute(robots, "content"), addAttribute(canonicalUrl, "href"), locale === "de" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<link rel="alternate" hreflang="de"${addAttribute(canonicalUrl, "href")}><link rel="alternate" hreflang="en"${addAttribute(new URL(`/en${Astro2.url.pathname}`, siteConfig.url).href, "href")}><link rel="alternate" hreflang="x-default"${addAttribute(canonicalUrl, "href")}>` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<link rel="alternate" hreflang="en"${addAttribute(canonicalUrl, "href")}><link rel="alternate" hreflang="de"${addAttribute(new URL(Astro2.url.pathname.replace(/^\/en/, "") || "/", siteConfig.url).href, "href")}><link rel="alternate" hreflang="x-default"${addAttribute(new URL(Astro2.url.pathname.replace(/^\/en/, "") || "/", siteConfig.url).href, "href")}>` })}`, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonicalUrl, "content"), addAttribute(ogImageUrl, "content"), addAttribute(locale === "de" ? "de_DE" : "en_US", "content"), addAttribute(siteConfig.twitter, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImageUrl, "content"), addAttribute(siteConfig.themeColor, "content"), unescapeHTML(JSON.stringify(allSchemas)), renderHead(), renderComponent($$result, "Header", $$Header, { "locale": locale }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "locale": locale }));
}, "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, cryptoCategories as c, renderScript as r, siteConfig as s, t };
