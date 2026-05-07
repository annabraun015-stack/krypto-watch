import { getCollection } from 'astro:content';
import { siteConfig } from '../config/site';

export async function GET() {
  const allPosts = await getCollection('blog', (p) => !p.data.draft && p.data.category.toLowerCase() === 'news');
  
  // Sort by date, newest first
  allPosts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  
  // Google News sitemaps shouldn't exceed 1,000 URLs
  const newsPosts = allPosts.slice(0, 1000);

  const xmlStr = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${newsPosts.map((post) => {
  const slug = post.id.replace(/^(de|en)\//, '').replace(/\.mdx?$/, '');
  const url = `${siteConfig.url}/${post.data.locale === 'de' ? '' : 'en/'}blog/${slug}/`;
  const pubDate = new Date(post.data.date).toISOString();
  return `  <url>
    <loc>${url}</loc>
    <news:news>
      <news:publication>
        <news:name>${siteConfig.name}</news:name>
        <news:language>${post.data.locale}</news:language>
      </news:publication>
      <news:publication_date>${pubDate}</news:publication_date>
      <news:title><![CDATA[${post.data.title}]]></news:title>
    </news:news>
  </url>`;
}).join('\n')}
</urlset>`;

  return new Response(xmlStr.trim(), {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, s-maxage=3600'
    }
  });
}
