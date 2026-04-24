export const siteConfig = {
  name: 'KryptoWatch',
  domain: 'kryptowatch.de',
  url: 'https://kryptowatch.de',
  email: 'redaktion@kryptowatch.de',
  twitter: '@kryptowatch_de',
  twitterHandle: 'https://twitter.com/kryptowatch_de',
  github: 'https://github.com/kryptowatch',
  telegram: 'https://t.me/kryptowatch',
  linkedin: 'https://linkedin.com/company/kryptowatch',
  postsPerPage: 100,
  logo: '/logo.svg',
  ogImage: '/og-default.jpg',
  themeColor: '#0a0b10',
  locale: {
    de: 'de-DE',
    en: 'en-US',
  },
} as const;

export const navLinks = {
  de: [
    { label: 'RSI', href: '/rsi/btc/' },
    { label: 'Sentiment', href: '/sentiment/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Über uns', href: '/about-us/' },
    { label: 'Kontakt', href: '/contact-us/' },
  ],
  en: [
    { label: 'RSI', href: '/en/rsi/btc/' },
    { label: 'Sentiment', href: '/en/sentiment/' },
    { label: 'Blog', href: '/en/blog/' },
    { label: 'About Us', href: '/en/about-us/' },
    { label: 'Contact', href: '/en/contact-us/' },
  ],
} as const;

export const footerLinks = {
  de: [
    { label: 'Impressum', href: '/impressum/' },
    { label: 'Datenschutz', href: '/privacy/' },
    { label: 'AGB', href: '/terms/' },
    { label: 'Editorial Guidelines', href: '/editorial-guidelines/' },
    { label: 'Kontakt', href: '/contact-us/' },
    { label: 'Sitemap', href: '/sitemap/' },
    { label: 'Über uns', href: '/about-us/' },
  ],
  en: [
    { label: 'Imprint', href: '/en/impressum/' },
    { label: 'Privacy Policy', href: '/en/privacy/' },
    { label: 'Terms', href: '/en/terms/' },
    { label: 'Editorial Guidelines', href: '/en/editorial-guidelines/' },
    { label: 'Contact', href: '/en/contact-us/' },
    { label: 'Sitemap', href: '/sitemap/' },
    { label: 'About Us', href: '/en/about-us/' },
  ],
} as const;


export const socialLinks = [
  { name: 'Twitter/X', href: 'https://twitter.com/kryptowatch_de', icon: 'twitter' },
  { name: 'Telegram', href: 'https://t.me/kryptowatch', icon: 'telegram' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/kryptowatch', icon: 'linkedin' },
] as const;

export const cryptoCategories = [
  { slug: 'bitcoin', emoji: '₿', color: '#f7931a' },
  { slug: 'ethereum', emoji: 'Ξ', color: '#627eea' },
  { slug: 'defi', emoji: '🔗', color: '#00d395' },
  { slug: 'nfts', emoji: '🎨', color: '#a855f7' },
  { slug: 'layer1', emoji: '⛓️', color: '#3b82f6' },
  { slug: 'layer2', emoji: '⚡', color: '#eab308' },
  { slug: 'altcoins', emoji: '🪙', color: '#ec4899' },
  { slug: 'regulation', emoji: '⚖️', color: '#64748b' },
  { slug: 'exchanges', emoji: '🏦', color: '#14b8a6' },
  { slug: 'web3', emoji: '🌐', color: '#8b5cf6' },
  { slug: 'rsi', emoji: '📈', color: '#00f2ff' },
] as const;
